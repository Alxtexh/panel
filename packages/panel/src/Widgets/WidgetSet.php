<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

use Illuminate\Contracts\Auth\Authenticatable;
use Inertia\Inertia;
use Alxtexh\Panel\Support\TenantContext;

/**
 * A set of widgets rendered somewhere that is NOT the dashboard.
 *
 * WHY THIS EXISTS. `Panel::widgets()` made widgets registerable, and they could
 * still only appear in one place: `DashboardPage` was the only screen that
 * resolved them. Filament lets a PAGE declare `getHeaderWidgets()` and a
 * RESOURCE declare `getWidgets()`, so a stat card can sit above a list or on a
 * record screen - which is most of what "call a component where you need it"
 * means in practice. A widget system with exactly one host is a dashboard
 * feature wearing a framework's name.
 *
 * THE RESOLUTION RULES ARE THE DASHBOARD'S, DELIBERATELY, and that is the whole
 * reason this is a shared class rather than two similar methods:
 *
 *   - PERMISSION IS CHECKED BEFORE THE DEFERRED PROP EXISTS. A widget the
 *     viewer may not see is not hidden in the browser, it is never sent and its
 *     query never runs. Anything decided client-side leaves the number in the
 *     page payload for whoever opens the network tab.
 *   - THE DECLARATION TRAVELS EAGERLY, THE VALUE IS DEFERRED. Labels and spans
 *     are what let the layout render before anything has been counted.
 *   - ONE DEFERRED GROUP, NOT ONE PER WIDGET. Inertia fetches deferred props
 *     one request per GROUP, and a group each is how the dashboard came to cost
 *     twenty-seven round trips to open.
 *
 * Getting any of those subtly different on a second surface is how a panel ends
 * up leaking a number on the list screen that it correctly withholds on the
 * dashboard.
 */
final class WidgetSet
{
    /**
     * Props for a screen hosting widgets, ready to merge into a render.
     *
     * `$prefix` NAMESPACES THE PROPS so a screen can host more than one set -
     * a header row and a footer row - without their deferred props colliding.
     *
     * @param  list<StatWidget|ChartWidget|TableWidget|MapWidget|CalendarWidget>  $widgets
     * @return array<string, mixed>
     */
    public static function props(array $widgets, ?Authenticatable $user, string $prefix = 'header'): array
    {
        $normalised = [];

        foreach ($widgets as $widget) {
            if ($widget instanceof MapWidget || $widget instanceof CalendarWidget) {
                $normalised[] = $widget->toChartWidget();

                continue;
            }

            $normalised[] = $widget;
        }

        $visible = array_values(array_filter(
            $normalised,
            static fn (StatWidget|ChartWidget|TableWidget $w): bool => $w->visibleTo($user),
        ));

        if ($visible === []) {
            /*
             * NO KEYS AT ALL when nothing is visible, rather than empty arrays.
             * A screen renders its widget row only if the prop is present, so
             * an empty array would draw an empty container with spacing around
             * nothing.
             */
            return [];
        }

        $tenantKey = (string) (app(TenantContext::class)->currentKey() ?? '');

        $stats = array_values(array_filter($visible, static fn ($w): bool => $w instanceof StatWidget));
        $charts = array_values(array_filter($visible, static fn ($w): bool => $w instanceof ChartWidget));
        $tables = array_values(array_filter($visible, static fn ($w): bool => $w instanceof TableWidget));

        $props = [
            $prefix.'Widgets' => array_map(static fn (StatWidget $w): array => $w->toArray(), $stats),
            $prefix.'Charts' => array_map(static fn (ChartWidget $c): array => $c->toArray(), $charts),
            $prefix.'Tables' => array_map(static fn (TableWidget $t): array => $t->toArray(), $tables),
        ];

        foreach ($stats as $widget) {
            $props[$prefix.'_stat_'.$widget->key] = Inertia::defer(
                static fn (): array => $widget->resolve($tenantKey),
                $prefix.'-widgets',
            );
        }

        foreach ($charts as $chart) {
            $props[$prefix.'_chart_'.$chart->key] = Inertia::defer(
                static fn (): array => $chart->resolve(Period::default(), $tenantKey, new \DateTimeImmutable),
                $prefix.'-widgets',
            );
        }

        foreach ($tables as $table) {
            $props[$prefix.'_table_'.$table->key] = Inertia::defer(
                static fn (): array => $table->resolve(),
                $prefix.'-widgets',
            );
        }

        return $props;
    }
}
