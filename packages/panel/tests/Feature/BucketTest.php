<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Widgets\Bucket;
use Alxtexh\Panel\Tests\TestCase;
use DateTimeImmutable;
use InvalidArgumentException;
use RuntimeException;

/**
 * Grouping timestamps into hours, days or months for a chart.
 *
 * TRUNCATING A TIMESTAMP HAS NO PORTABLE SPELLING, so this is one of the few
 * places the package writes raw SQL per driver. That makes it also one of the
 * few places a column name is INTERPOLATED, and therefore the place to check
 * that it is validated as a bare identifier first.
 *
 * "NOT CURRENTLY REACHABLE FROM USER INPUT" IS NOT A SECURITY PROPERTY. The
 * column comes from a developer-authored widget definition today; that is a
 * fact about today's callers and is one refactor away from being false. The
 * guard is asserted here so the refactor fails loudly rather than silently.
 *
 * AN UNKNOWN DRIVER THROWS RATHER THAN GUESSING, and the reasoning in the
 * source is worth repeating: a guessed truncation produces a chart that is
 * WRONG WITHOUT BEING BROKEN - which nobody notices, because a chart with
 * plausible bars looks like a working chart.
 */
final class BucketTest extends TestCase
{
    public function test_each_bucket_has_an_expression_for_every_supported_driver(): void
    {
        foreach (Bucket::cases() as $bucket) {
            foreach (['sqlite', 'mysql', 'mariadb', 'pgsql', 'sqlsrv'] as $driver) {
                $this->assertNotSame(
                    '',
                    $bucket->expression($driver, 'created_at'),
                    "[{$bucket->value}] has no expression for [{$driver}].",
                );
            }
        }
    }

    public function test_an_unknown_driver_throws_rather_than_guessing(): void
    {
        $this->expectException(RuntimeException::class);

        Bucket::Day->expression('some-new-database', 'created_at');
    }

    /**
     * A COLUMN THAT IS NOT A BARE IDENTIFIER IS REFUSED.
     *
     * The value lands inside raw SQL, so this is the guard between a widget
     * definition and an injection - present today, and the assertion is what
     * keeps it present.
     */
    public function test_a_column_that_is_not_an_identifier_is_refused(): void
    {
        foreach (['created_at; drop table users--', 'created_at)', '', 'a b', '1abc'] as $column) {
            try {
                Bucket::Day->expression('sqlite', $column);

                $this->fail("[{$column}] was interpolated into raw SQL.");
            } catch (InvalidArgumentException) {
                $this->addToAssertionCount(1);
            }
        }
    }

    public function test_an_ordinary_column_is_accepted(): void
    {
        $this->assertStringContainsString(
            'created_at',
            Bucket::Day->expression('sqlite', 'created_at'),
        );
    }

    /**
     * THE PHP FORMAT MUST PRODUCE WHAT THE SQL PRODUCES.
     *
     * Gap-filling walks the range in PHP and looks each bucket up in the rows
     * the database returned. If the two spellings disagree, every lookup misses
     * and the chart renders as all zeroes - with the data sitting right there.
     */
    public function test_the_php_format_matches_the_shape_the_sql_emits(): void
    {
        $at = new DateTimeImmutable('2026-06-15 14:37:22');

        $this->assertSame('2026-06-15 14:00:00', $at->format(Bucket::Hour->phpFormat()));
        $this->assertSame('2026-06-15', $at->format(Bucket::Day->phpFormat()));
        $this->assertSame('2026-06', $at->format(Bucket::Month->phpFormat()));
    }

    public function test_flooring_moves_to_the_start_of_the_bucket(): void
    {
        $at = new DateTimeImmutable('2026-06-15 14:37:22');

        $this->assertSame('2026-06-15 14:00:00', Bucket::Hour->floor($at)->format('Y-m-d H:i:s'));
        $this->assertSame('2026-06-15 00:00:00', Bucket::Day->floor($at)->format('Y-m-d H:i:s'));
        $this->assertSame('2026-06-01 00:00:00', Bucket::Month->floor($at)->format('Y-m-d H:i:s'));
    }

    public function test_advancing_crosses_boundaries_correctly(): void
    {
        $endOfHour = new DateTimeImmutable('2026-06-15 23:00:00');
        $this->assertSame('2026-06-16 00:00:00', Bucket::Hour->next($endOfHour)->format('Y-m-d H:i:s'));

        // February into March - the case a fixed `+30 days` step gets wrong.
        $shortMonth = new DateTimeImmutable('2026-02-01 00:00:00');
        $this->assertSame('2026-03', Bucket::Month->next($shortMonth)->format('Y-m'));
    }

    /**
     * ADVANCING FROM A MONTH-END NO LONGER SKIPS A MONTH.
     *
     * PHP's `+1 month` adds to the day-of-month and normalises, so 31 January
     * became 3 March - February gone. A gap-filled chart walking from that date
     * renders a missing column, which reads as missing DATA rather than as a
     * bug in the range walk.
     *
     * IT WAS SAFE ONLY BY ACCIDENT before: every caller arrives through
     * `floor()`, which lands on day 1 where the overflow cannot happen, so the
     * correctness lived in the callers. This test asserted the overflow as
     * known behaviour and said it should be deleted if the method was fixed.
     * It was fixed; the assertion is inverted rather than removed, because the
     * shape of this bug is worth keeping a guard against.
     */
    public function test_advancing_from_an_unfloored_month_end_does_not_skip_a_month(): void
    {
        $endOfMonth = new DateTimeImmutable('2026-01-31 00:00:00');

        $this->assertSame(
            '2026-02',
            Bucket::Month->next($endOfMonth)->format('Y-m'),
            'January the 31st advanced past February.',
        );

        // And the floored path, which every caller actually uses, is unchanged.
        $this->assertSame(
            '2026-02',
            Bucket::Month->next(Bucket::Month->floor($endOfMonth))->format('Y-m'),
        );
    }

    /**
     * EVERY MONTH-END ADVANCES BY EXACTLY ONE MONTH.
     *
     * The 29th, 30th and 31st are the days that overflow, and only in months
     * shorter than the one they came from - so a single example proves less
     * than it appears to. This walks a whole year from each.
     */
    public function test_no_month_end_skips_a_month(): void
    {
        foreach ([29, 30, 31] as $day) {
            for ($month = 1; $month <= 12; $month++) {
                $at = DateTimeImmutable::createFromFormat(
                    'Y-n-j H:i:s',
                    sprintf('2026-%d-%d 00:00:00', $month, $day),
                );

                if ($at === false || (int) $at->format('n') !== $month) {
                    continue; // The date does not exist - February the 30th.
                }

                $expected = $month === 12 ? '2027-01' : sprintf('2026-%02d', $month + 1);

                $this->assertSame(
                    $expected,
                    Bucket::Month->next($at)->format('Y-m'),
                    "The {$day}th of month {$month} did not advance to the next month.",
                );
            }
        }
    }

    /**
     * THE TIME SURVIVES, because discarding it would surprise a caller that did
     * not floor first - which is the class of caller this fix exists for.
     */
    public function test_advancing_a_month_keeps_the_time(): void
    {
        $at = new DateTimeImmutable('2026-01-31 14:37:22');

        $this->assertSame('2026-02-01 14:37:22', Bucket::Month->next($at)->format('Y-m-d H:i:s'));
    }

    public function test_walking_a_year_of_months_visits_each_one_once(): void
    {
        $at = Bucket::Month->floor(new DateTimeImmutable('2026-01-15 00:00:00'));

        $seen = [];

        for ($i = 0; $i < 12; $i++) {
            $seen[] = $at->format('Y-m');
            $at = Bucket::Month->next($at);
        }

        $this->assertSame($seen, array_unique($seen), 'A month was repeated while walking the range.');
        $this->assertCount(12, $seen);
        $this->assertSame('2026-01', $seen[0]);
        $this->assertSame('2026-12', $seen[11]);
    }

    public function test_every_bucket_labels_an_instant(): void
    {
        $at = new DateTimeImmutable('2026-06-15 14:37:22');

        foreach (Bucket::cases() as $bucket) {
            $this->assertNotSame('', $bucket->label($at));
        }
    }
}
