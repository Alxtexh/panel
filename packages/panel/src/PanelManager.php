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

    /**
     * Which panel a plugin's resource was registered for.
     *
     * STATIC FOR THE SAME REASON `$panels` IS: this is boot-time configuration,
     * identical for every request, and a scoped binding rebuilt per request
     * would forget it - so a plugin's resource would be discoverable on the
     * first request and belong to no panel on the second.
     *
     * @var array<class-string, string>
     */
    private static array $resourcePanels = [];

    /**
     * Plugins registered globally, by id.
     *
     * KEYED BY ID so registering the same plugin twice - once from its own
     * service provider and once explicitly in a panel, which is an easy mistake
     * - is a no-op rather than a duplicate-key exception naming a RESOURCE.
     *
     * @var array<string, Plugins\PanelPlugin>
     */
    private static array $plugins = [];

    /** Panels whose plugins have already run, so they run exactly once. */
    private static array $pluginsApplied = [];

    /**
     * What plugins contributed, per panel.
     *
     * @var array<string, list<Plugins\PluginContext>>
     */
    private static array $pluginContexts = [];

    public function registerPanel(Panel $panel): void
    {
        self::$panels[$panel->id] = $panel;
    }

    /** @return array<string, Panel> */
    public function panels(): array
    {
        return self::$panels;
    }

    /* ------------------------------------------------------------- plugins */

    /**
     * Install a plugin into every panel that accepts it.
     *
     * CALLED FROM A PACKAGE'S OWN SERVICE PROVIDER, which is what makes
     * `composer require` enough: Laravel discovers the provider, the provider
     * registers the plugin, and the panel picks it up when it applies plugins at
     * boot. Nothing in the application has to be edited, which is the entire
     * difference between a plugin and a README.
     *
     * REGISTERING TWICE IS A NO-OP, keyed by the plugin's id. A package
     * registered globally AND named explicitly in a panel provider is an easy
     * mistake to make and an ugly one to diagnose - without this it surfaces as
     * a duplicate-key exception naming a RESOURCE, several layers from the
     * cause.
     */
    public function plugin(Plugins\PanelPlugin $plugin): void
    {
        self::$plugins[$plugin->id()] = $plugin;
    }

    /** @return array<string, Plugins\PanelPlugin> */
    public function plugins(): array
    {
        return self::$plugins;
    }

    /**
     * Run every applicable plugin against `$panel`, once.
     *
     * IDEMPOTENT BY PANEL, because this is called from route registration and
     * from anything that needs the resulting pages - and running a plugin twice
     * would register its resources twice, which throws.
     *
     * PLUGINS FROM CONFIG TOO. `panel.plugins` is how an installation adds one
     * whose package does not register itself, and how it can be turned off
     * without uninstalling anything.
     */
    public function applyPlugins(Panel $panel): void
    {
        if (isset(self::$pluginsApplied[$panel->id])) {
            return;
        }

        // Marked BEFORE the loop: a plugin that resolves something which itself
        // asks for the panel's pages would otherwise recurse forever.
        self::$pluginsApplied[$panel->id] = true;

        foreach ((array) config('panel.plugins', []) as $class) {
            $instance = is_string($class) ? app($class) : $class;

            if ($instance instanceof Plugins\PanelPlugin) {
                $this->plugin($instance);
            }
        }

        $contexts = [];

        foreach ([...self::$plugins, ...$panel->getPlugins()] as $plugin) {
            if (! $plugin->appliesTo($panel)) {
                continue;
            }

            $context = new Plugins\PluginContext($panel, $this);

            $plugin->register($context);

            $contexts[] = $context;
        }

        self::$pluginContexts[$panel->id] = $contexts;
    }

    /**
     * Navigation entries contributed by plugins, plus the panel's own.
     *
     * ONE LIST FOR THE APPLICATION TO MERGE. The alternative - the app asking
     * for plugin pages, then for the trash entry, then for whatever comes next -
     * means every new panel-provided screen needs a line in every application
     * that ever installed this package, which is precisely the disappearing-page
     * failure the declared-pages test exists to catch.
     *
     * @return list<array{title: string, href: string, icon: string, group: string|null}>
     */
    public function panelPages(?string $panelId = null): array
    {
        $panel = $panelId === null ? $this->currentPanel() : $this->panel($panelId);

        if ($panel === null) {
            return [];
        }

        $this->applyPlugins($panel);

        $pages = [];

        /*
         * THE BIN IS NO LONGER IN THIS LIST, and the reason is what the list is
         * FOR. `panelPages` becomes the sidebar - the column of things this
         * panel administers. A bin of records deleted from those screens is
         * about the installation rather than about the subject matter, and it
         * was the only member of a group called Platform, so one entry created a
         * whole heading of its own.
         *
         * It moved to the account menu, beside the backups and the logs, which
         * are the other screens about the installation. The entry itself is
         * still described by the package - see `TrashBin::navigationEntry` - so
         * an application does not have to know a bin exists, or where it lives,
         * or whether this portal has one at all.
         */
        foreach (self::$pluginContexts[$panel->id] ?? [] as $context) {
            foreach ($context->registeredPages() as $page) {
                $pages[] = $page;
            }
        }

        return $pages;
    }

    /**
     * Route callbacks contributed by plugins, for `PanelRoutes` to mount.
     *
     * @return list<\Closure>
     */
    public function pluginRoutes(string $panelId): array
    {
        $panel = $this->panel($panelId);

        if ($panel === null) {
            return [];
        }

        $this->applyPlugins($panel);

        $routes = [];

        foreach (self::$pluginContexts[$panelId] ?? [] as $context) {
            foreach ($context->registeredRoutes() as $callback) {
                $routes[] = $callback;
            }
        }

        return $routes;
    }

    /**
     * Forget every plugin. TESTS ONLY.
     *
     * The registry is static - boot-time configuration, like the panel list - so
     * a test that installs a plugin would otherwise leave it installed for every
     * test after it, in a suite that passes in order and fails alone.
     */
    public static function forgetPlugins(): void
    {
        self::$plugins = [];
        self::$pluginsApplied = [];
        self::$pluginContexts = [];
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

    /**
     * @param  list<class-string>  $classes
     * @param  string|null  $panelId  Overrides the class's own `panel()`.
     */
    public function registerResources(array $classes, ?string $panelId = null): void
    {
        foreach ($classes as $class) {
            $key = $class::key();

            /*
             * WHERE A PLUGIN'S RESOURCE LANDS IS DECIDED HERE, not by the class.
             *
             * A resource declares `protected static string $panel = 'admin'`,
             * which is right for an application's own classes and impossible for
             * a package's: a plugin cannot know what an installation called its
             * portals, so a hardcoded `'admin'` lands nowhere on an installation
             * whose operator portal is `'isp'`. Recording the panel the
             * registration happened FOR lets the same class install into
             * whichever panel accepted the plugin.
             */
            if ($panelId !== null) {
                /*
                 * A RESOURCE BELONGS TO EXACTLY ONE PANEL, and a second claim
                 * throws rather than overwriting.
                 *
                 * This is not theoretical: a plugin that applies to two tenant
                 * portals registers its resource for both, the last write wins,
                 * and the FIRST portal ends up with a navigation entry pointing
                 * at a URL its own route constraint refuses - a 404 on a screen
                 * the menu insists exists. Keys are globally unique because they
                 * are URL segments and ability names, so one class genuinely
                 * cannot serve two portals; the fix is a second class with its
                 * own key, exactly as the reseller portal's plans resource does.
                 */
                $existing = self::$resourcePanels[$class] ?? null;

                if ($existing !== null && $existing !== $panelId) {
                    throw new \RuntimeException(
                        "The resource {$class} was registered for the [{$existing}] panel and again for "
                        ."[{$panelId}]. A resource belongs to one panel: its key is a URL segment and an "
                        .'ability name. Register a subclass with its own `key()` for the second portal.'
                    );
                }

                self::$resourcePanels[$class] = $panelId;
            }

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
     * Singular resources for one panel - roadmap 4.3.
     *
     * FROM CONFIG, NOT DISCOVERY. There are few of them by nature - a screen
     * with one record is a considered decision, not something generated by
     * the dozen - and a config list keeps "which screens exist" grep-able.
     *
     * @return array<string, class-string<Resources\SingularResource>>
     */
    public function singularsFor(string $panelId): array
    {
        $out = [];

        foreach ((array) config('panel.singulars', []) as $class) {
            if ($class::panel() === $panelId) {
                $out[$class::key()] = $class;
            }
        }

        return $out;
    }

    /** @return class-string<Resources\SingularResource>|null */
    public function singular(string $key, ?string $panelId = null): ?string
    {
        $panelId ??= $this->currentPanel()?->id ?? (string) config('panel.default', 'admin');

        return $this->singularsFor($panelId)[$key] ?? null;
    }

    /**
     * The sub-navigation for one resource's cluster, or null - roadmap 4.1.
     *
     * BUILT PER REQUEST, NEVER CACHED WITH THE SCHEMA. The items are filtered
     * by what THIS person may open (`can('viewAny')`), and a schema is cached
     * across people; baking a permission-filtered list into it would show the
     * first visitor's abilities to everyone after them.
     *
     * A CLUSTER OF ONE STILL SHOWS ITS STRIP when the cluster declares pages -
     * the strip is how those pages are reached - and shows nothing when the
     * only content is the screen already open: a sub-navigation whose every
     * entry is "where you are" is decoration.
     *
     * @param  class-string  $resourceClass
     * @return array{key: string, label: string, items: list<array{title: string, href: string, current: bool}>}|null
     */
    public function clusterNavFor(string $resourceClass): ?array
    {
        $cluster = $resourceClass::cluster();

        if ($cluster === null) {
            return null;
        }

        $prefix = rtrim('/'.trim((string) $this->currentPanel()?->getPath(), '/'), '/');

        $items = [];

        foreach ($this->resourcesFor($resourceClass::panel()) as $class) {
            if ($class::cluster() !== $cluster || ! $class::can('viewAny')) {
                continue;
            }

            $items[] = [
                'title' => $class::pluralLabel(),
                'href' => $prefix.'/'.$class::key(),
                'current' => $class === $resourceClass,
                'sort' => $class::navigationSort(),
            ];
        }

        usort($items, static fn (array $a, array $b): int => [$a['sort'], $a['title']] <=> [$b['sort'], $b['title']]);

        $items = array_map(static function (array $item): array {
            unset($item['sort']);

            return $item;
        }, $items);

        foreach ($cluster::pages() as $page) {
            $items[] = [
                'title' => $page['title'],
                'href' => $page['href'],
                'current' => false,
            ];
        }

        if (count($items) < 2) {
            return null;
        }

        return [
            'key' => $cluster::key(),
            'label' => $cluster::label(),
            'items' => $items,
        ];
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
        /*
         * PLUGINS RUN BEFORE THE LIST IS READ, and this is where it has to
         * happen rather than at boot.
         *
         * The application computes its route keys from this method while its
         * route file loads - earlier than any hook a plugin could use - so a
         * plugin's resource was registered AFTER the `whereIn` constraint had
         * already been built from a list that did not contain it. The screen
         * existed, the navigation linked it, and the URL 404ed.
         *
         * Applying here means every caller - routes, navigation, the trash bin,
         * the API - sees the same set, whichever runs first. It is idempotent
         * per panel, so this costs one array lookup after the first call.
         */
        $panel = $this->panel($panelId);

        if ($panel !== null) {
            $this->applyPlugins($panel);
        }

        return array_filter(
            $this->resources(),
            static fn (string $class): bool => (self::$resourcePanels[$class] ?? $class::panel()) === $panelId,
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
     * Static because the listener has no instance to reach. Nothing
     * TENANT-derived is permitted in a static in the first place - what
     * belongs here is process-level state about the INSTALLATION, which a
     * long-lived worker may outlive.
     */
    public static function flushMemoization(): void
    {
        CustomFields\CustomField::flushMemoization();
    }

    public function remember(string $key, \Closure $resolve): mixed
    {
        return $this->memo[$key] ??= $resolve();
    }
}
