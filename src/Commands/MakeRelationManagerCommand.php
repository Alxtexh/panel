<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Alxtexh\Panel\PanelManager;

/**
 * php artisan make:panel-relation-manager {Parent} {Related}
 *
 * Dedicated nested pages (list/create/edit/view), empty canvas. Not a modal.
 */
final class MakeRelationManagerCommand extends Command
{
    protected $signature = 'make:panel-relation-manager
                            {parent : Parent resource class, e.g. Article or ArticleResource}
                            {related : Related model, e.g. Comment}
                            {--panel= : Panel id. Defaults to panel.default}
                            {--force : Overwrite existing files}';

    protected $description = 'Create nested relation pages (dedicated list/create/edit, not a modal)';

    public function handle(): int
    {
        $parent = Str::studly(str_replace(['Resource', '.php'], '', (string) $this->argument('parent')));
        $related = Str::studly(str_replace(['Resource', 'RelationManager', '.php'], '', (string) $this->argument('related')));

        try {
            $panel = $this->targetPanel();
        } catch (\RuntimeException $e) {
            $this->components->error($e->getMessage());

            return self::FAILURE;
        }

        $resourceDir = app_path('Panel/Resources');
        $managerDir = app_path('Panel/RelationManagers');
        $resourcePath = $resourceDir."/{$related}Resource.php";
        $managerPath = $managerDir."/{$related}RelationManager.php";

        foreach ([$resourceDir, $managerDir] as $dir) {
            if (! is_dir($dir)) {
                mkdir($dir, 0755, true);
            }
        }

        if (! $this->option('force') && (file_exists($resourcePath) || file_exists($managerPath))) {
            $this->components->error('A nested resource or relation manager already exists. Use --force to overwrite.');

            return self::FAILURE;
        }

        file_put_contents($resourcePath, $this->resourceStub($parent, $related, $panel));
        file_put_contents($managerPath, $this->managerStub($parent, $related));

        $this->components->info("Created {$resourcePath}");
        $this->components->info("Created {$managerPath}");
        $this->newLine();
        $this->line("  On {$parent}Resource::relations(), return:");
        $this->line("    {$related}RelationManager::make(),");
        $this->line('  Pages: /'.Str::plural(Str::kebab($parent)).'/{id}/'.Str::plural(Str::kebab($related)));
        $this->line('  BelongsToMany: set $relationship on the nested resource; /attach is a page, detach is a row action.');
        $this->line('  The parent view tab stays a summary that links to those pages.');

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

    private function resourceStub(string $parent, string $related, string $panel): string
    {
        $parentClass = $parent.'Resource';
        $relatedClass = $related;
        $table = Str::snake(Str::plural($related));

        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\Resources;

        use App\\Models\\{$relatedClass};
        use App\\Panel\\Resources\\{$parentClass};
        use Alxtexh\\Panel\\Forms\\Fields\\TextField;
        use Alxtexh\\Panel\\Forms\\Form;
        use Alxtexh\\Panel\\Resources\\Resource;
        use Alxtexh\\Panel\\Tables\\Columns\\TextColumn;
        use Alxtexh\\Panel\\Tables\\Table;

        /**
         * Nested under {$parentClass}. Dedicated list/create/edit/view pages,
         * not a dialog.
         *
         * HasMany: leave \$relationship null. BelongsToMany: set
         * protected static ?string \$relationship = '{relation}';
         * then /{parent}/{id}/{child}/attach is a page (pick existing rows)
         * and detach is a row action on the nested index.
         */
        final class {$related}Resource extends Resource
        {
            protected static string \$model = {$relatedClass}::class;

            protected static string \$panel = '{$panel}';

            protected static ?string \$parent = {$parentClass}::class;

            // BelongsToMany: protected static ?string \$relationship = 'tags';
            // Attach page: /{parent}/{id}/{child}/attach
            // Detach: row action on the nested index.

            protected static ?string \$purpose = 'Related {$related} records.';

            public static function form(Form \$form): Form
            {
                return \$form->schema([
                    TextField::make('name')->required(),
                ]);
            }

            public static function table(Table \$table): Table
            {
                return \$table
                    ->columns([
                        TextColumn::make('name')->from('{$table}.name')->sortable()->searchable()->locked(),
                    ])
                    ->keyColumn('{$table}.id')
                    ->alsoSelect(['{$table}.id']);
            }
        }

        PHP;
    }

    private function managerStub(string $parent, string $related): string
    {
        $key = Str::plural(Str::kebab($related));
        $label = Str::plural(str($related)->headline()->value());

        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\RelationManagers;

        use App\\Panel\\Resources\\{$related}Resource;
        use Alxtexh\\Panel\\Resources\\RelationManager;

        /**
         * Summary tab on the parent view page. Links to {$related}Resource nested pages.
         *
         * Dedicated URLs only: list/create/edit/view, plus /attach for
         * BelongsToMany. Detach is a row action. Never a dialog.
         */
        final class {$related}RelationManager
        {
            public static function make(): RelationManager
            {
                return RelationManager::make('{$key}', '{$label}')
                    ->resource({$related}Resource::class);
            }
        }

        PHP;
    }
}
