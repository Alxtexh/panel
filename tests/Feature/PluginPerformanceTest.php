<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Plugins\CountingRegisterPlugin;
use Alxtexh\Panel\Tests\Fixtures\Plugins\LazyConstructPlugin;
use Alxtexh\Panel\Tests\TestCase;

final class PluginPerformanceTest extends TestCase
{
    protected function tearDown(): void
    {
        PanelManager::forgetPlugins();
        CountingRegisterPlugin::$registerCalls = 0;
        LazyConstructPlugin::$constructed = 0;

        parent::tearDown();
    }

    private function newPanel(string $id): Panel
    {
        return Panel::make($id)
            ->path($id)
            ->routeName($id)
            ->guard('web')
            ->middleware(['web'])
            ->authMiddleware(['auth:web'])
            ->context(Panel::CONTEXT_TENANT);
    }

    public function test_apply_plugins_is_idempotent_per_panel(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => [CountingRegisterPlugin::class]]);

        $panels = app(PanelManager::class);
        $panelId = 'counting-panel';
        $panels->registerPanel($this->newPanel($panelId));

        $panels->resourcesFor($panelId);
        $panels->pagesFor($panelId);
        $panels->panelPages($panelId);
        $panels->pluginRoutes($panelId);

        self::assertSame(1, CountingRegisterPlugin::$registerCalls);
        self::assertTrue($panels->pluginsAppliedFor($panelId));
    }

    public function test_empty_plugins_array_adds_no_plugin_overhead(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => []]);

        $panels = app(PanelManager::class);
        $panelId = 'empty-plugins';
        $panels->registerPanel($this->newPanel($panelId));

        $panels->resourcesFor($panelId);

        self::assertSame(0, LazyConstructPlugin::$constructed);
        self::assertSame(0, CountingRegisterPlugin::$registerCalls);
        self::assertTrue($panels->pluginsAppliedFor($panelId));
    }

    public function test_plugin_class_is_not_instantiated_for_another_panel(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => [LazyConstructPlugin::class]]);

        $panels = app(PanelManager::class);
        $panels->registerPanel($this->newPanel('other-panel'));

        $panels->resourcesFor('other-panel');

        self::assertSame(0, LazyConstructPlugin::$constructed);
    }

    public function test_plugin_class_instantiates_when_its_panel_is_used(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => [LazyConstructPlugin::class]]);

        $panels = app(PanelManager::class);
        $panels->registerPanel($this->newPanel('lazy-target'));

        $panels->resourcesFor('lazy-target');

        self::assertSame(1, LazyConstructPlugin::$constructed);
    }

    public function test_doctor_reports_missing_plugin_class(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => ['App\\Plugins\\Missing\\GhostPlugin']]);

        $this->artisan('panel:doctor', ['--json' => true])
            ->expectsOutputToContain('GhostPlugin')
            ->assertFailed();
    }
}
