<?php

declare(strict_types=1);

namespace PanelKit\Panel;

use PanelKit\Panel\Resources\Resource;

/**
 * Holds the registered panels.
 *
 * Phase 0 is a placeholder - Panel registration, resource discovery, and schema
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
 *   - Only genuinely immutable, tenant-independent data may live in a static -
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
     * Registered panels, keyed by id.
     *
     * A PANEL IS A ROUTING AND AUTHORIZATION BOUNDARY, not a theme. They differ
     * in guard, in middleware, and - the hard one - in whether tenancy applies.
     *
     * STATIC, WHICH IS THE OPPOSITE OF THE RULE THIS FILE OTHERWISE FOLLOWS, so
     * it needs the argument in full.
     *
     * Every other piece of state here is per-request and must not be static: the
     * failure is one request's data leaking into another's under Octane. A panel
     * DEFINITION is not that. It is declared in a service provider from a
     * literal, is identical for every request and every tenant, never derives
     * from anything a client sends, and never mutates after boot - the same
     * category as a route or a config value, both of which the framework also
     * holds process-wide.
     *
     * IT HAD TO CHANGE BECAUSE SCOPED BINDINGS ARE FLUSHED BETWEEN REQUESTS.
     * Panels are registered once, in a provider's `boot`; the manager holding
     * them was rebuilt on the next request with an empty list, and `UsePanel`
     * threw `Unknown panel [admin]` on the SECOND request of a session while the
     * first worked perfectly. Under Octane that is every request after the
     * first.
     *
     * WHAT STAYS PER-REQUEST IS `$currentPanel` below - which panel is serving
     * THIS request is exactly the thing that must never be shared.
     *
     * @var array<string, Panel>
     */
    private static array $panels = [];

    /**
     * The panel serving the current request.
     *
     * INSTANCE STATE ON A SCOPED BINDING, never static. This is per-request data
     * and spec §9 forbids holding per-request state in a static: the failure is
     * one request's panel leaking into another's under Octane, which would mean
     * a tenant request evaluated in central context - every tenant's data at
     * once, intermittently, and not reproducible on `artisan serve`.
     */
    private ?string $currentPanel = null;

    public function registerPanel(Panel $panel): void
    {
        self::$panels[$panel->id] = $panel;
    }

    /** @return array<string, Panel> */
    public function panels(): array
    {
        return self::$panels;
    }

    public function panel(string $id): ?Panel
    {
        return self::$panels[$id] ?? null;
    }

    /**
     * Make a panel current for this request.
     *
     * Called by the panel middleware, once, before anything reads context.
     */
    public function usePanel(string $id): void
    {
        if (! isset(self::$panels[$id])) {
            throw new \RuntimeException("Unknown panel [{$id}].");
        }

        $this->currentPanel = $id;
    }

    /**
     * The panel serving this request.
     *
     * FALLS BACK TO THE DEFAULT PANEL, not to null, and that is deliberate: a
     * null return would force every caller into `?->isCentral() ?? false`, and
     * the moment somebody writes `?? true` by accident, tenant scoping is off.
     * An explicit default keeps the dangerous answer from being reachable by a
     * typo.
     */
    public function currentPanel(): ?Panel
    {
        if ($this->currentPanel !== null) {
            return self::$panels[$this->currentPanel];
        }

        return self::$panels[(string) config('panel.default', 'admin')] ?? null;
    }

    /**
     * Whether the current request runs WITHOUT tenant scoping.
     *
     * The single question the tenant scope asks, expressed once here so the
     * answer cannot differ between call sites. Defaults to FALSE - a panel that
     * was never registered, or a request outside any panel, is treated as
     * tenant-scoped. Deny by default: the cost of being wrong in this direction
     * is an empty list, and the cost of being wrong the other way is a leak.
     */
    public function inCentralContext(): bool
    {
        return $this->currentPanel()?->isCentral() ?? false;
    }

    /**
     * Discover resource classes on disk.
     *
     * Runs once at boot and is immutable thereafter, which spec S9 explicitly
     * permits to be cached - the class LIST is tenant-independent. Anything
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

        foreach (glob(rtrim($directory, '/').'/*.php') ?: [] as $file) {
            $class = rtrim($namespace, '\\').'\\'.basename($file, '.php');

            // Skip anything that is not a concrete resource: an abstract base
            // or a stray helper in the folder must not become a route.
            if (! class_exists($class)) {
                continue;
            }

            $reflection = new \ReflectionClass($class);

            if ($reflection->isAbstract() || ! $reflection->isSubclassOf(Resources\Resource::class)) {
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
            $key = $class::key();

            /*
             * A KEY IS UNIQUE ACROSS THE WHOLE INSTALLATION, and a collision
             * throws rather than overwriting.
             *
             * IT USED TO OVERWRITE, SILENTLY. A reseller portal with its own
             * `PlanResource` keys as `plans`, exactly like the operator
             * portal's, and whichever was discovered second simply replaced the
             * first - so one portal's screen started rendering another portal's
             * resource, with the other's columns, against the other's model.
             * Discovery order is alphabetical by directory, so which one won was
             * not even stable between machines.
             *
             * UNIQUE GLOBALLY RATHER THAN PER PANEL, deliberately. The key is
             * the URL segment, the ability suffix (`view_any_plans`), the
             * schema-cache component and the audit label; making it unique only
             * within a panel would mean every one of those needed a panel
             * qualifier too, and the ones that did not get one would collide
             * quietly somewhere else. One rule, enforced at the door.
             *
             * THE FIX IS ONE LINE IN THE RESOURCE - override `key()` - which is
             * why the message says so.
             */
            if (isset($this->resources[$key]) && $this->resources[$key] !== $class) {
                $existing = $this->resources[$key];

                throw new \RuntimeException(
                    "Two resources both use the key [{$key}]: {$existing} and {$class}. "
                    .'Keys are globally unique because they are URL segments and ability names. '
                    .'Override `public static function key(): string` on one of them.'
                );
            }

            $this->resources[$key] = $class;
        }
    }

    /** @return class-string|null */
    /**
     * A resource by key.
     *
     * UNAMBIGUOUS BY CONSTRUCTION: keys are unique across the installation and
     * a collision throws at registration - see `registerResources`. That is what
     * lets this stay a lookup rather than a lookup plus a panel guess, and what
     * makes the ROUTE the thing that decides which resources are reachable.
     */
    public function resource(string $key): ?string
    {
        return $this->resources()[$key] ?? null;
    }

    /**
     * Resources belonging to one panel.
     *
     * WHY THIS EXISTS RATHER THAN ONE FLAT LIST: the super admin's Tenants
     * resource and the tenant admin's Clients resource must not appear in each
     * other's navigation, and - far more importantly - must not be REACHABLE
     * from each other's routes. A single registry with a shared `{resource}`
     * route segment would let a tenant-panel URL resolve a central-panel
     * resource, which is a central-context query reached from a tenant request.
     *
     * @return array<string, class-string>
     */
    public function resourcesFor(string $panelId): array
    {
        return array_filter(
            $this->resources(),
            static fn (string $class): bool => $class::panel() === $panelId,
        );
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
