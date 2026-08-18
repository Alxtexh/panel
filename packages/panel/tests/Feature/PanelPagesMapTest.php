<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;

/**
 * PANEL_PAGES must list every packaged screen Inertia can resolve by name.
 */
final class PanelPagesMapTest extends TestCase
{
    private const INDEX = __DIR__.'/../../resources/client/inertia/index.ts';

    /**
     * @return list<string>
     */
    private function mappedScreens(): array
    {
        $index = (string) file_get_contents(self::INDEX);
        preg_match_all("/^\s*'?([A-Za-z0-9\/]+)'?\s*:\s*\(\)\s*=>\s*import/m", $index, $matches);

        return $matches[1] ?? [];
    }

    public function test_panel_pages_includes_onboarding(): void
    {
        $this->assertContains('Onboarding', $this->mappedScreens());
    }

    public function test_panel_pages_includes_new_kit_screens(): void
    {
        foreach (['Till', 'DevicePreview', 'Mail', 'Chat'] as $screen) {
            $this->assertContains($screen, $this->mappedScreens(), "{$screen} must be in PANEL_PAGES.");
        }
    }

    public function test_panel_pages_exports_ticket_analysis(): void
    {
        $index = (string) file_get_contents(self::INDEX);

        $this->assertStringContainsString("./pages/TicketAnalysis.vue", $index);
        $this->assertStringContainsString('export { default as TicketAnalysis }', $index);
    }
}
