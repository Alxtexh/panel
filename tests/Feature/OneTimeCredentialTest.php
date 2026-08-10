<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\OneTimeCredential;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

/**
 * Six digits that let somebody in, which is a very small secret.
 *
 * A NUMERIC CODE IS A MILLION POSSIBILITIES - nothing to a script - so every
 * property here is about narrowing the window rather than about the code being
 * hard. It is single-use, short-lived, replaced rather than added to on
 * resend, and stored hashed.
 *
 * HASHED AT REST, because the table is the thing an attacker reaches through a
 * read-only SQL injection or a leaked backup. A plaintext column would turn
 * either of those into "sign in as anybody who asked for a code".
 *
 * REPLACED, NOT ADDED, ON RESEND. Several live codes for one address multiply
 * the guessing surface by however many times somebody impatiently clicked the
 * button, and the older ones are of no use to anybody legitimate.
 */
final class OneTimeCredentialTest extends TestCase
{
    use RefreshDatabase;

    private const TABLE = 'one_time_credentials';

    private function credential(int $lifetimeMinutes = 10): OneTimeCredential
    {
        return new OneTimeCredential(self::TABLE, $lifetimeMinutes);
    }

    public function test_a_code_can_be_issued_and_redeemed_once(): void
    {
        $otp = $this->credential();

        $code = $otp->issue('person@example.test', 1);

        $this->assertTrue($otp->redeem('person@example.test', 1, $code));
    }

    /**
     * SPENT MEANS SPENT. A code that survives redemption is a code somebody
     * can replay from a browser history, a mail client cache, or a shoulder.
     */
    public function test_a_code_cannot_be_redeemed_twice(): void
    {
        $otp = $this->credential();

        $code = $otp->issue('person@example.test', 1);

        $this->assertTrue($otp->redeem('person@example.test', 1, $code));
        $this->assertFalse(
            $otp->redeem('person@example.test', 1, $code),
            'A one-time code was accepted a second time.',
        );
    }

    public function test_a_wrong_code_is_refused(): void
    {
        $otp = $this->credential();

        $otp->issue('person@example.test', 1);

        $this->assertFalse($otp->redeem('person@example.test', 1, '000000'));
    }

    /**
     * A CODE BELONGS TO THE ADDRESS IT WAS ISSUED TO.
     *
     * Otherwise a code mailed to one person is a code that signs in another -
     * and the attacker supplies both halves of that pairing.
     */
    public function test_a_code_issued_to_one_address_does_not_work_for_another(): void
    {
        $otp = $this->credential();

        $code = $otp->issue('person@example.test', 1);

        $this->assertFalse($otp->redeem('somebody-else@example.test', 1, $code));
    }

    /**
     * AND TO THE ORGANISATION IT WAS ISSUED IN.
     *
     * The same address can exist in two organisations; a code that crossed
     * would be a way into the wrong one.
     */
    public function test_a_code_does_not_cross_organisations(): void
    {
        $otp = $this->credential();

        $code = $otp->issue('person@example.test', 1);

        $this->assertFalse($otp->redeem('person@example.test', 2, $code));
    }

    public function test_an_expired_code_is_refused(): void
    {
        $otp = $this->credential(lifetimeMinutes: 10);

        $code = $otp->issue('person@example.test', 1);

        DB::table(self::TABLE)->update(['created_at' => now()->subMinutes(30)]);

        $this->assertFalse(
            $otp->redeem('person@example.test', 1, $code),
            'A code outlived its window.',
        );
    }

    /**
     * RESENDING REPLACES RATHER THAN ADDS, and the old one stops working.
     *
     * Asserted from both sides: one row remains, and the superseded code is
     * refused. Only counting rows would pass against an implementation that
     * kept the old hash and overwrote the wrong column.
     */
    public function test_reissuing_replaces_the_outstanding_code(): void
    {
        $otp = $this->credential();

        $first = $otp->issue('person@example.test', 1);
        $second = $otp->issue('person@example.test', 1);

        $this->assertSame(1, DB::table(self::TABLE)->count());

        $this->assertFalse(
            $otp->redeem('person@example.test', 1, $first),
            'A superseded code still worked.',
        );

        $this->assertTrue($otp->redeem('person@example.test', 1, $second));
    }

    /**
     * STORED HASHED, NEVER IN PLAIN.
     *
     * The row is what a leaked backup or a read-only injection exposes; a
     * plaintext column turns either into a way in.
     */
    public function test_the_stored_value_is_not_the_code(): void
    {
        $otp = $this->credential();

        $code = $otp->issue('person@example.test', 1);

        $stored = (string) DB::table(self::TABLE)->value('token');

        $this->assertNotSame($code, $stored, 'The code was stored in plain text.');
        $this->assertStringNotContainsString($code, $stored);
    }

    public function test_forgetting_removes_the_credential(): void
    {
        $otp = $this->credential();

        $code = $otp->issue('person@example.test', 1);

        $otp->forget('person@example.test', 1);

        $this->assertSame(0, DB::table(self::TABLE)->count());
        $this->assertFalse($otp->redeem('person@example.test', 1, $code));
    }

    public function test_a_numeric_code_is_digits_of_the_requested_length(): void
    {
        $code = $this->credential()->issue('person@example.test', 1, length: 6, numeric: true);

        $this->assertMatchesRegularExpression('/^\d{6}$/', $code);
    }
}
