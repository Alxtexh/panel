<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use DateTimeImmutable;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Widgets\Bucket;
use PanelKit\Panel\Widgets\Rollup;

/**
 * Builds the pre-aggregated series the dashboard reads.
 *
 * INCREMENTAL BY DEFAULT, backfill on request. A nightly run needs yesterday,
 * not two years - recomputing everything every night turns a cheap job into the
 * expensive scan the rollup existed to remove.
 *
 * IT AGGREGATES PER TENANT, in one grouped query per metric per tenant, rather
 * than one query per bucket. The whole point is to trade many reads at display
 * time for few writes at refresh time; doing it a day at a time would just move
 * the N+1 rather than remove it.
 *
 * ONLY COMPLETE BUCKETS ARE WRITTEN. Today is still accumulating, so a stored
 * value for it would be wrong the moment it landed and would never be
 * corrected - completed buckets are not recomputed. The read path handles the
 * current bucket live, which is one day's scan rather than the window's.
 */
final class RefreshRollupsCommand extends Command
{
    protected $signature = 'panel:refresh-rollups
                            {--days=2 : How far back to recompute}
                            {--backfill= : Recompute this many days instead, for a first run}
                            {--period=day : day|month}';

    protected $description = 'Pre-aggregate dashboard time series';

    /**
     * The metrics this panel keeps.
     *
     * Declared here rather than discovered, because a rollup is a deliberate
     * trade - storage and a scheduled job in exchange for read speed - and it
     * should be made per metric rather than applied to everything with a
     * timestamp.
     *
     * @var array<string, array{table: string, column: string}>
     */
    private const METRICS = [
        'sessions.started' => ['table' => 'client_sessions', 'column' => 'started_at'],
        'clients.created' => ['table' => 'clients', 'column' => 'created_at'],
    ];

    public function handle(): int
    {
        $period = (string) $this->option('period');
        $bucket = Bucket::tryFrom($period);

        if ($bucket === null || ! Rollup::supports($bucket)) {
            $this->components->error("Cannot roll up by [{$period}]. Use day or month.");

            return self::FAILURE;
        }

        $now = new DateTimeImmutable;

        $days = (int) ($this->option('backfill') ?: $this->option('days'));

        if ($days < 1) {
            $this->components->error('Nothing to compute: --days must be at least 1.');

            return self::FAILURE;
        }

        // Never past the last complete bucket.
        $until = Rollup::lastCompleteBucket($bucket, $now);
        $from = $bucket->floor($now->modify("-{$days} days"));

        $tenants = DB::table('tenants')->pluck('id');

        if ($tenants->isEmpty()) {
            $this->components->warn('No tenants to roll up.');

            return self::SUCCESS;
        }

        $started = microtime(true);
        $written = 0;

        foreach (self::METRICS as $metric => $source) {
            $rollup = new Rollup($metric);

            foreach ($tenants as $tenantId) {
                $values = $this->aggregate($source, $bucket, $tenantId, $from, $until);

                // ZEROES ARE WRITTEN EXPLICITLY, and this is load-bearing.
                //
                // A GROUP BY returns no row for a bucket with no rows, so an
                // empty day and a day that was never rolled up look identical
                // in the table - and the read path, quite reasonably, treats an
                // absent bucket as "not computed yet" and falls back to a live
                // scan. A metric with genuinely quiet periods therefore fell
                // back for every one of them: a 12-month chart found 3 stored
                // months out of 12 and rescanned the lot, taking 858 ms from a
                // table built to make it fast.
                //
                // Materialising the zeroes makes PRESENCE mean COMPUTED, which
                // is the property the read path actually needs.
                $written += $rollup->write($tenantId, $bucket, $this->fill($values, $bucket, $from, $until), $now);
            }

            $this->components->info("  {$metric}: {$written} buckets");
        }

        $this->components->info(sprintf(
            'Rolled up %d buckets across %d tenants in %.1fs.',
            $written,
            $tenants->count(),
            microtime(true) - $started,
        ));

        return self::SUCCESS;
    }

    /**
     * Fill every bucket in the computed range, zero where nothing happened.
     *
     * @param  array<string, int>  $values
     * @return array<string, int>
     */
    private function fill(array $values, Bucket $bucket, DateTimeImmutable $from, string $until): array
    {
        $filled = [];

        for ($at = $bucket->floor($from); ; $at = $bucket->next($at)) {
            $key = $at->format($bucket->phpFormat());

            // String comparison in the bucket's own format, which sorts
            // chronologically for both `Y-m-d` and `Y-m`.
            if ($key > $until) {
                break;
            }

            $filled[$key] = $values[$key] ?? 0;
        }

        return $filled;
    }

    /**
     * One grouped query per tenant per metric.
     *
     * @param  array{table: string, column: string}  $source
     * @return array<string, int>
     */
    private function aggregate(array $source, Bucket $bucket, int|string $tenantId, DateTimeImmutable $from, string $until): array
    {
        $driver = DB::connection()->getDriverName();
        $expression = $bucket->expression($driver, $source['column']);

        return DB::table($source['table'])
            ->selectRaw("{$expression} as pk_bucket, COUNT(*) as pk_value")
            // The bare column, never the bucket expression - filtering on
            // `strftime(...)` makes the index unusable and turns the refresh
            // into the full scan it exists to avoid.
            ->where('tenant_id', $tenantId)
            ->where($source['column'], '>=', $from->format('Y-m-d H:i:s'))
            ->groupBy('pk_bucket')
            // Trailing bucket comparison is a string compare in the same format
            // the expression emits, so it excludes the in-progress bucket
            // without needing a second date calculation.
            ->having('pk_bucket', '<=', $until)
            ->get()
            ->mapWithKeys(static fn (object $r): array => [trim((string) $r->pk_bucket) => (int) $r->pk_value])
            ->all();
    }
}
