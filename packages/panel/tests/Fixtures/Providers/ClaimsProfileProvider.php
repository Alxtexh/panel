<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

/**
 * A host application that already owns `GET /settings/profile`.
 *
 * THIS IS THE LARAVEL STARTER KIT, in one file. Its `routes/settings.php`
 * declares exactly this URL under exactly this name, which means every
 * installation built on one arrives at this package with the URL already taken -
 * so this fixture is not an invented edge case, it is the common case.
 *
 * IN `boot`, WHICH IS THE WHOLE POINT. `PanelServiceProvider` defers route
 * registration to `booted`, and `booted` callbacks run after every provider has
 * booted. That ordering is what gives `unclaimed()` something to see: an
 * application route declared in any provider's boot is already in the collection
 * by the time the package looks. A fixture that registered its route later would
 * test the reverse of what installations experience.
 */
final class ClaimsProfileProvider extends ServiceProvider
{
    public function boot(): void
    {
        /*
         * NAMED DISTINCTLY FROM THE PACKAGE'S, so the assertions can tell which
         * of the two survived. Route names are the thing at risk here - Laravel
         * indexes the collection by method+URI, so a second registration of this
         * pair REPLACES the first and rebuilds the name lookup from what is
         * left. "Both registered" and "the app's was evicted" look identical
         * from the URL and differ only by name.
         */
        Route::get('settings/profile', static fn (): string => 'the application\'s own profile screen')
            ->name('app.profile.edit');
    }
}
