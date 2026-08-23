<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Settings belongs in the sidebar on every fresh panel share by default.
 */
final class SettingsNavTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    /** @return array{panelPages: list<array<string, mixed>>, panel: array<string, mixed>} */
    private function shared(): array
    {
        $props = $this->get('/posts')->assertOk()->viewData('page')['props'];

        return [
            'panelPages' => $props['panelPages'] ?? [],
            'panel' => $props['panel'] ?? [],
        ];
    }

    public function test_fresh_panel_shares_settings_in_the_system_nav_group(): void
    {
        $shared = $this->shared();
        $byKey = collect($shared['panelPages'])->keyBy('key');

        $this->assertTrue($byKey->has('settings'), 'Settings missing from panelPages.');
        $this->assertSame('Settings', $byKey['settings']['title'] ?? null);
        $this->assertSame('System', $byKey['settings']['group'] ?? null);
        $this->assertStringContainsString('/settings', (string) $byKey['settings']['href']);

        $this->assertTrue($shared['panel']['settingsInSidebar'] ?? false);
        $this->assertNotEmpty($shared['panel']['settings'] ?? null);
    }

    public function test_sidebar_settings_false_drops_the_nav_entry_and_restores_the_menu_flag(): void
    {
        app(PanelManager::class)->panel('admin')->sidebarSettings(false);

        $shared = $this->shared();
        $titles = array_column($shared['panelPages'], 'title');

        $this->assertNotContains('Settings', $titles);
        $this->assertFalse($shared['panel']['settingsInSidebar'] ?? true);
        $this->assertNotEmpty($shared['panel']['settings'] ?? null);
    }
}
