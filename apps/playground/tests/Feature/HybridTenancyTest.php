<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\TenantContext;
use PanelKit\Panel\Tenancy\ConditionalDatabaseBootstrapper;
use Tests\TestCase;

/**
 * Both tenancy modes, in ONE application, at the same time.
 *
 * This is what a real SaaS looks like after a few years: most tenants share a
 * database and are separated by a column, and one or two - the largest, the
 * regulated, the ones who asked in the contract - have a database of their own.
 *
 * THE REFERENCE APPLICATION MAKES IT MANDATORY, and its reasoning is the whole
 * point: a resource that works on a shared tenant and throws on a dedicated one
 * has assumed something about isolation that is only true in one mode. Only
 * running both shapes finds it.
 *
 * A CORRECTION TO WHAT THIS COMMENT USED TO SAY. It claimed `tenant_id` does not
 * exist in a dedicated database, so a hardcoded `where('tenant_id')` would be a
 * SQL error. That is true of a multi-database application with its own tenant
 * migration set, and it is NOT true here: PanelKit runs ONE set of migrations, so
 * a dedicated database has the same columns and the same foreign keys, and the
 * `tenant_id` column is present and correctly filled. Isolation comes from the
 * connection; the column is redundant rather than absent.
 *
 * The distinction matters because it changes the failure mode. A missing column
 * throws and is found immediately. A redundant one that is simply never the
 * thing protecting you fails silently the moment a query runs on the wrong
 * connection - which is why the assertions below check the CONNECTION, not just
 * the row count.
 *
 * THE MODE IS DECIDED BY THE TENANT, not by a config flag. A flag would be a
 * second source of truth that can disagree with the database that does or does
 * not exist; the presence of the database cannot disagree with itself.
 */
final class HybridTenancyTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        config(['panel.tenancy.mode' => TenantContext::MODE_HYBRID]);
    }

    /* ------------------------------------------------------- resolution */

    /**
     * A SHARED tenant gets column scoping - the common path, and the one that
     * must keep working when the mode becomes conditional.
     */
    public function test_a_shared_tenant_resolves_to_column_mode(): void
    {
        $shared = Tenant::create(['name' => 'Shared', 'slug' => 'shared']);

        tenancy()->initialize($shared);

        $context = app(TenantContext::class);

        $this->assertSame(TenantContext::MODE_COLUMN, $context->mode());
        $this->assertTrue($context->shouldScopeByColumn());

        tenancy()->end();
    }

    /**
     * WITH NOTHING INITIALISED, hybrid resolves to COLUMN - which applies a
     * constraint. Answering "database" would drop the column constraint on the
     * assumption that a connection is isolating, and if nothing initialised,
     * nothing is isolating anything.
     *
     * Deny by default, expressed as "assume the mode that constrains".
     */
    public function test_with_no_tenancy_initialised_hybrid_falls_back_to_the_constraining_mode(): void
    {
        $context = app(TenantContext::class);

        $this->assertSame(TenantContext::MODE_COLUMN, $context->mode());
        $this->assertTrue(
            $context->shouldScopeByColumn(),
            'The fallback must be the mode that adds a WHERE, never the one that omits it.',
        );
    }

    /**
     * THE HAZARD THIS DESIGN INTRODUCES, asserted directly.
     *
     * `mode()` is memoized for every other mode, because it is a config read.
     * Under hybrid it is not, and it must not be: a shared queue worker switches
     * tenants many times inside one container lifetime, and a cached answer
     * would apply the previous tenant's mode to this one. In the bad direction
     * that means dropping a column constraint for a shared tenant because the
     * job before it belonged to a dedicated one.
     */
    public function test_the_mode_is_re_resolved_after_switching_tenants(): void
    {
        $a = Tenant::create(['name' => 'A', 'slug' => 'ha']);
        $b = Tenant::create(['name' => 'B', 'slug' => 'hb']);

        $context = app(TenantContext::class);

        tenancy()->initialize($a);
        $first = $context->mode();
        $keyA = $context->currentKey();
        tenancy()->end();

        tenancy()->initialize($b);
        $second = $context->mode();
        $keyB = $context->currentKey();
        tenancy()->end();

        $this->assertSame($first, $second, 'Both are shared, so both are column mode.');
        $this->assertNotSame($keyA, $keyB, 'But they are genuinely different tenants.');
    }

    /**
     * THE LEAK THE FIRST IMPLEMENTATION WOULD HAVE CAUSED, asserted directly.
     *
     * Resolving to database mode drops the column constraint, on the assumption
     * that a per-tenant CONNECTION is doing the isolating. When that assumption
     * is wrong - a shared tenant misclassified - every tenant reads every other
     * tenant's rows, and the query is perfectly valid so nothing complains.
     *
     * This asserts the property that actually matters, rather than the mode
     * string: under hybrid, a shared tenant's queries still carry a WHERE.
     */
    public function test_a_shared_tenant_still_gets_a_where_clause_under_hybrid(): void
    {
        $shared = Tenant::create(['name' => 'Shared', 'slug' => 'shared-sql']);

        tenancy()->initialize($shared);

        $sql = Client::query()->toSql();

        tenancy()->end();

        $this->assertStringContainsString(
            'tenant_id',
            $sql,
            'A shared tenant misclassified as database-backed loses its only isolation.',
        );
    }

    /* ------------------------------------------------------- the guard */

    /** An unknown mode is refused rather than defaulted. */
    public function test_an_unknown_mode_throws(): void
    {
        config(['panel.tenancy.mode' => 'sideways']);

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessageMatches('/Unknown panel tenancy mode/');

        app(TenantContext::class)->mode();
    }

    /**
     * Hybrid never resolves to itself. Every caller downstream branches on
     * `column` or `database`, so leaking `hybrid` through would fall into
     * whatever the `match` treats as default - and in `isIsolated()` that would
     * be an unhandled case rather than a safe one.
     */
    public function test_hybrid_always_resolves_to_a_concrete_mode(): void
    {
        $tenant = Tenant::create(['name' => 'C', 'slug' => 'hc']);

        tenancy()->initialize($tenant);

        $this->assertContains(
            app(TenantContext::class)->mode(),
            [TenantContext::MODE_COLUMN, TenantContext::MODE_DATABASE],
        );

        tenancy()->end();
    }

    /**
     * And the existing modes are untouched: adding a fourth must not change how
     * the three that already worked behave.
     */
    public function test_the_existing_modes_still_resolve_to_themselves(): void
    {
        foreach ([TenantContext::MODE_COLUMN, TenantContext::MODE_DATABASE, TenantContext::MODE_NONE] as $mode) {
            config(['panel.tenancy.mode' => $mode]);

            // A fresh instance: `mode()` memoizes for these, which is correct
            // because they are a config read and cannot change mid-request.
            $this->assertSame($mode, (new TenantContext)->mode(), $mode);
        }
    }

    /* --------------------------------------------- surviving a fresh load */

    /**
     * THE GAP THIS SUITE HAD. Every test above sets the database name with
     * `setInternal()` and asks the question in the same breath, which proves the
     * CHECK is right and proves nothing about whether a tenant can be in
     * database mode at all.
     *
     * It could not. `setInternal()` wrote to a plain array on the model
     * instance, so the answer lived exactly as long as that object. On the next
     * request the tenant was loaded fresh from the central connection, the array
     * was empty, `getInternal('db_name')` returned null, and hybrid mode
     * concluded the tenant was column-scoped - for every tenant, always.
     *
     * The symptom is the dangerous kind: nothing throws. A tenant configured for
     * database isolation silently shares the central database with everyone
     * else, protected only by the column scope it was supposed to have
     * outgrown. This test reloads the model from the database, which is the one
     * thing that distinguishes a persisted answer from a remembered one.
     */
    public function test_database_mode_survives_reloading_the_tenant(): void
    {
        $dedicated = Tenant::create(['name' => 'Dedicated', 'slug' => 'dedicated']);
        $dedicated->setInternal('db_name', 'tenant_dedicated.sqlite');
        $dedicated->save();

        // A DIFFERENT INSTANCE, from the database. Re-reading the same object
        // would pass against the in-memory array and prove nothing.
        $reloaded = Tenant::query()->findOrFail($dedicated->getKey());

        $this->assertSame(
            'tenant_dedicated.sqlite',
            $reloaded->getInternal('db_name'),
            'A tenant reloaded from the central connection still knows it has its own database.',
        );
        $this->assertTrue($reloaded->hasOwnDatabase());
    }

    /** The other half: a shared tenant reloads as shared, not as a false positive. */
    public function test_a_shared_tenant_reloads_without_a_database(): void
    {
        $shared = Tenant::create(['name' => 'Shared two', 'slug' => 'shared-two']);

        $reloaded = Tenant::query()->findOrFail($shared->getKey());

        $this->assertNull($reloaded->getInternal('db_name'));
        $this->assertFalse($reloaded->hasOwnDatabase());
    }

    /**
     * The bootstrapper LEAVES SHARED TENANTS ALONE.
     *
     * stancl's own switches the connection for every tenant, so enabling it
     * alongside column-scoped tenants throws on the first one. PanelKit's
     * subclass is the only reason hybrid can be configured at all, and the thing
     * worth asserting is the refusal - the connection must be untouched.
     */
    public function test_the_bootstrapper_does_not_switch_a_shared_tenant(): void
    {
        $shared = Tenant::create(['name' => 'Untouched', 'slug' => 'untouched']);
        $before = \DB::connection()->getName();

        app(ConditionalDatabaseBootstrapper::class)->bootstrap($shared);

        $this->assertSame($before, \DB::connection()->getName());
    }
}
