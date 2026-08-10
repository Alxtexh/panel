<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Decide which organisation this is from the HOSTNAME, before anybody signs in.
 *
 * THIS IS THE CHANGE, and it is a correction to the architecture rather than an
 * addition. The panel resolved the tenant from the AUTHENTICATED USER, so which
 * organisation you were was a fact discovered after you proved who you were.
 * Everybody shared one unbranded login page, and a person could hold exactly one
 * account because `users.email` had to be globally unique to identify them.
 *
 * Knowing the tenant BEFORE authentication is the whole point:
 *
 *   - the login page can carry that organisation's branding;
 *   - credentials are scoped, so one tenant cannot enumerate another's users;
 *   - "the same person administers two ISPs" becomes representable.
 *
 * IT RUNS BEFORE THE SESSION, necessarily - the tenant has to be known while the
 * cookie is being read, because `ScopeSessionToTenant` scopes the cookie by it.
 * A tenant resolved after the session has already been loaded is a tenant that
 * cannot affect which session was loaded, which is the entire security property.
 *
 * AN UNKNOWN HOST IS NOT AN ERROR HERE. The central domain has no tenant and
 * must keep working - it serves the marketing page, the super-admin panel and
 * the health check. So an unmatched host simply passes through, and everything
 * downstream keeps its deny-by-default posture: no tenant means no tenant data,
 * not all tenant data.
 */
final class ResolveTenantByHost
{
    public function handle(Request $request, Closure $next): Response
    {
        $tenant = $this->tenantFor($request->getHost());

        if ($tenant === null) {
            return $next($request);
        }

        tenancy()->initialize($tenant);

        /*
         * THE COOKIE IS NAMED PER TENANT, set here because it must be in place
         * before the session middleware reads it.
         *
         * This is defence 1 of the two in `ScopeSessionToTenant`: `acme` and
         * `zenith` do not read the same cookie at all, so the ordinary case
         * cannot leak even before the tenant check runs. It is configuration and
         * can therefore be undone by configuration, which is exactly why there
         * is a second defence that cannot.
         */
        config([
            'session.cookie' => config('session.cookie').'_t'.$tenant->getKey(),

            /*
             * HOST-ONLY, ALWAYS. A null domain means the browser sends the
             * cookie back to this exact host and nowhere else. Anything wider -
             * `.alxtexhpanel.test` - offers one tenant's cookie to every other
             * tenant's subdomain, which is the misconfiguration this whole file
             * exists to make survivable.
             */
            'session.domain' => null,
        ]);

        try {
            return $next($request);
        } finally {
            /*
             * Always ended, on the way out and on the way to an exception. Under
             * a long-lived worker the container survives the request, so a
             * connection or cache prefix left pointing at one tenant becomes the
             * next request's default - for a DIFFERENT tenant on the same
             * worker. That leak is caused by an unrelated error three layers
             * down and does not reproduce under a fresh process, which makes it
             * the hardest possible kind to trace.
             */
            tenancy()->end();
        }
    }

    /**
     * The tenant owning `$host`, or null.
     *
     * NOT CACHED, AND THAT IS A CORRECTION. This method used to memoise into a
     * `static` local, described as "per process only" - but a static local lives
     * for the life of the PHP PROCESS, and under Octane, a queue worker or a
     * test run that is many requests. So it returned the tenant MODEL loaded by
     * whichever request happened to be first, for as long as the worker lived.
     *
     * IT WENT WRONG THE MOMENT SUSPENSION WAS ADDED. A tenant suspended after
     * the memo was warmed kept being served the stale, unsuspended record, so
     * the lockout simply did not apply - and the same staleness had been
     * silently affecting branding and feature flags all along, which nobody
     * would have reported as a bug.
     *
     * Under `php artisan serve` every request is its own process, which is
     * exactly why this looked correct for so long. Spec §9 already says it:
     * a static holding tenant state survives the request and serves one
     * organisation's data to another on the same worker.
     *
     * The cost of dropping it is one indexed lookup and one find per request,
     * which is what the middleware was paying on the first request anyway.
     */
    private function tenantFor(string $host): ?object
    {
        if (! function_exists('tenancy') || ! class_exists('Stancl\\Tenancy\\Tenancy')) {
            return null;
        }

        /*
         * A DECLARED CENTRAL DOMAIN IS NEVER A TENANT, so it is answered without
         * touching the database.
         *
         * This is not a micro-optimisation dressed up: dropping the stale memo
         * above put a `domains` lookup in front of EVERY request, including
         * every request to the central domain, where the answer is known from
         * configuration and is always the same. stancl already maintains the
         * list, so this reads its answer rather than inventing a second one that
         * could disagree.
         */
        if (in_array($host, (array) config('tenancy.central_domains', []), true)) {
            return null;
        }

        // Already identified - a path-based or explicit resolver won, and
        // re-initialising would switch away from the tenant it chose.
        if (tenancy()->initialized) {
            return null;
        }

        $model = config('tenancy.tenant_model');

        if (! class_exists($model) || ! app('db')->getSchemaBuilder()->hasTable('domains')) {
            return null;
        }

        $tenantId = app('db')->table('domains')->where('domain', $host)->value('tenant_id');

        return $tenantId === null ? null : $model::query()->find($tenantId);
    }
}
