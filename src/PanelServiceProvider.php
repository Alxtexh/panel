<?php

declare(strict_types=1);

namespace PanelKit\Panel;

use Illuminate\Support\ServiceProvider;

/**
 * Phase 0: registration only. Resources, routing, and the schema layer arrive
 * in Phase 4 — the spec is explicit that abstracting before then is guesswork.
 *
 * The two things established here are not deferrable, because retrofitting them
 * is what produces cross-tenant leaks under a long-lived worker (spec §9):
 *
 *   1. PanelManager is bound `scoped`, never `singleton`. Octane resets scoped
 *      bindings between requests; a singleton would carry one tenant's resolved
 *      state into the next tenant's request on the same worker.
 *   2. A flush hook clears package memoization on Octane's RequestReceived.
 */
final class PanelServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/panel.php', 'panel');

        // Scoped, not singleton. See note above — this is load-bearing.
        $this->app->scoped(PanelManager::class, fn () => new PanelManager());

        // Also scoped: it resolves the current tenant, which is per-request
        // state by definition. A singleton here is the classic Octane leak.
        $this->app->scoped(Support\TenantContext::class, fn () => new Support\TenantContext());

        // Stateless, so a singleton is safe here — it holds no request or tenant
        // data, which is the only thing S9 forbids in a long-lived binding.
        $this->app->singleton(Support\SchemaCache::class);
    }

    public function boot(): void
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/panel.php' => config_path('panel.php'),
            ], 'panel-config');

            $this->commands([
                Commands\CacheClearCommand::class,
                Commands\SeedDemoCommand::class,
            ]);
        }

        $this->registerOctaneFlush();
    }

    /**
     * Under Octane/Swoole/FrankenPHP the container survives between requests.
     * Anything the package memoized during request N must not be visible in
     * request N+1, which may belong to a different tenant.
     */
    private function registerOctaneFlush(): void
    {
        if (! $this->app->bound('events')) {
            return;
        }

        // Referenced by name so the package does not depend on laravel/octane.
        $this->app['events']->listen(
            'Laravel\Octane\Events\RequestReceived',
            static fn () => PanelManager::flushMemoization(),
        );
    }
}
