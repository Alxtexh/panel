# 1. Install

## From GitHub — no registry account needed

Alxtexhpanel is not on Packagist or npm, and does not need to be. Add the
repository to your application's `composer.json`:

```json
"repositories": [
    { "type": "vcs", "url": "https://github.com/Alxtexh/panel", "no-api": true }
]
```

Then require **^1.0**:

```bash
composer require alxtexh-enterprise/panel:^1.0
php artisan panel:install
npm install && npm run build
```

**`"no-api": true` is load-bearing.** Without it Composer calls GitHub's API for
a VCS repository and authenticates even for a public one, failing with
`Could not authenticate against github.com` — which reads as the repository
being private. With it, Composer clones and no credential is involved.

**There is no second install for the front end.** The Vue screens ship *inside*
the Composer package at `resources/client`, and `panel:install` points your
`package.json` at them with a `file:` dependency. One source, one version, and
the two halves cannot drift apart.

## What `panel:install` does

It is idempotent and never overwrites a file you have edited. Running it twice
leaves `package.json` byte-identical.

| Step | Result |
|---|---|
| Publishes `config/panel.php` | Every option, commented |
| Writes `resources/views/app.blade.php` | The root view Inertia renders into |
| Writes `resources/js/app.ts` | The Inertia bootstrap, if you have none |
| Writes `resources/js/layouts/PanelLayout.vue` | A layout you are meant to replace |
| Merges `resources/css/app.css` | Points Tailwind at the package — **without this you get a working panel with no styling** |
| Wires `vite.config.js` | Adds the Vue plugin if the app has none |
| Writes 33 page files | Inertia resolves page names by globbing `resources/js/pages`, and cannot see into `node_modules` |
| Creates `app/Panel/` | Where your resources live |
| Writes `AGENTS.md` | Conventions, regenerate with `panel:blueprint` |

Add `--auth` to also scaffold sign-in, sign-out and password reset for the
default panel. Add `--force` to overwrite the published config and page files.

## After installing

**1. Decide your tenancy mode.** The panel denies every query when it expects a
tenant and cannot resolve one — a deliberate deny-by-default. For a
single-tenant application:

```php
// config/panel.php
'tenancy' => ['mode' => 'none'],
```

For multi-tenant, add a `tenant_id` column to your users table and leave the
mode as `column`. See [Authorisation and tenancy](08-authorisation-and-tenancy.md).

**2. Create the ability names and an administrator.**

```bash
php artisan panel:permissions sync
php artisan panel:make-user
```

**Without a role, every screen is empty and most menu entries are absent.**
This is the single most common "the panel is missing things" report, and it is
authorisation working correctly — see
[Built-in screens](10-built-in-screens.md).

**3. Add a resource.**

```bash
php artisan make:panel-resource Invoice --generate
```

`--generate` reads the table and infers columns, fields and filters. Visit
`/invoices`; discovery registers it, and there is no route to add.

**4. Review the generated policy.** The panel denies any ability whose model has
no policy, so an unreviewed stub is a real grant.

## Checking your work

```bash
php artisan panel:doctor
```

Every check in `panel:doctor` exists because the failure is otherwise **silent** —
a working panel serving wrong or unprotected data, where every page returns 200
and every test passes. Run it first on any new installation.

## Requirements

PHP 8.4, Laravel 12 or 13, Inertia 2 or 3, Vue 3.5. Multi-database tenancy
additionally needs `stancl/tenancy` ^3.10.
