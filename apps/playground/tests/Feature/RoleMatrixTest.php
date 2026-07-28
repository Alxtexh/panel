<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Role;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\Abilities;
use Spatie\Permission\Models\Permission;
use Tests\TestCase;

/**
 * The screen that edits what everybody may do.
 *
 * THE SCREEN CAN GRANT ITSELF ANYTHING, which is why `manage_roles` is a
 * separate ability rather than something implied by being an administrator.
 * Somebody who runs the subscriber base all day should be able to be denied it,
 * and the first two tests are that denial.
 *
 * The rest are about the payload. A checkbox form submits an array of strings,
 * so the request can name anything - including abilities that do not exist,
 * which are not harmless: an unknown name sits in the role looking granted,
 * survives every later save, and becomes live the day a resource of that name is
 * registered.
 */
final class RoleMatrixTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private Role $role;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        /*
         * AN ANCHOR ROLE FIRST, so the role under test is not the FIRST one.
         *
         * The first role in an organisation is now protected from editing as
         * well as from deletion - it is what stays assignable when everything
         * else is misconfigured, and a first role that can be emptied is the
         * same lockout by a different door. These cases are about ordinary
         * roles, so they need an ordinary one.
         */
        $anchor = new Role(['name' => 'Founders', 'guard_name' => config('auth.defaults.guard', 'web')]);
        $anchor->forceFill(['tenant_id' => $this->tenant->id])->save();

        $this->role = new Role(['name' => 'Support', 'guard_name' => config('auth.defaults.guard', 'web')]);
        $this->role->forceFill(['tenant_id' => $this->tenant->id])->save();

        Permission::findOrCreate(Abilities::name('viewAny', 'clients'));
        $this->role->syncPermissions([Abilities::name('viewAny', 'clients')]);
    }

    /** The ability NAMES a role grants, since `permissions` is a relation. */
    private function granted(Role $role): array
    {
        return $role->fresh()->permissions->pluck('name')->sort()->values()->all();
    }

    /** @param list<string> $abilities */
    private function manager(array $abilities = ['manage_roles']): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    /* -------------------------------------------------------------- the guard */

    public function test_the_matrix_needs_manage_roles(): void
    {
        $withEverythingElse = $this->manager(
            array_values(array_diff(Abilities::all(), ['manage_roles'])),
        );

        $this->actingAs($withEverythingElse)->get('/settings/roles')->assertForbidden();
    }

    public function test_saving_needs_manage_roles(): void
    {
        $user = $this->manager(array_values(array_diff(Abilities::all(), ['manage_roles'])));

        $this->actingAs($user)
            ->put("/settings/roles/{$this->role->id}", ['name' => 'Support', 'permissions' => Abilities::all()])
            ->assertForbidden();

        $this->assertSame([Abilities::name('viewAny', 'clients')], $this->granted($this->role));
    }

    public function test_a_manager_can_open_it(): void
    {
        $this->actingAs($this->manager())->get('/settings/roles')->assertOk();
    }

    /* ------------------------------------------------------------ the payload */

    public function test_permissions_are_saved(): void
    {
        $wanted = [
            Abilities::name('viewAny', 'clients'),
            Abilities::name('view', 'clients'),
            Abilities::name('update', 'clients'),
        ];

        $this->actingAs($this->manager())
            ->put("/settings/roles/{$this->role->id}", ['name' => 'Support', 'permissions' => $wanted])
            ->assertRedirect();

        // Compared as a SET. `granted()` sorts, because a role's abilities come
        // back in whatever order the pivot join yields and nothing about the
        // panel depends on that order - asserting it would be a test of the
        // database's row ordering wearing a permissions test's name.
        sort($wanted);

        $this->assertSame($wanted, $this->granted($this->role));
    }

    /**
     * AN UNKNOWN ABILITY IS DISCARDED, not stored. See the class note - a name
     * the panel does not define is a landmine, not a no-op.
     */
    public function test_an_ability_that_does_not_exist_is_discarded(): void
    {
        $this->actingAs($this->manager())
            ->put("/settings/roles/{$this->role->id}", [
                'name' => 'Support',
                'permissions' => [Abilities::name('view', 'clients'), 'delete_everything', 'update_invoices'],
            ])
            ->assertRedirect();

        $this->assertSame([Abilities::name('view', 'clients')], $this->granted($this->role));
    }

    /** Clearing every box is a legitimate edit - `present`, not `required`. */
    public function test_a_role_can_be_emptied(): void
    {
        $this->actingAs($this->manager())
            ->put("/settings/roles/{$this->role->id}", ['name' => 'Support', 'permissions' => []])
            ->assertRedirect();

        $this->assertSame([], $this->granted($this->role));
    }

    /* ------------------------------------------------------------- superusers */

    /**
     * A `grants_all` ROLE REFUSES PER-ABILITY EDITS, because `grants()` ignores
     * the array entirely for such a role. Accepting the edit would show boxes
     * being unticked while the role went on granting them - a permission editor
     * that misreports permissions.
     */
    public function test_a_superuser_role_cannot_be_edited_ability_by_ability(): void
    {
        $admin = new Role(['name' => 'Administrator', 'guard_name' => config('auth.defaults.guard', 'web')]);
        $admin->forceFill(['tenant_id' => $this->tenant->id, 'grants_all' => true])->save();
        foreach ((array) (Abilities::all()) as $a) { \Spatie\Permission\Models\Permission::findOrCreate($a); }
        $admin->syncPermissions(Abilities::all());

        $this->actingAs($this->manager())
            ->put("/settings/roles/{$admin->id}", ['name' => 'Administrator', 'permissions' => []])
            ->assertStatus(422);

        $this->assertTrue($admin->fresh()->grants(Abilities::name('forceDelete', 'clients')));
    }

    /** And it grants abilities that did not exist when it was created. */
    public function test_a_superuser_role_grants_abilities_invented_later(): void
    {
        $admin = new Role(['name' => 'Administrator', 'guard_name' => config('auth.defaults.guard', 'web')]);
        // Deliberately granted nothing - `grants_all` is what makes it a
        // superuser, not the contents of the pivot.
        $admin->forceFill(['tenant_id' => $this->tenant->id, 'grants_all' => true])->save();

        $this->assertTrue(
            $admin->grants('some_ability_added_next_year'),
            'That is the point of the flag - it cannot fall behind the registry.',
        );
    }

    /* ------------------------------------------------------------- isolation */

    /** Another organisation's role is not visible, let alone editable. */
    public function test_another_tenants_role_cannot_be_edited(): void
    {
        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $theirs = new Role(['name' => 'Theirs', 'guard_name' => config('auth.defaults.guard', 'web')]);
        $theirs->forceFill(['tenant_id' => $other->id])->save();
        foreach ((array) ([]) as $a) { \Spatie\Permission\Models\Permission::findOrCreate($a); }
        $theirs->syncPermissions([]);

        $this->actingAs($this->manager())
            ->put("/settings/roles/{$theirs->id}", ['name' => 'Hijacked', 'permissions' => Abilities::all()])
            ->assertNotFound();

        $this->assertSame('Theirs', $theirs->fresh()->name);
        $this->assertSame([], $this->granted($theirs));
    }
}
