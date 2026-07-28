<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Role;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * One account and one role always survive.
 *
 * THE FAILURE THIS PREVENTS HAS NO IN-PANEL RECOVERY, which is what separates it
 * from ordinary destructive actions. An administrator can delete every other
 * account and then leave, or delete every role, and each step looks deliberate
 * and reasonable. The end state is an organisation whose data is intact, whose
 * panel runs perfectly, and which nobody on earth can open - fixable only from a
 * console on the server.
 *
 * PROTECTION IS BY AGE, NOT A FLAG. A flag can be cleared, and it would be
 * cleared at exactly the moment somebody is doing something drastic. "The oldest
 * row" cannot be turned off.
 *
 * The UI hides both buttons; these tests are about the SERVER refusing, because
 * hiding a button is a courtesy and the request can still be made by hand.
 */
final class FirstUserAndRoleProtectionTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private Role $firstRole;

    private User $firstUser;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        $this->firstRole = $this->role('Founders', ['manage_roles']);

        $this->firstUser = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        \Illuminate\Support\Facades\DB::table('model_has_roles')->updateOrInsert([
            'role_id' => $this->firstRole->getKey(),
            'model_type' => User::class,
            'model_id' => $this->firstUser->getKey(),
            'tenant_id' => $this->tenant->id,
        ], []);
    }

    /** @param list<string> $abilities */
    private function role(string $name, array $abilities): Role
    {
        $role = new Role(['name' => $name, 'guard_name' => config('auth.defaults.guard', 'web')]);
        $role->forceFill(['tenant_id' => $this->tenant->id])->save();
        foreach ((array) ($abilities) as $a) { \Spatie\Permission\Models\Permission::findOrCreate($a); }
        $role->syncPermissions($abilities);

        return $role;
    }

    /* ------------------------------------------------------------------ roles */

    public function test_the_first_role_is_the_oldest_one(): void
    {
        $second = $this->role('Later', []);

        $this->assertTrue($this->firstRole->isProtected());
        $this->assertFalse($second->isProtected());
    }

    public function test_the_first_role_cannot_be_deleted(): void
    {
        // Nobody holds it, and it grants nothing special - so the ONLY reason to
        // refuse is that it is first.
        $manager = $this->managerInAnotherRole();

        $this->actingAs($manager)
            ->delete("/settings/roles/{$this->firstRole->id}")
            ->assertSessionHasErrors('role');

        $this->assertNotNull(Role::query()->find($this->firstRole->id));
    }

    /** A later role with nobody in it deletes normally - the guard is narrow. */
    public function test_a_later_unheld_role_can_still_be_deleted(): void
    {
        $doomed = $this->role('Temporary', []);

        $this->actingAs($this->firstUser)
            ->delete("/settings/roles/{$doomed->id}")
            ->assertRedirect();

        $this->assertNull(Role::query()->find($doomed->id));
    }

    /* ------------------------------------------------------------------ users */

    public function test_the_first_user_is_the_oldest_in_the_tenant(): void
    {
        $second = User::factory()->create(['tenant_id' => $this->tenant->id]);

        $this->assertTrue($this->firstUser->isProtected());
        $this->assertFalse($second->isProtected());
    }

    /**
     * "First" IS PER TENANT. Another organisation's oldest account is not this
     * organisation's, and a global `orderBy('id')` would protect exactly one
     * account across the whole installation and leave every other tenant able to
     * empty itself.
     */
    public function test_each_tenant_has_its_own_first_user(): void
    {
        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $theirFirst = User::factory()->create(['tenant_id' => $other->id]);

        $this->assertTrue($this->firstUser->isProtected());
        $this->assertTrue($theirFirst->isProtected(), 'Every tenant keeps one account.');
    }

    public function test_the_first_user_cannot_be_deleted(): void
    {
        $manager = User::factory()
            ->withAbilities(Abilities::all())
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $this->actingAs($manager)
            ->delete("/users/{$this->firstUser->id}")
            ->assertForbidden();

        $this->assertNotNull(User::query()->find($this->firstUser->id));
    }

    /** And nobody can delete themselves, first or not. */
    public function test_a_user_cannot_delete_themselves(): void
    {
        $manager = User::factory()
            ->withAbilities(Abilities::all())
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $this->actingAs($manager)
            ->delete("/users/{$manager->id}")
            ->assertForbidden();

        $this->assertNotNull(User::query()->find($manager->id));
    }

    /** A later colleague deletes normally - again, the guard is narrow. */
    public function test_a_later_colleague_can_be_deleted(): void
    {
        $manager = User::factory()
            ->withAbilities(Abilities::all())
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $doomed = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($manager)
            ->delete("/users/{$doomed->id}")
            ->assertRedirect();

        $this->assertNull(User::query()->find($doomed->id));
    }

    private function managerInAnotherRole(): User
    {
        return User::factory()
            ->withAbilities(['manage_roles'], 'managers')
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }
}
