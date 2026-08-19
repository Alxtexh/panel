<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Alxtexh\Panel\Notifications\Notification;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\TenantContext;

/**
 * Feature flags config UI. OFF until `apps(['feature-flags'])`.
 *
 * Reads `TenantContext::features()` (from `panel.tenancy.features` or the tenant
 * record). Override `flags()` to declare the catalogue; override `toggle()` to
 * persist changes. Default `toggle()` is a no-op.
 */
class FeatureFlagsPage extends Page
{
    protected static string $icon = 'flag';

    protected static ?string $group = 'Developer';

    public static function uri(): string
    {
        return 'apps/feature-flags';
    }

    public static function label(): string
    {
        return 'Feature flags';
    }

    public static function component(): string
    {
        return 'FeatureFlags';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('feature-flags');
    }

    /**
     * @return list<array{name: string, enabled: bool, description?: string|null}>
     */
    public static function flags(Request $request): array
    {
        $features = app(TenantContext::class)->features();
        $flags = [];

        foreach ($features as $name => $enabled) {
            $flags[] = [
                'name' => (string) $name,
                'enabled' => (bool) $enabled,
                'description' => null,
            ];
        }

        return $flags;
    }

    public static function toggle(string $name, bool $on): void
    {
    }

    public static function actions(): array
    {
        return [
            'save' => 'manage_feature_flags',
        ];
    }

    public static function actionUris(): array
    {
        return ['save' => 'toggle'];
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $base = static::pageHref();

        return [
            'flags' => static::flags($request),
            'toggleHref' => $base.'/toggle',
        ];
    }

    public static function save(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'enabled' => ['required', 'boolean'],
        ]);

        static::toggle($validated['name'], (bool) $validated['enabled']);

        Notification::make()->title('Feature flag updated')->success()->send();

        return back();
    }

    protected static function pageHref(): string
    {
        $path = '/'.trim(static::navigationPath(), '/');
        $prefix = app(PanelManager::class)->currentPanel()?->getPath() ?? '';

        if ($prefix !== '' && $prefix !== '/') {
            $path = rtrim($prefix, '/').$path;
        }

        if (! str_starts_with($path, '/')) {
            $path = '/'.$path;
        }

        return $path;
    }
}
