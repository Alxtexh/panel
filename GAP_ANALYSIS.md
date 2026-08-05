# PanelKit vs Filament 5.x

**Audited 2026-08-05.** Filament's side comes from its live documentation at
`filamentphp.com/docs/5.x`. PanelKit's side comes from counting the source tree
the same day. Every number here was measured.

> **This replaces a version that was wrong in three ways**, and the ways matter
> more than the numbers:
>
> 1. **Its counts were stale.** It said 6 form fields; there are 22.
> 2. **It compared unlike things.** Its Filament numbers came from enumerating
>    the vendor tree — which counts abstract bases, traits and internals — and
>    its PanelKit numbers came from counting user-facing classes. Source-tree
>    against public-surface inflates one side by construction. Filament is no
>    longer installed here, so those numbers cannot even be reproduced.
> 3. **It pointed at a file that does not exist.** Its banner sent readers to
>    `MIGRATING_FROM_FILAMENT.md` for a current comparison. That file was never
>    written. The migration guidance is now in §10 below.
>
> `FilamentParityTest` pins every PanelKit count in this document against the
> tree, so the next time somebody adds a field type and forgets this file, the
> suite says so rather than a reader finding out months later.

**Counting rule, applied to both sides:** concrete, user-facing types only.
PanelKit's `Field`, `Column` and `Filter` base classes and its `HasChoices` /
`HasOptions` traits are excluded. Filament's side is its documented list.

---

## Scoreboard

| Area | PanelKit | Filament 5.x | Real gaps |
|---|---|---|---|
| Form fields | **24** | 20 | none |
| Table columns | **13** | 8 | none |
| Table filters | **6** | 5 | none |
| Layout components | **9** | 7 | none |
| Chart types | **11** | 8 | none |
| View-page entry types | **11** | 7 | none |
| Prebuilt action classes | 4 + subsystems | 9 | none functionally |

---

## 1. Form fields — 24 vs 20, no gaps

**Filament's 20:** TextInput, Select, Checkbox, Toggle, CheckboxList, Radio,
DateTimePicker, FileUpload, RichEditor, MarkdownEditor, Repeater, Builder,
TagsInput, Textarea, KeyValue, ColorPicker, ToggleButtons, Slider, CodeEditor,
Hidden.

| Filament | PanelKit | |
|---|---|---|
| `TextInput` | `TextField` | ✅ |
| `Select` | `SelectField` | ✅ |
| `Toggle` | `ToggleField` | ✅ |
| `CheckboxList` | `CheckboxListField` | ✅ |
| `Radio` | `RadioField` | ✅ |
| `DateTimePicker` | `DateField` | ✅ `->withTime()` switches it to `datetime` |
| `FileUpload` | `FileUploadField` | ✅ |
| `RichEditor` | `RichEditorField` | ✅ |
| `MarkdownEditor` | `MarkdownField` | ✅ |
| `Repeater` | `RepeaterField` | ✅ |
| `Builder` | `BuilderField` | ✅ |
| `TagsInput` | `TagsField` | ✅ |
| `Textarea` | `TextareaField` | ✅ |
| `KeyValue` | `KeyValueField` | ✅ |
| `ColorPicker` | `ColourField` | ✅ |
| `Slider` | `SliderField` | ✅ |
| `CodeEditor` | `CodeField` | ✅ |
| `ToggleButtons` | `VisualSelectField` | ⚠️ same job — a segmented choice — but PanelKit's renders each option as *what it does* rather than as a label |
| `Checkbox` | `CheckboxField` | ✅ |
| `Hidden` | `HiddenField` | ✅ |

**Five PanelKit has that Filament reaches differently:** `MultiSelectField`,
`NumberField`, `PasswordField`, `CountryField` (173 countries, ISO or dialling
code), `VisualSelectField`. Filament gets three of those from modifiers —
`Select::multiple()`, `TextInput::numeric()`, `TextInput::password()` — so it is
mostly a shape difference. `CountryField` and `VisualSelectField` have no
counterpart.

**The last two closed in 0.9.5, and closing `Checkbox` fixed something else.**
`ToggleField` drew a bare `<input type="checkbox">` — one control wearing two
names, and no way to ask for an actual checkbox. Adding `CheckboxField` beside
it would have shipped a second name for the same markup, so `toggle` moved onto
a real switch built on `reka-ui`'s `SwitchRoot` and `checkbox` took the shadcn
checkbox already in the tree. Both names now describe what they draw:

- a **switch** is a setting, and reads as state — "Notifications: on"
- a **checkbox** is an assertion you tick while filling a form in — "I confirm"

Same column, same `boolean`, same submitted value. **This changes how existing
toggles look** — see UPGRADING.

`HiddenField` carries a value the form submits and the operator never edits. It
is **not a security boundary**: the client can see and change it, so anything
that must be true when the record is written belongs in the endpoint.

---

## 2. Table columns — 13 vs 8, no gaps

| Filament | PanelKit |
|---|---|
| `TextColumn` | `TextColumn` ✅ |
| `IconColumn` | `IconColumn` ✅ |
| `ImageColumn` | `ImageColumn` ✅ |
| `ColorColumn` | `ColourColumn` ✅ |
| `SelectColumn` | `SelectColumn` ✅ |
| `ToggleColumn` | `ToggleColumn` ✅ |
| `CheckboxColumn` | `CheckboxColumn` ✅ |
| `TextInputColumn` | `EditableColumn` ✅ edit in place |

**PanelKit adds five:** `BadgeColumn`, `DateColumn`, `MoneyColumn`, `CodeColumn`, `KeyValueColumn`. The money
column takes a fixed currency or reads each row's own, defaults to minor units —
an integer count of the smallest unit cannot drift the way a float does — and
formats in the **viewer's** locale rather than the server's.

**This area is complete.** Anything a Filament table renders, a PanelKit table
renders.

---

## 3. Filters — 6 vs 5, no gaps

| Filament | PanelKit |
|---|---|
| `Filter` (custom) | `Filter` base ✅ |
| `SelectFilter` | `SelectFilter` ✅ |
| `TernaryFilter` | `BooleanFilter` ✅ true / false / all |
| `TrashedFilter` | `TrashedFilter` ✅ |
| `QueryBuilder` | `QueryBuilderFilter` ✅ |

**PanelKit adds** `DateRangeFilter` and `MultiSelectFilter`.

**`QueryBuilderFilter` closed the last gap in 0.9.5.** A nested and/or rule
tree — "status is active AND (plan is gold OR created after March)" — composed
in the UI and translated to a scoped query.

**It targets only columns the resource already filters on.** The allow-list is
derived from the sibling filters by `ListQuery::filters()`, not declared
separately, so the builder adds **no new way to reach anything** and the list
cannot drift out of step with the filters it came from. `TrashedFilter` is
deliberately excluded: it rewrites the soft-delete scope rather than adding a
predicate, so "deleted is true OR status is active" would silently widen the
set to every deleted row.

**A rule naming an unknown field is refused, not dropped.** Ignoring it turns
"status is active AND secret is x" into "status is active" — a *wider* result
set than the operator wrote, returned without comment. Depth and rule count are
capped, and both caps refuse rather than truncate.

**The whole tree goes inside one nested `where`.** Without that, a top-level
`or` ORs itself against the tenant scope already on the query — a cross-tenant
read that looks like a working feature. That is the assertion the test suite
leads with.

---

## 4. Layout components — 9 vs 7, no gaps

| Filament | PanelKit |
|---|---|
| `Grid` | `Grid` ✅ |
| `Section` | `Section` ✅ with `visibleWhen` |
| `Tabs` | `Tabs` + `Tab` ✅ |
| `Wizard` | `Wizard` + `Step` ✅ |
| `Fieldset` | `Fieldset` ✅ |
| `Flex` | `Flex` ✅ |
| `Callout` | `Callout` ✅ |

**All three closed in 0.9.5**, and two are more than styling:

- **`Fieldset` renders a real `<fieldset>` and `<legend>`**, not a styled div.
  A screen reader announces the legend before every control inside, so "Line 1"
  is heard as "Billing address, Line 1" — which is why the element exists. The
  visual grouping is the smaller half of what it does. Use it *inside* a
  `Section`: nesting sections gives a card inside a card, which reads as two
  things when it is one thing with a part named.
- **`Flex` is a row of things that are not the same size.** A `Grid` gives every
  child an equal column, which is right for form fields and leaves a short code
  beside a long description floating in whitespace.
- **`Callout` is a consequence stated where the control that causes it is** —
  "saving this emails every customer" belongs beside the plan selector, not in a
  toast afterwards. It is `role="note"`, never `alert`, and `danger` gets its
  own surface rather than borrowing the validation-error look, so people do not
  learn to read red as "I typed something wrong" and dismiss it.

---

## 5. View-page entries — 11 vs 7, no gaps

**This was the largest gap in the 2026-08-05 audit and has since been closed.**
`ResourceView` special-cased `badge` in its template and formatted `date` /
`datetime` in script — three types — and rendered everything else as a raw
string. It now reuses the same cell components the table does.

| Filament | PanelKit |
|---|---|
| `TextEntry` | the default, with prefix/suffix and transforms ✅ |
| `IconEntry` | `IconCell` ✅ |
| `ImageEntry` | `ImageCell` ✅ |
| `ColorEntry` | `ColourCell` ✅ |
| `CodeEntry` | `code` column ✅ |
| `KeyValueEntry` | `keyvalue` column ✅ |
| `RepeatableEntry` | `RelationPanel` ⚠️ related **records** yes; a repeated JSON array on the record itself, no |

**PanelKit renders five more** that Filament reaches through `TextEntry`
formatting: `badge`, `date`, `datetime`, `money`, and `checkbox`/`toggle`.

**`CodeColumn` and `KeyValueColumn` closed an asymmetry, not just a gap.**
`CodeField` and `KeyValueField` had shipped for releases with nothing able to
display what they store — so an operator could paste a router config through a
code editor, or build a map in a two-column editor, and the record page printed
raw JSON back at them. **One type, two densities**: a truncated line and
"3 entries" in a list, which is a scanning surface; the full block and labelled
pairs on the record, where there is room.

**The cells are reused, not reimplemented.** A column type cannot render one
way in a list and another on the record — which is the bug this shape is most
likely to grow, and which it had: **`money` was not formatted on the record page
at all**, so a row showing a currency in the list showed raw minor units on its
own page. Two orders of magnitude out, on the screen somebody opens to check
what a customer owes. The formatter is now shared.

---

## 6. Charts — 11 vs 8, no gaps

| Filament | PanelKit |
|---|---|
| Bar | `BarChart` ✅ |
| Line | `LineChart` ✅ |
| Pie | `PieChart` ✅ |
| Doughnut | `PieChart` `type="doughnut"` ✅ |
| Polar area | `PolarAreaChart` ✅ |
| Radar | `RadarChart` ✅ |
| Scatter | `ScatterChart` ✅ |
| Bubble | `ScatterChart`, points carrying `r` ✅ |

**PanelKit adds four:** `ComboChart` (bars with a trend line through them),
`HeatmapChart`, `Sparkline`, `SegmentedBar`.

**Scatter and bubble are one component**, the way `PieChart` is also the
doughnut: a bubble chart is a scatter with a size channel — same axes, same
marks, same hit testing. Two files would be two names for one drawing.

**Bubbles scale by AREA, not radius.** Mapping the value onto the radius
quadruples the ink for twice the quantity, so a reader comparing marks by eye
reads a doubling as a quadrupling. A test asserts the ratio, because that is
the kind of wrong a chart can be while still looking like a chart.

The old scoreboard claimed "12 — the full reference set". That counted cards and
chrome — `StatCard`, `ChartTooltip`, `TrendBadge` — as chart types. Nine is the
real number, and two of Filament's eight are missing.

---

## 7. Actions — a different shape, not a smaller one

Filament ships nine prebuilt action classes. PanelKit has four, because the
first four verbs are not actions here:

| Filament | PanelKit |
|---|---|
| `CreateAction` | the resource's create page, routed automatically |
| `EditAction` | the resource's edit page |
| `ViewAction` | the resource's record page |
| `DeleteAction` | built into the row and the bulk toolbar |
| `ReplicateAction` | `ReplicateAction` ✅ |
| `RestoreAction` | the Trash screen, across resources |
| `ForceDeleteAction` | the Trash screen |
| `ImportAction` | the import wizard — `Importer`, `ImportResult`, `ImportFailure` |
| `ExportAction` | filtered export — `ExportRecords`, `ExportedFile` |

**Nothing is missing functionally.** Scoring 4 against 9, as the old file did,
counted an architectural difference as a deficit.

Two things PanelKit's actions do that Filament's do not: `->form()` opens a
modal with **no network request**, because the schema travels with the action;
and every bulk mutation counts before it commits.

---

## 8. What PanelKit ships with no Filament equivalent

Not scored, because there is nothing to score against — but relevant to a
migration, since these may replace plugins you currently pay for or maintain:

- **Ticketing** — two resources over one table, operator and customer sides,
  internal notes, departments, first-response stats
- **Announcements** — composer plus dashboard banners, per-person dismissal
- **A REST API** with tokens and generated OpenAPI
- **Knowledge indexing and retrieval**, and an assistant that respects role
  permissions and tenant scope
- **Backups** with destination testing, restore, and write-blocking during one
- **`panel:doctor`** — every check exists because the failure it finds is
  *silent*: a resource nothing registered, a packaged screen with no page file,
  a stylesheet that purges every packaged utility, a client half absent or a
  different version from the PHP
- **`panel:blueprint`** — regenerates `AGENTS.md` from the tree, so an agent
  reads what is installed rather than what somebody wrote down
- Document templates and a designer, scheduled reports, audit trail, custom
  fields, impersonation, workspaces, saved views, i18n

---

## 9. Limits of this audit — read before quoting it

- **It compares surface, not behaviour.** Each ✅ means a class exists with the
  same job. It does not mean every Filament modifier on that class has an
  equivalent.
- **Filament's documentation is the source for its side.** A class that exists
  but is undocumented on the pages read is not counted.
- **Relation-manager actions** — `AttachAction`, `AssociateAction` and their
  inverses — were not on the actions overview and are not scored. PanelKit has
  `RelationManager`; the specific attach/detach affordances were verified
  neither way.
- **Panel configuration is deliberately not scored.** The old file claimed
  "7 vs 34", comparing a fluent builder against a config file plus a builder —
  two different things, producing a number with no meaning. `Panel` exposes 22
  public methods; lining those up needs a method-by-method reading nobody has
  done.

---

## 10. Migrating a Filament panel

> **The row-by-row translation table is [FILAMENT_TO_PANELKIT.md](FILAMENT_TO_PANELKIT.md)**
> — every Filament class beside the PanelKit one to write instead. This section
> is the shape of the work; that file is the lookup.

1. **Tables port almost mechanically** — columns are complete.
2. **Forms port with two small additions** — `Hidden` and `Checkbox`.
3. **Record pages need work.** That is §5, and it is the real one.
4. **A visual query builder must be replaced or built** — saved views plus
   filters cover most staff-facing uses.
5. **Actions are re-shaped, not rewritten.** Create, edit, view and delete stop
   being things you declare.
6. **Check your plugin list first.** Several common ones — ticketing,
   announcements, backups, audit trail, impersonation — are in the box here, so
   part of a migration is deleting dependencies rather than porting them.

Run `php artisan panel:blueprint` in the target application before starting: it
writes `AGENTS.md` from the installed tree, so an AI agent helping with the port
reads what is actually there rather than this document's summary of it.
