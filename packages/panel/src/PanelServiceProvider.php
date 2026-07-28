<?php

declare(strict_types=1);

namespace PanelKit\Panel;

use Illuminate\Support\ServiceProvider;

/**
 * Phase 0: registration only. Resources, routing, and the schema layer arrive
 * in Phase 4 - the spec is explicit that abstracting before then is guesswork.
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
        $this->mergeConfigFrom(__DIR__.'/../config/panel.php', 'panel');

        // Scoped, not singleton. See note above - this is load-bearing.
        $this->app->scoped(PanelManager::class, fn () => new PanelManager);

        // Also scoped: it resolves the current tenant, which is per-request
        // state by definition. A singleton here is the classic Octane leak.
        $this->app->scoped(Support\TenantContext::class, fn () => new Support\TenantContext);

        // Stateless, so a singleton is safe here - it holds no request or tenant
        // data, which is the only thing S9 forbids in a long-lived binding.
        $this->app->singleton(Support\SchemaCache::class);

        /*
         * Scoped, because it memoizes rows it has read. Installation settings
         * are not tenant data, so a leak here would not cross customers - but a
         * singleton under Octane would hold the retention policy as it stood
         * when the worker booted, and an operator who changed it would watch the
         * old one keep running with nothing to explain why.
         */
        $this->app->scoped(Support\PanelSettings::class);

        /*
         * THE EMBEDDER IS RESOLVED FROM CONFIG, not hardcoded, because which
         * model - and whether an outbound call is acceptable at all - is the
         * installation's decision and not the panel's. The default is local and
         * free; see `config/panel.php` and `HashEmbedder`.
         *
         * Bound to the INTERFACE so `KnowledgeBase` never names an
         * implementation, and a test can swap one in without touching config.
         */
        $this->app->bind(Knowledge\Embedder::class, static function ($app): Knowledge\Embedder {
            $class = (string) config('panel.knowledge.embedder', Knowledge\HashEmbedder::class);

            /*
             * `ProviderEmbedder` takes its settings from config, and the
             * container cannot guess them - it would try to autowire an `int`
             * and fail with a message about an unresolvable primitive rather
             * than about embeddings.
             */
            if ($class === Knowledge\ProviderEmbedder::class) {
                return new Knowledge\ProviderEmbedder(
                    (int) config('panel.knowledge.dimensions', 1536),
                    config('panel.knowledge.provider'),
                    config('panel.knowledge.model'),
                );
            }

            return $app->make($class);
        });
    }

    public function boot(): void
    {
        // The suspension wall renders before the session loads, so it cannot be
        // an Inertia page - see the view's own note.
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'panel');

        /*
         * LOADED, NOT PUBLISHED. `panel_settings` is the package's own table -
         * an application never edits its columns - so publishing the migration
         * would only create a copy that drifts. Publishing is for things an
         * installation is expected to change; this is not one of them.
         */
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        /*
         * COMMANDS ARE REGISTERED ALWAYS, publishing only in console.
         *
         * They were both inside a `runningInConsole()` guard, which reads as
         * correct and is not: `Artisan::call()` from an HTTP request goes
         * through the same registry, so the platform screen asking for
         * `panel:doctor` got "the command does not exist" - on an installation
         * where it exists and works perfectly from a shell. Registration is
         * cheap and has no effect on a web request that never calls one.
         *
         * PUBLISHING STAYS GUARDED, because it genuinely only means something to
         * `vendor:publish`.
         */
        $this->commands([
            Commands\CacheClearCommand::class,
            Commands\InstallCommand::class,
            Commands\DispatchScheduledReportsCommand::class,
            Commands\IndexKnowledgeCommand::class,
            Commands\MakeApiTokenCommand::class,
            Commands\MakePanelCommand::class,
            Commands\MakeResourceCommand::class,
            Commands\SeedDemoCommand::class,
            Commands\SeedReferenceCommand::class,
            Commands\ReindexTenantCommand::class,
            Commands\JourneyCommand::class,
            Commands\DoctorCommand::class,
            Commands\SuspendTenantCommand::class,
            Commands\BenchmarkCommand::class,
            Commands\RefreshRollupsCommand::class,
            Commands\PruneUploadsCommand::class,
        ]);

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/panel.php' => config_path('panel.php'),
            ], 'panel-config');
        }

        /*
         * EVERY REGISTERED PANEL GETS ITS ROUTES, with no route file to edit.
         *
         * That is what makes `make:panel` produce a working portal rather than a
         * provider somebody then has to wire up. A panel with no resources
         * registers nothing - see `PanelRoutes::register` - so this is free
         * until there is something to route.
         *
         * DEFERRED TO `booted`, WHICH IS NOT A DETAIL. Package providers boot
         * BEFORE application ones, so calling this directly found an empty panel
         * registry - the application's own provider had not run yet - and every
         * resource 404ed while `panel:doctor` and the registry both reported the
         * panels as present. The routes existed nowhere and nothing said so.
         *
         * `booted` runs once every provider has registered, which is the only
         * moment the panel list is complete.
         */
        $this->app->booted(static function (): void {
            Http\PanelRoutes::registerAll();

            /*
             * THE PUBLIC API, mounted once rather than per panel. A panel is how
             * a PERSON reaches data; a token is an integration reading records,
             * and making it choose a portal would leak an interface detail into
             * a contract. See `ApiRoutes`.
             */
            Http\ApiRoutes::register();
        });

        $this->registerTenantUserProvider();
        $this->registerSessionLimit();

        /*
         * The AI SDK's conversation tables are tenant data and arrive without a
         * tenant. Attached rather than forked, because the package is 0.x and a
         * fork would be silently dropped by the next `composer update`.
         */
        Ai\TenantScopedConversations::attach();
        $this->registerOctaneFlush();
    }

    /**
     * Cap how many places one account may be signed in at once.
     *
     * Listens rather than wraps the login controller, so it applies to every
     * route into the application - the form, a passkey, a magic link, an
     * impersonation - without each of them remembering to call it.
     */
    private function registerSessionLimit(): void
    {
        if (! $this->app->bound('events')) {
            return;
        }

        $this->app['events']->listen(
            \Illuminate\Auth\Events\Login::class,
            Auth\EnforceSessionLimit::class,
        );
    }

    /**
     * A user provider that looks credentials up WITHIN the resolved tenant.
     *
     * Registered as a driver rather than swapped in silently, so an application
     * opts in by naming it in `config/auth.php`. An authentication path that
     * changed because a package was installed would be the wrong kind of
     * surprise.
     */
    private function registerTenantUserProvider(): void
    {
        if (! $this->app->bound('auth')) {
            return;
        }

        \Illuminate\Support\Facades\Auth::provider(
            'panel-tenant',
            fn ($app, array $config) => new Auth\TenantUserProvider($app['hash'], $config['model']),
        );
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
