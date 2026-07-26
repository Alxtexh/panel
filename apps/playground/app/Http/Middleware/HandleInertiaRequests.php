<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use PanelKit\Panel\PanelManager;
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
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),

            /*
             | Navigation is built ONCE and shipped with the initial payload.
             |
             | antipatterns S3.0: the system being replaced rebuilt its sidebar,
             | nav tree and badge counts server-side on EVERY page load, with a
             | permission check per item — identical work, thrown away and redone
             | each navigation. Here the shell mounts once per session and never
             | re-renders, so this is paid once.
             |
             | It comes from the resource registry rather than a literal list, so
             | a generated resource appears in the sidebar untouched.
             |
             | A plain closure, NOT Inertia::optional — the sidebar has to be in
             | the initial payload or the shell renders empty. Table interactions
             | use partial reloads whose `only:` list excludes it, so filtering
             | and paging never recompute it. A full navigation does, which costs
             | a few authorization checks and no queries at all — the old system
             | recomputed a nav tree AND ten cached badge counts here.
             */
            /*
             | Per-tenant branding, applied as runtime CSS custom properties.
             |
             | Spec S8: never compile a per-tenant CSS bundle. These are tenant
             | DATA, so they cannot live in the cached schema — they ship as a
             | shared prop and the client sets them on :root.
             |
             | oklch values are passed through verbatim and used directly via
             | var(). antipatterns S6.2: someone wrapped a token in rgb() on the
             | assumption it held a space-separated triple, the result was
             | invalid, and the element rendered transparent — invisible in light
             | mode, apparently fine in dark.
             */
            'panelTheme' => fn (): array => (array) (app(TenantContext::class)->tenant()?->theme_colors ?? []),

            'panelBrand' => fn (): ?string => app(TenantContext::class)->tenant()?->name,

            'panelNav' => fn (): array => collect(app(PanelManager::class)->resources())
                ->map(fn (string $class): array => [
                    'key' => $class::key(),
                    'title' => $class::pluralLabel(),
                    'href' => '/' . $class::key(),
                    'icon' => $class::icon(),
                    'group' => $class::group(),
                    'sort' => $class::navigationSort(),
                ])
                ->filter(fn (array $item): bool => app(PanelManager::class)->resource($item['key'])::can('viewAny'))
                ->sortBy([['sort', 'asc'], ['title', 'asc']])
                ->values()
                ->all(),
            'name' => config('app.name'),
            'auth' => [
                'user' => $request->user(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
        ];
    }
}
