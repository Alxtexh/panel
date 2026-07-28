<?php

declare(strict_types=1);

namespace Tests\Feature\Performance;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * How many queries a page costs, asserted as a CEILING.
 *
 * §14 requires an N+1 guard, and the reason it is a build gate rather than
 * something to check by hand is that N+1 does not look like a bug while you are
 * writing it. Adding `$row->plan->name` to a column is one line, it works, and
 * the page is 3 ms slower on ten seeded rows. It becomes a 400-query page on a
 * real dataset, at which point the cause is a hundred commits back.
 *
 * A CEILING, NOT AN EXACT COUNT. An exact count fails on every unrelated change
 * - a new session touch, a settings read - which trains people to update the
 * number without looking at what changed. A ceiling only fires when something
 * genuinely got worse, and the headroom is stated so raising it is a decision.
 *
 * THE ROW COUNT IS VARIED, and that is the actual test. A fixed page size hides
 * N+1 completely: ten queries for ten rows and ten for twenty look the same if
 * you only ever measure one page. Asserting that the count does not GROW WITH
 * ROWS is what distinguishes a join from a loop.
 */
final class QueryCountTest extends TestCase
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
            'name' => 'Plan',
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $this->router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Router',
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $this->actingAs($this->user);
    }

    /* ---------------------------------------------------------- the guard */

    /**
     * THE HEADLINE ASSERTION. Doubling the rows must not change the query count.
     *
     * This is the whole point of the file: a list that eager-loads costs the
     * same for 5 rows as for 50, and a list that loops costs 45 more. Nothing
     * about the absolute number matters here - only that it is FLAT.
     */
    public function test_the_clients_list_does_not_query_per_row(): void
    {
        $this->makeClients(5);
        $small = $this->countQueries(fn () => $this->get('/clients?perPage=50'));

        $this->makeClients(45);
        $large = $this->countQueries(fn () => $this->get('/clients?perPage=50'));

        $this->assertSame(
            $small,
            $large,
            "The list cost {$small} queries for 5 rows and {$large} for 50. "
            .'A count that grows with rows is a query inside the row loop.',
        );
    }

    /**
     * And the same for every registered resource, so a NEW resource is covered
     * without editing this file - the same reasoning as the isolation matrix.
     */
    public function test_no_registered_resource_queries_per_row(): void
    {
        $this->makeClients(30);

        $failures = [];

        foreach (array_keys(app(PanelManager::class)->resources()) as $resource) {
            $small = $this->countQueries(fn () => $this->get("/{$resource}?perPage=5"));
            $large = $this->countQueries(fn () => $this->get("/{$resource}?perPage=25"));

            if ($large > $small) {
                $failures[] = "[{$resource}] cost {$small} queries at 5 rows and {$large} at 25.";
            }
        }

        $this->assertSame([], $failures, "\n".implode("\n", $failures)."\n");
    }

    /**
     * A CEILING on the absolute count, to catch the other failure mode.
     *
     * A page can be free of N+1 and still fire thirty queries - one per widget,
     * one per lookup, one per settings read. That is flat, so the test above
     * passes, and it is still a slow page.
     */
    public function test_the_clients_list_stays_under_its_query_budget(): void
    {
        $this->makeClients(25);

        $count = $this->countQueries(fn () => $this->get('/clients'));

        $this->assertLessThanOrEqual(
            15,
            $count,
            "The clients list fired {$count} queries. The budget is 15; raising it "
            .'is a decision, not a formality.',
        );
    }

    /**
     * The dashboard's SHELL, before any deferred prop resolves.
     *
     * The charts and counters are deferred precisely so they never block first
     * paint, so the shell should be close to free. Measuring the whole page
     * would measure the widgets and prove nothing about the shell.
     */
    public function test_the_dashboard_shell_is_cheap(): void
    {
        $this->makeClients(25);

        $count = $this->countQueries(fn () => $this->get('/dashboard'));

        $this->assertLessThanOrEqual(
            20,
            $count,
            "The dashboard shell fired {$count} queries before any deferred prop resolved.",
        );
    }

    /**
     * A relation panel is the classic N+1 site: a list of children rendered
     * under one parent, where the temptation is to touch the parent per child.
     */
    public function test_a_relation_panel_does_not_query_per_row(): void
    {
        $clients = $this->makeClients(1);
        $client = $clients[0];

        $this->makeSessionsFor($client, 5);
        $small = $this->countQueries(fn () => $this->get("/clients/{$client->id}/relations/sessions"));

        $this->makeSessionsFor($client, 20);
        $large = $this->countQueries(fn () => $this->get("/clients/{$client->id}/relations/sessions"));

        $this->assertSame(
            $small,
            $large,
            "The relation panel cost {$small} queries for 5 rows and {$large} for 25.",
        );
    }

    /* --------------------------------------------------------------- setup */

    /**
     * Queries fired while the callback runs.
     *
     * `flushQueryLog` first, because setup above has already run queries and
     * counting those would make the number depend on how the fixture was built
     * rather than on what the page does.
     */
    private function countQueries(callable $work): int
    {
        /*
         * WARM UP FIRST, ALWAYS.
         *
         * The first version of this test failed with the count going DOWN - 3
         * queries for 5 rows and 2 for 50 - which is not an N+1 and not an
         * improvement either. It was the schema cache: the first request of the
         * process populates it and pays for a read that no later request makes.
         *
         * Measuring a cold request measures cache population, which is exactly
         * the false finding the reference app's methodology warns about. One
         * discarded run, then the real one.
         */
        $work();

        DB::flushQueryLog();
        DB::enableQueryLog();

        $work();

        $count = count(DB::getQueryLog());

        DB::disableQueryLog();

        return $count;
    }

    /** @return list<Client> */
    private function makeClients(int $count): array
    {
        $made = [];

        for ($i = 0; $i < $count; $i++) {
            $unique = uniqid('c', true);

            $made[] = Client::withoutGlobalScopes()->forceCreate([
                'tenant_id' => $this->tenant->id,
                'plan_id' => $this->plan->id,
                'router_id' => $this->router->id,
                'name' => "Client {$unique}",
                'phone' => '+254'.substr((string) crc32($unique), 0, 9),
                'access_code' => strtoupper(substr(md5($unique), 0, 10)),
                'status' => 'active',
                'plan_type' => 'pppoe',
                'expiry_date' => '2026-12-31',
            ]);
        }

        return $made;
    }

    private function makeSessionsFor(Client $client, int $count): void
    {
        for ($i = 0; $i < $count; $i++) {
            \App\Models\ClientSession::withoutGlobalScopes()->forceCreate([
                'tenant_id' => $this->tenant->id,
                'client_id' => $client->id,
                'router_id' => $this->router->id,
                'status' => 'offline',
                'started_at' => now()->subMinutes($i + 1),
                'ended_at' => now()->subMinutes($i),
                'bytes_in' => 1000,
                'bytes_out' => 2000,
            ]);
        }
    }
}
