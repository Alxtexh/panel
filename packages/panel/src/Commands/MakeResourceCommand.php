<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

/**
 * php artisan make:panel-resource {Model} [--generate]
 *
 * `--generate` is the whole point of the command. Introspecting the table and
 * mapping column types to sensible defaults is what turns a thirty-minute task
 * into a thirty-second one (spec §7), and combined with filesystem discovery it
 * means the generated class is routable and rendering with NO hand editing.
 *
 * The generated file is a starting point, not a contract. It is meant to be
 * edited — which is why it is written as ordinary readable PHP rather than
 * something clever.
 */
final class MakeResourceCommand extends Command
{
    protected $signature = 'make:panel-resource
                            {model : The Eloquent model class name, e.g. Invoice}
                            {--generate : Introspect the table and pre-fill columns and fields}
                            {--force : Overwrite an existing resource}';

    protected $description = 'Create a panel resource';

    /**
     * Never shown and never writable.
     *
     * `tenant_id` above all: it is set from request context, and a generated
     * form field for it would be a way to move a record into another tenant.
     *
     * @var list<string>
     */
    private const HIDDEN = ['id', 'tenant_id', 'deleted_at', 'remember_token', 'password'];

    /**
     * Shown on the table but never on the form.
     *
     * Timestamps are what operators sort by, so excluding them from the table
     * entirely was wrong — and it also produced a class that threw on load,
     * because the generated `defaultSort('created_at')` referenced a column no
     * generated column declared, so it was not in the sortable allowlist.
     *
     * @var list<string>
     */
    private const READ_ONLY = ['created_at', 'updated_at'];

    public function handle(): int
    {
        $model = Str::studly($this->argument('model'));
        $modelClass = "App\\Models\\{$model}";

        if (! class_exists($modelClass)) {
            $this->components->error("Model [{$modelClass}] does not exist.");

            return self::FAILURE;
        }

        $path = app_path("Panel/Resources/{$model}Resource.php");

        if (file_exists($path) && ! $this->option('force')) {
            $this->components->error("Resource already exists: {$path}. Use --force to overwrite.");

            return self::FAILURE;
        }

        $table = (new $modelClass())->getTable();

        [$columns, $fields, $imports] = $this->option('generate')
            ? $this->introspect($table)
            : $this->placeholders();

        if (! is_dir(dirname($path))) {
            mkdir(dirname($path), 0755, true);
        }

        file_put_contents($path, $this->render($model, $modelClass, $columns, $fields, $imports));

        $this->components->info("Created {$path}");

        $this->writePolicy($model, $modelClass);

        if ($this->option('generate')) {
            $this->components->info("Introspected [{$table}]. Visit /" . Str::of($model)->plural()->kebab() . ' — no registration needed.');
        }

        return self::SUCCESS;
    }

    /**
     * A policy stub, because the panel DENIES an ability whose model has no
     * policy.
     *
     * Without this the generator would produce a resource that renders an empty
     * table with no actions and no explanation — technically secure, and a
     * broken promise, since --generate is supposed to need no hand editing.
     *
     * The stub is deliberately permissive-within-tenant and clearly marked, so
     * the decision is visible and editable rather than implied.
     */
    private function writePolicy(string $model, string $modelClass): void
    {
        $path = app_path("Policies/{$model}Policy.php");

        if (file_exists($path)) {
            return;
        }

        if (! is_dir(dirname($path))) {
            mkdir(dirname($path), 0755, true);
        }

        $stub = <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Policies;

        use App\\Models\\User;
        use Illuminate\\Database\\Eloquent\\Model;

        /**
         * Generated alongside {$model}Resource.
         *
         * REVIEW THIS. It currently permits any authenticated user, which is
         * almost certainly not what you want. The panel denies every ability whose
         * model has no policy, so this file is what makes the resource visible at
         * all — that is deliberate, and so is the fact that you have to edit it.
         */
        final class {$model}Policy
        {
            public function viewAny(User \$user): bool
            {
                return true;
            }

            public function view(User \$user, ?Model \$record = null): bool
            {
                return true;
            }

            public function create(User \$user): bool
            {
                return true;
            }

            public function update(User \$user, ?Model \$record = null): bool
            {
                return true;
            }

            public function delete(User \$user, ?Model \$record = null): bool
            {
                return true;
            }
        }

        PHP;

        file_put_contents($path, $stub);

        $this->components->info("Created {$path}");
        $this->components->warn("Review {$model}Policy — it permits any authenticated user.");
    }

    /**
     * Map real database columns to columns and fields.
     *
     * @return array{0: list<string>, 1: list<string>, 2: list<string>}
     */
    private function introspect(string $table): array
    {
        $columns = [];
        $fields = [];
        $imports = [];

        foreach (Schema::getColumns($table) as $column) {
            $name = $column['name'];

            if (in_array($name, self::HIDDEN, true)) {
                continue;
            }

            $readOnly = in_array($name, self::READ_ONLY, true);

            $type = strtolower((string) ($column['type_name'] ?? $column['type'] ?? 'string'));
            $nullable = (bool) ($column['nullable'] ?? true);
            $qualified = "{$table}.{$name}";
            $required = $nullable ? '' : '->required()';

            // Order matters: `*_at` and `*_id` are naming conventions that beat
            // the declared type, because `expires_at` stored as a string is
            // still a date to an operator.
            if (str_ends_with($name, '_at') || in_array($type, ['date', 'datetime', 'timestamp'], true)) {
                $withTime = ! str_starts_with($type, 'date') || str_contains($type, 'time');
                $columns[] = "DateColumn::make('{$name}')->from('{$qualified}')->sortable()"
                    . ($withTime ? '->withTime()' : '') . ($readOnly ? '->muted()' : '');
                $imports['DateColumn'] = 'Columns\DateColumn';

                if (! $readOnly) {
                    $fields[] = "DateField::make('{$name}'){$required}" . ($withTime ? '->withTime()' : '');
                    $imports['DateField'] = 'Fields\DateField';
                }

                continue;
            }

            if (str_ends_with($name, '_id')) {
                // A relationship select needs the related model's labels, which
                // is a decision only the developer can make — so it is a TODO
                // rather than a guess that silently queries the wrong table.
                $columns[] = "TextColumn::make('{$name}')->from('{$qualified}')->muted()";
                $fields[] = "// TODO: point this at the related model\n            "
                    . "SelectField::make('{$name}'){$required}->options([])";
                $imports['TextColumn'] = 'Columns\TextColumn';
                $imports['SelectField'] = 'Fields\SelectField';

                continue;
            }

            if (in_array($type, ['bool', 'boolean', 'tinyint'], true)) {
                $columns[] = "BadgeColumn::make('{$name}')->from('{$qualified}')"
                    . "->colors(['1' => 'success', '' => 'neutral'])";
                $fields[] = "ToggleField::make('{$name}')";
                $imports['BadgeColumn'] = 'Columns\BadgeColumn';
                $imports['ToggleField'] = 'Fields\ToggleField';

                continue;
            }

            if (in_array($type, ['int', 'integer', 'bigint', 'smallint', 'decimal', 'numeric', 'float', 'double'], true)) {
                $columns[] = "TextColumn::make('{$name}')->from('{$qualified}')->sortable()";
                $fields[] = "NumberField::make('{$name}'){$required}";
                $imports['TextColumn'] = 'Columns\TextColumn';
                $imports['NumberField'] = 'Fields\NumberField';

                continue;
            }

            if (in_array($type, ['text', 'longtext', 'mediumtext', 'json', 'jsonb'], true)) {
                $columns[] = "TextColumn::make('{$name}')->from('{$qualified}')->muted()";
                $fields[] = "TextareaField::make('{$name}'){$required}";
                $imports['TextColumn'] = 'Columns\TextColumn';
                $imports['TextareaField'] = 'Fields\TextareaField';

                continue;
            }

            // Default: a searchable string. The FIRST such column is locked, so
            // the table always has a column that cannot be hidden.
            $locked = $columns === [] ? '->locked()' : '';
            $columns[] = "TextColumn::make('{$name}')->from('{$qualified}')->sortable()->searchable(){$locked}";
            $fields[] = "TextField::make('{$name}'){$required}";
            $imports['TextColumn'] = 'Columns\TextColumn';
            $imports['TextField'] = 'Fields\TextField';
        }

        return [$columns, $fields, array_values($imports)];
    }

    /** @return array{0: list<string>, 1: list<string>, 2: list<string>} */
    private function placeholders(): array
    {
        return [
            ["TextColumn::make('name')->sortable()->searchable()->locked()"],
            ["TextField::make('name')->required()"],
            ['Columns\TextColumn', 'Fields\TextField'],
        ];
    }

    /**
     * @param  list<string>  $columns
     * @param  list<string>  $fields
     * @param  list<string>  $imports
     */
    private function render(string $model, string $modelClass, array $columns, array $fields, array $imports): string
    {
        $use = collect($imports)
            ->map(static fn (string $i): string => 'use PanelKit\\Panel\\'
                . (str_starts_with($i, 'Columns') ? 'Tables\\' : 'Forms\\') . $i . ';')
            ->sort()
            ->implode("\n");

        $table = (new $modelClass())->getTable();
        $columnCode = collect($columns)->map(static fn (string $c): string => "                {$c},")->implode("\n");
        $fieldCode = collect($fields)->map(static fn (string $f): string => "            {$f},")->implode("\n");

        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\Resources;

        use {$modelClass};
        {$use}
        use PanelKit\\Panel\\Forms\\Form;
        use PanelKit\\Panel\\Resources\\Resource;
        use PanelKit\\Panel\\Tables\\Table;

        /**
         * Generated by `make:panel-resource {$model}`.
         *
         * Edit freely — this is a starting point, not a contract. Discovery picks
         * it up automatically, so there is nothing to register.
         *
         * `tenant_id` is deliberately absent from the form. It is set from request
         * context, and a field for it would be a way to write into another tenant.
         */
        final class {$model}Resource extends Resource
        {
            protected static string \$model = {$model}::class;

            public static function form(Form \$form): Form
            {
                return \$form->columns(2)->schema([
        {$fieldCode}
                ]);
            }

            public static function table(Table \$table): Table
            {
                return \$table
                    ->columns([
        {$columnCode}
                    ])
                    ->keyColumn('{$table}.id')
                    ->alsoSelect(['{$table}.id'])
                    ->defaultSort('created_at', 'desc');
            }
        }

        PHP;
    }
}
