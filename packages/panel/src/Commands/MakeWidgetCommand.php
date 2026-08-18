<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Alxtexh\Panel\PanelManager;

/**
 * php artisan make:panel-widget {Name} [--chart]
 *
 * Empty canvas: a class with `make()` returning StatWidget or ChartWidget.
 * Discovery picks it up from the panel's widget directory.
 */
final class MakeWidgetCommand extends Command
{
    protected $signature = 'make:panel-widget
                            {name : Widget class, e.g. OpenOrders}
                            {--chart : ChartWidget instead of StatWidget}
                            {--panel= : Panel id. Defaults to panel.default}
                            {--force : Overwrite an existing class}';

    protected $description = 'Create a panel widget (empty StatWidget or ChartWidget factory)';

    public function handle(): int
    {
        $name = Str::studly(str_replace(['Widget', '.php'], '', (string) $this->argument('name')));
        $class = $name.(str_ends_with($name, 'Widget') ? '' : 'Widget');
        $key = Str::kebab(str_replace('Widget', '', $class));
        $label = str(str_replace('Widget', '', $class))->headline()->value();

        try {
            $panel = $this->targetPanel();
        } catch (\RuntimeException $e) {
            $this->components->error($e->getMessage());

            return self::FAILURE;
        }

        $directory = app_path('Panel/Widgets');
        $path = $directory.'/'.$class.'.php';

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        if (file_exists($path) && ! $this->option('force')) {
            $this->components->error("{$path} already exists. Use --force to overwrite.");

            return self::FAILURE;
        }

        $chart = (bool) $this->option('chart');

        file_put_contents($path, $chart
            ? $this->chartStub($class, $key, $label, $panel)
            : $this->statStub($class, $key, $label, $panel));

        $this->components->info("Created {$path}");
        $this->line('  Register discovery:  ->discoverWidgets(app_path(\'Panel/Widgets\'))');
        $this->line('  Or return the widget from DashboardPage::stats() / charts() / tables().');

        return self::SUCCESS;
    }

    private function targetPanel(): string
    {
        $requested = $this->option('panel');
        $id = $requested !== null ? (string) $requested : (string) config('panel.default', 'admin');
        $panels = app(PanelManager::class)->panels();

        if ($requested !== null && ! array_key_exists($id, $panels)) {
            $known = $panels === [] ? 'none are registered' : implode(', ', array_keys($panels));

            throw new \RuntimeException("No panel [{$id}]. Registered: {$known}.");
        }

        return $id;
    }

    private function statStub(string $class, string $key, string $label, string $panel): string
    {
        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\Widgets;

        use Alxtexh\\Panel\\Widgets\\StatWidget;

        /**
         * Empty canvas. Fill in the value closure.
         *
         * Discovered when the panel calls discoverWidgets(), or return
         * {$class}::make() from DashboardPage::stats().
         */
        final class {$class}
        {
            public static function make(): StatWidget
            {
                return StatWidget::make('{$key}', '{$label}')
                    ->value(static fn (): int => 0);
            }
        }

        PHP;
    }

    private function chartStub(string $class, string $key, string $label, string $panel): string
    {
        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\Widgets;

        use Alxtexh\\Panel\\Widgets\\ChartWidget;

        /**
         * Empty canvas. Fill in the data closure.
         *
         * Discovered when the panel calls discoverWidgets(), or return
         * {$class}::make() from DashboardPage::charts().
         */
        final class {$class}
        {
            public static function make(): ChartWidget
            {
                return ChartWidget::make('{$key}', '{$label}')
                    ->type('line')
                    ->data(static fn (): array => [
                        'labels' => [],
                        'datasets' => [['label' => '{$label}', 'data' => []]],
                    ]);
            }
        }

        PHP;
    }
}
