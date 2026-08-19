<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\File;

final class MakeWidgetCommandTest extends TestCase
{
    /** @var list<string> */
    private array $written = [];

    protected function tearDown(): void
    {
        foreach ($this->written as $path) {
            if (is_file($path)) {
                unlink($path);
            }
        }

        parent::tearDown();
    }

    public function test_it_writes_an_empty_stat_widget(): void
    {
        $path = app_path('Panel/Widgets/OpenOrdersWidget.php');
        $this->forget($path);

        $this->artisan('make:panel-widget', ['name' => 'OpenOrders', '--force' => true])
            ->assertSuccessful();

        $contents = File::get($path);

        $this->assertStringContainsString('StatWidget::make', $contents);
        $this->assertStringContainsString('Empty canvas', $contents);
        $this->assertStringNotContainsString('Livewire', $contents);
        $this->assertStringNotContainsString('—', $contents);
        $this->assertStringNotContainsString('–', $contents);
    }

    public function test_chart_flag_writes_a_chart_widget(): void
    {
        $path = app_path('Panel/Widgets/RevenueWidget.php');
        $this->forget($path);

        $this->artisan('make:panel-widget', ['name' => 'Revenue', '--chart' => true, '--force' => true])
            ->assertSuccessful();

        $contents = File::get($path);

        $this->assertStringContainsString('ChartWidget::make', $contents);
        $this->assertStringContainsString("type('line')", $contents);
        $this->assertStringNotContainsString('Livewire', $contents);
    }

    private function forget(string ...$paths): void
    {
        foreach ($paths as $path) {
            $this->written[] = $path;
            @unlink($path);
        }
    }
}
