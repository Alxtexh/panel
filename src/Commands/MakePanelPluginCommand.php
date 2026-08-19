<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Plugins\RenderHooks;

/**
 * php artisan make:panel-plugin Vendor/Name
 *
 * Scaffolds a first-party plugin class and a README beside it. Plugins are
 * loaded explicitly from config or Panel::plugins(), not by scanning.
 */
final class MakePanelPluginCommand extends Command
{
    protected $signature = 'make:panel-plugin
                            {name : Vendor/Name, e.g. Acme/Billing}
                            {--force : Overwrite existing files}';

    protected $description = 'Scaffold a Panel plugin class and README';

    public function handle(): int
    {
        try {
            [$vendor, $name] = $this->parseName((string) $this->argument('name'));
        } catch (\InvalidArgumentException $e) {
            $this->components->error($e->getMessage());

            return self::FAILURE;
        }

        $class = Str::studly($name).'Plugin';
        $id = Str::kebab($vendor).'/'.Str::kebab($name);
        $namespace = 'App\\Plugins\\'.Str::studly($vendor);
        $directory = app_path('Plugins/'.Str::studly($vendor));
        $classPath = $directory.'/'.$class.'.php';
        $readmePath = $directory.'/README.md';

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        if ((file_exists($classPath) || file_exists($readmePath)) && ! $this->option('force')) {
            $this->components->error('Plugin files already exist. Use --force to overwrite.');

            return self::FAILURE;
        }

        file_put_contents($classPath, $this->pluginStub($namespace, $class, $id));
        file_put_contents($readmePath, $this->readmeStub($vendor, $name, $namespace, $class, $id));

        $this->components->info("Created {$classPath}");
        $this->components->info("Created {$readmePath}");
        $this->newLine();
        $this->line('Register the plugin explicitly, for example:');
        $this->line("  config('panel.plugins') => [\\{$namespace}\\{$class}::class]");
        $this->line('  or Panel::make(\'admin\')->plugins([new \\'.$namespace.'\\'.$class.'()])');

        return self::SUCCESS;
    }

    /**
     * @return array{0: string, 1: string}
     */
    private function parseName(string $input): array
    {
        $input = trim(str_replace('\\', '/', $input), '/');

        if ($input === '' || ! str_contains($input, '/')) {
            throw new \InvalidArgumentException('Use Vendor/Name, for example Acme/Billing.');
        }

        [$vendor, $name] = array_map('trim', explode('/', $input, 2));

        if ($vendor === '' || $name === '') {
            throw new \InvalidArgumentException('Use Vendor/Name, for example Acme/Billing.');
        }

        return [$vendor, $name];
    }

    private function pluginStub(string $namespace, string $class, string $id): string
    {
        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace {$namespace};

        use Alxtexh\\Panel\\Panel;
        use Alxtexh\\Panel\\Plugins\\Plugin;
        use Alxtexh\\Panel\\Plugins\\RenderHooks;
        use Alxtexh\\Panel\\Widgets\\StatWidget;

        /**
         * Skeleton plugin for {$id}.
         *
         * Override the register* hooks below. Helpers such as resources(),
         * pageClasses(), widgets(), menuItem(), and render() are available
         * while register() runs on the Plugin base class.
         */
        final class {$class} extends Plugin
        {
            public function id(): string
            {
                return '{$id}';
            }

            public function appliesTo(Panel \$panel): bool
            {
                return parent::appliesTo(\$panel);
            }

            public function getVersion(): string
            {
                return self::CONTRACT_VERSION;
            }

            public function registerResources(Panel \$panel): void
            {
                // \$this->resources([
                //     ExampleResource::class,
                // ]);
            }

            public function registerPages(Panel \$panel): void
            {
                // \$this->pageClasses([
                //     ExamplePage::class,
                // ]);
            }

            public function registerWidgets(Panel \$panel): void
            {
                // \$this->widgets([
                //     StatWidget::make('example', 'Example')
                //         ->value(static fn (): int => 0),
                // ]);
            }

            public function registerMenuItems(Panel \$panel): void
            {
                // \$this->menuItem('Example', 'example', 'sparkles');
            }

            public function registerRenderHooks(Panel \$panel): void
            {
                // \$this->render(
                //     RenderHooks::DASHBOARD_BEFORE,
                //     'panel/plugins/ExampleBanner',
                //     ['message' => 'Hello from {$id}'],
                // );
            }
        }

        PHP;
    }

    private function readmeStub(
        string $vendor,
        string $name,
        string $namespace,
        string $class,
        string $id,
    ): string {
        $fqcn = "{$namespace}\\{$class}";

        $contract = Plugin::CONTRACT_VERSION;

        return <<<MD
        # {$vendor} {$name} plugin

        First-party Panel plugin scaffold for `{$id}`.

        ## Install

        1. Register the plugin explicitly (no auto-discovery):

           ```php
           // config/panel.php
           'plugins' => [
               \\{$fqcn}::class,
           ];
           ```

           Or on one panel:

           ```php
           Panel::make('admin')->plugins([
               new \\{$fqcn}(),
           ]);
           ```

        2. Implement the hooks in `{$class}.php`:

           - `registerResources()`
           - `registerPages()`
           - `registerWidgets()`
           - `registerMenuItems()`
           - `registerRenderHooks()`

        3. Run `php artisan panel:doctor` and confirm plugin compatibility.

        ## Contract

        - Plugin contract version: `{$contract}`
        - PanelKit ships the contract on `Alxtexh\\Panel\\Plugins\\Plugin::CONTRACT_VERSION`

        ## MVP limits

        - No marketplace packaging or auto-scanning
        - Vue/Inertia components must live in the host application
        - Plugins can only add through `PluginContext` (no panel mutation)

        MD;
    }
}
