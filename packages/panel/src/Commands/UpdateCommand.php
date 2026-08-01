<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use PanelKit\Panel\Support\ConfigDrift;
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
            $this->invalidateSchemaCache(),
            $this->reconcilePages(),
            $this->reportPendingMigrations(),
            $this->reportUnmergeableConfigKeys(),
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
     * The cached schema does not know the package changed under it.
     *
     * THE FINGERPRINT IS COMPUTED FROM THE RESOURCE CLASS, not from the version
     * of the code that reads it. So a release that adds a key to the payload -
     * a new column property, a field gaining an option - leaves every resource
     * whose class did not change serving the OLD shape from cache, against a
     * client bundle that was just rebuilt to expect the new one. The result is a
     * screen missing a control, with no error anywhere: the response is a
     * successful 200 carrying last version's answer.
     *
     * The manual upgrade sequence in UPGRADING.md always had this as its first
     * step, and this command - written to replace that sequence - dropped it.
     * Bumping a generation counter is cheap and cannot lose anything, which is
     * why it belongs in an unattended update rather than in a list of steps
     * somebody has to remember.
     */
    private function invalidateSchemaCache(): ?string
    {
        try {
            $this->callSilently('panel:cache-clear');
            $this->components->task('  invalidated the schema cache', fn () => true);

            return null;
        } catch (\Throwable $e) {
            $this->components->warn('  schema cache not invalidated: '.$e->getMessage());

            return 'Run `php artisan panel:cache-clear` - resources may still serve the previous version\'s schema.';
        }
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
     * The config keys a new version added that `mergeConfigFrom` will NOT supply.
     *
     * THIS IS NARROWER THAN "NEW KEYS", deliberately. `mergeConfigFrom` is a
     * shallow merge: a top-level key absent from a published `config/panel.php`
     * still gets the package default, so naming those would be noise on every
     * upgrade. What the merge cannot rescue is a key added INSIDE an array the
     * application already publishes - the published `['env' => [...]]` wins
     * whole, and `env.editable` is simply not there.
     *
     * `config()` THEN READS THAT KEY AS UNSET. How bad this is depends on the
     * call site: one that passes its own default degrades quietly to it, and
     * one that does not gets null. The first case is merely invisible - the
     * value cannot be edited from the file that appears to hold it. The second
     * is silent and shaped like an ABSENT FEATURE: the screen the key enables
     * does not appear, nothing errors, and the reasonable conclusion - "this
     * version did not ship it" - is wrong. That is the same mistake a real
     * installation already reported about the page mechanism, arriving by a
     * different route.
     *
     * IT REPORTS AND DOES NOT WRITE. `config/panel.php` belongs to the
     * application the moment it is published; it holds their abilities, their
     * templates and their tenancy decisions, and the ones an overwrite would
     * revert are exactly the ones that fail open.
     */
    private function reportUnmergeableConfigKeys(): ?string
    {
        $published = base_path('config/panel.php');

        // Nothing published means every default applies. There is no drift to have.
        if (! is_file($published)) {
            return null;
        }

        try {
            $theirs = require $published;
            $ours = require __DIR__.'/../../config/panel.php';
        } catch (\Throwable) {
            return null;
        }

        if (! is_array($theirs) || ! is_array($ours)) {
            return null;
        }

        $missing = ConfigDrift::keysNotSuppliedByMerge($ours, $theirs);

        if ($missing === []) {
            $this->components->task('  config/panel.php has every key this version reads', fn () => true);

            return null;
        }

        $this->components->warn('  '.count($missing).' config key(s) missing from config/panel.php:');

        foreach ($missing as $key) {
            $this->line('      panel.'.$key);
        }

        return 'Copy the listed key(s) into config/panel.php from vendor/panelkit/panel/config/panel.php'
            .' - they sit inside arrays you publish, so `config()` reads them as unset'
            .' whatever the package file says.';
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
