<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Widgets\StatWidget;

final class DemoConfigPanelPlugin extends Plugin
{
    public function id(): string
    {
        return 'tests/demo-plugin/page-and-widget-from-config';
    }

    public function appliesTo(Panel $panel): bool
    {
        return $panel->id === 'plugin-test-config';
    }

    /** @return list<string> */
    public static function panelIds(): ?array
    {
        return ['plugin-test-config'];
    }

    public function registerPages(Panel $panel): void
    {
        $this->pageClasses([
            DemoPluginPage::class,
        ]);
    }

    public function registerWidgets(Panel $panel): void
    {
        $this->widgets([
            StatWidget::make('demo-plugin-widget', 'Demo plugin widget')
                ->value(static fn (): int => 1),
        ]);
    }
}

