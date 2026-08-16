<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\Middleware\SharePanelProps;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\TestCase;
use Inertia\Inertia;
use RuntimeException;

/**
 * Login chrome is a kit option, not five marketing apps.
 *
 * `Panel::loginLayout()` maps the shadcn/vue login-01..05 blocks. Default
 * `simple` is the previous centred form so a host that never called it does
 * not jump. Invalid names throw at registration.
 */
final class LoginLayoutTest extends TestCase
{
    public function test_login_layout_defaults_to_simple(): void
    {
        $panel = Panel::make('layout-default')
            ->path('layout-default')
            ->guard('web')
            ->middleware(['web']);

        $this->assertSame('simple', $panel->getLoginLayout());
        $this->assertSame('centered', $panel->getAuthLayout());
    }

    public function test_each_public_login_layout_is_accepted(): void
    {
        foreach (Panel::LOGIN_LAYOUTS as $id) {
            $panel = Panel::make('layout-'.$id)
                ->path('layout-'.$id)
                ->guard('web')
                ->middleware(['web'])
                ->loginLayout($id);

            $this->assertSame($id, $panel->getLoginLayout());
        }
    }

    public function test_an_unknown_login_layout_is_refused(): void
    {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Unknown login layout [hero].');

        Panel::make('badlogin')->loginLayout('hero');
    }

    public function test_auth_layout_split_maps_to_login_layout_split(): void
    {
        $panel = Panel::make('legacy-split')
            ->path('legacy-split')
            ->guard('web')
            ->middleware(['web'])
            ->authLayout('split');

        $this->assertSame('split', $panel->getLoginLayout());
    }

    public function test_auth_layout_showcase_is_kept_so_pitch_portals_do_not_jump(): void
    {
        $panel = Panel::make('legacy-showcase')
            ->path('legacy-showcase')
            ->guard('web')
            ->middleware(['web'])
            ->authLayout('showcase');

        $this->assertSame('showcase', $panel->getLoginLayout());
        $this->assertSame('showcase', $panel->getAuthLayout());
    }

    public function test_login_layout_is_shared_with_the_client(): void
    {
        app(PanelManager::class)->registerPanel(
            Panel::make('layout-card')
                ->path('layout-card')
                ->guard('web')
                ->middleware(['web'])
                ->loginLayout('card'),
        );

        app(PanelManager::class)->usePanel('layout-card');

        (new SharePanelProps)->handle(request(), static fn () => response(''));

        $shared = array_map(
            static fn (mixed $value): mixed => is_callable($value) ? $value() : $value,
            Inertia::getShared(),
        );

        $this->assertSame('card', $shared['panel']['loginLayout']);
        $this->assertSame('split', $shared['panel']['authLayout']);
    }

    public function test_debug_query_can_preview_another_login_layout(): void
    {
        app(PanelManager::class)->registerPanel(
            Panel::make('layout-preview')
                ->path('layout-preview')
                ->guard('web')
                ->middleware(['web'])
                ->loginLayout('simple'),
        );

        app(PanelManager::class)->usePanel('layout-preview');

        config(['app.debug' => true]);
        request()->query->set('loginLayout', 'muted');

        (new SharePanelProps)->handle(request(), static fn () => response(''));

        $shared = array_map(
            static fn (mixed $value): mixed => is_callable($value) ? $value() : $value,
            Inertia::getShared(),
        );

        $this->assertSame('muted', $shared['panel']['loginLayout']);
    }

    public function test_debug_query_is_ignored_when_debug_is_off(): void
    {
        app(PanelManager::class)->registerPanel(
            Panel::make('layout-prod')
                ->path('layout-prod')
                ->guard('web')
                ->middleware(['web'])
                ->loginLayout('card'),
        );

        app(PanelManager::class)->usePanel('layout-prod');

        config(['app.debug' => false]);
        request()->query->set('loginLayout', 'split');

        (new SharePanelProps)->handle(request(), static fn () => response(''));

        $shared = array_map(
            static fn (mixed $value): mixed => is_callable($value) ? $value() : $value,
            Inertia::getShared(),
        );

        $this->assertSame('card', $shared['panel']['loginLayout']);
    }
}
