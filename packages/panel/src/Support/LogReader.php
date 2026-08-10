<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Reading Laravel's log files without leaving the panel.
 *
 * THE FILE LIST IS BUILT FROM A GLOB, NEVER FROM THE REQUEST. The obvious
 * implementation takes a filename parameter and opens it, which is a read-any-
 * file-on-the-server endpoint with a log viewer painted on: `?file=../../.env`
 * is the whole exploit. The client sends an INDEX into a list this class
 * produced, so the only files reachable are the ones it chose.
 *
 * IT READS FROM THE END. A log is gigabytes at the worst possible moment - the
 * incident you opened it for is the one that filled it - and the lines anybody
 * wants are the last ones. Reading the tail through a seek keeps the page
 * bounded no matter how large the file grew, where `file()` would exhaust memory
 * exactly when the panel is most needed.
 *
 * IT IS NOT TENANT DATA. Logs are the INSTALLATION's, not an organisation's, so
 * this sits behind a panel ability rather than a resource policy - and on a
 * shared installation it should be withheld from tenant administrators entirely,
 * because one tenant's stack trace routinely names another's records.
 */
final class LogReader
{
    private const MAX_BYTES = 512 * 1024;

    /**
     * The readable log files, newest first.
     *
     * @return list<array{name: string, bytes: int, at: string}>
     */
    public function files(): array
    {
        $paths = glob(storage_path('logs/*.log')) ?: [];

        $files = array_map(static fn (string $path): array => [
            'name' => basename($path),
            'bytes' => filesize($path) ?: 0,
            'at' => date(DATE_ATOM, filemtime($path) ?: time()),
        ], $paths);

        usort($files, static fn (array $a, array $b): int => strcmp($b['at'], $a['at']));

        return array_values($files);
    }

    /**
     * The tail of one file, chosen BY NAME MATCHED AGAINST THE LIST.
     *
     * The name is compared against what `files()` returned rather than being
     * concatenated into a path - so `../../.env`, an absolute path and a symlink
     * all simply fail to match, and there is no traversal to get wrong.
     *
     * @return array{name: string|null, lines: list<string>, truncated: bool}
     */
    public function tail(?string $name, int $lines = 300, string $needle = ''): array
    {
        $known = array_column($this->files(), 'name');

        if ($name === null || ! in_array($name, $known, true)) {
            $name = $known[0] ?? null;
        }

        if ($name === null) {
            return ['name' => null, 'lines' => [], 'truncated' => false];
        }

        $path = storage_path('logs/'.$name);
        $size = filesize($path) ?: 0;
        $offset = max(0, $size - self::MAX_BYTES);

        $handle = fopen($path, 'rb');

        if ($handle === false) {
            return ['name' => $name, 'lines' => [], 'truncated' => false];
        }

        fseek($handle, $offset);
        $chunk = (string) fread($handle, self::MAX_BYTES);
        fclose($handle);

        // A partial first line is dropped: half an entry reads as corruption.
        if ($offset > 0) {
            $chunk = substr($chunk, (int) strpos($chunk, "\n") + 1);
        }

        $all = preg_split('/\r?\n/', trim($chunk)) ?: [];

        if ($needle !== '') {
            $all = array_values(array_filter(
                $all,
                static fn (string $line): bool => stripos($line, $needle) !== false,
            ));
        }

        return [
            'name' => $name,
            'lines' => array_slice($all, -$lines),
            'truncated' => $offset > 0,
        ];
    }
}
