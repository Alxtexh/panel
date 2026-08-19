<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Alxtexh\Panel\PanelManager;

/**
 * php artisan make:panel-recipe Invoices
 * php artisan panel:recipe invoices
 *
 * The official starter a host copies after `panel:install`. One generic SaaS
 * resource (Invoice, or Item, not fibre / clients / routers), kit Vue only,
 * empty table unless `--seed`. Dashboard is already empty from install.
 */
final class MakeRecipeCommand extends Command
{
    protected $signature = 'make:panel-recipe
                            {name : Recipe name, e.g. Invoices or Items}
                            {--panel= : Which panel it belongs to. Defaults to panel.default}
                            {--migrate : Run the written migration}
                            {--seed : Insert a few fake rows (default: empty table)}
                            {--force : Overwrite existing generated files}';

    protected $description = 'Write the official starter recipe: one resource, kit Vue, empty table';

    /** @var list<string> */
    protected $aliases = ['panel:recipe'];

    public function handle(): int
    {
        [$model, $table, $label, $plural] = $this->names();
        $preset = $this->recipePreset($model);

        try {
            [$panelId, $directory, $namespace] = $this->panelTarget();
        } catch (\RuntimeException $e) {
            $this->components->error($e->getMessage());

            return self::FAILURE;
        }

        $resourcePath = $directory."/{$model}Resource.php";
        $modelPath = app_path("Models/{$model}.php");
        $policyPath = app_path("Policies/{$model}Policy.php");
        $migrationPath = $this->migrationPath($table);
        $docsPath = base_path('docs/recipes/'.$this->docsFilename($preset, $plural));

        if (! $this->option('force')) {
            foreach ([$resourcePath => 'Resource', $docsPath => 'Recipe docs'] as $path => $kind) {
                if (is_file($path)) {
                    $this->components->error("{$kind} already exists: {$path}. Use --force to overwrite.");

                    return self::FAILURE;
                }
            }
        }

        $this->writeFile($resourcePath, $this->resourceStub($model, $table, $label, $panelId, $namespace, $preset));
        $this->writeModel($modelPath, $model, $preset);
        $this->writePolicy($policyPath, $model);
        $this->writeFile($migrationPath, $this->migrationStub($table, $preset));
        $this->writeFile($docsPath, $this->docsStub($model, $table, $plural, $panelId, $preset));

        $this->components->info("Created {$resourcePath}");
        $this->components->twoColumnDetail('Model', $this->relative($modelPath));
        $this->components->twoColumnDetail('Policy', $this->relative($policyPath));
        $this->components->twoColumnDetail('Migration', $this->relative($migrationPath));
        $this->components->twoColumnDetail('Docs', $this->relative($docsPath));
        $this->components->twoColumnDetail(
            'Discovery',
            "app/Panel/Resources (AdminPanelProvider already watches this after panel:install)",
        );

        $this->newLine();
        $this->line('  Vue is kit ResourceIndex / ResourceForm / ResourceView. No custom page.');
        $this->line('  Default: no rows. Pass --seed for fake data.');
        $this->line('  Dashboard is already empty from panel:install.');
        $this->newLine();

        if ($preset === 'crm_contacts') {
            $this->line('  Module gate: resource declares `$module = \'crm\'`. Register on the panel:');
            $this->line("    Module::make('crm')->label('CRM')");
            $this->line('  SaaS apps MUST also set ModuleRegistry::grants().');
            $this->newLine();
        }

        $this->line('  Optional SaaS suspension wall. Uncomment on the panel provider:');
        $this->line("    ->apps(['billing-portal'])");
        $this->line('    ->billingState()');
        $this->newLine();

        $migrated = $this->maybeMigrate($table, $migrationPath);
        $this->maybeSeed($table, $migrated || Schema::hasTable($table));

        $this->line('  Then: php artisan panel:permissions sync');
        $this->line('  Visit /'.Str::kebab($plural).' . Re-run panel:blueprint to refresh AGENTS.md.');

        try {
            $this->callSilently('panel:blueprint');
        } catch (\Throwable) {
            $this->components->warn('AGENTS.md was not refreshed. Run php artisan panel:blueprint.');
        }

        return self::SUCCESS;
    }

    /** @return array{0: string, 1: string, 2: string, 3: string} model, table, label, plural */
    private function names(): array
    {
        $raw = (string) $this->argument('name');
        $studly = Str::studly(str_replace(['Resource', '.php'], '', $raw));
        $model = (string) Str::singular($studly);
        $table = Str::snake((string) Str::plural($model));
        $label = str($model)->headline()->value();
        $plural = str($model)->plural()->headline()->value();

        return [$model, $table, $label, $plural];
    }

    private function recipePreset(string $model): string
    {
        return match (Str::lower($model)) {
            'crmcontact' => 'crm_contacts',
            default => 'invoices',
        };
    }

    private function docsFilename(string $preset, string $plural): string
    {
        return match ($preset) {
            'crm_contacts' => '02-crm-contacts.md',
            default => '01-'.Str::kebab($plural).'.md',
        };
    }

    /**
     * @return array{0: string, 1: string, 2: string} panel id, directory, namespace
     */
    private function panelTarget(): array
    {
        $panels = app(PanelManager::class)->panels();
        $requested = $this->option('panel');
        $default = (string) config('panel.default', 'admin');
        $id = $requested !== null ? (string) $requested : $default;

        if ($requested !== null && ! array_key_exists($id, $panels)) {
            $known = $panels === [] ? 'none are registered' : implode(', ', array_keys($panels));

            throw new \RuntimeException("No panel [{$id}]. Registered: {$known}.");
        }

        if ($id === $default) {
            return [$id, app_path('Panel/Resources'), 'App\\Panel\\Resources'];
        }

        $studly = Str::studly($id);

        return [$id, app_path("Panel/{$studly}/Resources"), "App\\Panel\\{$studly}\\Resources"];
    }

    private function migrationPath(string $table): string
    {
        $directory = database_path('migrations');

        if (is_dir($directory)) {
            foreach (File::files($directory) as $file) {
                if (str_contains($file->getFilename(), "create_{$table}_table")) {
                    return $file->getPathname();
                }
            }
        }

        return $directory.'/2026_08_19_000000_create_'.$table.'_table.php';
    }

    private function writeModel(string $path, string $model, string $preset = 'invoices'): void
    {
        if (is_file($path) && ! $this->option('force')) {
            $this->components->twoColumnDetail('Kept yours', $this->relative($path));

            return;
        }

        $this->writeFile($path, $this->modelStub($model, $preset));
    }

    private function writePolicy(string $path, string $model): void
    {
        if (is_file($path) && ! $this->option('force')) {
            $this->components->twoColumnDetail('Kept yours', $this->relative($path));

            return;
        }

        $this->writeFile($path, $this->policyStub($model));
    }

    private function writeFile(string $path, string $contents): void
    {
        $directory = dirname($path);

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        file_put_contents($path, $contents);
    }

    private function maybeMigrate(string $table, string $migrationPath): bool
    {
        $requested = (bool) $this->option('migrate')
            || ((bool) $this->option('seed') && ! Schema::hasTable($table));

        if (! $requested) {
            $this->line('  Table: host runs php artisan migrate, or pass --migrate.');

            return false;
        }

        if (Schema::hasTable($table)) {
            $this->components->twoColumnDetail('Table', "{$table} already exists");

            return true;
        }

        $relative = Str::after($migrationPath, base_path().DIRECTORY_SEPARATOR);

        $this->call('migrate', [
            '--path' => str_replace('\\', '/', $relative),
            '--force' => true,
        ]);

        return Schema::hasTable($table);
    }

    private function maybeSeed(string $table, bool $tableReady): void
    {
        if (! $this->option('seed')) {
            $this->line('  Rows: none (empty canvas). Pass --seed for fake invoices.');

            return;
        }

        if (! $tableReady) {
            $this->components->error("Cannot seed: table [{$table}] does not exist. Pass --migrate.");

            return;
        }

        if (DB::table($table)->exists()) {
            $this->components->twoColumnDetail('Seed', 'skipped, table already has rows');

            return;
        }

        $now = now();
        $tenantId = Schema::hasColumn($table, 'tenant_id')
            ? (auth()->user()?->getAttribute('tenant_id'))
            : null;

        $rows = [];

        foreach (['INV-1001' => 'draft', 'INV-1002' => 'sent', 'INV-1003' => 'paid'] as $number => $status) {
            $row = [
                'number' => $number,
                'status' => $status,
                'total' => $status === 'paid' ? '120.00' : '0.00',
                'dated_at' => $now->toDateString(),
                'created_at' => $now,
                'updated_at' => $now,
            ];

            if (Schema::hasColumn($table, 'tenant_id')) {
                $row['tenant_id'] = $tenantId;
            }

            $rows[] = $row;
        }

        if ($table === 'crm_contacts') {
            $rows = [];

            foreach ([
                ['name' => 'Ada Lovelace', 'email' => 'ada@example.test', 'company' => 'Analytical Engines', 'status' => 'lead'],
                ['name' => 'Grace Hopper', 'email' => 'grace@example.test', 'company' => 'Compilers Inc', 'status' => 'customer'],
                ['name' => 'Alan Turing', 'email' => 'alan@example.test', 'company' => 'Decryption Ltd', 'status' => 'lead'],
            ] as $contact) {
                $row = [...$contact, 'created_at' => $now, 'updated_at' => $now];

                if (Schema::hasColumn($table, 'tenant_id')) {
                    $row['tenant_id'] = $tenantId;
                }

                $rows[] = $row;
            }
        }

        DB::table($table)->insert($rows);
        $this->components->twoColumnDetail('Seed', '3 fake rows');
    }

    private function relative(string $path): string
    {
        return Str::after($path, base_path().DIRECTORY_SEPARATOR);
    }

    private function resourceStub(
        string $model,
        string $table,
        string $label,
        string $panelId,
        string $namespace,
        string $preset = 'invoices',
    ): string {
        if ($preset === 'crm_contacts') {
            return $this->crmContactResourceStub($model, $table, $label, $panelId, $namespace);
        }

        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace {$namespace};

        use App\\Models\\{$model};
        use Alxtexh\\Panel\\Forms\\Fields\\DateField;
        use Alxtexh\\Panel\\Forms\\Fields\\NumberField;
        use Alxtexh\\Panel\\Forms\\Fields\\SelectField;
        use Alxtexh\\Panel\\Forms\\Fields\\TextField;
        use Alxtexh\\Panel\\Forms\\Form;
        use Alxtexh\\Panel\\Resources\\Resource;
        use Alxtexh\\Panel\\Tables\\Columns\\BadgeColumn;
        use Alxtexh\\Panel\\Tables\\Columns\\DateColumn;
        use Alxtexh\\Panel\\Tables\\Columns\\TextColumn;
        use Alxtexh\\Panel\\Tables\\Table;

        /**
         * Official starter recipe. Generic SaaS, not a vertical demo.
         *
         * Kit Vue only: ResourceIndex, ResourceForm, ResourceView. Do not add a
         * Vue page for this resource. Nested lines: php artisan
         * make:panel-relation-manager {$model} {$model}Item
         *
         * Optional packaged suspension wall. On the panel provider:
         *
         *     // ->apps(['billing-portal'])
         *     // ->billingState()
         */
        final class {$model}Resource extends Resource
        {
            protected static string \$model = {$model}::class;

            protected static string \$panel = '{$panelId}';

            protected static ?string \$purpose = '{$label} records for this organisation.';

            public static function form(Form \$form): Form
            {
                return \$form->columns(2)->schema([
                    TextField::make('number')->required(),
                    SelectField::make('status')->required()->options([
                        'draft' => 'Draft',
                        'sent' => 'Sent',
                        'paid' => 'Paid',
                    ]),
                    NumberField::make('total')->required(),
                    DateField::make('dated_at')->required(),
                ]);
            }

            public static function table(Table \$table): Table
            {
                return \$table
                    ->columns([
                        TextColumn::make('number')->from('{$table}.number')->sortable()->searchable()->locked(),
                        BadgeColumn::make('status')->from('{$table}.status')
                            ->colors(['draft' => 'neutral', 'sent' => 'warning', 'paid' => 'success']),
                        TextColumn::make('total')->from('{$table}.total')->sortable(),
                        DateColumn::make('dated_at')->from('{$table}.dated_at')->sortable(),
                    ])
                    ->keyColumn('{$table}.id')
                    ->alsoSelect(['{$table}.id'])
                    ->defaultSort('dated_at', 'desc');
            }
        }

        PHP;
    }

    private function crmContactResourceStub(
        string $model,
        string $table,
        string $label,
        string $panelId,
        string $namespace,
    ): string {
        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace {$namespace};

        use App\\Models\\{$model};
        use Alxtexh\\Panel\\Forms\\Fields\\SelectField;
        use Alxtexh\\Panel\\Forms\\Fields\\TextField;
        use Alxtexh\\Panel\\Forms\\Form;
        use Alxtexh\\Panel\\Resources\\Resource;
        use Alxtexh\\Panel\\Tables\\Columns\\BadgeColumn;
        use Alxtexh\\Panel\\Tables\\Columns\\TextColumn;
        use Alxtexh\\Panel\\Tables\\Filters\\SelectFilter;
        use Alxtexh\\Panel\\Tables\\Table;

        /**
         * CRM contacts vertical starter. Plan-gated via `\$module`.
         *
         * Register on the panel provider:
         *
         *     Module::make('crm')->label('CRM')
         *
         * SaaS apps MUST set ModuleRegistry::grants() from the subscriber plan.
         */
        final class {$model}Resource extends Resource
        {
            protected static string \$model = {$model}::class;

            protected static string \$panel = '{$panelId}';

            protected static ?string \$module = 'crm';

            protected static ?string \$purpose = '{$label} for this organisation.';

            public static function form(Form \$form): Form
            {
                return \$form->columns(2)->schema([
                    TextField::make('name')->required(),
                    TextField::make('email')->required(),
                    TextField::make('company'),
                    SelectField::make('status')->required()->options([
                        'lead' => 'Lead',
                        'customer' => 'Customer',
                        'churned' => 'Churned',
                    ]),
                ]);
            }

            public static function table(Table \$table): Table
            {
                return \$table
                    ->columns([
                        TextColumn::make('name')->from('{$table}.name')->sortable()->searchable()->locked(),
                        TextColumn::make('email')->from('{$table}.email')->sortable()->searchable(),
                        TextColumn::make('company')->from('{$table}.company')->sortable(),
                        BadgeColumn::make('status')->from('{$table}.status')
                            ->colors(['lead' => 'warning', 'customer' => 'success', 'churned' => 'neutral']),
                    ])
                    ->filters([
                        SelectFilter::make('status')->column('{$table}.status')
                            ->options(['lead', 'customer', 'churned']),
                    ])
                    ->keyColumn('{$table}.id')
                    ->alsoSelect(['{$table}.id'])
                    ->defaultSort('name');
            }
        }

        PHP;
    }

    private function modelStub(string $model, string $preset = 'invoices'): string
    {
        if ($preset === 'crm_contacts') {
            return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Models;

        use Alxtexh\\Panel\\Models\\Scopes\\TenantScope;
        use Illuminate\\Database\\Eloquent\\Attributes\\ScopedBy;
        use Illuminate\\Database\\Eloquent\\Model;

        #[ScopedBy(TenantScope::class)]
        class {$model} extends Model
        {
            protected \$guarded = [];
        }

        PHP;
        }

        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Models;

        use Alxtexh\\Panel\\Models\\Scopes\\TenantScope;
        use Illuminate\\Database\\Eloquent\\Attributes\\ScopedBy;
        use Illuminate\\Database\\Eloquent\\Model;

        /**
         * Starter recipe model. tenant_id is stamped from request context, never
         * from the form. Tenancy mode `none` leaves the scope idle.
         */
        #[ScopedBy(TenantScope::class)]
        class {$model} extends Model
        {
            protected \$guarded = [];

            protected function casts(): array
            {
                return [
                    'total' => 'decimal:2',
                    'dated_at' => 'date',
                ];
            }
        }

        PHP;
    }

    private function policyStub(string $model): string
    {
        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Policies;

        use Alxtexh\\Panel\\Policies\\TenantResourcePolicy;

        /**
         * Generated with {$model}Resource. Denies until:
         *
         *     php artisan panel:permissions sync
         */
        final class {$model}Policy extends TenantResourcePolicy {}

        PHP;
    }

    private function migrationStub(string $table, string $preset = 'invoices'): string
    {
        if ($preset === 'crm_contacts') {
            return <<<PHP
        <?php

        declare(strict_types=1);

        use Illuminate\\Database\\Migrations\\Migration;
        use Illuminate\\Database\\Schema\\Blueprint;
        use Illuminate\\Support\\Facades\\Schema;

        return new class extends Migration
        {
            public function up(): void
            {
                Schema::create('{$table}', function (Blueprint \$table): void {
                    \$table->id();
                    \$table->unsignedBigInteger('tenant_id')->nullable()->index();
                    \$table->string('name');
                    \$table->string('email');
                    \$table->string('company')->nullable();
                    \$table->string('status')->default('lead');
                    \$table->timestamps();
                });
            }

            public function down(): void
            {
                Schema::dropIfExists('{$table}');
            }
        };

        PHP;
        }

        return <<<PHP
        <?php

        declare(strict_types=1);

        use Illuminate\\Database\\Migrations\\Migration;
        use Illuminate\\Database\\Schema\\Blueprint;
        use Illuminate\\Support\\Facades\\Schema;

        return new class extends Migration
        {
            public function up(): void
            {
                Schema::create('{$table}', function (Blueprint \$table): void {
                    \$table->id();
                    \$table->unsignedBigInteger('tenant_id')->nullable()->index();
                    \$table->string('number');
                    \$table->string('status')->default('draft');
                    \$table->decimal('total', 12, 2)->default(0);
                    \$table->date('dated_at')->nullable();
                    \$table->timestamps();
                });
            }

            public function down(): void
            {
                Schema::dropIfExists('{$table}');
            }
        };

        PHP;
    }

    private function docsStub(string $model, string $table, string $plural, string $panelId, string $preset = 'invoices'): string
    {
        if ($preset === 'crm_contacts') {
            $kebab = Str::kebab($plural);
            $command = 'php artisan make:panel-recipe CrmContacts';

            return <<<MD
        # Starter recipe: CRM contacts

        Minimal CRM vertical with a plan-gated resource.

        ```bash
        {$command}
        # alias: php artisan panel:recipe crm-contacts
        ```

        ## What it writes

        - `app/Panel/Resources/{$model}Resource.php` (name, email, company, status)
        - `app/Models/{$model}.php`
        - `app/Policies/{$model}Policy.php`
        - `database/migrations/*_create_{$table}_table.php`
        - this file

        The resource declares `protected static ?string \$module = 'crm';`. Register:

        ```php
        Module::make('crm')->label('CRM')
        ```

        SaaS apps MUST set `ModuleRegistry::grants()` from the subscriber plan.

        Visit `/{$kebab}` once permissions are synced. Panel id: `{$panelId}`.
        MD;
        }

        $kebab = Str::kebab($plural);
        $command = "php artisan make:panel-recipe {$plural}";

        return <<<MD
        # Starter recipe: {$plural}

        Copyable, non-ISP. This is the official next step after `panel:install`
        and the Get started card. It is not Nairobi Fibre and not the playground
        demo.

        ```bash
        {$command}
        # alias: php artisan panel:recipe {$kebab}
        ```

        ## What it writes

        - `app/Panel/Resources/{$model}Resource.php` (number, status, total, dated_at)
        - `app/Models/{$model}.php`
        - `app/Policies/{$model}Policy.php` (denies until `panel:permissions sync`)
        - `database/migrations/*_create_{$table}_table.php`
        - this file

        Dashboard is already empty from install. Vue is kit `ResourceIndex` /
        `ResourceForm` / `ResourceView`. No custom Vue page. No Livewire. No Stripe.

        Default: **no rows**. Pass `--seed` for three fake records. Pass
        `--migrate` to create the table, or run `php artisan migrate` yourself.

        Discovery: after `panel:install`, `AdminPanelProvider` already watches
        `app/Panel/Resources`. Nothing to register by hand. Panel id: `{$panelId}`.

        Visit `/{$kebab}` once permissions are synced.

        ## Optional packaged billing wall

        Not Stripe. Uncomment on the panel provider:

        ```php
        ->apps(['billing-portal'])
        ->billingState()
        ```

        That enables the empty billing portal and the packaged suspended-access
        screen. See docs/13-billing-adapters.md for inbound webhooks.

        ## Nested lines (optional)

        ```bash
        php artisan make:panel-relation-manager {$model} {$model}Item
        ```

        That writes `{$model}ItemResource` with `\$parent` and dedicated child
        pages, not a modal.
        MD;
    }
}
