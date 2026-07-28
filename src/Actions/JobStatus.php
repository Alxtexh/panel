<?php

declare(strict_types=1);

namespace PanelKit\Panel\Actions;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

/**
 * Progress for a queued bulk action or export.
 *
 * EVERY READ IS OWNER-CHECKED. A status token is an unguessable string, but
 * "unguessable" is not an authorization model - it is a delay. The record
 * carries the id of the user who started the work and `get()` returns null for
 * anyone else, so a leaked token in a shared log or a copied URL still cannot
 * be used to watch someone else's job or reach the export it produced.
 *
 * Cache rather than a table, because progress is genuinely ephemeral: it is
 * read for the seconds a job runs and never again. The TTL is the cleanup, and
 * losing a status record costs a re-run rather than data - the mutation itself
 * lives in the database, not here.
 */
final class JobStatus
{
    public const PENDING = 'pending';

    public const RUNNING = 'running';

    public const DONE = 'done';

    public const FAILED = 'failed';

    /** Long enough to outlive any job a panel should be running synchronously. */
    private const TTL = 3600;

    public static function token(): string
    {
        return (string) Str::uuid();
    }

    public static function start(string $token, int|string $ownerId, string $kind): void
    {
        self::put($token, [
            'status' => self::PENDING,
            'kind' => $kind,
            'owner' => (string) $ownerId,
            'done' => 0,
            'total' => null,
            'error' => null,
            'file' => null,
        ]);
    }

    public static function progress(string $token, int $done, ?int $total = null): void
    {
        $state = self::raw($token);

        if ($state === null) {
            return;
        }

        self::put($token, [
            ...$state,
            'status' => self::RUNNING,
            'done' => $done,
            'total' => $total ?? $state['total'],
        ]);
    }

    /** @param array<string, mixed> $extra */
    public static function finish(string $token, array $extra = []): void
    {
        $state = self::raw($token);

        if ($state === null) {
            return;
        }

        self::put($token, [...$state, ...$extra, 'status' => self::DONE]);
    }

    public static function fail(string $token, string $message): void
    {
        $state = self::raw($token) ?? ['owner' => '', 'kind' => 'unknown', 'done' => 0, 'total' => null, 'file' => null];

        self::put($token, [...$state, 'status' => self::FAILED, 'error' => $message]);
    }

    /**
     * The status, but only for the user who started it.
     *
     * @return array<string, mixed>|null
     */
    public static function get(string $token, int|string $ownerId): ?array
    {
        $state = self::raw($token);

        if ($state === null || ! hash_equals((string) $state['owner'], (string) $ownerId)) {
            return null;
        }

        return $state;
    }

    /** @return array<string, mixed>|null */
    private static function raw(string $token): ?array
    {
        /** @var array<string, mixed>|null $state */
        $state = Cache::get(self::key($token));

        return $state;
    }

    /** @param array<string, mixed> $state */
    private static function put(string $token, array $state): void
    {
        Cache::put(self::key($token), $state, self::TTL);
    }

    private static function key(string $token): string
    {
        return "panel:job:{$token}";
    }
}
