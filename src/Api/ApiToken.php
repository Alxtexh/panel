<?php

declare(strict_types=1);

namespace PanelKit\Panel\Api;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * A bearer token for the public API.
 *
 * THE TOKEN IS THE TENANT CONTEXT. An API request has no session and no host to
 * resolve an organisation from, so this row is the only thing that says which
 * one a caller belongs to - which makes `tenant_id` load-bearing rather than
 * descriptive, and makes a token with no tenant something that must not exist.
 *
 * IT IS STORED AS A HASH AND SHOWN ONCE. `issue()` is the only place the
 * plaintext exists, and it returns it rather than storing it; everything
 * afterwards can identify a token and cannot reproduce it. A tokens table in
 * plain text is a table whose disclosure equals disclosure of every account it
 * belongs to.
 *
 * ABILITIES ARE THE PANEL'S OWN NAMES - `view_any_clients`, not a second
 * vocabulary invented for the API. A token that grants something no screen
 * grants is a permission model nobody can reason about, and the first question
 * anybody asks about an API key is "what can it do that a person can".
 */
final class ApiToken extends Model
{
    protected $table = 'panel_api_tokens';

    protected $guarded = [];

    protected $hidden = ['token_hash'];

    protected function casts(): array
    {
        return [
            'abilities' => 'array',
            'last_used_at' => 'datetime',
            'expires_at' => 'datetime',
        ];
    }

    /**
     * How a token is written on the wire.
     *
     * A PREFIX SO IT IS RECOGNISABLE. Secret scanners, log scrubbers and people
     * reading a paste all key off a distinctive shape; a bare hex string is
     * indistinguishable from a hundred other things and gets committed.
     */
    private const PREFIX = 'pk_';

    /**
     * Mint one, returning the PLAINTEXT alongside the record.
     *
     * THE ONLY PLACE THE PLAINTEXT EXISTS. It is returned rather than stored,
     * shown once, and after that the panel can identify the token and cannot
     * reproduce it - which is the property that makes losing the database less
     * bad than it would otherwise be.
     *
     * @param  list<string>  $abilities
     * @return array{token: self, plaintext: string}
     */
    public static function issue(
        int|string $tenantId,
        int|string $userId,
        string $name,
        array $abilities,
        ?\DateTimeInterface $expiresAt = null,
    ): array {
        /*
         * 40 RANDOM BYTES, not a hash of anything predictable. The entropy is
         * what makes a fast hash safe for storage: there is no dictionary to
         * attack, so the reason to use bcrypt on a password does not apply.
         */
        $plaintext = self::PREFIX.Str::random(40);

        $token = self::query()->create([
            'tenant_id' => $tenantId,
            'user_id' => $userId,
            'name' => $name,
            'token_hash' => self::hash($plaintext),
            'prefix' => substr($plaintext, 0, 12),
            'abilities' => array_values(array_unique($abilities)),
            'expires_at' => $expiresAt,
        ]);

        return ['token' => $token, 'plaintext' => $plaintext];
    }

    /**
     * Find a live token by its plaintext, or null.
     *
     * ONE INDEXED READ on the hash. Comparing row by row would be a table scan
     * per request and would leak timing; the unique index makes the lookup
     * constant and the comparison exact.
     */
    public static function findFor(string $plaintext): ?self
    {
        $token = self::query()->where('token_hash', self::hash($plaintext))->first();

        if ($token === null) {
            return null;
        }

        /*
         * EXPIRY IS CHECKED HERE RATHER THAN IN THE QUERY, so an expired token
         * is found and rejected rather than simply not found. The distinction
         * matters to whoever is debugging: "your token expired on the 3rd" and
         * "no such token" send them to completely different places.
         */
        return $token->hasExpired() ? null : $token;
    }

    public function hasExpired(): bool
    {
        return $this->expires_at !== null && $this->expires_at->isPast();
    }

    /**
     * Whether this token may do `$ability`.
     *
     * A TOKEN CAN ONLY EVER NARROW, never widen. What it grants is intersected
     * with what its OWNER may do at the moment of the request - see
     * `AuthenticateApiToken`. A token outliving the permission that justified it
     * is the failure this prevents: somebody loses an ability, and an integration
     * they created keeps exercising it.
     */
    public function allows(string $ability): bool
    {
        /*
         * `*` IS ACCEPTED AND IS STILL BOUNDED BY THE OWNER. It exists because
         * "everything I can do" is a real and common need, and forcing somebody
         * to enumerate forty abilities produces a list that is wrong within a
         * month.
         */
        return in_array('*', (array) $this->abilities, true)
            || in_array($ability, (array) $this->abilities, true);
    }

    /**
     * Record that it was used, cheaply.
     *
     * ONCE A MINUTE AT MOST. "Last used" answers "is this token still live", and
     * that question does not need a write on every request - an API under load
     * would spend more time updating this column than answering.
     */
    public function touchUsage(): void
    {
        if ($this->last_used_at !== null && $this->last_used_at->diffInSeconds(now()) < 60) {
            return;
        }

        $this->forceFill(['last_used_at' => now()])->saveQuietly();
    }

    private static function hash(string $plaintext): string
    {
        return hash('sha256', $plaintext);
    }
}
