<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;

/** Registers DemoPluginPage on the fixture admin panel for boot-time route tests. */
final class DemoAdminPanelPlugin extends Plugin
{
    public function id(): string
    {
        return 'tests/demo-plugin/admin-page-route';
    }

    public function appliesTo(Panel $panel): bool
    {
        return $panel->id === 'admin';
    }

    public function registerPages(Panel $panel): void
    {
        $this->pageClasses([
            DemoPluginPage::class,
        ]);
    }
}
