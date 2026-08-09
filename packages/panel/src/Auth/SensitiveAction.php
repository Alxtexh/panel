<?php

declare(strict_types=1);

namespace PanelKit\Panel\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

/**
 * A budget for the account actions that ask you to prove who you are.
 *
 * SIGNING IN WAS THROTTLED AND CONFIRMING YOUR PASSWORD WAS NOT, which leaves
 * the same guess available through a different door. Changing a password asks
 * for the CURRENT one first - correctly - and an unlimited number of attempts
 * at that question is a password oracle: anybody who reaches an authenticated
 * session (a borrowed laptop, a session left open, a stolen cookie) can sit
 * there guessing the password itself, at whatever rate the server answers,
 * with nothing recording that they are doing it.
 *
 * KEYED ON THE ACCOUNT AND THE IP TOGETHER, exactly as sign-in is, and for the
 * same two reasons: the account alone lets somebody lock a colleague out of
 * their own settings by failing on purpose, and the IP alone makes one office
 * share a budget behind the same NAT.
 *
 * ONLY FAILURES COUNT, AND SUCCESS CLEARS. Somebody who types their password
 * correctly has proven the thing the budget exists to protect, so making them
 * wait afterwards punishes the person this is meant to defend.
 */
final class SensitiveAction
{
    /**
     * Refuse, with the wait, when the budget is spent.
     *
     * A `ValidationException` rather than a 429, because this arrives on a
     * form: the message belongs against the field somebody is typing into,
     * where they will read it, rather than on an error page that loses their
     * place and says nothing about which field.
     */
    public static function assertNotExhausted(Request $request, string $action, string $field): void
    {
        $key = self::key($request, $action);
        $max = max(1, (int) config('panel.auth.sensitive.max_attempts', 5));

        if (! RateLimiter::tooManyAttempts($key, $max)) {
            return;
        }

        $seconds = RateLimiter::availableIn($key);

        throw ValidationException::withMessages([
            $field => __('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => (int) ceil($seconds / 60),
            ]),
        ]);
    }

    /** One wrong answer. */
    public static function recordFailure(Request $request, string $action): void
    {
        RateLimiter::hit(
            self::key($request, $action),
            (int) config('panel.auth.sensitive.decay_seconds', 300),
        );
    }

    /** Proven; the budget is theirs again. */
    public static function clear(Request $request, string $action): void
    {
        RateLimiter::clear(self::key($request, $action));
    }

    private static function key(Request $request, string $action): string
    {
        $who = (string) ($request->user()?->getAuthIdentifier() ?? 'guest');

        return Str::transliterate('panel:'.$action.'|'.$who.'|'.$request->ip());
    }
}
