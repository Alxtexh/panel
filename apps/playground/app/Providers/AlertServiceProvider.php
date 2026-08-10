<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\Client;
use App\Models\Router;
use DateTimeImmutable;
use Illuminate\Support\ServiceProvider;
use Alxtexh\Panel\Alerts\Alert;
use Alxtexh\Panel\Alerts\AlertRule;
use Alxtexh\Panel\PanelManager;

/**
 * What this ISP watches, declared where an application declares things.
 *
 * THESE USED TO LIVE INSIDE THE BELL'S OWN CONTROLLER, which is exactly why the
 * bell could not ship: `Router` and `Client` are this application's models, and
 * a packaged endpoint cannot name them. Now the package resolves whatever is in
 * the registry and this is the only file that knows what an ISP considers wrong.
 *
 * A DIFFERENT BUSINESS REGISTERS DIFFERENT RULES and gets the same bell. That is
 * the whole difference between a demo and a framework.
 */
final class AlertServiceProvider extends ServiceProvider
{
    public function boot(PanelManager $panels): void
    {
        $now = new DateTimeImmutable;

        $panels->alertRule(AlertRule::make('routers_offline', function (): ?Alert {
            $count = Router::query()->where('status', 'offline')->count();

            if ($count === 0) {
                return null;
            }

            return Alert::make(
                'routers_offline',
                Alert::DANGER,
                $count === 1 ? '1 router is offline' : "{$count} routers are offline",
                'Subscribers served by these routers cannot connect.',
                '/routers?status=offline',
                $count,
            );
        }));

        $panels->alertRule(AlertRule::make('routers_degraded', function (): ?Alert {
            $count = Router::query()->where('status', 'degraded')->count();

            if ($count === 0) {
                return null;
            }

            return Alert::make(
                'routers_degraded',
                Alert::WARNING,
                "{$count} routers are degraded",
                'Reachable, but not performing normally.',
                '/routers?status=degraded',
                $count,
            );
        }));

        /*
         * THE TWO CAPPED RULES. `countUpTo` is the package's now - see the note
         * on it. On this estate the expiry rule matches 84,846 rows, and an
         * exact count of them costs 84,846 steps whatever the index says.
         */
        $panels->alertRule(AlertRule::make('expiring_soon', function () use ($now): ?Alert {
            $count = AlertRule::countUpTo(Client::query()
                ->whereBetween('expiry_date', [
                    $now->format('Y-m-d H:i:s'),
                    $now->modify('+7 days')->format('Y-m-d H:i:s'),
                ])
                ->toBase());

            if ($count === 0) {
                return null;
            }

            return Alert::make(
                'expiring_soon',
                Alert::WARNING,
                AlertRule::describeCount($count).' subscriptions expire within 7 days',
                'Renew or contact these subscribers before they lapse.',
                '/clients',
                $count,
            );
        }));

        $panels->alertRule(AlertRule::make('lapsed', function () use ($now): ?Alert {
            $count = AlertRule::countUpTo(Client::query()
                ->where('status', 'active')
                ->where('expiry_date', '<', $now->format('Y-m-d H:i:s'))
                ->toBase());

            if ($count === 0) {
                return null;
            }

            // Active but past expiry: someone is receiving service they are no
            // longer paying for, which is a billing problem rather than a
            // connectivity one.
            return Alert::make(
                'lapsed',
                Alert::DANGER,
                AlertRule::describeCount($count).' active subscribers are past their expiry date',
                'These are still connected but their subscription has lapsed.',
                '/clients?status=active',
                $count,
            );
        }));
    }
}
