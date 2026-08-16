<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\Middleware\SharePanelProps;
use Alxtexh\Panel\Pages\DashboardPage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\DashboardPacking;
use Inertia\Inertia;
use RuntimeException;

/**
 * Dashboard packing is a kit option: classic (default) or blocks (dashboard-01).
 *
 * Classic is the current StatStrip plus independent column tracks. Blocks is
 * section StatCards, one full-width area/line hero, remaining widgets below.
 * Invalid names throw at registration rather than rendering a silent default.
 */
final class DashboardLayoutTest extends TestCase
{
    public function test_dashboard_layout_defaults_to_classic(): void
    {
        $panel = Panel::make('layout-default')
            ->path('layout-default')
            ->guard('web')
            ->middleware(['web']);

        $this->assertSame('classic', $panel->getDashboardLayout());
    }

    public function test_each_public_dashboard_layout_is_accepted(): void
    {
        foreach (Panel::DASHBOARD_LAYOUTS as $id) {
            $panel = Panel::make('dash-'.$id)
                ->path('dash-'.$id)
                ->guard('web')
                ->middleware(['web'])
                ->dashboardLayout($id);

            $this->assertSame($id, $panel->getDashboardLayout());
        }
    }

    public function test_an_unknown_dashboard_layout_is_refused(): void
    {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Unknown dashboard layout [masonry].');

        Panel::make('baddash')->dashboardLayout('masonry');
    }

    public function test_dashboard_layout_is_shared_with_the_client(): void
    {
        app(PanelManager::class)->registerPanel(
            Panel::make('layout-blocks')
                ->path('layout-blocks')
                ->guard('web')
                ->middleware(['web'])
                ->dashboardLayout('blocks'),
        );

        app(PanelManager::class)->usePanel('layout-blocks');

        (new SharePanelProps)->handle(request(), static fn () => response(''));

        $shared = array_map(
            static fn (mixed $value): mixed => is_callable($value) ? $value() : $value,
            Inertia::getShared(),
        );

        $this->assertSame('blocks', $shared['panel']['dashboardLayout']);
    }

    public function test_a_page_override_wins_over_the_panel_default(): void
    {
        app(PanelManager::class)->usePanel('admin');

        $this->assertSame('classic', app(PanelManager::class)->currentPanel()?->getDashboardLayout());
        $this->assertSame('blocks', BlocksDashboardFixture::resolvedDashboardLayout());
        $this->assertSame('classic', ClassicDashboardFixture::resolvedDashboardLayout());
    }

    public function test_an_inheriting_page_uses_the_panel_layout(): void
    {
        app(PanelManager::class)->registerPanel(
            Panel::make('dash-inherit')
                ->path('dash-inherit')
                ->guard('web')
                ->middleware(['web'])
                ->dashboardLayout('blocks'),
        );

        app(PanelManager::class)->usePanel('dash-inherit');

        $this->assertSame('blocks', InheritingDashboardFixture::resolvedDashboardLayout());
    }

    public function test_blocks_packing_promotes_the_first_area_or_line_chart(): void
    {
        $packed = DashboardPacking::pack([
            ['key' => 'status', 'type' => 'doughnut'],
            ['key' => 'revenue', 'type' => 'area'],
            ['key' => 'lines', 'type' => 'items'],
            ['key' => 'featured', 'type' => 'catalog'],
        ]);

        $this->assertSame('revenue', $packed['hero']);
        $this->assertSame(['status', 'lines', 'featured'], $packed['rest']);
    }

    public function test_a_full_span_pie_does_not_become_the_hero(): void
    {
        $packed = DashboardPacking::pack([
            ['key' => 'mix', 'type' => 'pie', 'span' => 2],
            ['key' => 'trend', 'type' => 'line'],
        ]);

        $this->assertSame('trend', $packed['hero']);
        $this->assertSame(['mix'], $packed['rest']);
    }

    public function test_tables_and_remaining_widgets_stay_below_when_nothing_qualifies(): void
    {
        $packed = DashboardPacking::pack([
            ['key' => 'queue', 'type' => 'table'],
            ['key' => 'mix', 'type' => 'doughnut'],
        ]);

        $this->assertNull($packed['hero']);
        $this->assertSame(['queue', 'mix'], $packed['rest']);
    }

    public function test_stepped_and_multi_axis_series_qualify_as_the_hero(): void
    {
        $this->assertSame(
            'steps',
            DashboardPacking::pack([
                ['key' => 'steps', 'type' => 'steppedLine'],
                ['key' => 'other', 'type' => 'bar'],
            ])['hero'],
        );

        $this->assertSame(
            'axes',
            DashboardPacking::pack([
                ['key' => 'axes', 'type' => 'multiAxis'],
            ])['hero'],
        );
    }
}

final class BlocksDashboardFixture extends DashboardPage
{
    protected static string $panel = 'admin';

    public static function dashboardLayout(): ?string
    {
        return 'blocks';
    }
}

final class ClassicDashboardFixture extends DashboardPage
{
    protected static string $panel = 'admin';

    public static function dashboardLayout(): ?string
    {
        return 'classic';
    }
}

final class InheritingDashboardFixture extends DashboardPage
{
    protected static string $panel = 'admin';
}
