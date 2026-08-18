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
TableWidget::make('recent')->resource(OrderResource::class)->limit(5);

Panel::make('admin')->discoverWidgets(app_path('Panel/Widgets'));
```

`TableWidget` renders the existing DataTable with a capped list query. The
namespace is optional when the directory is under `app_path()`. An empty
dashboard stays the install default.

## Rollups

For counters too expensive to compute per request, `panel:refresh-rollups`
maintains pre-aggregated tables on a schedule and the widget reads those.
