<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\ClientSession;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use InvalidArgumentException;
use Alxtexh\Panel\Pages\Workspace;
use Alxtexh\Panel\Tables\Columns\DateColumn;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Filters\SelectFilter;
use Alxtexh\Panel\Tables\Table;
use Tests\TestCase;

/**
 * The `Workspace` PRIMITIVE: several independent tables on one page.
 *
 * THE PLAYGROUND NO LONGER SHIPS A WORKSPACE SCREEN - the Connections page
 * was removed by the user's direct instruction (Part G.3: two tables on one
 * page was judged not worth a screen). The framework capability remains,
 * because a consumer application may still want it, so these tests drive the
 * class DIRECTLY with constructed requests rather than through a URL.
 *
 * Almost every test is about one thing: the tables must not touch each
 * other's state. Rendering two tables is trivial; rendering two that both
 * think they own `?page=` is a page where sorting one silently resets the
 * other.
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

    /**
     * A two-table definition of the shape the Connections screen used to
     * declare: live sessions and closed history, split on `ended_at` being
     * null - the column that cannot lag - with the split declared through
     * `constrain()` so it survives the count optimisation.
     */
    private function definition(): Workspace
    {
        $table = fn (bool $live): Table => Table::make()
            ->model(ClientSession::class)
            ->columns([
                TextColumn::make('client_name')->label('Subscriber')
                    ->from('clients.name')->searchable()->sortable(),
                DateColumn::make('started_at')->sortable()->withTime(),
                DateColumn::make('ended_at')->sortable()->withTime(),
            ])
            ->query(fn (Builder $q) => $q->leftJoin('clients', 'clients.id', '=', 'client_sessions.client_id'))
            ->constrain(fn (Builder $q) => $live
                ? $q->whereNull('client_sessions.ended_at')
                : $q->whereNotNull('client_sessions.ended_at'))
            ->keyColumn('client_sessions.id')
            ->alsoSelect(['client_sessions.id'])
            ->filters([
                SelectFilter::make('status')->column('client_sessions.status')
                    ->options(['online', 'offline']),
            ])
            ->defaultSort($live ? 'started_at' : 'ended_at', $live ? 'asc' : 'desc')
            ->perPage(10);

        return Workspace::make('connections')
            ->heading('Connections', 'Who is connected now, and what happened earlier.')
            ->table('live', $table(true), 'Online now')
            ->table('history', $table(false), 'Recent history');
    }

    /** @return array<string, array<string, mixed>> Each table's props, by name. */
    private function props(string $query = ''): array
    {
        $results = $this->definition()->results(Request::create('/w'.($query === '' ? '' : '?'.$query)));

        return array_map(static fn ($result): array => $result->toProps(), $results);
    }

    /* ------------------------------------------------------------ the tables */

    public function test_the_workspace_runs_both_tables(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->props();

        $this->assertSame(['live', 'history'], array_keys($props));
    }

    /**
     * THE SPLIT IS ON `ended_at`, not on the status column. A status can lag
     * behind reality; a null end time is what "still running" means. Getting
     * this wrong puts a session in both tables or in neither.
     */
    public function test_each_table_holds_only_its_own_rows(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->props();

        $this->assertCount(3, $props['live']['records']);
        $this->assertCount(4, $props['history']['records']);
    }

    /* ----------------------------------------------- independent url state */

    /**
     * THE HEADLINE CASE. Sorting one table must leave the other alone. Both
     * tables can sort by `started_at`, so a shared query string would apply
     * one request's sort to both - invisible in any test that only looked at
     * the table being sorted.
     */
    public function test_sorting_one_table_does_not_re_sort_the_other(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->props('history[sort]=started_at&history[direction]=asc');

        $this->assertSame('started_at', $props['history']['sort']);
        $this->assertSame('asc', $props['history']['direction']);

        // The live table keeps its OWN default, untouched.
        $this->assertSame('started_at', $props['live']['sort']);
        $this->assertSame('asc', $props['live']['direction'], 'Its declared default.');
    }

    /** Two different sorts at once, which a shared query string cannot express. */
    public function test_the_two_tables_can_hold_different_sorts_simultaneously(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->props(
            'live[sort]=started_at&live[direction]=desc&history[sort]=ended_at&history[direction]=asc',
        );

        $this->assertSame('desc', $props['live']['direction']);
        $this->assertSame('asc', $props['history']['direction']);
    }

    /** A per-page change on one table does not resize the other. */
    public function test_page_size_is_per_table(): void
    {
        $this->makeSessions(live: 30, closed: 30);

        $props = $this->props('history[perPage]=25');

        $this->assertSame(25, $props['history']['perPage']);
        $this->assertSame(10, $props['live']['perPage'], 'Its own default.');
        $this->assertCount(10, $props['live']['records']);
    }

    /** A filter on one table does not filter the other. */
    public function test_a_filter_applies_to_one_table_only(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->props('history[status]=online');

        $this->assertSame('online', $props['history']['filters']['status']);
        $this->assertCount(3, $props['live']['records'], 'Live is unaffected.');
    }

    /**
     * A FLAT PARAMETER IS IGNORED, which is what keeps the two apart. `?sort=`
     * belongs to nobody here, so neither table may claim it - if one did, the
     * other would be the one that broke.
     */
    public function test_an_unnamespaced_parameter_reaches_neither_table(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $props = $this->props('sort=ended_at&direction=desc');

        $this->assertSame('started_at', $props['live']['sort']);
        $this->assertSame('ended_at', $props['history']['sort'], 'Both keep their defaults.');
    }

    /**
     * REGRESSION GUARD for a bug a workspace found in the framework.
     *
     * `query()` is dropped from a count when nothing applied needs the join -
     * a measured 20x saving, and correct, because a count selects no joined
     * columns. It is NOT correct for a predicate: `whereNull('ended_at')`
     * inside the join closure read perfectly naturally and made "3 live
     * sessions" count every session ever recorded. `constrain()` exists to
     * make the two separable; this asserts the half that must survive the
     * optimisation.
     */
    public function test_a_constraint_applies_to_the_count_not_just_the_rows(): void
    {
        $this->makeSessions(live: 3, closed: 4);

        $result = $this->definition()
            ->getTables()['live']
            ->toListQuery(ClientSession::class)
            ->run(Request::create('/w'));

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
        $schema = $this->definition()->toSchema();

        $this->assertSame('workspace', $schema['kind']);
        $this->assertSame(['live', 'history'], array_keys($schema['tables']));
        $this->assertSame('Online now', $schema['tables']['live']['title']);
        $this->assertStringNotContainsString('records', json_encode($schema));
    }

    /* ------------------------------------------------------------ isolation */

    /** A workspace is still tenant-scoped; it is a page kind, not an exemption. */
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

        $props = $this->props();

        $this->assertCount(2, $props['live']['records'], 'Only my tenant\'s live rows.');
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
            'status' => 'online',
        ]);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'plan_id' => $plan->id,
            'router_id' => $router->id,
            'name' => 'Client '.$tenant->id,
            'phone' => '+2547000000'.$tenant->id,
            'access_code' => 'AC-'.$tenant->id,
            'status' => 'active',
            'plan_type' => 'fibre',
            'expiry_date' => now()->addYear(),
        ]);
    }
}
