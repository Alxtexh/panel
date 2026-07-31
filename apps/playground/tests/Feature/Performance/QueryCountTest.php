<?php

declare(strict_types=1);

namespace Tests\Feature\Performance;

use App\Models\Client;
use App\Models\ClientSession;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\Ticket;
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
     *
     * MEASURING A LIST OF NOTHING PROVES NOTHING, which is the trap this test
     * fell into and the reason for the second assertion below. An N+1 costs one
     * extra query PER ROW, so on a list of one row it costs one extra query at
     * `perPage=5` and one at `perPage=25` - identical counts, test green, N+1
     * present. On a list of zero rows, or a URL that 404s, it costs nothing at
     * either size and the comparison is between two numbers that were never
     * about the resource at all.
     *
     * This enumerated twelve resources and genuinely exercised two. The rest
     * returned one row, no rows, or 404 - including `tickets`, the newest and
     * most join-heavy list in the panel - and the file reported that every
     * registered resource was covered.
     *
     * SO THE UNMEASURED ONES ARE NAMED. A resource this test cannot put rows in
     * front of is not a pass and must not read like one; it is listed in
     * `UNMEASURED` with the reason, and anything that falls out of measurement
     * later fails here by name rather than going quiet. The list is meant to
     * shrink.
     */
    public function test_no_registered_resource_queries_per_row(): void
    {
        $this->makeClients(30);
        $this->makeTickets(30);

        $failures = [];
        $unmeasured = [];

        foreach (array_keys(app(PanelManager::class)->resources()) as $resource) {
            $rows = $this->rowsRendered("/{$resource}?perPage=25");

            if ($rows < self::ROWS_TO_MEAN_ANYTHING) {
                $unmeasured[] = $resource;

                continue;
            }

            $small = $this->countQueries(fn () => $this->get("/{$resource}?perPage=5"));
            $large = $this->countQueries(fn () => $this->get("/{$resource}?perPage=25"));

            $grew = $large > $small;

            if ($grew && ! array_key_exists($resource, self::ACCEPTED_PER_ROW)) {
                $failures[] = "[{$resource}] cost {$small} queries at 5 rows and {$large} at 25.";
            }

            /*
             * AN EXCEPTION THAT EXPIRES BY ITSELF. If a listed resource stops
             * growing, the entry is stale and this says so - otherwise the list
             * becomes a place where fixed problems go on being described as
             * problems, and nobody trusts it enough to shorten it.
             */
            if (! $grew && array_key_exists($resource, self::ACCEPTED_PER_ROW)) {
                $failures[] = "[{$resource}] no longer queries per row. "
                    .'Remove it from ACCEPTED_PER_ROW.';
            }
        }

        $this->assertSame([], $failures, "\n".implode("\n", $failures)."\n");

        sort($unmeasured);
        $expected = self::UNMEASURED;
        sort($expected);

        $this->assertSame(
            $expected,
            $unmeasured,
            "\nThis test only proves something about a list it can actually fill.\n"
            .'Resources it could not fill this run: '.(implode(', ', $unmeasured) ?: '(none)')."\n"
            .'Declared as unmeasurable in UNMEASURED: '.implode(', ', $expected)."\n"
            ."Seed the resource so it is measured, or add it to UNMEASURED with the reason.\n",
        );
    }

    /**
     * A list has to be long enough for a per-row cost to show up as a
     * DIFFERENCE between two page sizes. Five is the smaller page this test
     * requests, so anything at or above it separates a join from a loop.
     */
    private const ROWS_TO_MEAN_ANYTHING = 5;

    /**
     * Lists that still cost something per row, with the cause and the reason it
     * is tolerated for now.
     *
     * MEASURED, NOT ASSUMED. Each entry was found by this test, traced to a
     * specific query, and left in place deliberately - which is a different
     * thing from an N+1 nobody has noticed, and it is written here so it keeps
     * being a decision rather than becoming the status quo.
     *
     * @var array<string, string>
     */
    private const ACCEPTED_PER_ROW = [
        /*
         * EMPTY, AND THAT IS THE POINT. `users` lived here for one commit: the
         * "Impersonate" entry asked whether each listed person holds an ability
         * the viewer does not, and the answer needed that person's roles, so it
         * cost one EXISTS per row.
         *
         * It was batched by `User::primeGrantsEverything()`, which loads the
         * page's roles under the same team context the check itself uses rather
         * than by reproducing Spatie's scoping in a query written here - the
         * distinction that kept it a performance fix instead of a permissions
         * bug. The assertion below then failed because the entry had gone stale,
         * which is exactly what it is for.
         */
    ];

    /**
     * Resources this test cannot currently put rows in front of, and why.
     *
     * NOT AN EXCUSE LIST. Every name here is a resource whose list is
     * unguarded against N+1, written down so that is a known fact rather than
     * an assumption. The four panel-mounted ones are the honest kind: they
     * belong to other panels and 404 at the admin panel's root, so this test
     * is asking for a URL that does not exist rather than measuring a screen.
     *
     * @var list<string>
     */
    private const UNMEASURED = [
        // Served by other panels - these URLs 404 under the admin panel.
        'sessions',
        'tenants',
        'reseller-plans',
        'my-tickets',

        // No fixture in this file yet. `users` left this list when the ticket
        // fixture began creating people - which is the list working as intended.
        'announcements',
        'plans',
        'routers',
        'editable-plans',
    ];

    /**
     * THE TICKET QUEUE, WITH ENOUGH ROWS TO MEAN SOMETHING.
     *
     * The list joins two rows of `users` per ticket - who opened it and who it
     * is assigned to - so it is precisely the shape that becomes two queries
     * per row the moment somebody writes `$row->opener->name` instead of
     * selecting through the join. It renders the names, so the temptation is
     * always there.
     *
     * DISTINCT PEOPLE PER TICKET, not one shared opener. Fifty tickets opened
     * by the same person would let a per-row lookup be answered from Eloquent's
     * identity map after the first, and the count would come out flat on a list
     * that queries per row against real data.
     */
    public function test_the_tickets_list_does_not_query_per_row(): void
    {
        $this->makeTickets(5);
        $small = $this->countQueries(fn () => $this->get('/tickets?perPage=50'));

        $this->makeTickets(45);
        $large = $this->countQueries(fn () => $this->get('/tickets?perPage=50'));

        $this->assertSame(
            $small,
            $large,
            "The ticket queue cost {$small} queries for 5 tickets and {$large} for 50. "
            .'The opener and assignee names come from a join; a count that grows '
            .'with rows means something is loading them per ticket.',
        );
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

    /**
     * How many rows a list actually put on the page.
     *
     * The list ships its rows as `records`; a 404, a redirect or an empty
     * table all come back as zero, which is the point - each of those is a
     * measurement that did not happen.
     */
    private function rowsRendered(string $url): int
    {
        $response = $this->get($url);

        if ($response->status() !== 200) {
            return 0;
        }

        $records = $response->viewData('page')['props']['records'] ?? null;

        return is_array($records) ? count($records) : 0;
    }

    /** Tickets, each opened by and assigned to a different person. */
    private function makeTickets(int $count): void
    {
        for ($i = 0; $i < $count; $i++) {
            $opener = User::factory()->create(['tenant_id' => $this->tenant->id]);
            $assignee = User::factory()->create(['tenant_id' => $this->tenant->id]);

            Ticket::query()->forceCreate([
                'tenant_id' => $this->tenant->id,
                'opened_by' => $opener->id,
                'assigned_to' => $assignee->id,
                'subject' => 'Ticket '.uniqid('t', true),
                'status' => Ticket::OPEN,
                'priority' => 'normal',
            ]);
        }
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
            ClientSession::withoutGlobalScopes()->forceCreate([
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
