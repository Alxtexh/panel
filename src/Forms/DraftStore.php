<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms;

use Illuminate\Support\Facades\Cache;

/** Owner-scoped, short-lived server drafts for forms that opt in. */
final class DraftStore
{
    /** @param array<string, mixed> $values */
    public static function put(
        int|string $owner,
        string $resource,
        string $draftKey,
        array $values,
        ?string $version,
    ): void {
        Cache::put(
            self::key($owner, $resource, $draftKey),
            ['values' => $values, 'version' => $version, 'savedAt' => now()->toIso8601String()],
            (int) config('panel.drafts.ttl', 86400),
        );
    }

    /** @return array{values: array<string, mixed>, version: string|null, savedAt: string}|null */
    public static function get(int|string $owner, string $resource, string $draftKey): ?array
    {
        $draft = Cache::get(self::key($owner, $resource, $draftKey));

        return is_array($draft) && isset($draft['values']) && is_array($draft['values'])
            ? [
                'values' => $draft['values'],
                'version' => isset($draft['version']) ? (string) $draft['version'] : null,
                'savedAt' => (string) ($draft['savedAt'] ?? ''),
            ]
            : null;
    }

    public static function forget(int|string $owner, string $resource, string $draftKey): void
    {
        Cache::forget(self::key($owner, $resource, $draftKey));
    }

    private static function key(int|string $owner, string $resource, string $draftKey): string
    {
        return 'panel:form-draft:'.hash('sha256', implode('|', [(string) $owner, $resource, $draftKey]));
    }
}
