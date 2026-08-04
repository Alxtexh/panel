<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands\Concerns;

/**
 * Sign-in, sign-out and password reset for ONE panel, scaffolded.
 *
 * IT IS A TRAIT BECAUSE TWO COMMANDS NEED IT AND ONLY ONE SHOULD OWN THE
 * CONTENT. `make:panel --auth` scaffolds a portal you are generating;
 * `panel:install --auth` scaffolds the default panel an installation already
 * has. Both must produce the SAME throttling, the same session regeneration
 * and the same post-authentication checks - which is exactly what a port
 * reported goes wrong when every application writes its own: "every one will
 * differ in security".
 *
 * A second, subtly different copy of a sign-in flow is the one that turns out
 * to be weaker, and nobody would find out from a test.
 */
trait ScaffoldsPanelAuth
{
    /**
     * SIGN-IN FOR THIS PANEL, because a starter kit only gives you one.
     *
     * Breeze, Jetstream and Fortify each register ONE login, at the
     * application root, against ONE guard. A second portal has its own guard on
     * its own path and there is no second starter kit to hand it - so before
     * this flag existed, every generated portal meant hand-writing a login
     * controller, and until somebody did, the first page anybody opened died
     * with `Route [login] not defined`.
     *
     * NOTHING IS REGISTERED AT `/login`. The routes go under this panel's
     * prefix, which is what lets a generated portal and a starter kit coexist
     * rather than fight for the URI.
     *
     * THE ROUTES FILE IS THE APPLICATION'S, not the package's, and that is the
     * whole shape of this feature: the SCREENS and the CONTROLLER ship, so they
     * improve with the package, and the wiring is a file you can read, edit and
     * delete. A package that hard-coded auth routes would be a package deciding
     * how your customers sign in.
     *
     * IT IS LOADED BY THE PACKAGE, NOT BY `bootstrap/app.php`. The first
     * version edited that file with a regex looking for a `then:` closure -
     * which a stock Laravel application does not have, so the routes were
     * written, never loaded, and `route:list` showed nothing while the
     * generator reported success. `PanelServiceProvider` globs
     * `routes/panel-*-auth.php` instead: deleting the file removes the routes,
     * which is the behaviour somebody reading it would expect.
     */
    private function scaffoldPanelAuth(string $id, string $path, string $guard, bool $force): void
    {
        $routes = base_path("routes/panel-{$id}-auth.php");

        if (file_exists($routes) && ! $force) {
            $this->components->warn("routes/panel-{$id}-auth.php already exists - left alone.");
        } else {
            $this->writeAuthFile($routes, $this->authRoutes($id, $path, $guard));
        }

        /*
         * THE PAGE FILES, for the same reason every packaged screen needs one:
         * Inertia resolves a page name by globbing `resources/js/pages`, and a
         * component living in `node_modules` is one it cannot find.
         */
        $skipped = [];

        foreach (['Login', 'ForgotPassword', 'ResetPassword'] as $screen) {
            $file = resource_path("js/pages/auth/{$screen}.vue");

            /*
             * AN EXISTING SCREEN IS LEFT ALONE AND SAID OUT LOUD.
             *
             * `resources/js/pages/auth/Login.vue` is exactly where a starter
             * kit puts its own, so this is the common case rather than an edge
             * one - and overwriting it would replace an application's sign-in
             * with the package's, which is the one thing this feature promises
             * not to do.
             *
             * REPORTING IT IS THE OTHER HALF. Skipping quietly leaves somebody
             * believing the generator wrote a file it did not, and the way they
             * find out is a login screen that ignores every prop the packaged
             * controller sends.
             */
            if (file_exists($file)) {
                $skipped[] = "resources/js/pages/auth/{$screen}.vue";

                continue;
            }

            $this->writeAuthFile($file, $this->authPage($screen));
        }

        foreach ($skipped as $file) {
            $this->components->warn("{$file} already exists and was left alone.");
        }

        $this->warnAboutExistingLogin();
    }

    /**
     * A `login` ROUTE ALREADY EXISTING IS THE NORMAL CASE, not an error.
     *
     * Every starter kit registers one, and this generator deliberately does not
     * touch it. Saying so is the difference between somebody understanding they
     * now have two doors into two guards - which is correct - and somebody
     * assuming the generator overwrote their application's sign-in.
     */
    private function warnAboutExistingLogin(): void
    {
        if (app('router')->getRoutes()->getByName('login') === null) {
            return;
        }

        $this->components->info(
            'Your application already has a `login` route. It is untouched: '
            .'the generated screens live under this panel\'s own prefix and '
            .'authenticate its own guard.',
        );
    }

    private function authRoutes(string $id, string $path, string $guard): string
    {
        /*
         * THE OPENING LINE DIFFERS FOR A PANEL AT THE ROOT, and getting it
         * wrong is a 500 on every page rather than a bad login URL.
         *
         * `Route::group(fn)` IS NOT VALID. The facade's `group` takes an
         * attributes ARRAY first, so a closure alone is a TypeError thrown
         * while routes load - which takes down the whole application, not just
         * the sign-in screen. The registrar form (`Route::prefix(..)->group`)
         * accepts a bare closure, which is why the prefixed branch reads
         * differently.
         */
        $open = $path === ''
            ? 'Route::group([], function (): void {'
            : "Route::prefix('{$path}')->group(function (): void {";

        return <<<PHP
<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use PanelKit\Panel\Http\Controllers\PanelAuthController;

/*
 * Sign-in for the {$id} panel.
 *
 * GENERATED BY `make:panel {$id} --auth` AND YOURS TO EDIT. The screens and the
 * controller ship in the package so they improve with it; this file is the
 * wiring, deliberately visible - a package that registered your sign-in routes
 * itself would be a package deciding how your customers get in.
 *
 * `defaults('panel', ...)` IS LOAD-BEARING. The controller reads it to know
 * which panel - and therefore which GUARD - a request belongs to. A panel
 * mounted at the root has no URL segment to infer it from, and one mounted at
 * `/admin/staff` has two, so the segment is not a usable answer.
 *
 * NOT NAMED `login`. Your application's own sign-in, if it has one, keeps that
 * name and that URI; this is `{$id}.login` under `/{$path}`.
 */
/*
 * `defaults('panel', ...)` GOES ON EACH ROUTE, not on the group.
 * `RouteRegistrar` has no `defaults()` - `Route::prefix(..)->defaults(..)`
 * throws BadMethodCallException at boot, which is how the first version of this
 * generator shipped and why `route:list` refused to run at all.
 */
{$open}
    \$panel = '{$id}';

    /*
     * NO `guest` MIDDLEWARE, deliberately. Laravel's redirects an
     * authenticated visitor to the application's HOME, which for a second
     * portal is somebody else's screen - so signing in to the admin panel and
     * then opening this one would bounce you somewhere unrelated with no
     * explanation. Showing the form to somebody already signed in costs
     * nothing.
     */
    Route::get('login', [PanelAuthController::class, 'showLogin'])
        ->defaults('panel', \$panel)
        ->name('{$id}.login');

    Route::post('login', [PanelAuthController::class, 'login'])
        ->defaults('panel', \$panel)
        ->middleware('throttle:20,1');

    /*
     * LOGOUT IS BEHIND THE GUARD, so an unauthenticated POST is a redirect to
     * sign-in rather than a session teardown anybody can trigger.
     */
    Route::post('logout', [PanelAuthController::class, 'logout'])
        ->defaults('panel', \$panel)
        ->middleware('auth:{$guard}')
        ->name('{$id}.logout');

    /*
     * THE RESET PAIR. Delete these four routes and set
     * `panel.auth.{$id}.passwords` to false if this installation cannot send
     * mail - a "Forgot password?" link leading to a form that queues a message
     * nobody delivers is worse than no link, because somebody waits.
     */
    Route::get('forgot-password', [PanelAuthController::class, 'showForgotPassword'])
        ->defaults('panel', \$panel)
        ->name('{$id}.password.request');

    Route::post('forgot-password', [PanelAuthController::class, 'sendResetLink'])
        ->defaults('panel', \$panel)
        ->middleware('throttle:6,1');

    Route::get('reset-password/{token}', [PanelAuthController::class, 'showResetPassword'])
        ->defaults('panel', \$panel)
        ->name('{$id}.password.reset');

    Route::post('reset-password', [PanelAuthController::class, 'resetPassword'])
        ->defaults('panel', \$panel)
        ->middleware('throttle:6,1');
});

PHP;
    }

    /**
     * The one-line page file Inertia can actually glob.
     *
     * POINT THE IMPORT SOMEWHERE ELSE TO OVERRIDE THE SCREEN. Nothing else has
     * to change - the routes, the controller and the props are unaffected.
     */
    private function authPage(string $screen): string
    {
        return <<<VUE
<script setup lang="ts">
/*
 * The packaged {$screen} screen.
 *
 * WHY THIS FILE EXISTS: Inertia resolves a page name by globbing this
 * directory, so a screen living in node_modules is one it cannot find.
 *
 * IT IS ALSO WHERE YOU OVERRIDE IT. Point the import at your own
 * component and nothing else has to change.
 *
 * KEEP THE TEMPLATE. An SFC with only a script block renders nothing at
 * all, silently, in a production build.
 */
import {$screen} from '@alxtexh-enterprise/panel/pages/auth/{$screen}.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <{$screen} v-bind="(\$attrs as any)" />
</template>

VUE;
    }

    private function writeAuthFile(string $path, string $contents): void
    {
        $directory = dirname($path);

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        file_put_contents($path, $contents);

        $this->components->twoColumnDetail('Wrote', str_replace(base_path().'/', '', $path));
    }
}
