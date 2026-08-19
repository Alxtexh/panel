<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\PanelRoutes;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Plugins\DemoAdminPanelPlugin;
use Alxtexh\Panel\Tests\Fixtures\Plugins\DemoConfigPanelPlugin;
use Alxtexh\Panel\Tests\Fixtures\Plugins\DemoPluginPage;
use Alxtexh\Panel\Tests\Fixtures\Plugins\DuplicatePagePlugin;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;

/**
 * Plugin Page classes must be routable after the panel boots.
 */
final class PluginPageRouteTest extends TestCase
{
    use RefreshDatabase;

    protected function defineEnvironment($app): void
    {
        parent::defineEnvironment($app);

        tap($app->make(Repository::class), static function (Repository $config): void {
            $config->set('panel.plugins', [DemoAdminPanelPlugin::class]);
        });
    }

    public function test_plugin_page_is_in_pages_for_after_boot(): void
    {
        $pages = app(PanelManager::class)->pagesFor('admin');

        $this->assertArrayHasKey('demo-plugin', $pages);
        $this->assertSame(DemoPluginPage::class, $pages['demo-plugin']);
    }

    public function test_plugin_page_route_is_mounted_after_boot(): void
    {
        $this->assertTrue(Route::has('panel.pages.demo-plugin'));
    }

    public function test_plugin_page_is_reachable_after_boot(): void
    {
        $user = User::create([
            'name' => 'Operator',
            'email' => 'plugin-page@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user)
            ->get('/demo-plugin')
            ->assertOk()
            ->assertViewHas('page');
    }

    public function test_duplicate_plugin_page_slug_fails_at_registration(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => [DuplicatePagePlugin::class]]);

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('claim the slug');

        app(PanelManager::class)->pagesFor('admin');
    }

    public function test_late_registered_panel_gets_plugin_page_routes(): void
    {
        PanelManager::forgetPlugins();
        config(['panel.plugins' => [DemoConfigPanelPlugin::class]]);

        $panels = app(PanelManager::class);
        $panelId = 'plugin-test-config';

        $panels->registerPanel(
            Panel::make($panelId)
                ->path($panelId)
                ->routeName($panelId)
                ->guard('web')
                ->middleware(['web'])
                ->authMiddleware(['auth:web'])
                ->context(Panel::CONTEXT_TENANT),
        );

        $this->assertArrayHasKey('demo-plugin', $panels->pagesFor($panelId));

        PanelRoutes::register($panels->panel($panelId));

        $route = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === "{$panelId}/demo-plugin",
        );

        $this->assertNotNull($route);
        $this->assertSame("{$panelId}.pages.demo-plugin", $route->getName());
    }

    protected function tearDown(): void
    {
        config(['panel.plugins' => [DemoAdminPanelPlugin::class]]);
        PanelManager::forgetPlugins();

        parent::tearDown();
    }
}
