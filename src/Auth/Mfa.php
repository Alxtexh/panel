<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Alxtexh\Panel\Panel;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

/**
 * The login-door pause for every enrolled factor.
 *
 * TOTP and email OTP share one pending-login session (`TwoFactor::begin`).
 * Passkeys stay a button on the form: they never reach this pause. A social
 * callback uses the same intercept so Google is not a 2FA bypass.
 */
final class Mfa
{
    public static function enrolled(?Authenticatable $user): bool
    {
        if ($user === null) {
            return false;
        }

        if (TwoFactor::enabled($user) || EmailTwoFactor::enabled($user)) {
            return true;
        }

        return Passkeys::forUser($user) !== [];
    }

    public static function shouldChallenge(Panel $panel, Authenticatable $user): bool
    {
        if (! $panel->hasTwoFactorChallenge()) {
            return false;
        }

        return TwoFactor::enabled($user) || EmailTwoFactor::enabled($user);
    }

    /**
     * Park the password-verified user and send them to the challenge page.
     *
     * TOTP WINS WHEN BOTH ARE ON. The authenticator is already in their
     * pocket; mailing a code would be a weaker factor they did not ask for
     * at this moment. Email-only accounts get a code immediately.
     */
    public static function begin(
        Request $request,
        Panel $panel,
        Authenticatable $user,
        bool $remember,
        ?string $challengeUrl = null,
    ): RedirectResponse {
        TwoFactor::begin($request, $user, $panel->id, $remember);

        if (TwoFactor::enabled($user)) {
            EmailTwoFactor::setMethod($request, EmailTwoFactor::METHOD_TOTP);
        } else {
            EmailTwoFactor::setMethod($request, EmailTwoFactor::METHOD_EMAIL);
            EmailTwoFactor::send($request, $user);
        }

        $request->session()->regenerate();

        return redirect($challengeUrl ?? self::challengeUrl($panel));
    }

    public static function challengeUrl(Panel $panel): string
    {
        return '/'.trim($panel->getPath().'/two-factor-challenge', '/');
    }

    public static function complete(Request $request, Panel $panel, Authenticatable $user, bool $remember): void
    {
        TwoFactor::forget($request);
        EmailTwoFactor::forget($request);

        \Illuminate\Support\Facades\Auth::guard($panel->getGuard())->login($user, $remember);
        $request->session()->regenerate();
        $request->session()->put('auth.password_confirmed_at', time());
    }
}
