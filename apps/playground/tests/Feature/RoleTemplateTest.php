<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Models\Role;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Support\RoleTemplates;
use Tests\TestCase;

/**
 * Starting a role from something rather than from nothing.
 *
 * AN EMPTY MATRIX IS NOT A NEUTRAL DEFAULT, which is the reason templates exist
 * at all. Building a role by hand means ticking dozens of boxes correctly from
 * memory, and the mistakes that produces are lopsided: a missing `view` is a
 * complaint within the hour, while a stray `force delete` is invisible until the
 * day somebody uses it. A blank form quietly pushes people towards granting
 * more, because the fastest way to make a role work is to tick another box.
 *
 * THE TEMPLATE IS RESOLVED ON THE SERVER, and that is the security-relevant
 * part. The screen is sent each template's abilities so it can say how many one
 * grants; if those were accepted back, "apply a template" would be a way to name
 * any ability at all. So the endpoint takes a KEY, and everything below assumes
 * the client is hostile.
 */
final class RoleTemplateTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->admin = User::factory()
            ->withAbilities(['manage_roles'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    /** @return list<string> */
    private function permissionsOf(string $name): array
    {
        $role = Role::query()
            ->where('tenant_id', $this->tenant->id)
            ->where('name', $name)
            ->firstOrFail();

        return $role->permissions->pluck('name')->all();
    }

    /* ------------------------------------------------------------- the list */

    public function test_the_screen_offers_templates(): void
    {
        $templates = $this->actingAs($this->admin)->get('/settings/roles')
            ->viewData('page')['props']['templates'];

        $keys = array_column($templates, 'key');

        // The generic ones the package ships, and the ones this business added.
        $this->assertContains('read-only', $keys);
        $this->assertContains('editor', $keys);
        $this->assertContains('support', $keys);
        $this->assertContains('finance', $keys);
    }

    /**
     * ABILITY NAMES ARE DERIVED, NEVER LISTED.
     *
     * `view_any_clients` exists because a resource keyed `clients` is
     * registered - a fact about the code. A template that spelled the names out
     * would be a second copy of that fact, and would silently grant nothing the
     * day a resource is renamed.
     */
    public function test_template_abilities_are_all_real(): void
    {
        $real = Abilities::all();

        foreach (RoleTemplates::all() as $template) {
            $this->assertNotEmpty($template['abilities'], "{$template['key']} grants nothing.");

            foreach ($template['abilities'] as $ability) {
                $this->assertContains(
                    $ability,
                    $real,
                    "{$template['key']} names {$ability}, which is not an ability this panel defines.",
                );
            }
        }
    }

    /**
     * A TEMPLATE NEVER GRANTS AN ACTION A RESOURCE DOES NOT SUPPORT.
     *
     * The activity trail is read-only, so `update_activities` does not exist.
     * Producing it anyway would put a name into a role that
     * `panel:permissions sync` then prunes - silently changing the role after
     * the fact, which is the worst way for a permission to disappear.
     */
    public function test_a_read_only_resource_gets_no_write_abilities(): void
    {
        $support = RoleTemplates::abilitiesFor('support');

        $this->assertContains('view_any_activities', $support);
        $this->assertNotContains('update_activities', $support);
    }

    /* ---------------------------------------------------------- applying one */

    public function test_creating_from_a_template_fills_the_matrix(): void
    {
        $this->actingAs($this->admin)->post('/settings/roles', [
            'name' => 'Helpdesk',
            'template' => 'support',
        ])->assertRedirect();

        $granted = $this->permissionsOf('Helpdesk');

        $this->assertContains('view_any_clients', $granted);
        $this->assertContains('update_clients', $granted);
        $this->assertContains('view_network_widgets', $granted);

        // Support fixes subscriber details; it does not delete them, and it
        // certainly does not edit permissions.
        $this->assertNotContains('delete_clients', $granted);
        $this->assertNotContains('manage_roles', $granted);
    }

    public function test_creating_without_a_template_grants_nothing(): void
    {
        $this->actingAs($this->admin)->post('/settings/roles', [
            'name' => 'Blank',
            'template' => null,
        ])->assertRedirect();

        $this->assertSame([], $this->permissionsOf('Blank'));
    }

    /**
     * READ ONLY MEANS READ ONLY. This is the template people reach for and the
     * one they build wrong - assembled by hand it usually ends up with `update`
     * ticked somewhere, and a forty-checkbox matrix is not something anybody
     * audits afterwards.
     */
    public function test_the_read_only_template_grants_no_writes(): void
    {
        $this->actingAs($this->admin)->post('/settings/roles', [
            'name' => 'Auditor',
            'template' => 'read-only',
        ])->assertRedirect();

        foreach ($this->permissionsOf('Auditor') as $ability) {
            $this->assertTrue(
                str_starts_with($ability, 'view_'),
                "The read-only template granted {$ability}.",
            );
        }
    }

    /** And the editor template deliberately stops short of deleting. */
    public function test_the_editor_template_cannot_delete(): void
    {
        $abilities = RoleTemplates::abilitiesFor('editor');

        $this->assertContains('update_clients', $abilities);
        $this->assertNotContains('delete_clients', $abilities);
        $this->assertNotContains('force_delete_clients', $abilities);
    }

    /**
     * `forceDelete` IS WITHHELD EVEN FROM THE MANAGER TEMPLATE. Soft deletion is
     * recoverable; erasing the row is the one action with no undo, and keeping
     * them apart is the entire reason the policy treats them as two abilities.
     */
    public function test_no_template_grants_permanent_deletion(): void
    {
        foreach (RoleTemplates::all() as $template) {
            foreach ($template['abilities'] as $ability) {
                $this->assertStringStartsNotWith(
                    'force_delete_',
                    $ability,
                    "{$template['key']} grants permanent deletion.",
                );
            }
        }
    }

    /** Nor the ability to edit permissions, which can grant anything including itself. */
    public function test_no_template_grants_permission_management(): void
    {
        foreach (RoleTemplates::all() as $template) {
            $this->assertNotContains('manage_roles', $template['abilities'], "{$template['key']} can grant itself anything.");
        }
    }

    /* ------------------------------------------------------------- the guard */

    /**
     * THE ENDPOINT TAKES A KEY, NOT A LIST OF ABILITIES.
     *
     * If it accepted abilities, "apply a template" would be an unguarded way to
     * name any permission in the system - including `manage_roles`, from an
     * account that holds it and wants to hide the grant among template noise.
     */
    public function test_abilities_posted_alongside_a_template_are_ignored(): void
    {
        $this->actingAs($this->admin)->post('/settings/roles', [
            'name' => 'Sneaky',
            'template' => 'read-only',
            'permissions' => ['manage_roles', 'force_delete_clients'],
            'abilities' => ['manage_roles'],
        ])->assertRedirect();

        $granted = $this->permissionsOf('Sneaky');

        $this->assertNotContains('manage_roles', $granted);
        $this->assertNotContains('force_delete_clients', $granted);
    }

    public function test_an_unknown_template_is_refused(): void
    {
        $this->actingAs($this->admin)->post('/settings/roles', [
            'name' => 'Nope',
            'template' => 'superuser',
        ])->assertSessionHasErrors('template');

        $this->assertDatabaseMissing('roles', ['name' => 'Nope', 'tenant_id' => $this->tenant->id]);
    }

    /** Creating a role at all still needs the ability, template or no template. */
    public function test_creating_from_a_template_still_needs_manage_roles(): void
    {
        $ordinary = User::factory()
            ->withAbilities(['view_any_clients'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $this->actingAs($ordinary)->post('/settings/roles', [
            'name' => 'Elevated',
            'template' => 'manager',
        ])->assertForbidden();
    }

    /**
     * A TEMPLATE IS A STARTING POINT, NOT A TYPE. What comes out is an ordinary
     * role: editable afterwards, with nothing recording where it came from.
     * Roles that stayed linked to a template would be a second permission system
     * - edit the template and thirty roles change under people using them.
     */
    public function test_a_role_made_from_a_template_is_an_ordinary_role(): void
    {
        $this->actingAs($this->admin)->post('/settings/roles', [
            'name' => 'Helpdesk',
            'template' => 'support',
        ]);

        $role = Role::query()->where('name', 'Helpdesk')->firstOrFail();

        $this->actingAs($this->admin)->put("/settings/roles/{$role->id}", [
            'name' => 'Helpdesk',
            'permissions' => ['view_any_clients'],
        ])->assertRedirect();

        $this->assertSame(['view_any_clients'], $this->permissionsOf('Helpdesk'));
    }
}
