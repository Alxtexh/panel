<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Signing in still works after the tenancy rework.
 *
 * WORTH ITS OWN TEST because Stage 9c changed three things that all sit on the
 * login path at once: `users.email` became unique per tenant, the user provider
 * became tenant-scoped, and the session grew a tenant stamp. Any one of them
 * getting it wrong locks everybody out of everything, and the suite would still
 * be green - every other test uses `actingAs`, which never touches the login
 * form.
 */
final class LoginSmokeTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_person_can_sign_in_on_the_central_host(): void
    {
        $tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email' => 'admin@a.test',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
        ]);

        $this->post('/login', ['email' => 'admin@a.test', 'password' => 'password'])
            ->assertRedirect();

        $this->assertAuthenticatedAs($user);
    }

    /** And on the tenant's own host, where the provider is scoped. */
    public function test_a_person_can_sign_in_on_their_tenants_host(): void
    {
        $tenant = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $tenant->domains()->create(['domain' => 'b.alxtexhpanel.test']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email' => 'admin@b.test',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
        ]);

        $this->post('http://b.alxtexhpanel.test/login', [
            'email' => 'admin@b.test',
            'password' => 'password',
        ])->assertRedirect();

        $this->assertAuthenticatedAs($user);
    }

    /** A wrong password is still refused, so the above is not passing vacuously. */
    public function test_a_wrong_password_is_refused(): void
    {
        $tenant = Tenant::create(['name' => 'C', 'slug' => 'c']);

        User::factory()->create([
            'tenant_id' => $tenant->id,
            'email' => 'admin@c.test',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
        ]);

        $this->post('/login', ['email' => 'admin@c.test', 'password' => 'wrong'])
            ->assertSessionHasErrors();

        $this->assertGuest();
    }
}
