<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Plugins\DemoPlugin;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Packages that install screens into somebody else's panel.
 *
 * REGISTERED IS NOT THE SAME QUESTION AS APPLIES, and conflating them is a
 * mistake this codebase has already paid for. A plugin named in the default
 * `plugins` list is registered on EVERY installation - so its `appliesTo` is
 * the only thing between "shipped in the box" and "live on a fresh install".
 * `AnnouncementsPlugin` checked only which panel was the default, which is true
 * of every fresh install's admin panel, and its CRUD screen plus an `/api/v1`
 * endpoint arrived with no configuration touched at all.
 *
 * THE PANEL DECIDES, NOT THE PLUGIN'S PRESENCE. `appliesTo` receives the panel,
 * so a plugin can install into one portal and not another - which is required
 * rather than decorative: a resource key is a URL segment and an ability name,
 * both globally unique, so the same resource class cannot be installed twice.
 */
final class PluginTest extends TestCase
{
    use RefreshDatabase;

    private function manager(): PanelManager
    {
        return app(PanelManager::class);
    }

    /**
     * THE GATE IS ASSERTED AT ITS DECISION POINT, not through the registry.
     *
     * `applyPlugins` is memoised per panel and has already run by the time a
     * test method starts - a plugin handed to the manager afterwards is simply
     * too late, which is correct for a framework whose panels are declared in
     * providers. So `appliesTo` is called directly: it is the whole gate, and
     * asserting it here means the test measures the decision rather than the
     * lifecycle around it.
     */
    public function test_a_gated_plugin_declines_until_it_is_enabled(): void
    {
        config(['tests.demo_plugin.enabled' => false]);

        $this->assertFalse(
            (new DemoPlugin)->appliesTo($this->manager()->panel('admin')),
            'A plugin applied while its gate was off.',
        );
    }

    public function test_a_gated_plugin_applies_once_enabled(): void
    {
        config(['tests.demo_plugin.enabled' => true]);

        $this->assertTrue((new DemoPlugin)->appliesTo($this->manager()->panel('admin')));
    }

    /**
     * IT APPLIES TO THE PANEL IT NAMED AND NO OTHER.
     *
     * The second portal exists in this fixture host, so the negative half is
     * assertable rather than assumed. It is required rather than decorative: a
     * resource key is a URL segment AND an ability name, both globally unique,
     * so the same resource class cannot be installed into two portals.
     */
    public function test_a_plugin_does_not_reach_a_panel_it_did_not_name(): void
    {
        config(['tests.demo_plugin.enabled' => true]);

        $this->assertFalse(
            (new DemoPlugin)->appliesTo($this->manager()->panel('second')),
            'A plugin applied to a panel it never named.',
        );
    }

    /**
     * A PLUGIN WITH NO GATE APPLIES EVERYWHERE, which is the default and the
     * trap. `Plugin::appliesTo` returns true unless overridden, so being in
     * the `plugins` list IS being live - the distinction `AnnouncementsPlugin`
     * missed.
     */
    public function test_the_base_class_applies_to_every_panel_by_default(): void
    {
        $ungated = new class extends \Alxtexh\Panel\Plugins\Plugin
        {
            public function register(\Alxtexh\Panel\Plugins\PluginContext $context): void {}
        };

        $this->assertTrue($ungated->appliesTo($this->manager()->panel('admin')));
        $this->assertTrue($ungated->appliesTo($this->manager()->panel('second')));
    }

    /**
     * THE PACKAGED ANNOUNCEMENTS PLUGIN IS OFF UNLESS ASKED FOR.
     *
     * This is the one that was wrong. It shipped in the default `plugins` list
     * and checked only which panel was default - true of every fresh install's
     * admin panel - so a `composer require` produced a CRUD screen, its routes
     * and an `/api/v1/announcements` endpoint nobody had chosen.
     *
     * ASSERTED AGAINST THE REAL PLUGIN, not a fixture, because the fixture
     * cannot go wrong in the way this did: the bug was in a class that looked
     * correctly gated beside `TicketingPlugin`, which was.
     */
    public function test_the_packaged_announcements_plugin_is_off_by_default(): void
    {
        config(['panel.announcements.enabled' => null]);

        $this->assertFalse(
            (new \Alxtexh\Panel\Alerts\AnnouncementsPlugin)->appliesTo($this->manager()->panel('admin')),
            'Announcements installed a screen and an API endpoint with no configuration.',
        );
    }

    public function test_the_announcements_plugin_applies_once_enabled(): void
    {
        config(['panel.announcements.enabled' => true]);

        $this->assertTrue(
            (new \Alxtexh\Panel\Alerts\AnnouncementsPlugin)->appliesTo($this->manager()->panel('admin')),
        );
    }

    /**
     * AND ONLY TO THE DEFAULT PANEL, even when enabled.
     *
     * A resource key is a URL segment and an ability name, both globally
     * unique, so the same class cannot install into two portals.
     */
    public function test_the_announcements_plugin_stays_out_of_other_panels(): void
    {
        config(['panel.announcements.enabled' => true]);

        $this->assertFalse(
            (new \Alxtexh\Panel\Alerts\AnnouncementsPlugin)->appliesTo($this->manager()->panel('second')),
        );
    }

    /**
     * A PLUGIN CARRIES AN ID, so an installation can say which one it means.
     *
     * Vendor-prefixed by convention, because two packages will eventually both
     * want to be called "reports".
     */
    public function test_a_plugin_reports_an_id(): void
    {
        $this->assertSame('tests/demo', (new DemoPlugin)->id());
    }
}
