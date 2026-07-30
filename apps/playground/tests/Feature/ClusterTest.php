<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Roadmap 4.1: several resources presented as one navigation item, with a
 * shared sub-navigation on every screen inside.
 *
 * The playground's proof is the Network cluster - Plans and Routers as
 * members, the Connections workspace named by the cluster - so these tests
 * read the REAL navigation payload and the REAL index page rather than
 * exercising the classes in isolation.
 */
final class ClusterTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
    }

    private function admin(): User
    {
        return User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /** @param list<string> $abilities */
    private function operator(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    /** @return list<array<string, mixed>> */
    private function nav(User $user): array
    {
        return $this->actingAs($user)->get('/dashboard')->assertOk()
            ->viewData('page')['props']['panelNav'];
    }

    /* ----------------------------------------------------------- the sidebar */

    public function test_members_collapse_into_one_entry_wearing_the_clusters_name(): void
    {
        $nav = $this->nav($this->admin());

        $titles = array_column($nav, 'title');

        $this->assertContains('Network', $titles);
        $this->assertNotContains('Plans', $titles);
        $this->assertNotContains('Routers', $titles);
    }

    /** The entry links to the FIRST member by navigation sort - Routers at 20. */
    public function test_the_entry_links_to_the_first_member(): void
    {
        $network = collect($this->nav($this->admin()))->firstWhere('title', 'Network');

        $this->assertSame('/routers', $network['href']);
    }

    /**
     * The entry stands for every member, and says so: the coverage test reads
     * `members` to prove a collapsed resource is still linked. The cluster's
     * named pages ride along, because the sub-navigation is how they are
     * reached too.
     */
    public function test_the_entry_carries_every_member_it_stands_for(): void
    {
        $network = collect($this->nav($this->admin()))->firstWhere('title', 'Network');

        $this->assertSame(['/routers', '/plans', '/workspaces/connections'], $network['members']);
    }

    public function test_a_person_who_may_open_no_member_gets_no_entry_at_all(): void
    {
        $nav = $this->nav($this->operator(['view_any_clients']));

        $this->assertNotContains('Network', array_column($nav, 'title'));
    }

    /**
     * Ability to open ONE member is enough for the entry - linking to that one.
     *
     * BOTH SPELLINGS OF THE PLANS ABILITY, because `Abilities::forModel()`
     * resolves the Plan MODEL to the first registered resource that owns it -
     * `editable-plans` - so that is the name `PlanPolicy` actually checks.
     * A registry-order dependency worth knowing about, not one this test is
     * here to relitigate.
     */
    public function test_the_entry_follows_what_this_person_may_open(): void
    {
        $network = collect($this->nav($this->operator(['view_any_plans', 'view_any_editable_plans'])))
            ->firstWhere('title', 'Network');

        $this->assertNotNull($network);
        $this->assertSame('/plans', $network['href']);
    }

    /* ---------------------------------------------------- the sub-navigation */

    public function test_every_member_screen_carries_the_shared_sub_navigation(): void
    {
        $cluster = $this->actingAs($this->admin())->get('/plans')->assertOk()
            ->viewData('page')['props']['cluster'];

        $this->assertSame('Network', $cluster['label']);
        $this->assertSame(
            ['Routers', 'Plans', 'Connections'],
            array_column($cluster['items'], 'title'),
        );

        // The strip marks where you are - and only where you are.
        $current = array_column($cluster['items'], 'current', 'title');
        $this->assertTrue($current['Plans']);
        $this->assertFalse($current['Routers']);
    }

    /** A sibling this person may not open never reaches the client. */
    public function test_the_sub_navigation_is_permission_filtered(): void
    {
        $cluster = $this->actingAs($this->operator(['view_any_plans', 'view_any_editable_plans']))
            ->get('/plans')->assertOk()
            ->viewData('page')['props']['cluster'];

        $this->assertNotContains('Routers', array_column($cluster['items'], 'title'));
    }

    /** A resource outside any cluster sends null - the strip never renders. */
    public function test_an_unclustered_resource_has_no_sub_navigation(): void
    {
        $cluster = $this->actingAs($this->admin())->get('/clients')->assertOk()
            ->viewData('page')['props']['cluster'];

        $this->assertNull($cluster);
    }
}
