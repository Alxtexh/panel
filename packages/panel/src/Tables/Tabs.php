<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables;

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
        // Strip the sort: ORDER BY on a grouped aggregate is wasted work, and on
        // strict engines it is an error when the column is not in the GROUP BY.
        $query = clone $base;
        $query->orders = null;
        $query->limit = null;
        $query->offset = null;

        $rows = $query
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

        // Declared values absent from the result set have a real count of zero.
        // Leaving them out would render a tab with no number, which reads as
        // "still loading" rather than "none".
        foreach ($this->values as $value) {
            $counts[$value] ??= 0;
        }

        return ['all' => $total] + $counts;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return ['key' => 'tab', 'values' => $this->values];
    }
}
