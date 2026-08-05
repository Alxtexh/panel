# PanelKit — the only document you need

**Audience: an AI agent, or a developer, building an admin panel on Laravel —
for any domain.**

Everything is here: install, build, deploy, upgrade, and the traps. Nothing else
needs to be carried.

Current version: **v0.9.6**. 44 packaged screens, 2,076 tests passing, verified
installing into a fresh Laravel application.

Coming from FilamentPHP? **[FILAMENT_TO_PANELKIT.md](FILAMENT_TO_PANELKIT.md)**
is the whole translation — every Filament class beside the PanelKit one to write
instead, and the porting order that works. It is a separate document on purpose:
this one is about building a panel, not about leaving another one.

> **0.9.0 renamed the npm package** to `@alxtexh-enterprise/panel`. If you are
> arriving from 0.8.x, the four commands are in UPGRADING.md - and the one that
> matters is `php artisan panel:update`, because the stylesheet is the only
> place a stale name fails without an error.

---

# Part 0 — Orientation

## What PanelKit is

A Laravel admin panel framework. You describe a resource in one PHP class; the
panel sends that description to the browser **once**, and every interaction
afterwards moves only data — no server-rendered component tree per click.

That single fact is where the speed comes from, and it is the source of every
structural difference from a server-rendered panel.

## It does not know what your business is

Everything below is one resource class. The framework has no opinion about what
a row means:

```php
// A veterinary practice
final class PatientResource extends Resource
{
    protected static string $model = Patient::class;

    public static function table(Table $table): Table
    {
        return $table->columns([
            TextColumn::make('name')->searchable()->sortable(),
            TextColumn::make('species'),
            BadgeColumn::make('status')->colors(['healthy' => 'success', 'critical' => 'danger']),
            DateColumn::make('last_seen_at')->label('Last visit'),
        ])->filters([
            SelectFilter::make('species')->options(['dog', 'cat', 'rabbit']),
            DateRangeFilter::make('last_seen_at'),
        ]);
    }
}
```

```php
// A law firm - same three declarations, different nouns
final class MatterResource extends Resource
{
    protected static string $model = Matter::class;

    public static function table(Table $table): Table
    {
        return $table->columns([
            TextColumn::make('reference')->searchable()->locked(),
            TextColumn::make('client_name')->searchable(),
            BadgeColumn::make('stage'),
            MoneyColumn::make('fees_billed')->currency('GBP'),
        ])->filters([
            SelectFilter::make('stage')->options(['intake', 'discovery', 'closed']),
            QueryBuilderFilter::make('advanced'),
        ]);
    }
}
```

Nothing in the package names an industry, and that is enforced rather than
intended: `IndustryNeutralityTest` scans all 299 shipped PHP files, and
`industry-neutral.spec.ts` scans the rendered markup of every packaged screen.
Both fail the build if a domain's vocabulary reaches a string a user can read.

**What is domain-specific is your `columns()` and `fields()`.** Everything else
— pagination, filtering, search, sorting, saved views, exports, imports, trash,
audit, permissions, tenancy, the command palette, the API — is the same code for
a veterinary practice and a shipping line.

## What ships with it, and what you write

You write resources, pages and policies. You do **not** write: sign-in, password
reset, two-factor, passkeys, user management, roles, the dashboard shell, the
help centre, the changelog screen, trash, exports, imports, ticketing,
announcements, backups, monitoring, or the settings screens. Those are 44
packaged screens. Part 3 covers replacing any of them.

## The three things, and the rules for each

| | What | May you edit it? |
| --- | --- | --- |
| **Your application** | whatever you are building | **Yes.** This is your code |
| **The package** | `vendor/panelkit/panel` + `node_modules/@alxtexh-enterprise/panel` | **Never.** Wiped by every update |
| **The demo** | `apps/playground` in the PanelKit monorepo | **Read and copy from.** Never depend on it |

> **The one rule: never edit anything under `vendor/` or `node_modules/`.**
>
> Both are generated. `composer update` and `npm install` replace them wholesale.
> An edit there works perfectly until the next update, then vanishes with no
> error and no diff — the panel behaves differently and nothing in git explains
> why. Everything is designed to be extended from *outside*; see Part 3.

## The demo

`apps/playground` is a *reference application*, not a library. Nothing you build
should `import` or `require` it. You read it, copy code out of it, and the copy
is yours.

```bash
git clone https://github.com/enterprisealxtexh/panelkit.git panelkit-reference
```

**It happens to be an ISP panel** — customers, plans, routers, invoices, ~250,000
seeded rows. That is a deliberate choice and not a constraint on you: a framework
developed against a demo under real load finds what a toy cannot. Read it for the
*shapes* — how a 250,000-row table paginates, how a policy denies, how a wizard
is laid out — and rename the nouns.

**Read `apps/playground/AGENTS.md` first.** It is generated by
`php artisan panel:blueprint`, so it is always true for the version in front of
you, and lists every field, column, filter and action with exact syntax. Your own
app gets its own `AGENTS.md` from `panel:install` — keep it regenerated and point
your AI at it.

**Do not**: add the demo as a composer path repository or npm dependency; copy
its `.env`, seeders or `database/`; copy its vocabulary into your own screens.

---

# Part 1 — Install

PanelKit is **private**. It is not on Packagist and not on npm; the npm package
carries `"private": true` so `npm publish` refuses.

## Into a new application

```bash
laravel new my-panel --vue
cd my-panel
```

`--vue` matters. `panel:install` writes page files into `resources/js/pages`,
which a plain `laravel new` does not have — without it the install reports that
it wrote no screens.

```bash
composer config repositories.panelkit \
  '{"type":"vcs","url":"https://github.com/enterprisealxtexh/panelkit-panel.git","no-api":true}' --json

composer config preferred-install.panelkit/panel source

composer require panelkit/panel
```

**Both lines, and the second one was found by trying it rather than reasoning
about it.** `no-api: true` stops Composer asking GitHub's API where the
repository is and being handed the `git@github.com:` SSH form, which fails with
*"Could not read from remote repository"* on a machine with no SSH key. But it
does **not** stop Composer reaching for the API zipball to download the release,
and on a private repository that 404s:

```
Failed to download panelkit/panel from dist: ... api.github.com ... 404
Source fallback is disabled. Not trying alternative sources.
```

`preferred-install: source` makes Composer clone over git instead, using
whatever git credentials the machine already has — so no `auth.json` and no
second token. If you would rather Composer hold its own credential:

```bash
composer config --global --auth github-oauth.github.com YOUR_TOKEN
```

A classic PAT with `repo`, or a fine-grained one with **Contents: Read** on that
repository.

## The client half — read this, it is the step that strands people

**The Composer package's PHP contains zero `.vue` files.** `panelkit/panel`
answers requests with page names; the screens that resolve those names are the
JavaScript half. A machine without it installs the PHP perfectly and renders
**nothing**, with no error explaining why. That failure has shipped twice.

**So the client half now travels inside the Composer package.** There is no
registry, no `.npmrc`, and no second token:

```bash
composer require panelkit/panel
npm install ./vendor/panelkit/panel/client/panelkit-client.tgz @vitejs/plugin-vue
php artisan panel:install --auth
npm run build
php artisan panel:doctor
```

Three properties are worth understanding, because they each remove a failure
this project actually hit:

- **One credential.** Whatever authenticates Composer against the private
  repository is the only credential involved. There is no npm registry to be
  unreachable, rate-limited, or missing a token.
- **The halves cannot drift.** `panelkit/panel` at 0.9.2 physically carries the
  0.9.2 client. A mismatch used to be possible and did not error — it rendered
  a screen with a missing control, under a 200.
- **The filename never changes.** It is always `panelkit-client.tgz`, never
  `...-0.9.2.tgz`, so the command above is the same in every runbook forever.
  The version lives inside, where tooling reads it. Upgrading is the same line
  again.

**`--auth` unless you already have a sign-in screen.** The panel guards its
routes, and Laravel redirects an unauthenticated request to `route('login')`.
On a stock `laravel/laravel` that route does not exist, so **every panel URL
returns 500** with `Route [login] not defined` - a message naming neither
PanelKit nor the fix. `--auth` writes the sign-in screen and its routes. If
your application already has one (a starter kit, Fortify, anything naming a
route `login`), leave the flag off. `panel:doctor` fails if no panel can
resolve a sign-in route, so you find out from the check rather than from a
white page.

`php artisan panel:install` prints this command with the path already resolved,
and `php artisan panel:doctor` fails if the client half is missing **or is a
different version from the PHP** — the two states that previously produced a
blank or subtly wrong panel in silence.

**If you want the tarball on its own** — a separate front-end build, an
air-gapped transfer — every release attaches it:
`https://github.com/enterprisealxtexh/panelkit/releases`. That needs a token
with `repo` scope, since the repository is private; see `.npmrc.example`.

> **Not GitHub Packages.** Its npm registry requires a token even for *public*
> packages — there is no anonymous read — so it can never be the frictionless
> option it appears to be. That is why this does not use it.

Then, either way:

```bash
php artisan panel:install --auth
php artisan panel:make-user
npm run build && php artisan serve
```

`--auth` scaffolds sign-in, sign-out and password reset on this panel's guard
under this panel's prefix — never at `/login`, so a starter kit's own sign-in is
untouched. Leave it off if Breeze, Jetstream or Fortify already answers.

Sign in at `/login`.

**The default panel serves at the root, not `/admin`.** Route *names* are
`admin.login`, `admin.pages.dashboard`; the URLs are `/login`, `/dashboard`. Use
`->path('admin')` on the panel if you want a prefix.

## Committing the tarball

For a repeatable install across machines and CI, commit the tarball into your
application:

```bash
cd /path/to/panelkit-reference/packages/ui
npm pack --pack-destination /path/to/my-panel/vendor-js
```

```json
// package.json
"dependencies": { "@alxtexh-enterprise/panel": "file:vendor-js/alxtexh-enterprise-panel-0.9.1.tgz" }
```

`npm ci` now works anywhere with nothing to fetch.

---

---

# Part 2 — Authorization

**Read this before writing resources. It will bite before anything else.**

PanelKit denies by default, and harder than most panels. A resource whose model
has no policy is readable by **nobody** — not even an administrator. That is the
intended behaviour, not a misconfiguration: a resource you forgot to authorise
should be invisible rather than public.

If you are arriving from a panel with a more permissive default, expect screens
that "worked" there to 403 here. That is the missing grant surfacing, not a
regression.

- Ability names are **derived** from the registry (`view_any_invoices`), never
  stored. Do not invent your own strings.
- `make:panel-resource --generate` writes a policy extending
  `TenantResourcePolicy` that grants nothing on its own.
- `php artisan panel:permissions sync` creates every ability and an Administrator
  role holding them.
- `php artisan panel:permissions grant --email=you@example.com` gives that role
  to a real person. Nothing does this automatically.
- **`panel:doctor` reports every resource with no policy.** Run it after each
  batch of ports.

**Multi-tenancy is stricter too.** A null tenant is a *denial*, never "all
tenants". Decide `panel.tenancy.mode` **before you have data** — changing it later
is a migration.

---

# Part 3 — Extending

## Where your code goes

```
app/Panel/Resources/     your resources    (php artisan make:panel-resource)
app/Panel/Pages/         your custom pages (php artisan make:panel-page)
app/Models/              your models
config/panel.php         yours once published — abilities, plugins, tenancy
resources/js/pages/      page files: one per screen, and where you override
resources/css/app.css    yours, but keep the two @source lines
```

Use the generators. Create the model and migrate **first** — `--generate` reads
the database, not the model class.

## What ships, and what you supply

44 screens ship. Their **content** is yours:

| Screen | How you fill it |
| --- | --- |
| Help, FAQ | `HelpCentre::add([...])` in a provider — the package ships articles about the panel itself; you add yours |
| About | `panel.about` in config — name, tagline, description, links, contact |
| Settings index | derived from what is routed; add rows with `SettingsIndex::add([...])` |
| Workspaces, Organisation | need `panel.tenancy.model` set to your organisation class |
| User management | finds your users resource by matching `auth.providers.users.model` — nothing to configure |

```php
// AppServiceProvider::boot()
HelpCentre::add([[
    'id' => 'billing', 'category' => 'billing',
    'title' => 'Raising an invoice',
    'keywords' => 'invoice bill charge proforma',
    'body' => ['…'],
]]);

SettingsIndex::add([[
    'key' => 'billing', 'title' => 'Billing',
    'description' => 'Plans, invoices and payment methods.',
    'href' => static fn (): string => route('billing.edit'),  // a CLOSURE — see traps
    'ability' => 'manage_billing',                            // optional; omitted, not disabled
    'order' => 2,                                             // optional; omit to append
]]);
```

Demo-only screens, staying that way: `Docs`, `support/BuildGuide`,
`DevicePreview`, `errors/LoginPreview`, `errors/ShellPreview`, `Invoice`,
`apps/Chat`, `apps/Mail`, `apps/MailThread`. Copy them if you want them; they
become yours.

## Overriding a packaged screen

`panel:install` writes one file per packaged screen — a **shim**, existing only
because Inertia resolves page names by globbing that directory and cannot see
into `node_modules`:

```vue
<script setup lang="ts">
import Trash from '@alxtexh-enterprise/panel/pages/Trash.vue';
defineOptions({ inheritAttrs: false });
</script>

<template>
    <Trash v-bind="$attrs as any" />
</template>
```

To override, edit **that file** and point it at your own component:

```vue
import Trash from '@/components/panel/MyTrash.vue';
```

Same route, same props, same page name. The server neither knows nor cares.

**Keep the `<template>`.** An SFC with only a `<script>` block renders *nothing
at all*, silently, and only in a production build.

**Start from the packaged component.** Copy
`node_modules/@alxtexh-enterprise/panel/inertia/pages/<Screen>.vue`, edit the copy, point
the shim at it. Do not rewrite from scratch — the props are a contract with the
PHP half, and re-deriving them by guesswork is where "the table renders but the
filters do nothing" comes from.

`panel:update` never overwrites an existing page file. To get the packaged
version back, delete yours and re-run it, or use `panel:update --force`.

## Copying from the demo

Copy a resource and rename it rather than writing from scratch — the demo's
resources already handle policies, tenant scoping, soft deletes and summaries.
**Copy the policy too**; a resource without one is a screen nobody can open.

Copying a screen brings its dependencies: these import from `@/components/*` and
`@/routes/*` (Wayfinder). Copy the components too, and keep route helpers
generated with `php artisan wayfinder:generate --with-form`.

If you copy a screen the package might later ship, **keep the page path
identical to the demo's**. `panel:update` will find yours and leave it alone, so
adopting the packaged version costs a delete rather than a reconciliation across
every route, link and menu entry.

---

# Part 4 — Performance

This is why you are moving. Do not undo it:

- **Keyset pagination, no blocking `COUNT(*)`.** A table over 250,000 rows opens
  in the same time as one over 250 — but only if you let the packaged pagination
  do its job.
- **One grouped query for N tabs.** Filter tabs with counts cost one query, not
  one per tab.
- **Deferred widgets.** Every dashboard widget is its own deferred prop, so one
  slow aggregate delays itself rather than the page.
- **Modals open with no request** — the schema travelled with the action.
- **`php artisan panel:benchmark`** enforces per-screen budgets. Run it against
  **real row counts before cutover**, not after.
- **Every filter needs an index.** `panel:doctor` reports filters with none. This
  is the most common cause of "PanelKit is slow on our data".

---

# Part 5 — Upgrading

```bash
composer update panelkit/panel

# The client half is INSIDE the package you just updated. Re-run this every
# time - the path never changes, so the same line always installs the client
# that matches the PHP now on disk.
npm install ./vendor/panelkit/panel/client/panelkit-client.tgz

php artisan panel:update
php artisan wayfinder:generate --with-form
npm run build
```

> **The `npm install` line is not optional and is the step people skip**, because
> `composer update` alone leaves a panel that boots, answers every route, and
> serves the *previous* version's screens. It does not error. The PHP sends a
> schema naming controls the old Vue does not know about, and those controls are
> silently absent — a working-looking panel missing a filter or a chart.
>
> Earlier instructions here said to build the tarball from the monorepo and
> install it from `/tmp`. That has not been true since the client began shipping
> inside the Composer package, and the two halves of this document disagreed for
> several releases.

**`panel:update` is not optional.** It:

- **invalidates the schema cache** — the fingerprint is computed from your
  resource class, which did not change, so without this a release that adds a key
  to the payload serves last version's shape to a bundle rebuilt for the new one,
  as a successful 200 with a control missing
- **writes page files** for screens the new version routes and the old one did
  not — without it a new route answers and the browser shows a white page naming
  a file you have never seen
- **repoints the `@source` lines** in `resources/css/app.css` if the package moved
- **reports pending migrations by name**, and never runs them
- **reports plugins** the new version ships that your published config does not
  install — these do **not** merge automatically, because a list cannot merge
- **ends by running `panel:doctor` and adopting its exit code**, so a bad upgrade
  fails your deploy loudly

Then migrate when you have decided to: `php artisan migrate`.

PanelKit is `0.x`: **the minor is the breaking position.** Pin `^0.9.6` and read
the changelog before each bump.

---

# Part 6 — Deploying

The server needs two things, and **npm is not one of them**.

**1. Composer must reach the private repository.** Give the server its own
read-only access rather than reusing a personal token — a GitHub **deploy key**
(repository Settings → Deploy keys, read access, one per server) is the narrow
option.

**2. Built assets.** Do not build on the server. `npm run build` needs the whole
toolchain and enough memory, and a failed build there is a half-styled panel in
production. Build in your own environment or CI and deploy `public/build`
alongside the code.

```bash
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan panel:update
php artisan config:cache && php artisan route:cache
```

---

# Part 7 — Traps that cost hours

- **The Composer package ships no `.vue` files.** If the panel installs and
  renders nothing, the npm half is missing. Nothing about this failure says so:
  the routes answer, the build succeeds, the screen is blank.
- **A 404 on `npm install @alxtexh-enterprise/panel` means you hit npmjs.com.** The scope
  is not ours there. Check `.npmrc` is in scope and `GITHUB_TOKEN` is exported —
  the error says "not found", never "wrong registry".
- **Your app must be Inertia + Vue.** `laravel new myapp --vue`.
- **The two `@source` lines** in `resources/css/app.css` are load-bearing.
  Tailwind does not scan `node_modules`; without them every utility used only
  inside a packaged screen is purged and the panel renders with no layout, no
  colour, and a clean build log.
- **The default panel serves at `/`, not `/admin`.** Route names say `admin.`;
  URLs do not.
- **A packaged route yields to one you already own.** If your application
  declares `/settings/profile`, the packaged screen does not register — by
  design, because registering it would **delete your route's name**. Laravel
  indexes routes by method+URI, so a duplicate replaces rather than coexists and
  the name lookup is rebuilt from survivors. The symptom is
  `Route [profile.edit] not defined` thrown from code you did not change. The
  cost: the settings index will not list a screen it cannot see — add the row
  yourself with `SettingsIndex::add()`.
- **`href` must be a closure when registering from a provider.** `boot` runs
  before routes exist, so an eager `route()` throws.
- **A generated policy denies by default.** Deliberate. Grant with
  `panel:permissions sync` and `grant`.
- **`config/panel.php` is yours once published.** New keys merge in, *except
  inside arrays you have published* — a plugin added to the packaged list will
  never reach you silently. `panel:update` reports these by name; act on it.
- **Never commit to the split repository** (`panelkit-panel`). It is generated
  output; the next split overwrites it. All PanelKit work happens in the monorepo.
- **Build assets before deploying, not on the server.**

---

# Part 8 — Before it carries real work

Whatever the domain, before the first person who is not you depends on it:

- [ ] `panel:doctor` green, and in the deploy pipeline with its exit code
- [ ] `panel:benchmark` inside budget on **production-sized** data, not seeds
- [ ] Every resource has a policy, and the policy denies by default
- [ ] Tenancy mode decided and migrated; cross-tenant isolation tested
- [ ] Every filterable column has an index
- [ ] Assets built **before** the deploy, never on the server
- [ ] A deploy key so composer can reach the private repository
- [ ] Every screen opened once in a browser by a person

**If you are replacing an existing system**, add these:

- [ ] Both run side by side, sharing the database, on different paths
- [ ] Links moved one screen at a time, not in one release
- [ ] The numbers each produces reconciled against the other
- [ ] The old panel removed only once nothing points at it
- [ ] Anything the old panel had that this does not — plugins, integrations,
      reports — either replaced or consciously dropped, in writing

---

# Part 9 — The honest risk list

Read this before deciding what to trust it with.

- **PanelKit has no production history.** Not one real user, tenant or outage
  before yours. The 2,072 tests check my assumptions; they cannot check the ones
  I did not think of.
- **No external security review.** The cross-tenant isolation matrix and the
  authorisation tests are mine.
- **No load testing** beyond benchmark medians on seeded data.
- **It is `0.x`.** The minor is the breaking position.
- **Nothing is published**, so there is no external validation and no other
  consumer hitting bugs before you do.

**What this means in practice depends on what the panel holds.** A read-only
internal dashboard and a system that moves money are not the same bet:

- **If it holds money, stock, health records, or anything legally binding** —
  run it beside whatever you have now, in read-only, until the numbers agree.
  Start with a low-stakes resource. Verify amounts by eye on **both** the list
  and the record page; that exact pair disagreed once, with the list showing
  `2,500.00` and the record page showing `250000`, and it passed 1,700 tests.
- **If it is an internal tool over data you can restore** — the risk is an
  afternoon, and the checklist above is enough.

None of this is a reason not to use it. They are reasons to keep the old thing
running longer than feels necessary, and to move the screens that matter last.

---

# Appendix — Command reference

```bash
# Generators
php artisan make:panel-resource Subscriber --generate   # reads the table
php artisan make:panel-page BillingRun
php artisan make:panel portal --auth                    # a second portal
php artisan make:api-token

# Install and upgrade
php artisan panel:install --auth
php artisan panel:update
php artisan panel:doctor                                # run this constantly
php artisan panel:blueprint                             # regenerates AGENTS.md

# Permissions
php artisan panel:permissions sync
php artisan panel:permissions grant --email=you@example.com
php artisan panel:permissions list

# Accounts and tenants
php artisan panel:make-user
php artisan panel:suspend-tenant
php artisan panel:reindex-tenant

# Performance and housekeeping
php artisan panel:benchmark
php artisan panel:cache-clear
php artisan panel:prune-exports
php artisan panel:prune-trash
php artisan panel:prune-uploads
php artisan panel:refresh-rollups
```
