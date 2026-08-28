<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

use Closure;

/**
 * Month schedule card for dashboards.
 *
 *     CalendarWidget::make('bookings', 'Bookings')
 *         ->events(fn (): array => [
 *             ['date' => '2026-08-21', 'label' => 'Install', 'tone' => 'info'],
 *         ]);
 */
final class CalendarWidget
{
    private ChartWidget $chart;

    /** @var Closure(): list<array{date: string, label: string, tone?: string}>|null */
    private ?Closure $events = null;

    private function __construct(string $key, string $label)
    {
        $this->chart = ChartWidget::make($key, $label)->type('calendar')->icon('calendar');
    }

    public static function make(string $key, string $label): self
    {
        return new self($key, $label);
    }

    /**
     * @param  Closure(): list<array{date: string, label: string, tone?: string}>  $events
     */
    public function events(Closure $events): self
    {
        $this->events = $events;

        return $this;
    }

    public function description(string $description): self
    {
        $this->chart->description($description);

        return $this;
    }

    /** @param int|array<string, int> $span */
    public function span(int|array $span): self
    {
        $this->chart->span($span);

        return $this;
    }

    public function sort(int $sort): self
    {
        $this->chart->sort($sort);

        return $this;
    }

    public function ability(?string $ability): self
    {
        $this->chart->ability($ability);

        return $this;
    }

    public function toChartWidget(): ChartWidget
    {
        $events = $this->events;

        return $this->chart->data(static function () use ($events): array {
            return [
                'events' => $events !== null ? $events() : [],
            ];
        });
    }
}
