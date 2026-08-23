<?php

namespace App\Http\Middleware;

use App\Panel\Pages;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use Alxtexh\Panel\Auth\Turnstile;
use Alxtexh\Panel\Http\Controllers\OrganisationController;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\TenantContext;

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
     * App-only props live here. Shell chrome (`panelNav`, `messages`,
     * `notificationCount`, `auth`, impersonation, trash, locale) comes from
     * the package `SharePanelProps` middleware, including `Inertia::once` for
     * stable keys so page-to-page visits do not rebuild the sidebar every hop.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),

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
             | App demo pages merged with the package list. `Inertia::once` so
             | SharePanelProps keeps this host share without re-paying it on
             | every navigation. Ability filtering stays on the package side
             | for package pages; these demo entries need none.
             */
            'panelPages' => Inertia::once(static fn (): array => [
                ...Pages::forPanel(),
                ...app(PanelManager::class)->panelPages(),
            ]),

            /*
             | The Turnstile site key, or null when the feature is off.
             |
             | SHARED RATHER THAN PER-PAGE so every auth form can include the
             | field unconditionally and render nothing when it is null - five
             | `v-if`s at five call sites is four chances to forget one, and the
             | forgotten one is an unguarded door that looks like the rest.
             |
             | The SITE key is public by design; the secret never leaves the
             | server. See `Alxtexh\Panel\Auth\Turnstile`.
             */
            'turnstileSiteKey' => Turnstile::enabled()
                ? Turnstile::siteKey()
                : null,

            /*
             * Panel-level abilities for the playground account menu. Merged by
             * SharePanelProps into `auth.can` (host keys survive).
             */
            'auth' => [
                'user' => $request->user(),
                'can' => (function () use ($request): array {
                    $user = $request->user();
                    $operator = $user !== null && method_exists($user, 'hasPermission') ? $user : null;

                    return [
                        'manageRoles' => (bool) $operator?->hasPermission('manage_roles'),
                        'viewOperations' => (bool) $operator?->hasPermission('view_operations'),
                        'manageAssistant' => (bool) $operator?->hasPermission('manage_assistant'),
                    ];
                })(),
            ],

            'sidebarOpen' => (function () use ($request): bool {
                if ($request->hasCookie('sidebar_state')) {
                    return $request->cookie('sidebar_state') === 'true';
                }

                $panel = app(PanelManager::class)->currentPanel();

                if ($panel === null) {
                    return true;
                }

                $layout = $panel->getSidebarLayout();

                // icon + dialog prefer closed on first paint (no cookie yet).
                return $layout !== 'icon' && $layout !== 'dialog';
            })(),
        ];
    }
}
