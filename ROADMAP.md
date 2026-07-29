# PanelKit — what is left, and in what order

[PLAN.md](PLAN.md) is the build log: how the panel got here, phase by phase. This
is the forward view — everything outstanding, why it matters, what it costs, and
what it depends on.

Written 2026-07-29. Sizes are relative, not calendar estimates:
**S** = an afternoon · **M** = a day or two · **L** = several days · **XL** = a
week or more.

---

## Where we actually are

| | |
| --- | --- |
| Tests | 1,205 · 1,192 passing · 13 skipped (MariaDB ×5, pgvector ×8 fixtures) |
| Types, build, `panel:doctor` | Clean |
| CI | Runs the suite, doctor, vitest, types and both bundles from a clean clone |
| Packages | `panelkit/panel`, `@panelkit/ui`, `@panelkit/inertia` — installable, verified in a fresh `laravel/vue-starter-kit` app |
| Commits | 72 on `main`, pushed |
| Tags | **None** |

The panel works, installs elsewhere, and is covered. What follows is the gap
between that and a product somebody else can adopt without you in the room.

---

## The standard

**Parity is the floor, not the target.** Everything taken from Centipid or from
the portal designer is a starting point we are expected to beat — and in most
cases the way to beat it is already sitting in something PanelKit has and they
do not: a schema layer, a plugin registry, multi-panel scoping, an audit trail, a
public API, measured performance budgets, and a blueprint an AI agent can follow.

So each borrowed item in §3 is written as *what they do* → **what we do instead**.
Where the improvement is large enough to stand on its own it is in §7.

What we already have that neither reference does — and which every new feature
should be held to:

- a resource is **one PHP file and no Vue**, and stays that way
- **two panels, scoped separately**, so a screen cannot leak across a boundary
- **250,000 rows at a measured budget**, keyset paged, counts deferred
- **cross-tenant isolation and N+1 counts are tests**, not intentions
- a **plugin API** that installs whole screens without the application editing a file
- **`panel:doctor`**, which finds what is silently wrong
- a **generated blueprint** so an agent can extend the panel correctly

## The workstreams

1. **Ship it** — tags, splits, upgrade path. Nothing else matters if it cannot be installed at a version.
2. **Trust it** — the verification that is missing or unenforced.
3. **The screens** — borrowed ideas, each taken further.
4. **Framework parity** — what Filament has that we do not.
5. **Finish the half-built** — features that stop short of their own promise.
6. **Ticketing** — its own piece of work.
7. **Where we go further** — the ideas neither reference has.

---

## 1. Ship it

Nothing here is interesting and all of it blocks adoption.

| # | Item | Size | Notes |
| --- | --- | --- | --- |
| 1.1 | **Tag `v0.1.0` on both packages** | S | No tags exist, so `composer require panelkit/panel` needs `@dev` or a path repo. |
| 1.2 | **Subtree split script** | M | Composer cannot install a subdirectory of a monorepo. `scripts/split.sh` pushes `packages/panel` and `packages/ui` to standalone repos so a version is installable. You run the push; I cannot. |
| 1.3 | **Upgrade guide + version policy** | S | What breaks between minors, what a `0.x` bump means, how to upgrade a panel. |
| 1.4 | **Deployment notes** | S | Queue worker, scheduler, Redis for tagged cache, the `@source` lines Tailwind needs. Half of this exists scattered across READMEs. |

**Decision for you:** two standalone repos (splits) or one monorepo published via
a splitter action on push? The first is a script you run; the second is
automation that needs a token in GitHub.

---

## 2. Trust it

| # | Item | Size | Notes |
| --- | --- | --- | --- |
| 2.1 | **Lint** | M | 230 violations, 216 auto-fixable. The auto-fix reformats 65 files and flips the codebase to semicolons — a year of `git blame` buried. **Decision: reformat once and enforce, or relax the rules to match the code as written.** Until then CI has no lint step, deliberately. |
| 2.2 | **Component tests** | L | `@panelkit/ui` has one spec file; `@panelkit/inertia` has none. The table, the form and the five screens are verified only indirectly through Laravel feature tests, which cannot see a render. |
| 2.3 | **Browser tests** | L | Nothing exercises a real browser. Every bug this session that mattered — the empty page, the missing icons, the sidebar drawer — was invisible to the suite and obvious on screen. |
| 2.4 | **Accessibility check in CI** | M | The audit was manual and is now stale. `axe` over the main screens would keep it true. |
| 2.5 | **Un-gate the fixtures** | M | MySQL, pgvector, broadcast and the AI provider pass when their scripts run and skip otherwise. CI services would make them permanent. |

**2.3 is the highest-value item in this section** and I would do it before 2.2.

---

## 3. The screens

From [mds/centipid-notes.md](mds/centipid-notes.md) and
[mds/portal-designer-notes.md](mds/portal-designer-notes.md). Ordered so each one
makes the next cheaper.

### 3.1 Document template designer — **XL, the flagship**

A tenant-owned template for the documents that leave the system: **voucher,
invoice, receipt**. Form on the left, the artefact rendered live on the right,
**Preview PDF** beside Save.

*Theirs:* a designer for one document kind, previewed with sample data.

**Ours, and the differences are the point:**

- **Preview with a real record.** They show invented sample data; we let you
  pick — *preview as invoice #1042*. Sample data never has a 40-character
  company name, a zero total or a missing field, which is exactly what breaks a
  layout after a hundred are printed. Sample data stays as the fallback when the
  tenant has no records yet, labelled as such.
- **One template, three surfaces.** The same definition renders the PDF, the
  emailed copy and the customer-facing web view. Theirs is print-only, so the
  emailed invoice is a different artefact maintained separately and drifts.
- **A template kind is a registration, not a hardcoded list.** Voucher, invoice
  and receipt ship; a plugin adds a fourth without touching the package — which
  is what our plugin API is for and what a hardcoded designer cannot do.
- **`panel:doctor` reads the templates.** A template referencing a variable that
  no longer exists, or a colour that fails contrast on its own background, is
  found before the print run rather than by the print run.
- **Versioned, with the print run stamped.** A template edited mid-batch is a
  real hazard for vouchers. Each render records which version produced it.

Breaks into:

| | Piece | Size |
| --- | --- | --- |
| a | `DocumentTemplate` model, tenant-scoped, versioned, kind-registered | M |
| b | One renderer shared by preview, PDF, email and web, so they cannot diverge | M |
| c | The designer screen | L |
| d | PDF generation | M |
| e | Real-record preview picker | S |
| f | Voucher + invoice + receipt as the first three kinds | M |
| g | Doctor checks over templates | S |

**Depends on 3.2.**

**Decision for you:** which kind first? Invoice already exists as a hardcoded
screen and every installation needs it. Voucher is what the video showed.

### 3.2 Visual option pickers — **M**

*When a choice changes appearance, the option must show the appearance.*

*Theirs:* six code-box styles drawn as themselves, hardcoded into the screen.

**Ours:** a schema field type — `VisualSelect` — whose options each carry a
renderer, resolved through the same component registry as
`registerFieldControl`. So a plugin can add a seventh style, an application can
add its own, and the picker is available to every form in every panel rather
than to one screen. Declared in PHP, drawn in Vue, with no class names crossing
the boundary.

**Do this first.** Everything visual after it is cheaper.

### 3.3 Numeric presets as chips — **S**

*Theirs:* a fixed row of day chips.

**Ours:** `->presets([7, 14, 30])` on the existing number field, so the chips and
the free input coexist — the chips carry the sensible answers, the input stays
for the case that genuinely is arbitrary, and the min/max we already validate
bounds both. Fixes trash retention today.

### 3.4 Dashboard setup checklist — **M**

*Theirs:* a static list of six onboarding steps.

**Ours:** driven by `InstallationState` **and `panel:doctor`**, so it is not an
onboarding checklist that goes stale after week one — it keeps surfacing what is
silently wrong for the life of the installation. Doctor already computes it and
nothing shows it. One highlighted next step; the finished ones stay visible.

### 3.5 Conditional sections — **M**

`visibleWhen` works per field; a whole `Section` cannot depend on a value, so a
disabled group still occupies the page. Schema change plus the Vue half.

**Ours goes one further:** the condition is declared on the section and the
server omits the section's fields from the payload entirely when it is off — so
a hidden section is not merely invisible, it is absent, and cannot be submitted
by a crafted request.

### 3.6 Variable chips under message fields — **S**

*Theirs:* a fixed chip list per template.

**Ours:** the token list comes from the resource schema, so it cannot list a
variable the record does not have — and `panel:doctor` flags a template using
one that was removed. Callers: announcements, scheduled reports, 3.1's copy.

### 3.7 Settings index with descriptions and search — **S**

Ours is three bare links; it stops working at about six. Theirs is a searchable
index with a line per entry. **Ours should index the settings the same way the
build guide indexes itself** — that search already exists and works over prose.

### 3.8 Wizard steps in the page header — **S**

Import and restore are multi-step and never say where you are. We already have a
wizard *field*; this is the same idea at page level.

### 3.9 List-page conventions — **M**

One template for every index: purpose line, stats strip, filter tabs with counts,
and an empty state that **names the button to press**.

**Ours is enforced, not documented.** The empty state and the purpose line are
declared on the `Resource`, so a generated resource gets them, and the coverage
test fails a screen that ships without them — the same mechanism that already
stops pages disappearing from the navigation.

### 3.10 Count before commit — **S**

*Theirs:* export scopes carry their row counts and an empty one blocks with a
reason.

**Ours generalises it to every bulk action.** Export, bulk delete, bulk update
and a campaign send all answer "how many, and is that what you meant?" before
the action, from the same counter — and our counts are already the cheap capped
kind (`countUpTo`), so this costs nothing on 250,000 rows.

---

## 4. Framework parity

What Filament has that we do not. None of it is urgent; all of it is the
difference between "our panel" and "a panel framework".

| # | Item | Size | Notes |
| --- | --- | --- | --- |
| 4.1 | **Clusters** | M | Grouping related resources under one nav parent with a shared sub-nav. |
| 4.2 | **Nested resources** | L | `/clients/5/invoices` as a first-class resource, not a relation manager. |
| 4.3 | **Singular resources** | S | A one-record screen — settings-shaped, no list. |
| 4.4 | **Render hooks** | M | Named injection points so a plugin can add markup without forking a screen. The plugin API can add resources and pages but cannot decorate. |
| 4.5 | **Missing field types** | M | Markdown, code, builder. |
| 4.6 | **Missing column types** | S | Colour, checkbox. |

---

## 5. Finish the half-built

Features that exist and stop short of their own promise. Each is a place
somebody will hit a wall.

| # | Item | Size | Notes |
| --- | --- | --- | --- |
| 5.1 | **Custom fields** | L | `Resource::customFields()` and the cache fingerprint exist; nothing populates them, no UI, nothing writes the `custom` column. A hook with no implementation. |
| 5.2 | **Trash pagination** | S | Capped at 25 per resource. Delete 30 clients and five are unreachable, silently. |
| 5.3 | **Monitoring history + thresholds** | M | A point-in-time snapshot. "Disk at 91%" does not alert and yesterday is not visible. Telegram alerts now exist to carry it. |
| 5.4 | **Announcement composer** | M | Compose once, deliver to the panel banner, the bell, and Telegram. The transport landed this session; the composer did not. |
| 5.5 | **Retrieval beyond the help centre** | M | The knowledge base indexes one source. The guide, the blueprint and resource records are not searchable by the assistant. |
| 5.6 | **Workspaces** | M | Exposes only `show`. No create, switch, or member management. |

---

## 6. Ticketing — its own piece of work

Your constraint is the design: **a ticket is a conversation with two ends**, so it
only makes sense across two panels. In a single-panel installation it is a table
with a status column and everybody is on the same side of it.

| # | Item | Size | Notes |
| --- | --- | --- | --- |
| 6.1 | **The policy matrix** | M | **Do this first, before any screen.** A ticket is the first record visible to two panels under different rules: the opener always reads their own, the operator reads all of one tenant, neither reads another tenant's. Tests before UI. |
| 6.2 | `Ticket` model + chat thread link | M | Chat already provides the thread; this is the record around it. |
| 6.3 | Two resource classes | M | One per side — a resource belongs to exactly one panel, and the two sides want different columns and actions. |
| 6.4 | `TicketingPlugin` | S | Refuses to install where there is no counterpart panel, rather than registering half a feature. |
| 6.5 | Telegram on new ticket | S | Transport exists. |

---

## 7. Where we go further

Not in either reference. Each is buildable on something PanelKit already has,
which is why they are ours to take and not theirs.

### 7.1 A brand colour that refuses to be unreadable — **S**

Every panel offers a colour picker. None of them checks it. A dark brand on a
dark button, or a pale one on white, produces a control nobody can read — and it
ships, because the person choosing it was looking at a swatch.

We compute the contrast of the chosen colour against the surfaces it will
actually land on and say so before it is saved: *"White text on this fails at
3.1:1 — the panel will use dark text on primary buttons instead."* Then do that.
Cheap, and it is an accessibility guarantee rather than an accessibility audit.

### 7.2 Settings with a history you can restore — **M**

We already record **who changed a setting and when** (`PanelSettings::provenance`
is on screen in the backup policy). Nobody uses that to answer the question people
actually ask: *what did it say last Tuesday, and put it back.*

A settings screen that shows its own timeline and restores a previous value is a
small step from what is stored, and it is the difference between an audit trail
that is decoration and one that is a tool.

### 7.3 `panel:doctor` as a first-class product surface — **M**

Doctor is the best thing in this codebase and it lives in a terminal. It already
finds what is silently wrong; §3.4 puts it on the dashboard, and it should also:

- **run on a schedule** and alert through the Telegram channel that now exists,
- **check the things operators configure**, not just what developers configure —
  templates (7.1, 3.1), message variables (3.6), a backup destination that has
  not been written to in a week,
- **explain the fix**, which it already does better than most tools, in the panel.

### 7.4 The blueprint extends to what operators build — **M**

`panel:blueprint` generates `AGENTS.md` so an agent can add a *resource*
correctly. Once operators own templates, message copy and alert rules, the same
generator should describe **those** — so an agent asked to "add a receipt
template matching our invoice" has the vocabulary, the variables and the
constraints without guessing.

Nobody else can do this: it needs a registry of what exists, which the schema
layer already is.

### 7.5 Everything an operator can do, the API can do — **S each, ongoing**

We ship a public REST API. Every feature added from here should land in it in
the same change rather than in a later one — templates addressable, campaigns
schedulable, settings readable. The rule is cheap when applied per feature and
expensive when applied afterwards, which is why it belongs in the roadmap rather
than in someone's memory.

### 7.6 A performance budget per screen, enforced — **M**

`panel:benchmark` measures resource lists. It does not cover the dashboard, the
designer, or a bulk send. Every screen added from here should declare its budget
and the benchmark should fail the build when a change crosses it — the same way
the N+1 guard already fails on a query count.

We are the only one of the three with measured budgets at all; extending them is
how that stays true.

### 7.7 Two panels is the product, so prove it continuously — **M**

Our multi-panel scoping is the structural advantage over both references, and it
is currently proved by tests that a reader has to go and find. A generated
portal should ship with the isolation matrix already pointed at it, so adding a
panel adds its own proof that nothing leaks across the boundary.

---

## Suggested sequence

**Now — make it adoptable.** 1.1 → 1.2 → 1.3. Small, and everything else is
theoretical until a version can be installed.

**Then — the flagship.** 3.2 (visual pickers) → 3.1 (template designer). The
designer is the biggest single gain and 3.2 is its foundation. Pick up 3.3, 3.6
and 3.10 along the way; they are hours each and 3.1 wants two of them.

**Then — trust.** 2.3 (browser tests) while the new screens are fresh, then the
lint decision (2.1).

**Alongside, cheap and high-leverage.** 7.1 (contrast guard) and 7.5 (API
parity, applied per feature) cost hours each and are exactly the kind of thing
skipped forever if it is not written down. 7.2 (settings history) once 3.1 has
proved the pattern of showing provenance on screen.

**Then — choose one:**
- **Ticketing** (§6) if the two-panel product is the direction, or
- **Framework parity** (§4) if PanelKit-as-a-framework is, or
- **Finish the half-built** (§5) if the priority is that nothing has a wall in it.

I would take §5 before §4: a feature that stops short is worse than one that was
never started, because somebody has already relied on it.

**Keep pushing regardless of that choice:** 7.3 (doctor as a product surface) and
7.4 (the blueprint over operator-owned things). Those two are where PanelKit
stops being a better-looking panel and becomes one that maintains itself, and
neither reference has anything resembling them.

---

## What I will not start without you saying so

- The lint reformat (2.1) — it touches 65 files and rewrites history's blame.
- Publishing anything to Packagist or npm.
- Any push to a remote. The credentials are yours to run.
- Ticketing (§6) — it is large and it changes the product's shape.

## Standing constraints (spec §2, unchanged)

1. Never SSH to, deploy to, or reference any remote server.
2. `DB_HOST` is `127.0.0.1`. Never a remote database.
3. Never copy a production `.env`.
4. Destructive commands only ever against the local database.
5. All test data comes from factories and seeders. No production dumps.
