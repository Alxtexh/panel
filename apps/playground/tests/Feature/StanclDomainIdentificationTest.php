<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\Support\TenantContext;
use Stancl\Tenancy\Exceptions\NotASubdomainException;
use Stancl\Tenancy\Exceptions\TenantCouldNotBeIdentifiedOnDomainException;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomainOrSubdomain;
use Stancl\Tenancy\Middleware\InitializeTenancyBySubdomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;
use Tests\TestCase;

/**
 * Identifying a tenant from the HOSTNAME.
 *
 * Everything tested so far initialised tenancy by hand. Real deployments do not:
 * a request arrives at `acme.panel.test` and the tenant has to fall out of that
 * before any application code runs. That makes identification the earliest and
 * therefore the most dangerous point in the request - get it wrong and every
 * later check is asking about the wrong tenant.
 *
 * THE ROUTES ARE DEFINED IN THE TESTS, deliberately.
 *
 * The unit under test is the middleware plus PanelKit's reaction to it, not the
 * playground's route file. Adding permanent domain-identified routes to an app
 * that is reached at `localhost` would mean routes nobody can exercise without
 * editing `/etc/hosts`, which is a worse reference than none. Defining them
 * here keeps each test's setup visible in the test.
 *
 * WHAT ACTUALLY MATTERS FOR PANELKIT is the last section: identification alone,
 * with nobody signed in, has to be enough for the panel to scope correctly. The
 * `$user->tenant` fallback cannot help here - there is no user.
 */
final class StanclDomainIdentificationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $globex;

    protected function setUp(): void
    {
        parent::setUp();

        /*
         * Single-database mode, and no database bootstrapper.
         *
         * Identification is orthogonal to isolation mode - it answers "which
         * tenant", not "which database" - so this suite uses the simpler one.
         * The bootstrapper is off for the reason the sibling suite documents:
         * with column-mode tenancy there is no per-tenant database to connect
         * to, and leaving it enabled fails with a message about a missing
         * database rather than anything to do with hostnames.
         */
        config([
            'panel.tenancy.mode' => TenantContext::MODE_COLUMN,
            'tenancy.bootstrappers' => [],
            'tenancy.central_domains' => ['panel.test', 'localhost', '127.0.0.1'],
        ]);

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->globex = Tenant::create(['name' => 'Globex', 'slug' => 'globex']);

        $this->acme->domains()->create(['domain' => 'acme.example.com']);
        $this->globex->domains()->create(['domain' => 'globex.example.com']);
    }

    protected function tearDown(): void
    {
        if (tenancy()->initialized) {
            tenancy()->end();
        }

        parent::tearDown();
    }

    /* ------------------------------------------------------------- by domain */

    /** A full hostname on the domains table resolves to its tenant. */
    public function test_a_known_domain_identifies_its_tenant(): void
    {
        $this->routeWith(InitializeTenancyByDomain::class);

        $this->get('http://acme.example.com/who')
            ->assertOk()
            ->assertSee((string) $this->acme->id);
    }

    /** And a different hostname resolves to a different one. */
    public function test_each_domain_identifies_its_own_tenant(): void
    {
        $this->routeWith(InitializeTenancyByDomain::class);

        $this->get('http://globex.example.com/who')->assertSee((string) $this->globex->id);
        $this->get('http://acme.example.com/who')->assertSee((string) $this->acme->id);
    }

    /**
     * AN UNKNOWN HOST FAILS CLOSED - but as a 500, not a 404.
     *
     * This is stancl's default and it surprised me: the middleware THROWS
     * `TenantCouldNotBeIdentifiedOnDomainException` and leaves the status to the
     * app's exception handler, which means an unregistered hostname produces a
     * server error and, with debug on, a stack trace naming the resolver.
     *
     * The important half is that it fails closed at all - the request never
     * reaches a panel with no tenant identified, which in column mode is the one
     * state that must never be served. The status is the app's job to fix, and
     * the next test shows how.
     */
    public function test_an_unknown_domain_is_refused(): void
    {
        $this->routeWith(InitializeTenancyByDomain::class);

        $this->expectException(TenantCouldNotBeIdentifiedOnDomainException::class);

        $this->withoutExceptionHandling()->get('http://not-a-tenant.example.com/who');
    }

    /**
     * And how a real deployment should answer instead.
     *
     * `$onFail` is the documented hook, and every panel should set it: an
     * unknown hostname is "no such site", which is a 404. Shipping the default
     * means monitoring fills with 500s for what is usually somebody pointing a
     * stale DNS record at you.
     */
    public function test_an_unknown_domain_can_be_turned_into_a_clean_404(): void
    {
        InitializeTenancyByDomain::$onFail = fn (): never => abort(404);

        try {
            $this->routeWith(InitializeTenancyByDomain::class);

            $this->get('http://not-a-tenant.example.com/who')->assertNotFound();

            // The hook must not break the case that works.
            $this->get('http://acme.example.com/who')->assertOk();
        } finally {
            // Static, so it outlives the test unless it is put back.
            InitializeTenancyByDomain::$onFail = null;
        }
    }

    /** A domain that was deleted stops identifying immediately. */
    public function test_a_removed_domain_stops_identifying(): void
    {
        $this->routeWith(InitializeTenancyByDomain::class);

        $this->get('http://acme.example.com/who')->assertOk();

        $this->acme->domains()->where('domain', 'acme.example.com')->delete();

        // The resolver caches per request, not across them.
        $this->expectException(TenantCouldNotBeIdentifiedOnDomainException::class);

        $this->withoutExceptionHandling()->get('http://acme.example.com/who');
    }

    /* ---------------------------------------------------------- by subdomain */

    /** The first label of a hostname under a central domain is the tenant. */
    public function test_a_subdomain_of_a_central_domain_identifies_its_tenant(): void
    {
        $this->acme->domains()->create(['domain' => 'acme']);

        $this->routeWith(InitializeTenancyBySubdomain::class);

        $this->get('http://acme.panel.test/who')
            ->assertOk()
            ->assertSee((string) $this->acme->id);
    }

    /**
     * THE SUBDOMAIN ROW HOLDS THE LABEL, NOT THE WHOLE HOSTNAME.
     *
     * This is the detail that catches people: subdomain identification looks up
     * `acme`, while domain identification looks up `acme.example.com`, and both
     * read the same table. A tenant set up for one does not work with the
     * other, and the failure is a 404 that looks like a routing problem.
     */
    public function test_a_full_hostname_row_does_not_satisfy_subdomain_identification(): void
    {
        // `acme.example.com` exists from setUp; the bare label does not.
        $this->routeWith(InitializeTenancyBySubdomain::class);

        $this->expectException(TenantCouldNotBeIdentifiedOnDomainException::class);
        // The message names what was actually looked up - `acme`, not the host.
        $this->expectExceptionMessageMatches('/domain acme$/');

        $this->withoutExceptionHandling()->get('http://acme.panel.test/who');
    }

    /** A central domain with no subdomain is not a tenant request at all. */
    public function test_the_bare_central_domain_is_not_a_subdomain(): void
    {
        $this->acme->domains()->create(['domain' => 'acme']);

        $this->routeWith(InitializeTenancyBySubdomain::class);

        // stancl throws NotASubdomainException rather than 404ing, because
        // "you are on the marketing site" and "no such tenant" are different
        // answers and only the app knows which page to show.
        $this->expectException(NotASubdomainException::class);

        $this->withoutExceptionHandling()->get('http://panel.test/who');
    }

    /** A hostname outside the central domains is not a subdomain of one. */
    public function test_a_third_party_domain_is_not_a_subdomain(): void
    {
        $this->acme->domains()->create(['domain' => 'acme']);

        $this->routeWith(InitializeTenancyBySubdomain::class);

        $this->expectException(NotASubdomainException::class);

        $this->withoutExceptionHandling()->get('http://acme.somewhere-else.com/who');
    }

    /* ------------------------------------------------------------ either one */

    /**
     * The combined middleware accepts both shapes, which is what a panel
     * offering "yourname.panel.test now, your own domain later" needs.
     */
    public function test_domain_or_subdomain_accepts_both(): void
    {
        $this->acme->domains()->create(['domain' => 'acme']);

        $this->routeWith(InitializeTenancyByDomainOrSubdomain::class);

        $this->get('http://acme.panel.test/who')->assertSee((string) $this->acme->id);
        $this->get('http://acme.example.com/who')->assertSee((string) $this->acme->id);
    }

    /* ------------------------------------------------------- the central wall */

    /**
     * Tenant routes must not answer on the central domain.
     *
     * Without this, `panel.test/clients` reaches a panel with no tenant
     * identified - and in column mode "no tenant" is the one state that must
     * never be served, because a scope with nothing to scope by is not a scope.
     */
    public function test_tenant_routes_are_refused_on_the_central_domain(): void
    {
        Route::middleware(['web', PreventAccessFromCentralDomains::class])
            ->get('/tenant-only', fn (): string => 'reached');

        $this->get('http://panel.test/tenant-only')->assertStatus(404);
    }

    /* --------------------------------------------------- what PanelKit sees */

    /**
     * THE ASSERTION THIS SUITE EXISTS FOR.
     *
     * Identification alone, nobody signed in, and PanelKit scopes correctly.
     * The `$user->tenant` fallback cannot possibly help - there is no user -
     * so this is the path that proves the stancl integration carries its own
     * weight rather than being decoration over the auth-based resolver.
     */
    public function test_panelkit_scopes_to_the_tenant_the_hostname_identified(): void
    {
        $this->clients($this->acme, 2);
        $this->clients($this->globex, 6);

        Route::middleware(['web', InitializeTenancyByDomain::class])->get(
            '/client-count',
            function (): string {
                // Asserted inside the request, where tenancy is actually active.
                abort_unless(auth()->guest(), 500, 'This test is only meaningful with no user.');

                return (string) Client::query()->count();
            },
        );

        $this->get('http://acme.example.com/client-count')->assertOk()->assertSee('2');
        $this->get('http://globex.example.com/client-count')->assertOk()->assertSee('6');
    }

    /** And the panel reports itself isolated on an identified request. */
    public function test_the_panel_is_isolated_on_an_identified_request(): void
    {
        Route::middleware(['web', InitializeTenancyByDomain::class])->get(
            '/isolated',
            fn (): string => app(TenantContext::class)->isIsolated() ? 'yes' : 'no',
        );

        $this->get('http://acme.example.com/isolated')->assertSee('yes');
    }

    /* ---------------------------------------------------------------- setup */

    /** A route that reports which tenant the middleware identified. */
    private function routeWith(string $middleware): void
    {
        Route::middleware(['web', $middleware])->get(
            '/who',
            fn (): string => (string) app(TenantContext::class)->currentKey(),
        );
    }

    private function clients(Tenant $tenant, int $count): void
    {
        for ($i = 0; $i < $count; $i++) {
            $client = new Client;

            $client->forceFill([
                'tenant_id' => $tenant->id,
                'name' => "{$tenant->name} {$i}",
                'phone' => '0700000000',
                'access_code' => "AC-{$tenant->slug}-{$i}",
                'status' => 'active',
                'plan_type' => 'pppoe',
            ])->save();
        }
    }
}
