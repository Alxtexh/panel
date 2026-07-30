<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tenancy;

use Illuminate\Cache\CacheManager;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\Cache;
use Stancl\Tenancy\Contracts\TenancyBootstrapper;
use Stancl\Tenancy\Contracts\Tenant;

/**
 * Per-tenant cache isolation by KEY PREFIX, on any store.
 *
 * stancl's own `CacheTenancyBootstrapper` isolates by cache TAGS, and of
 * Laravel's stores only redis, array and memcached can tag - so registering
 * it quietly coupled "tenants cannot read each other's cache" to "this
 * installation runs Redis". That coupling is exactly backwards: isolation
 * is a correctness property every installation needs, and Redis is an
 * accelerant some installations add. A key prefix needs nothing from the
 * store at all - see `PrefixedStore` for why the prefix is applied at the
 * Store contract rather than via `cache.prefix` (which the file and array
 * stores silently ignore) or the repository (which four methods bypass).
 *
 * THE SHAPE IS STANCL'S OWN: swap the `cache` manager while tenancy is
 * initialized, restore the original on revert. `TenantCacheManager` decides
 * per call whether tenancy is active, so a manager instance that outlives a
 * request on a long-lived worker can never serve a stale tenant's prefix -
 * the current tenant is read from `tenancy()` at access time, never stored.
 *
 * THE ONE SEMANTIC DIFFERENCE FROM TAGS: `Cache::flush()` still clears the
 * WHOLE store, not one tenant's slice - a prefix scopes reads and writes,
 * not bulk clears. Nothing in the panel flushes the cache at runtime; an
 * application that does should iterate its own keys or accept the shared
 * clear.
 */
final class PrefixCacheBootstrapper implements TenancyBootstrapper
{
    private ?CacheManager $originalCache = null;

    private ?TenantCacheManager $tenantCache = null;

    public function __construct(private readonly Application $app) {}

    public function bootstrap(Tenant $tenant): void
    {
        $this->resetFacadeCache();

        $this->originalCache ??= $this->app['cache'];

        /*
         * ONE tenant manager for the life of this bootstrapper, not one per
         * initialize. It reads the current tenant from `tenancy()` at access
         * time, so reusing it is safe - and each `extend()` call permanently
         * stacks a decorator on the container binding, so a fresh manager
         * per tenant switch would also grow that list without bound on a
         * long-lived worker.
         */
        $this->tenantCache ??= new TenantCacheManager($this->app, $this->originalCache);

        $tenantCache = $this->tenantCache;
        $this->app->extend('cache', static fn (): CacheManager => $tenantCache);
    }

    public function revert(): void
    {
        $this->resetFacadeCache();

        if ($this->originalCache !== null) {
            $original = $this->originalCache;
            $this->app->extend('cache', static fn (): CacheManager => $original);
        }
    }

    /**
     * stancl's own note applies verbatim: a `Cache::` call made before
     * tenancy bootstrapped leaves the facade holding the old manager, and
     * the swap above would silently not take without this.
     */
    private function resetFacadeCache(): void
    {
        Cache::clearResolvedInstances();
    }
}
