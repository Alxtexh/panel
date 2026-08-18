<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Filters;

use Closure;
use Illuminate\Database\Query\Builder;

/**
 * Base for list filters.
 *
 * The contract has two halves, and separating them is what Phase 2 taught us:
 *
 *   normalise()  turns raw, untrusted request input into a safe value, or null
 *                meaning "not applied". Returning null must be distinguishable
 *                from returning a falsy applied value - the three-state boolean
 *                on Plans breaks any design that conflates them.
 *
 *   apply()      adds the constraint. Only ever called with a value that came
 *                back from normalise(), so it never sees raw input.
 *
 * `null` from normalise() always means "no filter". A filter that wants to mean
 * "match null" must model that as its own sentinel option.
 */
abstract class Filter
{
    protected ?string $column = null;

    protected ?string $label = null;

    /** Override for the chip label. A closure receives the normalised value. */
    protected string|Closure|null $indicator = null;

    /** @var Closure(mixed): (Indicator|string|list<Indicator|string>|null)|null */
    protected ?Closure $indicateUsing = null;

    final public function __construct(public readonly string $key) {}

    public static function make(string $key): static
    {
        return new static($key);
    }

    /** Qualified database column, e.g. `clients.status`. Defaults to the key. */
    public function column(string $column): static
    {
        $this->column = $column;

        return $this;
    }

    public function label(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function resolvedColumn(): string
    {
        return $this->column ?? $this->key;
    }

    public function resolvedLabel(): string
    {
        return $this->label ?? str($this->key)->headline()->value();
    }

    /**
     * The chip label when this filter is applied.
     *
     * A string is used as-is. A closure receives the normalised value and
     * returns the label. Prefer {@see indicateUsing()} when one filter should
     * produce several chips.
     */
    public function indicator(string|Closure $indicator): static
    {
        $this->indicator = $indicator;

        return $this;
    }

    /**
     * Build the chips from the normalised value.
     *
     * Return a string, an {@see Indicator}, a list of either, or null to hide
     * the chip while the filter still applies. The toolbar's Reset still
     * clears it; this only decides what is printed.
     *
     * @param  Closure(mixed): (Indicator|string|list<Indicator|string>|null)  $callback
     */
    public function indicateUsing(Closure $callback): static
    {
        $this->indicateUsing = $callback;

        return $this;
    }

    /**
     * Chips for the applied value, or an empty list when the filter is idle.
     *
     * @return list<array{key: string, label: string, removable: bool}>
     */
    public function indicators(mixed $value): array
    {
        if ($value === null) {
            return [];
        }

        if ($this->indicateUsing !== null) {
            return $this->wrapIndicators(($this->indicateUsing)($value));
        }

        $label = $this->indicator instanceof Closure
            ? (string) ($this->indicator)($value)
            : ($this->indicator ?? $this->indicatorLabel($value));

        if ($label === '') {
            return [];
        }

        return [[
            'key' => $this->key,
            'label' => $label,
            'removable' => true,
        ]];
    }

    /** Default chip: "Status: published". */
    protected function indicatorLabel(mixed $value): string
    {
        return $this->resolvedLabel().': '.$this->displayValue($value);
    }

    protected function displayValue(mixed $value): string
    {
        if (is_bool($value)) {
            return $value ? 'Yes' : 'No';
        }

        if (! is_array($value)) {
            return (string) $value;
        }

        if (isset($value['preset']) && is_scalar($value['preset'])) {
            return (string) $value['preset'];
        }

        if (array_key_exists('from', $value) || array_key_exists('to', $value)) {
            return ($value['from'] ?? '').' .. '.($value['to'] ?? '');
        }

        return implode(', ', array_map(static fn (mixed $item): string => (string) $item, $value));
    }

    /**
     * @return list<array{key: string, label: string, removable: bool}>
     */
    private function wrapIndicators(mixed $raw): array
    {
        if ($raw === null || $raw === '') {
            return [];
        }

        $items = is_array($raw) ? $raw : [$raw];
        $out = [];

        foreach ($items as $item) {
            if ($item instanceof Indicator) {
                $out[] = $item->toArray($this->key);

                continue;
            }

            if (is_string($item) && $item !== '') {
                $out[] = [
                    'key' => $this->key,
                    'label' => $item,
                    'removable' => true,
                ];
            }
        }

        return $out;
    }

    /** Raw request input to a safe value, or null for "not applied". */
    abstract public function normalise(mixed $raw): mixed;

    /** @param mixed $value Guaranteed non-null and already normalised. */
    abstract public function apply(Builder $query, mixed $value): void;

    /**
     * Serialisable description for the frontend.
     *
     * @return array<string, mixed>
     */
    abstract public function toArray(): array;

    /**
     * STRUCTURE ONLY, for the cached schema. Must never resolve options.
     *
     * Options are tenant data (addendum Part A) and are frequently backed by a
     * closure that queries. Resolving them here would mean building a schema
     * executes a query - which is antipatterns S3.3 exactly, where an eager
     * option lookup in a definition took a page down for every tenant. It also
     * made the query count differ between a cold and a warm schema cache, which
     * is how this was found.
     *
     * @return array<string, mixed>
     */
    public function toSchema(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->resolvedLabel(),
            'type' => $this->schemaType(),
        ];
    }

    abstract protected function schemaType(): string;

    /** How the value appears in a query string. */
    public function toQueryValue(mixed $value): string
    {
        return (string) $value;
    }
}
