# Plan: what Filament taught us, and what is still half-done

Written 2026-08-09. Everything below was verified against the running
application or against Filament v3.3.54 and v5.7.6 source read in
`%TEMP%/filament-study*`, not inferred from documentation.

---

## 0. Already done, no work needed

Four real search defects, all fixed and covered by tests. Recorded here so
nobody re-does them.

| Was wrong | Now |
|---|---|
| Aborted request's `finally` cleared `searching` after the next request set it - spinner died under a pending search | Sequence guard; only the newest request may touch shared state |
| Every backspace refetched a term just seen | Bounded query cache, cleared on close. Measured: cached term renders ~120ms, no network |
| `titleColumn()` picked the first string-ish column, so Activity results all read `2026-08-08 16:47:41` | Date-like columns skipped by name and by value |
| Whole phrase was one `LIKE`; **and** `LIKE` is case-sensitive on Postgres | Per-word AND / per-column OR, quoted phrases via `str_getcsv`, invisible Hangul fillers normalised, `ILIKE` on pgsql |

The Postgres one had never been caught because development is SQLite, where
`LIKE` is case-insensitive. CI has a pgsql job and nothing covered search there.

**Also fixed in passing:** `packages/ui/node_modules` held Linux rollup
binaries, so the UI unit suite could not run on Windows at all.

---

## 1. What is still borrowed-but-unbuilt

Ordered by value per hour. Filament does all of these; as of 2026-08-09 so do we -
every item in this section is built, tested and committed.

### 1.1 Relationship search - DONE

Filament's `getGloballySearchableAttributes()` accepts `customer.name` and turns
it into a `whereHas`. Ours searches columns on the model only, so **an invoice
cannot be found by its customer's name** - which is how people actually look
for invoices.

Work: `ListQuery::$searchable` accepts dotted paths; split on the last dot,
`whereHas(relation, fn => where(column, $like, ...))`. The per-word AND wrapper
already built stays as-is.

**Gate:** searching a customer name returns their invoices, and the query count
does not grow with row count.

### 1.2 Result details in the palette - DONE

`SearchController` hardcodes `'subtitle' => null`. Two rows both reading
"100Mbps Business" are indistinguishable, which makes the palette a list you
cannot choose from.

Work: a `searchSubtitle()` on the resource, defaulting to the second sensible
column. Reuse the `titleColumn()` heuristic, minus the chosen title.

### 1.3 A separate query root for search - DONE

Filament has `getGlobalSearchEloquentQuery()` so a resource can eager-load what
its titles and subtitles need. We reuse the list query. The moment 1.1 and 1.2
land, titles start touching relations and this becomes an N+1 per keystroke.

**Do this before 1.1 and 1.2, not after.**

### 1.4 Escape hatches - DONE

Three small ones, each earning its keep the first time a resource is unusual:

- `searchResultLimit()` per resource - today `LIMIT` is a constant for all.
- `modifySearchQuery()` - the only way to express "search only active rows".
- `shouldSplitSearchTerms()` - splitting breaks exact-reference lookup, where
  the reference legitimately contains a space. Filament added this in v5 for
  exactly that reason.

### 1.5 Result group ordering - DONE

Filament v5 has `globalSearchSort()`. Ours returns groups in resource
registration order, which is arbitrary - so the least useful group can sit
first. A declared sort, defaulting to today's order.

### 1.6 Database transactions around actions - DONE

`Filament\Panel\Concerns\HasDatabaseTransactions` - opt-in per panel, wraps
actions so a failure leaves no partial write. Given bulk actions here have no
queue threshold (below), correctness before throughput is the right order.

**Gate:** a create that throws halfway leaves zero rows, proven by a test that
throws deliberately.

### 1.7 Rate limiting on auth actions - DONE

v5 rate-limits second-factor setup/disable. We have passkeys and OTP; the gap is
the throttle, not the factors.

---

## 2. What is half-done and needs finishing

### 2.1 The tree is uncommitted - DONE

**Do this first.** Three unrelated strands are piled together: the Phase 1-3
shell work, the SEO subsystem, and everything from this session (cleanup,
Windows test fixes, search, user management, StatStrip). Split into commits
before adding more. Nothing else in this document is safe until this is done.

### 2.2 Sidebar: a group that is a section, not a dropdown - DONE

Requested and not built. Every group renders as a collapsible; there is no way
to say "this one is a plain section", which is how tenants would learn both
presentations exist.

Work: a `collapsible` flag travelling server -> `panelPages` -> `usePanelNav`
-> `AppSidebar`. Default true, so nothing changes unless asked.

### 2.3 Superadmin portal, and editable content - DONE

The larger of the two, and the one that unblocks the most.

**Confirmed today:** Help and FAQ come from `config('panel.help.categories')`
plus hardcoded `defaultQuestions()` arrays; What's new comes from
`config('panel.changelog')`. **None of it is editable at runtime** - fixing a
typo in an FAQ is a deploy.

Two halves:

1. **Content becomes DB-backed** - Help, FAQ, What's new, About, API reference.
   Per-tenant where it makes sense. This is also the worked example of a
   non-resource CRUD screen the starter is missing.
2. **A central `superadmin` panel** that can impersonate, see every tenant's
   tickets, and edit the above. The parts exist: `make:panel`, the impersonation
   banner, tenant-scoped tickets. Assemble rather than invent.

**Gate:** raise a ticket in a tenant portal, answer it from superadmin, and see
both sides - which is the two-portal test that is impossible today.

### 2.4 The socket is opt-in, and the session must be allowed to die - DONE

**The first half is FIXED.** `echo.ts` constructed Echo unconditionally, so an
installation without Reverb - or, as here, with keys left over from another
machine and nothing listening - retried `ws://localhost:8080` forever: a
console full of failed sockets and a page that never looked settled. Echo now
constructs only when `VITE_REVERB_APP_KEY` is set; without it `window.Echo`
stays undefined and `useLiveUpdates` uses the internal poll driver, so
**neither Reverb nor Redis is required for the panel to function**. The
playground `.env` now ships with the block commented out.

Related and fixed with it: the dashboard's ~20 deferred props each tripped a
Vue extraneous-attrs warning as they landed, once per prop per visit - which
read exactly like the page reloading on a timer. It was neither: an idle
dashboard makes zero requests (measured over 26s). The packaged page now
declares `inheritAttrs: false`.

**The second half is now DONE too.** Pages that opt into live updates
poll every `PANEL_LIVE_INTERVAL` (10s), and every poll is an authenticated
request that resets Laravel's session idle timer - so a tab left open on a
wall never expires, which defeats `SESSION_LIFETIME` entirely. The fix is an
ABSOLUTE session ceiling alongside the idle one: a login-timestamp check in
middleware that ends the session after N hours regardless of activity.
`EnforceSessionLifetime` does exactly that, measured from sign-in so a poll
cannot push it back, invalidating the session the way sign-out does and
answering a JSON poll with 401 rather than a redirect to HTML it would parse
as data. Off unless `panel.auth.session.max_hours` says otherwise; the demo
sets twelve hours so the path is exercised.

### 2.5 `panel:doctor` still cries wolf - FIXED

`checkSomebodyCanOpenThePanel()` counted `whereHas('roles')` under Spatie's
team scoping, which a console run pins to a null team - zero on any healthy
installation. It counts the pivot directly now, and the test that used to pass
*because* of the bug (the factory grants every user a role, so the false alarm
was what it matched) builds a genuinely roleless account.

---

## 3. Enterprise scale — the things that will actually break

Not borrowed from anywhere; observed here.

1. **Search does one `LIKE` per resource per keystroke, capped at 8.** The
   `% word%` half cannot use a btree index. On Postgres with millions of rows
   that is eight sequential scans per keystroke per admin. **The tool now
   exists**: `panel:search-index` reads every resource's searchable columns and
   writes the DDL for the current engine - `pg_trgm` GIN per column on
   Postgres, one covering `FULLTEXT` per table on MySQL, and an honest refusal
   on SQLite, whose FTS5 needs a shadow table rather than an index. No external
   service, and no search cluster to run, secure and pay for.

   IT PRINTS RATHER THAN APPLIES, deliberately. Which tables are actually big,
   when the quiet hour is, and whether to build concurrently belong to whoever
   runs the installation; `--apply` is for a laptop. And per this document's own
   rule, run it when row counts demand it - an index nobody needed is write cost
   and disk for nothing.
2. **Bulk actions have no queue threshold** — DONE, and this entry was partly
   wrong. A 500k-row mutation was **already** queued: `BulkController` split on
   whether the set was BOUNDED (explicit ids → inline) or unbounded (select-all
   → queued), which is the right axis and avoids a blocking `COUNT(*)`.

   THE REAL GAP WAS THE THIRD CASE. Bounded is not the same as small: the cap
   on an explicit selection is **a thousand rows**, and a thousand rows through
   a handler that touches a relation or sends a message is a request that runs
   until the web server's timeout kills it partway — a partial write and a 504
   that says nothing about how far it got.

   Now: `panel.bulk.queue_threshold` (250, deliberately below the thousand-row
   cap so the queued path is reachable from an ordinary selection rather than
   only from select-all) plus `BulkAction::queueThreshold()`, because cost is a
   property of what an action DOES rather than of the row count.

   **The ids travel with the job, not the filters.** For select-all the filters
   ARE the set; for an explicit selection they would match a *different* set, so
   dispatching without ids would silently apply the action to rows nobody
   ticked. `BulkQueueThresholdTest` asserts the rows, not just that a job was
   pushed.
3. **Live updates default to polling**, and the broadcast transport is
   authorised but untested - `BroadcastChannelTest` proves who may subscribe and
   then nothing connects. Reverb is already `require-dev`; make it first-class.
4. **The dashboard is ~20 independent deferred queries** — DONE. **Measured on
   the running app: 27 requests → 4.**

   Inertia fetches deferred props **one request per GROUP**, and every stat and
   chart passed its own key as its group — so each was a group of one. The
   queries were never the cost; the round trips were, each paying for a full
   middleware stack, session read, tenant resolution and permission load to
   return a single number.

   Now `stats` and `charts` are two groups (plus `strip` and `checklist`, which
   are single props that already aggregate their whole surface). Kept apart
   because charts are slower and cost differently — folding them together would
   make the numbers wait for the heaviest chart.

   **The per-chart period still works**, which is the thing that looks like it
   should break: a period change is `router.reload({only: ['chart_status']})`,
   and `only` names the PROP. Groups decide only how the FIRST fetch is batched.

   The resilience trade is real and named: a group is all-or-nothing, so one
   widget throwing takes its group's payload. `DashboardDeferGroupsTest` pins
   the group count so this cannot silently regress back to one-per-widget.

---

## 3b. Panels were not actually separate — DONE

Found by opening `/superadmin` and being sent to the demo tenant's sign-in.
The complaint was right and the cause was worse than the symptom: **four
separate defects, each of which hid the next.**

| Defect | Effect | Fix |
|---|---|---|
| Laravel's `withMiddleware()` registers `redirectGuestsTo(fn () => route('login'))` from `afterResolving(HttpKernel)` — **after** every provider boots | The package's per-panel guest redirect was overwritten on every request, in every release that shipped it. `/client` and `/superadmin` both went to the app's `/login` | Register ours from `afterResolving(HttpKernel)` too, so it lands last |
| `UsePanel` set the current panel but not the request's guard | `Auth::user()`, `$request->user()` and the **Gate's user resolver** all read the DEFAULT guard, so a panel on a second guard authenticated fine and then denied every implicit `Gate::authorize()` — a list that renders and a 403 on the button beside it | `Auth::shouldUse($panel->getGuard())`, which is what Filament does |
| `RecordController::applyTenant()` treated "table has a `tenant_id` column" as "model is tenant-scoped" | `ContentEntry` has a nullable `tenant_id` meaning *everybody* and no `TenantScope`; the central superadmin portal got 403 on every save | Ask `hasGlobalScope(TenantScope::class)`. The loud refusal stays for genuinely scoped models |
| `PanelAuthController` read one global `panel.auth.broker` | A broker names a provider, which names a **table**. A customer's reset request was looked up among **operators** — and for a shared address would have mailed a working reset link for the operator account | `Panel::passwordBroker()` per portal; `passwords.customers` added |

**And one thing the bugs were hiding.** With the guest redirect broken, the
screen crawler could never sign in to the client portal, so its screens were
never crawled. The moment it could, `NavigationCoverageTest` found the
CUSTOMER portal mounting **backups, logs, monitoring, assistant settings,
trash and documents**. Two bugs hid each other: a portal that offered too
much, and a test that could not reach it to say so.

### What the panel gained, borrowed from Filament v5

- `Panel::discoverResources(in:, for:)` / `discoverPages(in:, for:)`.
  Ownership follows the **directory**, not a `protected static $panel` on the
  class. Every portal provider now declares what it contains instead of
  appending to the global `panel.discover` list — which is what "the panels
  are all the same thing" actually meant.
- `Panel::login()` / `loginRouteSlug` / `passwordReset()` / `passwordBroker()`
  — a portal mounts its own sign-in under its own path, named `{id}.login`.
  The generated `routes/panel-{id}-auth.php` remains supported as the escape
  hatch; `panel-client-auth.php` was deleted in favour of the declaration.
- Superadmin is a genuinely separate portal: `superadmins` guard,
  `superadmin_users` table, `SuperadminUser` model with an `abilities` column
  (**not** blanket-true — a policy that cannot fail is a policy nobody has
  tested), amber palette, its own copy, no self-service reset.

**Gate, and it passes:** `SuperadminPanelIsolationTest` asserts the redirect
TARGET in both directions. The weaker "did it redirect" assertion is what let
this sit unnoticed.

**Registration order is load-bearing** and cost an hour: `Abilities::forModel()`
resolves a model to the FIRST registered resource that owns it, so running
panel-owned discovery before the global list moved `Plan` to another portal's
resource and 403'd an authorised screen. Panel directories run last, exactly
where appending to `panel.discover` used to put them. `ClusterTest` documents
it and caught it.

---

## 3c. Two follow-ons from §3.2/§3.4 — DONE

### `panel:doctor` now says when "queued" is not queued

`QUEUE_CONNECTION=sync` makes the whole bounded/unbounded split, the new queue
threshold and the progress tokens **inert**: `dispatch()` runs the job inline,
so a select-all mutation still holds the web request open, and the response
returns a PENDING token pointing at work that already finished.

**Worse than no queue, because everything reports success.** The operator polls
once and is told the job is done — which is true. Nothing says the run was cut
off by the web server's timeout partway, leaving a partial write.

It reports **only when at least one resource has bulk actions**, and **only
outside the `testing` environment**. That second condition is not a fudge:
`sync` is the *correct* setting under test — Laravel's own `phpunit.xml` ships
it — and the first version of this check turned eleven passing "doctor is
quiet" tests red. That is precisely the `checkSomebodyCanOpenThePanel` failure
in §2.5 repeating: a check that fires on a healthy installation teaches
everybody to ignore the command. `QueueIsRealTest` asserts all three
directions, faking the environment to exercise the live path.

**Not checked: whether a worker is running.** That is a question about the
host, not the configuration, and `panel:doctor` has no honest way to answer it.

### List screens defer into one request

**Measured first, and the plan's claim was wrong.** `/clients` was already
**one** group — `total` and `tabCounts` both landed in Inertia's `default`.
The only real cost was `summary`, which named a group of its own and so bought
a second round trip on every list that defines column summarizers.

All three are aggregates of the same cost class over the same filtered set — a
COUNT, one query covering every tab, one query of aggregate expressions — so
they are now one request. This is the opposite call from the dashboard, where
`stats` and `charts` stay apart because their costs genuinely differ; the rule
is cost class, not tidiness. `DashboardDeferGroupsTest` pins both.

---

## 3d. The class of bug, not the instances — DONE

Seven defects in one sitting turned out to be **one defect**: state that must be
per-panel living in one global place.

| global thing | should have been |
|---|---|
| `route('login')` for guests | the panel's own login |
| `Auth::user()` / the Gate's resolver | the panel's guard |
| `auth/Login` page name | the panel's component |
| `url.intended` | scoped to the panel |
| `panel.auth.broker` | the panel's broker |
| `panel.discover` | the panel's directories |
| default `authMiddleware = ['auth']` | `auth:{guard}` |

**Every one was found by a person opening a URL.** Not one by a test — because
each existing test asserted its own panel in isolation, and a property that
only breaks BETWEEN panels is invisible from inside one.

### Two responses, and the second matters more

**Made unrepresentable.** `Panel::getMiddleware()` now DERIVES `auth:{guard}`
instead of defaulting to bare `auth`. Bare `auth` means the *default* guard, so
a portal declaring `guard('customers')` and forgetting the matching
`authMiddleware` authenticated operators and then read the customer guard for
everything after — failing open with a 200. Invisible on the default panel,
because there the two are the same string.

**Made mechanical.** `PanelSeparationConformanceTest` generates its assertions
from the registry rather than naming panels, so **a new portal is covered the
moment it is registered**:

- gates on the guard it declares
- that guard, and its provider, exist in `config/auth.php`
- a portal offering a reset uses a broker whose provider is its own guard's
- a guest lands on that portal's sign-in, not the application's
- the sign-in renders a `panel/*` component the host cannot shadow
- the form posts back inside the portal's own prefix
- the login route is named `{id}.login`, which is how the guest redirect finds it

**Proven to fail, not just to pass.** Re-pointing the client portal at the
`users` broker reproduces the live security bug and the suite names it:
*"authenticates provider [customers] and resets passwords through [users] …
would mail a working link for somebody else's account."*

---

## 3e. Core vs optional, and the universal registration point

The question behind every complaint in this session: **what does a portal get
for free, and how does everything else get added when needed?** Filament's
answer is that the PANEL is the registration point. Ours was partly the panel
and partly inheritance, which is why packages could not contribute.

### Where we now match Filament, and where we do not

| Extension point | Filament v5 | Us |
|---|---|---|
| Resources | `discoverResources(in:, for:)` | ✅ same |
| Pages | `discoverPages(in:, for:)` | ✅ same |
| Plugins | `->plugins([...])` | ✅ same |
| Render hooks | `registerRenderHook()` | ✅ `RenderHook` |
| Auth | `->login()`, `authGuard()` | ✅ + `passwordBroker()`, `loginComponent()` |
| **Widgets on the dashboard** | `->widgets([...])` | ✅ **`Panel::widgets()` — DONE** |
| **Widgets on a resource** | `Resource::getWidgets()` | ✅ **`Resource::headerWidgets()` — DONE** |
| **Widgets on a page** | `Page::getHeaderWidgets()` | ✅ **`Page::headerWidgets()` — DONE** |
| **User menu items** | `->userMenuItems([...])` | ❌ a Vue slot the app fills |
| **Nav items** | `->navigationItems([...])` | ❌ resource-derived only |
| **Nested nav groups** | groups with children | ❌ one level |
| **`discoverWidgets(in:, for:)`** | directory scan | ❌ explicit array only |

**Widgets have three hosts now, and one resolver.** `WidgetSet` owns the rules
for all of them, because the danger was never that a card fails to appear — it
was that the two rules the dashboard already got right would be re-derived and
subtly changed on a second surface:

- a widget the viewer may not see is **never sent**, so its query never runs and
  its number is not in the payload for whoever opens the network tab
- the whole row is **one deferred request**, not one per card — the defect that
  made the dashboard cost 27 round trips to open, and far more expensive
  repeated on every list screen, of which there is one per resource

An empty set contributes **no props at all** rather than empty arrays, so a
resource declaring no widgets is byte-identical to before.

**`Panel::widgets()` — DONE.** Overriding `DashboardPage::stats()` was the only
way to add a widget, and a static method on a page class is useless to a
PACKAGE: a plugin cannot subclass a page the application has not written yet.
So a plugin could ship resources, routes, policies and screens, and could not
ship one dashboard card. Registered widgets are CONCATENATED with whatever the
page declares — replacing would make adding a widget silently blank an
application's own dashboard — and still pass `visibleTo()` before their
deferred prop exists, so the registry cannot bypass an ability.

### Still open, in the order to take them

1. **`Panel::userMenuItems()` and `navigationItems()`** — the two remaining
   rows above. Same shape as `widgets()`; this is what makes "core things ship
   with every portal, the rest is called when needed" true rather than aspirational.
2. **`/profile` and `/security` as top-level, mandatory routes** — they are
   `settings/profile` today, which makes an account screen look like a
   configuration screen and buries the one page every portal must have. Wide
   blast radius: route URIs, the names `settings.profile` / `settings.security`,
   `SettingsIndex`, `SharePanelProps`, the account menu, and a number of tests.
   Deserves its own change.
3. **Nested sidebar groups** — a static section (e.g. "Screens") that can itself
   contain a collapsible dropdown. Server nav shape (`PanelNavigation::build`
   returns flat entries plus a `group` string) → `usePanelNav` → `AppSidebar`.
4. **Editable content, extended to API documentation.** `ContentEntry` already
   backs Help, FAQ and What's-new, edited from the superadmin portal. About and
   the API reference are still config/hardcoded, so the loop is half built —
   the endpoint and the model exist, the two remaining kinds do not.
5. **A generated portal offered password reset with no broker** — DONE. The
   generator now emits `->passwordReset(false)` with the two lines needed to
   turn it on, because falling back to the application's broker means a reset
   request from this portal is looked up among the DEFAULT guard's accounts —
   and for an address held in both, mails a working link for somebody else's
   account. `make:panel --new-guard`, which would scaffold the model, migration
   and `config/auth.php` entries, is still worth doing; this closes the unsafe
   default in the meantime.
6. **A generated portal over-mounted** — DONE. It got operations, trash,
   documents and assistant by default. That default was not reasoned about, it
   was *found*: the reference app's CUSTOMER portal mounted backups, logs and
   monitoring, so the people who BUY the service were one URL from the
   installation's log output. An ability gated them, but a route that exists is
   a route somebody can probe, and a permission is one grant from being wrong.
   The generator now emits `->without([...])` for all four. **Opting in is a
   decision somebody made; opting out is a decision nobody knew they had to
   make.**

   **Measured:** a freshly generated panel went from 8 screens reachable from
   no menu to 1 — its own home, which has no menu entry only because a new
   panel has no resources yet, which the generator says out loud.
7. **`AuthLayout` ignores the panel brand** — the sign-in wordmark reads
   `PanelKit` on a portal whose brand is `PanelKit Superadmin`.

Items 5 and 6 are the same question as 1: what is core, and what is opt-in.

---

## 4. Where we are ahead of Filament — do not "fix" these

Recorded so nobody borrows backwards.

- **Transport.** Filament's global search is a Livewire component in v3 *and*
  v5: every keystroke is a full server round trip re-rendering the component -
  the exact latency floor this project was built against. Ours is a lean JSON
  endpoint with client debounce, abort and cache.
- **LIKE escaping.** Filament interpolates `"%{$search}%"` unescaped in both
  versions, so a user typing `%` matches every row. We escape `%` and `_`.
- **Deny-by-default policies, deferred counts, keyset pagination, one query for
  N tabs.** All still ours.

---

## 5. Order, and why

```
2.1 commit the tree          <- nothing is safe until this is done
 |
1.3 search query root        <- before 1.1/1.2, or they create an N+1
 |
1.1 relationship search  +  1.2 result details
 |
2.2 sidebar group            <- small, visible, unblocks the tenant story
 |
2.3 superadmin + editable content   <- the big one
 |
1.4 1.5 1.6 1.7              <- escape hatches, sort, transactions, throttle
 |
3.1 search indexing          <- tool shipped; RUN it when row counts demand it
```

2.4 (doctor) can be done at any point by anybody; it is twenty minutes and
independent of everything else.

---

## 6. How each step is proved

The same four layers `STARTER_PLAN.md` established, unchanged:

1. **Tests.** 2,116 feature tests are green right now. Any step that cannot be
   asserted is a step that is not finished.
2. **Screenshot comparison.** `scripts/shots.sh` + `scripts/shots-diff.mjs`.
   Both work again - the diff script had never once run (`pixelmatch` v6 is
   ESM-only and `require` returned the namespace), and `shots.sh` now falls back
   to system Chrome.
3. **`panel:doctor` clean** - which requires 2.4 first, or its output is noise.
4. **Build gate.** `npm run build`, `vue-tsc --noEmit`, `eslint`, `pint`,
   `phpstan`.
