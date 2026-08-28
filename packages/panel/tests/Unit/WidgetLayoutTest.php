<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\BarcodeWidget;
use Alxtexh\Panel\Widgets\CalendarWidget;
use Alxtexh\Panel\Widgets\ChartWidget;
use Alxtexh\Panel\Widgets\LogTailWidget;
use Alxtexh\Panel\Widgets\MapWidget;
use Alxtexh\Panel\Widgets\StatWidget;
use Alxtexh\Panel\Widgets\TableWidget;
use Alxtexh\Panel\Widgets\WidgetSet;

/**
 * `HasLayout`: a bare-int span (unchanged default behaviour), a responsive
 * per-breakpoint span, and `sort()` reordering `WidgetSet::props()`'s output
 * independently of declaration order.
 */
final class WidgetLayoutTest extends TestCase
{
    public function test_span_defaults_to_one(): void
    {
        $this->assertSame(1, StatWidget::make('a', 'A')->toArray()['span']);
    }

    public function test_a_bare_int_span_still_works(): void
    {
        $this->assertSame(2, StatWidget::make('a', 'A')->span(2)->toArray()['span']);
    }

    public function test_a_responsive_span_serializes_as_declared(): void
    {
        $span = ['default' => 1, 'sm' => 2, 'lg' => 3];

        $this->assertSame($span, StatWidget::make('a', 'A')->span($span)->toArray()['span']);
        $this->assertSame($span, ChartWidget::make('b', 'B')->span($span)->toArray()['span']);
        $this->assertSame($span, TableWidget::make('c')->span($span)->toArray()['span']);
    }

    public function test_sort_defaults_to_zero_and_serializes(): void
    {
        $this->assertSame(0, StatWidget::make('a', 'A')->toArray()['sort']);
        $this->assertSame(5, StatWidget::make('a', 'A')->sort(5)->toArray()['sort']);
    }

    /**
     * MapWidget/CalendarWidget/BarcodeWidget/LogTailWidget wrap a ChartWidget
     * internally and delegate span()/sort() to it - toChartWidget() must
     * return that same, now-configured instance.
     */
    public function test_the_chart_wrapping_widgets_delegate_span_and_sort(): void
    {
        $map = MapWidget::make('m', 'Map')->span(2)->sort(3)->toChartWidget()->toArray();
        $this->assertSame(2, $map['span']);
        $this->assertSame(3, $map['sort']);

        $calendar = CalendarWidget::make('c', 'Calendar')->span(2)->sort(4)->toChartWidget()->toArray();
        $this->assertSame(2, $calendar['span']);
        $this->assertSame(4, $calendar['sort']);

        $barcode = BarcodeWidget::make('b', 'Barcode')->span(2)->sort(5)->toChartWidget()->toArray();
        $this->assertSame(2, $barcode['span']);
        $this->assertSame(5, $barcode['sort']);

        $log = LogTailWidget::make('l', 'Log')->span(2)->sort(6)->toChartWidget()->toArray();
        $this->assertSame(2, $log['span']);
        $this->assertSame(6, $log['sort']);
    }

    public function test_widget_set_orders_by_declared_sort_not_declaration_order(): void
    {
        $props = WidgetSet::props([
            StatWidget::make('third', 'Third')->sort(30),
            StatWidget::make('first', 'First')->sort(10),
            StatWidget::make('second', 'Second')->sort(20),
        ], null);

        $keys = array_column($props['headerWidgets'], 'key');

        $this->assertSame(['first', 'second', 'third'], $keys);
    }

    /** Two widgets that never called sort() (both default to 0) keep declaration order. */
    public function test_widget_set_sort_is_stable_for_ties(): void
    {
        $props = WidgetSet::props([
            StatWidget::make('a', 'A'),
            StatWidget::make('b', 'B'),
            StatWidget::make('c', 'C')->sort(-1),
        ], null);

        $keys = array_column($props['headerWidgets'], 'key');

        $this->assertSame(['c', 'a', 'b'], $keys);
    }
}
