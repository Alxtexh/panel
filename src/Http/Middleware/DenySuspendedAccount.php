<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use PanelKit\Panel\Support\TenantContext;
use Symfony\Component\HttpFoundation\Response;

/**
 * The other half of suspension: the tenant the ACCOUNT belongs to.
 *
 * `DenySuspendedTenant` runs before the session and can only see the tenant in
 * the HOSTNAME. That covers the sign-in page and every route on an
 * organisation's own subdomain, and it is deliberately placed where nothing can
 * get past it.
 *
 * IT LEAVES ONE HOLE, AND THIS CLASS IS THAT HOLE CLOSED. The central domain
 * carries no tenant in its host, so a suspended organisation's operator could
 * sign in at the central URL and work normally - same data, same account,
 * lockout bypassed by typing a different address. This runs once the user is
 * known and refuses on the tenant the account belongs to.
 *
 * A SEPARATE CLASS RATHER THAN THE SAME ONE REGISTERED TWICE, because Laravel
 * de-duplicates middleware groups by class name: the second registration was
 * silently dropped, the stack looked right, and only printing the resolved group
 * showed it was never there. The two also genuinely check different facts, so
 * one name for both was misleading regardless.
 */
final class DenySuspendedAccount
{
    public function handle(Request $request, Closure $next): Response
    {
        /*
         * THROUGH `TenantContext`, NOT `$user->tenant`.
         *
         * They resolve to the same record, but the context memoises it for the
         * request while the relation reloads it - so reading the relation here
         * added a query to every authenticated page, including the live-updates
         * diff endpoint whose whole budget is one bounded query.
         */
        $tenant = $request->user() === null ? null : app(TenantContext::class)->tenant();

        if ($tenant === null || ! method_exists($tenant, 'isSuspended') || ! $tenant->isSuspended()) {
            return $next($request);
        }

        /*
         * SIGNED OUT, NOT JUST REFUSED. The session belongs to an organisation
         * that may no longer use the panel, and leaving it alive means the wall
         * is the only thing standing between them and their data on any route
         * this middleware is later removed from. Ending it makes the refusal a
         * fact about the session rather than about this response.
         */
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->view('panel::tenant-suspended', [
            'name' => $tenant->name ?? 'This organisation',
            'reason' => $tenant->suspended_reason ?? null,
            'support' => config('panel.support_email'),
        ], 403);
    }
}
