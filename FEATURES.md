# What PanelKit is, feature by feature

**Two columns, and the second one is the point.** PLAN.md is how it got built,
ROADMAP.md is what is left, GAP_ANALYSIS.md is how it compares to Filament. None
of them answers the question this file does: *if I install PanelKit, what do I
get* — as distinct from *what am I looking at in the demo*.

Those are not the same thing, by a wide margin:

| | package (installed) | reference app only |
|---|---|---|
| PHP | 249 files, 41,423 lines | 112 files, 16,600 lines |
| Vue | 105 components | **198 components** |

The demo carries nearly twice the Vue the framework does. Most of what makes it look
like a finished product — the dashboard, the assistant, tickets, mail, invoices,
the landing pages — is application code written to exercise the framework, not
part of it. That is deliberate: a framework that shipped an ISP's dashboard would
be shipping somebody else's business. But it means a screenshot of the demo is
not a promise about what `composer require` delivers.

Counts here are class and file counts taken from the tree, not from memory.

---

## Part 1 — the package

`composer require panelkit/panel` + `npm i @panelkit/ui @panelkit/inertia`.

### The core idea

**A resource is one PHP file.** `php artisan make:panel-resource Client
--generate` reads the table and writes a class. Discovery registers it. There is
no route to add and no Vue to write — the list, the form, the record page and the
trash are all served from the schema that class declares.

### Forms — 24 field types

`Text` `Textarea` `Number` `Password` `Select` `MultiSelect` `Radio`
`CheckboxList` `Toggle` `Date` `Slider` `Tags` `Colour` `Code` `Markdown`
`RichEditor` `FileUpload` `KeyValue` `Repeater` `Builder` `VisualSelect`
`Field` `HasChoices` `Country` (ISO or dialling code, 173 countries)

Layout comes from `Schema`: `Section` `Grid` `Tabs` `Tab` `Step` `Wizard`,
with `visibleWhen` at section level.

### Tables — 11 column types, 6 filters

Columns: `Text` `Badge` `Date` `Icon` `Image` `Colour` `Checkbox` `Toggle`
`Select` `Editable` (edit in place)

Filters: `Select` `MultiSelect` `Boolean` `DateRange` `Trashed`

Plus grouping, row reordering, footer summaries, saved views, a column engine,
density, and keyset pagination that holds up at 250,000 rows.

### Actions

`RecordAction` `BulkAction` `ActionGroup` `ReplicateAction`, with `BulkRunner`
and `JobStatus` for long jobs, count-before-commit on every bulk mutation, and
filtered export.

### Authorisation

Ability names are **derived** from the registry (`view_any_clients`), never
stored. `Role` with `grants_all` — a role that holds every ability *including
ones invented later*. `panel:permissions list|sync --prune`. Team-scoped through
Spatie. **A resource with no policy is denied entirely**, and doctor tells you
which are missing.

### Tenancy

Column, database or hybrid, via `stancl/tenancy` or your own resolver. A null
tenant is a denial, never "all tenants". Suspension, impersonation, workspaces,
and a cross-tenant isolation matrix that is a test rather than an intention.

### Multi-panel

`make:panel` generates a portal with its own guard, navigation and account menu.
A resource belongs to exactly one panel. Clusters group resources under one nav
parent; nested resources give `/clients/5/invoices`; singular resources are
one-record settings screens.

### Pages — screens that are not resources

**A page is one class.** `php artisan make:panel-page ServerHealth` writes the
class and the one-line Vue file; discovery registers it. Route, sidebar entry,
ability, permission-matrix entry and page header all follow from the class, the
same deal a resource gets.

**A page is not only a render.** `actions()` declares endpoints the page owns —
`PUT` on its own address for the ordinary save, or a sub-path — each carrying its
**own ability**, because seeing and doing are different grants. Half the
reference app's page controllers do something as well as show something; a
mechanism that only rendered would have handled the easy half.

**One namespace for slugs and resource keys**, enforced at registration. Both are
URL segments in the same prefix, so a clash throws at boot naming both classes
rather than leaving one screen silently unreachable.

### Dashboards — a host for the widgets

`DashboardPage` declares `stats()` and `charts()`; the packaged `PanelDashboard`
screen draws them.

**Every widget is its own deferred prop.** The layout is on screen before
anything has been counted, so one slow aggregate delays itself rather than the
page, and a failed query reports itself in place instead of blanking its
neighbours.

**Permissions apply before resolution.** A widget the signed-in operator may not
see is never queried and never serialised — filtering client-side would ship the
number to somebody forbidden from it and rely on CSS to keep the secret.

### Ticketing

**A support desk is not an example, so it ships.** Two resources over one table:
`TicketResource` is the operator's queue, `MyTicketResource` is the customer's
own, and `TicketingPlugin` mounts each on the panel named in config — refusing
to mount both on the same one, because a customer reading the operator's queue
is the failure this pairing exists to prevent.

**The policy is where the two sides are actually separated.** The opener reads
and replies to their own holding *no ticket ability at all* — being the person
who asked is the entitlement — and may never resolve. The operator reads the
organisation's on an ordinary ability. Neither reads another organisation's, and
that check runs first: reversed, "the opener always reads their own" becomes a
cross-tenant read that looks like a feature.

A thread with replies, internal notes the customer never sees, and attachments ·
first-response and SLA due times · departments · unread indicators per side ·
stats and a volume chart · creation rate-limited in the policy, so every entry
point is covered rather than the one form somebody remembered.

**`TicketOpened` is an event, not a call.** The packaged listener alerts on
urgent tickets over Telegram and never throws — a failed notification is one
somebody misses, a failed save is a complaint that vanished. An installation
adds a webhook or an email to a rota by listening, without editing a vendored
model.

**The tables are named in config.** They default to `panel_tickets` /
`panel_ticket_replies`, because `tickets` is a name an application may already
use and a migration that succeeds against somebody else's table is worse than
one that collides. An installation that had ticketing before it was packaged
points config at what it has; that is the whole migration.

### Also shipped

Trash across resources · custom fields · import wizard · document templates and
a designer · scheduled reports by email · announcements · a REST API with tokens
and OpenAPI · knowledge indexing and retrieval · Telegram alerts · audit trail ·
render hooks and a plugin API · i18n · an in-panel **changelog** · an **environment editor** (allowlisted keys only,
secrets never shown, atomic writes, boot-critical keys refused) · **passkeys** (Fortify's WebAuthn, a soft
dependency — present when Fortify is, absent without it) · `InteractsWithPanels`
test helpers.

### 21 commands

`install` `update` `doctor` `doctor-alert` `permissions` `benchmark`
`blueprint` `make:panel` `make:panel-page` `make:panel-resource`
`make:api-token` `cache-clear`
`prune-exports` `prune-trash` `prune-uploads` `refresh-rollups`
`reindex-tenant` `suspend-tenant` `index-knowledge` `monitor-sample`
`dispatch-scheduled-reports`

`panel:doctor` is the one to run first. Every check in it exists because the
failure it finds is **silent** — a working panel serving wrong or unprotected
data, where every page returns 200 and every test passes.

### Screens (`@panelkit/inertia`)

`ResourceIndex` `ResourceForm` `ResourceView` `Trash` `PanelHome`
`PanelDashboard` `Changelog` `Environment` `TicketAnalysis` `settings/Roles` `documents/Templates` `documents/TemplateDesigner`
`documents/DocumentPrint`, plus the `TicketThread` component the two ticket
resources render into.

Layout-free by design: the shell stays yours. A one-line page file per screen is
what `panel:install` writes.

---

## Part 2 — the reference app, which does **not** ship

Everything below is `apps/playground`. It exists to prove the framework under
load and to be somewhere real screens live. Treat it as worked examples.

**Resources** — Client, Router, Plan, EditablePlan, ClientSession, Activity,
User, Announcement. An ISP's domain, on ~250,000 seeded subscribers.

**Screens** — Dashboard and its charts, AI assistant drawer, mail, chat,
invoices, operations, monitoring, backups, organisation and user management, API
reference, device preview, docs, lock screen, the searchable build guide.

Ticketing was here until v0.3.2 and is now in Part 1. What is left in the demo
is configuration: which panel is the operator's, which is the customer's, and
the two table names it already had rows in.

**Three landing designs** — Aurora, Editorial, Console, composed from a section
library in `@panelkit/ui`, editable from the admin as stored blocks. The
*sections* ship; the three compositions and their copy do not.

**Commands** — `panel:seed-reference`, `panel:seed-demo`, `panel:journey`. These
were moved out of the package deliberately: the seeders invent fibre subscribers,
which a veterinary practice has no use for, and create accounts whose password is
written in the file.

---

## What is not true yet

**Nothing is published.** Packagist and npm both 404 for these names. Today,
`composer require panelkit/panel` resolves for nobody; the repository installs
through a path repository, and `verify-install.sh` proves a real install by
pointing composer at a `git subtree split` branch.

**No production history.** Not one real user, one real tenant, one real outage.

**No load testing** beyond `panel:benchmark` medians on seeded data, and **no
external security review** — the isolation matrix and the authorisation tests
check my own assumptions.

## Upgrading

`composer update` upgrades the PHP half. It does **not** reconcile the screens —
a release that routes a new one ships the route inside the package and the page
file into your `resources/js/pages`, and Inertia cannot see into `node_modules`.

```bash
php artisan panel:update
```

Writes the page files a new version added, invalidates the schema cache, names
pending migrations without running them, names config keys your published
`config/panel.php` is missing, refreshes `AGENTS.md`, and ends with
`panel:doctor` — whose exit code becomes its own.

[UPGRADING.md](UPGRADING.md) has the version-by-version notes and what counts as
a breaking change.

---

Current state: **v0.3.2**, 1,596 tests passing, 13 skipped.
