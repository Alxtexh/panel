<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Http\Controllers\PanelAuthController;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ViewErrorBag;
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
                ->defaults('panel', 'authfixture')
                ->name('authfixture.login.store');

            Route::get('two-factor-challenge', [PanelAuthController::class, 'showTwoFactorChallenge'])
                ->defaults('panel', 'authfixture');

            Route::post('two-factor-challenge', [PanelAuthController::class, 'twoFactorChallenge'])
                ->defaults('panel', 'authfixture')
                ->name('authfixture.two-factor.login.store');

            Route::post('logout', [PanelAuthController::class, 'logout'])
                ->defaults('panel', 'authfixture')->middleware('auth:web');

            Route::post('forgot-password', [PanelAuthController::class, 'sendResetLink'])
                ->defaults('panel', 'authfixture')
                ->name('authfixture.password.email');
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
                    ->component('panel/auth/Login')
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

    public function test_a_2fa_user_does_not_reach_the_panel_until_the_challenge_succeeds(): void
    {
        $user = User::factory()->withTwoFactor()->create([
            'tenant_id' => $this->tenant->getKey(),
            'email' => 'operator@example.test',
            'password' => bcrypt('correct-horse'),
        ]);

        $this->post('/authfixture/login', [
            'email' => $user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/authfixture/two-factor-challenge');

        $this->assertGuest();
        $this->get('/dashboard')->assertRedirect();

        $this->post('/authfixture/two-factor-challenge', [
            'recovery_code' => 'recovery-code-1',
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
    public function test_a_plain_installation_hides_social_when_no_keys(): void
    {
        // No credentials anywhere is what a fresh application looks like.
        config(['services.google' => [], 'services.github' => []]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(
                fn ($page) => $page
                    ->where('turnstileSiteKey', null)
                    ->where('socialProviders', [])
                    ->where('registerUrl', null),
            );
    }

    /**
     * ONLY CONFIGURED PROVIDERS APPEAR; CREDENTIALS ARE THE SWITCH.
     *
     * `SocialProviders::offered()` lists providers with both client id and
     * secret when socialite is on (unless `show_unconfigured` is opted in).
     */
    public function test_a_provider_with_credentials_is_marked_configured_at_this_panels_url(): void
    {
        config([
            'services.google' => ['client_id' => 'id', 'client_secret' => 'secret'],
            'services.github' => [],
        ]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(
                fn ($page) => $page
                    ->has('socialProviders', 1)
                    ->where('socialProviders.0.key', 'google')
                    ->where('socialProviders.0.label', 'Google')
                    ->where('socialProviders.0.configured', true)
                    /*
                     * PANEL-PREFIXED, because the callback has to sign somebody
                     * into THIS portal's guard. A root-relative `/auth/google/
                     * redirect` would hand a reseller portal's sign-in to the
                     * admin panel.
                     */
                    ->where('socialProviders.0.url', '/authfixture/auth/google/redirect'),
            );
    }

    /**
     * HALF A CONFIGURATION IS NOT CONFIGURED. By default the button is hidden;
     * with `show_unconfigured` opted in it stays visible and explains the
     * missing secret instead of starting a broken OAuth flow.
     */
    public function test_a_provider_missing_its_secret_is_hidden_by_default(): void
    {
        config([
            'services.google' => ['client_id' => 'id', 'client_secret' => null],
            'services.github' => [],
        ]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('socialProviders', []));
    }

    /**
     * THE SITE KEY TRAVELS ONLY WHEN TURNSTILE IS ON.
     *
     * `enabled` false with keys still configured is a staging box that must
     * not challenge. Sending the key anyway would render a widget whose token
     * the middleware never checks.
     *
     * BOTH KEYS ARE REQUIRED. A site key with no secret is not "on": the
     * widget would mint tokens nothing can verify.
     */
    public function test_the_turnstile_key_is_sent_only_when_it_is_enabled(): void
    {
        config([
            'panel.auth.turnstile.enabled' => false,
            'panel.auth.turnstile.site_key' => 'site-key-here',
            'panel.auth.turnstile.secret_key' => 'secret-here',
        ]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('turnstileSiteKey', null));

        config(['panel.auth.turnstile.enabled' => null]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('turnstileSiteKey', 'site-key-here'));
    }

    public function test_a_site_key_without_a_secret_does_not_show_the_widget(): void
    {
        config([
            'panel.auth.turnstile.site_key' => 'site-key-here',
            'panel.auth.turnstile.secret_key' => null,
        ]);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('turnstileSiteKey', null));
    }

    public function test_login_without_a_turnstile_token_fails_when_keys_are_set(): void
    {
        config([
            'panel.auth.turnstile.site_key' => 'site-key-here',
            'panel.auth.turnstile.secret_key' => 'secret-here',
        ]);

        $user = $this->operator();

        $this->post('/authfixture/login', [
            'email' => $user->email,
            'password' => 'correct-horse',
        ])->assertSessionHasErrors('cf-turnstile-response');

        $this->assertGuest();
    }

    public function test_socialite_false_hides_configured_providers(): void
    {
        config([
            'services.google' => ['client_id' => 'id', 'client_secret' => 'secret'],
        ]);

        app(PanelManager::class)->panel('authfixture')->socialite(false);

        $this->get('/authfixture/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('socialProviders', []));
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
