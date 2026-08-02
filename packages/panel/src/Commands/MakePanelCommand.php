<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

/**
 * Scaffold a whole portal: `php artisan make:panel platform`.
 *
 * A PORTAL SHOULD BE ONE COMMAND, and until now it was not one at all. The
 * multi-panel machinery existed - contexts, guards, per-panel resource filtering
 * - and building a second portal still meant writing a provider by hand,
 * inventing a resource directory, adding it to the discovery config, registering
 * the provider, and copying a hundred and seventy lines of routes. Every one of
 * those is a step somebody forgets, and the forgetting is silent: a panel with
 * no discovery entry has no resources and simply shows an empty menu.
 *
 * IT WRITES FOUR THINGS AND SAYS SO. A provider, a resource directory, a
 * discovery entry, and a line in `bootstrap/providers.php`. Nothing is hidden
 * and nothing is magic - the generated provider is ordinary readable PHP that is
 * MEANT to be edited, because the interesting decisions (which guard, central or
 * tenant, what middleware) are exactly the ones a generator should not make
 * silently.
 *
 * THE CONTEXT IS ASKED FOR RATHER THAN GUESSED, and it is the one question that
 * matters. A central panel must never have tenant scoping applied; a tenant
 * panel must refuse to boot without a resolved tenant. Getting it wrong is how a
 * super admin ends up seeing one organisation's data, or an operator sees
 * everyone's - and neither shows a symptom until somebody looks closely at a
 * list they had no reason to distrust.
 *
 * IT REFUSES TO OVERWRITE. A panel provider accumulates real decisions; silently
 * replacing one because a command was re-run is how those are lost.
 */
final class MakePanelCommand extends Command
{
    protected $signature = 'make:panel
                            {id : The panel id, e.g. platform}
                            {--path= : URL prefix. Defaults to the id}
                            {--guard=web : The auth guard this panel authenticates with}
                            {--central : A platform panel: no tenant scoping is applied}
                            {--auth : Also generate sign-in, sign-out and password-reset for this panel}
                            {--force : Overwrite an existing provider}';

    protected $description = 'Create a panel: a provider, a resource directory, and its routes';

    public function handle(): int
    {
        $id = Str::of($this->argument('id'))->trim()->slug()->value();

        if ($id === '') {
            $this->components->error('A panel id is required.');

            return self::FAILURE;
        }

        $studly = Str::studly($id);
        $path = $this->option('path') !== null ? trim((string) $this->option('path'), '/') : $id;

        $providerPath = app_path("Providers/Panels/{$studly}PanelProvider.php");

        if (file_exists($providerPath) && ! $this->option('force')) {
            $this->components->error("app/Providers/Panels/{$studly}PanelProvider.php already exists. Pass --force to replace it.");

            return self::FAILURE;
        }

        $resourceDirectory = app_path("Panel/{$studly}/Resources");

        $this->write($providerPath, $this->provider($id, $studly, $path));
        $this->ensureDirectory($resourceDirectory);
        $this->registerProvider("App\\Providers\\Panels\\{$studly}PanelProvider");

        /*
         * THE PORTAL SHIPS WITH ITS OWN PROOF - roadmap 7.7.
         *
         * Multi-panel scoping is the structural claim this package makes, and
         * a claim proved by a test somebody has to go and find is a claim that
         * quietly stops being true. A generated portal that arrives with the
         * isolation matrix already pointed at it means adding a panel adds its
         * own evidence that nothing leaks across the boundary - and, more
         * usefully, means the day somebody adds a resource to it without a
         * policy, the portal's OWN test says so.
         *
         * CENTRAL PANELS GET A DIFFERENT TEST, not none. A platform portal is
         * deliberately unscoped, so "no row leaks across the tenant boundary"
         * is not its property - what it must prove is that it cannot be
         * reached by somebody who is not entitled to see across.
         */
        $testPath = base_path("tests/Feature/{$studly}PanelIsolationTest.php");

        if (! file_exists($testPath) || $this->option('force')) {
            $this->write($testPath, $this->isolationTest($id, $studly, $path));
        }

        if ($this->option('auth')) {
            $this->writeAuth($id, $studly, $path);
        }

        $this->components->info("Panel [{$id}] created.");

        $this->components->twoColumnDetail('Provider', "app/Providers/Panels/{$studly}PanelProvider.php");
        $this->components->twoColumnDetail('Isolation test', "tests/Feature/{$studly}PanelIsolationTest.php");
        $this->components->twoColumnDetail('Resources', "app/Panel/{$studly}/Resources");
        $this->components->twoColumnDetail('URL', '/'.$path);
        $this->components->twoColumnDetail('Guard', (string) $this->option('guard'));
        $this->components->twoColumnDetail('Context', $this->option('central') ? 'central (no tenant scoping)' : 'tenant');

        if ($this->option('auth')) {
            $this->components->twoColumnDetail('Sign-in', '/'.trim($path.'/login', '/'));
        }

        /*
         * A PANEL WITH NO RESOURCES HAS NO ROUTES, deliberately - see
         * `PanelRoutes::register`. Saying so here is the difference between
         * "the generator did nothing" and "the next step is yours".
         */
        $this->newLine();
        $this->components->warn('It has no resources yet, so it has no routes yet. Add one:');
        $this->line("  php artisan make:panel-resource Tenant --panel={$id} --generate");

        return self::SUCCESS;
    }

    /**
     * The test a generated portal ships with - roadmap 7.7.
     *
     * IT ENUMERATES, IT DOES NOT LIST. The resources it checks come from the
     * registry at run time, so a resource added to this portal tomorrow is
     * covered without anybody editing this file. A generated test containing a
     * hand-written list would be a list that is correct on the day the portal
     * was made and wrong from the first resource after it - which is the exact
     * failure the isolation matrix was written to avoid.
     *
     * AND IT FAILS RATHER THAN SKIPS when it cannot build a fixture. A test
     * that quietly skips an uncoverable resource reports green for a portal
     * nobody has actually checked, and green is the answer people act on.
     */
    private function isolationTest(string $id, string $studly, string $path): string
    {
        $central = (bool) $this->option('central');

        $body = $central ? $this->centralAssertions($id) : $this->tenantAssertions($id, $path);

        $intent = $central
            ? 'This portal is CENTRAL: it reads across every organisation on purpose, so '
            ."\n * \"no row leaks across the tenant boundary\" is not its property. What it must "
            ."\n * prove is that nobody reaches it who is not entitled to see across."
            : 'This portal is TENANT-SCOPED: every query it makes is constrained to the '
            ."\n * organisation the request resolved, and a null tenant denies rather than "
            ."\n * matching everything.";

        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace Tests\Feature;

        use App\Models\Tenant;
        use App\Models\User;
        use Illuminate\Foundation\Testing\RefreshDatabase;
        use Illuminate\Support\Facades\Gate;
        use Illuminate\Support\Facades\Schema;
        use PanelKit\Panel\PanelManager;
        use PanelKit\Panel\Support\TenantContext;
        use Tests\TestCase;

        /**
         * Nothing crosses the [{$id}] portal's boundary - generated by make:panel.
         *
         * {$intent}
         *
         * WHY THIS FILE IS GENERATED WITH THE PORTAL. Multi-panel scoping is the
         * structural claim this panel makes, and a claim proved by a test somebody
         * has to go and find is a claim that quietly stops being true. Adding a
         * portal adds its own evidence.
         *
         * IT ENUMERATES THE REGISTRY rather than naming resources, so a resource
         * added to this portal tomorrow is covered without this file changing. If
         * it ever grows a hand-written list it has stopped doing its job.
         *
         * EDIT IT FREELY - it is a starting point, not a contract. What should not
         * change is the enumeration.
         */
        final class {$studly}PanelIsolationTest extends TestCase
        {
            use RefreshDatabase;

            private const PANEL = '{$id}';

        {$body}

            /**
             * The resources this portal serves, and only this portal's.
             *
             * @return array<string, class-string<\PanelKit\Panel\Resources\Resource>>
             */
            private function resources(): array
            {
                return app(PanelManager::class)->resourcesFor(self::PANEL);
            }
        }

        PHP;
    }

    /** Assertions for a tenant-scoped portal. */
    private function tenantAssertions(string $id, string $path): string
    {
        return <<<PHP
            /**
             * EVERY RESOURCE HERE IS TENANT-OWNED, derived from the TABLE rather
             * than from a name list.
             *
             * A resource that is genuinely tenant-owned HAS the column, so the day
             * somebody adds one to this portal that is not scoped, this fails. An
             * exclusion keyed on a resource's NAME would let it through silently,
             * which is the direction that matters.
             */
            public function test_every_resource_in_this_portal_is_tenant_scoped(): void
            {
                \$column = app(TenantContext::class)->column();

                \$unscoped = [];

                foreach (\$this->resources() as \$key => \$class) {
                    \$table = (new (\$class::model()))->getTable();

                    if (! Schema::hasColumn(\$table, \$column)) {
                        \$unscoped[] = "[{\$key}] is served by a tenant portal and its table "
                            ."[{\$table}] has no [{\$column}] column.";
                    }
                }

                \$this->assertSame([], \$unscoped, "\n".implode("\n", \$unscoped)."\n");
            }

            /**
             * AND EVERY ONE HAS A POLICY. The panel denies every ability when none
             * is registered - the safe default, and one that looks exactly like a
             * permissions bug from the operator's side.
             */
            public function test_every_resource_in_this_portal_has_a_policy(): void
            {
                \$missing = [];

                foreach (\$this->resources() as \$key => \$class) {
                    if (Gate::getPolicyFor(\$class::model()) === null) {
                        \$missing[] = "[{\$key}] has no policy, so nobody can open it.";
                    }
                }

                \$this->assertSame([], \$missing, "\n".implode("\n", \$missing)."\n");
            }

            /**
             * A NULL TENANT DENIES, rather than matching everything. This is the
             * assertion that would catch a scope quietly removed: without a
             * resolved organisation the portal must refuse, never serve the union.
             */
            public function test_the_portal_refuses_a_request_with_no_tenant(): void
            {
                \$tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

                \$user = User::factory()->create([
                    'tenant_id' => \$tenant->id,
                    'email_verified_at' => now(),
                ]);

                config(['panel.tenancy.resolver' => fn () => null]);

                foreach (array_keys(\$this->resources()) as \$key) {
                    \$response = \$this->actingAs(\$user)->get('/{$path}/'.\$key);

                    \$this->assertContains(
                        \$response->status(),
                        [403, 404, 302],
                        "[{\$key}] served a request with no organisation resolved.",
                    );
                }
            }

            /** And another portal's resource is not reachable under this one's path. */
            public function test_another_portals_resource_is_not_mounted_here(): void
            {
                \$manager = app(PanelManager::class);

                \$mine = array_keys(\$this->resources());

                \$foreign = array_diff(array_keys(\$manager->resources()), \$mine);

                if (\$foreign === []) {
                    \$this->markTestSkipped('This installation has only one portal.');
                }

                \$tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

                \$user = User::factory()->create([
                    'tenant_id' => \$tenant->id,
                    'email_verified_at' => now(),
                ]);

                config(['panel.tenancy.resolver' => fn () => \$tenant->id]);

                foreach (\$foreign as \$key) {
                    \$this->actingAs(\$user)
                        ->get('/{$path}/'.\$key)
                        ->assertNotFound();
                }
            }
        PHP;
    }

    /** Assertions for a central portal, which is a different promise. */
    private function centralAssertions(string $id): string
    {
        return <<<'PHP'
            /**
             * A CENTRAL PORTAL IS DELIBERATELY UNSCOPED, so what it must prove is
             * not that rows stay apart - it is that nobody reaches it who should
             * not see across. Every resource here still needs a policy, and the
             * policy is the only thing standing between a signed-in tenant
             * operator and every organisation's data at once.
             */
            public function test_every_resource_in_this_portal_has_a_policy(): void
            {
                $missing = [];

                foreach ($this->resources() as $key => $class) {
                    if (Gate::getPolicyFor($class::model()) === null) {
                        $missing[] = "[{$key}] has no policy, so nobody can open it.";
                    }
                }

                $this->assertSame([], $missing, "\n".implode("\n", $missing)."\n");
            }

            /**
             * AND AN ORDINARY TENANT OPERATOR IS REFUSED. This is the assertion
             * worth having: a central portal that answers a tenant user is every
             * organisation's data served to one of them.
             */
            public function test_a_tenant_user_cannot_reach_this_portal(): void
            {
                $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

                $user = User::factory()->create([
                    'tenant_id' => $tenant->id,
                    'email_verified_at' => now(),
                ]);

                config(['panel.tenancy.resolver' => fn () => $tenant->id]);

                foreach (array_keys($this->resources()) as $key) {
                    $response = $this->actingAs($user)->get('/'.$key);

                    $this->assertContains(
                        $response->status(),
                        [403, 404, 302],
                        "[{$key}] served a central-portal screen to a tenant operator.",
                    );
                }
            }
        PHP;
    }

    private function provider(string $id, string $studly, string $path): string
    {
        $guard = (string) $this->option('guard');

        $context = $this->option('central')
            ? 'Panel::CONTEXT_CENTRAL'
            : 'Panel::CONTEXT_TENANT';

        $contextNote = $this->option('central')
            ? <<<'TEXT'
     * CENTRAL CONTEXT: no tenant scoping is applied to anything this panel
     * queries. That is what a platform portal needs and what a tenant portal
     * must never have - a central query reached from a tenant request is the
     * leak the panel split exists to prevent.
TEXT
            : <<<'TEXT'
     * TENANT CONTEXT: every query this panel makes is scoped to the resolved
     * organisation, and it refuses to operate without one. A null tenant key is
     * a DENY signal here, never "all tenants".
TEXT;

        return <<<PHP
<?php

declare(strict_types=1);

namespace App\Providers\Panels;

use Illuminate\Support\ServiceProvider;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;

/**
 * The {$id} panel.
 *
 * GENERATED BY `make:panel` AND MEANT TO BE EDITED. The interesting decisions
 * are all here in one place rather than spread across config: which guard
 * authenticates it, whether it is scoped to a tenant, what middleware it runs.
 *
{$contextNote}
 *
 * ITS RESOURCES LIVE IN `app/Panel/{$studly}/Resources` and carry
 * `protected static string \$panel = '{$id}';`. Only those are routable under
 * `/{$path}` - a resource belonging to another panel is not reachable from here
 * at all, which is the point rather than a tidiness rule.
 *
 * ROUTES ARE REGISTERED FOR YOU, from `PanelRoutes`. There is no route file to
 * edit and no list to keep in step; a resource added to the directory above is
 * routable on the next request.
 */
final class {$studly}PanelProvider extends ServiceProvider
{
    public function boot(PanelManager \$panels): void
    {
        \$panels->registerPanel(
            Panel::make('{$id}')
                ->path('{$path}')
                /*
                 * THE GUARD IS NOT DECORATION. Everything in this panel resolves
                 * the acting user through it - never `\$request->user()`, which
                 * reads the DEFAULT guard and returns null under a non-default
                 * one, failing open in ways that return 200 and look correct.
                 */
                ->guard('{$guard}')
                ->context({$context})
                ->middleware(['web'])
                ->authMiddleware(['auth:{$guard}'])
                ->brandName(fn (): string => config('app.name').' — {$studly}'),
        );

        /*
         * DISCOVERY IS DECLARED HERE, beside the panel it belongs to, rather
         * than in a shared config list. A panel whose resource directory is not
         * discovered has no resources, no routes and an empty menu - and nothing
         * fails, which is the worst way for a configuration step to be missed.
         */
        config([
            'panel.discover' => [
                ...(array) config('panel.discover', []),
                app_path('Panel/{$studly}/Resources') => 'App\\\\Panel\\\\{$studly}\\\\Resources',
            ],
        ]);
    }
}

PHP;
    }

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
    private function writeAuth(string $id, string $studly, string $path): void
    {
        $routes = base_path("routes/panel-{$id}-auth.php");

        if (file_exists($routes) && ! $this->option('force')) {
            $this->components->warn("routes/panel-{$id}-auth.php already exists - left alone.");
        } else {
            $this->write($routes, $this->authRoutes($id, $path, (string) $this->option('guard')));
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

            $this->write($file, $this->authPage($screen));
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
        // `Route::prefix(...)->defaults(...)` versus `Route::defaults(...)`:
        // a panel mounted at the root has no prefix to apply, and passing an
        // empty one registers `//login`.
        $prefix = $path === '' ? '' : "prefix('{$path}')->";

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
Route::{$prefix}group(function (): void {
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
import {$screen} from '@panelkit/inertia/pages/auth/{$screen}.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <{$screen} v-bind="(\$attrs as any)" />
</template>

VUE;
    }

    private function write(string $path, string $contents): void
    {
        $this->ensureDirectory(dirname($path));

        file_put_contents($path, $contents);
    }

    private function ensureDirectory(string $directory): void
    {
        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        /*
         * A `.gitkeep` SO THE DIRECTORY SURVIVES A CLONE. An empty resource
         * directory is not tracked by git, so a fresh checkout has a panel whose
         * discovery path does not exist - which discovers nothing, silently.
         */
        $keep = $directory.'/.gitkeep';

        if (! file_exists($keep) && (glob($directory.'/*') ?: []) === []) {
            touch($keep);
        }
    }

    /**
     * Add the provider to `bootstrap/providers.php`.
     *
     * EDITED RATHER THAN APPENDED BLINDLY. Re-running the command must not add a
     * second entry - a provider registered twice boots twice, and this one
     * registers a panel, so the second registration would silently replace the
     * first with an identical copy and hide a real conflict if it were not
     * identical.
     */
    private function registerProvider(string $class): void
    {
        $file = base_path('bootstrap/providers.php');

        if (! is_file($file)) {
            $this->components->warn("bootstrap/providers.php not found - register {$class} yourself.");

            return;
        }

        $contents = (string) file_get_contents($file);

        if (str_contains($contents, $class)) {
            return;
        }

        /*
         * APPENDED, NOT PREPENDED, and the difference is not cosmetic.
         *
         * Inserting after `return [` put each new panel FIRST, which made the
         * most recently generated one the default that `make:panel-resource`
         * writes into - so generating a portal silently changed where every
         * later resource landed. The first panel declared should stay the
         * default, because it is the application's main portal.
         */
        $updated = preg_replace(
            '/\n(\s*)\];\s*$/',
            "\n$1    {$class}::class,\n$1];\n",
            $contents,
            1,
        );

        if ($updated === null || $updated === $contents) {
            $this->components->warn("Could not edit bootstrap/providers.php - register {$class} yourself.");

            return;
        }

        file_put_contents($file, $updated);
    }
}
