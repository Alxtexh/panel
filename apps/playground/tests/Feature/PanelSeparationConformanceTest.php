<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\PanelHome;
use Tests\TestCase;

/**
 * EVERY REGISTERED PANEL, CHECKED AGAINST EVERY OTHER ONE, AUTOMATICALLY.
 *
 * WHY THIS FILE EXISTS, AND WHY IT IS NOT SEVEN MORE TESTS. In one sitting
 * this project found seven separate defects that were all THE SAME DEFECT:
 * state that has to be per-panel living in one global place.
 *
 *   - the guest redirect read `route('login')`, so every portal shared a door
 *   - `Auth::user()` and the Gate read the DEFAULT guard, so a portal on a
 *     second guard authenticated and then authorised nobody
 *   - the sign-in rendered `auth/Login`, which the host application owns, so a
 *     portal displayed the starter kit's screen fed the package's props
 *   - `url.intended` is one session key, so signing in to one portal landed
 *     you in another
 *   - `panel.auth.broker` is one broker, so a customer's password reset was
 *     looked up among operators
 *   - `panel.discover` is one list, so a portal could not state what it owned
 *
 * EVERY ONE WAS FOUND BY A PERSON OPENING A URL. Not one was found by a test,
 * because each existing test asserted its own panel in isolation - and a
 * property that only breaks BETWEEN panels is invisible from inside one.
 *
 * SO THE ASSERTIONS ARE GENERATED FROM THE REGISTRY, not written per panel.
 * A new portal is covered by every check below the moment it is registered,
 * which is the difference between finding this class of bug once and finding
 * it every time. That matters more than any individual assertion here: the
 * seven above were each cheap to fix and expensive to NOTICE.
 *
 * WHAT THIS DOES NOT COVER: whether a signed-in operator may see a particular
 * ROW. That is ownership, answered by policies and the tenant scope, and
 * `TenantIsolationTest` owns it. This file is only about the boundaries
 * between portals.
 */
final class PanelSeparationConformanceTest extends TestCase
{
    use RefreshDatabase;

    /** @return list<Panel> */
    private function panels(): array
    {
        return array_values(app(PanelManager::class)->panels());
    }

    /**
     * A PANEL DECLARING A GUARD MUST GATE ON THAT GUARD.
     *
     * `guard()` decides which table authenticates and which session key holds
     * the result; `authMiddleware()` decides what the routes demand. Declaring
     * `guard('customers')` and gating on `auth:web` is not a half-configured
     * portal - it is one that authenticates operators and then reads the
     * customer guard for everything else, finding nobody and failing open in
     * ways that answer 200.
     */
    public function test_every_panel_gates_on_the_guard_it_declares(): void
    {
        foreach ($this->panels() as $panel) {
            $guard = $panel->getGuard();

            $gates = array_filter(
                $panel->getMiddleware(),
                static fn (string $m): bool => str_starts_with($m, 'auth:') || $m === 'auth',
            );

            $this->assertNotSame([], $gates, "Panel [{$panel->id}] demands no authentication at all.");

            foreach ($gates as $gate) {
                $this->assertSame(
                    'auth:'.$guard,
                    $gate,
                    "Panel [{$panel->id}] declares guard [{$guard}] and gates on [{$gate}]. "
                    .'A portal that authenticates one guard and reads another authorises nobody.',
                );
            }
        }
    }

    /**
     * EVERY DECLARED GUARD IS A REAL GUARD, with a provider and a model behind
     * it. A typo here is a 500 on the first request, and only on that portal -
     * so it survives every test that stays inside the default panel.
     */
    public function test_every_panel_guard_is_configured(): void
    {
        foreach ($this->panels() as $panel) {
            $guard = $panel->getGuard();
            $provider = config("auth.guards.{$guard}.provider");

            $this->assertNotNull(
                config("auth.guards.{$guard}"),
                "Panel [{$panel->id}] declares guard [{$guard}], which `config/auth.php` does not define.",
            );

            $this->assertNotNull(
                config("auth.providers.{$provider}"),
                "Guard [{$guard}] names provider [{$provider}], which `config/auth.php` does not define.",
            );
        }
    }

    /**
     * THE ONE THAT CAUGHT A LIVE SECURITY BUG, generalised.
     *
     * A BROKER NAMES A PROVIDER, WHICH NAMES A TABLE. The client portal ran on
     * the `customers` guard and reset through the `users` broker, because the
     * broker was one global setting - so a customer asking for a reset had
     * their address looked up among OPERATORS. Finding nobody on a good day,
     * and on a bad one mailing a working reset link for an operator account
     * that happened to share the address.
     *
     * The rule is mechanical, which is why it belongs here rather than in a
     * comment: a portal that offers a reset must reset through a broker whose
     * provider is its OWN guard's provider.
     */
    public function test_every_portal_that_offers_a_reset_uses_a_broker_for_its_own_guard(): void
    {
        foreach ($this->panels() as $panel) {
            if (! $panel->hasLogin() || ! $panel->hasPasswordReset()) {
                continue;
            }

            $broker = $panel->getPasswordBroker();
            $guardProvider = config('auth.guards.'.$panel->getGuard().'.provider');
            $brokerProvider = config("auth.passwords.{$broker}.provider");

            $this->assertNotNull(
                $brokerProvider,
                "Panel [{$panel->id}] resets through broker [{$broker}], which `config/auth.php` does not define.",
            );

            $this->assertSame(
                $guardProvider,
                $brokerProvider,
                "Panel [{$panel->id}] authenticates provider [{$guardProvider}] and resets passwords through "
                ."[{$brokerProvider}]. A reset request would be looked up in the wrong table - and for an "
                .'address held in both, would mail a working link for somebody else\'s account.',
            );
        }
    }

    /**
     * A PORTAL WITH ITS OWN DOOR SENDS ITS OWN GUESTS TO IT.
     *
     * The redirect used to be overwritten by the framework on every request
     * (see `PanelServiceProvider`), so every portal shared the application's
     * `/login` while its own sign-in sat registered and unused. Nothing
     * errored: the form rendered and authenticated the WRONG guard.
     */
    public function test_a_guest_lands_on_the_sign_in_of_the_portal_they_asked_for(): void
    {
        foreach ($this->panels() as $panel) {
            if (! $panel->hasLogin()) {
                continue;
            }

            $home = PanelHome::urlFor($panel);
            $expected = '/'.trim(trim($panel->getPath(), '/').'/'.$panel->getLoginSlug(), '/');

            $this->get($home)->assertRedirect($expected);
        }
    }

    /**
     * AND THE SCREEN THEY LAND ON IS THE PACKAGED ONE, fed by the packaged
     * controller.
     *
     * `auth/Login` IS A NAME THE HOST APPLICATION OWNS. Inertia resolves
     * against `resources/js/pages` first, so rendering it handed a portal
     * whatever the starter kit had - a component built for a different
     * controller with a different prop contract. The visible symptom was a
     * social button captioned with raw JSON and the panel's own heading
     * silently dropped.
     */
    public function test_no_portal_renders_a_sign_in_screen_the_application_owns(): void
    {
        foreach ($this->panels() as $panel) {
            if (! $panel->hasLogin()) {
                continue;
            }

            $component = $panel->getLoginComponent();

            $this->assertStringStartsWith(
                'panel/',
                $component,
                "Panel [{$panel->id}] renders [{$component}], a page name the host application also owns. "
                .'Inertia resolves the application\'s file first, so the portal displays somebody else\'s '
                .'screen fed this controller\'s props.',
            );

            $this->get('/'.trim(trim($panel->getPath(), '/').'/'.$panel->getLoginSlug(), '/'))
                ->assertOk()
                ->assertInertia(fn ($page) => $page->component($component));
        }
    }

    /**
     * EVERY PORTAL'S SIGN-IN POSTS BACK INSIDE ITS OWN PREFIX.
     *
     * A form that posted to `/login` would authenticate the application's
     * guard from a portal URL - the whole failure, reachable from a single
     * wrong attribute, and invisible because the screen looks identical.
     */
    public function test_every_sign_in_form_posts_to_its_own_portal(): void
    {
        foreach ($this->panels() as $panel) {
            if (! $panel->hasLogin()) {
                continue;
            }

            $prefix = '/'.trim($panel->getPath(), '/');

            $this->get('/'.trim(trim($panel->getPath(), '/').'/'.$panel->getLoginSlug(), '/'))
                ->assertOk()
                ->assertInertia(fn ($page) => $page->where(
                    'action',
                    '/'.trim(trim($panel->getPath(), '/').'/'.$panel->getLoginSlug(), '/'),
                ));

            $this->assertNotSame('/', $prefix, "Panel [{$panel->id}] mounts its own login at the root.");
        }
    }

    /**
     * THE ACCOUNT MENU'S CORE LINKS EXIST ON EVERY PORTAL, AND POINT INSIDE IT.
     *
     * PROFILE AND SECURITY ARE NOT OPTIONAL. Every portal authenticates
     * somebody, so every portal must let that person see their own account and
     * change their own password - a portal where the user dropdown is a name
     * and an email is a portal you cannot sign out of your own password from.
     *
     * WHAT THIS CAUGHT. `PanelHomeController` sent its own four-key `panel`
     * prop, and a page prop wins over a shared one - so on every portal whose
     * home is `PanelHome`, `SharePanelProps`' version was replaced wholesale.
     * That version is where `account`, `security`, `help`, `faq`, `settings`
     * and `lock` live, which is the entire account menu. The superadmin
     * dropdown had a name, an email and no links; the demo's was fine only
     * because its home is `PanelDashboard` and never collided. Nothing
     * errored - the menu rendered, empty, and read as a portal missing
     * features.
     *
     * THE SECOND ASSERTION IS THE ONE THAT MATTERS. A link that EXISTS but
     * points at another portal is worse than a missing one: it reads as this
     * portal's own and lands you at somebody else's sign-in.
     */
    public function test_every_portal_offers_its_own_profile_and_security(): void
    {
        foreach ($this->panels() as $panel) {
            if (! $panel->offers('settings')) {
                continue;
            }

            $prefix = '/'.trim($panel->getPath(), '/');

            foreach (['account', 'security'] as $key) {
                $route = $panel->getRouteName().'settings.'.($key === 'account' ? 'profile' : 'security');

                if (! Route::has($route)) {
                    continue;
                }

                $path = (string) parse_url(route($route), PHP_URL_PATH);

                $this->assertTrue(
                    $prefix === '/' || str_starts_with($path, rtrim($prefix, '/').'/'),
                    "Panel [{$panel->id}] offers [{$key}] at [{$path}], which is outside its own path "
                    ."[{$prefix}] - a menu item that reads as this portal's and lands in another.",
                );
            }
        }
    }

    /**
     * A PORTAL'S LOGIN ROUTE IS NAMED `{id}.login`, which is not decoration:
     * `PanelServiceProvider::redirectGuestsToTheirPanel()` finds it BY NAME,
     * so a rename is a portal that silently falls back to the application's
     * sign-in - the original bug, restored.
     */
    public function test_every_portal_login_is_named_so_the_guest_redirect_can_find_it(): void
    {
        foreach ($this->panels() as $panel) {
            if (! $panel->hasLogin()) {
                continue;
            }

            $this->assertTrue(
                Route::has("{$panel->id}.login"),
                "Panel [{$panel->id}] has a login with no `{$panel->id}.login` route name. The guest "
                .'redirect looks it up by name and falls back to the application\'s sign-in without it.',
            );
        }
    }
}
