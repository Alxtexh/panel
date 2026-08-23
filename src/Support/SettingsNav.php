<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\Route;
use Alxtexh\Panel\Panel;

/**
 * Settings as a findable sidebar entry on every fresh install.
 *
 * The hub already exists at `/settings` and used to live only under the
 * avatar, so operators hunted the account menu for a screen that belongs
 * with the rest of the chrome. Profile, Log out, theme, and lock stay in
 * the account menu; Settings is the primary path in the sidebar.
 *
 * DEFAULT ON. Advanced hosts that want the old placement call
 * `->sidebarSettings(false)` and the packaged account menu puts Settings
 * back under the avatar.
 */
final class SettingsNav
{
    public static function url(Panel $panel): ?string
    {
        return Route::has($panel->getRouteName().'settings.index')
            ? route($panel->getRouteName().'settings.index')
            : null;
    }

    /**
     * Sidebar entries when this panel puts Settings in the rail.
     *
     * @return list<array{title: string, href: string, icon: string, group: string, sort: int, key: string}>
     */
    public static function pages(Panel $panel): array
    {
        if (! $panel->hasSidebarSettings()) {
            return [];
        }

        $href = self::url($panel);

        if ($href === null || $href === '') {
            return [];
        }

        return [[
            'key' => 'settings',
            'title' => __('panel::directory.links.settings'),
            'href' => $href,
            'icon' => 'settings',
            /*
             * A named System group, not an ungrouped primary row. Ungrouped
             * items sit under Dashboard and compete with everyday resources;
             * System sits with Operations near the bottom of the rail, where
             * chrome belongs. One item is intentional: the hub opens the
             * settings sub-nav, so the rail does not list every settings tab.
             */
            'group' => __('panel::chrome.nav.system'),
            'sort' => 10,
        ]];
    }
}
