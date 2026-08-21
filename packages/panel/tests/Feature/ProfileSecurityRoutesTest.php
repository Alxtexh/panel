<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\PanelRoutes;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;

/**
 * Top-level `/profile` and `/security` (Filament-style), with settings aliases.
 */
final class ProfileSecurityRoutesTest extends TestCase
{
    use RefreshDatabase;

    public function test_top_level_profile_and_security_routes_register(): void
    {
        $admin = app(PanelManager::class)->panel('admin');
        $this->assertNotNull($admin);

        PanelRoutes::register($admin);

        $prefix = $admin->getRouteName();

        $this->assertTrue(Route::has($prefix.'profile'));
        $this->assertTrue(Route::has($prefix.'profile.update'));
        $this->assertTrue(Route::has($prefix.'profile.destroy'));
        $this->assertTrue(Route::has($prefix.'security'));
        $this->assertTrue(Route::has($prefix.'security.password'));

        $this->assertTrue(Route::has($prefix.'settings.profile'));
        $this->assertTrue(Route::has($prefix.'settings.security'));
        $this->assertTrue(Route::has($prefix.'settings.password'));
    }

    public function test_top_level_and_settings_profile_share_the_same_controller(): void
    {
        $admin = app(PanelManager::class)->panel('admin');
        $this->assertNotNull($admin);

        PanelRoutes::register($admin);

        $top = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'profile'
                && in_array('GET', $route->methods(), true),
        );
        $settings = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'settings/profile'
                && in_array('GET', $route->methods(), true),
        );

        $this->assertNotNull($top);
        $this->assertNotNull($settings);
        $this->assertSame($top->getActionName(), $settings->getActionName());
    }

    public function test_account_menu_prefers_top_level_profile_url(): void
    {
        $admin = app(PanelManager::class)->panel('admin');
        $this->assertNotNull($admin);

        PanelRoutes::register($admin);

        $url = route($admin->getRouteName().'profile');
        $this->assertStringEndsWith('/profile', parse_url($url, PHP_URL_PATH) ?: $url);
        $this->assertStringNotContainsString('/settings/profile', $url);
    }
}
