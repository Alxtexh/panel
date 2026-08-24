<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Alxtexh\Panel\Support\ConfigDrift;
use Alxtexh\Panel\Support\PanelPages;

/**
 * What to run after `composer update alxtexh-enterprise/panel`.
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
        $this->components->info('Updating Alxtexhpanel');

        $needsAttention = array_filter([
            $this->invalidateSchemaCache(),
            $this->reconcilePages(),
            $this->repointStylesheet(),
            $this->reportPendingMigrations(),
            $this->reportUninstalledPlugins(),
            $this->refreshBlueprint(),
        ]);

        $this->newLine();

        if ($needsAttention === []) {
            $this->components->info('Up to date. Page files, blueprint, and schema cache are current.');
        } else {
            $this->components->warn('Finish the update:');

            foreach ($needsAttention as $line) {
                $this->line('  - '.$line);
            }
        }

        $this->newLine();
        $this->line('  Next: keep app.ts layout, keep appearance-prepaint above CSS,');
        $this->line('  use PanelKit APIs only (no Filament Livewire verbs), then trust doctor.');

        /*
         * DOCTOR LAST, AND ITS EXIT CODE IS THIS COMMAND'S. An upgrade is
         * exactly when a new check starts failing - a setting that was fine
         * under the old version and is not under this one. Reporting that
         * separately would make it optional; a deploy step that exits non-zero
         * is one somebody has to look at.
         */
        $this->newLine();
        $this->components->info('Running panel:doctor (exit code is this command\'s)');

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
     * Point the stylesheet's `@source` lines at the package's current name.
     *
     * THE ONE UPGRADE STEP NOBODY WOULD FIND, and it has now been needed twice.
     * 0.8.0 merged `@alxtexhpanel/ui` and `@alxtexhpanel/inertia` into `@alxtexh-enterprise/panel`;
     * 0.9.0 renamed that to `@alxtexh-enterprise/panel`, because a package on
     * GitHub Packages must be scoped to an organisation you own and `alxtexhpanel`
     * was taken.
     *
     * A RENAME IS NORMALLY A FIND-AND-REPLACE THE BUILD TELLS YOU ABOUT. These
     * two lines are different: they are strings inside a CSS file, nothing
     * resolves them, and a stale one is not an error. Tailwind scans a directory
     * that no longer exists, finds no class names, and PURGES every utility used
     * only inside the packaged screens. The panel renders - with no layout, no
     * colour and no spacing, and a clean build log.
     *
     * IT REWRITES RATHER THAN APPENDS, so a file already repointed is left alone
     * and running this twice changes nothing. Each old path is matched exactly,
     * including the differing tails - `ui` was scanned at `dist` and `inertia`
     * at `src` - because a looser match would rewrite a line somebody added.
     *
     * BOTH HOPS ARE LISTED, not just the latest. An installation that skipped
     * 0.8.x goes from the two original packages straight to the current name in
     * one run; ordering matters only in that the longest match must come first,
     * which `str_replace` over an ordered map gives.
     */
    private function repointStylesheet(): ?string
    {
        $target = resource_path('css/app.css');

        if (! file_exists($target)) {
            return null;
        }

        $current = (string) file_get_contents($target);

        $moved = [
            '@alxtexhpanel/ui/dist' => '@alxtexh-enterprise/panel/dist',
            '@alxtexhpanel/inertia/src' => '@alxtexh-enterprise/panel/inertia',
            '@alxtexh-enterprise/panel' => '@alxtexh-enterprise/panel',
        ];

        $updated = str_replace(array_keys($moved), array_values($moved), $current);

        if ($updated === $current) {
            return null;
        }

        file_put_contents($target, $updated);

        $this->components->task(
            '  repointed the @source lines at @alxtexh-enterprise/panel',
            fn () => true,
        );

        return 'Run your build (npm run build) - the stylesheet now scans the merged package.';
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
     * A PLUGIN THIS VERSION SHIPS THAT A PUBLISHED CONFIG DOES NOT INSTALL.
     *
     * `ConfigMerge` now merges the package's config into a published one key by
     * key, so a setting added inside `auth` or `tenancy` arrives on its own and
     * there is nothing to report about it. WHAT IT DELIBERATELY DOES NOT MERGE
     * IS A LIST: an application that cut `abilities` to the four it uses
     * configured that key, and unioning the package's back in would reinstall a
     * plugin somebody removed on purpose.
     *
     * So `plugins` is the one place an upgrade can still hand you something you
     * never receive - which is not hypothetical. `TicketingPlugin` shipped in
     * the package for a release and was registered nowhere: somebody set
     * `panel.ticketing.operator`, reloaded, and got no route, no navigation
     * entry and no error.
     *
     * IT REPORTS AND DOES NOT WRITE. `config/panel.php` belongs to the
     * application the moment it is published; it holds their abilities, their
     * templates and their tenancy decisions, and the ones an overwrite would
     * revert are exactly the ones that fail open. Here it is also the only
     * correct behaviour: an absent plugin may be a removal, and only the
     * installation knows which.
     */
    private function reportUninstalledPlugins(): ?string
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

        $missing = ConfigDrift::pluginsNotSuppliedByMerge($ours, $theirs);

        if ($missing === []) {
            $this->components->task('  config/panel.php installs every plugin this version ships', fn () => true);

            return null;
        }

        $this->components->warn('  '.count($missing).' plugin(s) this version ships are not installed:');

        foreach ($missing as $class) {
            $this->line('      '.$class);
        }

        return 'Add the listed plugin(s) to the `plugins` array in config/panel.php, or ignore this'
            .' if you removed them on purpose - your list wins whole, so the package cannot tell'
            .' a deliberate removal from a version you published before it existed.';
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
