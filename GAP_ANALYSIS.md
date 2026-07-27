# PanelKit vs Filament 5.7 — what we are missing

Measured by installing `filament/filament ^5.7` and enumerating its source, not
from memory. Counts are class counts in the vendor tree.

**The honest headline:** the *architecture* is ahead of Filament — schema-once,
data-only transport, keyset pagination, no blocking `COUNT(*)`, one grouped query
for N tabs, deny-by-default authorization, modals that open with no request. The
*component library* is roughly 20% of Filament's. What is missing is breadth,
not foundations, and breadth is what makes a panel usable on day one.

---

## Scoreboard

| Area | PanelKit | Filament 5.7 |
|---|---|---|
| Form field types | **6** | **33** |
| Table column types | **3** | **14** |
| Table filter types | **2** | **5** + visual query builder |
| Chart widget types | **1** (bar) | **8** |
| Action classes | **3** (create/edit/delete) | **27** |
| Layout components | **5** (Section, Tabs, Tab, Grid, + field leaves) | **23** |
| View-page entry types | **0** (flat list) | **9** |
| Panel config options | **7** | **34** |
| Table behaviours | 8 | 17 |

---

## 1. Form fields — 6 of 33

**Have:** Text, Textarea, Number, Select, Toggle, Date.

**Missing, roughly in order of how often an ISP panel needs them:**

| Field | Why it matters here |
|---|---|
| `FileUpload` | Logos, contracts, ID scans. Nothing can be attached today. |
| `Repeater` | One client, many devices. No nested editing at all. |
| `KeyValue` | Arbitrary metadata without a migration. |
| `CheckboxList` / `MultiSelect` | Any many-to-many. Cannot express "these three plans". |
| `Radio` / `ToggleButtons` | A 3-option choice as a select is a worse control. |
| `TagsInput` | Free-form labels. |
| `RichEditor` / `MarkdownEditor` | Notes, templated messages. |
| `ColorPicker` | Per-tenant branding is a text field today. |
| `TimePicker` / `DateTimePicker` | We have date and datetime; no time-only. |
| `Slider`, `CodeEditor`, `OneTimeCodeInput` | Niche but cheap. |
| `MorphToSelect`, `TableSelect`, `ModalTableSelect` | Picking a record from 100k rows. Our select renders every option into the DOM — fine at 40 plans, unusable at 100k clients. |
| `Hidden`, `Placeholder`, `ViewField` | Escape hatches. |

**The one that is a correctness problem, not just a gap:** `SelectField` renders
all options inline. At 40 plans that is right; pointed at clients it would ship
100,000 `<option>` elements. A searchable/async select is needed before anyone
builds a form with a large relation.

---

## 2. Table columns — 3 of 14

**Have:** Text, Badge, Date.

**Missing:** `IconColumn` (booleans as ✓/✗ rather than a badge), `ImageColumn`
(avatars, logos), `ColorColumn`, `TagsColumn`, `ColumnGroup` (grouped headers),
and the **editable-in-place** family — `SelectColumn`, `ToggleColumn`,
`TextInputColumn`, `CheckboxColumn`. Those four are a real workflow difference:
flipping twenty clients from active to suspended currently means twenty page
visits.

---

## 3. Filters — 2 of 5, and no query builder

**Have:** Select (single), Boolean (tri-state).

**Missing:** `MultiSelectFilter` (status in [expired, suspended] is not
expressible), `TernaryFilter`, `TrashedFilter`, **date-range filters**, and
Filament's visual `QueryBuilder` — nested AND/OR conditions an operator composes
in the UI.

No date-range filter is the sharpest omission for a billing panel: "clients
expiring this week" cannot be asked.

---

## 4. Widgets and charts — 1 of 8 chart types

**Have:** StatWidget, BarChart.

**Missing:** Line, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble, plus
`TableWidget` (a table as a dashboard widget).

**And the bigger gap you named — nothing shows change over time.** Every widget
is a point-in-time number. There is no:

- **Line/area chart over a period** — sessions per hour, revenue per day
- **Period selector** — today / 7 days / 30 days / custom
- **Trend indicator** — "66,667 active, ▲ 4% vs last week"
- **Sparkline in a stat card** — Filament's `StatsOverviewWidget` supports this
- **Polling** — `PollRecords` on tables and `$pollingInterval` on widgets
- **Live push** — `useLiveUpdates` exists but is not wired to Reverb, so nothing
  actually moves on screen

A dashboard of six static counters is not a dashboard an operator watches.

---

## 5. Layout components — 5 of 23 (was 0)

**DONE:** `Section` (collapsible, described, column grid), `Tabs`, `Tab`, `Grid`,
composing to any depth. Forms render from a tree; validation walks it, so a
field behind an inactive tab is validated exactly like a visible one and its tab
shows an error marker.

**Still missing:** `Wizard`, `Fieldset`, `Flex`, `Callout`, `EmptyState`,
`Text`, `Icon`, `Image`, `UnorderedList`, `FusedGroup`, and the 9 infolist entry
types — so the VIEW page is still a flat definition list rather than tabbed.

---

### Original assessment

This is the largest structural gap. Filament forms and view pages are built from
`Tabs`, `Wizard`, `Section` (collapsible), `Fieldset`, `Grid`, `Flex`, `Group`,
`Callout`, `EmptyState`, `Text`, `Icon`, `Image`, `UnorderedList`.

Ours is a flat list of fields in an N-column grid. Consequences:

- **No tabs on view or edit pages** — you asked for these specifically
- **No sections**, so a 20-field form is an undifferentiated wall
- **No wizard**, so multi-step creation is impossible
- **No infolist entries**, so the view page is a definition list and cannot show
  an image, a colour, a code block, or a repeatable sub-list

---

## 6. Actions — 3 of 27

**Have:** create, edit, delete (as pages), plus a delete confirmation.

**Missing:** `BulkAction` **mutations** (selection exists; nothing acts on it),
`BulkActionGroup`, `ActionGroup` (nested menus), `ReplicateAction` (duplicate a
client), `ExportAction` / `ExportBulkAction`, `ImportAction`,
`RestoreAction` / `ForceDeleteAction` (no soft deletes), and the relation family
`AttachAction` / `AssociateAction` / `DetachAction` / `DissociateAction`.

**Export is the one operators will ask for first**, and addendum C already
specifies it: export the *current filtered view*, queued, with progress.

---

## 7. Panel configuration — 7 of 34

**Have:** id, path, guard, middleware, authMiddleware, context, brandName, colors.

**Missing, including everything you asked for:**

| Option | Your ask |
|---|---|
| `themeSwitcher` | Appearance **in the navbar**, not buried in settings |
| `sidebarWidth`, `sidebarCollapsibleOnDesktop`, `sidebarFullyCollapsibleOnDesktop` | Sidebar location/behaviour |
| `font` | Font family — and *font size* is not even a Filament feature |
| `navigationGroups` (collapsible) | **Sidebar dropdowns** |
| `maxContentWidth` | — |
| `topbar`, `renderHook` | Injecting custom UI without forking |
| `databaseNotifications` + polling | A notification bell; we have none |
| `globalSearch*` (debounce, keybindings, per-resource opt-in) | Ours is hardcoded |
| `unsavedChangesAlerts` | We have this, but not configurable |
| `profile`, `breadcrumbs`, `brandLogo`, `darkModeBrandLogo` | — |

Note two of your asks go **beyond** Filament: user-selectable **font size** and
user-selectable **sidebar position** are panel-level developer config there, not
per-user preferences. Making them per-user is a genuine differentiator, and
cheap — both are CSS custom properties on `:root`, same mechanism as the tenant
theme already uses.

---

## 8. Table behaviours — 8 of 17

**Have:** search, sort, filters, paginate, column manager, selection, tabs, empty
states.

**Missing:** `GroupRecords` (group rows by a column with subtotals),
`SummarizeRecords` (a footer row of sums/averages), `ReorderRecords` (drag to
set display order), `PollRecords`, `BeStriped`, and **record URLs** — clicking
anywhere on a row to open it, rather than only the name.

`SummarizeRecords` matters for billing: a filtered list of invoices with no total
is half an answer.

---

## 9. Whole subsystems absent

| Subsystem | Notes |
|---|---|
| **Notifications** (`filament/notifications`) | Database notifications, a bell in the topbar, broadcast toasts. We have toasts only. |
| **Relation managers** | A client's sessions/devices/payments as tabs on the client page. Base spec §12 defers these; for an ISP panel they are close to essential. |
| **Soft deletes / trash** | No `deleted_at` support, no restore, no trashed filter. |
| **Global search opt-in per resource** | Ours searches a hardcoded set of columns. |
| **Multi-panel switching UI** | `Panel` supports several; nothing switches between them. |

---

## 10. Things you asked for that Filament does not have

Worth building *because* they are differentiators, not gaps:

- **What's-new page** — an in-panel changelog. Filament has nothing.
- **Documentation page** — Laravel-docs-style, in-panel.
- **Per-user font size and sidebar position.**
- **Live-updating charts.** Filament polls; a broadcast-driven chart is the thing
  this architecture is *for*, and the composable already exists unwired.

---

## Recommended order

Grouped by ratio of operator value to effort.

**Tier 1 — the panel feels incomplete without these**

1. Layout components: `Section`, `Tabs`, `Grid` — unlocks view-page tabs and
   readable long forms. Biggest single unlock.
2. `IconColumn`, `ImageColumn`, and the editable columns (`ToggleColumn`,
   `SelectColumn`).
3. Date-range and multi-select filters.
4. Bulk action mutations + export of the filtered view (queued, per addendum C).
5. Chart types: Line and Pie, plus a period selector and trend indicators.
6. Appearance in the navbar: theme switcher, sidebar position, font size — as
   per-user preferences.
7. Collapsible sidebar navigation groups.

**Tier 2 — needed before production for this domain**

8. `FileUpload`.
9. Searchable/async `Select` for large relations *(also fixes the 100k-option
   correctness problem)*.
10. Wire live updates to Reverb, and one live chart.
11. Notifications with a topbar bell.
12. Relation managers.
13. `SummarizeRecords`.
14. Soft deletes and a trashed filter.

**Tier 3 — differentiators and polish**

15. What's-new page, documentation page.
16. `Repeater`, `KeyValue`, `RichEditor`.
17. Visual query builder.
18. Wizard, table grouping, record reordering.
19. Import.

---

## What we should not copy

- **Livewire's cost model.** Filament's action modals fetch their form on open;
  ours must not.
- **Blocking `COUNT(*)`** for pagination.
- **`OFFSET` pagination.**
- **CSS classes authored in PHP.** Filament passes class strings from PHP; we
  cannot, and the schema stays semantic.
