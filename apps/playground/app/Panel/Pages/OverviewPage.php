<?php

declare(strict_types=1);

namespace App\Panel\Pages;

use App\Models\Client;
use DateTimeImmutable;
use PanelKit\Panel\Pages\DashboardPage;
use PanelKit\Panel\Widgets\ChartWidget;
use PanelKit\Panel\Widgets\Period;
use PanelKit\Panel\Widgets\StatWidget;

/**
 * A dashboard declared rather than built - the widget host, proved.
 *
 * WHAT THIS DEMONSTRATES. `StatWidget` and `ChartWidget` shipped with the
 * package from the beginning and were referenced NOWHERE inside it: they
 * composed correct value objects that nothing could mount, because there was no
 * dashboard route and no mechanism for a screen that is not a resource. The
 * reference app's own dashboard is around 1,500 lines of controller and Vue
 * doing that wiring by hand.
 *
 * This is the same capability as three declarations. The route, the navigation
 * entry, the ability, the per-widget permission filter and a deferred prop per
 * widget all follow from extending `DashboardPage`.
 *
 * IT IS DELIBERATELY SMALL. The point is that the mechanism carries real widgets
 * against a quarter of a million rows, not that it reproduces every card on the
 * hand-built screen - which stays where it is, as the worked example of what a
 * dashboard looks like when somebody designs one.
 */
final class OverviewPage extends DashboardPage
{
    protected static ?string $group = 'Insights';

    /**
     * EVERY SIGNED-IN OPERATOR, because the widgets carry their own grants.
     *
     * Gating the page as well would be the wrong shape: somebody who may see
     * connection counts but not commercial figures should get the screen with
     * one card on it, rather than a 403 telling them the dashboard is not for
     * them.
     */
    public static function ability(): ?string
    {
        return null;
    }

    public static function heading(): ?string
    {
        return 'Overview';
    }

    public static function description(): ?string
    {
        return 'Declared with DashboardPage - every widget resolves on its own.';
    }

    public static function stats(): array
    {
        return [
            StatWidget::make('subscribers', 'Subscribers')
                ->description('Every client on the books')
                ->value(fn (): int => Client::query()->count()),

            /*
             * CARRIES ITS OWN ABILITY, which is the half a dashboard cannot do
             * without. The support rota needs connection counts and must not
             * see what the business earns; with no per-widget grant the only
             * choices are showing everybody the revenue or taking the dashboard
             * away from them.
             */
            StatWidget::make('active', 'Active')
                ->description('Currently connected')
                ->ability('view_network_widgets')
                ->value(fn (): int => Client::query()->where('status', 'active')->count()),
        ];
    }

    public static function charts(): array
    {
        return [
            ChartWidget::make('signups', 'Sign-ups')
                ->type('line')
                ->description('New clients over the selected window')
                ->withPeriods()
                ->span(2)
                ->data(function (Period $period, ?DateTimeImmutable $now): array {
                    $start = $period->start($now ?? new DateTimeImmutable);

                    $rows = Client::query()
                        ->where('created_at', '>=', $start)
                        ->selectRaw('date(created_at) as day, count(*) as total')
                        ->groupBy('day')
                        ->orderBy('day')
                        ->get();

                    return [
                        'points' => $rows
                            ->map(fn ($row): array => [
                                'label' => (string) $row->day,
                                'value' => (int) $row->total,
                            ])
                            ->all(),
                    ];
                }),
        ];
    }
}
