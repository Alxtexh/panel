<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Widgets\Period;
use Alxtexh\Panel\Tests\TestCase;
use DateTimeImmutable;

/**
 * The date range behind every figure on a dashboard, and its comparison.
 *
 * A PERIOD ARRIVES AS A QUERY STRING, so the first property is that an
 * untrusted value cannot become part of a date expression. It falls back
 * rather than throwing - a stale bookmark or a hand-edited URL is not worth a
 * 500 - and falling back to an enum case is also what keeps the value out of
 * any interpolated SQL.
 *
 * THE COMPARISON WINDOW IS EQUAL IN LENGTH, NOT IN CALENDAR UNIT, which is the
 * decision worth pinning. Comparing "last 30 days" against "last month"
 * compares 30 days against 28, 30 or 31 - so February manufactures a 7% drop
 * out of nothing, every year, and the dashboard reports it as a trend.
 *
 * `$now` IS INJECTED THROUGHOUT. A window computed from the wall clock cannot
 * be asserted except approximately, and approximate assertions about dates are
 * how off-by-one-day bugs survive.
 */
final class PeriodTest extends TestCase
{
    private function now(): DateTimeImmutable
    {
        // A fixed instant, mid-month and mid-year, so no assertion below is
        // accidentally sitting on a boundary that would hide an off-by-one.
        return new DateTimeImmutable('2026-06-15 12:00:00');
    }

    public function test_an_unknown_period_falls_back_rather_than_throwing(): void
    {
        $this->assertSame(Period::default(), Period::fromRequest('last-tuesday'));
        $this->assertSame(Period::default(), Period::fromRequest(null));
        $this->assertSame(Period::default(), Period::fromRequest(''));
    }

    /**
     * INCLUDING VALUES SHAPED LIKE AN ATTACK. The point is not that this one
     * string is dangerous - it is that NOTHING outside the enum can ever reach
     * a date expression, whatever it looks like.
     */
    public function test_a_hostile_period_value_resolves_to_the_default(): void
    {
        $this->assertSame(
            Period::default(),
            Period::fromRequest("30' OR 1=1--"),
        );
    }

    public function test_a_declared_period_is_honoured(): void
    {
        $this->assertSame(Period::Days7, Period::fromRequest('7d'));
    }

    /**
     * THE PREVIOUS WINDOW IS THE SAME LENGTH AND ENDS WHERE THIS ONE STARTS.
     *
     * Contiguous, so no day is counted twice or skipped between the two - a
     * gap or an overlap moves the comparison figure without moving the data.
     */
    public function test_the_previous_window_is_equal_in_length_and_contiguous(): void
    {
        $now = $this->now();

        foreach (Period::cases() as $period) {
            $start = $period->start($now);
            $end = $period->end($now);

            [$previousStart, $previousEnd] = $period->previous($now);

            $this->assertEquals(
                $start,
                $previousEnd,
                "[{$period->value}] left a gap or an overlap between the two windows.",
            );

            $this->assertSame(
                $end->getTimestamp() - $start->getTimestamp(),
                $previousEnd->getTimestamp() - $previousStart->getTimestamp(),
                "[{$period->value}] compared windows of different lengths.",
            );
        }
    }

    /**
     * AND IT IS LENGTH, NOT CALENDAR, EVEN ACROSS A SHORT MONTH.
     *
     * Anchored in March so the previous window reaches back into February -
     * the case where a calendar-unit comparison invents a trend out of the
     * month being shorter.
     */
    public function test_a_short_month_does_not_change_the_comparison_length(): void
    {
        $now = new DateTimeImmutable('2026-03-15 12:00:00');

        $period = Period::Days30;

        [$previousStart, $previousEnd] = $period->previous($now);

        $this->assertSame(
            $period->end($now)->getTimestamp() - $period->start($now)->getTimestamp(),
            $previousEnd->getTimestamp() - $previousStart->getTimestamp(),
            'February shortened the comparison window and would fabricate a trend.',
        );
    }

    /**
     * EVERY WINDOW CONTAINS NOW: `start <= now < end`.
     *
     * Asserted as containment rather than "ends no later than now", which is
     * what I wrote first and was wrong about. A month-bucketed period ends at
     * the END of the current month, so its `end` is legitimately in the future
     * - the current bucket is partial and still being filled. What must never
     * happen is a window that has not started yet, or one that already closed,
     * because either reports a figure computed over no data at all.
     */
    public function test_every_window_contains_the_moment_it_was_built_for(): void
    {
        $now = $this->now();

        foreach (Period::cases() as $period) {
            $start = $period->start($now)->getTimestamp();
            $end = $period->end($now)->getTimestamp();

            $this->assertLessThanOrEqual(
                $now->getTimestamp(),
                $start,
                "[{$period->value}] starts in the future.",
            );

            $this->assertGreaterThan(
                $now->getTimestamp(),
                $end,
                "[{$period->value}] had already closed, so it covers no current data.",
            );

            $this->assertLessThan(
                $end,
                $start,
                "[{$period->value}] produced an empty or inverted window.",
            );
        }
    }

    public function test_every_period_offers_a_label_and_a_comparison_label(): void
    {
        foreach (Period::cases() as $period) {
            $this->assertNotSame('', $period->label());
            $this->assertNotSame('', $period->comparisonLabel());
        }
    }

    /**
     * THE OPTIONS THE CLIENT DRAWS ARE THE VALUES THE SERVER ACCEPTS.
     *
     * Two lists that drift produce a selector offering a period the server
     * silently replaces with the default - the chart changes, the control does
     * not, and it reads as the click being ignored.
     */
    public function test_the_offered_options_are_all_resolvable(): void
    {
        foreach (Period::options() as $option) {
            $value = $option['value'] ?? $option;

            $this->assertSame(
                $value,
                Period::fromRequest((string) $value)->value,
                "The selector offers [{$value}], which the server does not accept.",
            );
        }
    }
}
