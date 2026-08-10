<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\Period;
use Alxtexh\Panel\Widgets\TimeSeries;
use DateTimeImmutable;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Counting rows into buckets and drawing a line through them.
 *
 * GAP-FILLING IS THE WHOLE FEATURE. A database returns rows only for buckets
 * that HAVE rows, so a week with no sign-ups on Tuesday comes back six points
 * long - and a chart drawn from that connects Monday straight to Wednesday,
 * showing a smooth line across a day when nothing happened. Every empty bucket
 * has to be materialised as a zero.
 *
 * IT IS ALSO WHERE THE PHP AND SQL SPELLINGS MUST AGREE. The walk happens in
 * PHP and looks each bucket up in what the database returned; if the two
 * formats disagree every lookup misses and the chart renders as all zeroes with
 * the data sitting right there. `BucketTest` pins the formats; this pins the
 * behaviour that depends on them.
 *
 * THE SERIES IS TENANT-SCOPED BECAUSE ITS QUERY IS. Nothing here adds a tenant
 * constraint - it inherits one from the builder it was handed, which is the
 * right layering and worth an assertion, because a chart is a place people
 * forget scoping applies.
 */
final class TimeSeriesTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        $user = User::create([
            'tenant_id' => $this->mine->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);
    }

    private function article(string $createdAt, ?Tenant $tenant = null): void
    {
        Article::withoutGlobalScopes()->create([
            'tenant_id' => ($tenant ?? $this->mine)->id,
            'title' => 'Row',
            'status' => 'draft',
            'created_at' => $createdAt,
            'updated_at' => $createdAt,
        ]);
    }

    private function series(): TimeSeries
    {
        return TimeSeries::of(Article::query())->timestamp('created_at')->count();
    }

    public function test_it_counts_rows_into_buckets(): void
    {
        $now = new DateTimeImmutable('2026-06-15 12:00:00');

        $this->article('2026-06-14 09:00:00');
        $this->article('2026-06-14 17:00:00');
        $this->article('2026-06-15 09:00:00');

        $result = $this->series()->resolve(Period::Days7, $now);

        /*
         * LABELS ARE FOR PEOPLE, NOT FOR SORTING - "14 Jun", not "2026-06-14".
         * Worth knowing before writing an assertion against them: they are a
         * display concern, and the ORDER of the points is what carries
         * chronology, not the strings.
         */
        $byLabel = array_column($result['points'], 'value', 'label');

        $this->assertSame(2, (int) ($byLabel['14 Jun'] ?? null));
        $this->assertSame(1, (int) ($byLabel['15 Jun'] ?? null));
        $this->assertSame(3, (int) $result['total']);
    }

    /**
     * A DAY WITH NOTHING IN IT IS A ZERO, NOT A MISSING POINT.
     *
     * Without this the chart connects the day before to the day after, drawing
     * a smooth line across a day on which nothing happened - which reads as
     * activity rather than as its absence.
     */
    public function test_empty_buckets_are_filled_with_zeroes(): void
    {
        $now = new DateTimeImmutable('2026-06-15 12:00:00');

        $this->article('2026-06-10 09:00:00');
        $this->article('2026-06-15 09:00:00');

        $result = $this->series()->resolve(Period::Days7, $now);

        $values = array_column($result['points'], 'value');

        $this->assertContains(0, array_map('intval', $values), 'No empty bucket was materialised.');

        $this->assertGreaterThanOrEqual(
            7,
            count($result['points']),
            'The series returned only the buckets that had rows.',
        );
    }

    /**
     * THE POINTS ARE IN ORDER AND EACH LABEL APPEARS ONCE.
     *
     * A duplicate or an out-of-order label draws a line that doubles back on
     * itself - visually obvious once, and easy to miss on a dense chart.
     */
    public function test_the_points_are_ordered_and_unique(): void
    {
        $now = new DateTimeImmutable('2026-06-15 12:00:00');

        $this->article('2026-06-11 09:00:00');
        $this->article('2026-06-13 09:00:00');

        $labels = array_column($this->series()->resolve(Period::Days7, $now)['points'], 'label');

        /*
         * ASSERTED AGAINST THE EXPECTED SEQUENCE, not against a sorted copy.
         * A lexical sort of display labels puts "10 Jun" before "9 Jun", so
         * sorting would fail on a series that is perfectly in order - which is
         * exactly what it did when this was first written.
         */
        $this->assertSame(
            ['9 Jun', '10 Jun', '11 Jun', '12 Jun', '13 Jun', '14 Jun', '15 Jun'],
            $labels,
            'The points came back out of chronological order.',
        );

        $this->assertSame($labels, array_values(array_unique($labels)), 'A bucket appeared twice.');
    }

    /**
     * ANOTHER ORGANISATION'S ROWS ARE NOT COUNTED.
     *
     * Inherited from the builder rather than added here, which is the right
     * layering - and worth asserting, because a chart is exactly where people
     * forget that scoping still applies.
     */
    public function test_it_counts_only_the_acting_tenants_rows(): void
    {
        $now = new DateTimeImmutable('2026-06-15 12:00:00');

        $this->article('2026-06-14 09:00:00');
        $this->article('2026-06-14 10:00:00', $this->theirs);

        $this->assertSame(
            1,
            (int) $this->series()->resolve(Period::Days7, $now)['total'],
            'A chart counted another organisation’s rows.',
        );
    }

    public function test_a_range_with_no_rows_is_all_zeroes_rather_than_empty(): void
    {
        $now = new DateTimeImmutable('2026-06-15 12:00:00');

        $result = $this->series()->resolve(Period::Days7, $now);

        $this->assertNotEmpty($result['points'], 'An empty range produced no chart at all.');
        $this->assertSame(0, (int) $result['total']);

        foreach ($result['points'] as $point) {
            $this->assertSame(0, (int) $point['value']);
        }
    }

    public function test_the_result_reports_its_period_and_bucket(): void
    {
        $now = new DateTimeImmutable('2026-06-15 12:00:00');

        $result = $this->series()->resolve(Period::Days7, $now);

        $this->assertSame(Period::Days7->value, $result['period']);
        $this->assertNotSame('', $result['bucket']);
    }

    /**
     * A SUM IS NOT A COUNT. Both are offered, and a widget that asked for one
     * and got the other is wrong in a way that still renders a plausible chart.
     */
    public function test_a_sum_totals_the_column_rather_than_the_rows(): void
    {
        $now = new DateTimeImmutable('2026-06-15 12:00:00');

        Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'A', 'status' => 'draft',
            'created_at' => '2026-06-14 09:00:00', 'updated_at' => '2026-06-14 09:00:00',
        ]);
        Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'B', 'status' => 'draft',
            'created_at' => '2026-06-14 10:00:00', 'updated_at' => '2026-06-14 10:00:00',
        ]);

        $counted = TimeSeries::of(Article::query())->timestamp('created_at')->count()
            ->resolve(Period::Days7, $now)['total'];

        $summed = TimeSeries::of(Article::query())->timestamp('created_at')->sum('id')
            ->resolve(Period::Days7, $now)['total'];

        $this->assertSame(2, (int) $counted);
        $this->assertGreaterThan($counted, (int) $summed, 'A sum returned the row count.');
    }
}
