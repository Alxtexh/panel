# Plan: a foundation portal that comes up looking exactly like the demo

Written to be handed to an agent on its own. Everything below was verified
against the running application on 2026-08-08, not inferred from documentation.

---

## 0. State of the machine (done, no work needed)

The demo runs. Four breakages were fixed to get there, all from the tree having
been copied from a Linux machine and never re-installed on Windows:

| Was broken | Fixed by |
|---|---|
| Deps need PHP ≥ 8.4.1, machine had 8.3.16 | PHP 8.4.24 (TS, VS17) installed at `C:\laragon\bin\php\php-8.4.24-Win32-vs17-x64`, `php.ini` ported, 42 extensions load. 8.3 untouched |
| `vendor/panelkit/panel` and `node_modules/@alxtexh-enterprise/panel` were **empty dirs** (flattened symlinks) | Junctions, then `npm install` relinked properly |
| Every native binary was `linux-x64` — no `vite.cmd`, no win32 rollup/oxide/lightningcss | `npm install` on Windows |
| Vite died calling `php artisan wayfinder:generate` (found PHP 8.3 on PATH) | Put 8.4 ahead on PATH when launching Vite |

Start it with:

```bash
export PATH="/c/laragon/bin/php/php-8.4.24-Win32-vs17-x64:$PATH" && cd apps/playground && npm run dev
```

and `php artisan serve` alongside. Sign in `dev@panelkit.test` / `password`.

**Two defects found in passing, not yet fixed** — both belong in Phase 4:

1. `DoctorCommand::checkSomebodyCanOpenThePanel()`
   (`packages/panel/src/Commands/DoctorCommand.php:916`) runs
   `$model::query()->whereHas('roles')->count()`. Spatie teams are **on**
   (`permission.teams = true`, team key `tenant_id`), so with no team resolved
   in a CLI run the relation is constrained to a null team and the count is
   always 0. Proven: the pivot holds a row, `whereHas('roles')` returns 0.
   Doctor therefore reports "nobody can open the panel" on a healthy install —
   a *false alarm from the check that exists to catch silent failure*.
2. The Dusk suite renders a blank page under ChromeDriver on Windows. The same
   Chrome build, given Dusk's exact flags but launched directly, renders the app
   correctly, and the app renders correctly in an ordinary browser against the
   very same Dusk server and database. So it is ChromeDriver-specific, not the
   application. `scripts/shots.sh` (added) takes ChromeDriver out of the path.
   `tests/DuskTestCase.php` was given the Windows Chrome globs it was missing.

---

## 1. The actual problem

**A generated panel does not look like the demo.** Not "looks like it with less
data" — it is a *different shell*.

| | Demo (`/dashboard`) | `make:panel` portal (`/shell-preview`) |
|---|---|---|
| Frame | app `AppLayout` → `AppSidebarLayout` | published `PanelLayout` → `PanelShell` |
| Sidebar | package `AppSidebar.vue` — **508 lines** | package `PanelSidebar.vue` — **191 lines** |
| Nav | grouped, collapsible, flyouts when railed | one flat list |
| Dashboard entry | yes | no |
| Help / FAQ / What's new / About | `NavFooter`, bottom of sidebar | **absent** |
| Account menu | `NavUser`, **bottom of sidebar**, rich | `PanelAccountMenu`, **top-right header**, 4 items |
| Header | search, AI, bell + badge, palette | search, bell, theme toggle |
| Also | bottom nav, skip link, ARIA live region, impersonation banner, toaster, tenant theming | impersonation banner, bottom nav |

`UI_FOUNDATION.md` predicted this exactly: *"duplicated copies drift, and drift
is invisible until the day two screens disagree in front of a customer."* Two
sidebars exist; they have disagreed.

### Three distinct causes — fix all three or the gap stays

**(a) Two shells.** `PanelShell.vue:31,133,151` renders `PanelSidebar`. The demo
never goes near `PanelShell`: `AppSidebarLayout.vue` mounts the app's
`AppSidebar.vue` (21 lines), which wraps the package's rich `AppSidebar.vue`
(508 lines) and slots in account-menu items. Everything a generated panel is
missing already exists in the package — it is simply not the component
`PanelShell` reaches for.

**(b) Support links are suppressed outside the default panel — on reasoning that
is now stale.** `AppSidebar.vue:157`:

```js
const supportNavItems = computed<NavItem[]>(() =>
    panelHome.value.isDefault
        ? [ Help, FAQ, What's new, About ]
        : [],   //  ← every generated portal
)
```

The stated reason is that these are routed at the root, so a portal offering
them is a portal you leave by clicking Help. **That is no longer true.**
`route:list` shows `platform/help`, `platform/faq`, `platform/about`,
`reseller/help`, `reseller/faq`, `reseller/about`, `client/help`, `client/faq`,
`client/about` all mounted. The routes exist per panel; only the *hrefs* are
hardcoded to `/help`. Genuinely root-only: `whats-new`.

**(c) The rich account dropdown lives in the app, not the package.**
`apps/playground/resources/js/components/UserMenuContent.vue` is **299 lines**
(Settings, User management, Backups, Logs, Monitoring, Activity, Trash, Lock,
Sign out) and is slotted in by the app's 21-line `AppSidebar.vue`. A generated
panel gets `DefaultAccountMenuItems.vue` — **71 lines**: Profile, Security,
Help, Sign out. Several of the demo's items are additionally gated on
`isApplicationPortal`, the same default-panel-only pattern as (b).

---

## 2. What "a new panel" must produce

A fresh `make:panel` portal, with zero hand-editing, comes up as:

- The **same shell as the demo**, pixel for pixel — grouped collapsible sidebar,
  flyouts when railed, mobile drawer, bottom nav on handsets, skip link, live
  region, impersonation banner, toaster, tenant theming.
- **Sidebar order:** Dashboard → the portal's resource groups → footer block of
  Help, FAQ, What's new, About → account dropdown pinned at the bottom.
- **Account dropdown:** the demo's full set, each entry resolved against *this*
  panel's prefix and hidden only when the panel genuinely lacks the route or the
  operator lacks the ability — never because the panel "is not the default one".
- **Header:** search, AI, notification bell with badge, appearance/palette.
- **Dashboard: empty.** The page exists and is the sidebar's first entry; it
  hosts no widgets until one is declared. Every widget stays available to be
  called in when wanted.
- Everything else (mail, chat, invoices, documents, operations) available as
  components to opt into, not present by default.

---

## 3. The work

### Phase 1 — One shell (the big one)

Collapse the two sidebars into one. `AppSidebar.vue` is the survivor; it is the
one the demo proves.

1. Rewrite `packages/ui/inertia/components/shell/PanelShell.vue` to compose the
   same tree `AppSidebarLayout.vue` does: `AppShell` + `AppSidebar` +
   `AppContent` + `AppSidebarHeader` + `ImpersonationBanner` + `Toaster`, and
   the `AppLayout` extras (skip link, `PkBottomNav`, ARIA live region,
   `SessionExpired`, `useTenantTheme`).
2. Move the app-owned pieces that tree depends on into the package —
   `AppShell.vue`, `AppContent.vue`, `AppSidebarHeader.vue`,
   `ImpersonationBanner.vue`. Package copies already exist for all four; per
   `UI_FOUNDATION.md`, read both and keep the app's where it is the fuller one.
   Do **not** sed-replace: that document lists three pairs (`button`/`PkButton`,
   `skeleton`/`PkSkeleton`, `dropdown-menu`/`PkDropdown`) that are different
   components wearing one name.
3. Delete `PanelSidebar.vue`, or keep it only if something still imports it.
4. Keep `PanelShell`'s `#topbar` and `#actions` slots — the published
   `PanelLayout.vue` and its stub are the documented override point and must not
   change shape.

**Gate:** `/shell-preview` and `/dashboard` are indistinguishable apart from
brand text and menu contents.

### Phase 2 — Panel-relative support links

1. In `AppSidebar.vue:157`, drop the `panelHome.isDefault` branch. Build each
   href from the panel's path: `{panel.path}/help`, `/faq`, `/about`.
   `SharePanelProps` already ships `panel.path`, and `panelHome` already exists
   for exactly this.
2. `whats-new` is root-only today. Either mount `ChangelogPage` per panel (match
   how `HelpController` is mounted) or omit it in non-default panels — **pick
   one and say which**; a link to a 404 is worse than no link.
3. Same treatment for `isApplicationPortal` in `UserMenuContent.vue`. Visibility
   must key off "does this panel have the route, and may this operator use it",
   never off "is this the default panel".

**Gate:** `platform/help`, `reseller/faq`, `client/about` reachable from their
own sidebars, each staying inside its portal.

### Phase 3 — The account dropdown ships in the package

1. Move `UserMenuContent.vue`'s 299 lines into
   `packages/ui/inertia/components/shell/DefaultAccountMenuItems.vue`, resolving
   every href against the current panel.
2. Each item declares the ability and the route it needs and hides itself when
   either is absent — so an operations-less portal drops Backups/Logs/Monitoring
   on its own rather than by a portal-name check.
3. Keep the `#userMenu` slot so an app can still override wholesale.
4. `apps/playground/.../AppSidebar.vue` then drops to a bare re-export, and the
   demo renders the package's dropdown. If the demo's dropdown changes at all,
   the move was lossy — fix it before moving on.

**Gate:** the demo's dropdown is byte-identical before and after, and a generated
panel now shows the same one.

### Phase 4 — The two defects from §0

Fix `DoctorCommand` (set the permissions team, or count on the pivot directly)
and decide what to do about Dusk on Windows.

### Phase 5 — Cut `apps/starter`

Only after 1–3 are green. Copy source only — **not** `node_modules`, **not** the
1.8 GB `database/database.sqlite`.

- **Verbatim:** `resources/css/app.css` (401 lines, the tokens),
  `resources/js/layouts/**`, `resources/js/components/**`, every 28-line page
  shim, `app.ts`, `vite.config.ts`, `components.json`, tsconfig, the auth stack
  (Fortify / Socialite / passkeys / OTP / magic link), settings, operations,
  tenancy, permissions, audit, saved views.
- **Removed:** `Client`, `ClientSession`, `Plan`, `Router` models; the six
  resources in `app/Panel/Resources`; their migrations; `panel:seed-demo`; the
  ISP copy on the landing page.
- **Replaced:** `app/Panel/Pages/DashboardPage.php` (804 lines of ISP metrics) →
  an empty dashboard. Widgets stay in the package, declared when wanted.
- **Kept, generic:** User resource, Tenant, roles, tickets, announcements,
  custom fields, documents.
- **Kept, flagged off:** Mail, Chat, Invoice, BuildGuide, DevicePreview, Docs —
  present as worked examples of a non-resource screen, off by default.
- **Panels:** ships `admin` (root, tenant) and `platform` (central). Then run
  `make:panel reseller` against the starter and confirm a third portal appears
  with its own guard, prefix, menu and discovery. That is the multi-panel claim,
  tested rather than asserted.

### Phase 6 — The empty-to-yours path

`make:model X -m` → `migrate` → `make:panel-resource X --generate` → the screen
exists. Then `panel:blueprint` regenerates `AGENTS.md` so an agent working in the
new system reads its resources, not the ISP's.

---

## 4. How "the design is intact" gets proved

Four layers, weakest to strongest:

1. **Checksum gate.** A script asserting the starter's shell files are
   byte-identical to the playground's. Deterministic, runs in CI, catches drift
   no eye will.
2. **Screenshot comparison.** `scripts/shots.sh` (added, working) drives Chrome
   directly — no ChromeDriver — and writes every screen at 1400 / 768 / 375 in
   light and dark. Run it against the playground before Phase 1 and against both
   apps after each phase.
   ```bash
   scripts/shots.sh .shots/playground http://127.0.0.1:8000 1
   ```
   It needs built assets: stop `npm run dev`, delete `public/hot`, `npm run build`.
   *Windows note:* Chrome is a Windows exe and Git Bash speaks POSIX — every path
   handed to Chrome goes through `winpath()`. Skipping that produced 174 missing
   screenshots and not one error message.
3. **Render suite.** Every starter screen: 200, non-blank, no console errors.
   `NavigationCoverageTest` already fails on any screen that is neither a
   resource, nor listed in `app/Panel/Pages.php`, nor excluded with a reason —
   the starter must inherit it.
4. **Build gate.** `npm run build`, `vue-tsc --noEmit`, `eslint`, `pint`,
   `phpstan`, `panel:doctor` clean.

Phase 1 is the one that can regress the demo, because it changes components the
demo renders. Capture the baseline before touching it.

---

## 5. Order, and why

1 → 2 → 3 are one job in three commits: they are the only reason a generated
panel looks different, and Phase 5 copies whatever they leave behind. Cutting the
starter first would fork the divergence into two applications instead of one.
