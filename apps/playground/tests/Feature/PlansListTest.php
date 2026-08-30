<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * PHASE 2 - the third copy.
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
                // numeric sort disagree - that is what the price sort test needs.
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
            ->assertInertia(fn ($page) => $page->component('ResourceIndex')->has('records', 5));
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
            "Query count changed with row count ({$atFive} at 5, {$atFiveHundred} at 500) - an N+1 exists."
        );
    }

    public function test_initial_response_issues_no_count_query(): void
    {
        $this->makePlans($this->tenantA, 10, 'Alpha');

        /*
         * The notifications table is EXEMPT, and named explicitly rather than
         * matched loosely.
         *
         * This guard is about the LIST query: a COUNT over a resource table is
         * unbounded, grows with the tenant, and is exactly what §10 forbids in
         * front of rows. The unread-badge count is a different shape - one
         * user's inbox, reached through the morph index, bounded by what that
         * person has been sent. Excluding it by name keeps the guard sharp;
         * broadening the pattern to "ignore counts we expect" would let a real
         * one back in.
         *
         * `tickets` IS THE SAME SHAPE. The header's quick-create menu asks
         * every creatable resource `can('create')`, on every page - Ticket's
         * own answer is rate-limited (`TicketPolicy::create()`), so it costs
         * one query, bounded by one person's own tickets in the last day, not
         * by tenant size.
         */
        $queries = array_filter(
            $this->captureQueriesForIndex(),
            static fn (string $sql): bool => ! str_contains($sql, 'notifications')
                && ! str_contains($sql, 'tickets'),
        );

        foreach ($queries as $sql) {
            $this->assertStringNotContainsStringIgnoringCase('count(', $sql, "Count query in list response: {$sql}");
        }
    }

    /**
     * The fallback is the table's DEFAULT sort, which is now `position`.
     *
     * Plans became reorderable, and declaring a reorder column makes it the
     * default ordering - dragging while sorted by anything else moves a row
     * somewhere the operator cannot see the effect of. So the fallback moved
     * with it.
     */
    public function test_an_unknown_sort_column_falls_back_instead_of_reaching_sql(): void
    {
        $this->makePlans($this->tenantA, 3, 'Alpha');

        $this->actingAs($this->userA)
            ->get('/plans?sort='.urlencode('id; drop table plans--'))
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('sort', 'position'));

        $this->assertDatabaseCount('plans', 3);
    }

    public function test_keyset_pagination_walks_pages_without_gaps_or_repeats(): void
    {
        $this->makePlans($this->tenantA, 120, 'Alpha');

        $seen = [];
        $cursor = null;
        $guard = 0;

        do {
            $props = $this->props('/plans'.($cursor ? '?cursor='.urlencode($cursor) : ''));

            foreach ($props['records'] as $record) {
                $seen[] = $record['id'];
            }

            $cursor = $props['nextCursor'];
        } while ($cursor !== null && ++$guard < 25);

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
        /*
         * A DISCARDED WARM-UP OF THE PAGE BEING MEASURED, for the same reason
         * `panel:benchmark` does one: the first call pays costs that are paid
         * ONCE, and this test compares two calls.
         *
         * actingAs reuses a single user instance across requests, so anything
         * lazy-loaded onto it - the tenant behind branding, and now the three
         * Spatie relations behind a permission check - is queried during the
         * first measurement and already in memory for the second. The counts
         * then differ by a fixed 3 for a reason that has nothing to do with row
         * count. Warming with /dashboard was not enough: it does not run the
         * same permission checks, so it left exactly those three unwarmed.
         *
         * THIS DOES NOT BLUNT THE GUARD. A real N+1 is proportional to rows and
         * is re-run on every request, warm or cold, so it still shows up as a
         * difference between the small and large row counts.
         */
        $this->actingAs($this->userA)->get('/plans');

        // The query LOG, not DB::listen. Registering a listener per call
        // accumulates them, so the second call records every query twice and the
        // resulting count is meaningless.
        DB::flushQueryLog();
        DB::enableQueryLog();

        $this->actingAs($this->userA)->get('/plans')->assertOk();

        return array_column(DB::getQueryLog(), 'query');
    }

    private function countQueriesForIndex(): int
    {
        return count($this->captureQueriesForIndex());
    }
}
