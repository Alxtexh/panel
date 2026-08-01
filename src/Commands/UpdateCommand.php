<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use PanelKit\Panel\Support\PanelPages;

/**
 * What to run after `composer update panelkit/panel`.
 *
 * THIS DID NOT EXIST FOR THE FIRST TWO RELEASES, and 0.2.0 is what proved it had
 * to. That release added a routed permission matrix at `settings/Roles` - and
 * the page file that lets Inertia resolve it is written by `panel:install`,
 * which nobody re-runs after an upgrade. So every 0.1.0 installation that
 * updated got a route the server answers, a component the client cannot find,
 * and a WHITE PAGE with a console error naming a file the developer has never
 * seen. Nothing in the upgrade said to run anything.
 *
 * A package that ships screens has to ship the step that reconciles them.
 *
 * IT WRITES FILES AND IT DOES NOT MIGRATE. Those are different risks, and
 * collapsing them would make this command unrunnable in production. Adding a
 * missing page file cannot lose data; running migrations against a live
 * database is a decision with a maintenance window attached, and a command that
 * did it as a side effect of "update" would be one nobody dares run. So
 * migrations are REPORTED, in the imperative, and left to whoever owns the
 * deploy.
 *
 * IT NEVER TOUCHES PUBLISHED CONFIG either. `config/panel.php` belongs to the
 * application the moment it is published - it holds their abilities, their
 * templates, their tenancy decisions. New keys are reported by name so they can
 * be copied; overwriting the file would silently revert deliberate choices, and
 * the ones it would revert are exactly the ones that fail open.
 */
final class UpdateCommand extends Command
{
    protected $signature = 'panel:update
                            {--force : Replace page files you have edited}';

    protected $description = 'Reconcile page files, config and the agent guide after upgrading the package';

    public function handle(): int
    {
        $this->components->info('Updating PanelKit');

        $needsAttention = array_filter([
            $this->reconcilePages(),
            $this->reportPendingMigrations(),
            $this->refreshBlueprint(),
        ]);

        $this->newLine();

        if ($needsAttention === []) {
            $this->components->info('Up to date. Nothing needed changing.');
        } else {
            $this->components->warn('Finish the update:');

            foreach ($needsAttention as $line) {
                $this->line('  - '.$line);
            }
        }

        /*
         * DOCTOR LAST, AND ITS EXIT CODE IS THIS COMMAND'S. An upgrade is
         * exactly when a new check starts failing - a setting that was fine
         * under the old version and is not under this one. Reporting that
         * separately would make it optional; a deploy step that exits non-zero
         * is one somebody has to look at.
         */
        $this->newLine();
        $this->components->info('Running panel:doctor');

        return Artisan::call('panel:doctor', [], $this->output) === self::SUCCESS
            ? self::SUCCESS
            : self::FAILURE;
    }

    /**
     * Write page files for screens this version routes and the old one did not.
     *
     * THE WHOLE REASON THIS COMMAND EXISTS. A screen written here is one whose
     * route already answers - the PHP half upgraded with composer - and whose
     * component the client could not resolve until now.
     */
    private function reconcilePages(): ?string
    {
        $result = PanelPages::write((bool) $this->option('force'));

        if ($result['directory'] === null) {
            $this->components->warn('  no resources/js/pages directory - screens not written');

            return 'This is not an Inertia + Vue application yet, so no panel screens were written.';
        }

        if ($result['written'] === []) {
            $this->components->task('  page files already complete', fn () => true);

            return null;
        }

        $this->components->task(
            '  wrote '.count($result['written']).' new page file(s): '.implode(', ', $result['written']),
            fn () => true,
        );

        return 'Run your build (npm run build) - '.count($result['written'])
            .' new screen(s) were added and are not in the current bundle.';
    }

    /**
     * Say what is pending. Do not run it.
     *
     * NAMED, NOT COUNTED. "3 pending migrations" tells a deployer nothing about
     * whether this is a column default or a table rewrite on fifty million rows,
     * and the difference decides whether it happens now or at 2am.
     */
    private function reportPendingMigrations(): ?string
    {
        try {
            Artisan::call('migrate:status', ['--pending' => true]);
            $output = Artisan::output();
        } catch (\Throwable) {
            // A database this command cannot reach is not this command's
            // problem to solve, and not a reason to fail the file reconciliation
            // that already succeeded.
            return null;
        }

        $lines = array_values(array_filter(
            array_map(trim(...), explode("\n", $output)),
            static fn (string $line): bool => str_contains($line, 'Pending'),
        ));

        if ($lines === []) {
            $this->components->task('  no pending migrations', fn () => true);

            return null;
        }

        $this->components->warn('  '.count($lines).' pending migration(s):');

        foreach ($lines as $line) {
            $this->line('      '.$line);
        }

        return 'Run `php artisan migrate` when you are ready - this command deliberately does not.';
    }

    /**
     * The agent guide describes the version that is installed, or it misleads.
     *
     * It lists the fields, columns and screens the package ships, so after an
     * upgrade a stale copy is worse than none: it tells an agent that something
     * added this release does not exist, and the agent hand-rolls it in Vue.
     */
    private function refreshBlueprint(): ?string
    {
        try {
            $this->callSilently('panel:blueprint');
            $this->components->task('  refreshed AGENTS.md', fn () => true);

            return null;
        } catch (\Throwable $e) {
            $this->components->warn('  AGENTS.md not refreshed: '.$e->getMessage());

            return 'Run `php artisan panel:blueprint` - the agent guide still describes the previous version.';
        }
    }
}
