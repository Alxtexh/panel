# Changelog

Versioning policy, and what counts as a breaking change, are in
[UPGRADING.md](UPGRADING.md). The three packages — `panelkit/panel`,
`@panelkit/ui`, `@panelkit/inertia` — are versioned together.

## Unreleased

### Added

- **`panel.live.driver` defaults to `auto`: broadcast if you have a
  broadcaster, poll if you do not.** Installing Reverb used to change nothing
  until somebody remembered a second env var, and removing it left a panel
  pointed at a websocket nobody was serving. The application already states
  which broadcaster it has.

  **The test is deliberately strict, because configured is not running.**
  `BROADCAST_CONNECTION=reverb` says a connection is *defined*, not that a
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
  re-exports every screen, and three of them named an *imported* type in
  `defineProps`, which the SFC compiler can only resolve by loading TypeScript
  out of your project. Those shapes are spelled out where they are used, with
  type-level guards so a divergence fails `vue-tsc` here rather than reaching a
  consumer as a prop the screen silently ignores.

## 0.6.1

**Additive, so a patch.** Nothing here changes what an existing installation
does: `panel:install` never overwrites a published `PanelLayout.vue`, so an app
that already has one keeps it and is untouched. The new shell is what a *fresh*
install and a *newly generated* portal get.

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
  The endpoint validates against *that* declaration's rules and `sanitize()`
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
  back to copying *without failing* where symlinks do not work (Windows without
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
  resource installed by a plugin or an explicit `registerResources()` call *is*
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
  (stubs are *published*, screens are *mirrored*, auth routes are written into
  your app), the three commands that answer the question, and the reminder that
  "not there" and "not there **yet**" are different reports.

- **`panel:install --auth`.** `make:panel --auth` covered a portal you
  *generate*; the path everybody actually walks - `composer require`,
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
  failure the report describes happening *across* applications, and there is no
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
  walked the *record* form's fields only, so the first form action shipped
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
the client. But *"needs a bundler"* is not *"the user writes the bootstrap"*.

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
  *role* and nobody to hold it, so a fresh install had a sign-in screen and no
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
  *optional* peer statically, so any application without `@laravel/passkeys`
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
  since 0.2.0 — the *screen that writes one* and the *banner that shows it* did
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
  review it — and the test guarding it asserted the *warning* was present rather
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
  so a missing entry *inside* `plugins` is invisible there. This check is the
  compensating one. It asks every place a plugin can legitimately come from
  (config, self-registration from a provider, a panel's own list), so a
  correctly installed panel is not reported as broken.

- **And a ticket table that does not exist.** The other half of the same
  upgrade is pointing `panel.ticketing.tables` at tables you already have. A
  typo there produces a schema that *looks* complete — the packaged migration
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
  `Gate::before`, which filters roles by a team id that a *request* sets and a
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
  broke an unrelated test: *"how do I export a filtered list"* stopped returning
  the exporting help passage and started returning blueprint chunks about
  clusters. Nobody touched retrieval — the corpus grew and the answer got worse,
  which happened every time the developer guide improved. `AGENTS.md` is for an
  agent *writing* the panel; the assistant answers somebody *using* it.
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
