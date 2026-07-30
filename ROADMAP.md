# PanelKit — what is left, and in what order

[PLAN.md](PLAN.md) is the build log: how the panel got here, phase by phase. This
is the forward view — everything outstanding, why it matters, what it costs, and
what it depends on.

Written 2026-07-29, last updated 2026-07-30. **§1, §2 and §3 are all done** —
see [CHANGELOG.md](CHANGELOG.md). Sizes are relative, not calendar estimates:
**S** = an afternoon · **M** = a day or two · **L** = several days · **XL** = a
week or more.

---

## Where we actually are

| | |
| --- | --- |
| Tests | 1,239 · 1,226 passing · 13 skipped (MariaDB ×5, pgvector ×8 fixtures), plus 14 browser tests |
| Types, build, `panel:doctor` | Clean |
| CI | Three jobs from a clean clone: the PHP suite + doctor, the client half (vitest, types, both bundles), and the browser suite with failure screenshots |
| Packages | `panelkit/panel`, `@panelkit/ui`, `@panelkit/inertia` — installable, verified in a fresh `laravel/vue-starter-kit` app |
| Commits | 75 on `main` |
| Tags | `v0.1.0` |

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

## 1. Ship it — **DONE**

| # | Item | Where |
| --- | --- | --- |
| 1.1 | Tag `v0.1.0` | `git tag v0.1.0`, annotated |
| 1.2 | Subtree split script | [scripts/split.sh](scripts/split.sh) — verified locally; refuses a dirty tree, remotes are config not constants |
| 1.3 | Upgrade guide + version policy | [UPGRADING.md](UPGRADING.md) |
| 1.4 | Deployment notes | [DEPLOYMENT.md](DEPLOYMENT.md) |
| — | Changelog, with the limits stated | [CHANGELOG.md](CHANGELOG.md) |

**Still yours to run:** creating the destination repositories and the push. The
script takes them as configuration precisely because a force-push to a hardcoded
wrong remote rewrites somebody else's main branch.

**Still open — the same decision:** two standalone repos you push with the
script, or a splitter action on push (automation that needs a token in GitHub).

---

## 2. Trust it

| # | Item | Size | Notes |
| --- | --- | --- | --- |
| 2.1 | ~~**Lint**~~ | **DONE** | Reformatted once, enforced in CI — ESLint, Prettier (all three JS/TS surfaces) and Pint. See below. |
| 2.2 | ~~**Component tests**~~ | **DONE** | `@panelkit/ui`, Vitest + `@vue/test-utils` + jsdom. 8 spec files, 53 tests. See below. |
| 2.3 | ~~**Browser tests**~~ | **DONE** | Laravel Dusk, 14 tests, own CI job. See below. |
| 2.4 | ~~**Accessibility check in CI**~~ | **DONE** | axe-core over 7 main screens via Dusk, part of the existing browser job. Found and fixed 5 real violations. See below. |
| 2.5 | ~~**Un-gate the fixtures**~~ | **DONE** | MariaDB and pgvector now run as real CI services. Broadcast and the AI provider turned out not to be gated at all. See below. |

**2.3 is done.** 14 Dusk tests over two classes, a `browser` job in CI that
uploads failure screenshots, and `make browser` locally.

**Both motivating bugs were reproduced red before the tests were kept.** That
matters more than the count: the first version of the invoice-collision test
PASSED with the bug deliberately reintroduced, because it measured `<td>` rects
(always contiguous — padding is inside the box) against sample data whose
`2,500.00` figures are too narrow to collide. It now measures the painted text of
a six-figure amount on a real record, fails on the bug and passes on the fix. The
wiring test likewise fails when the form is rebound to the event `RecordForm`
does not emit.

**Two things worth knowing before touching this:**

- **A snap-packaged Chromium will not work.** `/snap/bin/chromium` is a symlink
  to `snap`, and ChromeDriver launching a confined snap does not fail — it hangs,
  with no output from either process. `DuskTestCase` excludes it deliberately and
  skips with an instruction rather than timing out.
- **`scripts/dusk.sh` owns the database, and that is the point.** Dusk's
  migration traits would otherwise run against `.env` — the development database
  here holds 277,700 seeded subscribers, and emptying it would be silent,
  instant, and reported as a passing run. The script passes `DB_DATABASE` on the
  command line where it outranks any env file, serves on its own port, and
  refuses to run if the path resolves to the development one.

**2.2 is done.** `packages/ui/vitest.config.ts` adds jsdom and
`@vitejs/plugin-vue` so a `.vue` file can be mounted at all — the two spec files
that existed before this only tested composables and never needed either. 53
tests across 8 files: `RecordForm`, `PkVisualSelect`, `PkDocument`, `PkCodeBox`,
`FormFieldControl`'s number-preset chips, and a `useFieldControls` registry spec
mirroring the existing `useOptionPreviews` one. `@panelkit/inertia` still has no
component tests — its screens are still verified only indirectly, through
Laravel feature tests and the Dusk suite.

**Both regressions this session were pinned as tests, not just fixed.** The
`RecordForm` emit-contract bug (bound as `@update:model-value` against a
component that emits `change`) and the line-item column-collision bug both have
a spec asserting the specific shape that broke, not just "the component
renders" — `RecordForm.spec.ts` asserts `update:model-value` is never emitted,
and `PkDocument.spec.ts` asserts the padding classes are on every data cell
`tbody td` renders.

---

## 3. The screens

From [mds/centipid-notes.md](mds/centipid-notes.md) and
[mds/portal-designer-notes.md](mds/portal-designer-notes.md). Ordered so each one
makes the next cheaper.

### 3.1 Document template designer — **DONE**

Shipped as `PanelKit\Panel\Documents`: a kind registry, a versioned tenant-scoped
`DocumentTemplate`, one `DocumentRenderer` that the designer preview and the
print route both go through, and `PkDocument` — one Vue component that draws
blocks and has never heard of an invoice. Invoice, receipt and voucher ship; the
playground replaces `invoice` with its own subclass to prove the override.

**What previewing against a real record found on its first use**, and would not
have found otherwise: a quantity of `1`, a unit of `100,000.00` and an amount of
`100,000.00` rendered as `1100,000.00100,000.00`, because right-aligned numeric
cells had no horizontal padding. Sample data has a tidy `2,500.00` line and three
comfortable columns. That is the argument for the record picker, made by the
record picker.

**Not built, and named rather than implied:**

- **Email and web surfaces.** The renderer is shared by the preview and the
  print, which is the pair that could diverge dangerously. Nothing emails a
  document yet, so there is no third caller to keep honest.
- **Version history.** `version` is a counter stamped onto each rendered
  document, so you can tell *which* version printed something. Reading an old
  version back needs a second table, and that belongs with the first feature
  that has to re-render an old document.
- **One template per kind per tenant**, enforced by a unique index. Multiple
  named templates per kind is a deliberate later decision, not an oversight.

The original plan, for reference:

### 3.1a Document template designer — the original breakdown

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

### 3.2 Visual option pickers — **DONE**

`VisualSelectField` in PHP, `PkVisualSelect` plus a `registerOptionPreview`
registry in Vue. Three renderers ship: `swatch`, `voucher-code-box` and
`document-colour-mode`. The code-box picker draws each option by rendering
**the same `PkCodeBox` the voucher prints**, so the tile and the paper cannot
disagree.

Declaring no renderer is a supported mode; naming one nothing registered says so
in the tile and lists what is registered.

### 3.2a Visual option pickers — the original note

*When a choice changes appearance, the option must show the appearance.*

*Theirs:* six code-box styles drawn as themselves, hardcoded into the screen.

**Ours:** a schema field type — `VisualSelect` — whose options each carry a
renderer, resolved through the same component registry as
`registerFieldControl`. So a plugin can add a seventh style, an application can
add its own, and the picker is available to every form in every panel rather
than to one screen. Declared in PHP, drawn in Vue, with no class names crossing
the boundary.

**Do this first.** Everything visual after it is cheaper.

### 3.3 Numeric presets as chips — **DONE**

`->presets([7, 14, 30])` on `NumberField`, chips beside the input rather than
instead of it. A preset outside the field's own `min`/`max` throws at schema
build, because a chip that fails validation when pressed reads as "you typed
something wrong" about a value the panel supplied. Applied to the backup
retention box.

### 3.3a Numeric presets as chips — the original note

*Theirs:* a fixed row of day chips.

**Ours:** `->presets([7, 14, 30])` on the existing number field, so the chips and
the free input coexist — the chips carry the sensible answers, the input stays
for the case that genuinely is arbitrary, and the min/max we already validate
bounds both. Fixes trash retention today.

### 3.4 Dashboard setup checklist — **DONE**

*Theirs:* a static list of six onboarding steps.

**Ours:** driven by `InstallationState` **and `panel:doctor`**, so it is not an
onboarding checklist that goes stale after week one — it keeps surfacing what is
silently wrong for the life of the installation. Doctor already computes it and
nothing shows it. One highlighted next step; the finished ones stay visible.

Shipped as `PanelKit\Panel\Support\SetupChecklist` — every item is a live
`panel:doctor` problem, not a fixed step; `InstallationState` records every
title doctor has ever reported, by a stable hash, so a fixed problem shows as
struck-through rather than silently disappearing (the exact thing a
point-in-time command cannot do on its own). The undone tail is never
trimmed; only the done tail is capped, so a real problem can never be
crowded off the list by old history. Presentational half is
`@panelkit/ui`'s `SetupChecklist.vue`, gated on the dashboard by the same
`view_operations` ability Monitoring uses — this card surfaces the same
installation-health detail, and a tenant user who cannot open that page must
not receive it a second way, on a screen everybody opens.

### 3.5 Conditional sections — **DONE**

`visibleWhen` works per field; a whole `Section` cannot depend on a value, so a
disabled group still occupies the page. Schema change plus the Vue half.

**Ours goes one further:** the condition is declared on the section and the
server omits the section's fields from the payload entirely when it is off — so
a hidden section is not merely invisible, it is absent, and cannot be submitted
by a crafted request.

Shipped as `Component::isVisible()`/`Component::visibleFields()`
(`packages/panel/src/Schema/Component.php`), a base-class mechanism `Section`
opts into with its own `visibleWhen()`. `Form::sanitize()` is the actual
enforcement — it walks `visibleFields($this->nodes, $input)` rather than the
unconditional flat list, so a field inside an unmet section's condition is
dropped from the write payload however a request tries to include it, using
the same submitted data already available at that call site (no signature
change reached the many other `Form` callers — Importer, the document
designer, the public API — all of which keep every field's rules and
sanitisation exactly as before). The cached schema and `valuesFor()`
deliberately stay unconditional: a hidden section's fields still have to
exist in the structure the client walks and still need their real stored
values, so that flipping the condition back on shows what was actually saved
rather than a blank. `SchemaNode.vue`'s section branch gained the identical
`conditionMet(node)` gate a conditional field already had, so a hidden
section is absent from the DOM, not merely styled invisible. A field
required inside a conditional section should still declare its own matching
`visibleWhen` — the section's condition governs what gets written, not what
gets required; that half of the existing per-field design is unchanged.

### 3.6 Variable chips under message fields — **DONE**

*Theirs:* a fixed chip list per template.

**Ours:** the token list comes from the resource schema, so it cannot list a
variable the record does not have — and `panel:doctor` flags a template using
one that was removed. Callers: announcements, scheduled reports, 3.1's copy.

Generalised rather than duplicated: `Field::chips(array $tokens)` and its
`toSchema()` key are new on the base `Field` class, and `FormFieldControl.vue`
gained the chip strip + insert-at-cursor behaviour the document designer's
own page had hand-built — found by `document.getElementById` for this
field's own textarea specifically, not `document.activeElement`, so two
message fields on one page can never insert into each other's control.
`Announcement` gets its own `variables()` (`@user`, `@organisation` — there
is no per-record field the way an invoice has `@customer`, only who is
reading and which organisation wrote it), a `substitute()` used both on the
dashboard banner and in the notification a dismissal writes to the bell (the
same text, substituted once, not re-declared), and `panel:doctor` grows a
second check mirroring `checkDocumentTemplates()` for an announcement
referencing an unknown token.

**Scheduled reports is not wired up, and that is not an oversight.** No
message/body field exists on `ScheduledReport` today — it has no free text a
chip could insert into. Attaching chips to a field that does not exist would
mean inventing that field and a mail template to go with it, which is scope
belonging to a future report-composer item, not this one. `Field::chips()`
is ready for it the moment that field is added.

### 3.7 Settings index with descriptions and search — **DONE**

*Theirs:* three bare links, fine at three and unreadable past six.

**Ours indexes the settings the same way `Help.vue` indexes the build guide**
— a title, a description, and a search box with no request on keystroke, the
list itself declared once server-side (`App\Support\SettingsIndex`) rather
than duplicated in the client. `/settings` now renders that index instead of
redirecting straight to Profile; role-gated entries (`User management`,
behind `manage_roles`) are omitted rather than shown disabled, matching the
account menu's own rule that a link which always 403s is worse than no link.

**Deliberately not portal-gated.** `/settings`, like `/settings/profile`,
`/settings/security` and `/settings/organisation` before it, is registered
outside every panel's own route group, so `PanelManager::currentPanel()`
resolves to the default panel regardless of which portal linked here — there
was never a portal boundary on this screen to begin with. An early draft
added portal-aware filtering to `SettingsIndex::entries()` on the theory that
a generated portal shouldn't offer Organisation or User management; it was
reverted once that filtering turned out to be unreachable dead code guarding
a boundary the routes don't have, and the roadmap's own bias against
speculative code says that's a reason to delete it, not keep it "for later."

One real layout bug surfaced only in the browser, not in any test: the
Inertia layout resolver in `app.ts` matches page components by name prefix
(`settings/*` → `[AppLayout, SettingsLayout]`), which drew the new index
wrapped in the old settings sidebar — the three links rendered twice, once as
this page's own card list and once beside it. Fixed with a specific
`settings/Index` case ahead of the general prefix rule, the same pattern
already used for `auth/LockScreen` and `auth/VerifyOtp`.

### 3.8 Wizard steps in the page header — **DONE**

*Ours before:* Import had no client at all — `ImportController` (headers,
mapping, dry run, chunked writes) had existed since Stage 7 with no page ever
calling it, and `panel:doctor`-adjacent research for this item is what
surfaced the gap. Restore's confirmation dialog was one undifferentiated
block of warnings, and its outcome was a single status line with no sense of
how far a failed attempt actually got.

**The step strip is the wizard field's own markup, pulled out.** The numbered
circles, the tick/cross states and the click-back-only interaction in
`SchemaNode.vue`'s `wizard` branch are now `PkStepIndicator.vue`, and the
wizard field itself is that component plus the tab-switching logic it always
had — same behaviour, same tests, one definition instead of a second copy
waiting to drift from the first.

**Import got a real client**, `ImportDialog.vue` (new, in `@panelkit/inertia`,
opened from an `Import` button beside `New {Resource}`): upload, map columns,
review. No column is ever guessed — `ImportController`'s own note explains
why: a heuristic match is right often enough to be trusted and wrong often
enough to import a phone number into the name field, so every mapping starts
at "don't import this column." The review step runs the exact same request as
the real import, `dryRun` true instead of false, and only offers to commit
once it comes back clean — `Importer`'s "one bad row must not abort the
batch" is what the reviewed failures are actually reporting.

**Restore's phases are now named, not just narrated.** `RestoreBackup::record()`
gained a `step` alongside its existing state and message — `STEP_SAFETY_BACKUP`,
`STEP_RESTORE` — remembered across calls so an unexpected exception still
reports the last phase actually entered rather than nothing. The confirm
dialog previews the two phases before anything starts; the "last restore"
status block renders them against what was actually recorded, a cross rather
than a tick on the phase that failed, everything after it read as never
reached rather than "upcoming." No live polling: the maintenance-mode bypass
lets the initiating browser watch, but nothing else here changed to make
polling meaningful, and building that is a separate feature, not this one.

Verified: 1251/1251 PHP tests (2 new, covering the no-step "another job is
running" refusal and the page's passthrough of a recorded step), 74/74
`@panelkit/ui` Vitest tests (6 new for `PkStepIndicator`, 2 new for the
wizard branch's re-wiring), 21/21 Dusk tests, ESLint/Pint/Prettier/vue-tsc
clean across all three JS surfaces, production SSR build succeeds. Confirmed
live in the browser: the Import dialog against the real `/clients/import/*`
endpoints (upload, live-reactive required-field mapping, Preview correctly
disabled until every required field is mapped), and the Restore step
indicator both as a pre-flight preview and, with a seeded failure state, with
a cross on the phase that actually failed.

### 3.9 List-page conventions — **DONE**

*Theirs and ours, before this:* filter tabs with counts already existed
(`TableTabs` + `tabCounts`, one mechanism, always on when a resource declares
tabs) and already read as the stats strip the roadmap asked for — a second,
separate widget saying the same numbers a second way would be decoration, not
a second convention, so none was built. What was missing was the other two:
every index's title had nothing under it, and every empty state said the
same dev-only sentence - *"Seed demo data with: make seed"* - regardless of
whether the viewer could create anything at all.

**The purpose line is enforced, not documented**, because it is the one
thing here that genuinely cannot be derived: `Resource::$purpose` has no
default, `schema()` sends it to the client, and `ListPageConventionsTest`
walks every resource discovered across every panel and fails the suite if
one ships without it - the same shape as `NavigationCoverageTest` failing an
unreachable screen. All nine resources in this application now declare one.

**The empty-state CTA is derived, not declared**, deliberately narrower than
the roadmap's own wording. The button it should name (`New {label}`) is
already computed on the same page for the same permission check
(`canWrite && can.create`); a second, hand-written copy of that sentence per
resource would only be one more place for the words to drift from the
button they describe. `ResourceIndex.vue` composes the CTA from data that
already exists rather than asking every resource to restate it.

Verified: 1253/1253 PHP tests (2 new - every resource has a purpose, and it
reaches the schema), 21/21 Dusk tests, ESLint/vue-tsc/Prettier/Pint clean,
production SSR build succeeds. Confirmed live in the browser: the purpose
line under Clients' and Announcements' titles, and - logged in as a freshly
created, genuinely empty tenant - the empty state reading exactly `No
clients yet` / `Click "New Client" to add one.`

### 3.10 Count before commit — **DONE**

*Theirs:* export scopes carry their row counts and an empty one blocks with a
reason.

**Ours generalises the confirmation, not the counter.** Bulk delete and bulk
update already confirmed before this - the gap was that select-all-matching
showed the string "every matching record" instead of a number, exactly the
case where an operator is most likely to have selected more than they
think. Export never confirmed at all. Both now show the real row count and
block with a reason when it is zero.

**No new counter was built.** `countUpTo` (this roadmap's imagined
mechanism) exists once today, private to the notification bell, capped at
500 - reusing it would have meant a second request just for this dialog. It
turned out unnecessary: every list already defers an EXACT row count for its
own pagination text (`total`), and select-all-matching means "everything
`total` counts" by definition. `BulkActions.vue` reads that same number -
free, already in flight, already exact - rather than fetching a second,
approximate one. An explicit selection needs no request either: its count is
however many rows are ticked, known client-side the instant the dropdown
opens.

**Campaign send does not exist** - `grep` across the whole application
returns nothing. Building one to wire this into would be scope invention,
not this item; when a send feature exists, it inherits the same pattern
(confirm dialog, real count, blocks at zero) because that pattern is not
specific to any one action.

Verified: 1253/1253 PHP tests, 79/79 `@panelkit/ui` Vitest tests (5 new,
exercising the teleported confirm dialog directly through the real DOM),
21/21 Dusk tests, ESLint/vue-tsc/Prettier clean, production SSR build
succeeds. Confirmed live in the browser on the real 250,000-row Clients
table: select-all-matching's confirm dialog reading "This will affect
250,000 records" instead of the old vague string, and Export CSV - which
used to fire with no dialog at all - now confirming the same way.

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

**~~Now — make it adoptable.~~ Done.** §1: tagged, split script, upgrade and
deployment notes, changelog.

**~~Then — the flagship.~~ Done.** 3.2 (visual pickers) → 3.1 (template
designer), with 3.3 (preset chips) alongside. 3.6's variable chips landed inside
the designer, sourced from the kind rather than hand-written; making them
available to announcements and scheduled reports is what remains of that item.

**~~Then — trust.~~ 2.2 and 2.3 done.** Both bugs the browser suite was written
for now fail it when reintroduced, and the same two are pinned again at the
component level, in milliseconds rather than minutes. Remaining in that
section.

**2.5 is done, and turned out smaller than described.** Only two of the four
named fixtures were actually gated: `MysqlRestoreTest` (5 tests, hardcoded to
127.0.0.1:3399/root/panelkit_restore) and `PgvectorRetrievalTest` (8 tests,
port and database read from `PANELKIT_PG_PORT`/`PANELKIT_PG_DATABASE`, both
skipping via `markTestSkipped` when the server or the extension is not
found). `BroadcastChannelTest` and `AssistantStreamTest` have no skip logic
at all — broadcasting resolves channel callbacks in-process against the fake
Reverb credentials `phpunit.xml` already sets, and the assistant test
deliberately asserts the no-API-key failure path — both already run for
real in every CI run.

The `php` job now declares `mariadb:11` and `pgvector/pgvector:pg16` as
services, mapped to the exact host/port each test already hardcodes or
reads from env, with `pdo_mysql`/`pdo_pgsql` added to the PHP extensions.
pgvector needs one extra step — the image ships the extension files but a
fresh database still needs `CREATE EXTENSION` run against it once, which is
exactly the check `PgvectorRetrievalTest` itself makes before running.
Verified locally against real servers via the existing `tests/bin/*-fixture.sh`
scripts before trusting the CI config to match: all 13 previously-skipped
tests pass.

**A laptop with no services running is still the same suite it always was.**
The default connection stays SQLite in memory; these two files skip exactly
as before, naming the fixture script, when nothing is listening on 3399 or
5499.

**2.4 is done, and it found five real bugs on its first run** - the argument
for the check made by the check. `AccessibilityTest.php` runs axe-core (via
`executeAsyncScript`, since `axe.run()` is a Promise Dusk's synchronous
`script()` cannot await) against the login screen, the dashboard, the resource
list, the create form, a record page, trash, and the document designer -
asserting zero serious/critical violations, the same threshold a real user
actually hits. Runs inside the existing browser CI job, no new one.

What it found: **positive `tabindex` on Login and Register**, overriding an
order that was already correct and duplicating a value across two links;
**`aria-label` on a plain `<span>`** in `StatStrip`'s masked-value dots, which
ARIA drops silently on any role that does not support naming - fixed with
`role="img"`; **a systemic contrast shortfall** in `--muted-foreground`
(45.1% lightness measured at 4.27:1 against `--muted`, needing 4.5) and in
`text-sidebar-foreground/70` (opacity blending measured at 4.26:1) - both
darkened with a margin rather than to the exact line; and **a button
containing a link** at three sites in `@panelkit/inertia`, from `as-child`
passed to `PkButton`, which has never implemented reka-ui's slot-merging and
rendered it as an inert attribute while the `<Link>` in the slot rendered
inside the `<button>` regardless - two interactive elements where one was
intended. Fixed by exporting `buttonClasses()` from `@panelkit/ui` so a
caller's own element (the `<Link>` itself) can wear button styling without a
wrapper.

**2.1 is done.** ESLint reported 1,289 problems, not the 230 this section
originally quoted — the figure was stale the moment the document designer and
the browser-test suite landed. 1,066 were auto-fixable; of the rest, 194 turned
out to be the Chrome-for-Testing binary Dusk downloads being linted as source
(added to the ignore list, not fixed), and the remaining ~30 were real: dead
icon imports, a ternary used for a side effect where an `if` was meant, an
unused destructure, a route-helper import shadowing a prop of the same name,
and a `vue/no-deprecated-filter` false positive from a `|` union type inside a
template `as` cast. Prettier reformatted 66 files in the app and 14 in
`@panelkit/ui` — mostly the semicolon flip this section warned about. Pint
found the same story on the PHP side, unenforced and drifted to ~70 files,
fixed the same way. All four (ESLint, Prettier ×3, Pint) are now CI steps.

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

- Publishing anything to Packagist or npm.
- Any push to a remote. The credentials are yours to run.
- Ticketing (§6) — it is large and it changes the product's shape.

## Standing constraints (spec §2, unchanged)

1. Never SSH to, deploy to, or reference any remote server.
2. `DB_HOST` is `127.0.0.1`. Never a remote database.
3. Never copy a production `.env`.
4. Destructive commands only ever against the local database.
5. All test data comes from factories and seeders. No production dumps.
