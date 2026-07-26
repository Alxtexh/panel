<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables\Filters;

use Closure;
use Illuminate\Database\Query\Builder;

/**
 * Single-choice equality filter backed by an allowlist.
 *
 * The allowlist is the security boundary, not a convenience. A submitted value
 * that is not in it is discarded rather than passed to the query — which matters
 * most when the options are data-derived (Routers' hardware models), because the
 * options are resolved from a TENANT-SCOPED query. That makes a crafted value
 * unable to confirm whether another tenant owns equipment you do not.
 */
final class SelectFilter extends Filter
{
    /** @var list<string>|Closure(): list<string> */
    private array|Closure $options = [];

    /** @param list<string>|Closure(): list<string> $options */
    public function options(array|Closure $options): static
    {
        $this->options = $options;

        return $this;
    }

    /** @return list<string> */
    public function resolvedOptions(): array
    {
        return $this->options instanceof Closure ? ($this->options)() : $this->options;
    }

    public function normalise(mixed $raw): ?string
    {
        if (! is_string($raw)) {
            return null;
        }

        return in_array($raw, $this->resolvedOptions(), true) ? $raw : null;
    }

    public function apply(Builder $query, mixed $value): void
    {
        $query->where($this->resolvedColumn(), $value);
    }

    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->resolvedLabel(),
            'type' => 'select',
            'options' => $this->resolvedOptions(),
        ];
    }
}
