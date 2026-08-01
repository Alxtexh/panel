<!-- panelkit:blueprint:start -->

# Building in this panel

This application uses PanelKit: administration screens are declared as PHP
classes and rendered by Inertia and Vue. `PanelKit` is the application; the
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

### Group several resources under one sidebar entry

Write a `Cluster` class and point each member's `$cluster` at it. The
sidebar shows the cluster's label once; the members become a shared
sub-navigation on every screen inside, permission-filtered per person.
Use a cluster for facets of ONE subject; keep an ordinary `$group` for
peers someone jumps between from anywhere.

```php
final class NetworkCluster extends Cluster
{
    protected static string $icon = 'router';
}

// on each member resource:
protected static ?string $cluster = NetworkCluster::class;
```

### Add a one-record settings screen

A `SingularResource` is a form and two functions - no list, no create,
no hand-written controller. Declare the form exactly as a resource
does, say where the one record's values come from and go to, list the
class in `config('panel.singulars')`, and the screen mounts at
`/{key}` with `PUT /{key}/current` as its save. Gate it with a
panel-level ability from `config('panel.abilities')`.

```php
final class BillingSettingsResource extends SingularResource
{
    public static function form(Form $form): Form { /* fields */ }
    public static function values(): array { /* current state */ }
    public static function save(array $validated): void { /* persist */ }
    public static function ability(): ?string { return 'manage_billing'; }
}
```

### Nest a resource under another

Declare `$parent` and the resource answers ONLY at
`/clients/{id}/sessions` - the flat URL does not route, because the
parent segment is the authorisation context: every request resolves
the parent through its own tenant-scoped model, checks `view` on it,
constrains the list to its rows, and stamps the foreign key on create
from the URL, never from the form body. Use it when the child only
makes sense inside one parent record; a relation manager remains the
right tool for a glance on the parent's own page.

```php
final class ClientSessionResource extends Resource
{
    protected static string $model = ClientSession::class;
    protected static ?string $parent = ClientResource::class;
    // foreign key defaults to client_id; override with $parentColumn
}
```

### Add markup to a screen you do not own

A plugin can put a component at a NAMED position on an existing
screen, instead of forking it. Positions come from `RenderHooks`; a
typo is refused at registration rather than rendering nowhere. Scope
it to resource keys, or leave it null for every screen.

```php
$context->render(
    RenderHooks::LIST_BEFORE_TABLE,
    'TrialNotice',                 // resolved by the APP's registry
    ['daysLeft' => 3],
    ['clients'],                   // this resource only
);
```

The application decides what that name resolves to
(`registerRenderHookComponent`), because a component name straight
from the server would let a plugin mount anything in the bundle.

### Add a portal

```bash
php artisan make:panel reseller --path=reseller
```

A provider, a resource directory and the routes. Use `--central` only for a
portal that must see every organisation at once; it turns tenant scoping off.

### Choose the right text field

- `TextareaField` — plain text, no formatting.
- `MarkdownField` — prose whose SOURCE you want stored: diffable in an
  audit entry, readable in a database client, renderable to email, PDF
  or plain text later.
- `RichEditorField` — prose stored as sanitised HTML, when the stored
  value IS the rendering.
- `CodeField` — config and snippets: monospace, Tab indents, line
  numbers, and `->language('json')` adds a server-side `json` rule.
- `BuilderField` — blocks of DIFFERENT shapes in a chosen order
  (heading, paragraph, image). A `RepeaterField` is many rows of ONE
  shape; reach for the builder only when the shapes genuinely differ.

A builder drops any block type or inner field it did not declare, on
the way to storage - the same allow-list posture as `Form::sanitize()`.

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

## What you can build with

Every name below is a real class in the installed package. If something
you want is not here it does not exist - do not invent a field type, and do
not hand-roll one in Vue. Ask for it, or compose what is here.

EXISTING AND BEING MOUNTABLE ARE DIFFERENT CLAIMS, so each group says how it
is used. Read that line before planning around anything below.

**Form fields** (23): `BuilderField` `CheckboxListField` `CodeField` `ColourField` `DateField` `Field` `FileUploadField` `HasChoices` `KeyValueField` `MarkdownField` `MultiSelectField` `NumberField` `PasswordField` `RadioField` `RepeaterField` `RichEditorField` `SelectField` `SliderField` `TagsField` `TextField` `TextareaField` `ToggleField` `VisualSelectField`
_How to use them: name them in `form()`._
**Table columns** (11): `BadgeColumn` `CheckboxColumn` `ColourColumn` `Column` `DateColumn` `EditableColumn` `IconColumn` `ImageColumn` `SelectColumn` `TextColumn` `ToggleColumn`
_How to use them: name them in `table()`._
**Table filters** (7): `BooleanFilter` `DateRangeFilter` `Filter` `HasOptions` `MultiSelectFilter` `SelectFilter` `TrashedFilter`
_How to use them: name them in `table()`._
**Actions** (7): `ActionGroup` `BulkAction` `BulkRunner` `ExportedFile` `JobStatus` `RecordAction` `ReplicateAction`
_How to use them: name them in `table()` or the resource's actions._
**Schema (form layout)** (8): `Component` `Grid` `Renderable` `Section` `Step` `Tab` `Tabs` `Wizard`
_How to use them: wrap fields with them inside `form()`._
**Dashboard widgets** (9): `Bucket` `ChartWidget` `DashboardFilters` `Period` `Rollup` `StatWidget` `TimeSeries` `Trend` `Window`
_How to use them: **these have no host in the package.** They shape data correctly and nothing renders them - PanelKit routes no dashboard and has no mechanism for a non-resource page, so the route, the controller, the Vue page and the permission wiring are all yours. The reference app spends around 1,500 lines on exactly that. Do not plan a dashboard as a port of screens; it is package work first._

Abstract bases and traits appear in those lists - `Field`, `Column`,
`HasChoices` - because they are what you extend when a genuinely new one is
needed. Everything else is `::make()` and chained.

## The assistant, if you extend it

The assistant is `laravel/ai` behind three hard rules. Break any of
them and you have built a data leak that answers politely:

1. **Every tool that touches records extends `PanelTool` and calls
   `$this->authorise(action, resourceKey, $record)` first.** That is
   the SAME `Resource::can()` gate the buttons use - not a similar
   one, and never a prompt instruction. A tool refuses with a
   returned sentence, not an exception.
2. **Anything destructive declares `isDestructive(): true`** and
   pauses for human approval before running.
3. **Retrieval is tenant-scoped by construction.** `KnowledgeBase`
   refuses to search without a tenant; a new `KnowledgeSource` that
   indexes RECORDS (not public help text) must also gate retrieval
   per-asker with `authorise()`, because then it answers questions
   the screen would refuse.

Credentials are BYOK: `AiCredentials` (panel settings, encrypted)
layered over `.env`. Never read or log the key; `apply()` at the
entry point is all any caller needs. With no key at all the
assistant degrades to a setup sentence - keep it that way.

What the assistant may do is documented for operators in the help
centre (`assistant-charter`); if you add a capability, update that
article in the same change so the assistant keeps citing the truth
about itself.

## Resources in this installation

| Key | Class | Panel |
| --- | --- | --- |
| `announcements` | `AnnouncementResource` | `admin` |
| `tickets` | `TicketResource` | `admin` |
| `activities` | `ActivityResource` | `admin` |
| `clients` | `ClientResource` | `admin` |
| `sessions` | `ClientSessionResource` | `admin` |
| `editable-plans` | `EditablePlanResource` | `admin` |
| `plans` | `PlanResource` | `admin` |
| `routers` | `RouterResource` | `admin` |
| `users` | `UserResource` | `admin` |
| `tenants` | `TenantResource` | `platform` |
| `reseller-plans` | `PlanResource` | `reseller` |
| `my-tickets` | `MyTicketResource` | `reseller` |

Ability names are derived from the key: `view_any_clients`, `update_clients`,
`restore_clients`, `force_delete_clients`.

## What operators configure

These are edited in the panel, not in code. An agent asked to add or
change one needs the vocabulary below - the variables are the part that
fails silently, because an unrecognised token is printed as written
rather than blanked.

### Document templates

| Kind | Label | Variables a template may use |
| --- | --- | --- |
| `invoice` | Invoice | `@number`, `@customer`, `@due`, `@total` |
| `receipt` | Receipt | `@number`, `@customer`, `@paid`, `@total`, `@method` |
| `voucher` | Voucher | `@code`, `@value`, `@expires`, `@duration` |

A template is a row in `panel_document_templates` scoped to one tenant, edited
through the designer. Register a NEW kind by extending `DocumentKind` and
adding it to `DocumentKinds` from a service provider - registering under an
existing id REPLACES it, which is how an application teaches the package's
invoice about its own subscribers.

`panel:doctor` reports a template using a variable its kind does not declare,
and one whose accent colour fails contrast against white.

### Announcement and report copy

| Token | Means |
| --- | --- |
| `@user` | The reader's name |
| `@organisation` | The organisation this announcement was written for |

One declaration feeds three things: the chip strip in the composer, the
substitution at delivery, and `panel:doctor`'s check. Adding a token means
adding it to `Announcement::variables()` - anywhere else and two of the three
will not know about it.

### When the panel interrupts somebody

| Rule | Where | Currently |
| --- | --- | --- |
| Which ticket priorities page the desk | `panel.ticketing.alert_priorities` | `urgent` |
| How many tickets one person may open | `panel.ticketing.max_per_hour` / `max_per_day` | 10 an hour, 30 a day |
| Monitoring thresholds | Monitoring settings, per tenant | edited in the panel |
| Backup staleness | `BackupStatus`, 26 hours | fixed |
| Doctor's daily report | `panel:doctor-alert`, scheduled | changes only |

EVERY ONE OF THESE IS SET NARROWLY ON PURPOSE. A channel people mute is
worse than no channel - it keeps working and nobody reads it. Widen a
threshold deliberately; do not add a second channel because the first was
too quiet.

## Commands

- `php artisan make:panel-page` — Create a panel page (a screen that is not a resource)
- `php artisan make:panel-resource` — Create a panel resource
- `php artisan make:panel` — Create a panel: a provider, a resource directory, and its routes
- `php artisan panel:api-token` — Issue an API token for the public API
- `php artisan panel:benchmark` — Time the panel's list surfaces, warm, and report medians
- `php artisan panel:blueprint` — Write the panel conventions an AI agent should follow into the project
- `php artisan panel:cache-clear` — Invalidate every cached panel schema
- `php artisan panel:doctor-alert` — Run panel:doctor and announce changes through Telegram
- `php artisan panel:doctor` — Check for configuration that is silently wrong
- `php artisan panel:install` — Publish config, create the app/Panel tree and the page files, and print next steps
- `php artisan panel:journey` — Time a full signed-in journey through the panel over real HTTP
- `php artisan panel:knowledge` — Index panel content so the assistant can cite it instead of guessing
- `php artisan panel:monitor-sample` — Record one monitoring sample and alert on any crossed threshold
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
- `php artisan panel:update` — Reconcile page files, config and the agent guide after upgrading the package

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
