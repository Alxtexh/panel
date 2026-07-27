# PanelKit — Local Build Plan

Working plan derived from [panelbuilder.md](panelbuilder.md), adapted to this machine.
The spec is the contract; this file is the route through it.

**Also binding, added 2026-07-26:**

- [panel_antipatterns.md](panel_antipatterns.md) — real production incidents from the
  system being replaced, written as rules. It states plainly that it **overrides
  convenience**, and its meta-rule governs everything: *almost every failure
  returned HTTP 200 and looked correct*, so silent fallbacks (`?? ''`,
  `?? 'tenant'`, `return false` on a missing precondition, empty catch) are the
  enemy. Make failures loud, and test that they are loud.
- [panelkit addendum 01.md](panelkit%20addendum%2001.md) — additive only, explicitly
  "do not re-plan the work in progress". Part A (stancl) from Phase 7, Part B
  (auth/security) after Phase 7, Part C (internal components) from Phase 3.

### What the two new documents change

| Change | Effect |
|---|---|
| **Global search is now IN scope** | Addendum D1 supersedes the base spec's do-not-build entry: the exclusion assumed a search index, but every schema already declares `searchable` columns, so it is a loop over resources. The ⌘K palette already built is now sanctioned, not an override. |
| **Schema must contain NO tenant data** | Addendum Part A. Filter options ship as props beside the records, not baked into the schema. The cache key then needs no tenant id, collapsing entries from (tenants × resources) to (permission sets × resources) — and a schema holding no tenant data cannot leak tenant data however badly the key is built. **This revises the §9 key format** and affects Phase 4. |
| **Never write `->where('tenant_id')` in the package** | Addendum Part A. In dedicated-database mode that column does not exist and every query throws. Already satisfied — `TenantContext::shouldScopeByColumn()` decides, and the constraint lives in the app's global scope. |
| **Tenant scope must THROW, not return unfiltered** | Antipatterns 1.2. Our `TenantScope` currently denies (returns no rows), which is safe but quiet. In a panel context "no tenant" is always a bug. To revisit in Phase 7. |
| **A tenant id fallback string is forbidden** | Antipatterns 1.5. `tenant('id') ?? 'tenant'` collapsed every tenant onto one cache key in production. Absent tenant must throw. |
| **No class strings in PHP, ever** | Antipatterns 6.1. A CSS purge silently dropped PHP-authored utility classes, and *partial* survival hid it. Schema carries semantic values (`"color": "danger"`); Vue maps them to classes. Affects Phase 4's column/badge design. |
| **No eager queries in schema definitions** | Antipatterns 3.3. An eager `->options(Router::where(...))` in an action definition took `/admin/clients` down for every tenant. Every option list is a closure, verified by a zero-query definition test. Already the shape of `SelectFilter::options(Closure)`. |
| **Seven error states must be defined** | Antipatterns 2.2. 401, 403, 419, 422, 429, 500 and offline all need a designed presentation before shipping. A background 403 currently freezes the page. |
| **`panel:audit` ships with the kit** | Addendum C. Warms up, reports the median of three runs, fails on budget breach. Antipatterns 3.5: never accept a single cold measurement. |
| **Do NOT port the C2 list** | Nav badge cache, nav tree cache, page snapshot caches, render cache-warming, deferred table loading, payload call limits, framework flush listeners. Building any of them signals the architecture has drifted back toward server rendering. |

**Decisions locked (2026-07-26):**

| Decision | Choice |
|---|---|
| Naming | `PanelKit` / Composer `panelkit/panel` / npm `@panelkit/ui` / namespace `PanelKit\Panel` |
| PHP | 8.4 via ondrej PPA |
| Landing-page builder | Deferred past Phase 9. Schema envelope versioned now; no builder work before then. |
| Stack pins | Spec versions are minimums, not targets: Laravel 13, Inertia 3, Tailwind 4.1. |
| Security | Co-equal target with speed. Filament-style resource-level authorization. See target 7. |
| Database engine | **Undecided.** Phase 0 runs on SQLite. Decision required before Phase 1 — see below. |
| Perf tuning (opcache, DB config) | Deferred to Phase 8, when there is something to measure. |

### Open decision: database engine (needed before Phase 1)

Phase 0 is scaffolding — an authenticated shell and a seeder — and none of it
cares what the database is, so it runs on SQLite and commits us to nothing.

Phase 1 is where that stops being free. Its entire acceptance criterion is
"each interaction lands under 300 ms against 500k rows", and the §10 mandates
that get us there are not engine-neutral:

- **Approximate counts from `pg_class.reltuples`** — one of the three sanctioned
  ways to avoid blocking a list response on `COUNT(*)` — is Postgres-only. MySQL's
  nearest equivalent is `information_schema.TABLES.TABLE_ROWS`, far less reliable
  on InnoDB. SQLite has nothing.
- **Query planner behaviour differs.** A keyset query tuned against SQLite's
  planner tells you very little about how Postgres will index-scan the same shape.
  A 300 ms number measured on the wrong engine is not a number, it is a guess.

So: SQLite through Phase 0 costs nothing and is reversible. Carrying it into
Phase 1 means the performance work — the only thing differentiating this project —
gets validated against an engine we may not ship on. The spec picks PostgreSQL
(§1 non-goals, §2 local stack). Recommendation is to hold to that, but the
decision is open until Phase 1 starts, and `bootstrap-db.sh` gets written then.

What is portable either way: Eloquent, the resource/table/form API, the schema
contract, the whole Vue layer, and keyset pagination as a technique. The
engine-specific surface is narrow and confined to `QueryBuilder`.

---

## How the six targets map to the build

The spec already answers five of the six. Where a target needs work the spec
does not describe, it is called out.

### 1. No unnecessary polling, live data loads smoothly

Spec §8 "Live data and real-time updates". Three tiers, push-first:

- **Push (default)** — Laravel Reverb + Echo, patching a single row object in
  place. Server cost is constant regardless of how many people are watching,
  which is the entire argument against the Livewire model.
- **Poll (exception)** — only for cheap aggregates no event covers, as one lean
  JSON query via `router.reload({ only: ['stats'] })`, paused when the tab is
  hidden.
- **Optimistic** — the acting user's own writes mutate local state immediately.

The ten rules in §8 ("patch never replace", key by record id, batch inside
250 ms, animate the change not the layout, heal on reconnect, private
tenant-scoped channels, lean payloads) are the difference between smooth and
janky. Built in Phase 8, but the DataTable in Phase 3 is written to support
in-place row patching from the start — retrofitting that into a table that
replaces its rows array is a rewrite.

### 2. Works under large data loads

This is a database story, not a frontend one. At 500k rows the client costs
5–20 ms and Postgres costs the rest. Spec §10 mandates, all enforced by test:

- Never block a list response on `COUNT(*)` — keyset pagination with no total,
  or an approximate total from `pg_class.reltuples`, or an exact count as a
  deferred Inertia prop arriving after the rows.
- Keyset (cursor) pagination as the default above 10,000 rows. `OFFSET 100000`
  walks 100,000 rows; `WHERE (sort_col, id) < (?, ?)` uses the index.
- Skip model hydration on lists — `->toBase()`, return arrays. Models are for
  writes.
- Composite indexes matched to real query shapes, documented per resource.
- `select()` only the columns the schema declares.
- Constant query count per list request, asserted at 10 rows and at 1,000.

Proven against the seeded 500k clients / 2M sessions, not against 50 rows.

### 3. Low overhead, fast navigation

- Schema travels once per resource per session and is cached; only data moves
  afterwards. This is the whole architecture.
- Prefetch on intent — sidebar links and pagination prefetch on hover/focus, so
  the common navigation costs no round trip at all.
- Deferred props for everything below the fold; no widget blocks first paint.
- Budgets: < 250 KB JS gzipped, < 150 ms warm navigation, < 300 ms filter on
  500k rows. CI fails the build when a budget regresses.
- Runs at full speed on plain PHP-FPM. Octane is never a dependency — but the
  package is written Octane-*safe* (no mutable static request state, scoped
  bindings, tenant-keyed cache keys).

### 4. Simple panel building, Filament-style

One PHP class per resource, zero Vue files. `make:panel-resource Client
--generate` introspects the table and pre-fills columns and fields by column
type. Three generic Vue pages render every resource.

### 5. Custom builds

Spec covers this thinly, so it is made explicit here. Four escape hatches,
built in Phases 5–6:

- `make:panel-page` — a custom non-CRUD page with its own Vue component.
- `make:panel-field` / `make:panel-widget` — custom types as a PHP class plus a
  Vue component, registered by name into a client-side component resolver map.
- Column/field `type` strings resolve through that same map, so an unknown type
  from a consuming app renders its own component rather than failing.
- The `->query()` hook on a table takes an arbitrary Eloquent builder.

### 7. Security (added 2026-07-26, co-equal with speed)

Borrow Filament's authorization model where it is good, and it is good in one
specific way: **authorization is a property of the resource, not of the route.**
Every read and every mutation passes through a policy check derived from the same
declaration, so there is no route left unguarded by omission.

What that means concretely here, layered on top of spec §9:

- **Policy-gated by default, not by opt-in.** A resource with no policy denies
  rather than allows. Filament's `can*()` methods delegate to Laravel policies;
  the same, except the default answer flips to deny.
- **The schema's permission booleans are UI hints and nothing else.** Spec §9
  item 3 is explicit: every controller action independently calls `authorize()`.
  A client that lies gets a 403, not data.
- **Field-level authorization.** A user who may view a record is not thereby
  entitled to every column on it. Column and field visibility resolve per user at
  schema-build time, and the query `select()`s only what survived — so an
  unauthorized column is absent from the payload, not merely hidden in the DOM.
- **Mass-assignment is closed by construction.** Writes accept only keys the form
  schema declares. No `$request->all()` reaching a model, ever.
- **Tenant scoping is a global scope on the model, never a `where` in a
  controller.** Spec §9 item 1 forbids raw `DB::table()` inside the package for
  exactly this reason. A forgotten `where` is a cross-tenant leak; a global scope
  cannot be forgotten.
- **Broadcast payloads are narrowed, never whole models** (spec §8 rule 10), on
  private tenant-scoped channels (rule 9).
- **Signed, expiring URLs** for any file or export download, scoped to the tenant.
- **The cross-tenant suite is the gate.** Spec §9 item 8 and the two-tenants-in-
  one-process test in §9 are part of the definition of done, not optional.

Where speed and security conflict, security wins and we find the speed elsewhere.
The one place they genuinely trade is the schema cache: caching per tenant *and*
per permission fingerprint costs cache entries, and the temptation is to widen the
key. The key stays narrow.

### 6. Landing pages

Out of scope until after Phase 9, per your call. The only accommodation made
now is that the schema JSON carries `"v"` and `"type"` fields, so a second
schema shape can be introduced later without breaking the frozen contract.
Spec §5 mandates versioning the contract regardless, so this costs nothing.

---

## Phases

Phase numbering follows the spec. Phase E is new — this machine had no
toolchain at all.

| Phase | Goal | Accept when |
|---|---|---|
| **E. Environment** | PHP 8.4, Composer 2, Node 22. Nothing else. | `scripts/bootstrap-env.sh` completes; `php -v`, `composer -V`, `node -v` all report. |
| **0. Scaffold** | Monorepo, playground Laravel app, Inertia + Vue 3 + TS, Tailwind 4, shadcn-vue, both packages path-linked, demo seeder. Runs on SQLite. | `npm run dev` serves a blank authenticated shell; seeder finishes under 5 min. |
| **1. One hardcoded screen** | Clients list. No abstraction, no schema JSON, no resource class. Real server-side pagination over 500k rows. **Requires the database decision.** | Filter, sort, search, paginate all work on the full dataset, each under 300 ms server-side. |
| **2. Two more hardcoded screens** | Routers and Plans, copy-pasted. The duplication is the research. | Three screens work and the repetition is obvious in the diff. |
| **3. Extract DataTable + QueryBuilder** | Shared Vue table into `packages/ui`, filter/sort/search/paginate into a PHP `QueryBuilder`. | All three screens still pass their tests, each under 60 lines. |
| **4. Schema layer** | `Resource`, `Table`, `Column`, `Filter`, `Action`, the JSON contract, the schema cache, three generic Vue pages. | Three screens are three PHP classes with zero bespoke Vue, rendering identically to Phase 3. |
| **5. Forms and actions** | `Form`, field types, Precognition validation, create/edit, modal actions, bulk actions, toasts. | Full create/edit/delete cycle with inline server-side validation errors; a modal action runs a service and toasts. |
| **6. Generators** | Every `make:panel-*` command with stubs, plus `--generate` introspection. | `make:panel-resource Invoice --generate` produces a working screen with no hand editing. |
| **7. SaaS hardening** | Multi-panel, per-tenant theming, feature flags, permissions, the cross-tenant test suite. | Cross-tenant suite passes; two panels with different guards coexist. |
| **8. Widgets + live updates** | Stat cards, charts, deferred loading, Echo-driven row patching. | Six-widget dashboard paints its shell under 400 ms, widgets fill independently; a row updates live from a broadcast with no refetch. |
| **9. Packaging** | Real Composer/npm packages, semver tags, `panel:install`, README, quickstart. | A fresh Laravel app reaches a working Clients panel from published packages alone, in under 10 minutes. |

Do not abstract before Phase 4. Do not skip ahead.

---

## Remaining roadmap

Phases 0–8 are complete. What follows is the outstanding work, in the order it
is worth doing. Measured against Filament 5.7 — see `GAP_ANALYSIS.md` for how
the comparison was taken.

### Now — design and app screens

These are being built before Tier 2 because they are what the panel LOOKS like,
and settling that first avoids reworking every feature screen afterwards.

| Item | Notes |
|---|---|
| Mail / Inbox screen | Folder rail, message list, reading pane, star and archive. |
| Chat screen | Conversation list, thread view, composer. |
| Documentation page | Laravel-docs-style, in-panel. Not started. |

### Measured at 1M clients / 5M sessions (SQLite)

Taken after seeding `--scale=xlarge`. These are read timings against the real
dataset, not estimates.

| Operation | Time | Notes |
|---|---|---|
| Clients: first page | 1.6 ms | Keyset, covering index. |
| Clients: status filter | 0.4 ms | |
| Clients: sort by expiry | 0.4 ms | |
| Clients: filter + sort by name | 4.4 ms | Was 335 ms — see below. |
| Clients: prefix search | 0.7 ms | |
| Clients: word-prefix search | 1.6 ms | |
| Tab counts (deferred) | 24 ms | Was 507 ms — see below. |
| Total count (deferred) | 12 ms | Was 493 ms. |
| Total / live counts | ~10–15 ms | |
| Sign-ups series, 30 days | 15 ms | |
| **Sessions series, 30 days** | **359 ms** | 412,034 rows read to produce 30 points. |
| **Sessions series, 90 days** | **980 ms** | |

**A join nothing read, costing 20x.** The deferred counts carried the table's
LEFT JOIN to plans — 503 ms to count a tenant's 200,000 clients, against 25 ms
without it, because every counted row did a primary-key lookup whose result was
discarded. A count selects no joined columns; the join is only there so a filter
or the search can reference one. It is now dropped when nothing applied does,
and kept when something does — asserted both ways, because dropping it wrongly
would not be slow, it would be wrong.

**One real regression, found and fixed.** Filtering by status and plan type
while sorting by NAME took 335 ms against a 300 ms budget. The plan showed the
status index serving the filter and then a TEMP B-TREE FOR ORDER BY — roughly
45,000 matching rows sorted in memory to return ten. A `(tenant_id, name, id)`
index took it to 0.3 ms. That index is keyed on the SORT rather than on a
filter, so it serves any filter combination ordered by name — the counterpart of
the existing `created_at` index, not the start of one-index-per-query.

**The list layer holds.** Sub-2 ms at a million rows, unchanged in shape from
the numbers taken at 50k — which is what keyset pagination and per-shape indexes
were for.

**The time-series charts do not, and it is not an index problem.** `EXPLAIN
QUERY PLAN` confirms a COVERING INDEX with a temp B-tree for the grouping: the
query is already optimal. The cost is inherent — producing 30 points requires
reading the 412,034 rows that fall in the window, and that number grows with
usage forever. No index fixes this, because every row genuinely has to be
counted.

The answer is **pre-aggregation**: a rollup table holding one row per
(tenant, day, metric), maintained on write or by a scheduled job, turning a
30-point chart into 30 row reads. Added to Tier 2 below.

Mitigating for now: the charts are deferred, so they never block first paint —
the dashboard shell and its counters appear immediately and the charts fill in.
That makes it a slow widget rather than a slow page, which is why this was not
visible before the dataset got heavy.

**Seeding took 21 minutes** for 5M sessions. That is SQLite's single-writer
insert path against three composite indexes, not a panel cost, and it is a
further argument for settling the engine question.

### Tier 2 — needed before production for this domain

| Item | Why it matters here |
|---|---|
| **Relation managers** | A client's sessions, devices and payments as tabs on the client page. The single largest remaining gap for real ISP work. |
| **FileUpload** | Logos, contracts, ID scans. Nothing can be attached today. |
| **Soft deletes + trashed filter** | There is no restore path at all; a mis-click is permanent. |
| **`SummarizeRecords`** | A footer row of sums and averages. A filtered invoice list with no total is half an answer. |
| **Live updates against a real Reverb** | The composable and the poll driver are proven; the broadcast driver has never been tested against a running connection. |
| **Time-series rollups** | Measured above: a 30-day sessions chart reads 412k rows and takes 359 ms; 90 days takes ~1 s. The query is already using a covering index — the fix is a daily rollup table, not a better index. Needed before the dashboard is usable on a mature dataset. |

### Tier 3 — differentiators and polish

| Item | Notes |
|---|---|
| `Repeater`, `KeyValue`, `RichEditor` | Nested editing, arbitrary metadata, formatted notes. |
| Visual query builder | Nested AND/OR conditions composed in the UI. |
| Wizard | Multi-step creation. |
| Table grouping and row reordering | Group rows with subtotals; drag to set display order. |
| Import | The counterpart to the export that already exists. |
| `ReplicateAction`, `ActionGroup` | Duplicate a record; nested action menus. |
| **Auth and system screens** | A full set, designed rather than defaulted: OTP / verification, lock screen, access denied, and the error pages (404, 403, 419, 500, 503). Reference: the Diamond `auth/*` screens. These are the pages people see on their worst day, and a stock stack trace or an unstyled 403 is where a panel stops looking finished. |
| **Invoice template** | A printable invoice document — line items, totals, tax, payment terms — as a real page rather than a PDF-only export. Reference: Diamond `pages/invoice`. Directly relevant to an ISP panel. |
| **Device-frame preview page** | A workbench that renders arbitrary markup inside a pure-CSS phone frame, so a mobile layout can be designed and watched at the same time. Reference: the CSS iPhone collections on freefrontend. Standalone: it renders a preview, it does not couple to the panel's own screens. |

### Open decisions

| Decision | Status |
|---|---|
| **Database engine** | **Still SQLite.** Every performance figure so far demonstrates query SHAPE — keyset pagination, one grouped query per chart, no blocking counts — and none of it transfers to Postgres until the switch is made and the numbers retaken. This is the largest outstanding risk in the project. |
| Landing pages | Deferred past Phase 9 by choice. |

---

## Guardrails carried from spec §2

1. Never SSH to, deploy to, or reference any remote server.
2. `DB_HOST` is `127.0.0.1`. Never a remote database.
3. Never copy a production `.env`.
4. Destructive commands only ever against the local database.
5. All test data comes from factories and seeders. No production dumps.

## Definition of done (spec §14)

- [ ] Fresh Laravel app to a working tenant-scoped panel in under 10 minutes
- [ ] Adding a resource requires one PHP file and no Vue
- [ ] All §10 budgets met and measured against 500k rows
- [ ] Cross-tenant isolation suite passes for every resource and mutation path
- [ ] N+1 query-count guard passes
- [ ] Both packages versioned, tagged, installable from a remote
- [ ] README documents the resource API with copy-pasteable examples
- [ ] Nothing in the repository references any production host, credential, or database
