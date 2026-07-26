<?php

declare(strict_types=1);

namespace PanelKit\Panel;

/**
 * Holds the registered panels.
 *
 * Phase 0 is a placeholder — Panel registration, resource discovery, and schema
 * resolution land in Phases 4 and 7. What matters now is the state discipline,
 * because it is far cheaper to establish than to retrofit.
 *
 * Spec §9: "No mutable static state that holds request or tenant data." The
 * failure mode is tenant A briefly seeing tenant B's data under load, and it
 * does not reproduce on `php artisan serve`, so it will not be caught by hand.
 *
 * The rule this class follows:
 *
 *   - Per-request or per-tenant state lives on the INSTANCE, which is a scoped
 *     binding and therefore reset between requests.
 *   - Only genuinely immutable, tenant-independent data may live in a static —
 *     currently nothing. The discovered class list (Phase 4) will qualify;
 *     anything derived from it that depends on tenant or user will not.
 */
final class PanelManager
{
    /** @var array<string, mixed> Per-request memoization. Instance state, never static. */
    private array $memo = [];

    /**
     * Registered resource classes, keyed by URL segment.
     *
     * Safe as instance state on a scoped binding. Spec S9 permits the
     * DISCOVERED class list to be cached process-wide because it is immutable
     * and tenant-independent; anything derived from it that depends on tenant or
     * user is not, which is why resolved SCHEMAS live in the cache keyed by
     * permissions rather than here.
     *
     * @var array<string, class-string>
     */
    private array $resources = [];

    private bool $discovered = false;

    /**
     * Discover resource classes on disk.
     *
     * Runs once at boot and is immutable thereafter, which spec S9 explicitly
     * permits to be cached — the class LIST is tenant-independent. Anything
     * derived from it that depends on tenant or user is not, which is why
     * resolved schemas live in the cache keyed by permissions instead.
     *
     * Discovery is what makes `make:panel-resource --generate` produce a
     * working screen with no hand editing: without it, every generated class
     * would still need a manual registration line.
     */
    public function discoverResources(string $directory, string $namespace): void
    {
        if (! is_dir($directory)) {
            return;
        }

        $classes = [];

        foreach (glob(rtrim($directory, '/') . '/*.php') ?: [] as $file) {
            $class = rtrim($namespace, '\\') . '\\' . basename($file, '.php');

            // Skip anything that is not a concrete resource: an abstract base
            // or a stray helper in the folder must not become a route.
            if (! class_exists($class)) {
                continue;
            }

            $reflection = new \ReflectionClass($class);

            if ($reflection->isAbstract() || ! $reflection->isSubclassOf(\PanelKit\Panel\Resources\Resource::class)) {
                continue;
            }

            $classes[] = $class;
        }

        $this->registerResources($classes);
    }

    /** @param list<class-string> $classes */
    public function registerResources(array $classes): void
    {
        foreach ($classes as $class) {
            $this->resources[$class::key()] = $class;
        }
    }

    /** @return class-string|null */
    public function resource(string $key): ?string
    {
        return $this->resources()[$key] ?? null;
    }

    /**
     * Registered resources, discovering on first access.
     *
     * LAZY on purpose. Discovering during a provider's boot() looks tidier and
     * is order-dependent: route files are loaded by the framework's routing
     * bootstrapper, which can run before the application provider boots, so the
     * registry was empty exactly when the routes needed it and every resource
     * 404ed. Resolving on demand cannot be sequenced wrongly.
     *
     * @return array<string, class-string>
     */
    public function resources(): array
    {
        if (! $this->discovered) {
            $this->discovered = true;

            foreach ((array) config('panel.discover', []) as $directory => $namespace) {
                $this->discoverResources($directory, $namespace);
            }
        }

        return $this->resources;
    }

    /**
     * Cleared by the Octane flush listener in PanelServiceProvider.
     *
     * Static because the listener has no instance to reach, and empty because
     * nothing tenant-derived is permitted in a static in the first place. It
     * exists so that when Phase 4 adds process-level caches there is already a
     * single, obvious place to clear them.
     */
    public static function flushMemoization(): void
    {
        // Intentionally empty in Phase 0. See the class docblock.
    }

    public function remember(string $key, \Closure $resolve): mixed
    {
        return $this->memo[$key] ??= $resolve();
    }
}
