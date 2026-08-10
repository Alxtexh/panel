<?php

declare(strict_types=1);

namespace App\Providers\Panels;

use App\Policies\ContentEntryPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Alxtexh\Panel\Models\ContentEntry;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;

/**
 * The superadmin portal: the installation looking at itself.
 *
 * TWO JOBS, BOTH CENTRAL. It edits the content every other portal reads -
 * Help, FAQ, What's new, which were config arrays until `ContentEntry`
 * existed, so fixing a typo in an answer was a deploy - and it sees every
 * tenant's tickets in one list, which is what makes the two-portal support
 * story testable: raise a ticket in a tenant portal, answer it here.
 *
 * CENTRAL CONTEXT IS THE POINT, NOT A DEFAULT. Content is written once for
 * everybody, and a support desk that could only see one tenant's tickets
 * would be a desk per tenant. The same context in a tenant-facing portal
 * would be the leak the panel split exists to prevent - which is why this
 * portal gets its own guard gate rather than riding along in `platform`.
 */
final class SuperadminPanelProvider extends ServiceProvider
{
    public function boot(PanelManager $panels): void
    {
        $panels->registerPanel(
            Panel::make('superadmin')
                ->path('superadmin')

                /*
                 * ITS OWN GUARD, ITS OWN TABLE, ITS OWN FRONT DOOR.
                 *
                 * IT USED TO RUN ON `web` WITH NO SIGN-IN OF ITS OWN, and the
                 * result was a portal in name only: opening `/superadmin` as a
                 * guest redirected to the DEMO TENANT'S login, because Laravel
                 * sends a guest to the route named `login` and this panel
                 * registered none. Signing in there signed you in here, so
                 * "superadmin" was a URL prefix over the same session, the same
                 * account and the same brand.
                 *
                 * The three lines below are what make it a separate thing:
                 * `guard()` picks the session key and the user table,
                 * `authMiddleware()` gates on that guard, and `login()` mounts
                 * a form at `/superadmin/login` named `superadmin.login` -
                 * which is the name the guest redirect looks for.
                 */
                ->guard('superadmins')
                ->authMiddleware(['auth:superadmins'])
                ->login()

                /*
                 * NO SELF-SERVICE RESET. Superadmin accounts are provisioned,
                 * and a "Forgot password?" link is a mail path into the most
                 * privileged table in the installation. If this portal ever
                 * needs one it needs a `passwords.superadmins` broker to go
                 * with it - see `Panel::passwordBroker()` for why sharing the
                 * operators' broker is not an option.
                 */
                ->passwordReset(false)

                ->context(Panel::CONTEXT_CENTRAL)
                ->middleware(['web'])

                /*
                 * IT SHOULD NOT LOOK LIKE THE DEMO, and that is a safety
                 * property rather than a decorative one. Two portals that
                 * render identically are two portals somebody confuses, and
                 * the one being confused here is the one that can rewrite
                 * every tenant's content. Amber against the demo's blue, and a
                 * brand name that says which building you are in.
                 */
                /*
                 * AN AMBER TAB ICON, so this portal is distinguishable in a
                 * strip of tabs and not only once you have opened it. A data
                 * URI rather than a published file because it is four shapes -
                 * an asset in `public/` for this would be a build step and a
                 * deploy concern for a circle.
                 */
                ->favicon(
                    'data:image/svg+xml,'.rawurlencode(
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">'
                        .'<rect width="32" height="32" rx="7" fill="#d97706"/>'
                        .'<circle cx="16" cy="16" r="6" fill="#fff"/></svg>'
                    ),
                )

                /*
                 * WHAT AN EXPIRED SESSION SAYS HERE.
                 *
                 * 419 IS NOT HYPOTHETICAL ON THIS PORTAL. `panel.auth.session.
                 * max_hours` ends a session at an absolute ceiling however
                 * active it has been - deliberately, so a tab left open on a
                 * wall cannot stay signed in forever - and the screen somebody
                 * meets when that fires said "Page expired", which describes a
                 * CSRF token and tells an operator nothing.
                 */
                ->registerErrorNotification(
                    419,
                    'Your session ended',
                    'Sessions here end after a fixed period whether or not you were using them. Sign in again to carry on.',
                )

                ->brandName(fn (): string => config('app.name').' Superadmin')
                ->colors(fn (): array => [
                    'primary' => 'oklch(0.72 0.17 65)',
                    'primary-foreground' => 'oklch(0.21 0.02 65)',
                    'ring' => 'oklch(0.72 0.17 65)',
                    'sidebar-primary' => 'oklch(0.72 0.17 65)',
                    'sidebar-ring' => 'oklch(0.72 0.17 65)',
                ])

                /*
                 * THIS PORTAL OWNS THIS FOLDER - see
                 * `Panel::discoverResources()`. It used to append to
                 * `config('panel.discover')`, a list shared by every portal,
                 * which meant "add a portal" was an edit to global state and a
                 * resource's home came from a property on the class rather
                 * than from the panel that claims it.
                 */
                ->discoverResources(
                    in: app_path('Panel/Superadmin/Resources'),
                    for: 'App\\Panel\\Superadmin\\Resources',
                )
                /*
                 * No operations here either - same reasoning as the platform
                 * portal: backups and logs belong to the panel that IS the
                 * installation's admin, and a second copy of a restore button
                 * is a second thing to secure.
                 */
                ->without(['operations', 'assistant-settings']),
        );

        /*
         * The packaged model needs its policy named - auto-discovery maps
         * `App\Models\X` to `App\Policies\XPolicy` and a vendor namespace is
         * outside that convention. Without this line the panel denies every
         * ability on the resource and logs why, which is the right failure
         * and still a locked screen.
         */
        Gate::policy(ContentEntry::class, ContentEntryPolicy::class);
    }
}
