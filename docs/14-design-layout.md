# Design layout freeze

Admin screens in this kit follow a small set of layout tokens. Treat a
congested, centred content column as a regression, not a taste choice.

## Tokens

| Constant | Meaning |
| --- | --- |
| `PAGE_SHELL` | Full-bleed content padding inside the main pane (`w-full min-w-0` + horizontal padding). Default for list, view, settings, and `make:panel-page` screens. |
| `PAGE_SHELL_STACK` | Same as `PAGE_SHELL` with vertical rhythm between sections. |
| `PAGE_SHELL_COMPACT` | Tighter padding for dense chrome (record view). |
| `FORM_MEASURE` | Optional **left-aligned** field column (`w-full max-w-7xl`, Filament-default content width). No `mx-auto`. Use inside a shell for create/edit/view **pages**. |
| `OVERLAY_FORM_MEASURE` | Field column inside `PkSlideover` / dense `PkModal` (`w-full min-w-0`). Do not put page `FORM_MEASURE` (`max-w-7xl`) inside an overlay. |
| `SLIDEOVER_BODY` | Default body padding for `PkSlideover` when `padded` is true. |
| `SLIDEOVER_WIDTH` | Shared `sm` / `md` / `lg` / `xl` width presets (`w-full` + `max-w-*`) for mobile-first slide-overs. |
| `MODAL_PANEL` / `MODAL_PANEL_FORM` | Dense centred modal shell sizes (`confirm` vs `form`). |
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
- Using page `FORM_MEASURE` inside slide-overs or dense modals (use `OVERLAY_FORM_MEASURE`).
- Making create / edit / view default to modals (pages stay default; overlays are secondary).

## Slide-overs and dense modals (secondary only)

| Surface | Component | Notes |
| --- | --- | --- |
| Filters, notifications, inspect drawers | `PkSlideover` | Sticky header/footer, body scrolls, focus trap, `busy` blocks dismiss |
| Confirmations (delete, bulk) | `PkModal` `size="confirm"` | Short copy, sticky actions |
| Record action forms, createOption, import | `PkModal` `size="form"` | Dense field stack, not a page |
| Opt-in CRUD modal | `ResourceCrudModal` via `createUsing` / `editUsing` / `viewUsing('modal')` | Slide-over `size="xl"`; default remains `page` |

Create, edit, and view stay dedicated pages unless a resource opts into modal
presentation. See [Actions](05-actions.md) and [Resources](02-resources.md).

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

## Status colour tokens

`PkBadge` variants `success` / `warning` / `info` need matching CSS variables in
the host stylesheet (`resources/css/app.css`), the same way `destructive`
already does:

| `@theme` | `:root` / `.dark` |
| --- | --- |
| `--color-success` | `--success`, `--success-foreground` |
| `--color-warning` | `--warning`, `--warning-foreground` |
| `--color-info` | `--info`, `--info-foreground` |

Without the `@theme` registrations, Tailwind v4 never emits `bg-success` (and
friends), so schema-driven badges render as plain text. Values match the
playground palette and must stay fixed (not tenant-branded). Fresh installs get
them from the published stub; older hosts: `php artisan panel:update`.

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
floating, icon-rail, site-header, accordion, file-tree, calendar, or dialog
chrome. See [Pages and panels](07-pages-and-panels.md#sidebar-design-families)
for the shadcn-vue mapping table. Default remains `inset`.

Across every family the same primary nav and the same footer support links
(Help, FAQ, What's new, About) render from `AppSidebar`. Only chrome moves:

| Family | Footer support nav | Account menu |
| --- | --- | --- |
| `inset` (default) | Secondary group above user row, separator when expanded | `SidebarMenuButton` in footer |
| `sidebar` / `floating` | Same footer stack, variant changes rail shape only | Same |
| `icon` | Icons + tooltips when collapsed; labels when expanded | Avatar-only trigger when collapsed |
| `header` | Compact Help dropdown in the rail footer | Avatar on the sticky site header (`TopNavUser`) |
| `accordion` | Same footer stack as inset; Plus/Minus group triggers + search | Footer |
| `file-tree` | Same footer stack; folder / file tree for groups | Footer |
| `calendar` | Compact Help dropdown | Rail header (`headerUser`), brand hidden |
| `dialog` | Same footer stack inside the overlay sheet | Footer; rail starts closed (offcanvas) |

The inset top bar (`AppSidebarHeader`) keeps breadcrumbs, quick create,
notifications, theme, and the rest. The `header` family adds a sticky site
header with brand, search, lock, and the account menu above the rail, and drops
the labeled support group plus sidebar logo so the rail is primary navigation
only. It must not replace or hide the inset header row, and it must not leave
the avatar only on a nested inset bar while the site header looks empty.

## Future (not in scope)

Marketplace packaging and Livewire-based admin UIs are explicitly out of
scope for this kit. Showcase stays kit-only Inertia + Vue; third-party
examples belong as plugins that register through `PanelPlugin`, not as a
second UI runtime inside core.
