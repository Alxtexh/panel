<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\LogReader;
use Closure;

/**
 * Dashboard log-tail card. Same allow-list rules as `LogsPage` / `Panel::logTail()`.
 *
 *     LogTailWidget::make('errors', 'Errors')
 *         ->file('laravel.log')
 *         ->lines(40)
 *         ->poll('5s');
 */
final class LogTailWidget
{
    private ChartWidget $chart;

    private ?string $file = null;

    private int $lines = 40;

    private string $needle = '';

    /** @var Closure(): ?string|null */
    private ?Closure $fileResolver = null;

    private function __construct(string $key, string $label)
    {
        $this->chart = ChartWidget::make($key, $label)
            ->type('logtail')
            ->icon('file-text')
            ->ability('view_operations')
            ->poll('5s');
    }

    public static function make(string $key, string $label): self
    {
        return new self($key, $label);
    }

    public function file(?string $name): self
    {
        $this->file = $name;

        return $this;
    }

    /** @param  Closure(): ?string  $file */
    public function resolveFile(Closure $file): self
    {
        $this->fileResolver = $file;

        return $this;
    }

    public function lines(int $count): self
    {
        $this->lines = max(10, min(200, $count));

        return $this;
    }

    public function needle(string $needle): self
    {
        $this->needle = $needle;

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

    public function poll(int|string|null $interval = 5): self
    {
        $this->chart->poll($interval);

        return $this;
    }

    public function live(?string $channel): self
    {
        $this->chart->live($channel);

        return $this;
    }

    public function toChartWidget(): ChartWidget
    {
        $file = $this->file;
        $fileResolver = $this->fileResolver;
        $lines = $this->lines;
        $needle = $this->needle;

        return $this->chart->data(static function () use ($file, $fileResolver, $lines, $needle): array {
            $panel = app(PanelManager::class)->currentPanel();
            $reader = new LogReader(allowlist: $panel?->getLogTailAllowlist());

            $name = $fileResolver !== null ? $fileResolver() : $file;

            if ($name === null || $name === '') {
                $name = $panel?->getLogTailDefault();
            }

            $tail = $reader->tail($name, lines: $lines, needle: $needle);

            return [
                'file' => $tail['name'],
                'lines' => $tail['lines'],
                'truncated' => $tail['truncated'],
            ];
        });
    }
}
