<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Imports;

use Illuminate\Support\Facades\Storage;

/** Durable, owner-scoped metadata for retrying failed import rows. */
final class ImportRetry
{
    private const DIRECTORY = 'panel-import-retries';

    /** @param list<int> $failedLines @param array<string, string> $mapping */
    public static function store(
        string $token,
        int|string $ownerId,
        string $resource,
        string $source,
        array $mapping,
        array $failedLines,
    ): void {
        $disk = self::disk();
        $disk->makeDirectory(self::DIRECTORY);
        $path = self::metadataPath($token);

        $disk->put($path, json_encode([
            'owner' => (string) $ownerId,
            'resource' => $resource,
            'source' => $source,
            'source_hash' => is_file($source) ? hash_file('sha256', $source) : null,
            'mapping' => $mapping,
            'failed_lines' => array_values(array_unique(array_map('intval', $failedLines))),
            'created_at' => now()->toIso8601String(),
        ], JSON_THROW_ON_ERROR));
    }

    /** @return array{source: string, source_hash: ?string, mapping: array<string, string>, failed_lines: list<int>, resource: string}|null */
    public static function find(string $token, int|string $ownerId): ?array
    {
        $disk = self::disk();
        $path = self::metadataPath($token);

        if (! $disk->exists($path)) {
            return null;
        }

        $raw = json_decode((string) $disk->get($path), true);

        if (! is_array($raw) || ! hash_equals((string) ($raw['owner'] ?? ''), (string) $ownerId)) {
            return null;
        }

        if (! is_string($raw['source'] ?? null) || ! is_array($raw['mapping'] ?? null)) {
            return null;
        }

        $sourceHash = $raw['source_hash'] ?? null;

        if ($sourceHash !== null && (! is_string($sourceHash) || ! is_file($raw['source']) || ! hash_equals($sourceHash, (string) hash_file('sha256', $raw['source'])))) {
            return null;
        }

        return [
            'source' => $raw['source'],
            'source_hash' => is_string($sourceHash) ? $sourceHash : null,
            'mapping' => array_map('strval', $raw['mapping']),
            'failed_lines' => array_values(array_map('intval', (array) ($raw['failed_lines'] ?? []))),
            'resource' => (string) ($raw['resource'] ?? ''),
        ];
    }

    public static function forget(string $token): void
    {
        if (preg_match('/^[0-9a-f-]{36}$/i', $token) !== 1) {
            return;
        }

        self::disk()->delete(self::metadataPath($token));
    }

    private static function disk(): \Illuminate\Contracts\Filesystem\Filesystem
    {
        return Storage::disk(config('panel.exports.disk', 'local'));
    }

    private static function metadataPath(string $token): string
    {
        return self::DIRECTORY.'/'.$token.'.json';
    }
}
