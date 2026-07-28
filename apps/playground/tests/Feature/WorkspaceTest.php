<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\Client;
use App\Models\ClientSession;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Workspaces\ConnectionsWorkspace;
use Illuminate\Foundation\Testing\RefreshDatabase;
use InvalidArgumentException;
use PanelKit\Panel\Pages\Workspace;
use PanelKit\Panel\Tables\Table;
use Tests\TestCase;

/**
 * Several independent tables on one page.
 *
 * ALMOST EVERY TEST HERE IS ABOUT ONE THING: that the two tables do not touch
 * each other's state. That is the only genuinely hard part - rendering two
 * tables is trivial, and rendering two tables that both think they own `?page=`
 * is a page where sorting one silently resets the other, with nothing in the
 * response to say so.
 */
final class WorkspaceTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    private Client $client;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->client = $this->makeClient();

        $this->actingAs($this->user);
    }

    /* ------------------------------------------------------------- the page */

    public function test_the_workspace_renders_both_tables(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $response = $this->get('/workspaces/connections');

        $response->assertOk();

        $props = $response->viewData('page')['props'];

        $this->assertArrayHasKey('live', $props['tables']);
        $this->assertArrayHasKey('history', $props['tables']);
    }

    /**
     * THE SPLIT IS ON `ended_at`, not on the status column. A status can lag
     * behind reality; a null end time is what "still running" means. Getting
     * this wrong puts a session in both tables or in neither.
     */
    public function test_each_table_holds_only_its_own_rows(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->get('/workspaces/connections')->viewData('page')['props'];

        $this->assertCount(3, $props['tables']['live']['records']);
        $this->assertCount(4, $props['tables']['history']['records']);
    }

    public function test_an_unknown_workspace_is_not_found(): void
    {
        $this->get('/workspaces/nonesuch')->assertNotFound();
    }

    /* --------------------------------------------- independent url state */

    /**
     * THE HEADLINE CASE. Sorting one table must leave the other alone.
     *
     * Both tables sort by `started_at`, so a shared query string would apply one
     * request's sort to both - and the bug would be invisible in any test that
     * only looked at the table being sorted.
     */
    public function test_sorting_one_table_does_not_re_sort_the_other(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->get('/workspaces/connections?history[sort]=started_at&history[direction]=asc')
            ->viewData('page')['props'];

        $this->assertSame('started_at', $props['tables']['history']['sort']);
        $this->assertSame('asc', $props['tables']['history']['direction']);

        // The live table keeps its OWN default, untouched.
        $this->assertSame('started_at', $props['tables']['live']['sort']);
        $this->assertSame('asc', $props['tables']['live']['direction'], 'Its declared default.');
    }

    /** Two different sorts at once, which a shared query string cannot express. */
    public function test_the_two_tables_can_hold_different_sorts_simultaneously(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->get(
            '/workspaces/connections?live[sort]=started_at&live[direction]=desc'
            .'&history[sort]=ended_at&history[direction]=asc'
        )->viewData('page')['props'];

        $this->assertSame('desc', $props['tables']['live']['direction']);
        $this->assertSame('asc', $props['tables']['history']['direction']);
    }

    /** A per-page change on one table does not resize the other. */
    public function test_page_size_is_per_table(): void
    {
        $this->makeSessions(live: 30, closed: 30);

        $props = $this->get('/workspaces/connections?history[perPage]=25')
            ->viewData('page')['props'];

        $this->assertSame(25, $props['tables']['history']['perPage']);
        $this->assertSame(10, $props['tables']['live']['perPage'], 'Its own default.');
        $this->assertCount(10, $props['tables']['live']['records']);
    }

    /** A filter on one table does not filter the other. */
    public function test_a_filter_applies_to_one_table_only(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->get('/workspaces/connections?history[status]=online')
            ->viewData('page')['props'];

        $this->assertSame('online', $props['tables']['history']['filters']['status']);
        $this->assertCount(3, $props['tables']['live']['records'], 'Live is unaffected.');
    }

    /**
     * A FLAT PARAMETER IS IGNORED, which is what keeps the two apart. `?sort=`
     * belongs to nobody here, so neither table may claim it - if one did, the
     * other would be the one that broke.
     */
    public function test_an_unnamespaced_parameter_reaches_neither_table(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->get('/workspaces/connections?sort=ended_at&direction=desc')
            ->viewData('page')['props'];

        $this->assertSame('started_at', $props['tables']['live']['sort']);
        $this->assertSame('ended_at', $props['tables']['history']['sort'], 'Both keep their defaults.');
    }

    /**
     * Each table's count is ITS OWN deferred prop, so one slow count cannot hold
     * up the other's table - the same reason a resource index defers its total.
     *
     * FETCHED AS A PARTIAL, because a deferred prop is deliberately ABSENT from
     * the first payload; that absence is the feature. Asserting on the initial
     * props would have been asserting that deferral works, which is Inertia's
     * test, not this one.
     */
    public function test_each_table_gets_its_own_deferred_total(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $version = (string) (new HandleInertiaRequests)->version(request());

        $this->get('/workspaces/connections', [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => $version,
            'X-Inertia-Partial-Component' => 'Workspace',
            'X-Inertia-Partial-Data' => 'total_live',
        ])
            ->assertOk()
            ->assertJsonPath('props.total_live', 3);

        $this->get('/workspaces/connections', [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => $version,
            'X-Inertia-Partial-Component' => 'Workspace',
            'X-Inertia-Partial-Data' => 'total_history',
        ])
            ->assertOk()
            ->assertJsonPath('props.total_history', 4);
    }

    /**
     * REGRESSION GUARD for a bug this workspace found in the framework.
     *
     * `query()` is dropped from a count when nothing applied needs the join -
     * a measured 20x saving, and correct, because a count selects no joined
     * columns. It is NOT correct for a predicate. The first version of this
     * workspace put `whereNull('ended_at')` inside the join closure, which reads
     * perfectly naturally, and the "3 live sessions" total came back as 7: every
     * session ever recorded. No error, no warning, just a wrong number.
     *
     * `constrain()` exists to make the two separable. This asserts the half that
     * must survive the optimisation.
     */
    public function test_a_constraint_applies_to_the_count_not_just_the_rows(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $query = ConnectionsWorkspace::definition()
            ->getTables()['live']
            ->toListQuery(ClientSession::class);

        $result = $query->run(request());

        $this->assertCount(3, $result->records, 'The rows are constrained.');
        $this->assertSame(3, ($result->total)(), 'And so is the count.');
    }

    /* ------------------------------------------------------- the definition */

    /**
     * Two tables under one name would share their paging state - the exact bug
     * this class exists to prevent - so it is refused at declaration.
     */
    public function test_two_tables_cannot_share_a_name(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/already declared/');

        Workspace::make('x')
            ->table('same', Table::make()->model(ClientSession::class))
            ->table('same', Table::make()->model(ClientSession::class));
    }

    /** A name reaches a query string and a prop, so it must be an identifier. */
    public function test_a_table_name_must_be_an_identifier(): void
    {
        $this->expectException(InvalidArgumentException::class);

        Workspace::make('x')->table('not a name!', Table::make()->model(ClientSession::class));
    }

    /** A table used outside a resource must say what it lists. */
    public function test_a_table_without_a_model_refuses_to_run(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/no model/');

        Table::make()->getModel();
    }

    /** The schema is structure only - no rows, and no tenant data. */
    public function test_the_schema_carries_structure_and_no_records(): void
    {
        $schema = ConnectionsWorkspace::definition()->toSchema();

        $this->assertSame('workspace', $schema['kind']);
        $this->assertSame(['live', 'history'], array_keys($schema['tables']));
        $this->assertSame('Online now', $schema['tables']['live']['title']);
        $this->assertStringNotContainsString('records', json_encode($schema));
    }

    /* ---------------------------------------------------------- isolation */

    /** A workspace is still tenant-scoped; it is a page, not an exemption. */
    public function test_a_workspace_never_shows_another_tenants_rows(): void
    {
        $this->makeSessions(live: 2, closed: 2);

        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $foreign = $this->makeClient($other);

        ClientSession::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $other->id,
            'client_id' => $foreign->id,
            'router_id' => null,
            'status' => 'online',
            'started_at' => now()->subHour(),
            'ended_at' => null,
        ]);

        $props = $this->get('/workspaces/connections')->viewData('page')['props'];

        $this->assertCount(2, $props['tables']['live']['records'], 'Only my tenant\'s live rows.');
    }

    /* ---------------------------------------------------------------- setup */

    private function makeSessions(int $live, int $closed): void
    {
        for ($i = 0; $i < $live; $i++) {
            ClientSession::withoutGlobalScopes()->forceCreate([
                'tenant_id' => $this->tenant->id,
                'client_id' => $this->client->id,
                'router_id' => null,
                'status' => 'online',
                'started_at' => now()->subMinutes($i + 1),
                'ended_at' => null,
            ]);
        }

        for ($i = 0; $i < $closed; $i++) {
            ClientSession::withoutGlobalScopes()->forceCreate([
                'tenant_id' => $this->tenant->id,
                'client_id' => $this->client->id,
                'router_id' => null,
                'status' => 'offline',
                'started_at' => now()->subHours($i + 2),
                'ended_at' => now()->subHours($i + 1),
            ]);
        }
    }

    private function makeClient(?Tenant $tenant = null): Client
    {
        $tenant ??= $this->tenant;

        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'name' => 'Plan '.$tenant->id,
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'name' => 'Router '.$tenant->id,
            'ip_address' => '10.0.0.'.$tenant->id,
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $unique = uniqid((string) $tenant->id, true);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'plan_id' => $plan->id,
            'router_id' => $router->id,
            'name' => "Client {$unique}",
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);
    }
}
