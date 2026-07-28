<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * PHASE 2 - a copy of ClientsListTest, on purpose.
 *
 * §9 item 8 requires the cross-tenant assertions for EVERY resource, not just
 * the first one. Copying them is the point: a shared helper written now would be
 * an abstraction invented before Phase 3, and the duplication here is part of
 * what shows Phase 3 what to extract.
 */
final class RoutersListTest extends TestCase
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

    private function makeRouters(Tenant $tenant, int $count, string $prefix): void
    {
        $rows = [];

        for ($i = 0; $i < $count; $i++) {
            $rows[] = [
                'tenant_id' => $tenant->id,
                'name' => sprintf('%s-%03d', $prefix, $i),
                'ip_address' => sprintf('10.0.%d.1', $i),
                'model' => ['MikroTik CCR2004', 'Ubiquiti EdgeRouter'][$i % 2],
                'status' => ['online', 'degraded', 'offline'][$i % 3],
                'last_seen_at' => now()->subMinutes($i),
                'created_at' => now()->subMinutes($i),
                'updated_at' => now()->subMinutes($i),
            ];
        }

        DB::table('routers')->insert($rows);
    }

    public function test_it_lists_routers_for_the_acting_tenant(): void
    {
        $this->makeRouters($this->tenantA, 4, 'RTR-A');

        $this->actingAs($this->userA)
            ->get('/routers')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->component('ResourceIndex')->has('records', 4));
    }

    public function test_it_never_returns_another_tenants_routers(): void
    {
        $this->makeRouters($this->tenantA, 3, 'RTR-A');
        $this->makeRouters($this->tenantB, 7, 'RTR-B');

        $records = $this->actingAs($this->userA)->get('/routers')->assertOk()
            ->viewData('page')['props']['records'];

        $this->assertCount(3, $records);

        foreach ($records as $record) {
            $this->assertStringStartsWith('RTR-A', $record['name']);
        }
    }

    public function test_search_cannot_reach_across_tenants(): void
    {
        $this->makeRouters($this->tenantA, 3, 'RTR-A');
        $this->makeRouters($this->tenantB, 7, 'RTR-B');

        $records = $this->actingAs($this->userA)->get('/routers?search=RTR-B')->assertOk()
            ->viewData('page')['props']['records'];

        $this->assertSame([], $records);
    }

    /**
     * The model filter is validated against the values present for THIS tenant.
     * A crafted value must not become a probe for another tenant's inventory.
     */
    public function test_a_model_filter_from_another_tenant_is_rejected(): void
    {
        $this->makeRouters($this->tenantA, 2, 'RTR-A'); // CCR2004 + EdgeRouter

        DB::table('routers')->insert([
            'tenant_id' => $this->tenantB->id,
            'name' => 'RTR-B-secret',
            'ip_address' => '10.9.9.9',
            'model' => 'Cisco ASR9000',   // exists only in tenant B
            'status' => 'online',
            'last_seen_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $props = $this->actingAs($this->userA)
            ->get('/routers?model='.urlencode('Cisco ASR9000'))
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertNull($props['filters']['model'], 'A model not present in the acting tenant must be rejected.');
        $modelFilter = collect($props['filterSchema'])->firstWhere('key', 'model');
        $this->assertNotContains('Cisco ASR9000', $modelFilter['options']);
    }

    public function test_query_count_is_constant_regardless_of_row_count(): void
    {
        $this->makeRouters($this->tenantA, 5, 'RTR-S');
        $atFive = $this->countQueriesForIndex();

        DB::table('routers')->delete();
        $this->makeRouters($this->tenantA, 500, 'RTR-L');
        $atFiveHundred = $this->countQueriesForIndex();

        $this->assertSame(
            $atFive,
            $atFiveHundred,
            "Query count changed with row count ({$atFive} at 5, {$atFiveHundred} at 500) - an N+1 exists."
        );
    }

    public function test_initial_response_issues_no_count_query(): void
    {
        $this->makeRouters($this->tenantA, 10, 'RTR-A');

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
         */
        $queries = array_filter(
            $this->captureQueriesForIndex(),
            static fn (string $sql): bool => ! str_contains($sql, 'notifications'),
        );

        foreach ($queries as $sql) {
            $this->assertStringNotContainsStringIgnoringCase('count(', $sql, "Count query in list response: {$sql}");
        }
    }

    public function test_an_unknown_sort_column_falls_back_instead_of_reaching_sql(): void
    {
        $this->makeRouters($this->tenantA, 3, 'RTR-A');

        $this->actingAs($this->userA)
            ->get('/routers?sort='.urlencode('id; drop table routers--'))
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('sort', 'created_at'));

        $this->assertDatabaseCount('routers', 3);
    }

    public function test_it_filters_by_status(): void
    {
        $this->makeRouters($this->tenantA, 9, 'RTR-A');

        $records = $this->actingAs($this->userA)->get('/routers?status=offline')->assertOk()
            ->viewData('page')['props']['records'];

        $this->assertNotEmpty($records);

        foreach ($records as $record) {
            $this->assertSame('offline', $record['status']);
        }
    }

    public function test_keyset_pagination_walks_pages_without_gaps_or_repeats(): void
    {
        $this->makeRouters($this->tenantA, 120, 'RTR-A');

        $seen = [];
        $cursor = null;
        $guard = 0;

        do {
            $props = $this->actingAs($this->userA)
                ->get('/routers'.($cursor ? '?cursor='.urlencode($cursor) : ''))
                ->assertOk()->viewData('page')['props'];

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
        $this->get('/routers')->assertRedirect('/login');
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
        $this->actingAs($this->userA)->get('/routers');

        // The query LOG, not DB::listen. Registering a listener per call
        // accumulates them, so the second call records every query twice and the
        // resulting count is meaningless.
        DB::flushQueryLog();
        DB::enableQueryLog();

        $this->actingAs($this->userA)->get('/routers')->assertOk();

        return array_column(DB::getQueryLog(), 'query');
    }

    private function countQueriesForIndex(): int
    {
        return count($this->captureQueriesForIndex());
    }
}
