<?php

declare(strict_types=1);

namespace PanelKit\Panel\CustomFields;

/**
 * Which resources have somewhere for a custom field to live - roadmap 5.1.
 *
 * DECLARED BY THE APPLICATION, because only it knows. A custom field is stored
 * in a `custom` JSON column, and adding that column to a large table is a
 * migration somebody has to write and time - so the list of resources that have
 * one is a fact about their schema, not about this package.
 *
 * IT USED TO BE `['clients', 'routers', 'plans']`, HARDCODED - the reference
 * application's three tables, in a class every installation gets. For anybody
 * else that is two failures at once: custom fields silently unavailable on
 * every resource they do have, and, if they happened to name one `clients`, an
 * offer to store a field in a column that does not exist.
 *
 * EMPTY BY DEFAULT, which reads as "no resource has the column yet" - the true
 * answer for a fresh installation, and the safe one: the feature declines
 * rather than writing into a column it hopes is there.
 *
 * WHAT THIS GATES: a `CustomField` definition's `resource` may only name one
 * of these - checked when a definition is saved, not by a database
 * constraint (see the migration's own note, and `CustomField`'s).
 */
final class CustomFieldStorage
{
    /** @return list<string> */
    public static function resources(): array
    {
        return array_values(array_filter(
            (array) config('panel.custom_fields.resources', []),
            static fn (mixed $key): bool => is_string($key) && $key !== '',
        ));
    }
}
