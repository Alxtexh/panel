<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use PanelKit\Panel\Api\ApiToken;
use Symfony\Component\HttpFoundation\Response;

/**
 * Authenticate a public API request from its bearer token.
 *
 * THE TOKEN IS THE TENANT CONTEXT. There is no session and no host to resolve an
 * organisation from, so this middleware establishes BOTH the acting user and the
 * tenant - and it must do so before anything queries, because the tenant scope
 * reads that context and a scope with no tenant is a scope that denies.
 *
 * IT SIGNS THE USER IN FOR THE REQUEST, deliberately. Every policy, every
 * resource `can()`, every audit entry reads the authenticated user; an API path
 * that carried its identity some other way would need a parallel version of all
 * of it, and the parallel version is the one that gets a check wrong.
 *
 * A TOKEN CAN ONLY EVER NARROW. What it grants is intersected with what its
 * owner may do NOW, so a token outliving the permission that justified it grants
 * nothing - the integration stops working, which is the correct direction.
 *
 * IT NEVER SAYS WHY IT REFUSED, beyond "unauthenticated". "That token expired",
 * "that token does not exist" and "that user was deleted" are three facts an
 * attacker can use to enumerate; the caller who owns the token can see all three
 * in the panel.
 */
final class AuthenticateApiToken
{
    public function handle(Request $request, Closure $next): Response
    {
        $plaintext = $request->bearerToken();

        if ($plaintext === null || $plaintext === '') {
            return $this->refuse();
        }

        $token = ApiToken::findFor($plaintext);

        if ($token === null) {
            return $this->refuse();
        }

        $model = (string) config('auth.providers.users.model', User::class);
        $user = $model::query()->find($token->user_id);

        /*
         * A DELETED OR SUSPENDED OWNER TAKES THE TOKEN WITH THEM. An API key
         * that outlives the person who created it is the one nobody revokes when
         * they leave, and it is the one that is still working six months later.
         */
        if ($user === null) {
            return $this->refuse();
        }

        /*
         * THE OWNER'S ORGANISATION MUST STILL MATCH THE TOKEN'S. They cannot
         * normally diverge - but if an account were ever moved between tenants,
         * a token minted under the old one would otherwise keep reading the old
         * organisation's records through a user who no longer belongs to it.
         */
        if ((string) $user->tenant_id !== (string) $token->tenant_id) {
            return $this->refuse();
        }

        auth()->setUser($user);

        /*
         * THE TOKEN TRAVELS WITH THE REQUEST, so the controller can intersect
         * its abilities with the user's. Attached rather than held in a static:
         * two requests in one process must never see each other's.
         */
        $request->attributes->set('panel.api_token', $token);

        $token->touchUsage();

        return $next($request);
    }

    private function refuse(): Response
    {
        return response()->json([
            'message' => 'Unauthenticated.',
        ], 401, ['WWW-Authenticate' => 'Bearer']);
    }
}
