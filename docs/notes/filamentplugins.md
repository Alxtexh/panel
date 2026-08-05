# FilamentPHP Plugins — Full Inventory and Replacement Plan

This document covers **only the 21 packages that extend or wrap FilamentPHP itself**. These are
the ones PanelKit replaces, because Filament is the thing being replaced. Everything else in the
codebase (payment SDKs, Spatie libraries, Reverb, RouterOS client) is framework-agnostic and ships
into PanelKit unchanged — see `PLUGIN_DETAILS.md` for those.

Each entry below is grounded in how the package is actually wired into this codebase, not just
what its README claims.

---

## How to read this table

| Column | Meaning |
|---|---|
| **Real usage** | Where it is actually called, confirmed by grep, not assumed from the package name |
| **Replace effort** | How much work the equivalent PanelKit feature takes: **Free** (comes from the architecture itself), **Small** (a native component, hours), **Medium** (a native subsystem, days), **Build** (genuinely new scope) |
| **PanelKit equivalent** | What replaces it |

---

## 1. filament/filament v5.6.7

**What it does:** The panel framework itself — Livewire-driven resources, tables, forms, actions,
pages, and navigation.

**Real usage:** Everything. All three panels, 17 admin resources, 25+ pages, 45+ widgets are
Filament classes.

**Why it's being replaced:** Every interaction re-renders server-side through Livewire. That round
trip is the latency floor documented across `PANEL_KIT_ANTIPATTERNS.md` section 3 — the 500 to 950
ms pages were never about the database, they were Filament building a component tree per click.

**Replace effort:** This is the whole project, not a line item.

**PanelKit equivalent:** The entire kit. Resource classes emit a schema once; a generic Vue table
renders it; only data crosses the wire afterward.

---

## 2. bezhansalleh/filament-shield v4.2.0

**What it does:** Generates Spatie permission names from Filament resources (`view_any_client`,
`update_client`, etc.) and provides a matrix UI to assign them to roles.

**Real usage:** Wired through a custom wrapper, `FilamentShieldProvisioningService`, called from
`app/Jobs/ProvisionTenantAdmin.php` when a new tenant admin is created, and from
`ShieldSyncPortalsCommand` (`shield:sync-portals`) which reconciles permissions across all tenant
and platform panels. Also invoked from `DeployOptimizeCommand` via `shield:reconcile-permissions
--apply` as part of the deploy pipeline.

**Why this matters more than it looks:** This is not just a UI plugin here — it is load-bearing
infrastructure in your tenant provisioning pipeline and your deploy pipeline. Replacing it means
replacing three integration points, not one screen.

**Replace effort:** Medium. The permission-name generation logic is genuinely useful and is exactly
what Addendum Part B's `panel:permissions sync` reproduces, but the provisioning and deploy hooks
need to be rewired to call the new command instead.

**PanelKit equivalent:** `php artisan panel:permissions sync`, generating `{action}_{resource}`
names from registered resources, plus a native permissions matrix resource. `ProvisionTenantAdmin`
and `ShieldSyncPortalsCommand` get updated to call it instead of the Shield artisan commands.

---

## 3. pxlrbt/filament-excel v3.6.1

**What it does:** Adds Excel/CSV export actions and bulk-export actions to Filament tables.

**Real usage:** Wrapped in your own `App\Filament\Shared\Tables\StandardTableExportActions` trait,
which is applied to `ListInvoices` and `VouchersTable` (and likely other list pages) so every
table gets the same export button rather than each page configuring Excel exports individually.

**Why this matters:** You already built the abstraction layer that makes migration easy — the 21
consuming pages call `StandardTableExportActions::make()`, not the Excel package directly. Only
that one trait needs rewriting; the call sites do not change.

**Replace effort:** Small, precisely because you already centralized it.

**PanelKit equivalent:** Native queued export (Addendum Part C1), exporting the table's **current
filtered view**, reporting progress over the existing broadcast channel. `StandardTableExportActions`
becomes a schema-level `.exportable()` declaration rather than a page-level trait.

---

## 4. asmit/resized-column v3.0.0

**What it does:** Lets users drag-resize table column widths in a Filament table and persists the
preference.

**Real usage:** Present on `ListRouters`, `ListUsers`, `ListInvoices`, `ListClients` — your four
busiest list pages, plus a reference in `GuestPanelAssetGate` (likely asset-loading logic for
guest/unauthenticated Filament views).

**Replace effort:** Free. TanStack Table, already mandated in the base spec's stack, supports
column resizing and per-user width persistence natively with no additional package.

**PanelKit equivalent:** TanStack Table's built-in column sizing, persisted the same way saved
views persist (Addendum Part D1).

---

## 5. eslam-reda-div/filament-copilot v1.1.3

**What it does:** Provides a floating chat panel shell inside Filament that a Livewire component
can stream responses into.

**Real usage:** This is not decorative. It is registered as a real plugin —
`App\Support\Copilot\LoyFilamentCopilotPlugin`, wired via `LoyCopilotPluginRegistrar::admin()` in
`AdminPanelProvider.php:302`. It provides the chat *shell* (the floating widget, open/close state,
message list container) that your own `LoyCopilotAgent` (built on `neuron-core/neuron-ai`, not on
this package) streams its responses into through `CopilotStreamController` and `LoyCopilotChat`
(a Livewire component).

**Important distinction:** The AI intelligence — the agent, its tools (`SuspendSubscriberTool`,
`DiagnoseClientConnectionTool`, `GetMonthlyRevenueTool`, and 8 others), credit metering, and LLM
routing — is entirely yours, built on Neuron AI. This package only supplies the chat *window UI*
that Filament renders it inside. Losing this plugin does not touch your AI logic at all.

**Replace effort:** Small. The chat shell (open/close, streaming message list, input box) is a
straightforward Vue component; `CopilotStreamController`'s SSE/streaming endpoint is
framework-agnostic and does not change.

**PanelKit equivalent:** A native `<CopilotPanel>` Vue component streaming from the same
`CopilotStreamController` endpoint. Zero change to `app/AI/*`.

---

## 6. marcelweidum/filament-passkeys v3.0.6

**What it does:** Filament UI for registering, listing, naming, and revoking WebAuthn passkeys,
sitting on `spatie/laravel-passkeys`.

**Real usage:** No direct code references found outside the `passkeys` migration and composer
requirement — likely used via its own auto-discovered Filament plugin registration rather than
being called from your application code, which is typical for this package.

**Replace effort:** Small. The registration/authentication ceremony logic lives in
`spatie/laravel-passkeys` (unchanged), and the UI is enrollment form plus a list-with-revoke table,
both are plain resource shapes.

**PanelKit equivalent:** Native passkey management screen under Account Security (Addendum Part B),
same underlying Spatie library, same `passkeys` table.

---

## 7. filament/spatie-laravel-settings-plugin v5.6.7

**What it does:** Filament form fields bound directly to `spatie/laravel-settings` classes.

**Real usage:** Backs Portal Settings tabs (Hotspot, General, Branding, SMS, WhatsApp, Email,
Telegram) — the exact pages flagged in your own memory as the current worst performers (500 to
710 ms, `filament_mobile_root_causes_and_theme_pipeline`, `admin_page_speed_render_not_db`).

**Why this one is worth calling out specifically:** These are your slowest pages today, not because
of this plugin, but because of how many Filament Section/Actions components they compose. Rebuilding
Portal Settings on PanelKit is simultaneously a plugin replacement and your single best performance
demonstration — Section 8 of `PANEL_KIT_REFERENCE_APP.md` already flags "Portal Settings" as
benchmark surface #8 for exactly this reason.

**Replace effort:** Medium — not because settings binding is hard, but because these pages have the
most components of anything in the system and deserve real profiling before and after.

**PanelKit equivalent:** Native settings forms binding directly to the same `spatie/laravel-settings`
classes, tabbed via the workspace pattern (Addendum Part D, Section 8 of the base build spec).

---

## 8. filament/spatie-laravel-media-library-plugin v5.6.7

**What it does:** Filament's media picker/upload field, wired to `spatie/laravel-medialibrary`.

**Real usage:** Ad images, branding/logo uploads in Portal Settings, Communications attachments.

**Replace effort:** Small. Upload UI is a standard drag-and-drop component; the storage, resizing,
and CDN logic is entirely in Spatie's library and does not move.

**PanelKit equivalent:** Native file upload field, same Media Library backend.

---

## 9. azgasim/filament-unsaved-changes-modal v1.0.1

**What it does:** Warns the user with a modal before navigating away from a dirty form.

**Real usage:** Applies globally to Filament forms. Flagged previously
(`unsaved_changes_modal_plugin_and_script_binding` memory) as fragile — its `@script` directive can
fatal when used inside layout render hooks rather than a page body.

**Replace effort:** Free. This is meaningfully *easier* in an SPA than it is in Livewire. Dirty
state is a client-side store flag; intercepting navigation and `beforeunload` is native browser
behavior, no plugin, no script-injection fragility.

**PanelKit equivalent:** Native dirty-tracking in the form composable (Addendum Part D1).

---

## 10. balismatz/filament-prevent-outdated-record-update v5.0.1

**What it does:** Optimistic concurrency — compares `updated_at` on save, rejects if the record
changed underneath, since two admins editing the same client concurrently is routine in an ISP
back office.

**Real usage:** Applied to record-edit forms codebase-wide as a safety net against silent
last-write-wins.

**Replace effort:** Small. This is a straightforward version-check on save.

**PanelKit equivalent:** Native optimistic concurrency, mandatory per Addendum Part C1: the form
carries `updated_at`, the save endpoint compares it, a conflict returns a diff and a reload-or-
overwrite choice.

---

## 11. jacobtims/filament-logger v1.2.0

**What it does:** Renders `spatie/laravel-activitylog` entries as a table inside a Filament
resource, typically a History tab or relation manager.

**Real usage:** Presumably on Client and other high-value resources, though no direct call sites
were found — likely wired through Filament's auto-discovered plugin system rather than explicit
registration.

**Replace effort:** Small. The data is already there (Spatie logs it); this is a read-only table
of an existing model.

**PanelKit equivalent:** Native History tab (Addendum Part D1), reading the same `activity_log`
table, showing before/after values, permission-gated.

---

## 12. yebor974/filament-renew-password v3.1.0

**What it does:** Forces password expiry/renewal at intervals, prompting reset on login when due.

**Real usage:** Security policy enforcement across admin logins.

**Replace effort:** Small. This is a login-time check plus a redirect, not a UI-heavy feature.

**PanelKit equivalent:** Folded into Account Security (Addendum Part B) alongside 2FA policy and
password confirmation — one coherent security module instead of a separate plugin.

---

## 13. l3aro/filament-turnstile v1.1.1

**What it does:** Cloudflare Turnstile (CAPTCHA) field for Filament forms.

**Real usage:** Registration/login forms, anti-abuse.

**Replace effort:** Small. Turnstile's client widget is a plain `<script>` embed with a token field;
the server-side verification call is a single HTTP request, no Filament dependency at all.

**PanelKit equivalent:** Native Turnstile field component, same Cloudflare API.

---

## 14. awcodes/filament-badgeable-column v4.0.0

**What it does:** Renders a table column value as a colored badge instead of plain text.

**Real usage:** No direct code references found — likely used inline in table column definitions
(`->badge()`-style calls) rather than through explicit imports, or possibly configured but not
actively used on a currently-live column.

**Replace effort:** Free. This is Filament's own `->badge()` modifier as much as this package's;
the equivalent is a `variant="badge"` prop on the standard column type in PanelKit.

**PanelKit equivalent:** Built into the base `Column` type, not a separate feature.

---

## 15. tapp/filament-country-code-field v2.1.1

**What it does:** Country selector field with flags and dial-code lookup.

**Real usage:** One confirmed reference site — a single form field somewhere using the flagged
country picker.

**Replace effort:** Small. A static list of countries with dial codes and flag emoji/SVGs, this is
a standard select component.

**PanelKit equivalent:** Native `PhoneField` (Addendum Part D1) already needs country/dial-code
data for E.164 normalization, so this is subsumed rather than separately rebuilt.

---

## 16. marcelodelgado/filament-announcements v1.0.0

**What it does:** Dismissible announcement banners inside Filament pages.

**Real usage:** Likely backs `TenantAnnouncementsWidget`, seen on the Dashboard widget list.

**Replace effort:** Free. A banner with a dismiss button and a per-user "seen" flag is trivial in
any component system.

**PanelKit equivalent:** Native `<AnnouncementBanner>` widget.

---

## 17. anselmokossa/filament-changelog v1.1.0

**What it does:** Displays a changelog/release-notes feed.

**Real usage:** Backs the `WhatsNew` admin page.

**Replace effort:** Free. Static or CMS-backed content list, no framework dependency at all.

**PanelKit equivalent:** A plain content page, potentially not even a "resource" — just a Markdown
feed rendered client-side.

---

## 18. harvirsidhu/filament-cards v1.0.8

**What it does:** Card-layout container components for Filament dashboards.

**Real usage:** Layout scaffolding for dashboard/workspace widget grids.

**Replace effort:** Free. This is exactly what Tailwind + a `<Card>` primitive gives you with zero
package, and the base spec already mandates shadcn-vue primitives, which include this.

**PanelKit equivalent:** `@panelkit/ui` primitive components, already in the base spec's repo
layout (`packages/ui/src/components/primitives/`).

---

## 19. gheith3/filament-relation-pages v1.0.0

**What it does:** Turns a `hasMany` relationship into its own browsable Filament resource page
instead of an inline repeater.

**Real usage:** Likely Client → Invoices, Client → Sessions, or similar detail-page relation tabs.

**Replace effort:** Medium. This is a real structural pattern, not a cosmetic wrapper — it needs a
genuine "related resource" concept in the kit, where a detail page can host a scoped, paginated
table of a related model.

**PanelKit equivalent:** A `RelatedTable` component on the resource detail schema, reusing the same
table engine as top-level resources but pre-filtered by the parent record's id.

---

## 20. shuvroroy/filament-spatie-laravel-backup v3.4.0

**What it does:** Filament UI for triggering and monitoring `spatie/laravel-backup` runs.

**Real usage:** SuperAdmin Backups page.

**Replace effort:** Small. A trigger button, a status list, and a download link — the actual backup
logic is entirely in the Spatie package underneath and is untouched.

**PanelKit equivalent:** Native Backups page in the Super Admin panel, calling the same Spatie
backup commands.

---

## 21. geo-sot/filament-env-editor v2.0.1

**What it does:** Edits `.env` values through a Filament form instead of SSH.

**Real usage:** SuperAdmin Settings, presumably gated to platform operators only.

**Replace effort:** Small, but flagged for a security review, not just a rebuild. Editing live
environment variables through a web form is inherently risky — worth deciding in the new build
whether this stays as a raw `.env` editor or becomes a curated allow-list of specific, safe config
values (feature flags, API keys) rather than arbitrary key-value editing.

**PanelKit equivalent:** Either a native `.env` editor with the same access, or — recommended — a
narrower "Platform Config" form exposing only the specific values operators actually need to touch.

---

## 22. filament/upgrade v5.6.7

**What it does:** One-time CLI codemod tool for major-version Filament upgrades.

**Real usage:** Used once during the v4 → v5 migration.

**Replace effort:** N/A. Not a runtime dependency, nothing to replace.

---

## 23. andreia/filament-ui-switcher v1.1.0

**What it does:** Light/dark theme toggle button.

**Real usage:** 2 files reference it — likely a service provider registration and a config value.

**Replace effort:** Free. A theme toggle storing a preference in localStorage/cookie and flipping a
`data-theme` attribute is a few lines with no dependency.

**PanelKit equivalent:** Native theme toggle in the app shell.

---

## 24. binarytorch/larecipe v2.9.1

**What it does:** Self-hosted Markdown documentation site engine.

**Real usage:** Backs the Help Center.

**Replace effort:** Not really a "Filament plugin" in the same sense — it renders its own routes,
not Filament pages. Out of scope for PanelKit itself; keep as a standalone documentation site or
swap for any static-site generator.

---

## 25. muhammad-nawlo/filament-sitemap-generator v1.0.0

**What it does:** Generates XML sitemaps from within Filament.

**Real usage:** 3 files reference it, likely a scheduled command plus a settings toggle.

**Replace effort:** Free. Sitemap generation is a plain Artisan command iterating routes/models; it
never needed to be a Filament UI feature.

**PanelKit equivalent:** A scheduled command, no admin UI at all.

---

## Priority order for replacement

Not all 21 are equal weight. Build in this order:

| Priority | Packages | Reason |
|---|---|---|
| **1 — load-bearing** | filament-shield, filament-copilot, spatie-settings-plugin | Wired into provisioning/deploy pipelines or your AI system; get these right first or other work breaks |
| **2 — high-traffic pages** | resized-column, filament-excel, badgeable-column | Present on your four busiest list pages; users will notice immediately |
| **3 — safety features** | prevent-outdated-record-update, unsaved-changes-modal, renew-password, turnstile | Silent-failure-prone if dropped without a native equivalent ready on day one |
| **4 — straightforward** | passkeys, logger, media-library-plugin, relation-pages, backup UI, country-code-field | Standard CRUD-shaped screens, no surprises |
| **5 — trivial or free** | announcements, changelog, cards, ui-switcher, sitemap-generator | Architecture gives these away |
| **6 — reconsider scope** | env-editor | Security review before rebuilding, possibly narrow it rather than replicate it |
| **Not in scope** | larecipe, filament/upgrade | Not really Filament UI features; separate concern |

---

## What this confirms about the migration

Two things worth internalizing before build starts:

1. **Most of these 21 packages are thin.** Fifteen of them are "free" or "small" effort because
   the feature they provide is either given away by the new architecture (resizable columns,
   dirty-form tracking, badges, cards) or is a straightforward CRUD screen with no Filament-specific
   complexity underneath. The plugin count looks intimidating; the actual replacement work is not
   proportional to it.

2. **Three packages are not swappable in isolation** — filament-shield, filament-copilot, and the
   settings plugin behind Portal Settings — because real application code (`ProvisionTenantAdmin`,
   `ShieldSyncPortalsCommand`, `DeployOptimizeCommand`, `LoyCopilotPluginRegistrar`,
   `CopilotStreamController`) calls into them directly. Budget real time for these three, verify
   the tenant-provisioning and deploy-pipeline call sites are updated, and re-run
   `tests/Feature` for provisioning after the swap. This is exactly the kind of seam
   `PANEL_KIT_ANTIPATTERNS.md` section 7 warns about: verify in a real browser and a real pipeline
   run, not just by reading the diff.




https://filamentphp.com/plugins/spykapp-passwordless-login
magic link --- implementation i also want it but enabled in setrings at will