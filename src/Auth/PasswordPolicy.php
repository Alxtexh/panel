<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

/**
 * How old a password may get, and what it may not be changed to.
 *
 * EXPIRY IS A BLUNT CONTROL AND THIS ONE IS OFF BY DEFAULT. Forced rotation is
 * no longer recommended practice - NIST dropped it, because what it reliably
 * produces is `Summer2024!` becoming `Summer2025!`, written on a card, while the
 * genuinely compromised password is changed the moment anybody notices rather
 * than ninety days later. It exists here because some installations are required
 * to have it, and a panel that cannot express a requirement its operator is
 * audited against is a panel they cannot use.
 *
 * SO THE DEFAULT IS ZERO - never expire - and turning it on is a decision
 * somebody makes deliberately, not one they inherit.
 *
 * REUSE IS REFUSED, and that is the part worth having whatever the expiry is
 * set to. A renewal satisfied by re-entering the same password is a renewal that
 * changed nothing while recording that it did, which is worse than not asking.
 *
 * NULL MEANS "NOT KNOWN", NEVER "OVERDUE". Accounts that predate this feature
 * have no recorded change date, and treating that as the beginning of time would
 * expire an entire installation the moment the policy is switched on - including
 * whoever needs to get in and switch it off.
 */
final class PasswordPolicy
{
    /** How many previous passwords a new one is checked against. */
    private const HISTORY = 5;

    public function __construct(
        /** Days before a password must be changed. Zero means never. */
        private readonly int $maxAgeDays,
        private readonly bool $refuseReuse = true,
    ) {}

    public static function fromConfig(): self
    {
        return new self(
            maxAgeDays: max(0, (int) config('panel.auth.password.max_age_days', 0)),
            refuseReuse: (bool) config('panel.auth.password.refuse_reuse', true),
        );
    }

    public function expiryEnabled(): bool
    {
        return $this->maxAgeDays > 0;
    }

    public function maxAgeDays(): int
    {
        return $this->maxAgeDays;
    }

    /**
     * Whether this account must change its password before doing anything else.
     *
     * TWO REASONS, KEPT SEPARATE. Age is the policy; `must_change_password` is a
     * decision somebody made about one account - an administrator reset, a
     * suspected compromise - and it applies whatever the age says. Folding the
     * second into the first by backdating the timestamp would work and would put
     * a lie in a column other code reads.
     */
    public function mustChange(?Authenticatable $user): bool
    {
        if (! $user instanceof Model) {
            return false;
        }

        if ((bool) $user->getAttribute('must_change_password')) {
            return true;
        }

        if (! $this->expiryEnabled()) {
            return false;
        }

        $changedAt = $user->getAttribute('password_changed_at');

        /*
         * NOT KNOWN IS NOT OVERDUE. See the class note: the alternative locks an
         * entire installation out of itself the day the policy is enabled.
         */
        if ($changedAt === null) {
            return false;
        }

        return Carbon::parse($changedAt)
            ->addDays($this->maxAgeDays)
            ->isPast();
    }

    /** Days until this password expires, or null when nothing will expire. */
    public function daysUntilExpiry(?Authenticatable $user): ?int
    {
        if (! $this->expiryEnabled() || ! $user instanceof Model) {
            return null;
        }

        $changedAt = $user->getAttribute('password_changed_at');

        if ($changedAt === null) {
            return null;
        }

        return (int) floor(now()->diffInDays(
            Carbon::parse($changedAt)->addDays($this->maxAgeDays),
            absolute: false,
        ));
    }

    /**
     * Whether `$plain` is one this account has used recently.
     *
     * EVERY STORED HASH IS CHECKED, which is deliberately not free - `Hash::check`
     * is slow by design. Five is the bound: enough that cycling is impractical,
     * few enough that a password change does not take a visible second.
     */
    public function isReused(?Authenticatable $user, string $plain): bool
    {
        if (! $this->refuseReuse || ! $user instanceof Model) {
            return false;
        }

        $current = (string) $user->getAttribute('password');

        if ($current !== '' && Hash::check($plain, $current)) {
            return true;
        }

        foreach ($this->history($user) as $hash) {
            if (Hash::check($plain, $hash)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Record that the password just changed, keeping the old one on the list.
     *
     * CALLED WITH THE MODEL BEFORE IT IS SAVED, so `getOriginal` still holds the
     * hash being replaced. Reading the current attribute instead would push the
     * NEW password onto the history and immediately refuse it as reused - which
     * is the sort of bug that looks like the feature working.
     */
    public function recordChange(Model $user): void
    {
        $previous = (string) $user->getOriginal('password');

        $history = $this->history($user);

        if ($previous !== '') {
            array_unshift($history, $previous);
        }

        $user->forceFill([
            'password_changed_at' => now(),
            'must_change_password' => false,
            // Bounded here rather than in the schema: a column that grows
            // forever is a row that eventually will not fit.
            'password_history' => array_slice(array_values(array_unique($history)), 0, self::HISTORY),
        ]);
    }

    /** @return list<string> */
    private function history(Model $user): array
    {
        $stored = $user->getAttribute('password_history');

        if (is_string($stored)) {
            $stored = json_decode($stored, true);
        }

        return array_values(array_filter(
            is_array($stored) ? $stored : [],
            static fn (mixed $hash): bool => is_string($hash) && $hash !== '',
        ));
    }
}
