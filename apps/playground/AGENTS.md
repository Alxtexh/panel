<!-- panelkit:blueprint:start -->

# Building in this panel

This application uses PanelKit: administration screens are declared as PHP
classes and rendered by Inertia and Vue. `Laravel` is the application; the
panel is the framework it is built with.

Read this before adding a screen. It describes the conventions that are not
visible in a single file, and the mistakes that return HTTP 200.

## Rules that fail silently

1. **Never write a controller for a resource screen.** Declare a `Resource`
   subclass. The panel generates the list, the record pages, the routes, the
   permissions and the navigation entry. A hand-written controller bypasses
   the tenant scope and the policy, and looks perfectly fine doing it.

2. **A resource with no policy is invisible to everybody.** That is the safe
   default, and it looks identical to a permissions bug. Register one:
   `Gate::policy(Model::class, ModelPolicy::class)`.

3. **Definitions must not query.** `table()` and `form()` build a cached
   description. A query inside one runs before anybody has asked for a row,
   for every user, and can be cached and served to the wrong tenant. Option
   lists that come from the database are closures.

4. **A null tenant is a deny, never "all tenants".** Every path fails closed.
   If you add a query that reaches around the model - raw SQL, a join, a
   `withoutGlobalScopes()` - you have taken responsibility for the predicate.

5. **Validate the members of a multi-value field, not just the array.**
   `['array']` accepts `['email', 'anything']`, because the array is an
   array. Fields that hold several values declare a `key.*` rule.

6. **Never use `window.confirm`.** It is suppressed in embedded browsers: it
   returns false without showing anything, so a destructive action silently
   does nothing for some people and everything for others. Use `PkModal`.

7. **Do not put a class name in a schema.** Columns, fields and actions emit
   semantic values - an icon NAME, a colour INTENT, a column count - and the
   client decides what those look like.

8. **Every screen needs a way in.** A page that is in no menu is
   indistinguishable from one nobody wrote. Resources place themselves;
   anything else goes in `App\Panel\Pages` or the coverage test fails.

## Where things live

Panels registered in this application:

- `admin` — mounted at `/`, guard `web`, tenant context
- `platform` — mounted at `/platform`, guard `web`, central context
- `reseller` — mounted at `/reseller`, guard `web`, tenant context

Resources are discovered from:

- `app/Panel/Resources` → `App\Panel\Resources`
- `app/Panel/Platform/Resources` → `App\Panel\Platform\Resources`
- `app/Panel/Reseller/Resources` → `App\Panel\Reseller\Resources`

A resource belongs to exactly one panel — its key is a URL segment and an
ability name, both globally unique. A second portal needing the same screen
gets a subclass with its own `key()`.

- Resources: `app/Panel/Resources`
- Policies: `app/Policies`, extending the tenant-aware base policy
- Non-resource pages: declared in `app/Panel/Pages`, rendered from `resources/js/pages`
- Panel providers: `app/Providers/Panels`

## Recipes

### Add a screen for a model

```bash
php artisan make:panel-resource Invoice --generate
```

Then: register a policy, check the columns it guessed, and add filters. The
route, the navigation entry and the abilities already exist. Nothing needs
adding to `routes/web.php`.

### Add a portal

```bash
php artisan make:panel reseller --path=reseller
```

A provider, a resource directory and the routes. Use `--central` only for a
portal that must see every organisation at once; it turns tenant scoping off.

### Add a field type

Subclass `Field`, return a new `type()`, add your keys to `toSchema()`, and
register a Vue control for that type with `registerFieldControl('your-type',
Control)`. An option-bearing field must also override `resolveOptions()`, or
it renders with nothing to choose and reports no error.

### Add a permission-gated action

```php
RecordAction::make('suspend')
    ->label('Suspend')->icon('ban')->ability('update')
    ->confirm('Suspend this subscriber? Their connection drops immediately.')
    ->run(fn (Client $client) => $client->update(['status' => 'suspended']));
```

The ability is checked against THAT record before the button renders and
again before it runs.

### Ship it as a package

Implement `PanelPlugin`, call `PanelManager::plugin(new YourPlugin)` from your
service provider, and register resources, pages and routes through the
`PluginContext`. A plugin can only add; it never receives the `Panel`.

## Resources in this installation

| Key | Class | Panel |
| --- | --- | --- |
| `announcements` | `AnnouncementResource` | `admin` |
| `activities` | `ActivityResource` | `admin` |
| `clients` | `ClientResource` | `admin` |
| `editable-plans` | `EditablePlanResource` | `admin` |
| `plans` | `PlanResource` | `admin` |
| `routers` | `RouterResource` | `admin` |
| `users` | `UserResource` | `admin` |
| `tenants` | `TenantResource` | `platform` |
| `reseller-plans` | `PlanResource` | `reseller` |

Ability names are derived from the key: `view_any_clients`, `update_clients`,
`restore_clients`, `force_delete_clients`.

## Commands

- `php artisan make:panel-resource` — Create a panel resource
- `php artisan make:panel` — Create a panel: a provider, a resource directory, and its routes
- `php artisan panel:api-token` — Issue an API token for the public API
- `php artisan panel:benchmark` — Time the panel's list surfaces, warm, and report medians
- `php artisan panel:blueprint` — Write the panel conventions an AI agent should follow into the project
- `php artisan panel:cache-clear` — Invalidate every cached panel schema
- `php artisan panel:doctor` — Check for configuration that is silently wrong
- `php artisan panel:install` — Publish config, create the app/Panel tree, and print next steps
- `php artisan panel:journey` — Time a full signed-in journey through the panel over real HTTP
- `php artisan panel:knowledge` — Index panel content so the assistant can cite it instead of guessing
- `php artisan panel:permissions` — Reconcile roles and permissions against the registered resources
- `php artisan panel:prune-exports` — Delete exports past their retention window, file and record together
- `php artisan panel:prune-trash` — Permanently delete records that have been in the trash past their retention window
- `php artisan panel:prune-uploads` — Delete pending uploads that were never saved to a record
- `php artisan panel:refresh-rollups` — Pre-aggregate dashboard time series
- `php artisan panel:reindex-tenant` — Add indexes suited to a dedicated tenant database, where the tenant column is redundant
- `php artisan panel:reports-due` — Dispatch any scheduled reports that are due
- `php artisan panel:seed-demo` — Seed realistic multi-tenant demo data at scale
- `php artisan panel:seed-reference` — Seed the five-tenant reference estate used by panel:benchmark
- `php artisan panel:tenant-suspension` — Suspend a tenant from the panel, or lift a suspension

## Before you call it done

```bash
php artisan panel:doctor        # configuration that is silently wrong
php artisan test                # the suite
npx vue-tsc --noEmit            # the client half
```

For a new resource, write these three assertions first — they are the
failures that return 200:

```php
use PanelKit\Panel\Testing\InteractsWithPanels;

$this->assertResourceRegistered('invoices');
$this->assertTenantIsolation($this->operator, 'invoices', $foreignRecord);
$this->assertResourceRefuses($this->stranger, 'invoices');
```

`assertTenantIsolation` checks the record URL as well as the list. The list
is the obvious half; the record URL is the half people forget, and the one
an attacker uses.

<!-- panelkit:blueprint:end -->
