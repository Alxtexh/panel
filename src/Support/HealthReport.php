<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

/**
 * How the machine and the application are actually doing, right now.
 *
 * WHAT WAS MISSING. `PlatformReport` answers "what is this installation
 * configured as" - versions, drivers, tenancy mode - which is a deploy-time
 * question somebody asks once. The question an operator has at three in the
 * afternoon is different and was answered nowhere: is the disk filling, is the
 * queue backing up, did anything fail, is the database still quick. Those are
 * the numbers that change, and a panel that reports its own configuration but
 * not its own health is a dashboard for the wrong audience.
 *
 * EVERY MEASUREMENT DEGRADES TO "UNAVAILABLE" RATHER THAN TO A GUESS. Load
 * averages do not exist on every platform, `/proc/meminfo` is Linux-only, a
 * queue on Redis has no `jobs` table to count, and a managed database may refuse
 * to report its own size. A monitor that invents a plausible zero in those cases
 * is worse than one that says it cannot see - because zero is also what a
 * healthy queue looks like.
 *
 * IT MEASURES THIS HOST AND THIS CONNECTION, and nothing else. There is no
 * agent, no remote endpoint and nothing to configure; what it can see is what
 * the PHP process can see. That is a real limit and it is stated on the screen
 * rather than papered over - a monitoring page that implies it is watching a
 * cluster while reading one container is actively misleading.
 *
 * NOTHING HERE IS CACHED. The whole value is that the numbers are current, and
 * every one of them is cheap: two small queries, a file-system stat and a cache
 * round trip.
 */
final class HealthReport
{
    /** @return array<string, mixed> */
    public function all(): array
    {
        return [
            'cpu' => $this->cpu(),
            'memory' => $this->memory(),
            'disk' => $this->disk(),
            'database' => $this->database(),
            'queue' => $this->queue(),
            'cache' => $this->cache(),
            'scheduler' => $this->scheduler(),
            'process' => $this->process(),
            'at' => now()->toIso8601String(),
        ];
    }

    /**
     * Load average, and what it means against the core count.
     *
     * A RAW LOAD FIGURE IS UNREADABLE WITHOUT THE CORE COUNT. "4.0" is a machine
     * on fire with two cores and half idle with sixteen, so the percentage is
     * the number worth showing and the raw values are kept beside it for anybody
     * who reads them natively.
     *
     * @return array<string, mixed>
     */
    private function cpu(): array
    {
        if (! function_exists('sys_getloadavg')) {
            return ['available' => false];
        }

        $load = sys_getloadavg();

        if ($load === false) {
            return ['available' => false];
        }

        $cores = $this->cores();

        return [
            'available' => true,
            'one' => round($load[0], 2),
            'five' => round($load[1], 2),
            'fifteen' => round($load[2], 2),
            'cores' => $cores,
            // Capped for the bar; a load of 3x the cores is off the scale in
            // every sense and drawing it as 300% helps nobody.
            'percent' => $cores > 0 ? (int) min(100, round($load[0] / $cores * 100)) : null,
        ];
    }

    /**
     * Host memory where it can be read, and this process's own either way.
     *
     * TWO DIFFERENT NUMBERS, and conflating them is the usual mistake. Host
     * memory says whether the machine is under pressure; the PHP process's peak
     * says whether a request is close to `memory_limit`, which is what actually
     * kills an export. Both are worth watching and they fail independently.
     *
     * @return array<string, mixed>
     */
    private function memory(): array
    {
        $process = [
            'current' => memory_get_usage(true),
            'peak' => memory_get_peak_usage(true),
            'limit' => $this->bytes((string) ini_get('memory_limit')),
        ];

        // `/proc/meminfo` is Linux. Everywhere else this half is simply absent
        // rather than approximated from something that does not mean the same.
        if (! is_readable('/proc/meminfo')) {
            return ['available' => false, 'process' => $process];
        }

        $raw = (string) @file_get_contents('/proc/meminfo');

        $read = static function (string $key) use ($raw): ?int {
            return preg_match('/^'.$key.':\s+(\d+) kB/m', $raw, $m) === 1
                ? ((int) $m[1]) * 1024
                : null;
        };

        $total = $read('MemTotal');

        /*
         * `MemAvailable`, NOT `MemFree`. Free memory on a healthy Linux box is
         * nearly zero because the kernel uses the rest for page cache -
         * reporting that as pressure would have every server permanently red.
         */
        $availableBytes = $read('MemAvailable');

        if ($total === null || $availableBytes === null) {
            return ['available' => false, 'process' => $process];
        }

        return [
            'available' => true,
            'total' => $total,
            'free' => $availableBytes,
            'used' => $total - $availableBytes,
            'percent' => (int) round(($total - $availableBytes) / $total * 100),
            'process' => $process,
        ];
    }

    /**
     * Disk, measured where the application actually writes.
     *
     * THE STORAGE PATH RATHER THAN `/`. Uploads, exports, backups and logs all
     * land there, and on a real deployment it is frequently a different volume
     * from the root filesystem - so a monitor reading `/` can show 60% while the
     * partition that matters is full and every upload is failing.
     *
     * @return array<string, mixed>
     */
    private function disk(): array
    {
        $path = storage_path();

        $total = @disk_total_space($path);
        $free = @disk_free_space($path);

        if ($total === false || $free === false || $total <= 0) {
            return ['available' => false];
        }

        return [
            'available' => true,
            'path' => $path,
            'total' => (int) $total,
            'free' => (int) $free,
            'used' => (int) ($total - $free),
            'percent' => (int) round(($total - $free) / $total * 100),
        ];
    }

    /**
     * Is the database answering, and how quickly.
     *
     * THE LATENCY IS THE POINT, not the size. A database that is up but taking
     * 400ms to answer `select 1` is a panel where every screen feels broken and
     * nothing in the logs says why - and it is invisible to a check that only
     * asks whether the connection opens.
     *
     * @return array<string, mixed>
     */
    private function database(): array
    {
        $started = microtime(true);

        try {
            DB::select('select 1');
        } catch (\Throwable $e) {
            return ['available' => false, 'error' => $e->getMessage()];
        }

        $latency = round((microtime(true) - $started) * 1000, 1);

        return [
            'available' => true,
            'driver' => DB::connection()->getDriverName(),
            'latency_ms' => $latency,
            'size' => $this->databaseSize(),
        ];
    }

    /**
     * How much data there is, where the engine will say.
     *
     * NULL IS A PERFECTLY GOOD ANSWER. A managed database may not expose this,
     * and the query differs per engine - so it is attempted and dropped rather
     * than being allowed to fail the whole report.
     */
    private function databaseSize(): ?int
    {
        try {
            return match (DB::connection()->getDriverName()) {
                'sqlite' => $this->sqliteSize(),
                'mysql', 'mariadb' => (int) (DB::selectOne(
                    'select sum(data_length + index_length) as size from information_schema.tables where table_schema = database()'
                )?->size ?? 0) ?: null,
                'pgsql' => (int) (DB::selectOne(
                    'select pg_database_size(current_database()) as size'
                )?->size ?? 0) ?: null,
                default => null,
            };
        } catch (\Throwable) {
            return null;
        }
    }

    private function sqliteSize(): ?int
    {
        $path = DB::connection()->getDatabaseName();

        if (! is_string($path) || ! is_file($path)) {
            return null;
        }

        $size = @filesize($path);

        return $size === false ? null : $size;
    }

    /**
     * What is waiting, and what has already given up.
     *
     * FAILED JOBS ARE THE HEADLINE. A backlog drains; a failure does not, and
     * every one of them is work somebody believes happened - an export that was
     * never written, a report that was never sent, a suspension that never took
     * effect. It is the number on this page most likely to be actionable.
     *
     * ONLY COUNTABLE ON A DATABASE QUEUE. A Redis or SQS queue keeps its depth
     * somewhere this cannot read without a driver-specific client, and guessing
     * zero would be indistinguishable from "nothing is waiting".
     *
     * @return array<string, mixed>
     */
    private function queue(): array
    {
        $connection = (string) config('queue.default');

        $out = ['connection' => $connection, 'available' => false, 'failed' => null];

        try {
            $out['failed'] = DB::table('failed_jobs')->count();
        } catch (\Throwable) {
            // No table: the application never published the migration, which is
            // a real state and not an error.
        }

        if ($connection !== 'database') {
            return $out;
        }

        try {
            $pending = DB::table('jobs')->count();

            /*
             * RESERVED MEANS "A WORKER HAS IT". Counting those as pending makes
             * a healthy queue look permanently backed up under load; counting
             * them nowhere hides a worker that has stalled mid-job.
             */
            $reserved = DB::table('jobs')->whereNotNull('reserved_at')->count();

            $oldest = DB::table('jobs')->min('available_at');

            return [
                ...$out,
                'available' => true,
                'pending' => $pending - $reserved,
                'reserved' => $reserved,
                'oldest_seconds' => $oldest === null ? null : max(0, time() - (int) $oldest),
            ];
        } catch (\Throwable) {
            return $out;
        }
    }

    /**
     * Is the cache reachable, and how quickly.
     *
     * A ROUND TRIP RATHER THAN A PING. The panel's sessions, schema cache, job
     * status and tenant-prefixed keys all go through this store; "the process is
     * listening" is not the same as "a write followed by a read returns what was
     * written", and only the second is the thing being relied on.
     *
     * @return array<string, mixed>
     */
    private function cache(): array
    {
        $store = (string) config('cache.default');
        $key = 'panel:health:'.bin2hex(random_bytes(4));

        $started = microtime(true);

        try {
            Cache::put($key, 'ok', 10);
            $read = Cache::get($key);
            Cache::forget($key);
        } catch (\Throwable $e) {
            return ['store' => $store, 'available' => false, 'error' => $e->getMessage()];
        }

        return [
            'store' => $store,
            'available' => $read === 'ok',
            'latency_ms' => round((microtime(true) - $started) * 1000, 1),
        ];
    }

    /**
     * When the scheduler last ran.
     *
     * THE QUIETEST SERIOUS FAILURE A DEPLOYMENT HAS. Without the cron entry
     * there are no backups, no cleanup, no monitoring and no scheduled reports -
     * and every screen reporting on those looks perfectly healthy, because the
     * work simply never ran. The heartbeat is written every minute precisely so
     * its absence is visible.
     *
     * @return array<string, mixed>
     */
    private function scheduler(): array
    {
        $last = app(InstallationState::class)->get('scheduler:last-run');

        if (! is_string($last) || $last === '') {
            return ['running' => false, 'last' => null, 'seconds_ago' => null];
        }

        try {
            $at = Carbon::parse($last);
        } catch (\Throwable) {
            return ['running' => false, 'last' => null, 'seconds_ago' => null];
        }

        $ago = $at->diffInSeconds(now());

        return [
            // Two minutes of slack: a tick can be a few seconds late on a busy
            // box, and a monitor that cries wolf at 61 seconds is one nobody
            // believes at 61 minutes.
            'running' => $ago < 120,
            'last' => $at->toIso8601String(),
            'seconds_ago' => (int) $ago,
        ];
    }

    /** @return array<string, mixed> */
    private function process(): array
    {
        return [
            'php' => PHP_VERSION,
            'sapi' => PHP_SAPI,
            'uptime' => $this->uptimeSeconds(),
            'storage_writable' => is_writable(storage_path()),
            'default_disk' => (string) config('filesystems.default'),
        ];
    }

    private function uptimeSeconds(): ?int
    {
        if (! is_readable('/proc/uptime')) {
            return null;
        }

        $raw = (string) @file_get_contents('/proc/uptime');

        return $raw === '' ? null : (int) (float) strtok($raw, ' ');
    }

    private function cores(): int
    {
        if (is_readable('/proc/cpuinfo')) {
            $raw = (string) @file_get_contents('/proc/cpuinfo');

            $count = substr_count($raw, 'processor');

            if ($count > 0) {
                return $count;
            }
        }

        return 1;
    }

    /** `512M` and friends, as bytes. `-1` means no limit. */
    private function bytes(string $value): ?int
    {
        $value = trim($value);

        if ($value === '' || $value === '-1') {
            return null;
        }

        $unit = strtolower(substr($value, -1));
        $number = (int) $value;

        return match ($unit) {
            'g' => $number * 1024 ** 3,
            'm' => $number * 1024 ** 2,
            'k' => $number * 1024,
            default => $number,
        };
    }
}
