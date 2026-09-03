<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Imports;

/**
 * One row that passed validation, paired with where it came from.
 *
 * THE LINE TRAVELS WITH THE DATA. Validation failures already cite the
 * spreadsheet's own line number (see `ImportFailure`); a row that fails
 * later - at WRITE time, a unique constraint the form's rules have no way to
 * check - has to cite the same number, or the two kinds of failure read as
 * two different files.
 */
final class ImportRow
{
    /** @param array<string, mixed> $data */
    public function __construct(
        public readonly int $line,
        public readonly array $data,
    ) {}
}
