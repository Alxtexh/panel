<?php

declare(strict_types=1);

namespace PanelKit\Panel\Imports;

use Generator;
use RuntimeException;

/**
 * Reads a CSV as an iterator of rows keyed by header.
 *
 * A GENERATOR, NOT AN ARRAY. A 50MB export re-imported as an array is 50MB of
 * strings plus PHP's per-value overhead, several times over - and the caller
 * only ever looks at one row at a time. Streaming keeps a large file the same
 * cost as a small one.
 *
 * IT STRIPS THE BOM. The panel's own exporter writes one so Excel reads UTF-8,
 * which means a file exported and re-imported has three invisible bytes glued to
 * its first header. The symptom is that the first column never maps, and the
 * header looks completely correct in every editor.
 */
final class CsvReader
{
    private const BOM = "\xEF\xBB\xBF";

    public function __construct(private readonly string $path) {}

    /**
     * The header row, in file order.
     *
     * Read separately so a mapping UI can be built before anything is imported -
     * which is the difference between "upload and hope" and "tell me which
     * column is the phone number".
     *
     * @return list<string>
     */
    public function headers(): array
    {
        $handle = $this->open();

        try {
            $row = fgetcsv($handle);
        } finally {
            fclose($handle);
        }

        if ($row === false || $row === [null]) {
            throw new RuntimeException('That file is empty.');
        }

        return $this->normaliseHeaders($row);
    }

    /**
     * Every data row, keyed by header.
     *
     * @return Generator<int, array<string, string|null>>
     */
    public function rows(): Generator
    {
        $handle = $this->open();

        try {
            $headers = fgetcsv($handle);

            if ($headers === false || $headers === [null]) {
                return;
            }

            $headers = $this->normaliseHeaders($headers);
            $index = 0;

            while (($row = fgetcsv($handle)) !== false) {
                // A blank line reads as `[null]`, not as an empty array. Left
                // in, it becomes a row of nulls that fails every required rule
                // and reports a confusing error for a line nobody typed.
                if ($row === [null]) {
                    continue;
                }

                /*
                 * PADDED OR TRUNCATED TO THE HEADER WIDTH.
                 *
                 * `array_combine` throws when the counts differ, which would
                 * abort the whole file because one row has a trailing comma.
                 * A short row means missing values - which validation will
                 * report per row, as it should.
                 */
                $row = array_slice(array_pad($row, count($headers), null), 0, count($headers));

                yield $index++ => array_combine($headers, $row);
            }
        } finally {
            fclose($handle);
        }
    }

    /**
     * @param  list<string|null>  $row
     * @return list<string>
     */
    private function normaliseHeaders(array $row): array
    {
        $headers = [];

        foreach ($row as $position => $header) {
            $header = trim((string) $header);

            if ($position === 0) {
                $header = ltrim($header, self::BOM);
            }

            /*
             * A BLANK HEADER GETS A POSITIONAL NAME rather than being dropped.
             *
             * Dropping it would shift every column after it by one, so the
             * mapping would silently point at the wrong data - names imported
             * into the phone field, and no error anywhere. A named-but-useless
             * column simply never gets mapped.
             */
            $headers[] = $header === '' ? "column_{$position}" : $header;
        }

        return $headers;
    }

    /** @return resource */
    private function open()
    {
        $handle = fopen($this->path, 'r');

        if ($handle === false) {
            throw new RuntimeException('That file could not be read.');
        }

        return $handle;
    }
}
