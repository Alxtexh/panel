<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\ChartWidget;

final class ChartWidgetLiveTest extends TestCase
{
    public function test_poll_and_live_are_absent_by_default(): void
    {
        $widget = ChartWidget::make('load', 'Load');

        $this->assertNull($widget->toArray()['poll']);
        $this->assertNull($widget->toArray()['live']);
    }

    public function test_poll_serialises_milliseconds(): void
    {
        $widget = ChartWidget::make('load', 'Load')->poll(15);

        $this->assertSame(15_000, $widget->toArray()['poll']);
    }

    public function test_live_serialises_the_channel_alongside_poll(): void
    {
        $widget = ChartWidget::make('load', 'Load')
            ->live('dashboard.charts')
            ->poll('10s');

        $this->assertSame('dashboard.charts', $widget->toArray()['live']);
        $this->assertSame(10_000, $widget->toArray()['poll']);
    }
}
