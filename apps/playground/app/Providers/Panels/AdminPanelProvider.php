<?php

declare(strict_types=1);

namespace App\Providers\Panels;

use App\Models\Feedback;
use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Alxtexh\Panel\Forms\Fields\RadioField;
use Alxtexh\Panel\Forms\Fields\SelectField;
use Alxtexh\Panel\Forms\Fields\TextareaField;
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Schema\Callout;
use Alxtexh\Panel\Schema\Step;
use Alxtexh\Panel\Schema\Wizard;
use Alxtexh\Panel\Support\SetupWizard;
use Alxtexh\Panel\Support\SetupWizardCompletion;
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
                ->pageFooter(true)
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
                ->onboarding()
                /*
                 * THE FULL-SCREEN COUNTERPART, SEPARATE FROM `onboarding()`
                 * ABOVE. That one is a dismissable dashboard checklist that
                 * links out to existing screens; this one is a forced,
                 * one-shot flow that collects real data before an operator
                 * ever sees the dashboard. Both can run at once - see
                 * `RedirectToSetupWizard`'s own docblock for why finishing
                 * one does not mark the other done.
                 *
                 * FOUR STEPS, EACH REAL FOR THIS DEMO. Localization and
                 * Location both write to `tenants.settings`/`tenants.name` -
                 * no dedicated Location model exists or is warranted here,
                 * since nothing else in this fixture would ever reference
                 * one. Data plan writes a real `Plan` row, the model this
                 * fixture already has for exactly that concept.
                 */
                ->setupWizard(fn (): SetupWizard => SetupWizard::make()
                    ->wizard(Wizard::make()->steps([
                        Step::make('Localization')
                            ->description('Timezone, date format and currency for this workspace')
                            ->icon('globe')
                            ->schema([
                                /*
                                 * A CURATED HANDFUL, NOT `DateTimeZone::listIdentifiers()`.
                                 * All 419 IANA zones trips `SelectField`'s own
                                 * inline-option guard - a select this large has to be
                                 * ->searchable() instead, which this wizard has no
                                 * search endpoint wired for. This demo is Kenya-based,
                                 * so Africa/Nairobi leads; the rest cover the other
                                 * regions an operator evaluating the kit is likely in.
                                 */
                                SelectField::make('timezone')->required()->options([
                                    'Africa/Nairobi' => 'Africa/Nairobi',
                                    'Africa/Lagos' => 'Africa/Lagos',
                                    'Africa/Johannesburg' => 'Africa/Johannesburg',
                                    'Africa/Cairo' => 'Africa/Cairo',
                                    'Europe/London' => 'Europe/London',
                                    'Europe/Paris' => 'Europe/Paris',
                                    'America/New_York' => 'America/New_York',
                                    'America/Chicago' => 'America/Chicago',
                                    'America/Los_Angeles' => 'America/Los_Angeles',
                                    'Asia/Dubai' => 'Asia/Dubai',
                                    'Asia/Kolkata' => 'Asia/Kolkata',
                                    'Asia/Singapore' => 'Asia/Singapore',
                                    'Australia/Sydney' => 'Australia/Sydney',
                                    'UTC' => 'UTC',
                                ]),
                                SelectField::make('date_format')->required()->options([
                                    'Y-m-d' => 'YYYY-MM-DD',
                                    'd/m/Y' => 'DD/MM/YYYY',
                                    'm/d/Y' => 'MM/DD/YYYY',
                                ]),
                                SelectField::make('currency')->required()->options([
                                    'KES' => 'KES',
                                    'USD' => 'USD',
                                    'EUR' => 'EUR',
                                ]),
                            ]),

                        Step::make('Location')
                            ->description('What operators and clients see as your ISP name')
                            ->icon('building')
                            ->schema([
                                TextField::make('name')->required()->placeholder('Nairobi Fibre'),
                            ]),

                        Step::make('Splash page')
                            ->description('The page a hotspot client sees before they get online')
                            ->icon('layout-template')
                            ->schema([
                                RadioField::make('splash_mode')->required()->inline()->options([
                                    'auto' => 'Create it for me',
                                    'custom' => 'Let me create it',
                                ]),
                                TextField::make('splash_headline')
                                    ->visibleWhen('splash_mode', 'custom')
                                    ->required(),
                                TextareaField::make('splash_welcome_message')
                                    ->visibleWhen('splash_mode', 'custom'),
                            ]),

                        Step::make('Data plan')
                            ->description('Your first plan - add more any time from Plans')
                            ->icon('wifi')
                            ->schema([
                                TextField::make('plan_name')->required()->placeholder('Home 20'),
                                Callout::make('20 Mbps · KES 2,500/mo (edit anytime in Plans)'),
                            ]),
                    ]))
                    ->submit(function (array $v, Request $r): void {
                        $tenant = app(TenantContext::class)->tenant();

                        if ($tenant === null) {
                            return;
                        }

                        $tenant->forceFill([
                            'name' => $v['name'],
                            'settings' => [
                                ...$tenant->settings ?? [],
                                'timezone' => $v['timezone'],
                                'date_format' => $v['date_format'],
                                'currency' => $v['currency'],
                                'splash_mode' => $v['splash_mode'],
                                'splash_headline' => $v['splash_headline'] ?? null,
                                'splash_welcome_message' => $v['splash_welcome_message'] ?? null,
                            ],
                        ])->save();

                        Plan::create([
                            'tenant_id' => $tenant->id,
                            'name' => $v['plan_name'],
                            'speed_mbps' => 20,
                            'price_cents' => 250_000,
                            'is_active' => true,
                        ]);
                    })
                    ->completion(
                        SetupWizardCompletion::make()
                            ->summary(fn (): array => [
                                [
                                    'label' => 'First location created',
                                    'detail' => app(TenantContext::class)->tenant()?->name,
                                ],
                                ['label' => 'Splash page configured'],
                                ['label' => 'Test data plan created'],
                            ])
                            ->nextSteps(fn (): array => Route::has('panel.create') ? [
                                ['label' => 'Add a router', 'href' => route('panel.create', ['resource' => 'routers'])],
                            ] : [])
                            ->actions(fn (): array => [
                                ['label' => 'Create a client', 'href' => route('panel.create', ['resource' => 'clients'])],
                                ['label' => 'Go to dashboard', 'href' => route('panel.pages.dashboard'), 'primary' => true],
                            ])
                    ))
                /*
                 * OPT-IN CAPABILITY, INACTIVE BY DEFAULT - `panel.auth.
                 * magic_link` (env `PANEL_MAGIC_LINK`) still gates whether it
                 * actually does anything; this only registers the routes and
                 * lets `PanelAuthController` offer the login-page button once
                 * that config is also true. Without this call the routes
                 * (`magic-link.request`/`.consume`) never register at all -
                 * `hasPasswordless()` gates route registration in
                 * `PanelRoutes.php`, and nothing here had ever called
                 * `->passwordless()` to turn it on, so the config toggle had
                 * nothing to toggle. Found live via `MagicLinkAndOtpTest`,
                 * which sets the config expecting exactly this route to
                 * exist.
                 */
                ->passwordless()
                ->paymentSettings(static fn (): array => KitDemo::gateways())
                ->mailSettings()
                ->apps(['api-keys', 'webhooks'])
                ->apiDocs()
                // Read-only application-log tail, ability-gated behind
                // `view_operations` - see `LogsPage`.
                ->logTail()
                /*
                 * Full dashboard DnD: operators rearrange stats, charts, and
                 * table widgets; order/span/visibility persist in appearance.
                 */
                ->userDashboards()
                ->feedback(function (array $validated, $user): void {
                    $feedback = new Feedback($validated);
                    $feedback->user_agent = $validated['user_agent'] ?? null;

                    $feedback->forceFill([
                        'tenant_id' => $user->tenant_id,
                        'user_id' => $user->id,
                    ])->save();
                }),
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
