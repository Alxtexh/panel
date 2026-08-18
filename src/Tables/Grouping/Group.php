<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Grouping;

use Closure;
use Illuminate\Support\Carbon;

/**
 * How a table clusters its rows.
 *
 * GROUPING IS STILL AN ORDERING, not an aggregation. The query sorts by the
 * group column first so rows arrive already clustered, and the client inserts
 * a heading wherever the value changes. This object is the declarative half:
 * which column, what to call it, whether the heading collapses, and whether a
 * datetime should cluster by calendar date rather than by the instant.
 *
 * `Table::groupBy('status')` still works. It becomes one of these. The object
 * form is what collapsible headings, date groups and a picker need, because a
 * string cannot carry any of those.
 */
final class Group
{
    private ?string $label = null;

    private bool $collapsible = false;

    private bool $date = false;

    private bool $titlePrefixed = true;

    /** @var Closure(mixed, array<string, mixed>): string|null */
    private ?Closure $titleUsing = null;

    private function __construct(private readonly string $column) {}

    public static function make(string $column): self
    {
        return new self($column);
    }

    /** The row key, and the query-string value the picker sends. */
    public function key(): string
    {
        return $this->column;
    }

    public function label(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function resolvedLabel(): string
    {
        return $this->label ?? str($this->column)->afterLast('.')->headline()->value();
    }

    /**
     * Let the heading collapse the rows beneath it.
     *
     * Collapse is CLIENT STATE. Keyset pagination already walks a fixed page
     * of rows; hiding some of them in the browser does not change the query,
     * so a collapsed group that spans a page boundary still continues on the
     * next page rather than being skipped.
     */
    public function collapsible(bool $collapsible = true): self
    {
        $this->collapsible = $collapsible;

        return $this;
    }

    public function isCollapsible(): bool
    {
        return $this->collapsible;
    }

    /**
     * Cluster by the calendar date, ignoring the time of day.
     *
     * A `created_at` column without this is one group per distinct instant,
     * which is almost never what an operator meant. The query still orders by
     * the real column when that column is also the active sort (datetime order
     * already clusters dates); it orders by `date(column)` when grouping and
     * sorting disagree, so the keyset seek stays aligned with the ORDER BY.
     */
    public function date(bool $date = true): self
    {
        $this->date = $date;

        return $this;
    }

    public function isDate(): bool
    {
        return $this->date;
    }

    /**
     * Whether the heading reads "Status: published" or just "published".
     *
     * Prefixed by default, matching the headings this table already drew for
     * `groupBy('status')`.
     */
    public function titlePrefixedWithLabel(bool $prefixed = true): self
    {
        $this->titlePrefixed = $prefixed;

        return $this;
    }

    public function titleIsPrefixed(): bool
    {
        return $this->titlePrefixed;
    }

    /**
     * The heading text, from the row array the list actually has.
     *
     * The list runs through `toBase()`, so there is no Eloquent model to hand
     * a Filament-style `getTitleFromRecordUsing`. The row is the record.
     *
     * @param  Closure(mixed, array<string, mixed>): string  $callback
     */
    public function titleUsing(Closure $callback): self
    {
        $this->titleUsing = $callback;

        return $this;
    }

    /**
     * Filament's name for {@see titleUsing()}. The record is the row array.
     *
     * @param  Closure(mixed, array<string, mixed>): string  $callback
     */
    public function getTitleFromRecordUsing(Closure $callback): self
    {
        return $this->titleUsing($callback);
    }

    /** The raw clustering key for this row: date string, or the column value. */
    public function clusterKey(mixed $value): string
    {
        if ($value === null || $value === '') {
            return '';
        }

        if ($this->date) {
            return Carbon::parse((string) $value)->toDateString();
        }

        return (string) $value;
    }

    /**
     * What the heading prints for this row.
     *
     * @param  array<string, mixed>  $row
     */
    public function title(array $row): string
    {
        $value = $row[$this->column] ?? null;
        $cluster = $this->clusterKey($value);

        if ($this->titleUsing !== null) {
            $text = (string) ($this->titleUsing)($value, $row);
        } elseif ($cluster === '') {
            $text = 'None';
        } else {
            $text = $cluster;
        }

        if ($this->titlePrefixed) {
            return $this->resolvedLabel().': '.$text;
        }

        return $text;
    }

    /**
     * Structure for the cached schema and the active-group prop.
     *
     * Closures stay off this payload: a title callback is not tenant data, but
     * it is not serialisable either, and the computed title rides on the row.
     *
     * @return array<string, mixed>
     */
    public function toSchema(): array
    {
        return [
            'key' => $this->column,
            'label' => $this->resolvedLabel(),
            'collapsible' => $this->collapsible,
            'date' => $this->date,
            'titlePrefixed' => $this->titlePrefixed,
        ];
    }
}
