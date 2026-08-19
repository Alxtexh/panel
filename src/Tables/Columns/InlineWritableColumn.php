<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

/**
 * A column the list can write without opening the record.
 *
 * THE ALLOWLIST FOR PATCH `/{id}/cell`. A display column never implements
 * this, or implements it and returns false from `isInlineWritable()` (a
 * badge that is only a badge). The request names a column key; the server
 * accepts it only when this contract says the write is declared.
 */
interface InlineWritableColumn
{
    public function isInlineWritable(): bool;

    public function castValue(mixed $value): mixed;

    public function writableColumn(): string;
}
