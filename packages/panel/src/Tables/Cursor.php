<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables;

use JsonException;

/**
 * Keyset pagination cursor: the (sort value, id) pair of the last row on a page.
 *
 * Encoded rather than raw so the client does not depend on its shape, and
 * decoded defensively because it arrives from the URL. A malformed cursor yields
 * null, which callers treat as "start from the beginning" — never as an error
 * page, and never as an unfiltered query.
 *
 * A tampered cursor is not a security concern on its own: it can only move the
 * seek position WITHIN the already tenant-scoped, already filtered query. It
 * cannot widen the result set, because the tenant constraint comes from the
 * model's global scope, not from anything encoded here.
 */
final readonly class Cursor
{
    public function __construct(
        public mixed $value,
        public int $id,
    ) {}

    public static function encode(mixed $value, int $id): string
    {
        return base64_encode(json_encode([$value, $id], JSON_THROW_ON_ERROR));
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

        return new self($decoded[0], (int) $decoded[1]);
    }
}
