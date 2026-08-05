# Installing PanelKit __VERSION__ on staging, by hand

For `/var/www/html/Paygridbilling-new`. Everything here is offline — no
registry, no npm token, no GitHub access needed.

**Read `PANELKIT.md` for how to BUILD with PanelKit.** This file is only how to
get it onto the box.

---

## What changed in 0.9.2 — read this if you installed 0.9.1

**There is only one archive now.** The client half — the 85 Vue screens that
make the panel render — used to be a second tarball you had to remember to
install. It now ships **inside** the Composer package.

If you installed the 0.9.1 bundle, you can delete `vendor-js/` and any `.npmrc`
you created for PanelKit. The npm registry is out of the picture entirely.

---

## What is in this folder

| File | What it is |
|---|---|
| `panelkit-panel-__VERSION__.tar.gz` | **The whole thing.** PHP package *and* the client half at `client/panelkit-client.tgz`. |
| `CHECKSUMS.txt` | sha256. Check it. |
| `PANELKIT.md` | The build guide. The one document to keep. |
| `UPGRADING.md`, `CHANGELOG.md` | What changed and what breaks. |

---

## 0. Before anything

```bash
cd /var/www/html/Paygridbilling-new
```

**Take a database dump and a copy of `.env` first.** Step 4 runs migrations,
the only step here that deleting a directory will not undo.

```bash
cp .env .env.before-panelkit
sha256sum -c CHECKSUMS.txt
```

---

## 1. Unpack the package

```bash
mkdir -p vendor-src
tar xzf panelkit-panel-__VERSION__.tar.gz -C vendor-src
ls vendor-src/panelkit-panel/client/
```

That last command must print `panelkit-client.tgz`. If it does not, the archive
is wrong — stop, because an install without it renders nothing and says
nothing.

---

## 2. The PHP half, as a path repository

In `composer.json`:

```json
{
    "repositories": [
        { "type": "path", "url": "vendor-src/panelkit-panel", "options": { "symlink": false } }
    ]
}
```

```bash
composer require panelkit/panel:@dev
php artisan | grep panel:
```

You should see `panel:install`, `panel:doctor`, `panel:update` and the
generators. An empty list means discovery did not run — `php artisan
package:discover` and read the error.

**`"symlink": false` matters.** With a symlink, an artisan command that writes
into the package writes into your source tree. Copying keeps `vendor/`
disposable, which is what `vendor/` is for.

---

## 3. The client half — one line, from what Composer just installed

```bash
npm install ./vendor/panelkit/panel/client/panelkit-client.tgz @vitejs/plugin-vue
```

This is the step that used to strand people, which is why it now comes out of
the package you already have rather than a registry. Check it landed:

```bash
ls node_modules/@alxtexh-enterprise/panel/inertia/pages/ | head
```

Screens should be listed.

---

## 4. Install, migrate, build

**`--auth` writes the sign-in screen and its routes.** Leave it off only if the
application already has a `login` route of its own. Without either, the panel
redirects guests to a route that does not exist and **every URL returns 500** -
`panel:doctor` in step 4 fails loudly if that happens.

```bash
php artisan panel:install --auth

php artisan migrate --pretend    # READ THIS FIRST
php artisan migrate

npm run build
php artisan panel:doctor
```

`migrate --pretend` prints the SQL without running it. On a billing schema,
read it before you run it. `panel:update` deliberately never migrates for you.

**`panel:doctor` exits non-zero when something is wrong and names it.** As of
0.9.2 it fails if the client half is missing *or is a different version from
the PHP* — the two states that used to produce a blank panel, or a screen with
a missing control, in complete silence.

Then sign in:

```bash
php artisan panel:make-user
```

---

## If the panel renders with no styling

The most common failure, and it produces **no error** — the build succeeds, the
markup is right, and the page has no layout, colour or spacing.

Tailwind does not scan `node_modules`. Both of these must be in
`resources/css/app.css`:

```css
@source '../../node_modules/@alxtexh-enterprise/panel/dist/**/*.js';
@source '../../node_modules/@alxtexh-enterprise/panel/inertia/**/*.{vue,ts}';
```

**Both.** One package, two paths, because its halves ship differently: `dist`
is compiled, so its class names are string literals in built render functions,
while `inertia` ships raw source so you can override a screen. Scan one and the
other's utilities are purged.

`php artisan panel:install` writes them, and `panel:update` repoints them from
older package names.

---

## Upgrading later, still offline

Copy the new bundle across, then:

```bash
rm -rf vendor-src/panelkit-panel
tar xzf panelkit-panel-<new>.tar.gz -C vendor-src
composer update panelkit/panel
npm install ./vendor/panelkit/panel/client/panelkit-client.tgz
php artisan panel:update
php artisan wayfinder:generate --with-form
npm run build
php artisan panel:doctor
```

**The npm line never changes between versions** — the filename is deliberately
stable and the version lives inside the archive. So this sequence is correct
for every future release, and there is no version number to keep in step by
hand.

`panel:update` writes page files for screens the new version routes that your
app has no file for — the white-page failure it exists to prevent — refreshes
`AGENTS.md`, repoints the stylesheet, and **reports** pending migrations
without running them.

---

## When staging can reach GitHub

Replace the path repository with the private VCS one and drop `vendor-src/`:

```bash
composer config repositories.panelkit '{"type":"vcs","url":"https://github.com/enterprisealxtexh/panelkit-panel.git","no-api":true}'
composer config preferred-install.panelkit/panel source
composer require panelkit/panel:^__VERSION__
npm install ./vendor/panelkit/panel/client/panelkit-client.tgz
```

**`preferred-install: source` is the line that makes this work, and it was
found by trying it rather than by reasoning about it.** `"no-api": true` alone
is not enough: Composer still resolves the version over git and then reaches
for the API zipball, which 404s on a private repository without a Composer
token —

```
Failed to download panelkit/panel from dist: ... api.github.com ... 404
Source fallback is disabled. Not trying alternative sources.
```

With `source`, Composer clones over git instead and uses whatever git
credentials the machine already has, so no `auth.json` and no second token are
needed. The alternative, if you would rather Composer authenticate itself:

```bash
composer config --global --auth github-oauth.github.com YOUR_TOKEN
```

A classic PAT with `repo`, or a fine-grained one with **Contents: Read** on
that repository.

**The npm line is identical.** The client comes out of the Composer package
either way, so nothing about the client half changes when you move from offline
to online — only where Composer fetches from.

---

## Version

PanelKit **__VERSION__**. Composer `panelkit/panel`; the client inside it is
`@alxtexh-enterprise/panel` at the same version, and a test enforces that they
match. Pin `"panelkit/panel": "^__VERSION__"` — on a `0.x` package the minor is
the breaking position.

Verified before this bundle was cut: the full PHP suite, the JS suite, both
builds, both type checkers, Pint, ESLint, Prettier, and a scripted install into
a clean Laravel application that took both halves from this archive alone.
