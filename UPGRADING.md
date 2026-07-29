# Upgrading PanelKit

## What a version number means here

PanelKit is `0.x`. Under semver that means **the minor is the breaking position**:
`0.1.0 → 0.2.0` may break you, `0.1.0 → 0.1.1` may not. There is no `1.0` yet and
no date attached to one — it will arrive when the resource API has gone a couple
of minors without a breaking change, not because a milestone said so.

Constrain accordingly:

```json
"panelkit/panel": "^0.1.0"
```

Composer reads `^0.1.0` on a `0.x` package as `>=0.1.0 <0.2.0`, which is what you
want: patches arrive, a breaking minor does not.

The three packages are **versioned together**. `panelkit/panel@0.2.0` expects
`@panelkit/ui@0.2.x` and `@panelkit/inertia@0.2.x`, and the PHP half's schema
payload is the contract between them. Mixing majors is not tested and the
failure is a rendered screen with a missing control, not an error.

## What counts as breaking

**Breaking** — allowed in a minor, called out in the changelog:

- a `Resource` method changing signature or disappearing
- a schema key changing shape (the JSON the PHP half sends the Vue half)
- a config key moving or changing default
- a published migration changing (you will need a new one; we do not edit shipped migrations)
- a Vue component's props changing, if it is exported from `@panelkit/ui`

**Not breaking** — expect these in a patch:

- new field types, column types, or actions
- new optional arguments with defaults
- anything under `PanelKit\Panel\Support\` or `Internal\` — these have no
  stability promise and are not part of the public surface
- changes to the playground app, which is a reference, not a package

## Upgrading a panel

```bash
composer update panelkit/panel
npm update @panelkit/ui @panelkit/inertia
```

Then, in order:

```bash
php artisan panel:cache-clear     # the schema cache is keyed by a fingerprint,
                                  # but the fingerprint does not know the
                                  # package changed under it
php artisan migrate               # if the release published new migrations
php artisan wayfinder:generate --with-form
npm run build
php artisan panel:doctor          # the actual check that the upgrade landed
```

**`panel:doctor` is the verification step, not a formality.** It walks the
registered resources, the policies, the indexes, the queue and the schema cache,
and reports what is silently wrong. An upgrade that leaves a resource without a
policy or a filter without an index produces a working panel that is slow or
over-permissive — exactly the class of failure that does not announce itself.

If you have published views or overridden a packaged component, re-diff them:

```bash
php artisan vendor:publish --tag=panel-config --force   # writes over your config; diff first
```

## Version-specific notes

Nothing here yet — `0.1.0` is the first tagged release. Each subsequent version
that requires action gets a section, newest first, naming the change, what
breaks, and the edit.

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
