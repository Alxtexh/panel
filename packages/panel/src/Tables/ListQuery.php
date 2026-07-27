<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables;

use Closure;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Database\Query\Builder;
use PanelKit\Panel\Tables\Filters\TrashedFilter;
use Illuminate\Http\Request;
use InvalidArgumentException;
use PanelKit\Panel\Tables\Filters\Filter;

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

    private ?Closure $join = null;

    private ?Closure $transform = null;

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
     * would be the framework imposing a decision it cannot make — a 200-row
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

    /** Declared joins, so the query count stays constant rather than N+1. */
    public function join(Closure $join): self
    {
        $this->join = $join;

        return $this;
    }

    /**
     * Allowlist of sortable columns.
     *
     * This is a security boundary, not ergonomics: the value is interpolated
     * into an ORDER BY, which no query binding can parameterise. Anything not in
     * this map falls back to the default sort.
     *
     * @param array<string, string> $map display key => qualified column
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
     * @param list<string> $values
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
     * database and cannot reintroduce an N+1 — provided the closure does not
     * query, which is the one rule callers must keep.
     *
     * @param Closure(array<string, mixed>): array<string, mixed> $transform
     */
    public function transform(Closure $transform): self
    {
        $this->transform = $transform;

        return $this;
    }

    /**
     * Rows among $ids that changed since $since.
     *
     * This is what makes the poll driver cheap enough to be the default. It is
     * NOT the polling S8 warns against — that warning is about re-rendering a
     * component server-side once per viewer per tick, so cost scales with
     * audience. This asks one bounded, indexed question:
     *
     *     WHERE id IN (visible ids) AND updated_at > ?
     *
     * The id set is capped by the page size, so the query is O(page), never
     * O(table), and it returns only rows that actually changed — usually none,
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
        // so this join is always needed — unlike the count paths in base().
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
            // nothing — an endpoint that returns 200 and an empty array forever.
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
            return \Illuminate\Support\Carbon::parse($since)->utc()->format('Y-m-d H:i:s');
        } catch (\Throwable) {
            return \Illuminate\Support\Carbon::now()->addCentury()->format('Y-m-d H:i:s');
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
            && ! str_starts_with($column, $table . '.');

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

            // Only APPLIED filters matter — a declared filter nobody used adds
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
            : (new $this->model())->getTable();

        return "{$table}.updated_at";
    }

    /**
     * A SINGLE record, through the same select and joins the list uses.
     *
     * The detail page renders the table's columns, so it must fetch them the
     * same way. Reading the raw model instead silently drops every joined
     * column — the Plan field rendered an em dash, which an operator reads as
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
     * re-derives the query from them — it does not accept a row count, a list
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
     * carries the same VALUES the table was built from — a joined plan name
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
     * There is no shrinking-set hazard here — an export does not write — but
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
            $after = ((array) end($rows))[$this->keyColumn] ?? null;

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

        return (new $this->model)->getTable() . '.' . $this->keyColumn;
    }

    public function keyColumnName(): string
    {
        return $this->keyColumn;
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
        $requested = (int) $request->query('perPage', (string) $this->perPage);
        $perPage = in_array($requested, $this->perPageOptions, true) ? $requested : $this->perPage;

        $rows = $this->fetch($state, $perPage);

        // The cursor is derived from the actual last row rather than trusted
        // from the client, and only when the page was full — a short page means
        // there is nothing after it.
        $last = $rows === [] ? null : $rows[array_key_last($rows)];
        $nextCursor = $last === null || count($rows) < $perPage
            ? null
            : Cursor::encode($last[$state['sort']] ?? null, (int) $last['id']);

        return new ListResult(
            records: $rows,
            state: $state,
            filterSchema: array_map(static fn (Filter $f): array => $f->toArray(), $this->filters),
            nextCursor: $nextCursor,
            perPage: $perPage,
            perPageOptions: $this->perPageOptions,
            tabs: $this->tabs?->values ?? [],
            // Counts come from the query WITHOUT the tab constraint — with it,
            // every tab except the active one would read zero, which looks like
            // real data rather than a bug. Deferred so they never block rows.
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
     * @param array<string, mixed> $state
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

        $table = (new $this->model())->getTable();

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
        $sort = (string) $request->query('sort', $this->defaultSort);
        $direction = strtolower((string) $request->query('direction', $this->defaultDirection));

        $filters = [];

        foreach ($this->filters as $filter) {
            // Deliberately preserved even when null, so the frontend can tell
            // "filter exists but is unset" from "filter does not exist".
            $filters[$filter->key] = $filter->normalise($request->query($filter->key));
        }

        return [
            'tab' => $this->tabs?->normalise($request->query('tab')),
            'search' => trim((string) $request->query('search', '')),
            'sort' => array_key_exists($sort, $this->sortable) ? $sort : $this->defaultSort,
            'direction' => $direction === 'asc' ? 'asc' : 'desc',
            'cursor' => $request->query('cursor') ? (string) $request->query('cursor') : null,
            'page' => max(1, (int) $request->query('page', 1)),
            'filters' => $filters,
        ];
    }

    /**
     * @param  array{search: string, sort: string, direction: string, cursor: string|null, filters: array<string, mixed>}  $state
     * @return list<array<string, mixed>>
     */
    private function fetch(array $state, int $perPage): array
    {
        $column = $this->sortable[$state['sort']];
        $direction = $state['direction'];

        $query = $this->base($state)
            ->select($this->select)
            ->orderBy($column, $direction)
            // The tiebreaker is also the trailing column on every sort index.
            // Without it the seek below is ambiguous and rows repeat or vanish
            // across page boundaries.
            ->orderBy($this->keyColumn, $direction);

        if ($this->paginationStrategy === 'offset') {
            // Explicitly opt-in. Fine on a small table, and the reason page
            // 2,000 is slow on a large one.
            $page = max(1, (int) ($state['page'] ?? 1));
            $query->forPage($page, $perPage);
        } else {
            $this->applyCursor($query, $state, $column, $direction);
        }

        $rows = array_map(
            static fn (object $row): array => (array) $row,
            $query->limit($perPage)->get()->all(),
        );

        return $this->transform === null ? $rows : array_map($this->transform, $rows);
    }

    /**
     * @param array{search: string, sort: string, direction: string, cursor: string|null, filters: array<string, mixed>} $state
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
         * filter applies `deleted_at IS NULL` itself — one place decides, in a
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
         * pure cost — and at scale not a small one: counting a tenant's 200,000
         * clients took 503 ms through a LEFT JOIN to plans and 25 ms without
         * it, because every counted row did a primary-key lookup whose result
         * was then discarded.
         *
         * Twenty times, for a join nothing read.
         */
        if ($this->join !== null && ! ($forCount && ! $this->joinRequired($state))) {
            ($this->join)($eloquent);
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
             * null means "live records only" — the DEFAULT view — and skipping
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

            // `!== null`, never a truthiness check — `false` is an applied
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
             * people. Substring-anywhere is still refused — it is unbounded and
             * belongs to a trigram index or FTS once the engine is chosen.
             */
            $escaped = str_replace(['%', '_'], ['\%', '\_'], $state['search']);
            $startsWith = $escaped . '%';
            $wordStart = '% ' . $escaped . '%';
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
     * @param array{cursor: string|null, ...} $state
     */
    private function applyCursor(Builder $query, array $state, string $column, string $direction): void
    {
        $cursor = Cursor::decode($state['cursor']);

        if ($cursor === null) {
            return;
        }

        $operator = $direction === 'asc' ? '>' : '<';
        $key = $this->keyColumn;

        $query->where(function (Builder $q) use ($column, $operator, $cursor, $key): void {
            $q->where($column, $operator, $cursor->value)
                ->orWhere(function (Builder $q) use ($column, $operator, $cursor, $key): void {
                    $q->where($column, '=', $cursor->value)
                        ->where($key, $operator, $cursor->id);
                });
        });
    }
}
