<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use PanelKit\Panel\Support\TenantContext;
use Symfony\Component\HttpFoundation\Response;

/**
 * Put the signed-in user's tenant into tenancy, not merely into scope.
 *
 * THE BUG THIS CLOSES, and it is the worst kind. A panel that resolves the
 * tenant from the authenticated user has everything it needs to apply the column
 * scope - and applying the column scope is NOT the same as initialising tenancy.
 * A tenant with a database of its own is isolated by the CONNECTION, and the
 * connection is only switched by a bootstrapper, and the bootstrapper only runs
 * when `tenancy()->initialize()` is called. Nothing was calling it.
 *
 * So a dedicated tenant signed in, every page returned HTTP 200, and every page
 * queried the CENTRAL database - where that tenant has no rows at all, because
 * its 25,000 subscribers live in a separate file. The panel then reported the
 * tenant as column-scoped (no initialised tenant, so hybrid falls back to the
 * constraining mode), constrained by `tenant_id` against a table that does not
 * contain them, and rendered an empty list.
 *
 * An empty list. Not an error, not a warning, not a 500 - the customer who paid
 * for a dedicated database logs in and sees that they have no subscribers.
 *
 * IT RUNS AFTER AUTHENTICATION, necessarily. The tenant is a property of the
 * user here, so there is nobody to resolve before the session is read. That
 * ordering is the reason this cannot be one of stancl's own identification
 * middlewares, which all run early and identify by hostname or path.
 *
 * IT IS A NO-OP FOR SHARED TENANTS, and deliberately so. `ConditionalDatabase
 * Bootstrapper` leaves them on the central connection where the column scope
 * does the work, so initialising costs a container event and changes nothing.
 * Skipping them here instead would be an optimisation that has to KNOW which
 * tenants are dedicated - a second copy of that decision, in a second place,
 * able to disagree with the first.
 */
final class InitializeTenancyForUser
{
    public function __invoke(Request $request, Closure $next): Response
    {
        return $this->handle($request, $next);
    }

    public function handle(Request $request, Closure $next): Response
    {
        $tenant = $this->tenant($request);

        if ($tenant === null) {
            return $next($request);
        }

        tenancy()->initialize($tenant);

        try {
            return $next($request);
        } finally {
            /*
             * ALWAYS end it, on the way out and on the way to an exception.
             *
             * Under a long-lived worker the container survives the request, and
             * a connection left pointed at one tenant's database is the next
             * request's default - for a DIFFERENT tenant, on the same worker.
             * That is a cross-tenant data leak produced by an unrelated error
             * three layers down, and it would not reproduce under a fresh
             * process, which is the hardest possible thing to diagnose.
             */
            tenancy()->end();
        }
    }

    private function tenant(Request $request): ?object
    {
        if (! function_exists('tenancy') || ! class_exists('Stancl\\Tenancy\\Tenancy')) {
            return null;
        }

        // Already identified by hostname or path - that middleware won, and
        // re-initialising would switch away from the tenant it chose.
        if (tenancy()->initialized) {
            return null;
        }

        $user = $request->user();

        if ($user === null) {
            return null;
        }

        $key = $user->getAttribute(app(TenantContext::class)->column());

        if ($key === null) {
            return null;
        }

        return config('tenancy.tenant_model')::query()->find($key);
    }
}
