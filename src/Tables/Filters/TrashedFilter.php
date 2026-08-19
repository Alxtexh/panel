<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Filters;

use Illuminate\Database\Query\Builder;

/**
 * Show live records, deleted records, or both.
 *
 * THE DEFAULT IS "LIVE ONLY", and it is the model's global scope that provides
 * it - not this filter. That matters: a resource without this filter still
 * hides deleted rows, because the scope is on the model. The filter only lets
 * someone ASK for the deleted ones.
 *
 * WHY THE QUERY IS EXPRESSED AS `deleted_at IS NULL` RATHER THAN BY REMOVING
 * THE SCOPE. Eloquent's `withTrashed()` removes the global scope entirely,
 * which cannot work here: the list runs through `toBase()` on a query builder,
 * long after scopes have been resolved. So the base query is built WITHOUT the
 * soft-delete scope and this filter applies the predicate itself - one place
 * that decides, in a form the index can serve.
 *
 * The column is the model's own `deleted_at` name, taken from the model rather
 * than assumed, because a project may rename it.
 */
final class TrashedFilter extends Filter implements HasOptions
{
    private string $deletedColumn = 'deleted_at';

    /** The qualified `deleted_at` column, when the list joins. */
    public function deletedColumn(string $column): self
    {
        $this->deletedColumn = $column;

        return $this;
    }

    /** @return list<string> */
    public function resolvedOptions(): array
    {
        return ['live', 'trashed', 'all'];
    }

    public function normalise(mixed $value): ?string
    {
        $value = is_string($value) ? $value : null;

        // Anything unrecognised means the default view, not an error: a stale
        // bookmark should show live records rather than 500.
        return in_array($value, ['trashed', 'all'], true) ? $value : null;
    }

    public function apply(Builder $query, mixed $value): void
    {
        $column = $this->deletedColumn;

        match ($this->normalise($value)) {
            'trashed' => $query->whereNotNull($column),
            'all' => null,
            // Null - the default - is live only. Written explicitly rather than
            // relying on a scope that is not present on this builder.
            default => $query->whereNull($column),
        };
    }

    protected function schemaType(): string
    {
        return 'trashed';
    }

    /**
     * @return array<string, mixed>
     *
     * The options are STATIC - three fixed views - so unlike a select they are
     * safe in the cached schema: they carry no tenant data and resolving them
     * runs no query.
     */
    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->resolvedLabel(),
            'type' => 'trashed',
            'options' => $this->resolvedOptions(),
        ];
    }

    /*
     * No `toSchema()` override, deliberately.
     *
     * The three views are static and carry no tenant data, so putting them in
     * the cached schema would be harmless HERE - and it would still weaken the
     * rule. The guard is "a schema holds no filter options", full stop; a rule
     * with an exception is a rule someone has to remember. The client already
     * knows what a `trashed` filter offers from its type.
     */
    protected function indicatorLabel(mixed $value): string
    {
        $shown = match ($value) {
            'trashed' => 'Trashed',
            'all' => 'With trashed',
            default => (string) $value,
        };

        return $this->resolvedLabel().': '.$shown;
    }
}
