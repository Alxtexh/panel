<?php

declare(strict_types=1);

namespace App\Providers\Panels;

use Illuminate\Support\ServiceProvider;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\TenantContext;
use Alxtexh\Panel\Support\ModuleRegistry;
use App\Panel\KitDemo;

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
                ->modules(KitDemo::saasModules())

                /*
                 * Subscription expiry wall stays OFF here. Nairobi Fibre is the
                 * ISP demo; `subscriptionGate()` would send operators to plan
                 * setup. A SaaS host opts in with:
                 * Panel::make('admin')->subscriptionGate(fn (): bool => $org->planIsActive());
                 */

                /*
                 * SAME-PAGE HELP / FAQ / WHAT'S NEW / ABOUT EDITING.
                 *
                 * The footer links here (`/help`, `/faq`, `/whats-new`, `/about`).
                 * Superadmin still edits at `/superadmin/*`. Client and reseller
                 * portals stay read-only. The button is gated by `support.update`
                 * (Administrator `grants_all` covers it once the name is in
                 * `panel.abilities`).
                 */
                ->editableSupport()
                ->paymentSettings(static fn (): array => KitDemo::gateways()),
        );

        /*
         * SaaS apps MUST set grants(). Defaulting to Pro keeps every Kit
         * catalogue key on so Nairobi Fibre screens (no `$module`) stay
         * reachable. Session `kit_saas_selected_plan` can follow Starter.
         */
        ModuleRegistry::grants(static fn (): array => KitDemo::grantedSaasModules());
        ModuleRegistry::caps(static fn (): array => KitDemo::saasCaps());
    }
}
