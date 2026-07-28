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

        $this->components->info("Panel [{$id}] created.");

        $this->components->twoColumnDetail('Provider', "app/Providers/Panels/{$studly}PanelProvider.php");
        $this->components->twoColumnDetail('Resources', "app/Panel/{$studly}/Resources");
        $this->components->twoColumnDetail('URL', '/'.$path);
        $this->components->twoColumnDetail('Guard', (string) $this->option('guard'));
        $this->components->twoColumnDetail('Context', $this->option('central') ? 'central (no tenant scoping)' : 'tenant');

        /*
         * A PANEL WITH NO RESOURCES HAS NO ROUTES, deliberately - see
         * `PanelRoutes::register`. Saying so here is the difference between
         * "the generator did nothing" and "the next step is yours".
         */
        $this->newLine();
        $this->components->warn("It has no resources yet, so it has no routes yet. Add one:");
        $this->line("  php artisan make:panel-resource Tenant --panel={$id} --generate");

        return self::SUCCESS;
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
