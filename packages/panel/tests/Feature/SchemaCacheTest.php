<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\SchemaCache;
use Alxtexh\Panel\Tests\TestCase;
use RuntimeException;

/**
 * The cache key behind every resource schema, where a collision is a leak.
 *
 * A SCHEMA IS SHAPED BY WHO IS ASKING. Columns and fields are filtered by
 * ability, so two roles legitimately see two different schemas for one
 * resource - which means the PERMISSIONS FINGERPRINT is part of the identity of
 * the cached thing, not metadata about it. Drop it and one role's schema is
 * served to another.
 *
 * AN EMPTY FINGERPRINT THROWS RATHER THAN FALLING BACK, and the reason is
 * recorded in the source as something that already happened: a placeholder
 * default collapsed every tenant onto one key in production. A fallback here
 * would do the same across roles, quietly, and a cache serving the wrong
 * answer is indistinguishable from a permissions bug.
 *
 * THE GENERATION IS HOW EVERYTHING IS INVALIDATED AT ONCE. Schemas are derived
 * from code as well as from data, so a deploy has to be able to discard them
 * all without knowing their keys - which is what `panel:cache-clear` does.
 */
final class SchemaCacheTest extends TestCase
{
    private function cache(): SchemaCache
    {
        return app(SchemaCache::class);
    }

    public function test_a_key_is_built_from_the_panel_the_resource_and_the_role(): void
    {
        $key = $this->cache()->key('admin', 'articles', 'roles-abc');

        $this->assertStringContainsString('admin', $key);
        $this->assertStringContainsString('articles', $key);
        $this->assertStringContainsString('roles-abc', $key);
    }

    /**
     * TWO ROLES DO NOT SHARE A KEY.
     *
     * The failure this prevents is one role being served the other's schema -
     * which shows columns and fields somebody may not have, and looks like a
     * permissions bug rather than a caching one.
     */
    public function test_two_permission_fingerprints_produce_different_keys(): void
    {
        $cache = $this->cache();

        $this->assertNotSame(
            $cache->key('admin', 'articles', 'roles-abc'),
            $cache->key('admin', 'articles', 'roles-def'),
            'Two roles shared a schema cache key.',
        );
    }

    public function test_two_panels_do_not_share_a_key(): void
    {
        $cache = $this->cache();

        $this->assertNotSame(
            $cache->key('admin', 'articles', 'roles-abc'),
            $cache->key('second', 'articles', 'roles-abc'),
        );
    }

    public function test_two_resources_do_not_share_a_key(): void
    {
        $cache = $this->cache();

        $this->assertNotSame(
            $cache->key('admin', 'articles', 'roles-abc'),
            $cache->key('admin', 'reports', 'roles-abc'),
        );
    }

    /**
     * AN EMPTY FINGERPRINT IS REFUSED RATHER THAN DEFAULTED.
     *
     * A placeholder fallback already collapsed every tenant onto one key in
     * production once. Throwing is loud; a fallback is silent and wrong.
     */
    public function test_an_empty_permissions_fingerprint_is_refused(): void
    {
        $this->expectException(RuntimeException::class);

        $this->cache()->key('admin', 'articles', '');
    }

    /**
     * STRUCTURE IS ONLY IN THE KEY WHEN THERE IS ANY.
     *
     * Custom fields make a tenant's schema differ from everybody else's, so
     * their fingerprint joins the key - but an installation that has added
     * none must keep the SHARED key every tenant already warms, or the feature
     * would cost a cache miss to everybody who never used it.
     */
    public function test_structure_only_enters_the_key_when_present(): void
    {
        $cache = $this->cache();

        $this->assertSame(
            $cache->key('admin', 'articles', 'roles-abc'),
            $cache->key('admin', 'articles', 'roles-abc', ''),
            'An empty structure fingerprint changed the key, costing a miss to every tenant with no custom fields.',
        );

        $this->assertNotSame(
            $cache->key('admin', 'articles', 'roles-abc'),
            $cache->key('admin', 'articles', 'roles-abc', 'fields-xyz'),
            'A tenant with custom fields shared a key with one without.',
        );
    }

    public function test_remember_resolves_once_and_serves_the_stored_value(): void
    {
        $cache = $this->cache();
        $calls = 0;

        $resolve = function () use (&$calls): array {
            $calls++;

            return ['shape' => 'first'];
        };

        $first = $cache->remember('admin', 'articles', 'roles-abc', $resolve);
        $second = $cache->remember('admin', 'articles', 'roles-abc', $resolve);

        $this->assertSame($first, $second);
        $this->assertSame(1, $calls, 'The schema was rebuilt on a cache hit.');
    }

    /**
     * BUMPING THE GENERATION DISCARDS EVERYTHING WITHOUT KNOWING ANY KEY.
     *
     * Schemas are derived from CODE as well as data, so a deploy must be able
     * to invalidate them all - which is what `panel:cache-clear` does, and why
     * it cannot work by enumerating keys it has no way to list.
     */
    public function test_bumping_the_generation_invalidates_everything(): void
    {
        $cache = $this->cache();
        $calls = 0;

        $resolve = function () use (&$calls): array {
            $calls++;

            return ['shape' => 'built'];
        };

        $cache->remember('admin', 'articles', 'roles-abc', $resolve);
        $this->assertSame(1, $calls);

        $cache->bumpGeneration();

        $cache->remember('admin', 'articles', 'roles-abc', $resolve);

        $this->assertSame(2, $calls, 'A bumped generation still served the old schema.');
    }

    public function test_the_generation_moves_forward(): void
    {
        $cache = $this->cache();

        $before = $cache->generation();
        $after = $cache->bumpGeneration();

        $this->assertGreaterThan($before, $after);
    }
}
