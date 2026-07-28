<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Controllers\DashboardController;
use App\Models\ClientSession;
use App\Models\Tenant;
use App\Models\User;
use DateTimeImmutable;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Widgets\Bucket;
use PanelKit\Panel\Widgets\DashboardFilters;
use PanelKit\Panel\Widgets\Period;
use PanelKit\Panel\Widgets\Rollup;
use PanelKit\Panel\Widgets\TimeSeries;
use ReflectionMethod;
use Tests\TestCase;

/**
 * Pre-aggregated time series.
 *
 * A rollup is a CACHE OF SOMETHING ALWAYS RECOMPUTABLE, so the only property
 * that matters is that it cannot disagree with the live query. Everything here
 * is written against that: each speed assertion is paired with an equality
 * assertion, because a fast chart showing the wrong number is not a faster
 * chart, it is a broken one.
 */
final class RollupTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    /** @var array<int|string, int> */
    private array $clients = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $this->actingAs(User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]));
    }

    /* ------------------------------------------------------- it must agree */

    /** THE HEADLINE CASE: rolled up and live produce the same series. */
    public function test_a_rolled_up_series_matches_the_live_one_exactly(): void
    {
        $this->sessionsOn('-5 days', 4);
        $this->sessionsOn('-3 days', 7);
        $this->sessionsOn('-1 day', 2);
        $this->sessionsOn('now', 3);

        $this->refresh();

        $this->assertSame(
            $this->values($this->live()->resolve(Period::Days30)),
            $this->values($this->rolled()->resolve(Period::Days30)),
        );
    }

    /**
     * TODAY IS NEVER STORED, so it must still be counted.
     *
     * This is the failure that makes people stop trusting a dashboard: the
     * chart is fast, yesterday is right, and today silently reads zero.
     */
    public function test_the_current_bucket_is_live_even_though_it_is_never_rolled_up(): void
    {
        $this->sessionsOn('-2 days', 5);
        $this->refresh();

        // Arrives AFTER the refresh - no job can have seen it.
        $this->sessionsOn('now', 6);

        $series = $this->rolled()->resolve(Period::Days30);
        $today = end($series['points']);

        $this->assertSame(6, $today['value'], 'Today must be counted live, not read as a stored zero.');
        $this->assertSame(11, $series['total']);
    }

    /** Nothing is written for a bucket that is still accumulating. */
    public function test_the_refresh_never_writes_the_current_bucket(): void
    {
        $this->sessionsOn('now', 9);
        $this->refresh();

        $this->assertDatabaseMissing('metric_rollups', [
            'period' => 'day',
            'bucket' => (new DateTimeImmutable)->format('Y-m-d'),
        ]);
    }

    /** Running the job twice must not double a day. */
    public function test_a_repeated_refresh_does_not_double_count(): void
    {
        $this->sessionsOn('-2 days', 8);

        $this->refresh();
        $before = $this->values($this->rolled()->resolve(Period::Days30));

        $this->refresh();
        $this->refresh();

        $this->assertSame($before, $this->values($this->rolled()->resolve(Period::Days30)));
        $this->assertSame(8, (int) DB::table('metric_rollups')
            ->where('metric', 'sessions.started')
            ->where('bucket', (new DateTimeImmutable('-2 days'))->format('Y-m-d'))
            ->where('tenant_id', $this->tenantA->id)
            ->value('value'));
    }

    /** A stale stored value is corrected, not kept, while still in range. */
    public function test_a_backdated_row_is_picked_up_by_the_next_refresh(): void
    {
        $this->sessionsOn('-1 day', 3);
        $this->refresh();

        $this->sessionsOn('-1 day', 4);
        $this->refresh();

        $series = $this->rolled()->resolve(Period::Days30);
        $yesterday = $series['points'][count($series['points']) - 2];

        $this->assertSame(7, $yesterday['value']);
    }

    /* -------------------------------------------------------- the zero gap */

    /**
     * An empty day is STORED AS ZERO, and that is what makes the cache work.
     *
     * A GROUP BY returns no row for a day with no rows, so "quiet" and "never
     * computed" look identical in the table - and the read path is obliged to
     * treat an absent bucket as uncomputed and scan for it. A metric with quiet
     * stretches would then fall back for every one of them, which is how a
     * 12-month chart spent 858 ms reading a table built to make it fast.
     */
    public function test_a_day_with_no_rows_is_stored_as_an_explicit_zero(): void
    {
        $this->sessionsOn('-5 days', 2);
        $this->refresh();

        $this->assertDatabaseHas('metric_rollups', [
            'tenant_id' => $this->tenantA->id,
            'period' => 'day',
            'bucket' => (new DateTimeImmutable('-4 days'))->format('Y-m-d'),
            'value' => 0,
        ]);
    }

    /** And a fully covered window then costs one read plus the current bucket. */
    public function test_a_covered_window_does_not_scan_the_source_table(): void
    {
        $this->sessionsOn('-5 days', 2);
        $this->refresh();

        DB::flushQueryLog();
        DB::enableQueryLog();
        $this->rolled()->resolve(Period::Days30);
        $queries = array_column(DB::getQueryLog(), 'query');
        DB::disableQueryLog();

        $scans = array_filter(
            $queries,
            static fn (string $sql): bool => str_contains($sql, 'client_sessions'),
        );

        $this->assertCount(
            1,
            $scans,
            'Only the current bucket may be scanned live: '.implode(' | ', $scans),
        );
    }

    /* ------------------------------------------------- coarse from fine */

    /**
     * A month is the sum of its days, so the current month is built from the
     * daily rollup rather than rescanned.
     *
     * The current bucket is never stored, which is correct - but on a monthly
     * chart that one gap is a whole month of rows, and it was the entire cost
     * of the view.
     */
    public function test_the_current_month_is_composed_from_stored_days(): void
    {
        $this->sessionsOn('-5 days', 4);
        $this->sessionsOn('-2 days', 6);
        $this->sessionsOn('now', 5);

        $this->refresh();

        $series = $this->rolled()->resolve(Period::Months12);
        $live = $this->live()->resolve(Period::Months12);

        $this->assertSame($this->values($live), $this->values($series));
        $this->assertSame(15, $series['total']);
    }

    /**
     * A HOLE IN THE MIDDLE MUST NOT BE SUMMED PAST.
     *
     * Composition is only valid over a contiguous prefix; adding up the days
     * either side of an uncomputed one gives a total that is quietly too small,
     * and a wrong number is worse than a slow one.
     */
    public function test_a_gap_in_the_daily_rollup_falls_back_instead_of_under_reporting(): void
    {
        $this->sessionsOn('-5 days', 4);
        $this->sessionsOn('-2 days', 6);
        $this->refresh();

        // Punch a hole, as a partial or interrupted refresh would.
        DB::table('metric_rollups')
            ->where('period', 'day')
            ->where('bucket', (new DateTimeImmutable('-2 days'))->format('Y-m-d'))
            ->delete();

        $this->assertSame(
            $this->values($this->live()->resolve(Period::Months12)),
            $this->values($this->rolled()->resolve(Period::Months12)),
        );
    }

    /* --------------------------------------------------------- the KPI strip */

    /**
     * THE STRIP MUST AGREE WITH A LIVE COUNT, window for window.
     *
     * It reads stored buckets plus today, so every window is a different mix of
     * cached and live - the exact place an off-by-one at the seam would show as
     * a plausible number nobody can check by eye.
     */
    public function test_every_window_in_the_strip_matches_a_live_count(): void
    {
        $this->sessionsOn('-40 days', 3);
        $this->sessionsOn('-8 days', 5);
        $this->sessionsOn('-3 days', 7);
        $this->sessionsOn('yesterday', 4);
        $this->sessionsOn('now', 6);

        $this->refresh();

        $strip = collect($this->strip())->keyBy('key');
        $startOfToday = (new DateTimeImmutable)->setTime(0, 0);
        $tomorrow = $startOfToday->modify('+1 day');

        $windows = [
            'today' => $startOfToday,
            'week' => $startOfToday->modify('-6 days'),
            'month' => $startOfToday->modify('first day of this month'),
            'quarter' => $startOfToday->modify('-89 days'),
        ];

        foreach ($windows as $key => $from) {
            $this->assertSame(
                (int) $this->live()->totalBetween($from, $tomorrow),
                $strip[$key]['value'],
                "The [{$key}] window disagrees with a live count.",
            );
        }
    }

    /** Today is never stored, so it must still arrive without a refresh. */
    public function test_the_strip_counts_today_without_waiting_for_a_refresh(): void
    {
        $this->sessionsOn('-2 days', 5);
        $this->refresh();

        $this->sessionsOn('now', 9);

        $strip = collect($this->strip())->keyBy('key');

        $this->assertSame(9, $strip['today']['value']);
        $this->assertSame(14, $strip['week']['value'], 'Today must be added to the stored days, not replace them.');
    }

    /**
     * A router filter bypasses the rollup entirely.
     *
     * Buckets are stored per tenant, so a filtered heading over unfiltered
     * numbers would not be stale - it would be wrong.
     */
    public function test_a_filtered_strip_does_not_read_the_tenant_wide_rollup(): void
    {
        $this->sessionsOn('-3 days', 8);
        $this->refresh();

        // A router with nothing on it: the honest answer is zero everywhere.
        $routerId = DB::table('routers')->insertGetId([
            'tenant_id' => $this->tenantA->id,
            'name' => 'Empty',
            'ip_address' => '10.0.0.1',
            'status' => 'online',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $strip = collect($this->strip(['routers' => (string) $routerId]))->keyBy('key');

        $this->assertSame(0, $strip['week']['value'], 'A filtered strip must not fall back to tenant-wide totals.');
    }

    /* ------------------------------------------------------------- the walls */

    /** Rollups are per tenant, and reading one must never sum another. */
    public function test_a_rollup_never_reads_another_tenants_buckets(): void
    {
        $this->sessionsOn('-3 days', 5);
        $this->sessionsOn('-3 days', 40, $this->tenantB);

        $this->refresh();

        $this->assertSame(5, $this->rolled()->resolve(Period::Days30)['total']);
    }

    /** The metric name reaches a WHERE clause, so it is validated. */
    public function test_an_injected_metric_name_is_rejected(): void
    {
        $this->expectException(\InvalidArgumentException::class);

        new Rollup("sessions' OR 1=1 --");
    }

    /** An hour is too fine to be worth storing, and must not silently be. */
    public function test_an_unsupported_granularity_is_not_pre_aggregated(): void
    {
        $this->assertTrue(Rollup::supports(Bucket::Day));
        $this->assertTrue(Rollup::supports(Bucket::Month));
        $this->assertFalse(Rollup::supports(Bucket::Hour));
    }

    /**
     * Only counts are pre-aggregated. A stored SUM would be right, but an
     * AVERAGE of averages is not the average - a rollup that is silently wrong
     * for one aggregate is worse than no rollup at all.
     */
    public function test_a_non_count_aggregate_ignores_the_rollup(): void
    {
        $this->sessionsOn('-3 days', 4);
        $this->refresh();

        // Poison the stored value: if the average path read it, it would show.
        DB::table('metric_rollups')->update(['value' => 999999]);

        $series = TimeSeries::of(ClientSession::query())
            ->timestamp('started_at')
            ->average('bytes_in')
            ->rollup('sessions.started', $this->tenantA->id)
            ->resolve(Period::Days30);

        $this->assertLessThan(999999, $series['total']);
    }

    /* ---------------------------------------------------------------- setup */

    private function rolled(): TimeSeries
    {
        return TimeSeries::of(ClientSession::query())
            ->timestamp('started_at')
            ->count()
            ->rollup('sessions.started', $this->tenantA->id);
    }

    private function live(): TimeSeries
    {
        return TimeSeries::of(ClientSession::query())->timestamp('started_at')->count();
    }

    /** @param array{points: array<int, array{value: int|float}>} $series */
    private function values(array $series): array
    {
        return array_column($series['points'], 'value');
    }

    /**
     * @param  array<string, string>  $query
     * @return list<array{key: string, label: string, value: int, caption: string}>
     */
    private function strip(array $query = []): array
    {
        $controller = new DashboardController;
        $method = new ReflectionMethod($controller, 'sessionStrip');
        $method->setAccessible(true);

        $now = new DateTimeImmutable;
        $request = Request::create('/', 'GET', $query);

        return $method->invoke(
            $controller,
            (string) $this->tenantA->id,
            $now,
            DashboardFilters::fromRequest($request, $now),
        );
    }

    private function refresh(): void
    {
        $this->artisan('panel:refresh-rollups', ['--backfill' => 400])->assertSuccessful();
        $this->artisan('panel:refresh-rollups', ['--backfill' => 400, '--period' => 'month'])->assertSuccessful();
    }

    private function sessionsOn(string $when, int $count, ?Tenant $tenant = null): void
    {
        $at = new DateTimeImmutable($when);
        $tenant ??= $this->tenantA;

        $clientId = $this->clients[$tenant->id] ??= DB::table('clients')->insertGetId([
            'tenant_id' => $tenant->id,
            'name' => "Client {$tenant->id}",
            'phone' => '0700000000',
            'access_code' => "AC-{$tenant->id}",
            'status' => 'active',
            'plan_type' => 'pppoe',
            'created_at' => $at->format('Y-m-d H:i:s'),
            'updated_at' => $at->format('Y-m-d H:i:s'),
        ]);

        for ($i = 0; $i < $count; $i++) {
            ClientSession::withoutGlobalScopes()->create([
                'tenant_id' => $tenant->id,
                'client_id' => $clientId,
                'status' => 'offline',
                'started_at' => $at->format('Y-m-d H:i:s'),
                'bytes_in' => 100,
                'bytes_out' => 50,
            ]);
        }
    }
}
