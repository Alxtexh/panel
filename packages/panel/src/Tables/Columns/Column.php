<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables\Columns;

/**
 * A column in the resource schema.
 *
 * TWO RULES this base class exists to enforce.
 *
 * 1. NO CLASS STRINGS. A column never emits a CSS class. It emits semantic
 *    values — `type: 'badge'`, `color: 'danger'`, `align: 'right'` — and the Vue
 *    layer decides what those look like.
 *
 *    This is a hard architectural boundary, not a preference (antipatterns
 *    §6.1). A CSS build that does not scan PHP purges PHP-authored classes
 *    silently, and *partially*: one class of a responsive pair survives because
 *    Blade used it elsewhere and the other vanishes, hiding an element at every
 *    width instead of only small ones. It cost a full build-and-deploy cycle to
 *    find, and it has already happened once in this repository.
 *
 * 2. NO TENANT DATA and NO QUERIES. Everything a column contributes must be
 *    identical for every tenant and computable without touching the database
 *    (addendum Part A, antipatterns §3.3). That is what lets the schema be
 *    cached once per permission set rather than once per tenant, and what stops
 *    a definition-time query taking a page down for everyone.
 */
abstract class Column
{
    protected ?string $label = null;

    protected bool $sortable = false;

    protected bool $searchable = false;

    protected bool $copyable = false;

    protected bool $locked = false;

    protected ?string $sortKey = null;

    protected ?string $databaseColumn = null;

    protected string $align = 'left';

    /**
     * De-emphasised rendering.
     *
     * Lives on the base rather than TextColumn because it is a presentation
     * INTENT that applies to any column type — a muted date is as ordinary as a
     * muted string. Still a semantic name, never a CSS class (antipatterns S6.1).
     */
    protected bool $muted = false;

    protected ?string $prefix = null;

    protected ?string $suffix = null;

    final public function __construct(public readonly string $key) {}

    public static function make(string $key): static
    {
        return new static($key);
    }

    abstract public function type(): string;

    public function label(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function sortable(bool $sortable = true): static
    {
        $this->sortable = $sortable;

        return $this;
    }

    public function searchable(bool $searchable = true): static
    {
        $this->searchable = $searchable;

        return $this;
    }

    /** Renders an inline copy affordance on the cell that holds the value. */
    public function copyable(bool $copyable = true): static
    {
        $this->copyable = $copyable;

        return $this;
    }

    /** Excluded from the column-visibility menu; always rendered. */
    public function locked(bool $locked = true): static
    {
        $this->locked = $locked;

        return $this;
    }

    /**
     * ORDER BY key when it differs from the display key.
     *
     * Phase 2 proved these are not the same thing: Plans displays a formatted
     * `price` but must sort by `price_cents`, or 12,000.00 orders before 900.00.
     */
    public function sortAs(string $key): static
    {
        $this->sortKey = $key;

        return $this;
    }

    /** Qualified database column when it differs from the key. */
    public function from(string $column): static
    {
        $this->databaseColumn = $column;

        return $this;
    }

    /**
     * Rendered before the value, e.g. a currency code.
     *
     * A unit is part of what the value MEANS, so it belongs in the schema. The
     * alternative was a per-resource Vue slot, which is exactly the bespoke Vue
     * Phase 4 exists to remove.
     */
    public function prefix(string $prefix): static
    {
        $this->prefix = $prefix;

        return $this;
    }

    /** Rendered after the value, e.g. a unit of measure. */
    public function suffix(string $suffix): static
    {
        $this->suffix = $suffix;

        return $this;
    }

    public function muted(bool $muted = true): static
    {
        $this->muted = $muted;

        return $this;
    }

    public function align(string $align): static
    {
        $this->align = $align;

        return $this;
    }

    public function isSortable(): bool
    {
        return $this->sortable;
    }

    public function isSearchable(): bool
    {
        return $this->searchable;
    }

    public function resolvedSortKey(): string
    {
        return $this->sortKey ?? $this->key;
    }

    public function resolvedDatabaseColumn(): ?string
    {
        return $this->databaseColumn;
    }

    public function resolvedLabel(): string
    {
        return $this->label ?? str($this->key)->afterLast('.')->headline()->value();
    }

    /**
     * Serialisable description. Must contain no tenant data and no CSS classes.
     *
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return array_filter([
            'key' => $this->key,
            'label' => $this->resolvedLabel(),
            'type' => $this->type(),
            'sortable' => $this->sortable,
            'sortKey' => $this->sortKey,
            'copyable' => $this->copyable,
            'locked' => $this->locked,
            'align' => $this->align === 'left' ? null : $this->align,
            'muted' => $this->muted,
            'prefix' => $this->prefix,
            'suffix' => $this->suffix,
        ], static fn (mixed $v): bool => $v !== null && $v !== false);
    }
}
