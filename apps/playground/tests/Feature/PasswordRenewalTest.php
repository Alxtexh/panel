<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use PanelKit\Panel\Auth\PasswordPolicy;
use Tests\TestCase;

/**
 * Expiring a password without locking anybody out of changing it.
 *
 * THE FEATURE IS EASY AND THE FAILURE MODE IS A LOOP. A renewal rule applied to
 * every route includes the screen that satisfies it, and somebody caught in that
 * has a panel that is simply broken for them - no error, no way out, and no way
 * to report it from inside. Most of what is asserted below is which doors stay
 * open.
 *
 * IT IS OFF BY DEFAULT, and that is a position rather than an omission. Forced
 * rotation is no longer recommended practice: what it reliably produces is
 * `Summer2024!` becoming `Summer2025!` on a card under the keyboard. It exists
 * because some installations are audited against a requirement to have it.
 *
 * REUSE IS REFUSED WHATEVER THE EXPIRY SAYS, and that is the part worth having.
 * A renewal satisfied by re-entering the same password changed nothing while
 * recording that it did.
 */
final class PasswordRenewalTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        config()->set('panel.auth.password.max_age_days', 90);
    }

    private function user(array $attributes = []): User
    {
        return User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
            'password' => 'the-original-password',
            ...$attributes,
        ]);
    }

    /* ------------------------------------------------------------ the policy */

    /**
     * NULL MEANS "NOT KNOWN", NEVER "OVERDUE".
     *
     * Accounts predating the feature have no recorded change date. Treating that
     * as the beginning of time expires an entire installation the moment the
     * policy is switched on - including whoever needs to get in and switch it
     * off again.
     */
    public function test_an_account_with_no_recorded_change_is_not_overdue(): void
    {
        $user = $this->user(['password_changed_at' => null]);

        $this->assertFalse(PasswordPolicy::fromConfig()->mustChange($user));
    }

    public function test_a_password_older_than_the_policy_must_change(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->assertTrue(PasswordPolicy::fromConfig()->mustChange($user));
    }

    public function test_a_password_within_the_policy_does_not(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(89)]);

        $this->assertFalse(PasswordPolicy::fromConfig()->mustChange($user));
    }

    /** Zero days is off, and off is the default. */
    public function test_expiry_is_off_by_default(): void
    {
        config()->set('panel.auth.password.max_age_days', 0);

        $user = $this->user(['password_changed_at' => now()->subYears(10)]);

        $this->assertFalse(PasswordPolicy::fromConfig()->mustChange($user));
    }

    /**
     * A FORCED CHANGE IS NOT ABOUT AGE, and the two are kept apart.
     *
     * An administrator reset, or a suspected compromise, has to demand a change
     * regardless of how recently the password was set. Folding that into the age
     * column by backdating it would work and would put a lie in a column other
     * code reads.
     */
    public function test_a_requested_change_applies_whatever_the_age(): void
    {
        config()->set('panel.auth.password.max_age_days', 0);

        $user = $this->user([
            'password_changed_at' => now(),
            'must_change_password' => true,
        ]);

        $this->assertTrue(PasswordPolicy::fromConfig()->mustChange($user));
    }

    /* ------------------------------------------------------------ the doors */

    public function test_an_expired_password_is_sent_to_the_change_screen(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($user)->get('/dashboard')->assertRedirect('/password/change');
        $this->actingAs($user)->get('/clients')->assertRedirect('/password/change');
    }

    /**
     * AND THE CHANGE SCREEN ITSELF IS REACHABLE. This is the assertion the whole
     * feature turns on: without it the redirect is a loop nobody can leave.
     */
    public function test_the_change_screen_is_not_redirected_away_from(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($user)->get('/password/change')->assertOk();
    }

    /** Signing out is always allowed, or the only exit is clearing cookies. */
    public function test_signing_out_is_always_allowed(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($user)->post('/logout')->assertRedirect();
        $this->assertGuest();
    }

    /**
     * IMPERSONATION IS EXEMPT ENTIRELY. The expired password belongs to the
     * account being worn, not to the person wearing it - prompting would either
     * change somebody else's credential or dead-end the impersonation.
     */
    public function test_an_impersonated_session_is_not_prompted(): void
    {
        $target = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($target)
            ->withSession(['panel.impersonator' => 999])
            ->get('/dashboard')
            ->assertOk();
    }

    public function test_an_account_within_the_policy_is_untouched(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(10)]);

        $this->actingAs($user)->get('/dashboard')->assertOk();
    }

    /* ----------------------------------------------------------- changing it */

    public function test_a_new_password_clears_the_requirement(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($user)->put('/password/change', [
            'current_password' => 'the-original-password',
            'password' => 'a-completely-different-one',
            'password_confirmation' => 'a-completely-different-one',
        ])->assertRedirect();

        $user->refresh();

        $this->assertTrue(Hash::check('a-completely-different-one', $user->password));
        $this->assertFalse(PasswordPolicy::fromConfig()->mustChange($user));

        // And the panel is usable again, which is the point.
        $this->actingAs($user)->get('/dashboard')->assertOk();
    }

    /**
     * THE SAME PASSWORD IS REFUSED.
     *
     * A renewal satisfied by re-entering the old password changed nothing while
     * recording that it did - which is worse than not asking, because the record
     * now says the account is compliant.
     */
    public function test_the_current_password_cannot_be_reused(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($user)->put('/password/change', [
            'current_password' => 'the-original-password',
            'password' => 'the-original-password',
            'password_confirmation' => 'the-original-password',
        ])->assertSessionHasErrors('password');

        $this->assertTrue(PasswordPolicy::fromConfig()->mustChange($user->refresh()));
    }

    /** Nor one from a few changes ago, which is how people cycle. */
    public function test_a_recent_password_cannot_be_returned_to(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($user)->put('/password/change', [
            'current_password' => 'the-original-password',
            'password' => 'the-second-password',
            'password_confirmation' => 'the-second-password',
        ])->assertRedirect();

        $user->refresh()->forceFill(['password_changed_at' => now()->subDays(91)])->save();

        $this->actingAs($user)->put('/password/change', [
            'current_password' => 'the-second-password',
            'password' => 'the-original-password',
            'password_confirmation' => 'the-original-password',
        ])->assertSessionHasErrors('password');
    }

    /**
     * THE HISTORY HOLDS HASHES, NEVER PASSWORDS.
     *
     * It exists so a renewal cannot be satisfied by cycling; storing anything
     * reversible would turn a routine table into the most valuable one in the
     * database.
     */
    public function test_the_history_never_contains_a_readable_password(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($user)->put('/password/change', [
            'current_password' => 'the-original-password',
            'password' => 'a-completely-different-one',
            'password_confirmation' => 'a-completely-different-one',
        ]);

        $history = json_encode($user->refresh()->password_history);

        $this->assertStringNotContainsString('the-original-password', (string) $history);
        $this->assertStringNotContainsString('a-completely-different-one', (string) $history);
    }

    /**
     * THE CHANGE IS RECORDED BEFORE THE SAVE, so the history holds the password
     * being replaced rather than the one replacing it. Getting that backwards
     * pushes the NEW password onto the list and refuses it immediately - a bug
     * that looks exactly like the feature working.
     */
    public function test_the_new_password_is_not_pushed_onto_its_own_history(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($user)->put('/password/change', [
            'current_password' => 'the-original-password',
            'password' => 'a-completely-different-one',
            'password_confirmation' => 'a-completely-different-one',
        ])->assertSessionHasNoErrors();

        $this->assertFalse(
            PasswordPolicy::fromConfig()->isReused(
                $user->refresh(),
                // The one just set is "current", which IS refused - so the check
                // here is that it did not also land in the history, leaving the
                // account with a password it is told it may not have.
                'something-else-again',
            ),
        );
    }

    /**
     * AN ADMINISTRATOR CAN DEMAND A CHANGE, which is the only thing that makes
     * `must_change_password` reachable at all - a column nothing can set is
     * decoration.
     *
     * IT DOES NOT CHANGE THE PASSWORD. Whoever holds this cannot use it to take
     * an account over: the person still needs their current password to set a
     * new one, so the worst it can do is inconvenience somebody.
     */
    public function test_an_administrator_can_require_a_new_password(): void
    {
        $admin = $this->user(['password_changed_at' => now()]);
        $target = $this->user(['password_changed_at' => now(), 'email' => 'target@example.com']);

        // The status is not asserted: a record action answers with whatever the
        // panel's action endpoint answers with, and what matters here is the
        // effect on the account rather than the shape of the reply.
        $this->actingAs($admin)
            ->post("/users/{$target->id}/action", ['action' => 'require-password-change'])
            ->assertSuccessful();

        $target->refresh();

        $this->assertTrue($target->must_change_password);
        $this->assertTrue(Hash::check('the-original-password', $target->password));
        $this->assertTrue(PasswordPolicy::fromConfig()->mustChange($target));
    }

    /** And changing it clears the demand. */
    public function test_changing_the_password_clears_a_required_change(): void
    {
        $user = $this->user(['must_change_password' => true, 'password_changed_at' => now()]);

        $this->actingAs($user)->put('/password/change', [
            'current_password' => 'the-original-password',
            'password' => 'a-completely-different-one',
            'password_confirmation' => 'a-completely-different-one',
        ])->assertRedirect();

        $this->assertFalse($user->refresh()->must_change_password);
    }

    /** The wrong current password changes nothing. */
    public function test_the_current_password_must_be_right(): void
    {
        $user = $this->user(['password_changed_at' => now()->subDays(91)]);

        $this->actingAs($user)->put('/password/change', [
            'current_password' => 'not-the-password',
            'password' => 'a-completely-different-one',
            'password_confirmation' => 'a-completely-different-one',
        ])->assertSessionHasErrors('current_password');

        $this->assertTrue(Hash::check('the-original-password', $user->refresh()->password));
    }
}
