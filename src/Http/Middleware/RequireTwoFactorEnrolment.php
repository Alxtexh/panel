<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Alxtexh\Panel\Auth\Mfa;
use Alxtexh\Panel\PanelManager;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Optional wall: enrol a second factor before the dashboard.
 *
 * OFF BY DEFAULT. `Panel::requireTwoFactor()` (or `twoFactorRequired()`) is
 * the opt-in. Existing apps must not trap operators who never turned 2FA on.
 *
 * IT IS A REDIRECT, NOT A 403. They still have an account; they just cannot
 * use the panel until Security has a TOTP, email OTP, or passkey. Same shape
 * as `RequirePasswordRenewal`: keep the fix reachable.
 */
final class RequireTwoFactorEnrolment
{
    /**
     * @var list<string>
     */
    private const ALWAYS_ALLOWED = [
        'logout',
        'unlock',
        'unlock.passkey',
        'unlock.passkey.options',
        'lock',
        'screens.locked',
        'impersonate.stop',
        'password.change',
        'password.change.update',
        'password.confirm',
        'password.confirmation',
        'user-password.update',
        'settings.security',
        'settings.password',
        'settings.devices.destroy',
        'settings.devices.destroyOthers',
        'settings.email-two-factor',
        'settings.email-two-factor.destroy',
        'verification.notice',
        'verification.verify',
        'verification.send',
        'login',
        'two-factor.login',
        'two-factor.login.store',
        'two-factor.email',
        'billing.suspended',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $panel = app(PanelManager::class)->currentPanel();

        if ($panel === null || ! $panel->requiresTwoFactor()) {
            return $next($request);
        }

        $user = $request->user($panel->getGuard());

        if ($user === null || Mfa::enrolled($user)) {
            return $next($request);
        }

        if ($request->session()->has('panel.impersonator')) {
            return $next($request);
        }

        if (self::routeIsAllowed($request)) {
            return $next($request);
        }

        if ($request->expectsJson() && ! $request->header('X-Inertia')) {
            abort(423, 'A second factor must be enrolled before continuing.');
        }

        $path = '/'.trim($panel->getPath().'/settings/security', '/');

        return redirect()
            ->to($path)
            ->with('toast', [
                'type' => 'warning',
                'message' => 'Enrol a second factor on Security before using this panel.',
            ]);
    }

    private static function routeIsAllowed(Request $request): bool
    {
        $name = (string) $request->route()?->getName();

        foreach (self::ALWAYS_ALLOWED as $allowed) {
            if ($name === $allowed || str_ends_with($name, '.'.$allowed)) {
                return true;
            }
        }

        foreach (['two-factor', 'passkey', 'confirmed-two-factor'] as $needle) {
            if (str_contains($name, $needle)) {
                return true;
            }
        }

        $path = '/'.ltrim($request->path(), '/');

        return str_contains($path, '/settings/security')
            || str_contains($path, '/user/two-factor')
            || str_contains($path, '/user/confirmed-two-factor')
            || str_contains($path, '/passkeys');
    }
}
