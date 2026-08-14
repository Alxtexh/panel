<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Providers;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

/**
 * Two panels sharing one login URL, for `SharedLoginTest`.
 *
 * PANEL IDS ARE DISTINCT FROM `FixturePanelProvider`'S. Both providers can
 * be loaded in the same boot sequence: `operator` and `member` do not collide
 * with `admin` and `second`, so the unclaimed-route check between the two
 * portal sets has nothing to veto.
 *
 * `operator` USES THE SAME `web` GUARD AS `admin`. That is not a mistake - it
 * mirrors the real pattern where a platform has one staff table and two portals
 * (say, super-admin and regular-admin). The shared login routes carry their own
 * panel ID list (`['operator', 'member']`) so only those two guards are tried;
 * the admin panel's guard is never consulted from `/portal`.
 */
final class SharedLoginPanelProvider extends ServiceProvider
{
    public function boot(PanelManager $panels): void
    {
        Route::get('/operator/login', static fn () => 'operator-login')->name('operator-login');
        Route::get('/member/login', static fn () => 'member-login')->name('member-login');

        $panels->registerPanel(
            Panel::make('operator')
                ->path('operator')
                ->routeName('operator')
                ->guard('web')
                ->middleware(['web'])
                ->authMiddleware(['auth:web'])
                ->sharedLogin('portal'),
        );

        $panels->registerPanel(
            Panel::make('member')
                ->path('member')
                ->routeName('member')
                ->guard('members')
                ->middleware(['web'])
                ->authMiddleware(['auth:members'])
                ->sharedLogin('portal'),
        );
    }
}
