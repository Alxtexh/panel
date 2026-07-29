<?php

declare(strict_types=1);

namespace PanelKit\Panel\Plugins;

use Closure;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;

/**
 * What a plugin is allowed to do to a panel.
 *
 * AN ADD-ONLY SURFACE, and that is the whole design. The obvious API would hand
 * the plugin the `Panel` itself, which is also an API where installing a package
 * can change the guard, the tenancy context or the middleware stack - so a
 * billing plugin could turn off tenant scoping, and the symptom would be one
 * organisation seeing another's records with nothing in the diff to explain it.
 * Everything here appends; nothing here reconfigures.
 *
 * THE PANEL IS READABLE, because a plugin legitimately needs to know where it
 * has landed - the path to build a link, the id to key a setting, whether the
 * context is central so it can register a different screen. Reading is not the
 * dangerous half.
 */
final class PluginContext
{
    /** @var list<class-string> */
    private array $resources = [];

    /** @var list<array{title: string, href: string, icon: string, group: string|null}> */
    private array $pages = [];

    /** @var list<Closure> */
    private array $routes = [];

    public function __construct(
        public readonly Panel $panel,
        private readonly PanelManager $manager,
    ) {}

    /**
     * Register resource classes into this panel.
     *
     * THE PANEL COMES FROM HERE, NOT FROM THE CLASS. A resource declares
     * `protected static string $panel` and a plugin cannot know what an
     * installation called its portals - a package hardcoding `'admin'` would
     * land nowhere on an installation whose operator portal is `'isp'`. The
     * manager records the panel this registration happened for, and that
     * overrides the class's own declaration.
     *
     * @param  list<class-string>  $classes
     */
    public function resources(array $classes): self
    {
        $this->manager->registerResources($classes, $this->panel->id);

        $this->resources = [...$this->resources, ...$classes];

        return $this;
    }

    /**
     * Add a navigation entry.
     *
     * THE HREF IS PREFIXED WITH THE PANEL'S PATH here, so a plugin passes
     * `billing/invoices` and gets `/reseller/billing/invoices` on a portal
     * mounted there. A plugin that had to assemble that itself would be a plugin
     * that works in exactly one installation - which is the same bug the export
     * download had, one layer up.
     */
    public function page(string $title, string $href, string $icon = 'dot', ?string $group = null): self
    {
        $prefix = rtrim('/'.trim($this->panel->getPath(), '/'), '/');

        $this->pages[] = [
            'title' => $title,
            'href' => $prefix.'/'.ltrim($href, '/'),
            'icon' => $icon,
            'group' => $group,
        ];

        return $this;
    }

    /**
     * Add routes inside this panel's group.
     *
     * MOUNTED WITH THE PANEL'S PREFIX, MIDDLEWARE AND NAME ALREADY APPLIED, so a
     * plugin route is authenticated and tenant-scoped exactly like a built-in
     * one. A plugin registering routes in its own service provider would get
     * none of that - and an unauthenticated route into a tenant's records is not
     * a mistake anybody spots in review of a package they did not write.
     *
     * The callback receives the panel, for a plugin that needs to vary.
     *
     * @param  Closure(Panel): void  $routes
     */
    public function routes(Closure $routes): self
    {
        $this->routes[] = $routes;

        return $this;
    }

    /** @return list<class-string> */
    public function registeredResources(): array
    {
        return $this->resources;
    }

    /** @return list<array{title: string, href: string, icon: string, group: string|null}> */
    public function registeredPages(): array
    {
        return $this->pages;
    }

    /** @return list<Closure> */
    public function registeredRoutes(): array
    {
        return $this->routes;
    }
}
