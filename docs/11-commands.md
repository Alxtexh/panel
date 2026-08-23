# 11. Commands

## Setting up

| Command | Does |
|---|---|
| `panel:install` | Publish config, page files, layout, wire Vite, scaffold auth (default), sync permissions, first Administrator. `--no-auth`, `--no-user`, `--name`, `--email`, `--password`, `--force` |
| `make:panel` | A whole portal: provider, resources dir, isolation test. `--guard`, `--new-guard` (auth.php guard+provider+password broker; scaffolds model+migration when `--guard-model` is missing on disk), `--guard-model`, `--central`, `--auth` |
| `make:panel-resource` | A resource. `--generate` infers from the table, `--panel=` |
| `make:panel-recipe` | Official starter: one Invoice (or Item) resource, kit Vue, empty table. Alias `panel:recipe`. `--migrate`, `--seed`, `--panel=` |
| `make:panel-page` | A custom page. `--dashboard`, `--plan-setup`, `--till`, `--catalog`, `--catalog-item`, `--register`, `--directory`, `--signatures`, `--device-preview`, `--api-keys`, `--api-docs`, `--invites`, `--feature-flags`, `--webhooks`, `--billing-portal`, `--email-templates`, `--onboarding`, `--media-library` |
| `make:panel-widget` | Empty StatWidget, or `--chart` for ChartWidget |
| `make:panel-relation-manager` | Nested child resource plus a relation-manager factory (dedicated pages, not a modal) |
| `make:panel-module` | A plan-gated module: page (or `--resource`) plus a `Module::make` snippet |
| `panel:backup` | Run a backup now. `--tenant=` for one organisation only |
| `panel:make-user` | Create an account and grant it a role |
| `panel:permissions` | `list`, `sync`, `sync --prune`, `grant --email=` |
| `panel:api-token` | Issue a token for the public API |
| `panel:update` | Migrate published files across package versions |

## Checking

| Command | Does |
|---|---|
| **`panel:doctor`** | **Find configuration that is silently wrong** |
| `panel:search-index` | Print (or `--apply`) search DDL for large catalogues |
| `panel:blueprint` | Regenerate `AGENTS.md` from the running application |
| `panel:benchmark` | Time every list surface, warm, as a median |

`panel:doctor` is the one to run first on a new installation. Every check exists
because the failure is silent: a working panel serving wrong or unprotected
data, where every page returns 200 and every test passes. For example: with
`BROADCAST_CONNECTION=log`, channel authorisation never runs at all and every
channel authorises, including for guests.

### Search indexes at scale

Global search and list search both use `LIKE '%term%'` (plus a prefix form).
That is fine under roughly ten thousand rows per searchable table, and the
first thing to fall over at millions.

```bash
php artisan panel:search-index           # print DDL for the current engine
php artisan panel:search-index --apply   # run it (laptop / staging only)
```

- **Postgres:** `pg_trgm` GIN per searchable column (`CREATE INDEX CONCURRENTLY`)
- **MySQL / MariaDB:** one covering `FULLTEXT` per table
- **SQLite:** refused honestly (FTS5 needs a shadow table, not an index)

It prints by default on purpose. Which tables are actually large, when the quiet
hour is, and whether to build concurrently belong to whoever runs the install.
`--apply` is for a laptop. `panel:doctor` notes when approximate row counts on
Postgres / MySQL look past `panel.search.index_nudge_rows` (default 10_000) and
searchable columns exist. An index nobody needed is write cost and disk for
nothing.

**Do not trust a single benchmark reading.** This project has published a 2×
regression that did not exist, from one measurement on a busy machine. The
negative journey is the one worth running: it signs in as somebody from another
organisation and walks the same pages, and every hop must fail. A positive
journey passes just as happily with no isolation at all.

## Running on a schedule

```php
// routes/console.php
Schedule::command('panel:monitor-sample')->everyFiveMinutes();
Schedule::command('panel:refresh-rollups')->hourly();
Schedule::command('panel:prune-trash')->daily();
Schedule::command('panel:prune-exports')->daily();
Schedule::command('panel:prune-uploads')->daily();
Schedule::command('panel:dispatch-scheduled-reports')->hourly();
Schedule::command('panel:doctor-alert')->daily();
// Do NOT schedule panel:search-index hourly. It prints (or applies) DDL for
// trigram / FULLTEXT indexes. Run it when row counts demand it, in a quiet hour.
```

| Command | Does |
|---|---|
| `panel:monitor-sample` | Sample queue depth, failed jobs, cache. The monitoring screen is empty without it |
| `panel:refresh-rollups` | Maintain pre-aggregated counters |
| `panel:prune-trash` | Permanently delete expired soft-deletes. **`--pretend`** |
| `panel:prune-exports` | Remove finished export files |
| `panel:prune-uploads` | Remove orphaned pending uploads |
| `panel:dispatch-scheduled-reports` | Email saved reports |
| `panel:doctor-alert` | Run the doctor and alert on problems |
| `panel:search-index` | Print trigram (Postgres) or FULLTEXT (MySQL) DDL for searchable columns. **`--apply`** runs the statements (laptop / staging). Does nothing useful on a schedule |
| `panel:billing-check` | Apply grace-period transitions (`past_due` -> `suspended`) |
| `panel:index-knowledge` | Index help articles for the assistant |
| `panel:sitemap-generate` | Write the sitemap |
| `panel:cache-clear` | Invalidate cached panel schemas |

`--pretend` on `panel:prune-trash` is a security feature, not a convenience: the
only way to trust an irreversible scheduled deletion is to be able to ask what
it would do first.

## Tenancy

| Command | Does |
|---|---|
| `panel:reindex-tenant` | Fix index shape inside a dedicated database |
| `panel:suspend-tenant` | Suspend an organisation |

## In this repository

| Target | Does |
|---|---|
| `make verify-install` | Install both packages as a stranger would, and build |
| `make verify-broadcast` | Prove a broadcast reaches a subscriber over a real socket |
| `make publish-preview` | Print exactly what a consumer downloads |
| `make split` | Build the standalone package branches |
| `make ssr` | Build the SSR bundle and start the server |
| `make sync-client` | Rebuild `packages/ui` and mirror it into the PHP package |
| `make check-client` | Fail if `resources/client` is out of sync with `packages/ui` |
| `make release-check` | Pre-tag gate: `check-client` + `test-package` (demo must match published kit) |
| `make test-package` | The package's own Testbench suite |

## Agent APIs (v1.0.12 to v1.0.32)

`panel:blueprint` regenerates `AGENTS.md` from these. Do not invent Vue for a
screen the kit already ships.

| API | Does |
|---|---|
| `make:panel-recipe` / `panel:recipe` | Official starter. One Invoice (or Item) resource, kit Vue, empty table. `--migrate`, `--seed`. Optional comment: `apps(['billing-portal'])` + `billingState()` |
| `Panel::twoFactorChallenge()` | After password, require TOTP, a recovery code, or an email OTP when the user has that factor. Default true. `false` skips the pause. Passkeys stay on the login form. |
| `Panel::requireTwoFactor()` / `twoFactorRequired()` | After login, send users with no TOTP, email OTP, or passkey to Security until they enrol. Default false. |
| `Panel::registration()` | Mount register GET/POST the way `login()` mounts sign-in. Off until called. Optional slug. |
| `Panel::emailVerification()` | Prove the mailbox before the panel. Mounts the notice, signed verify link, and resend. Off until called. |
| `SelectField::createOption()` | Create-and-pick a related row from a modal mini-form on relationship selects. Not resource CRUD. |
| `Panel::socialite()` | Social buttons on this portal's login. Default: every provider with a client id and secret. `['google', 'github']` narrows. `false` hides them. Needs `laravel/socialite` (composer suggest). |
| `Panel::turnstile()` | Cloudflare Turnstile on this portal. Keys (`TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`) are the install switch. `false` never challenges here. |
| `TillPage` / `--till` | Empty till canvas. Vue shims packaged Till |
| `--catalog`, `--catalog-item`, `--register`, `--directory`, `--signatures`, `--device-preview` | Empty page bases. Directory inherits chrome sections |
| `Panel::apps(['mail', 'chat'])` | Empty Mail / Chat screens. `without(['mail'])` still drops them |
| `Panel::apiDocs()` / `apps(['api-docs'])` | Built-in Scalar API reference. OpenAPI at `{panel}/apps/api-docs/openapi.json`. Optional URL: `apiDocs('/path/to/openapi.json')`. Host Vite needs `@scalar/api-reference` (already a kit dependency when using the mirrored client) |
| `Panel::logTail()` / `apps(['logs'])` | Read-only log tail at `{panel}/apps/logs`. Ability `view_operations`. Optional allow-list: `logTail('laravel.log', ['laravel.log'])`. Polls `{page}/tail` |
| `Panel::kitShowcase()` / `apps(['showcase'])` | Domain-neutral kit demo at `{panel}/apps/showcase` (fields, ColumnGroup, TagsColumn, widgets). Keep vertical demos on separate host pages |
| `ColumnGroup::make('Contact', [...columns])` | Two-row table header group. Leaf columns stay flat for queries |
| `TagsColumn::make('tags')->limit(3)` | Chip UI from array / JSON / separator-split string |
| `panel:search-index` / `--apply` | Print (or apply) trigram / FULLTEXT DDL for searchable columns. Doctor notes when tables look large |
| `MapField::make('location')->latLng('lat','lng')` | Leaflet geopoint field (bundled; lazy-loaded) |
| `MapWidget::make('coverage', 'Coverage')->markers(...)` | Dashboard map card (Chart type `map`) |
| `CalendarWidget::make('bookings', 'Bookings')->events(...)` | Month schedule card |
| `QrCodeField::make('ticket')->from('public_url')` | QR preview field |
| `BarcodeField::make('sku')->format('CODE128')` | Barcode preview (JsBarcode; also `EAN13`). `->from('ean')` reads a sibling |
| `BarcodeWidget::make('sku', 'SKU')->value(...)` | Dashboard barcode card (Chart type `barcode`) |
| `LogTailWidget::make('errors', 'Errors')->file('laravel.log')` | Dashboard log-tail card (Chart type `logtail`) |
| `DiffField::make('patch')->original('before')->modified('after')` | Side-by-side text diff |
| `SelectFilter::make('author_id')->relationship(User::class, 'name')` | Related-model table filter |
| `ApiKeysPage` / `--api-keys` | Wraps `ApiToken`. Override `keys()`, `issue()`, `revoke()`. Opt in with `Panel::apps(['api-keys'])` |
| `InvitePage` / `--invites` | Pending invites canvas. Override `pending()`, `send()`, `revoke()`, `roles()`. Host owns persistence. Accept URL: `{app}/invites/accept/{token}` |
| `FeatureFlagsPage` / `--feature-flags` | Toggle UI for `panel.tenancy.features`. Override `flags()`, `toggle()` to persist |
| `WebhookEndpointsPage` / `--webhooks` | Endpoints, HMAC delivery log, retry. Opt in with `Panel::webhooks()` or `apps(['webhooks'])`. Override `events()`. Dispatch with `WebhookDispatcher::dispatch()` |
| `BillingPortalPage` / `--billing-portal` | Empty billing canvas. Override `subscription()`, `invoices()`, `paymentMethods()`, and provider-neutral action URLs/labels |
| `Panel::billingState()` | Declares `active`, `past_due`, `suspended`, `canceled`, `expired` and feeds the packaged access wall. `billingState()` with no callback uses packaged persistence |
| `Panel::billingWebhookVerifier()` + `billingWebhookMapper()` | Provider-agnostic inbound mapping hooks for `POST {panel}/billing/webhooks/{adapter?}` |
| `Panel::subscriptionGate()` | Legacy bool gate, now redirecting to the packaged suspended screen |
| `Panel::suspendedPage()` | Swap the suspended-screen component while keeping the packaged route and middleware flow |
| `EmailTemplatePage` / `--email-templates` | Subject/body templates with variables. Packaged migration. Override `templates()`, `save()`, `sendTest()` |
| `OnboardingPage` / `--onboarding` | Dedicated get-started page (`apps(['onboarding'])`). Same step list as the dashboard guide |
| `Panel::onboardingSteps()` | Replace or wrap default first-run steps. Each step needs `key`, `label`, `done`, and `href` to a real route |
| Dashboard first-run guide | Ordered chrome steps on `/dashboard` until skip or every step is done. Persist: cookie `panel_onboarding_done` and `users.appearance.onboardingDone`. Replay from What's new |
| `MediaLibraryPage` / `--media-library` | Tenant-scoped uploads on local disk. Packaged migration. Preview/download use temporary signed URLs when private; override `resolveItemUrl()` or disk via Laravel config |
| `PUT {panel}/settings/appearance` | Persist appearance on the user (`appearance` JSON column) |
| `Panel::feedback($persist)` + `FeedbackDialog` | In-panel reports. CTA lives on What's new only, not the account menu or shell |
| Account menu | Profile (account area) and Settings (hub). Security is a settings tab, not a third dropdown row |
| `TicketAnalysis` | Packaged screen; `TicketingPlugin` mounts it |
| `TableWidget` / `ChartWidget` `->live()` / `->poll('10s')` | Echo/Reverb when `window.Echo` exists; otherwise reload that deferred prop. Pauses while the tab is hidden |
| `Notification::make()->title('Saved')->success()->send()` | Inertia toast. `bell()` also writes the topbar. `actions([Action::make('view')->url($url)])` adds buttons |
| Infolist `TextEntry` / `ImageEntry` / `RepeatableEntry` | Dedicated view page, never a modal |
| `SelectField::relationship()` | BelongsTo picker |
| `/{parent}/{id}/{child}/attach` | BelongsToMany attach page |
| `InteractsWithPanels` | `assertFormState`, `assertNestedAttach`, `assertPanelToast`, `assertEmptyGrantsHint`, `assertBillingSuspendedRedirect`, `assertBillingAllows`, `assertBillingWebhookAccepted`, `assertSuspendedPageRenders` |
| Operations nav group | Backups / Logs / Monitoring in the sidebar when the panel offers `operations` |
| Directory on install | Chrome hub: Settings, Users, Roles, Documents, Backups, Logs, Monitoring, Help |
