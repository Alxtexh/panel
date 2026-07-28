<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Controllers\Settings\DeviceController;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * The devices signed in to this account.
 *
 * A SESSION IS AN AUTHENTICATION FACT. There was briefly a "Sessions" workspace
 * built around client CONNECTION sessions - an ISP concept sharing the word -
 * and putting that in the navigation under that name was a category error:
 * somebody looking for "sessions" in a panel wants to know where they are
 * logged in, which is a question about their own account.
 *
 * The interesting tests are the refusals. Signing a device out is an
 * irreversible act performed by id, so the only thing standing between this and
 * "sign out any account" is that the lookup is scoped to the acting user.
 */
final class SignedInDevicesTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $me;

    private User $colleague;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        $this->me = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->colleague = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        /*
         * The suite runs on the `array` session driver, which keeps no
         * server-side record - so `forUser` correctly returns nothing there.
         * Listing devices is only meaningful with a persisted store, and that
         * is what these tests are about.
         */
        config(['session.driver' => 'database']);

        $this->actingAs($this->me);
    }

    /* ------------------------------------------------------------- listing */

    public function test_a_session_is_described_in_terms_somebody_recognises(): void
    {
        $this->makeSession($this->me, 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1');

        $devices = DeviceController::forUser($this->request());

        $this->assertSame('Safari', $devices[0]['browser']);
        $this->assertSame('iPhone', $devices[0]['platform']);
    }

    /**
     * CHROME MUST BE TESTED BEFORE SAFARI. Every Chrome user agent also contains
     * "Safari", so the obvious ordering reports every Chrome session as Safari -
     * which makes the list useless for the one job it has: spotting a device
     * that is not yours.
     */
    public function test_chrome_is_not_reported_as_safari(): void
    {
        $this->makeSession($this->me, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        $devices = DeviceController::forUser($this->request());

        $this->assertSame('Chrome', $devices[0]['browser']);
        $this->assertSame('Windows', $devices[0]['platform']);
    }

    /** An agent nothing matches says so rather than guessing. */
    public function test_an_unrecognised_agent_is_admitted_rather_than_guessed(): void
    {
        $this->makeSession($this->me, 'curl/8.4.0');

        $devices = DeviceController::forUser($this->request());

        $this->assertSame('Unknown browser', $devices[0]['browser']);
        $this->assertSame('Unknown device', $devices[0]['platform']);
    }

    /** A colleague's sessions are not this person's business. */
    public function test_only_my_own_sessions_are_listed(): void
    {
        $this->makeSession($this->me, 'Chrome/120');
        $this->makeSession($this->colleague, 'Chrome/120');

        $this->assertCount(1, DeviceController::forUser($this->request()));
    }

    /* ------------------------------------------------------------ signing out */

    public function test_a_session_can_be_signed_out(): void
    {
        $id = $this->makeSession($this->me, 'Chrome/120');

        $this->delete("/settings/devices/{$id}")->assertRedirect();

        $this->assertSame(0, DB::table('sessions')->where('id', $id)->count());
    }

    /**
     * THE CENTRAL GUARD. Session ids are opaque, but "hard to guess" is not an
     * authorization check - without the user constraint this endpoint would sign
     * out any account whose id ever appeared in a log.
     */
    public function test_another_users_session_cannot_be_signed_out(): void
    {
        $theirs = $this->makeSession($this->colleague, 'Chrome/120');

        $this->delete("/settings/devices/{$theirs}")->assertNotFound();

        $this->assertSame(1, DB::table('sessions')->where('id', $theirs)->count());
    }

    /**
     * "Sign out everywhere else" SPARES THE CURRENT SESSION. Signing yourself
     * out along with everything else is what a Log out button does; somebody who
     * has just found an unfamiliar device wants that device gone, not to be
     * thrown to a login screen wondering whether it worked.
     */
    public function test_signing_out_others_keeps_the_current_session(): void
    {
        $mine = $this->makeSession($this->me, 'Chrome/120');
        $other = $this->makeSession($this->me, 'Firefox/121');
        $theirs = $this->makeSession($this->colleague, 'Chrome/120');

        // The request's own session is the one to keep.
        $this->withSession(['_token' => 'x']);

        $this->delete('/settings/devices')->assertRedirect();

        $this->assertSame(0, DB::table('sessions')->where('id', $mine)->count());
        $this->assertSame(0, DB::table('sessions')->where('id', $other)->count());
        $this->assertSame(
            1,
            DB::table('sessions')->where('id', $theirs)->count(),
            "Another user's sessions are untouched.",
        );
    }

    public function test_a_guest_cannot_sign_anything_out(): void
    {
        $id = $this->makeSession($this->me, 'Chrome/120');

        auth()->logout();

        $this->delete("/settings/devices/{$id}")->assertRedirect('/login');

        $this->assertSame(1, DB::table('sessions')->where('id', $id)->count());
    }

    /* ---------------------------------------------------------------- setup */

    private function request(): Request
    {
        $request = Request::create('/settings/security');

        $request->setUserResolver(fn (): User => $this->me);
        $request->setLaravelSession(app('session.store'));

        return $request;
    }

    private function makeSession(User $user, string $agent): string
    {
        $id = bin2hex(random_bytes(20));

        DB::table('sessions')->insert([
            'id' => $id,
            'user_id' => $user->id,
            'ip_address' => '10.0.0.1',
            'user_agent' => $agent,
            'payload' => base64_encode(serialize([])),
            'last_activity' => now()->timestamp,
        ]);

        return $id;
    }
}
