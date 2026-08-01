<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Support\PanelPages;
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
}
