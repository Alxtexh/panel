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
    private const SCREENS = ['ResourceIndex', 'ResourceForm', 'ResourceView', 'Trash', 'PanelHome'];

    public function handle(): int
    {
        $this->components->info('Installing PanelKit');

        $this->publishConfig();
        $this->createTree();
        $this->writePageFiles();
        $this->checkTenancy();

        $this->newLine();
        $this->components->info('Done. Next:');
        $this->line('  1. npm install @panelkit/ui @panelkit/inertia');
        $this->line('     The five page files above import from it. Without the package they are');
        $this->line('     imports of nothing, which fails in the browser rather than at build time.');
        $this->line('  2. Add a `tenant_id` column to your admin users table, or configure');
        $this->line('     panel.tenancy.resolver for stancl/tenancy.');
        $this->line('  3. php artisan make:panel-resource YourModel --generate');
        $this->line('  4. Review the generated policy - the panel DENIES any ability whose');
        $this->line('     model has no policy, so an unreviewed stub is a real grant.');
        $this->line('  5. Visit /your-models. Discovery registers it; there is no route to add.');

        return self::SUCCESS;
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

    private function pageFile(string $screen): string
    {
        return <<<VUE
        <script lang="ts">
        /*
         * The panel's {$screen} screen, from @panelkit/inertia.
         *
         * WHY THIS FILE EXISTS: Inertia resolves a page name by globbing this
         * directory, so a screen living in node_modules is one it cannot find.
         *
         * IT IS ALSO WHERE YOU OVERRIDE IT. Replace the line below with your own
         * component and nothing else has to change.
         */
        export { default } from '@panelkit/inertia/pages/{$screen}.vue'
        </script>

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
}
