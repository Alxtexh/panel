# Plan: a starter that is not the demo

> **SUPERSEDED — DO NOT BUILD FROM THIS DOCUMENT.**
>
> This plan argues the packages are the product and nothing is cloned (§0, §3).
> `README.md` — the repository's front door — says the opposite, and the README
> is the direction that holds:
>
> > A Laravel + Inertia + Vue dashboard, meant to be **copied as the starting
> > point for a new dashboard** rather than installed as a dependency. The demo
> > application in `apps/playground` is the reference: its shell, sidebar,
> > tables, charts and forms are the design. **A new dashboard starts from that
> > and replaces the data.**
>
> A session followed this file instead of the README and spent itself on
> Composer/npm distribution, `panel:install`, and making screens opt-in by
> default (§6.1 "Ship the migrations. Register no plugins.", §6.2 "No shipped
> resource."). The result was a bare installed shell — one sidebar entry and an
> empty dashboard — sitting beside a demo that already looked right. That work
> is reverted; the gating it introduced is undone.
>
> **The playground is the product.** Ship its design; replace its data. Sections
> below are kept for the reasoning they record (the `vendor/` decision in §5 and
> the clone test in §7 are still correct and still apply), but the delivery model
> in §0, §3, §6.1 and §6.2 is wrong for this repository.

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
composer require alxtexh-enterprise/panel
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
composer require alxtexh-enterprise/panel:@dev
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
- **`vendor/alxtexhpanel` is ignored.** It is a Windows junction; git follows it and
  commits 341 duplicate files, which shadows `packages/panel` in every clone.
- **`primitives/` is lowercase.** `Primitives/` and `primitives/` were both
  tracked; on Linux that is two directories and half the imports resolve to a
  stale copy.
- **A Composer GitHub token is required**, for rate limits rather than access.
  A no-scope token is enough. This is in the README.

---

## 6. The three decisions, and what they are

Two of these are settled by reasoning and are decided below. The third waits
for phase one, because if `panel:install` cannot boot a stock app then the
question is moot.

### 6.1 Core versus demo — DECIDED

**The line is "does the panel break without it", not "does it feel generic".**

| Ships | Why |
|---|---|
| `User`, `Tenant`, Spatie permission tables | Not preference. `TenantScope` DENIES when no tenant resolves, and the panel denies by default - so a starter without these shows a working sign-in and empty everything. That is exactly the failure a `migrate:fresh` produced in the previous session: correct code, blank panel, reads as broken. |

| Does not ship |
|---|
| `Client`, `Router`, `Plan`, `ClientSession`, the reference seeder, the five ISP tenants |

**THE AMBIGUOUS ONES ANSWER THEMSELVES.** `AnnouncementsPlugin` and
`TicketingPlugin` are already PLUGINS in the playground's config - packaged
features with packaged migrations and an existing opt-in mechanism. So:

> **Ship the migrations. Register no plugins.**

`ContentEntry`, `ApiToken`, `ScheduledReport`, `DocumentTemplate` and `Seo` go
the same way: tables present, nothing mounted.

Same rule `make:panel` now follows, for the same reason: **opting in is a
decision somebody made; opting out is a decision nobody knew they had to make.**
The customer portal shipping backups and logs is what that rule was written
from.

### 6.2 Does the starter ship a resource — DECIDED, pending 6.4

**No shipped resource. Ship the command instead.**

An `ExampleResource` against a `posts` table that does not exist is a broken
screen on first boot; against a table the starter invents, it is demo data
under another name - the exact thing this plan removes.

The better teaching tool already exists:

```bash
php artisan make:panel-resource Post --generate
```

It INTROSPECTS THE REAL TABLE and writes a working resource plus a policy stub.
Somebody reading a generated resource against their OWN data learns more than
reading a stranger's against `posts`.

So `panel:install` ends by printing that command, named for a model the
application actually has. `panel:blueprint` already covers the conventions.
**The empty directory is not the teaching surface - the installer's last line
is.**

### 6.3 Git URLs or Packagist — DECIDED

**Git URLs now. Packagist when somebody who is not you asks for it.**

But add the missing piece either way: **tags.**

```bash
git tag v0.9.7 && git push --tags
```

Everything is `@dev` today, which means every consumer's `composer update`
silently moves them to the latest commit - including a broken one. A tag lets
them pin `"alxtexh-enterprise/panel": "^0.9"` through a `repositories` block, which is
versioning without a split.

Packagist costs nine-ish mirrored repos, a split script and a tag per release
per package. And unlike the Git-URL arrangement, **published versions are
permanent**: Packagist can be added later and cannot be cleanly unpublished.

### 6.4 Deferred to phase one

Whether 6.2 holds at all depends on the probe. If `panel:install` cannot
produce a bootable panel on a stock Laravel app, the starter is a different
artefact and this question is asked again about that artefact instead.

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
