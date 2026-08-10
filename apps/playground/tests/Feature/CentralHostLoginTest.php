<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Alxtexh\Panel\Support\TenantContext;
use Tests\TestCase;

/**
 * Signing in on the CENTRAL host, with no tenant in the hostname.
 *
 * THIS IS A REGRESSION TEST FOR AN INFINITE LOOP, and the loop is worth
 * describing because nothing in the suite could have caught it.
 *
 * `TenantUserProvider` scopes its lookup to the current tenant, so it asks
 * `TenantContext::currentKey()`. On a per-tenant hostname stancl answers that
 * question and the story ends. On the central host it fell through to
 * `fromAuth()`, which called `Auth::user()` - which asked the guard for a user,
 * which asked the provider, which asked for the tenant again. The two called
 * each other until PHP's 30-second execution limit killed the request.
 *
 * IT PRODUCED A 500 WITH AN EMPTY BODY, because a fatal error is not an
 * exception: Laravel's handler never ran, nothing reached the log, and the
 * browser showed a blank page. Every per-tenant subdomain worked perfectly
 * throughout, so it read as "the login page is broken" rather than as a loop.
 *
 * THE ASSERTION IS THAT A REQUEST FINISHES. There is no way to assert "did not
 * recurse" directly - the symptom of the bug is that the process dies, so the
 * test for it is a request that completes and returns something sensible.
 */
final class CentralHostLoginTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Nairobi Fibre', 'slug' => 'nairobi-fibre']);
        $this->tenant->domains()->create(['domain' => 'nairobi-fibre.localhost']);

        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email' => 'admin@nairobi-fibre.test',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
    }

    /**
     * THE CORE CASE: no tenant in the host, so the resolver falls through to
     * auth - the exact path that recursed.
     */
    public function test_signing_in_on_the_central_host_completes(): void
    {
        $response = $this->post('/login', [
            'email' => 'admin@nairobi-fibre.test',
            'password' => 'password',
        ]);

        $response->assertRedirect();
        $this->assertAuthenticatedAs($this->user);
    }

    /**
     * And the page AFTER signing in, which is where the loop actually showed.
     *
     * `forgetGuards()` IS THE ENTIRE TEST, and without it this case is worthless
     * - it passed against the broken code before the line was added.
     *
     * Laravel keeps one guard instance for the whole test, so the user resolved
     * during `post('/login')` is still in memory when the next call runs. The
     * guard short-circuits, `retrieveById()` never runs, and the recursion never
     * starts. A real browser gets a cold guard on every request and a session
     * carrying only an id - which is precisely the state that recursed.
     * Forgetting the guards reproduces it; the session survives, the resolved
     * user does not.
     */
    public function test_the_dashboard_renders_on_the_central_host(): void
    {
        $this->post('/login', [
            'email' => 'admin@nairobi-fibre.test',
            'password' => 'password',
        ]);

        auth()->forgetGuards();

        $this->get('/dashboard')->assertOk();
    }

    /**
     * ASKING FOR THE TENANT WHILE NOBODY IS RESOLVED MUST NOT LOAD A USER.
     *
     * This is the loop in miniature and the sharpest statement of the rule:
     * `currentKey()` is called by the thing that resolves users, so it may never
     * be the thing that triggers resolution.
     */
    public function test_asking_for_the_tenant_does_not_resolve_a_user(): void
    {
        $key = app(TenantContext::class)->currentKey();

        $this->assertNull($key, 'No host tenant and no signed-in user means no tenant.');

        // The point of the test: asking must not have loaded anybody.
        $this->assertGuest();
    }

    /** Once signed in, the tenant does come from the user on the central host. */
    public function test_the_tenant_comes_from_the_user_once_signed_in(): void
    {
        $this->actingAs($this->user);

        $this->assertSame(
            $this->tenant->id,
            app(TenantContext::class)->currentKey(),
            'The central host identifies the tenant through the account.',
        );
    }

    /**
     * THE PER-TENANT HOST IS UNAFFECTED. The fix must not have loosened the
     * constraint on the path that actually carries the security weight - a
     * login form on one organisation's hostname.
     */
    public function test_a_tenant_host_still_scopes_the_lookup(): void
    {
        $other = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);
        $other->domains()->create(['domain' => 'rival.localhost']);

        // Same address, different organisation - emails are unique per tenant.
        User::factory()->create([
            'tenant_id' => $other->id,
            'email' => 'admin@nairobi-fibre.test',
            'password' => Hash::make('a-different-password'),
            'email_verified_at' => now(),
        ]);

        $this->withServerVariables(['HTTP_HOST' => 'rival.localhost'])
            ->post('http://rival.localhost/login', [
                'email' => 'admin@nairobi-fibre.test',
                'password' => 'password',
            ]);

        // Nairobi Fibre's password must not open Rival's account.
        $this->assertGuest();
    }
}
