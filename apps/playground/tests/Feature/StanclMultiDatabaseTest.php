<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Files\FileStore;
use PanelKit\Panel\Support\TenantContext;
use Stancl\Tenancy\Bootstrappers\DatabaseTenancyBootstrapper;
use Stancl\Tenancy\Bootstrappers\FilesystemTenancyBootstrapper;
use Tests\TestCase;

/**
 * PanelKit against REAL per-tenant databases.
 *
 * The sibling suite proves the tenant is resolved and that single-database
 * scoping isolates. This one proves the harder half, and it needs actual
 * separate databases to prove anything at all:
 *
 *   A TENANT DATABASE HAS NO `tenant_id` COLUMN. That is not a detail - it is
 *   the definition of the mode. Every table is already one tenant's, so the
 *   column would be a constant. If PanelKit adds `where tenant_id = ?` here,
 *   the result is not a subtle leak, it is `no such column: tenant_id` on every
 *   read in the panel.
 *
 * The tables below are therefore built WITHOUT that column, deliberately. A
 * test that created the usual schema and merely checked the generated SQL would
 * pass against code that still emitted the constraint, because nothing would
 * ever execute it.
 *
 * Databases are real files under `database/`, created and deleted per test.
 * Nothing here touches the central database beyond the tenants table itself.
 */
final class StanclMultiDatabaseTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $alpha;

    private Tenant $beta;

    protected function setUp(): void
    {
        parent::setUp();

        /*
         * Both halves set explicitly, never inherited from the app's config.
         *
         * The playground itself runs single-database and has the bootstrapper
         * switched off; this suite is the other mode, so it turns it on. A test
         * that relied on ambient config would silently stop testing anything
         * the day someone changed that file.
         */
        config([
            'panel.tenancy.mode' => TenantContext::MODE_DATABASE,
            /*
             * Both bootstrappers, set BEFORE tenancy is first initialised.
             *
             * An earlier version turned the filesystem one on inside a single
             * test, after setUp had already initialised and ended tenancy with
             * a shorter list. stancl caches bootstrapper instances, so reverting
             * one that had never bootstrapped threw out of `tenancy()->end()` -
             * teardown never completed, tenancy stayed initialised, the
             * connection stayed pointed at a tenant database, and every later
             * test in the suite died on a transaction that was no longer where
             * RefreshDatabase had left it. One badly scoped config change took
             * down 46 tests in files it had never touched.
             */
            'tenancy.bootstrappers' => [
                DatabaseTenancyBootstrapper::class,
                FilesystemTenancyBootstrapper::class,
            ],
        ]);

        /*
         * REGISTERED AS SINGLETONS BY HAND, and this is not test scaffolding -
         * it is the rule for adding a bootstrapper at all.
         *
         * stancl's service provider registers each bootstrapper named in
         * `config/tenancy.php` as a SINGLETON at boot. One that is not in that
         * config never gets registered, so `$app[Bootstrapper::class]` builds a
         * NEW instance every time it is asked for - `bootstrap()` runs on one
         * object and `revert()` on another, and the second one has no record of
         * the paths the first one replaced. The symptom is
         * `Undefined array key "local"` thrown out of `tenancy()->end()`, which
         * says nothing about the cause.
         *
         * The practical consequence for a real app: a bootstrapper cannot be
         * turned on at runtime. It belongs in the config file.
         */
        $this->app->singleton(DatabaseTenancyBootstrapper::class);
        $this->app->singleton(FilesystemTenancyBootstrapper::class);

        $this->alpha = Tenant::create(['name' => 'Alpha', 'slug' => 'alpha']);
        $this->beta = Tenant::create(['name' => 'Beta', 'slug' => 'beta']);

        $this->createDatabaseFor($this->alpha, clients: 3);
        $this->createDatabaseFor($this->beta, clients: 7);
    }

    protected function tearDown(): void
    {
        /*
         * Guarded, because teardown failing is worse than the test failing.
         *
         * A throw here leaves tenancy initialised and the connection switched,
         * and the damage lands on whatever runs next rather than on this file.
         */
        try {
            if (tenancy()->initialized) {
                tenancy()->end();
            }
        } catch (\Throwable) {
            // Nothing useful to do; the assertions have already run.
        }

        // Real files, so they are removed explicitly - RefreshDatabase only
        // knows about the central connection.
        foreach ([$this->alpha ?? null, $this->beta ?? null] as $tenant) {
            if ($tenant === null) {
                continue;
            }

            @unlink(database_path($tenant->database()->getName()));

            // And the per-tenant storage root, when the filesystem
            // bootstrapper created one. A test suite that leaves directories
            // behind in `storage/` is a test suite people stop trusting to
            // clean up after itself.
            $storage = storage_path('tenant'.$tenant->getTenantKey());

            if (is_dir($storage)) {
                exec('rm -rf '.escapeshellarg($storage));
            }
        }

        parent::tearDown();
    }

    /* ------------------------------------------------------ it switches at all */

    /**
     * THE PRECONDITION FOR EVERYTHING ELSE.
     *
     * Without stancl's TenancyServiceProvider registered, `initialize()` binds
     * the tenant and runs NO bootstrappers - no connection switch, no cache
     * tag, no filesystem root. Tenancy reports itself initialised and the
     * connection is still the central one, which looks exactly like working
     * single-database tenancy and is why this is asserted first.
     */
    public function test_initialising_tenancy_switches_the_database_connection(): void
    {
        $this->assertSame(config('tenancy.database.central_connection'), config('database.default'));

        tenancy()->initialize($this->alpha);

        $this->assertSame('tenant', config('database.default'));
        $this->assertSame(
            database_path($this->alpha->database()->getName()),
            config('database.connections.tenant.database'),
        );
    }

    public function test_ending_tenancy_returns_to_the_central_connection(): void
    {
        tenancy()->initialize($this->alpha);
        tenancy()->end();

        $this->assertSame(config('tenancy.database.central_connection'), config('database.default'));
    }

    /* ---------------------------------------------------- the actual queries */

    /**
     * THE HEADLINE: a real read, against a schema with no tenant_id column.
     *
     * This is the assertion the whole mode exists for. It fails loudly - "no
     * such column" - the moment PanelKit starts scoping by column here.
     */
    public function test_panelkit_reads_a_tenant_database_that_has_no_tenant_column(): void
    {
        tenancy()->initialize($this->alpha);
        app()->forgetScopedInstances();

        $this->assertFalse(app(TenantContext::class)->shouldScopeByColumn());

        // Executed, not inspected.
        $this->assertSame(3, Client::query()->count());
        $this->assertCount(3, Client::query()->get());
    }

    /** And the isolation is real: switching tenants changes what is visible. */
    public function test_each_tenant_sees_only_its_own_database(): void
    {
        tenancy()->initialize($this->alpha);
        app()->forgetScopedInstances();
        $this->assertSame(3, Client::query()->count());

        tenancy()->initialize($this->beta);
        app()->forgetScopedInstances();
        $this->assertSame(7, Client::query()->count());

        $names = Client::query()->pluck('name');

        $this->assertTrue(
            $names->every(fn (string $n): bool => str_starts_with($n, 'Beta')),
            "Alpha's rows appeared inside Beta's database: ".$names->implode(', '),
        );
    }

    /** A write lands in the tenant's database and nowhere else. */
    public function test_a_write_lands_in_the_active_tenant_database(): void
    {
        tenancy()->initialize($this->alpha);
        app()->forgetScopedInstances();

        Client::query()->create([
            'name' => 'Alpha New',
            'phone' => '0700000000',
            'access_code' => 'AC-NEW',
            'status' => 'active',
            'plan_type' => 'pppoe',
        ]);

        $this->assertSame(4, Client::query()->count());

        tenancy()->initialize($this->beta);
        app()->forgetScopedInstances();

        $this->assertSame(7, Client::query()->count(), "Alpha's write reached Beta's database.");
    }

    /* ------------------------------------------------------------ the walls */

    /**
     * The panel refuses to serve when tenancy never bootstrapped.
     *
     * In this mode a request that reaches the CENTRAL database has no isolation
     * at all - there is no column to fall back on - so "not isolated" has to be
     * a hard no rather than a degraded yes.
     */
    public function test_the_panel_is_not_isolated_before_tenancy_initialises(): void
    {
        $this->assertFalse(app(TenantContext::class)->isIsolated());

        tenancy()->initialize($this->alpha);
        app()->forgetScopedInstances();

        $this->assertTrue(app(TenantContext::class)->isIsolated());
    }

    /**
     * The tenants table stays readable from inside a tenant's database.
     *
     * `CentralConnection` on the model is what makes this work. Without it the
     * lookup runs against the tenant database, which has no tenants table, and
     * every branding read fails with "no such table".
     */
    public function test_the_tenants_table_is_still_readable_inside_tenancy(): void
    {
        tenancy()->initialize($this->alpha);

        $this->assertSame(2, Tenant::query()->count());
        $this->assertSame('Alpha', app(TenantContext::class)->tenant()->name);
    }

    /* ------------------------------------------------------- the filesystem */

    /**
     * PanelKit's own path prefix and stancl's disk-root suffix BOTH apply, and
     * that redundancy is the right answer rather than a bug to remove.
     *
     * With `FilesystemTenancyBootstrapper` active, stancl repoints the local
     * disk at `storage/tenant{id}/app`. PanelKit additionally writes every file
     * under `tenants/{key}/`. The path therefore carries the tenant twice.
     *
     * The obvious "fix" is for PanelKit to detect the bootstrapper and drop its
     * prefix. That would be wrong: the prefix is not decoration, it is what
     * `belongsToCurrentTenant()` checks before serving a file, and it is the
     * only isolation there is when the bootstrapper is NOT enabled - which is
     * the default in single-database tenancy. Removing a working check to make
     * a path shorter trades a security property for tidiness.
     *
     * So this test pins the behaviour rather than changing it: two prefixes,
     * both correct, and a file written under one tenant is unreachable from
     * another.
     */
    public function test_file_paths_carry_the_tenant_under_the_filesystem_bootstrapper(): void
    {
        // The bootstrapper list is set once in setUp, before tenancy is ever
        // initialised - flipping it here is what took the suite down.
        tenancy()->initialize($this->alpha);
        app()->forgetScopedInstances();

        $alphaRoot = config('filesystems.disks.local.root');
        $path = "tenants/{$this->alpha->id}/branding/mark.png";

        $this->assertStringContainsString("tenant{$this->alpha->id}", $alphaRoot, 'stancl did not suffix the disk root.');
        $this->assertTrue(
            FileStore::belongsToCurrentTenant($path),
            "PanelKit's own prefix must still identify the owner.",
        );

        Storage::disk('local')->put($path, 'x');
        $this->assertTrue(Storage::disk('local')->exists($path));

        // The other tenant's disk is a different root, so the same relative
        // path is simply not there.
        tenancy()->initialize($this->beta);
        app()->forgetScopedInstances();

        $this->assertNotSame($alphaRoot, config('filesystems.disks.local.root'));
        $this->assertFalse(Storage::disk('local')->exists($path));
        $this->assertFalse(
            FileStore::belongsToCurrentTenant($path),
            "Beta must not consider Alpha's path its own.",
        );

        // Written files are real; the roots are under storage/, not the fake.
        @unlink($alphaRoot.'/'.$path);
    }

    /* ---------------------------------------------------------------- setup */

    /**
     * A real tenant database, with a clients table that has NO tenant_id.
     *
     * Built by hand rather than by running the app's migrations, because those
     * create the single-database schema - `tenant_id` columns, foreign keys to
     * a tenants table that does not exist here. A real deployment would keep a
     * separate `database/migrations/tenant/` set; the shape that matters for
     * this test is just "the column is absent".
     */
    private function createDatabaseFor(Tenant $tenant, int $clients): void
    {
        $tenant->database()->manager()->createDatabase($tenant);

        tenancy()->initialize($tenant);

        Schema::connection('tenant')->create('clients', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('phone');
            $table->string('access_code');
            $table->string('status');
            $table->string('plan_type');
            $table->timestamp('expiry_date')->nullable();
            $table->foreignId('plan_id')->nullable();
            $table->foreignId('router_id')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        for ($i = 0; $i < $clients; $i++) {
            Client::query()->create([
                'name' => "{$tenant->name} Client {$i}",
                'phone' => '0700000000',
                'access_code' => "AC-{$tenant->slug}-{$i}",
                'status' => 'active',
                'plan_type' => 'pppoe',
            ]);
        }

        tenancy()->end();
    }
}
