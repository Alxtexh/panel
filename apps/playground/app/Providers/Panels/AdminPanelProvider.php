<?php

declare(strict_types=1);

namespace App\Providers\Panels;

use Illuminate\Support\ServiceProvider;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;

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
                ->middleware(['web'])
                /*
                 * `verified` TOO, matching the group these routes used to live
                 * in. Dropping it here would quietly let an unverified account
                 * reach every resource screen while the rest of the panel still
                 * refused it.
                 */
                ->authMiddleware(['auth', 'verified'])
                ->brandName(fn (): ?string => app(\PanelKit\Panel\Support\TenantContext::class)->tenant()?->name),
        );
    }
}
