<?php

declare(strict_types=1);

namespace App\Providers\Panels;

use Illuminate\Support\ServiceProvider;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\TenantContext;

/**
 * The operator portal: the ISP back-office itself.
 *
 * IT WAS THE ONLY PORTAL AND WAS THEREFORE NEVER DECLARED. Its resources sat in
 * a flat registry, its routes were inlined in `web.php` at the root, and nothing
 * anywhere said "this is a panel, it authenticates with this guard, it is scoped
 * to a tenant". That was invisible while one portal existed and became the
 * obstacle the moment there were two: `make:panel-resource` had no first panel
 * to default to, and the resource segment had no panel to be constrained by.
 *
 * SO IT IS DECLARED LIKE ANY OTHER, and generated portals are not a special
 * case bolted beside a hardcoded original.
 *
 * TWO THINGS ARE DELIBERATELY UNLIKE A GENERATED PANEL:
 *
 *   PATH IS EMPTY. This portal is the application - `/clients`, not
 *   `/admin/clients` - and moving it would break every link that exists.
 *
 *   ROUTE NAMES KEEP THE `panel.` PREFIX rather than becoming `admin.`. They are
 *   named in controllers, in tests and in generated TypeScript helpers; renaming
 *   them buys consistency and costs every one of those.
 *
 * REGISTERED FIRST, which is what makes it the default for
 * `make:panel-resource` - a resource generated with no `--panel` belongs to the
 * portal somebody is most likely working on.
 */
final class AdminPanelProvider extends ServiceProvider
{
    public function boot(PanelManager $panels): void
    {
        $panels->registerPanel(
            Panel::make('admin')
                ->path('')
                ->routeName('panel')
                ->guard('web')
                /*
                 * TENANT CONTEXT: every query is scoped to the resolved
                 * organisation, and a null tenant key is a DENY signal rather
                 * than "all tenants".
                 */
                ->context(Panel::CONTEXT_TENANT)
                /*
                 * WRITES ARE ALL-OR-NOTHING HERE. A create in this portal is
                 * not one INSERT - custom fields fold into a JSON column and
                 * an observer writes the audit entry - so a failure partway
                 * through would leave the record saved and its trail missing,
                 * and the operator retrying would produce the duplicate the
                 * first attempt half-made. Declared per panel because it
                 * changes failure behaviour for THIS portal's actions.
                 */
                ->databaseTransactions()
                ->middleware(['web'])
                /*
                 * `verified` TOO, matching the group these routes used to live
                 * in. Dropping it here would quietly let an unverified account
                 * reach every resource screen while the rest of the panel still
                 * refused it.
                 */
                /*
                 * `auth:web`, NOT BARE `auth`, and the two are identical here
                 * only by coincidence.
                 *
                 * Bare `auth` gates on THE DEFAULT GUARD, which happens to be
                 * this panel's - so the difference is invisible on this portal
                 * and fatal on any other. It is spelled out because
                 * `PanelSeparationConformanceTest` asserts every panel gates on
                 * the guard it declares, and an exception carved out for the
                 * one panel where the mistake is harmless is an exception that
                 * teaches the pattern.
                 */
                ->authMiddleware(['auth:web', 'verified'])
                /*
                 * THIS APPLICATION MOUNTS THE OPERATIONS SCREENS ITSELF.
                 *
                 * They are the package's now - controller, jobs and Vue - but
                 * this panel sits at the ROOT path, so the packaged routes and
                 * the ones declared in `web.php` would be the same URLs
                 * registered twice. Opting out here leaves one registration,
                 * and keeps the named routes Wayfinder generates from.
                 *
                 * A fresh installation changes nothing and gets them mounted
                 * under its panel automatically.
                 */
                ->without(['operations', 'assistant-settings'])
                ->brandName(fn (): ?string => app(TenantContext::class)->tenant()?->name)

                /*
                 | A SIDEBAR ENTRY THAT IS NOT A RESOURCE - `navigationItems()`.
                 |
                 | The sidebar is derived from the resource registry, which is
                 | right until a portal wants a link to something that is not a
                 | record: a report, an external dashboard, a status page. The
                 | old workaround was a page that existed only to redirect.
                 |
                 | USED HERE ON PURPOSE. The API is tested in the package, but a
                 | feature no application exercises is one nobody has looked at -
                 | the failure shape this codebase has paid for repeatedly. The
                 | in-panel documentation is a real link somebody wants and a
                 | genuine non-resource, so it earns its place twice over.
                 |
                 | `href` IS A CLOSURE because this runs in `boot`, before routes
                 | exist: `route('docs')` called eagerly throws about a route
                 | that is merely not registered YET.
                 */
                ->navigationItems([
                    [
                        'title' => 'Documentation',
                        'href' => static fn (): string => route('docs'),
                        'icon' => 'book-open',
                        /*
                         | NESTED, with the same `Section/Subgroup` string a
                         | resource uses. Declared entries reach the sidebar
                         | through `PanelNavigation::declared()` rather than
                         | `resources()`, so this is the one place the two
                         | features meet - and the demo is where that meeting
                         | is actually looked at.
                         */
                        'group' => 'Building/Reference',
                        'sort' => 90,
                    ],
                ])

                /*
                 | AND AN ACCOUNT-MENU ENTRY - `userMenuItems()`.
                 |
                 | The packaged core of that dropdown - profile, security, sign
                 | out - is unconditional. This is what a portal adds beside it,
                 | and it used to be a Vue slot, which meant only the
                 | application could reach it and a plugin had no way in at all.
                 |
                 | The device preview is a development surface rather than an
                 | operator screen, which is exactly the sort of thing that
                 | belongs behind the account menu rather than in the sidebar.
                 */
                ->userMenuItems([
                    [
                        'key' => 'device-preview',
                        'label' => 'Device preview',
                        'href' => static fn (): string => route('screens.devices'),
                        'icon' => 'smartphone',
                    ],
                ]),
        );
    }
}
