<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * PHASE 2 — the third copy.
 *
 * Beyond the shared cross-tenant and N+1 guards, this file pins the two things
 * Plans has that the other screens do not: a THREE-state boolean filter, and a
 * computed column that sorts by a different key than it displays. Both are the
 * traps an abstraction generalised from Clients + Routers alone would fall into.
 */
final class PlansListTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $userA;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'Tenant A', 'slug' => 'tenant-a']);
        $this->tenantB = Tenant::create(['name' => 'Tenant B', 'slug' => 'tenant-b']);
        $this->userA = User::factory()->create(['tenant_id' => $this->tenantA->id, 'email_verified_at' => now()]);
    }

    private function makePlans(Tenant $tenant, int $count, string $prefix): void
    {
        $rows = [];

        for ($i = 0; $i < $count; $i++) {
            $rows[] = [
                'tenant_id' => $tenant->id,
                'name' => sprintf('%s %03d', $prefix, $i),
                'speed_mbps' => [5, 10, 20, 40, 100][$i % 5],
                // Deliberately spans the 4-digit boundary so a string sort and a
                // numeric sort disagree — that is what the price sort test needs.
                'price_cents' => [90000, 100000, 5000, 1200000, 30000][$i % 5],
                'is_active' => $i % 3 !== 0,
                'created_at' => now()->subMinutes($i),
                'updated_at' => now()->subMinutes($i),
            ];
        }

        DB::table('plans')->insert($rows);
    }

    public function test_it_lists_plans_for_the_acting_tenant(): void
    {
        $this->makePlans($this->tenantA, 5, 'Alpha');

        $this->actingAs($this->userA)
            ->get('/plans')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->component('Plans/Index')->has('records', 5));
    }

    public function test_it_never_returns_another_tenants_plans(): void
    {
        $this->makePlans($this->tenantA, 3, 'Alpha');
        $this->makePlans($this->tenantB, 7, 'Bravo');

        $records = $this->actingAs($this->userA)->get('/plans')->assertOk()
            ->viewData('page')['props']['records'];

        $this->assertCount(3, $records);

        foreach ($records as $record) {
            $this->assertStringStartsWith('Alpha', $record['name']);
        }
    }

    public function test_search_cannot_reach_across_tenants(): void
    {
        $this->makePlans($this->tenantA, 3, 'Alpha');
        $this->makePlans($this->tenantB, 7, 'Bravo');

        $records = $this->actingAs($this->userA)->get('/plans?search=Bravo')->assertOk()
            ->viewData('page')['props']['records'];

        $this->assertSame([], $records);
    }

    /**
     * The three-state boolean. Absent, true and false are all distinct, and
     * collapsing false into absent is the bug this exists to catch.
     */
    public function test_the_active_filter_has_three_distinct_states(): void
    {
        $this->makePlans($this->tenantA, 9, 'Alpha'); // is_active false when i % 3 === 0

        $all = $this->props('/plans');
        $this->assertNull($all['filters']['active']);
        $this->assertCount(9, $all['records']);

        $active = $this->props('/plans?active=1');
        $this->assertTrue($active['filters']['active']);
        $this->assertCount(6, $active['records']);
        foreach ($active['records'] as $record) {
            $this->assertTrue($record['is_active']);
        }

        $inactive = $this->props('/plans?active=0');
        $this->assertFalse(
            $inactive['filters']['active'],
            'active=0 must mean "only inactive", not "no filter".'
        );
        $this->assertCount(3, $inactive['records']);
        foreach ($inactive['records'] as $record) {
            $this->assertFalse($record['is_active']);
        }
    }

    /**
     * `price` is computed and displayed as a formatted string, but must sort by
     * the underlying integer cents. A string sort would put 12,000.00 before
     * 900.00.
     */
    public function test_price_sorts_numerically_not_lexicographically(): void
    {
        $this->makePlans($this->tenantA, 5, 'Alpha');

        $records = $this->props('/plans?sort=price_cents&direction=asc')['records'];

        $cents = array_column($records, 'price_cents');
        $sorted = $cents;
        sort($sorted, SORT_NUMERIC);

        $this->assertSame($sorted, $cents);
        $this->assertSame(5000, $cents[0], 'Cheapest plan must come first under an ascending numeric sort.');
    }

    public function test_the_computed_price_column_is_present_and_formatted(): void
    {
        $this->makePlans($this->tenantA, 1, 'Alpha');

        $record = $this->props('/plans')['records'][0];

        $this->assertArrayHasKey('price', $record);
        $this->assertSame(number_format($record['price_cents'] / 100, 2), $record['price']);
    }

    public function test_query_count_is_constant_regardless_of_row_count(): void
    {
        $this->makePlans($this->tenantA, 5, 'Small');
        $atFive = $this->countQueriesForIndex();

        DB::table('plans')->delete();
        $this->makePlans($this->tenantA, 500, 'Large');
        $atFiveHundred = $this->countQueriesForIndex();

        $this->assertSame(
            $atFive,
            $atFiveHundred,
            "Query count changed with row count ({$atFive} at 5, {$atFiveHundred} at 500) — an N+1 exists."
        );
    }

    public function test_initial_response_issues_no_count_query(): void
    {
        $this->makePlans($this->tenantA, 10, 'Alpha');

        foreach ($this->captureQueriesForIndex() as $sql) {
            $this->assertStringNotContainsStringIgnoringCase('count(', $sql, "Count query in list response: {$sql}");
        }
    }

    public function test_an_unknown_sort_column_falls_back_instead_of_reaching_sql(): void
    {
        $this->makePlans($this->tenantA, 3, 'Alpha');

        $this->actingAs($this->userA)
            ->get('/plans?sort=' . urlencode('id; drop table plans--'))
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('filters.sort', 'created_at'));

        $this->assertDatabaseCount('plans', 3);
    }

    public function test_keyset_pagination_walks_pages_without_gaps_or_repeats(): void
    {
        $this->makePlans($this->tenantA, 120, 'Alpha');

        $seen = [];
        $cursor = null;
        $guard = 0;

        do {
            $props = $this->props('/plans' . ($cursor ? '?cursor=' . urlencode($cursor) : ''));

            foreach ($props['records'] as $record) {
                $seen[] = $record['id'];
            }

            $cursor = $props['nextCursor'];
        } while ($cursor !== null && ++$guard < 10);

        $this->assertCount(120, $seen);
        $this->assertSame(count($seen), count(array_unique($seen)));
    }

    public function test_guests_cannot_read_the_list(): void
    {
        $this->get('/plans')->assertRedirect('/login');
    }

    /** @return array<string, mixed> */
    private function props(string $url): array
    {
        return $this->actingAs($this->userA)->get($url)->assertOk()->viewData('page')['props'];
    }

    /** @return list<string> */
    private function captureQueriesForIndex(): array
    {
        $queries = [];

        DB::flushQueryLog();
        DB::listen(function ($query) use (&$queries): void {
            $queries[] = $query->sql;
        });

        $this->actingAs($this->userA)->get('/plans')->assertOk();

        return $queries;
    }

    private function countQueriesForIndex(): int
    {
        return count($this->captureQueriesForIndex());
    }
}
