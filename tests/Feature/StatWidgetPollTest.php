<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\StatWidget;
use InvalidArgumentException;

final class StatWidgetPollTest extends TestCase
{
    public function test_poll_is_absent_by_default(): void
    {
        $widget = StatWidget::make('online', 'Online')->value(static fn (): int => 1);

        $this->assertNull($widget->toArray()['poll']);
    }

    public function test_poll_serialises_milliseconds(): void
    {
        $widget = StatWidget::make('online', 'Online')->poll('10s');

        $this->assertSame(10_000, $widget->toArray()['poll']);
    }

    public function test_poll_accepts_integer_seconds(): void
    {
        $widget = StatWidget::make('online', 'Online')->poll(15);

        $this->assertSame(15_000, $widget->toArray()['poll']);
    }

    public function test_poll_null_disables(): void
    {
        $widget = StatWidget::make('online', 'Online')->poll('10s')->poll(null);

        $this->assertNull($widget->toArray()['poll']);
    }

    public function test_poll_rejects_a_bad_interval(): void
    {
        $this->expectException(InvalidArgumentException::class);

        StatWidget::make('online', 'Online')->poll('often');
    }

    public function test_live_is_absent_by_default(): void
    {
        $widget = StatWidget::make('online', 'Online')->value(static fn (): int => 1);

        $this->assertNull($widget->toArray()['live']);
    }

    public function test_live_serialises_the_channel(): void
    {
        $widget = StatWidget::make('online', 'Online')->live('dashboard.stats');

        $this->assertSame('dashboard.stats', $widget->toArray()['live']);
    }

    public function test_live_and_poll_can_both_be_declared(): void
    {
        $widget = StatWidget::make('online', 'Online')
            ->live('dashboard.stats')
            ->poll('10s');

        $this->assertSame('dashboard.stats', $widget->toArray()['live']);
        $this->assertSame(10_000, $widget->toArray()['poll']);
    }

    public function test_live_null_clears_the_channel(): void
    {
        $widget = StatWidget::make('online', 'Online')->live('dashboard.stats')->live(null);

        $this->assertNull($widget->toArray()['live']);
    }

    public function test_live_blank_is_treated_as_off(): void
    {
        $widget = StatWidget::make('online', 'Online')->live('  ');

        $this->assertNull($widget->toArray()['live']);
    }
}
