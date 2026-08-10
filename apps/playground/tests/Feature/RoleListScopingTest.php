<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Models\Role;
use Spatie\Permission\Models\Permission;
use Tests\TestCase;

/**
 * The two screens that LIST roles show one organisation's roles.
 *
 * THIS IS A REGRESSION TEST FOR A REAL LEAK, introduced by moving to Spatie and
 * caught after the move. The hand-rolled Role model carried a tenant global
 * scope; Spatie's does not. Its teams feature confines permission CHECKS to a
 * tenant through the registrar and puts no scope whatever on the model, so
 * `Role::query()->get()` - which read as safe, and had read as safe for the
 * whole life of the old model - silently began returning every organisation's
 * roles to every organisation's administrator.
 *
 * A GLOBAL SCOPE IS NOT THE FIX, which is why this is a test rather than one
 * line in the model. Spatie's registrar eager-loads roles through Permission and
 * caches the result for the whole installation at once; a scoped load would fill
 * that shared cache from whichever tenant happened to warm it and hand the
 * result to everybody else. The scoping has to be at the query, so what protects
 * it has to be a test at the query.
 *
 * THE HEADCOUNTS ARE ASSERTED TOO. `$role->users()` filters the pivot by the
 * registrar's ambient team id, so it returns zero for every role whenever the
 * middleware that sets it has not run - a screen that reports an empty
 * organisation rather than failing.
 */
final class RoleListScopingTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        // Named distinctively so an assertion cannot pass by coincidence.
        $this->role($this->acme, 'Acme Founders');
        $support = $this->role($this->acme, 'Acme Support');
        $this->role($this->rival, 'Rival Founders');

        $this->admin = User::factory()
            ->withAbilities(['manage_roles'])
            ->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        /*
         * The admin is put into a SECOND role, which is both what makes the
         * headcount below non-zero and the shape the old schema could not hold
         * at all: one person, two roles.
         */
        DB::table('model_has_roles')->updateOrInsert([
            'role_id' => $support->getKey(),
            'model_type' => User::class,
            'model_id' => $this->admin->getKey(),
            'tenant_id' => $this->acme->id,
        ], []);
    }

    private function role(Tenant $tenant, string $name): Role
    {
        $role = new Role(['name' => $name, 'guard_name' => config('auth.defaults.guard', 'web')]);
        $role->forceFill(['tenant_id' => $tenant->id])->save();

        Permission::findOrCreate('manage_roles');
        $role->syncPermissions(['manage_roles']);

        return $role;
    }

    /** @return list<string> */
    private function rolesOn(string $url): array
    {
        $response = $this->actingAs($this->admin)->get($url);
        $response->assertOk();

        return array_column($response->viewData('page')['props']['roles'], 'name');
    }

    public function test_the_matrix_lists_only_this_organisations_roles(): void
    {
        $names = $this->rolesOn('/settings/roles');

        $this->assertContains('Acme Founders', $names);
        $this->assertNotContains('Rival Founders', $names, 'Another organisation’s role was listed.');
    }

    public function test_user_management_lists_only_this_organisations_roles(): void
    {
        $names = $this->rolesOn('/user-management/roles');

        $this->assertContains('Acme Founders', $names);
        $this->assertNotContains('Rival Founders', $names, 'Another organisation’s role was listed.');
    }

    /**
     * PROTECTION FOLLOWS THE SCOPED LIST, not the installation. Unscoped, only
     * the oldest role on the whole server would be flagged, and every other
     * organisation would be shown a delete button for its own last way in.
     */
    public function test_each_organisation_protects_its_own_first_role(): void
    {
        foreach (['/settings/roles', '/user-management/roles'] as $url) {
            $roles = $this->actingAs($this->admin)->get($url)->viewData('page')['props']['roles'];

            $this->assertTrue($roles[0]['isProtected'], "{$url}: the first role is protected.");
            $this->assertSame('Acme Founders', $roles[0]['name']);
            $this->assertFalse($roles[1]['isProtected'], "{$url}: later roles are not.");
        }
    }

    /** The headcount counts this organisation's people, and counts them at all. */
    public function test_the_headcount_is_this_organisations_and_is_not_zero(): void
    {
        $theirs = Role::query()->where('tenant_id', $this->rival->id)->firstOrFail();
        $stranger = User::factory()->create(['tenant_id' => $this->rival->id]);

        // Somebody in the OTHER organisation, holding the other organisation's
        // role - which must not be counted here under any circumstance.
        DB::table('model_has_roles')->updateOrInsert([
            'role_id' => $theirs->getKey(),
            'model_type' => User::class,
            'model_id' => $stranger->getKey(),
            'tenant_id' => $this->rival->id,
        ], []);

        foreach (['/settings/roles', '/user-management/roles'] as $url) {
            $roles = collect($this->actingAs($this->admin)->get($url)->viewData('page')['props']['roles'])
                ->keyBy('name');

            $this->assertSame(
                1,
                $roles['Acme Support']['userCount'],
                "{$url}: the admin's own role reports the one person holding it.",
            );

            $this->assertSame(
                0,
                $roles['Acme Founders']['userCount'],
                "{$url}: a role nobody holds reports nobody.",
            );
        }
    }
}
