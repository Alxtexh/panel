<?php

namespace App\Http\Middleware;

use App\Http\Controllers\OrganisationController;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\Locale;
use PanelKit\Panel\Support\TenantContext;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    /**
     * Who is really driving, when it is not the account on screen.
     *
     * Null in the ordinary case, so the banner costs one key and no query for
     * every request that is not an impersonation.
     *
     * @return array{name: string, since: string|null}|null
     */
    private function impersonationBanner(): ?array
    {
        $impersonation = app(\PanelKit\Panel\Auth\Impersonation::class);

        if (! $impersonation->isActive()) {
            return null;
        }

        return [
            'name' => $impersonation->impersonator()?->name ?? 'Somebody',
            'since' => session(\PanelKit\Panel\Auth\Impersonation::STARTED_KEY),
        ];
    }

    public function share(Request $request): array
    {
        return [
            /*
             * The unread badge, shared with every page.
             *
             * Shipping the count with the payload is what lets the bell render
             * correctly on load WITHOUT a request - the alternative is every
             * page firing an XHR just to decide whether to draw a dot.
             *
             * One indexed count, and only for an authenticated user.
             */
            'notificationCount' => fn (): int => $request->user()?->unreadNotifications()->count() ?? 0,

            /*
             * The account's saved appearance, or null for a guest.
             *
             * Shipped with every page so a second browser adopts the same theme
             * on its FIRST load rather than after the user notices and fixes it
             * by hand. The client treats this as authoritative and keeps
             * localStorage as a pre-paint cache.
             */
            'appearance' => fn (): ?array => $request->user()?->appearance,

            ...parent::share($request),

            /*
             | Navigation is built ONCE and shipped with the initial payload.
             |
             | antipatterns S3.0: the system being replaced rebuilt its sidebar,
             | nav tree and badge counts server-side on EVERY page load, with a
             | permission check per item - identical work, thrown away and redone
             | each navigation. Here the shell mounts once per session and never
             | re-renders, so this is paid once.
             |
             | It comes from the resource registry rather than a literal list, so
             | a generated resource appears in the sidebar untouched.
             |
             | A plain closure, NOT Inertia::optional - the sidebar has to be in
             | the initial payload or the shell renders empty. Table interactions
             | use partial reloads whose `only:` list excludes it, so filtering
             | and paging never recompute it. A full navigation does, which costs
             | a few authorization checks and no queries at all - the old system
             | recomputed a nav tree AND ten cached badge counts here.
             */
            /*
             | Per-tenant branding, applied as runtime CSS custom properties.
             |
             | Spec S8: never compile a per-tenant CSS bundle. These are tenant
             | DATA, so they cannot live in the cached schema - they ship as a
             | shared prop and the client sets them on :root.
             |
             | oklch values are passed through verbatim and used directly via
             | var(). antipatterns S6.2: someone wrapped a token in rgb() on the
             | assumption it held a space-separated triple, the result was
             | invalid, and the element rendered transparent - invisible in light
             | mode, apparently fine in dark.
             */
            'panelTheme' => fn (): array => (array) (app(TenantContext::class)->tenant()?->theme_colors ?? []),

            'panelBrand' => fn (): ?string => app(TenantContext::class)->tenant()?->name,

            /*
             | The tenant's own mark, as a URL rather than as bytes.
             |
             | A route, not a data URI: the logo is on the private disk and is
             | served by a controller that checks the session, so inlining it
             | here would put an organisation's file into every page payload -
             | including the ones that get cached and logged - to save one
             | request the browser caches anyway.
             |
             | Null when there is no uploaded logo, which is what makes the
             | wordmark fall back rather than render a broken image.
             */
            'panelLogo' => fn (): ?string => OrganisationController::logoUrl(
                app(TenantContext::class)->tenant()?->logo_path,
            ),

            /*
             | THIS PANEL'S RESOURCES, not every registered one.
             |
             | It was the whole registry, which was the same list while one
             | portal existed. With three, the platform portal's Tenants and the
             | reseller's Plans appeared in the operator's sidebar - ungrouped,
             | at the top level, linking to paths this portal does not even
             | route. Nothing failed; the menu simply started advertising other
             | people's screens.
             */
            'panelNav' => fn (): array => collect(app(PanelManager::class)->resourcesFor(
                app(PanelManager::class)->currentPanel()?->id ?? (string) config('panel.default', 'admin'),
            ))
                ->map(fn (string $class): array => [
                    'key' => $class::key(),
                    'title' => $class::pluralLabel(),
                    /*
                     | PREFIXED WITH THE PANEL'S PATH. The operator portal sits
                     | at the root so its links are unchanged; a generated portal
                     | is mounted under its own prefix, and a bare `/tenants`
                     | there is a link to a route that does not exist.
                     */
                    'href' => rtrim('/'.trim(
                        (string) app(PanelManager::class)->currentPanel()?->getPath(),
                        '/',
                    ), '/').'/'.$class::key(),
                    'icon' => $class::icon(),
                    'group' => $class::group(),
                    'sort' => $class::navigationSort(),
                ])
                ->filter(fn (array $item): bool => app(PanelManager::class)->resource($item['key'])::showsInNavigation())
                ->filter(fn (array $item): bool => app(PanelManager::class)->resource($item['key'])::can('viewAny'))
                ->sortBy([['sort', 'asc'], ['title', 'asc']])
                ->values()
                ->all(),
            /*
             | The screens that are NOT resources - backups, logs, the app
             | screens, the error previews.
             |
             | DECLARED ON THE SERVER, IN `App\Panel\Pages`, and shared here for
             | the same reason resources are: so that something can CHECK it.
             | These used to be a hardcoded array inside `usePanelNav.ts`, where
             | forgetting an entry was silent - and it happened, repeatedly, to
             | the point where finished screens were reachable from nothing.
             | `NavigationCoverageTest` now renders every authenticated screen
             | and fails on any that this list and the resource registry between
             | them do not account for.
             |
             | NO PERMISSION FILTER, because nothing in the list needs one: what
             | is guarded - backups, logs, user management - is reached from the
             | account menu, which does its own checking. A filter here would be
             | a code path with no caller, and the first page that needs it can
             | bring one back along with the test that proves it works.
             */
            /*
             | THE TRASH ENTRY COMES FROM THE PACKAGE, not from `Pages`, because
             | the bin is a panel feature rather than an application screen:
             | `make:panel` routes it, so a generated portal must link it without
             | anybody editing this application. Null when nothing in the current
             | portal soft-deletes - a bin that can never fill would advertise a
             | recovery the panel does not offer.
             */
            'panelPages' => fn (): array => array_values(array_filter([
                ...\App\Panel\Pages::all(),
                app(\PanelKit\Panel\Trash\TrashBin::class)->navigationEntry(),
            ])),

            'name' => config('app.name'),
            /*
             | The impersonation banner's data.
             |
             | SHARED RATHER THAN FETCHED, because it must be on screen on EVERY
             | page from the first paint. A banner that arrives after a request
             | is a banner somebody has already acted without seeing.
             */
            'impersonating' => $this->impersonationBanner(),

            /*
             | The Turnstile site key, or null when the feature is off.
             |
             | SHARED RATHER THAN PER-PAGE so every auth form can include the
             | field unconditionally and render nothing when it is null - five
             | `v-if`s at five call sites is four chances to forget one, and the
             | forgotten one is an unguarded door that looks like the rest.
             |
             | The SITE key is public by design; the secret never leaves the
             | server. See `PanelKit\Panel\Auth\Turnstile`.
             */
            'turnstileSiteKey' => \PanelKit\Panel\Auth\Turnstile::enabled()
                ? \PanelKit\Panel\Auth\Turnstile::siteKey()
                : null,

            'auth' => [
                'user' => $request->user(),

                /*
                 * Panel-level abilities, shared so navigation can hide what it
                 * would only 403 on.
                 *
                 * PRESENTATION ONLY. Every one of these is re-checked at the
                 * endpoint - hiding a link is a courtesy, never a guard, and a
                 * client that ignores it gets a 403 rather than a mutation.
                 */
                'can' => [
                    'manageRoles' => (bool) $request->user()?->hasPermission('manage_roles'),
                    'viewOperations' => (bool) $request->user()?->hasPermission('view_operations'),
                ],
            ],
            /*
             * LANGUAGE AND DIRECTION TRAVEL TOGETHER, because they are one fact.
             * `dir` is applied to <html>, so every logical CSS property in the
             * panel mirrors from a single attribute rather than from a hundred
             * conditional classes.
             */
            'locale' => [
                'current' => app()->getLocale(),
                'direction' => Locale::direction(),
                'available' => Locale::available(),
            ],

            // The whole string set, inline. A few kilobytes against a frame of
            // visible translation keys - see Locale::messages().
            'messages' => Locale::messages(),

            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
        ];
    }
}
