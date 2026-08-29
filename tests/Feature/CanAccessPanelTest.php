<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Contracts\CanAccessPanel;
use Alxtexh\Panel\Models\Role;
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
        $this->assertSame(__('panel::grants.empty.title'), $props['panelEmptyGrantsHint']['title'] ?? null);
        $this->assertContains(
            'php artisan panel:make-user',
            $props['panelEmptyGrantsHint']['commands'] ?? [],
        );
        $this->assertContains(
            'php artisan panel:permissions sync',
            $props['panelEmptyGrantsHint']['commands'] ?? [],
        );
        $this->assertContains(
            'php artisan panel:permissions grant --email=you@example.com',
            $props['panelEmptyGrantsHint']['commands'] ?? [],
        );
    }

    /**
     * A role with `grants_all` must never see the empty-grants hint, even
     * when nothing happens to be navigable yet.
     *
     * Found running a fresh install: `emptyGrants()` used to check
     * `method_exists($user, 'grantsEverything')`, but `grantsEverything()`
     * is `Role::grantsEverything()`, never a method a user model has - so
     * that check was always false, and the installer's own first
     * Administrator (`grants_all` from `panel:make-user`) saw "you have no
     * grants" on the very dashboard it was just told it fully controlled.
     */
    public function test_empty_grants_is_false_for_grants_all_even_with_nothing_navigable(): void
    {
        $panel = app(PanelManager::class)->panel('admin');

        $role = Role::findOrCreate('Administrator', 'web');
        $role->forceFill(['grants_all' => true])->save();
        $this->user->assignRole($role);

        Gate::before(static fn (): bool => false);

        $this->assertFalse(PanelAccess::emptyGrants($panel, $this->user->fresh()));
    }

    public function test_empty_grants_copy_is_in_the_kit_empty_state(): void
    {
        $vue = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/client/inertia/components/EmptyGrantsNotice.vue'
        );

        $this->assertStringContainsString("t('grants.empty.title')", $vue);
        $this->assertStringContainsString("t('grants.empty.reason')", $vue);
        $this->assertStringContainsString('panel:permissions', $vue);
        $this->assertStringNotContainsString('—', $vue);
    }
}
