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
}
