<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Customer;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Contracts\Provider;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\User as SocialiteUser;
use Tests\TestCase;

/**
 * Signing in with a provider must not cross a guard.
 *
 * THE SOCIAL ROUTES ARE MOUNTED IN EVERY PANEL - `PanelRoutes` registers them
 * whenever any provider is configured, once per panel - and the callback
 * establishes the session on THAT panel's guard. The identity, though, was
 * always looked up in one hardcoded place:
 *
 *     config('auth.providers.users.model')
 *
 * So a sign-in on the client portal matched a row in `users`, and then called
 * `Auth::guard('customers')->login()` with it. `SessionGuard::login()` stores
 * only `$user->getAuthIdentifier()`, so the next request re-hydrated that
 * integer through the CUSTOMERS provider - a different table - and whoever
 * happened to hold that id was signed in.
 *
 * This application is configured exactly that way: `web` authenticates `User`,
 * `customers` authenticates `Customer`, `superadmins` authenticates
 * `SuperadminUser`. Three tables, three id spaces, one lookup.
 */
final class SocialLoginGuardTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        config(['panel.tenancy.resolver' => fn () => $this->tenant->id]);
    }

    private function providerReturns(string $id, string $email): void
    {
        $account = new SocialiteUser;
        $account->map([
            'id' => $id,
            'nickname' => 'someone',
            'name' => 'Some One',
            'email' => $email,
            'avatar' => null,
        ]);
        $account->user = ['email_verified' => true];

        $driver = \Mockery::mock(Provider::class);
        $driver->shouldReceive('user')->andReturn($account);

        Socialite::shouldReceive('driver')->with('google')->andReturn($driver);
    }

    /**
     * THE BYPASS, STATED AS A TEST.
     *
     * An operator's address is matched in `users`, on a portal whose guard
     * authenticates `customers`. Nobody in `customers` has consented to
     * anything, and no password is involved.
     *
     * The assertion is deliberately about WHO IS SIGNED IN rather than about a
     * status code: the request succeeds either way, which is what made this
     * invisible.
     */
    public function test_a_provider_match_in_one_table_cannot_sign_you_in_on_another_guard(): void
    {
        // An operator, in the `users` table, with a verified address.
        $operator = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email' => 'operator@acme.test',
            'email_verified_at' => now(),
        ]);

        // A customer that happens to carry the same id in its own table.
        $customer = Customer::query()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Somebody Else',
            'email' => 'customer@acme.test',
            'password' => 'irrelevant',
        ]);

        $this->assertSame(
            $operator->getKey(),
            $customer->getKey(),
            'This test needs the two ids to collide; that is the whole point.'
        );

        $this->providerReturns('g-1', 'operator@acme.test');

        $this->withSession(['social.intent' => 'login'])
            ->get('/client/auth/google/callback?code=x&state=y');

        $this->assertFalse(
            Auth::guard('customers')->check(),
            'An address matched in `users` signed somebody in on the `customers` guard. '
            .'Whoever holds that id in `customers` has just been authenticated as.'
        );
    }
}
