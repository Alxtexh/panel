# Changelog

Versioning policy, and what counts as a breaking change, are in
[UPGRADING.md](UPGRADING.md). The two packages — `panelkit/panel` on Composer
and `@panelkit/panel` on npm — are versioned together. Entries before 0.8.0 name
three, which is what there were.

## 0.8.1

**Four screens that were the demo's are now the package's**, and the reason
matters more than the count: the components three of them mount had already
shipped and were reachable from nothing.

**Profile and Security.** `ManagePasskeys`, `ManageTwoFactor`,
`TwoFactorSetupModal`, `TwoFactorRecoveryCodes` and `DeleteUser` have shipped in
the npm package since 0.6, mounted by nothing outside the reference
application - so every installation downloaded a working passkey manager and had
no page on which to see it. Security carries the password change, the second
factor, passkeys, connected accounts and the signed-in device list;
`Auth\Devices` reads Laravel's own session table and stores nothing.

**The help centre** - Help, FAQ and About. The screens are the package's and the
words are yours: `HelpCentre` ships articles about the panel itself so a fresh
install opens on something useful, and takes your own through `add()` or
`replace()`. Category tabs are derived from the articles that exist, so a tab
never appears with nothing behind it. About is driven by `panel.about`.

**User management.** The roles half was packaged from 0.4 and the people half
was not, which made the permission matrix a screen you could reach and not act
on. `UserDirectory` finds the resource that lists users by matching
`auth.providers.users.model` - no config key to keep in step - so your own users
resource supplies the table without either side naming the other.

**Profile, Security and Help are in the account menu.** `PanelAccountMenu` has
accepted an `accountUrl` prop since it was written and nothing ever passed one.

### Fixed

- **Packaged routes no longer steal a URL your application owns.** Laravel's
  route collection is indexed by method+URI, so a second `GET settings/profile`
  REPLACES the first and rebuilds the name lookup from what survives - deleting
  your `profile.edit` name, and making every `route('profile.edit')` in your
  codebase throw from a package you installed for its screens. A Laravel starter
  kit ships exactly that URL. The account and help routes now yield to a claimed
  path.
- **The assistant indexes what the help screen shows.** `HelpSource` read one
  set of articles while the page had begun showing another, so it would have
  answered from nothing what the screen answered in full.

### Breaking

Nothing. Every route added yields to one you already have, and every screen is
droppable per panel with `->without(['help'])`.

## 0.8.0

**One npm package.** `@panelkit/ui` and `@panelkit/inertia` are now
`@panelkit/panel`. The install is four commands:

```bash
composer require panelkit/panel
npm install @panelkit/panel
php artisan panel:install --auth
npm run build
```

Two packages that must be installed together, at matching versions, are two
chances to install one — and the failure mode of getting it half right was a
route that answers and a component the client cannot resolve. Filament needs no
npm step at all because it renders Blade on the server; we send a schema once and
render on the client, so a bundle is unavoidable. What was avoidable was making
it two.

**The split is kept, as subpath exports rather than as separate packages.**
`@panelkit/panel` is the rendering layer and still imports no HTTP client and no
Inertia; `@panelkit/panel/inertia` is still the screens. Nothing was renamed
inside either. The two halves ship differently for a reason that has not
changed: the components are compiled, because a Vue SFC cannot resolve a type
imported into `defineProps` across a package boundary, and the screens ship as
source so you can read the one you are about to override.

**`panel:update` repoints your stylesheet.** The `@source` lines naming the old
packages are rewritten to the new one. This is the single upgrade step that
could not fail loudly: they are strings in a CSS file, nothing resolves them, and
a stale one makes Tailwind purge every utility used only inside the packaged
screens — a panel with no layout and a clean build log.

### Breaking

- `@panelkit/ui` → `@panelkit/panel`
- `@panelkit/inertia` → `@panelkit/panel/inertia`
- `@panelkit/inertia/pages/…`, `/components/…`, `/composables/…` →
  `@panelkit/panel/pages/…`, `/components/…`, `/composables/…`

[UPGRADING.md](UPGRADING.md#073--080) has the sequence.

## 0.7.3

**A new install is no longer locked out of itself.** It was locked twice over,
and the second cause was the bigger one.

**Tenancy.** `panel.tenancy.mode` defaults to `column`, which resolves a tenant
from a column on the users table and fails *closed* when it cannot — every list
empty, every write refused. That posture is right; shipping it as the default
into an application with no such column is not, and a fresh `laravel/laravel`
has none. The install printed a warning, reported success, and left a panel
refusing everybody — with a role correctly granted, the ability correctly held,
and the refusal coming from tenancy with nothing on screen saying so.
`panel:install` now writes a mode the application can satisfy and says what it
did.

**Nobody in charge.** `panel:permissions sync` creates an Administrator role
holding every ability and assigns it to nobody — correct, because the package
has no business choosing who runs your installation — and `panel:make-user`
grants only to an account it creates. So anybody who registered through the
sign-in screen first was locked out, *including from the roles screen that would
have fixed it*. There is now a key:

```bash
php artisan panel:permissions grant --email=you@example.com
```

A deliberate act at a shell rather than a first-user-wins rule, and it names who
rather than granting to "the only account" — fine until an installation has two.

**`panel:doctor` reports accounts that hold no role**, because a panel where
every screen answers 403 gives its owner nothing to read. **This can turn a
previously-green `panel:doctor` red** — the finding is true, and the fix is one
command. It stays quiet when there are no accounts at all: that is a fresh
install waiting for `panel:make-user`, which grants as it creates.

`verify-install.sh` now asserts the lock and the key — 403 before the grant, 200
after — and that a fresh installation passes its own doctor. Two of its
assertions inverted: they asserted the install was misconfigured, which it was.

## 0.7.2

**A packaged screen no longer 500s on a user model that is not the reference
app's.** Twenty-four places in the package called `$user->hasPermission($ability)`
directly. That method is not part of Spatie's `HasRoles` — it is a convenience
wrapper the reference application happens to define — so on every other
installation `/trash` and `/roles` answered
`BadMethodCallException: Call to undefined method User::hasPermission()`.

Every test here passed throughout, because they all run against the one model
that defines it. It was found by installing into a fresh Laravel app and opening
the screens.

`Ability::held()` had the guard all along and three call sites used it. There is
now `Ability::allows()` — null-safe, so the `$request->user()?->` sites read the
same — and every call goes through it.

**Two of the "guarded" sites were guarded wrongly.** `StatWidget` and
`ChartWidget` read `method_exists(...) && hasPermission(...)`, which returns
*false* when the method is absent rather than falling through to `can()` — so an
ability-gated widget was invisible to every consumer. Silent, unlike the
controllers.

Nothing to do on upgrade.

## 0.7.1

**Every portal's Home link stays inside that portal.** Signed in and inside
`/platform`, the sidebar offered "Home" pointing at `/dashboard` — the *admin*
panel's dashboard. Clicking it left the portal silently, and for somebody who
may not open that screen it refused with a bare "Forbidden". The published
layout had that path written into it, and every generated portal renders the
same file, so all three had it.

The panel's home is now shared as `panel.home`, resolved by the same
`PanelHome::urlFor()` that decides where sign-in lands — so the link and the
redirect cannot disagree. Nothing to do on upgrade unless you wrote your own
layout; see UPGRADING.md.

## 0.7.0

A minor, not a patch: this removes public API. Every change below is listed in
UPGRADING.md with what to write instead.

**A fresh install had no screens at all.** `resources/js/pages` comes from a
starter kit, not from `laravel/laravel`, so in a fresh application the directory
did not exist when `panel:install` reached the step that writes the packaged
screens — and the writer returned early with a warning. Not one was written: no
ResourceIndex, no dashboard, no error page. Nothing failed, because every check
anywhere asks the SERVER, and the server was right the whole time; Inertia
resolves a page by globbing that directory in the BROWSER, so the panel was
blank for anybody who opened it. `verify-install.sh` now checks the files.

**The dashboard moved into the packages.** The package had a second, thinner
dashboard of its own — no per-widget boundary, no setup checklist, no summary
strip, no filters, eight chart types against fifteen — and it fed the resolved
series to the chart components as `points`, a prop none of them accept, so every
chart on every packaged dashboard drew an empty plot. The reference
application's dashboard is now the package's, and the demo declares only its own
widgets.

**The landing CMS moved into the packages, all of it** — the three designs, the
page that renders them, the route and the block editor. `@panelkit/ui` shipped
`PkLandingSections` and nothing that used it. The route is OFF by default
(`panel.landing.route`): `/` is the URL an application is most likely to have
its own plans for, and it registers after `routes/web.php`, so an app that
already answers `/` keeps it.

**The panel's error screens are rendered, not merely shipped.** `errors/Error`
was exported and had nothing routing to it, so every installation but the
reference app showed Laravel's default 404 beside a designed one it had already
downloaded. The rules — which statuses get a page, why 419 does not, why 500
keeps its trace with debug on — are the reference app's, moved rather than
rewritten. It looks through a decorating handler (Collision wraps Laravel's and
does not forward `respondUsing`), and it never replaces an application that
already responds.

**A settings screen can link to the thing it configures.**
`SingularResource::links()`; `external` opens a new tab. The landing editor uses
it, and opens on the page a visitor sees rather than an empty builder.

**Duplications removed.** Two command palettes shipped, and the one the demo
actually rendered hardcoded an ISP's four pages and called an unprefixed
`/search`. `TenantScope` and `SearchController` existed in both halves. The
shipped copy no longer speaks ISP: the showcase caption, the custom-field
placeholder, the invoice sample line, the assistant's description, and the
examples in the generated build guide.

**The trait without which the panel denies everything.**
`spatie/laravel-permission` is a hard dependency here — the tables migrate,
`panel:permissions sync` creates every ability and an Administrator role that
holds them all, and each of those steps reports success. But a stock
`laravel/laravel` `User` does not use `HasRoles`, so it has no `assignRole()`:
the role exists and nobody can hold it, and every screen refuses the person who
owns the installation. Nothing throws and nothing logs. `panel:install` adds it
now, `panel:doctor` reports it on every run, and `verify-install.sh` checks it.

### Breaking

- `Widgets\DashboardFilters` — `$routers` is gone. Dimensions are declared:
  `$filters->selected('routers')`, and `fromRequest()` takes the declared keys.
  The client prop is `filters.selections`, not `filters.routers`.
- `CustomFields\CustomFieldStorage::RESOURCES` — gone. Declare
  `panel.custom_fields.resources`; it is empty by default, so custom fields
  decline until you name the resources whose tables have the `custom` column.
- `panel.landing` — was a design name, is now an array. `panel.landing.design`
  holds what the string held.
- `Pages\DashboardPage::ability()` returns null rather than `view_dashboard`.
  A dashboard behind an all-or-nothing gate makes its per-widget abilities
  unreachable, and 403s the screen sign-in lands on in an installation that has
  not defined permissions yet. Override it to narrow.
- `@panelkit/inertia` no longer exports `CommandPalette`. Use
  `PanelCommandPalette`, which draws from the shared navigation.
- `PanelKit\Panel\Support\DemoData` is gone from the package. It invented
  fibre subscribers for the reference app's seeders, which were already kept out
  for that reason.

## 0.6.3

**`@panelkit/ui` ships compiled.** It used to ship raw source, and a fresh
`npm run build` in a consuming application failed — roughly fifty of its shadcn
components declare `defineProps<SomeTypeFromRekaUi>()`, and a consumer's Vite
cannot resolve a type across a package boundary. Nothing here caught it for two
versions, because the playground reaches the package through a path symlink;
`scripts/verify-install.sh` found it by installing the tarball into a fresh
Laravel app. **If you have your own `@source` line for this package, point it at
`dist/**/*.js`** — that is where the class names now live. `panel:install`
rewrites it for you.

**The passkey button is back on the sign-in screen, and on by default.** It went
missing when that screen moved into the package: the button is driven by a
`passkeys` prop and the reference app's Fortify view never sent one. The prop
now falls back to the routes `laravel/passkeys` registers, so it is there
without wiring; pass `null` to turn it off.

**The demo's screens keep moving into the packages.** The horizontal header,
breadcrumbs, the assistant drawer, passkey and two-factor management, session
expiry, account deletion, the error screens, backups, logs, monitoring and the
assistant's API key are all packaged now. `@panelkit/ui` and `@panelkit/inertia`
carry 262 components between them; the reference app is down to 84.

**A dead export is gone.** `@panelkit/ui/theme/tokens.css` pointed at a file
that has never existed. The tokens come from `panel:install`, which merges a
complete `@theme` block into your stylesheet.

## 0.6.2

**One behaviour change worth reading before you upgrade** — see
[UPGRADING.md](UPGRADING.md#061--062). An application that has a broadcaster
_and_ a panel channel configured, and never set `PANEL_LIVE_DRIVER`, moves from
polling to broadcasting on this release.

### Added

- **`panel.live.driver` defaults to `auto`: broadcast if you have a
  broadcaster, poll if you do not.** Installing Reverb used to change nothing
  until somebody remembered a second env var, and removing it left a panel
  pointed at a websocket nobody was serving. The application already states
  which broadcaster it has.

  **The test is deliberately strict, because configured is not running.**
  `BROADCAST_CONNECTION=reverb` says a connection is _defined_, not that a
  Reverb process is up — and the asymmetry matters: a slow poll is a slow poll,
  while a broadcast with nothing listening is a list that is silently static
  and looks exactly like a list where nothing changed. So `null` and `log` mean
  poll, an undefined connection means poll, a connection whose key is blank
  means poll, and — the one that turned out to be load-bearing — **a panel with
  no `live.channel` means poll**, because `LiveConfig` refuses the broadcast
  driver without a private tenant-scoped channel and would otherwise 500 every
  screen. Anything set explicitly is never overruled.

  `auto` never leaves `LiveConfig`, so the client, `panel:doctor` and the
  platform report all see `poll` or `broadcast` and none of them repeat the
  reasoning.

### Fixed

- **The package root import works without TypeScript in the consuming
  project.** `import { PanelShell } from '@panelkit/inertia'` is the documented
  API and could not be used by an app that has no compiler: the root entry
  re-exports every screen, and three of them named an _imported_ type in
  `defineProps`, which the SFC compiler can only resolve by loading TypeScript
  out of your project. Those shapes are spelled out where they are used, with
  type-level guards so a divergence fails `vue-tsc` here rather than reaching a
  consumer as a prop the screen silently ignores.

## 0.6.1

**Additive, so a patch.** Nothing here changes what an existing installation
does: `panel:install` never overwrites a published `PanelLayout.vue`, so an app
that already has one keeps it and is untouched. The new shell is what a _fresh_
install and a _newly generated_ portal get.

### Added

- **The shell ships.** `PanelShell`, `PanelSidebar` and `PanelAccountMenu` in
  `@panelkit/inertia`, and the `PanelLayout.vue` that `panel:install` publishes
  is now a thin wrapper over them.

  **Why the boundary moved.** The package shipped the screens and published a
  scaffold for the frame, on the principle that a panel should not dictate your
  chrome. Measured against the reference app, that produced a generated portal
  wearing the packaged tables inside a plainer frame - reading as a less
  finished product, while every consumer rebuilt a sidebar worse than the one
  they were comparing themselves to. A sidebar is not business-specific.

  The sidebar builds from the `panelNav` the server already shares, so it is
  filtered by ability and carries each panel's prefix; the rail collapses and
  **remembers**; the mobile drawer closes on navigation; and the account menu's
  sign-out posts wherever the SERVER says - `{panel}.logout` when `--auth`
  scaffolded one, a plain `logout` when Fortify did, and no item at all when
  neither exists, because a menu entry posting to a route that does not exist
  is a 404 on the one action somebody takes to be safe.

  **It is still yours.** The published layout is a file you edit, and stopping
  the `PanelShell` import replaces the frame entirely - `usePage().props.panelNav`
  is the same array.

## 0.6.0

**Everything a real port asked for that was still open.** This release closes the
last of a gaps report written by somebody moving two production portals off
Filament: actions that ask for input, config that survives an upgrade, a
generator that shows its own API, and the vendored-copy trap that costs an
afternoon.

**One behaviour change to read before upgrading** — the config merge is now
deep. See [UPGRADING.md](UPGRADING.md#050--060).

### Added

- **An action can ask for something first — `->form()`, on both
  `RecordAction` and `BulkAction`.** The largest functional gap this package
  had by a port's own count: 67 of 229 tenant-admin actions needed a value
  before they could run — a reason, an amount, a plan, a department — and every
  one of them became a dedicated screen. The modal opens with **no network
  request**, because the schema travels with the action in the list payload.

  **The fields are declared server-side and that is the security property.**
  The endpoint validates against _that_ declaration's rules and `sanitize()`
  drops every key it does not name, so an endpoint whose whole design was "the
  client sends a key and never an attribute set" did not quietly become a
  mass-assignment endpoint. `form()` pairs with `handle()` and never `mutate()`
  — a mutation is fixed at definition time and has nowhere to put what somebody
  typed — and declaring both throws for whoever wrote it, at the first run.

  In bulk, the values are collected once and reused for every chunk, and a
  select-all-matching run is validated **before the job is queued**: a failure
  an operator can fix belongs in the response they are looking at.

- **A setting added inside an array reaches an existing install.** The
  package's config is merged into a published `config/panel.php` **key by
  key**. `mergeConfigFrom` is one level deep, so a published `auth` block won
  whole and `auth.password.max_age_days` was read as unset - which, where the
  call site has no default of its own, is shaped like an absent feature rather
  than a missing setting: the screen does not appear, nothing errors, and "this
  version did not ship it" is the reasonable and wrong conclusion. It was
  reported from a real port and it was true of this repository's own reference
  app, whose published config had no `auth.max_attempts`.

  **A list is still yours whole**, deliberately: shortening `abilities` is a
  decision, and unioning `plugins` back would reinstall something somebody
  removed. `panel:update` therefore reports plugins this version ships that
  your config does not install - the one thing the merge cannot fix, and how
  `TicketingPlugin` reached nobody for a release.

- **A generated resource shows how to add an action.** `make:panel-resource
--generate` wrote a table with no actions and no hint that actions exist, so
  the API was discoverable only by reading somebody else's resource. It now
  carries a commented `->recordActions([...])` / `->bulkActions([...])` block
  positioned **inside the chain**, covering the plain case, the `->form()` case
  and the two rules that are easy to get wrong. A test uncomments it and
  compiles the result: a stub whose whole promise is "uncomment this" fails by
  sitting where the chain cannot take it, and nothing else would catch that -
  a comment is valid PHP however wrong it is.

- **`panel:doctor` notices a vendored copy composer did not symlink.** A `path`
  repository is how you develop against a package you also maintain, and
  composer either symlinks it or takes a **snapshot** at install time - falling
  back to copying _without failing_ where symlinks do not work (Windows without
  developer mode, some bind mounts, a CI runner). The two are indistinguishable
  from the application: classes autoload, pages return 200, tests pass. What
  differs is everything afterwards, because a fix made in the source does not
  happen and `panel:update` writes the previous version's page files. Reported
  from a real port; it costs an afternoon each time, and now it names itself.

- **`panel:doctor` names a resource or page that nothing registered.** The last
  two silent 404s from the port report. `panel.discover` pointed one directory
  too high scans a tree whose namespaces do not match, registers **nothing**,
  and says nothing; `discover_pages` absent from a published config discovers
  pages nowhere. Both present as a 404 on a screen you just wrote - which is
  indistinguishable from code you have not finished, so the reasonable next move
  is to go and read the code, which is not where the fault is. An hour each,
  twice, per the report.

  It compares **disk against the registry**, not config against convention. A
  resource installed by a plugin or an explicit `registerResources()` call _is_
  registered, so it is never reported - and a class sitting somewhere no config
  names still is.

- **And a packaged screen with no page file.** Inertia resolves components by
  globbing `resources/js/pages`, so a screen in `node_modules` cannot be found
  however correctly it is routed: the route answers, the component does not
  resolve, and the page renders **blank under a working header** with nothing in
  the log. `panel:update` writes these; the check is for the installation that
  ran `composer update` and did not.

- **`PkCard`** — the ordinary block of content the package did not have.
  `StatCard` and `ChartCard` are dashboard widgets; everything else hand-rolled
  `rounded-lg border bg-card` on a div, fifteen times in the reference app
  alone. Optional title, description, `#actions` and `#footer`; `:padded="false"`
  for a table that fills its card. **No tone or variant props**, deliberately -
  those grow one at a time until the component is a styling language, and a card
  that needs a red border takes one through `class`, which merges.

- **`useUnsavedChanges` + `useUnsavedGuard`** — the half `UnsavedBar` does not
  do. The bar shipped and was exported, and a custom page still could not use
  it, because a bar draws a decision it does not make: `RecordForm` knows it is
  dirty, and a page holding its own state had to write the snapshot, the
  comparison and the `beforeunload` handler itself.

  The comparison is **key-order-insensitive**, which is the part a hand-rolled
  version gets wrong - `JSON.stringify` preserves insertion order, so state
  rebuilt from a response compares as changed and the page announces unsaved
  changes for a save that just succeeded. `useUnsavedGuard` (in
  `@panelkit/inertia`, because it needs the router) confirms before a visit
  abandons the work, which `beforeunload` cannot see: an Inertia navigation
  never unloads the document.

- **`AGENTS.md` answers "is this missing?" before somebody guesses.** Three
  separate reviews reported the same features absent, each after reading the
  package's directory tree - where almost nothing this package ships actually
  stays. `panel:blueprint` now writes a table of where each thing really lands
  (stubs are _published_, screens are _mirrored_, auth routes are written into
  your app), the three commands that answer the question, and the reminder that
  "not there" and "not there **yet**" are different reports.

- **`panel:install --auth`.** `make:panel --auth` covered a portal you
  _generate_; the path everybody actually walks - `composer require`,
  `panel:install`, open the panel - still ended at "install a starter kit",
  which is half of the blocker the port report filed.

  The `verify-install.sh` harness was the evidence: it worked around the gap by
  re-running `make:panel admin --path='' --auth --force`, and `--force`
  **replaces the provider `panel:install` had just written and patched** - so
  the harness was quietly undoing part of the install it was verifying. It now
  uses the flag and asserts both artefacts exist.

  The scaffolding moved into a shared trait rather than being written twice.
  Two commands producing sign-in flows separately is how they end up differing
  in throttling, session regeneration and post-authentication checks - the
  failure the report describes happening _across_ applications, and there is no
  reason to reproduce it inside one package.

### Changed

- **`panel:update` reports uninstalled plugins rather than unmergeable config
  keys.** The old report walked for keys inside a published array that the
  shallow merge could not supply; the deep merge supplies them, so that report
  could never fire again - and a report that always says "nothing" is worse
  than no report, because it is read as evidence.

- **The "no `login` route" advice is no longer stale.** `panel:install` sent
  people to Breeze or Fortify without mentioning that this package now ships a
  sign-in. It stays silent when a panel scaffolds its own, and names the flag
  when nothing does. The README says the same, and now also warns about a
  composer `path` repository composer **copied** rather than symlinked.

### Fixed

- **A searchable select inside an action form now searches.** `field-options`
  walked the _record_ form's fields only, so the first form action shipped
  working purely because its select happened to share a key with a field on the
  record form. An action asking for something the form did not have rendered a
  select that found nothing, with no error anywhere.

## 0.5.0

**A fresh application now installs, builds, renders and signs in.** Everything
here came from two things: a report from somebody porting two real portals off
Filament, and installing Filament into an empty app to measure what it does that
we did not.

The measurement, for the record: `composer require filament/filament` plus
`php artisan filament:install --panels` gives you `/admin/login` answering 200
with 30KB of HTML, **no npm at all**. Ours needed a root view, an `app.ts`, a
layout and a login route — four files nobody names, written differently in every
install. The build step is not the gap and never was: Filament renders Blade on
the server and publishes precompiled assets, we send a schema once and render on
the client. But _"needs a bundler"_ is not _"the user writes the bootstrap"_.

### Added

- **`panel:install` publishes the shell** — root view, Inertia bootstrap, a
  default layout and the stylesheet, and it patches `vite.config` when that file
  is the stock shape. When it is not, it prints the exact edit rather than
  silently doing nothing.
- **Sign-in, per panel.** `make:panel <id> --auth` writes routes bound to that
  panel's own guard, pointing at packaged Login / ForgotPassword / ResetPassword
  screens. **Never at `/login`**, so Breeze, Jetstream or Fortify keep the
  application's own sign-in. Fortify serves one guard and a second portal has its
  own, which is why this could not simply be "use Fortify".
- **`panel:make-user`.** `panel:permissions sync` creates an Administrator
  _role_ and nobody to hold it, so a fresh install had a sign-in screen and no
  account. It refuses to take a password as an argument.
- **`SharePanelProps` and `PanelNavigation`** — the sidebar, the panel and the
  signed-in person handed to Inertia. Promoted from the reference app's
  hundred-line closure, because every port was rebuilding the panel prefix and
  the ability filter, which are the two parts whose failure is silent.
- **`MoneyColumn`** — a fixed currency or each row's own, minor units by
  default, formatted in the **viewer's** locale.
- **`Panel::without(['trash', 'roles', 'documents'])`** — packaged screens a
  portal should not offer. The route goes, not just the menu entry.
- **`--panel` on `make:panel-page`**, which `make:panel-resource` has always
  had. Without it every generated page landed in the default panel.

### Fixed

- **`Panel::colors()` was dead code.** The builder method and its resolver both
  shipped and nothing called either, so an installation could configure a palette
  and watch nothing happen.
- **The passkey component broke `npm run build` outright.** It imported an
  _optional_ peer statically, so any application without `@laravel/passkeys`
  could not build at all — not the passkey screen, the whole bundle. This file
  has described it as "a soft dependency" for two releases; that was true of
  `composer.json` and false of the bundle.
- **A panel mounted at the root generated `Route::group(closure)`**, which is a
  TypeError thrown while routes load — taking down every page, in the default
  panel of a fresh install.
- **Every guarded page answered `Route [login] not defined`.** Laravel redirects
  to a name this package deliberately never registers; the panel now names its
  own door and falls back to the application's.

### Upgrading

Nothing breaks. `composer update`, `npm update`, `php artisan panel:update`.

`panel:install` will not overwrite a root view, `app.ts` or layout you already
have — it reports what it kept. To adopt the published bootstrap in an existing
application, move yours aside and re-run it.

## 0.4.0

**Announcements ship whole, and the base policy an application had to write
itself now comes with the package.**

### Added

- **The announcement composer, and the banner that reads it.** The model, the
  Telegram delivery, the per-person dismissal and the notification all shipped
  since 0.2.0 — the _screen that writes one_ and the _banner that shows it_ did
  not. So the package could address an entire organisation and reach nobody,
  and every test passed, because what was tested was the writing.
  `AnnouncementResource`, `AnnouncementPolicy` and `AnnouncementsPlugin` are now
  the package's, the plugin is registered by default, and `DashboardPage`
  supplies the notices to any dashboard without being asked.
- **`PanelKit\Panel\Policies\TenantResourcePolicy`.** The panel denies any
  resource whose model has no policy — so the first thing every installation had
  to write was a base policy, from scratch, and getting it subtly wrong opens a
  screen to somebody it should not. Extend this instead: tenancy first,
  permission second, both required, record-level checks re-asserting ownership.
- **`Support\Ability`**, the one place that answers "does this person hold this
  ability". `hasPermission()` when the application has one, `can()` when it does
  not, Spatie's team set from `TenantContext` either way. Both halves were got
  wrong once each while promoting `TicketPolicy`; the class carries the notes.

### Changed

- **`make:panel-resource --generate` writes a policy that denies.** It used to
  write five methods returning `true` plus a console warning telling you to
  review it — and the test guarding it asserted the _warning_ was present rather
  than that the behaviour was safe. A generated resource really was readable by
  every authenticated user until somebody acted on a line of output. The stub is
  now one line extending `TenantResourcePolicy`, and nothing is permitted until
  `panel:permissions sync` creates the abilities.

### Upgrading

Nothing breaks; both additions are opt-in. Two things are worth doing:

**Add the plugin to your published config**, or the composer screen will not
appear — `mergeConfigFrom` is shallow, so your `plugins` array replaces the
package's whole:

```php
'plugins' => [
    PanelKit\Panel\Alerts\AnnouncementsPlugin::class,
],
```

**If you wrote your own base policy, you can delete it** and extend the packaged
one. One caveat, and it produces an unusually unhelpful error: an override must
use the base class's parameter type exactly —
`update(Authenticatable&Authorizable $user, ?Model $record = null)`, never your
own `User`. PHP forbids narrowing a parameter, and the failure is a fatal thrown
while the class loads: PHPUnit reports only "Premature end of PHP process" and a
web request dies blank.

## 0.3.3

**One check, for the way 0.3.2 fails on an application that already exists.**

### Added

- **`panel:doctor` reports ticketing that is configured and not installed.**
  0.3.2 registers `TicketingPlugin` in the package's own `config/panel.php` — so
  a fresh install gets it and **an existing one does not**. `mergeConfigFrom` is
  shallow: a published config supplies its `plugins` array whole and the
  packaged default never arrives. Somebody upgrades, sets
  `panel.ticketing.operator`, reloads, and gets no route and no error.

  **`panel:update`'s drift report cannot see this.** It skips list values by
  design — an application shortening a list has configured it, not lost keys —
  so a missing entry _inside_ `plugins` is invisible there. This check is the
  compensating one. It asks every place a plugin can legitimately come from
  (config, self-registration from a provider, a panel's own list), so a
  correctly installed panel is not reported as broken.

- **And a ticket table that does not exist.** The other half of the same
  upgrade is pointing `panel.ticketing.tables` at tables you already have. A
  typo there produces a schema that _looks_ complete — the packaged migration
  skips the table it believes exists under the configured name — and fails as
  SQL on the first person to open the queue.

Both are `problem` level, so `panel:doctor` and `panel:update` exit non-zero.

## 0.3.2

**Ticketing ships.** It was written in the reference app, which meant every
installation that wanted a support desk had to write one — the policy, the
thread, the SLA clock, the unread rules — and get the two-sided authorisation
right on the first try. It is now `panelkit/panel`.

### Added

- **A support desk in the package.** `TicketResource` (the operator's queue),
  `MyTicketResource` (the customer's own), and `TicketingPlugin`, which mounts
  each on the panel named in `panel.ticketing.operator` / `.opener`. **Both or
  neither**: one end alone, or one portal named for both, throws at boot with
  the key to fix. Neither set is off, and the plugin ships registered so that
  turning it on is two config lines rather than a service provider.
- **`TicketPolicy`, which is where the two sides are separated.** The opener
  reads and replies to their own holding no ticket ability at all, and may never
  resolve; the operator reads the organisation's on an ordinary ability; the
  tenant check runs before either. Internal notes are their own grant.
- **The thread, promoted whole** — replies, internal notes, attachments,
  departments, per-side unread indicators, the first-response stamp, and
  `TicketAnalysis` with a volume chart and a median first-response time. There
  is no SLA target and nothing claims one.
- **`TicketOpened`, an event rather than a call.** The packaged listener alerts
  on urgent tickets over Telegram and never throws. Adding a webhook or an email
  to a rota is now a listener, not an edit to a vendored model.
- **`panel.ticketing.tables`**, defaulting to `panel_tickets` /
  `panel_ticket_replies`. `tickets` is a name an application may already use, and
  a migration that succeeds against somebody else's table is worse than one that
  collides.

### Fixed

- **The promoted policy authorised nobody who was not named individually.**
  Replacing the reference app's `hasPermission()` with the framework's `can()`
  read as the correct package-side substitution and was not: `can()` answers
  from Spatie's pivot rows, and a **`grants_all` role is PanelKit's concept, in
  a column Spatie has never heard of**. Every administrator lost the ticket list
  while every ticket test stayed green, because the tests grant named abilities
  and administrators hold none. It now asks the way the rest of the package
  already does — `hasPermission()` when the application has one, `can()` when it
  does not.
- **And the fallback needed the other half.** `can()` reaches Spatie through
  `Gate::before`, which filters roles by a team id that a _request_ sets and a
  command, a queued job or a test does not — so the same person with the same
  role was permitted inside a request and denied everywhere else, silently. The
  policy now sets it from `TenantContext` and restores it in a `finally`.
  `TicketPolicyPlainUserTest` exercises this against a user model with no
  `hasPermission()`, which is the path nothing was covering.

### Upgrading

If you had no ticketing, `php artisan panel:update` writes the new page files
and the migration creates `panel_tickets` / `panel_ticket_replies`; set
`panel.ticketing.operator` and `.opener` to your panel ids and nothing appears
until you do.

If you already have ticket tables, **point config at them instead of migrating**
— set `panel.ticketing.tables` to the names you have. No data moves. The
packaged migration skips a table that exists.

## 0.3.1

**A release of things that were never true.** Nothing here is a new capability;
every entry is a feature that existed, passed its tests, and did not work — or a
document that described a version that had already shipped past it.

### Fixed

- **Per-tenant branding never applied.** `useTenantTheme` wrote `--color-{token}`;
  the stylesheet declares `--color-primary: var(--primary)` inside `@theme`,
  which Tailwind resolves at build time, so `bg-primary` compiles to
  `var(--primary)`. The prefixed name had no reader. Every seeded organisation
  carried a colour that rendered nowhere.
- **The brand colour now applies, and a personal accent still overrides it.**
  `primaryChosen` records whether somebody picked their accent or is simply on
  the default; the organisation's colour applies until they do, and Reset gives
  it back. It is stored per account, so a choice made on one machine is not
  re-made on the next.
- **The appearance drawer's "Density" is now "Table density"**, because
  `--pk-row-padding` is read by `.pk-row td` and nothing else — on a dashboard
  the control moved and the screen did not.
- **`AGENTS.md` said how to make a screen and never what goes in one.** Twelve
  recipes and not a single `table()` body; "tabs" appeared once, in prose, in a
  sentence about wizards. It now carries **Declare the list itself** (columns,
  filters, counted tabs, default sort) and **Lay a form out** (sections,
  conditional sections, when a wizard is wrong), both taken from resources that
  run.
- **The catalogue now names the components it cannot see.** Every group in it is
  generated by scanning `packages/panel/src`, which is PHP — so `StatStrip` and
  `MiniStatCard` appeared nowhere, and an agent asked for a four-window metric
  card would hand-roll a worse one. They are listed by hand, with the fact that
  `DashboardPage` renders `StatCard` and `ChartCard` only.
- **The blueprint left the assistant's knowledge corpus.** Growing the guide
  broke an unrelated test: _"how do I export a filtered list"_ stopped returning
  the exporting help passage and started returning blueprint chunks about
  clusters. Nobody touched retrieval — the corpus grew and the answer got worse,
  which happened every time the developer guide improved. `AGENTS.md` is for an
  agent _writing_ the panel; the assistant answers somebody _using_ it.
  **If you index the blueprint in your own installation, remove
  `BlueprintSource` from `panel.knowledge.sources` and reindex.**

### Also fixed

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
  somebody runs on _every release after the first_ checked only from inside the
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
comes to disagree with a menu. If you have a _resource_ keyed `roles`, it wins
the URL and the matrix becomes unreachable — `panel:doctor` now reports that too,
because the failure is otherwise silent.

### Added

- `panel:permissions list|sync`, with `--prune` and `--dry-run`. Ability names are
  derived from the resource registry, so the interesting work is pruning names
  that no longer correspond to anything.
- `grants_all`: a role that holds every ability _including ones invented later_.
  Inferring it from "currently holds all of them" would make a role become a
  superuser the moment somebody ticked the last box.
- `panel:doctor` checks `permission.teams` under tenancy, and the `roles` route
  collision.
- `@panelkit/inertia` ships `settings/Roles`.

### Changed

- `panel:journey` moved to the reference app. It walks _that_ app's routes.
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
