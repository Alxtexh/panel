<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Models\Role;
use Alxtexh\Panel\Support\Abilities;
use Spatie\Permission\Models\Permission;
use Tests\TestCase;

/**
 * The permission gate, exercised by users who are deliberately NOT allowed.
 *
 * WHY THIS FILE HAS TO EXIST. `UserFactory` gives every test user an
 * Administrator role, because 129 suites are about exports and uploads and
 * reordering rather than about authorisation, and they meant "somebody who may
 * do this". The cost of that convenience is that no ordinary test would notice
 * if the permission check stopped being consulted - the gate could be deleted
 * outright and the whole suite would stay green.
 *
 * So every test below builds a user whose role grants a NARROW set and asserts
 * what they cannot do. These are the tests that fail when the guard is removed,
 * which is the only property that makes a security test worth having.
 *
 * THE TWO GATES ARE INDEPENDENT, and the last section proves it in both
 * directions: full permissions do not let you touch another organisation's
 * record, and being in the right organisation does not let you act without the
 * ability. Either one alone would look like it worked.
 */
final class RolePermissionTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private Client $record;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        /*
         * `forceFill` for the tenant, because `tenant_id` is NOT FILLABLE on
         * these models - that is the point of the tenant scope, and a plain
         * `create(['tenant_id' => ...])` silently drops it and fails on the NOT
         * NULL constraint. Which is the correct behaviour, and how this setup
         * was found to be wrong.
         */
        $plan = $this->owned(new Plan(['name' => 'Plan', 'speed_mbps' => 10, 'price_cents' => 1000]));

        $router = $this->owned(new Router([
            'name' => 'R1', 'ip_address' => '10.0.0.1', 'model' => 'RB750', 'status' => 'online',
        ]));

        $this->record = $this->owned(new Client([
            'plan_id' => $plan->id,
            'router_id' => $router->id,
            'name' => 'Amina Otieno',
            'phone' => '+254700000001',
            'access_code' => 'AAA111',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addMonth(),
        ]));
    }

    /** Save `$model` against a tenant, past the unfillable tenant column. */
    private function owned(Model $model, ?int $tenantId = null): Model
    {
        $model->forceFill(['tenant_id' => $tenantId ?? $this->tenant->id])->save();

        return $model;
    }

    /**
     * A COMPLETE, VALID payload - which is what makes the refusal mean something.
     *
     * The first version sent `['name' => 'Renamed']` alone. That is invalid, so
     * the endpoint redirected with validation errors, and the test passed
     * whether or not authorisation was ever consulted: removing the permission
     * gate entirely turned the 403 into a 302 and the assertion still held for
     * the wrong reason. A payload the endpoint would happily accept leaves
     * exactly one thing that can stop it.
     *
     * @return array<string, mixed>
     */
    private function validPayload(): array
    {
        return [
            'name' => 'Renamed',
            'phone' => '+254700000009',
            'access_code' => 'AAA111',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'plan_id' => $this->record->plan_id,
            'router_id' => $this->record->router_id,
            'expiry_date' => now()->addMonth()->format('Y-m-d'),
        ];
    }

    /** @param list<string> $abilities */
    private function userWith(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    /* ----------------------------------------------------------- no role at all */

    /**
     * NO ROLE MEANS NO, and this is the single most important assertion here.
     *
     * The tempting alternative - treat a missing role as unrestricted - makes
     * everything work during development, because nobody has a role yet, and
     * then silently grants full access to any account that slips through
     * provisioning. Denying means a mis-provisioned user is locked out loudly.
     */
    public function test_a_user_with_no_role_can_do_nothing(): void
    {
        $user = User::factory()->roleless()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        // ASSERTED AGAINST THE PIVOT, because that is now the only place a role
        // assignment lives. `roleless()` deletes rows there directly: Spatie's
        // own `detach()` is scoped to the current team, and with no team set it
        // matches nothing and silently succeeds - which is how a factory that
        // was quietly doing nothing produced a test that passed anyway.
        $this->assertSame(
            0,
            DB::table('model_has_roles')
                ->where('model_type', User::class)
                ->where('model_id', $user->getKey())
                ->count(),
            'The factory really did leave this user roleless.',
        );

        $this->actingAs($user)->get('/clients')->assertForbidden();
        $this->actingAs($user)->get("/clients/{$this->record->id}")->assertForbidden();
    }

    /* -------------------------------------------------------- reading vs writing */

    /** Read-only is a real role, and the list must still work for it. */
    public function test_a_read_only_role_can_list_and_view(): void
    {
        $user = $this->userWith([
            Abilities::name('viewAny', 'clients'),
            Abilities::name('view', 'clients'),
        ]);

        $this->actingAs($user)->get('/clients')->assertOk();
        $this->actingAs($user)->get("/clients/{$this->record->id}")->assertOk();
    }

    /**
     * AND CANNOT WRITE. The schema's permission booleans only hide buttons; the
     * refusal has to happen at the write, or a client that ignores them wins.
     */
    public function test_a_read_only_role_cannot_update(): void
    {
        $user = $this->userWith([
            Abilities::name('viewAny', 'clients'),
            Abilities::name('view', 'clients'),
        ]);

        $this->actingAs($user)
            ->put("/clients/{$this->record->id}", $this->validPayload())
            ->assertForbidden();

        $this->assertSame('Amina Otieno', $this->record->fresh()->name);
    }

    public function test_a_read_only_role_cannot_delete(): void
    {
        $user = $this->userWith([
            Abilities::name('viewAny', 'clients'),
            Abilities::name('view', 'clients'),
        ]);

        $this->actingAs($user)->delete("/clients/{$this->record->id}")->assertForbidden();

        $this->assertNotNull(Client::withoutGlobalScopes()->find($this->record->id));
    }

    /* ------------------------------------------------------- abilities are separate */

    /**
     * `delete` DOES NOT IMPLY `forceDelete`. The base policy separates them
     * because deleting is reversible and destroying is not, and a matrix that
     * cannot express "may remove, may not obliterate" is one people work around.
     */
    public function test_delete_does_not_grant_force_delete(): void
    {
        $user = $this->userWith([
            Abilities::name('viewAny', 'clients'),
            Abilities::name('view', 'clients'),
            Abilities::name('delete', 'clients'),
        ]);

        $this->assertTrue($user->hasPermission(Abilities::name('delete', 'clients')));
        $this->assertFalse(
            $user->hasPermission(Abilities::name('forceDelete', 'clients')),
            'There is no hierarchy between abilities - each is granted explicitly.',
        );
    }

    /** Permission on one resource says nothing about another. */
    public function test_permission_on_clients_does_not_reach_routers(): void
    {
        $user = $this->userWith([
            Abilities::name('viewAny', 'clients'),
            Abilities::name('view', 'clients'),
        ]);

        $this->actingAs($user)->get('/clients')->assertOk();
        $this->actingAs($user)->get('/routers')->assertForbidden();
    }

    /* ------------------------------------------------------ the two gates are separate */

    /**
     * FULL PERMISSIONS DO NOT CROSS A TENANT BOUNDARY. The role grants
     * everything, and the record belongs to somebody else.
     */
    public function test_every_ability_still_cannot_reach_another_tenants_record(): void
    {
        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $theirs = $this->owned(new Client([
            'name' => 'Not yours',
            'phone' => '+254700000002',
            'access_code' => 'BBB222',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addMonth(),
        ]), $other->id);

        $user = $this->userWith(Abilities::all());

        $this->actingAs($user)->get("/clients/{$theirs->id}")->assertNotFound();
        $this->actingAs($user)->put("/clients/{$theirs->id}", ['name' => 'Renamed'])->assertNotFound();

        $this->assertSame('Not yours', $theirs->fresh()->name);
    }

    /**
     * A ROLE FROM ANOTHER TENANT GRANTS NOTHING.
     *
     * The role is read by primary key, so without the tenant comparison in
     * `hasPermission()` a user assigned another organisation's role id would
     * hold whatever that role defines - privilege escalation by pointing at a
     * row you do not own.
     */
    public function test_a_role_belonging_to_another_tenant_grants_nothing(): void
    {
        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $theirRole = Role::create([
            'name' => 'Theirs',
            'guard_name' => config('auth.defaults.guard', 'web'),
            'tenant_id' => $other->id,
        ]);
        foreach (Abilities::all() as $a) {
            Permission::findOrCreate($a);
        }
        $theirRole->syncPermissions(Abilities::all());

        $user = User::factory()->roleless()->create([
            'tenant_id' => $this->tenant->id, 'email_verified_at' => now(),
        ]);

        // Assign ANOTHER organisation's role directly through the pivot - the
        // shape an attacker or a bug would produce.
        DB::table('model_has_roles')->insert([
            'role_id' => $theirRole->getKey(),
            'model_type' => User::class,
            'model_id' => $user->getKey(),
            'tenant_id' => $other->id,
        ]);

        $this->assertFalse(
            $user->fresh()->hasPermission(Abilities::name('viewAny', 'clients')),
            'The role belongs to another tenant, so it grants nothing here.',
        );

        $this->actingAs($user->fresh())->get('/clients')->assertForbidden();
    }

    /* ------------------------------------------------------------------- the names */

    /** The names are derived from the registry, so they track a rename. */
    public function test_ability_names_are_derived_from_the_registry(): void
    {
        $names = Abilities::all();

        $this->assertContains('view_any_clients', $names);
        $this->assertContains('force_delete_clients', $names);
        $this->assertNotContains('viewAny_clients', $names, 'camelCase is normalised to snake_case.');
    }
}
