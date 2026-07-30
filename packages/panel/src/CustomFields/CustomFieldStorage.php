<?php

declare(strict_types=1);

namespace PanelKit\Panel\CustomFields;

/**
 * Which resources have somewhere for a custom field to live - roadmap 5.1.
 *
 * THE SAME LIST THE `reserve_custom_field_storage` MIGRATION USED to add the
 * `custom` JSON column, copied rather than read back from the schema. A
 * migration's own body is not a runtime API - reading it here would mean
 * parsing PHP to recover a fact this class exists to say once and share.
 * The two lists must be kept in step by hand; there being only one column
 * to add, ever, makes that an acceptable cost.
 *
 * WHAT THIS GATES: a `CustomField` definition's `resource` may only name one
 * of these - checked when a definition is saved, not by a database
 * constraint (see the migration's own note, and `CustomField`'s).
 */
final class CustomFieldStorage
{
    /** @var list<string> */
    public const RESOURCES = ['clients', 'routers', 'plans'];

    /** @return list<string> */
    public static function resources(): array
    {
        return self::RESOURCES;
    }
}
