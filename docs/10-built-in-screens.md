# 10. Built-in screens

The package ships complete screens that need no code from you. Every one is
mounted by default and can be dropped per panel.

## What ships

| Screen | Where it appears | Ability |
|---|---|---|
| **Backups** | Operations nav group (and account menu) | `view_operations`, `manage_backups` to restore or delete |
| **Logs** | Operations nav group (and account menu) | `view_operations` |
| **Monitoring** | Operations nav group (and account menu) | `view_operations` |
| **Directory** | Navigation | Chrome links; individual cards still ability-gated |
| **Activity** | Account menu | - |
| **Trash** | Account menu | Per-resource `restore` / `forceDelete` |
| **User management** | Account menu | Resource abilities |
| **Roles and permissions** | Settings | `manage_roles` |
| **Documents** | Navigation | `manage_documents` |
| **Assistant settings** | Settings | `manage_assistant` |
| **Workspaces** | Settings | - |
| **Organisation** | Settings | - |
| **Profile, Security** | Top-level `{panel}/profile` and `{panel}/security` (settings aliases kept) | - (your own account) |
| **Subscription access** | Redirect target when `Panel::billingState()` or `subscriptionGate()` blocks access | - |
| **Help, FAQ, About, Changelog** | Navigation | - |
| **Sitemap, Environment** | Navigation | - |

## What does NOT ship as default routes

A fresh install is **chrome + empty CRUD**, not a vertical demo. These Vue
screens stay in the npm package and can be mirrored with
`PanelPages::writeOptional()` when you subclass the matching page base:

| Screen | Page base | How it mounts |
|---|---|---|
| Catalog / CatalogItem / CatalogRegister | `CatalogBrowserPage` etc. | Your page class |
| PlanSetup | `PlanSetupPage` | `make:panel-page --plan-setup` |
| Signatures | `SignatureStudioPage` | Your page class |
| Till | `TillPage` | `make:panel-page --till` |
| Device preview | `DevicePreviewPage` | `make:panel-page --device-preview` |
| Mail | `MailPage` | `Panel::apps(['mail'])` on the portal |
| Logs (opt-in tail) | `LogsPage` | `Panel::logTail()` / `apps(['logs'])`. Ability `view_operations` |
| Chat | `ChatPage` | `Panel::apps(['chat'])` on the portal |
| API keys | `ApiKeysPage` | `Panel::apps(['api-keys'])` |
| API docs | `ApiDocsPage` (Scalar) | `Panel::apiDocs()` or `apps(['api-docs'])` |
| Showcase | `ShowcasePage` | `Panel::kitShowcase()` or `apps(['showcase'])`. Domain-neutral kit demo; keep vertical demos on separate host pages |
| Invites | `InvitePage` | `Panel::apps(['invites'])` |
| Feature flags | `FeatureFlagsPage` | `Panel::apps(['feature-flags'])` |
| Webhooks | `WebhookEndpointsPage` | `Panel::webhooks()` or `apps(['webhooks'])` |
| Billing portal | `BillingPortalPage` | `Panel::apps(['billing-portal'])`. Empty canvas until the host overrides `subscription()` / `invoices()` / `paymentMethods()` / portal actions. Demo ISP billing stays in playground; installer defaults stay domain-neutral |
| Subscription (status + browse & buy) | `PlanCatalogPage` | `Panel::planCatalog(Closure)`. The customer-facing counterpart to `PlanSetupPage` - that one edits the catalogue, this one sells from it. One page: current-subscription status at the top (`subscription()`, null by default), the plan picker below (`plans()`). Choosing opens a confirm modal, then the closure creates a checkout session with whatever processor the host uses (or points at the host's own page, with none yet) and returns its URL. See [13. Billing adapters](13-billing-adapters.md) |
| Email templates | `EmailTemplatePage` | `Panel::apps(['email-templates'])`. Packaged table + save / send-test actions. Host overrides `deliverTest()` to actually send mail |
| Onboarding | `OnboardingPage` | `Panel::apps(['onboarding'])` |
| Media library | `MediaLibraryPage` | `Panel::apps(['media-library'])`. Tenant-scoped local disk uploads (upload / move / delete). Preview and download use temporary signed URLs (or disk `temporaryUrl`) when the disk is private; override `resolveItemUrl()` for a host CDN |
| Payment gateways | `PaymentSettingsPage` | `Panel::paymentSettings()` |

The dashboard ships **empty** (`stats()` / `charts()` commented). Fill them, or
register widgets with `Panel::widgets()`.

On a first visit the dashboard also shows a **Get started** card
(`SetupChecklist`) with ordered kit chrome (organisation, profile/security,
settings, and so on). Each step is a button that links to the real page. Skip
remaining, or finishing every step, writes `panel_onboarding_done` and
`appearance.onboardingDone` so the next login does not reopen it. What's new
can show it again.

**Send feedback** is on **What's new** only (`/help` footer, `/whats-new`). It
is not in the account dropdown or a global shell button.

The account menu is **Profile** (settings/profile) and **Log out**, plus unique
items such as User management, operations, and Trash. **Settings** (the hub) is
primary in the **Settings** sidebar group on every install. Security is a tab
beside Profile inside the settings layout, not a third menu row.

Opt the rail out and put Settings back under the avatar:

```php
Panel::make('admin')->sidebarSettings(false);
```

Default is on; hosts do not register anything for Settings to appear.

## SaaS access states

For SaaS panels, the access-state flow is now packaged:

```php
Panel::make('admin')
    ->apps(['billing-portal'])
    ->billingState(); // packaged persistence-backed default
```

When the state blocks access, the panel redirects signed-in users to
`/account/suspended`, not to a blank shell. The packaged screen shows sane
default copy from status alone, links to the billing portal when present, and
always leaves logout reachable.

`billingState()` accepts your own callback too, but with no callback it now
reads `panel_billing_states` for the current billable key (tenant first, user
fallback) so hosts can start without custom resolver code.

### Inbound webhook contract

The packaged inbound endpoint is provider-neutral:

- `POST /{panel}/billing/webhooks/{adapter?}`
- verifier hook: `Panel::billingWebhookVerifier(...)`
- mapper hook: `Panel::billingWebhookMapper(...)`
- fallback mapper: generic payload keys (`billable_type`, `billable_key`,
  `status`, `period_end_at`, `grace_ends_at`, `provider_ref`)

Minimal mapper pseudocode is in [Billing adapters](13-billing-adapters.md).
The packaged helper is `GenericBillingWebhookAdapter` (HMAC header + generic
payload map). Copy `packages/panel/examples/generic-billing-webhook.php` for a
host-side wiring sample.

## "Why can I not see Monitoring / Backups / Logs?"

**Almost always: the signed-in account holds no role.**

These entries also sit in an **Operations** sidebar group when the panel
offers `operations`. They remain in the account menu. They are gated on
`view_operations`, and an account with no role holds nothing.

Check it:

```bash
php artisan panel:permissions list
php artisan tinker --execute='$u = App\Models\User::first(); echo $u->roles->pluck("name");'
```

If that prints nothing, grant a role:

```bash
php artisan panel:permissions sync
php artisan panel:permissions grant --email=you@example.com
```

This is authorisation working, not a missing feature. The entry never reaches
the browser at all when you may not open it — an `href` a person cannot use is
worse than no entry, and a hidden link is not a control on its own, so the
route refuses too.

**Second possibility: the panel dropped them.** A panel can decline any packaged
screen:

```php
Panel::make('client')
    ->path('client')
    ->without(['operations', 'trash', 'documents', 'roles']);
```

The route goes with the menu entry rather than only the link, so a customer
portal cannot be talked into reaching them by typing a URL.

The keys `without()` accepts: `operations`, `trash`, `documents`, `roles`,
`help`, `workspaces`, `assistant-settings`.

## The account menu

`DefaultAccountMenuItems` is rendered by `AppSidebar` and `AppTopNav`, so every
panel gets it without wiring. Settings is **not** duplicated here when the
Settings sidebar entry is on (the default). Profile, Log out, User management,
operations, and Trash stay under the avatar. To add your own entries, declare
them on the panel rather than editing the component:

```php
Panel::make('admin')->userMenuItems([
    [
        'key' => 'device-preview',
        'label' => 'Device preview',
        'href' => static fn (): string => route('screens.devices'),
        'icon' => 'smartphone',
    ],
]);
```

`href` may be a closure, which is resolved per request — a route helper called
at boot would bake in the first request's URL.

## Operations, in detail

**Backups** lists snapshots, their size and age, and offers restore and delete
behind `manage_backups` — separate from `view_operations` deliberately, because
everybody on an operations rota should see whether last night's backup ran, and
restoring over the live database is a much smaller circle.

**Logs** reads the application's log files with the level and channel filtered
server-side, so a 256 MB file does not reach the browser.

**Monitoring** samples queue depth, failed jobs, cache hit rate and scheduler
health. It needs `panel:monitor-sample` running on a schedule to have anything
to show:

```php
// routes/console.php
Schedule::command('panel:monitor-sample')->everyFiveMinutes();
```

Without that the screen renders and reports no samples, which is honest rather
than broken.

## Trash

A resource whose model uses `SoftDeletes` contributes to the bin automatically.
The screen groups by resource and enforces the per-resource `restore` and
`forceDelete` abilities separately — a portal whose resources do not soft-delete
shares `null` and no menu entry renders.

`panel:prune-trash` deletes permanently on a schedule. It supports `--pretend`,
which is a security feature rather than a convenience: the only way to trust an
irreversible scheduled deletion is to be able to ask what it would do first.

## Documents

Invoice and receipt templates, edited in the browser and rendered to print. The
templates carry your title, footer, support phone and support email, so the
screens are gated on `manage_documents` — anyone able to edit them can change
what every document you send says.
