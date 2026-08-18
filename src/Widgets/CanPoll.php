<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

use InvalidArgumentException;

/**
 * Filament-shaped poll interval on a dashboard widget.
 *
 *     StatWidget::make('online', 'Online')->poll('10s');
 *     TableWidget::make('recent')->resource(OrderResource::class)->poll('10s');
 *     ChartWidget::make('load', 'Load')->poll(15);
 *
 * The Vue host reloads only that widget's deferred prop. Polling pauses while
 * the tab is hidden.
 */
trait CanPoll
{
    private ?int $pollMs = null;

    /**
     * Seconds as an int, or a string like `10s`. Null disables polling.
     */
    public function poll(int|string|null $interval = 15): static
    {
        $this->pollMs = self::pollMilliseconds($interval);

        return $this;
    }

    public function pollInterval(): ?int
    {
        return $this->pollMs;
    }

    private static function pollMilliseconds(int|string|null $interval): ?int
    {
        if ($interval === null || $interval === '') {
            return null;
        }

        if (is_int($interval)) {
            if ($interval < 1) {
                throw new InvalidArgumentException('A poll interval must be at least one second.');
            }

            return $interval * 1000;
        }

        if (preg_match('/^(\d+)\s*s$/i', trim($interval), $match) === 1) {
            $seconds = (int) $match[1];

            if ($seconds < 1) {
                throw new InvalidArgumentException('A poll interval must be at least one second.');
            }

            return $seconds * 1000;
        }

        throw new InvalidArgumentException(
            "[{$interval}] is not a poll interval. Use seconds or a string like '15s'."
        );
    }
}
