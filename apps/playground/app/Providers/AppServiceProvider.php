<?php

namespace App\Providers;

use App\Models\Client;
use App\Models\Plan;
use App\Models\User;
use App\Models\Router;
use App\Policies\ClientPolicy;
use App\Policies\PlanPolicy;
use App\Policies\UserPolicy;
use App\Policies\RouterPolicy;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        /*
         * THE DEV SERVER BINDS 127.0.0.1, NOT `localhost`.
         *
         * Laravel's `dev` command hardcodes `serve --host=localhost`, and on a
         * machine that resolves `localhost` to `::1` first that binds IPv6 ONLY
         * - nothing listens on 127.0.0.1 at all.
         *
         * THE TENANT HOSTNAMES ARE THE REASON THIS MATTERS. They live in
         * /etc/hosts pointing at 127.0.0.1, so an IPv6-only bind leaves plain
         * `localhost` working perfectly while every per-tenant subdomain is
         * unreachable - hostname tenancy that looks fine and cannot be
         * exercised. Vite is pinned the same way in vite.config.ts, for the
         * same reason plus one of its own: the asset URLs it writes into every
         * page inherit whatever it bound to.
         *
         * Registered under the same `server` name as the default, which
         * replaces it - userland registration outranks the framework's.
         */
        if ($this->app->runningInConsole()) {
            \Illuminate\Foundation\DevCommands::artisan('serve --host=127.0.0.1', 'server');
        }

        // Explicit registration for now. Filesystem discovery (spec S6
        // ->discoverResources) lands with the panel object in Phase 7; the
        // registry is the same either way.
        // The panel denies any ability whose model has no policy, so these are
        // required rather than optional.
        Gate::policy(Client::class, ClientPolicy::class);
        Gate::policy(Router::class, RouterPolicy::class);
        Gate::policy(Plan::class, PlanPolicy::class);
        Gate::policy(User::class, UserPolicy::class);
        // Read-only by construction - see AuditEntryPolicy.
        Gate::policy(\App\Models\AuditEntry::class, \App\Policies\AuditEntryPolicy::class);

        /*
         | THE ANNOUNCEMENT MODEL LIVES IN THE PACKAGE and its policy here,
         | because who may address the whole organisation is an application's
         | decision rather than a framework's.
         */
        Gate::policy(\PanelKit\Panel\Alerts\Announcement::class, \App\Policies\AnnouncementPolicy::class);

        /*
         | THE INVOICE KIND, TAUGHT ABOUT THIS APPLICATION'S SUBSCRIBERS.
         |
         | The package ships an invoice that previews against invented data,
         | because it has never heard of a `clients` table. Registering a
         | subclass under the SAME id replaces it - which is the registry's
         | documented override, and the thing that makes "a plugin can add a
         | document kind" true rather than aspirational.
         |
         | In `boot()` rather than `register()`, deliberately: the package
         | registers its three in `register()`, so anything here is guaranteed
         | to run after them and win without depending on provider order.
         */
        app(\PanelKit\Panel\Documents\DocumentKinds::class)
            ->register(new \App\Documents\ClientInvoiceKind);

        /*
         | A DOCUMENT'S LETTERHEAD, FROM THE ORGANISATION SETTINGS SCREEN.
         |
         | The package's default reads the name off the tenant and returns no
         | logo, because the logo is a file on the private disk behind THIS
         | application's authenticated route. Binding our own supplies both from
         | one place - so renaming the organisation updates every document and
         | there is no copy in a template to forget.
         */
        $this->app->scoped(
            \PanelKit\Panel\Documents\DocumentBranding::class,
            \App\Documents\OrganisationBranding::class,
        );

        $this->configureDefaults();
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null,
        );
    }
}
