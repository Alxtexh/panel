<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Alxtexh\Panel\Auth\Impersonation;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\EditableContent;
use Alxtexh\Panel\Support\SettingsIndex;
use Alxtexh\Panel\Support\Ability;
use Alxtexh\Panel\Support\ModuleRegistry;
use Alxtexh\Panel\Support\PanelNavigation;
use Alxtexh\Panel\Support\PanelHome;
use Alxtexh\Panel\Support\PanelIdleActivity;
use Alxtexh\Panel\Support\Tenants;
use Alxtexh\Panel\Trash\TrashBin;
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

        /*
         * DATABASE-EDITED CONTENT REGISTERS HERE, not at provider boot.
         *
         * Help, FAQ and What's-new only matter on requests that can render
         * them, and every such request passes through this middleware -
         * hanging the bridge here keeps `artisan` boots and queue workers from
         * paying a content query they will never show. Before `$next`, so the
         * controllers see the registered content; cached, so an unedited table
         * costs one cache read. See `EditableContent` for the shape.
         */
        EditableContent::register();

        /*
         * WHAT THE APPLICATION ALREADY SHARED UNDER `auth`, captured before this
         * middleware shares its own.
         *
         * INERTIA MERGES BY TOP-LEVEL KEY ONLY. Two middlewares both sharing
         * `auth` do not combine - the later one REPLACES the earlier array
         * whole. This middleware runs after the application's (it is route
         * middleware; theirs is in the `web` group), so sharing a bare
         * `['user' => ...]` silently deleted every other key an application had
         * put there.
         *
         * The reference app puts `auth.can` there - the panel-level abilities
         * its account menu reads - so five entries (user management, backups,
         * logs, monitoring, activity) vanished from that menu for somebody who
         * genuinely held the permissions. Nothing errored: `can` was undefined,
         * every `v-if` read falsy, and the items were simply absent, which
         * looks exactly like not being allowed to see them.
         */
        $sharedAuth = Inertia::getShared('auth');

        Inertia::share([
            /*
             * APP NAME FOR AUTH SCREENS. Stock Breeze shares this from
             * HandleInertiaRequests; a `panel:install` app often has neither
             * Breeze nor that middleware, so AuthLayout fell back to "Panel"
             * while the demo showed APP_NAME. Share it here once so every
             * packaged screen sees the same product name.
             */
            'name' => static fn (): string => (string) config('app.name', 'Panel'),

            /*
             * THE SIDEBAR. See `PanelNavigation` for why the prefix and the
             * current-panel filter are the two things worth getting right.
             */
            'panelNav' => static fn (): array => PanelNavigation::build(),

            /*
             * IDLE LOCK, when this panel authenticates. The client timer,
             * warning modal and header padlock read this; `->idleLock(false)`
             * shares null and they stay unmounted.
             */
            'panelIdleLock' => static function () use ($panels): ?array {
                $panel = $panels->currentPanel();

                if ($panel === null || ! $panel->hasIdleLock()) {
                    return null;
                }

                $lockUrl = PanelIdleActivity::lockUrl($panel);

                if ($lockUrl === null) {
                    return null;
                }

                return [
                    'idleMinutes' => $panel->idleLockMinutes(),
                    'warningSeconds' => $panel->idleLockWarningSeconds(),
                    'lockUrl' => $lockUrl,
                ];
            },

            /*
             * GROUPS THAT ARE SECTIONS, NOT DROPDOWNS.
             *
             * Every sidebar group used to be a collapsible - the only
             * presentation there was. A name listed here renders as a plain,
             * always-open section instead: heading, items, no chevron, no
             * state. Declared in config because it is an INSTALLATION'S
             * decision about its own information architecture - a group of
             * three ever-used screens earns permanence; a group of twenty
             * resources earns a toggle - and the demo declares one so anybody
             * building on it can see both presentations exist.
             */
            'panelStaticGroups' => static fn (): array => array_values(array_filter(array_map(
                'trim',
                (array) config('panel.navigation.static_groups', []),
            ), static fn (string $name): bool => $name !== '')),

            /*
             * THE BIN, for the packaged account menu. The reference app shares
             * this itself; an application that has is left alone (same rule as
             * `auth` below), and one that has not gets the package's own
             * resolution - null when nothing in this panel soft-deletes, which
             * is what keeps a binless portal from offering an empty screen.
             */
            'panelTrash' => Inertia::getShared('panelTrash')
                ?? static fn (): ?array => app(TrashBin::class)->navigationEntry(),

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
                     * PAGE FOOTER LINKS, not the sidebar's Help/FAQ/What's new
                     * /About. Empty unless the application named some: a
                     * packaged default of /privacy would 404 on a stock
                     * install. Brand for the copyright line is `brand` above,
                     * falling back to `app.name` on the client.
                     */
                    'footerLinks' => array_values(array_filter(
                        array_map(
                            static function (mixed $link): ?array {
                                if (! is_array($link) || ! isset($link['label'], $link['href'])) {
                                    return null;
                                }

                                return [
                                    'label' => (string) $link['label'],
                                    'href' => (string) $link['href'],
                                ];
                            },
                            (array) config('panel.footer.links', []),
                        ),
                    )),
                    'authLayout' => $panel->getAuthLayout(),
                    'authTestimonial' => $panel->getAuthTestimonial(),

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
                        Route::has($panel->getRouteName().'logout') => route($panel->getRouteName().'logout'),
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
                    /*
                     * ENTRIES THIS PORTAL ADDS TO THE ACCOUNT DROPDOWN.
                     *
                     * The core three - profile, security, sign out - are the
                     * keys around this one and are unconditional, because every
                     * portal authenticates somebody and every one of them must
                     * let that person reach their own account. This is what a
                     * panel adds BESIDE them, and until it existed the dropdown
                     * was a Vue slot only the application could fill: a plugin
                     * had no way in at all.
                     *
                     * `href` IS RESOLVED HERE because panels register in a
                     * provider's `boot`, before routes exist - so a closure is
                     * the only form that can name a route. The ability is
                     * checked server-side, so an entry somebody may not use is
                     * absent rather than disabled.
                     */
                    'menuItems' => collect($panel->getUserMenuItems())
                        ->filter(static fn (array $i): bool => ! isset($i['ability'])
                            || Ability::allows($panel->user(), (string) $i['ability']))
                        ->map(static fn (array $i): array => [
                            'key' => $i['key'] ?? '',
                            'label' => $i['label'] ?? '',
                            'href' => ($i['href'] ?? '') instanceof \Closure ? ($i['href'])() : (string) ($i['href'] ?? ''),
                            'icon' => $i['icon'] ?? null,
                        ])
                        ->values()
                        ->all(),

                    'account' => self::namedUrl(
                        $panel,
                        ['settings.profile'],
                        ['profile.edit', 'settings.profile'],
                    ),
                    'security' => self::namedUrl(
                        $panel,
                        ['settings.security'],
                        ['security.edit', 'settings.security'],
                    ),

                    /*
                     * AND HELP, for the same reason and in the same place. A
                     * help centre reached only by typing `/help` is one nobody
                     * finds; under the avatar is where every application anybody
                     * has used puts it.
                     */
                    'help' => Route::has($panel->getRouteName().'support.help')
                        ? route($panel->getRouteName().'support.help')
                        : null,

                    /*
                     * FAQ AND ABOUT TRAVEL THE SAME WAY, because the sidebar
                     * footer renders them. They used to be hardcoded to `/faq`
                     * and `/about` and therefore suppressed outside the default
                     * panel - on reasoning that predated `HelpController` being
                     * mounted under every panel's prefix. The routes exist per
                     * panel; only the hrefs were stuck at the root, so every
                     * generated portal lost its whole support footer to a
                     * stale guard.
                     */
                    'faq' => Route::has($panel->getRouteName().'support.faq')
                        ? route($panel->getRouteName().'support.faq')
                        : null,
                    'about' => Route::has($panel->getRouteName().'support.about')
                        ? route($panel->getRouteName().'support.about')
                        : null,
                    'whatsNew' => match (true) {
                        Route::has($panel->getRouteName().'support.whats-new') => route($panel->getRouteName().'support.whats-new'),
                        Route::has($panel->getRouteName().'pages.whats-new') => route($panel->getRouteName().'pages.whats-new'),
                        default => null,
                    },

                    /*
                     * EVERYTHING THE ACCOUNT MENU OFFERS, resolved per panel
                     * and null where this panel genuinely lacks the screen.
                     *
                     * The reference app's menu was 299 lines in the app because
                     * every href came from Wayfinder - generated helpers a
                     * consumer does not have. These urls are the same
                     * resolution done server-side, which is the only place
                     * that knows what is actually routed. The packaged menu
                     * renders exactly the items that are non-null, so a portal
                     * without operations offers no Backups rather than a 404,
                     * and nothing is gated on "is this the default panel".
                     */
                    'settings' => Route::has($panel->getRouteName().'settings.index')
                        ? route($panel->getRouteName().'settings.index')
                        : null,
                    'userManagement' => Route::has($panel->getRouteName().'pages.user-management')
                        ? route($panel->getRouteName().'pages.user-management', ['tab' => 'users'])
                        : null,
                    'lock' => Route::has($panel->getRouteName().'lock')
                        ? route($panel->getRouteName().'lock')
                        : null,

                    /*
                     * THE ACTIVITY LOG IS A RESOURCE, so its presence is a
                     * registry question rather than a route one - the resource
                     * route is a wildcard that answers for any slug, registered
                     * or not.
                     */
                    'activity' => isset($panels->resourcesFor($panel->id)['activities'])
                        && Route::has($panel->getRouteName().'resource')
                        ? route($panel->getRouteName().'resource', ['resource' => 'activities'])
                        : null,

                    /*
                     * OPERATIONS FALL BACK TO THE ROOT NAMES ONLY FOR THE
                     * DEFAULT PANEL. The reference app opts out of the packaged
                     * mounting (`->without(['operations'])`) and mounts them at
                     * the root itself, so the panel-prefixed names do not exist
                     * there. A NON-default portal must not inherit that
                     * fallback: its operator was deliberately not given a
                     * restore button, and a menu that routes around `without()`
                     * un-decides that.
                     */
                    'operations' => self::operationsUrls($panel),
                    'modules' => ModuleRegistry::all(),
                    'grantedModules' => ModuleRegistry::granted(),
                ];
            },

            /*
             * THE SETTINGS SIDEBAR, the same rows as `/settings`. Shared so
             * SettingsLayout does not hardcode Payment gateways on a portal
             * that never opted in.
             */
            'settingsNav' => static fn (): array => SettingsIndex::entries($request),

            /*
             * THE SIGNED-IN PERSON, resolved through the PANEL'S GUARD rather
             * than `$request->user()`. That helper reads the default guard and
             * returns null under any other, so a second portal would render its
             * account menu empty while the person was demonstrably signed in.
             */
            'auth' => static function () use ($panels, $request, $sharedAuth): array {
                $guard = $panels->currentPanel()?->getGuard();

                $user = $guard === null
                    ? $request->user()
                    : $request->user($guard);

                /*
                 * MERGED OVER WHAT WAS ALREADY THERE - see the note above. The
                 * application's own keys survive; `user` is still this
                 * package's, because only it knows which guard the current
                 * panel runs on.
                 *
                 * The existing value may itself be a closure, since that is how
                 * a lazily-evaluated shared prop is registered - resolve it
                 * rather than merging a callable into an array of data.
                 */
                $existing = $sharedAuth instanceof Closure ? $sharedAuth() : $sharedAuth;

                return array_merge(is_array($existing) ? $existing : [], [
                    'user' => $user === null ? null : [
                        'id' => $user->getAuthIdentifier(),
                        'name' => $user->name ?? null,
                        'email' => $user->email ?? null,
                    ],
                ]);
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
             * THE WORKSPACE SWITCHER, for a sidebar that needs it on every
             * page - not only on `settings/workspaces`, which is where this
             * data lived before. `Tenants::switchable()` is false for the
             * ordinary single-tenant panel, and this closure then never
             * queries anything: no membership relation, no organisation
             * model, one key and a `null`.
             *
             * NULL, NOT AN EMPTY ARRAY, when the switch route is not mounted
             * on THIS panel - `$panel->offers('workspaces')` decides that per
             * portal, and a switcher pointing at a route this panel refused
             * would be a control that 404s the moment somebody uses it.
             */
            'workspaces' => static function () use ($panels, $request): ?array {
                if (! Tenants::switchable($request)) {
                    return null;
                }

                $panel = $panels->currentPanel();

                $switchUrl = $panel !== null && Route::has($panel->getRouteName().'settings.workspaces.switch')
                    ? route($panel->getRouteName().'settings.workspaces.switch')
                    : null;

                if ($switchUrl === null) {
                    return null;
                }

                $current = Tenants::current($request);

                return [
                    'current' => $current === null ? null : Tenants::toArray($current),
                    'available' => array_map(Tenants::toArray(...), Tenants::forUser($request)),
                    'switchUrl' => $switchUrl,
                    'manageUrl' => Route::has($panel->getRouteName().'settings.workspaces')
                        ? route($panel->getRouteName().'settings.workspaces')
                        : null,
                ];
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

    /**
     * First matching named route, panel-prefixed then (for the default panel)
     * the application's own names.
     *
     * THE REFERENCE APP CLAIMS `/settings/profile` as `profile.edit`, so the
     * packaged `panel.settings.profile` is never registered. Looking only at
     * the prefixed name left Profile out of the account menu on every screen
     * that actually received these props.
     *
     * @param  list<string>  $suffixes
     * @param  list<string>  $defaultFallbacks
     */
    private static function namedUrl(\Alxtexh\Panel\Panel $panel, array $suffixes, array $defaultFallbacks = []): ?string
    {
        foreach ($suffixes as $suffix) {
            $name = $panel->getRouteName().$suffix;

            if (Route::has($name)) {
                return route($name);
            }
        }

        if ($panel->id !== (string) config('panel.default', 'admin')) {
            return null;
        }

        foreach ($defaultFallbacks as $name) {
            if (Route::has($name)) {
                return route($name);
            }
        }

        return null;
    }

    /**
     * The operations screens this panel may link to, null per screen when it
     * may not.
     *
     * See the share above: the bare root names are honoured only for the
     * default panel, because that is the one arrangement where "mounted at the
     * root instead" is a relocation rather than an escape.
     *
     * @return array{backups: ?string, logs: ?string, monitoring: ?string}
     */
    private static function operationsUrls(\Alxtexh\Panel\Panel $panel): array
    {
        $prefixed = $panel->getRouteName().'operations.';
        $isDefault = $panel->id === (string) config('panel.default', 'admin');

        $resolve = static fn (string $screen): ?string => match (true) {
            Route::has($prefixed.$screen) => route($prefixed.$screen),
            $isDefault && Route::has('operations.'.$screen) => route('operations.'.$screen),
            default => null,
        };

        return [
            'backups' => $resolve('backups'),
            'logs' => $resolve('logs'),
            'monitoring' => $resolve('monitoring'),
        ];
    }
}
