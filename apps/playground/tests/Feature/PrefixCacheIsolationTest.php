<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Alxtexh\Panel\Tenancy\PrefixCacheBootstrapper;
use Tests\TestCase;

/**
 * The cache is part of the isolation matrix, not an exception to it.
 *
 * A memoized count or a per-tenant setting served from another
 * organisation's cache entry is a cross-tenant leak exactly as real as a
 * missing WHERE clause - it just arrives through a different door. stancl's
 * tags-based bootstrapper guaranteed this only on stores that can tag
 * (redis, array, memcached), which quietly made a correctness property
 * depend on Redis. `PrefixCacheBootstrapper` gives the same guarantee by
 * key prefix, on any store - these tests prove it on the suite's own store,
 * which is precisely the kind tags cannot handle in production (database).
 */
final class PrefixCacheIsolationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $globex;

    protected function setUp(): void
    {
        parent::setUp();

        // The app's OWN bootstrapper list is asserted, not overridden - the
        // same reasoning as StanclSharedQueueTest: a test that wires the
        // bootstrapper itself passes whether or not the application does.
        $this->assertContains(
            PrefixCacheBootstrapper::class,
            (array) config('tenancy.bootstrappers'),
            'Tenant cache isolation needs PrefixCacheBootstrapper in config/tenancy.php.',
        );

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->globex = Tenant::create(['name' => 'Globex', 'slug' => 'globex']);
    }

    protected function tearDown(): void
    {
        if (tenancy()->initialized) {
            tenancy()->end();
        }

        parent::tearDown();
    }

    public function test_one_tenants_cache_entry_is_invisible_to_another(): void
    {
        tenancy()->initialize($this->acme);
        Cache::put('secret', 'acme-only', 60);
        $this->assertSame('acme-only', Cache::get('secret'));
        tenancy()->end();

        tenancy()->initialize($this->globex);
        $this->assertNull(Cache::get('secret'), "Globex read Acme's cache entry - a cross-tenant leak.");

        // And writing the same key does not clobber the other tenant's value.
        Cache::put('secret', 'globex-only', 60);
        tenancy()->end();

        tenancy()->initialize($this->acme);
        $this->assertSame('acme-only', Cache::get('secret'), "Globex's write reached Acme's entry.");
        tenancy()->end();
    }

    public function test_tenant_entries_are_invisible_from_central_and_vice_versa(): void
    {
        Cache::put('shared-key', 'central', 60);

        tenancy()->initialize($this->acme);
        $this->assertNull(Cache::get('shared-key'), 'A tenant read the central cache entry.');
        Cache::put('shared-key', 'acme', 60);
        tenancy()->end();

        $this->assertSame('central', Cache::get('shared-key'), "A tenant's write reached the central entry.");
    }

    /**
     * The revert path is what a long-lived worker lives on: after tenancy
     * ends, the next cache access must be back on the central slice, not
     * stranded on the previous tenant's - asserted by BEHAVIOUR, not by
     * inspecting a prefix nobody reads.
     */
    public function test_ending_tenancy_restores_the_central_cache(): void
    {
        Cache::put('central-key', 'central-value', 60);

        tenancy()->initialize($this->acme);
        $this->assertNull(Cache::get('central-key'));
        tenancy()->end();

        $this->assertSame('central-value', Cache::get('central-key'));
    }

    /**
     * `Cache::many()` is the documented bypass a repository-level prefix
     * would have left open - it reaches the store without `itemKey()` - and
     * it is what the queue worker calls every few seconds. Locks are keys
     * too: an unprefixed lock would serialise two tenants' unrelated work.
     */
    public function test_many_and_locks_are_isolated_too(): void
    {
        tenancy()->initialize($this->acme);
        Cache::put('a', 1, 60);
        Cache::put('b', 2, 60);
        $this->assertSame(['a' => 1, 'b' => 2], Cache::many(['a', 'b']));
        $acmeLock = Cache::lock('the-lock', 30);
        $this->assertTrue($acmeLock->acquire());
        tenancy()->end();

        tenancy()->initialize($this->globex);
        $this->assertSame(['a' => null, 'b' => null], Cache::many(['a', 'b']));

        // Globex acquiring "the same" lock proves the two locks are
        // different keys - Acme still holds its own.
        $this->assertTrue(Cache::lock('the-lock', 30)->acquire(), 'A lock name collided across tenants.');
        tenancy()->end();
    }
}
