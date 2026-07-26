<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables;

use Closure;
use PanelKit\Panel\Tables\Columns\Column;
use PanelKit\Panel\Tables\Filters\Filter;
use PanelKit\Panel\Tables\Filters\SelectFilter;

/**
 * Declarative table definition. Produces the schema, and configures ListQuery.
 *
 * THE CENTRAL SPLIT, and the reason this class exists separately from ListQuery:
 *
 *   SCHEMA  structure — which columns, filters and tabs exist. Identical for
 *           every tenant. Cached. Travels once per session.
 *   DATA    rows, and anything tenant-specific such as a filter's option list.
 *           Travels on every interaction.
 *
 * Addendum Part A is explicit that filter OPTIONS are data, not schema. Baking a
 * tenant's routers into the cached schema would mean a cache entry per tenant
 * per resource; keeping them out collapses that to one entry per permission set
 * per resource — a hundredfold reduction at a hundred tenants — and makes the
 * entry incapable of leaking tenant data however badly its key is built.
 *
 * Nothing here may execute a query. Option closures are stored, never called,
 * until the data payload is assembled (antipatterns §3.3: three eager
 * `->options(Router::where(...))` calls in action definitions took a page down
 * for every tenant, because definitions evaluate at render time).
 */
final class Table
{
    /** @var list<Column> */
    private array $columns = [];

    /** @var list<Filter> */
    private array $filters = [];

    private ?Tabs $tabs = null;

    private ?Closure $query = null;

    private string $defaultSort = 'created_at';

    private string $defaultDirection = 'desc';

    private int $perPage = 10;

    /** @var list<int> */
    private array $perPageOptions = [10, 25, 50, 100];

    private ?Closure $transform = null;

    private ?string $keyColumn = null;

    /** @var list<string> extra database columns to select that no column declares */
    private array $additionalSelect = [];

    public static function make(): self
    {
        return new self();
    }

    /** @param list<Column> $columns */
    public function columns(array $columns): self
    {
        $this->columns = $columns;

        return $this;
    }

    /** @param list<Filter> $filters */
    public function filters(array $filters): self
    {
        $this->filters = $filters;

        return $this;
    }

    /** @param list<string> $values */
    public function tabs(string $column, array $values): self
    {
        $this->tabs = Tabs::make($column, $values);

        return $this;
    }

    /** Eager loading / joins. Applied to the Eloquent builder, never executed here. */
    public function query(Closure $query): self
    {
        $this->query = $query;

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

    /** @param list<string> $columns */
    public function alsoSelect(array $columns): self
    {
        $this->additionalSelect = $columns;

        return $this;
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
     * while assembling the data payload — never while building the schema.
     *
     * @return array<string, list<string>>
     */
    public function resolveFilterOptions(): array
    {
        $options = [];

        foreach ($this->filters as $filter) {
            if ($filter instanceof SelectFilter) {
                $options[$filter->key] = $filter->resolvedOptions();
            }
        }

        return $options;
    }

    /** Configures the runtime query from the same declaration. */
    public function toListQuery(string $model): ListQuery
    {
        $query = ListQuery::for($model)
            ->select($this->resolveSelect())
            ->sortable($this->resolveSortable())
            ->searchable($this->resolveSearchable())
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

        if ($this->transform !== null) {
            $query->transform($this->transform);
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
        $select = [];

        foreach ($this->columns as $column) {
            $select[] = $column->resolvedDatabaseColumn() ?? $column->key;
        }

        return array_values(array_unique([...$select, ...$this->additionalSelect]));
    }

    /** @return array<string, string> */
    private function resolveSortable(): array
    {
        $map = [];

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

    /** @return list<string> */
    private function resolveSearchable(): array
    {
        $columns = [];

        foreach ($this->columns as $column) {
            if ($column->isSearchable()) {
                $columns[] = $column->resolvedDatabaseColumn() ?? $column->key;
            }
        }

        return $columns;
    }
}
