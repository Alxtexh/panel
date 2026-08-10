<?php

declare(strict_types=1);

namespace Tests\Unit;

use Alxtexh\Panel\Support\Contrast;
use PHPUnit\Framework\TestCase;

/**
 * WCAG contrast math - roadmap 7.1. Pure function, checked against known
 * reference ratios rather than against any particular field or form, since
 * nothing about it depends on either.
 */
final class ContrastTest extends TestCase
{
    public function test_black_on_white_is_the_maximum_ratio(): void
    {
        $this->assertEqualsWithDelta(21.0, Contrast::ratio('#000000', '#ffffff'), 0.01);
    }

    public function test_a_colour_against_itself_is_the_minimum_ratio(): void
    {
        $this->assertEqualsWithDelta(1.0, Contrast::ratio('#3366ff', '#3366ff'), 0.01);
    }

    public function test_the_ratio_is_symmetric(): void
    {
        $this->assertSame(
            Contrast::ratio('#1e90ff', '#ffffff'),
            Contrast::ratio('#ffffff', '#1e90ff'),
        );
    }

    public function test_three_digit_hex_is_accepted(): void
    {
        $this->assertEqualsWithDelta(
            Contrast::ratio('#000000', '#ffffff'),
            Contrast::ratio('#000', '#fff'),
            0.01,
        );
    }

    /** A pale accent that reads fine as a small swatch, and fails on the page it is meant for. */
    public function test_a_pale_colour_fails_normal_text_contrast_on_white(): void
    {
        $this->assertFalse(Contrast::meets('#dbe9f8', '#ffffff'));
    }

    public function test_a_dark_colour_passes_normal_text_contrast_on_white(): void
    {
        $this->assertTrue(Contrast::meets('#0f766e', '#ffffff'));
    }

    public function test_the_default_threshold_is_the_wcag_aa_normal_text_floor(): void
    {
        $this->assertSame(4.5, Contrast::AA_NORMAL);
    }
}
