<?php

declare(strict_types=1);

namespace PanelKit\Panel\Actions;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Support\TenantContext;

/**
 * The durable half of an export: who it belongs to and which file it is.
 *
 * SPLIT OUT OF `JobStatus` BECAUSE THE TWO HAVE DIFFERENT LIFETIMES. Progress is
 * worthless the moment a job ends and belongs in a cache; ownership is what the
 * download endpoint is checked against, and it has to last exactly as long as
 * the bytes on disk. Keeping both in a one-hour cache entry meant every export
 * link 404ed an hour later while the CSV sat there - including the "your export
 * is ready" notification, which is stored permanently.
 *
 * OWNERSHIP IS STILL THE ONLY GATE ON THE FILE ITSELF. A token is a UUID and the
 * row is looked up by token AND owner, so a leaked link is inert in somebody
 * else's hands - the same property the cache version had, now with a lifetime
 * that matches the thing it protects.
 *
 * THE TENANT IS RECORDED BUT NOT TRUSTED AS THE ONLY SCOPE. A row is written
 * with whatever tenant was current when the export ran, and read back with the
 * owner as well - because on a shared database "this tenant" and "this person"
 * are two different questions and an export answers to both.
 */
final class ExportedFile
{
    private const TABLE = 'panel_exports';

    /** Record a finished export so it can be downloaded later. */
    public static function record(
        string $token,
        int|string $ownerId,
        string $resource,
        string $disk,
        string $path,
        int $rows,
    ): void {
        DB::table(self::TABLE)->updateOrInsert(
            ['token' => $token],
            [
                'tenant_id' => self::tenantKey(),
                'user_id' => (string) $ownerId,
                'resource' => $resource,
                'disk' => $disk,
                'path' => $path,
                'rows' => $rows,
                'expires_at' => now()->addDays(self::retentionDays()),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        );
    }

    /**
     * One export, for the person who asked for it.
     *
     * RETURNS NULL RATHER THAN THROWING, so the caller decides what a miss
     * means: an unknown token and an expired one are both "not yours to
     * download", and the endpoint can say so in one place.
     *
     * @return array{disk: string, path: string, resource: string, rows: int}|null
     */
    public static function find(string $token, int|string $ownerId): ?array
    {
        $row = DB::table(self::TABLE)->where('token', $token)->first();

        if ($row === null || ! hash_equals((string) $row->user_id, (string) $ownerId)) {
            return null;
        }

        /*
         * EXPIRY IS CHECKED HERE, not left to the pruner. A scheduler that
         * stopped is a normal state of affairs, and an export that outlives its
         * retention window because nothing swept it is still past the point the
         * panel promised to keep it.
         */
        if (now()->greaterThan($row->expires_at)) {
            return null;
        }

        return [
            'disk' => (string) $row->disk,
            'path' => (string) $row->path,
            'resource' => (string) $row->resource,
            'rows' => (int) $row->rows,
        ];
    }

    /**
     * Delete expired exports - the row and the bytes together.
     *
     * BOTH OR NEITHER, which is the whole point. Deleting rows would leave
     * orphaned CSVs nothing can reach and nothing will ever collect; deleting
     * files would leave rows promising a download that 404s. The pair is what
     * this table exists to keep honest.
     *
     * @return int How many exports were removed.
     */
    public static function prune(): int
    {
        $removed = 0;

        DB::table(self::TABLE)
            ->where('expires_at', '<=', now())
            ->orderBy('token')
            ->chunk(200, function ($rows) use (&$removed): void {
                foreach ($rows as $row) {
                    try {
                        Storage::disk((string) $row->disk)->delete((string) $row->path);
                    } catch (\Throwable) {
                        // A disk that has gone away must not stop the row going
                        // away too - otherwise every later run retries the same
                        // unreachable file and prunes nothing behind it.
                    }

                    DB::table(self::TABLE)->where('token', $row->token)->delete();

                    $removed++;
                }
            });

        return $removed;
    }

    private static function retentionDays(): int
    {
        // At least a day, whatever config says. A retention of zero would delete
        // an export before the person who asked for it has finished reading the
        // notification that it exists.
        return max(1, (int) config('panel.exports.retention_days', 7));
    }

    /**
     * NULL IS ALLOWED HERE, unlike everywhere else in the panel.
     *
     * The row is read back by token AND owner, so the tenant column is a record
     * of where an export came from rather than the thing that protects it - and
     * a central-panel export, which legitimately has no tenant, must still be
     * downloadable by the person who ran it.
     */
    private static function tenantKey(): int|string|null
    {
        return app(TenantContext::class)->currentKey();
    }
}
