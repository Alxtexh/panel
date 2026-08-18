<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\PanelPages;
use Alxtexh\Panel\Tests\TestCase;

/**
 * Fresh-install completeness: empty chrome, settings shell, no demo screens.
 */
final class EmptyCoreInstallTest extends TestCase
{
    public function test_install_app_ts_stub_nests_settings_layout(): void
    {
        $stub = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/stubs/app.ts.stub'
        );

        $this->assertStringContainsString("from '@alxtexh-enterprise/panel/inertia'", $stub);
        $this->assertStringContainsString('SettingsLayout', $stub);
        $this->assertStringContainsString("name === 'settings/Index'", $stub);
        $this->assertStringContainsString("name.startsWith('settings/')", $stub);
        $this->assertStringContainsString('[PanelLayout, SettingsLayout]', $stub);
        $this->assertStringNotContainsString('—', $stub);
    }

    public function test_install_dashboard_is_an_empty_canvas(): void
    {
        $install = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/InstallCommand.php'
        );

        $this->assertStringContainsString('EMPTY ON PURPOSE', $install);
        $this->assertStringNotContainsString('Open orders', $install);
        $this->assertStringNotContainsString('Revenue over time', $install);
        $this->assertStringNotContainsString("type('catalog')", $install);
        $this->assertStringNotContainsString('function shortcuts()', $install);
        $this->assertStringContainsString('return [', $install);
        $this->assertStringNotContainsString('givePermissionTo', $install);
        $this->assertStringNotContainsString('grantsEverything', $install);
        $this->assertStringContainsString('does not grant every ability', $install);
    }

    public function test_demo_screens_are_optional_not_default(): void
    {
        foreach (['Catalog', 'PlanSetup', 'CatalogItem', 'CatalogRegister', 'Signatures', 'Directory'] as $screen) {
            $this->assertNotContains(
                $screen,
                PanelPages::SCREENS,
                "{$screen} must not ship on every install.",
            );
            $this->assertContains($screen, PanelPages::OPTIONAL_SCREENS);
        }

        foreach (['settings/Profile', 'settings/Security', 'settings/Organisation', 'settings/Index', 'PanelDashboard'] as $core) {
            $this->assertContains($core, PanelPages::SCREENS);
        }
    }
}
