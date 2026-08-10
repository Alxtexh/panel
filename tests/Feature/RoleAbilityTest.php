<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\Abilities;
use Alxtexh\Panel\Support\Ability;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * What a role actually grants, underneath every policy in the package.
 *
 * `TenantResourcePolicy` - the base class `make:panel-resource` generates
 * against - answers every ability by deriving a permission NAME and asking the
 * user's roles for it. So the whole authorisation story rests on two things
 * being true: the name is derived the way everybody assumes, and holding it is
 * what grants the action.
 *
 * THE NAME IS THE PART THAT SILENTLY DRIFTS. It is assembled from an action and
 * a resource key, never written down in one place, and a permission row spelled
 * even slightly differently is a permission nobody holds - which presents as a
 * 403 on a screen the role was supposed to open, and sends people looking at
 * the policy rather than at the spelling.
 *
 * TESTED DIRECTLY RATHER THAN THROUGH A SCREEN, deliberately. A role-gated
 * fixture resource would have to be registered, and registering one drags it
 * into the cross-tenant matrix - which builds its own user, holding no roles,
 * and would then read a legitimate 403 as a leak. The mapping is the property;
 * this asserts the mapping.
 */
final class RoleAbilityTest extends TestCase
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
    }

    /**
     * THE SHAPE, PINNED. `view_any_articles`, not `viewAny_articles` or
     * `articles:view-any`. Anybody seeding permissions by hand - and
     * `panel:permissions sync` aside, people do - needs this written down.
     */
    public function test_an_ability_name_is_derived_from_the_action_and_the_key(): void
    {
        $this->assertSame('view_any_articles', Abilities::name('viewAny', 'articles'));
        $this->assertSame('update_articles', Abilities::name('update', 'articles'));
        $this->assertSame('force_delete_articles', Abilities::name('forceDelete', 'articles'));

        // Hyphens in a key become underscores, because a permission name is
        // not a URL segment even though the key it comes from is.
        $this->assertSame('view_editable_plans', Abilities::name('view', 'editable-plans'));
    }

    public function test_a_user_with_no_role_holds_nothing(): void
    {
        $this->assertFalse(Ability::allows($this->user, 'view_any_articles'));
    }

    public function test_a_role_grants_exactly_what_it_carries(): void
    {
        $role = Role::findOrCreate('reader', 'web');
        $role->givePermissionTo(Permission::findOrCreate('view_any_articles', 'web'));

        $this->user->assignRole($role);

        $this->assertTrue(Ability::allows($this->user->fresh(), 'view_any_articles'));

        // And nothing it does not carry - reading is not writing.
        $this->assertFalse(Ability::allows($this->user->fresh(), 'update_articles'));
    }

    /**
     * ONE RESOURCE'S PERMISSION DOES NOT REACH ANOTHER'S.
     *
     * The names share a prefix by construction, so a check written with a
     * `like` or a `str_contains` anywhere in the chain would grant across
     * resources - and every resource would inherit the most permissive role in
     * the installation.
     */
    public function test_a_permission_on_one_resource_does_not_reach_another(): void
    {
        $role = Role::findOrCreate('articles-writer', 'web');
        $role->givePermissionTo(Permission::findOrCreate('update_articles', 'web'));

        $this->user->assignRole($role);

        $this->assertTrue(Ability::allows($this->user->fresh(), 'update_articles'));
        $this->assertFalse(Ability::allows($this->user->fresh(), 'update_posts'));
        $this->assertFalse(Ability::allows($this->user->fresh(), 'update_notes'));
    }

    /**
     * DELETE DOES NOT GRANT FORCE DELETE.
     *
     * Separate names on purpose: removing a record and destroying it are
     * different powers, and the second has no undo. A role that could do the
     * first must not silently do the second.
     */
    public function test_delete_does_not_grant_force_delete(): void
    {
        $role = Role::findOrCreate('remover', 'web');
        $role->givePermissionTo(Permission::findOrCreate('delete_articles', 'web'));

        $this->user->assignRole($role);

        $this->assertTrue(Ability::allows($this->user->fresh(), 'delete_articles'));
        $this->assertFalse(Ability::allows($this->user->fresh(), 'force_delete_articles'));
        $this->assertFalse(Ability::allows($this->user->fresh(), 'restore_articles'));
    }

    public function test_a_guest_holds_nothing(): void
    {
        $this->assertFalse(Ability::allows(null, 'view_any_articles'));
    }
}
