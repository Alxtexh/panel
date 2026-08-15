<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Holds a locked session on the lock screen.
 *
 * WHAT THIS IS FOR, precisely: the person standing at an unattended desk. It is
 * NOT a security boundary against anyone holding the session cookie - the
 * session is still valid, and anything reachable before the lock is reachable
 * with that cookie afterwards. Real protection for an unattended machine is the
 * operating system's screen lock, and pretending otherwise would be worse than
 * not offering this at all.
 *
 * WHY A FLAG AND NOT A SIGN-OUT. Signing out to protect a screen loses unsaved
 * work and drops you on an empty dashboard afterwards, so people stop doing it.
 * A flag keeps the session and the page you were on, which is what makes
 * locking something anybody actually does.
 *
 * THE EXEMPTIONS ARE THE WHOLE TRICK. The lock screen, the unlock attempt and
 * the way out have to stay reachable, or the middleware redirects the lock
 * screen to itself and the panel is bricked until the session expires. They are
 * listed by ROUTE NAME rather than by path so a URL change cannot silently
 * un-exempt one.
 */
final class EnsurePanelIsUnlocked
{
    public const SESSION_KEY = 'panel.locked_at';

    /**
     * Routes that must answer while locked.
     *
     * @var list<string>
     */
    private const ALWAYS_REACHABLE = [
        'screens.locked',
        'panel.unlock',
        'panel.unlock.passkey',
        'panel.unlock.passkey.options',
        'logout',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->session()->has(self::SESSION_KEY)) {
            return $next($request);
        }

        if (in_array($request->route()?->getName(), self::ALWAYS_REACHABLE, true)) {
            return $next($request);
        }

        /*
         * A JSON caller gets a STATUS, not a redirect.
         *
         * The panel's own fetch endpoints - inline cell edits, record actions,
         * uploads - cannot follow a redirect to an HTML page; they would parse
         * the lock screen as a failed response with no explanation. 423 is the
         * one status that says "the resource is fine, it is locked".
         */
        if ($request->expectsJson()) {
            return response()->json(['message' => 'The panel is locked.'], 423);
        }

        return redirect()->route('screens.locked');
    }
}
