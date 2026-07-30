# Design rules

Six rules, each earned by a screen that broke it. Every screen in the panel —
package pages, playground pages, generated portals — follows all six. A new
screen that breaks one is a bug, the same as a failing test.

Why this file exists: the panel's screens were built over months, and each one
decided for itself where a button goes. They disagreed. The Clients header had
one button at the left, one in the centre, one at the right; the repeater
stacked three inputs as three bordered cards with five controls each; the table
floated its own toolbar above it as a separate object. None of those were
decisions — they were the absence of one. These are the decisions.

---

## 1. Actions live in one group, at the trailing edge of their container

Never one left, one centre, one right. A header is:

```
[ title + subtitle ]  ……………………  [ action, action, PRIMARY ]
```

which in markup means the header row has exactly **two** flex children — the
identity block and the action group:

```html
<div class="flex items-start justify-between gap-3">
    <div><!-- title, status pill, purpose line --></div>
    <div class="flex shrink-0 items-center gap-2"><!-- actions --></div>
</div>
```

**The failure this prevents:** `justify-between` distributes *every* child, so
a row with four children scatters them across the full width. That is not a
style choice anyone made — it is what the browser does when nobody groups.

## 2. Primary action last

Within the action group, secondary actions (`outline` / `ghost`) come first and
the one primary action sits at the outside edge, where the eye lands at the end
of the row. One primary per surface; two filled buttons side by side is a
question the screen is asking the operator instead of answering.

## 3. A control that toggles a mode is an icon, not a word

Words are for actions that navigate or commit: "New Client", "Save", "Import".
Modes — reorder, filter, choose columns, density — are icon buttons with a
tooltip, an `aria-label`, and a visible pressed state while the mode is active.

They also live **with the thing they affect** (rule 4), not in the page header:
a reorder toggle changes how the table behaves, so it sits in the table's
toolbar beside Filters and Columns, which already follow this rule.

## 4. A table owns its own controls

Search, tabs, filters, columns, reorder, selection and pagination belong to the
table's card — one border around the whole object, `divide-y` between the
bands, no gaps:

```
┌──────────────────────────────────────┐
│ tabs                                 │
│ toolbar (or selection bar)           │
├──────────────────────────────────────┤
│ header row                           │
│ rows…                                │
├──────────────────────────────────────┤
│ pagination                           │
└──────────────────────────────────────┘
```

A toolbar floating above the table as its own card reads as a separate widget
that happens to be nearby. The controls plainly belonging to the data they act
on is what makes the screen self-explanatory.

## 5. No dead controls

A select with one option, a button that is disabled in every reachable state, a
counter nobody can act on ("3 of 6"), an empty section heading: remove it. If a
limit matters to the operator, say it once in prose (from the PHP definition,
so it cannot drift), not as a live control that cannot do anything.

## 6. Repeating inputs are rows, not cards

A repeater item is one row: ordinal badge, the input(s), a remove button. Not a
bordered card with its own heading, its own copy of the field label, and a
strip of move buttons. Three short instructions should cost three rows plus an
Add button — about the height of three inputs — not a column of five-control
cards taller than the rest of the form.

When the repeater has exactly one child field, the per-row label is dropped
entirely: the section heading already names it, and "Instruction" three times
above three inputs says nothing the first one didn't.

---

## The sweep

Every screen, checked against all six rules. Ticked with the date it was
brought into line (or confirmed already conforming). A screen changed after
its tick gets re-checked.

| Screen | Status |
| --- | --- |
| Resource index (generic) | |
| Resource create/edit form | |
| Resource view page | |
| Dashboard | |
| Trash | |
| Backups | |
| Backup settings | |
| Monitoring | |
| Logs explorer | |
| Documents designer | |
| Mail | |
| Chat | |
| Activity | |
| Users | |
| Roles & permissions | |
| Announcements | |
| Custom fields | |
| Settings index | |
| Help / FAQ / About / What's new | |
| Generated portals (reseller, platform) | |
