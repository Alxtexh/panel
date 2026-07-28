<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use PanelKit\Panel\PanelManager;
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
        app(PanelManager::class)->usePanel($panel);

        return $next($request);
    }
}
