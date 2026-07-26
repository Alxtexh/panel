<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables;

use Closure;
use Illuminate\Database\Query\Builder;
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
                : fn (): array => $this->tabs->counts($this->base($state, applyTab: false)),
            // A closure, not a number. The caller wraps it in Inertia::defer()
            // so the rows paint before any COUNT runs (§10).
            total: fn (): int => $this->base($state)->count(),
        );
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

        $this->applyCursor($query, $state, $column, $direction);

        $rows = array_map(
            static fn (object $row): array => (array) $row,
            $query->limit($perPage)->get()->all(),
        );

        return $this->transform === null ? $rows : array_map($this->transform, $rows);
    }

    /**
     * @param array{search: string, sort: string, direction: string, cursor: string|null, filters: array<string, mixed>} $state
     */
    private function base(array $state, bool $applyTab = true): Builder
    {
        /** @var \Illuminate\Database\Eloquent\Builder $eloquent */
        $eloquent = $this->model::query();

        if ($this->join !== null) {
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
