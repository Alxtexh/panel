<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tenancy;

use Illuminate\Cache\CacheManager as BaseCacheManager;
use Illuminate\Contracts\Cache\Repository;
use Illuminate\Contracts\Foundation\Application;

/**
 * The cache manager served WHILE TENANCY IS INITIALIZED - see
 * `PrefixCacheBootstrapper` for why it exists and when it is swapped in.
 *
 * Every store it hands out is the real store wrapped in a `PrefixedStore`
 * carrying the current tenant's key, so `Cache::get`, `cache()->many`, a
 * lock, an increment - anything, on any driver - reads and writes inside
 * that tenant's slice.
 *
 * IT NEVER RESOLVES A STORE OF ITS OWN - the inner store always comes from
 * the CENTRAL manager, and that is load-bearing rather than tidy. A manager
 * that resolved its own stores would hold its own ArrayStore, whose data
 * lives in the instance: every tenant switch would get a fresh, empty
 * store, which looks exactly like isolation and is actually amnesia - and
 * on Octane it would also mean per-manager store instances drifting apart.
 * One shared inner store, many per-tenant prefixes, is the whole design.
 *
 * The current tenant is read from `tenancy()` AT ACCESS TIME, never stored
 * on this object - so the single long-lived instance the bootstrapper keeps
 * can serve any number of tenants on one worker without carrying state
 * between them. Wrapped repositories are memoized per (tenant, store);
 * they hold nothing but a prefix string and a reference to the shared
 * store.
 */
final class TenantCacheManager extends BaseCacheManager
{
    /** @var array<string, Repository> keyed by "{tenantKey}:{storeName}" */
    private array $wrapped = [];

    public function __construct(
        Application $app,
        private readonly BaseCacheManager $central,
    ) {
        parent::__construct($app);
    }

    public function store($name = null): Repository
    {
        $name = $name ?: $this->getDefaultDriver();

        if (! tenancy()->initialized) {
            return $this->central->store($name);
        }

        $tenantKey = (string) tenant()->getTenantKey();

        return $this->wrapped["{$tenantKey}:{$name}"] ??= $this->repository(
            new PrefixedStore($this->central->store($name)->getStore(), "tenant_{$tenantKey}_"),
            (array) ($this->app['config']["cache.stores.{$name}"] ?? []),
        );
    }
}
