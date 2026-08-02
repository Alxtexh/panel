<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\PanelNavigation;
use Symfony\Component\HttpFoundation\Response;

/**
 * The props every panel screen needs, shared once.
 *
 * WHY THIS IS IN THE PACKAGE NOW. `panelPages()` and the resource registry have
 * always existed server-side and nothing handed them to Inertia, so every
 * consuming application wrote its own `HandleInertiaRequests` - rebuilding the
 * sidebar, the prefixing and the ability filter, each differently. The
 * reference app's version was a hundred-line closure that worked; a port that
 * copies two thirds of it has a menu that advertises screens the reader cannot
 * open, or omits ones they can.
 *
 * SHARED LAZILY, WHICH IS NOT A DETAIL. Each value is a closure, so a partial
 * reload that asks for one prop does not walk the whole registry and run an
 * ability check per resource. On a panel with thirty resources that is the
 * difference between a filter change costing one query and costing thirty.
 *
 * IT DOES NOT REPLACE AN APPLICATION'S OWN MIDDLEWARE. Inertia merges shared
 * data, and an application sharing `panelNav` itself wins - the reference app
 * still does, because its sidebar carries screens the package knows nothing
 * about. This is the floor, not the ceiling.
 */
final class SharePanelProps
{
    public function handle(Request $request, Closure $next): Response
    {
        $panels = app(PanelManager::class);

        Inertia::share([
            /*
             * THE SIDEBAR. See `PanelNavigation` for why the prefix and the
             * current-panel filter are the two things worth getting right.
             */
            'panelNav' => static fn (): array => PanelNavigation::build(),

            'panel' => static function () use ($panels): ?array {
                $panel = $panels->currentPanel();

                if ($panel === null) {
                    return null;
                }

                return [
                    'id' => $panel->id,
                    'path' => '/'.trim($panel->getPath(), '/'),
                    'brand' => $panel->resolveBrandName(),

                    /*
                     * THE PANEL'S OWN PALETTE, resolved per request because a
                     * portal may wear the signed-in reseller's colours. Empty
                     * for a panel that declared none, which is most of them -
                     * the published layout applies nothing in that case and the
                     * stylesheet's defaults stand.
                     *
                     * `Panel::colors()` was dead code until this line existed:
                     * the builder method and its resolver both shipped and
                     * nothing read either, so configuring a palette did
                     * nothing at all.
                     */
                    'colors' => $panel->resolveColors(),

                    /*
                     * WHERE "SIGN OUT" POSTS, decided by the SERVER because
                     * only the server knows whether this panel scaffolded its
                     * own auth. `--auth` names the route `{id}.logout`; an
                     * application on Breeze or Fortify has a plain `logout`.
                     *
                     * NULL WHEN NEITHER EXISTS, and the packaged shell then
                     * renders no sign-out item at all. A menu entry posting to
                     * a route that does not exist is a 404 on the one action
                     * somebody takes when they want to be safe.
                     */
                    'logout' => match (true) {
                        Route::has($panel->id.'.logout') => route($panel->id.'.logout'),
                        Route::has('logout') => route('logout'),
                        default => null,
                    },
                ];
            },

            /*
             * THE SIGNED-IN PERSON, resolved through the PANEL'S GUARD rather
             * than `$request->user()`. That helper reads the default guard and
             * returns null under any other, so a second portal would render its
             * account menu empty while the person was demonstrably signed in.
             */
            'auth' => static function () use ($panels, $request): array {
                $guard = $panels->currentPanel()?->getGuard();

                $user = $guard === null
                    ? $request->user()
                    : $request->user($guard);

                return [
                    'user' => $user === null ? null : [
                        'id' => $user->getAuthIdentifier(),
                        'name' => $user->name ?? null,
                        'email' => $user->email ?? null,
                    ],
                ];
            },
        ]);

        return $next($request);
    }
}
