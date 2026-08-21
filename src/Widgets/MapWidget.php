<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

use Closure;

/**
 * Dashboard map card (Leaflet), declared like StatWidget / ChartWidget.
 *
 * Opt-in by putting it in `DashboardPage::charts()` or `Panel::widgets()`.
 * Leaflet loads only when the card mounts, so unused dashboards pay nothing.
 *
 *     MapWidget::make('coverage', 'Coverage')
 *         ->center(-1.286389, 36.817223)
 *         ->zoom(11)
 *         ->markers(fn (): array => [
 *             ['lat' => -1.29, 'lng' => 36.82, 'label' => 'HQ'],
 *         ]);
 */
final class MapWidget
{
    private ChartWidget $chart;

    private float $centerLat = 0.0;

    private float $centerLng = 0.0;

    private int $zoom = 12;

    /** @var Closure(): list<array{lat: float, lng: float, label?: string, popup?: string}>|null */
    private ?Closure $markers = null;

    private function __construct(string $key, string $label)
    {
        $this->chart = ChartWidget::make($key, $label)->type('map')->icon('map');
    }

    public static function make(string $key, string $label): self
    {
        return new self($key, $label);
    }

    public function center(float $lat, float $lng): self
    {
        $this->centerLat = $lat;
        $this->centerLng = $lng;

        return $this;
    }

    public function zoom(int $zoom): self
    {
        $this->zoom = max(1, min(18, $zoom));

        return $this;
    }

    /**
     * @param  Closure(): list<array{lat: float, lng: float, label?: string, popup?: string}>  $markers
     */
    public function markers(Closure $markers): self
    {
        $this->markers = $markers;

        return $this;
    }

    public function description(string $description): self
    {
        $this->chart->description($description);

        return $this;
    }

    public function span(int $span): self
    {
        $this->chart->span($span);

        return $this;
    }

    public function ability(?string $ability): self
    {
        $this->chart->ability($ability);

        return $this;
    }

    /** Chart the dashboard / WidgetSet already know how to host. */
    public function toChartWidget(): ChartWidget
    {
        $lat = $this->centerLat;
        $lng = $this->centerLng;
        $zoom = $this->zoom;
        $markers = $this->markers;

        return $this->chart->data(static function () use ($lat, $lng, $zoom, $markers): array {
            return [
                'markers' => $markers !== null ? $markers() : [],
                'center' => ['lat' => $lat, 'lng' => $lng],
                'zoom' => $zoom,
            ];
        });
    }
}
