<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables;

use Closure;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use InvalidArgumentException;
use PanelKit\Panel\Actions\ActionGroup;
use PanelKit\Panel\Actions\RecordAction;
use PanelKit\Panel\Tables\Filters\Filter;
use PanelKit\Panel\Tables\Filters\TrashedFilter;

/**
 * The shared list query, extracted in Phase 3 from three hardcoded controllers.
 *
 * Everything the §10 mandates require lives here once, so no resource can forget
 * one of them:
 *
 *   - toBase()          no model hydration on a read-only list
 *   - explicit select   never SELECT * on a wide table
 *   - keyset seek       OFFSET 100000 walks 100,000 rows; a seek does not
 *   - no COUNT          the total is returned as a closure the caller defers
 *   - constant queries  one query, plus one per declared join
 *
 * Tenant scoping is deliberately NOT handled here. It comes from the global
 * scope on the model, which `toBase()` applies before dropping to the query
 * builder. Re-adding it here would give resources two places to get it wrong.
 *
 * The three shapes Phase 2 surfaced, all of which a two-example abstraction
 * would have missed, are first-class:
 *
 *   - tri-state boolean filters      (BooleanFilter, null !== false)
 *   - computed columns               (transform(), plus sortAs() so the display
 *                                     key can differ from the ORDER BY column)
 *   - data-derived filter options    (SelectFilter::options(Closure))
 */
final class ListQuery
{
    /** @var class-string */
    private string $model;

    /** @var list<string> */
    private array $select = ['*'];

    /** @var array<string, string> display key => qualified ORDER BY column */
    private array $sortable = [];

    /** @var list<string> qualified columns searched by prefix */
    private array $searchable = [];

    /** @var list<Filter> */
    private array $filters = [];

    /** @var array<string, array{summarizer: Summarizer, column: string}> */
    private array $summaries = [];

    private ?Closure $join = null;

    /**
     * Predicates that define WHAT THIS TABLE LISTS, never a join.
     *
     * Applied to every query the table makes - rows, counts, exports, bulk
     * selections. See `base()` for why it cannot share a hook with the join.
     */
    private ?Closure $constrain = null;

    private ?Closure $transform = null;

    /**
     * The declared record actions, for per-row availability.
     *
     * @var list<RecordAction|ActionGroup>
     */
    private array $recordActions = [];

    /**
     * This table's slice of the query string, when it shares a page.
     *
     * Null for a resource index - the only table on its page, so it owns the
     * flat query string and its URLs stay exactly as they were.
     */
    private ?string $namespace = null;

    /** The grouping key as the client knows it, and the column behind it. */
    private ?string $groupKey = null;

    private ?string $groupColumn = null;

    private ?Tabs $tabs = null;

    private string $defaultSort = 'created_at';

    private string $defaultDirection = 'desc';

    private int $perPage = 10;

    /**
     * Allowlist for the per-page selector.
     *
     * An allowlist rather than a clamp: `?perPage=100000` would otherwise
     * become a legitimate way to pull an entire tenant table in one request,
     * which is both a performance and an exfiltration concern.
     *
     * @var list<int>
     */
    private array $perPageOptions = [10, 25, 50, 100];

    private string $keyColumn = 'id';

    /**
     * keyset | offset.
     *
     * KEYSET is the default because OFFSET 100000 makes the database walk
     * 100,000 rows it then discards, so page 2,000 gets steadily slower.
     *
     * But it is a DEFAULT, not a mandate. Offset is genuinely better for a small
     * table where an operator wants to jump to page 7, and refusing to offer it
     * would be the framework imposing a decision it cannot make - a 200-row
     * lookup table pays nothing for OFFSET and gains real navigation.
     */
    private string $paginationStrategy = 'keyset';

    /**
     * deferred | exact | approximate | none.
     *
     *   deferred     count runs AFTER the rows are sent (default)
     *   exact        count blocks the response. Correct for a small table.
     *   approximate  engine statistics. Instant, and wrong by a little.
     *   none         no total at all. Cheapest, and no page count.
     */
    private string $countStrategy = 'deferred';

    private function __construct(string $model)
    {
        $this->model = $model;
    }

    /** @param class-string $model */
    public static function for(string $model): self
    {
        return new self($model);
    }

    /** @param list<string> $columns */
    public function select(array $columns): self
    {
        $this->select = $columns;

        return $this;
    }

    /**
     * Declared joins, so the query count stays constant rather than N+1.
     *
     * JOINS ONLY. A predicate here is silently dropped from counts - see the
     * comment in `base()`. Use `constrain()` for anything that narrows the set
     * of rows the table describes.
     */
    public function join(Closure $join): self
    {
        $this->join = $join;

        return $this;
    }

    /** A predicate applied to every query, counts included. */
    public function constrain(Closure $constrain): self
    {
        $this->constrain = $constrain;

        return $this;
    }

    /**
     * Allowlist of sortable columns.
     *
     * This is a security boundary, not ergonomics: the value is interpolated
     * into an ORDER BY, which no query binding can parameterise. Anything not in
     * this map falls back to the default sort.
     *
     * @param  array<string, string>  $map  display key => qualified column
     */
    public function sortable(array $map): self
    {
        $this->sortable = $map;

        return $this;
    }

    /** @param list<string> $columns */
    public function searchable(array $columns): self
    {
        $this->searchable = $columns;

        return $this;
    }

    /**
     * Footer aggregates, keyed by column key.
     *
     * @param  array<string, array{summarizer: Summarizer, column: string}>  $summaries
     */
    public function summaries(array $summaries): self
    {
        $this->summaries = $summaries;

        return $this;
    }

    /** @param list<Filter> $filters */
    public function filters(array $filters): self
    {
        $this->filters = $filters;

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

    /**
     * Status tabs with counts from ONE grouped query (addendum C1).
     *
     * @param  list<string>  $values
     */
    public function tabs(string $column, array $values): self
    {
        $this->tabs = Tabs::make($column, $values);

        return $this;
    }

    /** keyset (default) or offset. See the property docblock for the trade. */
    public function paginationStrategy(string $strategy): self
    {
        if (! in_array($strategy, ['keyset', 'offset'], true)) {
            throw new InvalidArgumentException("Unknown pagination strategy [{$strategy}].");
        }

        $this->paginationStrategy = $strategy;

        return $this;
    }

    /** deferred (default), exact, approximate, or none. */
    public function countStrategy(string $strategy): self
    {
        if (! in_array($strategy, ['deferred', 'exact', 'approximate', 'none'], true)) {
            throw new InvalidArgumentException("Unknown count strategy [{$strategy}].");
        }

        $this->countStrategy = $strategy;

        return $this;
    }

    /** Qualified primary key, used as the keyset tiebreaker. */
    public function keyColumn(string $column): self
    {
        $this->keyColumn = $column;

        return $this;
    }

    /**
     * Row post-processing for computed columns.
     *
     * Runs on the already-fetched page only, so it costs nothing per row in the
     * database and cannot reintroduce an N+1 - provided the closure does not
     * query, which is the one rule callers must keep.
     *
     * @param  Closure(array<string, mixed>): array<string, mixed>  $transform
     */
    /**
     * @param  list<RecordAction|ActionGroup>  $actions
     */
    public function groupRowsBy(string $key, string $column): self
    {
        $this->groupKey = $key;
        $this->groupColumn = $column;

        return $this;
    }

    /**
     * @param  list<\PanelKit\Panel\Actions\RecordAction|\PanelKit\Panel\Actions\ActionGroup>  $actions
     */
    /**
     * Read this table's state from `?{namespace}[sort]=…` instead of `?sort=…`.
     *
     * Set by `Workspace`, never by a resource index. The name must be a plain
     * identifier: it becomes a query-string key and, on the client, a prop name.
     */
    public function within(string $namespace): self
    {
        if (preg_match('/^[a-z][a-z0-9_]*$/', $namespace) !== 1) {
            throw new \InvalidArgumentException("[{$namespace}] is not a valid table namespace.");
        }

        $this->namespace = $namespace;

        return $this;
    }

    public function namespaceName(): ?string
    {
        return $this->namespace;
    }

    public function recordActions(array $actions): self
    {
        $this->recordActions = $actions;

        return $this;
    }

    /**
     * Which declared actions apply to this row, and where the links point.
     *
     * SENT AS KEYS, NOT AS MENUS. The labels, icons and confirmation copy are
     * identical for every row, so they travel once in the schema; repeating
     * them per row would be 25 copies of the same menu in every page payload.
     *
     * Evaluated against the ROW ARRAY - no model is hydrated, which is the
     * whole reason the list is fast on a million rows.
     *
     * Returns null when the resource declares no actions at all, so the client
     * can tell "no filtering needed" apart from "nothing is available".
     *
     * @param  array<string, mixed>  $row
     * @return array{keys: list<string>, urls: array<string, string>}|null
     */
    private function actionsFor(array $row): ?array
    {
        if ($this->recordActions === []) {
            return null;
        }

        $keys = [];
        $urls = [];

        foreach ($this->recordActions as $entry) {
            $actions = $entry instanceof ActionGroup
                ? $entry->getActions()
                : [$entry];

            foreach ($actions as $action) {
                if (! $action->appliesTo($row)) {
                    continue;
                }

                $keys[] = $action->key;

                if ($action->isLink()) {
                    $urls[$action->key] = (string) $action->urlFor($row);
                }
            }
        }

        return ['keys' => $keys, 'urls' => $urls];
    }

    /**
     * Transform, then annotate. In that order, deliberately - a transform may
     * rename or derive the very columns a `visible()` predicate reads.
     *
     * @param  list<array<string, mixed>>  $rows
     * @return list<array<string, mixed>>
     */
    private function decorate(array $rows): array
    {
        if ($this->transform !== null) {
            $rows = array_map($this->transform, $rows);
        }

        if ($this->recordActions === []) {
            return $rows;
        }

        return array_map(function (array $row): array {
            $resolved = $this->actionsFor($row);

            return $resolved === null
                ? $row
                : [...$row, '_actions' => $resolved['keys'], '_actionUrls' => $resolved['urls']];
        }, $rows);
    }

    public function transform(Closure $transform): self
    {
        $this->transform = $transform;

        return $this;
    }

    /**
     * Rows among $ids that changed since $since.
     *
     * This is what makes the poll driver cheap enough to be the default. It is
     * NOT the polling S8 warns against - that warning is about re-rendering a
     * component server-side once per viewer per tick, so cost scales with
     * audience. This asks one bounded, indexed question:
     *
     *     WHERE id IN (visible ids) AND updated_at > ?
     *
     * The id set is capped by the page size, so the query is O(page), never
     * O(table), and it returns only rows that actually changed - usually none,
     * in which case the response is an empty array.
     *
     * @param  list<int|string>  $ids  Ids currently on screen.
     * @return list<array<string, mixed>>
     */
    public function changedSince(array $ids, string $since): array
    {
        if ($ids === []) {
            return [];
        }

        /** @var \Illuminate\Database\Eloquent\Builder $eloquent */
        $eloquent = $this->model::query();

        // The diff SELECTS the same columns the list does, joined ones included,
        // so this join is always needed - unlike the count paths in base().
        if ($this->join !== null) {
            ($this->join)($eloquent);
        }

        // toBase() applies the tenant scope, so a crafted id list can only ever
        // return rows this tenant already owns.
        $rows = $eloquent->toBase()
            ->select($this->select)
            ->whereIn($this->keyColumn, $ids)
            // Parsed, not passed through. The client sends ISO-8601 with an
            // offset (2026-07-27T09:15:00+00:00) while the column holds
            // 'Y-m-d H:i:s', and comparing those as strings silently matches
            // nothing - an endpoint that returns 200 and an empty array forever.
            ->where($this->qualifiedUpdatedAt(), '>', $this->normaliseTimestamp($since))
            ->limit(count($ids))
            ->get()
            ->map(static fn (object $r): array => (array) $r)
            ->all();

        return $this->transform === null ? $rows : array_map($this->transform, $rows);
    }

    /**
     * Client timestamp to a comparable database value, in UTC.
     *
     * Returns a far-future value on garbage input rather than throwing or
     * defaulting to the epoch: the epoch would return every row on every poll,
     * which is the expensive wrong answer.
     */
    private function normaliseTimestamp(string $since): string
    {
        try {
            return Carbon::parse($since)->utc()->format('Y-m-d H:i:s');
        } catch (\Throwable) {
            return Carbon::now()->addCentury()->format('Y-m-d H:i:s');
        }
    }

    /**
     * Whether anything applied to this query references a JOINED column.
     *
     * Columns are declared table-qualified throughout, so "belongs to the base
     * table" is decidable from the name. Anything unqualified is assumed to be
     * the base table, which is how an unqualified column already behaves in the
     * generated SQL.
     *
     * Conservative by construction: if this cannot prove the join is
     * unnecessary it keeps it, so the worst case is the cost it has today.
     *
     * @param  array<string, mixed>  $state
     */
    private function joinRequired(array $state): bool
    {
        $table = (new $this->model)->getTable();

        $isJoined = static fn (string $column): bool => str_contains($column, '.')
            && ! str_starts_with($column, $table.'.');

        // A search touches every searchable column, so any joined one counts.
        if (($state['search'] ?? '') !== '') {
            foreach ($this->searchable as $column) {
                if ($isJoined($column)) {
                    return true;
                }
            }
        }

        foreach ($this->filters as $filter) {
            $value = $state['filters'][$filter->key] ?? null;

            // Only APPLIED filters matter - a declared filter nobody used adds
            // no predicate. The trashed filter always applies, and always
            // targets the base table's own deleted_at.
            if ($value === null && ! $filter instanceof TrashedFilter) {
                continue;
            }

            if ($isJoined($filter->resolvedColumn())) {
                return true;
            }
        }

        if ($this->tabs !== null && $isJoined($this->tabs->column)) {
            return true;
        }

        return false;
    }

    /**
     * Every declared aggregate, in ONE query over the filtered set.
     *
     * The naive version runs a query per summarised column, which is the same
     * N+1 shape as counting tabs one at a time - invisible at two columns and a
     * full extra scan each at five. One SELECT with several aggregate
     * expressions costs exactly one pass.
     *
     * Aliases are derived from the column KEY and sanitised, because they are
     * interpolated into the SELECT alongside the aggregate.
     *
     * @param  array<string, mixed>  $state
     * @return array<string, int|float|null>
     */
    private function summarise(array $state): array
    {
        // The join is only needed if an aggregate reads a joined column - the
        // same question the counts ask, and usually the same answer.
        $needsJoin = $this->joinRequired($state);

        foreach ($this->summaries as $summary) {
            $column = $summary['summarizer']->readsColumn() ?? $summary['column'];

            if (str_contains($column, '.') && ! str_starts_with($column, (new $this->model)->getTable().'.')) {
                $needsJoin = true;

                break;
            }
        }

        $query = $this->base($state, forCount: ! $needsJoin);

        $expressions = [];
        $aliases = [];

        foreach ($this->summaries as $key => $summary) {
            // Derived from the declared key, never from input, and stripped to
            // an identifier because it lands in the SELECT unquoted.
            $alias = 'pk_sum_'.preg_replace('/[^a-zA-Z0-9_]/', '_', $key);

            $expressions[] = $summary['summarizer']->expression($alias, $summary['column']);
            $aliases[$key] = $alias;
        }

        $row = $query->selectRaw(implode(', ', $expressions))->first();

        $out = [];

        foreach ($aliases as $key => $alias) {
            $value = $row?->{$alias};

            // Null means "no matching rows", which is a real answer and not
            // zero: an average over nothing is not 0, it is undefined.
            $out[$key] = $value === null ? null : (float) $value;
        }

        return $out;
    }

    private function hasTrashedFilter(): bool
    {
        foreach ($this->filters as $filter) {
            if ($filter instanceof TrashedFilter) {
                return true;
            }
        }

        return false;
    }

    private function qualifiedUpdatedAt(): string
    {
        // Qualified, because the list may join another table that also has an
        // updated_at and an unqualified column is ambiguous the moment it does.
        $table = str_contains($this->keyColumn, '.')
            ? substr($this->keyColumn, 0, strpos($this->keyColumn, '.'))
            : (new $this->model)->getTable();

        return "{$table}.updated_at";
    }

    /**
     * A SINGLE record, through the same select and joins the list uses.
     *
     * The detail page renders the table's columns, so it must fetch them the
     * same way. Reading the raw model instead silently drops every joined
     * column - the Plan field rendered an em dash, which an operator reads as
     * "this client has no plan" rather than "this value was not loaded".
     *
     * @return array<string, mixed>|null
     */
    public function find(int|string $id): ?array
    {
        /** @var \Illuminate\Database\Eloquent\Builder $eloquent */
        $eloquent = $this->model::query();

        if ($this->join !== null) {
            ($this->join)($eloquent);
        }

        // toBase() applies the tenant global scope before dropping to the query
        // builder, so another tenant's record is simply not found.
        $row = $eloquent->toBase()
            ->select($this->select)
            ->where($this->keyColumn, $id)
            ->first();

        if ($row === null) {
            return null;
        }

        $row = (array) $row;

        return $this->transform === null ? $row : ($this->transform)($row);
    }

    /**
     * The set a bulk action or an export should operate on.
     *
     * REBUILT FROM THE REQUEST, NEVER TRUSTED FROM THE CLIENT. The browser
     * sends the same filter parameters it used to draw the table, and this
     * re-derives the query from them - it does not accept a row count, a list
     * of "everything", or a where clause. The only thing the client can widen
     * is which of its OWN visible rows are included.
     *
     * `$ids` is an intersection, not a source of truth: it narrows the already
     * scoped set. An id belonging to another tenant survives the whereIn and is
     * then removed by the global scope, so a forged selection matches nothing
     * rather than reaching across the boundary.
     *
     * Passing null means "everything matching the current filters", which is
     * the select-all-matching case §8 requires.
     *
     * @param  list<int|string>|null  $ids
     */
    public function matching(Request $request, ?array $ids = null): Builder
    {
        $query = $this->base($this->readState($request));

        if ($ids !== null) {
            $query->whereIn($this->qualifiedKey(), $ids);
        }

        return $query;
    }

    /**
     * Walk the whole filtered set in chunks, for an export.
     *
     * Reuses the list's own select, joins and row transform, so the export
     * carries the same VALUES the table was built from - a joined plan name
     * where the screen shows a plan name, rather than the raw `plan_id`.
     * Rebuilding the query separately is how an export ends up full of foreign
     * keys that nobody notices until a customer opens the file.
     *
     * Per-column PRESENTATION is deliberately not applied: casing, date
     * formatting and badge styling are decided in the Vue layer, so a status
     * exports as `suspended` rather than `Suspended` and a date as an ISO-ish
     * timestamp rather than "27 May 2026". A CSV is read by spreadsheets and
     * scripts, and a machine-readable date beats a prettier one.
     *
     * KEYSET, not OFFSET, for the same reason the runner is: at 100k rows
     * `OFFSET 90000` re-walks ninety thousand rows to skip them, so the last
     * chunk costs the most and the export gets slower the longer it runs.
     * There is no shrinking-set hazard here - an export does not write - but
     * the cost argument alone settles it.
     *
     * @param  list<int|string>|null  $ids
     * @param  Closure(list<array<string, mixed>>): void  $callback
     * @return int Rows emitted.
     */
    public function eachMatching(Request $request, ?array $ids, int $chunkSize, Closure $callback): int
    {
        $state = $this->readState($request);
        $key = $this->qualifiedKey();

        $emitted = 0;
        $after = null;

        while (true) {
            $query = $this->base($state)->select($this->select);

            if ($ids !== null) {
                $query->whereIn($key, $ids);
            }

            if ($after !== null) {
                $query->where($key, '>', $after);
            }

            $rows = $query->orderBy($key)->limit($chunkSize)->get()->all();

            if ($rows === []) {
                break;
            }

            $mapped = array_map(static fn (object $row): array => (array) $row, $rows);

            if ($this->transform !== null) {
                $mapped = array_map($this->transform, $mapped);
            }

            $callback($mapped);

            $emitted += count($mapped);
            /*
             * BY THE ROW'S KEY NAME, not the key COLUMN. See `rowKeyName()`:
             * a qualified `audit_entries.id` never appears as a row key, so this
             * read null, the loop broke after the first chunk, and an export of
             * a joined resource silently produced one page of rows and called it
             * the whole file.
             */
            $after = ((array) end($rows))[$this->rowKeyName()] ?? null;

            if (count($rows) < $chunkSize || $after === null) {
                break;
            }
        }

        return $emitted;
    }

    /** The key column, table-qualified when the list joins. */
    public function qualifiedKey(): string
    {
        if (str_contains($this->keyColumn, '.')) {
            return $this->keyColumn;
        }

        return (new $this->model)->getTable().'.'.$this->keyColumn;
    }

    public function keyColumnName(): string
    {
        return $this->keyColumn;
    }

    /**
     * The key as it appears on a ROW, which is not the same as the key column.
     *
     * A resource that joins declares `keyColumn('audit_entries.id')`, because
     * an unqualified `id` is ambiguous in SQL the moment a second table is in
     * the query. The rows that come back are keyed by the SELECT alias, which
     * has no table prefix - so reading `$row['audit_entries.id']` finds nothing
     * and reading `$row['id']` finds it.
     *
     * THIS EXISTED AS AN ASSUMPTION IN TWO PLACES AND WAS WRONG IN BOTH. The
     * cursor did `(int) $last['id']` outright, so the Activity screen - the one
     * resource with a qualified key and a join - died with `Undefined array key
     * "id"` the moment it had more than one page of rows. Under a page it never
     * fired, because a last page encodes no cursor at all, which is why every
     * test passed: the suite creates a handful of entries and the seeded
     * database has thousands.
     */
    private function rowKeyName(): string
    {
        return str_contains($this->keyColumn, '.')
            ? substr($this->keyColumn, strrpos($this->keyColumn, '.') + 1)
            : $this->keyColumn;
    }

    /** @return list<string> The columns the list selects, for an export header. */
    public function selectedColumns(): array
    {
        return $this->select;
    }

    public function run(Request $request): ListResult
    {
        if ($this->sortable === []) {
            throw new InvalidArgumentException('A list query must declare at least one sortable column.');
        }

        if (! array_key_exists($this->defaultSort, $this->sortable)) {
            throw new InvalidArgumentException(
                "Default sort [{$this->defaultSort}] is not in the sortable allowlist."
            );
        }

        $state = $this->readState($request);

        // Request-supplied per-page, but only if it is on the allowlist.
        $requested = (int) $this->param($request, 'perPage', (string) $this->perPage);
        $perPage = in_array($requested, $this->perPageOptions, true) ? $requested : $this->perPage;

        /*
         * ONE ROW MORE THAN THE PAGE, and the extra row is never shown.
         *
         * "The page was full, so there is probably more" is not a fact, it is a
         * guess - and it is wrong exactly when the row count is a multiple of
         * the page size. With 20 routers and a page of 10, page 2 came back
         * full, so a cursor was issued, so Next stayed enabled, so page 3
         * rendered "No routers yet" under a paginator reading "3 of 2".
         *
         * Asking for `perPage + 1` replaces the guess with an answer: if the
         * extra row exists there IS a next page, and if it does not there is
         * not. The cost is reading one row that gets discarded, which is the
         * cheapest possible way to know.
         */
        $rows = $this->fetch($state, $perPage);

        $hasMore = count($rows) > $perPage;

        // The probe row is dropped before anything sees it.
        $rows = $hasMore ? array_slice($rows, 0, $perPage) : $rows;

        // Derived from the actual last row of the PAGE rather than trusted from
        // the client.
        $last = $rows === [] ? null : $rows[array_key_last($rows)];

        /*
         * The cursor carries EVERY ordering value, in the order they are sorted
         * by - read from the row's own keys rather than from the qualified
         * columns, because that is the shape the client got.
         */
        $nextCursor = $last === null || ! $hasMore
            ? null
            : Cursor::encode(
                array_map(
                    static fn (string $key): mixed => $last[$key] ?? null,
                    $this->groupKey === null || $this->groupKey === $state['sort']
                        ? [$state['sort']]
                        : [$this->groupKey, $state['sort']],
                ),
                (int) ($last[$this->rowKeyName()] ?? 0),
            );

        return new ListResult(
            records: $rows,
            state: $state,
            filterSchema: array_map(static fn (Filter $f): array => $f->toArray(), $this->filters),
            nextCursor: $nextCursor,
            perPage: $perPage,
            perPageOptions: $this->perPageOptions,
            tabs: $this->tabs?->values ?? [],
            // Counts come from the query WITHOUT the tab constraint - with it,
            // every tab except the active one would read zero, which looks like
            // real data rather than a bug. Deferred so they never block rows.
            // ALL summaries in ONE query. Five summarised columns must not be
            // five scans of the same filtered set.
            summary: $this->summaries === [] ? null : fn (): array => $this->summarise($state),
            tabCounts: $this->tabs === null
                ? null
                : fn (): array => $this->tabs->counts($this->base($state, applyTab: false, forCount: true)),
            // A closure, not a number. The caller wraps it in Inertia::defer()
            // so the rows paint before any COUNT runs (§10).
            total: fn (): int => $this->base($state, forCount: true)->count(),
        );
    }

    /**
     * How the total is produced, per the declared strategy.
     *
     * @param  array<string, mixed>  $state
     * @return Closure(): ?int
     */
    private function totalResolver(array $state): Closure
    {
        return match ($this->countStrategy) {
            'none' => static fn (): ?int => null,

            /*
             * Engine statistics: instant, and approximate. Postgres keeps
             * reltuples on pg_class and it is close enough for "about 500k"
             * while costing nothing. It is only valid UNFILTERED - a filtered
             * approximate count would be a number that looks precise and is
             * simply wrong, so this falls back to an exact count the moment any
             * filter or search is applied.
             */
            'approximate' => fn (): ?int => $this->isUnfiltered($state)
                ? $this->approximateTotal()
                : $this->base($state, forCount: true)->count(),

            default => fn (): int => $this->base($state, forCount: true)->count(),
        };
    }

    /** @param array<string, mixed> $state */
    private function isUnfiltered(array $state): bool
    {
        if (($state['search'] ?? '') !== '' || ($state['tab'] ?? null) !== null) {
            return false;
        }

        foreach ((array) ($state['filters'] ?? []) as $value) {
            if ($value !== null) {
                return false;
            }
        }

        return true;
    }

    /**
     * Row estimate from engine statistics.
     *
     * Postgres only. Every other engine falls back to an exact count rather
     * than guessing - MySQL's information_schema.TABLE_ROWS is unreliable
     * enough on InnoDB to be misleading, and SQLite has nothing.
     */
    private function approximateTotal(): ?int
    {
        $connection = $this->model::query()->getConnection();

        if ($connection->getDriverName() !== 'pgsql') {
            return $this->base(['search' => '', 'filters' => [], 'sort' => $this->defaultSort, 'direction' => 'desc', 'cursor' => null], forCount: true)->count();
        }

        $table = (new $this->model)->getTable();

        $row = $connection->selectOne(
            'select reltuples::bigint as estimate from pg_class where relname = ?',
            [$table],
        );

        return $row === null ? null : max(0, (int) $row->estimate);
    }

    /**
     * @return array{search: string, sort: string, direction: string, cursor: string|null, filters: array<string, mixed>}
     */
    private function readState(Request $request): array
    {
        $sort = (string) $this->param($request, 'sort', $this->defaultSort);
        $direction = strtolower((string) $this->param($request, 'direction', $this->defaultDirection));

        $filters = [];

        foreach ($this->filters as $filter) {
            // Deliberately preserved even when null, so the frontend can tell
            // "filter exists but is unset" from "filter does not exist".
            $filters[$filter->key] = $filter->normalise($this->param($request, $filter->key));
        }

        return [
            'tab' => $this->tabs?->normalise($this->param($request, 'tab')),
            'search' => trim((string) $this->param($request, 'search', '')),
            'sort' => array_key_exists($sort, $this->sortable) ? $sort : $this->defaultSort,
            'direction' => $direction === 'asc' ? 'asc' : 'desc',
            'cursor' => $this->param($request, 'cursor') ? (string) $this->param($request, 'cursor') : null,
            'page' => max(1, (int) $this->param($request, 'page', 1)),
            'filters' => $filters,
        ];
    }

    /**
     * One query parameter, read from this table's own namespace.
     *
     * WHY A NAMESPACE EXISTS AT ALL: a workspace page hosts several independent
     * tables, and every one of them wants to be called `page`, `sort` and
     * `search`. Sharing the flat query string means paging the redemption
     * history also pages the active rewards beside it, and neither table can
     * express its own state in a shareable URL.
     *
     * BRACKET NOTATION rather than a `history_page` prefix: `?history[page]=2`
     * parses into a nested array natively, so there is no delimiter to collide
     * with a column name that happens to contain an underscore - and every
     * column name in this application contains an underscore.
     *
     * An unnamespaced table reads the flat query string exactly as before, which
     * is what keeps every existing resource URL working and shareable.
     */
    private function param(Request $request, string $name, mixed $default = null): mixed
    {
        if ($this->namespace === null) {
            return $request->query($name, $default);
        }

        $scoped = $request->query($this->namespace);

        if (! is_array($scoped)) {
            return $default;
        }

        return $scoped[$name] ?? $default;
    }

    /**
     * @param  array{search: string, sort: string, direction: string, cursor: string|null, filters: array<string, mixed>}  $state
     * @return list<array<string, mixed>>
     */
    private function fetch(array $state, int $perPage): array
    {
        /*
         * The probe is applied to the LIMIT only, never to the offset.
         *
         * `forPage($page, $size)` derives its offset from the size it is given,
         * so inflating the size here would move the window: page 2 of a 10-row
         * table would start at row 11 instead of row 10 and quietly skip one.
         * The offset uses the real page size; only the fetch limit is one
         * larger.
         */
        $limit = $perPage + 1;

        $column = $this->sortable[$state['sort']];
        $direction = $state['direction'];

        $ordering = $this->orderingColumns($column);

        $query = $this->base($state)->select($this->select);

        /*
         * Group first, then the chosen sort. That single extra ORDER BY term is
         * the whole of grouping - rows arrive clustered, and the client inserts
         * a heading wherever the value changes.
         */
        foreach ($ordering as $orderColumn) {
            $query->orderBy($orderColumn, $direction);
        }

        /*
         * The tiebreaker is also the trailing column on every sort index.
         * Without it the seek below is ambiguous and rows repeat or vanish
         * across page boundaries.
         *
         * QUALIFIED, via the helper that exists for exactly this. It used to
         * order by the raw `keyColumn`, which is `id` unless a resource says
         * otherwise - so the first table to declare a join produced
         * "ambiguous column name: id" and nothing in the message pointed at the
         * tiebreaker. Resources should still set `keyColumn`, but forgetting it
         * is now a working query rather than a broken page.
         */
        $query->orderBy($this->qualifiedKey(), $direction);

        if ($this->paginationStrategy === 'offset') {
            // Explicitly opt-in. Fine on a small table, and the reason page
            // 2,000 is slow on a large one.
            $page = max(1, (int) ($state['page'] ?? 1));
            $query->forPage($page, $perPage);
        } else {
            $this->applyCursor($query, $state, $ordering, $direction);
        }

        $rows = array_map(
            static fn (object $row): array => (array) $row,
            $query->limit($limit)->get()->all(),
        );

        return $this->decorate($rows);
    }

    /**
     * @param  array{search: string, sort: string, direction: string, cursor: string|null, filters: array<string, mixed>}  $state
     */
    private function base(array $state, bool $applyTab = true, bool $forCount = false): Builder
    {
        /** @var \Illuminate\Database\Eloquent\Builder $eloquent */
        $eloquent = $this->model::query();

        /*
         * A TRASHED FILTER TAKES OVER THE SOFT-DELETE PREDICATE.
         *
         * Eloquent's soft-delete scope is resolved by `toBase()` below, long
         * before a filter runs, so a filter cannot lift it afterwards. When the
         * table declares a TrashedFilter the scope is removed here and the
         * filter applies `deleted_at IS NULL` itself - one place decides, in a
         * form the index can serve.
         *
         * ONLY when the filter is declared. Removing the scope unconditionally
         * would make every table without one start listing deleted records,
         * which is the kind of change that looks like a data bug.
         */
        if ($this->hasTrashedFilter()) {
            $eloquent->withoutGlobalScope(SoftDeletingScope::class);
        }

        /*
         * THE JOIN IS SKIPPED FOR COUNTS THAT DO NOT NEED IT.
         *
         * A count selects no joined columns, so the join exists only to let a
         * FILTER or the SEARCH reference one. When nothing applied does, it is
         * pure cost - and at scale not a small one: counting a tenant's 200,000
         * clients took 503 ms through a LEFT JOIN to plans and 25 ms without
         * it, because every counted row did a primary-key lookup whose result
         * was then discarded.
         *
         * Twenty times, for a join nothing read.
         */
        if ($this->join !== null && ! ($forCount && ! $this->joinRequired($state))) {
            ($this->join)($eloquent);
        }

        /*
         * A CONSTRAINT ALWAYS APPLIES, INCLUDING TO COUNTS. This is the half the
         * optimisation above must never touch.
         *
         * The distinction is not pedantry - it was a real bug. A workspace table
         * put `whereNull('ended_at')` inside the join closure, which reads
         * naturally and is what the old single hook invited. Nothing needed the
         * join for a count, so the whole closure was skipped, and the "live
         * sessions" total came back as every session ever recorded. No error,
         * no warning, just a number that was wrong.
         *
         * Dropping a JOIN from a count is safe because a count selects no joined
         * columns. Dropping a WHERE changes the answer. Two hooks, because they
         * are two different things and only one of them is optional.
         */
        if ($this->constrain !== null) {
            ($this->constrain)($eloquent);
        }

        // toBase() applies global scopes (including tenant scoping) before
        // handing back the underlying query builder. Reaching for the query
        // builder directly would bypass them.
        $query = $eloquent->toBase();

        if ($applyTab && $this->tabs !== null && ($state['tab'] ?? null) !== null) {
            $this->tabs->apply($query, $state['tab']);
        }

        foreach ($this->filters as $filter) {
            $value = $state['filters'][$filter->key] ?? null;

            /*
             * A TRASHED FILTER ALWAYS APPLIES, even with no value.
             *
             * For every other filter, null means "not applied". For this one
             * null means "live records only" - the DEFAULT view - and skipping
             * it was a genuine bug in two ways at once. The soft-delete global
             * scope has been lifted above so this filter can own the decision,
             * so with nothing applied the list showed DELETED ROWS; and with no
             * `deleted_at` predicate the rebuilt indexes, which lead with it,
             * could not serve the sort, so a 1.6 ms list became 416 ms and a
             * temp B-tree over 200,000 rows.
             *
             * Correctness and performance failed together, which is what made
             * it obvious. Either alone would have been easy to miss.
             */
            if ($filter instanceof TrashedFilter) {
                $filter->apply($query, $value);

                continue;
            }

            // `!== null`, never a truthiness check - `false` is an applied
            // value for a BooleanFilter and must not be skipped.
            if ($value !== null) {
                $filter->apply($query, $value);
            }
        }

        if ($state['search'] !== '' && $this->searchable !== []) {
            /*
             * WORD-prefix, not string-prefix.
             *
             * This was string-prefix only (`term%`) because that is the shape a
             * btree index can serve. It was also silently wrong: names are
             * stored as "Amina Achieng", so searching the surname "Achieng"
             * matched ZERO rows while returning HTTP 200 and an empty table.
             * An operator reads that as "no such customer", which is the exact
             * failure mode antipatterns.md opens with.
             *
             * So each column is matched two ways: at the start of the value,
             * which stays index-served, OR at the start of any later word,
             * which does not. The second half costs a scan of the tenant's rows
             * and is the deliberate price of a search that actually finds
             * people. Substring-anywhere is still refused - it is unbounded and
             * belongs to a trigram index or FTS once the engine is chosen.
             */
            $escaped = str_replace(['%', '_'], ['\%', '\_'], $state['search']);
            $startsWith = $escaped.'%';
            $wordStart = '% '.$escaped.'%';
            $columns = $this->searchable;

            $query->where(function (Builder $q) use ($columns, $startsWith, $wordStart): void {
                foreach ($columns as $i => $searchColumn) {
                    if ($i === 0) {
                        $q->where($searchColumn, 'like', $startsWith);
                    } else {
                        $q->orWhere($searchColumn, 'like', $startsWith);
                    }

                    $q->orWhere($searchColumn, 'like', $wordStart);
                }
            });
        }

        return $query;
    }

    /**
     * Keyset seek: WHERE (sort_col, id) < (?, ?), written as an explicit OR so
     * it stays portable across Postgres, MySQL and SQLite. Postgres row-value
     * syntax is tidier and can replace this once the engine is fixed.
     *
     * @param  array{cursor: string|null, ...}  $state
     */
    /**
     * The ORDER BY, minus the key: group first, then the chosen sort.
     *
     * ONE DEFINITION, used by the query, the cursor that is issued, and the
     * cursor that is read back. Three places deriving the same list separately
     * is how a seek ends up disagreeing with the sort it is seeking into, and
     * that bug looks like rows repeating or vanishing across page boundaries
     * rather than like an ordering mistake.
     *
     * The group column is dropped when it IS the sort column - ordering by a
     * column twice is harmless but makes the cursor carry a value the seek then
     * compares against itself.
     *
     * @return list<string>
     */
    private function orderingColumns(string $sortColumn): array
    {
        if ($this->groupColumn === null || $this->groupColumn === $sortColumn) {
            return [$sortColumn];
        }

        return [$this->groupColumn, $sortColumn];
    }

    /**
     * The lexicographic keyset seek.
     *
     * For an order of `(a, b, id)` the predicate is
     *
     *     a > ?  OR (a = ? AND b > ?)  OR (a = ? AND b = ? AND id > ?)
     *
     * which is exactly "everything after this row in that ordering". Written as
     * a loop rather than by hand because the number of terms is now variable:
     * one column ungrouped, two grouped, and hardcoding either would silently
     * paginate wrongly in the other case.
     *
     * @param  list<string>  $columns
     */
    private function applyCursor(Builder $query, array $state, array $columns, string $direction): void
    {
        $cursor = Cursor::decode($state['cursor']);

        if ($cursor === null) {
            return;
        }

        $operator = $direction === 'asc' ? '>' : '<';
        $key = $this->keyColumn;

        /*
         * A cursor from a DIFFERENT ordering cannot be honoured.
         *
         * Grouping can be turned on with a cursor already in the URL, and that
         * cursor carries one value where the seek now needs two. Resuming from
         * it would compare the old sort value against the group column and land
         * somewhere arbitrary, so the page restarts instead - which is what
         * every other state change already does.
         */
        if (count($cursor->values) !== count($columns)) {
            return;
        }

        /*
         * A NULL ordering value cannot be seeked against.
         *
         * `WHERE col < NULL` is not a comparison, it is an error - and even
         * spelled as `IS NULL` the ordering of nulls differs by engine, so
         * there is no seek that means "after this row" when the row's sort
         * value is null. Restarting the page is the only honest answer, and it
         * is the same thing every other unusable cursor does.
         */
        foreach ($cursor->values as $value) {
            if ($value === null) {
                return;
            }
        }

        $query->where(function (Builder $outer) use ($columns, $operator, $cursor, $key): void {
            foreach ($columns as $depth => $column) {
                $outer->orWhere(function (Builder $q) use ($columns, $depth, $operator, $cursor): void {
                    // Every column before this one must be EQUAL...
                    for ($i = 0; $i < $depth; $i++) {
                        $q->where($columns[$i], '=', $cursor->values[$i]);
                    }

                    // ...and this one strictly past the cursor.
                    $q->where($columns[$depth], $operator, $cursor->values[$depth]);
                });
            }

            // The final tier: every ordering column equal, broken by the key.
            $outer->orWhere(function (Builder $q) use ($columns, $operator, $cursor, $key): void {
                foreach ($columns as $i => $column) {
                    $q->where($column, '=', $cursor->values[$i]);
                }

                $q->where($key, $operator, $cursor->id);
            });
        });
    }
}
