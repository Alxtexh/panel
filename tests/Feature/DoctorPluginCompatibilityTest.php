<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Plugins\OutdatedContractPlugin;
use Alxtexh\Panel\Tests\TestCase;

final class DoctorPluginCompatibilityTest extends TestCase
{
    /** @var list<string> */
    private array $originalPlugins = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->originalPlugins = (array) config('panel.plugins', []);
    }

    protected function tearDown(): void
    {
        config(['panel.plugins' => $this->originalPlugins]);
        PanelManager::forgetPlugins();

        parent::tearDown();
    }

    public function test_doctor_reports_plugin_contract_mismatch(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => [OutdatedContractPlugin::class]]);

        $this->artisan('panel:doctor', ['--json' => true])
            ->expectsOutputToContain('OutdatedContractPlugin')
            ->assertFailed();
    }

    public function test_production_profile_runs_plugin_compatibility_check(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => [OutdatedContractPlugin::class]]);

        $this->artisan('panel:doctor', ['--profile' => 'production', '--json' => true])
            ->expectsOutputToContain('OutdatedContractPlugin')
            ->assertFailed();
    }
}
