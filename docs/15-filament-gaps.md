# Filament recompare (post v1.0.87)

Short gap notes after Scalar API docs, maps, developer toolkit surfaces,
barcode/log-tail widgets, kit showcase, ColumnGroup/TagsColumn, outbound
webhooks, workflows, comments, dashboard DnD, sidebar families, conditional
social, and passwordless magic link. This is not a Livewire parity checklist.
PanelKit stays Vue + Inertia.

## Where we match or beat Filament today

| Area | PanelKit |
| --- | --- |
| Install (GitHub-only) | VCS `Alxtexh/panel` + `panel:install` (auth + first Administrator + `SharePanelProps` on web) |
| Empty canvas | Settings shell, blank dashboard, kit Profile/Security, Directory chrome |
| CRUD IA | Dedicated create/edit/view pages, nested resources, attach pages |
| Tables | Keyset lists, filters, ColumnGroup, TagsColumn, relation filters in TableShell |
| Forms | Schema fields including MapField, BarcodeField, relationship selects, createOption |
| Built-in apps | Scalar `apiDocs()`, outbound `webhooks()` (CRUD + ping + delivery log), `logTail()`, `kitShowcase()`, media library with signed preview/download URLs |
| Workflows | Resource states, transitions, visual board, status history ([16. Workflows](16-workflows.md)) |
| Comments | Opt-in record threads + @mentions ([17. Comments](17-comments.md)) |
| Dashboards | Deferred widgets, Echo/poll, user DnD layout (`Panel::userDashboards()`), map/calendar/barcode/log-tail cards |
| Auth | Auth families, conditional `socialite()`, opt-in `passwordless()` / magic link |
| Sidebar | Layout families via `Panel::sidebarLayout` (incl. accordion, file-tree, calendar, dialog) |
| Ops / doctor | Backups, logs, monitoring, search-index doctor, deny-by-default abilities |
| Design freeze | `PAGE_SHELL` / `FORM_MEASURE`; `make check-page-shell` blocks congested `mx-auto` + `max-w-*` |

## Where Filament is still ahead (honest)

| Gap | Notes |
| --- | --- |
| Ecosystem / plugins | Large marketplace; we stay GitHub-only kit + `PanelPlugin` |
| In-place form feel | Livewire mutates without full Inertia visits; we keep dedicated pages on purpose |
| Infolist / field breadth | Filament still has more specialty entries; we add when a host needs them |
| Docs / training data | Agents still invent Filament verbs; keep `panel:blueprint` and these docs honest |
| Slide-overs / dense modals | Polished for **secondary** actions; create/edit/view stay pages by default |

## Intentional non-goals

- Livewire admin UI or a second runtime beside Inertia
- Packagist / npm registry for consumers (Composer VCS + bundled kit assets)
- ISP / Nairobi Fibre domain inside the package
- Auto-granting abilities (deny-by-default stays)

## Design freeze enforcement

```bash
make check-page-shell
# or
scripts/check-page-shell.sh
scripts/check-page-shell.sh --self-test
```

Wired into `make release-check` with client mirror sync and package Pest.

## Suggested next (not in this tag)

- More specialty infolist / field entries as hosts ask for them
- Plugin marketplace is out of scope; keep documenting `PanelPlugin` instead
- Intentional PanelKit marketing landing (not ported templates)
## Landed since v1.0.88

| Tag | What |
| --- | --- |
| v1.0.89 | Full social provider catalogue on login (incl. Discord), icons, env stubs |
| v1.0.90 | Environment banner, Quick Create, RatingField / RatingColumn |
| v1.0.91 | PhoneField, IconPickerField, TreeSelectField |
| v1.0.92 | Record presence (who's viewing), opt-in |
| v1.0.95 | Table chrome Pro: sticky first column, resize, table/cards layouts |
| v1.0.96 | Kanban via `Resource::board()`, `ResourceKanban`, board-move |
| v1.0.97 | `Panel::userDashboards()` DnD chart layout into appearance JSON |
| v1.0.98 | Gate `dashboardLayout` writes; board via `toListQuery`; nested board URLs; board HTTP Pest |
| v1.0.100 | Auth design families (`Panel::authFamily`) + Auth samples gallery |
| v1.0.101 | Sidebar design families (`Panel::sidebarLayout`) + Sidebar samples gallery |
| v1.1.0 | Minor release: auth families + sidebar layout families (same work as v1.0.100 / v1.0.101; prefer this tag going forward) |
| v1.2.0 | Resource workflows: states, transitions, audit entries |
| v1.2.5 | Visual workflow board and status history |
| v1.3.0 | Remaining sidebar families: accordion, file-tree, calendar, dialog |
| v1.3.2 | Full dashboard DnD: `dashboardLayout.widgets` (order, span, hidden) for stats, charts, tables |
| v1.4.0 | Built-in public landings (parallel track; kit landing variants) |
| v1.4.1 | Media library signed preview/download URLs; `BarcodeWidget` / `LogTailWidget`; developer apps chrome (API keys + webhooks toward TableShell) |
| v1.4.2 | Replace inspired marketing/shadcn landings with ported SFCs from the offered GitHub templates |
| v1.4.3 | Verbatim vue-js / shadcn-vue landing ports |
| v1.4.4 | Remove ported vue-js / shadcn-vue landings; keep aurora, editorial, console |
| v1.4.15 | Wider create/edit/view `FORM_MEASURE` (`max-w-7xl`, Filament default) |
| v1.4.16 | Row action menu icons: `resolveActionIcon` defaults for recharge / impersonate / delete |
| v1.4.17 | Slide-over / dense modal polish for secondary actions; overlay design-freeze tokens; page-first CRUD unchanged |

## Versioning (from v1.1.0)

Feature families and public API additions ship as **minor** releases (`1.1.0`, `1.2.0`, `1.3.0`, ...).
Standards fixes and patches stay on the current minor (`1.1.x`, `1.2.x`).
The historical tags `v1.0.100` and `v1.0.101` remain published; `v1.1.0` is the
canonical minor that covers both auth and the first sidebar layout families.
`v1.3.0` adds accordion / file-tree / calendar / dialog.
`v1.4.0` is landings (parallel). `v1.4.1` is media signed URLs, barcode/log-tail
widgets, and developer chrome. `v1.4.2` / `v1.4.3` briefly shipped ported
vue-js and shadcn-vue templates; `v1.4.4` removes those ports and keeps the
original aurora / editorial / console compositions.
