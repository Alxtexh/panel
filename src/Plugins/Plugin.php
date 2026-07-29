<?php

declare(strict_types=1);

namespace PanelKit\Panel\Plugins;

use PanelKit\Panel\Panel;

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
}
