<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Resources;

use Closure;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use InvalidArgumentException;
use Alxtexh\Panel\Forms\Form;
use Alxtexh\Panel\Tables\ListResult;
use Alxtexh\Panel\Tables\Table;

/**
 * A related list shown on a record's page - a client's sessions, a router's
 * clients, an account's invoices.
 *
 * THE WHOLE POINT IS THAT IT IS A TABLE, NOT AN EAGER LOAD. The obvious
 * implementation is `$client->load('sessions')` and a `v-for`, and it is wrong
 * in a way that only shows up in production: a client with 40,000 sessions
 * loads 40,000 rows into memory to render the twenty a person will look at.
 * Relations are the single most common place an admin panel falls over at
 * scale, because the relation is small for every record the developer tested
 * with.
 *
 * So a relation manager reuses the SAME ListQuery the main table uses - keyset
 * pagination, explicit select, per-shape indexes, no blocking count - and is
 * fetched on demand rather than with the parent record.
 *
 * THE FOREIGN KEY IS DECLARED, NEVER INFERRED FROM THE REQUEST. `ownerKey` is
 * a column name written in a resource class; the request supplies only which
 * declared relation to open. Inferring it would make this endpoint a way to
 * join any table to any other.
 */
final class RelationManager
{
    /** @var class-string<Model> */
    private string $model;

    private string $foreignKey;

    private ?Closure $table = null;

    private ?Closure $modifyQuery = null;

    /** @var Closure(Form): Form|null */
    private ?Closure $form = null;

    private ?string $icon = null;

    private string $ability = 'view';

    private string $createAbility = 'create';

    private string $updateAbility = 'update';

    /**
     * Nested child resource that owns the dedicated list/create/edit pages.
     *
     * @var class-string<resource>|null
     */
    private ?string $resource = null;

    private function __construct(
        public readonly string $key,
        private readonly string $label,
    ) {}

    public static function make(string $key, string $label): self
    {
        return new self($key, $label);
    }

    /**
     * The related model and the column pointing back at the parent.
     *
     * @param  class-string<Model>  $model
     */
    public function related(string $model, string $foreignKey): self
    {
        if (! is_subclass_of($model, Model::class)) {
            throw new InvalidArgumentException("[{$model}] is not an Eloquent model.");
        }

        if (preg_match('/^[a-zA-Z_][a-zA-Z0-9_.]*$/', $foreignKey) !== 1) {
            // It reaches a where clause; validated here rather than trusted.
            throw new InvalidArgumentException("[{$foreignKey}] is not a valid column identifier.");
        }

        $this->model = $model;
        $this->foreignKey = $foreignKey;

        return $this;
    }

    /**
     * The table definition, as a closure.
     *
     * A closure rather than a built Table, for the reason every other
     * definition is deferred: building it eagerly would run at class-definition
     * time, and a filter's option closure would query on every page render
     * (antipatterns §3.3).
     *
     * @param  Closure(Table): Table  $table
     */
    public function table(Closure $table): self
    {
        $this->table = $table;

        return $this;
    }

    /** Narrow the relation further - "unpaid invoices", "live sessions". */
    public function query(Closure $modify): self
    {
        $this->modifyQuery = $modify;

        return $this;
    }

    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    /** The policy ability checked on the PARENT before the list is served. */
    public function authorize(string $ability): self
    {
        $this->ability = $ability;

        return $this;
    }

    /**
     * Dedicated nested resource that owns list/create/edit pages for this relation.
     *
     * NOT A MODAL. Filament's default relation manager mutates in a dialog; this
     * kit routes related records as their own pages under the parent URL
     * (`/{parent}/{id}/{child}`), the same surface `$parent` already provides.
     * The relation tab on the view page stays a summary that LINKS there.
     *
     * @param  class-string<resource>  $resource
     */
    public function resource(string $resource): self
    {
        if (! is_subclass_of($resource, Resource::class)) {
            throw new InvalidArgumentException("[{$resource}] is not a panel resource.");
        }

        $this->resource = $resource;

        if (! isset($this->model)) {
            $model = $resource::model();
            $table = (new $model)->getTable();

            $this->related($model, $table.'.'.$resource::parentColumn());
        }

        return $this;
    }

    /**
     * Create/edit form schema, used when the nested resource has not supplied one.
     *
     * Writes go to the nested resource's dedicated pages, not to a modal.
     *
     * @param  Closure(Form): Form  $form
     */
    public function form(Closure $form): self
    {
        $this->form = $form;

        return $this;
    }

    public function createAbility(string $ability): self
    {
        $this->createAbility = $ability;

        return $this;
    }

    public function updateAbility(string $ability): self
    {
        $this->updateAbility = $ability;

        return $this;
    }

    public function hasForm(): bool
    {
        return $this->form !== null;
    }

    public function getAbility(): string
    {
        return $this->ability;
    }

    /** @return class-string<Model> */
    public function getModel(): string
    {
        return $this->model;
    }

    public function nestedResource(): ?string
    {
        return $this->resource;
    }

    public function definition(): Table
    {
        if ($this->table !== null) {
            return ($this->table)(Table::make());
        }

        if ($this->resource !== null) {
            return $this->resource::definition();
        }

        return Table::make();
    }

    /**
     * Rows for one parent record.
     *
     * The parent key is bound as a PARAMETER against a column named in the
     * declaration - the request never chooses the column, only which declared
     * relation to open.
     */
    public function rows(Request $request, int|string $parentKey): ListResult
    {
        $definition = $this->definition();
        $foreignKey = $this->foreignKey;
        $modify = $this->modifyQuery;

        $query = $definition->toListQuery($this->model);

        // Layered on top of whatever join the table already declares, so a
        // relation manager can still show joined columns.
        $query->join(function ($builder) use ($foreignKey, $parentKey, $modify, $definition): void {
            $existing = $definition->getQueryModifier();

            if ($existing !== null) {
                $existing($builder);
            }

            $builder->where($foreignKey, $parentKey);

            if ($modify !== null) {
                $modify($builder);
            }
        });

        return $query->run($request);
    }

    /** @return array<string, mixed> Structure only. Never runs a query. */
    public function toSchema(): array
    {
        $formSchema = null;

        if ($this->form !== null) {
            $formSchema = ($this->form)(Form::make())->toSchema();
        } elseif ($this->resource !== null) {
            $formSchema = $this->resource::formDefinition()->toSchema();
        }

        $canCreate = false;
        $canEdit = false;
        $pages = null;

        if ($this->resource !== null) {
            $permissions = $this->resource::permissions();
            $canCreate = (bool) ($permissions['create'] ?? false);
            $canEdit = (bool) ($permissions['update'] ?? false);
            $pages = ['resource' => $this->resource::key()];
        }

        return [
            'key' => $this->key,
            'label' => $this->label,
            'icon' => $this->icon,
            'table' => $this->definition()->toSchema(),
            'form' => $formSchema,
            /*
             * True only when a nested resource owns dedicated pages. The view
             * tab is a summary; Add / Edit / View all are links, not modals.
             */
            'canCreate' => $canCreate,
            'canEdit' => $canEdit,
            'pages' => $pages,
            'createAbility' => $this->createAbility,
            'updateAbility' => $this->updateAbility,
        ];
    }
}
