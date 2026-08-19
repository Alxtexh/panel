<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

final class TenantWorkspaceSwitchingTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $admin;

    private User $operator;

    protected function defineEnvironment($app): void
    {
        parent::defineEnvironment($app);

        tap($app->make(Repository::class), static function (Repository $config): void {
            $config->set('panel.tenancy.model', Tenant::class);

            $config->set('permission.teams', true);
            $config->set('permission.column_names.team_foreign_key', 'tenant_id');
        });
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'Tenant A', 'slug' => 'tenant-a']);
        $this->tenantB = Tenant::create(['name' => 'Tenant B', 'slug' => 'tenant-b']);

        $this->admin = User::create([
            'tenant_id' => $this->tenantA->id,
            'name' => 'Admin',
            'email' => 'admin@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->operator = User::create([
            'tenant_id' => $this->tenantA->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->admin->memberships()->attach([$this->tenantA->id, $this->tenantB->id]);
        $this->operator->memberships()->attach([$this->tenantA->id, $this->tenantB->id]);

        $this->seedArticles();

        $this->grantManageRolesToAdmin();
    }

    private function seedArticles(): void
    {
        for ($i = 0; $i < 3; $i++) {
            Article::withoutGlobalScopes()->create([
                'tenant_id' => $this->tenantA->id,
                'title' => "Alpha {$i}",
            ]);
        }

        for ($i = 0; $i < 4; $i++) {
            Article::withoutGlobalScopes()->create([
                'tenant_id' => $this->tenantB->id,
                'title' => "Beta {$i}",
            ]);
        }
    }

    private function grantManageRolesToAdmin(): void
    {
        $registrar = app(PermissionRegistrar::class);
        $registrar->setPermissionsTeamId($this->tenantA->id);

        $role = Role::findOrCreate('workspace-admin', 'web');
        $role->givePermissionTo(Permission::findOrCreate('manage_roles', 'web'));

        $this->admin->assignRole($role);
    }

    private function articleTitlesFromInertiaResponse($response): array
    {
        $page = $response->viewData('page');

        return array_column($page['props']['records'] ?? [], 'title');
    }

    public function test_non_admin_cannot_switch_workspaces(): void
    {
        $this->actingAs($this->operator);

        $this->put('/settings/workspaces/current', [
            'workspace' => $this->tenantB->id,
        ])->assertForbidden();

        $this->assertSame($this->tenantA->id, $this->operator->fresh()->tenant_id);
    }

    public function test_switching_workspace_updates_tenant_scoped_results(): void
    {
        $this->actingAs($this->admin);

        $first = $this->get('/articles')->assertOk();
        $firstTitles = $this->articleTitlesFromInertiaResponse($first);

        $this->assertCount(3, $firstTitles);
        foreach ($firstTitles as $title) {
            $this->assertNotNull($title);
            $this->assertStringStartsWith('Alpha', $title);
        }

        $this->put('/settings/workspaces/current', [
            'workspace' => $this->tenantB->id,
        ])->assertRedirect();

        $second = $this->get('/articles')->assertOk();
        $secondTitles = $this->articleTitlesFromInertiaResponse($second);

        $this->assertCount(4, $secondTitles);
        foreach ($secondTitles as $title) {
            $this->assertNotNull($title);
            $this->assertStringStartsWith('Beta', $title);
        }

        $this->assertSame($this->tenantB->id, $this->admin->fresh()->tenant_id);
    }

    public function test_switching_persists_across_multiple_requests(): void
    {
        $this->actingAs($this->admin);

        $this->put('/settings/workspaces/current', [
            'workspace' => $this->tenantB->id,
        ])->assertRedirect();

        $this->get('/articles')->assertOk();
        $third = $this->get('/articles')->assertOk();

        $titles = $this->articleTitlesFromInertiaResponse($third);

        $this->assertCount(4, $titles);
        foreach ($titles as $title) {
            $this->assertNotNull($title);
            $this->assertStringStartsWith('Beta', $title);
        }
    }
}

