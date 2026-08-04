# Porting a live system from Filament to PanelKit

**Audience: an AI agent, or a developer, moving a working Filament panel — an
ISP billing system — onto PanelKit without a rewrite and without downtime.**

Read [BUILDING_ON_PANELKIT.md](BUILDING_ON_PANELKIT.md) first for how the
framework is installed and what may be edited. This document is only about the
translation: what a Filament concept is called here, what it costs to move, and
the handful of things that have no equivalent and need a decision.

---

## The one structural difference

Filament renders on the server. Every interaction is a Livewire round-trip that
returns a component tree; a modal fetches its form when it opens; a table page
re-renders to change a filter.

PanelKit sends a **schema once** and moves only data afterwards. A resource
class is serialised to JSON on first load, and every click after that is an
Inertia visit carrying rows — not markup.

That is why it feels faster, and it is also the source of every difference
below. Anything in your Filament code that assumes "the server will re-render
this" needs re-expressing as "the client already has the schema".

**Practical consequence:** `->action(fn () => ...)` closures that build UI at
request time do not translate. Actions declare their form up front so the modal
opens with no request. See §4.

---

## 1. The migration order that works

Do **not** port resource-by-resource in whatever order they appear. Port in this
order, because each step de-risks the next:

1. **Stand PanelKit up beside Filament**, on a different path. `->path('panel')`
   while Filament keeps `/admin`. Both can run in one application; they share
   nothing but the database.
2. **Port one read-only resource end to end** — a list, a filter, a record page.
   Pick your simplest lookup table, not `Subscriber`. This proves the install,
   the policy shape and your build pipeline in an afternoon.
3. **Port the authorization model next**, before more resources. It is the thing
   most likely to differ silently (§5), and every later resource inherits it.
4. **Then the big tables**, largest first. `Subscriber` at real row counts is
   where PanelKit's pagination pays for itself, and where a wrong index shows up.
5. **Then writes** — forms, actions, bulk operations.
6. **Cut over one screen at a time** by changing a link. Keep Filament mounted
   until nothing points at it.

Keep both panels running until the last link moves. The database is shared, so a
subscriber edited in one is edited in the other.

---

## 2. Concept mapping

### Structure

| Filament | PanelKit | Notes |
| --- | --- | --- |
| `Filament\Resources\Resource` | `PanelKit\Panel\Resources\Resource` | One class, same idea |
| `getPages()` / page classes per resource | *(nothing)* | List, create, edit, view and trash are served from the schema. There is no page class per resource |
| `Filament\Pages\Page` | `PanelKit\Panel\Pages\Page` | `php artisan make:panel-page` |
| `PanelProvider` / `->panel()` | `PanelKit\Panel\Panel` + `make:panel` | Registration, guard, path, middleware |
| Cluster | Cluster | Same concept, `->cluster()` on the resource |
| `RelationManager` | `RelationManager` | `->relations()` on the resource |
| Plugin | Plugin | `panel.plugins` config array |
| Widget | `StatWidget` / `ChartWidget` on a `DashboardPage` | Declared by `stats()` and `charts()` |

### Form fields — 24 shipped

| Filament | PanelKit |
| --- | --- |
| `TextInput` | `TextField` |
| `Textarea` | `TextareaField` |
| `Select` | `SelectField` |
| `Select::multiple()` | `MultiSelectField` |
| `Checkbox` / `Toggle` | `ToggleField` |
| `CheckboxList` | `CheckboxListField` |
| `Radio` | `RadioField` |
| `DatePicker` / `DateTimePicker` | `DateField` |
| `FileUpload` | `FileUploadField` |
| `RichEditor` | `RichEditorField` |
| `MarkdownEditor` | `MarkdownField` |
| `KeyValue` | `KeyValueField` |
| `Repeater` | `RepeaterField` |
| `Builder` | `BuilderField` |
| `ColorPicker` | `ColourField` |
| `TagsInput` | `TagsField` |
| `Hidden` | omit it — see below |
| — | `NumberField`, `PasswordField`, `SliderField`, `CodeField`, `CountryField`, `VisualSelectField` |

**`Hidden` has no equivalent on purpose.** A hidden field is a value the client
posts and the server trusts. Set it server-side in the resource's mutation
instead — a field the browser never sees cannot be tampered with.

**`VisualSelect` and `Country` have no Filament equivalent.** The first renders
options as what they do rather than as words; the second ships 173 countries
with ISO or dialling codes, which every billing system otherwise hand-rolls.

### Table columns — 12 shipped

| Filament | PanelKit |
| --- | --- |
| `TextColumn` | `TextColumn` |
| `TextColumn::badge()` | `BadgeColumn` |
| `IconColumn` | `IconColumn` |
| `ImageColumn` | `ImageColumn` |
| `ColorColumn` | `ColourColumn` |
| `CheckboxColumn` | `CheckboxColumn` |
| `ToggleColumn` | `ToggleColumn` |
| `SelectColumn` | `SelectColumn` |
| `TextInputColumn` | `EditableColumn` |
| `TextColumn::money()` | `MoneyColumn` |

**`MoneyColumn` is worth reading before you port an invoice table.** It defaults
to **minor units** — an integer count of the smallest unit — because a float
drifts, and it formats in the *viewer's* locale rather than the server's. It
takes a fixed currency or reads each row's own.

### Filters

| Filament | PanelKit |
| --- | --- |
| `SelectFilter` | `SelectFilter` |
| `SelectFilter::multiple()` | `MultiSelectFilter` |
| `TernaryFilter` | `BooleanFilter` |
| `Filter` + date range | `DateRangeFilter` |
| `TrashedFilter` | `TrashedFilter` |
| `QueryBuilder` (visual) | **no equivalent** — see §6 |

### Actions

| Filament | PanelKit |
| --- | --- |
| `Action` (row) | `RecordAction` |
| `BulkAction` | `BulkAction` |
| `ActionGroup` | `ActionGroup` |
| `ReplicateAction` | `ReplicateAction` |
| `DeleteAction` / `EditAction` / `ViewAction` | built in — the resource routes them |
| `ExportAction` | filtered export, built in |
| The other ~20 Filament action classes | write a `RecordAction` — they are mostly presets |

### Layout

`Section`, `Grid`, `Tabs`, `Tab`, `Step`, `Wizard` — same names, same meaning.
Filament's other layout classes are mostly styling wrappers; PanelKit's schema
stays semantic and the styling lives in the components.

---

## 3. What you write instead of what

**A Filament resource:**

```php
public static function form(Form $form): Form {
    return $form->schema([ TextInput::make('name')->required() ]);
}
public static function table(Table $table): Table {
    return $table->columns([ TextColumn::make('name')->searchable() ]);
}
```

**The PanelKit equivalent:**

```php
public static function form(): Schema {
    return Schema::make([ TextField::make('name')->required() ]);
}
public static function table(): Table {
    return Table::make()->columns([ TextColumn::make('name')->searchable() ]);
}
```

Close enough that the port is mechanical. **Generate the skeleton rather than
hand-translating:**

```bash
php artisan make:panel-resource Subscriber --generate
```

That reads the table and writes columns, filters and fields from the real
schema, plus a commented `->recordActions([..])` block in the chain. Then paste
your Filament customisations over it. This is faster and less error-prone than
translating a 400-line Filament resource by hand, and it cannot get a column
type wrong.

---

## 4. The three things that genuinely do not translate

### A modal that builds its form at request time

Filament fetches an action's form when the modal opens. PanelKit ships the
schema with the action, so the modal opens with **no network request**.

```php
RecordAction::make('suspend')
    ->form([ TextareaField::make('reason')->required() ])
    ->authorize('suspend_subscribers')
    ->handle(fn (Subscriber $s, array $data) => $s->suspend($data['reason']));
```

`form()` pairs with `handle()`, never with `mutate()`. An action without
`authorize()` is **refused**, not permitted.

If your Filament action computed its form from the record — different fields for
different states — declare the union and use `visibleWhen`.

### Anything that re-renders on the server mid-interaction

`->reactive()`, `->afterStateUpdated()` and friends assume a round-trip.
PanelKit has `visibleWhen` at field *and* section level, evaluated client-side
from the schema. Conditional display ports; conditional *computation* needs an
endpoint.

### Blade views inside the panel

`->view('filament.custom')` has no equivalent. Custom markup is a Vue component,
either as a registered field control (`registerFieldControl`) or a render hook.

---

## 5. Authorization — read this before porting resources

**PanelKit denies by default, harder than Filament.** A resource with no policy
is not readable by anybody. Filament's default is more permissive, so a resource
that "worked" there can 403 everywhere here — and that is the correct behaviour
surfacing, not a regression.

- Ability names are **derived** from the registry (`view_any_subscribers`),
  never stored. Do not invent your own strings.
- `make:panel-resource --generate` writes a policy extending
  `TenantResourcePolicy` that grants nothing on its own.
- `php artisan panel:permissions sync` creates every ability and an
  Administrator role holding them.
- `php artisan panel:permissions grant --email=you@example.com` gives that role
  to a real person. Nothing does this automatically — a first-user-wins rule is
  fine until an installation has two.
- **`panel:doctor` reports every resource with no policy.** Run it after each
  batch of ports.

**Multi-tenancy is stricter too.** A null tenant is a *denial*, never "all
tenants". Decide `panel.tenancy.mode` before you have data — changing it later
is a migration.

---

## 6. What Filament has that PanelKit does not

Say these out loud before you commit, because each one is either a decision or a
piece of work:

- **Visual query builder.** No equivalent. Filters compose, and saved views
  cover most of what people used it for, but ad-hoc "field / operator / value"
  building is not there.
- **Roughly 20 preset action classes.** They are presets over one mechanism;
  write a `RecordAction` per case.
- **Nine view-page entry types** (infolist layouts). PanelKit's record page is
  flatter.
- **The plugin ecosystem.** Filament has hundreds; PanelKit has an API and
  whatever you write. Audit which community plugins you actually depend on
  **before** committing to the port — that is the single largest hidden cost in
  this migration.

Things PanelKit has that Filament does not: 12 chart types to Filament's 8, an
in-panel changelog and environment editor, packaged ticketing, announcements,
backups, monitoring, a document template designer, an AI assistant with retrieval
over your own screens, and a REST API with OpenAPI.

---

## 7. Performance — where the speed actually comes from

Do not undo these while porting:

- **Keyset pagination, no blocking `COUNT(*)`.** A table over 250,000 rows opens
  in the same time as one over 250. If you port a Filament resource that relied
  on `->paginated([10, 25, 50])` with counts, you get the speed only if you let
  the packaged pagination do its job.
- **One grouped query for N tabs.** Filter tabs with counts cost one query, not
  one per tab.
- **Deferred widgets.** Every dashboard widget is its own deferred prop, so one
  slow aggregate delays itself rather than the page.
- **`php artisan panel:benchmark`** enforces per-screen budgets. Run it against
  real row counts *before* cutover, not after.
- **Every filter needs an index.** `panel:doctor` reports filters with none.
  This is the most common cause of "PanelKit is slow on our data".

---

## 8. Using the demo while you port

The reference application at `apps/playground` is itself an ISP panel —
subscribers, plans, routers, invoices, ~250,000 seeded rows. For this migration
it is unusually close to what you want.

```bash
git clone https://github.com/enterprisealxtexh/panelkit.git panelkit-reference
```

- **Read `apps/playground/AGENTS.md` first.** It is generated by
  `php artisan panel:blueprint`, so it is always true for the version in front
  of you, and lists every field, column, filter and action with exact syntax.
- **Copy a resource and rename it** rather than writing from scratch — the demo's
  resources already handle policies, tenant scoping, soft deletes and summaries.
- **Read its migrations before designing your billing schema.** The indexes there
  exist because `panel:benchmark` failed without them.
- **Do not depend on it.** It is an application, not a library. Copy out of it.

---

## 9. Cutover checklist

- [ ] `panel:doctor` green
- [ ] `panel:benchmark` inside budget on **production-sized** data
- [ ] Every resource has a policy that denies by default
- [ ] Tenancy mode decided and migrated, cross-tenant isolation tested
- [ ] Every filter has an index
- [ ] Community Filament plugins you depend on either replaced or consciously dropped
- [ ] Assets built **before** deploy, not on the server
- [ ] A deploy key so composer can reach the private repo
- [ ] Both panels live; links moved one screen at a time
- [ ] Filament removed only once nothing points at it

---

## 10. The honest risk list

You are moving a **live billing system**, so these matter more than they would
elsewhere:

- **PanelKit has no production history.** Not one real user or outage before
  yours. The tests check my assumptions; they cannot check the ones I did not
  think of.
- **No external security review.** The isolation matrix and authorisation tests
  are mine.
- **No load testing** beyond benchmark medians on seeded data.
- **It is `0.x`.** The minor is the breaking position — see
  [UPGRADING.md](UPGRADING.md). Pin `^0.8.3` and read the changelog before each
  bump.
- **Billing is the worst domain to discover a framework bug in.** Reconcile
  invoices produced by both panels against each other during the overlap, and
  keep that comparison running until you trust it.

Nothing above is a reason not to do it. They are reasons to keep Filament
mounted longer than feels necessary, and to cut over the money screens last.
