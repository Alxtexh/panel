<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * Correctness guards for the Phase 1 clients list.
 *
 * These run on in-memory SQLite with a small fixture. The 500k-row timing budget
 * is a different concern and lives in Performance/ClientsPerformanceTest.
 */
final class ClientsListTest extends TestCase
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

        $this->userA = User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]);
    }

    private function makeClients(Tenant $tenant, int $count, string $prefix = 'Client'): void
    {
        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'name' => "{$prefix} Plan",
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $rows = [];

        for ($i = 0; $i < $count; $i++) {
            $rows[] = [
                'tenant_id' => $tenant->id,
                'plan_id' => $plan->id,
                'name' => sprintf('%s %04d', $prefix, $i),
                'phone' => '+2547' . str_pad((string) $i, 8, '0', STR_PAD_LEFT),
                'access_code' => strtoupper($prefix[0]) . str_pad((string) $i, 6, '0', STR_PAD_LEFT),
                'status' => ['active', 'expired', 'suspended'][$i % 3],
                'plan_type' => ['pppoe', 'hotspot', 'static'][$i % 3],
                'expiry_date' => now()->addDays($i % 90),
                'created_at' => now()->subMinutes($i),
                'updated_at' => now()->subMinutes($i),
            ];
        }

        foreach (array_chunk($rows, 500) as $chunk) {
            DB::table('clients')->insert($chunk);
        }
    }

    public function test_it_lists_clients_for_the_acting_tenant(): void
    {
        $this->makeClients($this->tenantA, 5, 'Alpha');

        $this->actingAs($this->userA)
            ->get('/clients')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Clients/Index')
                ->has('records', 5)
                ->where('records.0.plan_name', 'Alpha Plan')
            );
    }

    /**
     * The single most important test in the suite (spec §9 item 8).
     *
     * Tenant B's rows must be unreachable, and unreachable because of the global
     * scope rather than because the controller happened to remember a `where`.
     */
    public function test_it_never_returns_another_tenants_clients(): void
    {
        $this->makeClients($this->tenantA, 3, 'Alpha');
        $this->makeClients($this->tenantB, 7, 'Bravo');

        $response = $this->actingAs($this->userA)->get('/clients')->assertOk();

        $records = $response->viewData('page')['props']['records'];

        $this->assertCount(3, $records);

        foreach ($records as $record) {
            $this->assertStringStartsWith('Alpha', $record['name']);
        }
    }

    public function test_search_cannot_reach_across_tenants(): void
    {
        $this->makeClients($this->tenantA, 3, 'Alpha');
        $this->makeClients($this->tenantB, 7, 'Bravo');

        $response = $this->actingAs($this->userA)
            ->get('/clients?search=Bravo')
            ->assertOk();

        $this->assertSame([], $response->viewData('page')['props']['records']);
    }

    /**
     * §10: "One query per list request, plus one per eager-loaded relation.
     * Queries per list request: constant. Never proportional to row count."
     *
     * Comparing the count at two row counts is what catches an N+1 — an absolute
     * number would drift as the app grows and stop meaning anything.
     */
    public function test_query_count_is_constant_regardless_of_row_count(): void
    {
        $this->makeClients($this->tenantA, 10, 'Small');
        $atTen = $this->countQueriesForIndex();

        DB::table('clients')->delete();
        $this->makeClients($this->tenantA, 1000, 'Large');
        $atThousand = $this->countQueriesForIndex();

        $this->assertSame(
            $atTen,
            $atThousand,
            "Query count changed with row count ({$atTen} at 10 rows, {$atThousand} at 1000) — an N+1 exists."
        );
    }

    /**
     * §10: "Never block a list response on COUNT(*)."
     *
     * The total is a deferred prop, so the initial response must not contain a
     * count against the base table. It arrives on the follow-up request instead.
     */
    public function test_initial_response_issues_no_count_query(): void
    {
        $this->makeClients($this->tenantA, 20, 'Alpha');

        $queries = $this->captureQueriesForIndex();

        foreach ($queries as $sql) {
            $this->assertStringNotContainsStringIgnoringCase(
                'count(',
                $sql,
                "The initial list response ran a count query, which §10 forbids: {$sql}"
            );
        }
    }

    public function test_the_deferred_total_resolves_on_a_partial_reload(): void
    {
        $this->makeClients($this->tenantA, 12, 'Alpha');

        $this->actingAs($this->userA)
            ->get('/clients', [
                'X-Inertia' => 'true',
                // Must match the running asset version, or Inertia answers 409
                // and asks the client to hard-reload rather than serving props.
                // The version is the manifest hash computed by the middleware —
                // Inertia::getVersion() is empty outside a request lifecycle.
                'X-Inertia-Version' => (string) (new HandleInertiaRequests())->version(request()),
                'X-Inertia-Partial-Component' => 'Clients/Index',
                'X-Inertia-Partial-Data' => 'total',
            ])
            ->assertOk()
            ->assertJsonPath('props.total', 12);
    }

    /**
     * The sort column is interpolated into ORDER BY, where no binding can protect
     * it. The allowlist is the defence, so it needs a test.
     */
    public function test_an_unknown_sort_column_falls_back_instead_of_reaching_sql(): void
    {
        $this->makeClients($this->tenantA, 3, 'Alpha');

        $this->actingAs($this->userA)
            ->get('/clients?sort=' . urlencode('id; drop table clients--'))
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('sort', 'created_at'));

        $this->assertDatabaseCount('clients', 3);
    }

    public function test_an_unknown_status_filter_is_ignored(): void
    {
        $this->makeClients($this->tenantA, 6, 'Alpha');

        $this->actingAs($this->userA)
            ->get('/clients?status=not-a-status')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('filters.status', null)->has('records', 6));
    }

    public function test_it_filters_by_status(): void
    {
        $this->makeClients($this->tenantA, 9, 'Alpha');

        $response = $this->actingAs($this->userA)->get('/clients?status=active')->assertOk();

        $records = $response->viewData('page')['props']['records'];

        $this->assertNotEmpty($records);

        foreach ($records as $record) {
            $this->assertSame('active', $record['status']);
        }
    }

    public function test_it_sorts_by_name_ascending(): void
    {
        $this->makeClients($this->tenantA, 5, 'Alpha');

        $response = $this->actingAs($this->userA)
            ->get('/clients?sort=name&direction=asc')
            ->assertOk();

        $names = array_column($response->viewData('page')['props']['records'], 'name');
        $sorted = $names;
        sort($sorted);

        $this->assertSame($sorted, $names);
    }

    /**
     * Keyset pagination must not repeat or drop a row across the page boundary,
     * which is exactly what happens when the sort has no unique tiebreaker.
     */
    public function test_keyset_pagination_walks_pages_without_gaps_or_repeats(): void
    {
        $this->makeClients($this->tenantA, 120, 'Alpha');

        $seen = [];
        $cursor = null;
        $guard = 0;

        do {
            $url = '/clients' . ($cursor ? '?cursor=' . urlencode($cursor) : '');
            $props = $this->actingAs($this->userA)->get($url)->assertOk()
                ->viewData('page')['props'];

            foreach ($props['records'] as $record) {
                $seen[] = $record['id'];
            }

            $cursor = $props['nextCursor'];
        } while ($cursor !== null && ++$guard < 25);

        $this->assertCount(120, $seen, 'Keyset pagination did not return every row exactly once.');
        $this->assertSame(count($seen), count(array_unique($seen)), 'Keyset pagination repeated a row.');
    }

    /**
     * §10 keeps page size on an allowlist rather than clamping it. Without that,
     * `?perPage=100000` is a supported way to pull an entire tenant table in one
     * request — a performance problem and an exfiltration path at the same time.
     */
    public function test_an_out_of_range_per_page_falls_back_to_the_default(): void
    {
        $this->makeClients($this->tenantA, 120, 'Alpha');

        $props = $this->actingAs($this->userA)->get('/clients?perPage=100000')->assertOk()
            ->viewData('page')['props'];

        $this->assertSame(10, $props['perPage']);
        $this->assertCount(10, $props['records']);
    }

    public function test_an_allowlisted_per_page_is_honoured(): void
    {
        $this->makeClients($this->tenantA, 120, 'Alpha');

        $props = $this->actingAs($this->userA)->get('/clients?perPage=25')->assertOk()
            ->viewData('page')['props'];

        $this->assertSame(25, $props['perPage']);
        $this->assertCount(25, $props['records']);
    }

    /**
     * Regression: prefix-only search silently returned ZERO for a surname.
     *
     * Names are stored "Amina Achieng", so `LIKE 'Achieng%'` matched nothing
     * while the endpoint returned 200 and an empty table. An operator reads that
     * as "no such customer" — the exact silent-success failure antipatterns.md
     * opens with.
     */
    public function test_search_matches_the_start_of_any_word_not_just_the_value(): void
    {
        DB::table('clients')->insert([
            'tenant_id' => $this->tenantA->id,
            'name' => 'Amina Achieng',
            'phone' => '+254700000001',
            'access_code' => 'AA0001',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $byFirstName = $this->actingAs($this->userA)->get('/clients?search=Amina')->assertOk()
            ->viewData('page')['props']['records'];
        $this->assertCount(1, $byFirstName);

        $bySurname = $this->actingAs($this->userA)->get('/clients?search=Achieng')->assertOk()
            ->viewData('page')['props']['records'];
        $this->assertCount(1, $bySurname, 'Searching a surname must find the record.');
    }

    public function test_search_still_does_not_match_mid_word(): void
    {
        $this->makeClients($this->tenantA, 1, 'Alpha');

        // "lph" is inside "Alpha" but starts no word. Matching it would require
        // a leading wildcard, which is unbounded — that is a trigram/FTS
        // decision, not something to fake with LIKE.
        $records = $this->actingAs($this->userA)->get('/clients?search=lph')->assertOk()
            ->viewData('page')['props']['records'];

        $this->assertSame([], $records);
    }

    /**
     * Addendum C3: "N tabs produce exactly one aggregate query."
     *
     * The naive shape is one COUNT per tab, so a four-tab table pays four
     * queries before rendering a row. This asserts the grouped query is one.
     */
    public function test_tab_counts_come_from_exactly_one_grouped_query(): void
    {
        $this->makeClients($this->tenantA, 30, 'Alpha');

        $queries = [];
        DB::listen(function ($q) use (&$queries): void {
            $queries[] = $q->sql;
        });

        $response = $this->actingAs($this->userA)->get('/clients', [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => (string) (new HandleInertiaRequests())->version(request()),
            'X-Inertia-Partial-Component' => 'Clients/Index',
            'X-Inertia-Partial-Data' => 'tabCounts',
        ])->assertOk();

        $counts = $response->json('props.tabCounts');

        $this->assertIsArray($counts);
        $this->assertSame(30, $counts['all']);
        $this->assertSame(30, $counts['active'] + $counts['expired'] + $counts['suspended']);

        $aggregates = array_filter($queries, fn (string $sql): bool => str_contains(strtolower($sql), 'count('));

        $this->assertCount(
            1,
            $aggregates,
            'Tab counts must be ONE grouped query, got: ' . implode(' | ', $aggregates)
        );
        $this->assertStringContainsStringIgnoringCase('group by', $aggregates[array_key_first($aggregates)]);
    }

    public function test_tab_counts_ignore_the_active_tab_but_respect_filters(): void
    {
        $this->makeClients($this->tenantA, 30, 'Alpha');

        $version = (string) (new HandleInertiaRequests())->version(request());

        // With a tab active, counts must still describe every tab. Applying the
        // tab to its own count query would zero every other tab.
        $counts = $this->actingAs($this->userA)->get('/clients?tab=active', [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => $version,
            'X-Inertia-Partial-Component' => 'Clients/Index',
            'X-Inertia-Partial-Data' => 'tabCounts',
        ])->assertOk()->json('props.tabCounts');

        $this->assertSame(30, $counts['all'], 'A selected tab must not shrink the other tabs.');
        $this->assertGreaterThan(0, $counts['expired']);
    }

    public function test_an_unknown_tab_falls_back_to_all(): void
    {
        $this->makeClients($this->tenantA, 9, 'Alpha');

        $props = $this->actingAs($this->userA)
            ->get('/clients?tab=' . urlencode("'; drop table clients--"))
            ->assertOk()->viewData('page')['props'];

        $this->assertNull($props['tab']);
        $this->assertCount(9, $props['records']);
        $this->assertDatabaseCount('clients', 9);
    }

    public function test_guests_cannot_read_the_list(): void
    {
        $this->get('/clients')->assertRedirect('/login');
    }

    /** @return list<string> */
    private function captureQueriesForIndex(): array
    {
        $queries = [];

        DB::flushQueryLog();
        DB::listen(function ($query) use (&$queries): void {
            $queries[] = $query->sql;
        });

        $this->actingAs($this->userA)->get('/clients')->assertOk();

        return $queries;
    }

    private function countQueriesForIndex(): int
    {
        return count($this->captureQueriesForIndex());
    }
}
