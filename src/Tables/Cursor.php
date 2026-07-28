<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables;

use JsonException;

/**
 * Keyset pagination cursor: the ordering values of the last row on a page.
 *
 * A LIST OF VALUES, NOT ONE. A plain table seeks on `(sort_col, id)`, but a
 * GROUPED table orders by `(group_col, sort_col, id)` - and a cursor that
 * carried only the first of those could not resume in the middle of a group.
 * The list is the ORDER BY, minus the key, in the same order.
 *
 * Encoded rather than raw so the client does not depend on its shape, and
 * decoded defensively because it arrives from the URL. A malformed cursor yields
 * null, which callers treat as "start from the beginning" - never as an error
 * page, and never as an unfiltered query.
 *
 * A tampered cursor is not a security concern on its own: it can only move the
 * seek position WITHIN the already tenant-scoped, already filtered query. It
 * cannot widen the result set, because the tenant constraint comes from the
 * model's global scope, not from anything encoded here.
 */
final readonly class Cursor
{
    /**
     * @param  list<mixed>  $values  The ordering values, outermost sort first.
     */
    public function __construct(
        public array $values,
        public int $id,
    ) {}

    /** The first ordering value, for the common single-column case. */
    public function value(): mixed
    {
        return $this->values[0] ?? null;
    }

    /**
     * @param  list<mixed>|mixed  $values  One value, or the ordered list of them.
     */
    public static function encode(mixed $values, int $id): string
    {
        $list = is_array($values) ? array_values($values) : [$values];

        return base64_encode(json_encode([$list, $id], JSON_THROW_ON_ERROR));
    }

    public static function decode(?string $cursor): ?self
    {
        if ($cursor === null || $cursor === '') {
            return null;
        }

        $raw = base64_decode($cursor, true);

        if ($raw === false) {
            return null;
        }

        try {
            $decoded = json_decode($raw, true, 512, JSON_THROW_ON_ERROR);
        } catch (JsonException) {
            return null;
        }

        if (! is_array($decoded) || count($decoded) !== 2 || ! is_numeric($decoded[1])) {
            return null;
        }

        /*
         * A bare value is read as a list of one.
         *
         * Cursors live in URLs people bookmark and paste, so a link made before
         * this carried multiple ordering values must still resume rather than
         * silently restarting at page one.
         */
        $values = is_array($decoded[0]) ? array_values($decoded[0]) : [$decoded[0]];

        return new self($values, (int) $decoded[1]);
    }
}
