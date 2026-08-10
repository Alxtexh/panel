<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Http\Middleware\ScopeSessionToTenant;
use Alxtexh\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * The tenant comes from the HOSTNAME, before anybody signs in.
 *
 * THE NEGATIVE TESTS ARE THE POINT. A positive journey - "acme's host shows
 * acme's data" - passes just as happily when there is no isolation at all,
 * because acme's data is what a completely unscoped panel would show too. What
 * distinguishes a working boundary from an absent one is what happens when you
 * push against it, so most of this file pushes.
 *
 * THE SESSION CHECK IS THE HIGHEST-SEVERITY ONE. Once tenants live on subdomains
 * somebody will notice they are logged out when switching hosts and widen
 * `SESSION_DOMAIN` to share the cookie. That is a one-line change that reads as
 * a convenience fix and makes one login valid on every tenant's subdomain. The
 * per-tenant cookie NAME stops the ordinary case; the stamped-tenant check is
 * what survives the widening, and it is what
 * `test_a_session_from_another_tenant_is_refused` exercises.
 */
final class HostnameTenancyTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $zenith;

    private User $acmeUser;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = $this->tenantOn('Acme', 'acme', 'acme.alxtexhpanel.test');
        $this->zenith = $this->tenantOn('Zenith', 'zenith', 'zenith.alxtexhpanel.test');

        $this->acmeUser = User::factory()
            ->withAbilities(Abilities::all())
            ->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);
    }

    private function tenantOn(string $name, string $slug, string $domain): Tenant
    {
        $tenant = Tenant::create(['name' => $name, 'slug' => $slug]);

        $tenant->domains()->create(['domain' => $domain]);

        return $tenant;
    }

    private function clientFor(Tenant $tenant, string $name): Client
    {
        $client = new Client([
            'name' => $name,
            'phone' => '+2547'.random_int(10000000, 99999999),
            'access_code' => strtoupper(bin2hex(random_bytes(3))),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addMonth(),
        ]);

        $client->forceFill(['tenant_id' => $tenant->id])->save();

        return $client;
    }

    /* --------------------------------------------------------- resolution */

    public function test_the_host_selects_the_tenant_before_anybody_signs_in(): void
    {
        // No authenticated user at all - the tenant must still be known, which
        // is the whole difference from resolving it from the session.
        $this->get('http://acme.alxtexhpanel.test/login')->assertOk();

        /*
         * Asserted through the SESSION STAMP rather than by reading
         * `currentKey()` afterwards. The middleware ends tenancy in a `finally`,
         * so the context is deliberately empty once the response is written -
         * checking it here would assert the cleanup, not the resolution. The
         * stamp is written during the request and outlives it, which makes it
         * the observable evidence that the host chose the tenant.
         */
        $this->assertSame(
            $this->acme->id,
            session(ScopeSessionToTenant::KEY),
            'The hostname resolved the tenant with no session and no user involved.',
        );
    }

    /** An unknown host is not an error - the central domain has no tenant. */
    public function test_an_unknown_host_passes_through(): void
    {
        $this->get('http://alxtexhpanel.test/login')->assertOk();
    }

    /* ------------------------------------------------------- the data seen */

    public function test_a_host_shows_only_that_tenants_records(): void
    {
        $this->clientFor($this->acme, 'Acme Subscriber');
        $this->clientFor($this->zenith, 'Zenith Subscriber');

        $names = array_column(
            $this->actingAs($this->acmeUser)
                ->get('http://acme.alxtexhpanel.test/clients')
                ->assertOk()
                ->viewData('page')['props']['records'],
            'name',
        );

        $this->assertContains('Acme Subscriber', $names);
        $this->assertNotContains('Zenith Subscriber', $names);
    }

    /* -------------------------------------------------- THE NEGATIVE PATH */

    /**
     * THE ONE THAT MATTERS. A session belonging to Acme, presented on Zenith's
     * host, must not be honoured - however it got there.
     */
    public function test_a_session_from_another_tenant_is_refused(): void
    {
        $this->actingAs($this->acmeUser)
            ->get('http://acme.alxtexhpanel.test/clients')
            ->assertOk();

        /*
         * Deliberately NOT flushing the session, which is what the base
         * TestCase does when the tenant changes. This is the situation a browser
         * cannot normally produce - and the exact one a shared `SESSION_DOMAIN`
         * would produce on every request.
         */
        $response = $this->get('http://zenith.alxtexhpanel.test/clients');

        /*
         * ASSERTED AS "did not succeed", not as a particular redirect target.
         *
         * `actingAs` sets the user on the GUARD rather than through the session,
         * so flushing the session does not by itself un-authenticate the test's
         * user and the request lands on whichever gate complains first - here
         * `/email/verify` rather than `/login`. Pinning the target would be
         * asserting a detail of the test harness; the property that matters is
         * that Zenith's host did not serve Acme's session Acme's data.
         */
        $this->assertTrue(
            $response->isRedirection(),
            'A session stamped for another tenant must not be served.',
        );

        $this->assertNotSame(
            $this->acme->id,
            session(ScopeSessionToTenant::KEY),
            'The session no longer claims to belong to Acme.',
        );
    }

    /** And the session is emptied rather than merely disregarded. */
    public function test_the_refused_session_is_emptied(): void
    {
        $this->actingAs($this->acmeUser)->get('http://acme.alxtexhpanel.test/clients')->assertOk();

        $this->withSession(['something_of_acmes' => 'secret']);

        $this->get('http://zenith.alxtexhpanel.test/clients');

        $this->assertNull(
            session('something_of_acmes'),
            'Holding another tenant cookie is a misconfiguration or an attack; neither keeps its contents.',
        );
        $this->assertSame($this->zenith->id, session(ScopeSessionToTenant::KEY));
    }

    /**
     * A RECORD IS NOT REACHABLE FROM THE WRONG HOST even with a valid session
     * for it - the tenant is the host, so the scope denies before the policy is
     * consulted.
     */
    public function test_a_record_is_not_reachable_from_another_host(): void
    {
        $theirs = $this->clientFor($this->zenith, 'Not Acme\'s');

        $this->actingAs($this->acmeUser)
            ->get("http://acme.alxtexhpanel.test/clients/{$theirs->id}")
            ->assertNotFound();
    }

    /* ---------------------------------------------------------- identity */

    /**
     * THE SAME EMAIL AT TWO ORGANISATIONS, which the old globally-unique index
     * made impossible and which per-tenant login requires.
     */
    public function test_one_person_can_hold_an_account_at_two_tenants(): void
    {
        $shared = 'grace@example.test';

        $atAcme = User::factory()->create(['tenant_id' => $this->acme->id, 'email' => $shared]);
        $atZenith = User::factory()->create(['tenant_id' => $this->zenith->id, 'email' => $shared]);

        $this->assertNotSame($atAcme->id, $atZenith->id);
        $this->assertSame(2, User::query()->where('email', $shared)->count());
    }

    /**
     * AND THE HOST DECIDES WHICH ONE SIGNS IN. Without the tenant-scoped user
     * provider, an email that exists twice resolves to whichever row came back
     * first - so the person typing into Acme's form could be authenticated as
     * Zenith's account.
     */
    public function test_the_host_decides_which_account_a_shared_email_resolves_to(): void
    {
        $shared = 'grace@example.test';

        $atAcme = User::factory()->create(['tenant_id' => $this->acme->id, 'email' => $shared]);
        $atZenith = User::factory()->create(['tenant_id' => $this->zenith->id, 'email' => $shared]);

        tenancy()->initialize($this->zenith);

        $found = auth()->getProvider()->retrieveByCredentials(['email' => $shared]);

        tenancy()->end();

        $this->assertSame($atZenith->id, $found?->id, 'The resolved tenant chose the account.');
        $this->assertNotSame($atAcme->id, $found?->id);
    }
}
