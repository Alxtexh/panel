<?php

declare(strict_types=1);

namespace PanelKit\Panel\Imports;

/**
 * One row that could not be imported, and why.
 *
 * THE LINE NUMBER IS THE SPREADSHEET'S, not the array index. Somebody fixing
 * this file is looking at a spreadsheet where the header is line 1 and the first
 * record is line 2 - telling them "row 0 failed" makes them count, and they will
 * count wrong on a file of five thousand.
 */
final class ImportFailure
{
    /** @param list<string> $messages */
    public function __construct(
        public readonly int $line,
        public readonly array $messages,
    ) {}

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            'line' => $this->line,
            'messages' => $this->messages,
        ];
    }
}
