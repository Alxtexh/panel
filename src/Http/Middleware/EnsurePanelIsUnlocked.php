<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelIdleActivity;
use Symfony\Component\HttpFoundation\Response;

/**
 * Holds a locked session on the lock screen.
 *
 * WHAT THIS IS FOR is the person standing at an unattended desk. It is not a
 * security boundary against anyone holding the session cookie: the session is
 * still valid. Real protection for an unattended machine is the operating
 * system's screen lock.
 *
 * A LOCKED SESSION WITH NO USER MUST NOT TRAP. If the auth entry has gone
 * (concurrent logout, a store that dropped that key and not this one), the
 * lock screen has nobody to check a password against and reports every unlock
 * as wrong, and even `/login` bounces back unless this passes through and
 * clears the stale flag.
 */
final class EnsurePanelIsUnlocked
{
    public const SESSION_KEY = PanelIdleActivity::LOCKED_AT;

    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->hasSession() || ! PanelIdleActivity::isLocked($request)) {
            return $next($request);
        }

        $panel = app(PanelManager::class)->currentPanel();
        $guard = $panel?->getGuard();
        $user = $guard === null ? $request->user() : $request->user($guard);

        if ($user === null) {
            PanelIdleActivity::clearLock($request);

            return $next($request);
        }

        if (PanelIdleActivity::isExempt($request)) {
            return $next($request);
        }

        if ($panel === null) {
            return $next($request);
        }

        return PanelIdleActivity::deny($request, $panel);
    }
}
