<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Support\ConfigDrift;
use PanelKit\Panel\Support\PanelPages;
use PanelKit\Panel\Support\SchemaCache;
use Tests\TestCase;

/**
 * `panel:update` — the step that did not exist for the first two releases.
 *
 * 0.2.0 IS WHAT PROVED IT HAD TO. That release routed a permission matrix at
 * `settings/Roles`, and the page file Inertia needs to resolve it is written by
 * `panel:install` — which nobody re-runs after `composer update`. So a 0.1.0
 * installation that upgraded got a route the server answers happily, a component
 * the client cannot find, and a WHITE PAGE naming a file the developer has never
 * seen. Nothing in the upgrade told them to run anything.
 *
 * The test that matters is therefore not "the command runs". It is: delete the
 * page file a new version added, run the command, and prove it comes back.
 */
final class PanelUpdateTest extends TestCase
{
    use RefreshDatabase;

    private string $screen = 'settings/Roles';

    private function pagePath(): string
    {
        return resource_path('js/pages/'.$this->screen.'.vue');
    }

    /** THE UPGRADE, SIMULATED: the version routes a screen this app has no file for. */
    public function test_it_writes_a_page_file_a_new_version_added(): void
    {
        $path = $this->pagePath();
        $original = file_exists($path) ? file_get_contents($path) : null;

        unlink($path);
        $this->assertFileDoesNotExist($path, 'The fixture did not remove the page file.');

        try {
            Artisan::call('panel:update');

            $this->assertFileExists(
                $path,
                'panel:update left a routed screen with no page file - the white page it exists to prevent.',
            );

            $this->assertStringContainsString(
                '@panelkit/inertia/pages/'.$this->screen.'.vue',
                (string) file_get_contents($path),
                'The written file does not import the packaged component.',
            );
        } finally {
            // Put back exactly what was there - this app's shim carries a layout
            // the generated stub does not, and leaving the stub would quietly
            // change how the roles screen renders for every other test.
            if ($original !== null) {
                file_put_contents($path, $original);
            }
        }
    }

    /**
     * IT DOES NOT MIGRATE, and that is a promise rather than an omission.
     *
     * Adding a missing page file cannot lose data. Running migrations against a
     * live database is a decision with a maintenance window attached, and a
     * command that did it as a side effect of the word "update" is one nobody
     * would dare run on the machine where it matters.
     *
     * ASSERTED BY ROLLING ONE BACK, not by reading the output. Under
     * `RefreshDatabase` nothing is ever pending, so a test that looked for the
     * warning text was asserting a state this suite cannot reach - it would have
     * passed a command that silently ran `migrate` on every update.
     */
    public function test_it_does_not_apply_a_pending_migration(): void
    {
        Artisan::call('migrate:rollback', ['--step' => 1]);

        $after = DB::table('migrations')->count();

        Artisan::call('panel:update');

        $this->assertSame(
            $after,
            DB::table('migrations')->count(),
            'panel:update applied a migration. That is a maintenance-window decision, not a side effect of an update.',
        );
    }

    /** An installation that is already current is told so, not given busywork. */
    public function test_it_says_nothing_needed_changing_when_current(): void
    {
        $this->artisan('panel:update')
            ->expectsOutputToContain('page files already complete');
    }

    /**
     * THE GUIDE DESCRIBES THE INSTALLED VERSION, OR IT MISLEADS.
     *
     * AGENTS.md lists the fields, columns and screens that exist. After an
     * upgrade a stale copy is worse than none: it tells an agent that something
     * added this release does not exist, so the agent hand-rolls it in Vue.
     */
    public function test_it_refreshes_the_agent_guide(): void
    {
        $this->artisan('panel:update')
            ->expectsOutputToContain('refreshed AGENTS.md');
    }

    /** Every screen the package ships is one this command knows how to write. */
    public function test_it_covers_every_shipped_screen(): void
    {
        $this->assertContains($this->screen, PanelPages::SCREENS);
        $this->assertContains('ResourceIndex', PanelPages::SCREENS);
    }

    /**
     * THE SCHEMA CACHE IS INVALIDATED, because its fingerprint cannot notice.
     *
     * The fingerprint is computed from the resource class. A release that adds a
     * key to the payload changes neither that class nor its fingerprint, so
     * every cached schema keeps serving the OLD shape - to a client bundle that
     * was just rebuilt expecting the new one. The screen renders, missing a
     * control, in a successful 200.
     *
     * The manual sequence this command replaced had `panel:cache-clear` as its
     * first step. The command shipped without it, which is a worse failure than
     * forgetting a documented step: nobody is looking for a step the tool is
     * supposed to have taken.
     */
    public function test_it_invalidates_the_schema_cache(): void
    {
        $before = app(SchemaCache::class)->generation();

        $this->artisan('panel:update')
            ->expectsOutputToContain('invalidated the schema cache');

        $this->assertGreaterThan(
            $before,
            app(SchemaCache::class)->generation(),
            'panel:update left the schema cache intact, so resources may still serve the previous version.',
        );
    }

    /**
     * A PLUGIN THIS VERSION SHIPS AND A PUBLISHED CONFIG DOES NOT INSTALL.
     *
     * The merge is deliberately not a union for lists, so `plugins` stays
     * whatever the application published - and a plugin added to the packaged
     * default afterwards reaches nobody. That is how `TicketingPlugin` shipped
     * to a release of installations that could configure it and never see it.
     */
    public function test_a_plugin_the_published_config_lacks_is_reported(): void
    {
        $this->assertSame(
            ['Packaged\\NewPlugin'],
            ConfigDrift::pluginsNotSuppliedByMerge(
                ['plugins' => ['Packaged\\OldPlugin', 'Packaged\\NewPlugin']],
                ['plugins' => ['Packaged\\OldPlugin', 'Their\\OwnPlugin']],
            ),
        );
    }

    /**
     * A CONFIG THAT NEVER NAMES `plugins` IS NOT REPORTED, because the merge
     * supplies the packaged list whole - nothing is missing. Reporting it would
     * name every packaged plugin to somebody who has all of them, and a report
     * where most rows need nothing is one nobody reads to the end.
     */
    public function test_an_absent_plugins_key_is_left_alone(): void
    {
        $this->assertSame(
            [],
            ConfigDrift::pluginsNotSuppliedByMerge(
                ['plugins' => ['Packaged\\OnlyPlugin']],
                ['tenancy' => ['mode' => 'single']],
            ),
        );
    }

    /**
     * AND IT REPORTS RATHER THAN REWRITES. `config/panel.php` holds the
     * application's abilities, templates and tenancy decisions; the ones an
     * overwrite would revert are exactly the ones that fail open.
     */
    public function test_it_does_not_rewrite_published_config(): void
    {
        $path = config_path('panel.php');
        $before = (string) file_get_contents($path);

        Artisan::call('panel:update');

        $this->assertSame($before, (string) file_get_contents($path), 'panel:update rewrote config/panel.php.');
    }
}
