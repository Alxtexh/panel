<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;

/**
 * php artisan panel:install
 *
 * Spec §13: `composer require`, `panel:install`, `npm install && npm run build`,
 * then a resource - and a working panel in under ten minutes on a fresh app. If
 * it takes longer, the packaging is not finished.
 *
 * Deliberately IDEMPOTENT and non-destructive. An installer that overwrites a
 * file someone has edited is worse than one that skips it, so every step
 * reports what it did or why it did nothing.
 */
final class InstallCommand extends Command
{
    protected $signature = 'panel:install
                            {--force : Overwrite the published config and page files}';

    protected $description = 'Publish config, create the app/Panel tree and the page files, and print next steps';

    /**
     * The screens this package renders, and nothing else.
     *
     * KEPT BESIDE THE `Inertia::render` CALLS THAT NAME THEM. A screen added to
     * the PHP half without a line here is a route that resolves to nothing, so
     * the panel's own test walks the render calls and this list together.
     */
    private const SCREENS = [
        'ResourceIndex',
        'ResourceForm',
        'ResourceView',
        'Trash',
        'PanelHome',

        /*
         * NESTED NAMES, because the server renders `documents/Templates` and a
         * page name is a path. The writer creates the directory; the component
         * identifier is the basename, since `documents/Templates` is not a
         * legal JavaScript name.
         */
        'documents/Templates',
        'documents/TemplateDesigner',
        'documents/DocumentPrint',

        /*
         * THE PERMISSION MATRIX, nested for the same reason. The package now
         * ships the roles system - model, migration, reconciler - and a matrix
         * nobody can open is a permission system nobody can operate.
         */
        'settings/Roles',
    ];

    public function handle(): int
    {
        $this->components->info('Installing PanelKit');

        $this->publishConfig();
        $this->createTree();
        $this->createDefaultPanel();
        $this->writePageFiles();
        $this->checkTenancy();
        $this->checkAuthScaffolding();
        $this->writeBlueprint();

        $this->newLine();
        $this->components->info('Done. Next:');
        $this->line('  1. npm install @panelkit/ui @panelkit/inertia');
        $this->line('     The page files above import from it. Without the package they are');
        $this->line('     imports of nothing, which fails in the browser rather than at build time.');
        $this->line('     Then point Tailwind at them, or every utility used only inside the');
        $this->line('     packages is purged - a styled table inside an unstyled page:');
        $this->line("     @source '../../node_modules/@panelkit/ui/src/**/*.{vue,ts}';");
        $this->line("     @source '../../node_modules/@panelkit/inertia/src/**/*.{vue,ts}';");
        $this->line('  2. Add a `tenant_id` column to your admin users table, or configure');
        $this->line('     panel.tenancy.resolver for stancl/tenancy. For a single-tenant app,');
        $this->line('     set panel.tenancy.mode to "none" instead.');
        $this->line('  3. php artisan make:panel-resource YourModel --generate');
        $this->line('  4. Review the generated policy - the panel DENIES any ability whose');
        $this->line('     model has no policy, so an unreviewed stub is a real grant.');
        $this->line('  5. Visit /your-models. Discovery registers it; there is no route to add.');
        $this->newLine();
        $this->line('  AGENTS.md now holds the conventions and the full list of fields,');
        $this->line('  columns, filters and actions available. Re-run `panel:blueprint`');
        $this->line('  after adding resources - it is generated, so it stays true.');

        return self::SUCCESS;
    }

    /**
     * THE GUIDE ARRIVES WITH THE INSTALL, rather than waiting to be discovered.
     *
     * `panel:blueprint` has existed since the beginning and nothing ran it. So
     * the conventions that fail silently - never write a controller for a
     * resource screen, a resource with no policy is invisible, definitions must
     * not query - were written down in a command nobody knew to type, which is
     * the same as not having written them down.
     *
     * IT MATTERS MOST FOR AGENTS, and they are now most of the readers. An agent
     * opens a repository, looks for `AGENTS.md` or `CLAUDE.md`, and builds from
     * whatever it finds. Absent that file it builds from a guess about what a
     * Laravel admin panel probably looks like, and the guesses are all the
     * mistakes this framework has names for.
     *
     * FAILURE IS NOT FATAL. The blueprint reads the running application, and an
     * install that has just created its first panel may have nothing to say
     * about resources yet. A broken guide should not fail an install that
     * otherwise worked - it should say so and let the install finish.
     */
    private function writeBlueprint(): void
    {
        try {
            $this->callSilently('panel:blueprint');
            $this->components->task('  wrote AGENTS.md', fn () => true);
        } catch (\Throwable $e) {
            $this->components->warn(
                '  AGENTS.md was not written ('.$e->getMessage().'). Run `php artisan panel:blueprint`.'
            );
        }
    }

    /**
     * A panel to put resources in.
     *
     * WITHOUT ONE, NOTHING IS ROUTED AND NOTHING SAYS SO. A resource belongs to
     * a panel; a panel with no resources registers no routes; and an
     * installation with no panel registers nothing at all. So a fresh install
     * followed by `make:panel-resource Product --generate` produced a resource
     * that `PanelManager` knew about, an ability set, a policy - and a 404 at
     * `/products`, because there was no portal for it to be reachable from.
     *
     * Every diagnostic said it was fine. `panel:doctor` was clean, the resource
     * was registered, and the install output ended with "Visit /your-models" -
     * which is the failure this whole command exists to avoid: an installer that
     * finishes successfully and leaves you with nothing that works.
     *
     * IT DELEGATES TO `make:panel` rather than writing a second provider
     * template, so there is one generator and one shape of provider. The
     * generated file is ordinary readable PHP and is meant to be edited - which
     * is also why re-running this command leaves an existing one alone.
     *
     * `admin`, MOUNTED AT `/`. A first panel at `/admin` would make every
     * generated resource live at `/admin/products`, which is a decision about
     * URLs that an installer should not make for an application whose panel may
     * be the entire application.
     */
    private function createDefaultPanel(): void
    {
        if (file_exists(app_path('Providers/Panels/AdminPanelProvider.php'))) {
            $this->components->warn('app/Providers/Panels/AdminPanelProvider.php already exists, skipping.');

            return;
        }

        $this->callSilently('make:panel', [
            'id' => 'admin',
            '--path' => '/',
        ]);

        /*
         * `make:panel` discovers `app/Panel/Admin/Resources`; this command and
         * `make:panel-resource` both use `app/Panel/Resources`. Rather than have
         * the two generators disagree about where a resource lives - which
         * discovers nothing, silently - the provider is pointed at the directory
         * that already exists.
         */
        $provider = app_path('Providers/Panels/AdminPanelProvider.php');

        if (file_exists($provider)) {
            file_put_contents($provider, str_replace(
                ['Panel/Admin/Resources', 'App\\\\Panel\\\\Admin\\\\Resources'],
                ['Panel/Resources', 'App\\\\Panel\\\\Resources'],
                (string) file_get_contents($provider),
            ));

            @rmdir(app_path('Panel/Admin/Resources'));
            @rmdir(app_path('Panel/Admin'));
        }

        $this->components->info('Created the admin panel at / (app/Providers/Panels/AdminPanelProvider.php).');
    }

    /**
     * The five page files, one line each.
     *
     * WITHOUT THESE THE PACKAGE IS HALF INSTALLED, and the half that is missing
     * is the visible one. The panel answers `/clients` with
     * `Inertia::render('ResourceIndex')`; Inertia's Vite plugin resolves that by
     * globbing `resources/js/pages`, which knows nothing about `node_modules`.
     * So a `composer require` with no `npm` half produced a route that reached a
     * component that did not exist - a white page, in the browser, naming a file
     * the developer had never heard of.
     *
     * ONE FILE PER SCREEN RATHER THAN A RESOLVER, because the file is also the
     * override point: an application that wants its own list screen replaces the
     * contents of `ResourceIndex.vue` and changes nothing else. A `resolve`
     * callback in `app.ts` would have meant editing the bootstrap file to
     * customise one screen.
     *
     * EXISTING FILES ARE LEFT ALONE. Every one of them is a file the application
     * may have replaced on purpose, and an installer that overwrites those is an
     * installer nobody dares re-run.
     */
    private function writePageFiles(): void
    {
        $directory = resource_path('js/pages');

        if (! is_dir($directory)) {
            /*
             * NO PAGES DIRECTORY AT ALL means this is not an Inertia + Vue
             * application yet - a plain Laravel install, or one using React.
             * Writing Vue files into it would be guessing; saying so is not.
             */
            $this->components->warn(
                'No resources/js/pages directory, so the panel screens were not written. This '
                .'package renders Vue through Inertia; install a Vue + Inertia starter kit first, '
                .'then re-run this command.'
            );

            return;
        }

        $written = [];
        $skipped = [];

        foreach (self::SCREENS as $screen) {
            $path = $directory.'/'.$screen.'.vue';

            if (file_exists($path) && ! $this->option('force')) {
                $skipped[] = $screen;

                continue;
            }

            // A nested screen name is a path, so its directory may not exist -
            // and `file_put_contents` into a missing directory fails with a
            // warning and no file, which would be a screen that installs
            // silently as nothing.
            $folder = dirname($path);

            if (! is_dir($folder)) {
                mkdir($folder, 0755, true);
            }

            file_put_contents($path, $this->pageFile($screen));

            $written[] = $screen;
        }

        if ($written !== []) {
            $this->components->info('Wrote '.count($written).' page files: '.implode(', ', $written));
        }

        if ($skipped !== []) {
            $this->components->warn(
                'Kept your own '.implode(', ', $skipped).'. Use --force to replace them.'
            );
        }
    }

    /**
     * A WRAPPER, NOT A RE-EXPORT, and the difference is not stylistic.
     *
     * `export { default } from '@panelkit/inertia/pages/X.vue'` is the obvious
     * way to write this. It type-checks, it builds, the chunk it emits contains
     * the whole real component - and the page renders NOTHING. An SFC with no
     * `<template>` block compiles to a component with no render function, so
     * Vue mounts it and draws an empty comment node. In a production build there
     * is no warning at all; the only symptom is a blank page under a working
     * header. It cost an afternoon here, and it would cost a consumer their
     * first impression of the package.
     *
     * `$attrs` CARRIES THE PROPS. Inertia hands page props to this component,
     * which declares none, so they arrive as attributes and are forwarded
     * whole - which is also why `inheritAttrs` is off: without it Vue would
     * apply them a second time to the child's root element, and an object prop
     * rendered as a DOM attribute becomes `records="[object Object]"`.
     */
    private function pageFile(string $screen): string
    {
        // `documents/Templates` is a page NAME; the component identifier has to
        // be a legal JavaScript one.
        $component = basename($screen);

        return <<<VUE
        <script setup lang="ts">
        /*
         * The panel's {$component} screen, from @panelkit/inertia.
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
        import {$component} from '@panelkit/inertia/pages/{$screen}.vue'

        defineOptions({ inheritAttrs: false })
        </script>

        <template>
            <!--
                The cast is deliberate. `\$attrs` is `Record<string, unknown>`, so
                the checker cannot see that it holds this screen's props and
                reports every one of them as missing. There is nothing to verify
                either way: these values arrive from the server as JSON and are
                typed where they are USED, inside the packaged component.
            -->
            <{$component} v-bind="(\$attrs as any)" />
        </template>

        VUE;
    }

    private function publishConfig(): void
    {
        $target = config_path('panel.php');

        if (file_exists($target) && ! $this->option('force')) {
            $this->components->warn('config/panel.php already exists, skipping. Use --force to replace it.');

            return;
        }

        $this->callSilently('vendor:publish', ['--tag' => 'panel-config', '--force' => true]);
        $this->components->info('Published config/panel.php');
    }

    private function createTree(): void
    {
        foreach (['Panel/Resources', 'Policies'] as $directory) {
            $path = app_path($directory);

            if (is_dir($path)) {
                continue;
            }

            mkdir($path, 0755, true);
            $this->components->info("Created app/{$directory}");
        }
    }

    /**
     * A panel with no way to resolve a tenant fails CLOSED - every list is
     * empty and every write is refused. That is correct, and completely
     * baffling if nobody says so at install time.
     */
    private function checkTenancy(): void
    {
        $mode = config('panel.tenancy.mode', 'column');

        if ($mode !== 'column') {
            return;
        }

        $userModel = config('auth.providers.users.model');

        if (! class_exists($userModel)) {
            return;
        }

        $column = config('panel.tenancy.column', 'tenant_id');

        try {
            $hasColumn = Schema::hasColumn((new $userModel)->getTable(), $column);
        } catch (\Throwable) {
            return;
        }

        if (! $hasColumn) {
            $this->components->warn(
                "Your users table has no [{$column}] column. In shared-database mode the panel "
                .'cannot resolve a tenant, so it will deny every query and every write. Add the '
                .'column, or set panel.tenancy.mode to "none" for a single-tenant app.'
            );
        }
    }

    /**
     * A PANEL NEEDS AN APPLICATION THAT CAN AUTHENTICATE, and saying so at
     * install time is the difference between a sentence and an afternoon.
     *
     * Every panel route runs behind a guard, and a guard turning an anonymous
     * visitor away redirects to `route('login')`. A bare `laravel/laravel` has
     * no auth scaffolding, so that route does not exist - and the FIRST page
     * anybody opens dies with `Route [login] not defined`, thrown from deep
     * inside the framework's URL generator. Nothing in that message mentions
     * authentication, a starter kit, or this package.
     *
     * This was found by installing into a fresh application rather than by any
     * of the suite, because inside the monorepo the reference app has had
     * Fortify since long before the panel existed. See `scripts/verify-install.sh`.
     */
    private function checkAuthScaffolding(): void
    {
        if (app('router')->has('login')) {
            return;
        }

        $this->newLine();
        $this->components->warn('No `login` route is defined.');
        $this->line('  Panel routes sit behind a guard, and turning an anonymous visitor');
        $this->line('  away means redirecting to route(\'login\'). Without one, the first');
        $this->line('  panel page fails with "Route [login] not defined" - which does not');
        $this->line('  mention authentication and is not obviously about this package.');
        $this->line('  Install a starter kit (Breeze, Jetstream) or Fortify, or define a');
        $this->line('  route named `login` yourself.');
    }
}
