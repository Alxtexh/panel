<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\Devices;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

/**
 * Where an account is signed in, and signing those places out.
 *
 * IT ANSWERS HONESTLY WHEN IT CANNOT ANSWER. Sessions are only listable on a
 * driver that keeps a server-side record, so on `array` or `cookie` there is
 * nothing to enumerate - and the right response is an empty list rather than
 * an exception. A security screen that 500s is worse than one that offers
 * less, and "you are signed in nowhere" is at least not a lie about somebody
 * else's sessions.
 *
 * EVERY LOOKUP IS SCOPED TO THE ACTING USER. The id in a sign-out request comes
 * from the browser, so an unscoped `delete where id = ?` is "sign out any
 * session in the installation" - reachable by anybody with an account and a
 * guessable id.
 */
final class DevicesTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    private User $colleague;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = $this->makeUser('operator@example.test', $tenant);
        $this->colleague = $this->makeUser('colleague@example.test', $tenant);

        config(['session.driver' => 'database']);

        $this->actingAs($this->user);
    }

    private function makeUser(string $email, Tenant $tenant): User
    {
        return User::create([
            'tenant_id' => $tenant->id,
            'name' => $email,
            'email' => $email,
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    private function sessionRow(User $for, string $id, string $agent = 'Mozilla/5.0 (Windows NT 10.0) Chrome/120.0'): void
    {
        DB::table('sessions')->insert([
            'id' => $id,
            'user_id' => $for->getKey(),
            'ip_address' => '127.0.0.1',
            'user_agent' => $agent,
            'payload' => base64_encode(serialize([])),
            'last_activity' => time(),
        ]);
    }

    /**
     * A REQUEST THAT KNOWS WHO IS SIGNED IN, and has a session.
     *
     * `actingAs` sets the AUTH user; it does not attach a user resolver to the
     * bare container request, which only the middleware stack does. `Devices`
     * reads `$request->user()`, so without this every lookup sees null and
     * returns an empty list - which is indistinguishable from the driver
     * keeping no record, and would have made four of the tests below pass for
     * the wrong reason.
     */
    private function request()
    {
        $request = request();

        if (! $request->hasSession()) {
            $request->setLaravelSession(app('session.store'));
        }

        $request->setUserResolver(static fn () => auth()->user());

        return $request;
    }

    public function test_a_driver_that_keeps_no_record_lists_nothing_rather_than_failing(): void
    {
        config(['session.driver' => 'array']);

        $this->assertFalse(Devices::available());
        $this->assertSame([], Devices::forUser($this->request()));
    }

    public function test_it_lists_the_acting_users_sessions(): void
    {
        $this->sessionRow($this->user, 'mine-one');
        $this->sessionRow($this->user, 'mine-two');

        $this->assertCount(2, Devices::forUser($this->request()));
    }

    /**
     * A COLLEAGUE'S SESSIONS ARE NOT LISTED.
     *
     * The screen is "where am I signed in", and a list that reached other
     * accounts would answer a question nobody asked - with the ip addresses
     * and user agents of people who did not consent to that.
     */
    public function test_it_never_lists_another_users_sessions(): void
    {
        $this->sessionRow($this->user, 'mine');
        $this->sessionRow($this->colleague, 'theirs');

        $ids = array_column(Devices::forUser($this->request()), 'id');

        $this->assertSame(['mine'], $ids);
    }

    /**
     * A USER AGENT IS TURNED INTO SOMETHING A PERSON RECOGNISES.
     *
     * The list has one job - spotting a device that is not yours - and a raw
     * agent string is unreadable, so nobody spots anything.
     */
    public function test_it_describes_a_session_in_recognisable_terms(): void
    {
        $this->sessionRow($this->user, 'mine', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1');

        $device = Devices::forUser($this->request())[0];

        $this->assertSame('Safari', $device['browser']);
        $this->assertSame('iPhone', $device['platform']);
    }

    /**
     * CHROME MUST BE TESTED BEFORE SAFARI.
     *
     * Every Chrome user agent also contains "Safari", so the obvious ordering
     * reports every Chrome session as Safari - which makes the list useless for
     * the one job it has.
     */
    public function test_chrome_is_not_reported_as_safari(): void
    {
        $this->sessionRow($this->user, 'mine', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        $device = Devices::forUser($this->request())[0];

        $this->assertSame('Chrome', $device['browser']);
        $this->assertSame('Windows', $device['platform']);
    }

    public function test_a_session_can_be_signed_out(): void
    {
        $this->sessionRow($this->user, 'mine');

        $this->assertTrue(Devices::forget($this->request(), 'mine'));
        $this->assertSame(0, DB::table('sessions')->where('id', 'mine')->count());
    }

    /**
     * ANOTHER USER'S SESSION CANNOT BE SIGNED OUT.
     *
     * The id comes from the browser. Unscoped, this endpoint is "sign out
     * anybody" - a denial of service against a colleague, reachable with an
     * ordinary account and a guessable id.
     */
    public function test_another_users_session_cannot_be_signed_out(): void
    {
        $this->sessionRow($this->colleague, 'theirs');

        $this->assertFalse(Devices::forget($this->request(), 'theirs'));
        $this->assertSame(
            1,
            DB::table('sessions')->where('id', 'theirs')->count(),
            'A colleague’s session was signed out.',
        );
    }

    public function test_signing_out_everywhere_else_leaves_other_users_alone(): void
    {
        $this->sessionRow($this->user, 'mine-one');
        $this->sessionRow($this->user, 'mine-two');
        $this->sessionRow($this->colleague, 'theirs');

        Devices::forgetOthers($this->request());

        $this->assertSame(
            1,
            DB::table('sessions')->where('user_id', $this->colleague->getKey())->count(),
            'Signing out other devices reached another account.',
        );
    }

    public function test_an_unknown_session_id_is_refused_rather_than_erroring(): void
    {
        $this->assertFalse(Devices::forget($this->request(), 'no-such-session'));
    }
}
