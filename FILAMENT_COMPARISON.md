# PanelKit vs FilamentPHP v5 — a detailed comparison

Written 2026-08-28. Every claim below was checked against **real running software**, not
memory or docs alone: a fresh Laravel + Filament v5.7.6 install at `temp/filament-study`
(seeded with 120 products, a bulk-action-enabled table, logged in and driven live in a
browser), read against PanelKit's actual source in `packages/panel` and `packages/ui`.
Where a claim is about source rather than live behaviour, it cites `file:line` on both
sides. `temp/filament-study` is throwaway and gitignored — nothing here depends on it
surviving past this comparison.

**How to read the verdicts.** Each section ends with one line: *parity*, *ahead*, or
*behind*, and roughly by how much. Six areas came back genuinely close — PanelKit is a
close, sometimes more hardened, Filament analogue in most of its bones. Three came back
with real, actionable gaps. Nothing here is invented to justify the exercise; where
PanelKit already has the equivalent, it says so.

---

## 0. Bulk actions — the starting question, resolved

This comparison started from a question: "why does Filament offer bulk actions when
PanelKit doesn't." That premise doesn't hold up. I drove both live: selected rows,
opened the bulk-action menu, ran a form-collecting action ("Update status" → modal with
a Select field → Submit) in Filament, then did the same in PanelKit's own Clients table.

| | Filament v5 | PanelKit |
|---|---|---|
| Grouped dropdown trigger | ✅ "Bulk actions" menu (Alpine, `mousedown`-triggered) | ✅ same pattern — `packages/ui/src/components/DataTable/BulkActions.vue`'s own header comment says it's modeled on Filament's `BulkActionGroup` |
| Select-page / select-all-matching-filter banner | ✅ "Select all 120" / "Deselect all" | ✅ identical UX — `SelectionBar.vue`, verified live on PanelKit's Clients table: "3 records selected / Select all 249,999 / Deselect all" |
| Action that collects input via a form before running | ✅ modal, schema fields, Submit/Cancel | ✅ `BulkAction::form()` opens the same dialog used for record actions |
| Confirmation before destructive actions | ✅ | ✅ `destructive()`/`requiresConfirmation()`, blocks confirm if the resolved count is zero |
| **Large "select all" runs at scale** | Runs synchronously in the Livewire request unless you wire a queued job yourself — a 50,000-row "select all" can just time out | **Auto-queues** past a configurable threshold; re-derives the query at execution time with **keyset pagination**, so a shrinking result set (rows mutated mid-run) is still walked correctly — `Actions/BulkRunner.php`, tested (`BulkActionTest::test_a_shrinking_result_set_is_still_fully_processed`) |
| CSV/formula-injection sanitization on export | Not built in | Built into `BulkController::export()`, tested |
| Request can't smuggle its own mutation | N/A | Explicitly tested — form input is validated against the action's declared schema, not accepted as raw params |

**Verdict: parity, PanelKit ahead on scale-safety.** If something specific about the
dropdown still feels off after reading this, it's worth naming precisely — but
structurally, both are the same idea, and PanelKit's execution engine is the more
defensive of the two.

*One real, small find while reading the docs for this: [`docs/05-actions.md:117`](docs/05-actions.md)
shows `->ability('update')` in an example; the actual method is `->authorize('update')`
(`Actions/BulkAction.php:130`). That snippet wouldn't compile. Easy one-line doc fix.*

---

## 1. Forms & Schema Layout — **behind**, concentrated in one component

Layout primitives (`Grid`, `Section`, `Tabs`, `Wizard`, `Fieldset`) and field-level
reactivity (`live()`, `hidden()`, `afterStateUpdated()`) are at genuine parity for the
common case. The gap is concentrated in the **Repeater** and in **closure-based
visibility on layout nodes**.

| Filament v5 | PanelKit | Verdict |
|---|---|---|
| `Grid` — int or per-breakpoint column map (`schemas/src/Components/Grid.php:19`) | `Schema\Grid::columns(int)` — single int only (`packages/panel/src/Schema/Grid.php:12`) | behind (minor) |
| `Section` — heading/description/icon/collapsible, plus `aside()`/`compact()`/`divided()`/footer actions (`Section.php:45-59`) | `Schema\Section` — label/description/icon/columns/collapsible (`packages/panel/src/Schema/Section.php:13-61`) | parity on the core case |
| `Tabs` — labels/icons/badges, `persistTabInQueryString()`, vertical/scrollable overflow (`Tabs.php:138,234,246`) | `Schema\Tabs`/`Tab` — label + icon only | behind (minor) |
| `Wizard`/`Step` — description+icon, `skippable()`, `persistStepInQueryString()` (`Wizard.php:236-347`) | `Schema\Wizard`/`Step` — description+icon, **`stepRules()`** derives per-step validation from the step's own fields (`packages/panel/src/Schema/Wizard.php:32-86`) | parity, PanelKit's derived-rules touch is arguably nicer |
| `Fieldset` — `<fieldset>`/`<legend>`, `columns(2)` default (`Fieldset.php:18,41`) | `Schema\Fieldset` — label/description/columns (`Fieldset.php:25-66`) | parity |
| Field visibility: arbitrary `Closure` with `Get $get` injected (`Concerns/CanBeHidden.php:11`) | `Field::hidden()` accepts a closure, evaluated on `live()` round-trips (`Forms/Fields/Field.php:134-139`); `afterStateUpdated()` is the direct analogue (`:148-153`) | parity **on fields** |
| Layout-node visibility (`Section`/`Tabs`/`Fieldset`) — same closure mechanism | `Schema\Component::visibleWhen` only supports a single `[field, value]` equality tuple (`packages/panel/src/Schema/Component.php:40-72`) — can't condition a section on two fields or a non-equality check | **behind** |
| Repeater — drag-and-drop **and** button reordering, `addable()`/`deletable()`/`cloneable()`, `collapsible()` with collapse/expand-all, `simple()`/`table()` modes, direct `relationship()` binding (`forms/src/Components/Repeater.php`, multiple lines) | `RepeaterField` — min/max items, item label, **deliberately refuses relationship binding by design** (JSON-column only, docblock at `Forms/Fields/RepeaterField.php:17-31`); `PkRepeater.vue` now matches on drag-and-drop reorder, `collapsible()` with collapse/expand-all, and `addable()`/`deletable()`/`cloneable()` — the last of these ships with a per-row duplicate control, independent of `addable`. Remaining gap: no `simple()`/`table()` display modes. Tested both sides (`RepeaterFieldTest.php`, `PkRepeater.spec.ts`). | **behind, narrowly — one display-mode gap left** |

**Ideas worth borrowing, in priority order:**

1. Give `Schema\Component::visibleWhen` a `Closure(array $values): bool` variant so a
   `Section`/`Tabs`/`Fieldset` can be conditioned on more than one field — mirror
   `CanBeHidden.php:11`.
2. ~~Add drag-and-drop reordering to `PkRepeater.vue`~~ — ✅ done.
3. ~~Add `collapsible()`/collapse-all to `RepeaterField`~~ — ✅ done.
4. ~~Add `addable()`/`deletable()` toggles to `RepeaterField`~~ — ✅ done, `cloneable()`
   added alongside them (see priority list item 16 below).
5. Add `persistTabInQueryString()`/`persistStepInQueryString()` equivalents so a
   refresh or back-button preserves position (`Tabs.php:138`, `Wizard.php:264`).
6. `simple()`/`table()` display modes on `RepeaterField` — the one piece of the
   original Repeater gap still open. A genuinely separate, larger change (a new
   rendering mode, not an additive prop) rather than something to fold into the
   addable/deletable/cloneable pass.

**Verdict: narrowing.** Core primitives and field reactivity are solid, and the
Repeater — once the thin spot — is now at parity on reordering, folding, and
row-count control; `simple()`/`table()` modes are what's left, and are their own
scoped project rather than a quick addition.

---

## 2. Record Actions — **moderately behind**

Replicate, import, form-collecting actions, and wizard-style multi-step actions are all
at parity or independently-equivalent design. The real gaps are in **modal
customization**, **action-group nesting**, **redirect-after-run**, and
**keyboard/URL deep-linking**.

| Capability | Filament v5 | PanelKit |
|---|---|---|
| Replicate/duplicate | `ReplicateAction.php:14-152` | `Actions/ReplicateAction.php:42-153` — parity, independently arrived at the same shape (`except()`, `then()`) |
| Import (CSV/upload + mapping) | `ImportAction.php:46-80` + `Imports/Importer.php` | `Imports/Importer.php`, `CsvReader.php`, `ExcelReader.php`, opt-in via `Resource::importable()` — parity in substance |
| Plain link action, no request | `Concerns/CanOpenUrl.php:22-35` | `RecordAction::link()` renders `<a href>` with no POST (`RecordAction.php:339-344`) — parity |
| **Redirect after a `handle()` succeeds** | `Concerns/CanRedirect.php:14-55` — `successRedirectUrl()`/`failureRedirectUrl()` | **Gap.** No equivalent — only a flash toast, no "navigate here after success" |
| **Modal footer customization** | `modalFooterActions()`, `extraModalFooterActions()`, `modalSubmitAction()`/`modalCancelAction()`, `modalWidth()` — all fluent, per-action (`Concerns/CanOpenModal.php`, multiple lines) | **Gap.** `RecordAction` has `slideOver(bool)` and a fixed confirm string only; `PkModal.vue` exposes two hardcoded sizes (`'confirm'\|'form'`) and a `footer` slot a *page* fills, not something an action declares from PHP |
| Wizard-style multi-step action | `Concerns/HasWizard.php:8-64` | `ActionStep.php` + `RecordAction::steps()` (`RecordAction.php:284-320`) — parity, independently designed |
| **Action-group nesting** | `ActionGroup` can contain another `ActionGroup` (`ActionGroup.php:148`), and can render inline or as a dropdown | **Gap.** `Actions/ActionGroup.php:43-55` does not nest, and — by deliberate, documented design (`RecordActions.vue:10-18`) — **all** record actions render in one single dropdown, no inline-icon-button mode at all |
| **Keyboard shortcuts / URL deep-linking** | `HasKeyBindings.php:8-38`; query-param action mounting via Livewire `#[Url]` (`Concerns/InteractsWithActions.php:46-76`) | **Gap.** No equivalent on either axis |

**Ideas worth borrowing, in priority order:**

1. `RecordAction::redirect(string $url)` for post-`handle()` navigation — mirror
   `CanRedirect.php:50-55`. Small, high-value.
2. `RecordAction::modalFooterActions(array $actions)` / `modalWidth(string)` so a modal
   isn't stuck at two hardcoded sizes and pages stop hand-writing the `footer` slot.
3. Let `ActionGroup` nest, and give the Vue menu an optional inline-icon-button mode for
   a resource's top 1-2 actions — the component's own comment already flags "View/Edit
   costs two clicks" as a real, known cost of the current design.
4. `keyBindings()` on `RecordAction` for power-user shortcuts.
5. A lightweight `?action=&record=` query-param convention in `RecordController` for
   deep-linkable actions (PanelKit is Inertia, so there's no Livewire `#[Url]`
   shortcut — this would need its own small mechanism).

**Verdict: behind, moderately.** Not a rebuild — five additive methods and one Vue
rendering-mode change would close most of this.

---

## 3. Relation Managers — **behind**, roughly one release cycle of work

| Capability | PanelKit | Filament v5 |
|---|---|---|
| Multiple relation managers as tabs | ✅ `Resource::relations()` → tabs (`Resources/Resource.php:490,1036`) | ✅ same, plus grouped tabs via `RelationGroup::make()` |
| Attach/detach existing records | ✅ `NestedRelation::attach()`, but as a **dedicated page**, not a modal (`Http/NestedRelation.php:129-181`) | ✅ `AttachAction` — searchable picker **in a modal**, preload/multi-select/search-column config |
| **Pivot table's own extra columns** (e.g. a "role" column on a many-to-many) | **No.** Nothing in `RelationManager.php` or `NestedRelation.php` reads or writes pivot columns beyond the join itself | ✅ `AttachAction::action()` writes pivot columns on attach; pivot columns can be displayed/edited directly in the table |
| **Explicit read-only mode** | **No.** Only indirect — omit `form()`, or set abilities to something unreachable | ✅ explicit, panel-wide default: `Panel::readOnlyRelationManagersOnResourceViewPagesByDefault(true)`, denies every mutating action when on |
| Nested two levels deep | No — route building groups by immediate parent only, doesn't walk a grandparent chain | Also no (Filament's official position is the same) — **parity, not a gap** |

**Ideas worth borrowing:**

1. Pivot-column support — extend `RelationManager::form()`/`table()` (or add
   `RelationManager::pivotColumns()`) so a many-to-many relation manager can show and
   edit attributes like `role`, mirroring `AttachAction.php:112-115`. Wire through
   `NestedRelation::attach()`.
2. An explicit `RelationManager::readOnly()`, or a panel-level default matching
   Filament's, instead of the current ability-gating workaround.

**Verdict: behind.** Not architectural — the dedicated-page-not-modal attach flow is a
deliberate, documented tradeoff, not an oversight. The two gaps above are real and
worth closing; nesting depth is a non-issue since Filament doesn't do it either.

---

## 4. Plugin & Extensibility System — parity on design, behind on hook surface area

| Capability | PanelKit | Filament v5 |
|---|---|---|
| Formal plugin interface | ✅ `PanelPlugin`: `id()`, `appliesTo()`, `register()`, `getVersion()`, `panelIds()` (`Plugins/PanelPlugin.php:34-81`) | ✅ `Filament\Contracts\Plugin`: `getId()`, `register()`, `boot()` |
| What a plugin can touch | **Deliberately add-only** — a `PluginContext`, not the mutable `Panel`: can append resources/pages/widgets/menu items/routes/render hooks, cannot touch guard/tenancy/middleware (`Plugins/PluginContext.php:17-30,72-212`) | **Full access** — `register(Panel $panel)` hands over the real object; a plugin can reconfigure anything |
| Hooks/events for extending existing screens | 9 named positions, resolved to a **Vue component + props**, never raw HTML, optionally scoped to specific resources (`Plugins/RenderHooks.php:36-86`) | Dozens of positions across every panel screen, rendering arbitrary Blade/Livewire content |
| Real third-party ecosystem | **Explicitly not the goal** — docblock states this is for first-party, host-owned code, no marketplace track (`PanelPlugin.php:29-33`) | Yes — a real, large plugin ecosystem built on the unrestricted contract |
| Compatibility/versioning tooling | ✅ `getVersion()` + `CONTRACT_VERSION`, checked by `panel:doctor` (tested: `DoctorPluginCompatibilityTest.php`) | No equivalent in core |

**Idea worth borrowing:** widen `RenderHooks` positions (`Plugins/RenderHooks.php:36-64`)
to cover more surfaces — dashboard widget columns, table row actions — the current 9 is
noticeably fewer than Filament's set, while keeping the safer "component name, not raw
HTML" restriction. **Do not** copy Filament's unrestricted `Panel`-mutation model —
PanelKit's add-only boundary is a deliberate, stronger design and should stay exactly
as it is.

**Verdict: parity on contract design (PanelKit arguably safer); behind on hook count**
— about a third as many extension points, partly explained by the intentionally
narrower "no marketplace" scope.

---

## 5. Table Filters & Inline Editing — mixed, roughly parity

**Filters** — PanelKit is ahead in places, behind in one:

| Capability | PanelKit | Filament v5 |
|---|---|---|
| Select / multi-select / boolean / soft-delete | ✅ all present, tenant-scoped | ✅ all present |
| Date range | ✅ `DateRangeFilter` — 8 presets, tenant-timezone aware, exclusive end bound | No dedicated class — built by hand from `Filter` + two `DatePicker`s |
| Number range | ✅ `NumberRangeFilter` | No equivalent class |
| Advanced/custom query builder | ✅ `QueryBuilderFilter` — nested AND/OR, capped depth (5) and rules (50) | ✅ comparable `QueryBuilder` |
| Filter layout options | One layout: popover desktop / bottom sheet mobile, staged with an explicit Apply | `FiltersLayout` enum: Dropdown/Modal/AboveContent/BelowContent/BeforeContent/AfterContent/Hidden |
| **Per-tab arbitrary query filtering** | **Gap** — a `Tab` supports only one grouped column with a fixed value list | ✅ `Tab::modifyQueryUsing(Closure)` — any query modification per tab |
| Persist filters across visits (not just in-URL) | Not found beyond view-state | ✅ `persistFiltersInSession()` |

**Inline editing** — PanelKit is behind by one column type, ahead on write-path security:

| Capability | PanelKit | Filament v5 |
|---|---|---|
| Toggle / select inline cell | ✅ both, real optimistic UI with rollback on failure | ✅ both |
| **Free-text inline cell** | **Gap** — `EditableCell.vue` only implements `'toggle'\|'select'`, no text type at all | ✅ `TextInputColumn` — type, mask, prefix/suffix, rules |
| Validation + authorization on inline edit | Server-side cast validation **and** per-record re-authorization **and** a staleness/concurrency guard (`RecordController.php:534-570`) | Filament's own docblocks explicitly warn `TextInputColumn`/`ToggleColumn` "save directly without checking Model Policies — use `disabled()`" |
| Confirmation before an inline write | ✅ `EditableColumn::requiresConfirmation()` | Not found on `Editable` columns |

**Ideas worth borrowing:**

1. A `TextInputColumn`-equivalent for short free-text inline edits (reference codes,
   notes) — extend `EditableColumn`, add a third type to `EditableCell.vue:29`.
2. Give tabs an arbitrary `Closure $modifyQuery`, matching `Tab::modifyQueryUsing()`,
   while keeping the existing single-query count aggregation for the simple case.

**Verdict: parity overall**, with two small concrete gaps (inline text editing,
per-tab query scoping) balanced by PanelKit being ahead on range filters and inline-edit
authorization rigor.

---

## 6. Notifications — parity, small gaps each direction

| Capability | Filament v5 | PanelKit |
|---|---|---|
| Fluent toast builder, status helpers | ✅ | ✅ same shape |
| **Per-notification duration / persistent / custom icon-color** | ✅ `HasDuration`, `HasIcon`, `HasIconColor` | **Gap** — icon/color hard-wired per status in `Toaster.vue:68-87`; no duration control, always the vue-sonner default |
| Clickable toast actions | Full closures, confirmation, colors | `Action::make()->url()` only — needs a URL, no closure callback (consistent with PanelKit being non-Livewire, not really a gap) |
| Database/"bell" notification center | ✅ mark-read, **mark-unread**, delete, **clear all**, `simplePaginate(50)` | ✅ mark-read, mark-all-read, delete single — **no mark-as-unread, no bulk clear-all, capped at 30 rows with no pagination** |
| Unread badge | Polled every 30s | Seeded server-side, fetched on bell open — deliberate, documented trade-off, not an oversight |
| Real-time broadcast push | ✅ wired to Echo | **Gap** — PanelKit has a general Presence/Live broadcast system but it isn't wired to notifications |
| **Per-user notification preferences** | Not in core | ✅ PanelKit-only — per-category toast/digest toggles, enforced server-side |
| **Alerts vs. notifications separation** | Not modeled | ✅ PanelKit-only — a distinct recomputed `Alert`/`AlertRule` system with no read state, kept apart from persisted notifications |

**Ideas worth borrowing:**

1. `->duration()`/`->persistent()` on `Notifications/Notification.php`, threaded through
   `toArray()` to `Toaster.vue`'s `showFlashToast()`.
2. `markUnread`/`clearAll` on `NotificationController.php` — both are near-trivial.
3. Replace the hard 30-row cap with real pagination (`simplePaginate`-style).
4. Per-notification icon/color override, useful once plugins start firing their own
   toasts.

**Verdict: parity**, slightly behind on toast-builder richness and bell
pagination/mark-unread/clear-all, ahead on preferences and the Alerts split.

---

## 7. Widgets & Dashboard — **PanelKit ahead**

The one area where PanelKit isn't just catching up.

| Capability | Filament v5 | PanelKit |
|---|---|---|
| Stat/chart/table widget types | ✅ `StatsOverviewWidget`, `ChartWidget` (8 chart-type subclasses), `TableWidget` | ✅ `StatWidget`, one `ChartWidget` class covering **20** `type()` values including heatmap/rankedBar/segments/map/calendar/barcode/logtail — a superset of chart *kinds* |
| **Column span** | `int\|string\|array` with responsive breakpoints, plus `columnStart` | **Gap** — plain int only; user-customizable layout clamps to span 1 or 2 |
| Per-widget sort order | ✅ `getSort(): int` | **Gap** — relies on declaration order only |
| Per-resource header **and footer** widgets | ✅ both hooks | Header only (`Page::headerWidgets()`) — no footer hook, though trivial to add given the shared `WidgetSet::props()` already takes a prefix |
| Visibility/auth | `canView()` static | `ability()`/`visibleTo()`, resolved **server-side before the query is even built** — arguably stronger than Filament's, where a misused `canView()` can still let a Livewire mount through |
| **Real-time push** | Polling only, fixed `'5s'` | ✅ ahead — `CanPoll` supports both polling **and** an Echo/Reverb live-channel push with auto-fallback |
| **End-user drag/hide dashboard layout, persisted** | **Not in core at all** | ✅ ahead — opt-in `Panel::userDashboards()`, drag to reorder, widen/narrow, hide, persisted per-user |
| Dashboard-wide cross-widget filter | Per-widget filter schema only | ✅ ahead — `DashboardFilters` overrides every chart's own period selector at once |

**Ideas worth borrowing (the short list, since this area is mostly ahead):**

1. Responsive/array column spans (`'full'`/breakpoint object), since the current
   int-only `span()` can't make one widget fill a row on a 3-4 column grid.
2. Explicit `sort()` per widget, useful once widgets come from multiple
   discovered/plugin sources.
3. A footer-widgets hook to pair with the existing header one — small addition given
   `WidgetSet::props()` already supports a prefix parameter.

**Verdict: PanelKit is ahead**, net — two features Filament core lacks entirely
(persisted end-user dashboard rearranging, live-push widgets) outweigh one narrow gap
(responsive column spans).

---

## Priority list, across everything above

Ranked by (impact if fixed) × (how small the fix is), highest first:

| # | Item | Area | Est. size | Status |
|---|---|---|---|---|
| 1 | `RecordAction::redirect()` after success | Record Actions | small | ✅ done — `Actions/RecordAction.php`, `ReplicateAction.php`, wired through `RecordController` and all three Vue call sites, tested (`RecordActionRedirectTest.php`), docs updated |
| 2 | Inline text-edit column (`TextInputColumn` equivalent) | Table editing | small–medium | ✅ done — `Tables/Columns/TextInputColumn.php`, `EditableCell.vue` gains a `text` type, wired in `ResourceIndex.vue`, tested both PHP (`EditableColumnTest.php`) and Vue (`EditableCell.spec.ts`), docs updated |
| 3 | `markUnread`/`clearAll` + real pagination on the bell | Notifications | small | ✅ done — `NotificationController.php` (`markUnread`, `clearAll`, `simplePaginate`), routes, `PanelNotificationBell.vue` (load more, per-note unread, clear all with confirm), tested both sides |
| 4 | Drag-and-drop + collapse on `PkRepeater` | Forms | medium | ✅ done — additive drag handle (buttons kept), `collapsible()` + collapse-all, tested both sides. Caught a real `!from`-falsy-zero bug in the drag handler along the way |
| 5 | Closure-based `visibleWhen` on layout nodes (`Section`/`Tabs`/`Fieldset`) | Forms | small–medium | ✅ done — `Component::visible(Closure)`, consolidated 3 duplicate `visibleWhen()` copies (Section/Card had their own) into the base class, extended `conditionMet()` to 6 node kinds that never checked it before, wired the `live()` round-trip overlay. Caught a real bug: `spl_object_id()` keys were silently renumbered by `[...$a, ...$b]` spread |
| 6 | `modalFooterActions()`/`modalWidth()` on `RecordAction` | Record Actions | medium | ✅ done, scoped down — `modalWidth()`, `submitLabel()`, `cancelLabel()` on `RecordAction`; `PkModal` gains `sm`/`lg`/`xl` sizes alongside the existing `confirm`/`form`. Did not implement arbitrary extra footer actions (full `modalFooterActions()`) — that needs its own click-handler/POST wiring, scoped out as a separate, larger item |
| 7 | Per-tab arbitrary query modifier | Table filters | small–medium | ✅ done — `Tabs::modifyQuery($value, Closure)`, reached via `Table::tabs($column, $values, ?Closure $configure)`. Preserves "N tabs must never produce N queries" for every unmodified tab (still one grouped aggregate); a modified tab gets its own dedicated `count()`. Caught two real bugs: `ListQuery::tabs()` was rebuilding a fresh, unconfigured `Tabs` instance from `$column`/`$values` instead of taking the caller's configured one, silently dropping every modifier; and `all` summed tab counts, which over-reports once a modifier can overlap a plain tab's rows — fixed to a true `COUNT(*)`, paid only when a modifier is declared |
| 8 | Pivot-column read/write on relation managers | Relation Managers | medium | ✅ done, scoped down — `Resource::pivotColumns(): array` (Field[]) on a BelongsToMany nested resource. Write side: the attach page collects them once and applies the same values to every id in that submission (`NestedRelation::attach($class, $parent, $ids, $pivot)`); an auto-registered `edit-pivot` `RecordAction` (alongside `detach`) edits them afterwards via `updateExistingPivot()`. Did not implement automatic pivot-column display on the nested list — that needs the list query to join the pivot table, which `RelationManager::rows()`'s BelongsToMany branch does not do; scoped out as a separate, larger change |
| 9 | Explicit `RelationManager::readOnly()` | Relation Managers | small | ✅ done, scoped to what a relation manager actually owns — `readOnly()` forces `canInlineCreate()`/`hasForm()` false (enforced server-side too, since `storeRelation()` already gates on `canInlineCreate()`) and nulls `canCreate`/`canEdit`/`inlineCreate`/`form` in `toSchema()`. Does not lock the nested resource's own dedicated pages (attach/detach/edit-pivot), which resolve against that resource's own abilities independently of any tab pointing at them — documented, not silently assumed |
| 10 | `ActionGroup` nesting + optional inline-button mode | Record Actions | medium–large | ❌ deliberately not implemented — both halves directly contradict an existing, written design decision rather than filling a gap. `ActionGroup.php`'s own class docblock: "A GROUP IS A SECTION, NOT A SUBMENU... a heading with items beneath it costs one line of height and no aiming" - nesting groups inside groups is exactly the flyout-in-a-row-menu pattern that note argues against. `RecordActions.vue`'s docblock is more pointed still: an inline-button mode duplicating menu items was the ORIGINAL implementation, was explicitly reverted ("ONE SURFACE, AND EVERY ACTION APPEARS EXACTLY ONCE... The duplication was ours, not a convention we had inherited"), with the cost of the revert (View/Edit now cost two clicks) stated and accepted. Reintroducing either would not be filling a gap, it would be undoing two decisions this codebase already made and documented its reasons for. Skipped rather than forced in |
| 11 | Toast `duration()`/`persistent()`/icon-color override | Notifications | small | ✅ done — `Notification::duration(ms)`, `persistent()`, `iconColor($color)` (same 6-colour palette as `RecordAction::color()`), serialized onto the toast payload. Client (`notificationActions.ts`'s `showFlashToast()`) maps `persistent` to sonner's `duration: Infinity` (wins over an explicit `duration`), and `iconColor` to a per-toast custom icon vnode recoloured independently of `type` - kept independent of `type` deliberately, since `type` is also what the database bell row's severity derives from |
| 12 | Widget responsive column spans + `sort()` | Widgets | small | ✅ done — new `Widgets\HasLayout` trait (`span(int\|array)`, `sort(int)`) applied to `StatWidget`/`ChartWidget`/`TableWidget`, replacing 3 independent copies of a plain-int `$span`; the 4 chart-wrapping widgets (`MapWidget`/`CalendarWidget`/`BarcodeWidget`/`LogTailWidget`) delegate both to their inner `ChartWidget`. `WidgetSet::props()` now stable-sorts by declared `sort()` before building the per-kind arrays. Client: `packWidgetColumns()` (used by `PanelWidgets.vue`'s two-column chart packing) collapses a responsive span to its `lg` value for the wide/not-wide decision it makes; did not redesign it or the dashboard's own draggable-layout `span` toggle into a full per-breakpoint grid, which would be a much larger change than "small" scoped for |
| 13 | Wider `RenderHooks` surface | Plugins | medium | ✅ done — found and fixed a real, silent gap first: `FORM_BEFORE`/`FORM_AFTER`/`DASHBOARD_BEFORE` were valid declared positions (`RenderHooks::isPosition()` accepted them at plugin registration) that no controller ever sent to the client and no page ever mounted a `<RenderHook>` for - a plugin naming one rendered nowhere, silently, exactly the failure mode the class's own docblock says a named-position system exists to prevent. Wired `renderHooks` into `ResourceController::create()`/`edit()` + `ResourceForm.vue` (form.before/after), and into `PageController::show()` + `PanelDashboard.vue` (dashboard.before, plus a new `DASHBOARD_AFTER` for symmetry with every other before/after pair). Verified end-to-end with a fixture plugin, not just serialization |
| 14 | `keyBindings()` on `RecordAction` | Record Actions | small | ✅ done, scoped to the open menu — `RecordAction::keyBindings(['mod+d'])`, serialized onto the action. Not a global/page-wide shortcut: a list shows many rows at once, so there is no single unambiguous target for a global binding. Scoped instead to the row menu that is already open (`RecordActions.vue`'s existing arrow-key navigation is the same idea) - one keystroke instead of arrow-then-Enter. `mod` matches Cmd or Ctrl. A bound link action navigates same-tab rather than going through `run()`, matching what its `<a>` would have done and never emitting `run` for a link (which the component never wires to `run()` from a click either) |
| 15 | Fix `->ability()` → `->authorize()` in `docs/05-actions.md` | Docs | trivial | ✅ done — both occurrences fixed |
| 16 | `addable()`/`deletable()`/`cloneable()` on `RepeaterField` | Forms | small | ✅ done — three new methods, UI-only like `itemLabel()` (nothing here changes `typeRules()`; `minItems()`/`maxItems()` remain the only server-enforced bound, tested explicitly). `PkRepeater.vue`: Add hides behind `addable`, each row's remove control behind `deletable`, and a new per-row duplicate control appears behind `cloneable` - gated on `atMax` (a clone is still a new row) but deliberately **not** on `addable`, since cloning is its own declared capability and the two are meant to be combinable independently in either direction. Wired into `ClientResource`'s existing "Other contacts" repeater (`cloneable()`) and verified live: filled a row, clicked Duplicate, confirmed the new row carried the same values, confirmed nothing persisted until an explicit save. Closes all of the original Repeater gap except `simple()`/`table()` display modes (see item 6 in section 1 above) |

**What NOT to change:** the plugin system's add-only `PluginContext` boundary (safer
than Filament's, deliberately), the relation-manager dedicated-page attach flow
(documented tradeoff), and the notification-preferences/Alerts split (PanelKit-only
strengths). Bulk actions need no work at all — the premise that started this
comparison doesn't hold.
