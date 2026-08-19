<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

/**
 * "66,667 active, ▲ 4% vs last week" - the comparison behind the arrow.
 *
 * The whole value of this class is in the ZERO CASES, which is where a naive
 * `($current - $previous) / $previous` produces the three worst outputs a
 * dashboard can show:
 *
 *   - previous 0, current 500  → division by zero, or `INF%` rendered as a
 *     percentage. There is no percentage increase from nothing; the honest
 *     answer is "new", not a number.
 *   - previous 0, current 0    → 0/0. Nothing happened either week; that is
 *     flat, not an error.
 *   - previous 100, current 0  → -100%, which IS meaningful and must survive.
 *
 * A percentage of `null` is therefore a first-class result and the UI is
 * expected to render the direction without a figure. Manufacturing a number to
 * avoid a null is how a dashboard starts lying quietly.
 */
final class Trend
{
    private function __construct(
        public readonly int|float $current,
        public readonly int|float $previous,
        public readonly ?float $percentage,
        public readonly string $direction,
    ) {}

    public static function between(int|float $current, int|float $previous): self
    {
        if ($previous == 0) {
            return new self(
                $current,
                $previous,
                null,
                $current == 0 ? 'flat' : 'new',
            );
        }

        $change = (($current - $previous) / abs($previous)) * 100;

        return new self(
            $current,
            $previous,
            round($change, 1),
            // A sub-0.05% move rounds to 0.0 and would render as "▲ 0%", which
            // reads as a trend where there is none.
            abs($change) < 0.05 ? 'flat' : ($change > 0 ? 'up' : 'down'),
        );
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            'current' => $this->current,
            'previous' => $this->previous,
            'percentage' => $this->percentage,
            'direction' => $this->direction,
        ];
    }
}
