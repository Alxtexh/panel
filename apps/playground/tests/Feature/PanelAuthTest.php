<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ViewErrorBag;
use PanelKit\Panel\Http\Controllers\PanelAuthController;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * Signing in to a panel, which the package could not do until v0.5.0.
 *
 * THE GAP THIS CLOSES. Breeze, Jetstream and Fortify each register ONE login,
 * at the application root, for ONE guard. `make:panel reseller` produces a
 * panel with its own guard on its own path and there is no second starter kit
 * to hand it - so every generated portal meant hand-writing a login controller,
 * and until somebody did, the first page anybody opened died with `Route
 * [login] not defined`. `verify-install.sh` had to paste a fake login route
 * into its fresh application before it could test anything, which is the
 * clearest evidence the gap was real.
 *
 * THE ROUTES ARE DECLARED HERE RATHER THAN GENERATED INTO THE REFERENCE APP.
 * `make:panel --auth` writes `routes/panel-<id>-auth.php`, which the package
 * loads by glob - so generating one in the playground would add a permanent
 * sign-in screen to the demo for a panel that exists only to be tested. The
 * generator's OUTPUT is asserted as text in `GeneratorTest`; what is exercised
 * here is the packaged controller those routes point at.
 */
final class PanelAuthTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        app(PanelManager::class)->registerPanel(
            Panel::make('authfixture')
                ->path('authfixture')
                ->guard('web')
                ->middleware(['web'])
                ->authMiddleware(['auth:web']),
        );

        Route::middleware('web')->prefix('authfixture')->group(function (): void {
            Route::get('login', [PanelAuthController::class, 'showLogin'])
                ->defaults('panel', 'authfixture')->name('authfixture.login');

            Route::post('login', [PanelAuthController::class, 'login'])
                ->defaults('panel', 'authfixture');

            Route::post('logout', [PanelAuthController::class, 'logout'])
                ->defaults('panel', 'authfixture')->middleware('auth:web');

            Route::post('forgot-password', [PanelAuthController::class, 'sendResetLink'])
                ->defaults('panel', 'authfixture');
        });

        RateLimiter::clear($this->throttleKey());
    }

    private function operator(string $password = 'correct-horse'): User
    {
        return User::factory()->create([
            'tenant_id' => $this->tenant->getKey(),
            'email' => 'operator@example.test',
            'password' => bcrypt($password),
            'email_verified_at' => now(),
        ]);
    }

    private function throttleKey(): string
    {
        return 'operator@example.test|127.0.0.1';
    }

    /**
     * The validation message on `email`, read from the APPLICATION's session.
     *
     * NOT `$response->getSession()`, which returned an empty bag here and made
     * two assertions pass vacuously - `assertSame('', '')` is true and proves
     * nothing about whether the two failures are distinguishable. Every helper
     * below asserts the message is non-empty first, for that reason.
     */
    private function emailError(): string
    {
        $errors = session()->get('errors');

        return $errors instanceof ViewErrorBag
            ? (string) $errors->first('email')
            : '';
    }

    /* ------------------------------------------------------------- the form */

    public function test_the_sign_in_screen_renders_with_its_own_action(): void
    {
        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(
                fn ($page) => $page
                    ->component('auth/Login')
                    // THE ACTION IS THE SERVER'S, never guessed by the
                    // component: a generated portal's route names belong to the
                    // application and the screen belongs to the package.
                    ->where('action', '/authfixture/login'),
            );
    }

    /* -------------------------------------------------------------- signing in */

    public function test_correct_credentials_sign_in_and_land_on_the_panel(): void
    {
        $user = $this->operator();

        $this->post('/authfixture/login', [
            'email' => $user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/authfixture');

        $this->assertAuthenticatedAs($user);
    }

    /**
     * THE SESSION ID CHANGES, and this is not housekeeping.
     *
     * Without regeneration the id that existed before sign-in still identifies
     * the session after it, so anyone who planted one - a link carrying a
     * session id, a shared machine - is signed in as whoever used it. Session
     * fixation is old and still the easiest authentication bug to leave in,
     * because nothing about the screen looks wrong.
     */
    public function test_the_session_is_regenerated_on_sign_in(): void
    {
        $user = $this->operator();

        $this->get('/authfixture/login');
        $before = session()->getId();

        $this->post('/authfixture/login', [
            'email' => $user->email,
            'password' => 'correct-horse',
        ]);

        $this->assertNotSame($before, session()->getId());
    }

    /**
     * ONE MESSAGE FOR A WRONG PASSWORD AND FOR AN ADDRESS THAT DOES NOT EXIST.
     *
     * Distinguishing them turns the form into an account-existence oracle:
     * anybody can learn, one address at a time, who has an account here.
     */
    public function test_a_wrong_password_and_an_unknown_address_say_the_same_thing(): void
    {
        $user = $this->operator();

        $this->post('/authfixture/login', [
            'email' => $user->email,
            'password' => 'not-the-password',
        ])->assertSessionHasErrors('email');

        $wrongPassword = $this->emailError();

        RateLimiter::clear($this->throttleKey());
        session()->forget('errors');

        $this->post('/authfixture/login', [
            'email' => 'nobody@example.test',
            'password' => 'not-the-password',
        ])->assertSessionHasErrors('email');

        $unknownAddress = $this->emailError();

        $this->assertGuest();
        $this->assertNotSame('', $wrongPassword, 'No message was produced, so this compares nothing.');

        $this->assertSame(
            $wrongPassword,
            $unknownAddress,
            'The two failures are distinguishable, which makes the form an account-existence oracle.',
        );
    }

    /**
     * THE THROTTLE IS KEYED ON ADDRESS AND IP TOGETHER.
     *
     * Address alone would let anybody lock a colleague out of their own account
     * by failing to sign in as them; ip alone would make one office share a
     * budget with whoever else is behind the same NAT.
     */
    public function test_repeated_failures_are_throttled(): void
    {
        $user = $this->operator();

        for ($i = 0; $i < 5; $i++) {
            $this->post('/authfixture/login', [
                'email' => $user->email,
                'password' => 'wrong',
            ]);
        }

        $this->post('/authfixture/login', [
            'email' => $user->email,
            'password' => 'correct-horse',
        ])->assertSessionHasErrors('email');

        $this->assertGuest();

        $this->assertStringContainsString(
            'seconds',
            $this->emailError(),
            'The correct password was accepted after five failures - the throttle did not fire.',
        );
    }

    /* ------------------------------------------------------------ signing out */

    /**
     * INVALIDATED, NOT JUST LOGGED OUT. `Auth::logout` forgets the user and
     * leaves the session row intact, so everything else written into it
     * survives into the next person's visit on a shared machine.
     */
    public function test_signing_out_invalidates_the_session(): void
    {
        $user = $this->operator();

        $this->actingAs($user);
        $before = session()->getId();

        $this->post('/authfixture/logout')->assertRedirect('/authfixture/login');

        $this->assertGuest();
        $this->assertNotSame($before, session()->getId());
    }

    public function test_signing_out_is_behind_the_guard(): void
    {
        $this->post('/authfixture/logout')->assertRedirect();

        $this->assertGuest();
    }

    /* -------------------------------------------------------- password resets */

    /**
     * THE SAME ANSWER WHETHER THE ADDRESS EXISTS OR NOT, for the same reason as
     * the sign-in failure above. Laravel's broker returns distinct statuses and
     * rendering them would be more helpful and would also be an oracle.
     */
    public function test_a_reset_request_answers_identically_for_a_stranger(): void
    {
        $user = $this->operator();

        $known = $this->post('/authfixture/forgot-password', ['email' => $user->email]);
        $unknown = $this->post('/authfixture/forgot-password', ['email' => 'nobody@example.test']);

        $this->assertSame(
            $known->getSession()->get('status'),
            $unknown->getSession()->get('status'),
        );
    }

    /* ------------------------------------------------------------- the prefill */

    /**
     * A PREFILLED DEMO ACCOUNT IS REFUSED OUTSIDE `local`, decided on the
     * SERVER. A component cannot be trusted to know which environment it is in,
     * and the failure mode of getting this wrong is credentials on a production
     * sign-in screen.
     */
    public function test_the_prefill_is_refused_outside_local(): void
    {
        config([
            'panel.auth.authfixture.prefill' => ['email' => 'demo@example.test', 'password' => 'secret'],
            'app.env' => 'production',
        ]);

        app()->detectEnvironment(static fn (): string => 'production');

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('prefill', null));
    }

    public function test_the_prefill_is_offered_locally(): void
    {
        config([
            'panel.auth.authfixture.prefill' => ['email' => 'demo@example.test', 'password' => 'secret'],
        ]);

        app()->detectEnvironment(static fn (): string => 'local');

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('prefill.email', 'demo@example.test'));
    }

    /* --------------------------------------------- the optional halves */

    /**
     * A PLAIN INSTALLATION OFFERS NONE OF THEM.
     *
     * This is the assertion that matters more than the ones below it. The
     * reference app's login carries Turnstile, social providers and a sign-up
     * link, and the temptation when bringing the packaged screen to parity is to
     * ship all three ON - which gives every fresh installation a Turnstile
     * widget with no site key and a "Sign up" link to a route nobody registered.
     * Absent is the default; present is opt-in.
     */
    public function test_a_plain_installation_offers_no_optional_sign_in_extras(): void
    {
        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(
                fn ($page) => $page
                    ->where('turnstileSiteKey', null)
                    ->where('socialProviders', [])
                    ->where('registerUrl', null),
            );
    }

    public function test_a_declared_provider_is_offered_with_the_url_the_app_gave(): void
    {
        config([
            'panel.auth.authfixture.social' => [
                'google' => ['label' => 'Google', 'url' => '/auth/google/redirect'],
            ],
        ]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(
                fn ($page) => $page
                    ->where('socialProviders.0.key', 'google')
                    ->where('socialProviders.0.label', 'Google')
                    // NEVER DERIVED. Where a provider redirect lives depends on
                    // how the application wired Socialite.
                    ->where('socialProviders.0.url', '/auth/google/redirect'),
            );
    }

    /**
     * A PROVIDER WITH NO URL IS DROPPED, not rendered as a dead button. Half a
     * configuration is the normal state of somebody mid-setup, and a button that
     * goes nowhere on a sign-in screen is worse than no button.
     */
    public function test_a_provider_without_a_url_is_not_offered(): void
    {
        config([
            'panel.auth.authfixture.social' => [
                'github' => ['label' => 'GitHub'],
                'google' => ['label' => 'Google', 'url' => '/auth/google/redirect'],
            ],
        ]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(
                fn ($page) => $page
                    ->has('socialProviders', 1)
                    ->where('socialProviders.0.key', 'google'),
            );
    }

    /**
     * THE SITE KEY TRAVELS ONLY WHEN TURNSTILE IS ON.
     *
     * `enabled` false with a key still configured is the ordinary shape of an
     * installation that turned it off for a staging box, and sending the key
     * anyway would render a widget whose token the middleware never checks.
     */
    public function test_the_turnstile_key_is_sent_only_when_it_is_enabled(): void
    {
        config([
            'panel.auth.turnstile.enabled' => false,
            'panel.auth.turnstile.site_key' => 'site-key-here',
        ]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('turnstileSiteKey', null));

        config(['panel.auth.turnstile.enabled' => true]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('turnstileSiteKey', 'site-key-here'));
    }

    /**
     * SIGN-UP IS OFF UNLESS SOMEBODY SAYS OTHERWISE. A panel is a staff tool far
     * more often than a product people join.
     */
    public function test_the_register_link_appears_only_when_declared(): void
    {
        config(['panel.auth.authfixture.register' => '/register']);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('registerUrl', '/register'));
    }
}
