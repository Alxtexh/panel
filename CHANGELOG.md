# Changelog

Versioning policy, and what counts as a breaking change, are in
[UPGRADING.md](UPGRADING.md). The three packages — `panelkit/panel`,
`@panelkit/ui`, `@panelkit/inertia` — are versioned together.

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
