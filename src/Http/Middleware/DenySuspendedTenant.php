<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Alxtexh\Panel\Support\TenantContext;
use Symfony\Component\HttpFoundation\Response;

/**
 * A suspended organisation reaches nothing.
 *
 * IT RUNS BEFORE THE SESSION IS READ, and that placement is the feature rather
 * than an optimisation. A check inside a controller, a policy or a Vue guard is
 * a check somebody can be past: sessions have already loaded, `auth()` already
 * answers, and every route added afterwards has to remember to ask. Denying in
 * the middleware stack - immediately after the host has identified the tenant
 * and before anything else runs - means there is no route to remember, because
 * there is no request left to serve.
 *
 * IT IS THE ONLY CHECK, AND THAT IS DELIBERATE. Hiding the panel behind a
 * suspended banner while the API kept answering would be the usual shape of this
 * bug: the screen everyone looks at is locked and the endpoints underneath are
 * not. One gate, before everything, covers the panel, the JSON endpoints, the
 * broadcasting auth route and anything added next year.
 *
 * THE CENTRAL HOST IS UNAFFECTED. No tenant in the hostname means nothing to
 * suspend - platform staff and the sign-in page for an unrelated organisation
 * must keep working while one tenant is locked out.
 *
 * WHY 403 AND NOT 402. "Payment Required" is the tempting status and it is
 * reserved and inconsistently handled; suspension is also not always about
 * money. 403 says "the server understood and refuses", which is exactly true,
 * and the body carries the actual reason.
 */
final class DenySuspendedTenant
{
    public function handle(Request $request, Closure $next): Response
    {
        $tenant = app(TenantContext::class)->tenant();

        /*
         * `isSuspended()` IS ASKED FOR, NOT ASSUMED. The panel does not own the
         * tenant model - an application brings its own - so a model without the
         * method is one that has not adopted suspension, and the correct
         * behaviour there is to let the request through rather than to fatal on
         * every page.
         */
        if ($tenant === null || ! method_exists($tenant, 'isSuspended') || ! $tenant->isSuspended()) {
            return $next($request);
        }

        return response()->view('panel::tenant-suspended', [
            'name' => $tenant->name ?? 'This organisation',
            'reason' => $tenant->suspended_reason ?? null,
            'support' => config('panel.support_email'),
        ], 403);
    }
}
