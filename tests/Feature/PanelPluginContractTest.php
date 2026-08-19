<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Plugins\DemoConfigPanelPlugin;
use Alxtexh\Panel\Tests\Fixtures\Plugins\DemoPanelPluginsMethod;
use Alxtexh\Panel\Tests\TestCase;

final class PanelPluginContractTest extends TestCase
{
    private function newPanel(string $id): Panel
    {
        return Panel::make($id)
            /*
             * Keep these panels off the root path.
             *
             * Some other features infer which panel owns a URL by choosing the
             * longest matching `Panel::getPath()` prefix. A root-path panel would
             * compete with the fixture `admin` panel and affect unrelated tests.
             */
            ->path($id)
            ->routeName($id)
            ->guard('web')
            ->middleware(['web'])
            ->authMiddleware(['auth:web'])
            ->context(Panel::CONTEXT_TENANT);
    }

    public function test_plugins_from_config_register_dummy_page_and_widget(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => [DemoConfigPanelPlugin::class]]);

        $panels = app(PanelManager::class);
        $panelId = 'plugin-test-config';

        $panels->registerPanel($this->newPanel($panelId));

        $pages = $panels->panelPages($panelId);

        $hrefs = array_map(static fn (array $p): string => (string) ($p['href'] ?? ''), $pages);

        self::assertTrue(array_any(
            $hrefs,
            static fn (string $href): bool => str_ends_with($href, '/demo-plugin'),
        ));

        $panel = $panels->panel($panelId);
        self::assertNotNull($panel);

        $keys = array_map(static fn ($w): string => (string) $w->toArray()['key'], $panel->getWidgets());

        self::assertContains('demo-plugin-widget', $keys);
    }

    public function test_plugins_from_panel_plugins_method_register_dummy_page_and_widget(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => []]);

        $panels = app(PanelManager::class);
        $panelId = 'plugin-test-panel';

        $panel = $this->newPanel($panelId);
        $panel->plugins([new DemoPanelPluginsMethod()]);
        $panels->registerPanel($panel);

        $pages = $panels->panelPages($panelId);

        $hrefs = array_map(static fn (array $p): string => (string) ($p['href'] ?? ''), $pages);
        self::assertTrue(array_any(
            $hrefs,
            static fn (string $href): bool => str_ends_with($href, '/demo-plugin'),
        ));

        $keys = array_map(static fn ($w): string => (string) $w->toArray()['key'], $panel->getWidgets());

        self::assertContains('demo-plugin-widget', $keys);
    }
}

