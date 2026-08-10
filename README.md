# Dashboard starter

A Laravel + Inertia + Vue dashboard, meant to be **copied as the starting point
for a new dashboard** rather than installed as a dependency.

The demo application in `apps/playground` is the reference: its shell, sidebar,
tables, charts and forms are the design. A new dashboard starts from that and
replaces the data.

> **This paragraph is the direction, and it is settled.** `STARTER_PLAN.md`
> argues the opposite — that the packages are the product and nothing is
> cloned. It is superseded and marked as such. A session followed it instead of
> this file and spent itself building a delivery model nobody asked for, so if
> the two ever appear to disagree again: **this one wins.**

Add a screen by writing **one PHP class**. No Vue.

```php
final class ClientResource extends Resource
{
    protected static string $model = Client::class;

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable()->locked(),
                BadgeColumn::make('status')->colors(['active' => 'success', 'expired' => 'danger']),
                DateColumn::make('expiry_date')->label('Expires')->sortable(),
            ])
            ->filters([SelectFilter::make('status')->options(['active', 'expired'])])
            ->tabs('clients.status', ['active', 'expired', 'suspended']);
    }
}
```

That produces a list with search, filters, tabs with counts, sortable columns,
column visibility, row selection, keyset pagination, create/edit/delete and row
actions.

---

## Starting a new dashboard from this

This repository **is** the product. **`public/build/` is committed**, so a clone
needs no Node toolchain and no `npm run build` - which is the half that actually
costs a newcomer time. `vendor/` is not committed: cloning with it in the tree
fails on Windows, because `aws-sdk-php` and `phpunit` carry paths that blow the
260-character `MAX_PATH` and the clone aborts partway.

So one `composer install`, and nothing else:

```bash
git clone <this-repo> myapp && cd myapp/apps/playground
```

Composer needs a GitHub token to fetch dependencies — **once per machine, not
per project**:

```bash
composer config --global github-oauth.github.com <your-github-token>
```

> **This is about RATE LIMITS, not access.** Every dependency here is public;
> GitHub simply throttles unauthenticated API requests per IP, and Composer
> fetches dist archives through that API. So **a token with no scopes at all
> works** — create one at *Settings → Developer settings → Personal access
> tokens*, tick nothing, and paste it. Without it, `composer install` fails
> with `Could not authenticate against github.com`, which reads as a
> permissions problem and is not one.
>
> **Never commit a token.** It belongs in your global Composer config, which is
> outside the repository. A token in a file that gets pushed is a token that is
> public, and GitHub's secret scanning will revoke it - after everybody who
> cloned in the meantime already has it.

```bash
composer install
```
```bash
cp .env.example .env && php artisan key:generate
```
```bash
php artisan migrate --seed && php artisan panel:permissions sync
```

Then `php artisan serve` and `http://localhost:8000`.

**`panel:permissions sync` is not optional.** The panel denies by default, so an
installation with an empty permissions table shows a working sign-in and then an
empty sidebar, an empty account menu and no widgets - everything correct and
everything hidden. That reads as a broken install and is not one.

There is **no `composer require`** for the panel itself: the two packages are
consumed by local path (`../../packages/panel` and `file:../../packages/ui`), so
they resolve inside this tree and were never coming from a registry. Copying the
repo copies the framework.

**You only need Node for the toolchain below** - rebuilding assets, adding a
front-end dependency, running the UI tests. To run what is already here, you do
not.

---

## Running it for development

```bash
scripts/bootstrap-env.sh   # PHP 8.4, Composer, Node 22 - read it first
make install
make seed
make dev
```

Then `http://localhost:8000`. `make help` lists everything.

> **On Windows**: `php` on PATH is often an older build. The application needs
> PHP >= 8.4.1, and anything that shells out to `php` - including Vite's
> `wayfinder:generate` step - must find it. Put the 8.4 directory ahead of the
> others on PATH before starting Vite.

---

## Repository layout

```
packages/panel/    The PHP half: resources, pages, commands, widgets
packages/ui/       The Vue half: shell, tables, charts, form fields
apps/playground/   The demo application - the design reference and the starter
```

The split is a workspace, not a distribution: `apps/playground` consumes both
through a composer `path` repository and an npm `file:` dependency. Nothing is
published anywhere.

Two rules the UI package holds and a test enforces:

1. **Nothing in `packages/ui` imports Inertia.** Components take props and emit
   events; a thin adapter in the consuming app wires Inertia to them. Swapping
   the transport means rewriting one file.
2. **Components never fetch.** Only page-level components trigger data loads.

---

## The architecture, in one table

| Concern | Lives in | Travels | Frequency |
|---|---|---|---|
| **Schema** — which columns, filters, tabs, fields exist | PHP resource class | Once per session, cached | Rare |
| **Data** — the rows, filter options, counts | Eloquent query | Every filter, sort, page change | Often |
| **Rendering** | One generic Vue page | Never — it is in the bundle | Never |

The schema contains **no tenant data**. Filter and select options are tenant
data and ship beside the records, which is why the schema cache key needs no
tenant id: entries collapse from (tenants × resources) to
(permission sets × resources), and an entry holding no tenant data cannot leak
tenant data however badly its key is built.

---

## What it does that most admin panels do not

**Never blocks a list on `COUNT(*)`.** The total is a deferred prop that arrives
after the rows. This is the single largest source of slow admin tables.

**Keyset pagination.** `OFFSET 100000` makes the database walk 100,000 rows it
then discards, so page 2,000 gets steadily slower. A keyset seek uses the index,
so page 2,000 costs what page 1 costs. The trade is no jump-to-arbitrary-page.

**One query for N tabs.** Tab counts come from a single grouped aggregate, never
one `COUNT` per tab.

**Modals open with zero network requests.** Field definitions arrive with the
schema and option lists with the data, so opening a form or a confirmation is
local state.

**Denies by default.** A resource whose model has no policy denies every ability
and logs why. The usual default means forgetting a policy silently grants
everyone everything, and the page renders correctly for whoever forgot.

**Mass assignment closed by construction.** Only keys the form declares can be
written. A `$fillable` list can be forgotten when a column is added; a form that
does not mention a field cannot submit it.

**No CSS classes in PHP.** The schema carries semantic values — `type: 'badge'`,
`color: 'success'`, `muted: true` — and Vue owns presentation. A class string
authored in PHP is invisible to the CSS scanner and gets purged silently, and
*partially*, so one class of a pair survives and the element renders wrong at
some widths with no error anywhere.

---

## Commands

| Command | Does |
|---|---|
| `make:panel-resource {Model} --generate` | Introspects the table and writes a working resource plus a policy stub |
| `make:panel-page {Name} [--dashboard]` | A screen that is not a list of records; `--dashboard` hosts the widgets |
| `panel:doctor` | The checks whose failures are silent — a resource with no policy, a filter with no index, permissions that fail open |
| `panel:seed-demo --scale=large` | Demo data for the reference app |
| `panel:cache-clear` | Invalidates every cached schema by bumping a generation counter |

Adding a screen, end to end:

```bash
php artisan make:model Customer -m
php artisan migrate
php artisan make:panel-resource Customer --generate
```

Then visit `/customers`. Discovery registers the resource; there is no route to
add and no registration line to write.

---

## Keeping the design intact

`scripts/shots.sh` captures every screen at 1400 / 768 / 375 in light and dark,
driving Chrome directly. `scripts/shots-diff.mjs` compares two captures and
fails on anything differing by more than 0.1% of its pixels.

```bash
scripts/shots.sh .shots/current http://127.0.0.1:8000 1
node scripts/shots-diff.mjs .shots/playground .shots/current
```

It needs built assets: stop `npm run dev`, delete `public/hot`, `npm run build`.
Chrome is a Windows exe and Git Bash speaks POSIX, so every path handed to
Chrome goes through `winpath()` in that script.

`.shots/` holds the reference capture of the demo.

---

## Known gaps

Stated rather than implied:

- Live updates: the **poll** driver is the default and is exercised end to end —
  `LiveUpdatesTest` drives the real endpoint, including tenant isolation, the
  bounded id list, one query per poll and a guest refusal. What no test drives
  is a **socket**: `BroadcastChannelTest` proves who may subscribe to what, and
  then nothing connects, because nothing here runs Reverb (it is a `require-dev`
  dependency and `BROADCAST_CONNECTION=log`). So the broadcast driver's
  authorisation is tested and its transport is not.
- Precognition: rules live in exactly one place, but live per-keystroke
  validation is not wired, and the package is not installed. Still blocked, and
  checked rather than assumed: `laravel-precognition-vue-inertia@0.8.0` declares
  a peer of `@inertiajs/vue3: ^1.0.0 || ^2.0.0`, and this app is on `^3.0.0`.
- Bulk actions: the mutations ship — `BulkRunner` walks a selection in keyset
  chunks and every bulk mutation counts before it commits. There is **no
  automatic queue threshold**: a job that should run in the background is
  declared so, rather than crossing a row count and becoming asynchronous on its
  own.
- `panel:doctor` reports "nobody can open the panel" on a healthy install.
  Spatie teams are on, so a CLI run resolves no team and `whereHas('roles')`
  counts zero. The check that exists to catch silent failure currently cries
  wolf.
- The development database is SQLite, so every performance number here
  demonstrates that the query *shape* is sound rather than transferring to
  Postgres unchanged.
- SSR is **off** — `INERTIA_SSR_ENABLED` defaults to false. The starter kit
  ships it on with nothing serving it, so every request paid a failed connection
  to port 13714 before falling back. Turning it on is three commands, in
  `config/inertia.php`.
