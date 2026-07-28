<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\TenantContext;
use Stancl\Tenancy\Bootstrappers\DatabaseTenancyBootstrapper;
use Stancl\Tenancy\Contracts\Tenant as TenantContract;
use Tests\TestCase;

/**
 * PanelKit against a REAL stancl/tenancy v3 installation.
 *
 * Everything before this was written to the v3 contract and tested against a
 * faked container binding, which is not the same thing - a fake proves the code
 * does what its author expected the library to do. These tests boot the actual
 * package, initialise real tenancy, and assert on the result.
 *
 * THE TWO MODES NEED OPPOSITE BEHAVIOUR, and that is the whole point:
 *
 *   Single-database: every query MUST carry `where tenant_id = ?`. Without it
 *   one organisation reads another's rows out of a shared table.
 *
 *   Multi-database: every query MUST NOT carry it. The rows have no tenant_id
 *   column at all, so a constraint produces "no such column" on literally every
 *   read, and the panel is down rather than leaky.
 *
 * Getting either one backwards is a total failure, in opposite directions, which
 * is why both are asserted rather than one being assumed to imply the other.
 */
final class StanclTenancyTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    protected function setUp(): void
    {
        parent::setUp();

        /*
         * SINGLE-DATABASE TENANCY DOES NOT USE THE DATABASE BOOTSTRAPPER, and
         * stancl's published config enables it by default because
         * multi-database is what most people install the package for.
         *
         * Leaving it on here is not a test-harness convenience - it is the
         * actual misconfiguration a reader would hit. With it enabled, every
         * `initialize()` tries to connect to a per-tenant database that
         * single-database tenancy never creates, and the whole suite fails with
         * "Database tenant1 does not exist" rather than anything about scoping.
         *
         * The sibling multi-database suite leaves the default in place, because
         * there it is correct.
         */
        config(['tenancy.bootstrappers' => []]);

        $this->tenantA = Tenant::create(['name' => 'Alpha', 'slug' => 'alpha']);
        $this->tenantB = Tenant::create(['name' => 'Beta', 'slug' => 'beta']);
    }

    protected function tearDown(): void
    {
        // Tenancy is global state by construction. A test that initialises it
        // and does not end it leaks a connection and a container binding into
        // whatever runs next, which is exactly the Octane failure this package
        // is written against - reproducing it in the suite would be ironic
        // rather than useful.
        if (tenancy()->initialized) {
            tenancy()->end();
        }

        parent::tearDown();
    }

    /* ------------------------------------------------- the model is a tenant */

    /** The app's own model satisfies v3's contract without stancl's data blob. */
    public function test_the_app_tenant_model_implements_the_v3_contract(): void
    {
        $this->assertInstanceOf(TenantContract::class, $this->tenantA);
        $this->assertSame('id', $this->tenantA->getTenantKeyName());
        $this->assertSame($this->tenantA->id, $this->tenantA->getTenantKey());

        // Real columns, not JSON. The whole reason for a custom model.
        $this->assertSame('Alpha', $this->tenantA->getAttribute('name'));
        $this->assertArrayNotHasKey('data', $this->tenantA->getAttributes());
    }

    /** Internal keys round-trip, which the bootstrappers rely on. */
    public function test_internal_keys_round_trip(): void
    {
        $this->tenantA->setInternal('db_name', 'tenant_alpha');

        $this->assertSame('tenant_alpha', $this->tenantA->getInternal('db_name'));
        $this->assertNull($this->tenantA->getInternal('never_set'));
    }

    /* --------------------------------------------------- resolving the tenant */

    /**
     * THE HEADLINE: initialising tenancy is enough. Nothing signs in.
     *
     * PanelKit's fallback reads the tenant off the authenticated user, and that
     * fallback is wrong under stancl - a queue worker, a console command or a
     * domain-identified request all have a tenant and no user at all.
     */
    public function test_the_context_resolves_the_tenant_from_stancl_with_nobody_signed_in(): void
    {
        $this->assertNull(auth()->user(), 'This test is only meaningful with no user.');

        tenancy()->initialize($this->tenantA);

        $context = app(TenantContext::class);

        $this->assertSame($this->tenantA->id, $context->currentKey());
        $this->assertTrue($context->isIsolated());
    }

    /** And the record it hands back is the one tenancy resolved, not a re-query. */
    public function test_the_context_returns_the_tenant_record_stancl_resolved(): void
    {
        tenancy()->initialize($this->tenantB);

        $tenant = app(TenantContext::class)->tenant();

        $this->assertInstanceOf(Tenant::class, $tenant);
        $this->assertSame($this->tenantB->id, $tenant->getTenantKey());
        $this->assertSame('Beta', $tenant->name);
    }

    /**
     * ENDING TENANCY MUST CLEAR THE CONTEXT.
     *
     * The binding is `scoped`, so a fresh request gets a fresh instance - but a
     * long-lived worker that ends tenancy mid-process and keeps the same
     * container instance must not still be holding tenant A. This is the exact
     * shape of the Octane leak in spec §9.
     */
    public function test_ending_tenancy_stops_the_context_resolving_a_tenant(): void
    {
        tenancy()->initialize($this->tenantA);
        $this->assertSame($this->tenantA->id, app(TenantContext::class)->currentKey());

        tenancy()->end();

        // A NEW context, as a new request would get. The old instance
        // memoizes by design; the guarantee is per request, not per process.
        app()->forgetScopedInstances();

        $this->assertNull(app(TenantContext::class)->currentKey());
    }

    /** Switching tenants within one process does not carry the first one over. */
    public function test_switching_tenants_does_not_leak_the_previous_one(): void
    {
        tenancy()->initialize($this->tenantA);
        $this->assertSame($this->tenantA->id, app(TenantContext::class)->currentKey());

        tenancy()->initialize($this->tenantB);
        app()->forgetScopedInstances();

        $this->assertSame($this->tenantB->id, app(TenantContext::class)->currentKey());
    }

    /* ------------------------------------------------- single-database mode */

    /**
     * Column mode: the scope applies, and it isolates.
     *
     * Asserted through a real query rather than by inspecting SQL, because the
     * question is not "is the clause present" but "can Alpha see Beta's rows".
     */
    public function test_single_database_mode_scopes_queries_to_the_active_tenant(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_COLUMN]);

        $this->clients($this->tenantA, 3);
        $this->clients($this->tenantB, 5);

        tenancy()->initialize($this->tenantA);
        app()->forgetScopedInstances();

        $this->assertTrue(app(TenantContext::class)->shouldScopeByColumn());
        $this->assertSame(3, Client::query()->count(), "Alpha must not see Beta's clients.");

        tenancy()->initialize($this->tenantB);
        app()->forgetScopedInstances();

        $this->assertSame(5, Client::query()->count());
    }

    /** And the clause is genuinely in the SQL, not achieved some other way. */
    public function test_single_database_mode_emits_a_tenant_column_constraint(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_COLUMN]);

        tenancy()->initialize($this->tenantA);
        app()->forgetScopedInstances();

        $sql = Client::query()->toSql();

        $this->assertStringContainsString('tenant_id', $sql);
    }

    /* -------------------------------------------------- multi-database mode */

    /**
     * Database mode: the scope must NOT apply.
     *
     * The rows in a tenant database have no `tenant_id` column, so a constraint
     * here is not a mild inefficiency - it is "no such column: tenant_id" on
     * every read in the panel.
     */
    public function test_multi_database_mode_adds_no_tenant_column_constraint(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_DATABASE]);

        tenancy()->initialize($this->tenantA);
        app()->forgetScopedInstances();

        $context = app(TenantContext::class);

        $this->assertFalse($context->shouldScopeByColumn());
        $this->assertStringNotContainsString(
            'tenant_id',
            Client::query()->toSql(),
            'A tenant column constraint in multi-database mode breaks every query.',
        );
    }

    /**
     * ISOLATION IS THE CONNECTION'S JOB, and the panel refuses to serve if it
     * was never done.
     *
     * A request that reaches the central database with database mode configured
     * and tenancy uninitialised would read every tenant's data at once. Failing
     * closed is the only safe answer.
     */
    public function test_multi_database_mode_is_not_isolated_until_tenancy_initialises(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_DATABASE]);

        $this->assertFalse(
            app(TenantContext::class)->isIsolated(),
            'Uninitialised tenancy must read as NOT isolated.',
        );

        tenancy()->initialize($this->tenantA);
        app()->forgetScopedInstances();

        $this->assertTrue(app(TenantContext::class)->isIsolated());
    }

    /* ------------------------------------------------- the conflicting config */

    /**
     * The one combination that cannot work, named clearly.
     *
     * Column mode plus stancl's DatabaseTenancyBootstrapper is two halves told
     * opposite things: one switches to a per-tenant database, the other expects
     * a shared one with a tenant_id column. Left undiagnosed it surfaces as
     * "Database tenant42 does not exist" from inside a bootstrapper, which
     * sends people to look at their database server.
     */
    public function test_column_mode_with_the_database_bootstrapper_is_refused_clearly(): void
    {
        config([
            'panel.tenancy.mode' => TenantContext::MODE_COLUMN,
            'tenancy.bootstrappers' => [
                DatabaseTenancyBootstrapper::class,
            ],
        ]);

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessageMatches('/Conflicting tenancy configuration/');

        app(TenantContext::class)->mode();
    }

    /** And the same pairing in database mode is correct, so it is left alone. */
    public function test_database_mode_with_the_database_bootstrapper_is_fine(): void
    {
        config([
            'panel.tenancy.mode' => TenantContext::MODE_DATABASE,
            'tenancy.bootstrappers' => [
                DatabaseTenancyBootstrapper::class,
            ],
        ]);

        $this->assertSame(TenantContext::MODE_DATABASE, app(TenantContext::class)->mode());
    }

    /* ---------------------------------------------------------- the central */

    /**
     * The tenants table is read from the CENTRAL connection even inside tenancy.
     *
     * Without `CentralConnection` on the model this query runs against the
     * tenant's own database, which has no tenants table - the failure is a
     * confusing "no such table" from deep inside branding lookups.
     */
    public function test_the_tenant_model_reads_from_the_central_connection(): void
    {
        tenancy()->initialize($this->tenantA);

        $this->assertSame(
            config('tenancy.database.central_connection'),
            (new Tenant)->getConnectionName(),
        );

        $this->assertSame(2, Tenant::query()->count());
    }

    /* ---------------------------------------------------------------- setup */

    private function clients(Tenant $tenant, int $count): void
    {
        for ($i = 0; $i < $count; $i++) {
            $client = new Client;

            $client->forceFill([
                'tenant_id' => $tenant->id,
                'name' => "Client {$tenant->id}-{$i}",
                'phone' => '0700000000',
                'access_code' => "AC-{$tenant->id}-{$i}",
                'status' => 'active',
                'plan_type' => 'pppoe',
            ])->save();
        }
    }

    /** Kept for the tenancy tests that need a signed-in user as well. */
    private function user(Tenant $tenant): User
    {
        return User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }
}
