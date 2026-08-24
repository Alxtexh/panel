<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Plugins;

use Alxtexh\Panel\Panel;

/**
 * Modular registration for host-owned panel packages.
 *
 * A plugin groups resources, routes, pages and render hooks into a reusable
 * unit that can be shared across your own projects. This is for first-party,
 * host-owned code. There is no marketplace and no third-party plugin track.
 * Build features directly in the application first; extract a plugin only
 * when the same screens belong in more than one project.
 *
 * A PLUGIN IS A THING THAT REGISTERS THINGS, and deliberately nothing more. It
 * does not get the `Panel` to mutate: a plugin that could change the guard, the
 * tenancy context or the middleware would be a package that can turn off tenant
 * scoping - the single most dangerous edit in the codebase - as a side effect of
 * being installed. It gets a `PluginContext`, which can only add.
 *
 * IT IS ASKED WHETHER IT APPLIES, rather than assuming every panel. An
 * installation with an operator portal, a platform portal and a reseller portal
 * does not want the billing screens in all three, and the plugin usually knows
 * better than the person installing it which ones make sense.
 *
 * ORDINARY LARAVEL THINGS STAY ORDINARY. Migrations, config, translations,
 * commands and assets are a service provider's job and this interface
 * deliberately does not restate them - a plugin is a normal package that also
 * knows about panels, not a parallel packaging system.
 */
interface PanelPlugin
{
    /**
     * A stable identifier, unique across everything installed.
     *
     * IT IS NOT DECORATION. Registering the same plugin twice - a package
     * registered globally AND named explicitly in a panel, which is a very easy
     * mistake - would otherwise register its resources twice and throw on the
     * duplicate key with a message about the RESOURCE rather than the plugin.
     * The id is what makes the second registration a no-op.
     *
     * Vendor-prefixed by convention: `acme/billing`, not `billing`.
     */
    public function id(): string;

    /**
     * Whether this plugin belongs in `$panel`.
     *
     * DEFAULTS ARE THE PLUGIN'S TO CHOOSE. A billing plugin might install into
     * every tenant panel and no central one; a platform-health plugin the
     * reverse. `Plugin` provides "tenant panels only" as the common case.
     */
    public function appliesTo(Panel $panel): bool;

    /**
     * Add what this plugin contributes.
     *
     * CALLED ONCE PER PANEL it applies to, at boot, before routes are
     * registered - so a route added here is mounted inside that panel's group
     * with its prefix, middleware and guard already in place.
     */
    public function register(PluginContext $context): void;

    /**
     * Compatibility metadata for `panel:doctor`.
     */
    public function getVersion(): string;

    /**
     * Panel ids this plugin may apply to, without constructing the plugin.
     *
     * Return a list to skip instantiation on other panels. Return null to
     * fall back to `appliesTo()`, which may construct the plugin.
     *
     * @return list<string>|null
     */
    public static function panelIds(): ?array;
}
