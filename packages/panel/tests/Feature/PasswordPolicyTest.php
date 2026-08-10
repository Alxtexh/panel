<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\PasswordPolicy;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;

/**
 * Refusing a password somebody has used before, and expiring one that is old.
 *
 * REUSE IS CHECKED AGAINST THE CURRENT PASSWORD **AND** THE HISTORY. Only the
 * history would let somebody "change" their password to the one they already
 * have - which satisfies an expiry policy while changing nothing, and is the
 * first thing anybody does when prompted.
 *
 * THE HISTORY IS RECORDED FROM `getOriginal`, BEFORE THE SAVE. Reading the
 * current attribute instead pushes the NEW password onto the list and then
 * refuses it as reused on the next attempt - a bug that looks exactly like the
 * feature working, right up until somebody cannot change their password twice.
 */
final class PasswordPolicyTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'first-password',
            'email_verified_at' => now(),
        ]);
    }

    public function test_the_current_password_counts_as_reused(): void
    {
        config(['panel.auth.password.refuse_reuse' => true]);

        $this->assertTrue(
            PasswordPolicy::fromConfig()->isReused($this->user, 'first-password'),
            'Re-entering the current password satisfied a change that changed nothing.',
        );
    }

    public function test_an_unused_password_is_not_reused(): void
    {
        config(['panel.auth.password.refuse_reuse' => true]);

        $this->assertFalse(
            PasswordPolicy::fromConfig()->isReused($this->user, 'never-used-before'),
        );
    }

    /**
     * A PREVIOUS PASSWORD IS STILL REFUSED AFTER IT HAS BEEN REPLACED.
     *
     * `recordChange` runs before the save, so the hash it stores is the one
     * being replaced. Rotating between two passwords is the loophole the
     * history exists to close.
     */
    public function test_a_previous_password_remains_refused_after_a_change(): void
    {
        config(['panel.auth.password.refuse_reuse' => true]);

        $policy = PasswordPolicy::fromConfig();

        $policy->recordChange($this->user);
        $this->user->forceFill(['password' => Hash::make('second-password')])->save();

        $fresh = $this->user->fresh();

        $this->assertTrue(
            $policy->isReused($fresh, 'first-password'),
            'The password just replaced was accepted again.',
        );

        $this->assertTrue(
            $policy->isReused($fresh, 'second-password'),
            'The current password was accepted as a change.',
        );
    }

    /**
     * AND A CHANGE CAN STILL BE MADE TWICE.
     *
     * The failure mode of recording the wrong hash: the second change refuses
     * every candidate, because the value just written is already on the list.
     */
    public function test_a_password_can_be_changed_twice_in_a_row(): void
    {
        config(['panel.auth.password.refuse_reuse' => true]);

        $policy = PasswordPolicy::fromConfig();

        $policy->recordChange($this->user);
        $this->user->forceFill(['password' => Hash::make('second-password')])->save();

        $policy->recordChange($this->user->fresh());

        $this->assertFalse(
            $policy->isReused($this->user->fresh(), 'third-password'),
            'A second change was refused, so the history recorded the new password rather than the old.',
        );
    }

    public function test_reuse_checking_can_be_turned_off(): void
    {
        config(['panel.auth.password.refuse_reuse' => false]);

        $this->assertFalse(
            PasswordPolicy::fromConfig()->isReused($this->user, 'first-password'),
        );
    }

    /**
     * NO USER IS NOT A REUSE. A null here means nobody is signed in, and
     * answering "true" would refuse a password on a screen with no account
     * attached - the password reset flow, for instance.
     */
    public function test_a_null_user_is_never_a_reuse(): void
    {
        config(['panel.auth.password.refuse_reuse' => true]);

        $this->assertFalse(PasswordPolicy::fromConfig()->isReused(null, 'anything'));
    }

    /**
     * EXPIRY IS OFF UNLESS CONFIGURED, and zero days means off rather than
     * "expires immediately" - which would lock every account out of the panel
     * on the first request after an upgrade.
     */
    public function test_expiry_is_off_by_default(): void
    {
        config(['panel.auth.password.max_age_days' => 0]);

        $policy = PasswordPolicy::fromConfig();

        $this->assertFalse($policy->expiryEnabled());
        $this->assertFalse($policy->mustChange($this->user));
        $this->assertNull($policy->daysUntilExpiry($this->user));
    }

    public function test_a_password_older_than_the_window_must_change(): void
    {
        config(['panel.auth.password.max_age_days' => 30]);

        $this->user->forceFill(['password_changed_at' => now()->subDays(45)])->save();

        $this->assertTrue(
            PasswordPolicy::fromConfig()->mustChange($this->user->fresh()),
            'A password past its maximum age was not required to change.',
        );
    }

    public function test_a_recent_password_does_not_have_to_change(): void
    {
        config(['panel.auth.password.max_age_days' => 30]);

        $this->user->forceFill(['password_changed_at' => now()->subDays(2)])->save();

        $policy = PasswordPolicy::fromConfig();

        $this->assertFalse($policy->mustChange($this->user->fresh()));

        /*
         * 27, NOT 28, AND THE FLOOR IS THE RIGHT DIRECTION.
         *
         * The remaining time is 27.99... days - `now()` has moved on since the
         * timestamp was written - and `floor()` rounds that down. So the
         * warning appears a day EARLY rather than a day late, which is the
         * correct way to be wrong about an expiry somebody has to act on.
         */
        $this->assertSame(27, $policy->daysUntilExpiry($this->user->fresh()));
    }
}
