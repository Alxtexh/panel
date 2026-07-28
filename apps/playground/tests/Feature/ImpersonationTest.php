<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * Wearing somebody else's account.
 *
 * ALMOST EVERY TEST HERE IS A REFUSAL, because impersonation is a
 * privilege-escalation primitive with a friendly name. The happy path is one
 * case; the rest are the fences, and each fence is the difference between a
 * support tool and a way for anybody holding it to become an administrator.
 *
 * THE UPWARD CHECK IS THE ONE THAT MATTERS. Without it the permission system is
 * advisory: whoever may impersonate simply becomes someone who may do the thing
 * they were denied, and every other guard in the panel is decoration.
 */
final class ImpersonationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $support;

    private User $subscriberClerk;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        // Support may impersonate and view clients. Deliberately NOT an admin.
        $this->support = $this->userWith([
            'impersonate_users',
            Abilities::name('viewAny', 'clients'),
            Abilities::name('view', 'clients'),
        ], 'Support');

        // An ordinary colleague who can do strictly less.
        $this->subscriberClerk = $this->userWith([
            Abilities::name('viewAny', 'clients'),
        ], 'Clerk');
    }

    /** @param list<string> $abilities */
    private function userWith(array $abilities, string $role, ?Tenant $tenant = null): User
    {
        return User::factory()
            ->withAbilities($abilities, strtolower($role))
            ->create([
                'tenant_id' => ($tenant ?? $this->tenant)->id,
                'email_verified_at' => now(),
            ]);
    }

    /* ------------------------------------------------------------ the happy path */

    public function test_support_can_impersonate_a_lesser_colleague(): void
    {
        $this->actingAs($this->support)
            ->post("/impersonate/{$this->subscriberClerk->id}")
            ->assertRedirect('/dashboard');

        $this->assertAuthenticatedAs($this->subscriberClerk);
    }

    public function test_stopping_returns_the_original_person(): void
    {
        $this->actingAs($this->support)->post("/impersonate/{$this->subscriberClerk->id}");

        $this->post('/impersonate-stop')->assertRedirect('/dashboard');

        $this->assertAuthenticatedAs($this->support);
    }

    /* ------------------------------------------------------------- the fences */

    /**
     * THE CENTRAL REFUSAL. Support holds abilities the clerk does not, so the
     * reverse direction is an escalation and is refused.
     */
    public function test_nobody_can_impersonate_upward(): void
    {
        $admin = $this->userWith(Abilities::all(), 'Administrator');

        $this->actingAs($this->support)
            ->post("/impersonate/{$admin->id}")
            ->assertSessionHasErrors('impersonate');

        $this->assertAuthenticatedAs($this->support);
    }

    /** Even one extra ability is enough - it is a set comparison, not a rank. */
    public function test_one_extra_ability_is_enough_to_refuse(): void
    {
        $slightlyMore = $this->userWith([
            Abilities::name('viewAny', 'clients'),
            Abilities::name('view', 'clients'),
            Abilities::name('delete', 'clients'),
        ], 'Senior');

        $this->actingAs($this->support)
            ->post("/impersonate/{$slightlyMore->id}")
            ->assertSessionHasErrors('impersonate');

        $this->assertAuthenticatedAs($this->support);
    }

    public function test_the_ability_is_required(): void
    {
        $withoutIt = $this->userWith([Abilities::name('viewAny', 'clients')], 'Nobody');

        $this->actingAs($withoutIt)
            ->post("/impersonate/{$this->subscriberClerk->id}")
            ->assertSessionHasErrors('impersonate');

        $this->assertAuthenticatedAs($withoutIt);
    }

    /**
     * ANOTHER ORGANISATION'S ACCOUNT IS NOT FOUND, not merely refused. A 403
     * would confirm the id exists somewhere, which is a membership oracle.
     */
    public function test_another_tenants_account_is_a_404(): void
    {
        $other = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);
        $theirs = $this->userWith([], 'Theirs', $other);

        $this->actingAs($this->support)
            ->post("/impersonate/{$theirs->id}")
            ->assertNotFound();

        $this->assertAuthenticatedAs($this->support);
    }

    public function test_impersonating_yourself_is_refused(): void
    {
        $this->actingAs($this->support)
            ->post("/impersonate/{$this->support->id}")
            ->assertSessionHasErrors('impersonate');
    }

    /** Nesting would make "who is really doing this" a stack rather than a fact. */
    public function test_impersonation_cannot_be_nested(): void
    {
        $another = $this->userWith([], 'Another');

        $this->actingAs($this->support)->post("/impersonate/{$this->subscriberClerk->id}");

        $this->post("/impersonate/{$another->id}")->assertSessionHasErrors('impersonate');

        $this->assertAuthenticatedAs($this->subscriberClerk);
    }

    /* ------------------------------------------------------- frozen credentials */

    /**
     * WITHOUT THIS, IMPERSONATION IS ACCOUNT THEFT. Changing the password while
     * wearing the account leaves a permanent way back in that belongs to the
     * visitor rather than the owner.
     */
    public function test_credentials_cannot_be_changed_while_impersonating(): void
    {
        $this->actingAs($this->support)->post("/impersonate/{$this->subscriberClerk->id}");

        $this->put('/settings/password', [
            'current_password' => 'password',
            'password' => 'a-new-password-1',
            'password_confirmation' => 'a-new-password-1',
        ])->assertForbidden();
    }

    /** Reading is the whole point of impersonating, so pages still render. */
    public function test_reading_settings_is_still_allowed(): void
    {
        $this->actingAs($this->support)->post("/impersonate/{$this->subscriberClerk->id}");

        $this->get('/settings/profile')->assertOk();
    }

    /* ------------------------------------------------------------------ audit */

    /**
     * BOTH ENDS ARE RECORDED. A start with no stop is what a session that was
     * never handed back looks like in the trail, and that is only visible if
     * both are written.
     */
    public function test_both_ends_are_audited(): void
    {
        $this->actingAs($this->support)->post("/impersonate/{$this->subscriberClerk->id}");
        $this->post('/impersonate-stop');

        $events = DB::table('audit_entries')
            ->whereIn('event', ['impersonation.started', 'impersonation.stopped'])
            ->pluck('event')
            ->all();

        $this->assertContains('impersonation.started', $events);
        $this->assertContains('impersonation.stopped', $events);
    }

    /**
     * THE START IS ATTRIBUTED TO THE REAL PERSON. Recorded after the swap it
     * would credit the impersonated account with starting its own impersonation
     * - a trail that exonerates exactly the person it should name.
     */
    public function test_the_start_names_the_real_actor(): void
    {
        $this->actingAs($this->support)->post("/impersonate/{$this->subscriberClerk->id}");

        $entry = DB::table('audit_entries')->where('event', 'impersonation.started')->first();

        $this->assertNotNull($entry);
        $this->assertSame($this->support->id, $entry->user_id);
    }

    /* ------------------------------------------------------------------ session */

    /** A new session id on both transitions - see the class note on fixation. */
    public function test_the_session_id_changes_on_both_transitions(): void
    {
        $this->actingAs($this->support)->get('/dashboard');
        $before = session()->getId();

        $this->post("/impersonate/{$this->subscriberClerk->id}");
        $during = session()->getId();

        $this->post('/impersonate-stop');
        $after = session()->getId();

        $this->assertNotSame($before, $during, 'Starting must not reuse the session id.');
        $this->assertNotSame($during, $after, 'Stopping must not reuse it either.');
    }

    /** Stopping when nothing is being impersonated is harmless, not an error. */
    public function test_stopping_without_impersonating_is_a_no_op(): void
    {
        $this->actingAs($this->support)->post('/impersonate-stop')->assertRedirect();

        $this->assertAuthenticatedAs($this->support);
    }
}
