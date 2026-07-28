<?php

declare(strict_types=1);

namespace PanelKit\Panel\Imports;

/**
 * What one pass over the file produced.
 *
 * PREPARED ROWS AND FAILURES TOGETHER, because both halves are the answer. A
 * result that reported only a count of failures would leave the operator to
 * guess which rows; one that reported only the rows would not say how many
 * survived, which is what they actually want to know before committing.
 */
final class ImportResult
{
    /**
     * @param  list<array<string, mixed>>  $prepared  Rows ready to write.
     * @param  list<ImportFailure>  $failures
     */
    public function __construct(
        public readonly array $prepared,
        public readonly array $failures,
    ) {}

    public function importable(): int
    {
        return count($this->prepared);
    }

    public function failed(): int
    {
        return count($this->failures);
    }

    /**
     * The report, with failures capped.
     *
     * A FILE WHERE EVERY ROW FAILS produces one message per row, and sending
     * five thousand of them to the browser turns a validation error into a
     * memory problem. The count is exact; the listing is the first fifty, which
     * is more than anybody reads before going back to the spreadsheet.
     *
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return [
            'importable' => $this->importable(),
            'failed' => $this->failed(),
            'failures' => array_map(
                static fn (ImportFailure $f): array => $f->toArray(),
                array_slice($this->failures, 0, 50),
            ),
            // Said explicitly rather than left for the client to infer from a
            // list length that has been truncated.
            'truncated' => $this->failed() > 50,
        ];
    }
}
