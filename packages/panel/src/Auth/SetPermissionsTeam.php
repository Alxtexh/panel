<?php

declare(strict_types=1);

namespace PanelKit\Panel\Auth;

use Closure;
use Illuminate\Http\Request;
use PanelKit\Panel\Support\TenantContext;
use Spatie\Permission\PermissionRegistrar;
use Symfony\Component\HttpFoundation\Response;

/**
 * Tell Spatie which organisation this request belongs to.
 *
 * WITHOUT THIS, SPATIE'S TEAMS FEATURE IS INERT AND SILENTLY WRONG. Roles and
 * assignments carry a `tenant_id`, but the package only filters by it when a
 * team id has been set - otherwise `hasPermissionTo` considers every tenant's
 * roles at once. The result is not an error: it is a person holding, in effect,
 * the union of their permissions across every organisation they belong to.
 *
 * SET FROM THE RESOLVED TENANT, which by this point has come from the hostname or
 * from the signed-in user. It runs after those, and before anything asks an
 * authorisation question.
 *
 * NULL IS SET EXPLICITLY, not skipped. Spatie caches the permission map per team
 * id, and leaving a stale id in place under a long-lived worker means the next
 * request answers with the previous tenant's roles - the same class of leak the
 * rest of this codebase guards against by ending tenancy in a `finally`.
 */
final class SetPermissionsTeam
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! class_exists(PermissionRegistrar::class)) {
            return $next($request);
        }

        $registrar = app(PermissionRegistrar::class);

        $registrar->setPermissionsTeamId(app(TenantContext::class)->currentKey());

        try {
            return $next($request);
        } finally {
            /*
             * Cleared on the way out, including on an exception. Under Octane the
             * container survives the request, and a team id left behind is the
             * next request's default - for a different tenant on the same worker.
             */
            $registrar->setPermissionsTeamId(null);
        }
    }
}
