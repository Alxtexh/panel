<?php

declare(strict_types=1);

namespace App\Plugins;

use App\Http\Controllers\AnnouncementController;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\Panel;
use PanelKit\Panel\Plugins\Plugin;
use PanelKit\Panel\Plugins\PluginContext;

/**
 * A plugin, living where a real one would.
 *
 * IT IS HERE TO BE THE PROOF, and to be the example. Everything a published
 * package would do it does - adds a route inside the panel's group, puts a link
 * in that portal's navigation, chooses which portals it belongs in - and it does
 * all of it without a line being added to `routes/web.php`, `Pages.php` or any
 * panel provider. That was impossible a commit ago.
 *
 * IN A REAL PACKAGE this class and its controller would ship in
 * `vendor/acme/announcements`, and the package's own service provider would call
 * `PanelManager::plugin(new AnnouncementsPlugin)`. Laravel discovers the
 * provider, the provider registers the plugin, and `composer require` is the
 * whole installation. It sits in the application here only because the
 * playground is one repository - the code is identical either way, which is the
 * point.
 *
 * TENANT PORTALS ONLY - the default from `Plugin`. Announcements are addressed
 * to an organisation's own staff, so the platform portal, which runs
 * deliberately unscoped, is the wrong place for them.
 */
final class AnnouncementsPlugin extends Plugin
{
    public function id(): string
    {
        // Vendor-prefixed, as a published plugin's would be.
        return 'panelkit/announcements';
    }

    public function register(PluginContext $context): void
    {
        /*
         * THE PATH IS RELATIVE AND THE PREFIX IS ADDED FOR US. This same
         * declaration produces `/announcements` in the operator portal and
         * `/reseller/announcements` in the reseller one - a plugin that
         * assembled the path itself would work in exactly one installation.
         */
        $context->page('Announcements', 'announcements', 'mail', 'Apps');

        $context->routes(function (Panel $panel): void {
            /*
             * INSIDE THE PANEL'S GROUP, so this route already carries the
             * portal's prefix, middleware, guard and route-name prefix. The
             * plugin does not declare `auth` and must not: a package deciding
             * its own authentication is a package that can get it wrong.
             */
            Route::get('announcements', [AnnouncementController::class, 'index'])
                ->name('announcements');
        });
    }
}
