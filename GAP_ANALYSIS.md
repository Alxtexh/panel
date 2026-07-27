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
| Table column types | **7** | **14** |
| Table filter types | **4** | **5** + visual query builder |
| Chart widget types | **5** (bar, line, area, pie, doughnut) | **8** |
| Action classes | **3** records + **bulk** + **export** | **27** |
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

## 2. Table columns — 7 of 14

**Have:** Text, Badge, Date, **Icon**, **Image**, **Toggle**, **Select**.

**DONE:** `IconColumn` (semantic icon + colour maps, always with an aria-label),
`ImageColumn` (fixed-size, scheme-checked URL, initials fallback), and the
editable-in-place pair `ToggleColumn` / `SelectColumn`. Flipping twenty clients
from active to suspended is now twenty clicks in the list rather than twenty
page visits.

The write goes through `PATCH {resource}/{id}/cell`, which accepts only a column
the resource DECLARED editable and validates the value against that
declaration — a select's option list is its validation rule, which matters
because these are plain string columns with no CHECK constraint behind them.

**Still missing:** `ColorColumn`, `TagsColumn`, `ColumnGroup` (grouped headers),
`TextInputColumn`, `CheckboxColumn`.

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

**Have:** StatWidget, BarChart, **LineChart/area**, **PieChart/doughnut**,
**Sparkline**, **TrendBadge**.

**DONE — change over time, which was the real gap:**

- **Line/area chart over a period**, one `GROUP BY` per chart whatever the point
  count, bounded by the window so an index is usable
- **Period selector** — today / 7d / 30d / 90d / 12m, PER CHART, reloading
  exactly one prop via `only:`
- **Trend indicator** — "▲ 4% vs previous 30 days", with the zero cases handled
  (growth from nothing is "new", not `INF%`)
- **Sparkline in a stat card**
- **Gap filling** — a day with no rows is an explicit zero, so an outage renders
  as a hole rather than a gentle slope
- **Driver-aware bucketing** — SQLite/MySQL/Postgres/SQL Server each declare
  their own truncation expression; an unknown driver throws rather than guessing

A number, its trend and its sparkline are required to measure the SAME thing:
the first cut hung a signups trend off a cumulative total, which read as
"we lost 4.3% of our subscribers".

**Missing:** PolarArea, Radar, Scatter, Bubble, `TableWidget`, and live push —
`useLiveUpdates` still is not wired to a running Reverb.

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

**DONE:** `BulkAction` mutations and `ExportAction`.

- The client sends an action KEY; the mutation is declared server-side, so this
  can never become an arbitrary-write endpoint.
- Bounded selections run inline; **select-all-matching is queued**, because it
  can be the whole table. The decision is made on whether the set is bounded,
  not on a `COUNT(*)` we refuse to run anywhere else.
- Chunking is **keyset, not offset** — a mutation usually invalidates the
  predicate that selected its own rows, and offset paging silently skips half of
  a shrinking set.
- Export writes the **current filtered view**, queued, chunked to a stream, with
  a BOM for Excel and formula-injection neutralised. Progress is owner-checked,
  so a leaked token is inert.

**Missing:** `BulkActionGroup`, `ActionGroup` (nested menus), `ReplicateAction`,
`ImportAction`, `RestoreAction` / `ForceDeleteAction` (no soft deletes), and the
relation family `AttachAction` / `AssociateAction` / `DetachAction` /
`DissociateAction`.

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

**Tier 1 — COMPLETE**

1. ~~Layout components: `Section`, `Tabs`, `Grid`.~~ Done.
2. ~~`IconColumn`, `ImageColumn`, `ToggleColumn`, `SelectColumn`.~~ Done.
3. ~~Date-range and multi-select filters.~~ Done.
4. ~~Bulk action mutations + export of the filtered view.~~ Done.
5. ~~Line and Pie charts, period selector, trend indicators.~~ Done.
6. ~~Appearance in the navbar.~~ Done — theme, primary colour, surface tint,
   card style, density, sidebar side, and font size in px.
7. ~~Collapsible sidebar navigation groups.~~ Done.

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
