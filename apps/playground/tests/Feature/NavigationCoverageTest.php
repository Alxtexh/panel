<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Pages;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Routing\Route as RouteInstance;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * Every screen is reachable, and every link goes somewhere.
 *
 * THIS TEST EXISTS BECAUSE PAGES KEPT VANISHING. Backups, logs and the activity
 * trail were all built, tested, and then reachable from nothing - one of them
 * only from the account popup, one from no menu at all. The user's words were
 * "u just add pages and they disappear", and they were right: the sidebar was a
 * hand-maintained TypeScript array, so forgetting an entry was silent and the
 * page's own tests still passed. A screen with no way in is worth exactly as
 * much as a screen that was never written.
 *
 * IT CHECKS BOTH DIRECTIONS, because there are two ways to be wrong:
 *
 *   ORPHANS - a rendered screen that appears in no menu and is not on the
 *   reasoned allow-list. This is the failure that kept happening.
 *
 *   DEAD LINKS - a menu entry pointing at a path that no longer routes, or that
 *   errors when opened. This is the failure that happens LATER, when a route is
 *   renamed and the navigation quietly starts advertising a 404.
 *
 * WHAT COUNTS AS A SCREEN IS DECIDED BY ASKING, NOT BY GUESSING. The sweep
 * requests each candidate and treats it as a screen only if the response is an
 * Inertia page. Pattern-matching on controller names or URI prefixes would have
 * to be kept in step with the routes by hand - which is the same class of
 * bookkeeping that produced the orphans in the first place.
 */
final class NavigationCoverageTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        /*
         * A REAL TENANT, because permissions are team-scoped and a user without
         * one resolves every ability to false. That is not a quirk to work
         * around here - it is the correct behaviour, and a sweep run by a user
         * who silently fails every check would skip the guarded screens and
         * report full coverage.
         */
        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        // The default factory user holds a grants-all role, so nothing is
        // skipped for lack of an ability and every screen really is rendered.
        $this->admin = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /**
     * Paths the navigation offers: resources, plus the declared pages.
     *
     * Resource hrefs are read from the SAME registry the sidebar reads, not
     * rebuilt here, so a resource that stops appearing in the menu stops
     * counting as coverage too.
     *
     * @return list<string>
     */
    private function linkedPaths(): array
    {
        $props = $this->actingAs($this->admin)->get('/dashboard')->viewData('page')['props'];

        /*
         * READ FROM THE PROPS, NOT FROM `Pages::all()` DIRECTLY.
         *
         * The declared list is no longer the whole menu: the Trash entry comes
         * from the package, per panel, so a generated portal links its own bin
         * without this application editing anything. Reading what the client is
         * actually sent covers both sources and cannot drift from either.
         */
        return [
            ...array_column($props['panelNav'], 'href'),
            ...array_column($props['panelPages'], 'href'),
            ...array_keys(Pages::intentionallyUnlinked()),
        ];
    }

    /**
     * GET routes that a signed-in person could open by typing the path.
     *
     * REQUIRED PARAMETERS ARE EXCLUDED. `/clients/{id}/edit` is reached from the
     * record it belongs to, and no menu could link it without inventing an id.
     * Optional ones are filled with nothing, so `/user-management/{tab?}` is
     * swept as `/user-management` - the path somebody would actually type.
     *
     * @return list<string>
     */
    private function candidatePaths(): array
    {
        $paths = [];

        foreach (Route::getRoutes() as $route) {
            /** @var RouteInstance $route */
            if (! in_array('GET', $route->methods(), true)) {
                continue;
            }

            if (! $this->requiresAuth($route)) {
                continue;
            }

            $uri = preg_replace('/\{[a-zA-Z_]+\?\}/', '', $route->uri());

            // A leftover brace means a REQUIRED parameter.
            if (str_contains((string) $uri, '{')) {
                continue;
            }

            $paths[] = '/'.trim(rtrim((string) $uri, '/'), '/');
        }

        /*
         * RESOURCE SCREENS, WHICH THE LOOP ABOVE CANNOT SEE.
         *
         * Every resource list is served by one route - `/{resource}` - so the
         * required-parameter rule above skips it, and the sweep has never
         * examined a single resource screen. That was invisible while every
         * resource appeared in the sidebar: they were all linked, so nothing
         * looked missing.
         *
         * It stopped being invisible the moment a resource was hidden from
         * navigation. A hidden resource is exactly the thing this test exists to
         * find - a screen that renders and that nothing links to - and it was
         * the one kind of screen the sweep could not reach.
         *
         * Asked of the registry rather than the router, because the registry is
         * what decides the key and therefore the URL.
         */
        foreach (array_keys(app(PanelManager::class)->resourcesFor(
            (string) config('panel.default', 'admin'),
        )) as $key) {
            $paths[] = '/'.$key;
        }

        return array_values(array_unique($paths));
    }

    /**
     * BOTH SPELLINGS ARE ACCEPTED, and that is not defensiveness.
     *
     * `gatherMiddleware()` returns whatever the route was declared with - the
     * alias `auth` from a route file, or the class when a group was expanded -
     * and matching only the class silently produced an EMPTY candidate list.
     * The sweep passed instantly with nothing swept, which is precisely the
     * shape of failure this whole test exists to prevent.
     */
    private function requiresAuth(RouteInstance $route): bool
    {
        foreach ($route->gatherMiddleware() as $middleware) {
            if (! is_string($middleware)) {
                continue;
            }

            if ($middleware === 'auth' || str_starts_with($middleware, 'auth:')) {
                return true;
            }

            if (str_starts_with($middleware, Authenticate::class)) {
                return true;
            }
        }

        return false;
    }

    /**
     * The page component behind a path, or null when the path is not a screen.
     *
     * NULL IS THE INTERESTING RETURN. Plenty of authenticated GET routes are not
     * screens - a JSON document, an image, a redirect, an endpoint that demands
     * a freshly confirmed password. None of them belong in a menu, and none of
     * them should make this test complain.
     */
    private function componentAt(string $path): ?string
    {
        $response = $this->actingAs($this->admin)->get($path);

        if ($response->getStatusCode() !== 200) {
            return null;
        }

        try {
            $page = $response->viewData('page');
        } catch (\Throwable) {
            return null;
        }

        return is_array($page) ? ($page['component'] ?? null) : null;
    }

    public function test_every_screen_is_reachable_from_somewhere(): void
    {
        $linked = $this->linkedPaths();
        $orphans = [];
        $swept = 0;

        foreach ($this->candidatePaths() as $path) {
            $component = $this->componentAt($path);

            if ($component === null) {
                continue;
            }

            $swept++;

            if (in_array($path, $linked, true)) {
                continue;
            }

            $orphans[] = "{$path} (renders {$component})";
        }

        /*
         * A SWEEP THAT SWEPT NOTHING PASSES, so it has to be asserted. This
         * already happened once: `requiresAuth` matched only the middleware
         * CLASS while the routes are declared with the alias, the candidate list
         * came back empty, and the test went green in 40ms having checked
         * nothing at all.
         */
        $this->assertGreaterThan(10, $swept, 'The sweep found almost no screens, so it proves nothing.');

        $this->assertSame([], $orphans, implode("\n", [
            'These screens are reachable from no menu:',
            ...array_map(static fn (string $o): string => "  - {$o}", $orphans),
            '',
            'Give each one a home in App\Panel\Pages::all(), or list it in',
            'intentionallyUnlinked() WITH THE REASON it is reached some other way.',
        ]));
    }

    /**
     * Nothing in the menu is a broken promise.
     *
     * A navigation entry that 404s is worse than a missing one: it tells the
     * operator a feature exists and then denies it, and they have no way to know
     * which of the two is true.
     */
    public function test_every_declared_page_opens(): void
    {
        foreach (Pages::all() as $page) {
            // `#`-prefixed entries are client-side triggers, not destinations -
            // see the session-expiry note in Pages. There is nothing to GET.
            if (str_starts_with($page['href'], '#')) {
                continue;
            }

            $this->assertNotNull(
                $this->componentAt($page['href']),
                "The navigation offers “{$page['title']}” at {$page['href']}, which does not render a screen.",
            );
        }
    }

    /**
     * The allow-list describes reality.
     *
     * A path that stops existing should not keep its excuse: the entry becomes a
     * note about a screen nobody can open, and the next person reads it as
     * evidence the screen is fine.
     *
     * IT ASKS WHETHER THE PATH ROUTES, not whether it renders on demand. Some of
     * these are gated on something the sweep deliberately does not satisfy -
     * `/settings/security` sends you to confirm your password first - and a
     * check that insisted on a 200 would either fail on a healthy screen or
     * force the test to unlock things it has no business unlocking.
     */
    public function test_the_allow_list_has_no_stale_entries(): void
    {
        $registered = $this->candidatePaths();

        foreach (Pages::intentionallyUnlinked() as $path => $reason) {
            $this->assertContains(
                $path,
                $registered,
                "{$path} is excused from the navigation (“{$reason}”) but no longer routes anywhere.",
            );
        }
    }

    /**
     * A screen behind a required parameter is still reachable from something.
     *
     * THE SWEEP ABOVE HAS A HOLE THE SIZE OF HALF THE APP. It skips any route
     * with a required parameter, because no menu can link `/clients/{id}/edit`
     * without inventing an id - which is correct, and left the detail screens
     * checked by nothing at all. Those are the screens most likely to break: a
     * record page reached from a row action, an edit form reached from a view
     * page, a mail thread reached from a list.
     *
     * SO THE PARAMETER IS FILLED IN AND THE PAGE IS OPENED. It cannot ask "is
     * this linked" - the answer lives in a Vue template - but it can ask the
     * stronger question the orphan sweep is really a proxy for: does this screen
     * still render at all? A detail page that 500s is invisible until somebody
     * clicks a row, and nothing else in the suite opens these.
     */
    public function test_every_detail_screen_still_opens(): void
    {
        $client = Client::query()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'name' => 'Coverage Subject',
            'access_code' => 'COVER-1',
            'phone' => '+254700000009',
            'status' => 'active',
            'plan_type' => 'fibre',
            'expiry_date' => now()->addYear(),
        ]);

        /*
         * NAMED ONE BY ONE, WITH THE VALUE THAT MAKES EACH REAL. A generic "put
         * a 1 in every parameter" sweep produces 404s that look like passes -
         * the page never renders, so nothing is proved, and the test goes green
         * having opened nothing.
         */
        $screens = [
            '/clients/'.$client->id => 'a record page',
            '/clients/'.$client->id.'/edit' => 'an edit form',
            '/clients/create' => 'a create form',
            '/workspaces/connections' => 'a workspace',
            '/screens/error/500' => 'an error preview',
            '/user-management/roles' => 'a tab of user management',
        ];

        foreach ($screens as $path => $what) {
            $component = $this->componentAt($path);

            $this->assertNotNull($component, "{$path} ({$what}) does not render a screen.");
        }
    }

    /**
     * The sidebar never repeats what the account menu already offers.
     *
     * A DESTINATION IN TWO PLACES IS WORSE THAN IN ONE. It teaches nobody where
     * the thing lives, and it lengthens the list people scan all day in order to
     * duplicate a list they already had. Backups, Logs and User management were
     * briefly in both; this is what stops the next one drifting back.
     *
     * IT COMPARES TWO DECLARATIONS, not a declaration and a regex. The previous
     * version scraped `href="/..."` out of the Vue component, which worked until
     * those literals became generated route helpers - at which point it found
     * nothing to compare and would have passed on anything. It caught itself,
     * because it asserted it had found links at all; the fix is to stop parsing
     * a template for a fact that can be stated.
     */
    public function test_nothing_appears_in_both_the_sidebar_and_the_account_menu(): void
    {
        $sidebar = array_column(Pages::all(), 'href');

        foreach (Pages::inAccountMenu() as $path => $helper) {
            $this->assertNotContains(
                $path,
                $sidebar,
                "{$path} is in the account menu and in the sidebar.",
            );

            $this->assertArrayHasKey(
                $path,
                Pages::intentionallyUnlinked(),
                "{$path} is in the account menu and is not accounted for by the coverage sweep.",
            );
        }
    }

    /**
     * And the account menu really does offer them.
     *
     * THE OTHER HALF OF THE PAIR. Without this, removing a link from the menu
     * would leave the path excused from the sidebar by a declaration describing
     * a menu entry that no longer exists - a screen orphaned by two files
     * agreeing about nothing.
     *
     * It matches the ROUTE HELPER rather than a URL, because that is what the
     * component now uses, and a helper that stops being imported is a link that
     * stopped being rendered.
     */
    public function test_the_account_menu_offers_what_it_claims_to(): void
    {
        $menu = (string) file_get_contents(resource_path('js/components/UserMenuContent.vue'));

        $this->assertNotSame('', $menu, 'The account menu component could not be read.');

        foreach (Pages::inAccountMenu() as $path => $helper) {
            $this->assertStringContainsString(
                $helper,
                $menu,
                "The account menu is credited with {$path} but does not use `{$helper}`.",
            );
        }
    }

    /* -------------------------------------------------- one portal at a time */

    /**
     * A GENERATED PORTAL'S SIDEBAR IS ITS OWN.
     *
     * Every page in `Pages::all()` is routed at the ROOT, so the reseller portal
     * was listing Mail, the API reference and the error previews - links OUT of
     * the portal, into the operator application, with no way back but the
     * browser button. Nothing failed, because every one of those links resolves.
     *
     * The resources were scoped per panel from the first day; the pages were
     * not, and the difference was invisible until somebody opened a portal.
     */
    public function test_a_generated_portal_lists_none_of_the_applications_pages(): void
    {
        $props = $this->actingAs($this->admin)->get('/reseller/reseller-plans')->assertOk()
            ->viewData('page')['props'];

        $hrefs = array_column($props['panelPages'], 'href');

        foreach ($hrefs as $href) {
            $this->assertStringStartsWith(
                '/reseller',
                $href,
                "The reseller portal links [{$href}], which leaves the portal.",
            );
        }
    }

    /**
     * AND ITS HOME IS ITS OWN ROOT, not the application's dashboard.
     *
     * The first entry in the sidebar was a hardcoded `/dashboard`, so the first
     * thing in a generated portal's navigation took you out of it.
     */
    public function test_a_generated_portal_goes_home_to_itself(): void
    {
        $props = $this->actingAs($this->admin)->get('/reseller/reseller-plans')->assertOk()
            ->viewData('page')['props'];

        $this->assertSame('/reseller', $props['panelHome']['href']);
        $this->assertFalse($props['panelHome']['isDefault']);
    }

    /** The operator portal keeps everything it had. */
    public function test_the_application_portal_still_lists_its_own_pages(): void
    {
        $props = $this->actingAs($this->admin)->get('/dashboard')->assertOk()
            ->viewData('page')['props'];

        $hrefs = array_column($props['panelPages'], 'href');

        $this->assertContains('/apps/mail', $hrefs);
        $this->assertContains('/docs', $hrefs);
        $this->assertTrue($props['panelHome']['isDefault']);
    }

    /**
     * THE ACCOUNT MENU IN A GENERATED PORTAL IS THE ACCOUNT, AND NOTHING ELSE.
     *
     * User management, backups, logs, monitoring and the lock screen are all
     * routed at the ROOT - they belong to the application, not to whichever
     * portal you happen to be standing in. Offering them in a generated portal
     * makes the account menu another way out of it, which is the same failure
     * the sidebar had.
     *
     * ASSERTED AGAINST THE COMPONENT, because this is a client-side decision
     * driven by a server-side fact. Nothing inside PHP can see the menu, and
     * nothing inside the component can see the panel - the shared prop is the
     * only place both are true, so the test checks that the component actually
     * consults it.
     */
    public function test_the_account_menu_hides_the_applications_screens_in_other_portals(): void
    {
        $menu = (string) file_get_contents(resource_path('js/components/UserMenuContent.vue'));

        $this->assertStringContainsString(
            'isApplicationPortal',
            $menu,
            'The account menu no longer asks which portal it is in.',
        );

        // The TEMPLATE, not the file - the imports name every route the menu can
        // reach, so searching the whole thing would match a line that renders
        // nothing.
        preg_match('/<template>(.*)<\/template>/s', $menu, $template);

        $this->assertNotEmpty($template, 'The account menu has no template.');

        preg_match_all('/<DropdownMenuItem(.*?)<\/DropdownMenuItem>/s', $template[1], $items);

        $this->assertGreaterThan(4, count($items[0]), 'No menu items were found to check.');

        $ungated = 0;

        foreach ($items[0] as $item) {
            /*
             * THE ACCOUNT AND THE WAY OUT OF IT are the two things that mean
             * the same in every portal; everything else is the application's.
             *
             * `settingsIndex()`, NOT `edit()` - roadmap 3.7 replaced the
             * account menu's direct link to Profile with the searchable
             * settings index. It stays ungated for the same reason Profile
             * already was: `/settings` is registered outside every panel's
             * route group, exactly like `/settings/profile` and
             * `/settings/organisation` always were, so it resolves to the
             * default panel regardless of which portal linked here - there
             * is no boundary at the route level for a menu gate to enforce.
             */
            if (str_contains($item, 'settingsIndex()') || str_contains($item, 'logout()')) {
                $ungated++;

                continue;
            }

            /*
             * THE BIN IS THE EXCEPTION, AND IT SHARPENS THE RULE RATHER THAN
             * WEAKENING IT.
             *
             * Everything else here is routed at the ROOT - user management, the
             * backups, the logs, the activity trail - so offering any of them
             * inside a generated portal offers a way OUT of it. A bin is routed
             * under the portal's own prefix and holds what was deleted from THAT
             * portal, so hiding it outside the application portal would orphan a
             * screen the portal owns.
             *
             * It is gated on something stricter instead: the server sends
             * `panelTrash` as null where a portal has no bin at all, so the item
             * cannot render pointing at a route that does not exist.
             */
            if (str_contains($item, 'trash')) {
                $this->assertStringContainsString(
                    'v-if="trash"',
                    $item,
                    'The bin is offered unconditionally, including in portals that have none.',
                );

                continue;
            }

            $this->assertStringContainsString(
                'isApplicationPortal',
                $item,
                "An account-menu item is offered in every portal, including ones that cannot serve it:\n".$item,
            );
        }

        // Both of them, still there: a portal whose account menu offers nothing
        // is as wrong as one that offers everything.
        $this->assertSame(2, $ungated, 'The profile or the way out of it has gone missing.');
    }
}
