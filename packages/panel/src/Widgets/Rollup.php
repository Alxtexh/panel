<?php

declare(strict_types=1);

namespace PanelKit\Panel\Widgets;

use DateTimeImmutable;
use Illuminate\Support\Facades\DB;
use InvalidArgumentException;

/**
 * Reads and writes the pre-aggregated series.
 *
 * THE READ PATH FALLS BACK, AND THAT IS THE DESIGN. A rollup is a cache of
 * something that can always be recomputed, so a missing bucket must never mean
 * a missing point - it means "compute this one live". The alternative is a
 * chart that silently reads zero for any day the refresh has not covered yet,
 * which is the failure mode that makes people distrust dashboards.
 *
 * So the read asks the rollup for the whole range, and asks the LIVE query only
 * for the buckets the rollup did not have. A fully-covered 30-day chart is 30
 * row reads; a chart covering today, which no nightly job can have rolled up
 * yet, is 30 rows plus one live day.
 *
 * TODAY IS NEVER ROLLED UP. An incomplete bucket written to the table would be
 * wrong from the moment it was written and would stay wrong until something
 * overwrote it - and nothing would, because a completed day is not refreshed
 * again. Only whole past buckets are stored.
 */
final class Rollup
{
    /** Buckets that can be pre-aggregated. An hour is too fine to be worth it. */
    private const PERIODS = ['day', 'month'];

    public function __construct(private readonly string $metric)
    {
        if (preg_match('/^[a-z0-9_.]+$/', $metric) !== 1) {
            throw new InvalidArgumentException("[{$metric}] is not a valid metric name.");
        }
    }

    /** Whether this bucket granularity is pre-aggregated at all. */
    public static function supports(Bucket $bucket): bool
    {
        return in_array($bucket->value, self::PERIODS, true);
    }

    /**
     * Stored values for a range, keyed by bucket.
     *
     * @return array<string, int>
     */
    public function read(int|string $tenantKey, Bucket $bucket, string $from, string $to): array
    {
        if (! self::supports($bucket)) {
            return [];
        }

        return DB::table('metric_rollups')
            ->where('tenant_id', $tenantKey)
            ->where('metric', $this->metric)
            ->where('period', $bucket->value)
            ->whereBetween('bucket', [$from, $to])
            ->pluck('value', 'bucket')
            ->map(static fn ($v): int => (int) $v)
            ->all();
    }

    /**
     * One number for a range, summed in the database.
     *
     * For a headline figure rather than a series: the caller wants "sessions
     * this month", not thirty points it then adds up in PHP. Reading the rows
     * to total them would be the same N reads for a single answer.
     *
     * BOUNDED BY WHAT WAS ROLLED UP, and callers must respect that. This
     * returns the sum of the buckets that EXIST in the range - it cannot know
     * whether a range extends past the backfill, so a caller asking for "all
     * time" would get "all time that has been aggregated" and never be told the
     * difference. Ask for windows you know are covered.
     */
    public function sum(int|string $tenantKey, Bucket $bucket, string $from, string $to): int
    {
        if (! self::supports($bucket)) {
            return 0;
        }

        return (int) DB::table('metric_rollups')
            ->where('tenant_id', $tenantKey)
            ->where('metric', $this->metric)
            ->where('period', $bucket->value)
            ->whereBetween('bucket', [$from, $to])
            ->sum('value');
    }

    /**
     * Store computed buckets, overwriting any that already exist.
     *
     * upsert, not insert: a refresh that ran twice must not double a day. The
     * unique key makes that impossible; this makes it convenient.
     *
     * @param  array<string, int>  $values  bucket => value
     */
    public function write(int|string $tenantKey, Bucket $bucket, array $values, DateTimeImmutable $now): int
    {
        if ($values === [] || ! self::supports($bucket)) {
            return 0;
        }

        $rows = [];

        foreach ($values as $key => $value) {
            $rows[] = [
                'tenant_id' => $tenantKey,
                'metric' => $this->metric,
                'period' => $bucket->value,
                'bucket' => (string) $key,
                'value' => (int) $value,
                'computed_at' => $now->format('Y-m-d H:i:s'),
            ];
        }

        // Chunked: an upsert with 500 rows of bindings is fine, one with 20,000
        // exceeds what most drivers accept in a single statement.
        foreach (array_chunk($rows, 500) as $chunk) {
            DB::table('metric_rollups')->upsert(
                $chunk,
                ['tenant_id', 'metric', 'period', 'bucket'],
                ['value', 'computed_at'],
            );
        }

        return count($rows);
    }

    /**
     * The last bucket that may safely be stored.
     *
     * Everything up to, but NOT including, the bucket `$now` falls in - an
     * in-progress bucket is incomplete by definition, and a wrong value written
     * once would never be corrected because completed buckets are not
     * recomputed.
     */
    public static function lastCompleteBucket(Bucket $bucket, DateTimeImmutable $now): string
    {
        $current = $bucket->floor($now);

        return match ($bucket) {
            Bucket::Month => $current->modify('-1 month')->format($bucket->phpFormat()),
            default => $current->modify('-1 day')->format($bucket->phpFormat()),
        };
    }
}
