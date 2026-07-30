<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\Abilities;
use Tests\TestCase;

final class ImpersonationSameRoleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * TWO PEOPLE IN THE SAME ROLE. Neither can do anything the other cannot, so
     * becoming them is not an escalation and must be allowed - otherwise the
     * feature is useless in the ordinary case, where support staff share a role.
     */
    public function test_same_role_colleagues_can_impersonate_each_other(): void
    {
        $t = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $abilities = ['impersonate_users', Abilities::name('viewAny', 'clients')];
        $a = User::factory()->withAbilities($abilities, 'support')
            ->create(['tenant_id' => $t->id, 'email_verified_at' => now()]);
        // The SAME role object, not a second one with the same name.
        $b = User::factory()->withAbilities($abilities, 'support2')
            ->create(['tenant_id' => $t->id, 'email_verified_at' => now()]);

        $this->actingAs($a)->post("/impersonate/{$b->id}")->assertRedirect('/dashboard');
        $this->assertAuthenticatedAs($b);
    }
}
