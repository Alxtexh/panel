# Handover plan

Everything still to do, in the order it should be done, written so it can be
picked up cold. Each step says **what is wrong**, **what to change**, **which
files**, and **how to know it is done**.

Read `ROADMAP.md` for the history of what shipped. This file is only what
remains.

---

## 0. State of the tree (updated 2026-07-30, second pass)

**DONE and committed** (each with tests, full-suite green, live browser
verification):

- **Section 0 / 5.2** — trash pagination (`c3914eb`).
- **A.0–A.4** — DESIGN_RULES.md, repeater rows (`0c45f78`), grouped header
  actions + reorder as toolbar icon (`dd61c4a`), TableShell one-card layout
  (`094e577`).
- **A.5 first pass** — eleven screens ticked in DESIGN_RULES.md (`c1978be`);
  queued: backup settings, logs, mail, chat, roles, help pages, portals.
- **B.1** — checklist disappears when done, operator-copy doctor titles; plus
  the discovered-and-fixed cache isolation: `PrefixCacheBootstrapper` /
  `PrefixedStore` / `TenantCacheManager` replace stancl's tags bootstrapper —
  tenant cache isolation on ANY store, proven by `PrefixCacheIsolationTest`
  (`4d00bb2`).
- **B.2/B.3/C.1/C.3** — pgsql arm for custom fields + `DriverCoverageTest`,
  `hasBadgeValue` spec, Reverb/predis/pusher demoted to require-dev, support
  matrix in DEPLOYMENT.md (`830901e`).
- **C.2** — verified: doctor healthy on plain serve+SQLite+database-cache.
- **D** — "+ Add a field to every client" on the record form, warning banner,
  same validated path, permission-gated prop (`df4cdcb`).
- **E.2** — verified already covered by `AiToolAuthorisationTest` +
  `KnowledgeRetrievalTest` (tool refusals, cross-tenant unreachability).
- **E.1 backend** — `AiCredentials` BYOK (encrypted, masked, layered over
  env), graceful unconfigured-assistant stream frame (`d3add08`).
- **E.1 UI** — Settings → Assistant page, `manage_assistant` ability,
  key always-masked, remove button (`e20671c`).
- **E.3** — assistant charter: help article + drawer footer + blueprint
  section (`da1fd92`).
- **5.5** — `GuideSource` + `BlueprintSource` registered as knowledge
  sources; records deliberately stay out of RAG (`d488396`).
- **5.3** — `MonitorSampler`: sampled history table, thresholds with
  Telegram edge-detection alerts, 24h sparklines on Monitoring (`e833a03`).
- **5.4** — announcement composer: notify_bell/notify_telegram transports,
  `AnnouncementDelivery` (once, on create, tenant-bounded), `BellText`;
  plus the discovered-and-fixed `ToggleField::presentValue(null)` create-form
  validation bug, pinned by `AnnouncementDeliveryTest` (`2e52e30`).
- **5.6** — workspaces: `tenant_members` pivot (backfilled; users.tenant_id
  stays the CURRENT one), Settings → Workspaces page (list/switch/create),
  membership-checked switch (404 for non-members), creator becomes
  grants-all Administrator in the new tenant; plus the discovered-and-fixed
  `ScopeSessionToTenant::restamp()` - a legitimate switch used to be
  flushed as a hostile cross-tenant session on the very next request.
  `WorkspaceMembershipTest` follows the redirect to pin it (`4bd2a2f`).
- **4.1** — clusters: `Cluster` class + `Resource::$cluster`, sidebar
  collapse in the nav middleware (entry carries `members` for the coverage
  test), per-request permission-filtered sub-nav via
  `PanelManager::clusterNavFor()`, strip on ResourceIndex; playground proof
  is the Network cluster (Routers, Plans, + Connections page). Guide and
  blueprint updated (`c0cf913`).
- **4.2** — nested resources: `Resource::$parent`/`$parentColumn`, nested
  mount in PanelRoutes (flat spelling excluded), `NestedContext` (parent
  resolved tenant-scoped + view-checked; schema re-addressed per request;
  breadcrumbs through the parent), `MountNestedResource` middleware (pockets
  prefix params - Laravel binds scalars POSITIONALLY, so `$resource` was
  receiving "clients"), fk stamped from URL on store, pairing enforced in
  `findScoped`. Playground proof: `/clients/{id}/sessions` (read-only
  telemetry, no form). Isolation matrix gained the ClientSession fixture.

**Local env note:** `apps/playground/.env` now has `CACHE_STORE=database`
(was redis, which wasn't running and 500'd every request).

**NEXT, in order:**
1. **Part G (user directives, 2026-07-30)** — tasks #180–#188, see below.
   These take precedence over the remaining roadmap.
2. **Roadmap 4.4–4.6, 6.1–6.5, 7.3–7.7** as tracked in tasks #150–#162
   (6.1 policy matrix tests before any ticketing UI).
3. **A.5 second pass** — the seven queued screens (#168).
4. **F** — the production-readiness loop (#179).

---

## Part G — User directives, 2026-07-30

Verbatim intent from the mid-session message, each its own task:

| # | Task | Directive |
| --- | --- | --- |
| G.1 | #180 | ONE save bar. The floating "Unsaved changes / Cancel / Save" bar is the reliable one; remove the inline duplicate Cancel/Save at the bottom of forms. |
| G.2 | #181 | Remove the green "live" badge next to page titles COMPLETELY, everywhere. |
| G.3 | #182 | Two tables on one page "is just not logical" — remove the Connections workspace page. |
| G.4 | #183 | Remove the Custom fields dedicated page completely; the inline record-form dialog remains the only entry. |
| G.5 | #184 | Audit history must read human: no raw ISO dates, no raw JSON like `{"fibre_node":"FN-1234"}` — per-field diffs with formatted values. |
| G.6 | #185 | The Network page opens slower — find out why, fix it. **Investigated:** server timing equal across screens (~50 ms full page, sub-ms queries, `panel:benchmark` all within 300 ms budget); the felt slowness is Vite DEV-mode compiling a freshly-added page chunk on first navigation — absent in a production build — and sidebar hover-prefetch is already in place. No server fix warranted. |
| G.7 | #186 | **Done.** Main tables are paginated (≤100 rows in DOM — pagination IS the virtualisation strategy, bounded by design). The one unbounded grower, `RelationPanel`'s appending "Load more", now stops at a 300-row ceiling and says so, pointing at the nested screen for anything longer. Chat's list is server-bounded per payload. |
| G.8 | #187 | **Decision done** (`packages/ui/UI_FOUNDATION.md`): we are Vue 3 + Inertia, NOT Nuxt — so Nuxt UI loses its whole value proposition, Naive UI would replace our token system with its own runtime design language, Headless UI's Vue port is too thin, Ark UI is a redundant second primitive layer. **Reka UI (Radix Vue) + shadcn-style components we own + Tailwind tokens in `@panelkit/ui` is both the Enterprise Workhorse and the Lightweight Pick.** REMAINING: the mechanical de-duplication sweep (move every shared component out of the app into the package; same for scattered helpers). |
| G.9 | #188 | Ship several SaaS landing page designs with PanelKit. |

---

## Part A — The design system is inconsistent, and that is the biggest problem

This is first because it is **systemic**, not cosmetic: every screen inherits
these decisions, and every screen built before they are fixed has to be
revisited. Fix the components, and the screens follow.

### A.0 Write the rules down first

There is no document saying where a button goes, so each screen decided for
itself and they disagree. Before changing any component, add
`packages/ui/DESIGN_RULES.md` stating at least:

1. **Actions live in one group, at the trailing edge of their container.**
   Never one left, one centre, one right. A header is `[ title + subtitle ] …
   [ all actions ]`.
2. **Primary action last** in that group, so it sits at the outside edge where
   the eye lands. Secondary actions are `outline`/`ghost` and precede it.
3. **A control that toggles a mode is an icon, not a word.** Words are for
   actions that navigate or commit ("New Client", "Save"). Modes ("reorder",
   "filter", "choose columns") are icons with a tooltip and a pressed state.
4. **A table owns its own controls.** Search, filters, columns, reorder,
   selection and pagination belong to the table's card, not to sibling cards
   floating above it.
5. **No dead controls.** A select with one option, a disabled-forever button, a
   counter nobody can act on: remove it.
6. **Repeating inputs are rows, not cards.** See A.1.

Everything below is an application of one of these six.

### A.1 The repeater is a stack of cards; it should be a list of rows

**What is wrong.** `packages/ui/src/components/Form/PkRepeater.vue` wraps every
item in a bordered card with its own heading ("Step 1"), its own field label
("Instruction *"), a move-up button, a move-down button and a remove button — so
three short instructions become a tall, noisy column of five controls each. The
`{{ rows.length }} of {{ maxItems }}` counter and the max-items helper line add
two more lines of text below it.

**What it should be.** One row per item: a small ordinal badge, a full-width
input, a remove button. `+ Add step` underneath. That is all.

**What to change** (`PkRepeater.vue`):

- Replace the per-item card with a single flex row.
- Drop the per-item heading. The ordinal badge carries the number.
- Drop the repeated field label when the repeater has exactly **one** child
  field — the section heading already names it, and "Instruction" above every
  row is the same word three times. Keep labels when there are two or more
  children, where they disambiguate.
- Replace the up/down buttons with **drag-to-reorder** on the row (or, if drag
  is too much for this step, keep the buttons but as small ghost icons inside
  the row rather than a header strip). Rule 3: reordering is a mode/gesture, not
  two words.
- Delete the `n of max` counter. Keep the max as a `maxItems` guard that simply
  hides `+ Add` at the limit; if the limit matters to the operator, say it once
  in the section description, from PHP.
- Keep the empty state ("No steps yet") — that one is useful.

**Where it is used.** `RepeaterField` (`ClientResource`'s `contacts`) and the
document designer's redemption steps. Both should get shorter, not just
different.

**Done when.** Three steps render as three single-line rows, the whole control
is no taller than about `3 × 44px + header + add button`, and
`PkRepeater.spec.ts` still passes (extend it: assert one row per item, assert no
per-item heading is rendered for a single-child repeater).

### A.2 Page-header actions are scattered across the row

**What is wrong.** `packages/inertia/src/pages/ResourceIndex.vue` renders

```
<div class="flex items-center justify-between gap-3">
    <div>title + live pill</div>
    <Button>Reorder</Button>
    <Button>Import</Button>
    <Link>New Client</Link>
</div>
```

`justify-between` distributes **four** children, so the buttons land at the
left, the middle and the right of the header. That is the screenshot.

**What to change.** Wrap the actions in one container so the row has exactly two
children:

```
<div class="flex items-start justify-between gap-3">
    <div><!-- title, live pill, purpose --></div>
    <div class="flex shrink-0 items-center gap-2"><!-- actions, primary last --></div>
</div>
```

Then apply rule 2: `Import` is `outline`, `New Client` is primary and last.
`Reorder` leaves this header entirely — see A.3.

**Audit every other page header for the same bug** rather than fixing only this
one. Grep `justify-between` under `packages/inertia/src/pages` and
`apps/playground/resources/js/pages` and check each has two children. Known
candidates: `Trash.vue`, `Backups.vue`, `BackupSettings.vue`, the documents
designer.

**Done when.** No page header has more than two flex children, and a Dusk
assertion (or a Vitest snapshot on a small header component) pins the grouping
so it cannot regress.

### A.3 Reorder is a word in the wrong place

**What is wrong.** Reordering is a *mode*, and it is offered as a text button in
the page header, next to actions that navigate and commit. The reference design
puts it in the table's own toolbar as an ↑↓ icon with a "Reorder records"
tooltip, which is where a control that changes how the table behaves belongs.

**What to change.**

- Add a reorder icon button to `packages/ui/src/components/DataTable/TableToolbar.vue`,
  beside the existing Filters and Columns icon buttons (which are already icons —
  match them exactly: same size, same tooltip pattern, same
  `aria-pressed`/active styling).
- The toolbar takes `reorderable: boolean` and `reordering: boolean` props and
  emits `toggle-reorder`.
- Remove the `Reorder`/`Done` button from `ResourceIndex.vue`'s header and wire
  the toolbar event to the existing `reordering` ref.
- Needs a `sliders`-style icon; `icons.ts` has no up-down arrow yet — add
  `reorder` (`M7 15l5 5 5-5M7 9l5-5 5 5` or similar) and keep the Lucide map in
  `usePanelNav.ts` in step if navigation ever needs it.

**Done when.** The reorder affordance is an icon in the toolbar, pressed-state
visible while active, and dragging works exactly as it does today (the
`persistOrder` path is unchanged — this is presentation only).

### A.4 The table is four detached cards

**What is wrong.** `ResourceIndex.vue` renders `TableTabs`, `TableToolbar`,
`SelectionBar` and `DataTable` as four siblings with `gap-3` between them, each
with its own border. The reference design is one card: tabs and toolbar on top,
header row immediately under, rows, then pagination — all inside a single
bordered container, so the controls plainly belong to the data they act on.

**What to change.** Introduce a wrapper — either a new
`packages/ui/src/components/DataTable/TableShell.vue` that takes the pieces as
slots, or restructure `DataTable.vue` to accept `#toolbar`, `#tabs`, `#selection`
and `#pagination` slots. Prefer the slot approach on `DataTable`: it keeps one
component owning the border, the rounding and the internal dividers, and it
means `Trash.vue` and the relation panels can adopt the same shell.

Rules: one border around the whole thing, `divide-y` between the bands, no gaps,
and the selection bar **replaces** the toolbar band when a selection exists (it
already does that logically — keep it).

**Done when.** A resource list is visually one object; `Trash.vue` and
`RelationPanel.vue` use the same shell; no screen has a floating toolbar card.

### A.5 Sweep the rest of the panel against the six rules

Once A.1–A.4 land, walk every screen and fix the same classes of problem. Do it
as one pass with a checklist, not opportunistically. Screens to cover:
dashboard, clients (list/create/view/edit), routers, plans, users, activity,
announcements, custom fields, trash, backups, backup settings, monitoring, logs,
documents designer, mail, chat, help, FAQ, about, what's new, the three
generated portals.

**Done when.** Each screen is ticked off in a table in `DESIGN_RULES.md` with
the date, and the accessibility Dusk run still passes.

---

## Part B — Correctness bugs found while reviewing

### B.1 The setup checklist never goes away

**What is wrong.** Two separate faults, visible in one screenshot:

1. **It persists after completion.** A resolved item renders struck-through with
   a green tick and stays on the dashboard. A setup guide exists to get you to a
   working installation; once there it should be gone, not a permanent list of
   things that used to be wrong.
2. **A raw diagnostic string reached the UI.** The item read
   `[custom-fields] has no policy` — that is `DoctorCommand.php:78`'s console
   text (`"[{$key}] has no policy"`) surfacing verbatim in a dashboard widget.
   Console output and operator-facing copy are not the same register.

**What to change.**

- `packages/ui/src/components/Widgets/SetupChecklist.vue`: the section already
  guards on `v-if="items.length"`. Change the *server* side so the item list is
  empty once nothing is outstanding — i.e. do not send resolved items at all
  once **all** are resolved. Keep sending resolved items while some remain
  outstanding (a partly-done checklist should show progress); send none when the
  count of outstanding is zero.
- Give each check an operator-facing `title` and `detail` separate from its
  console line. `DoctorCommand` keeps its terse `[key] has no policy`; the
  checklist gets something like *"Custom fields has no policy — nobody can open
  it until one exists"* plus a link to the guide page that explains policies.
- The check that fired here was real and is now fixed (`CustomFieldPolicy`
  exists), so verify with a deliberately policy-less resource in a test rather
  than by breaking the app.

**Done when.** A fully-configured installation shows no checklist at all; a
half-configured one shows outstanding items with human copy and no bracketed
resource keys; a test asserts both.

### B.2 Custom field values are unreachable on Postgres

**What is wrong.** `CustomFieldFactory::selectExpression()` (added in the last
commit) builds the JSON extraction for SQLite and MySQL and **excludes
Postgres**, with a docblock justifying it on the grounds that Postgres here is
only the pgvector connection. That reasoning is about *this* playground, not
about PanelKit — and it is exactly the "locked to a specific database" problem
called out below. A consumer running Postgres would get a custom-fields column
that silently reads nothing.

**What to change.** Add the `pgsql` branch (`custom->>'key'`, or
`jsonb_extract_path_text(custom, 'key')` if the column is `jsonb`) and delete
the exclusion note. `Widgets/Bucket.php` is the model to copy: it handles
sqlite, mysql/mariadb and pgsql in one `match` with no favouritism.

**Done when.** The `match` has no `default` that quietly means "assume SQLite",
and a test asserts the expression for each of the three drivers (string
assertion — no live Postgres needed).

### B.3 Nullable badge columns (already fixed — verify it stayed fixed)

Fixed in `8abcf36`: an empty badge column rendered `String(null)` inside a
`capitalize` pill, so a blank cell read as a value called **"Null"**. The fix is
in `ResourceIndex.vue`. There is no test on it — **add one** (Vitest on the
render helper, or a Dusk assertion that an empty badge cell shows the em dash).

---

## Part C — Stop making the extras mandatory

The framework's own `packages/panel/composer.json` is clean: no Octane, no
Redis, no Reverb, no Postgres. The problem is the reference app and the
defaults, which make optional things look required.

### C.1 Reverb, Redis and Pusher are hard requires in the playground

`apps/playground/composer.json` `require` contains `laravel/reverb`,
`predis/predis` and `pusher/pusher-php-server`. The live-updates default is
`poll`, which needs none of them — `LiveConfig::DRIVER_POLL` is the default and
there is a test asserting it.

**What to change.** Move all three out of `require`. Either drop them entirely
and document how to add them, or move to `require-dev` if the broadcast test
fixtures need them in CI. `LiveUpdatesTest` and the broadcast fixtures must
still pass. Cache stays on the framework's `array`/`file` defaults; nothing
should assume `CACHE_STORE=redis`.

**Done when.** `composer install --no-dev` in a fresh checkout of the playground
pulls no broadcast or Redis package, the panel runs, and `/clients` stays live
via polling.

### C.2 Octane is a supported deployment, not an assumption

The Octane hook (`PanelServiceProvider::registerOctaneFlush`) is *correctly*
written — it listens by event **name string**, so the package does not depend on
`laravel/octane`. Keep that. What to check and fix:

- Nothing in the panel may **require** a long-lived worker to be correct or
  fast. The process memos added in `8abcf36` (`CustomField::$tableExists`,
  `$byResource`) are cleared by `flushMemoization()`; make sure every future memo
  is registered there too, and that the panel is equally correct under FPM where
  each request starts cold.
- Performance work must be measured **without** Octane. `panel:benchmark` and
  the performance tests run under the plain test runner today — keep it that
  way. Roadmap 7.6 (per-screen budgets) must not adopt Octane numbers as its
  baseline.
- Documentation and `panel:doctor` should present Octane/Redis/Reverb as
  *optional accelerants*, and must never report a healthy installation as
  degraded for not having them. Audit `HealthReport.php` and `DoctorCommand.php`
  for checks that treat their absence as a problem.

**Done when.** A plain `php artisan serve` + SQLite + `array` cache
installation reports fully healthy, and every performance budget is stated for
that configuration.

### C.3 Database-agnostic, checked rather than assumed

Postgres-specific code exists in three places, and two of them are already
right — they treat it as an optimisation with a working fallback:

- `ListQuery::approximateTotal()` — `pgsql` uses `reltuples`, everything else
  does an exact count. **Correct.**
- `KnowledgeBase` — pgvector does nearest-neighbour natively, otherwise the
  same schema is scored in PHP. **Correct**, and its docblock says why.
- `CustomFieldFactory::selectExpression()` — excludes Postgres. **Wrong**, see
  B.2.

**What to change.**

- Fix B.2.
- Add a test that fails when a new driver branch omits one of the three
  supported drivers — walk the `match` arms, or assert each of
  `sqlite`/`mysql`/`pgsql` produces a non-empty expression. A grep-based guard
  is acceptable if a structural one is awkward; the point is that the *next*
  driver-specific feature cannot ship SQLite-only unnoticed.
- State the support matrix once, in `README.md` or `DEPLOYMENT.md`: **SQLite,
  MySQL/MariaDB and Postgres are all first-class for panel data; pgvector and
  Postgres statistics are optional optimisations.** No screen, field or column
  may require a specific driver.

**Done when.** The matrix is written down, `CustomFieldFactory` honours it, and
a test enforces it.

---

## Part D — Custom fields are in the wrong place

**What is wrong.** `8abcf36` shipped custom fields as a **dedicated
`CustomFieldResource` screen**: go to Configuration → Custom Fields, add a
definition, and it appears on the Clients form. That is the administrator's
model of the feature, not the operator's. Somebody filling in a client wants to
add "one more thing we track" *while looking at the client form* — and if the
only route is a separate screen under a different nav group, they will never
find it, or will add a field in one place and never realise it applies
everywhere.

**Design decision to make first** (and record in `ROADMAP.md`), because it
changes the data model:

| Option | Meaning | Cost |
| --- | --- | --- |
| **Inline definition, still installation-wide** | An "+ Add field" affordance on the record form creates a `panel_custom_fields` row, so it appears for every record of that resource. Matches what exists. | Must be unmistakably clear that it affects *all* clients, not just this one — otherwise it is a trap. |
| **Per-record free-form** | The value lives only on this record. This already exists: `KeyValueField` on `metadata`, renamed "Free-form fields" in `8abcf36`. | No new work; but it is not typed, not a column, not filterable. |
| **Both, clearly labelled** | Free-form for a one-off note; "+ Add a field to every client" for structure. | Two concepts on one form — needs careful copy. |

**Recommendation:** the third, because both needs are real and the existing
pieces already cover one each. What is missing is the *entry point*: an
unobtrusive "+ Add a field to every {resource}" control at the bottom of the
form's custom-fields section, opening a small dialog (key, label, type,
required, choices-if-select) that posts to the same validated path
`CustomFieldResource` uses today.

**What to change.**

- Add the inline affordance and dialog to the record form
  (`packages/inertia/src/pages/ResourceForm.vue`), gated on the same
  `create_custom-fields` ability the resource screen uses. Someone who may not
  define fields must not see it.
- The dialog's copy must say plainly that the field will appear on **every**
  record of that resource. This is the whole risk of the option.
- **Keep** `CustomFieldResource` as the management screen — listing, reordering,
  editing and deleting definitions across all three resources needs a real
  table, and that is what it is good at. It stops being the only way in.
- Reuse, do not duplicate: the dialog's fields are
  `CustomFieldResource::form()`, and the write goes through the existing
  endpoint. If that means extracting the form definition to a shared place, do
  that rather than restating it in Vue.

**Done when.** A field can be created from the Clients form without leaving it,
appears immediately on that form and in the list, the management screen still
works, and a test covers the inline creation path end to end.

---

## Part E — Roadmap items still open

Numbering follows `ROADMAP.md`. Sizes are that file's.

### §5 — Finish the half-built

| # | Item | Size | State |
| --- | --- | --- | --- |
| 5.2 | Trash pagination | S | **In progress, uncommitted.** See section 0. |
| 5.3 | Monitoring history + thresholds | M | Not started. A point-in-time snapshot; "disk at 91%" does not alert and yesterday is not visible. Telegram alerts exist to carry it. |
| 5.4 | Announcement composer | M | **Done.** "Also deliver to" section on the composer; delivery once, on create, tenant-bounded (`AnnouncementDelivery`, `BellText`). |
| 5.5 | Retrieval beyond the help centre | M | Not started. The knowledge base indexes one source; the guide, the blueprint and resource records are not searchable by the assistant. |
| 5.6 | Workspaces | M | **Done.** Membership pivot, Settings → Workspaces (list, switch, create), session restamp on switch. Member management stays in User management. |

### §4 — Framework parity

| # | Item | Size | Note |
| --- | --- | --- | --- |
| 4.1 | Clusters | M | **Done.** `Cluster` + `Resource::$cluster`; one sidebar entry, shared permission-filtered sub-nav strip. Proven by the Network cluster (Routers, Plans, Connections). |
| 4.2 | Nested resources | L | **Done.** `$parent` on the resource; nested-only routing, parent as the authorisation context, fk stamped from the URL. Proven by `/clients/{id}/sessions`. |
| 4.3 | Singular resources | S | **Done.** `SingularResource` (form + values() + save()), config-mounted at /{key}, rendered through ResourceForm, ability-gated. Proven by Billing preferences. |
| 4.4 | Render hooks | M | Named injection points so a plugin can decorate a screen without forking it. |
| 4.5 | Missing field types | M | Markdown, code, builder. Build these **after** A.1 — the repeater's row shape is the pattern the builder field should follow. |
| 4.6 | Missing column types | S | Colour, checkbox. |

### §6 — Ticketing

Its own piece of work, and the order matters.

| # | Item | Size | Note |
| --- | --- | --- | --- |
| 6.1 | The policy matrix | M | **First, before any screen.** A ticket is the first record two panels read under different rules: the opener always reads their own, the operator reads all of one tenant, neither reads another tenant's. Tests before UI. |
| 6.2 | Ticket model + chat thread link | M | |
| 6.3 | Two resource classes | M | Opener side and operator side. |
| 6.4 | `TicketingPlugin` + counterpart-panel guard | M | |
| 6.5 | Telegram alert on new ticket | S | |

### §7 — Further

| # | Item | Size | Note |
| --- | --- | --- | --- |
| 7.3 | `panel:doctor` as a product surface | M | Depends on B.1: the checklist's copy problem is doctor's copy problem. Also the place to enforce C.2 — doctor must not call a Redis-less install unhealthy. |
| 7.4 | `panel:blueprint` for operator-owned things | M | |
| 7.5 | Public API parity | ongoing | Custom fields (5.1) are not exposed through the API yet — that gap is this item's first task. |
| 7.6 | Per-screen performance budgets | M | Measured **without** Octane — see C.2. |
| 7.7 | Isolation matrix with generated portals | M | Note: `CrossTenantIsolationMatrixTest` now derives its exclusions from the table (does it have a tenant column?) rather than from resource names — preserve that property. |

---

## Suggested order

1. **Section 0** — finish and commit 5.2.
2. **Part A** — A.0 rules, then A.1–A.4 components, then A.5 sweep. Everything
   after this inherits a consistent surface instead of adding to the mess.
3. **Part B** — the three correctness bugs. Small, independent, all real.
4. **Part C** — de-force the extras. Cheap, and it prevents the assumption
   spreading further.
5. **Part D** — custom fields entry point. Needs Part A's form conventions.
6. **Part E** — §5 remainder, then §4, then §6, then §7.

## Standing constraints (unchanged, and not negotiable)

- Never SSH to, deploy to, or reference a remote server. `DB_HOST` is
  `127.0.0.1`. Never a remote database. Never copy a production `.env`.
- Destructive commands only ever against the local database.
- All test data comes from factories and seeders. No production dumps.
- The Dusk suite must never touch `apps/playground/database/database.sqlite` —
  it uses `database/dusk.sqlite`, and `scripts/dusk.sh` refuses to run if the
  resolved path is the dev database.

## Working rules that earned their place

- **Verify against the source of truth, not the screen.** A screenshot that
  contradicts expectation is a stale render until the database says otherwise.
- **The browser finds what tests do not.** Both bugs in B.1 and B.3 were found
  by looking at the page, not by a failing assertion. Every visual change gets
  looked at.
- **A performance guard that fails is telling the truth.** When
  `ClientsPerformanceTest` counted six extra queries, the answer was to stop
  making six queries — not to raise the threshold.
