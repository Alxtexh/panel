<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Alxtexh\Panel\Auth\Turnstile;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelHome;

/**
 * ONE SIGN-IN PAGE, MULTIPLE PANELS.
 *
 * WHY THIS EXISTS ALONGSIDE `PanelAuthController`. The per-panel controller is
 * excellent when each portal has its own door: `/admin/login` authenticates
 * against the admin guard, `/client/login` against the client guard, and there
 * is no ambiguity about which panel a request belongs to.
 *
 * The ambiguity arrives the moment two user populations share a login URL. A
 * SaaS with both operators and end-users is the common case: the platform wants
 * one `/login` that decides by credential rather than by path. Sending operators
 * to `/admin/login` and clients to `/client/login` works technically but shifts
 * the routing decision onto the user, which is the decision they cannot make
 * before they have signed in.
 *
 * CREDENTIAL-BASED ROUTING, NOT PATH-BASED. POST to the shared endpoint tries
 * each participating panel's guard in the order they were declared. The first
 * that accepts the credentials owns the session and provides the redirect target.
 *
 * REGISTRATION ORDER IS THE PRIORITY ORDER. If the same account exists in two
 * guards - an unusual but possible state when an admin is also a customer - the
 * guard for the panel declared first wins. That panel's administrators have agreed
 * to that registration order; it is not a surprise.
 *
 * NO PASSWORD RESET AT THE SHARED ENDPOINT. Reset is broker-specific: each guard
 * has its own token table and its own mail template. A shared reset page would
 * need to know which broker to use before the user authenticates, and the only
 * signal is the email address - which must not be used as an account-existence
 * oracle. Each panel's own `/prefix/forgot-password` does the right thing; the
 * shared login page simply omits the link.
 *
 * NO SOCIAL SIGN-IN. Provider redirects are panel-specific: they must sign into a
 * particular guard and land on a particular panel's home. Wiring them from a
 * shared page requires per-provider, per-panel buttons - a matrix that grows with
 * both dimensions. Leave it to the per-panel login for now.
 *
 * RATE LIMITING COVERS ALL GUARDS IN ONE BUDGET. A key on email+ip hitting the
 * limit blocks all further attempts regardless of guard, so exhausting the budget
 * against one guard does not give a free pass to the others.
 */
final class SharedAuthController extends Controller
{
    public function showLogin(Request $request): Response
    {
        return Inertia::render('panel/auth/Login', [
            /*
             * THE APP NAME, not the panel brand. No panel is active here -
             * the shared route carries no `UsePanel` middleware - so there is
             * no brand to resolve. `AuthLayout` falls through `panel.brand →
             * name → 'Panel'`; passing `name` here satisfies the second step
             * so the heading says something real.
             */
            'name' => config('app.name', 'Panel'),

            'action' => $request->url(),

            /*
             * NO FORGOT-PASSWORD LINK. See the class docblock for why the
             * shared endpoint does not offer one. Each panel's own login page
             * does, and a user who needs a reset can reach it.
             */
            'forgotUrl' => null,

            'status' => $request->session()->get('status'),

            'turnstileSiteKey' => Turnstile::enabled() ? Turnstile::siteKey() : null,

            /*
             * PASSKEYS AND SOCIAL ARE PER-PANEL. Neither can be offered from
             * a shared page without knowing in advance which guard will handle
             * the credential. Setting them null means the components render
             * nothing rather than broken buttons.
             */
            'passkeys'        => null,
            'socialProviders' => [],
        ]);
    }

    /**
     * Attempt sign-in across every participating panel.
     *
     * The first guard that accepts the credentials ends the loop; all subsequent
     * guards are never tried. The user lands on the matched panel's home - or on
     * the `url.intended` entry IF it belongs to that panel's path prefix.
     */
    public function login(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email'    => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        $key = Str::transliterate(Str::lower($credentials['email']).'|'.$request->ip());
        $max = max(1, (int) config('panel.auth.max_attempts', 5));

        if (RateLimiter::tooManyAttempts($key, $max)) {
            throw ValidationException::withMessages([
                'email' => __('auth.throttle', [
                    'seconds' => $seconds = RateLimiter::availableIn($key),
                    'minutes' => (int) ceil($seconds / 60),
                ]),
            ]);
        }

        foreach ($this->panels($request) as $panel) {
            if (Auth::guard($panel->getGuard())->attempt($credentials, $request->boolean('remember'))) {
                RateLimiter::clear($key);

                $request->session()->regenerate();

                return redirect($this->destination($request, $panel));
            }
        }

        RateLimiter::hit($key, (int) config('panel.auth.decay_seconds', 60));

        throw ValidationException::withMessages([
            'email' => __('auth.failed'),
        ]);
    }

    /**
     * WHERE SIGNING IN LANDS YOU.
     *
     * Mirrors `PanelAuthController::destination()`: honour `url.intended` only
     * when the intended URL belongs to the panel we just authenticated against.
     * A URL intended for a different panel is discarded - it would send the user
     * somewhere they have not authenticated for, which means an immediate bounce
     * back to a login screen.
     */
    private function destination(Request $request, Panel $panel): string
    {
        $intended = $request->session()->pull('url.intended');

        if (! is_string($intended) || $intended === '') {
            return PanelHome::urlFor($panel);
        }

        $path = '/'.ltrim((string) parse_url($intended, PHP_URL_PATH), '/');
        $prefix = '/'.trim($panel->getPath(), '/');

        $belongs = $prefix === '/'
            ? true
            : ($path === $prefix || str_starts_with($path, rtrim($prefix, '/').'/'));

        return $belongs ? $intended : PanelHome::urlFor($panel);
    }

    /** @return list<Panel> */
    private function panels(Request $request): array
    {
        $ids = (array) ($request->route()?->defaults['panels'] ?? []);
        $manager = app(PanelManager::class);

        return array_values(array_filter(
            array_map(static fn (string $id): ?Panel => $manager->panel($id), $ids),
        ));
    }
}
