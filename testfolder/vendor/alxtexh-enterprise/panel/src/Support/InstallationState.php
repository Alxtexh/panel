<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\DB;

/**
 * State that belongs to the INSTALLATION, kept where a tenant cannot hide it.
 *
 * THE CACHE IS TENANT-PREFIXED, WHICH IS CORRECT AND MAKES IT THE WRONG PLACE
 * FOR THIS. `CacheTenancyBootstrapper` tags every key with the current tenant so
 * a memoized count cannot be served to the wrong organisation - a correctness
 * property, deliberately kept. The consequence is that a key written with no
 * tenant (the scheduler, a console command) is simply not there when read inside
 * a tenant request, and vice versa. Nothing errors; the read returns null and
 * the caller concludes the thing never happened.
 *
 * THAT WAS NOT THEORETICAL. The scheduler heartbeat was written by cron and read
 * on the platform screen, and the screen reported "the scheduler is not running"
 * on an installation where it was running perfectly. Worse, the lock that stops
 * two backups running at once was tenant-prefixed - so two organisations' admins
 * could each start a backup and each acquire "the" lock, which is precisely the
 * situation the lock exists to prevent.
 *
 * SO IT USES A TABLE. `panel_settings` already exists for facts about the
 * installation, has no tenant column by design, and is reached through the same
 * connection everywhere. A row per key is not fast, and none of this is hot:
 * a heartbeat once a minute and a lock taken twice a day.
 *
 * THE LOCK IS THE DATABASE'S PRIMARY KEY, not an application check. `insert`
 * against a held key fails; that failure IS the lock. A read-then-write would
 * have a window between the two, and the window is exactly where two backups
 * start.
 */
final class InstallationState
{
    /** Rows written by this class are prefixed, so they cannot collide with settings. */
    private const PREFIX = 'state:';

    public function get(string $key, mixed $default = null): mixed
    {
        $row = $this->row($key);

        if ($row === null) {
            return $default;
        }

        // An expired row is absent. Cleared lazily rather than by a scheduled
        // sweep, because the sweep would itself need the scheduler this is
        // partly here to check on.
        if ($row->expires_at !== null && strtotime((string) $row->expires_at) < time()) {
            $this->forget($key);

            return $default;
        }

        $decoded = json_decode((string) $row->value, true);

        return json_last_error() === JSON_ERROR_NONE ? $decoded : $default;
    }

    public function put(string $key, mixed $value, ?int $seconds = null): void
    {
        DB::table('panel_settings')->updateOrInsert(
            ['key' => self::PREFIX.$key],
            [
                'value' => json_encode($value, JSON_THROW_ON_ERROR),
                'expires_at' => $seconds === null ? null : now()->addSeconds($seconds),
                'updated_at' => now(),
                'created_at' => now(),
            ],
        );
    }

    public function forget(string $key): void
    {
        DB::table('panel_settings')->where('key', self::PREFIX.$key)->delete();
    }

    /**
     * Take a lock across the whole installation, or return false.
     *
     * THE INSERT IS THE LOCK. A `SELECT` followed by an `INSERT` leaves a window
     * between them, and two backups starting at the same second is the exact
     * event this prevents - so acquisition is one statement that the database
     * either accepts or rejects on the primary key.
     *
     * AN EXPIRED LOCK IS CLEARED FIRST, so a worker killed mid-backup does not
     * block every future one. The expiry is the recovery path, not the
     * mechanism: it has to be longer than the work can legitimately take, or it
     * releases a lock that is still in use.
     */
    public function acquire(string $key, int $seconds): bool
    {
        $name = self::PREFIX.'lock:'.$key;

        // Clear it only if it has actually expired. An unconditional delete
        // would be a way for any caller to steal a live lock.
        DB::table('panel_settings')
            ->where('key', $name)
            ->whereNotNull('expires_at')
            ->where('expires_at', '<', now())
            ->delete();

        try {
            return DB::table('panel_settings')->insert([
                'key' => $name,
                'value' => json_encode(['held' => true], JSON_THROW_ON_ERROR),
                'expires_at' => now()->addSeconds($seconds),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        } catch (\Throwable) {
            /*
             * A UNIQUE VIOLATION IS THE ANSWER, not an error. Any other failure
             * also resolves to "did not get the lock", which is the safe
             * direction: refusing to start a second backup is recoverable,
             * starting one is not.
             */
            return false;
        }
    }

    public function release(string $key): void
    {
        DB::table('panel_settings')->where('key', self::PREFIX.'lock:'.$key)->delete();
    }

    private function row(string $key): ?object
    {
        try {
            return DB::table('panel_settings')
                ->where('key', self::PREFIX.$key)
                ->first(['value', 'expires_at']);
        } catch (\Throwable) {
            // A half-migrated installation reads as empty rather than fataling
            // on a page that is otherwise fine.
            return null;
        }
    }
}
