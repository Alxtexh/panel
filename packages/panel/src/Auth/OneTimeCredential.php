<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * A short-lived secret that can be spent exactly once.
 *
 * SHARED BY THE OTP RESET AND THE MAGIC LINK because they are the same thing
 * wearing different clothes: something emailed to an address, redeemable once,
 * within a few minutes, that proves control of that mailbox. Two
 * implementations would be two places to get expiry, single-use and hashing
 * wrong, and they would drift.
 *
 * STORED HASHED, ALWAYS. A magic-link token in the database in plain text is a
 * password-equivalent sitting in a table that gets backed up, replicated and
 * read by support tooling - anybody who sees it can sign in as that person until
 * it expires. Hashing costs nothing here because the value is looked up by
 * IDENTIFIER, not by scanning for the secret.
 *
 * SINGLE USE IS ENFORCED BY DELETION, not a flag. A `used_at` column leaves the
 * row present, and every subsequent check then depends on remembering to test
 * it; deleting removes the possibility. Replay stops being a code path.
 *
 * CONSTANT-TIME COMPARISON via `Hash::check`. Comparing digests with `===`
 * leaks, by timing, how many leading characters matched - which turns an
 * unguessable token into a guessable one given enough attempts. The throttles on
 * the routes make that impractical anyway; both, because either alone is one
 * mistake from being the only defence.
 */
final class OneTimeCredential
{
    public function __construct(
        private readonly string $table,
        private readonly int $lifetimeMinutes,
    ) {}

    /**
     * Issue a credential for `$email`, replacing any outstanding one.
     *
     * REPLACING RATHER THAN ADDING is what makes "resend" safe. Several live
     * codes for one address multiplies the guessing surface by the number of
     * times somebody impatiently clicked the button, and the older ones are of
     * no use to anybody legitimate.
     *
     * @return string The PLAIN value - the only time it exists in this form.
     */
    public function issue(string $email, int|string|null $tenantId, int $length = 6, bool $numeric = true): string
    {
        $plain = $numeric
            // A numeric code is typed by a human from a phone screen, so it is
            // digits only - no ambiguity between O and 0, l and 1.
            ? str_pad((string) random_int(0, 10 ** $length - 1), $length, '0', STR_PAD_LEFT)
            : Str::random(64);

        DB::table($this->table)->updateOrInsert(
            ['tenant_id' => $tenantId, 'email' => $email],
            ['token' => Hash::make($plain), 'created_at' => now()],
        );

        return $plain;
    }

    /**
     * Spend the credential, or refuse.
     *
     * Returns true ONLY if the value matches an unexpired credential, and
     * deletes it on the way out so it cannot be spent twice.
     */
    public function redeem(string $email, int|string|null $tenantId, string $plain): bool
    {
        $row = DB::table($this->table)
            ->where('tenant_id', $tenantId)
            ->where('email', $email)
            ->first();

        if ($row === null) {
            /*
             * A DUMMY HASH CHECK ON THE MISS PATH, so a wrong address costs the
             * same time as a wrong code. Returning immediately here is a timing
             * oracle for which addresses have a reset outstanding.
             */
            Hash::check($plain, '$2y$12$usesomesillystringfore7hnbRJHxXVLeakoG8K30oukPsA.ztMG');

            return false;
        }

        if ($this->expired($row->created_at)) {
            $this->forget($email, $tenantId);

            return false;
        }

        if (! Hash::check($plain, $row->token)) {
            return false;
        }

        // Single use - see the class note.
        $this->forget($email, $tenantId);

        return true;
    }

    public function forget(string $email, int|string|null $tenantId): void
    {
        DB::table($this->table)
            ->where('tenant_id', $tenantId)
            ->where('email', $email)
            ->delete();
    }

    private function expired(?string $createdAt): bool
    {
        if ($createdAt === null) {
            return true;
        }

        return now()->diffInMinutes($createdAt, absolute: true) > $this->lifetimeMinutes;
    }
}
