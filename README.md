# Alxtexhpanel

A schema-driven admin panel for Laravel. Filament's developer experience, an SPA's
transport.

You describe a resource in one PHP class. The panel sends that description to the
browser **once**, and every interaction afterwards moves data only — no server-rendered
component tree per click.

```bash
composer require alxtexh-enterprise/panel
npm install @alxtexh-enterprise/panel
php artisan panel:install
```

This package answers the requests; `@alxtexh-enterprise/panel` holds the screens it renders.
Installing one without the other gives you routes that resolve to nothing.

---

## The shortest useful thing

One file. No Vue.

```php
namespace App\Panel\Resources;

use App\Models\Client;
use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;

final class ClientResource extends Resource
{
    protected static string $model = Client::class;

    public static function table(Table $table): Table
    {
        return $table->columns([
            TextColumn::make('name')->sortable()->searchable(),
            TextColumn::make('phone')->copyable(),
        ]);
    }
}
```

That is a working list at `/clients` — sortable, searchable, paginated, tenant-scoped,
and fast on a table with a million rows in it.

**It will refuse to show anything until a policy exists.** That is deliberate; see
[Authorisation](#authorisation).

---

## Why the list stays fast

Three decisions, all of which stop mattering only when the table is small.

**Keyset pagination, not `OFFSET`.** `OFFSET 100000` makes the database walk 100,000
rows it then discards, so page 2,000 is slower than page 2. The panel seeks instead,
which is why the first page costs the same on 250,000 rows as on 200:

| Rows | First page |
|---|---|
| 250,000 | 0.44 ms |
| 25,000 | 0.45 ms |
| 2,500 | 0.47 ms |
| 200 | 0.48 ms |

**The count is deferred.** `COUNT(*)` over 250,000 rows takes ~17 ms, and nobody should
wait for a number they are not reading yet. Rows arrive first; the total follows.

**Joins are declared, so the query count is constant.** A related column comes from a
`->query()` join rather than a per-row lookup, which is the difference between one query
and twenty-six.

```php
$table
    ->query(fn ($q) => $q->leftJoin('plans', 'plans.id', '=', 'clients.plan_id'))
    ->columns([
        TextColumn::make('plan_name')->from('plans.name'),
    ])
    ->keyColumn('clients.id')   // qualified — see below
    ->alsoSelect(['clients.id']);
```

> **If your table joins, qualify the key column.** The keyset tiebreaker appears in every
> `ORDER BY`, so an unqualified `id` becomes ambiguous the moment a second table has one.

---

## Forms

```php
public static function form(Form $form): Form
{
    return $form->schema([
        TextField::make('name')->required(),
        SelectField::make('plan_id')->options(fn () => Plan::pluck('name', 'id')->all()),
        PasswordField::make('password')->help('Leave blank to keep the current one.'),
    ]);
}
```

The form schema is **the whitelist**. Only declared keys reach the model, so mass
assignment is bounded by what you wrote rather than by `$fillable`.

`PasswordField` shows the one non-obvious hook: a field can decline to be written at all.
Blank means *unchanged*, which is different from writing `null` — one keeps the stored
value, the other destroys it. Implement `omitsFromStorage()` for any field with that
shape.

---

## Authorisation

Two independent gates, and both must pass.

**Tenancy** asks *is this yours*. **Permission** asks *may you do this to it*. Neither
implies the other: full permissions still cannot reach another organisation's record, and
being in the right organisation still cannot delete without `delete_*`.

```bash
php artisan panel:permissions list   # every ability, derived from your resources
php artisan panel:permissions sync   # reconcile roles; --prune removes dead names
```

Ability names are **derived** from the registry (`view_any_clients`,
`force_delete_clients`), never stored. A `permissions` table would be a second copy of the
registry that can disagree with it — and it disagrees in the dangerous direction: a
renamed resource leaves stale names in a role that looks fully populated and grants
nothing.

### What ships, and what you bring

The roles themselves **come with the package**. It depends on
`spatie/laravel-permission`, ships the migration, the `Role` model and the one column
Spatie has no equivalent for:

`grants_all` marks a role that holds every ability **including ones invented later**.
Inferring that from "currently holds all of them" would make a role become a superuser the
moment somebody ticked the last box; storing it means `panel:permissions sync` tops such a
role up, so registering a resource cannot lock its own administrators out of it.

The migration **creates nothing that already exists**. An application already using
Spatie keeps its tables and gains only the `grants_all` column, so adopting Alxtexhpanel does
not disturb a permission system that predates it.

You still bring the **policies** — a resource with no policy is denied entirely (below) —
and, if you are multi-tenant, `permission.teams`:

```php
// config/permission.php
'teams' => true,
'column_names' => ['team_foreign_key' => 'tenant_id'],
```

Spatie defaults `teams` to **false**, and that default fails open here: roles carry a
tenant, the panel sets a team id on every request, and the permission package ignores
both — so one role grants across every organisation at once, with no error and nothing in
a log. `panel:doctor` reports it as a problem.

**A resource with no policy is denied entirely.** Forgetting to write one locks the
resource down rather than opening it up. `panel:doctor` tells you which are missing.

---

## Tenancy

Three modes, and the third is what real installations become.

| Mode | Isolation |
|---|---|
| `column` | One database, a `tenant_id` column, a global scope |
| `database` | A database per tenant, isolated by connection |
| `hybrid` | Per tenant — most share, the large ones do not |

Hybrid needs Alxtexhpanel's `ConditionalDatabaseBootstrapper`, because stancl's own switches
the connection for **every** tenant unconditionally and throws on the first shared one.

> **Moving a tenant to a dedicated database makes them slower until you reindex.** Every
> index in a column-scoped schema leads with `tenant_id`, and the panel correctly drops
> that predicate in database mode — so no index can serve an `ORDER BY` and every page
> becomes a full scan. Measured at 20–60× on identical data. Run
> `php artisan panel:reindex-tenant` inside the tenant, and `panel:doctor` will tell you
> if you forgot.

---

## Commands

| Command | What it is for |
|---|---|
| `panel:install` | Publish config, wire the provider |
| `make:panel` | Generate a second portal (`--new-guard` gives it its own sign-in) |
| `make:panel-resource` | Generate a resource (`--generate` infers from the table) |
| `panel:permissions` | List or reconcile abilities and roles |
| `panel:doctor` | **Find configuration that is silently wrong** |
| `panel:benchmark` | Time every list surface, warm, as a median |
| `panel:reindex-tenant` | Fix index shape inside a dedicated database |

A portal with its own guard needs that guard to exist in `config/auth.php`, and
`make:panel` will not invent one for you silently:

```bash
php artisan make:panel reseller --guard=resellers --new-guard
```

Without `--new-guard`, naming a guard that is not defined is a **warning, not a
failure** — the portal generates and then answers its first request with
`Auth guard [resellers] is not defined.` Sessions are keyed per guard, so this is
what makes a second portal a separate place to sign in rather than the same one
with a different menu.

`panel:doctor` is the one to run first on a new installation. Every check in it exists
because the failure is **silent** — a working panel serving wrong or unprotected data,
where every page returns 200 and every test passes. For example: with
`BROADCAST_CONNECTION=log`, channel authorisation never runs at all and every channel
authorises, including for guests.

---

## Measuring

Do not trust a single reading. This project has published a 2× regression that did not
exist, from one measurement taken on a busy machine.

```bash
php artisan panel:benchmark --tenant=acme --runs=3 --json
```

The **negative journey** is the one worth running. It signs in as somebody from another
organisation and walks the same pages against your host; every hop must fail. A positive
journey passes just as happily with no isolation at all — a negative journey that passes
is a finding.

---

## What ships to the browser

One package, two entry points, split along one line: whether the code knows how
the data arrived.

`@alxtexh-enterprise/panel` is the rendering layer, and it imports no HTTP client and no
Inertia. Data fetching belongs to the caller; the package renders what it is handed.
That is what lets the same table and form work under Inertia, a fetch-based page, or
a test harness with no router at all. It ships compiled, because a Vue SFC cannot
resolve a type imported into `defineProps` across a package boundary.

`@alxtexh-enterprise/panel/inertia` is the screens this package renders, and they are Inertia
to their bones — `useForm`, `Link`, partial reloads by prop name. They name no
layout: the shell stays the application's. They ship as source, so you can read the
screen you are about to override.

```bash
npm install @alxtexh-enterprise/panel
```

`panel:install` then writes one page file per screen into `resources/js/pages`,
because Inertia resolves page names by globbing that directory and cannot see into
`node_modules`. Each file is one line, and each is where you override that screen.

---

## Requirements

PHP 8.4, Laravel 12 or 13, Inertia 2 or 3, Vue 3.5.

Multi-database tenancy additionally needs `stancl/tenancy` ^3.10.
