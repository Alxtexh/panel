<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * The command palette's endpoint, which is the one surface a person points at
 * arbitrary strings.
 *
 * THAT IS WHY THE ISOLATION TESTS COME FIRST. A list screen shows what a filter
 * asked for; a palette shows what somebody GUESSED at, and it does it across
 * every resource at once. If any check is going to be missing, this is the
 * endpoint where its absence is worth the most to an attacker and costs the
 * most to the person whose data leaks.
 *
 * IT REUSES EACH RESOURCE'S OWN SEARCH rather than implementing a second one -
 * so what the palette finds is what the list finds, and a column marked
 * searchable tomorrow is searchable here with nothing else edited.
 */
final class PanelSearchTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private Tenant $rival;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        config(['panel.tenancy.resolver' => fn () => $this->tenant->getKey()]);
    }

    private function client(Tenant $tenant, string $name, string $code): Client
    {
        $plan = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->getKey(),
            'name' => 'Basic '.$code,
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->getKey(),
            'plan_id' => $plan->getKey(),
            'name' => $name,
            'phone' => '+2547'.substr((string) crc32($code), 0, 8),
            'access_code' => $code,
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);
    }

    private function operator(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->getKey(), 'email_verified_at' => now()]);
    }

    /** The ordinary case: it finds what you can see. */
    public function test_it_finds_a_record_by_name(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'SEARCH1');

        $this->actingAs($this->operator(['view_any_clients', 'view_clients']));

        $this->getJson('/panel-search?q=Amina')
            ->assertOk()
            ->assertJsonPath('groups.0.items.0.title', 'Amina Achieng');
    }

    /**
     * ANOTHER ORGANISATION'S RECORD IS NOT FOUND, whatever is typed.
     *
     * This is the assertion the whole endpoint is judged on. The tenant scope
     * comes from the resource's own list query rather than from a `where`
     * written here - which is the point of reusing it, because a second query
     * is a second place for the scope to be forgotten.
     */
    public function test_it_never_returns_another_tenants_record(): void
    {
        $this->client($this->rival, 'Rival Customer', 'SEARCH2');

        $this->actingAs($this->operator(['view_any_clients', 'view_clients']));

        $response = $this->getJson('/panel-search?q=Rival')->assertOk();

        $this->assertSame(
            [],
            $response->json('groups'),
            'The palette returned a record belonging to another organisation.',
        );
    }

    /**
     * AND A RESOURCE SOMEBODY MAY NOT VIEW IS NOT SEARCHED.
     *
     * Typing part of a name and reading the answer IS reading the record,
     * whatever the list screen says - so the ability the list page asks for is
     * the ability this asks for.
     */
    public function test_it_skips_a_resource_the_person_cannot_view(): void
    {
        $this->client($this->tenant, 'Hidden Person', 'SEARCH3');

        // An operator with no client abilities at all.
        $this->actingAs($this->operator(['view_any_routers']));

        $response = $this->getJson('/panel-search?q=Hidden')->assertOk();

        $this->assertSame([], $response->json('groups'));
    }

    /**
     * A ONE-LETTER TERM ASKS NOTHING. Every keystroke is a request, and a
     * prefix that matches a third of the table is a scan nobody reads.
     */
    public function test_a_short_term_returns_nothing(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'SEARCH4');

        $this->actingAs($this->operator(['view_any_clients', 'view_clients']));

        $this->getJson('/panel-search?q=A')->assertOk()->assertJsonPath('groups', []);
    }

    /**
     * THE LINK CARRIES THE PANEL'S PREFIX. A palette on a portal mounted at
     * `/reseller` that returned `/clients/5` sends somebody to a route that
     * portal does not serve - the same silent failure the sidebar had.
     */
    public function test_results_link_inside_the_current_panel(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'SEARCH5');

        $this->actingAs($this->operator(['view_any_clients', 'view_clients']));

        $href = $this->getJson('/panel-search?q=Amina')->json('groups.0.items.0.href');

        $this->assertStringStartsWith('/clients/', (string) $href);
    }
}
