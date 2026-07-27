<?php

declare(strict_types=1);

namespace PanelKit\Panel\Widgets;

use Closure;
use DateTimeImmutable;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;
use Throwable;

/**
 * A chart on the dashboard.
 *
 * Deliberately the same shape as StatWidget, and for the same reasons:
 *
 * 1. THE DATA IS A CLOSURE, resolved only when its deferred prop is requested,
 *    never at definition time (antipatterns §3.3).
 *
 * 2. A FAILURE IS CONTAINED. One chart whose query throws renders as one broken
 *    card; the other five still paint. `resolve()` does not propagate.
 *
 * 3. THE CLOSURE RECEIVES THE PERIOD. Charts are not point-in-time, so the
 *    window has to reach the query — a widget that resolves its own period
 *    internally cannot be re-asked for a different one, which is what the
 *    period selector does on every click.
 *
 * The TYPE is semantic (`line`, `pie`), never a class name or a colour. PHP
 * emitting presentation is antipatterns §6.1; the renderer owns how a line
 * looks, and a tenant theme therefore applies without touching this file.
 */
final class ChartWidget
{
    private const TYPES = ['line', 'area', 'bar', 'pie', 'doughnut'];

    private string $type = 'line';

    private ?Closure $data = null;

    private ?Closure $trend = null;

    private ?string $description = null;

    private bool $periodSelector = false;

    private int $span = 1;

    private ?Closure $format = null;

    private function __construct(public readonly string $key, private readonly string $label) {}

    public static function make(string $key, string $label): self
    {
        return new self($key, $label);
    }

    public function type(string $type): self
    {
        if (! in_array($type, self::TYPES, true)) {
            throw new InvalidArgumentException(
                "[{$type}] is not a chart type. Available: " . implode(', ', self::TYPES) . '.'
            );
        }

        $this->type = $type;

        return $this;
    }

    /**
     * The series.
     *
     * @param  Closure(Period): (array{points: list<array{label: string, value: int|float}>}|list<array{label: string, value: int|float}>)  $data
     */
    public function data(Closure $data): self
    {
        $this->data = $data;

        return $this;
    }

    /**
     * The comparison against the preceding window.
     *
     * @param  Closure(Period): Trend  $trend
     */
    public function trend(Closure $trend): self
    {
        $this->trend = $trend;

        return $this;
    }

    public function description(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /** Show the today/7d/30d selector on this card. */
    public function withPeriods(bool $enabled = true): self
    {
        $this->periodSelector = $enabled;

        return $this;
    }

    public function span(int $span): self
    {
        $this->span = $span;

        return $this;
    }

    /** @return array<string, mixed> The structure. Never runs a query. */
    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->label,
            'type' => $this->type,
            'description' => $this->description,
            'span' => $this->span,
            'periods' => $this->periodSelector ? Period::options() : null,
        ];
    }

    /**
     * Resolve the series for `$period`. Never throws.
     *
     * @return array{
     *     points: list<array{label: string, value: int|float}>,
     *     total: int|float|null,
     *     trend: array<string, mixed>|null,
     *     error: bool
     * }
     */
    public function resolve(Period $period, string $tenantKey, ?DateTimeImmutable $now = null): array
    {
        $empty = ['points' => [], 'total' => null, 'trend' => null, 'error' => true];

        if ($this->data === null) {
            return $empty;
        }

        try {
            $resolved = ($this->data)($period, $now);

            // A TimeSeries hands back a full envelope; a categorical closure
            // hands back a bare list. Both are accepted so a pie chart does not
            // have to pretend to be a series.
            $points = $resolved['points'] ?? $resolved;
            $total = $resolved['total'] ?? array_sum(array_column($points, 'value'));

            return [
                'points' => array_values($points),
                'total' => $total,
                'trend' => $this->trend !== null ? ($this->trend)($period, $now)->toArray() : null,
                'error' => false,
            ];
        } catch (Throwable $e) {
            Log::error('Panel chart failed to resolve.', [
                'component' => 'ChartWidget',
                'operation' => 'resolve',
                'widget' => $this->key,
                'period' => $period->value,
                'tenant' => $tenantKey,
                'exception' => $e->getMessage(),
            ]);

            return $empty;
        }
    }
}
