# Upgrading PanelKit

## What a version number means here

PanelKit is `0.x`. Under semver that means **the minor is the breaking position**:
`0.1.0 → 0.2.0` may break you, `0.1.0 → 0.1.1` may not. There is no `1.0` yet and
no date attached to one — it will arrive when the resource API has gone a couple
of minors without a breaking change, not because a milestone said so.

Constrain accordingly:

```json
"panelkit/panel": "^0.9.5"
```

Composer reads `^0.9.5` on a `0.x` package as `>=0.9.5 <0.10.0`, which is what you
want: patches arrive, a breaking minor does not.

The two packages are **versioned together**. `panelkit/panel@0.9.5` expects
`@alxtexh-enterprise/panel@0.9.x` on npm, and the PHP half's schema payload is
the contract between them. Mixing minors is not tested and the failure is a
rendered screen with a missing control, not an error.

(The npm half has been renamed twice: three packages until 0.8.0, when two of
them became `@panelkit/panel`, and that became `@alxtexh-enterprise/panel` in
0.9.0. Notes for earlier releases name the packages as they were, because they
were.)

## What counts as breaking

**Breaking** — allowed in a minor, called out in the changelog:

- a `Resource` method changing signature or disappearing
- a schema key changing shape (the JSON the PHP half sends the Vue half)
- a config key moving or changing default
- a published migration changing (you will need a new one; we do not edit shipped migrations)
- a Vue component's props changing, if it is exported from `@panelkit/panel`

**Not breaking** — expect these in a patch:

- new field types, column types, or actions
- new optional arguments with defaults
- anything under `PanelKit\Panel\Support\` or `Internal\` — these have no
  stability promise and are not part of the public surface
- changes to the playground app, which is a reference, not a package

## Upgrading a panel

```bash
composer update panelkit/panel
npm update @panelkit/panel
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

It does a short list of things, and refuses one:

|                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **invalidates** the schema cache                                                               | the fingerprint is computed from your resource class, which did not change — so without this, a release that adds a key to the payload serves last version's shape to a bundle rebuilt for the new one, as a successful 200                                                                                                                                                                                                                                   |
| **writes** page files for screens this version routes and the last one did not                 | adding a missing file cannot lose data                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **repoints** the `@source` lines in `resources/css/app.css` when a release renames the npm package | 0.8.0 merged two packages into one, and these are strings in a CSS file that nothing resolves. A stale one makes Tailwind scan a directory that is gone, find no class names, and purge every utility used only inside the packaged screens — a panel with no layout and a clean build log |
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

### 0.9.4 → 0.9.5

`composer update panelkit/panel`, `npm install ./vendor/panelkit/panel/client/panelkit-client.tgz`,
`php artisan panel:update`, `npm run build`. No config keys, no migrations.

**One visible change: every `ToggleField` now renders a switch rather than a
checkbox.** Same column, same boolean, same submitted value — but it looks
different. If a form wanted the checkbox, that is now `CheckboxField`, which is
a new field rather than a rename.

**Nothing else is breaking.** The rest of 0.9.5 is additive: `HiddenField`,
`Flex`, `Fieldset`, `Callout`, `ScatterChart`, `CodeColumn`, `KeyValueColumn`
and `QueryBuilderFilter`, plus typed entries on the record page.

**If you use `MoneyColumn`, look at a record page.** It was not formatted there
before 0.9.5 — the list showed a currency and the record page showed raw minor
units. Nothing to change; the fix is automatic.

### 0.9.3 → 0.9.4

`composer update panelkit/panel`, `npm install ./vendor/panelkit/panel/client/panelkit-client.tgz`,
`php artisan panel:update`, `npm run build`. Nothing to change.

One user-visible string changed: the workspace name field's placeholder, which
had been an ISP's name from the reference application. If you had worked around
it by overriding `settings/Workspaces.vue`, you no longer need to.

### 0.9.2 → 0.9.3

`composer update panelkit/panel`, `npm install ./vendor/panelkit/panel/client/panelkit-client.tgz`,
`php artisan panel:update`, `npm run build`. No new page files, no config keys,
no migrations.

**Run `php artisan panel:doctor` afterwards.** It gained a check that may fail
on an installation that has been working: it now refuses a panel that cannot
resolve a sign-in route. If it fires, your panel is redirecting guests to a
route that does not exist and every one of its URLs returns 500 for anybody not
already signed in - you may simply never have opened it in a logged-out
browser. `php artisan panel:install --auth` writes the sign-in screen and its
routes.

**If you install from the private GitHub repository**, add:

```bash
composer config preferred-install.panelkit/panel source
```

`"no-api": true` alone is not enough - Composer resolves over git and then still
reaches for the API zipball, which 404s on a private repository. This was wrong
in PANELKIT.md until now.

### 0.9.1 → 0.9.2

**The client half moved. It now ships inside the Composer package.**

```bash
composer update panelkit/panel
npm uninstall @alxtexh-enterprise/panel
npm install ./vendor/panelkit/panel/client/panelkit-client.tgz @vitejs/plugin-vue
php artisan panel:update
npm run build
```

**Nothing in your code changes.** The package name in `node_modules` is still
`@alxtexh-enterprise/panel`, so every import, the `@source` lines and any Vite
alias stay exactly as they are. Only where npm fetches it from has changed.

**You can delete `.npmrc`** if it existed only for this, and the
`read:packages` token with it. There is no registry in the path any more.

**Why.** GitHub Packages' npm registry requires a token even for public
packages - there is no anonymous read - so it was never going to be the
frictionless install it looked like, and the publish workflow had failed on
every run since 0.9.0. Vendoring the tarball removes the second channel
instead of repairing it: one credential, and two halves that cannot be
different versions.

**`panel:doctor` now fails** if the client half is missing or its version does
not match the PHP. Both used to be silent - a blank panel, or a screen with a
missing control under a 200.

### 0.9.0 → 0.9.1

`composer update panelkit/panel`, `npm update @alxtexh-enterprise/panel`,
`php artisan panel:update`, `npm run build`. No new page files, no config keys,
no migrations.

**Nothing to change on your side**, but two fixes are worth knowing about
because you may have worked around them:

- **A file picker that did nothing** on a `PkFileUpload` is fixed. A function
  shared a name with a prop, so the template's `@change` handler could resolve
  to an array. Drag-and-drop was never affected.
- **`UnsavedBar` gained an optional `discardLabel` prop and a `discard` emit.**
  Omit the prop and the bar renders exactly as before. Pass it to offer
  "revert in place" next to Cancel, which leaves the page - the packaged
  record form now does.

### 0.8.3 → 0.9.0

**The npm package is renamed to `@alxtexh-enterprise/panel`.** The Composer
package keeps its name; only the client half moves.

The reason is registry mechanics rather than design: GitHub Packages scopes an
npm package to a GitHub organisation, and `panelkit` there belongs to somebody
else. A scope you do not own is a package you cannot publish privately.

```bash
composer update panelkit/panel
npm uninstall @panelkit/panel
npm install @alxtexh-enterprise/panel
php artisan panel:update
npm run build
```

Then find-and-replace `@panelkit/panel` with `@alxtexh-enterprise/panel` across
`resources/js`. **Your build finds every import you miss.** It does NOT find the
two `@source` lines in `resources/css/app.css`, which is why `panel:update`
rewrites them: they are strings in a CSS file that nothing resolves, and a stale
one is not an error - Tailwind scans a directory that is not there, finds no
class names, and purges every utility used only inside the packaged screens. The
panel renders with no layout, no colour and a clean build log.

`panel:update` handles both hops, so an installation still on 0.7.x with
`@panelkit/ui` and `@panelkit/inertia` in its stylesheet reaches the current
name in one run.

**`.npmrc`, next to `package.json`:**

```
@alxtexh-enterprise:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

`GITHUB_TOKEN` needs `read:packages` and nothing else. Do not commit the token;
`.npmrc` reads it from the environment.

**`User` is now exported** from `@alxtexh-enterprise/panel/inertia`. If you
declared your own type for the value `AppHeader`'s `userMenu` slot passes you,
import that one instead - a hand-written copy compiles and then reads fields
the shell does not send.

### 0.8.2 → 0.8.3

The usual: `composer update`, a fresh `npm pack`, `php artisan panel:update`,
`npm run build`. One new page file, `settings/Index`.

**If your account menu was missing Profile, Security or Help, this fixes it.**
0.8.1 and 0.8.2 read `$panel->id` where they should have read
`$panel->getRouteName()`, so a panel with a custom route-name prefix got nulls.
Nothing to change on your side.

**To add your own settings entries:**

```php
// AppServiceProvider::boot()
SettingsIndex::add([[
    'key' => 'billing', 'title' => 'Billing',
    'description' => 'Plans, invoices and payment methods.',
    'href' => static fn (): string => route('billing.edit'),  // a CLOSURE - boot runs before routes
    'ability' => 'manage_billing',                            // optional; omitted, not disabled
    'order' => 2,                                             // optional; omit to append
]]);
```

### 0.8.1 → 0.8.2

`composer update panelkit/panel`, a fresh `npm pack`, then `php artisan
panel:update` and `npm run build`. Three more page files are written:
`settings/Workspaces`, `settings/Organisation` and `settings/UserManagement`.

**To get the workspace and organisation screens working**, `config/panel.php`
needs `tenancy.model` set to your organisation class. It has been in the config
since 0.5 and only `panel:permissions` read it, so an installation that left it
null gets screens that say organisation management is unavailable - which is the
true answer until the key is set.

**Workspace switching also needs a membership relation** on your user model,
named `memberships`, `tenants` or `organisations` - any of the three. Without
one, an account has exactly one organisation and the screen says so rather than
offering to create a second it could never reach.

**Nothing breaks.** The routes yield to any you already own.

### 0.8.0 → 0.8.1

`composer update panelkit/panel`, a fresh `npm pack`, then:

```bash
php artisan panel:update
npm run build
```

**`panel:update` writes four new page files** - `settings/Profile`,
`settings/Security`, `settings/UserManagement` and the three under `support/`.
Without it those routes answer and the browser renders a white page naming a
file you have never seen.

**Nothing breaks.** The new routes yield to any your application already owns:
if you have your own `/settings/profile`, yours keeps working and the packaged
one does not register. That check exists because registering it unconditionally
DELETED the reference application's own `profile.edit` route name - Laravel
indexes routes by method+URI, and the displaced route's name goes with it.

**To adopt a packaged screen you had copied**, delete your own route and
controller and re-run `panel:update`; your page file at the same path is left
alone, so replace it with the one-line shim.

**To supply your own help articles:**

```php
// AppServiceProvider::boot()
HelpCentre::add([[ 'id' => 'billing', 'category' => 'billing',
    'title' => 'Raising an invoice', 'keywords' => 'invoice bill charge',
    'body' => ['…'] ]]);
```

`replace()` drops the packaged ones entirely. `panel.about` fills the About
screen; `->without(['help'])` drops the help centre from a panel, route and all.

### 0.7.3 → 0.8.0

**The two npm packages became one.** `@panelkit/ui` and `@panelkit/inertia` are
now `@panelkit/panel`, with the same split kept as subpath exports. This is the
only breaking change in the release, and it is entirely mechanical.

```bash
npm uninstall @panelkit/ui @panelkit/inertia
npm install @panelkit/panel
composer update panelkit/panel
php artisan panel:update
npm run build
```

Then rewrite your imports:

| Was | Now |
| --- | --- |
| `@panelkit/ui` | `@panelkit/panel` |
| `@panelkit/inertia` | `@panelkit/panel/inertia` |
| `@panelkit/inertia/pages/…` | `@panelkit/panel/pages/…` |
| `@panelkit/inertia/components/…` | `@panelkit/panel/components/…` |
| `@panelkit/inertia/composables/…` | `@panelkit/panel/composables/…` |

Nothing renamed inside those entry points: the same components are exported
under the same names, and the split is unchanged — `@panelkit/panel` still
imports no HTTP client and no Inertia, and `@panelkit/panel/inertia` is still
the screens. What changed is that one `npm install` gets you both.

**Your stylesheet's `@source` lines move with it.** `panel:update` rewrites them
if you have not edited that block; if you have, the two lines are now:

```css
@source '../../node_modules/@panelkit/panel/dist/**/*.js';
@source '../../node_modules/@panelkit/panel/inertia/**/*.{vue,ts}';
```

Miss these and Tailwind purges every utility the packaged screens use — the
panel renders unstyled, with no error anywhere.

**Why.** Two packages that must be installed together, at matching versions, are
two chances to install one. The install is now `composer require panelkit/panel`,
`npm install @panelkit/panel`, `php artisan panel:install --auth`, `npm run
build`.

### 0.7.2 → 0.7.3

`composer update`, then `php artisan panel:doctor`.

**`panel:doctor` may now report a problem it did not before:** accounts that hold
no role. It is a true finding — a panel where every screen answers 403,
including the roles screen that would fix it — and if it fires, one command
clears it:

```bash
php artisan panel:permissions grant --email=you@example.com
```

If you script `panel:doctor` in CI, expect that exit code until somebody holds a
role.

**If your users table has no tenant column**, check `panel.tenancy.mode`. Left at
`column` it resolves no tenant and denies every query and every write; `none` is
right for a single-tenant application. `panel:install` sets this on a fresh
application now, but it does not touch an existing published config — that is
yours.

### 0.7.1 → 0.7.2

`composer update`. Nothing to edit.

**If you called `Ability::held()` yourself**, it is unchanged. There is a new
`Ability::allows($user, $ability)` beside it, which is null-safe and works on a
user model that does not define this reference application's `hasPermission()`
wrapper — that wrapper is not part of Spatie's `HasRoles`, and the package no
longer assumes it. Prefer `allows()` in your own code for the same reason.

### 0.7.0 → 0.7.1

`composer update` and `npm update`. Nothing to edit unless you wrote your own
layout rather than using the published one.

**If your layout hardcodes a home link.** The published `AppLayout.vue` had
`href: '/dashboard'` in its navigation — a fixed path in an application that can
mount several portals, so inside `/platform` the Home link pointed at the admin
panel's dashboard. The current panel's home is now shared as `panel.home`:

```ts
const page = usePage();

// was: { title: 'Home', href: '/dashboard' }
{ title: 'Home', href: (page.props.panel as { home?: string })?.home ?? '/dashboard' }
```

`@panelkit/inertia`'s own `usePanelNav` reads it already, so a panel using the
packaged sidebar needs no change.

### 0.6.3 → 0.7.0

`composer update`, `npm update`, `php artisan panel:update`, then the edits
below. Every one of them is a thing that was hardcoded to the reference
application and is now declared.

**If you filter a dashboard.** `DashboardFilters` had a public `routers` array
on it, which meant every panel installed from this package carried an ISP's
vocabulary in a base class. Declare your dimensions on the page and read them
by key:

```php
// On your DashboardPage
public static function filterDimensions(): array
{
    return [[
        'key' => 'depots',
        'label' => 'Depots',
        'singular' => 'depot',
        'options' => Depot::query()->orderBy('name')->get()
            ->map(fn (Depot $d) => ['value' => $d->id, 'label' => $d->name])->all(),
    ]];
}

// In a widget closure
$filters->selected('depots')          // was: $filters->routers
```

The client prop changed with it: `filters.selections` keyed by dimension,
where `filters.routers` used to be. If you render the packaged dashboard you
need no edit; if you wrote your own screen against the props, this is the one.

**If you use custom fields.** `CustomFieldStorage::RESOURCES` is gone. It listed
`['clients', 'routers', 'plans']` — the reference app's tables — so for anybody
else custom fields were silently unavailable on every resource they did have.
Name the resources whose tables actually have the `custom` JSON column:

```php
// config/panel.php
'custom_fields' => ['resources' => ['orders', 'customers']],
```

It is EMPTY by default, which means the feature declines rather than writing
into a column it hopes is there. Adding the column is still your migration.

**If you set a landing design.** `panel.landing` was the design name and is now
an array:

```php
'landing' => [
    'route' => false,               // serve the composed page at `/`
    'design' => env('PANEL_LANDING', 'aurora'),   // was `'landing' => ...`
    'brand' => null,
    'tagline' => '',
    'footer_links' => [],
    'previews' => false,
    'editor' => true,
    'url' => null,                  // where you serve it, if not `/`
],
```

`route` is off deliberately: `/` is the URL an application is most likely to
have its own plans for. The editor works either way, and registers itself — it
is not listed in `panel.singulars`.

**If you have a dashboard behind a permission.** `DashboardPage::ability()` now
returns null rather than deriving `view_dashboard` from the slug. An
all-or-nothing gate in front of a dashboard makes its per-widget abilities
unreachable, and 403s the screen sign-in lands on in an installation that has
not defined permissions yet. Override it if a dashboard should be narrower than
the panel itself.

**If you imported the command palette.** `CommandPalette` is gone from
`@panelkit/inertia`; it hardcoded four of the reference app's pages and called
an unprefixed `/search`. `PanelCommandPalette` takes its pages from the shared
navigation and respects the panel prefix — no props needed.

**If you used `PanelKit\Panel\Support\DemoData`.** It is no longer in the
package. It generated fibre subscribers for the reference app's two seeders,
which were already kept out of the package for that reason. Copy it into your
own application if you were using it.

**Nothing to do, but worth knowing:** `panel:install` now writes the packaged
screens into `resources/js/pages` even when that directory does not exist yet.
It did not before, and a fresh Laravel application never has one — so every
install since the screens shipped had none of them, and the panel was blank in
a browser while every server-side check passed. Re-run `php artisan
panel:install` if your `resources/js/pages` is missing the packaged screens.

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
