<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Alxtexh\Panel\PanelManager;
use Symfony\Component\HttpFoundation\Response;

/**
 * A session ends after a fixed time, whether or not anybody was using it.
 *
 * `SESSION_LIFETIME` IS AN IDLE TIMER, AND THE PANEL DEFEATS IT. Every request
 * touches the session, and this panel makes requests nobody asked for: live
 * updates poll every ten seconds, the notification bell polls, a dashboard
 * left open on a wall reloads its widgets. So a tab open on a screen in an
 * office is a session that never idles, never expires, and stays signed in
 * until somebody closes the browser - which on a shared or unattended machine
 * is the whole of the risk `SESSION_LIFETIME` was set to bound. Nothing warns,
 * because from the framework's point of view the session is in constant use.
 *
 * THE CEILING IS ABSOLUTE AND MEASURED FROM SIGN-IN. Not from the last click,
 * not from the last request - from the moment authentication happened. A poll
 * cannot push it back, because a poll is not a person. When it passes, the
 * session is invalidated exactly as sign-out would: the identifier is
 * regenerated, so the old one cannot be replayed.
 *
 * OFF BY DEFAULT, because turning it on signs everybody out on a schedule and
 * that is a policy decision an installation makes rather than one a package
 * makes for it. `panel.auth.session.max_hours` is the switch; the reference
 * app sets it, so the behaviour is exercised rather than merely available.
 *
 * IT NEVER APPLIES TO A GUEST - there is nothing to end - and it deliberately
 * DOES apply during impersonation, because an administrator wearing somebody
 * else's account is exactly the session that should not last indefinitely.
 */
final class EnforceSessionLifetime
{
    /**
     * When this session authenticated. Written on the first request that finds
     * it missing, so sessions that predate this middleware get a ceiling from
     * the moment it ships rather than being exempt forever.
     */
    public const STARTED_AT = 'panel.session.started_at';

    public function handle(Request $request, Closure $next): Response
    {
        $hours = (float) config('panel.auth.session.max_hours', 0);

        if ($hours <= 0 || ! $request->hasSession()) {
            return $next($request);
        }

        $guard = app(PanelManager::class)->currentPanel()?->getGuard();
        $user = $guard === null ? $request->user() : Auth::guard($guard)->user();

        if ($user === null) {
            return $next($request);
        }

        $session = $request->session();
        $startedAt = (int) $session->get(self::STARTED_AT, 0);

        if ($startedAt === 0) {
            $session->put(self::STARTED_AT, time());

            return $next($request);
        }

        if ((time() - $startedAt) < (int) round($hours * 3600)) {
            return $next($request);
        }

        return $this->end($request, $guard);
    }

    /**
     * End it the way signing out does.
     *
     * `invalidate()` REGENERATES THE ID, which is the half that matters:
     * clearing the data while leaving the identifier alive is a session
     * somebody holding the old cookie can keep writing to. `regenerateToken()`
     * keeps the next request's CSRF check honest rather than failing it on a
     * stale token, which would surface as an error page instead of a sign-in.
     */
    private function end(Request $request, ?string $guard): Response
    {
        Auth::guard($guard)->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        /*
         * A POLL MUST NOT BE ANSWERED WITH A LOGIN PAGE. The requests that
         * kept this session alive are JSON, and handing them a 302 to HTML
         * would have them parse a sign-in form as data. 401 is the answer they
         * can act on; the client's own session-expired handling takes it from
         * there, which is the same path a genuinely expired session already
         * follows.
         */
        if ($request->expectsJson()) {
            return response()->json(['message' => 'Your session has expired. Please sign in again.'], 401);
        }

        return redirect()->guest(url('/'))
            ->with('status', 'Your session reached its maximum length. Please sign in again.');
    }
}
