<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\Bucket;
use Alxtexh\Panel\Widgets\Rollup;
use DateTimeImmutable;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use InvalidArgumentException;

/**
 * Pre-aggregated counts, so a year-long chart is a read rather than a scan.
 *
 * TODAY IS NEVER ROLLED UP, and that is the property everything else depends
 * on. An incomplete bucket written to the table is wrong from the moment it is
 * written and stays wrong, because a completed day is never recomputed -
 * nothing would ever overwrite it. So only whole PAST buckets are stored, and
 * the current one is always counted live.
 *
 * THE METRIC NAME IS VALIDATED, because it identifies rows in a shared table
 * and reaches a query. It comes from developer-authored widget definitions
 * today; that is a fact about today's callers rather than a property of the
 * class.
 *
 * AN HOUR IS TOO FINE TO PRE-AGGREGATE. Storing it would cost more rows than
 * the scan it saves, so the bucket is refused rather than silently stored and
 * never read.
 */
final class RollupTest extends TestCase
{
    use RefreshDatabase;

    private const TENANT = 1;

    private function rollup(string $metric = 'articles.created'): Rollup
    {
        return new Rollup($metric);
    }

    public function test_a_metric_name_that_is_not_an_identifier_is_refused(): void
    {
        foreach (['metric; drop table x--', 'metric name', 'Metric', ''] as $metric) {
            try {
                new Rollup($metric);

                $this->fail("[{$metric}] was accepted as a metric name.");
            } catch (InvalidArgumentException) {
                $this->addToAssertionCount(1);
            }
        }
    }

    public function test_day_and_month_are_pre_aggregated_and_hour_is_not(): void
    {
        $this->assertTrue(Rollup::supports(Bucket::Day));
        $this->assertTrue(Rollup::supports(Bucket::Month));

        $this->assertFalse(
            Rollup::supports(Bucket::Hour),
            'An hourly rollup costs more rows than the scan it saves.',
        );
    }

    public function test_values_survive_a_write_and_a_read(): void
    {
        $rollup = $this->rollup();

        $rollup->write(self::TENANT, Bucket::Day, [
            '2026-06-10' => 5,
            '2026-06-11' => 8,
        ], new DateTimeImmutable('2026-06-15 00:00:00'));

        $read = $rollup->read(self::TENANT, Bucket::Day, '2026-06-01', '2026-06-30');

        $this->assertSame(5, $read['2026-06-10'] ?? null);
        $this->assertSame(8, $read['2026-06-11'] ?? null);
    }

    /**
     * REWRITING A BUCKET UPDATES IT RATHER THAN DUPLICATING.
     *
     * The refresh command re-runs over a range; without an upsert every run
     * would double the stored figure, and a chart would climb on its own.
     */
    public function test_rewriting_a_bucket_replaces_its_value(): void
    {
        $rollup = $this->rollup();
        $now = new DateTimeImmutable('2026-06-15 00:00:00');

        $rollup->write(self::TENANT, Bucket::Day, ['2026-06-10' => 5], $now);
        $rollup->write(self::TENANT, Bucket::Day, ['2026-06-10' => 9], $now);

        $this->assertSame(9, $rollup->read(self::TENANT, Bucket::Day, '2026-06-01', '2026-06-30')['2026-06-10'] ?? null);
        $this->assertSame(1, DB::table('metric_rollups')->count(), 'A rewritten bucket was stored twice.');
    }

    /**
     * ONE ORGANISATION'S ROLLUPS ARE NOT ANOTHER'S.
     *
     * The table is shared, so the tenant key is part of the row's identity -
     * without it every organisation would read a single blended figure, which
     * is a cross-tenant leak wearing a chart.
     */
    public function test_rollups_do_not_cross_organisations(): void
    {
        $rollup = $this->rollup();
        $now = new DateTimeImmutable('2026-06-15 00:00:00');

        $rollup->write(1, Bucket::Day, ['2026-06-10' => 5], $now);
        $rollup->write(2, Bucket::Day, ['2026-06-10' => 99], $now);

        $this->assertSame(5, $rollup->read(1, Bucket::Day, '2026-06-01', '2026-06-30')['2026-06-10'] ?? null);
        $this->assertSame(99, $rollup->read(2, Bucket::Day, '2026-06-01', '2026-06-30')['2026-06-10'] ?? null);
    }

    public function test_two_metrics_do_not_share_rows(): void
    {
        $now = new DateTimeImmutable('2026-06-15 00:00:00');

        $this->rollup('articles.created')->write(self::TENANT, Bucket::Day, ['2026-06-10' => 5], $now);
        $this->rollup('articles.deleted')->write(self::TENANT, Bucket::Day, ['2026-06-10' => 2], $now);

        $this->assertSame(5, $this->rollup('articles.created')->read(self::TENANT, Bucket::Day, '2026-06-01', '2026-06-30')['2026-06-10'] ?? null);
        $this->assertSame(2, $this->rollup('articles.deleted')->read(self::TENANT, Bucket::Day, '2026-06-01', '2026-06-30')['2026-06-10'] ?? null);
    }

    public function test_a_read_is_bounded_by_the_range(): void
    {
        $rollup = $this->rollup();
        $now = new DateTimeImmutable('2026-06-15 00:00:00');

        $rollup->write(self::TENANT, Bucket::Day, [
            '2026-05-01' => 1,
            '2026-06-10' => 5,
            '2026-07-01' => 9,
        ], $now);

        $read = $rollup->read(self::TENANT, Bucket::Day, '2026-06-01', '2026-06-30');

        $this->assertSame(['2026-06-10'], array_keys($read));
    }

    public function test_a_sum_totals_the_range(): void
    {
        $rollup = $this->rollup();
        $now = new DateTimeImmutable('2026-06-15 00:00:00');

        $rollup->write(self::TENANT, Bucket::Day, [
            '2026-06-10' => 5,
            '2026-06-11' => 8,
        ], $now);

        $this->assertSame(13, $rollup->sum(self::TENANT, Bucket::Day, '2026-06-01', '2026-06-30'));
    }

    public function test_an_unsupported_bucket_writes_nothing(): void
    {
        $written = $this->rollup()->write(
            self::TENANT,
            Bucket::Hour,
            ['2026-06-10 09:00:00' => 5],
            new DateTimeImmutable('2026-06-15 00:00:00'),
        );

        $this->assertSame(0, $written);
        $this->assertSame(0, DB::table('metric_rollups')->count());
    }

    /**
     * THE LAST COMPLETE BUCKET IS YESTERDAY, NEVER TODAY.
     *
     * Today's count is still moving. Storing it would freeze a partial figure
     * that nothing ever revisits, so the chart would understate that day
     * forever.
     */
    public function test_the_last_complete_bucket_excludes_the_current_one(): void
    {
        $now = new DateTimeImmutable('2026-06-15 14:00:00');

        $this->assertSame('2026-06-14', Rollup::lastCompleteBucket(Bucket::Day, $now));
        $this->assertSame('2026-05', Rollup::lastCompleteBucket(Bucket::Month, $now));
    }
}
