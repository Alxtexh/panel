# Design layout freeze

Admin screens in this kit follow a small set of layout tokens. Treat a
congested, centred content column as a regression, not a taste choice.

## Tokens

| Constant | Meaning |
| --- | --- |
| `PAGE_SHELL` | Full-bleed content padding inside the main pane (`w-full min-w-0` + horizontal padding). Default for list, view, settings, and `make:panel-page` screens. |
| `PAGE_SHELL_STACK` | Same as `PAGE_SHELL` with vertical rhythm between sections. |
| `PAGE_SHELL_COMPACT` | Tighter padding for dense chrome (record view). |
| `FORM_MEASURE` | Optional **left-aligned** field column (`w-full max-w-5xl`). No `mx-auto`. Use inside a shell when a reading measure helps create/edit forms. |
| `CATALOGUE_CONTAINER` | `@container min-w-0` ancestor for catalogue / settings card grids. Column counts come from container queries, not viewport guesses. |

Import them from `@alxtexh-enterprise/panel` (`pageShell.ts`, `catalogueGrid.ts`).

## One-card TableShell

Lists and relation panels share **one** card: tabs, title, toolbar, rows, and
pagination live inside `TableShell`. Do not stack sibling bordered cards for
toolbar + table + pager. Filters on relation tabs reuse the same toolbar
patterns as the resource index.

## Forbidden by default

- Wrapping admin pages in `mx-auto` + `max-w-*` (skinny centred column).
- Inset hero cards or multi-card chrome for ordinary CRUD.
- Inventing a second page width system beside `PAGE_SHELL` / `FORM_MEASURE`.

## Allowed narrow centres

Login, onboarding, marketing / landing, and intentional dialogs may be narrow.
Appearance `contentLayout: 'centered'` is an **opt-in** host preference, not the
kit default.

## Density

Appearance density defaults to **comfortable**. **Compact** tightens
`--pk-row-padding` (table rows) and `--pk-form-gap` (form stacks). Prefer those
CSS variables over hard-coded `gap-4` / `py-2.5` when adding new chrome.

## Checklist before merging layout work

1. First viewport of an admin screen still fills the pane after removing nav.
2. No new `mx-auto max-w-*` on resource, settings, or kit app pages.
3. Tables / relations still sit in a single `TableShell`.
4. Catalogue grids sit under `CATALOGUE_CONTAINER`.
5. `make check-page-shell` is green (also part of `make release-check`).

## CI / maintainer gate

```bash
make check-page-shell
scripts/check-page-shell.sh --self-test
```

Scans `packages/ui/inertia` layouts and pages. Allow-listed: auth, onboarding,
landing, print, errors, support reading pages, and `BillingSuspended`. Everything
else that pairs `mx-auto` with `max-w-*` fails the gate.

## Demo UI must match the published kit

The playground Vite-aliases `packages/ui` source. A polished demo can therefore
drift from what Composer installs (`packages/panel/resources/client`). Before a
release tag:

1. `make sync-client` (rebuild kit dist and mirror into the PHP package)
2. Rebuild playground assets when host pages changed
3. `make release-check` (`check-client` + `check-page-shell` + package Pest)

If those disagree, ship the kit half first. Do not tag a demo that only looks
right through the source alias.

## Sidebar chrome families

`Panel::sidebarLayout()` (alias `sidebarVariant()`) picks inset, edge-flush,
floating, icon-rail, or site-header chrome. See
[Pages and panels](07-pages-and-panels.md#sidebar-design-families) for the
shadcn-vue mapping table. Default remains `inset`.

Across every family the same primary nav and the same footer support links
(Help, FAQ, What's new, About) render from `AppSidebar`. Only chrome moves:

| Family | Footer support nav | Account menu |
| --- | --- | --- |
| `inset` (default) | Secondary group above user row, separator when expanded | `SidebarMenuButton` in footer |
| `sidebar` / `floating` | Same footer stack, variant changes rail shape only | Same |
| `icon` | Icons + tooltips when collapsed; labels when expanded | Avatar-only trigger when collapsed |
| `header` | Compact Help dropdown in the rail footer | Avatar in the inset top bar (`TopNavUser`) |

The inset top bar (`AppSidebarHeader`) always keeps search, quick create,
notifications, theme, and the rest. The `header` family adds a second sticky
site header with brand and search above the rail, moves the account menu into
the inset top bar, and drops the labeled support group plus sidebar logo so the
rail is primary navigation only. It must not replace or hide the inset header row.

## Future (not in scope)

Marketplace packaging and Livewire-based admin UIs are explicitly out of
scope for this kit. Showcase stays kit-only Inertia + Vue; third-party
examples belong as plugins that register through `PanelPlugin`, not as a
second UI runtime inside core.
