<?php

declare(strict_types=1);

namespace App\Plugins;

use App\Panel\Resources\AnnouncementResource;
use PanelKit\Panel\Plugins\Plugin;
use PanelKit\Panel\Plugins\PluginContext;

/**
 * A plugin, living where a real one would.
 *
 * IT IS HERE TO BE THE PROOF, and to be the example. Everything a published
 * package would do it does - installs a whole CRUD screen with its routes, its
 * policy checks, its tenant scope and its navigation entry, and chooses which
 * portals it belongs in - and it does all of it without a line being added to
 * `routes/web.php`, `Pages.php` or any panel provider.
 *
 * IN A REAL PACKAGE this class and its resource would ship in
 * `vendor/acme/announcements`, and the package's own service provider would call
 * `PanelManager::plugin(new AnnouncementsPlugin)`. Laravel discovers the
 * provider, the provider registers the plugin, and `composer require` is the
 * whole installation. It sits in the application here only because the
 * playground is one repository - the code is identical either way, which is the
 * point.
 *
 * ONE PORTAL, NOT EVERY TENANT PORTAL, and that limit is worth understanding.
 * A resource belongs to exactly one panel - its key is a URL segment and an
 * ability name, both globally unique - so a plugin cannot install the SAME
 * resource class into two portals. It would register twice, the last write would
 * win, and the first portal would show a navigation entry whose URL its own
 * route constraint refuses. A plugin wanting a screen in two portals ships two
 * classes with two keys, exactly as the reseller portal's plans resource does.
 *
 * The operator portal is where notices are written; they are READ on whichever
 * dashboard the person opens, because the banners are not a resource.
 */
final class AnnouncementsPlugin extends Plugin
{
    public function id(): string
    {
        // Vendor-prefixed, as a published plugin's would be.
        return 'panelkit/announcements';
    }

    public function appliesTo(\PanelKit\Panel\Panel $panel): bool
    {
        return $panel->id === (string) config('panel.default', 'admin');
    }

    public function register(PluginContext $context): void
    {
        /*
         * A RESOURCE, NOT A PAGE, and the change is the point.
         *
         * It used to install a page called Announcements that listed them - and
         * a page called Announcements is a page nobody opens, so the notice
         * everybody needed to read was the one nobody read. READING moved to a
         * banner at the top of the dashboard, where people already are. What is
         * left is somewhere to WRITE one, which is a table with a form and
         * therefore an ordinary resource.
         *
         * IT ALSO PROVES THE MORE INTERESTING HALF of the plugin API: a package
         * can install a full CRUD screen - routes, policy checks, tenant scope,
         * navigation - without the application registering anything.
         */
        $context->resources([AnnouncementResource::class]);
    }
}
