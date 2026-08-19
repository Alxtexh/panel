<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Imports;

use Generator;
use RuntimeException;

/**
 * Spreadsheet rows, keyed by header. Optional: needs phpoffice/phpspreadsheet.
 *
 * CSV is the kit path. Excel is the same importer once the rows are an
 * iterator; this class is the adapter, not a second import pipeline. The
 * package is suggested, not required, so a host that never imports .xlsx
 * never pays for PhpSpreadsheet.
 */
final class ExcelReader
{
    public function __construct(private readonly string $path)
    {
        if (! class_exists(\PhpOffice\PhpSpreadsheet\IOFactory::class)) {
            throw new RuntimeException(
                'Excel import needs phpoffice/phpspreadsheet. '
                .'composer require phpoffice/phpspreadsheet'
            );
        }
    }

    /**
     * @return list<string>
     */
    public function headers(): array
    {
        $sheet = $this->sheet();
        $highest = $sheet->getHighestDataColumn();
        $row = $sheet->rangeToArray('A1:'.$highest.'1', null, true, false)[0] ?? [];

        return $this->normaliseHeaders(array_map(
            static fn (mixed $cell): ?string => $cell === null ? null : (string) $cell,
            $row,
        ));
    }

    /**
     * @return Generator<int, array<string, string|null>>
     */
    public function rows(): Generator
    {
        $sheet = $this->sheet();
        $headers = $this->headers();
        $highestRow = (int) $sheet->getHighestDataRow();
        $highestColumn = $sheet->getHighestDataColumn();
        $index = 0;

        for ($line = 2; $line <= $highestRow; $line++) {
            $row = $sheet->rangeToArray('A'.$line.':'.$highestColumn.$line, null, true, false)[0] ?? [];
            $row = array_slice(array_pad($row, count($headers), null), 0, count($headers));
            $values = [];

            foreach ($row as $cell) {
                if ($cell === null) {
                    $values[] = null;
                } else {
                    $value = is_scalar($cell) ? (string) $cell : '';
                    $values[] = trim($value) === '' ? null : $value;
                }
            }

            if ($values === array_fill(0, count($headers), null)) {
                continue;
            }

            yield $index++ => array_combine($headers, $values);
        }
    }

    private function sheet(): \PhpOffice\PhpSpreadsheet\Worksheet\Worksheet
    {
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($this->path);

        return $spreadsheet->getActiveSheet();
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
            $headers[] = $header === '' ? "column_{$position}" : $header;
        }

        return $headers;
    }
}
