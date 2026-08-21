<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Models\ConnectedAccount;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Socialite\Contracts\Provider;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\User as SocialiteUser;
use Tests\TestCase;

/**
 * Signing in with a provider - which is mostly a file about who is turned away.
 *
 * THE ATTACK THIS EXISTS TO PREVENT is account takeover by email. The obvious
 * implementation matches the provider's email against `users.email` and signs
 * that person in; at a provider that does not prove the address belongs to
 * whoever holds it, an attacker registers with an administrator's address and
 * becomes them. Nothing in the logs looks unusual - somebody signed in with
 * Google, which is what the button is for.
 *
 * SO THE MATCH NEEDS BOTH SIDES TO HAVE PROVED SOMETHING: the provider must
 * verify the address, and the panel's own account must have a verified address
 * of its own. Either alone is not enough, and both conditions are asserted
 * below by removing one at a time.
 *
 * AND NO ACCOUNT IS EVER CREATED. Operators are invited, carrying a tenant and
 * a role; neither is knowable from a social callback, so a created user would
 * be signed in and able to see nothing.
 */
final class SocialLoginTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        config(['panel.tenancy.resolver' => fn () => $this->tenant->id]);

        // Credentials are the switch that turns a provider on - see SocialProviders.
        config([
            'services.google.client_id' => 'id',
            'services.google.client_secret' => 'secret',
            'services.google.redirect' => '/auth/google/callback',
        ]);
    }

    /** Stand in for the provider, returning whatever identity a test needs. */
    private function providerReturns(
        string $id,
        ?string $email,
        bool $verified = true,
    ): void {
        $account = new SocialiteUser;
        $account->map([
            'id' => $id,
            'nickname' => 'someone',
            'name' => 'Some One',
            'email' => $email,
            'avatar' => null,
        ]);
        $account->user = ['email_verified' => $verified];

        $driver = \Mockery::mock(Provider::class);
        $driver->shouldReceive('user')->andReturn($account);

        Socialite::shouldReceive('driver')->with('google')->andReturn($driver);
    }

    private function verifiedUser(string $email): User
    {
        return User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email' => $email,
            'email_verified_at' => now(),
        ]);
    }

    /* ------------------------------------------------------- who gets in */

    /** A previously linked account signs in, and that is the ordinary path. */
    public function test_a_linked_account_signs_in(): void
    {
        $user = $this->verifiedUser('grace@acme.test');

        ConnectedAccount::query()->create([
            // The default panel's guard. `user_id` alone names no table - see the
            // `guard` column on this table.
            'guard' => 'web',
            'user_id' => $user->getKey(),
            'provider' => 'google',
            'provider_id' => 'g-1',
            'email' => 'grace@acme.test',
        ]);

        $this->providerReturns('g-1', 'grace@acme.test');

        $this->get('/auth/google/callback')->assertRedirect();

        $this->assertAuthenticatedAs($user);
    }

    /**
     * A FIRST SIGN-IN LINKS ITSELF when both sides have proved the address -
     * otherwise every invited colleague would need a password sign-in first,
     * which is most of the value gone.
     */
    public function test_a_verified_address_on_both_sides_links_and_signs_in(): void
    {
        $user = $this->verifiedUser('grace@acme.test');

        $this->providerReturns('g-2', 'grace@acme.test', verified: true);

        $this->get('/auth/google/callback')->assertRedirect();

        $this->assertAuthenticatedAs($user);
        $this->assertDatabaseHas('connected_accounts', [
            'user_id' => $user->getKey(),
            'provider' => 'google',
            'provider_id' => 'g-2',
        ]);
    }

    /* ------------------------------------------------------ who does not */

    /** THE TAKEOVER. An address the provider has not verified matches nobody. */
    public function test_an_unverified_provider_address_does_not_sign_anybody_in(): void
    {
        $this->verifiedUser('grace@acme.test');

        $this->providerReturns('g-3', 'grace@acme.test', verified: false);

        $this->get('/auth/google/callback')->assertRedirect(route('login'));

        $this->assertGuest();
        $this->assertDatabaseCount('connected_accounts', 0);
    }

    /**
     * AND THE OTHER HALF: an account here whose own address was never
     * confirmed. That address is one somebody typed on an invitation, so
     * matching against it would let the provider decide whose invitation it was.
     */
    public function test_an_unverified_panel_account_is_not_matched(): void
    {
        User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email' => 'grace@acme.test',
            'email_verified_at' => null,
        ]);

        $this->providerReturns('g-4', 'grace@acme.test', verified: true);

        $this->get('/auth/google/callback')->assertRedirect(route('login'));

        $this->assertGuest();
    }

    /** An address nobody here holds creates nothing. */
    public function test_an_unknown_address_does_not_create_an_account(): void
    {
        $before = User::query()->count();

        $this->providerReturns('g-5', 'stranger@example.test');

        $this->get('/auth/google/callback')->assertRedirect(route('login'));

        $this->assertGuest();
        $this->assertSame($before, User::query()->count());
    }

    /** A provider without credentials still routes, and explains what to set. */
    public function test_an_unconfigured_provider_explains_the_missing_env_keys(): void
    {
        config(['services.github.client_id' => null, 'services.github.client_secret' => null]);

        $this->get('/auth/github/redirect')
            ->assertRedirect(route('login'))
            ->assertSessionHas('status', 'Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in .env');
    }

    /* ---------------------------------------------------------- attaching */

    /** Somebody signed in may attach a provider; no email matching is needed. */
    public function test_a_signed_in_person_can_connect_a_provider(): void
    {
        $user = $this->verifiedUser('grace@acme.test');

        $this->providerReturns('g-6', 'grace.personal@gmail.test');

        $this->actingAs($user)
            ->withSession(['social.intent' => 'link'])
            ->get('/auth/google/callback')
            ->assertRedirect('/settings/security');

        $this->assertDatabaseHas('connected_accounts', [
            'user_id' => $user->getKey(),
            'provider_id' => 'g-6',
        ]);
    }

    /**
     * BUT NOT ONE SOMEBODY ELSE HOLDS. Moving the link silently would hand
     * sign-in for their account to whoever reached the provider account.
     */
    public function test_a_provider_account_cannot_be_taken_from_another_user(): void
    {
        $owner = $this->verifiedUser('owner@acme.test');
        $other = $this->verifiedUser('other@acme.test');

        ConnectedAccount::query()->create([
            // The default panel's guard. `user_id` alone names no table - see the
            // `guard` column on this table.
            'guard' => 'web',
            'user_id' => $owner->getKey(),
            'provider' => 'google',
            'provider_id' => 'g-7',
        ]);

        $this->providerReturns('g-7', 'owner@acme.test');

        $this->actingAs($other)
            ->withSession(['social.intent' => 'link'])
            ->get('/auth/google/callback');

        $this->assertDatabaseHas('connected_accounts', [
            'provider_id' => 'g-7',
            'user_id' => $owner->getKey(),
        ]);
    }

    /** Detaching is allowed - and only your own. */
    public function test_a_connection_can_be_removed_but_not_somebody_elses(): void
    {
        $owner = $this->verifiedUser('owner@acme.test');
        $other = $this->verifiedUser('other@acme.test');

        $link = ConnectedAccount::query()->create([
            // The default panel's guard. `user_id` alone names no table - see the
            // `guard` column on this table.
            'guard' => 'web',
            'user_id' => $owner->getKey(),
            'provider' => 'google',
            'provider_id' => 'g-8',
        ]);

        $this->actingAs($other)
            ->delete("/settings/connected-accounts/{$link->id}")
            ->assertForbidden();

        $this->actingAs($owner)
            ->delete("/settings/connected-accounts/{$link->id}")
            ->assertRedirect();

        $this->assertDatabaseCount('connected_accounts', 0);
    }

    /* ------------------------------------------------------------ screens */

    /**
     * The sign-in screen lists the packaged catalogue; credentials mark which
     * buttons can start OAuth.
     *
     * Google and GitHub are configured at boot in `phpunit.xml` because
     * `PanelRoutes` decides whether social routes exist during boot.
     */
    public function test_the_login_screen_lists_all_provider_keys(): void
    {
        $props = $this->get(route('login'))
            ->assertOk()
            ->viewData('page')['props']['socialProviders'];

        $this->assertIsArray($props);
        $this->assertNotEmpty($props);

        $keys = array_column($props, 'key');
        $byKey = collect($props)->keyBy('key');

        foreach ([
            'google', 'github', 'gitlab', 'bitbucket', 'facebook',
            'linkedin', 'microsoft', 'apple', 'x',
            'discord', 'slack', 'twitch',
        ] as $key) {
            $this->assertContains($key, $keys, "missing provider key {$key}");
        }

        $this->assertTrue($byKey['google']['configured']);
        $this->assertTrue($byKey['github']['configured']);

        config(['services.github.client_secret' => null]);

        $after = collect($this->get(route('login'))
            ->assertOk()
            ->viewData('page')['props']['socialProviders'])->keyBy('key');

        $this->assertTrue($after['google']['configured']);
        $this->assertFalse($after['github']['configured']);
        $this->assertSame(
            'Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in .env',
            $after['github']['hint'],
        );
    }

    /** And the security screen lists what is attached, so it can be removed. */
    public function test_the_security_screen_lists_connected_accounts(): void
    {
        $user = $this->verifiedUser('grace@acme.test');

        ConnectedAccount::query()->create([
            // The default panel's guard. `user_id` alone names no table - see the
            // `guard` column on this table.
            'guard' => 'web',
            'user_id' => $user->getKey(),
            'provider' => 'google',
            'provider_id' => 'g-9',
            'email' => 'grace.personal@gmail.test',
        ]);

        /*
         * The security screen sits behind a password confirmation - which is
         * right, and is why this has to say the password was just confirmed
         * rather than the screen being reachable without it.
         */
        $props = $this->actingAs($user)
            ->withSession(['auth.password_confirmed_at' => time()])
            ->get('/settings/security')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertCount(1, $props['connectedAccounts']);
        $this->assertSame('Google', $props['connectedAccounts'][0]['label']);
        $this->assertSame('grace.personal@gmail.test', $props['connectedAccounts'][0]['email']);
    }

    /**
     * SOCIAL IS NOT A 2FA BYPASS. A linked Google account still pauses on
     * the challenge when Security has two-factor confirmed.
     */
    public function test_a_2fa_user_is_challenged_after_social_sign_in(): void
    {
        $user = User::factory()->withTwoFactor()->create([
            'tenant_id' => $this->tenant->id,
            'email' => 'grace@acme.test',
            'email_verified_at' => now(),
        ]);

        ConnectedAccount::query()->create([
            'guard' => 'web',
            'user_id' => $user->getKey(),
            'provider' => 'google',
            'provider_id' => 'g-2fa',
            'email' => 'grace@acme.test',
        ]);

        $this->providerReturns('g-2fa', 'grace@acme.test');

        $this->get('/auth/google/callback')
            ->assertRedirect(route('two-factor.login'));

        $this->assertGuest();
    }
}
