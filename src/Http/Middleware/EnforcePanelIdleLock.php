<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelIdleActivity;
use Symfony\Component\HttpFoundation\Response;

/**
 * Lock the panel when nobody has used it for the idle window.
 *
 * RUNS BEFORE `EnsurePanelIsUnlocked`. This is the half that DECIDES to lock;
 * the next middleware is the half that HOLDS the lock. Reversing them would
 * mean a session that just expired idle is still "unlocked" for this request,
 * so the page loads and then the following request bounces: one request late.
 *
 * BACKGROUND POLLS DO NOT COUNT AS ACTIVITY. They are why `SESSION_LIFETIME`
 * never fires on an open dashboard. Touching the idle clock here for a poll
 * would make this timer the same lie.
 */
final class EnforcePanelIdleLock
{
    public function handle(Request $request, Closure $next): Response
    {
        $panel = app(PanelManager::class)->currentPanel();

        if ($panel === null || ! $panel->hasIdleLock() || ! $request->hasSession()) {
            return $next($request);
        }

        $guard = $panel->getGuard();
        $user = $request->user($guard);

        if ($user === null || PanelIdleActivity::isExempt($request)) {
            return $next($request);
        }

        if (PanelIdleActivity::isLocked($request)) {
            return $next($request);
        }

        if (PanelIdleActivity::activityAt($request) === null) {
            PanelIdleActivity::touch($request);

            return $next($request);
        }

        if (PanelIdleActivity::isIdleExpired($request, $panel)) {
            PanelIdleActivity::markLocked($request);

            return PanelIdleActivity::deny($request, $panel);
        }

        if (! PanelIdleActivity::isBackgroundRequest($request)) {
            PanelIdleActivity::touch($request);
        }

        return $next($request);
    }
}
