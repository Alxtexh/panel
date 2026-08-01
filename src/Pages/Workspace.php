<?php

declare(strict_types=1);

namespace PanelKit\Panel\Pages;

use Illuminate\Http\Request;
use InvalidArgumentException;
use PanelKit\Panel\Tables\ListResult;
use PanelKit\Panel\Tables\Table;

/**
 * One page, several independent tables, and the widgets that belong with them.
 *
 * THE SHAPE A CRUD RESOURCE CANNOT EXPRESS. A resource is one model with one
 * list; a workspace is a subject area - Rewards, Expenses, Equipment - where the
 * useful page is a couple of KPI figures, an active list, and a history list,
 * all about the same thing. The reference application says it plainly: a
 * framework that only does CRUD resources cannot express half of this system.
 *
 * EVERY TABLE OWNS ITS OWN SLICE OF THE QUERY STRING, and this is the entire
 * technical content of the class. Two tables on one page both want to be called
 * `page`, `sort` and `search`. Sharing the flat query string means paging the
 * history also pages the active list beside it, and neither can be linked to in
 * the state somebody is looking at. So each table is declared under a key and
 * reads `?{key}[page]=2`.
 *
 * TABLES LOAD INDEPENDENTLY. Each one's rows are their own Inertia prop, so a
 * partial reload names one table and moves one table's data. One slow query does
 * not hold up the rest of the page - which is the same property the dashboard's
 * deferred widgets have, for the same reason.
 *
 * WHAT IT DELIBERATELY IS NOT: a layout engine. It decides what is on the page
 * and what each thing is called; how it is arranged is the Vue page's business.
 * A workspace that also owned its grid would have to grow a column system, and
 * the schema would start carrying presentation.
 */
final class Workspace
{
    /** @var array<string, Table> */
    private array $tables = [];

    /** @var array<string, string> */
    private array $titles = [];

    /** @var list<class-string> */
    private array $widgets = [];

    private ?string $heading = null;

    private ?string $description = null;

    private function __construct(public readonly string $key) {}

    public static function make(string $key): self
    {
        if (preg_match('/^[a-z][a-z0-9-]*$/', $key) !== 1) {
            throw new InvalidArgumentException("[{$key}] is not a valid workspace key.");
        }

        return new self($key);
    }

    public function heading(string $heading, ?string $description = null): self
    {
        $this->heading = $heading;
        $this->description = $description;

        return $this;
    }

    /**
     * Add a table under a name that becomes its query-string namespace.
     *
     * THE NAME IS THE CONTRACT. It appears in the URL (`?history[page]=2`), in
     * the Inertia prop (`history`), and in the partial-reload `only:` list, so
     * the three cannot drift apart - there is one string and it is declared
     * here. Duplicates are refused rather than silently overwriting, because
     * the symptom of an overwrite is two tables sharing state, which is exactly
     * the bug this class exists to prevent.
     */
    public function table(string $name, Table $table, ?string $title = null): self
    {
        if (preg_match('/^[a-z][a-z0-9_]*$/', $name) !== 1) {
            throw new InvalidArgumentException("[{$name}] is not a valid table name.");
        }

        if (isset($this->tables[$name])) {
            throw new InvalidArgumentException(
                "[{$name}] is already declared on the [{$this->key}] workspace. Two tables "
                .'sharing a namespace would share their paging and sorting state.'
            );
        }

        $this->tables[$name] = $table;
        $this->titles[$name] = $title ?? ucfirst(str_replace('_', ' ', $name));

        return $this;
    }

    /**
     * Widget classes, resolved per request.
     *
     * Classes rather than instances: a widget resolved at declaration time would
     * run its query while the page definition is being built, which is the
     * antipattern that took `/admin/clients` down for every tenant (§3.3).
     *
     * @param  list<class-string>  $widgets
     */
    public function widgets(array $widgets): self
    {
        $this->widgets = array_values($widgets);

        return $this;
    }

    /** @return array<string, Table> */
    public function getTables(): array
    {
        return $this->tables;
    }

    /** @return list<class-string> */
    public function getWidgets(): array
    {
        return $this->widgets;
    }

    /**
     * Structure only - no rows, no counts, no tenant data.
     *
     * Cacheable for the same reason a resource schema is: it describes the page,
     * and everything that varies per tenant or per request arrives beside it.
     *
     * @return array<string, mixed>
     */
    public function toSchema(): array
    {
        $tables = [];

        foreach ($this->tables as $name => $table) {
            $tables[$name] = [
                'name' => $name,
                'title' => $this->titles[$name],
                ...$table->toSchema(),
            ];
        }

        return [
            'v' => 1,
            'kind' => 'workspace',
            'key' => $this->key,
            'heading' => $this->heading ?? ucfirst($this->key),
            'description' => $this->description,
            'tables' => $tables,
        ];
    }

    /**
     * Run every table, each against its own namespace.
     *
     * @return array<string, ListResult>
     */
    public function results(Request $request): array
    {
        $out = [];

        foreach ($this->tables as $name => $table) {
            $out[$name] = $table
                ->toListQuery($table->getModel())
                ->within($name)
                ->run($request);
        }

        return $out;
    }
}
