# What PanelKit is, feature by feature

**Two columns, and the second one is the point.** PLAN.md is how it got built,
ROADMAP.md is what is left, GAP_ANALYSIS.md is how it compares to Filament. None
of them answers the question this file does: *if I install PanelKit, what do I
get* — as distinct from *what am I looking at in the demo*.

Those are not the same thing, by a wide margin:

| | package (installed) | reference app only |
|---|---|---|
| PHP | 221 files, 36,368 lines | 120 files, 18,075 lines |
| Vue | 98 components | **196 components** |

The demo carries twice the Vue the framework does. Most of what makes it look
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

### Forms — 23 field types

`Text` `Textarea` `Number` `Password` `Select` `MultiSelect` `Radio`
`CheckboxList` `Toggle` `Date` `Slider` `Tags` `Colour` `Code` `Markdown`
`RichEditor` `FileUpload` `KeyValue` `Repeater` `Builder` `VisualSelect`
`Field` `HasChoices`

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

### What there is **no mechanism for**

Worth stating plainly, because the catalogue lists classes and a class existing is
not the same as a class being mountable.

**No dashboard.** The package routes none. `StatWidget` and `ChartWidget` are
referenced nowhere inside the package — they shape data correctly and nothing
renders them. The reference app's dashboard is ~1,500 lines of its own controller
and Vue page.

**No non-resource pages.** The whole package route table is `/`, `{resource}/…`,
`trash`, `documents/{kind}`, `custom-fields`, `announcements/{id}/dismiss` and
`roles`. A screen that is not a resource — a settings centre, a health page, a
device manager — has no declaration point. `App\Panel\Pages` in the reference app
is an application convention plus a coverage test, not a framework feature.

**`Workspace`** — the intended widget host — is referenced exactly once, in a
comment in `ListQuery`. It is a name, not a mechanism.

The consequence for planning: a super-admin panel of, say, 13 resources and 13
non-resource pages is **13 supported and 13 not**. The resources are a day; the
pages are package work, and no amount of page-by-page porting substitutes for it.

### Also shipped

Trash across resources · custom fields · import wizard · document templates and
a designer · scheduled reports by email · announcements · a REST API with tokens
and OpenAPI · knowledge indexing and retrieval · Telegram alerts · audit trail ·
render hooks and a plugin API · i18n · `InteractsWithPanels` test helpers.

### 19 commands

`install` `doctor` `doctor-alert` `permissions` `benchmark` `blueprint`
`make:panel` `make:panel-resource` `make:api-token` `cache-clear`
`prune-exports` `prune-trash` `prune-uploads` `refresh-rollups`
`reindex-tenant` `suspend-tenant` `index-knowledge` `monitor-sample`
`dispatch-scheduled-reports`

`panel:doctor` is the one to run first. Every check in it exists because the
failure it finds is **silent** — a working panel serving wrong or unprotected
data, where every page returns 200 and every test passes.

### Screens (`@panelkit/inertia`)

`ResourceIndex` `ResourceForm` `ResourceView` `Trash` `PanelHome`
`settings/Roles` `documents/Templates` `documents/TemplateDesigner`
`documents/DocumentPrint`

Layout-free by design: the shell stays yours. A one-line page file per screen is
what `panel:install` writes.

---

## Part 2 — the reference app, which does **not** ship

Everything below is `apps/playground`. It exists to prove the framework under
load and to be somewhere real screens live. Treat it as worked examples.

**Resources** — Client, Router, Plan, EditablePlan, ClientSession, Activity,
User, Announcement. An ISP's domain, on ~250,000 seeded subscribers.

**Screens** — Dashboard and its charts, AI assistant drawer, ticketing (threads,
SLA, departments, stats), mail, chat, invoices, operations, monitoring, backups,
organisation and user management, API reference, device preview, docs, lock
screen, the searchable build guide.

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

Current state: **v0.2.0**, 1,531 tests passing, 13 skipped.
