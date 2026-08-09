<?php

declare(strict_types=1);

namespace App\Panel;

use PanelKit\Panel\PanelManager;

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
     * Pages, filtered to the panel that should show them.
     *
     * EVERY PAGE HERE IS ROUTED AT THE ROOT, which is what makes the filter
     * necessary rather than tidy. A generated portal was showing Mail, the API
     * reference and the error previews in its sidebar - all links OUT of the
     * portal, into the operator application, with no way back except the browser
     * button. The resources were scoped per panel from the start; the pages were
     * not, and nothing failed because every one of those links resolves.
     *
     * DECLARED PER PAGE rather than assumed, because an application may
     * genuinely want a screen in two portals - and a page with no declaration
     * belongs to the default panel, which is where every one of these lives.
     *
     * @return list<array{title: string, href: string, icon: string, group: string}>
     */
    public static function forPanel(?string $panelId = null): array
    {
        $panelId ??= app(PanelManager::class)->currentPanel()?->id
            ?? (string) config('panel.default', 'admin');

        return array_values(array_filter(
            self::all(),
            static fn (array $page): bool => ($page['panel'] ?? config('panel.default', 'admin')) === $panelId,
        ));
    }

    /**
     * @return list<array{title: string, href: string, icon: string, group: string}>
     */
    public static function all(): array
    {
        return [
            /*
             * App screens are a GROUP, not top-level items. They are not
             * resources - no table, no policy, no model behind a registry entry
             * - so grouping them keeps the top level for the things the panel
             * actually administers.
             */
            ['title' => 'Mail', 'href' => '/apps/mail', 'icon' => 'mail', 'group' => 'Apps'],
            ['title' => 'Chat', 'href' => '/apps/chat', 'icon' => 'chat', 'group' => 'Apps'],

            /*
             * The billing preferences SINGULAR (roadmap 4.3) - one record,
             * settings-shaped. It joins the Configuration group the Custom
             * fields resource already created, because both are knobs the
             * organisation turns once rather than screens worked in all day.
             */
            ['title' => 'Billing', 'href' => '/billing-settings', 'icon' => 'sliders', 'group' => 'Configuration'],

            /*
             * THE PUBLIC PAGE, LISTED WITH THE OTHER THINGS AN ORGANISATION
             * SETS ONCE. It sits in Configuration rather than under Apps
             * because editing the front door is a preference the business
             * holds, not a screen anybody works in daily - and because putting
             * it beside Billing is the fastest way for whoever owns "what the
             * company says about itself" to find it.
             */
            ['title' => 'Landing page', 'href' => '/landing-page', 'icon' => 'home', 'group' => 'Configuration'],

            /*
             * IN "APPS" RATHER THAN A SETTINGS GROUP, because designing an
             * invoice is a thing an operator DOES rather than a preference they
             * set. It sits beside Mail and Chat for the same reason those do:
             * they are all screens somebody opens to produce something, not
             * knobs somebody turns once.
             */
            [
                'title' => 'Documents',
                'href' => '/documents',
                'icon' => 'file-text',
                'group' => 'Apps',
            ],
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
     * PAIRED WITH THE NAME THE MENU READS, so removing an entry from the menu
     * breaks the test rather than quietly orphaning a screen.
     *
     * THAT NAME IS NOW A SHARED PROP, NOT A ROUTE HELPER. The menu moved into
     * the package and stopped importing Wayfinder helpers this application
     * alone generates; `SharePanelProps` sends a url per panel instead, and the
     * menu reads it. So the value here is the key on `page.props.panel` - which
     * is why `/activities` pairs with `activity`: the resource is plural, the
     * prop the server shares is not.
     *
     * @return array<string, string> path => the shared prop key the menu reads
     */
    public static function inAccountMenu(): array
    {
        return [
            '/user-management' => 'userManagement',
            '/operations/backups' => 'operations.backups',
            '/operations/logs' => 'operations.logs',
            '/operations/monitoring' => 'operations.monitoring',

            /*
             * MOVED OUT OF THE SIDEBAR, because neither is a thing this panel
             * administers. The sidebar lists subscribers, routers and plans -
             * the operator's subject matter. A trail of what the panel did to
             * itself and a bin of what was deleted from it are both about the
             * INSTALLATION, which is what the rest of this list already holds.
             */
            '/activities' => 'activity',
            '/trash' => 'trash',
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
            /*
             * THE PACKAGED SHELL, rendered so a browser test can prove it
             * draws. This application has its own chrome, so it is the one
             * place that cannot otherwise demonstrate the chrome the PACKAGE
             * ships - see `PanelShellRenderTest` and the page's own note on why
             * it sits under `errors/`.
             */
            '/shell-preview' => 'A fixture for the packaged shell\'s browser test. Deliberately in no menu.',

            '/dashboard' => 'The home screen: the first item in the sidebar and the target of the logo.',
            '/settings' => 'The searchable settings index. Reached from the account menu\'s Settings link.',
            '/settings/profile' => 'Reached from the account menu; settings have their own sub-navigation.',
            '/settings/security' => 'Reached from the settings sub-navigation.',
            '/settings/organisation' => 'Reached from the settings sub-navigation.',
            '/settings/assistant' => 'Reached from the settings sub-navigation, for holders of manage_assistant.',
            '/settings/workspaces' => 'Reached from the settings sub-navigation.',
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
            /*
             * THE POLICY BEHIND THE LIST. It used to be a dialog over the
             * backups screen and outgrew one - four unrelated subjects and
             * nineteen controls, with the schedule off screen while somebody
             * typed a bot token. It is reached from the Settings button there,
             * which is the only place it makes sense to enter it from.
             */
            '/operations/backups/settings' => 'Opened from the Settings button on the backups screen.',
            '/activities' => 'Listed in the account menu. What the panel did to itself, not what it administers.',
            '/trash' => 'Listed in the account menu, at the end: what was deleted from this portal.',
            /*
             * THE USERS RESOURCE IS THE SAME SUBJECT AS USER MANAGEMENT, and
             * having both in the sidebar meant two entry points to one thing -
             * with different screens behind them, so whichever somebody clicked
             * became their idea of what the panel can do. The resource is
             * hidden from navigation and reached from the palette, from record
             * links, and from the API.
             */
            '/users' => 'User management in the account menu is the linked way in.',
            /*
             * READ FROM THE BANNER AND THE BELL, WRITTEN FROM THE BELL.
             *
             * An announcement's whole output appears somewhere people already
             * look - the top of the dashboard and the alerts list - and it
             * expires by itself. A permanent sidebar entry for the form that
             * writes one is navigation that earns nothing, so the link sits in
             * the bell beside the thing it produces.
             */
            '/announcements' => 'Written from the bell, read from the dashboard banner and the alerts list.',
            /*
             * A FIXTURE, and it has never been in a menu. It exists so the
             * editable-column path has a screen to exercise; listing it would
             * put a second, worse Plans screen in front of operators.
             */
            '/editable-plans' => 'A fixture for editable columns, opened by its tests and by hand.',
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
             * THE DESIGNER IS ROUTED IN EVERY PORTAL AND LINKED IN ONE.
             *
             * Panel routes are registered per panel, so the package mounts the
             * document designer wherever a panel exists - which is right: a
             * template is tenant data, and an application may well want a
             * reseller designing their own letterhead.
             *
             * THIS application links it only from the operator portal, because
             * that is where its documents are produced. An application that
             * wants it in a generated portal adds the entry; nothing here
             * prevents that, and the route is already waiting.
             */
            '/platform/documents' => 'Routed in every portal; this application links the designer from the operator portal only.',
            '/reseller/documents' => 'Routed in every portal; this application links the designer from the operator portal only.',
            /*
             * THE SUPERADMIN PORTAL, on the same three counts as the others -
             * its home is its own, its bin is its own, and the designer is
             * routed there because it is routed everywhere. It exists to edit
             * the content every portal reads and to see every tenant's tickets;
             * an operator reaches it by URL or from their own account menu, not
             * from this portal's sidebar.
             */
            '/superadmin' => 'A generated portal\'s home. Not part of this portal\'s navigation.',
            '/superadmin/trash' => 'The superadmin portal links its own bin; this portal links its own.',
            '/superadmin/documents' => 'Routed in every portal; this application links the designer from the operator portal only.',
        ];
    }
}
