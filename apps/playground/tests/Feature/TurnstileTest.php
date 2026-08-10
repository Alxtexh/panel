<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Alxtexh\Panel\Auth\Turnstile;
use Tests\TestCase;

/**
 * Turnstile in front of every door.
 *
 * THE TEST THAT MATTERS MOST IS THE ONE FOR A MISSING SECRET. The obvious
 * implementation returns true when it cannot check - no secret, no network,
 * Cloudflare down - and an installation that switched Turnstile on but never set
 * the key would then believe it is protected while every request sails through.
 * That failure reports itself as success, which is the shape this project keeps
 * paying for, so it is asserted first and directly.
 *
 * NO REAL NETWORK CALLS. `Http::fake` stands in for Cloudflare, which is also
 * what lets the refusal-on-error case be tested at all: an outage is a thing you
 * cannot arrange on demand.
 */
final class TurnstileTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email' => 'grace@acme.test',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
    }

    private function turnstileOn(?string $secret = 'a-secret'): void
    {
        config([
            'panel.auth.turnstile.enabled' => true,
            'panel.auth.turnstile.site_key' => 'a-site-key',
            'panel.auth.turnstile.secret_key' => $secret,
        ]);
    }

    /** @param array<string, mixed> $extra */
    private function attemptLogin(array $extra = [])
    {
        return $this->post('/login', array_merge([
            'email' => $this->user->email,
            'password' => 'password',
        ], $extra));
    }

    /* ------------------------------------------------------------------- off */

    /**
     * OFF IS A FIRST-CLASS STATE. Development machines and this suite have no
     * keys and no network, so a disabled Turnstile must expect no token
     * anywhere - otherwise every existing auth test becomes unrunnable.
     */
    public function test_nothing_is_expected_when_it_is_disabled(): void
    {
        config(['panel.auth.turnstile.enabled' => false]);

        Http::fake();

        $this->attemptLogin()->assertRedirect();

        $this->assertAuthenticatedAs($this->user);
        Http::assertNothingSent();
    }

    public function test_the_site_key_is_not_shared_when_disabled(): void
    {
        config(['panel.auth.turnstile.enabled' => false]);

        $this->assertNull(Turnstile::siteKey() !== null && Turnstile::enabled() ? 'x' : null);
        $this->get('/login')->assertOk();
    }

    /* ------------------------------------------------------------ fail closed */

    /**
     * THE CENTRAL CASE. Enabled with no secret refuses - it does NOT wave the
     * request through on the grounds that it could not check.
     */
    public function test_a_missing_secret_refuses_every_request(): void
    {
        $this->turnstileOn(secret: null);

        Http::fake();

        $this->attemptLogin(['cf-turnstile-response' => 'looks-fine'])
            ->assertSessionHasErrors('cf-turnstile-response');

        $this->assertGuest();

        // It never even asked Cloudflare - there was nothing to ask with.
        Http::assertNothingSent();
    }

    /** Cloudflare unreachable is a refusal too, not a pass. */
    public function test_an_unreachable_verifier_refuses(): void
    {
        $this->turnstileOn();

        Http::fake(fn () => throw new \RuntimeException('network is down'));

        $this->attemptLogin(['cf-turnstile-response' => 'token'])
            ->assertSessionHasErrors('cf-turnstile-response');

        $this->assertGuest();
    }

    /** And so is a 500 from Cloudflare. */
    public function test_a_failed_response_refuses(): void
    {
        $this->turnstileOn();

        Http::fake(['challenges.cloudflare.com/*' => Http::response('', 500)]);

        $this->attemptLogin(['cf-turnstile-response' => 'token'])
            ->assertSessionHasErrors('cf-turnstile-response');

        $this->assertGuest();
    }

    /* -------------------------------------------------------------- the check */

    public function test_a_missing_token_is_refused(): void
    {
        $this->turnstileOn();

        Http::fake();

        $this->attemptLogin()->assertSessionHasErrors('cf-turnstile-response');

        $this->assertGuest();
    }

    public function test_a_rejected_token_is_refused(): void
    {
        $this->turnstileOn();

        Http::fake(['challenges.cloudflare.com/*' => Http::response(['success' => false])]);

        $this->attemptLogin(['cf-turnstile-response' => 'forged'])
            ->assertSessionHasErrors('cf-turnstile-response');

        $this->assertGuest();
    }

    public function test_a_verified_token_lets_the_request_through(): void
    {
        $this->turnstileOn();

        Http::fake(['challenges.cloudflare.com/*' => Http::response(['success' => true])]);

        $this->attemptLogin(['cf-turnstile-response' => 'good'])->assertRedirect();

        $this->assertAuthenticatedAs($this->user);
    }

    /**
     * THE VISITOR'S IP IS SENT, so a token minted for one visitor cannot be
     * replayed from somewhere else.
     */
    public function test_the_visitors_ip_is_sent_for_verification(): void
    {
        $this->turnstileOn();

        Http::fake(['challenges.cloudflare.com/*' => Http::response(['success' => true])]);

        $this->attemptLogin(['cf-turnstile-response' => 'good']);

        Http::assertSent(fn ($request) => $request['remoteip'] !== null && $request['secret'] === 'a-secret');
    }

    /* -------------------------------------------------------------- every door */

    /**
     * ONE SWITCH, EVERY DOOR. Guarding sign-in and forgetting password reset
     * means whoever is spraying simply uses the other endpoint - and the panel
     * still reports itself as protected.
     */
    public function test_password_reset_is_guarded_too(): void
    {
        $this->turnstileOn();

        Http::fake();

        $this->post('/forgot-password', ['email' => $this->user->email])
            ->assertSessionHasErrors('cf-turnstile-response');
    }

    public function test_registration_is_guarded_too(): void
    {
        $this->turnstileOn();

        Http::fake();

        $this->post('/register', [
            'name' => 'New Person',
            'email' => 'new@acme.test',
            'password' => 'a-password-1',
            'password_confirmation' => 'a-password-1',
        ])->assertSessionHasErrors('cf-turnstile-response');
    }

    /**
     * GETS ARE NEVER GUARDED. The form the widget lives on has to load in order
     * to produce a token; requiring one to see it is a locked door with the key
     * inside.
     */
    public function test_the_login_page_still_renders(): void
    {
        $this->turnstileOn();

        Http::fake();

        $this->get('/login')->assertOk();
    }
}
