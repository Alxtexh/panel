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
- [panelkit-addendum-01.md](panelkit-addendum-01.md) — additive only, explicitly
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
| Mail / Inbox screen | **Done.** Folder rail with categories, thread-collapsed table list, dedicated thread page. |
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
| ~~**Relation managers**~~ | **Done.** |
| ~~**FileUpload**~~ | **Done.** Two-phase upload, byte-level type checking, authorized downloads. See below. |
| ~~**Soft deletes + trashed filter**~~ | **Done.** |
| ~~**`SummarizeRecords`**~~ | **Done.** |
| **Live updates against a real Reverb** | The composable and the poll driver are proven; the broadcast driver has never been tested against a running connection. |
| ~~**Time-series rollups**~~ | **Done.** See below. |

### Time-series rollups — measured

`metric_rollups` holds one row per (tenant, metric, period, bucket), built by
`panel:refresh-rollups`. Same dataset as above, same charts.

| Window | Live | Rolled up | |
|---|---|---|---|
| 30 days | 460 ms | **19 ms** | 24x |
| 90 days | 1023 ms | **13 ms** | 77x |
| 12 months | 912 ms | **2 ms** | 449x |

Every one of these was checked point-for-point against the live query, because
a fast chart showing the wrong number is not a faster chart.

Two things were not obvious going in, and both were bugs before they were
design notes:

**An empty bucket had to be stored explicitly.** A `GROUP BY` returns no row for
a day with no rows, so "quiet" and "never computed" look identical in the table
— and the read path is obliged to treat an absent bucket as uncomputed and scan
for it. A metric with quiet stretches fell back for every one of them: the
12-month chart found 3 stored months out of 12 and rescanned the year, taking
858 ms out of a table built to make it fast. Writing the zeroes makes PRESENCE
mean COMPUTED, which is the property the read actually needs.

**A coarse bucket is the sum of its fine ones.** The current bucket is never
rolled up, which is right — it is still accumulating — but on a monthly chart
that one gap is a whole month of rows, and it was the entire remaining cost
(296 ms). The daily rollup already holds every complete day of that month, so
the month is composed from days and only today is scanned. Composition requires
a contiguous prefix; a hole anywhere before the tail falls back to a full scan
rather than summing past it and quietly under-reporting.

### FileUpload — the security notes

Uploads are the highest-leverage input in a panel: untrusted bytes the server
stores and later serves back. The decisions worth knowing:

**Two phases.** The file goes to its own endpoint before the form is submitted
and the form carries a handle. Multipart-on-the-form fails specifically: any
validation error anywhere sends the page back with the file input empty, so a
4 MB scan is re-picked because a phone number was short. Handles are promoted to
permanent paths in `Field::transformForStorage()`, so a failed form never moves
a file. Unclaimed handles are swept by `panel:prune-uploads` — the cost of the
design, paid deliberately.

**The type is sniffed, never taken from the request.** The browser's
`Content-Type` and the filename are both attacker-chosen. `getMimeType()` reads
the bytes through finfo, and the extension must AGREE with what it finds — a
polyglot with a valid JPEG header named `.php` passes a MIME check on its own.

**The extension is an allowlist**, and it may only be narrowed. A denylist is a
promise to have thought of every dangerous extension and is always missing one.
SVG is excluded from the image set on purpose: it is a document format that
executes script, so accepting it as "an image" is accepting stored XSS.

**The stored name is generated.** A client filename is `../../.env`, a null
byte, or a right-to-left override that renders `gpj.php` as `php.jpg`. The
original is kept as data in a sidecar, for display and for the download
filename, and never as a path.

**Reading is authorized, not merely obscure.** A private disk with an
unguessable path is one paste away from public. A download resolves the record,
runs the same `view` policy the detail page runs, and serves as an attachment
with `nosniff` — so a file that got past the upload checks still cannot execute
on the panel's origin, where it would inherit the session.

19 tests, most written as the attack rather than as the rule. One of them only
works because it uses a REAL file: `UploadedFile::fake()` reports the MIME
guessed from the filename, so a fake PHP script called `avatar.png` sails
through the exact check that exists to catch it — every one of these tests
would have passed against a server doing no sniffing at all.

### Tenancy — stancl/tenancy v3, actually installed

`stancl/tenancy ^3.10` is a real dependency of the playground now (v3.10 is the
first release constrained to `illuminate/support ^13.0`). The package itself
still declares no dependency on it — it detects it through the container — but
the integration is no longer written against a faked binding.

**Three suites, 34 tests, both modes and hostname identification:**

- `StanclTenancyTest` — the contract, resolution with nobody signed in, ending
  tenancy, switching tenants, and single-database scoping.
- `StanclMultiDatabaseTest` — real per-tenant SQLite databases, with a `clients`
  table that has NO `tenant_id` column. Reads and writes are executed, not
  inspected: the assertion that matters cannot be satisfied by generating
  correct-looking SQL.
- `StanclDomainIdentificationTest` — `acme.example.com` and `acme.panel.test`
  resolved by middleware, with nobody signed in.

**Three things the install exposed that the fake never could:**

**1. Bootstrappers do not run without stancl's own service provider.** Publishing
the config is not enough; `TenancyServiceProvider` is what maps
`TenancyInitialized` to `BootstrapTenancy`. Without it `tenancy()->initialize()`
binds the tenant, reports itself initialised, and changes nothing — no
connection switch, no cache tag, no filesystem root. That looks exactly like
working single-database tenancy, which is why the multi-database suite asserts
the connection actually moved before asserting anything else.

**2. stancl's default config contradicts single-database mode.**
`DatabaseTenancyBootstrapper` ships enabled, because multi-database is what most
people install the package for. Combined with `panel.tenancy.mode = column` the
two halves are told opposite things, and the symptom is
`Database tenant42 does not exist` thrown from inside a bootstrapper — which
says nothing about the actual mistake. `TenantContext` now detects the
combination and refuses with a message naming both settings and the fix.

**3. `TenantContext::tenant()` had to ask stancl first.** It resolved only via
`$user->tenant`, which assumes a relation to a tenants table on the same
connection. Under multi-database that is false in both halves — the users table
is in the tenant's database, and the central `tenants` table is not on that
connection at all.

**The filesystem question is settled, and the answer was "leave it".** With
`FilesystemTenancyBootstrapper` active, stancl repoints the local disk at
`storage/tenant{id}/app` and PanelKit still writes under `tenants/{key}/`, so the
path carries the tenant twice. Removing PanelKit's prefix would be wrong: it is
what `belongsToCurrentTenant()` checks before serving a file, and it is the only
isolation there is when that bootstrapper is off — which is the default in
single-database tenancy. A test pins the behaviour instead.

**The playground stays single-database.** Its `config/tenancy.php` has the
database bootstrapper commented out with the reasoning, and `App\Models\Tenant`
implements `TenantWithDatabase` with real columns rather than extending stancl's
model, whose VirtualColumn would bury `name`, `slug` and `logo_path` in an
unindexable JSON blob.

### Hostname identification

A `domains` table written here rather than published — stancl's ships beside a
`create_tenants_table` that would collide, and declares `tenant_id` as a STRING
because its own tenants use uuid keys, which points a string column at this
app's bigint primary key.

Both middlewares work, and `App\Models\Tenant` uses `HasDomains`. Two things
are worth knowing before wiring this up:

**An unknown hostname is a 500, not a 404.** stancl throws
`TenantCouldNotBeIdentifiedOnDomainException` and leaves the status to the app's
handler, so an unregistered host produces a server error — and with debug on, a
stack trace naming the resolver. It DOES fail closed, which is the part that
matters, but every deployment should set `InitializeTenancyByDomain::$onFail` to
`abort(404)`. A test demonstrates both the default and the fix.

**Subdomain identification stores the LABEL, not the hostname.** `acme.panel.test`
looks up `acme`; `acme.example.com` looks up the whole string. Both read the same
`domains` table, so a tenant set up for one silently does not work with the
other, and the symptom looks like a routing problem.

`PreventAccessFromCentralDomains` is tested too: tenant routes must not answer on
the central domain, because in column mode "no tenant identified" is the one
state that must never be served.

### Shared workers, every tenant

The panel runs ONE pool of queue workers for all tenants — a worker per tenant
does not survive past a few dozen organisations, and most of them idle most of
the time. `QueueTenancyBootstrapper` writes the tenant id into every job payload
at dispatch and re-initialises tenancy from it when the job runs, so each job
executes as the tenant that queued it and tenancy is ended in between.

5 tests, all of which fail if the bootstrapper is removed from
`config/tenancy.php`: a job runs as its dispatching tenant, three interleaved
jobs from two tenants do not leak, a centrally-dispatched job does not inherit
the previous tenant, the worker is left outside tenancy, and a job's scoped
query reads only its own rows.

**`FilesystemTenancyBootstrapper` is now OFF for this panel.** It repoints disks
per tenant AND suffixes `storage_path()`, which moves logs, sessions and
compiled views into `storage/tenant{id}/` too — a surprise on shared workers,
where one process writes its log lines to a different directory per job. PanelKit
already prefixes stored files with `tenants/{key}/`, and that prefix is what
`belongsToCurrentTenant()` checks. The multi-database suite turns it back on
explicitly to keep covering that arrangement.

**A bootstrapper cannot be enabled at runtime.** stancl registers each one named
in the config as a SINGLETON at boot; one that is not there resolves to a fresh
instance every time, so `bootstrap()` and `revert()` run on different objects and
the second has no record of what the first replaced. It surfaces as
`Undefined array key "local"` thrown out of `tenancy()->end()`.

**Still not covered:** path identification, and multi-database against MySQL or
Postgres rather than SQLite. The mode logic is engine-independent by
construction, which is not the same as having been run against Postgres.

### Record actions — the row menu, declared server-side

View, Edit, Delete used to be hardcoded in a Vue template. They are now
`RecordAction` objects declared on the resource's table, grouped by
`ActionGroup`, and run through one endpoint that accepts a KEY and never an
attribute set — the same rule bulk actions follow.

**Three decisions worth keeping:**

**A duplicate is a CREATE.** `ReplicateAction` authorizes against `create`, not
`update`. Replicate reads like an operation on the row it hangs off, so the
obvious ability is the one every other row action checks — and it would hand a
create permission to anyone who can edit, through a menu item nobody thinks of
as creating anything. A test swaps in a policy that allows update and denies
create, and asserts the copy is refused while Suspend still works.

**`visible()` takes the row's ARRAY, not a model.** The list never hydrates
models — that is most of why it is fast on a million rows — so a closure typed
against `Model` could only be evaluated by hydrating 25 per page. An array works
in both places: the list passes the row it already has, the endpoint passes the
record's attributes. And it is re-checked on execution, because hiding is not
enforcement.

**Structure in the schema, availability with the row.** Labels, icons and
confirmation copy are identical for every row, so they travel once; what varies
per record is a list of keys and, for links, their URLs. The alternative is 25
copies of the same menu definition in every page payload.

`removesRow()` exists because "the row leaves the view" cannot be inferred from
`destructive` — archiving is not destructive and does remove the row; a reset is
destructive and does not.

15 tests. 410 passing overall.

### The screens you cannot summon

An error page is by definition something you cannot ask for, which is why it is
the screen that ships broken and stays broken — nobody sees a 500 until a
customer does. Lock and code-entry have the same problem from the other end:
reaching them means signing out or waiting for a timeout.

They are now ordinary pages in a **Screens** sidebar group, and the previews
render the SAME component the exception handler uses. A separate demo copy would
be a copy that drifts, and the drift is invisible until the day it matters.

**403/404/419/429/500/503 are live**, rendered by the exception handler as panel
pages rather than framework stack pages — so a wrong link keeps you inside the
app with somewhere to go, instead of dropping you onto an unstyled page with no
navigation. JSON callers still get JSON, the status code is preserved rather
than flattened to 200, and **local development keeps the stack trace**: replacing
it would hide the exception behind a polite sentence, which is the opposite of
useful when you are the one who caused it.

The copy is deliberately unhelpful about causes. A 403 that explains which
permission was missing tells whoever probed for it what to ask for next.

**Lock and OTP are built but not wired.** Both are complete screens — the lock
shows the account being unlocked rather than asking who you are, and the code
entry handles paste (codes arrive by SMS and get pasted whole, which naive
per-box inputs drop all but the first character of), backspace-to-previous,
arrow keys, `one-time-code` autofill, and self-submits on the last digit. What
does not exist yet is a session-lock flag with middleware, or a code store with
delivery and expiry. They post to `/unlock` and `/verify-otp`, which are not
routes. Building those flows is real auth work and is its own item.

8 tests. 425 passing overall.

### Table grouping — an ordering, not an aggregation

Rows are clustered by sorting on the group column first; the client inserts a
heading wherever the value changes. That is the whole implementation, and it is
why it costs one extra `ORDER BY` term rather than a second query. The naive
version — fetch everything, bucket it in PHP — is fine at 200 rows and fatal at
a million.

**Measured on the 1M-row clients table:**

| Ordering | Plan | Time |
|---|---|---|
| `status, created_at, id` (indexed) | COVERING INDEX | **0.2 ms** |
| `plan_type, created_at, id` (not indexed) | TEMP B-TREE FOR ORDER BY | **537 ms** |

**2,700×, and that is the whole trade.** Grouping makes the group column the
PRIMARY sort, so the effective order is `(group, chosen sort, id)` — and there
must be an index whose leading columns match it. Grouping a column you have not
indexed for sorts the entire filtered set to produce one page.

**Clients is deliberately NOT grouped.** Turning it on made sort-by-expiry go
from 6 ms to 537 ms and the performance budget failed the build, which is the
budget doing its job. Making every sort fast while grouped means one composite
index per sortable column — real write cost and storage on the largest table
here. That is a trade worth making for a table where grouping earns it, not by
default because the feature exists. **Routers is grouped instead**: same
capability, twenty rows, no index bill.

**The cursor had to be generalised.** A grouped seek needs `(group, sort, id)`,
so `Cursor` now carries a LIST of ordering values and `applyCursor` builds the
lexicographic predicate for however many there are. Cursors from a different
ordering are ignored rather than misread — turning grouping on with a stale
cursor in the URL restarts the page instead of landing somewhere arbitrary. Old
two-part cursors still decode, because they live in URLs people bookmarked.

A group that spans a page boundary is re-labelled on the next page rather than
padded to fit, which would mean a variable page size and a cursor that cannot be
derived from the last row.

6 tests.

### Row reordering — a mode, and recycled positions

**Reordering is ENTERED, not always on.** The first attempt put a grip on every
row permanently, which is clutter on a table nobody reorders daily and makes an
ordinary list look half-editable. Filament's model is right: a Reorder button
puts the table into a mode, and while you are in it selection disappears,
because choosing rows and arranging them are different intents and offering both
means every drag starts by wondering whether it will tick a checkbox.

**The positions are recycled, not recalculated.** The two obvious
implementations both fail: renumbering the table makes one drag N writes, and
midpoints eventually run out of integers and need a rebalancing pass nobody
writes until it breaks. Reusing the positions the PAGE already holds means the
multiset is invariant — only which row holds which value changes. Rows outside
the page are untouched, collisions are impossible, gaps never run out, and the
write cost is bounded by the page. A two-row swap writes exactly two rows.

**The order column is a query concern, not a display column.** It is registered
as sortable and selected without being rendered — nobody wants a column of 100,
200, 300 — and it must be selected, because the keyset cursor is built from the
last row's ordering values. Omitting it produced
`Illegal operator and value combination` on page two, which says nothing about a
missing SELECT.

10 tests. Also fixed on the way: `permissions()['update']` only knew about forms
and editable columns, so a table whose only write was a drag reported itself
read-only and the Reorder button never appeared.

**Plans no longer has an inline toggle.** A switch in a list turns a row into a
control — one mis-click while scanning retires a plan customers are being sold,
with no confirmation. It is a badge now, and retiring goes through the bulk menu
where it is chosen rather than brushed against. `BadgeColumn::labels()` was added
because the client used to fall back to the column's own label for `true`, which
only worked while the label happened to be an adjective.

### Tier 3 — differentiators and polish

| Item | Notes |
|---|---|
| ~~`ReplicateAction` / `ActionGroup`~~ | **Done.** Server-declared row actions, grouped. See below. |
| `Repeater`, `KeyValue`, `RichEditor` | Nested editing, arbitrary metadata, formatted notes. |
| Visual query builder | Nested AND/OR conditions composed in the UI. |
| Wizard | Multi-step creation. |
| Table grouping | **Done.** See below. |
| Row reordering | **Done.** Reorder mode, recycled positions. See below. |
| Import | The counterpart to the export that already exists. |
| `ReplicateAction`, `ActionGroup` | Duplicate a record; nested action menus. |
| ~~**Auth and system screens**~~ | **Done.** OTP / verification, lock screen, access denied, and the error pages (403, 404, 419, 429, 500, 503) — rendered in every environment, standalone rather than inside the authenticated shell. See below. |
| **Invoice template** | A printable invoice document — line items, totals, tax, payment terms — as a real page rather than a PDF-only export. Reference: Diamond `pages/invoice`. Directly relevant to an ISP panel. |
| **Device-frame preview page** | A workbench that renders arbitrary markup inside a pure-CSS phone frame, so a mobile layout can be designed and watched at the same time. Reference: the CSS iPhone collections on freefrontend. Standalone: it renders a preview, it does not couple to the panel's own screens. |

---

## Two further documents, read 2026-07-27

### `mds/part1..8.md` — Enterprise Frontend Framework spec

A 7,665-line vision document for a general-purpose enterprise frontend
framework. It is aspirational rather than a build order, and roughly half of it
describes **rebuilding Vue** — a diff engine, a scheduler, a signals runtime, a
DI container, a component lifecycle, alternate renderers for React Native /
Flutter / Electron / terminal / PDF.

**That half is refused, and the refusal is the point.** Writing a rendering
engine is a multi-year project whose realistic outcome is something slower and
buggier than the Vue we already depend on, and it would consume every hour that
should go into the panel layer. The same applies to the marketplace, the cloud
platform, and the AI platform: they are a company, not a framework.

The transport abstraction (HTTP / GraphQL / gRPC, "changing transport should
require minimal code changes") is refused for a sharper reason. Inertia's
partial reloads — `only:` and deferred props — are *the* mechanism behind the
schema-once/data-only transport and the deferred counts. An abstraction that
made the transport swappable would have to abandon them, so it would cost the
thing it was meant to protect.

What is worth taking is listed in Stage plans below, and it is a real list:
error boundaries per widget, saved views, a column engine, density, context
menus, prefetch-on-hover, request deduplication, audit trails, presence, i18n
and RTL, `panel:doctor`, and skeleton/empty/error states as first-class
component contracts rather than ad-hoc markup.

One item deserves calling out because **this session produced exactly the bug it
prevents**: Part 2's *"enterprise applications should never fail completely
because one widget crashed."* A null `auth.user` in the sidebar took down an
entire error page and rendered white. Error boundaries are now Stage 1.

### `panelkit-reference-app.md` — the reference application

This one changes the shape of the project, and it is the more important of the
two. It specifies a throwaway ISP-billing replica used as the **benchmark
harness**, and it demands three things the kit currently cannot do:

| Demand | Current state |
|---|---|
| **Three panels in one app** — tenant admin at `/app` (tenant context), super admin at `/super-admin` (**central context, no tenant scoping**), client portal at `/` (tenant context) — each with its own guard and middleware | PanelKit assumes ONE panel. There is no panel registry, no per-panel guard, no central-context mode. **Architectural gap.** |
| **Workspace pages** — one page hosting several independent tables, each with its own filter/sort/pagination state, all in the URL without colliding | Not built. Named "mandatory" by the document: *"a framework that only does CRUD resources cannot express half of this system."* |
| **Hybrid tenancy in one deployment** — four shared-database tenants plus `atlas` on a dedicated database with **no `tenant_id` column at all** | `TenantContext` supports both modes, but never both at once in one app. `atlas` is the assertion that the kit never writes `->where('tenant_id')` itself. |

Plus: conditional dashboard composition from per-tenant module flags, a
`panel:benchmark --tenant=acme --runs=3 --json` command, five tenants seeded at
different scales, and explicit figures to beat (heavy tabbed form 500–710 ms →
under 150 ms; wizard 967 ms → under 200 ms; any navigation → under 150 ms).

The reference app also supersedes the playground's role as the proving ground.
Its acceptance list is now part of the definition of done.

---

## What is left, in order

Everything outstanding, sequenced. The ordering is not arbitrary: each stage is
placed where it is cheapest, and two of them get **more expensive the longer
they wait**.

Four kinds of work are mixed together, which is why the remaining list feels
longer than it is:

- **unfinished** — started, not usable (Repeater/KeyValue);
- **unbuilt** — Tier 3 features and screens;
- **unproven** — the §14 checklist, none of it ticked;
- **unsupported** — the three architectural gaps the reference app just exposed
  (multi-panel, workspaces, hybrid tenancy).

The last kind is new, and it is the one that cannot be bolted on later: a panel
registry touches routing, schema caching, navigation and authorization at once.

### Stage 0 — the row action rework — **done**

Requested directly, and small enough to do first. **460 tests passing** (+7),
`vue-tsc` clean.

Shipped: `RecordAction::inline()`, a `MAX_INLINE_ACTIONS = 3` ceiling enforced
in `Table::recordActions()`, a shared `icons.ts` registry, `PkDropdown.openAt()`
for pointer anchoring, and `RecordActions.vue` replacing the inlined block.
Verified in the browser: inline eye/pencil in the row, menu with icons and
group headings, Delete separated and red, right-click opening at the cursor on
the correct row, and the inline buttons folding into the menu at 375px.

Two guards are refusals rather than conventions, and both are tested:
`->inline()` without an icon throws (it would render an empty square), and a
destructive action can never be inline **in either declaration order**.

Incidental: four pre-existing `vue-tsc` errors fixed, because a typecheck that
always fails cannot gate anything. `packages/ui` is **not covered by ESLint**
(outside its base path) — noted in Stage 6.

**What is wrong with the current one**, from `ResourceIndex.vue:789`:

1. The trigger is a literal `⋯` **text character**, so it renders differently on
   every OS and font stack.
2. **Every action costs two clicks**, including the one people use constantly.
   A menu is the right home for the twelfth action and the wrong home for the
   first.
3. **No icons**, so the menu is scanned linearly instead of recognised.
4. It is **70 lines of markup inlined in the page**, so relation panels, detail
   pages and workspaces cannot reuse it — they would each reimplement it.
5. **No keyboard navigation** beyond tab, and **no right-click**.

**The replacement**, borrowing Filament's split but fixing what it does poorly:
the *server* decides what is inline and what overflows.

```php
ViewAction::make()->inline(),        // icon button, in the row
EditAction::make()->inline(),
SuspendAction::make(),               // overflow menu
DeleteAction::make()->destructive(), // separated, always last
```

- Up to **three** inline icon buttons — a fourth makes the frozen column wider
  than the data it is freezing.
- Overflow menu with icons, arrow-key navigation, and a separated destructive
  block.
- **Right-click anywhere on the row** opens the same menu at the pointer.
- On a phone the inline buttons collapse into the menu, because there is no room
  and a 28px target beside another 28px target is a mis-tap.
- One `RecordActions` component in `packages/ui`, used by tables, relation
  panels, detail pages and workspaces.

### Stage 1 — close what is open, and stop one crash taking the page

**480 tests passing** (+20), `vue-tsc` clean.

| Item | State |
|---|---|
| ~~`Repeater`, `KeyValue`~~ | **Done.** `PkRepeater.vue`, `PkKeyValue.vue`, wired to Clients with a `contacts` / `metadata` migration, 20 tests, verified end to end in the browser. |
| ~~**Error boundaries**~~ | **Done.** `PkBoundary.vue` around every dashboard widget, the table, and the sidebar's user menu. |
| `RichEditor` | Not started. Completes the field set. |

**The boundary is proven, not asserted.** A temporary throw in one dashboard
widget produced a single failure card with a Try again button while the other
nineteen widgets rendered normally, and the console got the full stack — the
failure is loud, not swallowed. Before this, that same throw blanked the page.

Two real bugs found while building it, both from inserting a wrapper into a
layout: a fragment root silently dropped `lg:col-span-2`, so wide charts became
half-width; and the new wrapper became the grid item, so cards in a row stopped
stretching to equal heights. Both are now `h-full *:h-full` on a single root.

**A hollow test caught by mutation testing.** `test_an_undeclared_contact_key_…`
was written to prove the repeater's key filter stops mass assignment. Disabling
that filter did not make it fail — because `$request->validate()` already drops
paths that have no rule, so the filter never saw the key. The test is renamed to
say what it actually proves, and the two gates are now documented as what they
are: validation guards the HTTP path, the field's own filter guards every caller
that never goes through validation (a seeder, a command, an import).

The field work was debt rather than features: a field that exists in PHP and
nowhere else is worse than one that does not exist, because it reads as done.

### Stage 2 — the safety nets — **done**

**515 tests passing** (+15). Both guards are proven by mutation testing rather
than by passing, which matters: a security test that has never been seen to fail
is indistinguishable from a comment.

| Item | State |
|---|---|
| ~~Cross-tenant isolation matrix~~ | **Done.** 10 checks × every registered resource, enumerated from `PanelManager` so a new resource is covered the moment it is discovered. Covers view, edit, list-leak, update, delete, cell edit, record action, bulk, reorder, file download. |
| ~~N+1 query-count guard~~ | **Done.** Row count is VARIED and the query count must stay flat — a fixed page size hides N+1 entirely. Plus absolute ceilings on the list and the dashboard shell. |

**What mutation testing showed, and it changed what the matrix claims.**
Removing the tenant global scope from record lookup made *nothing* fail: the
policy caught every case. Removing the policy's ownership check as well produced
four real failures, including `PATCH /editable-plans/{id}/cell` answering **200
on another organisation's row**. So isolation rests on two independent gates,
and the matrix asserts the *observable boundary* rather than either mechanism —
which is the right level, because a test coupled to one gate passes while the
other silently rots.

The N+1 guard was verified the same way: injecting one query per row took the
list from 7 queries to 52, and the guard named the resource.

**Two of my own bugs, found by the tests failing first.** The matrix initially
reported four cross-tenant writes that were not writes at all — comparing an
in-memory model against a database read differs in three ways that are not
mutations (`true` vs `1` from the driver, insertion order vs column order, and a
column with a database default absent in memory). And the query guard first
failed with the count going *down*, 3 → 2, which was the schema cache being
populated by the first request: measuring a cold request measures cache
population, exactly the false finding the reference app's methodology warns
about. Both measurements now warm up first.

These were placed before everything else deliberately: making tenancy
conditional per panel (Stage 4) is precisely how "deny by default" becomes "deny
unless a flag says otherwise", and this matrix is what makes that survivable.

### Stage 3 — the tenancy stress test — **done**

**523 tests passing** (+8). Engine settled: SQLite stays, so this stage became
what it should always have been — measuring the thing nobody had measured.

One consequence recorded rather than argued: SQLite is a single-writer engine,
so concurrent-write figures will never be representative of a production
deployment, and the 21-minute `xlarge` seed is a symptom of that rather than a
panel cost. It stays reversible because what has been optimised is query
*shape* — keyset seeks, one grouped query per chart, no blocking counts, rollups
instead of scans — and shape transfers even though the numbers do not.

**The gap this closed.** Six tenancy suites existed and between them proved
tenancy was *correct*. **Not one of them measured anything.** That matters here
specifically because tenancy sits in front of every request: if identifying a
tenant costs a query, it costs a query on every page, on every poll, forever.

Measured in **query counts and ratios, not milliseconds** — a wall-clock budget
inside a test suite measures whatever else the machine was doing and fails
randomly at 3am. The useful question is not "how many ms" but "does this scale
with the thing that grows".

| Measurement | Result |
|---|---|
| Tenant resolution, ×50 | **0 queries** — memoization is real, not assumed |
| Deciding the tenancy mode, ×50 | **0 queries** |
| List query, scoped vs unscoped | **1 vs 1** — isolation adds a clause, not a query |
| Scoped list query plan | **index**, no full scan |
| Tenant switch with a loaded model, ×20 | **0 queries** |
| **Tenant switch by key, ×20** | **20 queries — 1.0 per job** |
| List cost, 1 tenant vs 51 tenants | **2 vs 2** — resolution does not scale with tenant count |

**The by-key measurement was added because the first one was misleading.**
`tenancy()->initialize($model)` with the tenant already in hand reports zero,
which is a true number for the wrong scenario: a queue job carries a tenant
*key*, so a shared worker must find the tenant before it can initialize.
Reporting only the cheap path would have understated the cost that is actually
paid per job. One lookup per job is the honest figure.

The cache bootstrapper is asserted **on**, as the reference app requires, and
tenant-tagged cache access costs **0 queries** — the tagging is string work.

**§10 budgets re-taken** against the real seeded dataset (1,000,002 clients /
5,000,000 sessions), all against a 300 ms budget: unfiltered list 5.3 ms, status
filter 4.4 ms, sort by expiry 5.1 ms, indexed prefix search 4.6 ms, word-prefix
scan 5.0 ms, combined filter and sort 5.1 ms. Higher than the 0.4–1.6 ms
recorded earlier, and the honest explanation is that the dev server and a
browser were running during this pass rather than any regression — the shape is
unchanged and the margin is two orders of magnitude.

### Stage 4 — multi-panel architecture — **core done**

**533 tests passing** (+10). The structural half is built; the routing half —
serving three panels at three paths in the playground — is Stage 5 work, because
it needs the workspace pages to have something to show.

| Item | State |
|---|---|
| ~~`Panel` registry~~ | **Done.** `PanelManager` registers panels, resolves the current one, and partitions resources by panel. |
| ~~Central-context mode~~ | **Done.** `TenantContext::isCentralPanel()`, consulted first by `TenantScope`. |
| ~~Per-panel schema cache~~ | **Done.** A resource's key now uses its own declared panel instead of a literal `'admin'`. |
| ~~`UsePanel` middleware~~ | **Done.** The panel id is a literal in the route group — never inferred from a request. |
| Three panels wired in the playground | Stage 5. |

**The dangerous change, and what makes it survivable.** Making tenancy
conditional converts "deny by default" into "deny unless a flag says otherwise",
where any bug evaluating the flag is a cross-tenant leak that returns 200. Three
properties, each asserted:

1. **False is the default AND the fallback** — no panels registered, no current
   panel, an unknown id: every path answers "apply the scope". An unknown id
   throws rather than falling back to the default panel.
2. **Nothing in a request can select it.** The panel comes from the route group,
   fixed at boot. Not a header, not a subdomain, not a query parameter — an
   attacker would have to change the source, not guess a value.
3. **The exemption does not persist.** Moving from a central panel back to a
   tenant panel re-scopes, which matters for a queue worker or Octane serving
   both in one process.

Ten tests cover it, weighted deliberately: **one** proves a central panel is
unscoped, **six** prove that everything else is scoped, including every way of
getting the question wrong.

**And the ordering paid off.** Making `inCentralContext()` fail open — a
one-character change from `?? false` to `?? true` — was caught immediately by
the Stage 2 isolation matrix, specifically by `test_a_list_never_includes_a_
foreign_record` and `test_a_bulk_action_cannot_reach_a_foreign_record`. Those
two are the paths where the scope is the ONLY gate, with no per-record policy
check behind it. That is precisely why the safety nets were built before this
stage rather than after it.

### Stage 5 — workspaces and hybrid tenancy — **done**

**555 tests passing** (+22), `vue-tsc` clean.

| Item | State |
|---|---|
| ~~`Workspace` pages~~ | **Done.** `Workspace` + `ListQuery::within()`. Each table reads `?{name}[page]=2`, arrives as `tables.{name}`, and reloads with `only: ['tables.{name}']` — all three derived from one declared name so they cannot drift. Verified in the browser: sorting the history left the live list on its own sort. |
| ~~Hybrid tenancy~~ | **Done.** `MODE_HYBRID` resolves per tenant from whether that tenant has a database of its own. |
| Conditional dashboard composition | Deferred to Stage 9, where module flags have real tenants to vary across. |

**Four bugs found, three of them mine and one latent in the framework.**

**The framework one is the worst.** `Table::query()` is dropped from counts when
nothing applied needs the join — a measured 20× saving, and correct, because a
count selects no joined columns. Nothing stopped a *predicate* going in there.
The live-sessions table put `whereNull('ended_at')` in the join closure, which
reads perfectly naturally, and the total came back as **every session ever
recorded** instead of the three live ones. No error; just a wrong number. Fixed
by splitting the hook: `constrain()` always applies, `query()` is joins only, and
a regression test asserts the count.

**A column alias that failed silently.** `->from('clients.name')` on a column
keyed `client_name` selects a result column called `name`; the row arrives under
a key nothing reads and the cell renders an em dash. The query is valid, the join
is right, and the only symptom looks like missing data. `Column::selectExpression()`
now aliases to the declared key, while `resolvedDatabaseColumn()` strips any
alias so an ORDER BY still names a real column.

**And a bug I had introduced in Stage 1.** `PkBoundary` carried `*:h-full`,
which forces *every* direct child to full height — correct for a dashboard
widget, which is one element, and wrong the moment a boundary wraps a heading, a
table and a pagination bar: each took the full height, so a 26rem panel gave
133px to its title and 132px to a table needing 350px. Now
`[&>*:only-child]:h-full`, which says what was meant.

**The hybrid check was wrong on its first run, and dangerously.** It asked both
`getInternal('db_name')` and `database()->getName()` — which looked more
thorough and was catastrophic: `getName()` falls back to a *generated* name for
any tenant, so it is never null, **every** tenant resolved to database mode, and
the column constraint was dropped for all of them. A test caught it immediately;
had it not, the symptom would have been every tenant seeing every other tenant's
rows, from a check written to be careful.

Two design decisions worth keeping visible: hybrid **falls back to the
constraining mode** when nothing is initialised, and it is **deliberately not
memoized** — a shared queue worker switches tenants many times per container
lifetime, and a cached answer would apply the previous tenant's mode to this one.

### Stage 6 — the table power features — **mostly done**

**576 tests passing** (+21), `vue-tsc` clean.

| Item | State |
|---|---|
| ~~**Saved views**~~ | **Done.** Per user, per resource, with a default. 21 tests. |
| ~~**Density**~~ | **Done.** A third level, `spacious`, for touch use. |
| ~~**Prefetch on hover**~~ | **Done.** Inertia `prefetch="hover"` on every nav link. |
| ~~**Context menu**~~ | Done in Stage 0. |
| ~~**ESLint over `packages/ui`**~~ | **Done.** See below. |
| ~~**Sidebar group nesting**~~ | **Done.** Requested mid-stage; see below. |
| ~~Column resize / reorder / pin~~ | **Dropped 2026-07-27, by request.** Hide/show already exists and covers the need; drag-resizing a column is a preference nobody was asking for, and a stored width per user per table is state to migrate and get wrong forever after. |
| Skeletons as a component contract | Not started. |

**A saved view is a stored query string, and that is the whole security story.**
Everything a URL can carry, a view can carry — a sort column that was never
sortable, a filter that no longer exists, a `perPage` chosen to pull an entire
tenant table. The difference is that a URL obviously arrives untrusted, while a
view is read back from the database and feels checked. `ViewState` puts it
through the same allowlists, and unknown keys are **dropped rather than
refused**: a view saved before a column existed is not an attack and should
still open, minus the part that no longer means anything.

Two of my own bugs, both caught by tests. `tenant_id` and `user_id` are
deliberately not fillable, so `updateOrCreate` silently dropped them and the
insert failed on a NOT NULL constraint that said nothing about the cause — now
`firstOrNew` plus an explicit `forceFill`. And `state => required|array` refused
an EMPTY state, which is the one view easiest to describe: "no filters, default
sort, everything". Laravel treats `[]` as absent for `required`; the rule is
`present` now.

**The shipped package had never been linted.** `packages/ui` sits outside the
playground's config directory, so ESLint reported every file as *"ignored
because outside of base path"* — which reads like a warning and means "not
checked at all". The component code that actually ships to consumers was the one
part of the repository with no coverage, while the app that merely consumes it
had full coverage. `basePath` on a config object was the first attempt and does
not help — it rebases that object's patterns, not the run. A config file beside
the code is what ESLint's model wants. First run: **205 problems**, now 9
(genuine findings, not style: a duplicate Vue key, an unused prop).

**Sidebar groups — the icons were in the wrong place.** Every child of a group
carried its own icon, which meant four or five glyphs stacked vertically that
all said the same thing: Clients, IP Bindings and Leads are the same *kind* of
thing, so an icon each distinguishes nothing and only adds noise to the
narrowest column on screen. The icon now sits on the group heading and the
children are dots on a vertical rail — which draws the relationship once rather
than repeating a useless glyph per row. Applied to the collapsed flyout too, for
the same reason.

### Stage 7 — the remaining builders — **done**

**618 tests passing** (+42), `vue-tsc` clean.

| Item | State |
|---|---|
| ~~Import~~ | **Done.** Header inspection, column mapping, dry run, per-row failures. 18 tests. |
| ~~Wizard~~ | **Done.** `Wizard` / `Step`, wired to Router onboarding — the reference app's 967 ms target. |
| ~~Conditional fields~~ | **Done.** `visibleWhen()` produces both the client hint and the server's `required_if`. |
| ~~Visual query builder~~ | **Done.** `QueryConditions` compiles a tree; the client never sends an expression. 11 tests. |

**Import: one bad row must not abort the batch.** The instinct is a transaction
around the whole file, and it is wrong for the case that actually happens — 5,000
subscribers, three with a malformed phone number, and rolling back the other
4,997 means fixing three cells and re-uploading everything while nothing says
which three. Rows are validated independently and failures are reported by
*spreadsheet line*, because somebody looking at a sheet where the header is line
1 should not have to count.

Three details worth keeping: the reader strips a **BOM**, because the panel's own
export writes one and a re-imported file otherwise has three invisible bytes
glued to its first header — the symptom is that the first column never maps and
the header looks perfect in every editor. A **blank header gets a positional
name** rather than being dropped, since dropping it shifts every later column and
imports names into the phone field with no error. And **nothing is written when
anything failed**, because a partial import is one the operator then has to
reconcile, and re-uploading the corrected file would duplicate what succeeded.

**A test caught a contradiction between my comment and my code.** The comment
claimed an unmapped required field would fail loudly; the code validated only
*mapped* fields, so an unmapped `name` was never validated at all. That is
correct for an optional column a file omits and silently wrong for a required
one. The check now sits on the MAPPING, before a row is read — the operator is
told "map the Name column" instead of receiving five thousand identical errors.

**Conditional fields are one declaration, enforced twice.** `required` on a
hidden field means the form can never be submitted; dropping the rule means a
client that omits the field skips a declared requirement. `required_if` is
neither, and it is derived from the same `visibleWhen()` the client uses to hide
the control — so the two cannot drift. Booleans are written as `1`/`0` because
`required_if:flag,true` silently never matches, which fails in the direction
that matters.

**The query builder sends a tree, never an expression** — the whole security
design in one line. Fields are checked against declared FILTERS rather than
columns (a filter is what has an index behind it; allowing any column is a
denial of service somebody can type), operators against a fixed list, `LIKE`
patterns are built rather than accepted, depth and total size are bounded, and
size is checked *before* anything is compiled so a refused tree leaves no partial
query behind.

One real gap found by a test: a filter's KEY and its COLUMN are not the same
thing — `planType` is what the client sends, `plan_type` is what a WHERE needs.
Using the key as a column produced "no such column" on exactly the filters that
had been renamed for the UI. It now resolves through `Filter::resolvedColumn()`,
the same split `sortable()` already makes.

### Stage 8 — the remaining screens — **done**

**624 tests passing** (+6), `vue-tsc` clean.

| Item | State |
|---|---|
| ~~Chat~~ | **Done.** Transport-ready: wired to the live composable, connection state shown. |
| ~~Invoice template~~ | **Done.** Printable, integer cents throughout, 6 tests. |
| ~~Device preview~~ | **Done.** A real iframe viewport, not a scaled div. |
| ~~Documentation page~~ | **Done.** Six copy-pasteable examples, in-panel. |

**Chat is transport-ready, not transport-coupled**, as decided. Nothing on the
screen names Reverb or polling: it renders, subscribes if a driver is present,
and falls back to polling if one is not. The connection state is shown in the
thread header, because a thread that has silently stopped receiving looks
exactly like a thread where nobody has replied.

This needed one addition to the live composable. `flush()` patched rows it could
find and **silently dropped** changes for ids that were not on the page —
correct for a paged table, where a row created on page 40 must not appear on
page 1, and exactly wrong for a chat, where arrival IS the event. `onInsert` is
opt-in, so every existing surface keeps the safe behaviour.

**The invoice is a page, not a PDF endpoint.** A generated PDF must be rendered,
stored, served and cleaned up, and cannot be read without downloading something;
`window.print()` on a page with a print stylesheet produces the same PDF through
the browser's own dialogue. Money is integer cents the whole way through and
divides only at the point of display — a float total is wrong by a fraction of a
cent per line and visibly wrong by the twentieth. The print stylesheet is
deliberately **global rather than scoped**, because it has to reach the sidebar,
which an ancestor renders; a scoped print block is the commonest reason an
otherwise correct invoice prints with a navigation rail down the side.

**The device preview is an iframe, and that is the whole point.** Scaling a div
with `transform` looks similar and lies: media queries still fire against the
outer window, so a `sm:` breakpoint resolves against the desktop width and the
"phone" shows the desktop layout at 40% size. An iframe has its own viewport.

**Corrected after review — I had built the wrong thing well.** The first version
pointed the frame at panel pages (`/dashboard`, `/clients`), so every preview
showed the panel's own header and navigation inside the phone. The spec had said
plainly: *"Standalone: it renders a preview, it does not couple to the panel's
own screens."* It is now a markup workbench using `srcdoc`, which also means
nothing is fetched and the frame cannot be pointed at an arbitrary URL.

The same review surfaced a measurement bug: Tailwind's default `box-border` made
the 10px bezel eat into the declared width, so a frame asked for 390 delivered a
**370px viewport**. For a tool whose entire purpose is "a real device width",
being 20px narrow is the one bug that matters — 375 and 355 sit on opposite
sides of a breakpoint. `box-content` fixes it; verified 390 declared, 390
delivered.

**The unsaved bar said Reset; it now says Cancel.** "Reset" clears the form and
leaves you sitting on it — which on a CREATE page means staring at the fields
you just emptied. It also contradicted the form's own footer, which already had
Cancel and Save, so the page gave two different answers to "how do I get out of
this".

Making it leave exposed a second bug: the unsaved-changes guard prompted "leave
without saving?" on the Cancel click — asking the same question the button had
just answered. Worse, a browser that auto-dismisses that confirm turned Cancel
into a visible no-op. It now bypasses the guard the same way a submit does.

**A duplication this stage exposed, and closed.** `usePanelNav`'s own docblock
warns: *"duplicating the group-building into each is how a resource ends up
visible in two layouts and missing from the third, with nothing failing."*
`AppSidebar` had duplicated it anyway. Two new nav groups appeared in the
horizontal bar and silently did not appear in the sidebar — no error, because
there was no contradiction to detect, just two lists that had stopped agreeing.
The sidebar now consumes the shared model.

### Corrections after review — Stage 8 revisited

**632 tests passing** (+8), `vue-tsc` clean.

| Correction | What changed |
|---|---|
| **Docs → Scalar** | The hand-built docs page is gone. `@scalar/api-reference` renders an OpenAPI document **generated from the route registry**. |
| **Device preview** | Loads real pages again, without the panel's chrome. |
| **Sessions** | The mis-named workspace is out of the navigation; signed-in devices live in Security settings. |
| **Scrollbars** | Thin and theme-coloured, in both syntaxes. |

**The docs page was two mistakes at once.** It reimplemented — badly — a solved
problem: search, deep links, request/response schemas, a "try it" console, and
the layout conventions people already know from every API reference. And it was
PROSE, which drifts from the application the moment either changes, silently,
while still looking authoritative. Scalar renders a spec, and the spec is
generated from `PanelManager`, so adding a resource adds its endpoints.

**The device preview took four attempts, and the last one is the point.** It
loads the panel — the whole panel, unmodified — into a phone-sized iframe, and
**the phone handles its own navigation**. There is no page picker outside the
frame and nothing is stripped: you tap the menu, open Clients, open a record,
exactly as somebody on a phone would. How the navigation behaves at 390px is
most of what there is to look at, so a picker out here was answering the wrong
question.

It is an **ordinary panel page**, with the panel's own sidebar and header where
they belong. One attempt stripped those on the theory that two sidebars compete
for attention — solving a problem nobody had, and costing the page its
navigation and its place in the panel. The frame is a thing ON a page, not a
replacement for one.

The wrong turns are worth recording, because they were all the same mistake:
five attempts at this one screen, and the complaint was about what was INSIDE
the phone every time, while four of the five rebuilt what was around it. A
markup workbench and three static frames were things nobody asked for, and the
static frames lost the property that made the tool honest — a plain `<div>` gets
the OUTER window's media queries, so `sm:` fires at 390px. `?preview=1` was the
same error inverted: hiding part of the system being previewed. Removing the
panel chrome was it a third time.

The `box-content` fix stands: a frame asked for 390 was delivering 370.

**And it immediately earned its keep.** Tapping a nav link inside the phone
navigated *behind* a drawer that stayed open — the destination was reached and
could not be seen, which reads as the tap having failed, so the natural next move
is to tap again. On a phone the sidebar is an overlay covering the page, and
nothing closed it. Fixed, mobile-only: on desktop the rail is permanent and
closing it after every click would be the bug.

**"Sessions" was a category error.** The workspace meant client CONNECTION
sessions — an ISP concept sharing a word with authentication — and under that
name in the navigation it answered the wrong question. Somebody looking for
"sessions" in a panel wants to know where they are logged in. That is now
Security settings → signed-in devices, reading Laravel's own session table
rather than a parallel record that would disagree with it. Eight tests, most of
them refusals: a session id is opaque, but "hard to guess" is not an
authorization check.

One detail worth keeping: Chrome is matched **before** Safari, because every
Chrome user agent also contains "Safari" — the obvious ordering reports every
Chrome session as Safari, which breaks the one job the list has.

**The scrollbars were UI, not affordance.** The platform default is a wide,
high-contrast bar with arrow buttons — chrome designed for a document, competing
with the links beside it in a 16rem rail. Both syntaxes are shipped because
neither is enough alone: `scrollbar-width` is all Firefox honours, WebKit and
Blink only respond to the pseudo-elements. The thumb is drawn from `--border` so
it follows the theme rather than turning invisible on a dark background.

### Stage 9 — the reference application and the benchmark harness — **done**

This is where the kit stops being judged by its own tests and starts being
judged against the system it replaces.

| Item | Notes |
|---|---|
| Five tenants, domains resolving | `acme` 250k clients, `zenith` 25k, `orbit` 2.5k, `nova` 200 + a custom domain, `atlas` 25k on a dedicated database. |
| Seeder, chunked and resumable | 5,000-row bulk inserts, non-uniform distributions (uniform data hides index problems), timestamps spread over 24 months. Under 10 minutes for `acme`. |
| `panel:benchmark` | `--tenant=acme --runs=3 --json`. Warm runs, medians, machine-readable so runs are comparable and can gate a build. |
| The twelve Phase-1 surfaces | Clients list/detail/form, Invoices, Active Clients (live), Dashboard (20 widgets), Rewards workspace, Portal Settings, Routers, Tenants (central), Platform Health, Client dashboard + live traffic. |
| Cross-portal journey, timed | Admin → super admin → back → client portal, as one user with three roles. The single number that says whether the whole thing feels fast. |

### Correction round 3 — the plugin inventory, and Laravel 13's first-party surface

Requested mid-Stage-9 after reviewing `filamentplugins.md`. Recorded here before
Stage 9 continues, so the remaining stages are planned against what Laravel 13
and its official packages actually ship rather than against what we would
otherwise hand-roll.

**Everything below was verified against the installed tree, not recalled.**
`php artisan --version` reports 13.22.0; the package list comes from
`vendor/laravel/` and `composer show -a`.

#### What the 25 plugins map to today

Sixteen are already done, and mostly were free — the architecture gave them away
rather than us porting them.

| Plugin | State in PanelKit |
|---|---|
| filament/filament | The whole project. In progress. |
| pxlrbt/filament-excel | **Done.** Queued export of the current filtered view. |
| spatie-settings-plugin | **Done.** Settings workspace. |
| media-library-plugin | **Done.** FileUpload, Tier 2. |
| unsaved-changes-modal | **Done.** Dirty tracking in the form composable. |
| prevent-outdated-record-update | **Done.** `_updated_at` optimistic lock. |
| badgeable-column | **Done.** A column variant, not a feature. |
| filament-announcements | **Done.** Alerts + topbar bell. |
| anselmokossa/filament-changelog | **Done.** What's new. |
| harvirsidhu/filament-cards | **Done.** `@panelkit/ui` primitives. |
| gheith3/filament-relation-pages | **Done.** Relation managers, Tier 2. |
| andreia/filament-ui-switcher | **Done.** Per-user appearance. |
| marcelweidum/filament-passkeys | **Done**, on `laravel/passkeys` — FIRST-PARTY, not Spatie. |
| eslam-reda/filament-copilot | **Shell done** (chat, Stage 8). The agent is not built. |
| tapp/country-code-field | Partial. Phone handling exists; no dial-code picker. |
| sitemap-generator, filament/upgrade, larecipe | Not applicable. Docs are Scalar + the Help centre. |

Nine are genuinely outstanding, and one of them is much larger than the table
suggests:

| Gap | Notes |
|---|---|
| **bezhansalleh/filament-shield** | **The big one, and it is not a UI gap.** PanelKit authorises through native Gate + Policy, deny-by-default, with a warning when no policy is registered. That is the *enforcement* half and it is the right half to have built first. What does not exist at all is the *administration* half: no role model, no `{action}_{resource}` permission names, no matrix screen. Today permissions are code; there is no way for an operator to grant one. |
| ~~asmit/resized-column~~ | **Dropped, not deferred.** Free to build, and still not worth the stored per-user width. Hide/show covers it. |
| jacobtims/filament-logger | Stage 11 (audit trail). Nothing logged yet. |
| yebor974/renew-password | Not started. Belongs in the Security module, not as its own thing. |
| l3aro/filament-turnstile | Not started. Zero references. |
| shuvroroy/spatie-backup | Not started. Note: **no Spatie package is installed at all.** |
| geo-sot/env-editor | Not started, and should stay that way — see below. |
| **Magic link / passwordless** | Requested. Not in the md's 25; added from the link at its end. Must be **toggleable in settings**, off by default. |

#### The duplicates you spotted — there are nine

The md counts packages, not capabilities, so several entries are the same thing
under different vendors. Collapsing them is what makes the remaining work small:

1. **badgeable-column** is Filament's own `->badge()`. The md admits this. Not a feature — a column variant.
2. **resized-column** duplicates TanStack Table, which we already ship.
3. **filament-cards** duplicates shadcn/reka primitives, already in `@panelkit/ui`.
4. **ui-switcher** duplicates a `data-theme` attribute and a cookie.
5. **country-code-field** is subsumed by `PhoneField`, which needs dial codes anyway for E.164.
6. **announcements** and **changelog** are one component in two placements — a banner and a feed over the same content.
7. **passkeys**, **renew-password** and **turnstile** are three plugins for one **Security module**. Splitting them is what produced three settings screens in the old app.
8. **larecipe**, the Help centre and the API docs are three documentation systems. We have two (Scalar for API, Help for product) and that is one more than the md assumes.
9. **filament-copilot** is the chat *shell* only — the same shell Stage 8 already built. The md is explicit that the AI logic was never in it.

So: 25 packages, ~14 distinct capabilities, 9 outstanding.

#### What Laravel 13 gives us that we are currently hand-rolling

Verified present in `vendor/laravel/framework/src/Illuminate/`:

| Component | What we should use it for |
|---|---|
| **`Illuminate\JsonSchema`** | New in 13, and directly on our critical path. `ApiReferenceController` hand-builds OpenAPI 3.1 from the resource registry, and the schema layer hand-rolls its own contract. The AI SDK's structured output uses this exact component, so adopting it once serves the API docs, form validation AND future agent tools with a single vocabulary. |
| **`Illuminate\Concurrency`** | Fork/process drivers. The reference seeder writes 250k rows single-threaded; `panel:benchmark` runs surfaces in series. Both are embarrassingly parallel. |
| **`Illuminate\Image`** | First-party image manipulation. Logo and avatar resizing without pulling in Intervention or Spatie's media library. |
| **`laravel/wayfinder`** | **Already installed and mostly adopted** — 100 generated files, 22 Vue files importing them, 7 still hand-writing URL strings. NOT in the framework core; a separate first-party package, already a dependency here. The remaining 7 are the whole job. |
| **Gate + Policy** | Already our authorisation. Keep. No Spatie permission package. |
| **`RateLimiter` / `throttle`** | Already used for login, 2FA, passkeys and the lock screen. Extend to panel writes and export/import jobs. |
| **`Context`** | Tenant id into logs and queued jobs, so a job's tenant is recoverable from a log line. |
| **`laravel/fortify`, `laravel/passkeys`** | Already carrying auth, 2FA and WebAuthn. Renew-password and magic link belong here, not in new packages. |

#### AI: what Laravel 13 actually offers

**The framework core ships no AI.** There is no `Illuminate\Ai`; the component
list runs Auth through View with nothing between. What exists is an official
SEPARATE package, documented at `laravel.com/docs/13.x/ai-sdk`:

    composer require laravel/ai

- **`laravel/ai`** — agents, tools, structured output, streaming, embeddings,
  images, TTS/STT, against OpenAI, Anthropic, Gemini, Bedrock, Ollama and more.
- **`laravel/mcp`** — exposes a Laravel app as an MCP server.

Neither is installed here. On stability the two signals disagree, and both are
worth stating: the packages are tagged **0.10.1 / 0.9.1**, while the 13.x docs
present the SDK as a finished product with no stability warning. Pin an exact
version regardless — a caret range against a 0.x tag is the one combination that
can break the build with no change of ours.

**Recommendation: yes — use `laravel/ai` rather than a custom agent.** Reading
the documentation strengthens this rather than merely permitting it, for four
reasons specific to what PanelKit already is:

1. **`Illuminate\JsonSchema` is the SDK's own schema vocabulary.** Structured
   output is declared as `schema(JsonSchema $schema)` with
   `$schema->integer()->min(1)->max(10)->required()` — the same first-party
   component recommended above for OpenAPI and the resource contract. So ONE
   vocabulary can serve form validation, the API docs and the AI tools. A
   custom agent would have needed a second one.
2. **Human tool approval is built in.** The SDK supports pausable agents that
   stop for approval before a sensitive operation. That is a better answer than
   the one planned here for "suspend this subscriber", and not worth rebuilding.
3. **Queueing and broadcasting are native to it**, which lands on Stage 10's
   Reverb work rather than beside it.
4. **Prompt middleware** is the right place for per-tenant metering, rather than
   wrapping every call site.

Two constraints it imposes, recorded now so they are not discovered later:

- **Conversation storage is tenant data.** `RemembersConversations` and
  `forUser()` persist conversations to their own tables, which arrive by
  `vendor:publish` with no tenant column. They need `tenant_id`, the global
  scope, and a row in the isolation matrix before a single conversation is
  written — a chat history is among the most sensitive things in the panel.
- **RAG wants pgvector.** Embeddings and similarity search are documented
  against `pgvector`, which SQLite does not have. This blocks neither agents nor
  tools; it does mean retrieval sits behind the Postgres decision Stage 3
  deferred. Worth knowing before anyone plans on RAG.

It still goes in as its own stage, after the permission work it depends on —
consistent with the standing rule to install only what the current stage needs.

#### Decisions taken here

- **`.env` editor: not rebuilt.** A form that writes arbitrary environment
  variables is a remote code execution primitive wearing a settings page — a
  `.env` write can repoint the database, disable the tenant scope, or swap the
  app key. If operators need to change values at runtime, they need a **curated
  Platform Config** with a fixed allow-list and an audit entry per change. The
  md recommends this; recording it as decided.
- **Permissions stay on Gate + Policy.** Shield's value was never the gate, it
  was the *naming convention and the matrix*. We add those on top of policies
  rather than adopting a permissions package.
- **Magic link ships disabled.** Passwordless email login is a full account
  takeover primitive if the mail account is compromised, so it is a per-tenant
  setting that is off until switched on, and it is recorded in the audit trail.

**639 tests, 631 passing, 8 skipped.** Five tenants spanning four orders of
magnitude: 250,000 / 25,000 / 2,500 / 200 shared, plus 25,000 on a database of
its own. Two new commands, and between them they found four faults that every
existing test passed through.

#### The measurements

Keyset pagination does what it was built to do — **the first page costs the same
at 250,000 rows as at 200**:

| Tenant | Rows | First page | Deferred total |
|---|---|---|---|
| nairobi-fibre | 250,000 | 0.44 ms | 17.50 ms |
| coastline-isp | 25,000 | 0.45 ms | 1.55 ms |
| rift-valley-net | 2,500 | 0.47 ms | 0.49 ms |
| lakeside-broadband | 200 | 0.48 ms | 0.23 ms |

The count is the only figure that scales with the table, which is precisely why
it is deferred and never sits in front of the rows.

A fifteen-hop signed-in journey over real HTTP: **63.6 ms total** on the 250,000
-row tenant, no hop above 6.4 ms.

#### The finding that matters most: a dedicated database made things WORSE

Two tenants of exactly 25,000 subscribers. The shared one loaded its first page
in 0.45 ms; the dedicated one took **9.65 ms**, and a status filter went from
0.44 ms to **29.62 ms**.

Every index in the schema leads with `tenant_id`, which is exactly right in
column mode because every query carries `where tenant_id = ?`. In a dedicated
database the panel correctly DROPS that predicate — and an index cannot serve an
ORDER BY when its leading column is unconstrained. So all six indexes became
unusable at once: `SCAN clients` plus `USE TEMP B-TREE FOR ORDER BY`, a full scan
and a full sort, on every page.

**Who this hits is the point.** A tenant is moved to their own database because
they are the largest, or because isolation was promised in a contract — the
upgrade is sold partly as a performance improvement, and it delivered the exact
opposite to the customer least able to absorb it. Silently: correct data, HTTP
200, nothing in any log.

`panel:reindex-tenant` creates sibling indexes without the redundant leading
column, and refuses to run on a shared connection where the originals are the
right ones. Parity restored — 0.39 ms first page, 0.49 ms filter. The regression
test asserts the QUERY PLAN rather than the existence of an index, because the
original schema had six perfectly valid indexes on that table and used none.

#### And the one that was worse in kind: dedicated tenants saw nothing at all

Resolving a tenant for the column scope is **not** the same as initialising
tenancy. A dedicated tenant is isolated by the CONNECTION, the connection is only
switched by a bootstrapper, and the bootstrapper only runs on
`tenancy()->initialize()` — which nothing was calling. So that tenant signed in,
every page returned 200, and every page queried the CENTRAL database where its
25,000 subscribers do not exist.

An empty list. Not an error, not a warning — the customer who paid for a
dedicated database logs in and sees they have no subscribers.
`InitializeTenancyForUser` closes it, after authentication because the tenant is
a property of the user.

Also fixed: stancl's own `DatabaseTenancyBootstrapper` switches for EVERY tenant
unconditionally, so hybrid mode could be described but never run.
`ConditionalDatabaseBootstrapper` asks the tenant first. And `db_name` was held
in a plain array on the model, so it was null on every fresh request and every
tenant resolved as column-scoped; it is now a persisted column, with a test that
reloads the model — proven to fail without the fix.

#### The notification bell: 303 ms, eight queries

`panel:benchmark` could never have found this, because notifications are not a
resource. The journey found it immediately: every hop 3–6 ms except the bell.

Its own comment claimed "every rule is ONE bounded query". None were bounded —
each read `->count()`, and the expiry rule matched 84,846 rows. The right index
took it to 185 ms and no further, because the cost was never the lookup: an exact
count of 84,846 rows costs 84,846 steps however good the index is. Capping at 500
took it to **9.0 ms**, and the whole journey from 355.7 ms to 63.6 ms. "500+" and
"84,846" prompt the same action.

#### Methodology notes worth keeping

- **The journey's first run reported fifteen hops, all inside budget, all HTTP
  409.** Inertia answers a request with no version header by telling the browser
  to reload — a real response, arriving in 5 ms, that is not a page. The status
  column caught it on the first run, which is the only reason any of these
  numbers mean anything.
- **`--tenant` is mandatory, with no default.** "Measure whichever tenant is
  first" produces figures nobody can reproduce.
- **The filter surfaces measured nothing at first.** The sampler called
  `resolveOptions()`, which does not exist; every filter got null, the parameter
  was discarded, and four rows silently duplicated the unfiltered page. The value
  is now in the label, so a sample matching nothing is visible rather than fast.
- **Four tenants 404'd on record hops, and the panel was right** — the command
  had picked the first client globally. Reassuring rather than alarming: it
  showed cross-tenant record access refused over real HTTP, four times running.

#### A third latent fault, exposed by fixing the second

`CacheTenancyBootstrapper` was **configured and inert**. Its config comment calls
tenant-tagged cache "a correctness property, not an optimisation" — and because
nothing ever initialised tenancy in a web request, it had never once run. The
panel's cache was not tenant-isolated at all: a memoized count or a cached schema
could be served to the wrong organisation, exactly what the comment said was
prevented.

Turning tenancy on turned the bootstrapper on, and one test broke — which is how
it was found. The test wrote a job token to the cache outside tenancy and read it
back through an HTTP request inside it, so the key missed and the endpoint 404'd.
Worse, its sibling assertion then **passed for the wrong reason**: "another user
cannot read this job status" was satisfied by the entry not being found at all,
not by the ownership check. A hollow test, by this project's own standard.

Both now hold one tenancy context across setup AND request, and assert that the
OWNER succeeds — which is what makes the refusal a refusal rather than a missing
file. **639 of 639 pass, with none skipped**; the eight previously skipped were
waiting on tenancy actually being initialised.

#### Cost paid — **retracted, there is none**

This section first reported that `InitializeTenancyForUser` roughly doubled the
journey, 60.9 ms to 121.0 ms, and filed the lookup as something to optimise
later. **That was a false finding, and the method that produced it is the one
this file spends pages warning against: a single reading, taken once, on a
machine that had just written several hundred thousand rows.**

Measured properly — the middleware isolated, then the journey run repeatedly
with it enabled and disabled:

| | Journey |
|---|---|
| With the middleware | 59.5 / 59.7 / 59.6 ms |
| With it commented out | 62.0 ms |
| The middleware itself | 0.22 ms per request (0.16 of it the tenant lookup) |

There is no regression to optimise. It costs two queries per request and roughly
a fifth of a millisecond, which is within the run-to-run spread — the first of
the three readings above was 74.5 ms for no reason but machine noise, which is
precisely why `panel:benchmark` takes a median of several warm runs and why
quoting one number was wrong.

Recorded rather than quietly deleted, because publishing a 2x regression that
did not exist is the same failure as missing one that did.

#### Carried forward

The twelve Phase-1 surfaces are covered as far as they exist. The **cross-portal
journey (admin -> super admin -> client portal) is NOT done**: there is no role
system in the playground — permissions are policies, with no roles to switch
between — so "one user with three roles" has nothing to express. It moves to
Stage 9b, behind the permission matrix, rather than being faked.

### Stage 9b — the plugin gaps and Laravel 13 adoption — **in progress**

Slots after Stage 9's measurement work, before Reverb.

| Item | Notes |
|---|---|
| **Roles and the permission matrix** | `panel:permissions sync` generating `{action}_{resource}` from the registry, a role model, and a matrix screen. Policies keep enforcing; this only decides what a role holds. The isolation matrix gains a role dimension. |
| Wayfinder: the last 7 files | Corrected scope — it is already adopted in 22 of 29. Seven files still hand-write URLs, including `Security.vue` calling `/settings/devices/{id}` when `DeviceController::destroy` is ALREADY generated as a typed helper. A renamed route should fail the build, not the page. |
| `JsonSchema` for OpenAPI and the schema contract | Delete the hand-built OpenAPI writer. |
| Feature request / bug report modal | Requested. From What's new, and from a global affordance. |
| Security module consolidation | **Partly done.** Magic link and OTP reset built (14 tests). Password renewal policy and Turnstile still outstanding. |
| Platform Config | The narrow allow-list, instead of an `.env` editor. |
| Backups page | Trigger, list, download. Needs a backup library chosen first — none is installed. |

**668 tests, all passing.** Two items done: the feedback modal, and the
permission matrix — the largest gap in the whole plugin inventory.

| Item | State |
|---|---|
| ~~Feature request / bug report modal~~ | **Done.** Tenant-scoped `feedback` table, context captured and SHOWN before sending. |
| ~~Roles and the permission matrix~~ | **Done.** `panel:permissions`, roles, `manage_roles`, matrix screen, create/delete. |
| ~~Users screen~~ | **Done.** `UserResource` — one PHP file, no Vue. Roles are assignable, which is what makes the permission work real. |
| ~~User management, one screen~~ | **Done.** Two tabs under the account menu; the users tab embeds the resource rather than copying it. |
| ~~First user and first role protected~~ | **Done.** By age, not a flag. |
| Wayfinder: the last 7 files | Not started. Scope corrected — 22 of 29 files already use it. |
| `JsonSchema` for OpenAPI | Not started. |
| Security module consolidation | Not started. |
| Platform Config | Not started. |
| Backups page | Not started. |

#### The permission layer

Authorisation was already deny-by-default through Gate and Policy; what did not
exist was any way for an operator to grant anything. Now: `roles` (tenant-scoped,
permissions as JSON), `users.role_id`, ability names DERIVED from the resource
registry, and a matrix screen.

**Deny-by-default was kept, and it cost 129 test failures the moment it landed** —
every existing suite had users with no role. That is the correct failure: the
alternative, treating a missing role as unrestricted, works during development
because nobody has a role yet and then silently grants everything to any account
that slips through provisioning. `UserFactory` now assigns an Administrator role,
which says what those suites already meant.

**`manage_roles` is a separate ability**, not something implied by being an
administrator. The matrix can grant itself anything, so it has to be withholdable
from somebody who otherwise has full access to every subscriber — operations and
administration are different jobs.

#### One screen, and two things that must always survive

Requested: roles and users under one "User management" entry below Settings,
with a tab each. They had been two unrelated places — one under settings, one
under the resource routes — so granting somebody access meant knowing that two
screens in different sections had to agree. They are one job.

The users tab **embeds `UserResource`** rather than reimplementing it: the
resource already owns the columns, the tenant constraint, the policy and the
forms, and a second users table would be a second copy of all four, free to write
and expensive the first time they disagree.

**THE FIRST ACCOUNT AND THE FIRST ROLE CANNOT BE DELETED.** The failure they
prevent has no in-panel recovery, which is what separates it from ordinary
destructive actions: an administrator can delete every OTHER account and then
leave, or delete every role, and each individual step looks deliberate and
reasonable. The end state is an organisation whose data is intact, whose panel
runs perfectly, and which nobody can open — fixable only from a console on the
server.

Protection is **by age, not by a flag**. A flag can be cleared, and it would be
cleared at exactly the moment somebody is doing something drastic; "the oldest
row" cannot be turned off. It is also per tenant — a global `orderBy('id')` would
protect one account across the whole installation and leave every other tenant
able to empty itself, which is the kind of nearly-right that tests exist for.

A third instance of the same bug appeared while writing it: `Role::isProtected()`
used the tenant-scoped query, so with no tenant initialised the scope denied, the
lookup returned null, and the role reported itself unprotected. That is the
identical fault already fixed in `User::hasPermission()` — **a guard must not
depend on ambient state**, because the same object then answers differently
inside a request, a console command and a queued job with nothing at the call
site to explain why.

#### Managing users, and three more faults

Asked mid-stage: "why can't I create a new role, and where do I manage users?"
Both were real gaps — a matrix with no way to add a role, and roles with nobody
to assign them to. `UserResource` is **one PHP file with no Vue**, which is the
kit's central claim exercised on a deliberately awkward model: a hashed password,
a relation to a tenant-scoped table, and a record you can lock yourself out with.

**A cross-tenant leak, found the moment the screen existed.** `User` was the only
tenant-owned model without `#[ScopedBy(TenantScope)]`, and nothing had ever
listed users, so nothing had ever noticed. The first load showed all seven
accounts across five tenants. It cannot simply take the scope either: sign-in
looks a person up by email BEFORE any tenant exists, and the scope denies on a
null tenant — so adding it would make login impossible. The constraint lives on
the resource instead, and the isolation matrix now covers it.

**The test suite was deleting application source files.** `GeneratorTest` used
`app_path('Panel/Resources/UserResource.php')` as its fixture and removed it in
both setUp and tearDown. Writing a real `UserResource` put a real file at that
path, and the suite destroyed it — twice, plus `UserPolicy` once — while
reporting 668 passing. Nothing failed; the panel just stopped having a users
screen, and the second disappearance was only caught because a route 404'd.

A test may own a path for the length of a test. It may not own it permanently.
The fixture paths are now preserved and restored, so the generator can be tested
against the real tree without eating whatever is already there.

**The keyset tiebreaker was never qualified.** `ListQuery` ordered by the raw key
column, which is `id` unless a resource says otherwise — so the first table to
declare a JOIN produced `ambiguous column name: id`, with nothing in the message
pointing at the tiebreaker. A `qualifiedKey()` helper already existed two hundred
lines away and was used everywhere except there.

Two smaller additions came out of it: `Field::omitsFromStorage()`, which is
distinct from transforming to null — omission keeps the stored value, null
destroys it — and `PasswordField`, which uses it so a blank password means
"unchanged" rather than "erase the account's password because somebody fixed a
typo in a name".

#### Four faults found while building it

**The sync command was half a reconciliation.** It pruned ability names that no
longer existed and never granted ones that newly did — so adding `manage_roles`
locked every administrator out of the screen that manages it. Caught by the
screen 403ing at me. Fixed with an explicit `grants_all` column rather than
inferring superuser status from a slug, because a role should not become a
superuser by being renamed.

**The matrix would have lied.** A `grants_all` role grants everything regardless
of its array, so the checkboxes would have shown abilities being unticked while
the role went on granting them. Both the screen and the endpoint now refuse to
edit such a role and say why.

**`hasPermission()` was an N+1**, asked seven times per resource per page to
decide which buttons exist. The query-count guard caught it.

**And it depended on ambient state.** Loading the role through the tenant-scoped
relation made the answer depend on whether tenancy happened to be initialised —
permitted inside a request, denied inside a console command, for no reason
visible at the call site. It now reads the role unscoped and compares `tenant_id`
explicitly, which is the guard that was doing the work anyway.

#### Mutation results, and two hollow tests

Removing the permission gate entirely is caught by **five** tests. Getting there
took two corrections:

- `test_a_read_only_role_cannot_update` originally sent `['name' => 'Renamed']`,
  which is invalid — so the endpoint redirected with validation errors and the
  test passed whether or not authorisation was consulted. It now sends a payload
  the endpoint would accept, leaving exactly one thing that can stop it.
- In `FeedbackTest`, making the identity columns fillable left **all eleven tests
  green**: `$request->validate()` returns only declared keys, so `tenant_id`
  never reaches mass assignment and `$fillable` was not the guard the tests
  claimed to prove. What each test actually establishes is now recorded in the
  file — `status` and `severity` are real guards, `tenant_id` and `user_id` are
  structural via `forceFill`.

#### Also cleared before starting

- **The Stage 9 "cost paid" was retracted** — see that section. A single reading
  reported a 2x regression that repeated measurement shows does not exist.
- **Orphaned users are adopted by the seeder.** A re-seed nulls `users.tenant_id`
  via the foreign key, and a null tenant is a DENY signal — so the account logs
  in fine and every page renders empty. That is indistinguishable from data loss,
  and it happened here.

### Correction round 4 — the Spatie decision, revisited

Challenged directly: *"why didn't we just use Spatie, and did we make the right
decision?"* The honest answer is **partly not**, and the reasoning recorded
earlier was true but incomplete.

**What holds.** The valuable part — deriving `{action}_{resource}` from the
resource registry, the matrix screen, `panel:permissions sync` with pruning — is
needed on top of ANY permission store. Spatie does not provide it; Filament
Shield exists precisely because Spatie does not. Deny-by-default through Gate and
Policy is orthogonal, so policies were being written either way.

**What does not hold.** The stated reasoning — "Shield's value was the naming
convention and the matrix" — understated what the underlying package gives, and
the panel also rebuilt the part Spatie DOES provide, worse in one concrete way:

> **`users.role_id` is a single `belongsTo`. One role per user.**

Spatie supports multiple roles AND direct permissions granted outside any role.
"Grace is Support and Billing" is an ordinary requirement this design cannot
express — it forces a combined role, then another for every combination. That is
not a trade that was weighed and chosen; it was not considered.

Spatie also brings permission caching, multiple guards, wildcard permissions, and
a teams feature that maps onto tenancy.

**Migration is bounded**, because the ability names already follow Spatie's
convention: swap the storage (`roles.permissions` JSON for Spatie's tables), keep
`Abilities`, the sync command and the matrix, point `hasPermission()` at
`hasPermissionTo()`. Roughly a day, mostly mechanical, and it removes the
one-role limitation. **Left as the user's decision** rather than assumed, because
it touches authorisation.

### The Spatie migration — done

Decided and carried out. `spatie/laravel-permission ^8.3` with the **teams**
feature and `team_foreign_key => 'tenant_id'`. **761 tests green**, journey and
query counts unchanged (dashboard 4, list 5).

**Three migrations, deliberately separate.** Rename `roles` →
`panel_legacy_roles`; create Spatie's tables (with `grants_all` added to
**roles**, not `permissions`); copy the data across idempotently. Dropping came
later, in its own migration, so the first deploy was not the point of no return
and every original row stayed readable while the new stack ran. Step 3 then
dropped the legacy table **and `users.role_id`** — the other half of the old
model, and a second stale answer to "what may this person do" that nothing
updated and something would eventually read.

**36 permissions, 6 roles, 180 role-permission links, 7 assignments** preserved.
The reverse migration was **run**, not just written: it rebuilds both from the
Spatie tables with ids intact, and loses only the second role of anyone holding
more than one — stated in the file, because that is a reason to think before
rolling back rather than a footnote.

**What the move broke, and how it was caught.**

> **`Role::query()` stopped being tenant-scoped, and nothing said so.**

The hand-rolled model carried a tenant global scope. Spatie's does not: teams
confines permission *checks* through the registrar and puts no scope on the
model, so both screens that LIST roles silently began returning every
organisation's roles to every organisation's administrator. It returned 200 and
looked right — the recurring failure mode of this project.

**A global scope is not the fix.** The registrar eager-loads roles through
Permission and caches the result for the whole installation at once, so a scoped
load would fill a shared cache from whichever tenant warmed it first and serve it
to everyone. The scoping has to live at the query, so what protects it is a test
at the query — `RoleListScopingTest`, mutation-tested by deleting the `where` and
confirming both cases fail.

The headcounts had the same shape: `$role->users()` filters the pivot by the
registrar's **ambient** team id, so it reports zero for every role whenever the
middleware setting it has not run — an empty-looking organisation rather than an
error. Replaced with a declared subquery naming the tenant. *(Third time this
lesson has been paid for: **a guard must not depend on ambient state.**)*

**Other repairs.** `grants_all` returned true for any string, so a typo'd
ability passed for administrators and failed for everyone else — restricted to
the registry. `hasPermission` was an N+1, now memoized. The factory's
`roleless()` was a silent no-op, because Spatie's `detach()` is team-scoped and
matches nothing with no team set — it writes the pivot directly, and the test now
asserts against the pivot rather than the dropped column. `is_default` on roles
became dead on the new schema; the concept was already "the oldest role", which
is what `isProtected` means, so both screens now show one fact under one label.

**The three constant-query-count guards failed, and were right to.** Spatie adds
three one-time relation loads per user instance, so the first measurement paid
them and the second did not — a fixed difference of 3 with nothing to do with row
count. Fixed with a **discarded warm-up of the page being measured**, the
methodology `panel:benchmark` already uses; warming with `/dashboard` was not
enough because it runs different permission checks. **The threshold was not
relaxed**: re-injecting a real N+1 still fails all three.

### Password reset: link or code, and passwordless sign-in

Requested: the developer chooses OTP or reset link, plus magic-link login.
**14 tests, almost all refusals.**

`panel.auth.password_reset` is `link` (Laravel's default) or `otp`. Both are
offered because **the right answer depends on the audience, not on which is
better**: a link is fewer steps and fails badly wherever mail is read on a
different device from the browser — ordinary on shared office machines, which is
exactly what an ISP back office runs — while a code survives that and is easier
to phish, since somebody can be talked into reading six digits down a phone.
Neither is the safe choice; they fail differently.

**Magic link is off by default**, and that is the most important line in it: it
makes the mailbox a complete account takeover path, with no second factor between
an intercepted email and a session. When disabled the routes **404 rather than
403** — a 403 still advertises that the capability exists.

Both share `OneTimeCredential`, because they are the same thing wearing different
clothes: something emailed to an address, redeemable once, within minutes. Two
implementations would be two places to get expiry, single-use and hashing wrong.

Decisions worth keeping visible:

- **Tokens are stored hashed.** A magic-link token in plain text is a
  password-equivalent sitting in a table that gets backed up and read by support
  tooling.
- **Single use is enforced by DELETION, not a flag.** A `used_at` column leaves
  the row present and makes every later check depend on remembering to test it.
- **The code is spent BEFORE the password rules run.** Validating the password
  first would let somebody test codes for free by submitting a deliberately
  invalid password — the request fails validation, the code is never consumed,
  and they try the next one.
- **A reset clears `remember_token`.** A reset is usually a response to suspected
  compromise, and leaving it alive keeps whoever prompted it signed in.
- **Neither endpoint reveals whether an address exists**, including a dummy hash
  check on the miss path so a wrong address costs the same time as a wrong code.
- **The magic link needs BOTH a valid signature and an unspent token.** A
  signature alone is replayable until it expires, which is exactly the window an
  attacker with mailbox access wants.

#### `Mail::raw` is not assertable, which is a reason not to use it

The first version emailed with `Mail::raw`. `Mail::fake()` records mailables and
does **not** record raw sends — so there was no way to assert the message was
sent at all, and a reset that stores a code and silently never emails it would
have passed every test. That is the exact failure shape this project keeps
finding. Replaced with a small `AuthCodeMail`, which is better production code
anyway: nobody can restyle a string concatenated inside a controller.

### Stage 9c — hostname tenancy, and the strain test — **done**

Requested during Stage 9. **This is a correction to the architecture, not an
addition to it**, and it is worth being blunt about why.

**684 tests passing.** The tenant now comes from the HOSTNAME, before anybody
signs in — and the strain test found a leak that nothing else could have.

#### The leak the negative journey found

`panel:journey --negative --host=…` signs in as somebody from ANOTHER
organisation and walks the same fifteen hops against a tenant's host. On its
first meaningful run, **all fifteen returned HTTP 200**. A user of one
organisation, arriving on another organisation's host, was served that
organisation's data in full.

**Nothing checked that the acting user belongs to the resolved tenant**, because
under the old user-based resolution it was tautological — the tenant WAS the
user's tenant, so they could not disagree. The moment the hostname decides
instead, they can.

Neither existing guard caught it, and the reason is the same for both: the
policies ask `hasTenant()`, which is "is a tenant resolved", not "is it yours";
and the global scope constrains to the current tenant, which was the target.
Both were working exactly as designed and both were answering the wrong
question.

`ScopeSessionToTenant` now refuses it. The ordering matters and was wrong first:
the user check ran before the session logic, so a stale cross-tenant session was
404'd but never emptied — the other organisation's session data stayed in the
store. Session first, then user.

#### The three blockers, cleared

| Was | Now |
|---|---|
| `users.email` globally unique | unique per `(tenant_id, email)` — one person can hold accounts at two organisations |
| `password_reset_tokens.email` PRIMARY KEY | keyed per `(tenant_id, email)` — two tenants can have a pending reset for one address |
| `SESSION_DOMAIN` about to be widened | cookie NAMED per tenant, domain forced host-only, and a stamped-tenant check that survives somebody widening it anyway |

The email change forces the other half: an email alone no longer identifies
anybody, so `TenantUserProvider` scopes the credential lookup to the resolved
tenant. Without it, the person typing into one organisation's login form could
be authenticated as another's account with the same address — which is the
precise reason per-tenant login pages need per-tenant identity rather than just
per-tenant branding.

#### Two defences on the session, not one

The cookie NAME is per tenant, so two hosts do not read the same cookie — that
makes the ordinary case correct. It is configuration, and can be undone by
configuration. So the session also records which tenant it belongs to and is
flushed and regenerated if it ever arrives somewhere else. Defence 1 handles the
common path; defence 2 is what survives the `SESSION_DOMAIN=.example.test` that
somebody will eventually add to stop being logged out between subdomains.

#### The command refuses a meaningless run

`--negative` without `--host` now fails outright. Without a host the tenant is
resolved from the signed-in user, so "somebody who does not belong here" is
somebody browsing their own organisation, every hop correctly returns 200, and
the command reported fifteen catastrophic leaks that did not exist. A security
tool that cries wolf is worse than none — the second time, it is ignored.

#### Measured

| | |
|---|---|
| Positive journey, on the tenant's host | 66.1 ms, 15 hops |
| Negative journey | 20.4 ms, **every hop refused** |

#### What exists today, stated honestly

*(Written before the stage; kept because the reasoning is what drove it.)*

The panel resolved the tenant **from the authenticated user**, after login. The
five reference domains were seeded into the `domains` table and **nothing read
them**. Everybody shared one login page, and which organisation you were was a
fact discovered *after* you proved who you were.

That was never stated as the target. It is what the panel grew into, and it was
the wrong model for a SaaS.

#### Why this is a bigger change than "add a middleware"

The two models differ in WHEN the tenant is known, and everything follows from
that:

| | User-based (today) | Hostname-based (target) |
|---|---|---|
| Tenant known | after authentication | **before** it |
| Login page | one, shared, unbranded | one per tenant, branded |
| Identity | a user has one tenant | a user is scoped to a tenant |
| Attack surface | credentials are global | credentials are per-tenant |

Knowing the tenant *before* authentication is the entire point: it is what lets
the login page carry the tenant's branding, what stops one tenant enumerating
another's users, and what makes "the same person is an admin at two ISPs" a
representable fact rather than a constraint violation.

#### Three blockers found by inspection, before any code

These are not risks; they are present facts that will stop the first attempt:

1. **`users.email` is globally `unique()`.** So one person cannot hold accounts
   at two tenants — the second signup collides on an index. Per-tenant login is
   not possible until this becomes unique per `(tenant_id, email)`.
2. **`password_reset_tokens.email` is the PRIMARY KEY.** A reset token is
   therefore global to an address. Two tenants cannot have a pending reset for
   the same person, and the second request silently overwrites the first.
3. **`SESSION_DOMAIN` is unset.** Currently safe — the cookie is host-only —
   but the obvious "fix" when subdomains appear is to set `.panelkit.test` so
   the session is shared, and that single line makes one login valid on EVERY
   tenant's subdomain. It is a one-character-class change that turns the whole
   isolation story off, and it is the change somebody will make to stop being
   logged out when they switch hosts.

#### The strain test IS the deliverable

The custom domain was always in the plan as a routing case. Restating its
purpose, per the request: **it is there to break things.** The interface is not
production ready because it renders correctly; it is production ready when the
places it strains are known and fixed. So this stage is written as a list of
strain points to attack, not features to ship:

| Strain point | What we expect to break |
|---|---|
| **Session cookie scope** | Whether a session on `acme.panelkit.test` is accepted on `zenith.panelkit.test`. It must not be. This is the single highest-severity check in the stage. |
| **Same email, two tenants** | Signup, login, reset, and verification with one address at two tenants. |
| **Password reset and verification links** | A signed URL generated on one host, opened on another. Laravel's signature covers the path, not necessarily the host. |
| **CSRF / stateful domains** | Dynamic hostnames cannot be a static config array. A custom domain added at runtime must work without a deploy. |
| **Central routes on a tenant host** | `/tenants`, super-admin, platform health must 404 on a tenant domain. A tenant reaching the central panel is total compromise. |
| **Tenant routes on the central host** | The mirror case, and the one that gets forgotten. |
| **Cache and rate-limiter keys** | A throttle keyed by IP alone lets one tenant exhaust another's login limit. |
| **Custom domain + TLS** | The genuinely hard one. No wildcard certificate covers a customer's own domain, so this needs per-domain issuance. Out of scope to *solve* locally; in scope to prove the app does not assume a wildcard. |
| **Asset and Vite URLs** | Absolute URLs baked at build time break on any host but the one they were built for. |
| **Domain resolution cost** | A hostname lookup per request, on the central connection, in front of everything. Must be cached, and the cache must not outlive a domain change. |

#### How it is measured

`panel:journey` already walks fifteen hops and reports HTTP status per hop. It
gains a `--host=` option so the same journey runs against each tenant's domain,
plus a **negative journey**: the same hops against a host the signed-in user
does not belong to, where every one must fail. A negative journey that passes is
the finding.

The five-tenant estate already has the right shape for this — four subdomains
and one custom vanity domain (`portal.lakeside.test`), which is exactly the
asymmetry that catches code assuming `{tenant}.{ourdomain}`.

**Local DNS note.** `.localhost` hostnames resolve to 127.0.0.1 without touching
anything. A genuine custom domain does not, and the guardrails forbid changing
system configuration — so `portal.lakeside.test` is exercised by setting the
`Host` header directly, which is what the resolver reads anyway and is a
stricter test than a hosts-file entry.

#### Ordering

**Before Stage 12**, and before any claim that the interface is production ready.
A panel whose tenancy model changes after it is declared finished was not
finished. The isolation matrix and the hybrid-mode work already done are the
foundation this sits on; what changes is where the tenant comes from, not what
isolation means once it is known.

### Stage 10 — live updates, presence, and locking — **done**

**692 tests passing.** Secure channels are done — the security-critical half.
The Reverb *server* is not yet run against a live connection.

| Item | State |
|---|---|
| ~~Secure channels~~ | **Done.** Identity, tenancy and permission, all three checked. 8 tests, mostly refusals. |
| ~~Presence~~ | **Done.** Member payload is a name and an id, nothing more. |
| ~~Reverb, running~~ | **Done.** `laravel/reverb` ^1.11 installed, server running on 127.0.0.1:8080, broadcasts accepted. |
| ~~Event batching~~ | **Done.** 100 events, one render. 6 tests — the first in `@panelkit/ui`. |

#### Two findings, and the second one invalidated the first set of tests

**A tenant-scoped panel with an unscoped channel is a leak no HTTP test can
see.** Every other guard in this project sits on the HTTP path; a WebSocket
subscription is authorised once, by name, and thereafter the server pushes
whatever is broadcast there. A callback returning `true` for any signed-in user
would be a live feed of every organisation's data with all 692 other tests
green. So the channels check three things — identity, tenancy, and the *same
ability the list page requires*, because otherwise a read-only role gets live
updates for records the panel refuses to show it: the same data through a
different pipe.

#### Echo wired, and Redis behind the cache

Two integration gaps closed after Stage 10, both found by auditing what the
frontend actually connects to rather than what the plan claimed.

**Echo was never installed.** The server was running, channel authorisation was
refusing cross-tenant subscriptions correctly, and `useLiveUpdates` had a
complete broadcast driver — but `laravel-echo` and `pusher-js` were absent and
nothing set `window.Echo`. The composable warns and falls back to polling, which
is why this stayed hidden: **nothing was broken, it was just quietly polling.**
A correct fallback is what let an unfinished integration look finished.

Proven end to end rather than by config, using the same `pusher-js` client the
browser runs: connect to Reverb over a WebSocket, subscribe, broadcast from the
server, receive the payload. All four steps, in order.

**Redis is now the cache store, and that fixes a real limitation.** stancl's
`CacheTenancyBootstrapper` isolates tenants by TAGGING cache entries, and of
Laravel's stores only `array`, `redis` and `memcached` support tags — so on the
previous `database` store a tagged read threw, which is how it was found during
Stage 9b. Verified after the switch: tagging works, and tenant B no longer sees
tenant A's value under the same cache key. That isolation had never actually been
in force.

`panel:doctor` gained a check for it, since a cache that cannot tag under tenancy
is the same shape as every other entry in that command — the panel works, most
cache use is untagged and fine, and the isolation silently does not happen.

**One caveat worth recording.** The Redis on 6379 is bundled by the Cursor editor
rather than run as a system service, so it goes away when the editor does. The
panel keeps to its own key prefix (`panelkit_`) and database index (3) so nothing
collides, but a real deployment needs its own Redis.

#### Event batching was written, and was never measured

The coalescing already existed — a `Map` keyed by record id and a leading-edge
flush window. What did not exist was any evidence it worked, because
**`@panelkit/ui` had no tests at all**: every test in this project was PHPUnit,
so nothing client-side had ever been asserted. Vitest is now installed for that
package and this is its first suite.

**Getting the measurement right was most of the work**, and two earlier versions
measured the wrong thing in opposite directions. Both are the obvious way to
write the test, which is why both are recorded in the file:

- **A default watcher over synchronous patches measures Vue, not us.** Vue
  coalesces watcher callbacks within a tick, so a hundred patches applied in one
  loop fire it once whether or not anything batched them. Deleting the batcher
  entirely left **five of six tests green**.
- **`flush: 'sync'` overcorrects.** It observes every individual property write,
  so `Object.assign(row, {a, b})` counts twice and a two-row burst counts at
  least twice — with the batcher working perfectly. Three tests then failed
  against correct code.

The honest simulation is **separate ticks**: real events arrive as separate
WebSocket messages, which is exactly the case a batcher exists for and exactly
what a synchronous loop cannot reproduce. Each patch is awaited, and the count is
Vue's own per-tick coalescing.

Verified by mutation in both directions: **five of six fail** with the batcher
removed, all six pass with it. The sixth tests a different property — that a
record which is not on the page renders nothing at all.

#### The driver is now Reverb, and channel auth demonstrably runs

`BROADCAST_CONNECTION=log` was the standing problem `panel:doctor` reported on
every run. It is fixed by installing Reverb — Laravel's own WebSocket server,
which speaks the Pusher protocol, so `PusherBroadcaster` handles authorisation
and the channel callbacks are actually consulted.

**Proven by behaviour rather than by config**, because a doctor check that reads
a config string is weaker than the thing it stands for:

| Request, in the running application | Before (`log`) | Now (`reverb`) |
|---|---|---|
| Own tenant's channel | 200 | 200 |
| **Another tenant's channel** | **200** | **403** |
| **Unregistered resource** | **200** | **403** |

The test suite was moved from `pusher` to `reverb` at the same time, so it
exercises the driver the application actually runs — a suite testing one driver
while production uses another proves a guard that never runs.

The server itself is up and receiving: a `trigger` with the correct secret is
accepted, and one with a wrong secret raises `Pusher\ApiErrorException` — which
is what makes the first result mean anything rather than being a call that
silently went nowhere.

**With `BROADCAST_CONNECTION=log`, channel authorisation is inert.**
`LogBroadcaster::auth()` never consults the callbacks — it logs and returns, so
every channel authorises, including for a guest. That is the development
default, which means somebody can write a channel that authorises nobody
correctly and watch it work perfectly all the way to deploy.

The first version of this suite passed every refusal for exactly that reason.
Fixing it exposed a second, sharper trap: setting the driver inside `setUp()`
does not work either, because `Broadcast::channel()` registers callbacks on
whichever broadcaster exists at BOOT — switching afterwards builds a fresh one
with no channels on it, so everything is refused and the refusal tests pass
*again* for the wrong reason. Twice green, twice meaningless. The driver is now
set in `phpunit.xml` with `force="true"`, before the app boots.



| Item | Notes |
|---|---|
| Reverb, for real | The last open Tier 2 item. The composable and poll driver are proven; the broadcast driver has never run against a live connection. |
| Secure channels | Every subscription verifies identity, tenant and permission. A tenant-scoped panel with an unscoped broadcast channel is a cross-tenant leak that no HTTP test would catch. |
| Presence and soft locks | "Grace is viewing this invoice." Optimistic locking already exists (`_updated_at`); this is the warning that stops the conflict happening. |
| Event batching | 100 events must become one render, not 100. |

### Stage 11 — i18n, accessibility, and audit — **done**

**720 tests passing.** All four items complete.

| Item | State |
|---|---|
| ~~Audit trail~~ | **Done.** Who, when, before/after, redacted. 10 tests. |
| ~~Accessibility~~ | **Done.** Four real gaps found and fixed. |
| ~~Localisation and RTL~~ | **Done.** English + Arabic, direction derived. 9 tests. |
| ~~Session management~~ | **Done.** Device list existed; concurrent limits added. 6 tests. |

#### The audit trail's real job is redaction

An audit trail stores before-and-after values for every changed attribute — so
the moment somebody changes a password, an API key or a two-factor secret, the
trail contains it in plain text, in a table built to be kept for years, read by
more people than the original, and exported for compliance. **That is a worse
leak than the one auditing exists to detect, and it arrives silently and by
default.**

So `AuditRecorder` redacts before writing, matching sensitive names as
SUBSTRINGS — `password`, `new_password` and `password_confirmation` are covered
by one entry, where an exact-match list is a list somebody forgets to extend.
The field NAME is still recorded: "the password changed" is exactly what an
audit trail is for; what it changed *to* is not.

Three other decisions worth keeping visible. The actor's name is copied in at
write time, so a departed colleague is still named rather than appearing as a
blank six months later — which is precisely when the trail is read. There is
deliberately **no foreign key to the audited record**, because a cascade would
delete the evidence along with the thing it describes. And it fails quietly:
an audit write that threw would roll back the change it was describing, so a
misconfigured trail would stop the panel working.

#### The accessibility audit found four real gaps

Dialogs were already fine — reka-ui handles focus trapping and restore. What was
missing: no skip link, nothing honouring `prefers-reduced-motion`, **SPA
navigation completely silent to screen readers**, and nav links not marking the
current page. All four fixed.

Reduced motion is a medical setting rather than a preference — for somebody with
a vestibular disorder a sliding drawer causes real nausea, and this panel
animates the sidebar, every dialog, every sheet and every toast. It uses
`0.01ms` rather than `0s` because `0s` makes some browsers skip `transitionend`
entirely, and code waiting on one then hangs.

#### RTL is tested with a real language, not a toggle

Direction is **derived from the locale**, never stored beside it: offering "RTL"
as its own setting invites the two to disagree, and Arabic-rendered-left-to-right
is a state nobody wants and somebody eventually reaches.

It is exercised with actual Arabic rather than a direction switch, because
mirroring the layout while leaving the words in English hides every bug that only
appears when the text itself runs the other way. `Accept-Language` is
deliberately ignored — it reflects where the laptop was bought, so honouring it
silently flips a panel to a language nobody chose, and the setting that would fix
it is now written in that language.

#### Session limits end the OLDEST session, never the new one

Refusing the new login sounds equivalent and is much worse: the person is at the
keyboard now, and the session blocking them is one they cannot reach — a laptop
at the office, a phone that was reset. They would be locked out by their own past
self with no way to fix it.

Off by default, because a limit has real consequences for anybody legitimately
using a laptop, a desktop and a phone. It also needs a server-side session store;
with the cookie driver there is nothing to count, so it does nothing and
`panel:doctor` reports the combination — a configured limit that cannot work is
worse than no limit, because it is believed.

#### One compile trap worth recording

A comment placed between `v-else-if` and `v-else` breaks the chain: Vue requires
them to be ADJACENT siblings, and the whole component then fails to compile with
an error naming the file rather than the comment. `vue-tsc` passed; only the dev
server complained. The note now lives in the script block.



| Item | Notes |
|---|---|
| Localisation and RTL | Not started, and genuinely required for a SaaS kit. Layout mirroring covers navigation, tables, forms, charts. |
| Accessibility pass | Focus trapping in modals, focus restore, arrow-key navigation in menus and tables, ARIA live regions, reduced motion. Partly present, never audited. |
| Audit trail viewer | Who, when, what, previous value, new value. Per record, as a timeline. |
| Session management | Device list, revocation, concurrent-session limits. |

### Stage 12 — make it installable — **mostly done**

**727 tests passing.** Both packages validate and pack; `panel:doctor` exists and
found a real problem in this very application on its first run.

| Item | State |
|---|---|
| ~~`panel:doctor`~~ | **Done.** 7 tests. Every check exists because the failure is silent. |
| ~~README with the resource API~~ | **Done.** Copy-pasteable, and corrected where it was wrong. |
| ~~Both packages valid and packable~~ | **Done.** `composer validate` clean, `npm pack` 54 files. |
| ~~Adding a resource is one PHP file, no Vue~~ | **Proven**, by `UserResource` in Stage 9b. |
| Fresh app to a working panel, timed | **Not done.** Needs an actual fresh Laravel app. |
| Tagged and installed from a remote | **Not done.** No remote to tag against. |

#### `panel:doctor` found a real problem immediately

Run against this application it reported `BROADCAST_CONNECTION=log`, which makes
channel authorisation **inert** — the log broadcaster never consults the channel
callbacks, so every channel authorises including for guests. That is exactly the
class of thing the command is for: the panel works, every page returns 200, and
the guard is not running.

Its checks are the failures this project actually hit — a missing policy (which
denies everything and reads as a permissions bug), a tenant-led index inside a
dedicated database (20–60× slower with correct results), a session limit with a
cookie store (silently does nothing while being believed), and a shared
`SESSION_DOMAIN`.

It distinguishes a **problem** from a **note**, and only problems fail the build.
A report where every line is a warning trains people to read none of them.

#### One version field removed

`composer.json` carried `"version": "0.1.0"`. Packagist takes the version from the
VCS tag, so the field is a second source of truth that drifts the first time
somebody tags without editing it. Removed.

#### What is honestly not done

**The two timed, end-to-end claims.** "Fresh Laravel app to a working
tenant-scoped panel in under 10 minutes" has to be *performed* rather than
asserted, and it needs a scratch application this repository does not contain.
"Installable from a remote" needs a remote. Both are real gaps, both are recorded
rather than ticked, and neither is blocked by anything in the code — `panel:install`
runs correctly and prints accurate next steps, and both packages validate and pack.



The §14 checklist plus the reference app's acceptance list, and the stage most
likely to be skipped:

- fresh Laravel app → working tenant-scoped panel in under 10 minutes,
  performed and timed rather than asserted;
- adding a resource requires one PHP file and no Vue — proven by doing it;
- both packages versioned, tagged, installable from a remote;
- README documenting the resource API with copy-pasteable examples;
- `panel:doctor` — checks configuration, indexes, tenancy bootstrappers and
  known misconfigurations, from `mds/part7`;
- every reference-app acceptance box ticked, or the gap documented with a reason.

Until this stage is done, PanelKit is an application that contains a framework,
not a framework.

### Stage 13 — the Copilot, on `laravel/ai` — **mostly done**

**743 tests passing.** `laravel/ai` pinned at **0.10.1** exactly. The security
half is complete and mutation-verified; what is missing needs an API key or
Postgres.

| Item | State |
|---|---|
| ~~`laravel/ai`, pinned~~ | **Done.** Exact version, not a caret range. |
| ~~Tools go through policies~~ | **Done.** `PanelTool::authorise()` calls the same `Resource::can()` the button calls. |
| ~~Destructive tools use human approval~~ | **Done.** The SDK's `Approvable` flow, and the prompt names the subscriber. |
| ~~Conversations are tenant-scoped~~ | **Done.** Attached, not forked. 8 tests. |
| ~~Per-tenant metering~~ | **Done.** Prompt middleware keyed by tenant. |
| Streaming into the Stage 8 shell | **Not done** — needs a provider API key. |
| RAG / embeddings | **Blocked on Postgres**, as recorded. |
| `laravel/mcp` | Not started. Only if asked. |

#### Two predictions from the planning round held

The plan was written against the docs before any code, and both non-obvious
claims turned out to be correct.

**`Illuminate\JsonSchema` really is the SDK's schema vocabulary.** A tool's
`schema()` receives `Illuminate\Contracts\JsonSchema\JsonSchema` — the same
first-party component recommended for OpenAPI and the resource contract. One
vocabulary serves form validation, the API docs and agent tools.

**The conversation tables really do arrive with no tenant column.** They link a
conversation to a `participant` and stop there — correct for a single-tenant app,
and insufficient here, because every query would then have to remember to join
`users` to discover whose organisation it belongs to. A chat history is a
transcript of what somebody asked about their own customers, in their own words,
including the questions they thought better of.

#### The prompt is not a control, and that is the whole design

Writing "never suspend an account unless the user is permitted" into the
instructions feels like a control and is not one — it is a request to a system
whose defining property is that its output is not guaranteed.

So every tool re-checks the **same policy the button checks**, and the
destructive one pauses for a human through the SDK's approval flow rather than
through an instruction. Approval and permission answer different questions —
"did you mean this" versus "may you do this" — and a tool that only asked for
confirmation would let a read-only role suspend anybody willing to click yes.

Removing `PanelTool::authorise()` is caught by two tests, including
`test_a_read_only_role_cannot_suspend`.

Two smaller decisions worth keeping visible. **The approval prompt names the
subscriber**: "Approve suspend_subscriber?" is a prompt somebody clicks through,
"Suspend Amina Otieno (+254…)?" is one they read. And **not-found is reported
before permission**, because the tenant scope has already applied — saying "you
do not have permission" about another organisation's record would confirm that
it exists.

#### Metering is keyed by tenant

Not by user, which is widened by adding colleagues, and not by IP, which punishes
a whole office behind one NAT address while missing somebody on a home
connection. The unit that pays the bill is the unit that is limited.

It **fails loudly**, unlike the audit recorder which deliberately does not. A
lost audit entry costs a record of something that already happened; an unmetered
prompt costs money and keeps costing it. Refusing is the cheaper mistake.

#### Attached rather than forked

The SDK's models are not swappable by config, so the tenant boundary is added
through Eloquent's static hooks — `addGlobalScope` for reads, `creating` for
writes, no vendor file edited. That matters because the package is 0.x: a fork
would have to be re-applied on every upgrade, silently, by whoever runs
`composer update`, and the thing silently dropped would be the tenant boundary on
a chat history.



Deliberately last, and dependent on Stage 9b's permission work.

| Item | Notes |
|---|---|
| `laravel/ai`, pinned | Exact version, not a caret range, while the tag is 0.x. |
| Destructive tools use **human approval** | The SDK's pausable-agent flow, not a prompt instruction. "Only suspend when asked nicely" is not an authorisation mechanism. |
| Conversations are tenant-scoped | The published migrations get `tenant_id`, the global scope, and a row in the isolation matrix, before any conversation is written. |
| RAG / embeddings | **Blocked on Postgres.** Documented against pgvector; revisit with the Stage 3 database decision, not before. |
| Tools go through policies | Every tool calls the same `Resource::can()` the UI does. A tool that can act where the button cannot is a privilege escalation with a friendly interface. |
| Streaming into the Stage 8 shell | The chat UI already exists; this is a driver behind it. |
| Per-tenant metering and rate limits | Native `RateLimiter`, keyed by tenant, so one tenant cannot spend another's budget. |
| `laravel/mcp`, only if asked | Exposing the panel as an MCP server is a separate decision with its own auth surface. |


### Open decisions

| Decision | Status |
|---|---|
| ~~**Database engine**~~ | **Settled 2026-07-27: SQLite stays.** Stage 3 becomes the tenancy stress test instead. Reversible later; query shape transfers, specific numbers do not. |
| ~~**Chat transport**~~ | **Settled 2026-07-27: transport-ready.** Reverb primary, polling fallback, neither hard-wired. |
| ~~Database engine (old entry)~~ | **Superseded.** Every performance figure so far demonstrates query SHAPE — keyset pagination, one grouped query per chart, no blocking counts — and none of it transfers to Postgres until the switch is made and the numbers retaken. This is the largest outstanding risk in the project. |
| Landing pages | Deferred past Phase 9 by choice. |

---

## Guardrails carried from spec §2

1. Never SSH to, deploy to, or reference any remote server.
2. `DB_HOST` is `127.0.0.1`. Never a remote database.
3. Never copy a production `.env`.
4. Destructive commands only ever against the local database.
5. All test data comes from factories and seeders. No production dumps.

## Definition of done (spec §14)

- [ ] Fresh Laravel app to a working tenant-scoped panel in under 10 minutes — **needs a scratch app; `panel:install` verified working**
- [x] Adding a resource requires one PHP file and no Vue — `UserResource`, Stage 9b
- [x] All §10 budgets met and measured — 250k rows, `panel:benchmark`, Stage 9
- [x] Cross-tenant isolation suite passes for every resource and mutation path
- [x] N+1 query-count guard passes
- [ ] Both packages versioned, tagged, installable from a remote — **needs a remote; both validate and pack locally**
- [x] **Each tenant reachable on its own subdomain, with its own login page** — Stage 9c
- [x] **One custom (non-subdomain) tenant domain resolving** — `portal.lakeside.test`
- [x] **The negative journey fails on every hop** — verified, Stage 9c
- [x] README documents the resource API with copy-pasteable examples
- [x] Nothing in the repository references any production host, credential, or database — verified 2026-07-28; `DB_HOST` is 127.0.0.1, no remote hosts outside vendor docs
