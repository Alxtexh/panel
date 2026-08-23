<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;

final class AppearanceRouteTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::create([
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
            'appearance' => ['theme' => 'light'],
        ]);
    }

    public function test_packaged_appearance_route_persists_preferences(): void
    {
        $this->assertTrue(Route::has('panel.settings.appearance'));

        $this->actingAs($this->user)
            ->putJson('/settings/appearance', ['theme' => 'dark', 'density' => 'compact'])
            ->assertOk()
            ->assertJsonPath('appearance.theme', 'dark');

        $saved = $this->user->fresh()->appearance;

        $this->assertSame('dark', $saved['theme']);
        $this->assertSame('compact', $saved['density']);
    }

    public function test_dashboard_layout_is_ignored_when_user_dashboards_are_off(): void
    {
        $this->actingAs($this->user)
            ->putJson('/settings/appearance', [
                'theme' => 'dark',
                'dashboardLayout' => [
                    'widgets' => [
                        ['id' => 'chart:a', 'span' => 2],
                        ['id' => 'stat:b'],
                    ],
                ],
            ])
            ->assertOk()
            ->assertJsonPath('appearance.theme', 'dark')
            ->assertJsonMissingPath('appearance.dashboardLayout');

        $saved = $this->user->fresh()->appearance;

        $this->assertSame('dark', $saved['theme']);
        $this->assertArrayNotHasKey('dashboardLayout', $saved);
    }

    public function test_dashboard_layout_persists_when_user_dashboards_are_on(): void
    {
        app(PanelManager::class)->panel('admin')->userDashboards();

        $this->actingAs($this->user)
            ->putJson('/settings/appearance', [
                'dashboardLayout' => [
                    'widgets' => [
                        ['id' => 'stat:people', 'span' => 1],
                        ['id' => 'chart:revenue', 'span' => 2, 'hidden' => true],
                        ['kind' => 'table', 'key' => 'recent', 'span' => 2],
                    ],
                ],
            ])
            ->assertOk()
            ->assertJsonPath('appearance.dashboardLayout.widgets.0.id', 'stat:people')
            ->assertJsonPath('appearance.dashboardLayout.widgets.1.id', 'chart:revenue')
            ->assertJsonPath('appearance.dashboardLayout.widgets.1.span', 2)
            ->assertJsonPath('appearance.dashboardLayout.widgets.1.hidden', true)
            ->assertJsonPath('appearance.dashboardLayout.widgets.2.id', 'table:recent');

        $saved = $this->user->fresh()->appearance;

        $this->assertSame('stat:people', $saved['dashboardLayout']['widgets'][0]['id']);
        $this->assertSame(2, $saved['dashboardLayout']['widgets'][1]['span']);
        $this->assertTrue($saved['dashboardLayout']['widgets'][1]['hidden']);
    }

    public function test_legacy_chart_order_still_persists_as_widgets(): void
    {
        app(PanelManager::class)->panel('admin')->userDashboards();

        $this->actingAs($this->user)
            ->putJson('/settings/appearance', [
                'dashboardLayout' => ['chartOrder' => ['revenue', 'signups']],
            ])
            ->assertOk()
            ->assertJsonPath('appearance.dashboardLayout.widgets.0.id', 'chart:revenue')
            ->assertJsonPath('appearance.dashboardLayout.widgets.1.id', 'chart:signups');
    }

    public function test_appearance_is_shared_on_panel_responses(): void
    {
        $this->user->appearance = ['theme' => 'dark'];
        $this->user->save();

        $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('appearance.theme', 'dark'));
    }

    public function test_panel_pages_are_shared_when_not_overridden(): void
    {
        $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->has('panelPages'));
    }
}
