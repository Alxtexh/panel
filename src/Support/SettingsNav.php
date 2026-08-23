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
 *
 * GROUP NAME IS `Settings`, same string Environment and Sitemap already
 * use. Putting the hub in a separate System group made the playground look
 * like Settings was missing: the rail already had a Settings button for
 * those pages, and the hub hid one click deeper under System.
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

        /*
         * Prefer the path over the absolute `route()` URL so a mismatched
         * APP_URL (demo on :8899 while .env still says :8000) cannot send
         * the sidebar link to the wrong host. Other panelPages entries are
         * already path-shaped via Page::navigationEntry.
         */
        $path = parse_url($href, PHP_URL_PATH);

        if (! is_string($path) || $path === '') {
            return [];
        }

        return [[
            'key' => 'settings',
            'title' => __('panel::directory.links.settings'),
            'href' => $path,
            'icon' => 'settings',
            /*
             * Joins the Settings group Environment/Sitemap already declare,
             * sort first so the hub is the first row when that group opens.
             * One hub row is intentional: it opens the settings sub-nav, so
             * the rail does not list every settings tab.
             */
            'group' => 'Settings',
            'sort' => 0,
        ]];
    }
}
