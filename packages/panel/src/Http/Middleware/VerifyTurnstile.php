<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Alxtexh\Panel\Auth\Turnstile;
use Alxtexh\Panel\PanelManager;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

/**
 * The gate that actually makes Turnstile mean something.
 *
 * ONE SWITCH COVERS EVERY WAY IN. Sign-in, registration, password reset, the OTP
 * request and the magic link are all doors to the same building, and protecting
 * three of them is protecting none: whoever is guessing addresses or spraying
 * passwords simply uses whichever endpoint was forgotten. So this is applied by
 * ROUTE NAME to the whole set, in one place, and a new auth route is added to
 * that list rather than remembered about.
 *
 * WRITES ONLY. A GET renders the form the widget lives on; expecting a token
 * there would mean the page could never load to produce one.
 *
 * A VALIDATION ERROR, NOT A 403. The visitor did nothing wrong - the challenge
 * expired, or they took too long - and the useful outcome is the form again with
 * a message beside it, which is what a validation error produces in Inertia. A
 * 403 is an error page with no way back to what they were typing.
 */
final class VerifyTurnstile
{
    /**
     * Route names that must carry a solved challenge.
     *
     * NAMES RATHER THAN PATHS, because these routes come from Fortify and the
     * package owns their URIs - matching on paths would break the first time
     * Fortify moved one, and break silently, in the open direction.
     */
    private const GUARDED = [
        // Verified against `route:list`, not guessed. The first version listed
        // `login`, which is the GET that RENDERS the form - the POST is
        // `login.store`, so the guard matched nothing and every case expecting a
        // refusal passed the request straight through, silently unprotected.
        'login.store',
        'two-factor.login.store',
        'passkey.login',
        'register.store',
        'password.email',
        'password.update',
        'magic-link.request',
        'otp.send',
        'otp.reset',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        if (! Turnstile::enabled() || $request->isMethodSafe()) {
            return $next($request);
        }

        $panelId = $request->route()?->defaults['panel'] ?? null;

        if (is_string($panelId) && $panelId !== '') {
            $panel = app(PanelManager::class)->panel($panelId);

            if ($panel !== null && ! $panel->hasTurnstile()) {
                return $next($request);
            }
        }

        $name = $request->route()?->getName();

        if ($name === null || ! self::guards($name)) {
            return $next($request);
        }

        if (app(Turnstile::class)->verify($request->input('cf-turnstile-response'), $request->ip())) {
            return $next($request);
        }

        throw ValidationException::withMessages([
            'cf-turnstile-response' => 'Please complete the verification and try again.',
        ]);
    }

    /**
     * Fortify names these without a prefix. A generated portal names them
     * `{id}.login.store`. The shared door uses `*.attempt`. Matching only the
     * Fortify literals left every packaged POST unguarded: the widget showed
     * and the token was never checked.
     */
    private static function guards(string $name): bool
    {
        if (in_array($name, self::GUARDED, true)) {
            return true;
        }

        foreach (self::GUARDED as $suffix) {
            if (str_ends_with($name, '.'.$suffix)) {
                return true;
            }
        }

        return str_contains($name, 'shared-login')
            && (str_ends_with($name, '.attempt') || str_ends_with($name, '.two-factor.store'));
    }
}
