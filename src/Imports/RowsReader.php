<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Imports;

/**
 * Pick CSV or Excel from the file extension. CSV is always available.
 */
final class RowsReader
{
    /** @var list<string> */
    public const CSV = ['csv', 'txt'];

    /** @var list<string> */
    public const EXCEL = ['xlsx', 'xls', 'ods'];

    public static function open(string $path): CsvReader|ExcelReader
    {
        $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));

        if (in_array($extension, self::EXCEL, true)) {
            return new ExcelReader($path);
        }

        return new CsvReader($path);
    }

    public static function isExcel(string $path): bool
    {
        return in_array(strtolower(pathinfo($path, PATHINFO_EXTENSION)), self::EXCEL, true);
    }
}
