# What Is Eating Us Today, And How The New Panel Must Avoid It

A catalogue of real production failures from a live multi-tenant ISP billing SaaS
(Laravel + Filament + Livewire + Octane + PostgreSQL), written as build rules for a
replacement admin panel.

**Read this alongside the build spec. Every rule here overrides convenience.**

Each entry is an incident that actually happened, its root cause, and the rule the new system
must follow so it cannot happen again.

---

## The single most important pattern

**Almost every failure below returned HTTP 200 and looked correct.**

Not one of them threw an error the operator could see. Cross-tenant counts rendered as normal
numbers. A stale dashboard rendered as an empty state. A purged CSS class rendered as a hidden
element. An unresolved user id rendered as saved settings. A never-running cleanup job rendered
as a customer permanently "online".

So the meta-rule, which every specific rule below is an instance of:

> **Make the failure mode loud. If a guard cannot fail loudly, replace it with something that can,
> and write a test that proves the loud failure happens.**

Silent fallbacks are the enemy. `?? ''`, `?? 'tenant'`, `return false` on a missing precondition,
and empty-catch blocks are how every one of these bugs survived to production.

---

## 1. Multi-tenant data leaks

### 1.1 Raw query builder bypasses the tenant scope

**Incident (2026-07-24):** A tab-count helper used `DB::table('ip_bindings')` with no tenant
filter. The IP Bindings page showed one tenant `active=5 / expired=59` when it actually had zero
bindings. Those were every tenant's rows. The cache key was correctly tenant-scoped; the query was
not. Poisoned Redis keys had to be cleared for 12 tenants after the fix.

**Root cause:** ORM global scopes only apply to the ORM. `DB::table()` is a different code path.

**Rule for the new build:**
- The package **never** uses `DB::table()` on a table that has a `tenant_id` column.
- All resource queries originate from an Eloquent model carrying the tenant scope.
- If a raw query is unavoidable for performance, it must carry an explicit
  `->where('tenant_id', ...)` and a comment explaining why the ORM was bypassed.
- Add a static analysis rule or a test that greps the package for `DB::table(` and fails on any
  hit against a known tenant-scoped table.

### 1.2 The tenant scope silently does nothing outside tenancy

**Incident (2026-07-10):** The `BelongsToTenant` global scope applies its filter **only** when
tenancy is initialized. In console, queued jobs, webhooks, and early-request validation paths it
returns early and applies no filter at all. A uniqueness check on `account_number` therefore
matched another tenant's row, producing a false "customer already exists" block that no phone
number could clear, and in another path silently assigned a customer a random account number
instead of their phone, breaking phone-based login and payment lookup.

**Root cause:** A guard that degrades to "allow everything" when its precondition is absent.

**Rule for the new build:**
- Any query that can run before tenancy is established takes an **explicit** `tenant_id`.
- The panel resolves the tenant once, at the start of the request, from the route or host, and
  passes it explicitly into anything that leaves the request cycle.
- Prefer a scope that **throws** when no tenant is resolvable in a panel context, rather than one
  that quietly returns unfiltered rows. In a panel, "no tenant" is always a bug, never a valid
  state.

### 1.3 A guard that requires tenancy silently disabled a whole job

**Incident (2026-07-13):** A table-existence helper began with
`if (! tenancy()->initialized) { return false; }`. A scheduled cleanup command, which runs with no
tenant loop, used it. The guard always returned false, so the **entire cleanup block had never run
once since the command was written**. Result: hotspot customers whose devices dropped without a
clean disconnect stayed marked online forever, holding device slots. Three real stuck sessions
were found live, one three days old.

**Root cause:** A precondition check that returns a falsy "not available" instead of failing.

**Rule for the new build:**
- Never gate behaviour on a check that returns false for two different reasons ("table missing"
  and "no tenant context"). Those are different conditions and must be distinguished.
- Background and scheduled work in the package either runs inside an explicit per-tenant loop, or
  operates on genuinely shared tables using tenancy-independent checks.
- Any code path that can silently do nothing needs a test asserting it actually does something.

### 1.4 Deferred work loses the tenant and poisons a long-lived cache

**Incident (2026-07-24):** A dashboard cache served a stable key immediately and rebuilt it in the
background via `defer()`. By the time the deferred callback ran, the worker had torn tenancy down,
so the builder read the central context, computed `configured = false`, and wrote that back to a
cache key with a multi-day TTL. Every tenant's fiber dashboard rendered empty. Viewing the
dashboard re-poisoned it. Warm-up commands wrote correct data that the next page view destroyed.

**Root cause:** A cache builder depending on ambient tenancy, executed after the request that
established that tenancy had ended.

**Rule for the new build:**
- **No builder, job, or deferred callback ever reads ambient tenant state.** The tenant id is a
  parameter, always.
- Any deferred rebuild captures the tenant at scheduling time and re-binds it before running.
- Cache keys include the tenant id **and** the code path cannot produce a value for the wrong
  tenant even if the key is right. Correct key plus wrong builder still equals poisoned cache.

### 1.5 Shared cache keys pooling across tenants

**Incident (same investigation):** A widget used `tenant('id') ?? 'tenant'` as a key fragment. In
any context without tenancy that collapses to the literal string `tenant`, so every tenant shared
one cache entry.

**Rule for the new build:**
- A tenant id fallback string is forbidden. If the tenant id is absent, **throw**. Never
  substitute a placeholder.
- Cache keys follow one documented format, generated by one helper, never hand-assembled:
  `panel:{panelId}:{scope}:{tenantId}:{permissionsHash}:{version}`.

---

## 2. Auth and identity

### 2.1 The default guard is not your guard

**Incident (2026-07-16):** Admin code used `$request->user()` on a panel authenticated with a
non-default guard. It returned null, the per-admin draft key resolved to an empty string, and the
feature silently fell back to saved settings. Every unsaved edit was ignored. The page rendered
200 and looked correct. Only logging the resolved id exposed it.

**Rule for the new build:**
- The panel object owns its guard. All user resolution goes through
  `Auth::guard($panel->guard())`. `$request->user()` and `auth()->user()` are forbidden inside the
  package.
- Reader and writer of any per-user key must resolve identity the same way, enforced by using one
  helper for both.
- When a feature "silently does nothing", check identity resolution before suspecting the cache.

### 2.2 Tenant mismatch returns a dead page instead of a redirect

**Incident (2026-07-16):** Hitting another tenant's host logged the user out and aborted 403.
Browser navigations got a redirect to login, but the JSON-expecting interaction took the 403
branch, so the page just sat there frozen with a console error. It read as "the app is broken"
when it meant "you were signed out".

**Rule for the new build:**
- Every error state must have a defined presentation in the SPA. A 401 or 403 on a background
  request triggers a visible, explained state and a route to recovery, never a silent freeze.
- Define handling for 401, 403, 419 (expired CSRF), 422, 429, 500, and network offline. All seven,
  before shipping.

---

## 3. Navigation and performance

### 3.0 Navigation is the thing operators feel all day, and SPA mode does not fix it

**Current state:** all three panels already run with Filament's `->spa()` enabled, which is
Livewire's `wire:navigate`. This is already the best navigation the framework offers, and pages
still take 500 to 950 ms. There is no configuration switch left to flip.

**What `wire:navigate` actually removes:** the browser-side cost. It intercepts the click, fetches
the next page over AJAX, swaps the body, and keeps the JavaScript runtime and assets alive. No
full document reload, no asset re-download, no script re-parse.

**What it does not remove, which is where all the time actually goes:**

| Cost paid on every single navigation | Removed by `wire:navigate`? |
|---|---|
| PHP boot and container build | No |
| Tenancy initialization and portal settings resolution | No |
| Panel construction and resource discovery | No |
| Navigation tree rebuild plus permission check per item | No |
| **Navigation badge counts, one per badged resource** | No |
| Full server render of the destination page's component tree | No |
| Client-side hydration of every component on arrival | No |
| Asset download and script parse | Yes |

Ten resources in this codebase define navigation badges. Even with all of them cached in Redis
behind a 60 to 120 second TTL, that is ten cache round trips plus a full sidebar re-render **on
every page you visit**, forever, because the sidebar is rebuilt server-side as part of each page.
That work is identical every time and is thrown away every time.

The measurement from the render audit proves the point: the destination page render is the cost,
and `wire:navigate` does not touch it. Adding a cache-warming cron every five minutes to hide cold
boot is treating the symptom.

**Rule for the new build:**
- **The shell is mounted once per session and never re-renders.** Sidebar, topbar, navigation tree,
  and badges are part of a persistent layout that survives every navigation. Navigating changes the
  content area and nothing else.
- **Navigation transfers data only.** A page change is one JSON request carrying the destination's
  props, typically 10 to 40 KB, with no HTML, no sidebar, no re-hydration of anything already
  mounted.
- **The navigation tree is built once**, delivered with the initial page load, and cached
  client-side for the session. Permission filtering happens once, not per navigation.
- **Badges load once after first paint, then update by broadcast**, never recomputed per
  navigation. A badge is a live counter, not a page-load cost.

### 3.0.1 Lost state makes navigation feel worse than the milliseconds suggest

The unmeasured tax: navigate away from a filtered, sorted, scrolled table and come back, and it is
all gone. Operators re-apply the same filters dozens of times a day. No profiler shows this, but it
is a large part of why a panel feels slow to the people using it.

**Rule for the new build:**
- Filter, sort, page, search, and column visibility live in the URL. Navigating back restores the
  exact view, and the view is shareable with a colleague.
- Scroll position and row selection are preserved across back and forward.
- Visited pages are cached client-side, so the back button is instant and hits no server.
- Table column preferences persist per user.

### 3.0.2 Nothing happens until you click

Today the server does no work until the click lands, so the user pays the full latency every time.

**Rule for the new build:** prefetch on intent. Hovering or focusing a sidebar link, a pagination
control, or a row link starts the fetch. By the time the click lands the data is already in memory
and the transition is immediate. This single technique does more for perceived navigation speed
than any server optimization, and it is impossible in the current architecture because the response
is a rendered page rather than data.

### 3.0.3 Opening a modal costs a round trip

Filament action modals fetch their form from the server when opened, so a simple confirmation
dialog has network latency in front of it.

**Rule for the new build:** action and form definitions arrive with the resource schema, which is
already cached client-side. Opening a modal is a local state change with zero network cost. Only
submitting talks to the server.

### 3.0.4 Every table interaction is a full component round trip

Sorting a column, changing a filter, typing in search, or paging re-posts component state,
re-renders the table server-side, and diffs the result back. That is the same 500 ms class of cost
as a navigation, paid for a sort.

**Rule for the new build:** these are data-only partial requests. The table never unmounts, the
schema never re-transfers, and the client narrows already-loaded rows immediately while the
authoritative response is in flight.

### 3.1 The bottleneck was rendering, not the database

**Measured (2026-07-02):** Slow admin pages ran only 5 to 16 queries, taking 1 to 16 ms total.
The remaining 500 to 950 ms was the framework building the component tree, hydrating, and
rendering Blade. Page speed was **data-independent**: it did not worsen with more rows, because it
was never about the data.

**Root cause:** A server-rendered component framework whose cost scales with the number of
components on the page, paid on every interaction.

**Rule for the new build:** This is the entire reason the new architecture exists. Schema is
computed once and cached, rendering happens on the client, and only data crosses the wire. If any
part of the new design reintroduces per-interaction server rendering, it has failed at its only
differentiating purpose.

### 3.2 The "obvious" optimization made it slower

**Incident:** Deferred table loading was applied globally to improve first paint. It made things
worse, because it adds a second round trip and a re-hydration to pages that were render-bound, not
query-bound. It was reverted, and a test now bans it codebase-wide. A later audit re-recommended
it and broke the test suite.

**Rule for the new build:**
- Never apply a performance technique globally. Measure the specific page first.
- When a technique is rejected after measurement, encode the rejection as a **failing test with a
  comment explaining why**, or someone will helpfully re-add it in six months.

### 3.3 An eager query in a component definition took down a page for everyone

**Incident (2026-07-24):** Three action definitions called `->options(Router::where('is_active', ...)->pluck(...))`
eagerly. Those definitions are evaluated at **page render**, not when the modal opens. The column
did not exist, PostgreSQL threw, and `/admin/clients` went down for every tenant.

**Rule for the new build:**
- Every option list, every dynamic value, every count in a schema definition is a **closure** that
  resolves lazily, never an eager query.
- A schema definition must never execute a database query at definition time. Enforce with a test
  that builds every resource schema with a query-log assertion of zero queries.
- A failure inside one widget or one action must degrade that component only. Wrap resolution so a
  broken option list renders an empty select with an error badge, and the page still loads. The
  operator directive after this incident was literally "even if the user has no router just show
  the pages".

### 3.4 A missing functional index cost 300x

**Incident (2026-07-11):** A lookup filtered on `lower(access_code)`. A plain btree index on
`access_code` cannot serve a `lower()`-wrapped predicate, so it sequential-scanned, twice per page
load, at 165 to 286 ms each. A partial functional index took it to 0.678 ms.

**Rule for the new build:**
- Any query that wraps a column in a function needs a matching functional index. Document required
  indexes per resource and ship them as migrations.
- Case-insensitive matching is a deliberate, indexed decision, not an incidental `lower()`.

### 3.5 Cold start looked like an architectural problem

**Incident (2026-07-11):** Three pages were reported at 2 to 3 seconds. Re-profiling in a warm
process showed 40 to 80 ms by the third run. The multi-second figures were opcache and JIT cold
start right after a restart. Two of the three "bugs" did not exist.

**Rule for the new build:**
- Never accept a single cold measurement. Run three times warm and report the median.
- The performance test suite must warm up before asserting, or it will fail randomly and get
  disabled, which is worse than not having it.

### 3.6 Interaction limits hit because the framework is chatty

**Incident:** A framework request-payload guard tripped at 67 method calls in one update, on an
ordinary page. The cap had to be raised from 50 to 200 because that call volume is simply normal
for that framework.

**Rule for the new build:** If a normal page needs 67 server calls to render one interaction, the
architecture is wrong. In the new panel a filter change is exactly one request.

---

## 4. Caching

### 4.1 Long TTLs are backstops, never the mechanism

**Standing rule from operations:** In billing, accuracy beats caching. Stale data that lies to an
operator about whether a customer paid is worse than a slow page.

**Rule for the new build:**
- Resource tables read live. Counts, aggregates, and dashboards cache with **event-driven
  invalidation**; TTL exists only so a missed invalidation self-heals quickly.
- Every cached aggregate must name the events that invalidate it. A cache with no invalidation
  path is a bug, not an optimization.
- When tempted to lengthen a TTL, add an invalidation event instead.
- Include a cache **generation** counter in the key so a whole class can be invalidated with one
  increment rather than by scanning keys.

### 4.2 Poisoned keys outlive the fix

Every cache incident above required manually clearing keys across all tenants after deploying the
fix, because a wrong value with a multi-day TTL survives the code change that caused it.

**Rule for the new build:** Every cache key embeds an application version or schema version
fragment, so a deploy invalidates everything derived from changed code automatically. Ship a
`panel:cache-clear --tenant=` command from day one.

---

## 5. Long-lived workers

### 5.1 Framework static state never flushed

**Incident (2026-07-04):** A component framework kept per-request state in static properties
across roughly 17 subsystems, and its reset method was only ever called by its own test harness.
Under a persistent worker, an exception between setup and teardown stranded state, and the **next
unrelated request in that worker** picked it up, producing random 500s on pages that had nothing to
do with the original error.

### 5.2 A single global mutation corrupted timestamps for days

**Incident (2026-07-02):** One `date_default_timezone_set('Africa/Nairobi')` call in a payment path
mutated the process clock. Under persistent workers it leaked into every later request on that
worker, so records were written three hours in the future relative to UTC. Every timing gate then
skipped them silently, and paid transactions stayed pending forever with no path to resolve. It had
been harmless for years under per-request PHP, and only became a data-corruption bug when the
runtime changed.

**Rules for the new build:**
- No mutable static state holding request, user, or tenant data. Bind per-request services as
  scoped, never singleton.
- Never mutate process-global state (timezone, locale, error handlers) from within a request.
  Construct a localized value where you need it instead.
- Provide a flush listener that clears package memoization at request start.
- **The highest-value test in the suite:** hit the same endpoint twice as two different tenants
  within one process and assert the second response contains none of the first tenant's data.
- Defensive coding for skew: treat an impossible timestamp as eligible rather than skipping it, so
  a clock problem can never permanently strand a record.

---

## 6. Styling pipeline

### 6.1 Utilities written in PHP are purged and silently do nothing

**Incident (2026-07-16):** The CSS build did not scan PHP files, so utility classes passed through
PHP attributes were purged. The worst part was **partial survival**: one class in a pair survived
because Blade used it elsewhere, the responsive counterpart was purged, and the element was hidden
at every screen width instead of only small ones. It looked like a broken feature, not a CSS
problem. No error, no warning. Cost a full build and deploy cycle.

**Rule for the new build:**
- Styling lives in Vue components, which the CSS scanner reads. **No class strings in PHP, ever.**
  The schema carries semantic values (`"color": "danger"`, `"align": "right"`), and the Vue layer
  maps those to classes.
- This is a hard architectural boundary, not a preference. PHP describes intent, the client decides
  presentation.

### 6.2 Design token misuse rendered transparent

**Incident:** A CSS variable was wrapped in `rgb()` on the assumption it held a space-separated
triple. It held a full color value, so the result was invalid and rendered transparent. Invisible
in light mode, apparently fine in dark mode because the background behind it was dark.

**Rule for the new build:**
- One tokens file, one documented format, `oklch` values used directly through `var()`.
- Regression tests that assert the forbidden patterns never appear in built CSS.
- Every visual change is reviewed in both light and dark themes. Dark-only verification hid this
  bug entirely.

---

## 7. Verification discipline

### 7.1 Static inspection missed real rendering bugs

**Incident (2026-07-15):** Mobile layout breakage from a dynamic column-span closure could not be
found by reading the HTML or CSS. It only appeared after client-side hydration recomputed the grid.
Diagnosing it required driving a real browser against real built assets and inspecting computed
styles.

**Rule for the new build:**
- Layout and interaction correctness is verified by a real browser at real breakpoints against
  real built assets, in both themes. Component snapshot tests do not substitute.
- Screenshot the standard widths, and include at least one dense table with real data volume.

### 7.2 A broken measurement tool produced fake findings

**Incident:** The page audit command returned a redirect for every page including the dashboard,
making all its numbers meaningless. Findings from that run were nearly acted on.

**Rule for the new build:** Every measurement tool must have a self-check that fails loudly when
it is measuring nothing. A benchmark reporting suspiciously uniform results is broken until proven
otherwise.

---

## 8. Design decisions that eliminate whole classes of these bugs

The new architecture should be chosen so several of the above become impossible rather than
merely forbidden.

| Old failure class | Why it cannot recur |
|---|---|
| Sidebar, nav tree, and badges rebuilt on every navigation | Shell mounts once per session and never re-renders |
| Filters and scroll lost on back-navigation | View state lives in the URL and in a client-side page cache |
| Full server render per navigation | Navigation transfers JSON props only |
| Render-bound page slowness | Schema cached, rendering on the client, only data on the wire |
| Chatty framework hitting call limits | One request per user-initiated change |
| CSS purge of PHP-authored classes | No class strings in PHP at all, by architecture |
| Framework static state leaking | Package holds no per-request static state, verified by a two-tenant single-process test |
| Eager query in a definition killing a page | Definitions are closures, resolved lazily, with per-component error isolation |
| Cross-tenant leak via raw SQL | Package forbidden from raw builder use on scoped tables, enforced by test |
| Deferred rebuild losing tenancy | Tenant id is always an explicit parameter, never ambient |

---

## 9. Pre-merge checklist

Every pull request into the new panel must satisfy all of these:

- [ ] Navigation triggers no re-render of the shell, sidebar, nav tree, or badges
- [ ] Filter, sort, page, and search state is in the URL and survives back-navigation
- [ ] Links prefetch on hover or focus
- [ ] Opening a modal makes no network request
- [ ] No `DB::table()` against a tenant-scoped table
- [ ] No `$request->user()` or `auth()->user()`; guard resolved from the panel
- [ ] No ambient tenancy read inside a job, deferred callback, or cache builder
- [ ] No tenant id fallback string; absent tenant throws
- [ ] No class strings in PHP
- [ ] No eager queries in schema definitions; verified by the zero-query definition test
- [ ] Every new cached value names its invalidation events
- [ ] Every new cache key includes tenant, permissions fingerprint, and version
- [ ] Every new query is covered by an index, and the index ships in the same change
- [ ] Query-count test passes at 10 rows and 1,000 rows with identical counts
- [ ] Two-tenant single-process isolation test passes
- [ ] Verified in a real browser, both themes, at 375 px and 1440 px
- [ ] No new silent fallback. Every failure path is visible to the operator or logged loudly
- [ ] Any rejected optimization is recorded as a test with a comment explaining the rejection
