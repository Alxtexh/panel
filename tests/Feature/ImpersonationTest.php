<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\Impersonation;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use RuntimeException;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * Becoming somebody else, which is the largest single power a panel offers.
 *
 * IT DEFEATS EVERY OTHER CONTROL BY DESIGN - that is the feature. So the
 * guards are not about what the impersonator may then do; they are about who
 * may start, and they have to hold before the swap rather than after it.
 *
 * TENANT EQUALITY IS CHECKED ON THE RECORDS, not inferred from the request's
 * tenant. A guard reading ambient state stops working the moment something
 * forgets to set it, and the failure is silent: the check passes because both
 * sides read null.
 *
 * `refusalFor` RETURNS A REASON RATHER THAN A BOOLEAN, which is why the tests
 * below assert reasons. A screen has to say why the button is unavailable, and
 * "no" with no cause is how a support ticket becomes a debugging session.
 */
final class ImpersonationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    private User $actor;

    private User $target;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        $this->actor = $this->user('actor@example.test', $this->mine);
        $this->target = $this->user('target@example.test', $this->mine);

        $role = Role::findOrCreate('impersonator', 'web');
        $role->givePermissionTo(Permission::findOrCreate('impersonate_users', 'web'));

        $this->actor->assignRole($role);
        $this->actor = $this->actor->fresh();

        $this->actingAs($this->actor);
    }

    private function user(string $email, Tenant $tenant): User
    {
        return User::create([
            'tenant_id' => $tenant->id,
            'name' => $email,
            'email' => $email,
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    /**
     * A REQUEST WITH A SESSION, because impersonation lives in one.
     *
     * The bare test request has no session store attached - `request()` in a
     * unit context is not the request a middleware stack has finished with -
     * and `Impersonation` throws rather than pretending, which is right: a
     * swap recorded nowhere is a swap that cannot be undone.
     */
    private function impersonation(): Impersonation
    {
        $request = request();

        if (! $request->hasSession()) {
            $request->setLaravelSession(app('session.store'));
        }

        return new Impersonation($request);
    }

    public function test_somebody_with_the_ability_may_impersonate_a_colleague(): void
    {
        $this->assertNull($this->impersonation()->refusalFor($this->actor, $this->target));
        $this->assertTrue($this->impersonation()->allows($this->actor, $this->target));
    }

    /**
     * WITHOUT THE ABILITY, NO. This is the only gate that a role can grant, so
     * it is the one an installation actually configures.
     */
    public function test_without_the_ability_it_is_refused(): void
    {
        $nobody = $this->user('nobody@example.test', $this->mine);

        $this->assertSame(
            'You may not impersonate.',
            $this->impersonation()->refusalFor($nobody, $this->target),
        );
    }

    /**
     * ACROSS ORGANISATIONS, NO - even holding the ability.
     *
     * The ability says "may impersonate", not "may impersonate anybody in the
     * installation". Without this, one tenant's administrator reaches every
     * other tenant's accounts.
     */
    public function test_another_organisations_account_is_refused(): void
    {
        $foreign = $this->user('foreign@example.test', $this->theirs);

        $this->assertSame(
            'That account belongs to another organisation.',
            $this->impersonation()->refusalFor($this->actor, $foreign),
        );
    }

    public function test_impersonating_yourself_is_refused(): void
    {
        $this->assertSame(
            'You are already yourself.',
            $this->impersonation()->refusalFor($this->actor, $this->actor),
        );
    }

    /**
     * NO CHAINING. Starting a second impersonation from inside the first would
     * leave a stack nothing unwinds - and `stop()` would hand the session to
     * the wrong person.
     */
    public function test_impersonating_while_impersonating_is_refused(): void
    {
        $this->impersonation()->start($this->actor, $this->target);

        $third = $this->user('third@example.test', $this->mine);

        $this->assertSame(
            'You are already impersonating somebody.',
            $this->impersonation()->refusalFor($this->actor, $third),
        );
    }

    public function test_starting_switches_the_signed_in_user(): void
    {
        $this->impersonation()->start($this->actor, $this->target);

        $this->assertSame($this->target->getKey(), auth()->id());
        $this->assertTrue($this->impersonation()->isActive());
        $this->assertSame(
            $this->actor->getKey(),
            $this->impersonation()->impersonator()?->getKey(),
        );
    }

    public function test_stopping_hands_the_session_back(): void
    {
        $impersonation = $this->impersonation();

        $impersonation->start($this->actor, $this->target);
        $impersonation->stop();

        $this->assertSame($this->actor->getKey(), auth()->id());
        $this->assertFalse($this->impersonation()->isActive());
    }

    /**
     * STOPPING WHEN NOTHING IS ACTIVE IS SAFE.
     *
     * The button is on a banner that a stale tab can still show, so the
     * endpoint is reachable with no impersonation in progress and must not
     * throw or sign anybody out.
     */
    public function test_stopping_when_nothing_is_active_is_harmless(): void
    {
        $this->impersonation()->stop();

        $this->assertSame($this->actor->getKey(), auth()->id());
    }

    /**
     * A REFUSAL IS AN EXCEPTION AT THE START, not a silent no-op.
     *
     * `start()` is the write path; returning quietly would leave the caller
     * believing the swap happened and rendering the impersonation banner over
     * their own session.
     */
    public function test_starting_a_refused_impersonation_throws(): void
    {
        $foreign = $this->user('foreign@example.test', $this->theirs);

        $this->expectException(RuntimeException::class);

        $this->impersonation()->start($this->actor, $foreign);
    }
}
