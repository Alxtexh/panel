<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use App\Panel\Pages\OrganisationPage;
use App\Panel\Pages\UserManagementPage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use PanelKit\Panel\Pages\Page;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * Screens that are not resources, declared rather than wired.
 *
 * WHAT THIS REPLACES. A non-resource screen used to mean four separate things
 * written by hand - a controller, a route, a navigation entry, a permission
 * check - with nothing verifying that any of them agreed. The reference app
 * carries twenty-two such screens and seventy routes. A page that shipped,
 * worked and was tested could still appear in no menu at all, and nothing
 * failed when that happened.
 *
 * THE TWO SHAPES ARE BOTH COVERED HERE ON PURPOSE. Half the reference app's page
 * controllers only render; the other half also DO something. A mechanism proved
 * against the first half only is one that handles the easy screens and sends
 * every screen with a button back to hand-written routes - which is how this
 * kind of work arrives at "most of the pages, mostly".
 */
final class PanelPageMechanismTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Somebody signed in and holding nothing.
     *
     * `roleless()` MATTERS. The factory's default state attaches an
     * Administrator - which is right for most tests and made the first version
     * of the denial test pass a 200, because the "operator without the grant"
     * held every grant there is.
     */
    private function operator(): User
    {
        return User::factory()->roleless()->create(['tenant_id' => $this->tenantId()]);
    }

    /** @param list<string> $abilities */
    private function operatorWith(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenantId()]);
    }

    /** Any signed-in operator, for the screens that gate on nothing. */
    private function anyone(): User
    {
        return User::factory()->create(['tenant_id' => $this->tenantId()]);
    }

    private function tenantId(): int|string|null
    {
        return User::query()->whereNotNull('tenant_id')->value('tenant_id')
            ?? Tenant::create(['name' => 'Acme', 'slug' => 'acme'])->getKey();
    }

    /* ------------------------------------------------------- discovery */

    public function test_pages_are_discovered_from_the_filesystem(): void
    {
        $pages = app(PanelManager::class)->pages();

        $this->assertArrayHasKey('user-management', $pages);
        $this->assertArrayHasKey('organisation', $pages);
    }

    /**
     * A SLUG AND A RESOURCE KEY CANNOT BE THE SAME THING.
     *
     * Both are URL segments inside one panel prefix, so a clash means two
     * screens claiming one address and the loser is not a 404 - it is absent,
     * with a navigation entry still pointing at it. That exact collision shipped
     * in 0.2.0 between a `roles` page and a `roles` resource and had to be
     * reported by `panel:doctor` after the fact.
     *
     * Throwing at registration turns a screen that quietly disappears into a
     * boot failure naming both classes.
     */
    public function test_a_page_slug_that_collides_with_a_resource_key_throws(): void
    {
        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('would be unreachable');

        app(PanelManager::class)->registerPages([ClientsShapedPage::class]);
    }

    /* --------------------------------------------------------- routing */

    /** THE PURE-RENDER SHAPE, with a parameter in the path. */
    public function test_a_declared_page_is_routed_and_renders(): void
    {
        $props = $this->actingAs($this->operatorWith(['manage_roles']))
            ->get('/user-management/roles')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertSame('roles', $props['tab']);
        $this->assertArrayHasKey('roles', $props);
    }

    /** And the page header comes from the class, not typed into the component. */
    public function test_the_page_declares_its_own_heading(): void
    {
        $props = $this->actingAs($this->operatorWith(['manage_roles']))
            ->get('/user-management')
            ->viewData('page')['props'];

        $this->assertSame(UserManagementPage::label(), $props['pageHeading']);
    }

    /** Its ability is enforced by the mechanism, not by a guard in a controller. */
    public function test_the_declared_ability_is_enforced(): void
    {
        $this->actingAs($this->operator())
            ->get('/user-management')
            ->assertForbidden();
    }

    /* --------------------------------------------------------- actions */

    /**
     * THE SECOND SHAPE: a page that does things.
     *
     * `PUT /settings/organisation` is the ordinary save - an action on the
     * page's OWN uri. The first version of the mechanism routed every action at
     * `slug/{action}`, which would have made saving a settings screen a PUT to
     * `/settings/organisation/update`: a URL nobody would choose, invented by
     * the framework. Converting a real screen is what surfaced it.
     */
    public function test_a_page_action_is_routed_on_the_pages_own_uri(): void
    {
        $user = $this->anyone();

        $this->actingAs($user)
            ->put('/settings/organisation', ['name' => 'Renamed Ltd', 'logo' => null])
            ->assertRedirect();

        $this->assertDatabaseHas('tenants', ['id' => $user->tenant_id, 'name' => 'Renamed Ltd']);
    }

    /** And actions declared with their own path hang off the page. */
    public function test_actions_keep_the_urls_the_screen_already_had(): void
    {
        $this->assertSame('settings/organisation', OrganisationPage::uri());
        $this->assertSame('', OrganisationPage::actionUris()['update']);
        $this->assertSame('logo/upload', OrganisationPage::actionUris()['uploadLogo']);
    }

    /** An action nobody declared is not an endpoint. */
    public function test_an_undeclared_action_is_not_routed(): void
    {
        $this->actingAs($this->anyone())
            ->post('/settings/organisation/destroy-everything')
            ->assertNotFound();
    }

    /* ------------------------------------------ abilities and navigation */

    /**
     * A PAGE'S ABILITY IS IN THE MATRIX, or three things go wrong silently: it
     * cannot be granted, `grants_all` never tops it up, and
     * `panel:permissions --prune` deletes it as a name corresponding to nothing.
     */
    public function test_page_abilities_appear_in_the_registry(): void
    {
        $this->assertContains('manage_roles', Abilities::all());
    }

    /**
     * A PAGE MAY BE ROUTED AND DELIBERATELY ABSENT FROM THE MENU, which both
     * converted screens are.
     *
     * `App\Panel\Pages` states the rule: one destination, one place to find it.
     * User management is reached from the account menu and the organisation
     * from the settings index, so putting either in the sidebar as well makes
     * the shorter list longer and teaches nobody where the screen lives.
     *
     * Converting them put both there, because the classes declared a group -
     * the mechanism working correctly and being used wrongly.
     */
    public function test_both_converted_pages_stay_out_of_the_sidebar(): void
    {
        $titles = array_column(app(PanelManager::class)->panelPages(), 'title');

        $this->assertNotContains(UserManagementPage::label(), $titles);
        $this->assertNotContains(OrganisationPage::label(), $titles);
    }

    /**
     * AND A NAVIGATION HREF IS BUILT FROM THE URI, NOT THE SLUG.
     *
     * `OrganisationPage` is slugged `organisation` and mounted at
     * `settings/organisation`. Building the entry from the slug produced a
     * sidebar link to `/organisation`, which is routed to nothing - a menu item
     * that 404s, shipped and unnoticed because the page itself worked.
     */
    public function test_a_navigation_href_uses_the_pages_real_address(): void
    {
        $this->assertSame('settings/organisation', OrganisationPage::navigationPath());

        // Optional segments are dropped; the page picks its own default tab.
        $this->assertSame('user-management', UserManagementPage::navigationPath());
    }
}

/**
 * A page whose slug is an existing resource key - the collision, made real.
 *
 * Declared here rather than in the app because registering it for real would
 * make `/clients` ambiguous for the whole suite, which is the fault under test
 * rather than a fixture for it.
 */
final class ClientsShapedPage extends Page
{
    public static function slug(): string
    {
        return 'clients';
    }

    public static function component(): string
    {
        return 'Nothing';
    }

    public static function data(Request $request): array
    {
        return [];
    }
}
