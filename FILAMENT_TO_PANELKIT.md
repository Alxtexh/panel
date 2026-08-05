# Filament → PanelKit

**A lookup table for porting an existing Filament panel.** Every row is "you
wrote this in Filament; write this in PanelKit". Audited against
`filamentphp.com/docs/5.x` on 2026-08-05 and against PanelKit v0.9.5.

Read [GAP_ANALYSIS.md](GAP_ANALYSIS.md) for the counts and the reasoning;
[PANELKIT.md](PANELKIT.md) for how to build once you are here. This file is
just the translation.

**Nothing is missing.** Every Filament form field, column, filter, layout
component, chart type and infolist entry has an equivalent. What differs is
shape, and §8 is the list of places where the shape differs enough to matter.

---

## 1. The mental model, in one paragraph

Filament describes a screen in a class and renders it with Livewire, round-trip
per interaction. PanelKit describes a resource in a class, sends that
description to the browser **once**, and every interaction afterwards moves data
only. Practically: your resource classes look similar; your custom Livewire
components do not port, because there is no Livewire. They become either a
**Page** (a screen) or a **Vue component** you mount yourself — see §7.

---

## 2. Form fields

```php
// Filament
use Filament\Forms\Components\TextInput;
TextInput::make('name')->required()->maxLength(60)

// PanelKit
use PanelKit\Panel\Forms\Fields\TextField;
TextField::make('name')->required()->rules(['max:60'])
```

| Filament | PanelKit | Note |
|---|---|---|
| `TextInput` | `TextField` | |
| `TextInput::numeric()` | `NumberField` | its own type here |
| `TextInput::password()` | `PasswordField` | never carries a value back |
| `Textarea` | `TextareaField` | |
| `Select` | `SelectField` | |
| `Select::multiple()` | `MultiSelectField` | its own type here |
| `Checkbox` | `CheckboxField` | |
| `Toggle` | `ToggleField` | renders a **switch** |
| `CheckboxList` | `CheckboxListField` | |
| `Radio` | `RadioField` | |
| `ToggleButtons` | `VisualSelectField` | options render as *what they do* |
| `DateTimePicker` | `DateField`, `->withTime()` | |
| `FileUpload` | `FileUploadField` | |
| `RichEditor` | `RichEditorField` | |
| `MarkdownEditor` | `MarkdownField` | |
| `CodeEditor` | `CodeField` | |
| `ColorPicker` | `ColourField` | British spelling throughout |
| `TagsInput` | `TagsField` | |
| `KeyValue` | `KeyValueField` | |
| `Repeater` | `RepeaterField` | |
| `Builder` | `BuilderField` | |
| `Slider` | `SliderField` | |
| `Hidden` | `HiddenField` | |
| — | `CountryField` | 173 countries, ISO or dialling code |

**Validation is Laravel's, spelled as rules.** Filament's `->maxLength(60)`,
`->email()`, `->numeric()` become `->rules(['max:60'])`, `->rules(['email'])`,
`NumberField`. One vocabulary instead of two.

**`->required()` exists** and adds `required` to the rules plus the asterisk.

---

## 3. Table columns

```php
// Filament
TextColumn::make('name')->searchable()->sortable()

// PanelKit
TextColumn::make('name')->searchable()->sortable()
```

| Filament | PanelKit |
|---|---|
| `TextColumn` | `TextColumn` |
| `IconColumn` | `IconColumn` |
| `ImageColumn` | `ImageColumn` |
| `ColorColumn` | `ColourColumn` |
| `SelectColumn` | `SelectColumn` |
| `ToggleColumn` | `ToggleColumn` |
| `CheckboxColumn` | `CheckboxColumn` |
| `TextInputColumn` | `EditableColumn` |
| `TextColumn::badge()` | `BadgeColumn` — its own type |
| `TextColumn::money()` | `MoneyColumn` — its own type |
| `TextColumn::dateTime()` | `DateColumn` |
| — | `CodeColumn`, `KeyValueColumn` |

**`MoneyColumn` defaults to minor units.** An integer count of the smallest unit
cannot drift the way a float does. `->major()` if your column already holds
decimals, `->currency('KES')` for a fixed one, `->currencyFrom('currency_code')`
to read each row's own. It formats in the **viewer's** locale.

---

## 4. Filters

| Filament | PanelKit |
|---|---|
| `SelectFilter` | `SelectFilter` |
| `SelectFilter::multiple()` | `MultiSelectFilter` |
| `TernaryFilter` | `BooleanFilter` — true / false / all |
| `TrashedFilter` | `TrashedFilter` |
| `Filter` + custom form | `Filter` base class |
| `QueryBuilder` | `QueryBuilderFilter` |
| — | `DateRangeFilter` |

**`QueryBuilderFilter` needs no configuration.** It derives its targetable
fields from the resource's *other* filters, so it offers exactly what you
already filter on and cannot drift:

```php
->filters([
    SelectFilter::make('status')->options(['active', 'suspended']),
    DateRangeFilter::make('created_at'),
    QueryBuilderFilter::make('advanced'),   // offers status and created_at
])
```

A rule naming anything else is **refused with a 422**, not ignored — dropping it
would return more rows than the operator asked for.

---

## 5. Layout

| Filament | PanelKit |
|---|---|
| `Section` | `Section` — `->visibleWhen()` for conditionals |
| `Fieldset` | `Fieldset` — a real `<fieldset>`/`<legend>` |
| `Grid` | `Grid` |
| `Flex` | `Flex` |
| `Tabs` / `Tabs\Tab` | `Tabs` / `Tab` |
| `Wizard` / `Wizard\Step` | `Wizard` / `Step` |
| `Callout` | `Callout` |

Use `Fieldset` *inside* a `Section`. Nesting sections gives a card inside a
card, which reads as two things when it is one thing with a part named.

---

## 6. Infolists → the record page

Filament composes a separate infolist schema. **PanelKit's record page renders
from the table columns** — the same declaration, at a different density.

| Filament entry | PanelKit |
|---|---|
| `TextEntry` | any column, default rendering |
| `IconEntry` | `IconColumn` |
| `ImageEntry` | `ImageColumn` |
| `ColorEntry` | `ColourColumn` |
| `CodeEntry` | `CodeColumn` |
| `KeyValueEntry` | `KeyValueColumn` |
| `RepeatableEntry` | a relation — see §7 |

So there is **no second schema to write**. A `MoneyColumn` in the table is
formatted money on the record page; a `KeyValueColumn` is "3 entries" in the
list and labelled pairs on the record.

---

## 7. Actions, pages and widgets — where the shape differs

### Actions

Filament ships nine action classes. PanelKit has four, because four of
Filament's verbs are not actions here:

| Filament | PanelKit |
|---|---|
| `CreateAction` | the resource's create page — routed automatically |
| `EditAction` | the resource's edit page |
| `ViewAction` | the resource's record page |
| `DeleteAction` | built into the row and the bulk toolbar |
| `ReplicateAction` | `ReplicateAction` |
| `RestoreAction` / `ForceDeleteAction` | the Trash screen, across all resources |
| `ImportAction` | the import wizard |
| `ExportAction` | filtered export |
| `BulkAction` | `BulkAction`, with count-before-commit |
| `ActionGroup` | `ActionGroup` |

**You stop declaring create/edit/view/delete.** They follow from the resource.

An action that needs input first uses `->form()`, and the modal opens with **no
network request** — the schema travels with the action.

### Pages

A Filament custom Page becomes a PanelKit **Page**:

```bash
php artisan make:panel-page ServerHealth
```

One class plus a one-line Vue file. Route, sidebar entry, ability,
permission-matrix entry and page header all follow from the class. `actions()`
declares endpoints the page owns, each with its **own** ability — seeing and
doing are different grants.

### Widgets

| Filament | PanelKit |
|---|---|
| `StatsOverviewWidget` | `DashboardPage::stats()` |
| `ChartWidget` + subtypes | `DashboardPage::charts()` |
| `TableWidget` | a resource, or a table on a Page |

Chart types: bar, line, pie, doughnut, polar area, radar, **scatter, bubble**,
plus combo, heatmap, sparkline and segmented bar.

### Relation managers

`RelationManager` exists and mounts on the record page. Nested resources give
you `/clients/5/invoices` as real routes.

### Custom Livewire components

**These do not port.** There is no Livewire. Each becomes either a Page (if it
is a screen) or a Vue component you write against the exported primitives — see
§9.

---

## 8. Six differences worth knowing before you start

1. **Authorisation is deny-by-default, and it is not optional.** A resource
   whose model has no policy is denied **entirely**. `make:panel-resource
   --generate` writes a policy extending `TenantResourcePolicy`, which is
   tenant-checked and permission-checked in one line. Ability names are
   *derived* (`view_any_clients`), never stored.

2. **Tenancy is first-class, and a null tenant is a denial** — never "all
   tenants". If your Filament panel is single-tenant, set
   `panel.tenancy.mode` to `none`.

3. **The client half must be installed.** `panelkit/panel`'s PHP contains zero
   `.vue` files. Skip `npm install ./vendor/panelkit/panel/client/panelkit-client.tgz`
   and every route answers 200 and renders nothing.

4. **Tailwind must be pointed at the package.** Two `@source` lines, written by
   `panel:install`. A stale one purges every packaged utility silently — the
   panel renders with no layout and a clean build log.

5. **`panel:install --auth` unless you already have a `login` route.** The panel
   guards its routes; Laravel redirects guests to `route('login')`; without one
   every URL returns 500 before any panel code runs.

6. **Run `php artisan panel:doctor` after every change.** Every check in it
   exists because the failure it finds is *silent*: a resource nothing
   registered, a packaged screen with no page file, a client half absent or a
   different version from the PHP.

---

## 9. Building what PanelKit does not ship

The UI is **shadcn** in its Vue form — `reka-ui` + `class-variance-authority` +
`clsx` + `tailwind-merge` — and every component is exported. So a screen the
package does not have is built from the same parts the package was built from:

```ts
import {
    PkCard, PkModal, PkSlideover, PkButton, PkTextInput,
    DataTable, TableShell, TableToolbar, TablePagination,
    Dialog, DropdownMenu, Sheet, Popover, Tooltip, Avatar,
} from '@alxtexh-enterprise/panel'
```

**15 shadcn families (94 components) and 56 `Pk*` components**, all `export`ed.
Nothing is private.

---

## 10. A porting order that works

1. **`panel:install --auth`, then `panel:doctor`.** Get a working sign-in before
   anything else.
2. **One resource, generated**: `php artisan make:panel-resource Client
   --generate`. It reads the table and writes the class *and* a deny-by-default
   policy.
3. **Port its columns and fields** from the tables above. Mechanical.
4. **Grant yourself a role** — `php artisan panel:permissions grant
   --email=you@example.com` — or every screen is a correct-looking 403.
5. **Then the rest of the resources.** They are all the same shape.
6. **Pages last**, once the resources prove the install.

Run `php artisan panel:blueprint` first: it writes `AGENTS.md` from the
installed tree, so an AI agent helping with the port reads what is actually
there rather than a summary of it.

---

## 11. What to check before you trust it with money

PanelKit has **no production history** — not one real user, tenant or outage.
Everything below is verified locally and nothing is verified by use.

So, specifically:

- **Run both panels in parallel** on real data before cutting over. Filament
  stays authoritative; PanelKit is read-only beside it.
- **Start with a low-stakes resource.** Not invoicing.
- **Verify money by eye on both the list and the record page.** A formatting
  bug there is a wrong number rather than an ugly one, and one shipped:
  `MoneyColumn` was not formatted on the record page at all until v0.9.5 — the
  list showed a currency and the record page showed raw minor units.
- **`panel:doctor` in the deploy pipeline**, exit code and all.

The honest summary: the feature surface is complete against Filament and every
count in this file is checked by a test. The category of problem that remains
is the category only production surfaces.
