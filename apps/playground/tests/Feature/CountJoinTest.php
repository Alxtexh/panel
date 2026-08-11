<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Plan;
use App\Demo\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Filters\SelectFilter;
use Alxtexh\Panel\Tables\Table;
use Tests\TestCase;

/**
 * A count must not carry a join it never reads.
 *
 * FOUND BY MEASUREMENT at 1M rows: counting a tenant's 200,000 clients took
 * 503 ms through a LEFT JOIN to plans and 25 ms without it, because every
 * counted row did a primary-key lookup whose result was then discarded. A count
 * selects no joined columns - the join is only there so a FILTER or the SEARCH
 * can reference one.
 *
 * The optimisation is only safe when nothing applied touches a joined column,
 * so both halves are asserted: that it is dropped when unused, and kept when
 * needed. The second is the one that matters - dropping it wrongly would not
 * be slow, it would be WRONG.
 */
final class CountJoinTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    private Plan $plan;

    private Router $router;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Gold',
            'speed_mbps' => 20,
            'price_cents' => 2000,
        ]);

        $this->router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'RTR',
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $this->makeClients(4);

        $this->actingAs($this->user);
    }

    public function test_a_count_drops_a_join_nothing_references(): void
    {
        $sql = $this->countSql($this->baseTable(), []);

        $this->assertStringNotContainsString('join', $sql, 'A count that reads no joined column must not join.');
        $this->assertStringContainsString('count(*)', $sql);
    }

    /**
     * THE ONE THAT MATTERS. A filter on a joined column changes which rows are
     * counted, so the join has to stay.
     */
    public function test_a_count_keeps_the_join_when_a_filter_uses_it(): void
    {
        $sql = $this->countSql($this->tableFilteredOnJoinedColumn(), ['planName' => 'Gold']);

        $this->assertStringContainsString('join', $sql, 'Dropping this join would count the wrong rows.');
    }

    /** And the answer is still right, not merely joined. */
    public function test_the_count_is_correct_when_filtering_on_a_joined_column(): void
    {
        $other = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Bronze',
            'speed_mbps' => 5,
            'price_cents' => 500,
        ]);

        Client::withoutGlobalScopes()->where('tenant_id', $this->tenant->id)->limit(1)
            ->update(['plan_id' => $other->id]);

        $query = $this->tableFilteredOnJoinedColumn()->toListQuery(Client::class);
        $result = $query->run(Request::create('/', 'GET', ['planName' => 'Gold']));

        $this->assertSame(3, ($result->total)(), 'Three clients remain on the Gold plan.');
    }

    /** A search over a joined column keeps it for the same reason. */
    public function test_a_count_keeps_the_join_when_the_search_uses_it(): void
    {
        $sql = $this->countSql($this->tableSearchingJoinedColumn(), ['search' => 'Gold']);

        $this->assertStringContainsString('join', $sql);
    }

    /** An unused filter adds no predicate, so it cannot require the join. */
    public function test_a_declared_but_unapplied_filter_does_not_force_the_join(): void
    {
        $sql = $this->countSql($this->tableFilteredOnJoinedColumn(), []);

        $this->assertStringNotContainsString('join', $sql);
    }

    /* ---------------------------------------------------------------- setup */

    /** @param array<string, mixed> $query */
    private function countSql(Table $table, array $query): string
    {
        $result = $table->toListQuery(Client::class)->run(Request::create('/', 'GET', $query));

        DB::flushQueryLog();
        DB::enableQueryLog();
        ($result->total)();
        $log = DB::getQueryLog();
        DB::disableQueryLog();

        return $log[0]['query'];
    }

    private function baseTable(): Table
    {
        return Table::make()
            ->columns([TextColumn::make('name')->from('clients.name')->sortable()])
            ->query(fn (Builder $q) => $q->leftJoin('plans', 'plans.id', '=', 'clients.plan_id'))
            ->keyColumn('clients.id')
            ->alsoSelect(['clients.id'])
            // The default sort must be a declared sortable column, which for a
            // hand-built fixture means saying so.
            ->defaultSort('name', 'asc');
    }

    private function tableFilteredOnJoinedColumn(): Table
    {
        return $this->baseTable()->filters([
            SelectFilter::make('planName')->column('plans.name')->options(['Gold', 'Bronze']),
        ]);
    }

    private function tableSearchingJoinedColumn(): Table
    {
        return Table::make()
            ->columns([
                TextColumn::make('name')->from('clients.name')->sortable(),
                TextColumn::make('plan_name')->from('plans.name as plan_name')->searchable(),
            ])
            ->query(fn (Builder $q) => $q->leftJoin('plans', 'plans.id', '=', 'clients.plan_id'))
            ->keyColumn('clients.id')
            ->alsoSelect(['clients.id'])
            ->defaultSort('name', 'asc');
    }

    private function makeClients(int $count): void
    {
        for ($i = 0; $i < $count; $i++) {
            $unique = uniqid('c', true);

            Client::withoutGlobalScopes()->forceCreate([
                'tenant_id' => $this->tenant->id,
                'plan_id' => $this->plan->id,
                'router_id' => $this->router->id,
                'name' => "Client {$i}",
                'phone' => '+254'.substr((string) crc32($unique), 0, 9),
                'access_code' => strtoupper(substr(md5($unique), 0, 10)),
                'status' => 'active',
                'plan_type' => 'pppoe',
                'expiry_date' => '2026-12-31',
            ]);
        }
    }
}
