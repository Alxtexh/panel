<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * Operations (Backups, Logs, Monitoring) belong in the sidebar when offered.
 */
final class OperationsNavTest extends TestCase
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

    /** @return list<array<string, mixed>> */
    private function pages(): array
    {
        return $this->get('/posts')->assertOk()->viewData('page')['props']['panelPages'] ?? [];
    }

    public function test_operations_are_absent_without_the_ability(): void
    {
        $titles = array_column($this->pages(), 'title');

        $this->assertNotContains('Backups', $titles);
        $this->assertNotContains('Logs', $titles);
        $this->assertNotContains('Monitoring', $titles);
    }

    public function test_operations_join_the_sidebar_when_offered_and_granted(): void
    {
        $role = Role::findOrCreate('ops', 'web');
        $role->givePermissionTo(Permission::findOrCreate('view_operations', 'web'));
        $this->user->assignRole($role);

        $this->actingAs($this->user->fresh());

        $pages = $this->pages();
        $byTitle = collect($pages)->keyBy('title');

        foreach (['Backups', 'Logs', 'Monitoring'] as $title) {
            $this->assertTrue($byTitle->has($title), "{$title} missing from panelPages.");
            $this->assertSame('Operations', $byTitle[$title]['group'] ?? null);
        }

        $this->assertStringContainsString('operations/backups', (string) $byTitle['Backups']['href']);
        $this->assertStringContainsString('operations/logs', (string) $byTitle['Logs']['href']);
        $this->assertStringContainsString('operations/monitoring', (string) $byTitle['Monitoring']['href']);
    }

    public function test_without_operations_drops_the_nav_group(): void
    {
        $role = Role::findOrCreate('ops', 'web');
        $role->givePermissionTo(Permission::findOrCreate('view_operations', 'web'));
        $this->user->assignRole($role);
        $this->actingAs($this->user->fresh());

        app(PanelManager::class)->panel('admin')->without(['operations']);

        $titles = array_column($this->pages(), 'title');

        $this->assertNotContains('Backups', $titles);
        $this->assertNotContains('Logs', $titles);
        $this->assertNotContains('Monitoring', $titles);
    }
}
