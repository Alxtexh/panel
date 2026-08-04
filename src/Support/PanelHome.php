<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use PanelKit\Panel\Pages\DashboardPage;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;

/**
 * Where a panel opens - one answer, used by everything that redirects.
 *
 * THREE PLACES DECIDED THIS SEPARATELY and all three said "the panel's root".
 * For a panel mounted under a prefix that is the home screen; for one mounted at
 * `/` it is the APPLICATION'S root, which in a fresh installation is Laravel's
 * welcome page. So signing in landed on the marketing page, and the panel was
 * reachable only by typing a resource URL - reported, accurately, as "why does
 * it not open on a dashboard?".
 *
 * A DASHBOARD WINS WHEN THERE IS ONE. `DashboardPage` is routed like any other
 * page, so it has a stable URL inside the panel's prefix, and it is the screen
 * an operator expects to land on. `panel:install` writes one, so a fresh
 * installation has a dashboard from the first minute rather than from whenever
 * somebody discovers the abstract class.
 *
 * THE PANEL'S ROOT REMAINS THE FALLBACK, unchanged, for an installation that
 * deleted its dashboard or never had one. Nothing here claims `/`: an
 * application's own landing page is its own, and this only decides where a
 * REDIRECT points.
 */
final class PanelHome
{
    /** The URL to send a signed-in operator to. */
    public static function urlFor(?Panel $panel): string
    {
        $panel ??= app(PanelManager::class)->currentPanel();

        if ($panel === null) {
            return '/';
        }

        $prefix = trim($panel->getPath(), '/');
        $dashboard = self::dashboardUri($panel);

        return '/'.trim($prefix.'/'.$dashboard, '/');
    }

    /**
     * The URI of this panel's dashboard, or an empty string when it has none.
     *
     * THE FIRST ONE REGISTERED, because a panel with two dashboards has already
     * made a choice this cannot improve on - and `sort` orders the navigation,
     * which is the same order pages are registered in.
     */
    public static function dashboardUri(Panel $panel): string
    {
        foreach (app(PanelManager::class)->pagesFor($panel->id) as $class) {
            if (is_subclass_of($class, DashboardPage::class)) {
                return trim($class::uri(), '/');
            }
        }

        return '';
    }
}
