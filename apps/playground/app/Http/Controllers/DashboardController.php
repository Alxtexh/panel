<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientSession;
use App\Models\Router;
use DateTimeImmutable;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Support\TenantContext;
use PanelKit\Panel\Widgets\ChartWidget;
use PanelKit\Panel\Widgets\Period;
use PanelKit\Panel\Widgets\StatWidget;
use PanelKit\Panel\Widgets\TimeSeries;
use PanelKit\Panel\Widgets\Trend;

/**
 * The dashboard.
 *
 * EVERY WIDGET IS DEFERRED. Spec §10: the page shell must paint before any
 * widget query runs, and no widget may block first paint. Each is its own
 * deferred prop in its own group, so they arrive INDEPENDENTLY — one slow
 * counter does not hold up the other five.
 *
 * antipatterns §3.2 is the caution here: deferred loading applied GLOBALLY made
 * things worse on render-bound pages, because it adds a round trip and a
 * re-hydration to a page that was never query-bound. It is right here
 * specifically because these are aggregates over large tables, and wrong as a
 * blanket policy — which is why the resource tables are not deferred.
 *
 * PERIODS ARE PER CHART, carried as `?period_<key>=7d`. One dashboard-wide
 * period would mean changing the sessions window also re-runs the signup and
 * breakdown queries, so a click costs four scans instead of one. Per-chart
 * params let the page reload exactly one prop with `only:`.
 */
final class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $tenantKey = (string) (app(TenantContext::class)->currentKey() ?? 'none');

        /*
         * ONE clock for the whole request. Reading `now()` inside each closure
         * lets two widgets resolving either side of midnight disagree about
         * which day "today" is — the series would show a bucket the trend
         * comparison had already excluded.
         */
        $now = new DateTimeImmutable();

        $stats = $this->stats($now);
        $charts = $this->charts();

        $props = [
            'widgets' => array_map(static fn (StatWidget $w): array => $w->toArray(), $stats),
            'charts' => array_map(static fn (ChartWidget $c): array => $c->toArray(), $charts),
            'periods' => $this->selectedPeriods($request, $charts),
        ];

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
    private function charts(): array
    {
        return [
            ChartWidget::make('sessions', 'Sessions over time')
                ->type('area')
                ->description('When subscribers connect')
                ->withPeriods()
                ->span(2)
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->sessionSeries()->resolve($p, $now))
                ->trend(fn (Period $p, ?DateTimeImmutable $now): Trend => $this->trendFor($this->sessionSeries(), $p, $now)),

            ChartWidget::make('signups', 'New subscribers')
                ->type('line')
                ->description('Sign-ups per bucket')
                ->withPeriods()
                ->span(2)
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->signupSeries()->resolve($p, $now))
                ->trend(fn (Period $p, ?DateTimeImmutable $now): Trend => $this->trendFor($this->signupSeries(), $p, $now)),

            // Categorical, so no period selector — a current-state breakdown
            // has only one sensible reading.
            ChartWidget::make('status', 'Clients by status')
                ->type('doughnut')
                ->data(fn (): array => $this->groupedCount('status')),

            ChartWidget::make('plan_type', 'Clients by plan type')
                ->type('doughnut')
                ->data(fn (): array => $this->groupedCount('plan_type')),

            // A proportional bar rather than a plot: three buckets of one
            // quantity read better side by side than as three points.
            ChartWidget::make('renewals', 'Renewals due')
                ->type('segments')
                ->description('Subscriptions reaching their expiry date')
                ->span(2)
                ->data(fn (Period $p, ?DateTimeImmutable $now): array => $this->renewalBuckets($now)),
        ];
    }

    /** Current window against the equally-long window before it. */
    private function trendFor(TimeSeries $series, Period $period, ?DateTimeImmutable $now): Trend
    {
        $now ??= new DateTimeImmutable();
        [$previousStart, $previousEnd] = $period->previous($now);

        return Trend::between(
            $series->totalBetween($period->start($now), $period->end($now)),
            $series->totalBetween($previousStart, $previousEnd),
        );
    }

    private function sessionSeries(): TimeSeries
    {
        return TimeSeries::of(ClientSession::query())->timestamp('started_at')->count();
    }

    private function signupSeries(): TimeSeries
    {
        return TimeSeries::of(Client::query())->timestamp('created_at')->count();
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
    private function renewalBuckets(?DateTimeImmutable $now): array
    {
        $now ??= new DateTimeImmutable();

        $at = static fn (string $modify): string => $now->modify($modify)->format('Y-m-d H:i:s');
        $today = $now->format('Y-m-d H:i:s');

        $row = Client::query()->toBase()
            ->selectRaw(
                'SUM(CASE WHEN expiry_date >= ? AND expiry_date < ? THEN 1 ELSE 0 END) AS week,'
                . ' SUM(CASE WHEN expiry_date >= ? AND expiry_date < ? THEN 1 ELSE 0 END) AS month,'
                . ' SUM(CASE WHEN expiry_date >= ? AND expiry_date < ? THEN 1 ELSE 0 END) AS quarter',
                [$today, $at('+7 days'), $at('+7 days'), $at('+30 days'), $at('+30 days'), $at('+90 days')],
            )
            ->first();

        return [
            ['label' => 'Next 7 days', 'value' => (int) ($row->week ?? 0)],
            ['label' => '8–30 days', 'value' => (int) ($row->month ?? 0)],
            ['label' => '31–90 days', 'value' => (int) ($row->quarter ?? 0)],
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
    private function groupedCount(string $column): array
    {
        return Client::query()->toBase()
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
     * the card read "100,000 ▼ 4.3%" — which any operator reads as having lost
     * 4.3% of their subscribers, when signups had merely slowed. A footnote in
     * the source does not reach the person looking at the card.
     *
     * So a cumulative total and a point-in-time gauge carry NO trend, and the
     * period-over-period measures get their own cards where the arrow refers to
     * the number printed above it.
     */
    private function stats(DateTimeImmutable $now): array
    {
        $period = Period::Days30;

        return [
            StatWidget::make('clients_total', 'Total clients')
                ->value(fn (): int => Client::query()->count())
                ->description('All subscribers'),

            // The growth card. Value, trend and sparkline are all "sign-ups in
            // the window", so the arrow means what it appears to mean.
            StatWidget::make('clients_new', 'New in 30 days')
                ->value(fn (): int => (int) $this->signupSeries()->totalBetween($period->start($now), $period->end($now)))
                ->trend(fn (): Trend => $this->trendFor($this->signupSeries(), $period, $now))
                ->sparkline(fn (): array => $this->signupSeries()->resolve($period, $now)),

            StatWidget::make('clients_active', 'Active')
                ->value(fn (): int => Client::query()->where('status', 'active')->count()),

            StatWidget::make('clients_expired', 'Expired')
                ->value(fn (): int => Client::query()->where('status', 'expired')->count()),

            // A gauge, not a series: there is no stored history of how many
            // sessions were live an hour ago, so there is nothing honest to
            // compare against.
            StatWidget::make('sessions_live', 'Live sessions')
                ->value(fn (): int => ClientSession::query()->whereNull('ended_at')->count())
                ->description('Currently online'),

            StatWidget::make('sessions_30d', 'Sessions in 30 days')
                ->value(fn (): int => (int) $this->sessionSeries()->totalBetween($period->start($now), $period->end($now)))
                ->trend(fn (): Trend => $this->trendFor($this->sessionSeries(), $period, $now))
                ->sparkline(fn (): array => $this->sessionSeries()->resolve($period, $now)),

            StatWidget::make('routers_online', 'Routers online')
                ->value(fn (): int => Router::query()->where('status', 'online')->count()),

            // Deliberately broken, to prove failure isolation: one widget that
            // throws must not take the dashboard down. antipatterns §3.3 — the
            // operator directive was "even if the user has no router just show
            // the pages".
            StatWidget::make('deliberately_broken', 'Failure isolation')
                ->value(fn (): int => throw new \RuntimeException('This widget always fails, on purpose.'))
                ->description('Proves one broken widget does not break the page'),
        ];
    }
}
