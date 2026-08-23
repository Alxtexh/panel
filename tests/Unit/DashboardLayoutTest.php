<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Support\DashboardLayout;
use Alxtexh\Panel\Tests\TestCase;

final class DashboardLayoutTest extends TestCase
{
    public function test_empty_payload_yields_empty_widgets(): void
    {
        $this->assertSame(['widgets' => []], DashboardLayout::normalize(null));
        $this->assertSame(['widgets' => []], DashboardLayout::normalize([]));
    }

    public function test_normalizes_widgets_and_clamps_span(): void
    {
        $out = DashboardLayout::normalize([
            'widgets' => [
                ['id' => 'stat:users', 'span' => 9, 'hidden' => true],
                ['kind' => 'chart', 'key' => 'sessions', 'span' => 0],
                ['type' => 'table', 'key' => 'recent', 'hidden' => '1'],
                ['id' => 'evil:x'],
                'noise',
            ],
        ]);

        $this->assertSame([
            [
                'id' => 'stat:users',
                'span' => 2,
                'hidden' => true,
            ],
            [
                'id' => 'chart:sessions',
                'span' => 1,
                'hidden' => false,
            ],
            [
                'id' => 'table:recent',
                'span' => 1,
                'hidden' => true,
            ],
        ], $out['widgets']);
    }

    public function test_legacy_chart_order_migrates(): void
    {
        $out = DashboardLayout::normalize([
            'chartOrder' => ['revenue', 'signups', 'bad key!', 'revenue'],
        ]);

        $this->assertSame([
            ['id' => 'chart:revenue', 'span' => 1, 'hidden' => false],
            ['id' => 'chart:signups', 'span' => 1, 'hidden' => false],
        ], $out['widgets']);
    }

    public function test_widgets_win_over_duplicate_chart_order(): void
    {
        $out = DashboardLayout::normalize([
            'widgets' => [
                ['id' => 'chart:sessions', 'span' => 2, 'hidden' => true],
            ],
            'chartOrder' => ['sessions', 'revenue'],
        ]);

        $this->assertSame([
            ['id' => 'chart:sessions', 'span' => 2, 'hidden' => true],
            ['id' => 'chart:revenue', 'span' => 1, 'hidden' => false],
        ], $out['widgets']);
    }
}
