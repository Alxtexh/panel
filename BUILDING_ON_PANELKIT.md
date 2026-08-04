# Building on PanelKit

**Audience: an AI agent, or a developer, building an application on PanelKit — an
ISP billing system in this case — using the reference demo as a source.**

The goal is an application that gets everything PanelKit ships, borrows freely
from the demo, and still takes a `composer update panelkit/panel` cleanly six
months from now. That last part is the whole point of this document, and it is
easy to lose by accident.

---

## 1. What you are working with

Three things. Keep them straight, because the rules differ for each.

| | What | May you edit it? |
| --- | --- | --- |
| **Your application** | the ISP billing system you are building | **Yes.** This is your code |
| **The package** | `vendor/panelkit/panel` + `node_modules/@panelkit/panel` | **Never.** Wiped by every update |
| **The demo** | `apps/playground` in the PanelKit monorepo | **Read and copy from.** Never depend on it |

The demo is a *reference application*, not a library. Nothing you build should
`import` from it or `require` it. You read it, you copy code out of it into your
own app, and then that copy is yours.

Clone it to read:

```bash
git clone https://github.com/enterprisealxtexh/panelkit.git panelkit-reference
```

The demo lives at `panelkit-reference/apps/playground`. It is itself an ISP
panel — subscribers, plans, routers, invoices — so for a billing system it is
unusually close to what you want.

---

## 2. The one rule

> **Never edit anything under `vendor/` or `node_modules/`.**

Both directories are *generated*. `composer update` and `npm install` replace
them wholesale. An edit there works perfectly until the next update, then
vanishes with no error and no diff — the panel simply behaves differently and
nothing in git explains why.

Everything PanelKit ships is designed to be extended from *outside*. If you find
yourself wanting to edit the package, the answer is one of section 5 or 6.

---

## 3. Where your code goes

```
app/Panel/Resources/     your resources    (php artisan make:panel-resource)
app/Panel/Pages/         your custom pages (php artisan make:panel-page)
app/Models/              your models
config/panel.php         yours once published - abilities, plugins, tenancy
resources/js/pages/      page files: one per screen, and where you override
resources/css/app.css    yours, but keep the two @source lines
routes/                  your routes; panel routes are registered by the package
```

Use the generators rather than writing these by hand. They produce the shape the
package expects, and a resource that does not match it fails in ways that look
like the framework misbehaving:

```bash
php artisan make:panel-resource Invoice --generate
php artisan make:panel-page BillingRun
```

`--generate` reads the table and writes columns, filters and form fields from
the real schema. Create the model and migrate **first** — the generator reads
the database, not the model class.

---

## 4. Using the demo properly

Three legitimate ways, in order of preference.

### 4a. Read it to learn the idiom

Before writing a resource, read the closest demo equivalent. For billing, the
directly relevant ones:

```
apps/playground/app/Panel/Resources/     every resource the demo defines
apps/playground/app/Panel/Pages/         non-resource screens
apps/playground/app/Models/              the ISP domain models
apps/playground/database/migrations/     the schema behind them
```

Read `AGENTS.md` in the demo root first. It is *generated* by
`php artisan panel:blueprint`, so it is always true for the version in front of
you, and it lists every field, column, filter and action available with the
exact syntax. Your own app gets its own `AGENTS.md` from `panel:install` — keep
it regenerated and point your AI at it.

### 4b. Copy a resource and rename it

The demo's resources are ordinary PHP classes. Copy one into
`app/Panel/Resources/`, change the namespace, point it at your model, and edit.
This is faster and more correct than writing from scratch, because the demo's
resources already handle the things that are easy to miss — policies, tenant
scoping, soft deletes, the summarise row.

**Copy the policy too.** A resource without a policy is a screen anyone can
open. `panel:doctor` reports this, which is why you run it (section 7).

### 4c. Copy a screen the package does not ship

Covered in section 5, because it needs care to stay upgrade-safe.

### What NOT to do

- **Do not** add the demo as a composer path repository or an npm dependency.
  It is an application; it has its own migrations, seeders, routes and 250,000
  seeded subscriber rows.
- **Do not** copy its `.env`, its seeders, or its `database/` directory.
- **Do not** copy its ISP vocabulary into things you will later want generic.

---

## 5. The screens PanelKit does not ship yet

As of `v0.8.0` the package ships 35 screens. The demo has 49. Some of the
difference is demo-only by design; some is a real gap being closed.

### Demo-only — do not expect these to arrive

`Docs`, `support/BuildGuide` (documentation about PanelKit itself),
`DevicePreview`, `errors/LoginPreview`, `errors/ShellPreview` (showcase tools),
`Invoice`, `apps/Chat`, `apps/Mail`, `apps/MailThread` (sample apps).

Copy them if you want them. They are yours from then on.

### Real gaps — being packaged, so copy them **carefully**

| Screen | Status |
| --- | --- |
| `settings/Security` `settings/Profile` | components already packaged, pages are not |
| `support/Help` `support/Faq` `support/WhatsNew` `support/About` | help centre, nothing packaged |
| `settings/UserManagement` `settings/Organisation` `settings/Workspaces` | not packaged |

**Copy these from the demo now, and follow the rule below so that swapping to
the packaged version later costs you nothing.**

### The rule that makes the swap free

> **Keep the page name and the route name identical to the demo's.**

Copy `apps/playground/resources/js/pages/settings/Security.vue` to
`resources/js/pages/settings/Security.vue` — the *same path*. Register it at the
same route name (`settings.security`). Copy the controller it needs into
`app/Http/Controllers/Settings/`.

When the package ships that screen, `panel:update` will try to write a page file
at exactly that path, find yours already there, and **leave it alone** — it
never overwrites (section 6). You then have a free choice:

- keep yours, and nothing changes; or
- adopt the packaged one by replacing your file with the shim in section 6, and
  deleting the controller and routes you copied.

If instead you rename it — `resources/js/pages/MySecurity.vue`, route
`account.security` — you get both screens, in different places, and reconciling
them later is manual work on every route, link and menu entry.

**Copying a screen brings its dependencies.** These screens import from
`@/components/*` and `@/routes/*` (Wayfinder). Copy the components they need
out of the demo too, and keep the Wayfinder route helpers generated:

```bash
php artisan wayfinder:generate --with-form
```

---

## 6. Overriding a screen the package **does** ship

This is a first-class, supported thing. It is what `resources/js/pages/*.vue`
is for.

`panel:install` writes one file per packaged screen. Each is a **shim** — it
exists only because Inertia resolves page names by globbing that directory and
cannot see into `node_modules`:

```vue
<script setup lang="ts">
import Trash from '@panelkit/panel/pages/Trash.vue';
defineOptions({ inheritAttrs: false });
</script>

<template>
    <Trash v-bind="$attrs as any" />
</template>
```

To override it, edit **that file** and point it at your own component:

```vue
<script setup lang="ts">
import Trash from '@/components/panel/MyTrash.vue';
defineOptions({ inheritAttrs: false });
</script>

<template>
    <Trash v-bind="$attrs as any" />
</template>
```

Nothing else changes — same route, same props, same page name. The server does
not know or care.

**Keep the `<template>`.** A single-file component with only a `<script>` block
renders *nothing at all*, silently, and only in a production build.

`panel:update` never overwrites a page file that already exists. If you want the
packaged version back, delete your file and re-run it, or use
`panel:update --force` to reset every shim.

**Start from the packaged component.** Copy
`node_modules/@panelkit/panel/inertia/pages/<Screen>.vue` into your app, edit
the copy, and point the shim at it. Do not rewrite the screen from scratch — the
props it receives are a contract with the PHP half, and re-deriving them by
guesswork is where "the table renders but the filters do nothing" comes from.

---

## 7. The upgrade routine

Every time you update PanelKit:

```bash
composer update panelkit/panel
php artisan panel:update
php artisan wayfinder:generate --with-form
npm run build
```

**`panel:update` is not optional.** It:

- invalidates the schema cache — without it, resources whose class did not
  change keep serving the *old* payload shape to a bundle rebuilt for the new
  one, as a successful 200 with a control missing
- writes page files for screens the new version routes and the old one did not —
  without it, a new route answers and the browser shows a white page naming a
  file you have never seen
- repoints the `@source` lines in `resources/css/app.css` if the package moved
- reports pending migrations **by name**, and never runs them
- reports plugins the new version ships that your published config does not
  install — these do **not** merge automatically, because a list cannot merge
- ends by running `panel:doctor`, and adopts its exit code, so a bad upgrade
  fails your deploy loudly instead of quietly

Then run migrations when you have decided to:

```bash
php artisan migrate
```

`panel:doctor` on its own is worth running whenever something feels wrong. It
reports the class of problem that produces a *working* panel that is subtly
wrong: a resource with no policy, a filter with no index, a permission config
that fails open.

---

## 8. What the demo already gives an ISP billing system

The demo is an ISP panel, so much of the domain work is done. Directly useful:

- **Subscribers/clients** — resource, policy, tenant scoping, the 250k-row
  performance work (virtual scrolling, query-count guards, index requirements)
- **Plans** — a catalogue resource with a price column; the `money` column type
  is packaged
- **Routers** — device inventory with status, and dashboard widgets over it
- **Invoices** — the `Invoice` screen and the document template designer, which
  is packaged and is how you produce a PDF invoice
- **Tenancy** — `stancl/tenancy` v3 wired both ways (shared database with a
  column, and database-per-tenant), plus the cross-tenant isolation test matrix.
  Decide this **before** you have data; changing it later is a migration
- **Ticketing** — packaged, both sides (customer opens, operator answers), with
  SLA timers and departments
- **Scheduled reports, backups, monitoring, audit trail** — all packaged

Read the demo's migrations before designing your billing schema. The indexes
there exist because `panel:benchmark` failed without them.

---

## 9. Traps that cost hours

- **Your app must be an Inertia + Vue app.** `laravel new myapp --vue`. A plain
  `laravel new` has no `resources/js/pages`, so `panel:install` writes no
  screens and reports that it did nothing.
- **The two `@source` lines** in `resources/css/app.css` are load-bearing.
  Tailwind does not scan `node_modules`; without them every utility used only
  inside a packaged screen is purged and the panel renders with no layout, no
  colour, and a clean build log.
- **The default panel serves at the root**, not `/admin`. Route *names* are
  `admin.login`, `admin.pages.dashboard`, but the URLs are `/login`,
  `/dashboard`. Use `->path('admin')` on the panel if you want a prefix.
- **A generated policy denies by default.** That is deliberate. Grant abilities
  with `php artisan panel:permissions sync` and `panel:permissions grant`.
- **`config/panel.php` is yours once published.** The package merges new keys
  in, *except inside arrays you have published* — a plugin added to the packaged
  `plugins` list will never reach you silently. `panel:update` reports these by
  name; act on it.
- **Never commit to the split repository** (`panelkit-panel`). It is generated
  output; the next `scripts/split.sh` overwrites it. All PanelKit work happens
  in the monorepo.
- **Build assets before deploying, not on the server.** See
  [DISTRIBUTION.md](DISTRIBUTION.md).

---

## 10. A first session, concretely

```bash
laravel new isp-billing --vue && cd isp-billing

composer config repositories.panelkit \
  '{"type":"vcs","url":"https://github.com/enterprisealxtexh/panelkit-panel.git","no-api":true}' --json
composer require panelkit/panel

# the client half - build the tarball from the monorepo checkout
npm install /path/to/panelkit-panel-0.8.0.tgz @vitejs/plugin-vue

php artisan panel:install --auth
php artisan panel:make-user
npm run build && php artisan serve
```

Sign in at `/login`. Then:

```bash
php artisan make:model Subscriber -m      # fill the migration in
php artisan migrate
php artisan make:panel-resource Subscriber --generate
php artisan panel:permissions sync
php artisan panel:blueprint                # regenerate AGENTS.md, then read it
```

From there: copy what you need out of the demo, following section 5, and keep
`panel:doctor` green.
