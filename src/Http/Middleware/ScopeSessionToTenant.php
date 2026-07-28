<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use PanelKit\Panel\Support\TenantContext;
use Symfony\Component\HttpFoundation\Response;

/**
 * A session - and the person holding it - belongs to ONE organisation.
 *
 * TWO CHECKS, and the first one is the one that was missing entirely:
 *
 *   THE USER MUST BELONG TO THE RESOLVED TENANT. See the note in `handle()`.
 *   Under user-based resolution this could not be false; under hostname
 *   resolution it can, and until `panel:journey --negative` was pointed at a
 *   real host, nothing checked it.
 *
 *   THE SESSION MUST BELONG TO THE RESOLVED TENANT.
 *
 * THE HIGHEST-SEVERITY CHECK IN HOSTNAME TENANCY, and the one most likely to be
 * broken by a well-meaning fix. Once tenants live on subdomains, somebody will
 * notice they are logged out when switching hosts and set
 * `SESSION_DOMAIN=.panelkit.test` so the cookie is shared. That single line makes
 * one login valid on EVERY tenant's subdomain - it looks like a convenience fix,
 * it is one character class wide, and it turns the whole isolation story off.
 *
 * TWO DEFENCES, because the cookie name alone is not enough:
 *
 *   1. THE COOKIE IS NAMED PER TENANT, so `acme` and `zenith` do not even read
 *      the same cookie. This is what makes the common case correct.
 *
 *   2. THE SESSION RECORDS ITS TENANT AND IS CHECKED, so a cookie that somehow
 *      does arrive at the wrong host - a shared parent domain, a copied value, a
 *      misconfiguration of exactly the kind above - is refused rather than
 *      honoured. Defence 1 can be undone by configuration; defence 2 cannot.
 *
 * A MISMATCH IS TREATED AS HOSTILE. The session is flushed rather than merely
 * ignored, because the only ways to hold another tenant's session cookie are a
 * misconfiguration and an attack, and neither deserves to keep its contents.
 */
final class ScopeSessionToTenant
{
    /** Not `tenant_id` - that name is taken by application data in the session. */
    public const KEY = '_panel_tenant';

    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->hasSession()) {
            return $next($request);
        }

        $session = $request->session();
        $current = app(TenantContext::class)->currentKey();

        // No tenant in context: the central domain, a health check, a console
        // request. Nothing to compare against, and nothing to enforce.
        if ($current === null) {
            return $next($request);
        }

        $owner = $session->get(self::KEY);

        if ($owner === null) {
            // First request in this session on this host - stamp it.
            $session->put(self::KEY, $current);

            return $next($request);
        }

        if ((string) $owner !== (string) $current) {
            /*
             * INVALIDATE, do not just log out. `flush()` clears the data and
             * `regenerate()` issues a new id, so nothing from the previous
             * organisation survives in the session store under an id somebody
             * else has seen.
             */
            $session->flush();
            $session->regenerate(true);
            $session->put(self::KEY, $current);

            if ($request->user() !== null) {
                auth()->logout();
            }
        }

        /*
         * THE ACTING USER MUST BELONG TO THE RESOLVED TENANT, checked AFTER the session
         * logic above, and the ordering matters.
         *
         * THIS WAS A REAL LEAK, found by the first meaningful run of
         * `panel:journey --negative`. Nothing anywhere checked it, because under
         * the old user-based resolution it was tautological: the tenant WAS the
         * user's tenant, so they could not disagree. The moment the hostname
         * decides instead, they can - and a user of one organisation, arriving
         * on another organisation's host, was served that organisation's data
         * with HTTP 200 on every one of fifteen hops.
         *
         * The policies did not catch it: `hasTenant()` asks whether a tenant is
         * resolved, not whether it is YOURS. The global scope did not catch it
         * either, for the same reason - it constrains to the current tenant, and
         * the current tenant was the attacker's target.
         *
         * Checked here rather than in the policy because it is not a question
         * about a record or an ability. It is a question about whether this
         * person may be on this host at all, and the answer is no.
         *
         * AFTER the session block because a stale cross-tenant session is
         * flushed and logged out there - which leaves no user, so this check
         * correctly passes and the request lands on the login page. Running it
         * first would 404 instead and leave the other organisation's session
         * data sitting in the store.
         */
        $user = $request->user();
        $tenant = app(TenantContext::class)->currentKey();

        if ($user !== null && $tenant !== null) {
            $theirs = $user->getAttribute(app(TenantContext::class)->column());

            if ($theirs !== null && (string) $theirs !== (string) $tenant) {
                abort(404);
            }
        }

        return $next($request);
    }
}
