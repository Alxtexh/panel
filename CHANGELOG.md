# Changelog

Versioning policy, and what counts as a breaking change, are in
[UPGRADING.md](UPGRADING.md). The three packages — `panelkit/panel`,
`@panelkit/ui`, `@panelkit/inertia` — are versioned together.

## Unreleased

### Fixed

- **`panel:update` did not invalidate the schema cache.** The manual sequence it
  replaced had that as its first step. The fingerprint is computed from your
  resource class, which an upgrade does not change — so a release that added a
  key to the payload kept serving the old shape to a bundle rebuilt for the new
  one, as a successful 200 with a control missing.
- **The agent guide said widgets could not be mounted.** `AGENTS.md` carried
  "these have no host in the package … PanelKit routes no dashboard and has no
  mechanism for a non-resource page" — true for two releases, and false from the
  moment 0.3.0 shipped `DashboardPage`. A test pinned that sentence, so the
  guide told every agent reading it that this release's flagship feature did not
  exist, and the test defended the claim.
- **README listed two gaps that had closed and one that never existed.** Bulk
  mutations were described as unbuilt; `BulkRunner` has been walking selections
  in keyset chunks for a long time. Live updates were called "unexercised end to
  end"; the poll driver is the default and `LiveUpdatesTest` drives the real
  endpoint — it is the socket, not the feature, that no test connects to. And
  "every page logs a Vue hydration mismatch" cannot happen here at all: SSR is
  off, so there is no server-rendered markup to hydrate against. Each of the
  four gaps has now been checked against the tree or the browser rather than
  carried forward.
- **`UPGRADING.md` said `0.1.0` was the first and only tagged release**, with
  version-specific notes reading "Nothing here yet". Two releases had shipped
  past it, one of them breaking. It now carries notes for both and names
  `panel:update`, which it had never mentioned.

### Added

- `panel:update` reports config keys a new version reads that a **published**
  `config/panel.php` does not have. Only the ones `mergeConfigFrom` cannot
  supply — a key added inside an array you publish, which `config()` then reads
  as unset however the package file reads.
- The guide gained recipes for **a page that is not a resource** and **a
  dashboard**, and a catalogue entry for the `Pages` namespace.
- `verify-install.sh` now runs `panel:update` in the fresh application it built.
  It verified `composer require` and stopped there — leaving the command
  somebody runs on *every release after the first* checked only from inside the
  monorepo, where the package is a symlink and `config/panel.php` has been
  edited by hand for months. A fresh install is the only place the config-drift
  report has a known correct answer.

## 0.3.0

**A panel could declare a list of records and nothing else.** This release adds
the other kind of screen.

### Pages — anything that is not a resource

`php artisan make:panel-page ServerHealth` writes a class and its one-line Vue
file; discovery registers it. The route, the sidebar entry, the ability, the
permission-matrix entry and the page header all follow from the class.

`actions()` declares endpoints the page owns — `PUT` on its own address for the
ordinary save, or a sub-path — **each with its own ability**, because seeing and
doing are different grants.

### Dashboards — a host for the widgets

`StatWidget` and `ChartWidget` have shipped since the beginning and were
referenced nowhere in the package: correct value objects that nothing could
mount. `DashboardPage` declares `stats()` and `charts()`, and the packaged
`PanelDashboard` draws them. Every widget resolves as its own deferred prop, and
a widget the operator may not see is never queried.

### Also new

- `panel:update` — what to run after `composer update`. Writes page files a new
  version added, **reports** pending migrations by name without running them, and
  runs `panel:doctor` last with its exit code.
- **Passkeys** (`Auth\Passkeys`) over Fortify's WebAuthn, as a soft dependency.
- An in-panel **changelog** (`ChangelogPage`), content from `panel.changelog`.
- An **environment editor** (`EnvironmentPage`) — allowlisted keys only,
  boot-critical keys refused, secrets never sent to the browser, atomic writes,
  and it restarts nothing.
- **`CountryField`** — 173 countries, ISO or dialling code.
- `make:panel-page`, and `Countries` as reference data.

### If you are upgrading from 0.2.0

**Page slugs share a namespace with resource keys.** Both are URL segments in the
same panel prefix, so a clash now throws at boot naming both classes rather than
leaving one screen silently unreachable.

**The package registers two pages of its own** — `whats-new` and `environment` —
but only once configured. Both are absent entirely until `panel.changelog` or
`panel.env.editable` is non-empty, precisely so they cannot claim a URI an
application already uses. If you have your own screen at either address and want
the packaged one instead, remove yours first.

**`panel.discover_pages`** is a new key, defaulting to `app/Panel/Pages`.

## 0.2.0

**Breaking.** PanelKit now owns the permission system. `panelkit/panel` requires
`spatie/laravel-permission`, ships `PanelKit\Panel\Models\Role`, a migration, the
`grants_all` column, `panel:permissions` and the permission matrix screen.

### If you are upgrading from 0.1.0

**You get a `roles` migration.** It creates nothing that already exists — if your
application has been using Spatie for years, it adds only the `grants_all` column
and leaves every table and row alone. `down()` drops nothing, because it cannot
tell a table it made from one that predates it.

**Set `permission.teams` if you are multi-tenant.** Spatie defaults it to `false`,
and that default fails open here: roles carry a tenant, the panel sets a team id
on every request, and the permission package ignores both — one role granting
across every organisation at once, with no error and nothing in a log.

```php
// config/permission.php
'teams' => true,
'column_names' => ['team_foreign_key' => 'tenant_id'],
```

`panel:doctor` reports this as a problem, so a deploy that runs it will fail
rather than serve the union of everybody's permissions.

**Set `panel.tenancy.model`** to your tenant class if you have one, so
`panel:permissions` can visit every organisation. Null is a real answer — a
single-tenant installation reconciles once with a null team id.

**The matrix mounts itself at `/roles`.** If you already mount your own, set
`panel.routes.roles` to `false`; two URLs rendering one screen is how a bookmark
comes to disagree with a menu. If you have a *resource* keyed `roles`, it wins
the URL and the matrix becomes unreachable — `panel:doctor` now reports that too,
because the failure is otherwise silent.

### Added

- `panel:permissions list|sync`, with `--prune` and `--dry-run`. Ability names are
  derived from the resource registry, so the interesting work is pruning names
  that no longer correspond to anything.
- `grants_all`: a role that holds every ability *including ones invented later*.
  Inferring it from "currently holds all of them" would make a role become a
  superuser the moment somebody ticked the last box.
- `panel:doctor` checks `permission.teams` under tenancy, and the `roles` route
  collision.
- `@panelkit/inertia` ships `settings/Roles`.

### Changed

- `panel:journey` moved to the reference app. It walks *that* app's routes.
- `panel:benchmark` stays: it is the only reader of `Budgets::register()` and
  `Resource::budgetMs()`, both public API.
- The seeders (`panel:seed-reference`, `panel:seed-demo`) are no longer shipped.
  They invented an ISP's subscribers, which no other installation wants, and
  created accounts whose password is written in the file.

## 0.1.0

First tagged release. Everything is new, so rather than list it, here is what
the version is claiming to be true.

**A resource is one PHP file.** `php artisan make:panel-resource Client
--generate` produces a class; discovery registers it; there is no route to add
and no Vue to write. The list, the form, the record page and the trash are all
served from the schema that class declares.

**It stays fast at 250,000 rows.** Keyset pagination, declared joins, deferred
counts, and a schema cache. `panel:benchmark` measures it and fails on a budget
breach; the N+1 guard and the cross-tenant isolation matrix are tests, not
intentions.

**Two panels, scoped separately.** `make:panel` generates a portal with its own
guard, its own navigation and its own account menu. A resource belongs to
exactly one panel, and the isolation suite covers every resource and mutation
path across the boundary.

**Tenancy three ways.** Column, database, or hybrid, via `stancl/tenancy` or
your own resolver. A null tenant is a denial, never "all tenants".

**It installs elsewhere.** `php artisan panel:install` into a fresh
`laravel/vue-starter-kit` app, verified from a clean clone.

### Known limits

Stated plainly because a first release that oversells is worse than one that
does not.

- **Custom fields are structural only.** `Resource::customFields()` and the
  cache fingerprint exist; nothing populates them and there is no UI.
- **Trash pages at 25 per resource.** Delete thirty clients and five are
  unreachable.
- **Monitoring is a point-in-time snapshot.** "Disk at 91%" does not alert, and
  yesterday is not visible.
- **Workspaces expose `show` only.** No create, switch or member management.
- **Retrieval indexes the help centre only.** The build guide, the blueprint and
  resource records are not searchable by the assistant.
- **Browser tests need a non-snap Chrome.** They skip with an instruction when
  none is found; a snap-packaged Chromium makes ChromeDriver hang rather than
  fail.
- **`@panelkit/inertia` has no component tests.** `@panelkit/ui` now does — 8
  spec files, 53 tests, both regressions found this release pinned as
  assertions rather than just fixed — but the Inertia-bound screen package is
  still verified only through Laravel feature tests and the browser suite.

[UPGRADING.md]: UPGRADING.md
