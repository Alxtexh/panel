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
        $this->assertStringContainsString('layout: (name) =>', $stub);
        $this->assertStringContainsString("name === 'settings/Index'", $stub);
        $this->assertStringContainsString("name.startsWith('settings/')", $stub);
        $this->assertStringContainsString('[PanelLayout, SettingsLayout]', $stub);
        $this->assertStringContainsString('return PanelLayout', $stub);
        $this->assertStringNotContainsString('page.default.layout ??=', $stub);
        $this->assertStringNotContainsString('—', $stub);
    }

    public function test_install_panel_layout_stub_forwards_breadcrumbs(): void
    {
        $stub = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/stubs/PanelLayout.vue.stub'
        );

        $this->assertStringContainsString('breadcrumbs', $stub);
        $this->assertStringContainsString(':breadcrumbs="breadcrumbs"', $stub);
        $this->assertStringContainsString('PanelShell', $stub);
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
        $this->assertStringContainsString('--no-user', $install);
        $this->assertStringContainsString('createFirstUser', $install);
        $this->assertStringContainsString('grants_all', $install);
    }

    public function test_demo_screens_are_optional_not_default(): void
    {
        foreach (['Catalog', 'PlanSetup', 'CatalogItem', 'CatalogRegister', 'Signatures', 'Till', 'DevicePreview', 'Mail', 'Chat'] as $screen) {
            $this->assertNotContains(
                $screen,
                PanelPages::SCREENS,
                "{$screen} must not ship on every install.",
            );
            $this->assertContains($screen, PanelPages::OPTIONAL_SCREENS);
        }

        $this->assertContains('Directory', PanelPages::SCREENS);
        $this->assertNotContains('Directory', PanelPages::OPTIONAL_SCREENS);

        foreach (['settings/Profile', 'settings/Security', 'settings/Notifications', 'settings/Organisation', 'settings/Index', 'PanelDashboard', 'ResourcePicker'] as $core) {
            $this->assertContains($core, PanelPages::SCREENS);
        }
    }

    public function test_install_writes_a_chrome_directory_without_merchandising(): void
    {
        $install = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/InstallCommand.php'
        );

        $this->assertStringContainsString('writeDirectory', $install);
        $this->assertStringContainsString('app/Panel/Pages/DirectoryPage.php', $install);
        $this->assertStringContainsString('No clients, routers, or catalog', $install);
        $this->assertStringNotContainsString('coffee', $install);
        $this->assertStringNotContainsString("'/clients'", $install);
        $this->assertStringNotContainsString("'/routers'", $install);
    }

    public function test_kit_directory_defaults_are_chrome_only(): void
    {
        $source = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Pages/DirectoryPage.php'
        );

        $this->assertStringContainsString('chromeSections', $source);
        $this->assertStringContainsString('panel::directory.links.settings', $source);
        $this->assertStringContainsString('panel::directory.links.users', $source);
        $this->assertStringContainsString('panel::directory.links.roles', $source);
        $this->assertStringContainsString('panel::directory.links.documents', $source);
        $this->assertStringContainsString('panel::directory.links.backups', $source);
        $this->assertStringContainsString('panel::directory.links.logs', $source);
        $this->assertStringContainsString('panel::directory.links.monitoring', $source);
        $this->assertStringContainsString('panel::directory.links.help', $source);
        $this->assertStringNotContainsString('Clients', $source);
        $this->assertStringNotContainsString('Routers', $source);
        $this->assertStringNotContainsString('coffee', $source);
    }

    public function test_auth_is_on_by_default_with_an_opt_out(): void
    {
        $install = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/InstallCommand.php'
        );

        $this->assertStringContainsString('{--no-auth', $install);
        $this->assertStringContainsString('shouldScaffoldAuth', $install);
        $this->assertStringContainsString('option(\'no-auth\')', $install);
        $this->assertStringContainsString('scaffoldAuth', $install);
        $auth = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/Concerns/ScaffoldsPanelAuth.php'
        );

        $this->assertStringContainsString('routes/panel-', $auth);
        $this->assertStringContainsString('PanelAuthController', $auth);
        $this->assertStringContainsString('.login', $auth);
        $this->assertStringContainsString('showLogin', $auth);
    }

    public function test_install_treats_npm_as_optional_and_publishes_kit_assets(): void
    {
        $install = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/InstallCommand.php'
        );

        $this->assertStringContainsString('publishKitAssets', $install);
        $this->assertStringContainsString('npm install && npm run build is optional', $install);
        $this->assertStringContainsString('public/vendor/panel', $install);
        $this->assertStringContainsString('panel:permissions', $install);
        $this->assertStringContainsString('syncPermissions', $install);
        $this->assertStringContainsString('wireSharePanelProps', $install);
        $this->assertStringNotContainsString('Add a `tenant_id` column', $install);
    }

    public function test_empty_sidebar_is_the_no_user_path_not_the_default(): void
    {
        $install = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/InstallCommand.php'
        );

        $this->assertStringContainsString('Without a first user (`--no-user`) the sidebar is empty', $install);
        $this->assertStringContainsString('deny-by-default, not a broken install', $install);
        $this->assertStringContainsString('make:panel-recipe Invoices', $install);
        $this->assertStringContainsString('Get started card', $install);
    }

    public function test_published_tenancy_default_is_none(): void
    {
        $config = (string) file_get_contents(
            dirname(__DIR__, 2).'/config/panel.php'
        );

        $this->assertStringContainsString("env('PANEL_TENANCY_MODE', 'none')", $config);
        $this->assertStringNotContainsString("env('PANEL_TENANCY_MODE', 'column')", $config);
    }

    public function test_install_help_names_the_filament_gap_flags(): void
    {
        $this->artisan('panel:install', ['--help' => true])
            ->expectsOutputToContain('--no-auth')
            ->expectsOutputToContain('--no-user')
            ->expectsOutputToContain('--name')
            ->expectsOutputToContain('--email')
            ->expectsOutputToContain('--password')
            ->assertSuccessful();
    }
}
