<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use InvalidArgumentException;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Summarizer;
use PanelKit\Panel\Tables\Table;
use Tests\TestCase;

/**
 * Footer aggregates.
 *
 * The failure mode this guards is a number that LOOKS right: summing the ten
 * rows on screen gives a total that changes when you turn the page, which is
 * worse than showing nothing because it reads as authoritative.
 */
final class SummarizerTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    /* ------------------------------------------------------------ the maths */

    /**
     * THE HEADLINE CASE. More rows than a page, and the total covers all of
     * them.
     */
    public function test_a_sum_covers_the_whole_set_not_the_page(): void
    {
        // 30 rows at 1000 cents each; the page holds 10.
        $this->plans($this->tenantA, 30, 1000);

        $summary = $this->summarise([]);

        $this->assertSame(30_000.0, $summary['price'], 'The footer must total every matching row.');
    }

    public function test_a_sum_follows_the_filters(): void
    {
        $this->plans($this->tenantA, 10, 1000, 'Gold');
        $this->plans($this->tenantA, 5, 2000, 'Bronze');

        // 10 x 1000 and 5 x 2000 — the same subtotal by different routes, which
        // is what makes the "follows the filter" assertion meaningful.
        $this->assertSame(10_000.0, $this->summarise(['search' => 'Gold'])['price']);
        $this->assertSame(10_000.0, $this->summarise(['search' => 'Bronze'])['price']);
        $this->assertSame(20_000.0, $this->summarise([])['price']);
    }

    public function test_an_average_is_the_mean_of_the_matching_rows(): void
    {
        $this->plans($this->tenantA, 2, 1000);
        $this->plans($this->tenantA, 2, 3000);

        $this->assertSame(2000.0, $this->summarise([])['price_avg']);
    }

    /**
     * Null is a real answer, not zero. An average over nothing is undefined,
     * and printing 0 would assert something false.
     */
    public function test_an_empty_set_summarises_to_null_not_zero(): void
    {
        $summary = $this->summarise(['search' => 'NothingMatchesThis']);

        $this->assertNull($summary['price']);
        $this->assertNull($summary['price_avg']);
    }

    /* ------------------------------------------------------------ the walls */

    /** Tenant-scoped like everything else — the aggregate runs through it. */
    public function test_a_summary_never_includes_another_tenants_rows(): void
    {
        $this->plans($this->tenantA, 3, 1000);
        $this->plans($this->tenantB, 100, 9999);

        $this->assertSame(3000.0, $this->summarise([])['price']);
    }

    /** The column is interpolated into a SELECT, so it is validated. */
    public function test_an_injected_column_is_rejected(): void
    {
        $this->expectException(InvalidArgumentException::class);

        Summarizer::sum(column: 'price_cents) FROM users WHERE (1=1');
    }

    /** A zero divisor would render as INF in a total column. */
    public function test_a_zero_divisor_is_rejected(): void
    {
        $this->expectException(InvalidArgumentException::class);

        Summarizer::sum(column: 'price_cents', divideBy: 0);
    }

    /* ------------------------------------------------------------ the cost */

    /**
     * N summarised columns must be ONE query.
     *
     * The naive version runs a query per column, which is the same N+1 shape as
     * counting tabs one at a time — invisible at two columns and a full extra
     * scan each at five.
     */
    public function test_every_aggregate_comes_from_one_query(): void
    {
        $this->plans($this->tenantA, 10, 1000);

        $result = $this->table()->toListQuery(Plan::class)->run(Request::create('/', 'GET'));

        DB::flushQueryLog();
        DB::enableQueryLog();
        ($result->summary)();
        $queries = DB::getQueryLog();
        DB::disableQueryLog();

        $this->assertCount(1, $queries, 'Three aggregates must not be three scans.');
    }

    /**
     * And it never blocks the rows — §10 forbids an aggregate in front of a
     * page as firmly as it forbids a count.
     */
    public function test_the_list_response_does_not_compute_the_summary(): void
    {
        $this->plans($this->tenantA, 10, 1000);

        DB::enableQueryLog();
        $this->get('/plans')->assertOk();
        $queries = array_column(DB::getQueryLog(), 'query');
        DB::disableQueryLog();

        foreach ($queries as $sql) {
            $this->assertStringNotContainsStringIgnoringCase(
                'sum(',
                $sql,
                "A footer aggregate ran during first paint: {$sql}",
            );
        }
    }

    /* ---------------------------------------------------------- the schema */

    public function test_the_schema_describes_the_aggregate_without_running_it(): void
    {
        DB::enableQueryLog();
        $columns = $this->table()->toSchema()['columns'];
        $queries = DB::getQueryLog();
        DB::disableQueryLog();

        $this->assertCount(0, $queries);

        $price = collect($columns)->firstWhere('key', 'price');

        $this->assertSame('sum', $price['summary']['kind']);
        $this->assertSame('Total', $price['summary']['label']);
        $this->assertSame(100.0, $price['summary']['divideBy']);
    }

    /* ---------------------------------------------------------------- setup */

    /**
     * @param  array<string, mixed>  $query
     * @return array<string, float|null>
     */
    private function summarise(array $query): array
    {
        $result = $this->table()->toListQuery(Plan::class)->run(Request::create('/', 'GET', $query));

        return ($result->summary)();
    }

    private function table(): Table
    {
        return Table::make()
            ->columns([
                TextColumn::make('name')->from('plans.name')->sortable()->searchable(),
                TextColumn::make('price')->from('plans.price_cents')
                    ->summarize(Summarizer::sum(label: 'Total', divideBy: 100, decimals: 2)),
                TextColumn::make('price_avg')->from('plans.price_cents')
                    ->summarize(Summarizer::average(label: 'Average')),
                TextColumn::make('speed_mbps')->from('plans.speed_mbps')
                    ->summarize(Summarizer::max(label: 'Fastest')),
            ])
            ->keyColumn('plans.id')
            ->alsoSelect(['plans.id'])
            ->defaultSort('name', 'asc');
    }

    private function plans(Tenant $tenant, int $count, int $cents, string $prefix = 'Plan'): void
    {
        for ($i = 0; $i < $count; $i++) {
            Plan::withoutGlobalScopes()->create([
                'tenant_id' => $tenant->id,
                'name' => "{$prefix} " . uniqid(),
                'speed_mbps' => 10 + $i,
                'price_cents' => $cents,
            ]);
        }
    }
}
