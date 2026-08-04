# Upgrading PanelKit

## What a version number means here

PanelKit is `0.x`. Under semver that means **the minor is the breaking position**:
`0.1.0 → 0.2.0` may break you, `0.1.0 → 0.1.1` may not. There is no `1.0` yet and
no date attached to one — it will arrive when the resource API has gone a couple
of minors without a breaking change, not because a milestone said so.

Constrain accordingly:

```json
"panelkit/panel": "^0.6.0"
```

Composer reads `^0.6.0` on a `0.x` package as `>=0.6.0 <0.7.0`, which is what you
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
The PHP half upgrades itself; the _screens_ do not. A release that adds a routed
screen ships the route inside the package and the page file into your
`resources/js/pages` — and Inertia resolves page names by globbing that
directory, so until the file exists the route answers and the browser renders a
white page with a console error naming a file you have never seen.

That happened for real: 0.2.0 added `settings/Roles`, the page file came from
`panel:install`, and nobody re-runs an installer after an upgrade. `panel:update`
exists because a package that ships screens has to ship the step that reconciles
them.

It does four things and refuses a fifth:

|                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **invalidates** the schema cache                                                               | the fingerprint is computed from your resource class, which did not change — so without this, a release that adds a key to the payload serves last version's shape to a bundle rebuilt for the new one, as a successful 200                                                                                                                                                                                                                                   |
| **writes** page files for screens this version routes and the last one did not                 | adding a missing file cannot lose data                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **reports** pending migrations, **by name**                                                    | "3 pending" does not distinguish a column default from a table rewrite at 2am — that decision is the deploy owner's                                                                                                                                                                                                                                                                                                                                           |
| **reports** plugins this version ships that your published `config/panel.php` does not install | the package's config is merged into yours _key by key_, so a setting added inside an array you publish arrives on its own. A **list** does not merge — shortening `abilities` is a decision, and unioning `plugins` back would reinstall what you removed — so a plugin added to the packaged list after you published reaches nobody, silently. That is how `TicketingPlugin` shipped to a release of installations that could configure it and never see it |
| **refreshes** `AGENTS.md`                                                                      | so an agent working in your repository is told what this version added, rather than the last one                                                                                                                                                                                                                                                                                                                                                              |
| **never** runs migrations, never rewrites your config, and never restarts anything             | those are decisions with a maintenance window attached, and a command that took them is one nobody dares run in production                                                                                                                                                                                                                                                                                                                                    |

Then run migrations yourself, when you have decided to:

```bash
php artisan migrate
```

**It ends with `panel:doctor`, whose exit code becomes its own.** That is not a
formality — an upgrade is exactly when a check starts failing that passed under
the old version. Doctor walks the registered resources, the policies, the
indexes, the queue and the schema cache, and reports what is _silently_ wrong: a
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

### 0.6.2 → 0.6.3

**One edit, and only if you hand-wrote your stylesheet.** `composer update`,
`npm update`, `php artisan panel:update`.

`@panelkit/ui` now ships compiled rather than as source, so Tailwind has to scan
its build output instead of its `src`:

```css
/* resources/css/app.css */
- @source '../../node_modules/@panelkit/ui/src/**/*.{vue,ts}';
+ @source '../../node_modules/@panelkit/ui/dist/**/*.js';
```

`panel:install` rewrites this for you; the line above is for anyone who wrote
their own. **`@panelkit/inertia` is unchanged and still points at `src`** — it
still ships source, because its `./pages/*.vue` subpaths are what your page
files import.

If you left it pointing at `src`, the symptom is a correctly structured panel
with no styling: Tailwind finds no class names in a directory the package no
longer ships, so every utility used only inside those components is purged.
`php artisan panel:doctor` reports it.

**Why it changed.** Roughly fifty of the shadcn components declare
`defineProps<SomeTypeFromRekaUi>()`. Resolving an imported type is something the
Vue SFC compiler will not do across a package boundary, so `npm run build` in a
consuming application failed outright. Compiling here resolves those types once,
where `reka-ui` and TypeScript both are.

**`@panelkit/ui/theme/tokens.css` is gone from the exports map.** It pointed at
a file that has never existed, so nothing can have been importing it
successfully. The tokens come from `panel:install`.

**Nothing else needs an edit.** The passkey button returning to the sign-in
screen, and the operations and assistant-key screens moving into the package,
are additive — an application that already declares those routes itself keeps
them, and can drop the packaged ones per panel with
`->without(['operations', 'assistant-settings'])`.

### 0.6.1 → 0.6.2

**One behaviour change, and it is the reason to read this.** `composer update`,
`npm update`, `php artisan panel:update`.

**`panel.live.driver` now defaults to `auto`** — broadcast if this application
really has a broadcaster, poll if it does not. Installing Reverb used to change
nothing until somebody also remembered `PANEL_LIVE_DRIVER=broadcast`, and
removing Reverb left a panel pointed at a websocket nobody was serving.

**Who this changes.** Only an installation that has _all three_ of: a broadcast
connection that is not `null` or `log`, its key set, and `panel.live.channel`
configured — and that never set `PANEL_LIVE_DRIVER`. That installation moves
from polling to broadcasting. Everyone else is exactly where they were, and
anything you set explicitly is never overruled.

**Why you might not want it**, and the opt-out is one line:

```dotenv
PANEL_LIVE_DRIVER=poll
```

**Configured is not running.** `BROADCAST_CONNECTION=reverb` says a connection
is _defined_, not that a Reverb process is up — and the failure modes are not
symmetrical. A slow poll is a slow poll; a broadcast with nothing listening is a
list that is silently static and looks exactly like a list where nothing
changed. If any environment of yours has the configuration without the process —
a staging box sharing production's `.env` shape is the usual one — set the
driver explicitly there.

**Fixed:** `import { PanelShell } from '@panelkit/inertia'` now works in a
project with no TypeScript installed. The root entry re-exports every screen and
three of them named an imported type in `defineProps`, which the SFC compiler
could only resolve by loading TypeScript out of _your_ project. Nothing to do —
it either affected you or it did not.

### 0.6.0 → 0.6.1

**Nothing breaks, and there is nothing you must do.** `composer update`,
`npm update`, `php artisan panel:update`.

**The shell now ships** — `PanelShell`, `PanelSidebar` and `PanelAccountMenu` in
`@panelkit/inertia` — and the `PanelLayout.vue` that `panel:install` publishes
is a thin wrapper over it. **Your published layout is not touched**: the
installer has never overwritten it, so an application that already has one keeps
exactly the frame it has. This is what a _fresh_ install and a _newly generated_
portal now get.

**To adopt it in an existing app**, replace the body of your
`resources/js/pages/../PanelLayout.vue` with:

```vue
<script setup lang="ts">
import { PanelShell } from "@panelkit/inertia";
</script>

<template>
  <PanelShell><slot /></PanelShell>
</template>
```

The sidebar reads the `panelNav` the server already shares, so there is nothing
to wire. `#topbar` and `#actions` are slots for your own controls.

**`panel.logout` is new** in the shared props, resolved server-side: the panel's
own `{id}.logout` when `--auth` scaffolded one, a plain `logout` when Fortify
did, and `null` when neither exists — in which case the account menu renders no
sign-out item rather than posting to a route that would 404.

Also: `PkCard` for ordinary content blocks, and `useUnsavedChanges` /
`useUnsavedGuard` for a page that is not a record form.

### 0.5.0 → 0.6.0

**One behaviour change, and it is the reason to read this section.**

**The package's config is now merged into yours KEY BY KEY.** Before,
`mergeConfigFrom` merged one level: a published `config/panel.php` supplied
`auth` _whole_, so `auth.password.max_age_days` was read as unset however the
package file read. That is why a setting a release added could be invisible on
an existing install - and where the call site had no default of its own, the
feature it enabled simply never appeared.

**What that changes for you:** a nested key you deleted, or never had, now
resolves to the package default instead of `null`. If your code branched on a
`panel.*` key being absent - `config('panel.auth.broker') ?? $mine` - check
those call sites. **Setting the key explicitly always wins**, at any depth, so
the fix is to write the value you want rather than to rely on its absence.

**Lists are unchanged and still win whole**: `abilities`, `plugins`,
`pagination.per_page_options` and every other list stay exactly as you published
them. A merge that unioned them would reinstall a plugin you removed. The two
path-keyed maps - `discover` and `discover_pages` - are treated the same way for
the same reason.

**`panel:update` reports something different.** It used to name config keys the
shallow merge could not supply; the deep merge supplies them, so it now names
**plugins this version ships that your `plugins` array does not install**. That
is the one gap the merge deliberately cannot close.

**Removed:** `ConfigDrift::keysNotSuppliedByMerge()`, replaced by
`ConfigDrift::pluginsNotSuppliedByMerge()`. Only relevant if you called it -
the old one could no longer report anything.

**Everything else is additive:**

- `->form()` on `RecordAction` and `BulkAction` - an action that asks for a
  reason, an amount or a plan before it runs, in a modal that opens with no
  network request. Fields are declared server-side and are the allow-list.
- `panel:doctor` notes a `path`-installed package composer **copied** instead of
  symlinking, which is why a fix in the package sometimes does not happen.
- `panel:doctor` also reports a resource or page **on disk that nothing
  registered** (a `discover` path one directory too high registers nothing and
  says nothing), and a packaged screen with **no page file** in
  `resources/js/pages`, which routes fine and renders blank.
- `make:panel-resource --generate` writes a commented action example into the
  table chain.
- `panel:install --auth` scaffolds sign-in for the **default** panel, not just
  for a portal you generate with `make:panel`. Both write it through one shared
  trait, so there is only ever one set of throttling and session rules.
- `PkCard` — the ordinary block of content, with title, description, `#actions`
  and `#footer` slots. `useUnsavedChanges` (in `@panelkit/ui`) and
  `useUnsavedGuard` (in `@panelkit/inertia`) give a page that is not a record
  form the same dirty tracking and navigation guard `UnsavedBar` draws.

### 0.4.0 → 0.5.0

**Nothing breaks, and there is nothing you must do.** `composer update`,
`npm update`, `php artisan panel:update`.

Everything this release adds is opt-in or new. Three things are worth knowing.

**`panel:install` now publishes an Inertia bootstrap** — `resources/views/app.blade.php`,
`resources/js/app.ts`, `resources/js/layouts/PanelLayout.vue` and
`resources/css/app.css`. **It never overwrites a file you already have** and
reports what it kept. An existing application is unaffected; to adopt the
published versions, move yours aside and re-run it.

**Sign-in for a generated portal:**

```bash
php artisan make:panel reseller --path=reseller --auth
php artisan panel:make-user
```

The routes live under the panel's prefix (`/reseller/login`) and authenticate
that panel's guard. **Your application's own `/login` is untouched**, which is
the point: a starter kit serves one guard and a second portal has its own.

**If you use passkeys, nothing changes; if you do not, your build now works.**
The component imported `@laravel/passkeys/vue` statically, so an application
without that package could not run `npm run build` at all. It is a runtime
import now.

### 0.3.3 → 0.4.0

**Nothing breaks. Two things arrive and one thing you should add by hand.**

`composer update`, `npm update`, `php artisan panel:update`, then:

```bash
php artisan panel:permissions sync
```

That last one matters more than usual: announcements now register a resource, so
`view_any_announcements` and friends are new ability names your roles do not
hold yet.

**Add the plugin to `config/panel.php`.** Your published config supplies its
`plugins` array whole, so the package's default never reaches you:

```php
'plugins' => [
    // ...whatever is already there
    PanelKit\Panel\Alerts\AnnouncementsPlugin::class,
],
```

Without it the composer screen does not exist. The banner, the model and the
delivery are unaffected — they are the package's, not the plugin's.

**Your own base policy can go.** `PanelKit\Panel\Policies\TenantResourcePolicy`
is the same class the reference app carried for a year. Point your policies at
it and delete yours — but read this before you do:

An override must use the base class's parameter type **exactly**:

```php
public function update(Authenticatable&Authorizable $user, ?Model $record = null): bool
```

Not `update(User $user, ...)`. PHP forbids narrowing a parameter in an override,
and the failure is a **compile-time fatal** thrown while the class loads — PHPUnit
reports it only as "Premature end of PHP process" and a web request dies with a
blank page. Reach for your own model inside the method with an `instanceof`.

**`make:panel-resource --generate` now writes a policy that denies** rather than
one that permits everybody and warns. Nothing you have already generated
changes; new ones need `panel:permissions sync` before the screen opens.

### 0.3.2 → 0.3.3

**Nothing breaks, and one thing you should run.** `composer update`,
`npm update`, `php artisan panel:update`.

If you upgraded to 0.3.2 and turned ticketing on but no screens appeared, this
release tells you why instead of leaving you to find it:

```bash
php artisan panel:doctor
```

A published `config/panel.php` supplies its own `plugins` array whole, so the
`TicketingPlugin` entry 0.3.2 added to the package default never reached you.
Add it by hand:

```php
'plugins' => [
    // ...whatever is already there
    PanelKit\Panel\Ticketing\TicketingPlugin::class,
],
```

Doctor also now checks that the tables `panel.ticketing.tables` names actually
exist, which catches the typo that the migration's "skip a table that exists"
branch would otherwise hide.

### 0.3.1 → 0.3.2

**Nothing breaks. Ticketing arrives, switched off.**

`composer update`, `npm update`, `php artisan panel:update`. The migration
creates `panel_tickets` and `panel_ticket_replies`, and nothing appears in any
panel until you say which panel is which:

```php
// config/panel.php
'ticketing' => [
    'operator' => 'admin',   // the queue: everybody's tickets
    'opener' => 'portal',    // the customer's own, and only their own
],
```

**Both or neither.** Naming one key and not the other throws at boot, and so
does naming one portal for both ends — `register()` would mount the queue and
skip the customer side entirely. Leaving both unset is the supported off state:
nothing mounts and nothing complains.

**If you already have ticket tables, do not migrate — rename nothing.** Point
config at what you have:

```php
'ticketing' => [
    'tables' => ['tickets' => 'tickets', 'replies' => 'ticket_replies'],
],
```

No data moves and there is no downtime; the packaged migration skips a table
that already exists. This is the path the reference app itself took.

**Your own ticket classes, if you wrote any, can go** — models, policy, resources,
controllers and the thread component are all in the package now. What cannot go
is anything of yours that a `Ticket` model referenced by class name; the packaged
model is `PanelKit\Panel\Models\Ticket`.

**One authorisation note, and it is the reason to read this section.** The
packaged policy asks your user model for `hasPermission()` if it has one and
falls back to `can()` if it does not. If your user model has neither a
`hasPermission()` nor Spatie roles reachable through the gate, the ticket screens
deny everybody — which is the correct posture, and looks exactly like a broken
install. `php artisan panel:permissions sync` first, and confirm
`view_any_tickets` exists.

### 0.3.0 → 0.3.1

**Nothing breaks, and nothing needs doing.** `composer update` and `npm update`,
then `php artisan panel:update` as always.

One behaviour changes, and only in an installation that had per-tenant brand
colours set: **they now apply.** `useTenantTheme` wrote `--color-{token}`, which
the stylesheet never read, so a brand colour rendered nowhere. It writes
`--{token}` now. If your organisations carry `theme_colors`, expect the panel to
start using them — that is the fix, not a side effect.

**If you index the blueprint for your assistant, stop.** `BlueprintSource` is out
of `panel.knowledge.sources` in the reference app, because a developer guide in
the same store as operator help crowds it out — an export question started
returning recipes about clusters. Remove it from your own config and reindex:

```bash
php artisan panel:knowledge index --tenant=<id>
```

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
fails _open_ — abilities stop being scoped. `panel:doctor` reports it as a
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
