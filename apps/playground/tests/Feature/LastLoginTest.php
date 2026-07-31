<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Auth\Impersonation;
use Tests\TestCase;

/**
 * When each person last signed in - and the two events that look like signing
 * in and are not.
 *
 * THE COLUMN IS READ TO MAKE DECISIONS ABOUT ACCOUNTS: whether to revoke one,
 * whether an invitation was ever taken up, whether somebody was online when
 * something happened. A wrong value there is not cosmetic, and the way it goes
 * wrong is not obvious - `Impersonation::start()` calls `auth()->login()`, which
 * fires the same event a real sign-in fires, so the naive listener records that
 * the CUSTOMER signed in every time an operator looked at their screen.
 *
 * Nothing about that looks broken. The column fills in, the dates are plausible,
 * and the only symptom is that an account nobody has ever used appears active.
 */
final class LastLoginTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        config(['panel.tenancy.resolver' => fn () => $this->tenant->id]);
    }

    /* ------------------------------------------------------- a real sign-in */

    public function test_signing_in_records_the_time_and_the_address(): void
    {
        $user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
            'password' => 'password',
        ]);

        $this->assertNull($user->last_login_at);

        $this->post('/login', ['email' => $user->email, 'password' => 'password']);

        $user->refresh();

        $this->assertNotNull($user->last_login_at, 'A sign-in was not recorded.');
        $this->assertNotNull($user->last_login_ip);
    }

    /**
     * AND IT IS NOT AN EDIT OF THE ACCOUNT. `updated_at` drives "changed
     * recently" on the audit screens and in sync jobs; if signing in moved it,
     * every active account would look like it had just been modified.
     */
    public function test_signing_in_is_not_recorded_as_a_change_to_the_account(): void
    {
        $user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
            'password' => 'password',
        ]);

        $before = $user->updated_at;

        $this->travel(5)->minutes();
        $this->post('/login', ['email' => $user->email, 'password' => 'password']);

        $this->assertEquals($before, $user->fresh()->updated_at);
    }

    /* ------------------------------------------- the two that are not sign-ins */

    /**
     * THE ONE THIS FILE EXISTS FOR. Becoming somebody is not that person
     * signing in, and recording it as one puts a false fact on the screen an
     * operator uses to decide whether an account is still in use.
     */
    public function test_being_impersonated_does_not_count_as_the_customer_signing_in(): void
    {
        $operator = User::factory()
            ->withAbilities(['view_any_users', 'view_users', 'impersonate_users'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $target = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($operator)->post("/impersonate/{$target->id}");

        $this->assertNull(
            $target->fresh()->last_login_at,
            'Impersonation was recorded as the customer signing in.',
        );
    }

    /** And handing the session back is not the operator signing in either. */
    public function test_stopping_impersonation_does_not_count_as_the_operator_signing_in(): void
    {
        $operator = User::factory()
            ->withAbilities(['view_any_users', 'view_users', 'impersonate_users'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $target = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($operator)->post("/impersonate/{$target->id}");
        $this->post('/impersonate-stop');

        $this->assertNull(
            $operator->fresh()->last_login_at,
            'Returning from impersonation was recorded as a sign-in.',
        );
    }

    /** The flag does not survive the swap - a later real sign-in still counts. */
    public function test_a_real_sign_in_after_an_impersonation_is_still_recorded(): void
    {
        $operator = User::factory()
            ->withAbilities(['view_any_users', 'view_users', 'impersonate_users'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $target = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
            'password' => 'password',
        ]);

        $this->actingAs($operator)->post("/impersonate/{$target->id}");

        $this->assertFalse(Impersonation::isSwitching(), 'The guard outlived the swap.');

        $this->post('/logout');
        $this->post('/login', ['email' => $target->email, 'password' => 'password']);

        $this->assertNotNull($target->fresh()->last_login_at);
    }

    /* ----------------------------------------------------------- the screen */

    /**
     * ONE CELL, THREE ANSWERS. "Logged in" beats any timestamp, today's date is
     * noise once you have the time, and an account nobody has signed into is a
     * fact rather than a gap.
     */
    public function test_the_users_list_answers_last_seen_three_ways(): void
    {
        $operator = User::factory()
            ->withAbilities(['view_any_users', 'view_users'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $never = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Never Here',
            'email_verified_at' => now(),
        ]);

        $earlier = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Earlier Today',
            'email_verified_at' => now(),
        ]);

        User::query()->whereKey($earlier->getKey())->toBase()
            ->update(['last_login_at' => now()->startOfDay()->addHours(7)->addMinutes(4)]);

        $page = $this->actingAs($operator)->get('/users')->assertOk()->viewData('page');

        $rows = collect($page['props']['records'])->keyBy('name');

        $this->assertSame('Never', $rows['Never Here']['last_seen']);
        $this->assertSame('07:04', $rows['Earlier Today']['last_seen']);

        // The column is declared, and the join date it replaced is gone.
        $keys = collect($page['props']['schema']['table']['columns'])->pluck('key');

        $this->assertTrue($keys->contains('last_seen'), 'No last-seen column.');
        $this->assertFalse($keys->contains('created_at'), 'The join date is still there.');
    }
}
