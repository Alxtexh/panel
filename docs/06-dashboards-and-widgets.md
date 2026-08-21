# 6. Dashboards and widgets

## A dashboard

```php
namespace App\Panel\Pages;

use Alxtexh\Panel\Pages\DashboardPage;
use Alxtexh\Panel\Widgets\{StatWidget, ChartWidget, MapWidget, CalendarWidget, Trend, Period};

final class Dashboard extends DashboardPage
{
    protected static string $panel = 'admin';
    protected static ?int $sort = -100;

    public static function stats(): array
    {
        return [
            StatWidget::make('total', 'Invoices')
                ->description('All time')
                ->value(fn (): int => Invoice::count())
                ->trend(fn (): Trend => Trend::between(238, 214))
                ->sparkline(fn (): array => ['points' => [...]]),
        ];
    }

    public static function charts(): array
    {
        return [
            ChartWidget::make('revenue', 'Revenue')
                ->type('area')
                ->withPeriods()
                ->span(2)
                ->data(fn (Period $p): array => [...]),

            MapWidget::make('coverage', 'Coverage')
                ->center(-1.286389, 36.817223)
                ->markers(fn (): array => [
                    ['lat' => -1.29, 'lng' => 36.82, 'label' => 'HQ'],
                ]),

            CalendarWidget::make('bookings', 'Bookings')
                ->events(fn (): array => [
                    ['date' => '2026-08-21', 'label' => 'Install'],
                ]),
        ];
    }
}
```

## Stats render as one joined strip

Four separate cards say "four things". One card divided by hairlines says "four
measures of this panel", so `stats()` renders through `StatStrip` — a single
bordered container whose cells sit on a 1px grid gap, which draws the dividers
wherever cells meet at any breakpoint.

The trend badge sits beside the value so the row keeps a fixed height; the
sparkline goes last, because it is the least precise part and should yield space
rather than compete. The same shape renders wherever a stat row appears — a
dashboard, a resource header, a custom page.

**Values are not masked here.** A strip declared directly starts covered, which
is right for figures somebody deliberately put behind an eye; dashboard counters
would all arrive hidden, so masking is off for `stats()`.

## Every chart type

`line`, `area`, `steppedLine`, `multiAxis`, `bar`, `horizontalBar`,
`stackedBar`, `combo`, `pie`, `doughnut`, `polarArea`, `radar`, `rankedBar`,
`heatmap`, `segments`, `scatter`, `bubble`.

## Every value is deferred

Each stat and chart is its own deferred prop, so the shell paints immediately
and the numbers fill in independently — one slow counter does not hold up the
others. Changing a period reloads **one** prop:

```php
ChartWidget::make('revenue', 'Revenue')->withPeriods()
```

The click re-runs one grouped query, not every counter on the page.

## Polling and live updates

Priority, and why:

1. **Reverb / Echo** when the host has `window.Echo` (Laravel Reverb, typically
   with Redis as Laravel's cache / queue / broadcast backend). Push, no
   periodic HTTP, scales to many open dashboards.
2. **HTTP poll** when Echo is absent. Works on a stock PHP-FPM install. Cost is
   N widgets times the interval in requests. Pauses while the tab is hidden.
3. **Redis** is not a UI transport. Use it for `CACHE_STORE` /
   `QUEUE_CONNECTION` / `BROADCAST_CONNECTION` if the host already runs it.
   The kit does not require Redis and does not start Reverb.

Never poll and subscribe for the same widget. Set both in PHP so a host
without Reverb still refreshes:

```php
StatWidget::make('online', 'Online')
    ->value(fn (): int => Session::query()->where('status', 'online')->count())
    ->live('dashboard.stats')
    ->poll('10s');
```

`->live('dashboard.stats')` is the Echo channel. `->poll('10s')` (or an integer
number of seconds) is the fallback interval. The Vue host reloads only that
widget's deferred prop (Inertia partial JSON, not a full visit). There is no
Livewire. The kit does not crash if `window.Echo` is undefined.

Host recipe when Reverb is already installed:

```env
BROADCAST_CONNECTION=reverb
REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REVERB_APP_KEY=
REVERB_HOST=localhost
REVERB_PORT=8080
REVERB_SCHEME=http
VITE_REVERB_APP_KEY="${REVERB_APP_KEY}"
VITE_REVERB_HOST="${REVERB_HOST}"
VITE_REVERB_PORT="${REVERB_PORT}"
VITE_REVERB_SCHEME="${REVERB_SCHEME}"
```

Construct Echo in `app.js` / `echo.ts` the way Laravel's Reverb docs show, and
only when `VITE_REVERB_APP_KEY` is set. Broadcast `.WidgetUpdated` (via
`broadcastAs()`) on that private channel when the numbers change. Authorise
the channel in `routes/channels.php`. A stock install leaves Echo undefined
and keeps `->poll()`.

## Time series without gaps

`Bucket`, `Period` and `Trend` handle the arithmetic. Bucketing a timestamp is
the one thing that cannot be written portably — SQLite has `strftime`, MySQL
`DATE_FORMAT`, Postgres `date_trunc` — so the dialect is looked up and an
unknown driver **throws** rather than guessing. A wrong guess returns a chart
with plausible, silently incorrect buckets, which is the worst failure available.

Gap-filling walks the range so a day with no rows draws a zero rather than
vanishing.

## Filters and strips

```php
public static function filterDimensions(): array
{
    return [['key' => 'region', 'label' => 'Region', 'options' => [...]]];
}

public static function strip(): ?callable { /* four windows over one metric */ }
```

A dashboard filter applies to every widget on the page at once.

## Widgets on other screens

Any resource or page can carry a row:

```php
public static function headerWidgets(): array { return [ /* stats, charts */ ]; }
```

They render through the same component, so a header row and a dashboard agree.

Generate an empty factory with `php artisan make:panel-widget Revenue` or
`--chart`. Discovery picks it up from `discoverWidgets()`.

```php
TableWidget::make('recent')->resource(OrderResource::class)->limit(5)->poll('10s');
ChartWidget::make('load', 'Load')->poll(15);

Panel::make('admin')->discoverWidgets(app_path('Panel/Widgets'));
```

`TableWidget` renders the existing DataTable with a capped list query.
`->live('dashboard.stats')` prefers Echo/Reverb when `window.Echo` exists;
`->poll('10s')` (or an integer number of seconds) is the HTTP fallback.
Never both for the same widget at runtime. Redis is infrastructure, not the
UI transport. The namespace is optional
when the directory is under `app_path()`. An empty dashboard stays the install
default.

## User-customizable layout (opt-in)

Off by default. Enable per portal:

```php
Panel::make('admin')->userDashboards();
```

Operators can drag chart widgets into a new order. The order persists on
`users.appearance.dashboardLayout.chartOrder` via the existing appearance
endpoint. When the flag is off, the dashboard never reads that key.

## First-run setup guide

The empty canvas still needs a path through kit chrome. `DashboardPage` shares
`onboarding` (and `onboardingDismiss`) until the operator skips or every step
is done. Persist is per person: cookie `panel_onboarding_done` (same idea as
hidden dashboard widgets; leave it out of cookie encryption) and
`users.appearance.onboardingDone`. Override the
list with `Panel::onboardingSteps()`. Defaults never name a vertical (no
clients or routers). Replay from What's new after dismiss.

## Rollups

For counters too expensive to compute per request, `panel:refresh-rollups`
maintains pre-aggregated tables on a schedule and the widget reads those.
