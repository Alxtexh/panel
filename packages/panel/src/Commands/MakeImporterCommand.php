<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Alxtexh\Panel\PanelManager;

/**
 * php artisan make:panel-importer {Resource}
 *
 * Empty importer class. The resource names it from importable():
 *
 *     public static function importable(): bool|string
 *     {
 *         return OrderImporter::class;
 *     }
 *
 * CSV is the kit path. Excel is optional: Resource::excelImport() plus
 * phpoffice/phpspreadsheet.
 */
final class MakeImporterCommand extends Command
{
    protected $signature = 'make:panel-importer
                            {resource : Resource class or name, e.g. Order or OrderResource}
                            {--panel= : Panel id. Defaults to panel.default}
                            {--force : Overwrite an existing class}';

    protected $description = 'Create an empty panel importer the resource can name from importable()';

    public function handle(): int
    {
        $resource = Str::studly(str_replace(['Resource', '.php', 'Importer'], '', (string) $this->argument('resource')));
        $class = $resource.'Importer';

        try {
            $this->targetPanel();
        } catch (\RuntimeException $e) {
            $this->components->error($e->getMessage());

            return self::FAILURE;
        }

        $directory = app_path('Panel/Importers');
        $path = $directory.'/'.$class.'.php';

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        if (file_exists($path) && ! $this->option('force')) {
            $this->components->error("{$path} already exists. Use --force to overwrite.");

            return self::FAILURE;
        }

        file_put_contents($path, $this->stub($class, $resource));

        $this->components->info("Created {$path}");
        $this->line("  On {$resource}Resource::importable(), return {$class}::class;");
        $this->line('  CSV is the default. Excel: excelImport() and composer require phpoffice/phpspreadsheet.');

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

    private function stub(string $class, string $resource): string
    {
        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\Importers;

        use App\\Panel\\Resources\\{$resource}Resource;
        use Alxtexh\\Panel\\Forms\\Form;

        /**
         * Empty canvas. Name this from {$resource}Resource::importable().
         *
         * CSV is the kit path. Failed rows download as CSV. Excel is optional:
         * return true from {$resource}Resource::excelImport() and require
         * phpoffice/phpspreadsheet.
         */
        final class {$class}
        {
            public static function resource(): string
            {
                return {$resource}Resource::class;
            }

            public static function form(): Form
            {
                return {$resource}Resource::formDefinition();
            }
        }

        PHP;
    }
}
