<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

use InvalidArgumentException;

/**
 * How a dashboard widget stays fresh.
 *
 * Priority, and why:
 *
 *   1. Reverb / Echo (`->live('dashboard.stats')`) when `window.Echo` exists.
 *      Push, no periodic HTTP, scales to many open dashboards. The kit does
 *      not start Reverb and does not crash if Echo is undefined.
 *
 *   2. HTTP poll (`->poll('10s')`) when Echo is absent. Works everywhere. Cost
 *      is N widgets times the interval in requests. Pauses while the tab is
 *      hidden.
 *
 *   Never both for the same widget: if Echo is present and a live channel is
 *   set, the Vue host skips the interval. Set both on the PHP side so a stock
 *   install without Reverb still refreshes.
 *
 * Redis is not a UI transport. When the host already runs it, use it as
 * Laravel's CACHE_STORE / QUEUE_CONNECTION / BROADCAST_CONNECTION so Reverb
 * broadcasts go through Redis the way Laravel documents. The kit does not
 * require Redis.
 *
 *     StatWidget::make('online', 'Online')
 *         ->live('dashboard.stats')
 *         ->poll('10s');
 *     TableWidget::make('recent')->resource(OrderResource::class)->poll('10s');
 *     ChartWidget::make('load', 'Load')->poll(15);
 *
 * The Vue host reloads only that widget's deferred prop (Inertia partial JSON,
 * not a full visit). There is no Livewire.
 */
trait CanPoll
{
    private ?int $pollMs = null;

    private ?string $liveChannel = null;

    /**
     * Seconds as an int, or a string like `10s`. Null disables polling.
     *
     * Fallback when Echo is absent. Ignored for this widget while Echo is
     * subscribed to `live()`.
     */
    public function poll(int|string|null $interval = 15): static
    {
        $this->pollMs = self::pollMilliseconds($interval);

        return $this;
    }

    /**
     * Echo / Reverb channel. Prefer this over poll when `window.Echo` exists.
     *
     * The host broadcasts; the kit only subscribes. Default event name on the
     * client is `.WidgetUpdated` (`broadcastAs()`). Null clears the channel.
     */
    public function live(?string $channel): static
    {
        $trimmed = $channel === null ? '' : trim($channel);
        $this->liveChannel = $trimmed === '' ? null : $trimmed;

        return $this;
    }

    public function pollInterval(): ?int
    {
        return $this->pollMs;
    }

    public function liveChannel(): ?string
    {
        return $this->liveChannel;
    }

    /**
     * @return array{poll: int|null, live: string|null}
     */
    protected function refreshToArray(): array
    {
        return [
            'poll' => $this->pollInterval(),
            'live' => $this->liveChannel(),
        ];
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
