<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables;

use Closure;
use Illuminate\Database\Query\Expression;
use InvalidArgumentException;
use PanelKit\Panel\Actions\ActionGroup;
use PanelKit\Panel\Actions\BulkAction;
use PanelKit\Panel\Actions\RecordAction;
use PanelKit\Panel\Tables\Columns\Column;
use PanelKit\Panel\Tables\Filters\Filter;
use PanelKit\Panel\Tables\Filters\HasOptions;

/**
 * Declarative table definition. Produces the schema, and configures ListQuery.
 *
 * THE CENTRAL SPLIT, and the reason this class exists separately from ListQuery:
 *
 *   SCHEMA  structure - which columns, filters and tabs exist. Identical for
 *           every tenant. Cached. Travels once per session.
 *   DATA    rows, and anything tenant-specific such as a filter's option list.
 *           Travels on every interaction.
 *
 * Addendum Part A is explicit that filter OPTIONS are data, not schema. Baking a
 * tenant's routers into the cached schema would mean a cache entry per tenant
 * per resource; keeping them out collapses that to one entry per permission set
 * per resource - a hundredfold reduction at a hundred tenants - and makes the
 * entry incapable of leaking tenant data however badly its key is built.
 *
 * Nothing here may execute a query. Option closures are stored, never called,
 * until the data payload is assembled (antipatterns §3.3: three eager
 * `->options(Router::where(...))` calls in action definitions took a page down
 * for every tenant, because definitions evaluate at render time).
 */
final class Table
{
    /**
     * What a click on the row body does: `view`, or nothing.
     *
     * OFF BY DEFAULT, because a whole clickable row is not free. Selecting text
     * in a cell, dragging to compare two numbers, or a mis-aimed click on the
     * way to a checkbox all become navigations, and on a table people READ
     * rather than browse that is worse than an extra click.
     *
     * WHICH IS WHY IT IS THE RESOURCE'S CALL. A subscriber list is browsed -
     * open one, look, come back - and wants it. An audit log or an invoice line
     * table is read in place and does not.
     *
     * THE TARGET IS THE `view` RECORD ACTION, not a route this class invents.
     * That action is already authorised per record and per user, so a row whose
     * operator may not view it simply does not navigate - the permission is
     * enforced in one place rather than approximated in two.
     */
    private ?string $rowClick = null;

    /** @var list<Column> */
    private array $columns = [];

    /** @var list<Filter> */
    private array $filters = [];

    /** @var array<string, list<string>> relation name => its searched columns */
    private array $searchableRelations = [];

    /** @var list<BulkAction> */
    private array $bulkActions = [];

    /** @var list<RecordAction|ActionGroup> */
    private array $recordActions = [];

    /** @var class-string|null Set only when the table stands alone (a workspace). */
    private ?string $model = null;

    private ?Closure $constrain = null;

    /** The column rows are dragged into order along. */
    private ?string $reorderColumn = null;

    /** The column rows are clustered under, and what to call it. */
    private ?string $groupBy = null;

    private ?string $groupLabel = null;

    private ?Tabs $tabs = null;

    private ?Closure $query = null;

    private string $defaultSort = 'created_at';

    private string $defaultDirection = 'desc';

    private int $perPage = 10;

    /** @var list<int> */
    private array $perPageOptions = [10, 25, 50, 100];

    private ?Closure $transform = null;

    /** @var Closure(list<array<string, mixed>>): void|null */
    private ?Closure $prepareRows = null;

    private ?string $keyColumn = null;

    /** @var list<string|Expression> extra database columns to select that no column declares */
    private array $additionalSelect = [];

    public static function make(): self
    {
        return new self;
    }

    /** @param list<Column> $columns */
    public function columns(array $columns): self
    {
        $this->columns = $columns;

        return $this;
    }

    /**
     * Adds to the declared columns rather than replacing them - roadmap
     * 5.1's custom-field columns are the only caller today. `columns()`
     * stays a replace: a resource author who calls it twice by mistake
     * should see their first list vanish, not silently gain an extra one.
     *
     * @param  list<Column>  $columns
     */
    public function appendColumns(array $columns): self
    {
        $this->columns = [...$this->columns, ...$columns];

        return $this;
    }

    /** @param list<Filter> $filters */
    public function filters(array $filters): self
    {
        $this->filters = $filters;

        return $this;
    }

    /**
     * Search THROUGH a relation - an invoice found by its customer's name.
     *
     * The columns marked `->searchable()` can only be the model's own (or a
     * declared join's), and the thing printed on the paper in front of
     * somebody is usually the OTHER side of a relation. Declared per relation,
     * repeatable, and applied as an EXISTS subquery rather than a join so a
     * has-many cannot duplicate rows - see ListQuery::searchableRelations().
     *
     * @param  list<string>  $columns  columns on the related model
     */
    public function searchesRelation(string $relation, array $columns): self
    {
        $this->searchableRelations[$relation] = $columns;

        return $this;
    }

    /**
     * Actions applied to a selection.
     *
     * Declared here rather than accepted from the request: the client may name
     * one of these by key, never describe one.
     *
     * @param  list<BulkAction>  $actions
     */
    public function bulkActions(array $actions): self
    {
        $this->bulkActions = $actions;

        return $this;
    }

    /** @return list<BulkAction> */
    public function getBulkActions(): array
    {
        return $this->bulkActions;
    }

    /**
     * The qualified column behind the grouping key.
     *
     * Resolved through the declared columns rather than guessed, so a grouped
     * column that is really `plans.name AS plan_name` orders by the real column
     * instead of by an alias the ORDER BY cannot see.
     */
    private function resolveGroupColumn(): string
    {
        foreach ($this->columns as $column) {
            if ($column->key === $this->groupBy) {
                return $column->resolvedDatabaseColumn() ?? $this->groupBy;
            }
        }

        return $this->groupBy;
    }

    /**
     * The declarative half of the row menu.
     *
     * Groups become `{label, actions: [...]}`; a bare action becomes
     * `{actions: [one]}` so the client walks one shape rather than two.
     *
     * @return list<array<string, mixed>>
     */
    private function recordActionSchema(): array
    {
        $out = [];

        foreach ($this->recordActions as $entry) {
            if ($entry instanceof ActionGroup) {
                $actions = array_map(
                    static fn (RecordAction $a): array => [
                        ...$a->toArray(),
                        'ability' => $a->ability(),
                    ],
                    $entry->getActions(),
                );

                if ($actions !== []) {
                    $out[] = ['label' => $entry->label, 'actions' => $actions];
                }

                continue;
            }

            $out[] = ['actions' => [[...$entry->toArray(), 'ability' => $entry->ability()]]];
        }

        return $out;
    }

    /**
     * Cluster rows under headings.
     *
     * GROUPING IS AN ORDERING, NOT AN AGGREGATION, and that is what makes it
     * free. The naive implementation fetches everything and buckets it in PHP,
     * which is fine at 200 rows and fatal at a million. Sorting by the group
     * column instead means rows arrive already clustered, and the client
     * inserts a heading wherever the value changes - the same page, the same
     * query cost, one extra ORDER BY term.
     *
     * THE PRICE IS AN INDEX, and it is not optional. The effective order
     * becomes `(group, sort, id)`, so without an index whose leading columns
     * match that, the database sorts the whole filtered set to produce one page
     * - the exact "TEMP B-TREE FOR ORDER BY" this project spends its time
     * avoiding. Grouping a column you have not indexed for is the one way to
     * make this feature slow, and it will be slow in proportion to the table.
     *
     * A GROUP MAY SPAN PAGES, and is shown continuing rather than restarted.
     * The alternative - padding each page so groups never straddle a boundary -
     * means a variable number of rows per page and a cursor that cannot be
     * derived from the last row.
     */
    public function groupBy(string $column, ?string $label = null): self
    {
        $this->groupBy = $column;
        $this->groupLabel = $label;

        return $this;
    }

    public function getGroupBy(): ?string
    {
        return $this->groupBy;
    }

    /**
     * Let rows be dragged into a stored order.
     *
     * THE ORDER IS A COLUMN, because it is a sequence somebody chose rather
     * than a property of the rows. "Cheapest first" is a sort; "the order the
     * sales page lists them in" cannot be computed from anything and has to be
     * stored.
     *
     * DECLARING IT ALSO MAKES IT THE DEFAULT SORT. Dragging while the table is
     * ordered by name would move a row to a position you cannot see the effect
     * of, which reads as the drag having failed. The client only offers handles
     * when the active sort IS this column.
     */
    public function reorderable(string $column = 'position'): self
    {
        $this->reorderColumn = $column;

        return $this->defaultSort($column, 'asc');
    }

    public function getReorderColumn(): ?string
    {
        return $this->reorderColumn;
    }

    /**
     * The largest page this table serves.
     *
     * The reorder endpoint bounds its request by it: reordering is a gesture on
     * what is visible, and an unbounded list would make it an endpoint for
     * rewriting the whole table's order in one call.
     */
    public function largestPage(): int
    {
        return max([$this->perPage, ...$this->perPageOptions]);
    }

    /**
     * Per-record actions for the row menu, flat or grouped.
     *
     * @param  list<RecordAction|ActionGroup>  $actions
     */
    public function recordActions(array $actions): self
    {
        $this->recordActions = array_values($actions);

        return $this;
    }

    /** @return list<RecordAction|ActionGroup> */
    public function getRecordActions(): array
    {
        return $this->recordActions;
    }

    /**
     * One declared record action by key, searching inside groups too.
     *
     * The endpoint resolves through this and nowhere else - an action the table
     * did not declare is not runnable, which is what keeps "the client names an
     * action" from becoming "the client names a method".
     */
    public function recordAction(string $key): ?RecordAction
    {
        foreach ($this->recordActions as $entry) {
            if ($entry instanceof RecordAction) {
                if ($entry->key === $key) {
                    return $entry;
                }

                continue;
            }

            foreach ($entry->getActions() as $action) {
                if ($action->key === $key) {
                    return $action;
                }
            }
        }

        return null;
    }

    /**
     * Every declared record action, flattened out of its groups.
     *
     * `recordAction()` answers "which one is this key"; this answers "what are
     * they all", which is what anything walking their declarations needs -
     * `field-options` searching the selects an action form declares, for one.
     *
     * @return list<RecordAction>
     */
    public function recordActionList(): array
    {
        $out = [];

        foreach ($this->recordActions as $entry) {
            if ($entry instanceof RecordAction) {
                $out[] = $entry;

                continue;
            }

            foreach ($entry->getActions() as $action) {
                $out[] = $action;
            }
        }

        return $out;
    }

    public function bulkAction(string $key): ?BulkAction
    {
        foreach ($this->bulkActions as $action) {
            if ($action->key === $key) {
                return $action;
            }
        }

        return null;
    }

    /** @param list<string> $values */
    public function tabs(string $column, array $values): self
    {
        $this->tabs = Tabs::make($column, $values);

        return $this;
    }

    /**
     * Eager loading / joins. Applied to the Eloquent builder, never executed here.
     *
     * JOINS ONLY. A count drops this closure when nothing applied needs it - a
     * measured 20x saving, and correct, because a count selects no joined
     * columns. It is NOT correct for a predicate: a `where` placed here is
     * silently absent from every total. Use `constrain()` for that.
     */
    public function query(Closure $query): self
    {
        $this->query = $query;

        return $this;
    }

    /**
     * A predicate that defines what this table lists.
     *
     * Applied to every query the table makes, counts included. This is where
     * "only sessions that have not ended" belongs - a rule about which rows the
     * table is about, rather than which extra columns it can reach.
     */
    public function constrain(Closure $constrain): self
    {
        $this->constrain = $constrain;

        return $this;
    }

    public function defaultSort(string $key, string $direction = 'desc'): self
    {
        $this->defaultSort = $key;
        $this->defaultDirection = $direction;

        return $this;
    }

    public function perPage(int $perPage): self
    {
        $this->perPage = $perPage;

        return $this;
    }

    /** @param list<int> $options */
    public function perPageOptions(array $options): self
    {
        $this->perPageOptions = $options;

        return $this;
    }

    public function keyColumn(string $column): self
    {
        $this->keyColumn = $column;

        return $this;
    }

    /** @param Closure(array<string, mixed>): array<string, mixed> $transform */
    public function transform(Closure $transform): self
    {
        $this->transform = $transform;

        return $this;
    }

    /**
     * Prepare once for the whole page, before per-row action visibility runs.
     *
     * For a `visible()` predicate that needs the record rather than the row:
     * fetch what the page needs here, in one query, instead of once per row.
     *
     * @param  Closure(list<array<string, mixed>>): void  $prepare
     */
    public function prepareRows(Closure $prepare): self
    {
        $this->prepareRows = $prepare;

        return $this;
    }

    /** @param list<string> $columns */
    public function alsoSelect(array $columns): self
    {
        $this->additionalSelect = $columns;

        return $this;
    }

    /**
     * Adds to the raw SELECT list rather than replacing it - roadmap 5.1's
     * custom-field JSON extractions are the only caller today, for the same
     * reason `appendColumns()` exists rather than reusing `columns()`:
     * `alsoSelect()` stays a replace, called once by the resource's own
     * `table()` for whatever it needs (a joined id, a correlated subquery -
     * see `UserResource`'s `role_names`), and a second, unrelated caller
     * appending here must not silently discard that.
     *
     * @param  list<string|Expression>  $columns
     */
    public function appendSelect(array $columns): self
    {
        $this->additionalSelect = [...$this->additionalSelect, ...$columns];

        return $this;
    }

    /**
     * The declared join/scope closure, if any.
     *
     * Exposed so a relation manager can LAYER its foreign-key constraint on top
     * of the table's own join rather than replacing it - otherwise declaring a
     * relation would silently drop the joined columns the table renders.
     */
    public function getQueryModifier(): ?Closure
    {
        return $this->query;
    }

    /** @return list<Column> */
    public function getColumns(): array
    {
        return $this->columns;
    }

    /** @return list<Filter> */
    public function getFilters(): array
    {
        return $this->filters;
    }

    /**
     * The cacheable half. Structure only: no tenant data, no queries, no CSS.
     *
     * @return array<string, mixed>
     */
    /**
     * Make the row body open the record.
     *
     * @param  'view'|'none'  $mode
     */
    public function rowClick(string $mode = 'view'): self
    {
        if (! in_array($mode, ['view', 'none'], true)) {
            throw new InvalidArgumentException(
                "[{$mode}] is not a row-click mode. Use 'view' or 'none'."
            );
        }

        $this->rowClick = $mode === 'none' ? null : $mode;

        return $this;
    }

    public function toSchema(): array
    {
        return [
            'columns' => array_map(static fn (Column $c): array => $c->toArray(), $this->columns),
            // toSchema(), never toArray(): the latter resolves option closures,
            // so stripping options afterwards would still have executed their
            // queries. Options are tenant data and ship with the records
            // instead (addendum Part A).
            'filters' => array_map(static fn (Filter $f): array => $f->toSchema(), $this->filters),
            'tabs' => $this->tabs?->values ?? [],
            // Structure, not behaviour: labels and confirmation copy. What an
            // action DOES never leaves the server.
            'bulkActions' => array_map(
                static fn (BulkAction $a): array => $a->toArray(),
                $this->bulkActions,
            ),
            /*
             * STRUCTURE ONLY, and it stays in the cached schema for the same
             * reason columns do: labels, icons and confirmation copy are the
             * same for every row and every tenant, so sending them once per
             * page instead of once per row is the difference between a menu
             * definition and 25 copies of one.
             *
             * What varies per record - whether an action applies, and where a
             * link points - rides with the ROW. See `ListQuery::actionsFor()`.
             *
             * The `ability` each action needs travels too, so the client can
             * hide what the operator cannot do without a round trip. That is
             * presentation: the endpoint checks the policy again per record,
             * because a hidden button is not a permission (§9 item 3).
             */
            'recordActions' => $this->recordActionSchema(),
            'rowClick' => $this->rowClick,
            // Structure only: which column clusters the rows and what to call
            // it. The VALUES arrive with the rows, because they are data.
            /*
             * The client needs the column to know WHEN to offer handles: only
             * while the active sort is this one, because a drag under any other
             * ordering moves a row somewhere the operator cannot see.
             */
            'reorderable' => $this->reorderColumn,
            'groupBy' => $this->groupBy === null ? null : [
                'key' => $this->groupBy,
                'label' => $this->groupLabel ?? str($this->groupBy)->headline()->value(),
            ],
            'defaultSort' => $this->defaultSort,
            'defaultDirection' => $this->defaultDirection,
            'perPage' => $this->perPage,
            'perPageOptions' => $this->perPageOptions,
        ];
    }

    /**
     * Filter option lists, resolved NOW because they are tenant data.
     *
     * This is the only place the option closures are invoked, and it happens
     * while assembling the data payload - never while building the schema.
     *
     * @return array<string, list<string>>
     */
    public function resolveFilterOptions(): array
    {
        $options = [];

        foreach ($this->filters as $filter) {
            // The INTERFACE, not a concrete class. Checking instanceof
            // SelectFilter silently excluded MultiSelectFilter, so its chips
            // rendered empty with no error anywhere.
            if ($filter instanceof HasOptions) {
                $options[$filter->key] = $filter->resolvedOptions();
            }
        }

        return $options;
    }

    /** Configures the runtime query from the same declaration. */
    /**
     * The model this table lists.
     *
     * OPTIONAL, because a Resource already owns its model and passes it to
     * `toListQuery()` - the table itself never needed to know. A workspace
     * table has no resource behind it, so it has to carry its own.
     */
    public function model(string $model): self
    {
        $this->model = $model;

        return $this;
    }

    public function getModel(): string
    {
        if ($this->model === null) {
            throw new InvalidArgumentException(
                'This table has no model. A table used outside a resource must declare one '
                .'with ->model(), or nothing knows what to query.'
            );
        }

        return $this->model;
    }

    public function toListQuery(string $model): ListQuery
    {
        $query = ListQuery::for($model)
            ->select($this->resolveSelect())
            ->sortable($this->resolveSortable())
            ->searchable($this->resolveSearchable())
            ->searchableRelations($this->searchableRelations)
            ->summaries($this->resolveSummaries())
            ->filters($this->filters)
            ->defaultSort($this->defaultSort, $this->defaultDirection)
            ->perPage($this->perPage)
            ->perPageOptions($this->perPageOptions);

        if ($this->keyColumn !== null) {
            $query->keyColumn($this->keyColumn);
        }

        if ($this->query !== null) {
            $query->join($this->query);
        }

        if ($this->constrain !== null) {
            $query->constrain($this->constrain);
        }

        if ($this->prepareRows !== null) {
            $query->prepareRows($this->prepareRows);
        }

        if ($this->transform !== null) {
            $query->transform($this->transform);
        }

        if ($this->recordActions !== []) {
            $query->recordActions($this->recordActions);
        }

        if ($this->groupBy !== null) {
            $query->groupRowsBy($this->groupBy, $this->resolveGroupColumn());
        }

        if ($this->tabs !== null) {
            $query->tabs($this->tabs->column, $this->tabs->values);
        }

        return $query;
    }

    /**
     * §10: select only what the schema declares. Never SELECT * on a wide table.
     *
     * @return list<string>
     */
    private function resolveSelect(): array
    {
        /*
         * The order column is SELECTED as well as sortable.
         *
         * The keyset cursor is built from the last row's ordering values, read
         * out of the row itself - so a sort column the query never selected
         * yields a null, and the seek then compares against null, which is not
         * a legal SQL comparison. It surfaced as
         * "Illegal operator and value combination" on page two, which says
         * nothing about a missing SELECT.
         */
        $extra = $this->reorderColumn === null ? [] : [$this->reorderColumn];

        $select = [];

        foreach ($this->columns as $column) {
            // The ALIASED expression: a joined column must arrive under the key
            // the schema declares, or the row carries a key nothing reads and
            // the cell renders an em dash with no error anywhere.
            $select[] = $column->selectExpression();
        }

        $all = [...$select, ...$this->additionalSelect, ...$extra];

        /*
         * RAW EXPRESSIONS ARE HELD BACK FROM `array_unique`, which compares by
         * casting to string - and an `Expression` has no string cast, so a
         * single subquery column in `alsoSelect()` threw
         * "Object of class Expression could not be converted to string" from a
         * line that looks like it is only removing duplicates.
         *
         * A subquery column is a legitimate thing to select: it is how a count
         * over a pivot arrives without a join multiplying the rows. Two of them
         * cannot be compared for equality anyway, so they are appended as given.
         */
        $strings = array_values(array_unique(array_filter($all, 'is_string')));
        $expressions = array_values(array_filter($all, static fn ($c): bool => ! is_string($c)));

        return [...$strings, ...$expressions];
    }

    /** @return array<string, string> */
    private function resolveSortable(): array
    {
        $map = [];

        /*
         * The order column is sortable without being a COLUMN.
         *
         * `defaultSort` is validated against this allowlist, so a reorderable
         * table whose position column is not in it throws on first load. But
         * the position NUMBER is an implementation detail - nobody wants a
         * column of 100, 200, 300 - and the sequence itself is the information.
         * Registering it here keeps the ordering legal without putting it on
         * screen, and without inventing a "hidden column" concept whose only
         * user would be this.
         */
        if ($this->reorderColumn !== null) {
            $map[$this->reorderColumn] = $this->reorderColumn;
        }

        foreach ($this->columns as $column) {
            if (! $column->isSortable()) {
                continue;
            }

            $key = $column->resolvedSortKey();
            // A sort key with no explicit database column is assumed to BE one.
            $map[$key] = $column->resolvedDatabaseColumn() ?? $key;
        }

        return $map;
    }

    /**
     * Declared footer aggregates, keyed by column key.
     *
     * The database column is resolved here - with any SELECT alias stripped,
     * for the same reason searchable columns strip it: `plans.name as
     * plan_name` is correct in a select and invalid inside `SUM(...)`.
     *
     * @return array<string, array{summarizer: Summarizer, column: string}>
     */
    private function resolveSummaries(): array
    {
        $out = [];

        foreach ($this->columns as $column) {
            $summarizer = $column->summarizer();

            if ($summarizer === null) {
                continue;
            }

            $declared = $column->resolvedDatabaseColumn() ?? $column->key;

            $out[$column->key] = [
                'summarizer' => $summarizer,
                'column' => trim(preg_split('/\s+as\s+/i', $declared)[0]),
            ];
        }

        return $out;
    }

    /**
     * Searchable columns, with any SELECT alias stripped.
     *
     * A joined column is declared for the select as `plans.name as plan_name`,
     * which is correct there and invalid anywhere else. Passing it through
     * verbatim put the alias into the WHERE clause and produced
     * `... where "plans"."name" as "plan_name" like ?` - a syntax error, and
     * one that only appears once someone marks a joined column searchable.
     *
     * Found by a test fixture doing exactly that.
     *
     * @return list<string>
     */
    private function resolveSearchable(): array
    {
        $columns = [];

        foreach ($this->columns as $column) {
            if (! $column->isSearchable()) {
                continue;
            }

            $declared = $column->resolvedDatabaseColumn() ?? $column->key;

            // Case-insensitive, because `AS` is as valid as `as`.
            $columns[] = trim(preg_split('/\s+as\s+/i', $declared)[0]);
        }

        return $columns;
    }
}
