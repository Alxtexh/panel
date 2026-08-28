<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables;

use Closure;
use Illuminate\Database\Query\Builder;

/**
 * Status tabs with counts, from ONE grouped aggregate query.
 *
 * Addendum C1: the system being replaced had nine separate helper classes, one
 * per resource, each computing tab counts - and the naive shape is one COUNT per
 * tab, so a five-tab table costs five queries before it renders a row. The rule
 * is explicit: **N tabs must never produce N queries.**
 *
 * This emits exactly one:
 *
 *     SELECT status, COUNT(*) FROM clients WHERE <filters> GROUP BY status
 *
 * and derives every tab's number from that single result set, including the
 * "all" tab, which is the sum rather than a second query.
 *
 * The counts respect the active search and filters, so a tab reads "how many of
 * what I am currently looking at", not "how many exist" - the latter is
 * misleading the moment any filter is on.
 *
 * Counts are returned as a closure so the caller can defer them. They must never
 * block the rows (§10).
 */
final class Tabs
{
    /** @var array<string, Closure(Builder): void> */
    private array $queryModifiers = [];

    /**
     * @param  string  $column  Qualified column to group by, e.g. `clients.status`.
     * @param  list<string>  $values  Tab values, in display order. `all` is implicit and always first.
     */
    public function __construct(
        public readonly string $column,
        public readonly array $values,
    ) {}

    /** @param list<string> $values */
    public static function make(string $column, array $values): self
    {
        return new self($column, $values);
    }

    /**
     * Replace the plain `$column = $value` match for one tab with anything
     * a closure can express - a date range, a second column, a join.
     *
     * THE COST IS REAL AND STAYS LOCAL TO THIS ONE TAB. `counts()`'s whole
     * design is one grouped aggregate for every declared value - the rule
     * stated on the class is that N tabs must never cost N queries. A
     * closure is a black box no aggregate can group by, so a modified tab's
     * count is its own dedicated query; every OTHER tab, modified or not,
     * still shares the single grouped one. Reach for this for the tab that
     * needs it, not as the default way to declare one.
     *
     * @param  Closure(Builder): void  $modifier
     */
    public function modifyQuery(string $value, Closure $modifier): self
    {
        $this->queryModifiers[$value] = $modifier;

        return $this;
    }

    /**
     * The active tab, or null for "all".
     *
     * Validated against the declared values - the tab arrives from the URL and
     * is interpolated into a WHERE, so an allowlist is the boundary.
     */
    public function normalise(mixed $raw): ?string
    {
        if (! is_string($raw) || $raw === 'all') {
            return null;
        }

        return in_array($raw, $this->values, true) ? $raw : null;
    }

    public function apply(Builder $query, string $value): void
    {
        if (isset($this->queryModifiers[$value])) {
            ($this->queryModifiers[$value])($query);

            return;
        }

        $query->where($this->column, $value);
    }

    /**
     * One grouped query, every tab's count.
     *
     * $base must NOT already have the tab constraint applied, or every tab
     * except the active one reads zero - a bug that looks like real data.
     *
     * @return array<string, int> value => count, plus `all`
     */
    public function counts(Builder $base): array
    {
        /*
         * PARTITIONED BY WHETHER A TAB HAS ITS OWN QUERY MODIFIER. The
         * grouped aggregate below counts by `$this->column` alone, which is
         * exactly wrong for a modified tab - its closure may filter on a
         * different column, a range, a join, none of which a GROUP BY on
         * one column can answer. Restricting the aggregate to the PLAIN
         * values also keeps a modified tab's rows from being counted twice:
         * once under whatever `$this->column` value they happen to hold,
         * and again under their own dedicated query below.
         */
        $plainValues = array_values(array_diff($this->values, array_keys($this->queryModifiers)));

        // Strip the sort: ORDER BY on a grouped aggregate is wasted work, and on
        // strict engines it is an error when the column is not in the GROUP BY.
        $query = clone $base;
        $query->orders = null;
        $query->limit = null;
        $query->offset = null;

        $rows = $plainValues === [] ? collect() : $query
            ->whereIn($this->column, $plainValues)
            ->select($this->column)
            ->selectRaw('COUNT(*) as aggregate')
            ->groupBy($this->column)
            ->get();

        $short = str_contains($this->column, '.')
            ? substr($this->column, strrpos($this->column, '.') + 1)
            : $this->column;

        $counts = [];
        $total = 0;

        foreach ($rows as $row) {
            $value = (string) ($row->{$short} ?? '');
            $count = (int) $row->aggregate;
            $counts[$value] = $count;
            $total += $count;
        }

        // Declared plain values absent from the result set have a real
        // count of zero. Leaving them out would render a tab with no
        // number, which reads as "still loading" rather than "none".
        foreach ($plainValues as $value) {
            $counts[$value] ??= 0;
        }

        // Each modified tab's own query - the cost the class note describes.
        foreach ($this->queryModifiers as $value => $modifier) {
            $modified = clone $base;
            $modified->orders = null;
            $modified->limit = null;
            $modified->offset = null;

            $modifier($modified);

            $counts[$value] = $modified->count();
        }

        /*
         * A modified tab's closure is a black box: it may match rows a plain
         * tab already counted (an "overdue" tab built from `status =
         * published` plus a date check overlaps the `published` tab), so
         * summing every tab's count would over-report `all`. One more
         * COUNT(*) on the untouched base is the only way to keep `all`
         * meaning "everything in view" once any tab can do that - paid only
         * when a modifier is actually declared, so the plain-tabs-only path
         * still costs exactly the one grouped query above.
         */
        if ($this->queryModifiers !== []) {
            $untouched = clone $base;
            $untouched->orders = null;
            $untouched->limit = null;
            $untouched->offset = null;

            $total = $untouched->count();
        }

        return ['all' => $total] + $counts;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return ['key' => 'tab', 'values' => $this->values];
    }
}
