# Changelog

Versioning policy, and what counts as a breaking change, are in
[UPGRADING.md](UPGRADING.md). The three packages — `panelkit/panel`,
`@panelkit/ui`, `@panelkit/inertia` — are versioned together.

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
- **13 tests skip without fixtures** — MariaDB (5) and pgvector (8). They pass
  when their scripts have been run.
- **No lint step in CI.** 230 violations, 216 auto-fixable; the auto-fix
  reformats 65 files, so the decision is deferred rather than made badly.

[UPGRADING.md]: UPGRADING.md
