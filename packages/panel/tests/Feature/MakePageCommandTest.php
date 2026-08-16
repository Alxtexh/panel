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
        $this->assertDoesNotMatchRegularExpression('/^\s*import\s+.+Directory/m', $vueContents);
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

    private function forget(string ...$paths): void
    {
        foreach ($paths as $path) {
            $this->written[] = $path;
            @unlink($path);
        }
    }
}
