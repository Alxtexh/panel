<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\EnsurePanelIsUnlocked;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

/**
 * Locking the panel.
 *
 * WHAT THIS PROTECTS AGAINST is the person standing at an unattended desk. It
 * is NOT a boundary against anyone holding the session cookie - the session
 * stays valid throughout, which is the whole point - so the tests are about the
 * gate holding, not about the session being destroyed.
 *
 * The failure that matters most is the one that bricks the panel: a middleware
 * that redirects the lock screen to itself, or that locks out the unlock
 * endpoint, leaves the operator with no way back in until the session expires.
 */
final class LockScreenTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
            'password' => Hash::make('correct-horse'),
        ]);
    }

    /* ------------------------------------------------------------ the gate */

    public function test_locking_redirects_the_panel_to_the_lock_screen(): void
    {
        $this->actingAs($this->user)->post('/lock')->assertRedirect('/screens/locked');

        $this->actingAs($this->user)->get('/dashboard')->assertRedirect('/screens/locked');
    }

    /**
     * THE BRICKING CASE.
     *
     * If the lock screen is not exempt from its own middleware it redirects to
     * itself, and the panel is unusable until the session expires.
     */
    public function test_the_lock_screen_itself_stays_reachable(): void
    {
        $this->actingAs($this->user)->post('/lock');

        $this->actingAs($this->user)->get('/screens/locked')->assertOk();
    }

    public function test_the_lock_screen_hides_passkey_unlock_when_the_user_has_none(): void
    {
        $this->actingAs($this->user)->post('/lock');

        $props = $this->actingAs($this->user)
            ->get('/screens/locked')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertNull($props['passkeys'] ?? null);
    }

    public function test_the_lock_screen_is_ok_when_the_passkeys_table_is_missing(): void
    {
        \Illuminate\Support\Facades\Schema::dropIfExists('passkeys');

        $this->actingAs($this->user)->post('/lock');

        $this->actingAs($this->user)->get('/screens/locked')->assertOk();
    }

    public function test_passkey_unlock_stays_reachable_while_locked(): void
    {
        $this->actingAs($this->user)->post('/lock');

        $this->actingAs($this->user)
            ->getJson('/unlock/passkey/options')
            ->assertOk();
    }

    /** And so does the way out, for somebody who is not the account holder. */
    public function test_signing_out_stays_reachable_while_locked(): void
    {
        $this->actingAs($this->user)->post('/lock');

        $this->actingAs($this->user)->post('/logout')->assertRedirect();
    }

    /**
     * A JSON caller gets a STATUS, not a redirect.
     *
     * The panel's own fetch endpoints - inline edits, record actions, uploads -
     * cannot follow a redirect to an HTML page; they would parse the lock
     * screen as a failed response with nothing to say about why.
     */
    public function test_a_locked_json_request_gets_423_not_a_redirect(): void
    {
        $this->actingAs($this->user)->post('/lock');

        $this->actingAs($this->user)
            ->getJson('/clients')
            ->assertStatus(423)
            ->assertJsonPath('message', 'The panel is locked.');
    }

    /* --------------------------------------------------------- unlocking */

    public function test_the_right_password_unlocks_the_panel(): void
    {
        $this->actingAs($this->user)->post('/lock');

        $this->actingAs($this->user)
            ->post('/unlock', ['password' => 'correct-horse'])
            ->assertRedirect();

        $this->actingAs($this->user)->get('/dashboard')->assertOk();
    }

    public function test_the_wrong_password_does_not_unlock_it(): void
    {
        $this->actingAs($this->user)->post('/lock');

        $this->actingAs($this->user)
            ->post('/unlock', ['password' => 'not-the-password'])
            ->assertSessionHasErrors('password');

        $this->actingAs($this->user)->get('/dashboard')->assertRedirect('/screens/locked');
    }

    /**
     * It returns you to WHERE YOU WERE.
     *
     * Coming back to an empty dashboard is most of why people do not lock their
     * screens - the point is to resume, not to restart.
     */
    public function test_unlocking_returns_to_the_page_you_locked_from(): void
    {
        $this->actingAs($this->user)
            ->from('/clients')
            ->post('/lock');

        $this->actingAs($this->user)
            ->post('/unlock', ['password' => 'correct-horse'])
            ->assertRedirect('/clients');
    }

    /**
     * A NEW SESSION ID ON UNLOCK.
     *
     * The lock exists because the machine was left unattended, which is exactly
     * the window in which a session id might have been observed.
     */
    public function test_unlocking_regenerates_the_session(): void
    {
        $this->actingAs($this->user)->post('/lock');

        $before = session()->getId();

        $this->actingAs($this->user)->post('/unlock', ['password' => 'correct-horse']);

        $this->assertNotSame($before, session()->getId());
    }

    /**
     * THE UNLOCK FORM IS THROTTLED.
     *
     * Without it this is a password oracle anyone at the keyboard can hammer -
     * and unlike the sign-in form they already know the account, so it is a
     * single-factor guess with the username removed.
     */
    public function test_repeated_wrong_passwords_are_throttled(): void
    {
        $this->actingAs($this->user)->post('/lock');

        for ($i = 0; $i < 6; $i++) {
            $this->actingAs($this->user)->post('/unlock', ['password' => 'wrong']);
        }

        $this->actingAs($this->user)
            ->post('/unlock', ['password' => 'wrong'])
            ->assertStatus(429);
    }

    /** An unlocked panel is simply not affected by any of this. */
    public function test_an_unlocked_panel_is_untouched(): void
    {
        $this->actingAs($this->user)->get('/dashboard')->assertOk();

        $this->assertFalse(session()->has(EnsurePanelIsUnlocked::SESSION_KEY));
    }
}
