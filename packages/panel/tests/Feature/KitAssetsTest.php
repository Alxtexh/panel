<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\KitAssets;
use Alxtexh\Panel\Tests\TestCase;

/**
 * First visit after panel:install must not depend on a Vite manifest.
 */
final class KitAssetsTest extends TestCase
{
    public function test_the_install_root_view_references_kit_dist_not_only_vite(): void
    {
        $stub = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/stubs/app.blade.php.stub'
        );

        $this->assertStringContainsString('KitAssets', $stub);
        $this->assertStringContainsString('vendor/panel', $stub);
        $this->assertStringContainsString('hostViteManifestExists', $stub);
        $this->assertStringNotContainsString("\n        @vite(['resources/js/app.ts'])\n        @inertiaHead", $stub);
    }

    public function test_kit_bundle_is_shipped_in_the_package(): void
    {
        $this->assertTrue(
            KitAssets::kitBundleExists(),
            'resources/client/dist/kit/app.js and app.css must ship so panel:install has CSS/JS without npm.',
        );
    }

    public function test_install_command_does_not_treat_npm_as_a_hard_fail(): void
    {
        $install = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/InstallCommand.php'
        );

        $this->assertStringContainsString('publishKitAssets', $install);
        $this->assertStringContainsString('optional', $install);
        $this->assertStringNotContainsString('Required next line (Filament publishes CSS; we need Vite once)', $install);
    }

    public function test_doctor_treats_published_kit_as_enough_without_npm(): void
    {
        $doctor = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/DoctorCommand.php'
        );

        $this->assertStringContainsString('KitAssets', $doctor);
        $this->assertStringContainsString('kit CSS/JS is missing', $doctor);
        $this->assertStringNotContainsString(
            'the client half is not installed - every panel screen will be blank',
            $doctor,
        );
    }

    public function test_doctor_checks_inertia_layout_wiring(): void
    {
        $doctor = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/DoctorCommand.php'
        );
        $wiring = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Support/InertiaLayoutWiring.php'
        );

        $this->assertStringContainsString('checkInertiaLayoutWiring', $doctor);
        $this->assertStringContainsString('checkSharePanelPropsWiring', $doctor);
        $this->assertStringContainsString('checkPanelLayoutShell', $doctor);
        $this->assertStringContainsString('layout: (name) =>', $wiring);
        $this->assertStringContainsString('assigns layout with ??= in resolve', $wiring);
    }

    public function test_published_kit_app_js_wires_default_layout(): void
    {
        $js = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/client/dist/kit/app.js'
        );

        $this->assertStringContainsString('PanelLayout', $js);
        $this->assertStringNotContainsString('page.default.layout', $js);
    }
}
