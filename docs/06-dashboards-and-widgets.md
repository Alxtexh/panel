# 6. Dashboards and widgets

## A dashboard

```php
namespace App\Panel\Pages;

use Alxtexh\Panel\Pages\DashboardPage;
use Alxtexh\Panel\Widgets\{StatWidget, ChartWidget, Trend, Period};

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
        ];
    }
}
```

## Stats packing

Default `classic` packing renders `stats()` as one joined `StatStrip`. Optional
`Panel::dashboardLayout('blocks')` (or a page `dashboardLayout()` override)
draws independent section `StatCard`s instead: larger type, soft gradient,
trend chip - the dashboard-01 section-card look without leaving kit widgets.

```php
Panel::make('admin')->dashboardLayout('blocks');
```

## Chart chrome

`ChartCard` carries the dashboard-01 interactive chrome (muted header, period
tabs, collapse / hide) wherever a `ChartWidget` is used: the home dashboard,
resource header widgets, and hand-composed pages. The host still owns data via
props-in / events-out; the card never fetches.

## Shell chrome

`Panel::sidebarVariant('floating'|'inset'|'sidebar')` is panel-wide. Settings,
administration and the dashboard share that shell. Do not mount a second
CLI `AppSidebar` for one route.

## One-off CLI recipe

`npx shadcn-vue@latest add dashboard-01` is a reference for hosts who want a
standalone Acme-style page. PanelKit's default remains kit-composed
`PanelDashboard` with the visual language above.

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

## Rollups

For counters too expensive to compute per request, `panel:refresh-rollups`
maintains pre-aggregated tables on a schedule and the widget reads those.
