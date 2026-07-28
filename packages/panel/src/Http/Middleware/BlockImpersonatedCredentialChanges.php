<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use PanelKit\Panel\Auth\Impersonation;
use Symfony\Component\HttpFoundation\Response;

/**
 * While impersonating, the account's credentials are frozen.
 *
 * WITHOUT THIS, IMPERSONATION IS ACCOUNT THEFT WITH EXTRA STEPS. Whoever is
 * wearing the account can change its password, move its email address, remove
 * its second factor or mint an API token - and then return to their own
 * session, leaving a permanent way back in that belongs to them. Every one of
 * those is a legitimate thing for the REAL owner to do and none of them is
 * legitimate for a visitor.
 *
 * IT IS A RULE ABOUT REQUESTS, WHICH IS WHY IT IS MIDDLEWARE. Putting it inside
 * each controller would mean every future settings screen had to remember; here
 * there is nothing to remember, and a route added next year is covered by being
 * a route.
 *
 * MATCHED ON THE ROUTE NAME AND THE PATH, deliberately belt and braces: names
 * get renamed and paths get moved, and the day one of them drifts the other
 * still holds. A false positive costs an impersonator a refusal they can undo by
 * stopping; a false negative costs somebody their account.
 *
 * READS ARE ALLOWED. The point of impersonation is to SEE what the operator
 * sees, and the security settings page is often exactly where the problem is -
 * so the page renders and the writes refuse.
 */
final class BlockImpersonatedCredentialChanges
{
    /** Fragments that identify a credential-changing endpoint. */
    private const FROZEN = [
        'password',
        'two-factor',
        'two_factor',
        'passkey',
        'email',
        'tokens',
        'sessions',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        if (! app(Impersonation::class)->isActive()) {
            return $next($request);
        }

        // Reads are the point of impersonating; only writes are refused.
        if ($request->isMethodSafe()) {
            return $next($request);
        }

        $haystack = strtolower($request->path().' '.($request->route()?->getName() ?? ''));

        foreach (self::FROZEN as $fragment) {
            if (str_contains($haystack, $fragment)) {
                abort(403, 'Credentials cannot be changed while impersonating. Stop impersonating first.');
            }
        }

        return $next($request);
    }
}
