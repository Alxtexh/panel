# 1. Install

## GitHub only install (VCS composer repository)

panelkit hosts the panel on GitHub. This installer flow avoids any Packagist or
npm account. Add the VCS repository to your application's `composer.json`:

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

## What we shipped recently

These changes matter during installation and first login:

- Email OTP MFA as a second factor at the login door.
- Optional required-enrol wall after login (enrol TOTP, email OTP, or passkey before reaching the dashboard).
- Registration plus email verification flow for self-service sign-up.
- Tenant scoping foundation and the tenant switcher admin UI once tenancy is configured.
- Notification toasts with action buttons, plus the bell/inbox stored through the database channel.
- Table UX improvements: range selection, toggleable columns, and global search.

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

## What is next after install

`panel:install` already publishes kit CSS/JS to `public/vendor/panel`. Next:

1. Run migrations, then reconcile permissions if you added new resources:

```bash
php artisan migrate
php artisan panel:permissions sync
```

2. Set environment variables for mail and auth providers:

- Mail: set `MAIL_*` in `.env` for email OTP and email verification.
- Auth providers: set any provider keys used by `config/services.php`.
- Turnstile (optional): set `TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.

3. Create your first Administrator:

- Default install: follow the installer prompt after `panel:install`.
- If you used `--no-user`: run `php artisan panel:make-user`.

4. Verify demo vs production differences:

A fresh install is an empty canvas. Confirm tenancy settings match your
production schema, and do not rely on the repo's demo data layout.

## Panel plugins

Plugins extend a panel with resources, routable Page classes, widgets, sidebar
entries, and render hooks. They are registered explicitly (no auto-discovery).

Register globally in published config:

```php
// config/panel.php
'plugins' => [
    \App\Plugins\Acme\BillingPlugin::class,
],
```

Or on one portal in your panel provider:

```php
Panel::make('admin')->plugins([
    new \App\Plugins\Acme\BillingPlugin(),
]);
```

Scaffold a first-party plugin:

```bash
php artisan make:panel-plugin Acme/Billing
```

`registerPages()` with `pageClasses()` mounts routes when the panel boots and
adds sidebar navigation from the Page class. `registerMenuItems()` with
`menuItem()` adds a sidebar link only: pair it with `PluginContext::routes()`
for custom controllers, or prefer `pageClasses()` for full pages.

Vue/Inertia components referenced by render hooks or Page classes live in the
**host application**, not inside the plugin package.

Run `php artisan panel:doctor` to confirm plugin contract compatibility and
catch duplicate page slugs before boot.

### Plugin performance

PanelKit does not scan for plugins. Only classes you list in
`config('panel.plugins')` or `Panel::plugins()` load, and only when their panel
is first used on a request. Register only what you need, host Vue components in
your app, and run `panel:doctor --profile=production` for a lightweight plugin
count note and missing-class checks.

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
