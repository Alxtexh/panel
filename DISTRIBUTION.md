# Getting PanelKit into a project

PanelKit lives in this monorepo. To use it in another application, that
application has to get two things:

| Half | What it is | Lives in |
| --- | --- | --- |
| `panelkit/panel` | the PHP package — routes, resources, commands | `packages/panel` |
| `@alxtexh-enterprise/panel` | the Vue package — the screens and the components | `packages/ui` |

Both are required. The PHP half answers requests with page names; the npm half
is what resolves those names into screens. One without the other gives you
routes that render nothing.

**PanelKit is private.** It is not on Packagist and not on npm, and
`packages/ui/package.json` carries `"private": true` so `npm publish` refuses
outright. Sections 1 and 2 are how it is actually installed. Section 3 is kept
only as a record of what going public would take.

---

## 1. Private — from this folder (no accounts, no publishing)

For your own projects on this machine. Nothing goes to the internet, there is
no GitHub, no Packagist, no npm, no tokens.

In the new application:

```bash
composer config repositories.panelkit \
  '{"type":"path","url":"/home/alxtexh/Documents/Panel/packages/panel","options":{"symlink":false}}' --json

composer require panelkit/panel:@dev
```

Then the Vue half, as a real tarball rather than a symlink — so you are running
what would actually ship:

```bash
cd /home/alxtexh/Documents/Panel/packages/ui && npm pack --pack-destination /tmp
```

```bash
# back in the application; use the filename npm pack printed
npm install /tmp/panelkit-panel-0.8.0.tgz @vitejs/plugin-vue
```

And install:

```bash
php artisan panel:install --auth
php artisan panel:make-user
npm run build
```

**`symlink:false` matters.** A symlinked path repository makes composer point
at the live folder, so an edit here silently changes an application you thought
was pinned. Copying is what a real install does.

**When you change PanelKit**, the application does not see it until you repeat
the two steps: `composer update panelkit/panel` and a fresh `npm pack` +
`npm install`.

---

## 2. Private — from a private git repository

For using PanelKit on more than one machine, or on a server, while keeping it
closed.

The PHP half needs its own repository, because **Composer can only install a
package whose `composer.json` is at the root of a repository.** It cannot reach
into a subfolder of a monorepo. That is the entire reason a "split" exists.

```bash
PANELKIT_PANEL_REMOTE=git@github.com:you/panelkit-panel.git \
  scripts/split.sh --push --tag v0.8.0
```

That copies `packages/panel` out as its own standalone repository history and
pushes it. The repository can be private. Then in the application:

```bash
composer config repositories.panelkit \
  '{"type":"vcs","url":"https://github.com/enterprisealxtexh/panelkit-panel.git","no-api":true}' --json

composer require panelkit/panel
```

**`no-api: true` is not optional on a private repository.** Without it composer
asks GitHub's API where the repository is, is handed the `git@github.com:` SSH
form, and fails with *"Could not read from remote repository"* on any machine
with no SSH key registered — which reads like the repository is missing rather
than like an authentication choice. With it, composer clones over HTTPS and uses
the same credential `git clone` would.

The npm half does not need a repository. Build the tarball here and commit it
into the application, which is the only form that survives a deploy:

```bash
cd packages/ui && npm pack --pack-destination /path/to/your-app/vendor-js
```

Then in the application's `package.json`:

```json
"dependencies": { "@alxtexh-enterprise/panel": "file:vendor-js/panelkit-panel-0.8.0.tgz" }
```

`npm ci` now works on any machine, including a server, with nothing to fetch.

---

## 3. Public — Packagist and npm (NOT IN USE)

Kept for reference. PanelKit was briefly on Packagist and was withdrawn; nothing
was ever published to npm. Do not follow this section unless the decision to
stay private is deliberately reversed.

**PHP → Packagist.** Packagist does not host anything; it reads a public git
repository. So the split repository has to be public.

1. `scripts/split.sh --push --tag vX.Y.Z` against the public split repository
2. Submit its URL once at <https://packagist.org/packages/submit>
3. Accept the GitHub webhook it offers, so future tags publish themselves

**JavaScript → npm.** npm is different: you *upload* the files, so it needs an
account and, for publishing, two-factor authentication.

1. Account at <https://www.npmjs.com/signup>
2. 2FA at Settings → Two-Factor Authentication → *Authorization and Publishing*
3. `@panelkit` is a scope — you must own an org of that name
   (<https://www.npmjs.com/org/create>) or publish under your own username scope
4. `cd packages/ui && npm publish --access public` — it asks for the 6-digit code

Then anyone can run:

```bash
composer require panelkit/panel
npm install @alxtexh-enterprise/panel
php artisan panel:install --auth
npm run build
```

### Making it private again

- **npm** — if `npm publish` never succeeded, nothing is there and there is
  nothing to undo. If it did, `npm unpublish @alxtexh-enterprise/panel --force` works
  within 72 hours of the first publish, and not after.
- **Packagist** — the package page has a **Delete** button while nobody depends
  on it.
- **GitHub** — the split repository can be switched to private in
  Settings → General → Danger Zone → Change visibility. Packagist will stop
  being able to read it, which is the point.

---

---

## Deploying to a server

The server needs two things, and neither of them is npm.

**1. Composer has to be able to clone the private repository.** Give the server
its own read-only access rather than reusing your personal token — a GitHub
**deploy key** (Settings → Deploy keys on `panelkit-panel`, read access, one key
per server) is the narrow option. Then `composer install` works as it does here.

**2. The built assets.** Do not build on the server. `npm run build` needs the
whole toolchain and enough memory, and a failed build there means a half-styled
panel in production. Build in your own environment or in CI and deploy
`public/build` alongside the code — the standard Laravel deployment shape.

The deploy itself is then ordinary:

```bash
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan panel:update      # reconciles page files, reports migrations, runs doctor
php artisan config:cache && php artisan route:cache
```

`panel:update` is the one PanelKit-specific step, and it is the one that stops a
release adding a routed screen your bundle has no component for.

## Why it is shaped like this

Filament is the same shape: you develop in `filamentphp/filament`, and Composer
installs from split repositories. The difference is that Filament renders Blade
on the server and ships precompiled assets, so it needs no npm step at all.
PanelKit sends a schema once and renders on the client, so a JavaScript bundle
is unavoidable.

That is one extra command in the install and one extra place to publish. It is
also why the panel stays fast on a table with 250,000 rows.

## Things that went wrong once, so they do not go wrong again

- **`scripts/split.sh` pushes over the destination's `main`.** That is right for
  a mirror repository whose whole content is one package, and destroys the
  source if you point it at the monorepo. It now refuses a destination that
  resolves to this repository's own `origin`.
- **A split repository is generated output.** Never commit to it directly — the
  next split overwrites it. All work happens in this monorepo.
- **The tag has to point at the split commit**, not the monorepo commit, because
  the monorepo commit does not exist inside the split repository. `split.sh`
  handles this; doing it by hand needs a temporary carrier tag.
- **Renaming the npm package silently breaks stylesheets.** The `@source` lines
  in `resources/css/app.css` are strings nothing resolves, so a stale one makes
  Tailwind purge every utility used only inside the packaged screens — an
  unstyled panel with a clean build log. `panel:update` rewrites them.
