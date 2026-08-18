<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Filters;

use Illuminate\Database\Query\Builder;

/**
 * Three-state boolean: not applied, true, or false.
 *
 * The three states are the entire point. Phase 2 surfaced this on Plans: an
 * abstraction generalised from string-equality filters alone models every filter
 * as a nullable string, and then `false` and "no filter" both look falsy and
 * collapse into each other - so "show only inactive plans" silently becomes
 * "show everything".
 *
 * normalise() therefore distinguishes null from false explicitly, and every
 * caller must use `!== null` rather than a truthiness check.
 */
final class BooleanFilter extends Filter
{
    private string $trueLabel = 'Yes';

    private string $falseLabel = 'No';

    public function labels(string $true, string $false): static
    {
        $this->trueLabel = $true;
        $this->falseLabel = $false;

        return $this;
    }

    public function normalise(mixed $raw): ?bool
    {
        return match ($raw) {
            '1', 'true', true, 1 => true,
            '0', 'false', false, 0 => false,
            default => null,
        };
    }

    public function apply(Builder $query, mixed $value): void
    {
        $query->where($this->resolvedColumn(), (bool) $value);
    }

    public function toQueryValue(mixed $value): string
    {
        return $value ? '1' : '0';
    }

    protected function schemaType(): string
    {
        return 'boolean';
    }

    /** Labels are structure, not tenant data, so they belong in the schema. */
    public function toSchema(): array
    {
        return [...parent::toSchema(), 'trueLabel' => $this->trueLabel, 'falseLabel' => $this->falseLabel];
    }

    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->resolvedLabel(),
            'type' => 'boolean',
            'trueLabel' => $this->trueLabel,
            'falseLabel' => $this->falseLabel,
        ];
    }

    protected function indicatorLabel(mixed $value): string
    {
        $state = $value ? $this->trueLabel : $this->falseLabel;

        return $this->resolvedLabel().': '.$state;
    }
}
