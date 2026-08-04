<?php

declare(strict_types=1);

namespace PanelKit\Panel\Pages;

use DateTimeImmutable;
use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PanelKit\Panel\Alerts\Announcement;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\Ability;
use PanelKit\Panel\Support\SetupChecklist;
use PanelKit\Panel\Support\TenantContext;
use PanelKit\Panel\Widgets\ChartWidget;
use PanelKit\Panel\Widgets\DashboardFilters;
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
     * NO ABILITY OF ITS OWN, unlike every other page.
     *
     * `Page::ability()` derives `view_dashboard` from the slug, and for a
     * dashboard that is the wrong default twice over. A FRESH INSTALLATION has
     * no permissions defined at all, so the screen sign-in lands on would 403 -
     * the panel would look broken to everybody on the first run. And the real
     * gating here is PER WIDGET: `->ability()` on each stat and chart, which is
     * how somebody can hold the network figures without the commercial ones. An
     * all-or-nothing gate in front of them makes that distinction unreachable.
     *
     * The panel's own auth middleware still applies; this is not a public page.
     * Override it if a dashboard should be narrower than the panel.
     */
    public static function ability(): ?string
    {
        return null;
    }

    /**
     * The filter dimensions this dashboard offers, beside the date range.
     *
     * DECLARED, BECAUSE THE PACKAGE HAS NO OPINION ON WHAT YOU FILTER BY. The
     * reference application filters by router, and for a while `routers` was a
     * property on the packaged filter object - so every panel installed from
     * this package carried an ISP's vocabulary in a base class it could not use
     * or remove.
     *
     * OPTIONS RIDE WITH THE PAGE rather than needing a second request, which is
     * why this returns them rather than an endpoint: these lists are small and
     * tenant-scoped. A dimension with thousands of members does not belong in a
     * multiselect anyway.
     *
     * @return list<array{key: string, label: string, singular?: string|null, placeholder?: string|null, options: list<array{value: int, label: string}>}>
     */
    public static function filterDimensions(): array
    {
        return [];
    }

    /**
     * The strip of windows above the widgets - today, the week, the month.
     *
     * NULL MEANS NO STRIP, and the prop is then absent rather than empty: the
     * screen keys its skeleton off the prop's PRESENCE, so an empty array would
     * leave somebody watching a placeholder that was never going to fill.
     *
     * @return (callable(DashboardFilters, DateTimeImmutable, string): list<array<string, mixed>>)|null
     */
    public static function strip(): ?callable
    {
        return null;
    }

    /**
     * The ability required to see the strip, or null for everybody.
     *
     * IT NEEDS ITS OWN GATE. The strip is four aggregates over the same data the
     * widgets show, so a dashboard split by permission that left this ungated
     * would put the numbers back on the wire for exactly the person the split
     * was made for.
     */
    public static function stripAbility(): ?string
    {
        return null;
    }

    /**
     * The ability required to see the installation's setup checklist.
     *
     * SAME GATE AS MONITORING, deliberately. The card surfaces `panel:doctor`
     * findings - a resource with no policy, an inert broadcast channel - which
     * is installation-health detail, not something every tenant user should see
     * about the installation they happen to be signed in to.
     */
    public static function checklistAbility(): ?string
    {
        return 'view_operations';
    }

    /**
     * The filters this request is under.
     *
     * READ BY `stats()` AND `charts()`, which take no arguments - so a widget
     * closure reads the filter here rather than having it passed in. That keeps
     * the signature a subclass overrides identical to the one it has always
     * been, and there is still only ONE filter object per request: every widget
     * closes over the same instance, so a chart cannot quietly ignore it.
     *
     * MEMOISED ON THE REQUEST ITSELF, not in a static and not on the container.
     * Both outlive the request - a static under Octane, a container binding
     * across two calls in one test - and the failure is the worst shape there
     * is: the SECOND request gets the FIRST one's filter, so an unfiltered
     * dashboard silently answers with somebody else's narrowed numbers. That is
     * not hypothetical; it is what this returned before, and the test that
     * filters twice in one case is what caught it.
     */
    public static function filters(): DashboardFilters
    {
        $request = request();
        $key = 'panelkit.dashboard_filters.'.static::class;

        if (! $request->attributes->has($key)) {
            $request->attributes->set($key, DashboardFilters::fromRequest(
                $request,
                new DateTimeImmutable,
                array_column(static::filterDimensions(), 'key'),
            ));
        }

        return $request->attributes->get($key);
    }

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

        /*
         * THE FILTERS ARE BUILT BEFORE ANY WIDGET, and once. Every widget
         * closure reads the same instance through `static::filters()`, so there
         * is no second place a range or a selection could be read and forgotten.
         */
        $filters = static::filters();
        $now = new DateTimeImmutable;

        /*
         * FILTERED BEFORE ANYTHING ELSE HAPPENS TO THEM.
         *
         * A widget the operator may not see is not hidden, not blanked, not
         * sent-and-not-drawn - it is dropped here, before its deferred prop is
         * registered. That is the only version that is actually a permission:
         * anything decided in the browser leaves the number in the page payload
         * for whoever opens the network tab, and runs the query anyway.
         */
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

            /*
             * ECHOED BACK rather than left to the client, so a shared or
             * bookmarked URL renders with each selector highlighting the window
             * it is actually showing.
             */
            'periods' => static::selectedPeriods($request, $charts),
            'filters' => $filters->toArray(),
            'filterDimensions' => static::filterDimensions(),
            'heading' => static::label(),

            /*
             * THE NOTICES, WHICH ARE THE REASON ANNOUNCEMENTS WORK AT ALL.
             *
             * The package shipped the model, the delivery, the dismissal and -
             * as of this release - the screen that composes one, and had
             * nowhere any of it was READ. The banner lived in the reference
             * app's own dashboard, so every other installation could write an
             * announcement that appeared to nobody.
             *
             * NOT DEFERRED, unlike every widget below. A banner that arrives
             * after the numbers is a banner that pushes the page down under
             * somebody's cursor, and this is one cheap indexed query rather
             * than an aggregate.
             *
             * The prefix travels with them because the dismiss route is mounted
             * inside the panel's group; see the component.
             */
            'announcements' => $user === null ? [] : array_values(
                Announcement::activeFor($user->getAuthIdentifier())
                    ->map(static fn (Announcement $a): array => $a->toBanner($user))
                    ->all(),
            ),
            'prefix' => rtrim((string) app(PanelManager::class)->panel(static::panel())?->getPath(), '/'),
        ];

        $tenantKey = (string) (app(TenantContext::class)->currentKey() ?? '');
        $now = new DateTimeImmutable;

        $tenantKey = (string) (app(TenantContext::class)->currentKey() ?? '');

        /*
         * ONE DEFERRED PROP FOR THE WHOLE STRIP: four numbers from four cheap
         * reads is a single round trip, not four.
         */
        $strip = static::strip();

        if ($strip !== null && static::allows($user, static::stripAbility())) {
            $props['strip'] = Inertia::defer(
                static fn (): array => $strip($filters, $now, $tenantKey),
                'strip',
            );
        }

        if ($user !== null && static::allows($user, static::checklistAbility())) {
            $props['checklist'] = Inertia::defer(
                static fn (): array => app(SetupChecklist::class)->items(),
                'checklist',
            );
        }

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

    /**
     * The period currently selected for each chart.
     *
     * @param  list<ChartWidget>  $charts
     * @return array<string, string>
     */
    private static function selectedPeriods(Request $request, array $charts): array
    {
        $out = [];

        foreach ($charts as $chart) {
            $out[$chart->key] = Period::fromRequest($request->query("period_{$chart->key}"))->value;
        }

        return $out;
    }

    /**
     * A null ability means everybody, which is not the same as `can(null)`.
     *
     * A guest reaching a dashboard with no gate declared must still see it - a
     * generated portal's home before any permission exists is exactly that case
     * - so the absence of an ability is answered here rather than handed to the
     * authorisation layer, which would refuse it.
     */
    private static function allows(mixed $user, ?string $ability): bool
    {
        if ($ability === null) {
            return true;
        }

        return $user instanceof Authenticatable
            && $user instanceof Authorizable
            && Ability::held($user, $ability);
    }
}
