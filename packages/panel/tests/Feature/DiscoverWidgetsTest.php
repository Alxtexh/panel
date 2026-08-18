<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Widgets\RecentPostsWidget;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\TableWidget;
use Illuminate\Support\Facades\File;

final class DiscoverWidgetsTest extends TestCase
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

    public function test_discover_widgets_loads_a_table_widget_factory(): void
    {
        $panel = app(PanelManager::class)->panel('admin');
        $panel->discoverWidgets(
            dirname(__DIR__).'/Fixtures/Widgets',
            'Alxtexh\\Panel\\Tests\\Fixtures\\Widgets',
        );

        $this->assertTrue(class_exists(RecentPostsWidget::class));

        $tables = array_values(array_filter(
            $panel->getWidgets(),
            static fn ($w): bool => $w instanceof TableWidget,
        ));

        $this->assertNotEmpty($tables);
        $this->assertSame('recent', $tables[0]->key);
        $this->assertSame(3, $tables[0]->toArray()['limit']);
    }

    public function test_one_argument_infers_the_app_namespace(): void
    {
        $directory = app_path('Panel/Widgets');
        $path = $directory.'/InferredStatWidget.php';

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        $this->written[] = $path;
        File::put($path, <<<'PHP'
        <?php

        namespace App\Panel\Widgets;

        use Alxtexh\Panel\Widgets\StatWidget;

        final class InferredStatWidget
        {
            public static function make(): StatWidget
            {
                return StatWidget::make('inferred', 'Inferred')->value(static fn (): int => 1);
            }
        }
        PHP);

        require_once $path;

        $panel = app(PanelManager::class)->panel('admin');
        $panel->discoverWidgets($directory);

        $keys = array_map(static fn ($w): string => $w->key, $panel->getWidgets());

        $this->assertContains('inferred', $keys);
    }

    public function test_generated_panel_provider_wires_discover_widgets(): void
    {
        $provider = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/MakePanelCommand.php'
        );

        $this->assertStringContainsString('discoverWidgets', $provider);
        $this->assertStringContainsString("app_path('Panel/{\$studly}/Widgets')", $provider);
    }
}
