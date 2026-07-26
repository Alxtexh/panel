# PanelKit Addendum 01

> **NB — READ BEFORE APPLYING**
>
> The base specification (`PANEL_KIT_BUILD_SPEC.md`) is already being built against. **Do not
> re-plan or restructure the work in progress.** This addendum is purely additive. Apply each part
> at the point in the build where it becomes relevant:
>
> - **Part A (Stancl Tenancy)** applies from Phase 7 onwards, and any earlier code that resolves a
>   tenant must be checked against it.
> - **Part B (Auth and security)** is new scope. Slot it after Phase 7, before Phase 9.
> - **Part C (Internal components)** applies from Phase 3 onwards. Several items replace things the
>   agent would otherwise build worse, so read it before writing any caching or aggregate code.
>
> Nothing here changes the architecture, the schema contract, the repository layout, or the
> performance budget already agreed in the base spec.

---

## Part A: Stancl Tenancy integration (stancl/tenancy v3)

The package must work with `stancl/tenancy` without assuming how the host application has
configured it, and must add as little per-request overhead as possible.

### Never assume the identification strategy

Applications identify tenants by domain, subdomain, path, or request header. The panel declares
its middleware and does not hardcode any of them:

```php
Panel::make('admin')
    ->path('app')
    ->guard('tenant_admin')
    ->middleware(['web', InitializeTenancyByDomain::class, PreventAccessFromCentralDomains::class])
    ->context(PanelContext::Tenant);     // or PanelContext::Central for a platform panel
```

`PanelContext` matters. A central panel (platform or super admin) must never have tenant scoping
applied to its resources, and a tenant panel must refuse to boot without a resolved tenant.

### Never assume which bootstrappers are enabled

`config/tenancy.php` may enable any subset of the database, cache, filesystem, queue, and Redis
bootstrappers, and applications frequently disable the cache and Redis ones for performance. The
package must be correct in every combination.

| Bootstrapper | If enabled | If disabled | Package rule |
|---|---|---|---|
| Database | Connection switches per tenant | Single shared connection with `tenant_id` | Never reference a connection by name. Let the model resolve it |
| Cache | Store is already tenant-prefixed | Keys are global | Always include the tenant id in the package's own keys. Double prefixing is harmless; missing prefixing is a leak |
| Filesystem | Disk roots are rewritten per tenant | Shared roots | Never build a storage path by hand. Use the configured disk |
| Queue | Tenancy is restored inside jobs | Jobs run centrally | Always pass the tenant id explicitly into the job payload and re-initialize inside `handle()`. Never rely on the bootstrapper |
| Redis | Prefix applied | No prefix | Same rule as cache |

The general principle: **the package assumes the least and provides its own correctness.** Any
behaviour it gets for free from a bootstrapper is a bonus, never a dependency.

### Support both shared and dedicated database modes

Many applications run a hybrid: most tenants share one database with a `tenant_id` column, while
some have a dedicated database where that column does not exist.

**The package must never write `->where('tenant_id', ...)` itself.** In dedicated mode that column
does not exist and every query throws. Scoping is the application's responsibility, expressed
through the model's own global scope. The panel's job is to make sure it never *bypasses* that
scope, not to reimplement it.

Corollary: the package never uses `DB::table()` or `->withoutGlobalScopes()` on a resource query.

### Resolve tenancy once per request

Repeatedly calling `tenant()`, re-resolving portal settings, or re-reading branding on every
component is a real cost multiplied across a page.

- The panel resolves the current tenant **once**, at the start of the request, and stores it on a
  request-scoped context object.
- Branding, theme tokens, feature flags, permissions, and the navigation tree resolve once and
  ship as Inertia shared props.
- Nothing downstream calls `tenant()` again. It reads the context object.

### Keep tenant data out of the schema, and the schema stops needing a tenant key

This is the single largest overhead reduction available, and it is also a safety improvement.

A resource schema describes **structure**: which columns exist, which filters exist, which actions
exist. Structure is almost always identical for every tenant. What varies per tenant is **data**:
the list of plans in a filter dropdown, the routers in a select, the tenant's brand colour.

So:

- **Schema contains no tenant data.** Filter and select options are not baked in; they are
  delivered as props alongside the records, or fetched on demand when the control is opened.
- With no tenant data inside it, the schema cache key needs only the panel id, the resource, a
  permissions fingerprint, and the application version. Cache entries collapse from
  (tenants x resources) to (permission sets x resources), which for a hundred tenants with three
  roles is a hundredfold reduction.
- It is also safer. A cache entry that contains no tenant data cannot leak tenant data, no matter
  how badly the key is constructed.

If a resource genuinely must vary its structure per tenant, for example because a feature flag
hides a column, add the tenant id to that resource's key explicitly and document why.

### Queues, broadcasting, and events

- **Jobs**: exports, imports, and bulk actions carry `tenant_id` in their payload and call
  `tenancy()->initialize($tenantId)` at the top of `handle()`, wrapped so it always ends. Do not
  depend on the queue bootstrapper being enabled.
- **Broadcasting**: channel names embed the tenant id, and the broadcasting authentication route
  must carry the same tenancy middleware as the panel, or channel authorization runs centrally and
  authorizes nothing correctly.
- **Events**: listen to `TenancyEnded` to clear any request-scoped memoization the package holds.

### Testing

Provide a test trait that boots a tenant, runs the assertion inside tenancy, and tears down. Every
resource test uses it. Include a test that runs a resource in **both** shared and dedicated
database modes, since the `tenant_id` assumption only breaks in one of them and will otherwise ship
undetected.

---

## Part B: Authentication, authorization, and account security

### Package choices

Use framework-agnostic packages only. Anything bound to a specific admin UI defeats the purpose.

| Concern | Package | Notes |
|---|---|---|
| Permissions storage | **spatie/laravel-permission** | Industry standard, supports teams, which is how role scoping per tenant is done |
| Enforcement | **Laravel Policies and Gates** | Native. Spatie stores who has what; policies decide what that permits |
| 2FA (TOTP) | **laravel/fortify** | Official, headless, gives TOTP with QR provisioning, recovery codes, and password confirmation. Headless is exactly right for an Inertia panel |
| Passkeys / WebAuthn | **spatie/laravel-passkeys** or **laragear/webauthn** | Both sit on `web-auth/webauthn-lib`. Prefer laragear for a pure JSON/SPA flow; prefer spatie if an existing `passkeys` table must be preserved |
| Login and device audit | **rappasoft/laravel-authentication-log**, or a small first-party listener | Records every login, logout, failed attempt, IP, user agent, and location, and can notify on a new device |
| Activity audit | **spatie/laravel-activitylog** | Model-level change history |
| Active sessions and revoke | **Laravel's `sessions` table**, no package | Query by user id, parse user agent, delete the row to revoke |

Do **not** adopt any package whose name contains the previous admin framework. Those are UI
wrappers around the libraries above, and the wrapper is precisely the part being replaced.

### Permissions model

- **Naming convention derived from resources**, generated rather than hand-maintained:
  `{action}_{resource}`, for example `view_any_client`, `update_client`, `delete_client`, plus
  per-action permissions for custom actions such as `extend_expiry_client`.
- **`php artisan panel:permissions sync`** scans every registered resource and action, creates any
  missing permission rows, reports orphans, and never deletes without `--prune`. This replaces the
  generator that the old admin framework's permission plugin provided.
- **A roles and permissions resource** ships with the package, so administrators manage roles in
  the panel itself, with a matrix UI grouped by resource.
- **Teams awareness.** When Spatie's teams feature is enabled for tenant scoping, role assignment
  writes to the pivot with the team key set. Bulk relationship sync helpers frequently bypass the
  team column and produce roles that silently apply to the wrong tenant or to none. Assign roles
  through an explicit service that always sets the team key, and add a test asserting the pivot row
  carries it.
- **Enforcement is always server-side.** Permission booleans in the schema exist only so the UI can
  hide what the user cannot do. Every controller action independently authorizes.
- **The permissions fingerprint** used in the schema cache key is a hash of the user's effective
  permission set. When a role changes, the fingerprint changes and stale schemas expire naturally.

### Account security features to build

| Feature | Requirement |
|---|---|
| 2FA (TOTP) | Enrolment with QR, recovery codes, and per-tenant policy: optional, encouraged, or mandatory for all admins |
| Passkeys | Register multiple, name each, list, revoke. Usable as a first factor, replacing the password entirely |
| Password confirmation | Re-confirm before sensitive operations: role changes, passkey management, 2FA changes, gateway credentials, bulk destructive actions |
| Active sessions | List every session for the current user with device, browser, IP, approximate location, and last activity. Revoke one or revoke all others |
| Login history | Every successful login, logout, and failed attempt, with IP, user agent, and timestamp. Visible to the user for their own account, and to a tenant owner for all admins in that tenant |
| New device alerts | Email or push on a login from an unrecognized device or location |
| Failed login throttling | Rate limit by IP and by account, with progressive lockout |
| Forced re-authentication | Invalidate other sessions when a password changes; force a permissions refresh when a role changes so a demoted admin does not keep elevated access until logout |
| Admin session visibility | A tenant owner can see who is currently signed in across their organization and revoke a session |
| Impersonation | Optional support impersonation, always logged loudly, always time-limited, never silent |

### Rules

- Session-based auth throughout. No tokens in local storage.
- Login history and session listing are tenant-scoped like everything else. A tenant owner sees
  their own organization's admins and nobody else's.
- Every security-relevant event writes to the activity log: role granted or revoked, 2FA enabled or
  disabled, passkey added or removed, session revoked, impersonation started or ended.
- Security events must never fail silently. If a login alert cannot send, log it loudly rather than
  swallowing it.

---

## Part C: Internal components to port from the existing system

The existing production system contains patterns that were expensive to learn and are genuinely
good. Build these as **native features of the kit**, not as application-level helpers repeated per
project and not as third-party dependencies.

Equally important is the second table: several existing components exist only to work around the
old framework's architecture. Those must **not** be ported, because the new architecture removes
the problem they solve. Porting them would add overhead for no benefit.

### C1. Port these, as first-class kit features

#### Single-query tab counts

**Today:** nine separate helper classes, one per resource, each computing status tab counts.

**Port as:** a native `->tabs()` feature on the table schema that produces **one** grouped
aggregate query for all tabs, never one count per tab.

```php
->tabs([
    Tab::make('all'),
    Tab::make('active')->where('status', 'active'),
    Tab::make('expired')->where('status', 'expired'),
])
// emits: SELECT status, COUNT(*) FROM clients GROUP BY status   -- one query, all tabs
```

Rule: N tabs must never produce N queries. Counts arrive as a deferred prop so they never block
the rows.

#### Cache generation counters

**Today:** a generation integer embedded in cache keys, incremented to invalidate a whole class at
once.

**Port as:** native. Every kit cache key carries a generation fragment, and
`Cache::bumpGeneration($scope, $tenantId)` invalidates everything in that scope with a single
increment. Never scan or enumerate keys to invalidate; that is slow and misses entries.

#### Event-driven invalidation, declared next to the cache

**Today:** invalidator classes wired into model hooks.

**Port as:** declarative on whatever is cached, so the cache and its invalidation can never drift
apart:

```php
Widget::make('active_clients')
    ->cache(ttl: 300)                       // backstop only
    ->invalidatedBy([ClientSaved::class, ClientDeleted::class]);
```

Rule from operations, which applies to any billing system: accuracy beats caching. TTL is a
self-healing backstop, never the mechanism. A cached value with no declared invalidation event
fails a build check.

#### Stale-while-revalidate with the tenant captured

**Today:** a stable-key cache that serves immediately and rebuilds in the background. Powerful, and
it caused a multi-day cross-tenant cache poisoning incident because the deferred rebuild lost
tenancy.

**Port as:** native, with the fix built in and impossible to omit. The scheduling tenant is
captured at call time and re-bound before the builder runs, and the builder signature takes the
tenant id as a required parameter so ambient state cannot be read by accident.

#### Resilient cache wrapper

**Today:** a wrapper so a cache-store failure degrades instead of throwing.

**Port as:** native. A Redis outage must render a slower page, never a 500. Every kit cache read is
wrapped; every wrapped failure is logged loudly rather than swallowed.

#### Display timezone as a column concern

**Today:** a helper providing tenant-timezone-aware `now()`, day, week, and month boundaries, with
storage in UTC and display in the tenant's zone.

**Port as:** native to every date and datetime column and every date filter. Storage is always UTC,
rendering is always the tenant's display timezone, and date-range filters compute their boundaries
in the tenant's zone before converting to UTC for the query. A developer must not be able to get
this wrong by writing an ordinary date column.

#### Optimistic concurrency (stale record protection)

**Today:** provided by a third-party plugin bound to the old framework.

**Port as:** native, dependency-free. The form carries the record's `updated_at`; the save compares
it and rejects with a conflict response if the record changed underneath. The UI shows what changed
and offers reload or overwrite. Two admins editing the same client is normal in an ISP back office,
and silent last-write-wins loses real data.

#### Unsaved changes guard

**Today:** a third-party plugin, with known fragility around script binding in layout render hooks.

**Port as:** native and trivial in an SPA. Track form dirtiness in the store, intercept navigation
and browser unload, confirm. No plugin, no script injection, no fragility.

#### Queued export with progress

**Today:** a third-party export plugin.

**Port as:** native. Any table exports its **current filtered view** to CSV or XLSX through a queued
job, with progress reported over the existing broadcast channel and a download notification on
completion. Never export in the request cycle, and never export the unfiltered table by accident.

#### Bulk insert helper

**Today:** a Postgres bulk inserter used for imports and seeding.

**Port as:** native, used by the demo seeder and by any import action. Chunked inserts, never model
factories in a loop.

#### Structured failure logging

**Today:** a logger helper that records failures with consistent context.

**Port as:** the kit's single logging convention. Every caught exception logs component, operation,
tenant, user, and record id. No bare `catch (Throwable) {}` anywhere in the package, enforced by a
grep test.

#### Page speed audit tooling

**Today:** commands that walk every page and report milliseconds and query count each, plus a
cache staleness-risk audit.

**Port as:** `php artisan panel:audit`, shipped with the kit. It walks every registered resource
route, reports render time and query count, warms up first and reports the median of three runs so
cold-start spikes cannot produce false findings, and fails if any route breaches the performance
budget. Also `panel:cache-audit` to list cached values with no declared invalidation event.

This tooling is rare, it is what turned "the admin feels slow" into a measured, fixable fact, and
it belongs in the kit from the start rather than being written under pressure later.

#### Permission fingerprint cache

**Today:** a cached per-user permission lookup.

**Port as:** native, and reuse the same value as the schema cache fingerprint described in Part A
so permissions are resolved once per request and serve two purposes.

### C2. Do not port these, the architecture removes the need

| Existing component | Why it exists today | Why it is unnecessary now |
|---|---|---|
| Navigation badge cache | Badges are recomputed on every server-rendered page load | The shell mounts once per session. Badges load once, then update by broadcast |
| Navigation tree cache | The tree is rebuilt per request with a permission check per item | Built once, delivered with the initial payload, cached client-side for the session |
| Page snapshot caches | Whole rendered pages cached to hide render cost | There is no server render to hide |
| Cache warming for cold render | Scheduled warm-up to avoid cold opcache and view-compile spikes on first hit | Rendering is client-side. Warming still applies to expensive **data** aggregates, but not to render |
| Deferred table loading | An attempt to improve first paint on render-bound pages | Meaningless when the table is client-rendered from a JSON payload |
| Request payload call limits | Raised because the old framework issued dozens of method calls per interaction | One interaction is one request |
| Framework state flush listeners | The old component framework leaked static state between requests | The kit holds no per-request static state, verified by the two-tenant single-process test |

Porting anything in this table would be adding overhead to solve a problem that no longer exists.
If the agent finds itself building one of them, that is a signal the architecture has drifted back
towards server rendering and should be questioned.

### C3. Acceptance for Part C

- [ ] N tabs produce exactly one aggregate query, proven by a query-count test
- [ ] Every kit cache key carries a generation fragment, and a single bump invalidates a scope
- [ ] A cached value with no declared invalidation event fails a build check
- [ ] The stale-while-revalidate builder cannot be called without an explicit tenant id
- [ ] A simulated cache-store outage renders a slower page, not an error
- [ ] Every datetime column renders in the tenant display timezone with UTC storage, by default
- [ ] Concurrent edit of one record produces a conflict response, not silent last-write-wins
- [ ] Export runs queued, exports the filtered view, and reports progress
- [ ] No bare empty catch block exists in the package
- [ ] `panel:audit` runs, warms up, reports the median of three runs, and fails on budget breach
- [ ] Nothing from the C2 table has been built

---

## Part D: Additional built-in capabilities

> **Scope discipline still applies.** The base spec's "What NOT to build" list exists because
> scope creep is what turns a 33-day framework into a two-year one. Part D is tiered deliberately.
> Build D1. Leave seams for D2 without building it. Do not start D3 until v1 ships.

### D1. Build in v1, because the schema already carries the information

These are cheap specifically because the resource schema already declares what they need. Each one
would be expensive to add to a system that had not defined a schema contract, and is close to free
here.

#### Global search and command palette

**This supersedes the "global search" entry in the base spec's do-not-build list.** That exclusion
assumed global search meant building a search index. It does not. Every resource schema already
declares which columns are `searchable`, so a cross-resource search endpoint is a loop over
registered resources applying the same query builder the tables already use.

- `Cmd/Ctrl + K` opens a palette.
- Searches across every resource the user has permission to view, respecting tenant scope.
- Results grouped by resource, keyboard navigable, Enter opens the record.
- Also lists navigation destinations and global actions, so it doubles as a command runner.
- Debounced, cancels in-flight requests, capped result count per resource.

For an operator who already knows the customer's phone number, this removes navigation entirely.
It is the highest user-value-per-line-of-code item in the entire kit.

#### Saved views

Filter, sort, and column state already live in the URL. A saved view is that query string, named
and persisted.

- Save the current view, name it, optionally share it with the tenant's other admins.
- Pin saved views into the resource's tab strip.
- A default view per user per resource.

Operators currently rebuild the same filter combination many times a day and no profiler shows
that cost. This removes it.

#### Responsive card mode driven by column priority

Mobile layout breakage is a recurring, expensive failure in server-rendered admin panels. Solve it
once, in the kit, rather than per screen.

```php
TextColumn::make('name')->priority(1),      // always visible, card title
TextColumn::make('status')->priority(2),    // card subtitle / badge
TextColumn::make('plan.name')->priority(3), // card body
TextColumn::make('created_at')->priority(9),// desktop table only
```

Below a breakpoint the table renders as cards using top-priority fields; above it, the full table.
No screen ever hand-writes a mobile layout.

#### Record history tab

`spatie/laravel-activitylog` is already a dependency and the data already exists. Expose it.

- A History tab on any resource that opts in, showing who changed what and when, with before and
  after values.
- Filterable by user and date.
- Permission-gated, since change history can expose values a viewer should not see.

For a billing system this settles disputes. "Who extended this client's expiry" should be a
two-second answer.

#### Money and phone column and field types

A billing panel formats currency on almost every screen, and a multi-country operator cannot
hardcode one.

- **Money**: reads the tenant's configured currency, uses correct minor units and locale-aware
  grouping, never hardcodes a symbol or assumes two decimal places. Derive the currency list from
  ICU rather than a hand-maintained array.
- **Phone**: normalizes to E.164 on save, validates server-side rather than only in the browser,
  renders in a readable national format, and stores without a leading plus if downstream messaging
  gateways require that. Replaces a third-party country-code field plugin.

#### Bulk actions auto-queue above a threshold

Select-all-matching-filter can select tens of thousands of rows. Running that in the request times
out or, worse, half-completes.

- Below a configurable threshold, run inline and return the result.
- Above it, queue automatically, report progress over the existing broadcast channel, and notify
  on completion with a summary of successes and failures.
- The user is told which path was taken. Never silently switch behaviour without saying so.

#### Real-user timing collection

Performance budgets in the base spec are enforced in tests against seeded data, which proves the
code is fast on a developer machine. That is not the same as being fast for an operator in another
country on a mobile network.

- A small collector records actual navigation, filter, and action latency from real sessions.
- Reports p50, p95, and p99 per route, per tenant.
- Surfaces in a panel health view and can alert on regression.

You cannot hold a budget you only measure in CI.

#### First-class empty, error, and permission states

Every list, widget, and detail view must have designed states for: no data yet, no results for the
current filter, insufficient permission, failed to load with retry, and offline. Five states, all
designed, none of them a bare spinner or a blank area. Most admin panels ship one of the five and
users interpret the other four as breakage.

### D2. Leave the seam, build later

Retrofitting these is expensive; leaving room for them is nearly free. Do not build them in v1.

| Capability | Seam to leave now |
|---|---|
| Localization | Never hardcode a date, number, or currency format. All formatting goes through a formatter that accepts a locale. UI text stays English in v1, but adding translations later becomes a file rather than a refactor |
| Soft delete and restore | The query builder is aware a resource may soft-delete, and the schema can carry a `trashed` filter, even though no recycle-bin UI ships in v1 |
| Import | Export already needs queued-job-with-progress-and-error-report plumbing. Build that plumbing generically so the import mapping UI in v2 plugs into it rather than duplicating it |
| Multi-panel switching | The panel manager already supports several panels. Reserve a slot in the shell for a panel switcher without building it |
| Custom field types by third parties | `make:panel-field` already generates a PHP class plus a Vue component. Keep field resolution driven by a registry rather than a hardcoded map, so a plugin system in v2 is a registry entry |

### D3. Explicitly v2, do not start

Notification inbox, keyboard shortcuts beyond the command palette, PWA installability for field
staff, panel health dashboard with queue depth and failed jobs, relation managers, wizards,
rich text and markdown editors, and any plugin marketplace.

Each is defensible. All of them together are how v1 never ships.

### D4. Acceptance for Part D

- [ ] Command palette searches every permitted resource, respects tenant scope, and is keyboard-only navigable
- [ ] A saved view restores filters, sort, and column visibility exactly
- [ ] Every table renders as cards below the mobile breakpoint with no per-screen code
- [ ] Record history shows before and after values and is permission-gated
- [ ] Money renders in the tenant's currency with correct minor units, verified for at least three currencies
- [ ] Phone normalizes to E.164 and is validated server-side
- [ ] A bulk action over the threshold queues, reports progress, and tells the user it queued
- [ ] Real-user timings report p95 per route
- [ ] All five list states (empty, no results, no permission, error, offline) are implemented and designed
- [ ] Nothing from D3 has been started
