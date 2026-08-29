<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\File;

final class MakePageCommandTest extends TestCase
{
    /** @var list<string> */
    private array $written = [];

    protected function setUp(): void
    {
        parent::setUp();

        $pages = resource_path('js/pages');

        if (! is_dir($pages)) {
            mkdir($pages, 0755, true);
        }
    }

    protected function tearDown(): void
    {
        foreach ($this->written as $path) {
            if (is_file($path)) {
                unlink($path);
            }
        }

        parent::tearDown();
    }

    public function test_it_writes_an_empty_vue_canvas_with_a_catalog_import_comment(): void
    {
        $php = app_path('Panel/Pages/FooPage.php');
        $vue = resource_path('js/pages/Foo.vue');
        $this->forget($php, $vue);

        $this->artisan('make:panel-page', ['name' => 'Foo', '--force' => true])
            ->assertSuccessful();

        $this->assertFileExists($php);
        $this->assertFileExists($vue);

        $phpContents = File::get($php);
        $vueContents = File::get($vue);

        $this->assertStringContainsString('extends Page', $phpContents);
        $this->assertStringContainsString('return [];', $phpContents);

        $this->assertDoesNotMatchRegularExpression('/^\s*import\s+.+Catalog/m', $vueContents);
        $this->assertDoesNotMatchRegularExpression('/^\s*import\s+.+PlanGrid/m', $vueContents);
        $this->assertStringNotContainsString('PlanSetup', $vueContents);
        $this->assertStringContainsString("import { CatalogGrid } from '@alxtexh-enterprise/panel'", $vueContents);
        $this->assertStringContainsString("import { AppPageFooter } from '@alxtexh-enterprise/panel'", $vueContents);
        $this->assertDoesNotMatchRegularExpression('/^\s*import\s+.+AppPageFooter/m', $vueContents);
        $this->assertStringContainsString('from \'@inertiajs/vue3\'', $vueContents);
        $this->assertStringContainsString('<Head', $vueContents);
        $this->assertStringContainsString('pageHeading', $vueContents);
    }

    public function test_plan_setup_flag_does_not_bake_the_plan_ui(): void
    {
        $php = app_path('Panel/Pages/BillingPlansPage.php');
        $vue = resource_path('js/pages/BillingPlans.vue');
        $this->forget($php, $vue);

        $this->artisan('make:panel-page', [
            'name' => 'BillingPlans',
            '--plan-setup' => true,
            '--force' => true,
        ])->assertSuccessful();

        $vueContents = File::get($vue);

        $this->assertStringContainsString('extends PlanSetupPage', File::get($php));
        $this->assertDoesNotMatchRegularExpression('/^\s*import\s+.+PlanGrid/m', $vueContents);
        $this->assertDoesNotMatchRegularExpression('/^\s*import\s+.+PlanSetup/m', $vueContents);
        $this->assertStringNotContainsString("from '@alxtexh-enterprise/panel/pages/PlanSetup.vue'", $vueContents);
        $this->assertStringContainsString("import { PlanGrid, PlanEditor } from '@alxtexh-enterprise/panel'", $vueContents);
    }

    public function test_dashboard_flag_writes_an_empty_canvas(): void
    {
        $php = app_path('Panel/Pages/OverviewPage.php');
        $vue = resource_path('js/pages/Overview.vue');
        $this->forget($php, $vue);

        $this->artisan('make:panel-page', [
            'name' => 'Overview',
            '--dashboard' => true,
            '--force' => true,
        ])->assertSuccessful();

        $this->assertFileExists($vue);
        $this->assertStringContainsString('extends DashboardPage', File::get($php));
        $this->assertStringContainsString("return 'Overview';", File::get($php));

        $vueContents = File::get($vue);
        $this->assertDoesNotMatchRegularExpression('/^\s*import\s+.+StatCard/m', $vueContents);
        $this->assertStringContainsString("import { StatCard, ChartCard } from '@alxtexh-enterprise/panel'", $vueContents);
        $this->assertStringContainsString('<Head', $vueContents);
    }

    public function test_till_flag_writes_till_page_and_packaged_shim(): void
    {
        $php = app_path('Panel/Pages/PosPage.php');
        $vue = resource_path('js/pages/Pos.vue');
        $this->forget($php, $vue);

        $this->artisan('make:panel-page', [
            'name' => 'Pos',
            '--till' => true,
            '--force' => true,
        ])->assertSuccessful();

        $this->assertStringContainsString('extends TillPage', File::get($php));
        $this->assertStringContainsString("from '@alxtexh-enterprise/panel/pages/Till.vue'", File::get($vue));
    }

    public function test_device_preview_flag_writes_device_preview_page_and_shim(): void
    {
        $php = app_path('Panel/Pages/DevicesPage.php');
        $vue = resource_path('js/pages/Devices.vue');
        $this->forget($php, $vue);

        $this->artisan('make:panel-page', [
            'name' => 'Devices',
            '--device-preview' => true,
            '--force' => true,
        ])->assertSuccessful();

        $this->assertStringContainsString('extends DevicePreviewPage', File::get($php));
        $this->assertStringContainsString("from '@alxtexh-enterprise/panel/pages/DevicePreview.vue'", File::get($vue));
    }

    public function test_catalog_flag_writes_catalog_browser_page(): void
    {
        $php = app_path('Panel/Pages/ShopPage.php');
        $vue = resource_path('js/pages/Shop.vue');
        $this->forget($php, $vue);

        $this->artisan('make:panel-page', [
            'name' => 'Shop',
            '--catalog' => true,
            '--force' => true,
        ])->assertSuccessful();

        $this->assertStringContainsString('extends CatalogBrowserPage', File::get($php));
        $this->assertStringContainsString('CatalogGrid, CatalogBrowser', File::get($vue));
    }

    public function test_catalog_item_flag_writes_catalog_item_page(): void
    {
        $php = app_path('Panel/Pages/ShopItemPage.php');
        $vue = resource_path('js/pages/ShopItem.vue');
        $this->forget($php, $vue);

        $this->artisan('make:panel-page', [
            'name' => 'ShopItem',
            '--catalog-item' => true,
            '--force' => true,
        ])->assertSuccessful();

        $this->assertStringContainsString('extends CatalogItemPage', File::get($php));
        $this->assertStringContainsString('CatalogItemView', File::get($vue));
    }

    public function test_register_flag_writes_catalog_register_page(): void
    {
        $php = app_path('Panel/Pages/LedgerPage.php');
        $vue = resource_path('js/pages/Ledger.vue');
        $this->forget($php, $vue);

        $this->artisan('make:panel-page', [
            'name' => 'Ledger',
            '--register' => true,
            '--force' => true,
        ])->assertSuccessful();

        $this->assertStringContainsString('extends CatalogRegisterPage', File::get($php));
        $this->assertStringContainsString('CatalogRegister', File::get($vue));
    }

    public function test_signatures_flag_writes_signature_studio_page(): void
    {
        $php = app_path('Panel/Pages/SignPage.php');
        $vue = resource_path('js/pages/Sign.vue');
        $this->forget($php, $vue);

        $this->artisan('make:panel-page', [
            'name' => 'Sign',
            '--signatures' => true,
            '--force' => true,
        ])->assertSuccessful();

        $this->assertStringContainsString('extends SignatureStudioPage', File::get($php));
        $this->assertStringContainsString('SignatureStudio', File::get($vue));
    }

    private function forget(string ...$paths): void
    {
        foreach ($paths as $path) {
            $this->written[] = $path;
            @unlink($path);
        }
    }
}
