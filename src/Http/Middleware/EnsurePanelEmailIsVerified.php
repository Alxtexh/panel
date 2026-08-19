<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Alxtexh\Panel\PanelManager;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Opt-in mailbox proof after `Panel::emailVerification()`.
 *
 * OFF BY DEFAULT, and independent of `MustVerifyEmail` on the model. A
 * generated portal's User often has `email_verified_at` and no interface;
 * Laravel's `verified` middleware would then be a no-op. This reads the
 * column when the panel asked for it.
 *
 * THE NOTICE AND RESEND STAY REACHABLE, or the redirect is a loop.
 */
final class EnsurePanelEmailIsVerified
{
    /**
     * @var list<string>
     */
    private const ALWAYS_ALLOWED = [
        'logout',
        'verification.notice',
        'verification.verify',
        'verification.send',
        'lock',
        'unlock',
        'screens.locked',
        'impersonate.stop',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $panel = app(PanelManager::class)->currentPanel();

        if ($panel === null || ! $panel->hasEmailVerification()) {
            return $next($request);
        }

        $user = $request->user($panel->getGuard());

        if ($user === null || ($user->email_verified_at ?? null) !== null) {
            return $next($request);
        }

        $name = (string) $request->route()?->getName();

        foreach (self::ALWAYS_ALLOWED as $allowed) {
            if ($name === $allowed || str_ends_with($name, '.'.$allowed)) {
                return $next($request);
            }
        }

        return redirect('/'.trim($panel->getPath().'/email/verify', '/'));
    }
}
