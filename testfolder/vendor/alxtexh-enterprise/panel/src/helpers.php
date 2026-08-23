<?php

declare(strict_types=1);

use Alxtexh\Panel\Support\ModuleRegistry;

if (! function_exists('moduleEnabled')) {
    /**
     * Whether the current actor's plan (or grant resolver) includes this module.
     *
     * See `ModuleRegistry` for how a SaaS wires entitlements. Until
     * `ModuleRegistry::grants()` is set, every registered module is enabled.
     * Protect discovered screens with `protected static ?string $module` or
     * wrap other routes with `panel.module:{key}` middleware.
     */
    function moduleEnabled(string $key): bool
    {
        return ModuleRegistry::enabled($key);
    }
}
