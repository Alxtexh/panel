<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Tests\Fixtures\Plugins\OutdatedContractPlugin;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\File;

final class MakePanelPluginCommandTest extends TestCase
{
    /** @var list<string> */
    private array $written = [];

    protected function tearDown(): void
    {
        foreach ($this->written as $path) {
            if (is_file($path)) {
                unlink($path);
            }

            $dir = dirname($path);

            if (is_dir($dir) && count(scandir($dir) ?: []) === 2) {
                rmdir($dir);
            }
        }

        parent::tearDown();
    }

    public function test_it_scaffolds_a_plugin_class_and_readme(): void
    {
        $classPath = app_path('Plugins/Acme/BillingPlugin.php');
        $readmePath = app_path('Plugins/Acme/README.md');
        $this->forget($classPath, $readmePath);

        $this->artisan('make:panel-plugin', ['name' => 'Acme/Billing', '--force' => true])
            ->assertSuccessful();

        $contents = File::get($classPath);

        $this->assertStringContainsString('namespace App\\Plugins\\Acme;', $contents);
        $this->assertStringContainsString('final class BillingPlugin extends Plugin', $contents);
        $this->assertStringContainsString("return 'acme/billing';", $contents);
        $this->assertStringContainsString('registerResources', $contents);
        $this->assertStringContainsString('registerRenderHooks', $contents);
        $this->assertStringNotContainsString('Livewire', $contents);
        $this->assertStringNotContainsString('—', $contents);

        $readme = File::get($readmePath);
        $this->assertStringContainsString(Plugin::CONTRACT_VERSION, $readme);
        $this->assertStringContainsString("'plugins' =>", $readme);
    }

    public function test_it_requires_vendor_and_name(): void
    {
        $this->artisan('make:panel-plugin', ['name' => 'BillingOnly'])
            ->assertFailed();
    }

    /** @param list<string> $paths */
    private function forget(string ...$paths): void
    {
        foreach ($paths as $path) {
            $this->written[] = $path;
            @unlink($path);
        }
    }
}
