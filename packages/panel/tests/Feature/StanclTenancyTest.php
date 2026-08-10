<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\TenantContext;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\StanclTenant;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Stancl\Tenancy\Contracts\Tenant as TenantContract;

/**
 * The panel against a REAL `stancl/tenancy` v3 installation.
 *
 * EVERYTHING ELSE IN THIS SUITE TESTS THE OTHER BRANCH - the one where stancl
 * is absent, which is what a plain `composer require` produces. This file
 * boots the actual package, initialises real tenancy, and asserts on the
 * result. A faked container binding only proves the code does what its author
 * expected the library to do.
 *
 * THE TWO MODES NEED OPPOSITE BEHAVIOUR, which is the whole reason both are
 * asserted rather than one being assumed to imply the other:
 *
 *   COLUMN mode - every query MUST carry `where tenant_id = ?`. Without it one
 *   organisation reads another's rows out of a shared table. A leak.
 *
 *   DATABASE mode - every query MUST NOT carry it. The rows live in a separate
 *   database and often have no `tenant_id` column at all, so a constraint
 *   produces "no such column" on literally every read. An outage.
 *
 * Getting either backwards is a total failure, in opposite directions.
 *
 * TENANCY IS GLOBAL STATE BY CONSTRUCTION, so `tearDown` ends it. A test that
 * initialises and does not end leaks a connection and a container binding into
 * whatever runs next - which is the Octane failure this package is written
 * against, and reproducing it in our own suite would be ironic rather than
 * useful.
 */
final class StanclTenancyTest extends TestCase
{
    use RefreshDatabase;

    private StanclTenant $alpha;

    private StanclTenant $beta;

    protected function getPackageProviders($app): array
    {
        return [
            ...parent::getPackageProviders($app),
            \Stancl\Tenancy\TenancyServiceProvider::class,
        ];
    }

    protected function setUp(): void
    {
        parent::setUp();

        /*
         * NO BOOTSTRAPPERS BY DEFAULT, and this is the misconfiguration a
         * reader actually hits rather than a harness convenience. stancl's
         * published config enables the DATABASE bootstrapper, because
         * multi-database is what most people install it for - so a
         * single-database installation that leaves the default in place has
         * every `initialize()` try to connect to a per-tenant database nothing
         * ever created, and fails with "database does not exist" rather than
         * anything about scoping.
         */
        config(['tenancy.bootstrappers' => []]);
        config(['tenancy.tenant_model' => StanclTenant::class]);

        $this->alpha = StanclTenant::create(['name' => 'Alpha', 'slug' => 'alpha']);
        $this->beta = StanclTenant::create(['name' => 'Beta', 'slug' => 'beta']);
    }

    protected function tearDown(): void
    {
        if (tenancy()->initialized) {
            tenancy()->end();
        }

        parent::tearDown();
    }

    private function article(string $title, StanclTenant $tenant): Article
    {
        return Article::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->getTenantKey(),
            'title' => $title,
            'status' => 'draft',
        ]);
    }

    /* ------------------------------------------------ the model is a tenant */

    /**
     * A CONVENTIONALLY-SHAPED MODEL SATISFIES THE CONTRACT.
     *
     * Real columns rather than stancl's `data` blob, because that is what a
     * consumer's existing `tenants` table looks like.
     */
    public function test_a_plain_model_satisfies_the_v3_contract(): void
    {
        $this->assertInstanceOf(TenantContract::class, $this->alpha);
        $this->assertSame('id', $this->alpha->getTenantKeyName());
        $this->assertSame($this->alpha->id, $this->alpha->getTenantKey());
    }

    /* ------------------------------------------------------- initialisation */

    public function test_initialising_tenancy_binds_the_tenant(): void
    {
        tenancy()->initialize($this->alpha);

        $this->assertTrue(tenancy()->initialized);
        $this->assertTrue(app()->bound(TenantContract::class));
    }

    /**
     * THE PANEL READS THE TENANT FROM STANCL, not from the signed-in user.
     *
     * This is the branch `TenantContextTest` cannot reach: with stancl
     * initialised, `currentKey()` must prefer it over the auth fallback -
     * otherwise a queued job or a console command running inside
     * `tenancy()->run()` would resolve whoever happened to be authenticated,
     * or nobody.
     */
    public function test_the_panel_resolves_the_tenant_from_stancl(): void
    {
        tenancy()->initialize($this->beta);

        $this->assertSame(
            $this->beta->getTenantKey(),
            app(TenantContext::class)->currentKey(),
            'The panel did not read the tenant stancl had initialised.',
        );
    }

    public function test_ending_tenancy_stops_resolving_a_tenant(): void
    {
        tenancy()->initialize($this->alpha);
        tenancy()->end();

        $this->assertNull(
            app(TenantContext::class)->currentKey(),
            'A tenant survived the end of tenancy, so the next request inherits it.',
        );
    }

    /* --------------------------------------------------------- column mode */

    /**
     * COLUMN MODE SCOPES, EVEN WITH STANCL DRIVING.
     *
     * Single-database tenancy through stancl is a supported arrangement - the
     * tenant is resolved by stancl, the isolation is still a column - so the
     * scope must apply exactly as it does without the package.
     */
    public function test_column_mode_still_scopes_when_stancl_resolves_the_tenant(): void
    {
        config(['panel.tenancy.mode' => 'column']);

        $this->article('Alpha row', $this->alpha);
        $this->article('Beta row', $this->beta);

        tenancy()->initialize($this->alpha);

        $titles = Article::query()->pluck('title')->all();

        $this->assertSame(['Alpha row'], $titles);
    }

    public function test_column_mode_follows_a_switch_between_tenants(): void
    {
        config(['panel.tenancy.mode' => 'column']);

        $this->article('Alpha row', $this->alpha);
        $this->article('Beta row', $this->beta);

        tenancy()->initialize($this->alpha);
        $this->assertSame(['Alpha row'], Article::query()->pluck('title')->all());

        tenancy()->end();
        tenancy()->initialize($this->beta);

        $this->assertSame(
            ['Beta row'],
            Article::query()->pluck('title')->all(),
            'A switch left the previous organisation’s scope in place.',
        );
    }

    /* ------------------------------------------------------- database mode */

    /**
     * DATABASE MODE MUST NOT ADD THE COLUMN CONSTRAINT.
     *
     * The connection is the isolation. Adding `where tenant_id = ?` on top
     * constrains on a column that need not exist, producing "no such column"
     * on every read - an outage rather than a leak, and the opposite failure
     * to the one above.
     */
    public function test_database_mode_adds_no_column_constraint(): void
    {
        config(['panel.tenancy.mode' => 'database']);

        $this->assertFalse(app(TenantContext::class)->shouldScopeByColumn());
    }

    /**
     * AND THE SCOPE IS A NO-OP THERE, asserted through a real query rather
     * than through the flag alone.
     *
     * Both organisations' rows are present in this single test database, so a
     * scope that still applied would return one row; a scope correctly standing
     * down returns both. That is the shape of the assertion precisely because
     * "no constraint" cannot be seen from a passing query in a real
     * multi-database setup, where the other tenant's rows are elsewhere.
     */
    public function test_the_tenant_scope_stands_down_in_database_mode(): void
    {
        config(['panel.tenancy.mode' => 'database']);

        $this->article('Alpha row', $this->alpha);
        $this->article('Beta row', $this->beta);

        tenancy()->initialize($this->alpha);

        $titles = Article::query()->pluck('title')->all();

        sort($titles);

        $this->assertSame(
            ['Alpha row', 'Beta row'],
            $titles,
            'The column scope still applied in database mode, which would be "no such column" on a real per-tenant database.',
        );
    }

    /**
     * THE MODE IS A CONFIGURATION DECISION, NOT A DETECTION.
     *
     * Guessing from whether stancl happens to be initialised would flip a
     * shared-database installation into database mode the moment somebody
     * installed the package for domain resolution alone - silently removing
     * every tenant constraint.
     */
    public function test_installing_stancl_does_not_by_itself_change_the_mode(): void
    {
        config(['panel.tenancy.mode' => 'column']);

        tenancy()->initialize($this->alpha);

        $this->assertTrue(
            app(TenantContext::class)->shouldScopeByColumn(),
            'Initialising stancl silently turned off the column scope.',
        );
    }
}
