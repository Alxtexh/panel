<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Pages\Page;
use Alxtexh\Panel\Widgets\ChartWidget;
use Alxtexh\Panel\Widgets\StatWidget;
use Alxtexh\Panel\Widgets\TableWidget;
use InvalidArgumentException;

/**
 * A starting point for a plugin, with the boring half already answered.
 *
 * OPTIONAL BY DESIGN - the interface is the contract and a plugin may implement
 * it directly. This exists because two of the three methods have an obvious
 * right answer for most packages, and a base class that supplies them means the
 * only thing anybody has to think about is `register()`.
 *
 * TENANT PANELS ONLY, by default. Almost every plugin adds screens about a
 * customer's own data - invoices, tickets, usage - and installing those into a
 * CENTRAL portal would put them where tenant scoping is deliberately off. That
 * is the direction where a wrong default leaks, so the default is the narrow
 * one; a plugin meant for the platform portal says so explicitly.
 */
abstract class Plugin implements PanelPlugin
{
    /**
     * The PanelKit plugin contract version this plugin API hardening targets.
     *
     * Plugins should override `getVersion()` when they are written for a
     * different contract. For the MVP, Panel's `panel:doctor` reports
     * incompatibilities when the versions do not match.
     */
    public const CONTRACT_VERSION = '1.0.57';

    /** @var PluginContext|null Set during `register()` only. */
    private ?PluginContext $context = null;

    /**
     * The class name, unless overridden.
     *
     * UNIQUE BECAUSE PHP MAKES IT UNIQUE - two plugins cannot share a fully
     * qualified name - so the duplicate-registration guard works even for a
     * package that never thought about ids. A published plugin should still
     * declare a friendlier one; this is the floor, not the recommendation.
     */
    public function id(): string
    {
        return static::class;
    }

    public function appliesTo(Panel $panel): bool
    {
        return $panel->getContext() === Panel::CONTEXT_TENANT;
    }

    /**
     * Panel ids this plugin may apply to, without constructing the plugin.
     *
     * Override with a narrow list so PanelKit can skip loading the class on
     * portals this plugin never targets. Return null to use `appliesTo()` only.
     *
     * @return list<string>|null
     */
    public static function panelIds(): ?array
    {
        return null;
    }

    /**
     * Compatibility metadata for `panel:doctor`.
     */
    public function getVersion(): string
    {
        return static::CONTRACT_VERSION;
    }

    /**
     * Optional runtime dependencies expressed as class or interface names.
     * Doctor can validate these without requiring a package-manager-specific
     * implementation, while the plugin remains free to use Composer normally.
     *
     * @return list<class-string>
     */
    public function dependencies(): array
    {
        return [];
    }

    /**
     * Optional host/plugin health findings for `panel:doctor`.
     *
     * @return list<array{level?: 'problem'|'note', title: string, detail: string, suggested?: string}>
     */
    public function health(): array
    {
        return [];
    }

    /** The config key whose value is validated by configRules(), if any. */
    public function configKey(): ?string
    {
        return null;
    }

    /**
     * Optional Laravel validation rules for plugin configuration.
     *
     * @return array<string, string|array<int, mixed>>
     */
    public function configRules(): array
    {
        return [];
    }

    /**
     * Register this plugin into the provided panel.
     *
     * The base class implements the contract methods listed in the
     * extension API. Plugins may still override `register()` directly,
     * for backward compatibility with existing first-party plugins.
     */
    public function register(PluginContext $context): void
    {
        $this->context = $context;
        $panel = $context->panel;

        $this->registerResources($panel);
        $this->registerPages($panel);
        $this->registerWidgets($panel);
        $this->registerMenuItems($panel);
        $this->registerRenderHooks($panel);
    }

    /**
     * Plugin hook for panel resource registration.
     *
     * @param  Panel  $panel
     */
    public function registerResources(Panel $panel): void {}

    /**
     * Plugin hook for panel Page-class registration.
     *
     * @param  Panel  $panel
     */
    public function registerPages(Panel $panel): void {}

    /**
     * Plugin hook for dashboard widget registration.
     *
     * @param  Panel  $panel
     */
    public function registerWidgets(Panel $panel): void {}

    /**
     * Plugin hook for sidebar navigation entries that are not Page classes.
     *
     * Prefer `registerPages()` with `pageClasses()` when the screen is a routable
     * `Page`: routes mount at boot and navigation is derived from the class.
     * Use `menuItem()` here for links to routes you register with
     * `PluginContext::routes()`, or for external URLs.
     *
     * @param  Panel  $panel
     */
    public function registerMenuItems(Panel $panel): void {}

    /**
     * Plugin hook for render hooks to named positions.
     *
     * @param  Panel  $panel
     */
    public function registerRenderHooks(Panel $panel): void {}

    /**
     * Access to the add-only plugin context during registration.
     *
     * @throws InvalidArgumentException
     */
    protected function pluginContext(): PluginContext
    {
        if ($this->context === null) {
            throw new InvalidArgumentException('PluginContext is not set.');
        }

        return $this->context;
    }

    /**
     * Register resources into this plugin's target panel.
     *
     * @param  list<class-string<\Alxtexh\Panel\Resources\Resource>>  $classes
     */
    protected function resources(array $classes): void
    {
        $this->pluginContext()->resources($classes);
    }

    /**
     * Register Page classes into this plugin's target panel.
     *
     * @param  list<class-string<Page>>  $classes
     */
    protected function pageClasses(array $classes): void
    {
        $this->pluginContext()->pageClasses($classes);
    }

    /**
     * Register dashboard widgets into this plugin's target panel.
     *
     * @param  list<StatWidget|ChartWidget|TableWidget>  $widgets
     */
    protected function widgets(array $widgets): void
    {
        $this->pluginContext()->widgets($widgets);
    }

    /**
     * Add a navigation entry.
     */
    protected function menuItem(string $title, string $href, string $icon = 'dot', ?string $group = null): void
    {
        $this->pluginContext()->page($title, $href, $icon, $group);
    }

    /**
     * Add a named render hook.
     *
     * @param  array<string, mixed>  $props
     * @param  list<string>|null  $resources
     * @param  int  $version  Render-hook contract version.
     */
    protected function render(
        string $position,
        string $component,
        array $props = [],
        ?array $resources = null,
        int $version = RenderHooks::VERSION,
    ): void
    {
        $this->pluginContext()->render($position, $component, $props, $resources, $version);
    }
}
