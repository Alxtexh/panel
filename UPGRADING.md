# Upgrading PanelKit

## What a version number means here

PanelKit is `0.x`. Under semver that means **the minor is the breaking position**:
`0.1.0 → 0.2.0` may break you, `0.1.0 → 0.1.1` may not. There is no `1.0` yet and
no date attached to one — it will arrive when the resource API has gone a couple
of minors without a breaking change, not because a milestone said so.

Constrain accordingly:

```json
"panelkit/panel": "^0.3.0"
```

Composer reads `^0.3.0` on a `0.x` package as `>=0.3.0 <0.4.0`, which is what you
want: patches arrive, a breaking minor does not.

The three packages are **versioned together**. `panelkit/panel@0.2.0` expects
`@panelkit/ui@0.2.x` and `@panelkit/inertia@0.2.x`, and the PHP half's schema
payload is the contract between them. Mixing majors is not tested and the
failure is a rendered screen with a missing control, not an error.

## What counts as breaking

**Breaking** — allowed in a minor, called out in the changelog:

- a `Resource` method changing signature or disappearing
- a schema key changing shape (the JSON the PHP half sends the Vue half)
- a config key moving or changing default
- a published migration changing (you will need a new one; we do not edit shipped migrations)
- a Vue component's props changing, if it is exported from `@panelkit/ui`

**Not breaking** — expect these in a patch:

- new field types, column types, or actions
- new optional arguments with defaults
- anything under `PanelKit\Panel\Support\` or `Internal\` — these have no
  stability promise and are not part of the public surface
- changes to the playground app, which is a reference, not a package

## Upgrading a panel

```bash
composer update panelkit/panel
npm update @panelkit/ui @panelkit/inertia
php artisan panel:update
php artisan wayfinder:generate --with-form
npm run build
```

**`panel:update` is the step that reconciles what `composer update` cannot.**
The PHP half upgrades itself; the *screens* do not. A release that adds a routed
screen ships the route inside the package and the page file into your
`resources/js/pages` — and Inertia resolves page names by globbing that
directory, so until the file exists the route answers and the browser renders a
white page with a console error naming a file you have never seen.

That happened for real: 0.2.0 added `settings/Roles`, the page file came from
`panel:install`, and nobody re-runs an installer after an upgrade. `panel:update`
exists because a package that ships screens has to ship the step that reconciles
them.

It does four things and refuses a fifth:

| | |
|---|---|
| **invalidates** the schema cache | the fingerprint is computed from your resource class, which did not change — so without this, a release that adds a key to the payload serves last version's shape to a bundle rebuilt for the new one, as a successful 200 |
| **writes** page files for screens this version routes and the last one did not | adding a missing file cannot lose data |
| **reports** pending migrations, **by name** | "3 pending" does not distinguish a column default from a table rewrite at 2am — that decision is the deploy owner's |
| **reports** config keys this version reads that your published `config/panel.php` does not have | only the ones the shallow merge cannot supply — a key added *inside* an array you publish. `config()` reads those as unset whatever the package file says: at best the value cannot be edited from the file that appears to hold it, at worst the feature it enables never appears and nothing errors |
| **refreshes** `AGENTS.md` | so an agent working in your repository is told what this version added, rather than the last one |
| **never** runs migrations, never rewrites your config, and never restarts anything | those are decisions with a maintenance window attached, and a command that took them is one nobody dares run in production |

Then run migrations yourself, when you have decided to:

```bash
php artisan migrate
```

**It ends with `panel:doctor`, whose exit code becomes its own.** That is not a
formality — an upgrade is exactly when a check starts failing that passed under
the old version. Doctor walks the registered resources, the policies, the
indexes, the queue and the schema cache, and reports what is *silently* wrong: a
resource with no policy, a filter with no index, a permission config that fails
open. Those produce a working panel that is slow or over-permissive, which is the
class of failure that does not announce itself. A deploy step that exits non-zero
is one somebody has to look at.

You do not need `panel:cache-clear` separately — `panel:update` covers the schema
cache, whose fingerprint does not know the package changed under it.

**Expect a non-zero exit on an installation that is not configured yet.** Because
the exit code is doctor's, `panel:update` returns non-zero whenever doctor finds
a problem — and a brand-new installation has at least one: a bare Laravel
publishes Spatie's config with `teams => false`, which under column-mode tenancy
is fail-open, so a role would grant across every organisation at once. That is
the check doing its job. If you put `panel:update` in a deploy pipeline, fix what
doctor names rather than adding `|| true`.

If you have published views or overridden a packaged component, re-diff them:

```bash
php artisan vendor:publish --tag=panel-config --force   # writes over your config; diff first
```

## Version-specific notes

Newest first. Each names the change, what breaks, and the edit.

### 0.3.0 → 0.3.1

**Nothing breaks, and nothing needs doing.** `composer update` and `npm update`,
then `php artisan panel:update` as always.

One behaviour changes, and only in an installation that had per-tenant brand
colours set: **they now apply.** `useTenantTheme` wrote `--color-{token}`, which
the stylesheet never read, so a brand colour rendered nowhere. It writes
`--{token}` now. If your organisations carry `theme_colors`, expect the panel to
start using them — that is the fix, not a side effect.

The accent in the appearance drawer still wins for anybody who has picked one.
`primaryChosen` is a new key in the per-user appearance record; it defaults to
false, so existing accounts are treated as "has not chosen" and see their
organisation's colour until they touch the picker. If you have published your own
appearance endpoint, add `primaryChosen` to its validation allowlist or the flag
will not persist across browsers.

### 0.2.0 → 0.3.0

**Nothing breaks.** This release adds screens that are not resources; it changes
nothing about the ones that are.

Two things to know:

**Page slugs and resource keys share one namespace.** Both are URL segments in
the same panel prefix. A clash now throws at boot naming both classes — before
there were no pages, so there was nothing to clash with. If you registered a
resource whose key matches a page you then add, you will hear about it at boot
rather than by finding one screen unreachable.

**The package registers two pages of its own** — `whats-new` and `environment` —
and both are **absent entirely** until configured. `whats-new` needs
`panel.changelog` to be non-empty; `environment` needs `panel.env.editable`.
That is deliberate rather than tidy: registering them unconditionally took
`/whats-new` from an application that already had its own screen there, because
the same URI registered later wins. If you want the packaged one at an address
you already use, remove yours first.

**`panel.discover_pages` is a new key**, defaulting to `app/Panel/Pages`. If you
have published `config/panel.php`, `panel:update` names it — it is top-level, so
the merge actually does supply it, but you cannot edit what you cannot see.

Your existing `StatWidget` and `ChartWidget` classes did not change. What changed
is that there is now something to mount them on: `DashboardPage`, drawn by the
packaged `PanelDashboard`. Nothing forces you to move a dashboard you already
hand-rolled.

### 0.1.0 → 0.2.0

**Breaking. PanelKit now owns the permission system.**

`panelkit/panel` requires `spatie/laravel-permission`. If you already have it,
nothing conflicts — it is the same package, and your `roles` and `permissions`
tables stay the source of truth. If you had your own permission layer, the panel
now expects Spatie's.

```bash
php artisan migrate            # the package publishes one migration (grants_all)
php artisan panel:permissions sync
```

**`panel:permissions sync` does not prune by default,** because a name it does
not recognise may be one your application defined. Use `--prune` when you have
read the list it prints.

**`grants_all` covers only registered ability names.** A role holding it gets
every ability the registry derives — including ones a later version invents —
which is the point, and also the reason it is not a general wildcard.

**`settings/Roles` is a routed screen, and its page file comes from the
installer.** This is the release that proved `panel:update` had to exist: every
0.1.0 installation that ran `composer update` got a route the server answers, a
component the client cannot resolve, and a white page naming a file the developer
has never seen. If you upgraded before `panel:update` existed, run it now.

**Check `teams` in `config/permission.php`.** Under tenancy, `teams => false`
fails *open* — abilities stop being scoped. `panel:doctor` reports it as a
problem rather than a note.

## If an upgrade goes wrong

The panel is a Composer package with no runtime state of its own beyond its
published migrations and config. Rolling back is:

```bash
composer require panelkit/panel:0.1.0
php artisan panel:cache-clear
npm run build
```

Migrations are the exception — a published migration that has run is yours, and
rolling the package back does not roll the schema back. Any release that
publishes a migration says so in the changelog, and any migration we publish is
additive for exactly this reason.
