<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Customer;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Providers\SharedLoginPanelProvider;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\RateLimiter;

/**
 * One URL, two user populations, credential decides the destination.
 *
 * THE PROBLEM THIS SOLVES. A SaaS that has both staff and end-users faces a
 * routing decision: send each population to a separate login URL, or let them
 * share one. Separate URLs work, but they shift the routing decision onto the
 * user before the user has signed in, which is precisely the moment they have
 * no basis for the decision - they do not know whether they are "staff" or
 * "customer" in this system's vocabulary, and the error message when they pick
 * wrong is "invalid credentials" rather than "wrong door".
 *
 * A SHARED ENDPOINT FIXES THE FRAMING. The user supplies a credential; the
 * server discovers which panel it belongs to and redirects there. The user
 * never sees the backend distinction - they just sign in.
 *
 * REGISTRATION ORDER IS PRIORITY ORDER. Both `operator` and `member` panels
 * are registered; `operator` (web guard) is first. When a credential succeeds
 * the first guard, the loop stops - the member guard is never tried. That means
 * a user in BOTH tables signs into the operator panel, which is the declared
 * behaviour of registration order, not an accident.
 *
 * RATE LIMITING IS SHARED ACROSS GUARDS. One budget covers all attempts on the
 * shared URL, keyed on email+ip. Exhausting the operator guard does not give a
 * free pass to the member guard.
 *
 * INTENDED URL SAFETY. After success, `url.intended` is honoured only if the
 * URL belongs to the matched panel's prefix. A session carrying an intended URL
 * for the operator portal should not redirect a member to a screen they have
 * not authenticated for.
 */
final class SharedLoginTest extends TestCase
{
    use RefreshDatabase;

    private User $operator;

    private Customer $member;

    protected function getPackageProviders($app): array
    {
        return [...parent::getPackageProviders($app), SharedLoginPanelProvider::class];
    }

    protected function defineEnvironment($app): void
    {
        parent::defineEnvironment($app);

        tap($app->make(Repository::class), static function (Repository $config): void {
            $config->set('auth.guards.members', [
                'driver' => 'session',
                'provider' => 'customers',
            ]);

            $config->set('auth.providers.customers', [
                'driver' => 'eloquent',
                'model' => Customer::class,
            ]);
        });
    }

    protected function setUp(): void
    {
        parent::setUp();

        RateLimiter::clear('operator@example.test|127.0.0.1');
        RateLimiter::clear('member@example.test|127.0.0.1');
        RateLimiter::clear('wrong@example.test|127.0.0.1');

        $this->operator = User::create([
            'name' => 'Alice',
            'email' => 'operator@example.test',
            'password' => 'secret',
        ]);

        $this->member = Customer::create([
            'name' => 'Bob',
            'email' => 'member@example.test',
            'password' => 'secret',
        ]);
    }

    /**
     * THE SHARED URL EXISTS AND SERVES THE SIGN-IN FORM.
     *
     * A shared login with no route is no login at all. This confirms that
     * `PanelRoutes::registerSharedLogin` registered the GET at `/portal`.
     */
    public function test_the_shared_login_page_is_reachable(): void
    {
        $this->get('/portal')->assertOk();
    }

    /**
     * OPERATOR CREDENTIALS → OPERATOR PANEL.
     *
     * The `web` guard accepts these; it is tried first (operator panel is
     * registered before member). The session is established and the redirect
     * lands on the operator portal's home.
     */
    public function test_operator_credentials_redirect_to_the_operator_panel(): void
    {
        $this->post('/portal', [
            'email' => 'operator@example.test',
            'password' => 'secret',
        ])->assertRedirect('/operator');
    }

    /**
     * MEMBER CREDENTIALS → MEMBER PANEL.
     *
     * The `web` guard rejects these (no User row for this email). The loop
     * continues to the `members` guard, which accepts them. Redirect lands on
     * the member portal's home.
     */
    public function test_member_credentials_redirect_to_the_member_panel(): void
    {
        $this->post('/portal', [
            'email' => 'member@example.test',
            'password' => 'secret',
        ])->assertRedirect('/member');
    }

    /**
     * WRONG PASSWORD, EVERY GUARD FAILS.
     *
     * Neither guard accepts the credentials. The controller exhausts the loop
     * and throws a validation exception with the standard `auth.failed`
     * message, which Inertia surfaces as a field error.
     */
    public function test_wrong_credentials_return_a_validation_error(): void
    {
        $this->post('/portal', [
            'email' => 'operator@example.test',
            'password' => 'wrong',
        ])->assertSessionHasErrors(['email']);
    }

    /**
     * UNKNOWN EMAIL, EVERY GUARD FAILS.
     *
     * No row exists in either table. Same outcome as a wrong password, because
     * returning a different message for an unknown email would confirm account
     * existence to an enumerator.
     */
    public function test_unknown_email_returns_a_validation_error(): void
    {
        $this->post('/portal', [
            'email' => 'nobody@example.test',
            'password' => 'secret',
        ])->assertSessionHasErrors(['email']);
    }

    /**
     * THE SESSION IS ESTABLISHED AFTER A SUCCESSFUL SIGN-IN.
     *
     * `actingAs()` is not available here - this is testing the real auth path.
     * Confirm the guard session was written by following the redirect and
     * asserting the guard reports the user as authenticated.
     */
    public function test_operator_is_authenticated_after_signing_in(): void
    {
        $this->post('/portal', [
            'email' => 'operator@example.test',
            'password' => 'secret',
        ]);

        $this->assertAuthenticatedAs($this->operator, 'web');
    }

    public function test_member_is_authenticated_after_signing_in(): void
    {
        $this->post('/portal', [
            'email' => 'member@example.test',
            'password' => 'secret',
        ]);

        $this->assertAuthenticatedAs($this->member, 'members');
    }

    /**
     * INTENDED URL IS HONOURED WHEN IT BELONGS TO THE MATCHED PANEL.
     *
     * An operator who was redirected to `/portal` while trying to reach
     * `/operator/dashboard` ends up at their intended destination rather than
     * on the bare panel root.
     */
    public function test_intended_url_within_the_matched_panel_is_followed(): void
    {
        $this->withSession(['url.intended' => 'http://localhost/operator/dashboard']);

        $this->post('/portal', [
            'email' => 'operator@example.test',
            'password' => 'secret',
        ])->assertRedirect('/operator/dashboard');
    }

    /**
     * INTENDED URL FROM A DIFFERENT PANEL IS DISCARDED.
     *
     * A member who somehow has a session carrying an operator intended URL
     * should NOT be sent into the operator portal. After authenticating as a
     * member, the redirect falls back to the member panel's home.
     *
     * WITHOUT THIS CHECK the member would land on `/operator/dashboard`,
     * receive a 403 (or worse, briefly access it), and see a panel they have
     * not authenticated for.
     */
    public function test_intended_url_from_a_different_panel_is_discarded(): void
    {
        $this->withSession(['url.intended' => 'http://localhost/operator/dashboard']);

        $this->post('/portal', [
            'email' => 'member@example.test',
            'password' => 'secret',
        ])->assertRedirect('/member');
    }

    /**
     * RATE LIMITER BLOCKS AFTER TOO MANY FAILED ATTEMPTS.
     *
     * The shared endpoint shares one rate-limit budget across all guards. After
     * `panel.auth.max_attempts` failures the response carries a validation
     * error naming the throttle, not `auth.failed`.
     */
    public function test_too_many_failed_attempts_trigger_throttle_error(): void
    {
        $max = max(1, (int) config('panel.auth.max_attempts', 5));

        for ($i = 0; $i < $max; $i++) {
            $this->post('/portal', [
                'email' => 'operator@example.test',
                'password' => 'wrong',
            ]);
        }

        $this->post('/portal', [
            'email' => 'operator@example.test',
            'password' => 'secret',
        ])->assertSessionHasErrors(['email']);

        $errors = session('errors');
        $this->assertStringContainsString(
            'Too many',
            (string) $errors->first('email'),
            'The rate-limit error was not the throttle message.',
        );
    }
}
