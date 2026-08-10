<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Widgets\Trend;
use Alxtexh\Panel\Tests\TestCase;

/**
 * The little arrow next to a number, which is where a dashboard lies first.
 *
 * EVERY CASE HERE IS A DIVISION THAT CANNOT BE DONE, or a rounding that would
 * misrepresent one that can. A trend is `(current - previous) / previous`, and
 * the whole difficulty is that `previous` is frequently zero - a new
 * organisation, a new plan, the first week of anything - which is precisely
 * when somebody is watching the dashboard most closely.
 *
 * A PERCENTAGE OF NULL IS A FIRST-CLASS RESULT. Growth from nothing has no
 * percentage; the honest answer is "new", not "+100%" and certainly not
 * "+∞". Manufacturing a number to avoid a null is how a dashboard starts
 * lying quietly, and nobody audits an arrow.
 */
final class TrendTest extends TestCase
{
    public function test_an_increase_reports_its_percentage(): void
    {
        $trend = Trend::between(150, 100);

        $this->assertSame('up', $trend->direction);
        $this->assertSame(50.0, $trend->percentage);
    }

    public function test_a_decrease_reports_a_negative_percentage(): void
    {
        $trend = Trend::between(50, 100);

        $this->assertSame('down', $trend->direction);
        $this->assertSame(-50.0, $trend->percentage);
    }

    /**
     * GROWTH FROM ZERO IS `new`, WITH NO PERCENTAGE.
     *
     * The division is impossible, so any figure here is invented. "New" is
     * what actually happened and is what the card should say.
     */
    public function test_growth_from_zero_is_new_rather_than_an_invented_percentage(): void
    {
        $trend = Trend::between(42, 0);

        $this->assertSame('new', $trend->direction);
        $this->assertNull(
            $trend->percentage,
            'A percentage was manufactured from a division by zero.',
        );
    }

    public function test_zero_against_zero_is_flat_rather_than_new(): void
    {
        $trend = Trend::between(0, 0);

        $this->assertSame('flat', $trend->direction);
        $this->assertNull($trend->percentage);
    }

    /**
     * A MOVE TOO SMALL TO ROUND IS FLAT, NOT UP.
     *
     * A sub-0.05% change rounds to `0.0` and would render as "▲ 0%" - an arrow
     * claiming a direction beside a figure saying there was none. On a large
     * base this is the common case, not an edge one: two rows out of a hundred
     * thousand is a real change and not a trend.
     */
    public function test_a_change_too_small_to_round_reads_as_flat(): void
    {
        $trend = Trend::between(100_001, 100_000);

        $this->assertSame(
            'flat',
            $trend->direction,
            'A change that rounds to 0.0% still claimed a direction.',
        );
        $this->assertSame(0.0, $trend->percentage);
    }

    /**
     * A FALL AGAINST A NEGATIVE BASE STILL READS AS DOWN.
     *
     * `abs($previous)` in the denominator is what keeps this right. Dividing by
     * a signed previous flips the sign of the change, so a balance going from
     * -100 to -150 - worse - would report as an increase.
     */
    public function test_a_negative_base_does_not_flip_the_direction(): void
    {
        $trend = Trend::between(-150, -100);

        $this->assertSame('down', $trend->direction);
        $this->assertSame(-50.0, $trend->percentage);
    }

    public function test_the_shape_it_sends_to_the_client(): void
    {
        $array = Trend::between(150, 100)->toArray();

        $this->assertSame('up', $array['direction']);
        $this->assertSame(50.0, $array['percentage']);
    }

    public function test_a_null_percentage_survives_serialisation(): void
    {
        $array = Trend::between(5, 0)->toArray();

        $this->assertSame('new', $array['direction']);
        $this->assertArrayHasKey('percentage', $array);
        $this->assertNull(
            $array['percentage'],
            'A null percentage became something else on the way to the client.',
        );
    }
}
