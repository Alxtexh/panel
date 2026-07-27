<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\ClientSession;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * Related lists on a record's page.
 *
 * THE FAILURE THIS EXISTS TO PREVENT is not a wrong answer, it is a slow one
 * that only appears in production. `$client->load('sessions')` is correct for
 * every client a developer tests with and reads forty thousand rows for the one
 * customer who has been connecting for three years.
 */
final class RelationManagerTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $user;

    private Client $client;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]);

        $this->client = $this->makeClient($this->tenantA);

        $this->actingAs($this->user);
    }

    /* -------------------------------------------------------------- the list */

    public function test_a_relation_returns_its_rows(): void
    {
        $this->sessions($this->client, 3);

        $body = $this->getJson("/clients/{$this->client->id}/relations/sessions")->assertOk()->json();

        $this->assertCount(3, $body['records']);
        $this->assertArrayHasKey('ip_address', $body['records'][0]);
    }

    /**
     * THE HEADLINE CASE. A client with far more related rows than a page must
     * return one page, not all of them.
     */
    public function test_a_large_relation_is_bounded_to_a_page(): void
    {
        $this->sessions($this->client, 150);

        $body = $this->getJson("/clients/{$this->client->id}/relations/sessions")->assertOk()->json();

        $this->assertLessThanOrEqual(25, count($body['records']), 'A relation must page, not load everything.');
        $this->assertNotNull($body['nextCursor'], 'There are more rows, so there must be a cursor.');
    }

    /** One query for the rows, whatever the relation's size. */
    public function test_a_relation_is_one_query(): void
    {
        $this->sessions($this->client, 60);

        DB::enableQueryLog();
        $this->getJson("/clients/{$this->client->id}/relations/sessions")->assertOk();
        $queries = DB::getQueryLog();
        DB::disableQueryLog();

        $rowQueries = array_filter(
            array_column($queries, 'query'),
            static fn (string $q): bool => str_contains($q, 'client_sessions'),
        );

        $this->assertCount(1, $rowQueries, 'N related rows must not mean N queries.');
    }

    /**
     * No blocking count. Paging a client's sessions must not first count them —
     * that is the same COUNT(*) §10 forbids in front of a table, and it does not
     * become acceptable because the list is nested.
     */
    public function test_a_relation_runs_no_count(): void
    {
        $this->sessions($this->client, 40);

        DB::enableQueryLog();
        $this->getJson("/clients/{$this->client->id}/relations/sessions")->assertOk();
        $queries = array_column(DB::getQueryLog(), 'query');
        DB::disableQueryLog();

        foreach ($queries as $sql) {
            if (str_contains($sql, 'notifications')) {
                continue;
            }

            $this->assertStringNotContainsStringIgnoringCase('count(', $sql, "Count in a relation response: {$sql}");
        }
    }

    /** The cursor continues the list; page two costs what page one costs. */
    public function test_the_cursor_pages_through_without_repeating(): void
    {
        $this->sessions($this->client, 60);

        $seen = [];
        $cursor = null;
        $guard = 0;

        do {
            $url = "/clients/{$this->client->id}/relations/sessions" . ($cursor ? "?cursor={$cursor}" : '');
            $body = $this->getJson($url)->assertOk()->json();

            foreach ($body['records'] as $row) {
                $seen[] = $row['id'];
            }

            $cursor = $body['nextCursor'];
        } while ($cursor !== null && ++$guard < 10);

        $this->assertCount(60, $seen, 'Keyset paging must return every row.');
        $this->assertSame(count($seen), count(array_unique($seen)), 'A row was repeated across pages.');
    }

    /* ------------------------------------------------------------- the walls */

    /**
     * THE ONE THAT MATTERS. The foreign key is DECLARED in the resource; the
     * request only names which declared relation to open. So a relation can
     * never return another parent's rows.
     */
    public function test_a_relation_never_returns_another_records_rows(): void
    {
        $other = $this->makeClient($this->tenantA);

        $this->sessions($this->client, 4);
        $this->sessions($other, 7);

        $body = $this->getJson("/clients/{$this->client->id}/relations/sessions")->assertOk()->json();

        $this->assertCount(4, $body['records']);
    }

    public function test_another_tenants_record_has_no_relations(): void
    {
        $foreign = $this->makeClient($this->tenantB);
        $this->sessions($foreign, 5);

        $this->getJson("/clients/{$foreign->id}/relations/sessions")->assertNotFound();
    }

    public function test_an_undeclared_relation_is_refused(): void
    {
        $this->getJson("/clients/{$this->client->id}/relations/passwords")->assertNotFound();
    }

    public function test_guests_cannot_read_a_relation(): void
    {
        auth()->logout();

        $this->getJson("/clients/{$this->client->id}/relations/sessions")->assertUnauthorized();
    }

    /* ------------------------------------------------------------ the schema */

    /**
     * Structure travels with the page; ROWS DO NOT. A record page with four
     * relations must not run four list queries to show one.
     */
    public function test_the_record_page_ships_structure_but_no_relation_rows(): void
    {
        $this->sessions($this->client, 5);

        DB::enableQueryLog();
        $this->get("/clients/{$this->client->id}")->assertOk();
        $queries = array_column(DB::getQueryLog(), 'query');
        DB::disableQueryLog();

        $sessionQueries = array_filter(
            $queries,
            static fn (string $q): bool => str_contains($q, 'client_sessions'),
        );

        $this->assertCount(0, $sessionQueries, 'Relation rows must be fetched on demand, not with the record.');

        $this->get("/clients/{$this->client->id}")
            ->assertInertia(fn ($page) => $page
                ->has('schema.relations', 1)
                ->where('schema.relations.0.key', 'sessions'));
    }

    /** Building the schema must not query — it happens on a cache miss. */
    public function test_describing_relations_runs_no_query(): void
    {
        DB::enableQueryLog();
        $schema = \App\Panel\Resources\ClientResource::relations()[0]->toSchema();
        $queries = DB::getQueryLog();
        DB::disableQueryLog();

        $this->assertCount(0, $queries);
        $this->assertSame('sessions', $schema['key']);
        $this->assertNotEmpty($schema['table']['columns']);
    }

    /* ---------------------------------------------------------------- setup */

    private function makeClient(Tenant $tenant): Client
    {
        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'name' => 'Plan ' . uniqid(),
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'name' => 'Router ' . uniqid(),
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $unique = uniqid('c', true);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'plan_id' => $plan->id,
            'router_id' => $router->id,
            'name' => "Client {$unique}",
            'phone' => '+254' . substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);
    }

    private function sessions(Client $client, int $count): void
    {
        $rows = [];

        for ($i = 0; $i < $count; $i++) {
            $at = now()->subMinutes($count - $i)->format('Y-m-d H:i:s');

            $rows[] = [
                'tenant_id' => $client->tenant_id,
                'client_id' => $client->id,
                'router_id' => $client->router_id,
                'status' => $i % 3 === 0 ? 'online' : 'offline',
                'ip_address' => '100.0.0.' . ($i % 250 + 1),
                'bytes_in' => $i * 1000,
                'bytes_out' => $i * 500,
                'started_at' => $at,
                'ended_at' => $i % 3 === 0 ? null : $at,
                'created_at' => $at,
                'updated_at' => $at,
            ];
        }

        DB::table('client_sessions')->insert($rows);
    }
}
