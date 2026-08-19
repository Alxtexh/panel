<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;

/** Registers two Page classes that claim the same slug. */
final class DuplicatePagePlugin extends Plugin
{
    public function id(): string
    {
        return 'tests/demo-plugin/duplicate-page-slug';
    }

    public function appliesTo(Panel $panel): bool
    {
        return $panel->id === 'admin';
    }

    public function registerPages(Panel $panel): void
    {
        $this->pageClasses([
            DemoPluginPage::class,
            DuplicateDemoPluginPage::class,
        ]);
    }
}
