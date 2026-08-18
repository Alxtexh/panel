<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Pages\DirectoryPage;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * Kit Directory defaults are chrome links, not merchandising.
 */
final class DirectoryChromeTest extends TestCase
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

    public function test_chrome_sections_have_no_clients_or_routers(): void
    {
        $labels = $this->allLabels(DirectoryPage::chromeSections());

        $this->assertNotContains('Clients', $labels);
        $this->assertNotContains('Routers', $labels);
        $this->assertNotContains('Coffee', $labels);
        $this->assertNotContains('Catalog', $labels);
    }

    public function test_chrome_includes_settings_and_help_without_grants(): void
    {
        $labels = $this->allLabels(DirectoryPage::chromeSections());

        $this->assertContains('Settings', $labels);
        $this->assertContains('Help', $labels);
        $this->assertNotContains('Backups', $labels);
        $this->assertNotContains('Users', $labels);
    }

    public function test_operations_cards_appear_when_view_operations_is_held(): void
    {
        $role = Role::findOrCreate('ops', 'web');
        $role->givePermissionTo(Permission::findOrCreate('view_operations', 'web'));
        $this->user->assignRole($role);
        $this->actingAs($this->user->fresh());
        request()->setUserResolver(fn () => $this->user->fresh());

        $labels = $this->allLabels(DirectoryPage::chromeSections());

        $this->assertContains('Backups', $labels);
        $this->assertContains('Logs', $labels);
        $this->assertContains('Monitoring', $labels);
    }

    public function test_without_operations_omits_operations_cards(): void
    {
        $role = Role::findOrCreate('ops', 'web');
        $role->givePermissionTo(Permission::findOrCreate('view_operations', 'web'));
        $this->user->assignRole($role);
        $this->actingAs($this->user->fresh());
        request()->setUserResolver(fn () => $this->user->fresh());

        app(PanelManager::class)->panel('admin')->without(['operations']);

        $labels = $this->allLabels(DirectoryPage::chromeSections());

        $this->assertNotContains('Backups', $labels);
        $this->assertContains('Settings', $labels);
    }

    /**
     * @param  list<array{links: list<array{label: string}}}>  $sections
     * @return list<string>
     */
    private function allLabels(array $sections): array
    {
        $labels = [];

        foreach ($sections as $section) {
            foreach ($section['links'] as $link) {
                $labels[] = $link['label'];
            }
        }

        return $labels;
    }
}
