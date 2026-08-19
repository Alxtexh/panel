<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\DB;

/**
 * Installation-wide settings, read and written by key.
 *
 * THE READS ARE MEMOIZED PER REQUEST, NOT CACHED ACROSS ONE. Backup settings are
 * consulted on every page that draws the operations screen and by the scheduler
 * on every tick; re-querying is cheap and staleness is not. A cross-request cache
 * would mean an operator changes the retention policy, sees the new value, and
 * the scheduler keeps applying the old one until something evicts the key - a
 * disagreement with no symptom until data goes missing.
 *
 * THE MEMO IS AN INSTANCE PROPERTY, AND THE CLASS IS BOUND SCOPED. A static memo
 * here would survive between requests under Octane, which is exactly the bug
 * that made `ResolveTenantByHost` treat a suspended tenant as active for the
 * life of the worker. That is the fourth time in this codebase: a guard, or the
 * data a guard reads, must not depend on ambient state.
 *
 * A MISSING TABLE READS AS EMPTY. The package ships this migration, but a
 * half-migrated installation must still render its pages - defaults are what the
 * caller asked for, and a 500 on the settings screen is the worst moment to
 * discover a pending migration.
 */
final class PanelSettings
{
    /**
     * Past values kept per key - roadmap 7.2. Bounded, not because storage
     * is scarce, but because nothing that reads this needs more: an
     * operator asking "what did it say before" means recently, and a
     * hundredth resave of an unrelated field should not be why the
     * thousandth is the one that gets pruned first.
     */
    private const HISTORY_LIMIT = 20;

    /** @var array<string, mixed>|null */
    private ?array $memo = null;

    public function get(string $key, mixed $default = null): mixed
    {
        return $this->all()[$key] ?? $default;
    }

    /** @return array<string, mixed> */
    public function all(): array
    {
        if ($this->memo !== null) {
            return $this->memo;
        }

        try {
            $rows = DB::table('panel_settings')->get(['key', 'value']);
        } catch (\Throwable) {
            return $this->memo = [];
        }

        $out = [];

        foreach ($rows as $row) {
            /*
             * A row that will not decode is treated as absent rather than
             * fatal. It can only come from a hand-edited database, and the
             * failure mode of trusting it is a settings screen that cannot be
             * opened to fix the value that broke it.
             */
            $decoded = json_decode((string) $row->value, true);

            if (json_last_error() === JSON_ERROR_NONE) {
                $out[$row->key] = $decoded;
            }
        }

        return $this->memo = $out;
    }

    public function put(string $key, mixed $value, ?string $by = null): void
    {
        $encoded = json_encode($value, JSON_THROW_ON_ERROR);
        $now = now();

        DB::table('panel_settings')->updateOrInsert(
            ['key' => $key],
            [
                'value' => $encoded,
                'updated_by' => $by,
                'updated_at' => $now,
                'created_at' => $now,
            ],
        );

        /*
         * THE HISTORY ROW IS THE SAME WRITE, not a separate call callers
         * have to remember to make - a settings screen that opts into
         * history and a caller that forgets to record it is exactly the
         * gap 7.2 exists to close. Every `put()` on any key gets a
         * timeline for free.
         */
        DB::table('panel_setting_history')->insert([
            'key' => $key,
            'value' => $encoded,
            'changed_by' => $by,
            'created_at' => $now,
        ]);

        $this->pruneHistory($key);

        // The memo described the world before this write. Dropping it is what
        // makes a read immediately after a write return what was just written.
        $this->memo = null;
    }

    /**
     * Every value this key has held, newest first - including the current
     * one, so a caller need not treat "now" specially.
     *
     * @return list<array{id: int, value: mixed, by: string|null, at: string}>
     */
    public function history(string $key, int $limit = self::HISTORY_LIMIT): array
    {
        try {
            $rows = DB::table('panel_setting_history')
                ->where('key', $key)
                ->orderByDesc('id')
                ->limit($limit)
                ->get(['id', 'value', 'changed_by', 'created_at']);
        } catch (\Throwable) {
            return [];
        }

        $out = [];

        foreach ($rows as $row) {
            $decoded = json_decode((string) $row->value, true);

            // Same rule as `all()`: a row that will not decode is skipped,
            // not fatal - a corrupt entry from long ago must not break
            // reading the ones after it.
            if (json_last_error() !== JSON_ERROR_NONE) {
                continue;
            }

            $out[] = [
                'id' => (int) $row->id,
                'value' => $decoded,
                'by' => $row->changed_by === null ? null : (string) $row->changed_by,
                'at' => (string) $row->created_at,
            ];
        }

        return $out;
    }

    /**
     * One historical value, by the id `history()` handed out - what a
     * restore action reads before writing it back through `put()`.
     *
     * @return array{value: mixed, by: string|null, at: string}|null
     */
    public function historyEntry(string $key, int $id): ?array
    {
        try {
            $row = DB::table('panel_setting_history')
                ->where('key', $key)
                ->where('id', $id)
                ->first(['value', 'changed_by', 'created_at']);
        } catch (\Throwable) {
            return null;
        }

        if ($row === null) {
            return null;
        }

        $decoded = json_decode((string) $row->value, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return null;
        }

        return [
            'value' => $decoded,
            'by' => $row->changed_by === null ? null : (string) $row->changed_by,
            'at' => (string) $row->created_at,
        ];
    }

    /** Keeps only the newest `HISTORY_LIMIT` rows for a key. */
    private function pruneHistory(string $key): void
    {
        $keepIds = DB::table('panel_setting_history')
            ->where('key', $key)
            ->orderByDesc('id')
            ->limit(self::HISTORY_LIMIT)
            ->pluck('id');

        if ($keepIds->isEmpty()) {
            return;
        }

        DB::table('panel_setting_history')
            ->where('key', $key)
            ->whereNotIn('id', $keepIds)
            ->delete();
    }

    /** @param array<string, mixed> $values */
    public function putMany(array $values, ?string $by = null): void
    {
        foreach ($values as $key => $value) {
            $this->put($key, $value, $by);
        }
    }

    /**
     * Who last changed this setting, and when.
     *
     * THE COLUMN WAS BEING WRITTEN AND NEVER READ, which makes it decoration.
     * A retention policy that quietly went from ninety days to seven is exactly
     * the kind of thing somebody has to be able to account for later, and
     * "somebody changed it at some point" is not an account.
     *
     * A SEPARATE QUERY rather than part of `all()`, because it is read on one
     * screen and `all()` is read on every scheduler tick.
     *
     * @return array{by: string|null, at: string}|null
     */
    public function provenance(string $key): ?array
    {
        try {
            $row = DB::table('panel_settings')->where('key', $key)->first(['updated_by', 'updated_at']);
        } catch (\Throwable) {
            return null;
        }

        if ($row === null) {
            return null;
        }

        return [
            'by' => $row->updated_by === null ? null : (string) $row->updated_by,
            'at' => (string) $row->updated_at,
        ];
    }

    public function forget(string $key): void
    {
        DB::table('panel_settings')->where('key', $key)->delete();

        $this->memo = null;
    }
}
