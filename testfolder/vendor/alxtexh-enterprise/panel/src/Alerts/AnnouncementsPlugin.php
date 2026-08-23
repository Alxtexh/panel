<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Alerts;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Plugins\PluginContext;

/**
 * A plugin that now ships in the package it was written to imitate.
 *
 * IT WAS THE PROOF AND IS NOW THE THING. Everything a published package would do
 * it does - installs a whole CRUD screen with its routes, its policy checks, its
 * tenant scope and its navigation decision - without a line being added to
 * `routes/web.php` or any panel provider. It lived in the reference app as a
 * demonstration of that, which meant an installation wanting somewhere to WRITE
 * an announcement had to copy it: the model, the banner, the delivery and the
 * dismissal all shipped, and the one screen that composes one did not.
 *
 * REGISTERED FROM `config/panel.php`'s `plugins` list, like `TicketingPlugin`.
 * Read that class's note on why a plugin nobody hands to the manager is a plugin
 * that does not exist.
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
        return 'alxtexhpanel/announcements';
    }

    /**
     * OFF UNTIL AN INSTALLATION ASKS FOR IT.
     *
     * THIS USED TO CHECK ONLY WHICH PANEL WAS DEFAULT, which is true of every
     * fresh install's admin panel - and because the plugin ships in the default
     * `panel.plugins` list, being registered was the same as being live. So a
     * `composer require` produced an Announcements CRUD screen, its routes, and
     * an `/api/v1/announcements` endpoint with no configuration touched at all.
     *
     * REGISTERED IS NOT THE SAME QUESTION AS APPLIES, and this class is what
     * taught that. `TicketingPlugin` sits in the same list with its own config
     * gate; the two were inconsistent, and the one without the gate was the one
     * exposing an API surface.
     *
     * FOUND TWICE, INDEPENDENTLY: by installing into a genuinely bare app and
     * reading `route:list`, and later by the package's cross-tenant matrix,
     * which enumerates the registry and found `announcements` in a fixture host
     * that had registered only its own resource. Neither found it by reading
     * this file, which looked correctly gated at a glance.
     */
    public function appliesTo(Panel $panel): bool
    {
        return config('panel.announcements.enabled', false) === true
            && $panel->id === (string) config('panel.default', 'admin');
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
