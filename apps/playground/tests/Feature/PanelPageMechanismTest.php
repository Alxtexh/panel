<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use PanelKit\Panel\Pages\OrganisationPage;
use PanelKit\Panel\Pages\Page;
use PanelKit\Panel\Pages\UserManagementPage;
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

    /**
     * THE BUILT-IN ROLES SCREEN COLLIDES THE SAME WAY, AND FAILS THE SAME WAY.
     *
     * It is not a page - it is a route the package registers behind
     * `panel.routes.roles` - so `registerPages()` never sees it. Left to itself
     * that produced the identical fault with a different outcome: a resource
     * keyed `roles` took the URL and the permission matrix vanished, reported
     * only by `panel:doctor` after the event.
     *
     * `panel:doctor` no longer carries that check, because boot now refuses.
     * One fault, one failure mode, whichever screen would have lost.
     */
    public function test_the_packages_own_roles_route_refuses_to_collide(): void
    {
        $this->assertStringContainsString(
            'would leave the matrix unreachable',
            (string) file_get_contents(
                __DIR__.'/../../../../packages/panel/src/Http/PanelRoutes.php'
            ),
        );

        $this->assertStringNotContainsString(
            'hides the permission matrix',
            (string) file_get_contents(
                __DIR__.'/../../../../packages/panel/src/Commands/DoctorCommand.php'
            ),
            'The doctor check outlived the boot guard that replaced it.',
        );
    }

    /**
     * EVERY PAGE THE PACKAGE SHIPS IS ACTUALLY REACHABLE.
     *
     * `discover_pages` scans the APPLICATION's directory, so pages living in
     * `PanelKit\Panel\Pages` are invisible to it. `ChangelogPage` and
     * `EnvironmentPage` shipped that way: exported from the package, page files
     * written by `panel:install`, and never routed - screens that existed in
     * every sense except the one that matters.
     *
     * This is the third time that shape has shipped here (widgets with no host,
     * a roles route with no page file), which is why it is now a test rather
     * than a resolution.
     */
    public function test_every_page_the_package_ships_is_registered_once_enabled(): void
    {
        /*
         * ENABLED FIRST, because both of the package's pages are dormant until
         * an installation configures them - and a page that is dormant for the
         * right reason must not be mistaken for one nothing registers.
         */
        config([
            'panel.changelog' => [['version' => '1.0']],
            'panel.env.editable' => ['SUPPORT_EMAIL'],
        ]);

        $manager = new PanelManager;
        $registered = $manager->pages();

        foreach (glob(__DIR__.'/../../../../packages/panel/src/Pages/*Page.php') ?: [] as $file) {
            $class = 'PanelKit\\Panel\\Pages\\'.basename($file, '.php');

            if ((new \ReflectionClass($class))->isAbstract()) {
                continue;
            }

            $this->assertContains(
                $class,
                $registered,
                "{$class} ships with the package but nothing registers it, so it is routed nowhere.",
            );
        }
    }

    /**
     * AND A PAGE WITH NOTHING TO OFFER IS NOT ROUTED AT ALL.
     *
     * `ChangelogPage` registered itself into an installation with no release
     * notes and took `/whats-new` from the application's own changelog - same
     * URI, later registration wins, 304 lines of real content replaced by an
     * empty state. Not-enabled has to mean absent, not merely hidden.
     */
    public function test_a_dormant_package_page_is_not_registered(): void
    {
        config(['panel.changelog' => [], 'panel.env.editable' => []]);

        $pages = (new PanelManager)->pages();

        $this->assertArrayNotHasKey('whats-new', $pages);
        $this->assertArrayNotHasKey('environment', $pages);
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
