<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables\Filters;

use Illuminate\Database\Query\Builder;

/**
 * Base for list filters.
 *
 * The contract has two halves, and separating them is what Phase 2 taught us:
 *
 *   normalise()  turns raw, untrusted request input into a safe value, or null
 *                meaning "not applied". Returning null must be distinguishable
 *                from returning a falsy applied value — the three-state boolean
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

    /** How the value appears in a query string. */
    public function toQueryValue(mixed $value): string
    {
        return (string) $value;
    }
}
