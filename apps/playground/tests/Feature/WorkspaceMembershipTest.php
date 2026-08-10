<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Alerts\Announcement;
use Tests\TestCase;

/**
 * Roadmap 5.6: the three verbs workspaces were missing - create, switch,
 * and the page that lists what you belong to.
 *
 * THE PROPERTY THAT MUST HOLD THROUGH ALL OF IT: switching changes ONE
 * column through ONE guarded endpoint, and membership is the entire
 * authorisation. A person with no row in `tenant_members` for a workspace
 * must not be able to stand in it, whatever else they hold - and proving
 * the refusal is worth more than proving the success.
 */
final class WorkspaceMembershipTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $this->user = User::factory()->create([
            'tenant_id' => $this->acme->id,
            'email_verified_at' => now(),
        ]);
    }

    /* ---------------------------------------------------------- membership */

    /** Creating a user creates the membership that says the same thing. */
    public function test_a_user_is_born_a_member_of_their_own_workspace(): void
    {
        $this->assertDatabaseHas('tenant_members', [
            'tenant_id' => $this->acme->id,
            'user_id' => $this->user->id,
        ]);
    }

    public function test_the_page_lists_memberships_with_the_current_one_marked(): void
    {
        $this->user->memberships()->syncWithoutDetaching([$this->rival->id]);

        $workspaces = $this->actingAs($this->user)->get('/settings/workspaces')->assertOk()
            ->viewData('page')['props']['workspaces'];

        $this->assertCount(2, $workspaces);

        $byName = collect($workspaces)->keyBy('name');
        $this->assertTrue($byName['Acme']['current']);
        $this->assertFalse($byName['Rival']['current']);
    }

    /** Someone else's workspace is not in the list - it is not yours to see. */
    public function test_the_list_holds_only_workspaces_this_person_belongs_to(): void
    {
        $workspaces = $this->actingAs($this->user)->get('/settings/workspaces')->assertOk()
            ->viewData('page')['props']['workspaces'];

        $this->assertSame(['Acme'], array_column($workspaces, 'name'));
    }

    /* ------------------------------------------------------------ switching */

    public function test_a_member_can_switch_and_stands_in_the_other_workspace(): void
    {
        $this->user->memberships()->syncWithoutDetaching([$this->rival->id]);

        $this->actingAs($this->user)
            ->put('/settings/workspaces/current', ['workspace' => $this->rival->id])
            ->assertRedirect('/dashboard');

        $this->assertSame($this->rival->id, $this->user->fresh()->tenant_id);

        /*
         * THE REQUEST AFTER THE SWITCH IS THE ONE THAT FOUND A BUG. The
         * session carries a tenant stamp (ScopeSessionToTenant), and a stamp
         * that disagrees with the resolved tenant is flushed as hostile - so
         * a switch that moved the user but not the stamp logged them out on
         * the very next page. Asserting the redirect alone missed it; this
         * follows it.
         */
        $this->get('/dashboard')->assertOk();
    }

    /**
     * THE NO-LEAK ASSERTION. Not a member: not a 403 either, because a 403
     * confirms the workspace exists, and "does this id exist" is not a
     * question a non-member gets answered.
     */
    public function test_a_non_member_cannot_switch_in(): void
    {
        $this->actingAs($this->user)
            ->put('/settings/workspaces/current', ['workspace' => $this->rival->id])
            ->assertNotFound();

        $this->assertSame($this->acme->id, $this->user->fresh()->tenant_id);
    }

    public function test_a_suspended_workspace_refuses_the_switch(): void
    {
        $this->user->memberships()->syncWithoutDetaching([$this->rival->id]);
        $this->rival->suspend('Unpaid');

        $this->actingAs($this->user)
            ->put('/settings/workspaces/current', ['workspace' => $this->rival->id])
            ->assertSessionHasErrors('workspace');

        $this->assertSame($this->acme->id, $this->user->fresh()->tenant_id);
    }

    public function test_switching_is_audited(): void
    {
        $this->user->memberships()->syncWithoutDetaching([$this->rival->id]);

        $this->actingAs($this->user)
            ->put('/settings/workspaces/current', ['workspace' => $this->rival->id]);

        $this->assertDatabaseHas('audit_entries', [
            'event' => 'workspace.switched',
            'user_id' => $this->user->id,
        ]);
    }

    /* ------------------------------------------------------------- creating */

    public function test_creating_a_workspace_makes_you_its_administrator_and_moves_you_in(): void
    {
        $this->actingAs($this->user)
            ->post('/settings/workspaces', ['name' => 'Acme West'])
            ->assertRedirect('/dashboard');

        $tenant = Tenant::query()->where('name', 'Acme West')->first();
        $this->assertNotNull($tenant);

        $user = $this->user->fresh();

        // Standing in it...
        $this->assertSame($tenant->id, $user->tenant_id);

        // ...a member of it...
        $this->assertDatabaseHas('tenant_members', [
            'tenant_id' => $tenant->id,
            'user_id' => $user->id,
        ]);

        // ...and able to administer it. `hasPermission` resolves against the
        // roles held in the CURRENT tenant, which is now the new one.
        $this->assertTrue($user->hasPermission('manage_roles'));

        // And still signed in on the next request - the session's tenant
        // stamp moved with them. Same trap as switching; same assertion.
        $this->get('/dashboard')->assertOk();
    }

    /**
     * The new workspace starts EMPTY - creating one must not carry, copy or
     * expose anything from the one it was created from.
     */
    public function test_a_new_workspace_contains_nothing_of_the_old_one(): void
    {
        Announcement::query()->forceCreate([
            'tenant_id' => $this->acme->id,
            'title' => 'Acme business',
            'severity' => 'info',
            'display' => 'banner',
        ]);

        $this->actingAs($this->user)->post('/settings/workspaces', ['name' => 'Fresh Start']);

        $tenant = Tenant::query()->where('name', 'Fresh Start')->firstOrFail();

        $this->assertSame(0, Announcement::query()
            ->withoutGlobalScopes()
            ->where('tenant_id', $tenant->id)
            ->count());
    }

    public function test_a_taken_slug_gets_a_suffix_rather_than_an_error(): void
    {
        // 'acme' is taken by the setUp tenant.
        $this->actingAs($this->user)->post('/settings/workspaces', ['name' => 'Acme']);

        $this->assertDatabaseHas('tenants', ['slug' => 'acme-2', 'name' => 'Acme']);
    }

    /**
     * The administrator role lands in the NEW tenant, not the ambient one -
     * the assignment writes the pivot with the tenant explicit, because
     * Spatie's team resolution would otherwise scope it to the workspace
     * being left.
     */
    public function test_the_creators_administrator_role_is_scoped_to_the_new_workspace(): void
    {
        $this->actingAs($this->user)->post('/settings/workspaces', ['name' => 'Scoped Co']);

        $tenant = Tenant::query()->where('name', 'Scoped Co')->firstOrFail();

        $role = DB::table('roles')
            ->where('tenant_id', $tenant->id)
            ->where('name', 'Administrator')
            ->first();

        $this->assertNotNull($role);
        $this->assertTrue((bool) $role->grants_all);

        $this->assertDatabaseHas('model_has_roles', [
            'role_id' => $role->id,
            'model_id' => $this->user->id,
            'tenant_id' => $tenant->id,
        ]);
    }
}
