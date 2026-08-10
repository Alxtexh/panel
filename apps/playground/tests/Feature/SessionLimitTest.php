<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Auth\EnforceSessionLimit;
use Tests\TestCase;

/**
 * How many places one account may be signed in at once.
 *
 * THE DIRECTION OF THE EVICTION IS THE WHOLE DESIGN. Ending the OLDEST session
 * means the person at the keyboard always gets in; refusing the NEW login would
 * lock them out on behalf of a session they cannot reach - a laptop at the
 * office, a phone that was reset, a browser closed without signing out. The
 * tests below are mostly about that and about the current session never being
 * the casualty.
 */
final class SessionLimitTest extends TestCase
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
        ]);

        config(['session.driver' => 'database']);
    }

    private function storedSession(string $id, int $ageInMinutes): string
    {
        DB::table('sessions')->insert([
            'id' => $id,
            'user_id' => $this->user->id,
            'ip_address' => '10.0.0.1',
            'user_agent' => 'Test',
            'payload' => base64_encode(serialize([])),
            'last_activity' => now()->subMinutes($ageInMinutes)->timestamp,
        ]);

        return $id;
    }

    private function signIn(): void
    {
        (new EnforceSessionLimit)->handle(new Login('web', $this->user, false));
    }

    /* --------------------------------------------------------------- off */

    /**
     * OFF BY DEFAULT. A limit has real consequences for anybody using a laptop,
     * a desktop and a phone, so it is a decision an installation makes rather
     * than one the framework makes for it.
     */
    public function test_nothing_is_ended_when_no_limit_is_set(): void
    {
        config(['panel.security.max_sessions' => 0]);

        $this->storedSession('a', 60);
        $this->storedSession('b', 30);
        $this->storedSession('c', 10);

        $this->signIn();

        $this->assertSame(3, DB::table('sessions')->count());
    }

    /* ------------------------------------------------------------ enforced */

    public function test_the_oldest_sessions_end_when_the_limit_is_exceeded(): void
    {
        config(['panel.security.max_sessions' => 2]);

        $this->storedSession('oldest', 120);
        $this->storedSession('middle', 60);
        $this->storedSession('newest', 5);

        $this->signIn();

        $remaining = DB::table('sessions')->pluck('id')->all();

        // The limit is 2 and the CURRENT session counts as one of them, so only
        // the single newest other survives.
        $this->assertSame(['newest'], $remaining);
    }

    /**
     * THE CURRENT SESSION IS NEVER THE CASUALTY. Being signed out by one's own
     * login is the exact failure this class exists to avoid, and ordering by
     * activity does not guarantee it - the row may not have been written yet.
     */
    public function test_the_session_signing_in_is_never_ended(): void
    {
        config(['panel.security.max_sessions' => 1]);

        $current = session()->getId();

        $this->storedSession($current, 0);
        $this->storedSession('another', 1);

        $this->signIn();

        $this->assertNotNull(
            DB::table('sessions')->where('id', $current)->first(),
            'The session that just signed in survives.',
        );
        $this->assertNull(DB::table('sessions')->where('id', 'another')->first());
    }

    /** Under the limit, nothing happens at all. */
    public function test_nothing_is_ended_below_the_limit(): void
    {
        config(['panel.security.max_sessions' => 5]);

        $this->storedSession('a', 60);
        $this->storedSession('b', 30);

        $this->signIn();

        $this->assertSame(2, DB::table('sessions')->count());
    }

    /** Another person's sessions are not touched by this person signing in. */
    public function test_only_this_accounts_sessions_are_considered(): void
    {
        config(['panel.security.max_sessions' => 1]);

        $tenant = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $colleague = User::factory()->create(['tenant_id' => $tenant->id]);

        DB::table('sessions')->insert([
            'id' => 'theirs',
            'user_id' => $colleague->id,
            'ip_address' => '10.0.0.2',
            'user_agent' => 'Test',
            'payload' => base64_encode(serialize([])),
            'last_activity' => now()->subHour()->timestamp,
        ]);

        $this->storedSession('mine-old', 120);
        $this->storedSession('mine-new', 5);

        $this->signIn();

        $this->assertNotNull(
            DB::table('sessions')->where('id', 'theirs')->first(),
            "A colleague's session is not evicted by somebody else signing in.",
        );
    }

    /* ------------------------------------------------------- unusable store */

    /**
     * A COOKIE STORE HAS NOTHING TO COUNT, so the limit silently does nothing -
     * which is why `panel:doctor` reports the combination. A configured limit
     * that cannot work is worse than no limit, because it is believed.
     */
    public function test_a_cookie_session_store_is_left_alone(): void
    {
        config(['panel.security.max_sessions' => 1, 'session.driver' => 'cookie']);

        $this->storedSession('a', 60);
        $this->storedSession('b', 30);

        $this->signIn();

        $this->assertSame(2, DB::table('sessions')->count());
    }
}
