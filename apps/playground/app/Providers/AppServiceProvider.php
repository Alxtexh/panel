<?php

namespace App\Providers;

use App\Panel\Resources\ClientResource;
use App\Panel\Resources\PlanResource;
use App\Panel\Resources\RouterResource;
use PanelKit\Panel\PanelManager;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
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
        // Explicit registration for now. Filesystem discovery (spec S6
        // ->discoverResources) lands with the panel object in Phase 7; the
        // registry is the same either way.
        app(PanelManager::class)->registerResources([
            ClientResource::class,
            RouterResource::class,
            PlanResource::class,
        ]);

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
