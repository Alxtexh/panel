<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Alxtexh\Panel\PanelManager;

/**
 * Scaffold a product module: a `$module` page (or resource) plus the
 * `Module::make` registration snippet. Not an nwidart module tree.
 *
 *     php artisan make:panel-module campaigns
 */
final class MakeModuleCommand extends Command
{
    protected $signature = 'make:panel-module
                            {key : Module key, e.g. campaigns}
                            {--resource : Write a resource stub instead of a page (needs a model of the same name)}
                            {--panel= : The panel this screen belongs to. Defaults to panel.default}
                            {--force : Overwrite an existing class or component}';

    protected $description = 'Create a plan-gated panel module (Module::make snippet plus a $module screen)';

    public function handle(): int
    {
        $key = Str::kebab((string) $this->argument('key'));

        if ($key === '') {
            $this->components->error('A module key is required, e.g. campaigns.');

            return self::FAILURE;
        }

        try {
            $panel = $this->targetPanel();
        } catch (\RuntimeException $e) {
            $this->components->error($e->getMessage());

            return self::FAILURE;
        }

        $name = Str::studly(str_replace('-', '_', $key));
        $label = str($key)->headline()->value();

        if ($this->option('resource')) {
            $written = $this->writeResource($name, $key, $panel);
        } else {
            $written = $this->writePage($name, $key, $label, $panel);
        }

        if (! $written) {
            return self::FAILURE;
        }

        $this->newLine();
        $this->components->info('Register the module on the panel (SaaS apps MUST also set grants()):');
        $this->newLine();
        $this->line($this->registrationSnippet($key, $label, $panel));
        $this->newLine();
        $this->line('  Until ModuleRegistry::grants() is set, every registered module stays enabled.');
        $this->line('  Keep panel.module:'.$key.' on any route that is not a discovered page or resource.');

        return self::SUCCESS;
    }

    private function writePage(string $name, string $key, string $label, string $panel): bool
    {
        $class = $name.'Page';
        $directory = app_path('Panel/Pages');
        $path = $directory.'/'.$class.'.php';

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        if (file_exists($path) && ! $this->option('force')) {
            $this->components->error("app/Panel/Pages/{$class}.php already exists. Use --force to replace it.");

            return false;
        }

        file_put_contents($path, $this->pageStub($class, $name, $key, $label, $panel));
        $this->components->info("Created app/Panel/Pages/{$class}.php");
        $this->components->twoColumnDetail('Panel', $panel);
        $this->components->twoColumnDetail('Module', $key);

        $this->writeComponent($name);

        $this->newLine();
        $this->components->info("Visit /{$key}. Discovery registers it; there is no route to add.");
        $this->line('  It requires the ability `view_'.Str::snake($key).'` unless ability() returns null.');

        return true;
    }

    private function writeResource(string $name, string $key, string $panel): bool
    {
        $model = $name;
        $modelClass = "App\\Models\\{$model}";

        if (! class_exists($modelClass) && ! $this->option('force')) {
            $this->components->error("Model [{$modelClass}] does not exist.");
            $this->components->bulletList([
                "php artisan make:model {$model} -m",
                'Fill the migration, then php artisan migrate',
                "php artisan make:panel-module {$key} --resource",
            ]);

            return false;
        }

        $exit = $this->call('make:panel-resource', array_filter([
            'model' => $model,
            '--panel' => $panel,
            '--generate' => class_exists($modelClass),
            '--force' => $this->option('force') ?: null,
        ]));

        if ($exit !== self::SUCCESS) {
            return false;
        }

        $resourcePath = $this->resourcePath($model, $panel);

        if (! is_file($resourcePath)) {
            $this->components->warn("Resource was generated but {$resourcePath} was not found to stamp \$module.");

            return true;
        }

        $contents = (string) file_get_contents($resourcePath);

        if (! str_contains($contents, 'protected static ?string $module')) {
            $contents = str_replace(
                "protected static string \$panel = '{$panel}';",
                "protected static string \$panel = '{$panel}';\n\n            protected static ?string \$module = '{$key}';",
                $contents,
            );
            file_put_contents($resourcePath, $contents);
        }

        $this->components->twoColumnDetail('Module', $key);

        return true;
    }

    private function resourcePath(string $model, string $panel): string
    {
        $default = (string) config('panel.default', 'admin');

        if ($panel !== $default) {
            $namespaced = app_path('Panel/'.Str::studly($panel).'/Resources/'.$model.'Resource.php');

            if (is_file($namespaced)) {
                return $namespaced;
            }
        }

        return app_path('Panel/Resources/'.$model.'Resource.php');
    }

    private function writeComponent(string $name): void
    {
        $directory = resource_path('js/pages');

        if (! is_dir($directory)) {
            $this->components->warn(
                'No resources/js/pages directory, so no component was written. The page will '
                .'render nothing until one exists at '.$name.'.vue'
            );

            return;
        }

        $path = $directory.'/'.$name.'.vue';

        if (file_exists($path) && ! $this->option('force')) {
            $this->components->warn("resources/js/pages/{$name}.vue already exists, keeping yours.");

            return;
        }

        file_put_contents($path, <<<VUE
        <script setup lang="ts">
        defineProps<{
            pageHeading?: string
            pageDescription?: string | null
        }>()
        </script>

        <template>
            <div class="space-y-6">
                <header v-if="pageHeading">
                    <h1 class="text-2xl font-semibold tracking-tight">{{ pageHeading }}</h1>
                    <p v-if="pageDescription" class="mt-1 text-sm text-muted-foreground">
                        {{ pageDescription }}
                    </p>
                </header>
            </div>
        </template>
        VUE);

        $this->components->info("Created resources/js/pages/{$name}.vue");
    }

    private function pageStub(string $class, string $name, string $key, string $label, string $panel): string
    {
        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\Pages;

        use Illuminate\\Http\\Request;
        use Alxtexh\\Panel\\Pages\\Page;

        /**
         * Gated by the [{$key}] plan module. Register it with Module::make('{$key}').
         */
        final class {$class} extends Page
        {
            protected static string \$panel = '{$panel}';

            protected static string \$icon = 'layers';

            protected static ?string \$group = null;

            protected static ?string \$module = '{$key}';

            public static function label(): string
            {
                return '{$label}';
            }

            public static function component(): string
            {
                return '{$name}';
            }

            /**
             * @return array<string, mixed>
             */
            public static function data(Request \$request): array
            {
                return [];
            }
        }

        PHP;
    }

    private function registrationSnippet(string $key, string $label, string $panel): string
    {
        return <<<PHP
        use Alxtexh\\Panel\\Support\\Module;
        use Alxtexh\\Panel\\Support\\ModuleRegistry;

        Panel::make('{$panel}')->modules([
            Module::make('{$key}')
                ->label('{$label}')
                ->description('{$label}')
                ->planLimit(kind: 'number'),
        ]);

        ModuleRegistry::grants(fn (): array => \$organisation->planModules());
        PHP;
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
}
