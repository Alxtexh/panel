<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientSession;
use App\Models\Router;
use DateTimeImmutable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Alerts\Announcement;
use PanelKit\Panel\Support\SetupChecklist;
use PanelKit\Panel\Support\TenantContext;
use PanelKit\Panel\Widgets\Bucket;
use PanelKit\Panel\Widgets\ChartWidget;
use PanelKit\Panel\Widgets\DashboardFilters;
use PanelKit\Panel\Widgets\Period;
use PanelKit\Panel\Widgets\Rollup;
use PanelKit\Panel\Widgets\StatWidget;
use PanelKit\Panel\Widgets\TimeSeries;
use PanelKit\Panel\Widgets\Trend;
use PanelKit\Panel\Widgets\Window;

/**
 * The dashboard.
 *
 * EVERY WIDGET IS DEFERRED. Spec §10: the page shell must paint before any
 * widget query runs, and no widget may block first paint. Each is its own
 * deferred prop in its own group, so they arrive INDEPENDENTLY - one slow
 * counter does not hold up the other five.
 *
 * antipatterns §3.2 is the caution here: deferred loading applied GLOBALLY made
 * things worse on render-bound pages, because it adds a round trip and a
 * re-hydration to a page that was never query-bound. It is right here
 * specifically because these are aggregates over large tables, and wrong as a
 * blanket policy - which is why the resource tables are not deferred.
 *
 * PERIODS ARE PER CHART, carried as `?period_<key>=7d`. One dashboard-wide
 * period would mean changing the sessions window also re-runs the signup and
 * breakdown queries, so a click costs four scans instead of one. Per-chart
 * params let the page reload exactly one prop with `only:`.
 */
final class DashboardController extends Controller
{
    /*
     | THE TWO SLICES OF THIS DASHBOARD THAT NOT EVERYBODY SHOULD SEE.
     |
     | Named constants rather than literals scattered across thirty widget
     | definitions, because a mistyped ability string does not fail - it produces
     | a widget nobody can see, on a page that still renders, with no error
     | anywhere. `Abilities::all()` rejects unknown names for the same reason.
     |
     | TWO GROUPS, NOT THIRTY. One ability per widget would be honest and
     | unusable: a permission matrix with thirty dashboard checkboxes is one
     | nobody reads, and an unread matrix is ticked wholesale. These are the two
     | cuts an ISP actually makes - who may see the commercial picture, and who
     | may see the network's.
     |
     | Declared with their labels in `config/panel.php`; nothing here invents an
     | ability name that the permission system does not know about.
     */
    private const COMMERCIAL = 'view_commercial_widgets';

    private const NETWORK = 'view_network_widgets';

    public function index(Request $request): Response
    {
        $tenantKey = (string) (app(TenantContext::class)->currentKey() ?? 'none');

        /*
         * ONE clock for the whole request. Reading `now()` inside each closure
         * lets two widgets resolving either side of midnight disagree about
         * which day "today" is - the series would show a bucket the trend
         * comparison had already excluded.
         */
        $now = new DateTimeImmutable;

        /*
         * ONE filter object for the whole request, built before any widget.
         *
         * Every widget closure closes over it, so a chart cannot accidentally
         * ignore the filter - there is no second place where the range or the
         * router set could be read and forgotten.
         */
        $filters = DashboardFilters::fromRequest($request, $now);

        /*
         * FILTERED BEFORE ANYTHING ELSE HAPPENS TO THEM.
         *
         * A widget the operator may not see is not hidden, not blanked, not
         * sent-and-not-drawn - it is dropped here, before its deferred prop is
         * registered. That is the only version that is actually a permission:
         * anything decided in the browser leaves the number in the page payload
         * for whoever opens the network tab, and runs the query anyway.
         *
         * The user's question was the concrete one - somebody needs the
         * dashboard but must not see the commercial figures - and with
         * visibility all-or-nothing the only answers were "show them the
         * revenue" or "take the dashboard away".
         */
        $user = $request->user();

        $stats = array_values(array_filter(
            $this->stats($now, $filters),
            static fn (StatWidget $w): bool => $w->visibleTo($user),
        ));

        $charts = array_values(array_filter(
            $this->charts($filters),
            static fn (ChartWidget $c): bool => $c->visibleTo($user),
        ));

        $props = [
            /*
             | ANNOUNCEMENTS AT THE TOP, where people already are.
             |
             | They used to have a page of their own, and a page called
             | Announcements is a page nobody opens - so the notice everybody
             | needed to read was the one nobody read. Here they are the first
             | thing on the screen somebody opens anyway, and closing one moves
             | it into their notifications rather than destroying it.
             |
             | NOT DEFERRED. It is one indexed read that usually returns
             | nothing, and a banner that arrives after the page is a banner
             | somebody has already scrolled past.
             */
            'announcements' => $user === null ? [] : Announcement::activeFor($user->getKey())
                ->map(fn (Announcement $a): array => $a->toBanner($user))
                ->all(),

            'widgets' => array_map(static fn (StatWidget $w): array => $w->toArray(), $stats),
            'charts' => array_map(static fn (ChartWidget $c): array => $c->toArray(), $charts),
            'periods' => $this->selectedPeriods($request, $charts),
            'filters' => $filters->toArray(),
            // Options for the filter panel. Small and tenant-scoped, so they
            // ride with the page rather than needing a second request.
            'filterOptions' => [
                'routers' => Router::query()->orderBy('name')->limit(200)
                    ->get(['id', 'name'])
                    ->map(fn (Router $r): array => ['value' => $r->id, 'label' => $r->name])
                    ->all(),
            ],
        ];

        /*
         * One deferred prop for the whole strip: four numbers from four cheap
         * reads is a single round trip, not four.
         *
         * GATED LIKE THE WIDGETS IT SITS ABOVE. It is session data - today, the
         * last seven days, the month - and it was reaching a commercial-only
         * role while every individual session widget was being filtered out.
         * Splitting a screen by permission and leaving one prop ungated is the
         * same as not splitting it: the numbers are still on the wire.
         */
        if ($user === null || $user->hasPermission(self::NETWORK)) {
            $props['strip'] = Inertia::defer(
                fn (): array => $this->sessionStrip($tenantKey, $now, $filters),
                'strip',
            );
        }

        /*
         * SAME GATE AS MONITORING, deliberately. This card surfaces the exact
         * same `panel:doctor` findings that page does - a resource with no
         * policy, an inert broadcast channel - which is installation-health
         * detail, not something every tenant user should see about the
         * installation they happen to be logged into.
         */
        if ($user !== null && $user->hasPermission('view_operations')) {
            $props['checklist'] = Inertia::defer(
                fn (): array => app(SetupChecklist::class)->items(),
                'checklist',
            );
        }

        foreach ($stats as $widget) {
            // A separate deferred prop per widget, in its own group, so they
            // resolve independently rather than as one blocking batch.
            $props["stat_{$widget->key}"] = Inertia::defer(
                fn (): array => $widget->resolve($tenantKey),
                $widget->key,
            );
        }

        foreach ($charts as $chart) {
            $period = Period::fromRequest($request->query("period_{$chart->key}"));

            $props["chart_{$chart->key}"] = Inertia::defer(
                fn (): array => $chart->resolve($period, $tenantKey, $now),
                $chart->key,
            );
        }

        return Inertia::render('Dashboard', $props);
    }

    /**
     * The period currently selected for each chart.
     *
     * Echoed back rather than left to the client so a shared or bookmarked URL
     * renders with the selector highlighting the window it is actually showing.
     *
     * @param  list<ChartWidget>  $charts
     * @return array<string, string>
     */
    private function selectedPeriods(Request $request, array $charts): array
    {
        $out = [];

        foreach ($charts as $chart) {
            $out[$chart->key] = Period::fromRequest($request->query("period_{$chart->key}"))->value;
        }

        return $out;
    }

    /** @return list<ChartWidget> */
    private function charts(DashboardFilters $filters): array
    {
        return [
            ChartWidget::make('sessions', 'Sessions over time')
                ->type('area')
                ->description('When subscribers connect')
                ->withPeriods()
                ->span(2)
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->sessionSeries($filters)
                    ->resolveWindow($filters->windowFor($p, $now ?? new DateTimeImmutable)))
                ->trend(fn (Period $p, ?DateTimeImmutable $now): Trend => $this->trendFor(
                    $this->sessionSeries($filters),
                    $filters->windowFor($p, $now ?? new DateTimeImmutable),
                ))
                ->ability(self::NETWORK),

            ChartWidget::make('signups', 'New subscribers')
                ->type('line')
                ->description('Sign-ups per bucket')
                ->withPeriods()
                ->span(2)
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->signupSeries($filters)
                    ->resolveWindow($filters->windowFor($p, $now ?? new DateTimeImmutable)))
                ->trend(fn (Period $p, ?DateTimeImmutable $now): Trend => $this->trendFor(
                    $this->signupSeries($filters),
                    $filters->windowFor($p, $now ?? new DateTimeImmutable),
                ))
                ->ability(self::COMMERCIAL),

            // Categorical, so no period selector - a current-state breakdown
            // has only one sensible reading.
            ChartWidget::make('status', 'Clients by status')
                ->type('doughnut')
                ->data(fn (): array => $this->groupedCount('status', $filters)),

            ChartWidget::make('plan_type', 'Clients by plan type')
                ->type('doughnut')
                ->data(fn (): array => $this->groupedCount('plan_type', $filters))
                ->ability(self::COMMERCIAL),

            /*
             | THE FULL CHART GALLERY.
             |
             | Every renderer the panel ships is represented, on real data, so a
             | panel author can see what each one looks like against their own
             | numbers before choosing. A gallery drawn from placeholder data
             | teaches nothing - the reason to pick a polar area over a pie is
             | how the actual distribution reads.
             */
            ChartWidget::make('sessions_bars', 'Sessions by day')
                ->type('bar')
                ->description('Vertical bars')
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->sessionSeries($filters)->resolve(Period::Days7, $now))
                ->ability(self::NETWORK),

            ChartWidget::make('routers_load', 'Busiest routers')
                ->type('horizontalBar')
                ->description('Horizontal bars - long labels stay readable')
                ->data(fn (): array => $this->clientsPerRouter($filters))
                ->ability(self::NETWORK),

            ChartWidget::make('plan_status', 'Plan type by status')
                ->type('stackedBar')
                ->description('Stacked bars - parts of each total')
                ->span(2)
                ->data(fn (): array => $this->crossTab('plan_type', 'status', $filters))
                ->ability(self::COMMERCIAL),

            ChartWidget::make('plan_status_grouped', 'Plan type by status, side by side')
                ->type('bar')
                ->description('Grouped bars - the same data, compared rather than summed')
                ->span(2)
                ->data(fn (): array => $this->crossTab('plan_type', 'status', $filters))
                ->ability(self::COMMERCIAL),

            ChartWidget::make('sessions_vs_signups', 'Sessions against sign-ups')
                ->type('combo')
                ->description('Bars and a line together')
                ->span(2)
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->comboSeries($now, $filters)),

            ChartWidget::make('load_vs_growth', 'Load against growth')
                ->type('multiAxis')
                ->description('Two scales - sessions in thousands beside sign-ups in tens')
                ->span(2)
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->multiAxisSeries($now, $filters)),

            ChartWidget::make('today_hourly', 'Connections today')
                ->type('steppedLine')
                ->description('Stepped - a reading holds until the next one')
                ->span(2)
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->sessionSeries($filters)->resolve(Period::Today, $now))
                ->ability(self::NETWORK),

            ChartWidget::make('status_pie', 'Status share')
                ->type('pie')
                ->description('Pie - parts of a whole')
                ->data(fn (): array => $this->groupedCount('status', $filters)),

            ChartWidget::make('routers_polar', 'Router distribution')
                ->type('polarArea')
                ->description('Polar area - magnitudes that need not sum')
                ->data(fn (): array => $this->clientsPerRouter($filters))
                ->ability(self::NETWORK),

            /*
             | RANKED, WORST FIRST. The point of this shape is that the reader
             | never has to read a number: the red end IS the answer. Pinned to
             | 100 so a percentage is measured against the full scale rather
             | than against whichever router happened to score highest.
             */
            ChartWidget::make('router_health', 'Service area performance (lowest 15)')
                ->type('rankedBar')
                ->description('Share of subscribers currently active, per router')
                ->span(2)
                ->thresholds([40 => 'danger', 70 => 'warning'], max: 100)
                ->data(fn (): array => $this->routerHealth($filters))
                ->ability(self::NETWORK),

            // A hundred routers against three statuses: too many for bars, and
            // an ordering a line chart would imply does not exist.
            ChartWidget::make('status_heatmap', 'Subscribers by service area')
                ->type('heatmap')
                ->description('Subscriber status across every router')
                ->span(2)
                ->data(fn (): array => $this->statusByRouter($filters))
                ->ability(self::NETWORK),

            ChartWidget::make('plan_radar', 'Plan mix by status')
                ->type('radar')
                ->description('Radar - the same axes compared across groups')
                ->data(fn (): array => $this->crossTab('plan_type', 'status', $filters))
                ->ability(self::COMMERCIAL),

            // A proportional bar rather than a plot: three buckets of one
            // quantity read better side by side than as three points.
            ChartWidget::make('renewals', 'Renewals due')
                ->type('segments')
                ->description('Subscriptions reaching their expiry date')
                ->span(2)
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->renewalBuckets($now, $filters))
                ->ability(self::COMMERCIAL),
        ];
    }

    /** Current window against the equally-long window before it. */
    private function trendFor(TimeSeries $series, Window $window): Trend
    {
        return Trend::between($series->totalIn($window), $series->totalIn($window->previous()));
    }

    /**
     * The session series, narrowed by the dashboard filter.
     *
     * The router constraint is applied to the QUERY, not to the result: filtering
     * afterwards would still scan and aggregate every router's rows and then
     * throw most of them away.
     */
    /**
     * Sessions across four windows, as one strip.
     *
     * READ FROM THE ROLLUP, plus today live. Each of these is a COUNT over a
     * span of a 1M-row table - the 90-day one alone was a second - and they are
     * exactly the shape the rollup exists for: complete days are stored, and
     * only the day still accumulating has to be counted.
     *
     * THE WINDOWS ARE ALL BOUNDED, deliberately. "All time" is the obvious
     * fourth entry and is the one figure this cannot honestly give: the rollup
     * knows what was backfilled, not what exists, so an unbounded question
     * would quietly return "all time that happens to have been aggregated" with
     * no way for the reader to tell.
     *
     * THE ROLLUP IS SKIPPED WHEN A ROUTER FILTER IS ACTIVE, for the same reason
     * the charts skip it: buckets are stored per tenant, so a filtered heading
     * over unfiltered numbers would be wrong rather than merely stale.
     *
     * @return list<array{key: string, label: string, value: int, caption: string}>
     */
    private function sessionStrip(string $tenantKey, DateTimeImmutable $now, DashboardFilters $filters): array
    {
        $series = $this->sessionSeries($filters);

        $startOfToday = $now->setTime(0, 0);
        $today = (int) $series->totalBetween($startOfToday, $startOfToday->modify('+1 day'));

        $windows = [
            ['key' => 'today', 'label' => 'Today', 'from' => $startOfToday, 'caption' => 'so far'],
            ['key' => 'week', 'label' => 'Last 7 days', 'from' => $startOfToday->modify('-6 days'), 'caption' => 'rolling window'],
            ['key' => 'month', 'label' => 'This month', 'from' => $startOfToday->modify('first day of this month'), 'caption' => 'since the 1st'],
            ['key' => 'quarter', 'label' => 'Last 90 days', 'from' => $startOfToday->modify('-89 days'), 'caption' => 'rolling window'],
        ];

        $rollup = $filters->routers !== [] ? null : new Rollup('sessions.started');
        $yesterday = $startOfToday->modify('-1 day')->format(Bucket::Day->phpFormat());

        $out = [];

        foreach ($windows as $window) {
            $from = $window['from'];

            $value = $rollup === null
                ? (int) $series->totalBetween($from, $startOfToday->modify('+1 day'))
                : $rollup->sum($tenantKey, Bucket::Day, $from->format(Bucket::Day->phpFormat()), $yesterday) + $today;

            $out[] = [
                'key' => $window['key'],
                'label' => $window['label'],
                // Today's window is the live count on its own; the stored
                // buckets start yesterday.
                'value' => $window['key'] === 'today' ? $today : $value,
                'caption' => $window['caption'],
            ];
        }

        return $out;
    }

    private function sessionSeries(?DashboardFilters $filters = null): TimeSeries
    {
        return $this->withRollup(
            TimeSeries::of($this->scoped(ClientSession::query(), $filters))->timestamp('started_at')->count(),
            'sessions.started',
            $filters,
        );
    }

    private function signupSeries(?DashboardFilters $filters = null): TimeSeries
    {
        return $this->withRollup(
            TimeSeries::of($this->scoped(Client::query(), $filters))->timestamp('created_at')->count(),
            'clients.created',
            $filters,
        );
    }

    /**
     * Read from the rollup, but ONLY when the series is the unfiltered one.
     *
     * A rollup is aggregated per tenant and per bucket and knows nothing about
     * a router filter - serving one for a narrowed series would return the
     * whole tenant's numbers under a filtered heading, which is a wrong answer
     * that looks entirely plausible.
     *
     * So a filtered chart falls back to the live query and pays for it, which
     * is the correct trade: the unfiltered dashboard is what everyone loads,
     * and a deliberately narrowed one is both rarer and expected to think.
     */
    private function withRollup(TimeSeries $series, string $metric, ?DashboardFilters $filters): TimeSeries
    {
        if ($filters !== null && $filters->routers !== []) {
            return $series;
        }

        $tenantKey = app(TenantContext::class)->currentKey();

        return $tenantKey === null ? $series : $series->rollup($metric, $tenantKey);
    }

    /**
     * Apply the filter's router set to any query that has a `router_id`.
     *
     * @template TBuilder of \Illuminate\Database\Eloquent\Builder
     *
     * @param  TBuilder  $query
     * @return TBuilder
     */
    private function scoped(Builder $query, ?DashboardFilters $filters): Builder
    {
        if ($filters !== null && $filters->routers !== []) {
            $query->whereIn('router_id', $filters->routers);
        }

        return $query;
    }

    /**
     * A two-dimensional breakdown as several named series - ONE grouped query.
     *
     * The pivot happens in PHP over a handful of rows rather than as N queries
     * or a hand-written CASE per series: `GROUP BY a, b` returns every
     * combination that exists, and combinations that do NOT exist are filled
     * with zero here. Without that fill a series would be shorter than the
     * others and every renderer would silently mis-align its bars, because a
     * bar's category comes from its index.
     *
     * @return array{series: list<array{name: string, points: list<array{label: string, value: int}>}>}
     */
    private function crossTab(string $rowColumn, string $seriesColumn, ?DashboardFilters $filters = null): array
    {
        $rows = $this->scoped(Client::query(), $filters)->toBase()
            ->selectRaw("{$rowColumn} as row_key, {$seriesColumn} as series_key, COUNT(*) as value")
            ->groupBy($rowColumn, $seriesColumn)
            ->get();

        $categories = [];
        $names = [];
        $matrix = [];

        foreach ($rows as $r) {
            $category = (string) $r->row_key;
            $name = (string) $r->series_key;

            $categories[$category] = true;
            $names[$name] = true;
            $matrix[$name][$category] = (int) $r->value;
        }

        $categories = array_keys($categories);
        sort($categories);

        $series = [];

        foreach (array_keys($names) as $name) {
            $series[] = [
                'name' => ucfirst($name),
                'points' => array_map(
                    static fn (string $c): array => ['label' => $c, 'value' => $matrix[$name][$c] ?? 0],
                    $categories,
                ),
            ];
        }

        return ['series' => $series];
    }

    /**
     * Active share per router, worst first - ONE query.
     *
     * Conditional aggregation rather than two grouped queries and a join in
     * PHP: the numerator and the denominator come from the same scan, so they
     * cannot disagree if a row changes between them.
     *
     * Routers with too few subscribers are EXCLUDED. One subscriber who happens
     * to be suspended is a 0% router, and it would occupy the worst slot on the
     * chart every time while telling nobody anything.
     *
     * @return list<array{label: string, value: float}>
     */
    private function routerHealth(?DashboardFilters $filters = null): array
    {
        $rows = $this->scoped(Client::query(), $filters)->toBase()
            ->selectRaw(
                'router_id, COUNT(*) as total,'
                ." SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active"
            )
            ->groupBy('router_id')
            ->havingRaw('COUNT(*) >= 5')
            ->get();

        $names = Router::query()->toBase()
            ->whereIn('id', $rows->pluck('router_id')->filter()->all())
            ->pluck('name', 'id');

        return $rows
            ->map(fn (object $r): array => [
                'label' => sprintf(
                    '%s - %s%% (%d)',
                    $names[$r->router_id] ?? "#{$r->router_id}",
                    round(($r->active / max(1, $r->total)) * 100, 1),
                    (int) $r->total,
                ),
                'value' => round(($r->active / max(1, $r->total)) * 100, 1),
            ])
            ->sortBy('value')
            ->take(15)
            ->values()
            ->all();
    }

    /**
     * Status across every router, as heatmap rows - ONE grouped query.
     *
     * Rows are statuses and columns are routers, not the other way round: a
     * heatmap is read along its rows, and three long rows are scannable where
     * a hundred short ones are not.
     *
     * @return array{series: list<array{name: string, points: list<array{label: string, value: int}>}>}
     */
    private function statusByRouter(?DashboardFilters $filters = null): array
    {
        $rows = $this->scoped(Client::query(), $filters)->toBase()
            ->selectRaw('router_id, status, COUNT(*) as value')
            ->groupBy('router_id', 'status')
            ->get();

        $names = Router::query()->toBase()
            ->whereIn('id', $rows->pluck('router_id')->filter()->unique()->all())
            ->orderBy('name')
            ->pluck('name', 'id');

        $matrix = [];

        foreach ($rows as $r) {
            $matrix[(string) $r->status][(int) $r->router_id] = (int) $r->value;
        }

        $statuses = array_keys($matrix);
        sort($statuses);

        return ['series' => array_map(
            static fn (string $status): array => [
                'name' => ucfirst($status),
                // Every router appears in every row, zero-filled. A row missing
                // a column would shift every cell after it, so a status would
                // be attributed to the wrong router with nothing failing.
                'points' => $names
                    ->map(fn (string $name, int $id): array => [
                        'label' => $name,
                        'value' => $matrix[$status][$id] ?? 0,
                    ])
                    ->values()
                    ->all(),
            ],
            $statuses,
        )];
    }

    /**
     * Clients per router, named.
     *
     * One grouped query plus one lookup of router names, not one query per
     * router - addendum C1 again.
     *
     * @return list<array{label: string, value: int}>
     */
    private function clientsPerRouter(?DashboardFilters $filters = null): array
    {
        $counts = $this->scoped(Client::query(), $filters)->toBase()
            ->selectRaw('router_id, COUNT(*) as value')
            ->groupBy('router_id')
            ->orderByDesc('value')
            ->limit(8)
            ->get();

        $names = Router::query()->toBase()
            ->whereIn('id', $counts->pluck('router_id')->filter()->all())
            ->pluck('name', 'id');

        return $counts
            ->map(fn (object $r): array => [
                'label' => (string) ($names[$r->router_id] ?? "Router #{$r->router_id}"),
                'value' => (int) $r->value,
            ])
            ->all();
    }

    /**
     * Sessions as bars, with their own rolling average as the line.
     *
     * BOTH HALVES ARE IN THE SAME UNIT, which is what a combo chart is for: the
     * line is a reading OF the bars, not a second quantity beside them. The
     * first attempt put sign-ups (tens) against sessions (hundreds) on a shared
     * scale, and the line rendered flat along the baseline - technically
     * correct and completely unreadable. Two units on one plot is the
     * multi-axis chart's job instead.
     *
     * @return array{bars: list<array<string, mixed>>, lines: list<array<string, mixed>>}
     */
    private function comboSeries(?DateTimeImmutable $now, ?DashboardFilters $filters = null): array
    {
        $points = $this->sessionSeries($filters)->resolve(Period::Days30, $now)['points'];

        return [
            'bars' => [['name' => 'Sessions', 'points' => $points]],
            'lines' => [['name' => '7-day average', 'points' => $this->rollingAverage($points, 7)]],
        ];
    }

    /**
     * A trailing mean over `$window` points.
     *
     * Trailing, not centred: a centred average would need points from the
     * future for the most recent days, which do not exist - so the line would
     * stop short of the last bar and look truncated.
     *
     * @param  list<array{label: string, value: int|float}>  $points
     * @return list<array{label: string, value: float}>
     */
    private function rollingAverage(array $points, int $window): array
    {
        $out = [];

        foreach ($points as $i => $point) {
            $slice = array_slice($points, max(0, $i - $window + 1), min($i + 1, $window));
            $values = array_column($slice, 'value');

            $out[] = [
                'label' => $point['label'],
                'value' => round(array_sum($values) / max(1, count($values)), 1),
            ];
        }

        return $out;
    }

    /**
     * Two series that genuinely need two scales.
     *
     * Sessions run in the hundreds and sign-ups in the tens; on a shared axis
     * the sign-up line is pressed flat against the baseline and reads as zero.
     */
    private function multiAxisSeries(?DateTimeImmutable $now, ?DashboardFilters $filters = null): array
    {
        return ['series' => [
            ['name' => 'Sessions', 'points' => $this->sessionSeries($filters)->resolve(Period::Days30, $now)['points']],
            [
                'name' => 'Sign-ups',
                'axis' => 'right',
                'dashed' => true,
                'points' => $this->signupSeries($filters)->resolve(Period::Days30, $now)['points'],
            ],
        ]];
    }

    /**
     * Upcoming renewals in three windows, as ONE query.
     *
     * Conditional aggregation rather than three counts: the alternative reads
     * more clearly and costs three scans of the same index for one card. The
     * bounds are parameters, never interpolated dates.
     *
     * @return list<array{label: string, value: int}>
     */
    private function renewalBuckets(?DateTimeImmutable $now, ?DashboardFilters $filters = null): array
    {
        $now ??= new DateTimeImmutable;

        $at = static fn (string $modify): string => $now->modify($modify)->format('Y-m-d H:i:s');
        $today = $now->format('Y-m-d H:i:s');

        $row = $this->scoped(Client::query(), $filters)->toBase()
            ->selectRaw(
                'SUM(CASE WHEN expiry_date >= ? AND expiry_date < ? THEN 1 ELSE 0 END) AS week,'
                .' SUM(CASE WHEN expiry_date >= ? AND expiry_date < ? THEN 1 ELSE 0 END) AS month,'
                .' SUM(CASE WHEN expiry_date >= ? AND expiry_date < ? THEN 1 ELSE 0 END) AS quarter',
                [$today, $at('+7 days'), $at('+7 days'), $at('+30 days'), $at('+30 days'), $at('+90 days')],
            )
            ->first();

        return [
            ['label' => 'Next 7 days', 'value' => (int) ($row->week ?? 0)],
            ['label' => '8-30 days', 'value' => (int) ($row->month ?? 0)],
            ['label' => '31-90 days', 'value' => (int) ($row->quarter ?? 0)],
        ];
    }

    /**
     * One grouped query, every slice.
     *
     * addendum C1 applies here as much as to tabs: N categories must never mean
     * N queries.
     *
     * @return list<array{label: string, value: int}>
     */
    private function groupedCount(string $column, ?DashboardFilters $filters = null): array
    {
        return $this->scoped(Client::query(), $filters)->toBase()
            ->selectRaw("{$column} as label, COUNT(*) as value")
            ->groupBy($column)
            ->orderByDesc('value')
            ->get()
            ->map(fn (object $r): array => ['label' => (string) $r->label, 'value' => (int) $r->value])
            ->all();
    }

    /**
     * @return list<StatWidget>
     *
     * A NUMBER, ITS TREND AND ITS SPARKLINE MUST ALL MEASURE THE SAME THING.
     *
     * The first cut hung a signups trend off the cumulative client total, so
     * the card read "100,000 ▼ 4.3%" - which any operator reads as having lost
     * 4.3% of their subscribers, when signups had merely slowed. A footnote in
     * the source does not reach the person looking at the card.
     *
     * So a cumulative total and a point-in-time gauge carry NO trend, and the
     * period-over-period measures get their own cards where the arrow refers to
     * the number printed above it.
     */
    private function stats(DateTimeImmutable $now, DashboardFilters $filters): array
    {
        $period = Period::Days30;

        // The filter's range wins over the stat cards' fixed 30-day window, so
        // a filtered dashboard's counters describe the same period as its
        // charts rather than quietly reporting a different one.
        $window = $filters->windowFor($period, $now);

        return [
            StatWidget::make('clients_total', 'Total clients')
                ->value(fn (): int => $this->scoped(Client::query(), $filters)->count())
                ->description('All subscribers'),

            // The growth card. Value, trend and sparkline are all "sign-ups in
            // the window", so the arrow means what it appears to mean.
            StatWidget::make('clients_new', 'New subscribers')
                ->value(fn (): int => (int) $this->signupSeries($filters)->totalIn($window))
                ->trend(fn (): Trend => $this->trendFor($this->signupSeries($filters), $window))
                ->sparkline(fn (): array => $this->signupSeries($filters)->resolveWindow($window))
                ->ability(self::COMMERCIAL),

            StatWidget::make('clients_active', 'Active')
                ->value(fn (): int => $this->scoped(Client::query(), $filters)->where('status', 'active')->count()),

            StatWidget::make('clients_expired', 'Expired')
                ->value(fn (): int => $this->scoped(Client::query(), $filters)->where('status', 'expired')->count()),

            // A gauge, not a series: there is no stored history of how many
            // sessions were live an hour ago, so there is nothing honest to
            // compare against.
            StatWidget::make('sessions_live', 'Live sessions')
                ->value(fn (): int => $this->scoped(ClientSession::query(), $filters)->whereNull('ended_at')->count())
                ->description('Currently online')
                ->ability(self::NETWORK),

            StatWidget::make('sessions_window', 'Sessions in range')
                ->value(fn (): int => (int) $this->sessionSeries($filters)->totalIn($window))
                ->trend(fn (): Trend => $this->trendFor($this->sessionSeries($filters), $window))
                ->sparkline(fn (): array => $this->sessionSeries($filters)->resolveWindow($window))
                ->ability(self::NETWORK),

            StatWidget::make('routers_online', 'Routers online')
                ->value(fn (): int => Router::query()
                    ->when($filters->routers !== [], fn ($q) => $q->whereIn('id', $filters->routers))
                    ->where('status', 'online')
                    ->count())
                ->ability(self::NETWORK),

            /*
             * DELIBERATELY BROKEN, AND NO LONGER ON BY DEFAULT.
             *
             * One widget that throws must not take the dashboard down -
             * antipatterns §3.3, and the operator directive after that incident
             * was "even if the user has no router just show the pages". Proving
             * it needs a widget that fails, and for a long time this one shipped
             * enabled: a permanently red card on the reference dashboard, which
             * teaches every reader to ignore a red card.
             *
             * THE ISOLATION IS PROVED BY A TEST, which is where a proof belongs.
             * The card stays available behind a flag for anybody who wants to
             * see the behaviour on a real screen.
             */
            ...(config('panel.demo.broken_widget', false) ? [
                StatWidget::make('deliberately_broken', 'Failure isolation')
                    ->value(fn (): int => throw new \RuntimeException('This widget always fails, on purpose.'))
                    ->description('Proves one broken widget does not break the page'),
            ] : []),
        ];
    }
}
