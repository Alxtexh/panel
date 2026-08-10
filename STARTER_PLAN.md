# Plan: a starter that is not the demo

Written 2026-08-10, at the end of a long session. Everything below is either
verified in this repository or explicitly marked as an assumption to test.

**The goal, in one sentence:** somebody should be able to get the demo's
*design* — shell, sidebar, tables, charts, auth, settings — without inheriting
its *business* — `Client`, `Router`, `Plan`, five seeded ISP tenants.

---

## 0. Why the current answer is wrong

`apps/playground` is currently the thing you clone. That was my recommendation
and it under-weighted the cost: a new project starts by **deleting somebody
else's domain**. Filament never did this — it ships `filament/tables`,
`filament/forms`, `filament/support`, and the demo lives in documentation.

What we want is the same split: **the packages are the product, the playground
is the reference, and neither is the thing you clone.**

---

## 1. The insight that shrinks the job

**`panel:install` already exists.** Its description: *"Publish config, create
the app/Panel tree and the page files, and print next steps"*, and it accepts
`--auth`. That is `filament:install`.

So the starter may not need a hand-authored application skeleton at all:

```bash
laravel new myapp && cd myapp
composer require panelkit/panel
php artisan panel:install --auth
```

If that produces a working panel on a stock Laravel app, **that is the
starter**, and the work becomes *verifying and repairing `panel:install`*
rather than *authoring a second application*.

**Do phase 2 before deciding anything else.** The whole plan below branches on
its result.

---

## 2. Phase one — find out what `panel:install` actually does

**Nobody has run it on a stock app.** Every test of it in this repository runs
inside `apps/playground`, which already has the config, the layout, the
Tailwind `@source` lines and the guards. That is the same blind spot that hid
the `auth/Login` collision for a whole release: a generator tested only where
its output was already present.

```bash
laravel new starter-probe
cd starter-probe
composer config repositories.panel path ../Panel/packages/panel
composer require panelkit/panel:@dev
php artisan panel:install --auth
php artisan migrate
php artisan serve
```

**Then open it.** Not `artisan route:list` — the browser. Today's session found
four separate defects that every test passed through and only a URL revealed.

**Record what breaks.** Expected candidates, from defects already found here:

| Likely gap | Why it is likely |
|---|---|
| Tailwind does not scan `packages/ui` | The playground needs two explicit `@source` lines; a fresh app has neither, and the failure is silent, partial purging |
| No `panel/auth/*` page files | `PanelPages::SCREENS` lists them, but only `panel:install --js` writes them |
| `config/auth.php` guards absent | A second-guard portal needs a model, a migration and two config blocks — none generated |
| Tenancy migrations | `TenantScope` denies when no tenant resolves, so a panel without them shows empty lists and no error |
| Blade layout / `app.ts` resolver | Packaged pages resolve through `PANEL_PAGES`; a stock app's resolver knows nothing about it |
| Vite + Wayfinder | The build shells out to `php artisan wayfinder:generate` |

**Gate:** sign in, see a sidebar, open a resource list, save a record. If any
of those fails the starter does not exist yet, whatever the installer prints.

---

## 3. Phase two — repair the installer

Fix each gap **in `panel:install`**, not in a template. An installer that
produces a working panel is worth more than a repository somebody clones,
because it also upgrades: `composer update` improves an installed app, while a
cloned template is frozen at the moment it was copied.

**Rule for this phase, learned the hard way today:** every fix gets tested on a
*fresh* app, not on the one already repaired. `make:panel --auth` skipped
writing a file when one existed, reported the skip as harmless, and the portal
then rendered the host application's screen against packaged props. A generator
tested only against its own output cannot see that.

---

## 4. Phase three — decide the repository shape

Only once phase two passes.

**If `panel:install` works:** nothing more is needed. `apps/playground` stays as
the reference and is never cloned. Distribution is a Git URL in
`repositories` — no Packagist, no split, no committed `vendor/`.

**If it cannot be made to work** — for instance because a bare app genuinely
needs a curated `bootstrap/app.php` and layout — then author `apps/starter`:
the shell, auth, settings and an empty dashboard, with **no business models at
all**. It sits beside the playground and shares the packages.

**Reverse the `vendor/` decision either way.** It is already reverted in
`0420cf18`; the reasoning stands and is recorded in `.gitignore`.

---

## 5. What is already settled, so nobody redoes it

- **`public/build/` is committed, `vendor/` is not.** Measured, not argued:
  cloning with `vendor/` fails on Windows at `MAX_PATH` and aborts partway,
  leaving a tree that reads as a corrupt repository.
- **`vendor/panelkit` is ignored.** It is a Windows junction; git follows it and
  commits 341 duplicate files, which shadows `packages/panel` in every clone.
- **`primitives/` is lowercase.** `Primitives/` and `primitives/` were both
  tracked; on Linux that is two directories and half the imports resolve to a
  stale copy.
- **A Composer GitHub token is required**, for rate limits rather than access.
  A no-scope token is enough. This is in the README.

---

## 6. Open questions that need a decision, not code

1. **What counts as "core app" versus "demo data"?** `User` and `Tenant` are
   arguably core; `Client`, `Router` and `Plan` clearly are not. Tickets and
   announcements are genuinely ambiguous — they are packaged features with
   packaged models, so they may belong in every install.
2. **Does the starter ship a resource at all?** One worked example teaches the
   pattern; an empty `app/Panel/Resources` teaches nothing. A single
   `ExampleResource` against a `posts` table may be the honest middle.
3. **Packagist eventually, or Git URLs forever?** Git URLs work today and need
   no release process. Packagist needs the split, tags and a pipeline — worth
   it only when outside users want `composer require` without a `repositories`
   block.

---

## 7. How each phase is proved

Unchanged from `IMPROVEMENT_PLAN.md` §6, plus one addition that today's
session earned:

1. **Tests.** 2,213 green right now.
2. **`panel:doctor` clean** on the fresh app, not just on the playground.
3. **Build gate.** `npm run build`, `vue-tsc --noEmit`, `pint`, `phpstan`
   (baselined: 214 app, 368 package).
4. **A CLONE TEST, ON EVERY DISTRIBUTION CHANGE.** `git clone` into a temp
   directory and open the result. It found the case collision, the junction
   duplication and the `MAX_PATH` failure — none of which any test caught,
   because all three are properties of the *checkout* rather than the code.
