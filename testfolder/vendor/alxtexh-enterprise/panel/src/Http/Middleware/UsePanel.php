<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Alxtexh\Panel\PanelManager;
use Symfony\Component\HttpFoundation\Response;

/**
 * Declares which panel is serving this request.
 *
 * ATTACHED TO A ROUTE GROUP, NEVER INFERRED. The panel id is a literal in the
 * route definition, fixed at boot, so nothing a client sends can influence it.
 * That is the whole security argument for the design: a super admin panel runs
 * WITHOUT tenant scoping, and the only thing standing between that and a
 * cross-tenant leak is that the choice cannot be reached from a request.
 *
 * If the panel were resolved from a header, a subdomain, or a query parameter,
 * an attacker would only have to guess the value. Resolved from the route, they
 * would have to change the application's source.
 *
 * IT RUNS EARLY. Everything downstream - the tenant scope, policies, schema
 * cache keys - asks `PanelManager` which panel is current, so this must have run
 * before any of them. Registered ahead of `auth` in the group, because even the
 * guard used to authenticate is a property of the panel.
 */
final class UsePanel
{
    public function handle(Request $request, Closure $next, string $panel): Response
    {
        // Throws on an unknown id rather than falling back. A typo in a route
        // file must not quietly serve the default panel - which, for a route
        // intended to be central, would mean tenant scoping switching itself on
        // and the super admin seeing one tenant's data with no error anywhere.
        $panels = app(PanelManager::class);

        $panels->usePanel($panel);

        /*
         * THE PANEL'S GUARD BECOMES THE REQUEST'S GUARD.
         *
         * WITHOUT THIS, A PANEL ON A SECOND GUARD IS AUTHENTICATED AND STILL A
         * GUEST TO HALF THE FRAMEWORK. `auth:superadmins` puts somebody on the
         * `superadmins` guard, but `Auth::user()`, `$request->user()` and -
         * critically - the `Gate`'s user resolver all read the DEFAULT guard,
         * which is `web`. So the request passed authentication and then every
         * implicit `Gate::authorize()` asked about nobody and denied: a screen
         * that lists rows perfectly and answers 403 to the button beside them,
         * with correct permissions and no error to read.
         *
         * `shouldUse` sets the default guard NAME for this request only. It
         * touches no session and resolves no user, so it is safe this early -
         * and it must be this early, because the first thing that asks is
         * `auth` itself.
         *
         * Filament does the same thing for the same reason; a portal that
         * declares a guard and then leaves the framework pointed at another
         * one has declared nothing.
         */
        $guard = $panels->panel($panel)?->getGuard();

        if ($guard !== null) {
            Auth::shouldUse($guard);
        }

        return $next($request);
    }
}
