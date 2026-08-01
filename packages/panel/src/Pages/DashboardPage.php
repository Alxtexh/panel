<?php

declare(strict_types=1);

namespace PanelKit\Panel\Pages;

use DateTimeImmutable;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PanelKit\Panel\Support\TenantContext;
use PanelKit\Panel\Widgets\ChartWidget;
use PanelKit\Panel\Widgets\Period;
use PanelKit\Panel\Widgets\StatWidget;

/**
 * The host `StatWidget` and `ChartWidget` never had.
 *
 * NINE WIDGET CLASSES SHIPPED WITH NOWHERE TO RENDER. They shape data correctly
 * and nothing mounted them: the package routed no dashboard and had no
 * mechanism for a screen that was not a resource, so `StatWidget::make()`
 * composed a value object that would never reach a browser. `Workspace`, the
 * intended host, was referenced exactly once in the whole package - inside a
 * comment.
 *
 * The catalogue in `panel:blueprint` listed all nine as things to build with,
 * which is how the gap got noticed: an agent could have written a dashboard that
 * was clean, tested and invisible.
 *
 * DECLARE THE WIDGETS, GET THE SCREEN. A subclass says which stats and which
 * charts; routing, the navigation entry, the ability, the per-widget permission
 * filtering and the deferred resolution all follow.
 *
 * EVERY WIDGET RESOLVES IN ITS OWN DEFERRED PROP, in its own group. The page
 * arrives immediately with its labels and layout, and each number lands when its
 * query finishes - so one slow aggregate delays itself rather than the screen,
 * and a widget whose query fails reports itself instead of blanking the rest.
 * Resolving them eagerly in one batch would make the dashboard as slow as its
 * worst query, which on real data is the difference between a screen people
 * open and one they avoid.
 *
 * PERMISSIONS ARE APPLIED BEFORE RESOLUTION, not in the browser. A widget the
 * signed-in operator may not see is never queried and never serialised: hiding
 * it client-side would ship the number to somebody forbidden from it and rely on
 * CSS to keep the secret.
 */
abstract class DashboardPage extends Page
{
    protected static string $icon = 'layout-dashboard';

    /**
     * The counters across the top.
     *
     * @return list<StatWidget>
     */
    public static function stats(): array
    {
        return [];
    }

    /**
     * The charts below them.
     *
     * @return list<ChartWidget>
     */
    public static function charts(): array
    {
        return [];
    }

    /**
     * The packaged screen that draws them.
     *
     * OVERRIDABLE, because a dashboard is the screen most likely to want its own
     * arrangement. Point it at your own component and the declarations, the
     * filtering and the deferred props still apply - what changes is the layout.
     */
    public static function component(): string
    {
        return 'PanelDashboard';
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $user = $request->user();

        $stats = array_values(array_filter(
            static::stats(),
            static fn (StatWidget $w): bool => $w->visibleTo($user),
        ));

        $charts = array_values(array_filter(
            static::charts(),
            static fn (ChartWidget $c): bool => $c->visibleTo($user),
        ));

        $props = [
            // The DECLARATIONS travel with the page: labels, spans and
            // descriptions are what lets the layout render before any number
            // has been counted.
            'widgets' => array_map(static fn (StatWidget $w): array => $w->toArray(), $stats),
            'charts' => array_map(static fn (ChartWidget $c): array => $c->toArray(), $charts),
        ];

        $tenantKey = (string) (app(TenantContext::class)->currentKey() ?? '');
        $now = new DateTimeImmutable;

        foreach ($stats as $widget) {
            $props["stat_{$widget->key}"] = Inertia::defer(
                static fn (): array => $widget->resolve($tenantKey),
                $widget->key,
            );
        }

        foreach ($charts as $chart) {
            /*
             * THE PERIOD IS PER CHART AND COMES FROM THE QUERY STRING, so
             * changing one chart's window is a partial reload of that chart
             * rather than of the page. `Period::fromRequest` rejects anything
             * it does not recognise instead of trusting the parameter.
             */
            $period = Period::fromRequest($request->query("period_{$chart->key}"));

            $props["chart_{$chart->key}"] = Inertia::defer(
                static fn (): array => $chart->resolve($period, $tenantKey, $now),
                $chart->key,
            );
        }

        return $props;
    }
}
