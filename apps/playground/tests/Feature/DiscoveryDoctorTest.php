<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Panel\Resources\ClientResource;
use Illuminate\Support\Facades\Artisan;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Support\Discovery;
use PanelKit\Panel\Support\PanelPages;
use Tests\TestCase;

/**
 * The two remaining ways a screen 404s while looking like unwritten code.
 *
 * BOTH REPORTED FROM A REAL PORT. `panel.discover` was pointed one directory
 * too high, so discovery globbed a tree whose namespaces did not match and
 * registered NOTHING without saying so; `discover_pages` was absent from a
 * published config entirely. Separately, a packaged screen whose page file was
 * never mirrored into `resources/js/pages` routes fine and renders blank,
 * because Inertia resolves components by globbing that directory.
 *
 * WHAT MAKES THESE HARD IS THAT THE SYMPTOM POINTS AWAY FROM THE CAUSE. A 404
 * on a resource you just wrote is indistinguishable from code you have not
 * finished, so the reasonable next move is to go and read the code - which is
 * where an hour goes, twice, per the report.
 */
final class DiscoveryDoctorTest extends TestCase
{
    /**
     * THIS APPLICATION HAS NO ORPHANS, which is the assertion that fails when
     * somebody adds a resource to a directory nothing scans.
     */
    public function test_every_resource_on_disk_is_registered(): void
    {
        $orphans = Discovery::unregistered(
            app_path(),
            app()->getNamespace(),
            Resource::class,
            array_values(app(PanelManager::class)->resources()),
        );

        $this->assertSame([], $orphans, 'A resource exists that no panel routes.');
    }

    /**
     * AND THE SCAN IS NOT VACUOUSLY EMPTY.
     *
     * The test above passes just as happily against a scanner that finds
     * nothing at all - which is precisely the failure being checked for, one
     * level up. Handing it an EMPTY registry must therefore surface the real
     * resources this application has.
     */
    public function test_the_scan_finds_real_classes(): void
    {
        $found = Discovery::unregistered(app_path(), app()->getNamespace(), Resource::class, []);

        $this->assertContains(
            ClientResource::class,
            $found,
            'The scanner reports nothing even with nothing registered, so it can never report anything.',
        );
    }

    /**
     * A CLASS REGISTERED BY SOMETHING OTHER THAN DISCOVERY IS NOT AN ORPHAN.
     *
     * Comparing disk against CONFIG would report a plugin's resource, or one
     * installed by an explicit `registerResources()` call, as unreachable while
     * it serves happily - and a report with a false line in it is one people
     * stop reading. Comparing disk against the REGISTRY cannot make that
     * mistake, and this pins the distinction.
     */
    public function test_a_registered_class_is_never_reported(): void
    {
        $found = Discovery::unregistered(
            app_path(),
            app()->getNamespace(),
            Resource::class,
            [ClientResource::class],
        );

        $this->assertNotContains(ClientResource::class, $found);
    }

    /* --------------------------------------------------- the page mirrors */

    public function test_every_packaged_screen_has_a_page_file(): void
    {
        $this->assertSame(
            [],
            PanelPages::missing(),
            'A packaged screen has no page file, so its route renders blank. Run panel:update.',
        );
    }

    /**
     * AND A MISSING ONE IS REPORTED BY DOCTOR, not merely by the helper.
     *
     * The file is moved aside and put back in a `finally`, because it is a real
     * file in this application - the same rule the generator test learned the
     * hard way, having deleted a real resource twice.
     */
    public function test_doctor_reports_a_screen_with_no_page_file(): void
    {
        $screen = PanelPages::SCREENS[0];
        $path = resource_path('js/pages/'.$screen.'.vue');
        $held = (string) file_get_contents($path);

        try {
            unlink($path);

            $this->assertContains($screen, PanelPages::missing());

            Artisan::call('panel:doctor', ['--json' => true]);

            $this->assertStringContainsString(
                'have no page file',
                Artisan::output(),
                'Doctor is silent about a screen Inertia cannot resolve.',
            );
        } finally {
            file_put_contents($path, $held);
        }
    }
}
