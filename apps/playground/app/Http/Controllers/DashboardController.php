<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientSession;
use App\Models\Router;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Support\TenantContext;
use PanelKit\Panel\Widgets\StatWidget;

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
 */
final class DashboardController extends Controller
{
    public function index(): Response
    {
        $tenantKey = (string) (app(TenantContext::class)->currentKey() ?? 'none');

        $widgets = $this->widgets();

        $props = [
            'widgets' => array_map(static fn (StatWidget $w): array => $w->toArray(), $widgets),
        ];

        foreach ($widgets as $widget) {
            // A separate deferred prop per widget, in its own group, so they
            // resolve independently rather than as one blocking batch.
            $props["stat_{$widget->key}"] = Inertia::defer(
                fn (): array => $widget->resolve($tenantKey),
                $widget->key,
            );
        }

        return Inertia::render('Dashboard', $props);
    }

    /** @return list<StatWidget> */
    private function widgets(): array
    {
        return [
            StatWidget::make('clients_total', 'Total clients')
                ->value(fn (): int => Client::query()->count())
                ->description('All subscribers'),

            StatWidget::make('clients_active', 'Active')
                ->value(fn (): int => Client::query()->where('status', 'active')->count()),

            StatWidget::make('clients_expired', 'Expired')
                ->value(fn (): int => Client::query()->where('status', 'expired')->count()),

            StatWidget::make('sessions_live', 'Live sessions')
                ->value(fn (): int => ClientSession::query()->whereNull('ended_at')->count())
                ->description('Currently online'),

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
