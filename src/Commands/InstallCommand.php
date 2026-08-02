<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;
use PanelKit\Panel\Support\PanelPages;

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

    public function handle(): int
    {
        $this->components->info('Installing PanelKit');

        $this->publishConfig();
        $this->createTree();
        $this->publishBootstrap();
        $this->createDefaultPanel();
        $this->writePageFiles();
        $this->checkTenancy();
        $this->checkAuthScaffolding();
        $this->writeBlueprint();

        $this->newLine();
        $this->components->info('Done. Next:');
        $this->line('  1. npm install @panelkit/ui @panelkit/inertia && npm run build');
        $this->line('     The screens are Vue, so they are built rather than published. The');
        $this->line('     published resources/css/app.css already points Tailwind at both');
        $this->line('     packages - without that every utility used only inside them is');
        $this->line('     purged, and you get a correct table with no styling at all.');
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
     * THE FILES THAT MAKE AN INSTALL RENDER.
     *
     * WITHOUT THESE, `panel:install` WROTE PAGE FILES AND TOLD YOU TO BRING A
     * STARTER KIT. A fresh Laravel application has no root view, no Inertia
     * bootstrap and no layout, so the first panel route answered with "View
     * [app] not found" - and the fix was three files nobody had named. Every
     * install solved it differently, which is the same as the package not
     * having an answer.
     *
     * PUBLISHED, NOT SHIPPED. The layout in particular is meant to be replaced:
     * the package is layout-free by design and this is a floor, not a house
     * style. Publishing means changing it is an edit rather than a fork.
     *
     * NEVER OVERWRITES. `resources/js/app.ts` in an application that has one is
     * that application's, and replacing it would take out their bootstrap to
     * install ours. What is skipped is REPORTED - a generator that silently
     * declines to write a file leaves somebody believing it wrote one, and they
     * find out when nothing they expected is there.
     */
    private function publishBootstrap(): void
    {
        $stubs = dirname(__DIR__, 2).'/resources/stubs';

        $files = [
            "{$stubs}/app.blade.php.stub" => resource_path('views/app.blade.php'),
            "{$stubs}/app.ts.stub" => resource_path('js/app.ts'),
            "{$stubs}/app.css.stub" => resource_path('css/app.css'),
            "{$stubs}/PanelLayout.vue.stub" => resource_path('js/layouts/PanelLayout.vue'),
        ];

        $written = [];
        $skipped = [];

        foreach ($files as $stub => $target) {
            if (file_exists($target)) {
                $skipped[] = str_replace(base_path().'/', '', $target);

                continue;
            }

            if (! is_dir(dirname($target))) {
                mkdir(dirname($target), 0755, true);
            }

            copy($stub, $target);
            $written[] = str_replace(base_path().'/', '', $target);
        }

        foreach ($written as $file) {
            $this->components->twoColumnDetail('Wrote', $file);
        }

        foreach ($skipped as $file) {
            $this->components->twoColumnDetail('Kept yours', $file);
        }
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
        $result = PanelPages::write((bool) $this->option('force'));

        if ($result['directory'] === null) {
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

        if ($result['written'] !== []) {
            $this->components->info(
                'Wrote '.count($result['written']).' page files: '.implode(', ', $result['written'])
            );
        }

        if ($result['skipped'] !== []) {
            $this->components->warn(
                'Kept your own '.implode(', ', $result['skipped']).'. Use --force to replace them.'
            );
        }
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
