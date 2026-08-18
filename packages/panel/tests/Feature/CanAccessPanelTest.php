<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Contracts\CanAccessPanel;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelAccess;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;

/**
 * Whole-panel access, and the empty-grants dashboard state.
 */
final class CanAccessPanelTest extends TestCase
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

    public function test_panel_can_access_false_is_forbidden(): void
    {
        $panel = app(PanelManager::class)->panel('admin');
        $panel->canAccess(static fn (): bool => false);

        try {
            $this->get('/posts')->assertForbidden();
        } finally {
            $panel->canAccess(null);
        }
    }

    public function test_user_can_access_panel_false_is_forbidden(): void
    {
        $denied = new class extends User implements CanAccessPanel
        {
            public function canAccessPanel(Panel $panel): bool
            {
                return false;
            }
        };

        $denied->forceFill($this->user->getAttributes());
        $denied->exists = true;
        $denied->setRelation('roles', $this->user->roles);

        $this->actingAs($denied);

        $this->get('/posts')->assertForbidden();
    }

    public function test_empty_grants_is_shared_when_nothing_is_navigable(): void
    {
        $panel = app(PanelManager::class)->panel('admin');

        $this->assertFalse(PanelAccess::emptyGrants($panel, $this->user));

        Gate::before(static fn (): bool => false);

        $this->assertTrue(PanelAccess::emptyGrants($panel, $this->user));

        $props = $this->get('/settings/plans')->assertOk()->viewData('page')['props'];

        $this->assertTrue($props['panelEmptyGrants'] ?? false);
    }
}
