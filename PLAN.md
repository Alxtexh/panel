# PanelKit — Local Build Plan

Working plan derived from [panelbuilder.md](panelbuilder.md), adapted to this machine.
The spec is the contract; this file is the route through it.

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
