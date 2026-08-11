<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Demo\Models\ClientSession;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Roadmap 4.2: a resource nested under another - `/clients/{id}/sessions` -
 * as a first-class screen rather than a related list inside somebody else's.
 *
 * THE PROPERTY UNDER TEST IS THAT THE PARENT SEGMENT IS THE AUTHORISATION
 * CONTEXT. Every request resolves the client through its own tenant-scoped
 * model and checks `view` on it before any session is considered; the list
 * is constrained to that client's rows; and a URL pairing a session with the
 * wrong client - or another tenant's client - 404s exactly like a URL about
 * nothing.
 */
final class NestedResourceTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    private User $admin;

    private Client $client;

    private Client $other;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $this->admin = User::factory()->create([
            'tenant_id' => $this->acme->id,
            'email_verified_at' => now(),
        ]);

        $this->client = $this->makeClient($this->acme, 'Grace Wanjiku');
        $this->other = $this->makeClient($this->acme, 'Peter Otieno');
    }

    private function makeClient(Tenant $tenant, string $name): Client
    {
        return Client::query()->forceCreate([
            'tenant_id' => $tenant->id,
            'name' => $name,
            'phone' => '+2547'.random_int(10000000, 99999999),
            'access_code' => strtoupper(str()->random(8)),
            'status' => 'active',
            'plan_type' => 'fibre',
            'expiry_date' => now()->addYear(),
        ]);
    }

    private function connection(Client $client, array $attributes = []): ClientSession
    {
        return ClientSession::query()->forceCreate([
            'tenant_id' => $client->tenant_id,
            'client_id' => $client->id,
            'status' => 'offline',
            'ip_address' => '10.0.0.9',
            'started_at' => now()->subHour(),
            'ended_at' => now(),
            ...$attributes,
        ]);
    }

    /* -------------------------------------------------------------- routing */

    public function test_the_nested_list_serves_only_this_parents_rows(): void
    {
        $mine = $this->connection($this->client);
        $theirs = $this->connection($this->other);

        $records = $this->actingAs($this->admin)
            ->get("/clients/{$this->client->id}/sessions")->assertOk()
            ->viewData('page')['props']['records'];

        $ids = array_column($records, 'id');

        $this->assertContains($mine->id, $ids);
        $this->assertNotContains($theirs->id, $ids);
    }

    /** The flat spelling deliberately does not route - see PanelRoutes. */
    public function test_a_nested_resource_has_no_flat_url(): void
    {
        $this->actingAs($this->admin)->get('/sessions')->assertNotFound();
    }

    public function test_the_breadcrumbs_walk_in_through_the_parent(): void
    {
        $breadcrumbs = $this->actingAs($this->admin)
            ->get("/clients/{$this->client->id}/sessions")->assertOk()
            ->viewData('page')['props']['breadcrumbs'];

        $this->assertSame(
            ['Clients', 'Grace Wanjiku', 'Sessions'],
            array_column($breadcrumbs, 'title'),
        );
    }

    /** The schema's routes are re-addressed so every link stays inside. */
    public function test_the_schema_routes_carry_the_parent(): void
    {
        $schema = $this->actingAs($this->admin)
            ->get("/clients/{$this->client->id}/sessions")->assertOk()
            ->viewData('page')['props']['schema'];

        $this->assertSame("/clients/{$this->client->id}/sessions", $schema['routes']['index']);
    }

    /* ------------------------------------------------------------- pairings */

    /** A session under the WRONG client is a URL about nothing: 404. */
    public function test_a_mismatched_pairing_is_indistinguishable_from_nothing(): void
    {
        $theirs = $this->connection($this->other);

        $this->actingAs($this->admin)
            ->get("/clients/{$this->client->id}/sessions/{$theirs->id}")
            ->assertNotFound();
    }

    public function test_a_write_against_a_mismatched_pairing_refuses_the_same_way(): void
    {
        $theirs = $this->connection($this->other);

        $this->actingAs($this->admin)
            ->delete("/clients/{$this->client->id}/sessions/{$theirs->id}")
            ->assertNotFound();

        $this->assertDatabaseHas('client_sessions', ['id' => $theirs->id]);
    }

    /** The declared pairing only: /routers/{id}/sessions is not a thing. */
    public function test_an_undeclared_parent_does_not_route(): void
    {
        $this->actingAs($this->admin)
            ->get('/routers/1/sessions')
            ->assertNotFound();
    }

    /* ------------------------------------------------------- the no-leak row */

    /** ANOTHER TENANT'S PARENT 404s - their client id resolves to nothing. */
    public function test_another_organisations_parent_is_indistinguishable_from_nothing(): void
    {
        $foreign = $this->makeClient($this->rival, 'Rival Customer');
        $this->connection($foreign);

        $this->actingAs($this->admin)
            ->get("/clients/{$foreign->id}/sessions")
            ->assertNotFound();
    }

    /* ------------------------------------------------------------ telemetry */

    /** No form: sessions are written by the network, not typed into being. */
    public function test_a_telemetry_resource_offers_no_create_screen(): void
    {
        $this->actingAs($this->admin)
            ->get("/clients/{$this->client->id}/sessions/create")
            ->assertNotFound();
    }
}
