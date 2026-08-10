<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables;

/**
 * The stored half of a saved view, reduced to what a table actually declares.
 *
 * A SAVED VIEW IS A STORED QUERY STRING, and that is the whole security story.
 * Everything a URL can carry, a view can carry - including a sort column that
 * was never sortable, a filter that no longer exists, and a page size chosen to
 * pull an entire tenant table in one request. The difference is that a URL is
 * validated on every use because it arrives with the request, while a view is
 * read from the database and feels trustworthy.
 *
 * It is not trustworthy. It was written by a client months ago, against a table
 * definition that has since changed, and the row can outlive the column it
 * names. So it goes through the SAME allowlists a URL does, and this class is
 * where that happens - once, on the way IN, so nothing downstream has to
 * remember.
 *
 * SANITISED ON SAVE *AND* RE-CHECKED ON APPLY. Sanitising only on save would be
 * a check that stops applying the moment the table definition changes, which is
 * exactly when it matters: a column dropped from `sortable()` should stop being
 * sortable for the views that already name it.
 *
 * UNKNOWN KEYS ARE DROPPED, NOT REJECTED. A view saved before a filter existed
 * is not an attack and should still open - minus the part that no longer means
 * anything. Refusing it outright would turn every table change into a support
 * ticket about vanished views.
 */
final class ViewState
{
    /** Keys a view may carry. Anything else is not table state. */
    private const KEYS = ['search', 'sort', 'direction', 'perPage', 'tab', 'filters', 'hidden'];

    /**
     * Reduce arbitrary input to state this table can honour.
     *
     * @param  array<string, mixed>  $input
     * @return array<string, mixed>
     */
    public static function sanitize(mixed $input, Table $table): array
    {
        if (! is_array($input)) {
            return [];
        }

        $schema = $table->toSchema();
        $out = [];

        /*
         * SORT is the one that reaches SQL.
         *
         * It is interpolated into an ORDER BY, where no binding can protect it,
         * so an unknown value must not survive. `ListQuery` already falls back
         * for an unrecognised sort - this drops it earlier so a stale view does
         * not silently reorder itself and look like a bug in the saved view.
         */
        $sortable = [];

        foreach ($table->getColumns() as $column) {
            if ($column->isSortable()) {
                $sortable[] = $column->resolvedSortKey();
            }
        }

        if (isset($input['sort']) && in_array($input['sort'], $sortable, true)) {
            $out['sort'] = (string) $input['sort'];
        }

        if (isset($input['direction']) && in_array($input['direction'], ['asc', 'desc'], true)) {
            $out['direction'] = (string) $input['direction'];
        }

        // A free-text search is bound as a parameter, so its only risk is size.
        if (isset($input['search']) && is_string($input['search'])) {
            $out['search'] = mb_substr(trim($input['search']), 0, 200);
        }

        /*
         * PER PAGE against the declared allowlist, not clamped to a maximum.
         *
         * `perPage: 100000` in a stored view would be a durable way to pull an
         * entire tenant table on every visit - a performance problem and an
         * exfiltration one. The allowlist is the same one the URL goes through.
         */
        if (isset($input['perPage']) && in_array((int) $input['perPage'], $schema['perPageOptions'] ?? [], true)) {
            $out['perPage'] = (int) $input['perPage'];
        }

        if (isset($input['tab']) && in_array($input['tab'], $schema['tabs'] ?? [], true)) {
            $out['tab'] = (string) $input['tab'];
        }

        /* Filters, by declared key only, and never a nested structure. */
        if (isset($input['filters']) && is_array($input['filters'])) {
            $declared = array_column($schema['filters'] ?? [], 'key');
            $filters = [];

            foreach ($input['filters'] as $key => $value) {
                if (! in_array($key, $declared, true)) {
                    continue;
                }

                // Scalars and flat lists of scalars - a multiselect is a list.
                // Anything deeper is not something a filter can express.
                if (is_scalar($value) || $value === null) {
                    $filters[$key] = $value;

                    continue;
                }

                if (is_array($value)) {
                    $flat = array_values(array_filter($value, 'is_scalar'));

                    if ($flat !== []) {
                        $filters[$key] = $flat;
                    }
                }
            }

            if ($filters !== []) {
                $out['filters'] = $filters;
            }
        }

        /*
         * HIDDEN COLUMNS, by declared key.
         *
         * Presentation rather than security - hiding a column has never been a
         * way of protecting it, since the data still travels. Filtered against
         * the declared set anyway, so a view does not accumulate keys for
         * columns that were removed years ago.
         */
        if (isset($input['hidden']) && is_array($input['hidden'])) {
            $keys = array_column($schema['columns'] ?? [], 'key');
            $hidden = array_values(array_intersect(
                array_filter($input['hidden'], 'is_string'),
                $keys,
            ));

            if ($hidden !== []) {
                $out['hidden'] = $hidden;
            }
        }

        return $out;
    }

    /** @return list<string> */
    public static function allowedKeys(): array
    {
        return self::KEYS;
    }
}
