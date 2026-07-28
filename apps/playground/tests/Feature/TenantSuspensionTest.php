<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * A suspended organisation reaches nothing on its own host.
 *
 * THE POINT OF EVERY TEST HERE IS THAT THE DENIAL IS NOT ROUTE-SHAPED. It would
 * be easy to lock the dashboard and leave the JSON endpoints, the export, the
 * broadcasting auth route or whatever is added next month answering normally -
 * that is the ordinary way this feature is got wrong, and it is invisible
 * because the screen everyone looks at IS locked.
 *
 * So the cases below deliberately hit routes of different kinds, including one
 * that does not require authentication at all.
 */
final class TenantSuspensionTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->acme->domains()->create(['domain' => 'acme.localhost']);

        $this->user = User::factory()->create([
            'tenant_id' => $this->acme->id,
            'email_verified_at' => now(),
        ]);
    }

    /** @return \Illuminate\Testing\TestResponse */
    private function onAcme(string $path)
    {
        return $this->withServerVariables(['HTTP_HOST' => 'acme.localhost'])
            ->get("http://acme.localhost{$path}");
    }

    public function test_an_active_tenant_is_unaffected(): void
    {
        $this->actingAs($this->user);

        $this->onAcme('/dashboard')->assertOk();
    }

    public function test_a_suspended_tenant_is_refused(): void
    {
        $this->acme->suspend('Payment overdue since March.');

        $this->actingAs($this->user);

        $response = $this->onAcme('/dashboard');

        $response->assertStatus(403);
        $response->assertSee('Acme is suspended');
        $response->assertSee('Payment overdue since March.');
    }

    /**
     * THE SIGN-IN PAGE IS REFUSED TOO. It needs no session and no account, so a
     * check that lived behind authentication would leave it open - and a login
     * form on a suspended organisation invites people to keep trying.
     */
    public function test_even_the_login_page_is_refused(): void
    {
        $this->acme->suspend();

        $this->onAcme('/login')->assertStatus(403);
    }

    /**
     * IT IS DENIED WHILE ALREADY SIGNED IN, on the next request rather than
     * whenever the session happens to expire. Somebody mid-session when billing
     * suspends them is exactly who this is for.
     *
     * On the CENTRAL host, so the account gate is the one being exercised -
     * the host gate is covered by the guest cases above.
     */
    public function test_an_established_session_is_stopped_at_the_next_request(): void
    {
        $this->actingAs($this->user);

        $this->get('/dashboard')->assertOk();

        $this->acme->suspend();

        /*
         * THE CACHED RELATION IS DROPPED, not the whole guard.
         *
         * `actingAs` keeps one User instance for the test, and its `tenant`
         * relation was loaded during the request above - before the suspension -
         * so the middleware would read a stale record and the case would pass
         * against broken code. `forgetGuards()` also clears it, but it clears
         * the user with it (actingAs sets the guard, not the session), and the
         * request then redirects to login instead of reaching the check.
         */
        $this->user->unsetRelation('tenant');
        $this->app->forgetScopedInstances();

        $this->get('/clients')->assertStatus(403);
    }

    /**
     * DIFFERENT KINDS OF ROUTE, AS A GUEST, which is the sharper assertion.
     *
     * Signed out, every one of these would normally redirect to the sign-in
     * page. Getting 403 instead proves the refusal happens BEFORE the auth
     * middleware has an opinion - i.e. before the session is even read - which
     * is the property the whole placement exists for. Signing in first would
     * only show that an authenticated request is refused, and would drag
     * `ScopeSessionToTenant` into a test that is not about sessions.
     */
    public function test_other_routes_are_refused_too(): void
    {
        $this->acme->suspend();

        foreach (['/clients', '/plans', '/settings/profile'] as $path) {
            $this->onAcme($path)->assertStatus(403, "{$path} answered while suspended.");
        }
    }

    /**
     * ANOTHER ORGANISATION IS UNTOUCHED. Suspension is per tenant, and a bug
     * that read the flag from the wrong record - or cached it across requests -
     * would take the whole installation down with one unpaid invoice.
     */
    public function test_another_tenant_keeps_working(): void
    {
        $rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);
        $rival->domains()->create(['domain' => 'rival.localhost']);

        $theirs = User::factory()->create([
            'tenant_id' => $rival->id,
            'email_verified_at' => now(),
        ]);

        $this->acme->suspend();

        $this->actingAs($theirs)
            ->withServerVariables(['HTTP_HOST' => 'rival.localhost'])
            ->get('http://rival.localhost/dashboard')
            ->assertOk();
    }

    /**
     * THE CENTRAL HOST IS NOT A WAY ROUND IT.
     *
     * This test originally asserted the opposite - that the central domain was
     * unaffected - and it was wrong. The host-level gate cannot see a tenant
     * there, so a suspended organisation's operator could sign in at the central
     * URL and reach the same data. `DenySuspendedAccount` closes it by refusing
     * on the tenant the ACCOUNT belongs to.
     */
    public function test_the_central_host_is_not_a_bypass(): void
    {
        $this->acme->suspend('Payment overdue.');

        $this->actingAs($this->user)->get('/dashboard')->assertStatus(403);
    }

    /**
     * The session is ENDED, not merely refused - see DenySuspendedAccount.
     *
     * Asserted through the SESSION rather than through `assertGuest()`, because
     * `actingAs` holds a user on the guard for the whole test and would report
     * "still signed in" however thoroughly the middleware logged them out. What
     * the middleware actually destroys is the session, and that is observable.
     */
    public function test_a_suspended_account_has_its_session_destroyed(): void
    {
        $this->acme->suspend();

        $this->actingAs($this->user)->get('/dashboard')->assertStatus(403);

        // Asserted on the session's own contents: Laravel stores the signed-in
        // id under a `login_*` key, and `invalidate()` clears the lot.
        $remaining = array_filter(
            array_keys($this->app['session']->all()),
            static fn (string $key): bool => str_starts_with($key, 'login_'),
        );

        $this->assertSame([], $remaining, 'The session still holds a signed-in user.');
    }

    /** An unrelated organisation's operator is untouched on the central host. */
    public function test_the_central_host_still_works_for_everybody_else(): void
    {
        $rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);
        $theirs = User::factory()->create([
            'tenant_id' => $rival->id,
            'email_verified_at' => now(),
        ]);

        $this->acme->suspend();

        $this->actingAs($theirs)->get('/dashboard')->assertOk();
    }

    public function test_unsuspending_restores_access(): void
    {
        $this->acme->suspend('Temporary.');
        $this->onAcme('/login')->assertStatus(403);

        $this->acme->unsuspend();

        /*
         * TENANCY IS ENDED BETWEEN REQUESTS, because the test harness does not.
         *
         * A real request starts with nothing initialised and resolves the host
         * afresh. In a test the container survives, so `tenancy()->initialized`
         * is still true from the call above - `ResolveTenantByHost` then bows
         * out (correctly: something else already identified a tenant), and the
         * gate reads the tenant object left in the container, which still
         * carries the suspension in memory. Ending it reproduces a cold request.
         */
        tenancy()->end();

        // `TenantContext` is a SCOPED binding and memoises the tenant record for
        // its lifetime. A real request gets a fresh one; the test container
        // hands back the same instance, still holding the suspended model.
        $this->app->forgetScopedInstances();

        // Back to an ordinary sign-in page, as a guest - the host gate is the
        // thing under test and it needs no session either way.
        $this->onAcme('/login')->assertOk();

        // The reason is cleared with it: a stale one would surface at the next
        // suspension, describing something that was resolved months ago.
        $this->assertNull($this->acme->fresh()->suspended_reason);
    }

    /** No reason is a valid suspension - the wall just says less. */
    public function test_a_suspension_without_a_reason_still_denies(): void
    {
        $this->acme->suspend();

        $this->actingAs($this->user);

        $this->onAcme('/dashboard')
            ->assertStatus(403)
            ->assertSee('Acme is suspended');
    }
}
