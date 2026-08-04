<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Middleware;

use Closure;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PanelKit\Panel\Auth\Impersonation;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\PanelHome;
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

                    /*
                     * WHERE THIS PANEL'S HOME LINK GOES, and it is shared
                     * because the shell cannot work it out.
                     *
                     * The published layout had `href: '/dashboard'` written
                     * into it - a FIXED path in an application that can mount
                     * several portals. So inside `/platform` the sidebar's Home
                     * pointed at the ADMIN panel's dashboard: clicking it left
                     * the portal, silently, and for somebody who may not open
                     * that dashboard it refused. Every generated portal had it,
                     * because the layout is the same file.
                     *
                     * `PanelHome::urlFor` is the same resolution sign-in uses,
                     * so the link and the redirect cannot disagree.
                     */
                    'home' => PanelHome::urlFor($panel),
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

                    /*
                     * THE ACCOUNT'S OWN SCREENS, decided the same way and for
                     * the same reason.
                     *
                     * `PanelAccountMenu` HAS TAKEN AN `accountUrl` PROP SINCE
                     * IT WAS WRITTEN and nothing ever passed one, so no
                     * installation's account menu offered a profile link - a
                     * seam with nothing behind it, of exactly the kind these
                     * two screens were missing until 0.8.1.
                     *
                     * NULL WHEN THE ROUTE IS ABSENT, because a panel may opt out
                     * of the packaged screens, and a menu item pointing at a
                     * route that is not registered is a 404 wearing a label.
                     */
                    'account' => Route::has($panel->getRouteName().'settings.profile')
                        ? route($panel->getRouteName().'settings.profile')
                        : null,
                    'security' => Route::has($panel->getRouteName().'settings.security')
                        ? route($panel->getRouteName().'settings.security')
                        : null,

                    /*
                     * AND HELP, for the same reason and in the same place. A
                     * help centre reached only by typing `/help` is one nobody
                     * finds; under the avatar is where every application anybody
                     * has used puts it.
                     */
                    'help' => Route::has($panel->getRouteName().'support.help')
                        ? route($panel->getRouteName().'support.help')
                        : null,
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

            /*
             * WHAT THE BELL'S BADGE SHOWS BEFORE IT IS OPENED.
             *
             * Sent with the page so the count is right on load with no request
             * at all - the bell itself fetches only when somebody opens it,
             * which is what keeps it off the ambient-polling budget.
             *
             * A CLOSURE, so the query runs only for a response that renders. It
             * is one indexed count on a table the notification system already
             * maintains; guarding it behind `Notifiable` keeps it from throwing
             * on an application whose user model does not use notifications at
             * all.
             */
            'notificationCount' => static function () use ($panels, $request): int {
                $guard = $panels->currentPanel()?->getGuard();

                $user = $guard === null
                    ? $request->user()
                    : $request->user($guard);

                if ($user === null || ! method_exists($user, 'unreadNotifications')) {
                    return 0;
                }

                /*
                 * A MISSING TABLE IS "NOTHING UNREAD", NOT A 500.
                 *
                 * `method_exists` was not enough, and a fresh install proved it
                 * in the worst way: Laravel puts `Notifiable` on the default
                 * User model but does NOT create the `notifications` table -
                 * that migration is opt-in. So the method existed, the query ran
                 * and every panel page died with "no such table: notifications"
                 * on a brand new application.
                 *
                 * CAUGHT RATHER THAN CHECKED, because `Schema::hasTable()` would
                 * be an extra query on every panel response forever to answer a
                 * question that changes once in an application's life.
                 */
                try {
                    return $user->unreadNotifications()->count();
                } catch (QueryException) {
                    return 0;
                }
            },

            /*
             * WHO IS REALLY DRIVING, when it is not the account on screen.
             *
             * NULL IN THE ORDINARY CASE, so the banner costs one key and no
             * query on every request that is not an impersonation.
             *
             * `Impersonation` HAS BEEN IN THE PACKAGE SINCE v0.2 and nothing
             * packaged ever displayed it - so an installation could switch into
             * somebody's account with no indication anywhere that it had. The
             * reference app wrote its own banner, which is the pattern this
             * release keeps undoing.
             *
             * THE STOP URL IS RESOLVED THE WAY SIGN-OUT IS, and is null when no
             * route answers. The banner still shows in that case: forgetting you
             * are wearing another account is the danger, and a warning with no
             * button is better than no warning.
             */
            'impersonating' => static function () use ($panels, $request): ?array {
                /*
                 * NO SESSION MEANS NO IMPERSONATION, checked before asking.
                 *
                 * Impersonation is a session fact, and `isActive()` reaches
                 * straight for the store - so on any route that shares these
                 * props without `web` middleware this closure threw "Session
                 * store not set on request" rather than answering "nobody". The
                 * test harness found it first, which is the cheap place to.
                 */
                if (! $request->hasSession()) {
                    return null;
                }

                /*
                 * BUILT FROM *THIS* REQUEST, not resolved from the container.
                 *
                 * `Impersonation` takes a `Request` in its constructor, and the
                 * container hands it whatever instance is bound as `request` at
                 * the moment of resolution - which is not necessarily the one
                 * this middleware is guarding. The guard above then passed while
                 * the object read a DIFFERENT request that had no session, and
                 * every panel whose group omits `StartSession` answered 500.
                 * Three isolation tests caught it; the guard alone did not.
                 */
                $impersonation = new Impersonation($request);

                if (! $impersonation->isActive()) {
                    return null;
                }

                $panel = $panels->currentPanel();

                return [
                    'name' => $impersonation->impersonator()?->name ?? 'Somebody',
                    'stopUrl' => match (true) {
                        $panel !== null && Route::has($panel->id.'.impersonate.stop') => route($panel->id.'.impersonate.stop'),
                        Route::has('impersonate.stop') => route('impersonate.stop'),
                        default => null,
                    },
                ];
            },
        ]);

        return $next($request);
    }
}
