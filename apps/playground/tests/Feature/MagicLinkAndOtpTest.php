<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Tests\TestCase;

/**
 * Two ways in that do not involve typing a password.
 *
 * ALMOST EVERY TEST HERE IS A REFUSAL, because both features are ways to obtain
 * a session without a password and the interesting question is never "does the
 * happy path work" - it is whether a used code works twice, whether an expired
 * link still signs you in, and whether either can be used to discover who has an
 * account.
 *
 * BOTH ARE OPTIONAL, and the tests assert the routes are ABSENT rather than
 * merely refusing when turned off. A feature that 403s still advertises that it
 * exists; a 404 says nothing at all, which is the right answer for a capability
 * this installation has not enabled.
 */
final class MagicLinkAndOtpTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        Mail::fake();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->tenant->domains()->create(['domain' => 'acme.panelkit.test']);

        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email' => 'grace@acme.test',
            'password' => Hash::make('original-password'),
            'email_verified_at' => now(),
        ]);
    }

    /* ============================================================ OTP RESET */

    private function otpMode(): void
    {
        config(['panel.auth.password_reset' => 'otp']);
    }

    /** In link mode the OTP routes do not exist at all. */
    public function test_the_otp_routes_are_absent_in_link_mode(): void
    {
        config(['panel.auth.password_reset' => 'link']);

        $this->post('/auth/otp/send', ['email' => $this->user->email])->assertNotFound();
    }

    public function test_a_code_is_emailed_and_stored_hashed(): void
    {
        $this->otpMode();

        $this->post('/auth/otp/send', ['email' => $this->user->email])->assertRedirect();

        $row = DB::table('password_reset_tokens')->where('email', $this->user->email)->first();

        $this->assertNotNull($row);
        $this->assertNotEmpty($row->token);
        // A six-digit code stored as-is would be readable by anybody with database
        // access, which includes backups and support tooling.
        $this->assertMatchesRegularExpression('/^\$2y\$/', $row->token, 'The code is stored hashed.');

        // And something was actually sent - a stored code nobody receives is a
        // reset that silently never arrives.
        Mail::assertSentCount(1);
    }

    /**
     * AN UNKNOWN ADDRESS LOOKS IDENTICAL. Otherwise this endpoint is a way to
     * discover who works at an organisation, and unlike a login form it needs no
     * password to probe with.
     */
    public function test_an_unknown_address_gets_the_same_response(): void
    {
        $this->otpMode();

        $known = $this->post('/auth/otp/send', ['email' => $this->user->email]);
        $unknown = $this->post('/auth/otp/send', ['email' => 'nobody@acme.test']);

        $this->assertSame($known->status(), $unknown->status());
        $this->assertSame(
            $known->getSession()->get('status'),
            $unknown->getSession()->get('status'),
        );
        $this->assertSame(0, DB::table('password_reset_tokens')->where('email', 'nobody@acme.test')->count());
    }

    public function test_a_correct_code_resets_the_password(): void
    {
        $this->otpMode();

        $code = $this->issueCode();

        $this->post('/auth/otp/reset', [
            'email' => $this->user->email,
            'code' => $code,
            'password' => 'a-new-password-1',
            'password_confirmation' => 'a-new-password-1',
        ])->assertRedirect(route('login'));

        $this->assertTrue(Hash::check('a-new-password-1', $this->user->fresh()->password));
    }

    /** THE CENTRAL REFUSAL: a code is spent once. */
    public function test_a_code_cannot_be_used_twice(): void
    {
        $this->otpMode();

        $code = $this->issueCode();
        $payload = [
            'email' => $this->user->email,
            'code' => $code,
            'password' => 'a-new-password-1',
            'password_confirmation' => 'a-new-password-1',
        ];

        $this->post('/auth/otp/reset', $payload)->assertRedirect(route('login'));

        $this->post('/auth/otp/reset', $payload + ['password' => 'another-password-2'])
            ->assertSessionHasErrors('code');

        $this->assertTrue(
            Hash::check('a-new-password-1', $this->user->fresh()->password),
            'The second attempt changed nothing.',
        );
    }

    public function test_a_wrong_code_is_refused(): void
    {
        $this->otpMode();
        $this->issueCode();

        $this->post('/auth/otp/reset', [
            'email' => $this->user->email,
            'code' => '000000',
            'password' => 'a-new-password-1',
            'password_confirmation' => 'a-new-password-1',
        ])->assertSessionHasErrors('code');

        $this->assertTrue(Hash::check('original-password', $this->user->fresh()->password));
    }

    public function test_an_expired_code_is_refused(): void
    {
        $this->otpMode();

        $code = $this->issueCode();

        $this->travel(30)->minutes();

        $this->post('/auth/otp/reset', [
            'email' => $this->user->email,
            'code' => $code,
            'password' => 'a-new-password-1',
            'password_confirmation' => 'a-new-password-1',
        ])->assertSessionHasErrors('code');

        $this->assertTrue(Hash::check('original-password', $this->user->fresh()->password));
    }

    /**
     * A reset invalidates remember-me. A reset is usually a response to a
     * suspected compromise, and leaving the token alive keeps whoever prompted
     * it signed in - the one outcome the person resetting assumes cannot happen.
     */
    public function test_a_reset_invalidates_remember_me(): void
    {
        $this->otpMode();

        $this->user->forceFill(['remember_token' => 'still-signed-in'])->save();

        $code = $this->issueCode();

        $this->post('/auth/otp/reset', [
            'email' => $this->user->email,
            'code' => $code,
            'password' => 'a-new-password-1',
            'password_confirmation' => 'a-new-password-1',
        ]);

        $this->assertNull($this->user->fresh()->remember_token);
    }

    /* ========================================================== MAGIC LINK */

    private function magicOn(): void
    {
        config(['panel.auth.magic_link' => true]);
    }

    /** OFF BY DEFAULT - the route does not exist until somebody enables it. */
    public function test_magic_link_is_absent_by_default(): void
    {
        config(['panel.auth.magic_link' => false]);

        $this->post('/auth/magic-link', ['email' => $this->user->email])->assertNotFound();
    }

    public function test_a_link_signs_the_person_in(): void
    {
        $this->magicOn();

        $this->get($this->magicUrl())->assertRedirect('/dashboard');

        $this->assertAuthenticatedAs($this->user);
    }

    /** THE CENTRAL REFUSAL: a link works once. */
    public function test_a_link_cannot_be_used_twice(): void
    {
        $this->magicOn();

        $url = $this->magicUrl();

        $this->get($url)->assertRedirect('/dashboard');
        $this->post('/logout');

        $this->get($url)->assertRedirect(route('login'));
        $this->assertGuest();
    }

    /**
     * AN UNSIGNED URL IS REFUSED even with a valid token - the signature proves
     * the application issued it, and without that check a token leaked from the
     * database is a sign-in.
     */
    public function test_an_unsigned_url_is_refused(): void
    {
        $this->magicOn();

        $token = (new \PanelKit\Panel\Auth\OneTimeCredential('magic_login_tokens', 10))
            ->issue($this->user->email, $this->tenant->id, numeric: false);

        $this->get("/auth/magic-link/consume?email={$this->user->email}&token={$token}")
            ->assertStatus(401);

        $this->assertGuest();
    }

    public function test_an_expired_link_is_refused(): void
    {
        $this->magicOn();

        $url = $this->magicUrl();

        $this->travel(30)->minutes();

        $this->get($url)->assertStatus(401);
        $this->assertGuest();
    }

    /** And it never reveals whether the address exists. */
    public function test_requesting_a_link_says_nothing_about_the_address(): void
    {
        $this->magicOn();

        $known = $this->post('/auth/magic-link', ['email' => $this->user->email]);
        $unknown = $this->post('/auth/magic-link', ['email' => 'nobody@acme.test']);

        $this->assertSame($known->status(), $unknown->status());
        $this->assertSame(0, DB::table('magic_login_tokens')->where('email', 'nobody@acme.test')->count());
    }

    /* ---------------------------------------------------------------- setup */

    /**
     * Issue a code directly, rather than scraping it out of the email.
     *
     * `Mail::raw` does not send a Mailable, so `Mail::assertSent` cannot match
     * it and there is no rendered view to read a code from. Reaching through the
     * mail layer to recover a secret is also the wrong shape for a test: it
     * couples every case below to how the message happens to be worded.
     *
     * The endpoint's own behaviour - that it stores a hashed code and reveals
     * nothing about unknown addresses - is asserted separately above. What these
     * cases are about is the credential lifecycle, and issuing it directly tests
     * exactly that, through the same object the controller uses.
     */
    private function issueCode(): string
    {
        return (new \PanelKit\Panel\Auth\OneTimeCredential(
            'password_reset_tokens',
            (int) config('panel.auth.otp_lifetime', 10),
        ))->issue($this->user->email, null);
    }

    private function magicUrl(): string
    {
        $token = (new \PanelKit\Panel\Auth\OneTimeCredential('magic_login_tokens', 10))
            ->issue($this->user->email, null, numeric: false);

        return URL::temporarySignedRoute(
            'magic-link.consume',
            now()->addMinutes(10),
            ['email' => $this->user->email, 'token' => $token],
        );
    }
}
