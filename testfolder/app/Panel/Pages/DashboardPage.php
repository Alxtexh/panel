<?php

declare(strict_types=1);

namespace App\Panel\Pages;

use Alxtexh\Panel\Pages\DashboardPage as AlxtexhpanelDashboard;
use Alxtexh\Panel\Widgets\ChartWidget;
use Alxtexh\Panel\Widgets\StatWidget;

/**
 * The panel's home screen - where signing in lands.
 *
 * EMPTY ON PURPOSE. A fresh install is chrome plus an empty canvas, not
 * sample orders or revenue. Fill `stats()` / `charts()`, or register
 * widgets with `Panel::widgets()`. Same shape as
 * `make:panel-page --dashboard`.
 *
 * To use your own layout instead, override `component()` and point it
 * at a page of your own; the declarations, the permission filtering and
 * the deferred props still apply.
 */
final class DashboardPage extends AlxtexhpanelDashboard
{
    protected static string $panel = 'admin';

    protected static ?int $sort = -100;

    /**
     * WIDGETS RESOLVE ONE AT A TIME, each in its own deferred prop, so
     * the layout arrives before any query has run and one slow
     * aggregate delays only itself.
     *
     * @return list<StatWidget>
     */
    public static function stats(): array
    {
        return [
            // StatWidget::make('clients', 'Clients')
            //     ->value(fn (): int => Client::query()->count())
            //     ->ability('view_commercial_widgets'),
        ];
    }

    /** @return list<ChartWidget> */
    public static function charts(): array
    {
        return [
            // ChartWidget::make('signups', 'Sign-ups')
            //     ->type('line')
            //     ->withPeriods()
            //     ->data(fn ($period, $now): array => [...]),
        ];
    }
}
