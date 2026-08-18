# 11. Commands

## Setting up

| Command | Does |
|---|---|
| `panel:install` | Publish config, page files, layout, wire Vite. `--auth`, `--force` |
| `make:panel` | A whole portal: provider, resources dir, isolation test. `--guard`, `--new-guard`, `--guard-model`, `--central`, `--auth` |
| `make:panel-resource` | A resource. `--generate` infers from the table, `--panel=` |
| `make:panel-page` | A custom page. `--dashboard`, `--plan-setup`, `--till`, `--catalog`, `--catalog-item`, `--register`, `--directory`, `--signatures`, `--device-preview`, `--api-keys`, `--invites`, `--feature-flags`, `--webhooks`, `--billing-portal`, `--email-templates`, `--onboarding`, `--media-library` |
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
| `panel:blueprint` | Regenerate `AGENTS.md` from the running application |
| `panel:benchmark` | Time every list surface, warm, as a median |

`panel:doctor` is the one to run first on a new installation. Every check exists
because the failure is silent: a working panel serving wrong or unprotected
data, where every page returns 200 and every test passes. For example: with
`BROADCAST_CONNECTION=log`, channel authorisation never runs at all and every
channel authorises, including for guests.

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
Schedule::command('panel:search-index')->hourly();
```

| Command | Does |
|---|---|
| `panel:monitor-sample` | Sample queue depth, failed jobs, cache. The Monitoring screen is empty without it |
| `panel:refresh-rollups` | Maintain pre-aggregated counters |
| `panel:prune-trash` | Permanently delete expired soft-deletes. **`--pretend`** |
| `panel:prune-exports` | Remove finished export files |
| `panel:prune-uploads` | Remove orphaned pending uploads |
| `panel:dispatch-scheduled-reports` | Email saved reports |
| `panel:doctor-alert` | Run the doctor and alert on problems |
| `panel:search-index` | Rebuild the search index |
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
| `make test-package` | The package's own Testbench suite |

## Agent APIs (v1.0.12 to v1.0.20)

`panel:blueprint` regenerates `AGENTS.md` from these. Do not invent Vue for a
screen the kit already ships.

| API | Does |
|---|---|
| `TillPage` / `--till` | Empty till canvas. Vue shims packaged Till |
| `--catalog`, `--catalog-item`, `--register`, `--directory`, `--signatures`, `--device-preview` | Empty page bases. Directory inherits chrome sections |
| `Panel::apps(['mail', 'chat'])` | Empty Mail / Chat screens. `without(['mail'])` still drops them |
| `ApiKeysPage` / `--api-keys` | Wraps `ApiToken`. Override `keys()`, `issue()`, `revoke()`. Opt in with `Panel::apps(['api-keys'])` |
| `InvitePage` / `--invites` | Pending invites canvas. Override `pending()`, `send()`, `revoke()`, `roles()`. Host owns persistence. Accept URL: `{app}/invites/accept/{token}` |
| `FeatureFlagsPage` / `--feature-flags` | Toggle UI for `panel.tenancy.features`. Override `flags()`, `toggle()` to persist |
| `WebhookEndpointsPage` / `--webhooks` | Endpoints, HMAC delivery log, retry. Opt in with `Panel::webhooks()` or `apps(['webhooks'])`. Override `events()`. Dispatch with `WebhookDispatcher::dispatch()` |
| `BillingPortalPage` / `--billing-portal` | Empty billing canvas. Override `subscription()`, `invoices()`, `paymentMethods()` and actions. Host wires Stripe/Cashier |
| `EmailTemplatePage` / `--email-templates` | Subject/body templates with variables. Packaged migration. Override `templates()`, `save()`, `sendTest()` |
| `OnboardingPage` / `--onboarding` | Get-started wizard. Override `steps()`, `complete()`. Host middleware redirects first login |
| `MediaLibraryPage` / `--media-library` | Tenant-scoped uploads on local disk. Packaged migration. Override disk via Laravel config |
| `PUT {panel}/settings/appearance` | Persist appearance on the user (`appearance` JSON column) |
| `Panel::feedback($persist)` + `FeedbackDialog` | In-panel feature/bug reports |
| `TicketAnalysis` | Packaged screen; `TicketingPlugin` mounts it |
| `TableWidget` / `ChartWidget` `->poll('10s')` | Reload that deferred prop. Pauses while the tab is hidden |
| `Notification::make()->title('Saved')->success()->send()` | Inertia toast. `bell()` also writes the topbar |
| Infolist `TextEntry` / `ImageEntry` / `RepeatableEntry` | Dedicated view page, never a modal |
| `SelectField::relationship()` | BelongsTo picker |
| `/{parent}/{id}/{child}/attach` | BelongsToMany attach page |
| `InteractsWithPanels` | `assertFormState`, `assertNestedAttach`, `assertPanelToast`, `assertEmptyGrantsHint` |
| Operations nav group | Backups / Logs / Monitoring in the sidebar when the panel offers `operations` |
| Directory on install | Chrome hub: Settings, Users, Roles, Documents, Backups, Logs, Monitoring, Help |
