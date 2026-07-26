<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use Closure;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use RuntimeException;
use Throwable;

/**
 * Caches resource schemas.
 *
 * THE KEY CONTAINS NO TENANT ID, and that is a deliberate revision of the base
 * spec's `panel:schema:{panelId}:{resource}:{tenantId}:{permissionsHash}:{version}`.
 *
 * Addendum Part A: a schema describes STRUCTURE, which is identical for every
 * tenant. Tenant-varying data (filter options, branding) ships with the records
 * instead. Once the schema holds no tenant data, keying by tenant buys nothing
 * and costs a cache entry per tenant per resource. Dropping it collapses entries
 * from (tenants x resources) to (permission sets x resources) — a hundredfold
 * reduction at a hundred tenants with three roles.
 *
 * It is also SAFER, which is the counter-intuitive part: an entry containing no
 * tenant data cannot leak tenant data however badly its key is built. The old
 * shape depended on the key being right; this one does not.
 *
 * The permissions fingerprint stays, because schemas DO vary by role — a user
 * without `delete_client` gets a schema with no delete action. The app version
 * stays because a deploy changes what a schema means, and antipatterns §4.2
 * records that poisoned entries otherwise outlive the fix that corrected them.
 *
 * A generation fragment (addendum C) allows invalidating a whole scope with one
 * increment rather than scanning keys, which is slow and misses entries.
 */
final class SchemaCache
{
    private const GENERATION_KEY = 'panel:schema:generation';

    /**
     * @param  Closure(): array<string, mixed>  $build
     * @return array<string, mixed>
     */
    public function remember(string $panelId, string $resource, string $permissionsHash, Closure $build): array
    {
        if (! config('panel.schema_cache.enabled', true)) {
            return $build();
        }

        $key = $this->key($panelId, $resource, $permissionsHash);
        $ttl = (int) config('panel.schema_cache.ttl', 3600);

        try {
            return $this->store()->remember($key, $ttl, $build);
        } catch (Throwable $e) {
            /*
             * Addendum C: a cache-store outage must render a SLOWER page, never
             * a 500 — and the failure must be logged loudly rather than
             * swallowed. antipatterns has no bare empty catch anywhere in the
             * package for exactly this reason.
             */
            Log::warning('Panel schema cache unavailable, rebuilding without cache.', [
                'component' => 'SchemaCache',
                'operation' => 'remember',
                'panel' => $panelId,
                'resource' => $resource,
                'exception' => $e->getMessage(),
            ]);

            return $build();
        }
    }

    public function key(string $panelId, string $resource, string $permissionsHash): string
    {
        if ($permissionsHash === '') {
            /*
             * antipatterns §1.5: a placeholder fallback (`?? 'tenant'`) collapsed
             * every tenant onto one cache key in production. An empty
             * fingerprint would do the same across roles, so it throws.
             */
            throw new RuntimeException('Refusing to build a schema cache key with an empty permissions fingerprint.');
        }

        return implode(':', [
            'panel',
            'schema',
            $panelId,
            $resource,
            $permissionsHash,
            $this->generation(),
            $this->version(),
        ]);
    }

    /** Bumping this invalidates every schema in one write. */
    public function bumpGeneration(): int
    {
        try {
            return (int) $this->store()->increment(self::GENERATION_KEY);
        } catch (Throwable $e) {
            Log::warning('Could not bump the schema cache generation.', [
                'component' => 'SchemaCache',
                'operation' => 'bumpGeneration',
                'exception' => $e->getMessage(),
            ]);

            return 0;
        }
    }

    private function generation(): int
    {
        try {
            return (int) $this->store()->get(self::GENERATION_KEY, 0);
        } catch (Throwable) {
            return 0;
        }
    }

    /** A deploy changes what a schema means, so it must change the key. */
    private function version(): string
    {
        return (string) config('panel.version', config('app.version', '1'));
    }

    private function store(): \Illuminate\Contracts\Cache\Repository
    {
        $store = config('panel.schema_cache.store');

        return $store === null ? Cache::store() : Cache::store($store);
    }
}
