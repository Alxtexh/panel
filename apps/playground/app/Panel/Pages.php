<?php

declare(strict_types=1);

namespace App\Panel;

/**
 * Every screen that is NOT a resource, and where it belongs in the navigation.
 *
 * THIS EXISTS BECAUSE PAGES KEPT DISAPPEARING. Resources are discovered from the
 * filesystem and place themselves in the sidebar automatically; anything else -
 * the mail screen, the API reference, the backup monitor - had to be added to a
 * TypeScript array by hand. So a page shipped, worked, was tested, and appeared
 * in no menu at all: backups and logs reachable only from the account popup, the
 * workspace reachable from nowhere whatever.
 *
 * NOTHING FAILED WHEN THAT HAPPENED, which is the actual problem. A page with no
 * route into it is indistinguishable from a page nobody has written yet.
 *
 * DECLARED HERE, ON THE SERVER, so that a TEST CAN SEE IT. That is the whole
 * reason this is PHP rather than another entry in `usePanelNav.ts`:
 * `NavigationCoverageTest` renders every authenticated screen and fails on any
 * one that is neither a resource, nor listed here, nor excluded below WITH A
 * REASON. The rule is enforced rather than remembered.
 *
 * NOTHING HERE MAY ALSO BE IN THE ACCOUNT MENU. One destination, one place to
 * find it: a link that appears twice teaches nobody where it lives and makes the
 * shorter of the two lists longer for no gain. Backups, Logs and User management
 * are reached from the account menu and are therefore listed in
 * `intentionallyUnlinked()` rather than here - the coverage test still accounts
 * for them, it just accounts for them as somebody else's entry.
 */
final class Pages
{
    /**
     * @return list<array{title: string, href: string, icon: string, group: string}>
     */
    public static function all(): array
    {
        return [
            /*
             * This one JOINS A GROUP THE RESOURCES ALREADY CREATED rather than
             * making its own: connections are about the same network as Routers
             * and Plans, and a separate heading would split one subject across
             * two places in the column.
             */
            [
                'title' => 'Connections',
                'href' => '/workspaces/connections',
                'icon' => 'activity',
                'group' => 'Network',
            ],

            /*
             * App screens are a GROUP, not top-level items. They are not
             * resources - no table, no policy, no model behind a registry entry
             * - so grouping them keeps the top level for the things the panel
             * actually administers.
             */
            ['title' => 'Mail', 'href' => '/apps/mail', 'icon' => 'mail', 'group' => 'Apps'],
            ['title' => 'Chat', 'href' => '/apps/chat', 'icon' => 'chat', 'group' => 'Apps'],
            /*
             * Development surfaces, kept apart from the operator's screens. A
             * device workbench and an API reference are for whoever is BUILDING
             * the panel; listing them beside Clients would put two things an
             * operator never needs into the column they use all day.
             */
            ['title' => 'API reference', 'href' => '/docs', 'icon' => 'book-open', 'group' => 'Building'],
            ['title' => 'Device preview', 'href' => '/screens/devices', 'icon' => 'smartphone', 'group' => 'Building'],

            /*
             * The states a panel has but cannot normally be shown.
             *
             * An error page is by definition something you cannot summon on
             * demand, so it is the screen that ships broken and stays broken -
             * nobody sees a 500 until a customer does. Putting them in the
             * navigation makes them ordinary pages that get looked at.
             */
            ['title' => 'Lock screen', 'href' => '/screens/locked', 'icon' => 'lock', 'group' => 'Screens'],
            ['title' => 'Verification', 'href' => '/screens/verify', 'icon' => 'key', 'group' => 'Screens'],
            /*
             * A TRIGGER, NOT A LINK - which is what the leading `#` marks.
             *
             * Session expiry is handled as a dialog over whatever page you were
             * on, so it has no page of its own to navigate to. The client posts
             * to `screens.expireSession` and gets a real 419 back, which its
             * transport hook then notices exactly as it would in production.
             * Anything else here would be a drawing of the dialog rather than
             * the dialog.
             */
            ['title' => 'Session expired', 'href' => '#session-expired', 'icon' => 'timer-off', 'group' => 'Screens'],
            ['title' => 'Access denied', 'href' => '/screens/error/403', 'icon' => 'shield-alert', 'group' => 'Screens'],
            ['title' => 'Not found', 'href' => '/screens/error/404', 'icon' => 'file-question', 'group' => 'Screens'],
            ['title' => 'Rate limited', 'href' => '/screens/error/429', 'icon' => 'gauge', 'group' => 'Screens'],
            ['title' => 'Server error', 'href' => '/screens/error/500', 'icon' => 'server-crash', 'group' => 'Screens'],
            ['title' => 'Maintenance', 'href' => '/screens/error/503', 'icon' => 'wrench', 'group' => 'Screens'],
        ];
    }

    /**
     * The paths the ACCOUNT MENU owns, and the sidebar must therefore not.
     *
     * DECLARED SO THE RULE CAN BE CHECKED. "Do not repeat what the account menu
     * offers" was enforced by scraping `href="/..."` out of the Vue component,
     * which worked until those literals became generated route helpers and the
     * check silently found nothing to compare. It caught itself - the test
     * asserts it found links at all - but the lesson is that a rule about two
     * lists should be expressed as two lists.
     *
     * PAIRED WITH THE HELPER NAME the component imports, so removing an entry
     * from the menu breaks the test rather than quietly orphaning a screen.
     *
     * @return array<string, string> path => the route helper the menu uses
     */
    public static function inAccountMenu(): array
    {
        return [
            '/user-management' => 'userManagement',
            '/operations/backups' => 'operations.backups',
            '/operations/logs' => 'operations.logs',
            '/operations/monitoring' => 'operations.monitoring',
        ];
    }

    /**
     * Screens that deliberately appear in NO menu, each with its reason.
     *
     * AN ALLOW-LIST WITH REASONS, not a way to silence the test. Adding a path
     * here is a decision somebody has to write down and another person can
     * disagree with; forgetting to link a page is neither.
     *
     * Most of these are reached from somewhere that is not the sidebar - the
     * topbar bell, the command palette, a sub-navigation, an emailed link - and
     * "reached from somewhere else" is the only reason that belongs here.
     *
     * @return array<string, string>
     */
    public static function intentionallyUnlinked(): array
    {
        return [
            '/dashboard' => 'The home screen: the first item in the sidebar and the target of the logo.',
            '/settings/profile' => 'Reached from the account menu; settings have their own sub-navigation.',
            '/settings/security' => 'Reached from the settings sub-navigation.',
            '/settings/organisation' => 'Reached from the settings sub-navigation.',
            '/settings/roles' => 'The standalone permission matrix. User management is the linked way in.',

            /*
             * THE ACCOUNT MENU OWNS THESE THREE, and the sidebar deliberately
             * does not repeat them. They were briefly in both, which is worse
             * than either: a destination in two places teaches nobody where it
             * lives, and it lengthens the list people scan all day to duplicate
             * a list they already had.
             */
            '/user-management' => 'Listed in the account menu, next to Settings.',
            '/operations/backups' => 'Listed in the account menu: the installation, not the organisation.',
            '/operations/logs' => 'Listed in the account menu, beside Backups.',
            '/operations/monitoring' => 'Listed in the account menu, beside Backups and Logs.',
            '/operations/platform' => 'The old path for monitoring; it redirects, and runbooks still point at it.',
            '/user/confirm-password' => 'An interstitial, shown when a screen demands a fresh password.',
            /*
             * DELIBERATELY UNLINKED, and linking it would be a bug. It is where
             * `RequirePasswordRenewal` sends somebody whose password has
             * expired, and it is the ONLY screen they can open until they do -
             * so a permanent menu entry would advertise it to everybody else as
             * an ordinary destination.
             */
            '/password/change' => 'Reached by redirect when a password has expired. Not a destination.',
            '/email/verify' => 'Part of signing up, reached from an emailed link.',
            '/help' => 'Linked from the sidebar footer.',
            '/faq' => 'Linked from the sidebar footer.',
            '/whats-new' => 'Linked from the sidebar footer.',
            '/about' => 'Linked from the sidebar footer.',
            '/about/building' => 'The build guide, linked from About.',
            /*
             * A GENERATED PORTAL'S OWN ROOT. It is not in this portal's
             * navigation and must not be: a link to another portal is a link
             * out of this one, and the sidebar is for where you already are.
             * Reached by typing the path or from wherever the installation
             * chooses to link its portals.
             */
            '/platform' => 'A generated portal\'s home. Not part of this portal\'s navigation.',
            '/reseller' => 'A generated portal\'s home. Not part of this portal\'s navigation.',
            /*
             * EACH PORTAL LINKS ITS OWN BIN, from `TrashBin::navigationEntry` -
             * so these are linked, just not from HERE. This portal's sidebar
             * offers this portal's trash and nobody else's, for the same reason
             * it does not offer another portal's subscribers.
             */
            '/platform/trash' => 'The platform portal links its own bin; this portal links its own.',
            '/reseller/trash' => 'The reseller portal links its own bin; this portal links its own.',
            /*
             * A PLUGIN'S SCREEN, IN ANOTHER PORTAL. `AnnouncementsPlugin`
             * installs into every tenant portal and adds the link to each one's
             * own navigation - so this is linked, from the reseller sidebar.
             * This portal lists its own, at `/announcements`, which is why that
             * path is NOT here.
             */
            '/reseller/announcements' => 'Installed by a plugin, and linked from the reseller portal\'s own navigation.',
        ];
    }
}
