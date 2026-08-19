# 1. Install

## From GitHub, no registry account needed

panelkit hosts the panel on GitHub. There is no Packagist or npm account
needed. Add the VCS repository to your application's `composer.json`:

```json
"repositories": [
    { "type": "vcs", "url": "https://github.com/Alxtexh/panelkit", "no-api": true }
]
```

Then require **^1.0**:

```bash
composer require alxtexh-enterprise/panel:^1.0
php artisan panel:install
```

`panel:install` does not run `composer install`. Run the installer after
`composer require`, and it will publish config, scaffold panel plumbing, and
write front-end wiring based on the version Composer already installed.

Optional flags:

```bash
# If you already have a login (starter kit, Fortify, etc.)
php artisan panel:install --no-auth

# If you want to create the first Administrator yourself
php artisan panel:install --no-user
php artisan panel:make-user
```

First visit uses **published kit CSS/JS** at `public/vendor/panel`. There is no
white page and no `npm run build` required. `npm install && npm run build` is
optional, only if you customise Vue. The default root view loads kit dist when
`public/build/manifest.json` is missing, and `@vite` only when that manifest
exists.

**`"no-api": true` is load-bearing.** Without it Composer calls GitHub's API for
a VCS repository and authenticates even for a public one, failing with
`Could not authenticate against github.com`, which reads as the repository
being private. With it, Composer clones and no credential is involved.

**There is no second install for the front end.** The Vue screens ship *inside*
the Composer package at `resources/client`, and `panel:install` points your
`package.json` at them with a `file:` dependency. One source, one version, and
the two halves cannot drift apart.

## What first visit looks like

A fresh install is **chrome plus an empty canvas**, not the Nairobi Fibre ISP
demo. After sign-in you should see:

- the dashboard (no sample revenue or orders)
- the user menu (Profile, Settings, Log out)
- a **Get started** card with kit chrome steps
- Directory in the sidebar once you hold Administrator

Create and edit stay **dedicated pages**. They are not Livewire modals.

`apps/playground` in this monorepo is a **demo application** (an ISP back office)
for design reference. It is not the kit default and not what `panel:install`
writes.

## What `panel:install` does

It is idempotent and never overwrites a file you have edited. Running it twice
leaves `package.json` byte-identical.

Auth is **on by default** (login exists), matching `filament:install --panels`.
Pass `--no-auth` to skip. After install it prompts for `panel:make-user` and
grants **Administrator** (`grants_all`) so the sidebar is not empty. Pass
`--no-user` to skip. It also runs `panel:permissions sync`, appends
`SharePanelProps` to the `web` middleware group, and sets tenancy to `none`
when the users table has no `tenant_id`.

| Step | Result |
|---|---|
| Publishes `config/panel.php` | Every option, commented. Tenancy default `none` |
| Publishes kit lang (`panel-lang`) | `lang/vendor/panel/{en,es,fr}` - overlay with `__('panel::...')` |
| Publishes kit assets | `public/vendor/panel/{app.css,app.js}` from package `dist/kit`. First visit has CSS without npm |
| Writes `resources/views/app.blade.php` | Root view. Loads kit dist unless a Vite manifest exists |
| Writes `resources/js/app.ts` | Inertia bootstrap with `PanelLayout` + nested `SettingsLayout` for settings pages |
| Writes `resources/js/layouts/PanelLayout.vue` | A layout you are meant to replace |
| Merges `resources/css/app.css` | Points Tailwind at the package. Without this you get a working panel with no styling |
| Wires `vite.config.js` | Adds the Vue plugin if the app has none |
| Appends `SharePanelProps` to `web` | App-owned routes keep the shell (account menu, footer). This is not optional |
| Writes core page files | Auth, CRUD, settings, dashboard host, Directory chrome hub, and the SaaS suspended-access screen. Catalog / PlanSetup / Signatures stay optional (`PanelPages::writeOptional()`) |
| Writes empty `DashboardPage` | No sample revenue or orders; host fills `stats()` / `charts()` |
| Scaffolds sign-in | Default. `--no-auth` to skip |
| Syncs permissions + first user | Administrator with `grants_all`. `--no-user` to skip |
| Creates `app/Panel/` | Where your resources live |
| Writes `AGENTS.md` | Conventions, regenerate with `panel:blueprint` |

Non-interactive first user:

```bash
php artisan panel:install --name="Ada" --email=ada@example.com --password=secret
```

Add `--force` to overwrite the published config and page files.

## After installing

**1. Assets are already published.** `panel:install` copies kit CSS/JS to
`public/vendor/panel`. First visit has chrome, not a white page.

`npm install && npm run build` is optional, only if you customise Vue. After a
Vite build the root view uses `@vite` instead of kit dist.

**2. Serve from a real terminal.** Cursor agent shells abort `php artisan serve`.
Use your own terminal, or:

```bash
composer run serve
# or
nohup php artisan serve --host=127.0.0.1 --port=8899 > storage/logs/serve.log 2>&1 &
```

**3. Tenancy is `none` unless you asked for more.** Add a `tenant_id` column and
set `panel.tenancy.mode` to `column` when you actually have organisations. See
[Authorisation and tenancy](08-authorisation-and-tenancy.md).

**4. Empty sidebar** only happens with `--no-user` (or if you skipped the
prompt). That is deny-by-default with no grants, not a broken install:

```bash
php artisan panel:make-user
```

**5. Add a resource.** Next is the **Get started** card, or the official starter:

```bash
php artisan make:panel-recipe Invoices
# alias: php artisan panel:recipe invoices
```

That writes `InvoiceResource` (number, status, total, dated_at), a model, a
policy, and a migration. Vue is kit ResourceIndex / Form / View. Default: no
rows. Pass `--migrate` to create the table, `--seed` for fake data. See
[Starter recipe: Invoices](recipes/01-invoices.md).

Or point a resource at a table you already have:

```bash
php artisan make:panel-resource Invoice --generate
```

`--generate` reads the table and infers columns, fields and filters. Visit
`/invoices`; discovery registers it, and there is no route to add.

**6. Review the generated policy.** The panel denies any ability whose model has
no policy, so an unreviewed stub is a real grant.

## Checking your work

```bash
php artisan panel:doctor
```

Every check in `panel:doctor` exists because the failure is otherwise **silent**,
a working panel serving wrong or unprotected data, where every page returns 200
and every test passes. Run it first on any new installation.

## Requirements

PHP 8.4, Laravel 12 or 13, Inertia 2 or 3, Vue 3.5. Multi-database tenancy
additionally needs `stancl/tenancy` ^3.10.
