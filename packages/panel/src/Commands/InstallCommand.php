<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;
use Alxtexh\Panel\Support\PanelPages;
use Alxtexh\Panel\Support\UserRoles;
use Symfony\Component\Process\Process;

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
    use Concerns\ScaffoldsPanelAuth;

    protected $signature = 'panel:install
                            {--auth : Also scaffold sign-in, sign-out and password reset for the default panel}
                            {--force : Overwrite the published config and page files}';

    protected $description = 'Publish config, create the app/Panel tree and the page files, and print next steps';

    public function handle(): int
    {
        $this->components->info('Installing Alxtexhpanel');

        $this->publishConfig();
        $this->ensureInertiaScriptElement();
        $this->createTree();
        $this->publishBootstrap();
        $this->wireVite();
        $this->scaffoldPackageJson();
        $this->repointViews();
        $this->createDefaultPanel();
        $this->wireRolesOntoUser();
        $this->writeDashboard();
        $this->writePageFiles();

        if ($this->option('auth')) {
            $this->scaffoldAuth();
            $this->enableDefaultPasswordReset();
            $this->writeLocalAuthPrefill();
            $this->scaffoldPasskeys();
        } else {
            /*
             * `--auth` installs the Composer package; without it the app may
             * still have required `laravel/passkeys` itself. Either way the
             * table has to exist or idle lock 500s on GET /screens/locked.
             */
            $this->publishAndMigratePasskeys();
        }

        $this->checkTenancy();
        $this->checkAuthScaffolding();
        $this->writeBlueprint();

        /*
         * AFTER every check that might load App\Models\User. Wiring the
         * PasskeyAuthenticatable trait mid-command and then loading the model
         * before Composer’s in-memory classmap knows about laravel/passkeys
         * fatals the install with a trait-not-found error.
         */
        if ($this->option('auth')) {
            $this->wirePasskeyUserModel();
        }

        $this->newLine();
        $this->components->info('Done. Next:');
        /*
         * THIS IS THE STEP THAT STRANDS PEOPLE - skip it and every route
         * answers 200 with a blank screen - so it prints as something to
         * paste rather than something to work out.
         */
        $this->line('  1. npm install && npm run build');
        $this->line('     The screens are Vue and come from `resources/client` inside this');
        $this->line('     Composer package (`file:vendor/alxtexh-enterprise/panel/resources/client`).');
        $this->line('     Path repositories must copy, not symlink (`"symlink": false`), or');
        $this->line('     Vite resolves types outside the app and the build fails.');
        $this->line('     The published resources/css/app.css already points Tailwind at it -');
        $this->line('     without that every utility used only inside the package is purged,');
        $this->line('     and you get a correct table with no styling at all.');
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

        /*
         * `app.css` IS NOT IN THIS LIST, AND THAT IS THE WHOLE POINT.
         *
         * Never-overwrite is right for a bootstrap somebody may have written.
         * Applied to the stylesheet it produced a guaranteed failure instead: a
         * stock Laravel application ALWAYS ships `resources/css/app.css`, so the
         * stub was skipped on EVERY first install - and skipping it means
         * Tailwind never scans `node_modules`, generates none of the packaged
         * components' utilities, and defines none of their tokens.
         *
         * The result is a panel that routes, renders, returns 200 and is
         * completely unstyled - dark text on a dark background, no card, no
         * spacing. It was reported as "the design does not come with it", which
         * is exactly what it looks like. See `mergeStylesheet()`.
         */
        $files = [
            "{$stubs}/app.blade.php.stub" => resource_path('views/app.blade.php'),
            "{$stubs}/app.ts.stub" => resource_path('js/app.ts'),
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

        $this->mergeStylesheet("{$stubs}/app.css.stub");
    }

    /**
     * Make sure the stylesheet reaches the packaged components.
     *
     * THREE CASES, AND ONLY ONE OF THEM IS "WRITE THE STUB".
     *
     *   NO FILE      - write the stub whole. A fresh application with no
     *                  stylesheet gets sources and tokens together.
     *
     *   FILE, NO `@source` FOR THE PACKAGES - merge. This is the ordinary case,
     *                  because stock Laravel always ships an `app.css`, and it
     *                  is the one the old never-overwrite rule got wrong.
     *
     *   ALREADY POINTS AT THE PACKAGES - leave it entirely alone. Re-running
     *                  `panel:install` must not append a second copy of
     *                  anything; the command is expected to be idempotent and
     *                  people do run it twice.
     *
     * WHAT GETS MERGED DEPENDS ON WHAT IS ALREADY THERE. The two `@source`
     * lines are always added - without them Tailwind purges every utility used
     * only inside `node_modules`, which is the whole failure. The TOKENS are
     * added only when the file does not already define `--background`: an
     * application on a starter kit has its own palette, and appending ours
     * would win by being later and silently retheme their app.
     */
    private function mergeStylesheet(string $stub): void
    {
        $target = resource_path('css/app.css');
        $relative = str_replace(base_path().'/', '', $target);

        if (! file_exists($target)) {
            if (! is_dir(dirname($target))) {
                mkdir(dirname($target), 0755, true);
            }

            copy($stub, $target);
            $this->components->twoColumnDetail('Wrote', $relative);

            return;
        }

        $current = (string) file_get_contents($target);

        if (str_contains($current, '@alxtexh-enterprise/panel')) {
            $this->components->twoColumnDetail('Already wired', $relative);

            return;
        }

        $contents = (string) file_get_contents($stub);

        // Everything from `@theme` down: the tokens and both palettes.
        $tokensAt = strpos($contents, '@theme');
        $tokens = $tokensAt === false ? '' : substr($contents, $tokensAt);

        $addition = "\n/* Added by panel:install - Tailwind does not scan node_modules. */\n"
            ."@source '../../node_modules/@alxtexh-enterprise/panel/dist/**/*.js';\n"
            ."@source '../../node_modules/@alxtexh-enterprise/panel/inertia/**/*.{vue,ts}';\n";

        $hasTokens = str_contains($current, '--background');

        if (! $hasTokens && $tokens !== '') {
            $addition .= "\n".$tokens;
        }

        file_put_contents($target, rtrim($current)."\n".$addition);

        $this->components->twoColumnDetail(
            'Merged into',
            $relative.($hasTokens ? ' (sources only - kept your tokens)' : ' (sources and tokens)'),
        );
    }


    /**
     * POINT VITE AT THE BOOTSTRAP AND TEACH IT VUE.
     *
     * A STOCK LARAVEL APPLICATION BUILDS `resources/js/app.js` AND HAS NO VUE
     * PLUGIN, so the file published above is compiled by nothing and the first
     * panel page renders "Vite manifest not found" - or worse, builds and then
     * fails on the first `.vue` import with a message about unexpected syntax.
     *
     * EDITED ONLY WHEN IT IS THE STOCK SHAPE, and REPORTED when it is not. An
     * earlier version of this pattern regex-searched `bootstrap/app.php` for a
     * closure a stock application does not have, found nothing, and silently
     * did nothing - so the generator reported success and the routes it wrote
     * were never loaded. A patch that cannot apply must say so and print the
     * edit, which is the difference between a minute and an afternoon.
     *
     * THE HALF `wireVite()` AND `writePageFiles()` BOTH ASSUME IS ALREADY THERE.
     *
     * Both write code that imports `@alxtexh-enterprise/panel` and
     * `@vitejs/plugin-vue` - and until this step existed, neither ever landed
     * in `package.json`. `npm install && npm run build`, the very first line
     * this command prints under "Next", failed on a stock application before a
     * single byte of the panel's own Vue ever ran: `Could not resolve
     * '@vitejs/plugin-vue'`. Every other gap this installer repairs is
     * something a browser reveals after a successful build. This one never
     * reached a browser.
     *
     * THE PACKAGE SHIPS ITSELF, rather than a Packagist/npm registry entry.
     * `dirname(__DIR__, 2)` is this file's own package root - the same trick
     * `publishBootstrap()` uses for stub templates - so `resources/client`
     * (built by `make sync-client`, see the Makefile) travels with
     * `alxtexh-enterprise/panel` however it was installed: a local `path`
     * repository during development, or a real git checkout once one exists.
     * `npm` needs no registry and no token for a `file:` dependency either
     * way, matching this project's own git-URL-not-Packagist posture on the
     * Composer side.
     *
     * PEER DEPENDENCIES ARE READ FROM THE CLIENT'S OWN `package.json`,
     * not hand-copied here - the two would drift the first time either
     * changed, and a stale copy fails exactly the way the missing entry did:
     * silently, until `npm run build`.
     *
     * NOTHING EXISTING IS OVERWRITTEN. An application that already depends on
     * `vue` or `@inertiajs/vue3` at a version of its own choosing keeps it;
     * this only fills gaps.
     */
    /**
     * The client directory, relative to the application root.
     *
     * ABSOLUTE WAS A "WORKS ON MY MACHINE" BUG, and `package.json` is committed,
     * so it was one that travels. `dirname(__DIR__, 2)` is absolute by
     * construction, and writing that into a dependency pinned the project to the
     * one folder it happened to be installed in:
     *
     *     "@alxtexh-enterprise/panel": "file:/home/sam/work/shop/vendor/..."
     *
     * A colleague cloning it, a CI runner checking it out, and a deploy to
     * /var/www all then run `npm install` against a path that does not exist -
     * and npm's error names the missing directory, not the reason it is wrong.
     *
     * FOUND BY REINSTALLING rather than by reading. A first install passes
     * either way, because the machine that wrote the path is the machine
     * resolving it.
     *
     * FALLS BACK TO ABSOLUTE when the package sits outside the project - a
     * global Composer cache, a symlinked path repository during development.
     * A relative path would have to climb out of the project to reach it, which
     * is both fragile and a lie about where the dependency lives.
     */
    private function relativeClientPath(string $clientPath): string
    {
        $root = rtrim(str_replace('\\', '/', (string) realpath(base_path())), '/');
        $client = str_replace('\\', '/', (string) (realpath($clientPath) ?: $clientPath));

        return str_starts_with($client, $root.'/')
            ? substr($client, strlen($root) + 1)
            : $client;
    }

    private function scaffoldPackageJson(): void
    {
        $path = base_path('package.json');

        if (! file_exists($path)) {
            $this->components->warn(
                'No package.json found. Install a Vue + Inertia starter kit first, or add '
                .'@alxtexh-enterprise/panel, vue, @inertiajs/vue3, vue-sonner and '
                .'@vitejs/plugin-vue yourself.',
            );

            return;
        }

        $clientPath = dirname(__DIR__, 2).'/resources/client';
        $clientPackage = json_decode((string) file_get_contents($clientPath.'/package.json'), true);

        $package = json_decode((string) file_get_contents($path), true);
        $package['dependencies'] ??= [];
        $package['devDependencies'] ??= [];

        $added = [];

        $wanted = ($clientPackage['peerDependencies'] ?? [])
            + ['@alxtexh-enterprise/panel' => 'file:'.$this->relativeClientPath($clientPath)];

        foreach ($wanted as $name => $constraint) {
            if (array_key_exists($name, $package['dependencies']) || array_key_exists($name, $package['devDependencies'])) {
                continue;
            }

            $package['dependencies'][$name] = $constraint;
            $added[] = $name;
        }

        /*
         * DEV, NOT RUNTIME. `@vitejs/plugin-vue` is what `wireVite()` just
         * imported into `vite.config.js`; `typescript` is what lets Vue's SFC
         * compiler resolve a type-only `defineProps<T>()` in the packaged
         * screens under `./inertia/*`, which - unlike the "." entry above -
         * still ship as source rather than a pre-built bundle. Without it the
         * build fails several files deep with "Failed to load TypeScript",
         * naming neither this package nor the real cause.
         */
        foreach (['@vitejs/plugin-vue' => '^6.0.0', 'typescript' => '^5.7.0'] as $name => $constraint) {
            if (array_key_exists($name, $package['dependencies']) || array_key_exists($name, $package['devDependencies'])) {
                continue;
            }

            $package['devDependencies'][$name] = $constraint;
            $added[] = $name;
        }

        if ($added === []) {
            $this->components->twoColumnDetail('Kept yours', 'package.json');

            return;
        }

        file_put_contents(
            $path,
            json_encode($package, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)."\n",
        );

        $this->components->twoColumnDetail('Wired', 'package.json ('.implode(', ', $added).')');
    }

    private function wireVite(): void
    {
        $path = collect(['vite.config.ts', 'vite.config.js'])
            ->map(static fn (string $f): string => base_path($f))
            ->first(static fn (string $f): bool => file_exists($f));

        if ($path === null) {
            $this->components->warn('No vite.config found. Add the Vue plugin and point the input at resources/js/app.ts yourself.');

            return;
        }

        $config = (string) file_get_contents($path);
        $name = basename($path);

        if (str_contains($config, '@vitejs/plugin-vue')) {
            $this->components->twoColumnDetail('Kept yours', $name);

            return;
        }

        if (! str_contains($config, 'resources/js/app.js')) {
            $this->components->warn("{$name} is not the stock shape, so it was left alone. Add:");
            $this->line("  import vue from '@vitejs/plugin-vue';   // and put vue() in plugins");
            $this->line("  input: ['resources/css/app.css', 'resources/js/app.ts']");

            return;
        }

        $config = str_replace('resources/js/app.js', 'resources/js/app.ts', $config);

        $config = preg_replace(
            "/^import laravel from 'laravel-vite-plugin';$/m",
            "import laravel from 'laravel-vite-plugin';\nimport vue from '@vitejs/plugin-vue';",
            $config,
            1,
        );

        /*
         * AFTER `laravel(...)`, because plugin order decides who transforms a
         * `.vue` file first and the Laravel plugin expects to see the entry
         * before Vue rewrites it.
         */
        $config = (string) preg_replace('/^(\s*)tailwindcss\(\),$/m', "$1vue(),\n$1tailwindcss(),", $config, 1);

        file_put_contents($path, $config);

        $this->components->twoColumnDetail('Wired', $name);
    }

    /**
     * Follow the entry rename into the views that reference it.
     *
     * REWIRING VITE BROKE THE APPLICATION'S OWN PAGES, which is the opposite of
     * this installer's whole promise. The step above renames the entry from
     * `app.js` to `app.ts` - correct, because the panel's bootstrap is
     * TypeScript - and every Blade view a stock Laravel app ships still says
     * `@vite([..., 'resources/js/app.js'])`. That entry no longer exists in the
     * manifest, so `welcome.blade.php` answers 500.
     *
     * IT IS FOUND BY SIGNING IN. The panel redirects to its home, which for a
     * root-mounted panel is `/`, which is the welcome page - so the first thing
     * after a successful sign-in was a Vite exception. Nothing in the install
     * output suggested it; the panel's own screens were fine.
     *
     * ONLY THE EXACT STRING INSIDE A VIEW, and only when the rename happened.
     * A view referencing an `app.js` that is still an entry is somebody else's
     * arrangement.
     */
    /**
     * The trait without which the panel denies everything.
     *
     * The reasoning, and why the editing lives in a class of its own rather
     * than here, is in `Support\\UserRoles`. This is the wiring: find the
     * configured model, add it, and say what happened either way.
     *
     * `panel:doctor` repeats the same finding on every run, so an installation
     * whose model was replaced afterwards is never left wondering.
     */
    private function wireRolesOntoUser(): void
    {
        $model = (string) config('auth.providers.users.model', 'App\\Models\\User');
        $path = UserRoles::pathFor($model, app_path());

        if ($path === null) {
            $this->components->warn(
                "Could not find {$model} to add Spatie's HasRoles trait. Add it by hand, or the "
                .'panel denies every ability to everybody, silently.'
            );

            return;
        }

        $source = file_get_contents($path);

        if (UserRoles::present($source)) {
            $this->components->twoColumnDetail('Already holds roles', class_basename($model));

            return;
        }

        $updated = UserRoles::add($source);

        if ($updated === null) {
            $this->components->warn(
                "Could not add HasRoles to {$model} automatically. Add `".UserRoles::IMPORT
                .'` and `'.UserRoles::TRAIT.'` inside the class by hand, or the panel denies '
                .'every ability to everybody, silently.'
            );

            return;
        }

        file_put_contents($path, $updated);

        $this->components->twoColumnDetail('Added HasRoles to', class_basename($model));
    }

    private function repointViews(): void
    {
        $root = resource_path('views');

        /*
         * CALLED FROM `handle()`, NOT FROM `wireVite()`, and that placement is
         * the fix rather than a tidy-up. `wireVite()` returns early when the
         * config is already wired - which is every re-run and every application
         * that wired Vue itself - so hanging this off the end of it meant the
         * views stayed broken in exactly the installs that had got everything
         * else right.
         *
         * THE CONDITION IS THE ENTRY EXISTING. If `app.ts` is there, that is
         * what views should point at.
         */
        if (! is_dir($root) || ! file_exists(resource_path('js/app.ts'))) {
            return;
        }

        $changed = [];

        $files = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($root));

        foreach ($files as $file) {
            if (! $file->isFile() || ! str_ends_with($file->getFilename(), '.blade.php')) {
                continue;
            }

            $contents = (string) file_get_contents($file->getPathname());

            if (! str_contains($contents, 'resources/js/app.js')) {
                continue;
            }

            file_put_contents(
                $file->getPathname(),
                str_replace('resources/js/app.js', 'resources/js/app.ts', $contents),
            );

            $changed[] = str_replace(base_path().'/', '', $file->getPathname());
        }

        foreach ($changed as $file) {
            $this->components->twoColumnDetail('Repointed @vite in', $file);
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
     * SIGN-IN FOR THE PANEL AN INSTALLATION ALREADY HAS.
     *
     * `make:panel --auth` covers a portal you are GENERATING, and covered only
     * that - so the first path anybody walks (`composer require`,
     * `panel:install`, open the panel) still ended at a starter kit. The report
     * asked for exactly this flag by name.
     *
     * OUTSIDE `createDefaultPanel()` DELIBERATELY, because that method returns
     * early when the provider already exists - which is the ordinary case for
     * somebody adding sign-in to an install they made last week. Scaffolding
     * hung inside it would silently do nothing for them.
     *
     * THE DEFAULT PANEL IS AT THE ROOT and authenticates `web`, which is what
     * `createDefaultPanel()` generates. A panel on another path or guard is a
     * `make:panel` job.
     */
    private function scaffoldAuth(): void
    {
        $this->newLine();
        $this->components->info('Scaffolding sign-in for the default panel');

        $this->scaffoldPanelAuth((string) config('panel.default', 'admin'), '', 'web', (bool) $this->option('force'));
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

    /**
     * Inertia.js v3 reads the initial page from a JSON `<script data-page>`,
     * not from `data-page` on `#app`.
     *
     * WITHOUT THIS FLAG, a fresh install that pulls `@inertiajs/vue3` ^3 mounts
     * an empty `#app` and throws `Cannot read properties of null (reading
     * 'component')` - a blank white page that looks like "the design did not
     * install". The demo already enables the script element; the installer must
     * too, or the CSS and widgets never get a chance to render.
     */
    private function ensureInertiaScriptElement(): void
    {
        $path = config_path('inertia.php');

        if (! file_exists($path)) {
            try {
                $this->callSilently('vendor:publish', [
                    '--provider' => 'Inertia\\ServiceProvider',
                    '--force' => true,
                ]);
            } catch (\Throwable) {
                // Package may expose a tag instead; fall through to env write.
            }
        }

        if (file_exists($path)) {
            $contents = (string) file_get_contents($path);

            if (str_contains($contents, "'use_script_element_for_initial_page' => true")
                || str_contains($contents, '"use_script_element_for_initial_page" => true')) {
                $this->components->twoColumnDetail('Kept', 'inertia script-element bootstrap');

                return;
            }

            $updated = preg_replace(
                "/('use_script_element_for_initial_page'\\s*=>\\s*)\\(bool\\)\\s*env\\([^\\n]+\\)/",
                '$1true',
                $contents,
                1,
            );

            if (! is_string($updated) || $updated === $contents) {
                $updated = str_replace(
                    "env('INERTIA_USE_SCRIPT_ELEMENT_FOR_INITIAL_PAGE', false)",
                    "env('INERTIA_USE_SCRIPT_ELEMENT_FOR_INITIAL_PAGE', true)",
                    $contents,
                );
            }

            if ($updated !== $contents) {
                file_put_contents($path, $updated);
                $this->components->twoColumnDetail('Enabled', 'inertia.use_script_element_for_initial_page');

                return;
            }
        }

        $env = base_path('.env');

        if (file_exists($env) && ! str_contains((string) file_get_contents($env), 'INERTIA_USE_SCRIPT_ELEMENT')) {
            file_put_contents($env, "\nINERTIA_USE_SCRIPT_ELEMENT_FOR_INITIAL_PAGE=true\n", FILE_APPEND);
            $this->components->twoColumnDetail('Wrote', '.env INERTIA_USE_SCRIPT_ELEMENT_FOR_INITIAL_PAGE=true');
        }
    }

    private function createTree(): void
    {
        foreach (['Panel/Resources', 'Panel/Pages', 'Policies'] as $directory) {
            $path = app_path($directory);

            if (is_dir($path)) {
                continue;
            }

            mkdir($path, 0755, true);
            $this->components->info("Created app/{$directory}");
        }
    }

    /**
     * The screen an installation opens on.
     *
     * A FRESH INSTALL HAD NO DASHBOARD AT ALL, and the symptom was not an
     * error - it was signing in and landing on a resource list, or on the
     * application's welcome page, with no way to tell which was intended.
     * `DashboardPage` shipped as an ABSTRACT class: nine widget classes, a
     * packaged screen to draw them, deferred resolution, per-widget
     * permissions - and nothing that extended it, so none of it rendered
     * anywhere until somebody wrote a subclass they had no reason to know
     * about.
     *
     * SO THE INSTALLER WRITES ONE WITH SAMPLE WIDGETS. At install time there
     * are usually no domain models to count, but an empty grey "no widgets
     * yet" page is not what the demo looks like and is not a usable first
     * paint. The numbers below are FIXED SAMPLE DATA - replace the closures
     * with your own queries when you have models.
     *
     * IN THE APPLICATION, NOT THE PACKAGE. A dashboard is the screen people
     * change first, and one that lived in `vendor/` would have to be
     * republished, subclassed or configured before it could be touched.
     */
    private function writeDashboard(): void
    {
        $path = app_path('Panel/Pages/DashboardPage.php');

        if (file_exists($path) && ! $this->option('force')) {
            $this->components->twoColumnDetail('Kept yours', 'app/Panel/Pages/DashboardPage.php');

            return;
        }

        if (! is_dir(dirname($path))) {
            mkdir(dirname($path), 0755, true);
        }

        $panel = (string) config('panel.default', 'admin');

        file_put_contents($path, <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\Pages;

        use DateTimeImmutable;
        use Alxtexh\\Panel\\Pages\\DashboardPage as AlxtexhpanelDashboard;
        use Alxtexh\\Panel\\Widgets\\ChartWidget;
        use Alxtexh\\Panel\\Widgets\\DashboardFilters;
        use Alxtexh\\Panel\\Widgets\\Period;
        use Alxtexh\\Panel\\Widgets\\StatWidget;
        use Alxtexh\\Panel\\Widgets\\Trend;

        /**
         * The panel's home screen - where signing in lands.
         *
         * SAMPLE WIDGETS SHIP SO A FRESH INSTALL IS NOT AN EMPTY PAGE.
         * They are domain-neutral on purpose: this is a kit, not a vertical
         * product. Replace the closures with your own queries when you have
         * models; the layout, deferred props and period selectors stay the
         * same.
         *
         * To use your own layout instead, override `component()` and point it
         * at a page of your own; the declarations, the permission filtering and
         * the deferred props still apply.
         */
        final class DashboardPage extends AlxtexhpanelDashboard
        {
            protected static string \$panel = '{$panel}';

            protected static ?int \$sort = -100;

            /** Four glanceable windows above the widget grid. */
            public static function strip(): ?callable
            {
                return static function (DashboardFilters \$filters, DateTimeImmutable \$now, string \$tenantKey): array {
                    return [
                        ['key' => 'today', 'label' => 'Today', 'value' => 145, 'caption' => 'orders so far', 'sensitive' => false],
                        ['key' => 'week', 'label' => 'Last 7 days', 'value' => 982, 'caption' => 'rolling window', 'sensitive' => true],
                        ['key' => 'month', 'label' => 'This month', 'value' => 3_412, 'caption' => 'since the 1st', 'sensitive' => false],
                        ['key' => 'quarter', 'label' => 'Last 90 days', 'value' => 11_208, 'caption' => 'rolling window', 'sensitive' => true],
                    ];
                };
            }

            /** The counters across the top. */
            public static function stats(): array
            {
                return [
                    StatWidget::make('orders_open', 'Open orders')
                        ->value(fn (): int => 48)
                        ->description('Awaiting fulfilment'),

                    StatWidget::make('inventory', 'On hand')
                        ->value(fn (): int => 1_240)
                        ->description('Units in stock'),

                    StatWidget::make('revenue', 'Revenue')
                        ->value(fn (): int => 18_440)
                        ->trend(fn (): Trend => Trend::between(18_440, 16_900))
                        ->sparkline(fn (): array => [
                            'points' => [
                                ['label' => 'Mon', 'value' => 2_100],
                                ['label' => 'Tue', 'value' => 2_450],
                                ['label' => 'Wed', 'value' => 2_280],
                                ['label' => 'Thu', 'value' => 2_610],
                                ['label' => 'Fri', 'value' => 2_900],
                                ['label' => 'Sat', 'value' => 3_050],
                                ['label' => 'Sun', 'value' => 3_050],
                            ],
                        ]),

                    StatWidget::make('due_soon', 'Due this week')
                        ->value(fn (): int => 12)
                        ->description('Returns and invoices'),
                ];
            }

            /** The charts below them. */
            public static function charts(): array
            {
                return [
                    ChartWidget::make('revenue', 'Revenue over time')
                        ->type('area')
                        ->description('Takings over the period')
                        ->withPeriods()
                        ->span(2)
                        ->data(fn (Period \$p, ?DateTimeImmutable \$now): array => [
                            'points' => [
                                ['label' => 'Mon', 'value' => 210],
                                ['label' => 'Tue', 'value' => 245],
                                ['label' => 'Wed', 'value' => 228],
                                ['label' => 'Thu', 'value' => 261],
                                ['label' => 'Fri', 'value' => 290],
                                ['label' => 'Sat', 'value' => 305],
                                ['label' => 'Sun', 'value' => 298],
                            ],
                        ])
                        ->trend(fn (Period \$p, ?DateTimeImmutable \$now): Trend => Trend::between(1_837, 1_650)),

                    ChartWidget::make('status', 'By status')
                        ->type('doughnut')
                        ->data(fn (): array => [
                            ['label' => 'Paid', 'value' => 1_583],
                            ['label' => 'Unpaid', 'value' => 587],
                            ['label' => 'Overdue', 'value' => 330],
                        ]),

                    ChartWidget::make('featured', 'Featured')
                        ->type('catalog')
                        ->description('Replace with products, units or listings')
                        ->data(fn (): array => [
                            'items' => [
                                ['key' => 'a', 'label' => 'Day desk', 'caption' => 'Studio 3', 'price' => '12.00', 'status' => 'available'],
                                ['key' => 'b', 'label' => 'Oak table', 'caption' => 'Floor 2', 'price' => '48.00', 'status' => 'occupied', 'progress' => ['value' => 80, 'total' => 100, 'tone' => 'success']],
                                ['key' => 'c', 'label' => 'Filter pack', 'caption' => 'SKU-1042', 'price' => '6.50', 'status' => 'low', 'progress' => ['value' => 8, 'total' => 40, 'tone' => 'warning']],
                            ],
                        ]),

                    ChartWidget::make('lines', 'Recent lines')
                        ->type('items')
                        ->description('Orders, cart rows or upcoming returns')
                        ->data(fn (): array => [
                            'items' => [
                                ['key' => '1', 'label' => 'Filter pack', 'detail' => 'SKU-1042', 'qty' => 2, 'amount' => '13.00', 'status' => 'paid'],
                                ['key' => '2', 'label' => 'Oak table', 'detail' => 'Due Fri', 'qty' => 1, 'amount' => '48.00', 'status' => 'due'],
                                ['key' => '3', 'label' => 'Day desk', 'detail' => 'Walk-in', 'qty' => 1, 'amount' => '12.00', 'status' => 'unpaid'],
                            ],
                        ]),
                ];
            }

            /**
             * Shortcut chips on the dashboard. Point these at your own screens.
             *
             * @return array<string, mixed>
             */
            public static function shortcuts(): array
            {
                return [
                    'defaults' => ['settings', 'organisation'],
                    'catalog' => [
                        ['id' => 'settings', 'label' => 'Settings', 'href' => '/settings', 'icon' => 'sliders'],
                        ['id' => 'organisation', 'label' => 'Organisation', 'href' => '/settings/organisation', 'icon' => 'home'],
                        ['id' => 'people', 'label' => 'People', 'href' => '/user-management', 'icon' => 'users'],
                    ],
                ];
            }
        }

        PHP);

        $this->components->twoColumnDetail('Wrote', 'app/Panel/Pages/DashboardPage.php');
    }

    /**
     * Turn on "Forgot password?" for the default admin panel when --auth ran.
     *
     * `make:panel` for a custom guard still ships reset OFF; the installer
     * default is `web` + `users` broker, which a stock Laravel app already has.
     * An existing provider written before that change is patched in place so
     * re-running `panel:install --auth` actually shows the link.
     */
    private function enableDefaultPasswordReset(): void
    {
        $provider = app_path('Providers/Panels/AdminPanelProvider.php');

        if (! file_exists($provider)) {
            return;
        }

        $contents = (string) file_get_contents($provider);

        if (! str_contains($contents, '->passwordReset(false)')) {
            return;
        }

        $replacement = <<<'PHP'
                /*
                 * SELF-SERVICE RESET against Laravel's default `users` broker.
                 * The `web` guard's accounts live there on a stock install.
                 */
                ->passwordReset(true)
                ->passwordBroker('users')
PHP;

        $updated = preg_replace(
            '/\/\*\s*\n\s*\*\s*NO SELF-SERVICE RESET.*?\*\/\s*\n\s*->passwordReset\(false\)/s',
            $replacement,
            $contents,
            1,
        );

        if (! is_string($updated) || $updated === $contents) {
            $updated = str_replace('->passwordReset(false)', "->passwordReset(true)\n                ->passwordBroker('users')", $contents);
        }

        if ($updated === $contents) {
            return;
        }

        file_put_contents($provider, $updated);
        $this->components->twoColumnDetail('Enabled', 'password reset on AdminPanelProvider');
    }

    /**
     * Local-only login prefill so a fresh install can open the form and press
     * Log in without typing - matching the demo's local convenience.
     *
     * NEVER WRITES A PASSWORD INTO PRODUCTION CONFIG. The controller refuses
     * prefill outside `local`; this only seeds the published panel config.
     */
    private function writeLocalAuthPrefill(): void
    {
        $config = config_path('panel.php');

        if (! file_exists($config)) {
            return;
        }

        $contents = (string) file_get_contents($config);
        $panel = (string) config('panel.default', 'admin');

        if (str_contains($contents, "'{$panel}' =>") && str_contains($contents, "'prefill'")) {
            $this->components->twoColumnDetail('Kept yours', "config/panel.php auth.{$panel}.prefill");

            return;
        }

        $needle = <<<'TXT'
        |   'reseller' => [
        |       'heading' => 'Reseller portal',
        |       'description' => 'Sign in to manage your customers',
        |       'passwords' => true,   // route the reset pair
        |       'prefill' => null,     // local only, refused elsewhere
        |   ],
        */
TXT;

        if (! str_contains($contents, $needle)) {
            $this->components->warn('Could not write local auth prefill - edit config/panel.php auth.'.$panel.' by hand.');

            return;
        }

        $block = <<<PHP
        |   'reseller' => [
        |       'heading' => 'Reseller portal',
        |       'description' => 'Sign in to manage your customers',
        |       'passwords' => true,   // route the reset pair
        |       'prefill' => null,     // local only, refused elsewhere
        |   ],
        */

        '{$panel}' => [
            // Local only: PanelAuthController refuses this outside `local`.
            'prefill' => [
                'email' => env('PANEL_DEMO_EMAIL', 'admin@example.com'),
                'password' => env('PANEL_DEMO_PASSWORD', 'password'),
            ],
        ],
PHP;

        file_put_contents($config, str_replace($needle, $block, $contents));
        $this->components->twoColumnDetail('Wrote', "config/panel.php auth.{$panel}.prefill (local only)");
    }

    /**
     * Passkey sign-in button on the packaged login screen.
     *
     * THE DEMO SHOWS "Sign in with a passkey". Without `laravel/passkeys` the
     * controller passes `passkeys: null` and the button is gone - so a fresh
     * install looks thinner than the demo even when CSS matches. Soft-require:
     * if Composer cannot install it, we say so and leave email login working.
     */
    private function scaffoldPasskeys(): void
    {
        $already = class_exists(\Laravel\Passkeys\Passkeys::class)
            || class_exists(\Laravel\Passkeys\Passkey::class)
            || is_dir(base_path('vendor/laravel/passkeys'));

        if ($already && (class_exists(\Laravel\Passkeys\Passkeys::class) || class_exists(\Laravel\Passkeys\Passkey::class))) {
            $this->components->twoColumnDetail('Kept', 'laravel/passkeys already installed');
            $this->publishAndMigratePasskeys();

            return;
        }

        if (! $already) {
            $this->components->info('Installing laravel/passkeys for passkey sign-in');

            $composer = base_path('composer.phar');
            $bin = file_exists($composer) ? escapeshellarg(PHP_BINARY).' '.escapeshellarg($composer) : 'composer';

            $process = Process::fromShellCommandline(
                "{$bin} require laravel/passkeys --no-interaction",
                base_path(),
            );
            $process->setTimeout(300);
            $exit = $process->run();

            if ($exit !== 0) {
                $this->components->warn(
                    'Could not install laravel/passkeys. Run `composer require laravel/passkeys` '
                    .'then `php artisan vendor:publish --tag=passkeys-migrations && php artisan migrate`.',
                );

                return;
            }

            Process::fromShellCommandline("{$bin} dump-autoload -o", base_path())
                ->setTimeout(120)
                ->run();

            $this->refreshComposerAutoload();
        }

        if (! class_exists(\Laravel\Passkeys\Passkey::class) && ! class_exists(\Laravel\Passkeys\Passkeys::class)) {
            $this->components->warn(
                'laravel/passkeys is on disk but not autoloadable in this process. '
                .'Re-run `php artisan panel:install --auth` after `composer dump-autoload`.',
            );

            return;
        }

        $this->publishAndMigratePasskeys();

        $this->components->twoColumnDetail('Installed', 'laravel/passkeys (login button + migrations)');
    }

    /**
     * Publish and run the `laravel/passkeys` migration.
     *
     * MUST RUN EVEN WHEN THE PACKAGE WAS ALREADY REQUIRED. The early "Kept"
     * path used to return before this, so a fresh app with `laravel/passkeys`
     * in composer.json never got a `passkeys` table and the lock screen 500ed.
     */
    private function publishAndMigratePasskeys(): void
    {
        if (! class_exists(\Laravel\Passkeys\Passkey::class)
            && ! class_exists(\Laravel\Passkeys\Passkeys::class)
            && ! is_dir(base_path('vendor/laravel/passkeys'))) {
            return;
        }

        try {
            $this->callSilently('vendor:publish', ['--tag' => 'passkeys-migrations', '--force' => true]);
        } catch (\Throwable) {
            $this->components->warn(
                'Could not publish passkey migrations. Run `php artisan vendor:publish --tag=passkeys-migrations`.',
            );

            return;
        }

        try {
            $this->callSilently('migrate', ['--force' => true]);
        } catch (\Throwable) {
            $this->components->warn('Passkey migrations published - run `php artisan migrate` when ready.');

            return;
        }

        $this->components->twoColumnDetail('Migrated', 'passkeys table');
    }

    /**
     * Composer’s ClassLoader keeps the pre-require classmap in memory. After
     * `composer require` in a subprocess, refresh the registered loader so
     * newly installed packages resolve without restarting artisan.
     */
    private function refreshComposerAutoload(): void
    {
        $psr4 = base_path('vendor/composer/autoload_psr4.php');
        $classmap = base_path('vendor/composer/autoload_classmap.php');

        if (! is_file($psr4)) {
            return;
        }

        foreach (spl_autoload_functions() ?: [] as $autoload) {
            if (! is_array($autoload) || ! $autoload[0] instanceof \Composer\Autoload\ClassLoader) {
                continue;
            }

            /** @var \Composer\Autoload\ClassLoader $loader */
            $loader = $autoload[0];

            foreach (require $psr4 as $prefix => $paths) {
                $loader->setPsr4($prefix, $paths);
            }

            if (is_file($classmap)) {
                $loader->addClassMap(require $classmap);
            }

            return;
        }
    }

    /** Point the User model at laravel/passkeys contracts when the class exists. */
    private function wirePasskeyUserModel(): void
    {
        if (! class_exists(\Laravel\Passkeys\PasskeyAuthenticatable::class)
            && ! trait_exists(\Laravel\Passkeys\PasskeyAuthenticatable::class)) {
            return;
        }

        $path = app_path('Models/User.php');

        if (! file_exists($path)) {
            return;
        }

        $contents = (string) file_get_contents($path);

        if (str_contains($contents, 'PasskeyAuthenticatable') || str_contains($contents, 'PasskeyUser')) {
            return;
        }

        if (! str_contains($contents, 'class User extends Authenticatable')) {
            $this->components->warn('Could not wire passkeys onto App\\Models\\User - add PasskeyUser by hand.');

            return;
        }

        $contents = str_replace(
            'use Illuminate\\Foundation\\Auth\\User as Authenticatable;',
            "use Illuminate\\Foundation\\Auth\\User as Authenticatable;\n"
            ."use Laravel\\Passkeys\\Contracts\\PasskeyUser;\n"
            .'use Laravel\\Passkeys\\PasskeyAuthenticatable;',
            $contents,
        );

        $contents = str_replace(
            'class User extends Authenticatable',
            'class User extends Authenticatable implements PasskeyUser',
            $contents,
        );

        if (str_contains($contents, 'use HasFactory, Notifiable;')) {
            $contents = str_replace(
                'use HasFactory, Notifiable;',
                'use HasFactory, Notifiable, PasskeyAuthenticatable;',
                $contents,
            );
        } elseif (preg_match('/use HasFactory, Notifiable([^;]*);/', $contents) === 1) {
            $contents = preg_replace(
                '/use HasFactory, Notifiable([^;]*);/',
                'use HasFactory, Notifiable, PasskeyAuthenticatable$1;',
                $contents,
                1,
            ) ?? $contents;
        } else {
            $contents = preg_replace(
                '/class User extends Authenticatable implements PasskeyUser\s*\{/',
                "class User extends Authenticatable implements PasskeyUser\n{\n    use PasskeyAuthenticatable;\n",
                $contents,
                1,
            ) ?? $contents;
        }

        file_put_contents($path, $contents);
        $this->components->twoColumnDetail('Wired', 'App\\Models\\User for passkeys');
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

        if ($hasColumn) {
            return;
        }

        /*
         * SET THE MODE TO MATCH THE APPLICATION, rather than warning about a
         * default that cannot work here.
         *
         * `column` mode resolves a tenant from a column on the users table, and
         * fails CLOSED when it cannot - every list empty, every write refused.
         * That posture is right. What was wrong is shipping it as the default
         * into an application with no such column: the install printed this
         * warning, reported success, and left a panel where every screen
         * answered 403 with a role correctly granted and the ability correctly
         * held. The refusal came from tenancy, and nothing on the screen said so.
         *
         * A FRESH `laravel/laravel` HAS NO TENANT COLUMN, so this is the common
         * case rather than an edge one. Single-tenant is the honest default for
         * an application that has not asked to be anything else, and `none` is
         * one config line to reverse once the column exists.
         */
        $written = $this->writeTenancyMode('none');

        $this->components->warn(
            "Your users table has no [{$column}] column, so the panel cannot resolve a tenant "
            .'in shared-database mode - it would deny every query and every write.'
        );

        $this->components->twoColumnDetail(
            $written ? 'Set panel.tenancy.mode' : 'Set panel.tenancy.mode by hand',
            $written
                ? 'none - single-tenant. Change it to "column" once your users table has one.'
                : 'none - could not edit config/panel.php; set it yourself.',
        );
    }

    /**
     * Rewrite the published config's tenancy mode.
     *
     * ON THE PUBLISHED FILE, not through `config()`: a runtime set lasts for
     * this command and the next request is back to denying everything.
     *
     * TEXTUAL, and it declines rather than guesses. The published file is the
     * one this installer wrote minutes ago, so the shape is known - but an
     * application that has already edited it gets a message instead of a
     * rewrite.
     */
    private function writeTenancyMode(string $mode): bool
    {
        $path = config_path('panel.php');

        if (! is_file($path)) {
            return false;
        }

        $source = file_get_contents($path);
        $count = 0;

        $updated = preg_replace(
            "/('mode'\s*=>\s*)env\('PANEL_TENANCY[^)]*\)/",
            "$1'{$mode}'",
            $source,
            1,
            $count
        );

        if ($count !== 1) {
            $updated = preg_replace(
                "/('mode'\s*=>\s*)'column'/",
                "$1'{$mode}'",
                $source,
                1,
                $count
            );
        }

        if ($count !== 1 || $updated === null) {
            return false;
        }

        file_put_contents($path, $updated);

        return true;
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

        /*
         * A PANEL THAT SCAFFOLDED ITS OWN SIGN-IN NEEDS NO STARTER KIT, and
         * saying otherwise sends somebody to install Breeze over a working
         * login. `Authenticate::redirectUsing()` asks the panel first, so a
         * route named `login` is no longer required for a panel to turn a
         * guest away - only for whatever else the application routes.
         */
        if (glob(base_path('routes/panel-*-auth.php')) !== []) {
            return;
        }

        $this->newLine();
        $this->components->warn('No `login` route is defined, and no panel scaffolds its own.');
        $this->line('  Panel routes sit behind a guard, and turning an anonymous visitor');
        $this->line('  away means sending them somewhere to sign in. Without either, the');
        $this->line('  first panel page fails with "Route [login] not defined" - which does');
        $this->line('  not mention authentication and is not obviously about this package.');
        $this->line('  Either:');
        $this->line('    php artisan panel:install --auth    # this package\'s sign-in, on this panel\'s guard');
        $this->line('  or install a starter kit (Breeze, Jetstream) or Fortify, or define a');
        $this->line('  route named `login` yourself.');
    }
}
