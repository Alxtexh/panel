<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;

/**
 * php artisan panel:install
 *
 * Spec §13: `composer require`, `panel:install`, `npm install && npm run build`,
 * then a resource — and a working panel in under ten minutes on a fresh app. If
 * it takes longer, the packaging is not finished.
 *
 * Deliberately IDEMPOTENT and non-destructive. An installer that overwrites a
 * file someone has edited is worse than one that skips it, so every step
 * reports what it did or why it did nothing.
 */
final class InstallCommand extends Command
{
    protected $signature = 'panel:install {--force : Overwrite the published config}';

    protected $description = 'Publish config, create the app/Panel tree, and print next steps';

    public function handle(): int
    {
        $this->components->info('Installing PanelKit');

        $this->publishConfig();
        $this->createTree();
        $this->checkTenancy();

        $this->newLine();
        $this->components->info('Done. Next:');
        $this->line('  1. Add a `tenant_id` column to your admin users table, or configure');
        $this->line('     panel.tenancy.resolver for stancl/tenancy.');
        $this->line('  2. php artisan make:panel-resource YourModel --generate');
        $this->line('  3. Review the generated policy — the panel DENIES any ability whose');
        $this->line('     model has no policy, so an unreviewed stub is a real grant.');
        $this->line('  4. Visit /your-models. Discovery registers it; there is no route to add.');

        return self::SUCCESS;
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
     * A panel with no way to resolve a tenant fails CLOSED — every list is
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
            $hasColumn = \Illuminate\Support\Facades\Schema::hasColumn((new $userModel())->getTable(), $column);
        } catch (\Throwable) {
            return;
        }

        if (! $hasColumn) {
            $this->components->warn(
                "Your users table has no [{$column}] column. In shared-database mode the panel "
                . 'cannot resolve a tenant, so it will deny every query and every write. Add the '
                . 'column, or set panel.tenancy.mode to "none" for a single-tenant app.'
            );
        }
    }
}
