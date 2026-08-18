<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;

/**
 * The command palette must index `panelPages`, not only `panelNav`.
 */
final class CommandPalettePanelPagesTest extends TestCase
{
    private const PALETTE = __DIR__.'/../../resources/client/inertia/components/shell/PanelCommandPalette.vue';

    public function test_command_palette_indexes_panel_pages(): void
    {
        $source = (string) file_get_contents(self::PALETTE);

        $this->assertStringContainsString('panelNav', $source);
        $this->assertStringContainsString('panelPages', $source);
        $this->assertStringContainsString('!seen.has(item.href)', $source);
    }
}
