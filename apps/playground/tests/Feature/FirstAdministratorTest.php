<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\PermissionRegistrar;
use Tests\TestCase;

/**
 * Getting the first person into a panel that denies by default.
 *
 * THE FRESH INSTALL WAS LOCKED. `panel:permissions sync` creates an
 * Administrator role holding every ability and assigns it to NOBODY - correct,
 * because the package has no business choosing who runs your installation - and
 * `panel:make-user` grants it only to an account it creates itself. So anybody
 * who registered through the sign-in screen first, or who installed before
 * creating an account, had a panel where every screen answered 403 INCLUDING
 * the roles screen, which is the one that would have fixed it. The screen that
 * grants permissions required the permission it grants.
 *
 * Deny-by-default is the right posture. What was missing was a key.
 */
final class FirstAdministratorTest extends TestCase
{
    use RefreshDatabase;

    private function account(string $email): User
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme-'.uniqid()]);

        return User::factory()->create([
            'tenant_id' => $tenant->id,
            'email' => $email,
            'email_verified_at' => now(),
        ]);
    }

    /*
     * THERE IS NO TEST HERE FOR "THE PANEL IS LOCKED", deliberately.
     *
     * The lock is real - a fresh install's generated policy denies an account
     * holding no role, and `verify-install.sh` asserts exactly that against a
     * real installation. It cannot be asserted HERE: this application's own
     * `User::hasPermission()` and its own policies answer differently from a
     * generated one, so a test of the locked state in this suite would be
     * testing the reference app rather than the package, and would pass or fail
     * for reasons that have nothing to do with the fix.
     *
     * What IS the package's, and is tested below, is the key: a command that
     * promotes an existing account, and a doctor check that says the panel needs
     * one.
     */

    /** And `grant` is the key. */
    public function test_grant_promotes_an_existing_account(): void
    {
        $user = $this->account('owner@example.test');

        $this->artisan('panel:permissions', ['action' => 'grant', '--email' => 'owner@example.test'])
            ->assertExitCode(0);

        app(PermissionRegistrar::class)->setPermissionsTeamId($user->tenant_id);

        $this->assertTrue($user->fresh()->hasRole('Administrator'));

        // And the screen that was shut is open.
        $this->actingAs($user->fresh())->get('/settings/roles')->assertOk();
    }

    /**
     * IT NAMES WHO, rather than guessing. Granting to "the only account" is fine
     * until an installation has two, and then it is a coin toss with
     * administrator rights on it.
     */
    public function test_it_refuses_without_an_email(): void
    {
        $this->artisan('panel:permissions', ['action' => 'grant'])
            ->expectsOutputToContain('Which account?')
            ->assertExitCode(1);
    }

    /** And says so plainly when the address matches nobody. */
    public function test_it_refuses_an_unknown_address(): void
    {
        $this->artisan('panel:permissions', ['action' => 'grant', '--email' => 'nobody@example.test'])
            ->expectsOutputToContain('No account with the email')
            ->assertExitCode(1);
    }

    /**
     * DOCTOR NAMES THE LOCKED PANEL, because a panel where every screen answers
     * 403 gives its owner nothing to read.
     */
    public function test_doctor_reports_accounts_that_hold_no_role(): void
    {
        $this->account('locked@example.test');

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('none holds a role')
            ->assertExitCode(1);
    }

    /**
     * AND SAYS NOTHING ONCE SOMEBODY HOLDS ONE - otherwise it is a warning every
     * healthy installation learns to scroll past.
     */
    public function test_doctor_is_quiet_once_somebody_holds_a_role(): void
    {
        $this->account('owner@example.test');

        $this->artisan('panel:permissions', ['action' => 'grant', '--email' => 'owner@example.test']);

        $this->artisan('panel:doctor')->doesntExpectOutputToContain('none holds a role');
    }
}
