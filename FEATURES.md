# What PanelKit is, feature by feature

**Two columns, and the second one is the point.** PLAN.md is how it got built,
ROADMAP.md is what is left, GAP_ANALYSIS.md is how it compares to Filament. None
of them answers the question this file does: *if I install PanelKit, what do I
get* — as distinct from *what am I looking at in the demo*.

Those are not the same thing, by a wide margin:

| | package (installed) | reference app only |
|---|---|---|
| PHP | 268 files, 46,222 lines | 105 files, 15,775 lines |
| Vue | 249 components | **86 components** |

The Vue column inverted in v0.6.3, and that is the headline. The demo used to
carry nearly twice what the framework did; the shell, the auth screens and the
shadcn families it was built from have all moved, so the package now carries
more. What is left in the demo is its own screens - the dashboard, the
assistant, mail, invoices, the landing pages. Most of what makes it look
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

### Tables — 12 column types, 6 filters

Columns: `Text` `Badge` `Date` `Icon` `Image` `Colour` `Checkbox` `Toggle`
`Select` `Editable` (edit in place) `Money`

`MoneyColumn` takes a fixed currency or reads each row's own, defaults to minor
units — an integer count of the smallest unit cannot drift the way a float does
— and formats in the **viewer's** locale rather than the server's.

Filters: `Select` `MultiSelect` `Boolean` `DateRange` `Trashed`

Plus grouping, row reordering, footer summaries, saved views, a column engine,
density, and keyset pagination that holds up at 250,000 rows.

### Actions

`RecordAction` `BulkAction` `ActionGroup` `ReplicateAction`, with `BulkRunner`
and `JobStatus` for long jobs, count-before-commit on every bulk mutation, and
filtered export.

**A row action can ask for input first.** `->form()` declares fields; the modal
opens with **no network request** because the schema travels with the action,
and the endpoint validates against that declaration and drops every key it does
not name. Without it, an action needing a reason or an amount had to become a
dedicated screen — 67 of 229 actions in one real port.

**So can a bulk action**, through the same `->form()`, asked **once** for the
whole selection — the reason "move these forty to a plan" is one action rather
than forty clicks. The handler runs once per keyset chunk and gets the same
values each time, and a select-all-matching run is validated *before* it is
queued, so a mistake comes back in the response rather than in a worker's log.

**A generated resource carries the example.** `make:panel-resource --generate`
writes a commented `->recordActions([...])` / `->bulkActions([...])` block *in
the chain*, so uncommenting it is the whole edit — including the form variant
and the two rules that are easy to get wrong (`form()` pairs with `handle()`,
never `mutate()`; an action without `authorize()` is refused). A test
uncomments the block mechanically and compiles the result, because a stub whose
promise is "uncomment this" fails by sitting somewhere the chain cannot take it.

### Layout and page state

`PkCard` is the block of content everything that is not a widget sits in — title,
description, trailing actions, an optional footer, and `:padded="false"` for a
table that fills it. It carries no tone or variant props: `class` merges, and a
styling language that grows one prop at a time is how a component becomes
unreadable.

`useUnsavedChanges` gives a page that is **not** a record form the same
protection one gets — `dirty`, `commit()`, `discard()` and the `beforeunload`
guard, with a comparison that does not mistake reordered keys for an edit.
`useUnsavedGuard` adds the half that needs the router: an Inertia visit never
unloads the document, so nothing else can stop a sidebar click from discarding
a half-finished page.

### Authorisation

**`TenantResourcePolicy` is the base you extend**, and `make:panel-resource
--generate` writes a policy that does exactly that — one line, tenant-checked
and permission-checked. It used to write five methods returning `true` and a
console warning; a generated resource was readable by every authenticated user
until somebody acted on a line of output.

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

`make:panel` generates a portal with its own guard, navigation and account menu
— and with `--auth`, its own sign-in, sign-out and password reset, mounted under
its own prefix rather than at `/login`. **`panel:install --auth` does the same
for the default panel**, so the first path anybody walks ends at a working
sign-in rather than at "bring a starter kit"; both write it through one shared
trait, because two sign-in flows are two sets of throttling and session rules. `->without(['trash', 'roles',
'documents'])` drops packaged screens a portal should not offer; the **route**
goes, not just the menu entry.
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
own, and `TicketingPlugin` mounts each on the panel named in config. It insists on
both or neither: one end alone, or one portal named for both, throws at boot
rather than leaving a queue nobody can write to or a customer side that was
never mounted.

**The policy is where the two sides are actually separated.** The opener reads
and replies to their own holding *no ticket ability at all* — being the person
who asked is the entitlement — and may never resolve. The operator reads the
organisation's on an ordinary ability. Neither reads another organisation's, and
that check runs first: reversed, "the opener always reads their own" becomes a
cross-tenant read that looks like a feature.

A thread with replies, internal notes the customer never sees, and attachments ·
departments · unread indicators per side · a volume chart, and a median
first-response time measured from the first PUBLIC reply by somebody other than
the person who asked · creation rate-limited in the policy, so every entry point
is covered rather than the one form somebody remembered.

**There is no SLA due time**, and the stats screen does not pretend otherwise —
it reports how long first replies actually took, not how long they were supposed
to take. A target nobody set is a red badge that means nothing.

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

### Announcements

**A notice addressed to everybody, written on one screen and read on another.**
`AnnouncementResource` composes one — severity, banner or toast, a window, an
optional button — and the packaged dashboard renders the banners at the top,
above the heading. Both halves ship; until v0.4.0 only the writing did, so an
installation could address the whole organisation and reach nobody.

**Dismissing is not deleting.** Closing a banner records that *this* person read
it and writes them a notification, so the thing they cleared on Tuesday is still
in the bell on Saturday. A × that destroyed the only copy would let the first
person to click hide it from everyone.

**No sidebar entry, deliberately.** A screen called Announcements is one people
open once. Reading happens where they already are; the composer is reached from
the bell.

`AnnouncementsPlugin` is registered by default and needs no configuration.
Remove it from `panel.plugins` to drop the composer — the banner, the model and
the delivery are unaffected, because they are the package's rather than the
plugin's.

### Also shipped

Trash across resources · custom fields · import wizard · document templates and
a designer · scheduled reports by email · announcements · a REST API with tokens
and OpenAPI · knowledge indexing and retrieval · Telegram alerts · audit trail ·
render hooks and a plugin API · i18n · an in-panel **changelog** · an **environment editor** (allowlisted keys only,
secrets never shown, atomic writes, boot-critical keys refused) · **passkeys** (Fortify's WebAuthn, a soft
dependency — present when Fortify is, absent without it) · `InteractsWithPanels`
test helpers.

### 22 commands

`install` `update` `doctor` `doctor-alert` `permissions` `benchmark`
`blueprint` `make:panel` `make:panel-page` `make:panel-resource`
`make:api-token` `make-user` `cache-clear`
`prune-exports` `prune-trash` `prune-uploads` `refresh-rollups`
`reindex-tenant` `suspend-tenant` `index-knowledge` `monitor-sample`
`dispatch-scheduled-reports`

`panel:doctor` is the one to run first. It also catches the two shapes of silent
404 a real port lost hours to: a resource or page on disk that **nothing
registered** (a `discover` path one directory too high registers nothing and
says nothing), and a packaged screen with **no page file**, which routes fine and
renders blank. Every check in it exists because the
failure it finds is **silent** — a working panel serving wrong or unprotected
data, where every page returns 200 and every test passes.

### Screens (`@panelkit/inertia`)

`ResourceIndex` `ResourceForm` `ResourceView` `Trash` `PanelHome`
`PanelDashboard` `Changelog` `Environment` `TicketAnalysis` `settings/Roles` `documents/Templates` `documents/TemplateDesigner`
`documents/DocumentPrint`, plus the `TicketThread` and `AnnouncementBanners`
components the packaged screens render into.

**All ten auth screens ship**, not three: Login, ForgotPassword, ResetPassword,
Register, VerifyEmail, TwoFactorChallenge, ConfirmPassword, RenewPassword,
LockScreen and VerifyOtp. They are the reference app's screens *moved*, not
redrawn — same markup, same copy — with two substitutions: its `@/components/ui/*`
imports became packaged primitives, and its Wayfinder route helpers became props,
because a package cannot know a consuming application's route names.

Passkey sign-in ships with them, driving the browser's own WebAuthn API against
whatever routes `laravel/passkeys` registered — no npm dependency, and no button
at all where those routes or that API are absent.

**Social sign-in ships too** — the redirect, the callback, the `ConnectedAccount`
model and its migration, all moved from the reference app. A provider is offered
when its credentials exist in `config/services.php`, and `PanelRoutes` registers
the routes on that same condition, so a button and the route behind it cannot
disagree. There is no separate "enabled" flag to forget.

It never creates an account from a callback: operators are invited, an account
carries a tenant and a role, and neither is knowable from "somebody signed in
with Google". An unlinked provider identity may be matched to an account by email
**only** where the provider proves the address belongs to whoever holds it *and*
the panel's own address is verified — `verifies_email` is a short, deliberate
list, because adding to it carelessly is an account-takeover route. No tokens are
stored: the panel does not act on anybody's behalf at those providers, and a
credential you do not keep cannot be stolen from you.

**The shell ships too, as of v0.6.0.** `PanelShell` is the frame those screens
sit in — a sidebar built from the navigation the server already shares, a topbar
with slots for a heading and your own controls, a collapsing rail that remembers
itself, a mobile drawer, and an account menu whose sign-out posts wherever the
server says it should. `panel:install` publishes a `PanelLayout.vue` that is a
thin wrapper over it, so the frame arrives working and stays yours to edit.

It used to be layout-free on principle, and the cost was measurable: a generated
portal wore the packaged screens inside a scaffold, and read as a less finished
product than the reference app it was copied from — while every consumer
rebuilt a sidebar worse than the one they were comparing themselves to. A one-line
page file per screen is still what `panel:install` writes.

**The topbar's two controls ship with it.** The **command palette** (⌘K) filters
pages from the navigation the client already holds — no request — and searches
records through `{panel}/panel-search`, which reuses each resource's own list
query, so a column marked searchable is searchable in the palette with nothing
else edited, and a resource somebody may not view is not searched at all.

The **bell** serves two streams from `{panel}/notifications` that are
deliberately not one list. *Alerts* are recomputed on every open from
`AlertRule`s your application registers with `PanelManager::alertRule()` — no
stored row, no read state, gone when the condition clears. *Notifications* are
Laravel database notifications addressed to one person, with read state and
deletion; the package already writes them for finished exports, queued actions
and dismissed announcements. The badge counts unread notifications only, because
a badge that stays lit while a condition persists teaches people to ignore it.

Declaring a rule is the whole integration:

```php
$panels->alertRule(AlertRule::make('routers_offline', function (): ?Alert {
    $count = Router::query()->where('status', 'offline')->count();

    return $count === 0 ? null : Alert::make(
        'routers_offline', Alert::DANGER,
        "{$count} routers are offline",
        'Subscribers served by these routers cannot connect.',
        '/routers?status=offline', $count,
    );
}));
```

Use `AlertRule::countUpTo()` for anything that might match a lot of rows: it
stops at 500 and `describeCount()` renders "500+". An exact count of 84,846 rows
costs 84,846 steps whatever the index says, and it is the same action either way.

**The rest of the chrome ships too.** A **breadcrumb trail** derived from the
same `panelNav` the sidebar draws — nothing new is sent, so it cannot disagree
with the menu; a screen that knows better (a record page that can name the
record) passes `items` instead. An **impersonation banner** at the top of the
main column, driven by the `Impersonation` service that had been in the package
since v0.2 with nothing packaged ever displaying it — no close button, because
forgetting you are wearing another account is the danger. A **bottom navigation
bar** on phones, since `PkBottomNav` shipped in `@panelkit/ui` and nothing
mounted it, leaving every consumer's handset with a hamburger at the top of the
screen. And **flyout labels** on the collapsed rail, because the native tooltip
takes about a second — long enough that people expand the sidebar again.

---

## Part 2 — the reference app, which does **not** ship

Everything below is `apps/playground`. It exists to prove the framework under
load and to be somewhere real screens live. Treat it as worked examples.

**Resources** — Client, Router, Plan, EditablePlan, ClientSession, Activity,
User. An ISP's domain, on ~250,000 seeded subscribers.

**Screens** — Dashboard and its charts, AI assistant drawer, mail, chat,
invoices, operations, monitoring, backups, organisation and user management, API
reference, device preview, docs, lock screen, the searchable build guide.

Ticketing was here until v0.3.2 and announcements until v0.4.0; both are now in
Part 1. What is left of them in the demo is configuration — which panel is the
operator's, which is the customer's, the two ticket table names — and, for
announcements, one line in `panel.plugins`.

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
pending migrations without running them, names plugins this version ships that
your published `config/panel.php` does not install, refreshes `AGENTS.md`, and
ends with `panel:doctor` — whose exit code becomes its own.

**Settings added inside an array arrive on their own.** The package's config is
merged into a published one *key by key*, so a version that adds
`auth.password.max_age_days` does not need you to notice — the shallow
`mergeConfigFrom` handed the published `auth` block over whole and the new key
read as unset, which looks like a feature that was never shipped. Lists are the
exception and stay yours whole: shortening `abilities` is a decision, and a
merge that unioned `plugins` back would reinstall what you removed.

[UPGRADING.md](UPGRADING.md) has the version-by-version notes and what counts as
a breaking change.

---

Current state: **v0.6.2**, 1,681 tests passing, 13 skipped.
