# Plan: what Filament taught us, and what is still half-done

Written 2026-08-09. Everything below was verified against the running
application or against Filament v3.3.54 and v5.7.6 source read in
`%TEMP%/filament-study*`, not inferred from documentation.

---

## 0. Already done, no work needed

Four real search defects, all fixed and covered by tests. Recorded here so
nobody re-does them.

| Was wrong | Now |
|---|---|
| Aborted request's `finally` cleared `searching` after the next request set it - spinner died under a pending search | Sequence guard; only the newest request may touch shared state |
| Every backspace refetched a term just seen | Bounded query cache, cleared on close. Measured: cached term renders ~120ms, no network |
| `titleColumn()` picked the first string-ish column, so Activity results all read `2026-08-08 16:47:41` | Date-like columns skipped by name and by value |
| Whole phrase was one `LIKE`; **and** `LIKE` is case-sensitive on Postgres | Per-word AND / per-column OR, quoted phrases via `str_getcsv`, invisible Hangul fillers normalised, `ILIKE` on pgsql |

The Postgres one had never been caught because development is SQLite, where
`LIKE` is case-insensitive. CI has a pgsql job and nothing covered search there.

**Also fixed in passing:** `packages/ui/node_modules` held Linux rollup
binaries, so the UI unit suite could not run on Windows at all.

---

## 1. What is still borrowed-but-unbuilt

Ordered by value per hour. Filament does all of these; as of 2026-08-09 so do we -
every item in this section is built, tested and committed.

### 1.1 Relationship search - DONE

Filament's `getGloballySearchableAttributes()` accepts `customer.name` and turns
it into a `whereHas`. Ours searches columns on the model only, so **an invoice
cannot be found by its customer's name** - which is how people actually look
for invoices.

Work: `ListQuery::$searchable` accepts dotted paths; split on the last dot,
`whereHas(relation, fn => where(column, $like, ...))`. The per-word AND wrapper
already built stays as-is.

**Gate:** searching a customer name returns their invoices, and the query count
does not grow with row count.

### 1.2 Result details in the palette - DONE

`SearchController` hardcodes `'subtitle' => null`. Two rows both reading
"100Mbps Business" are indistinguishable, which makes the palette a list you
cannot choose from.

Work: a `searchSubtitle()` on the resource, defaulting to the second sensible
column. Reuse the `titleColumn()` heuristic, minus the chosen title.

### 1.3 A separate query root for search - DONE

Filament has `getGlobalSearchEloquentQuery()` so a resource can eager-load what
its titles and subtitles need. We reuse the list query. The moment 1.1 and 1.2
land, titles start touching relations and this becomes an N+1 per keystroke.

**Do this before 1.1 and 1.2, not after.**

### 1.4 Escape hatches - DONE

Three small ones, each earning its keep the first time a resource is unusual:

- `searchResultLimit()` per resource - today `LIMIT` is a constant for all.
- `modifySearchQuery()` - the only way to express "search only active rows".
- `shouldSplitSearchTerms()` - splitting breaks exact-reference lookup, where
  the reference legitimately contains a space. Filament added this in v5 for
  exactly that reason.

### 1.5 Result group ordering - DONE

Filament v5 has `globalSearchSort()`. Ours returns groups in resource
registration order, which is arbitrary - so the least useful group can sit
first. A declared sort, defaulting to today's order.

### 1.6 Database transactions around actions - DONE

`Filament\Panel\Concerns\HasDatabaseTransactions` - opt-in per panel, wraps
actions so a failure leaves no partial write. Given bulk actions here have no
queue threshold (below), correctness before throughput is the right order.

**Gate:** a create that throws halfway leaves zero rows, proven by a test that
throws deliberately.

### 1.7 Rate limiting on auth actions - DONE

v5 rate-limits second-factor setup/disable. We have passkeys and OTP; the gap is
the throttle, not the factors.

---

## 2. What is half-done and needs finishing

### 2.1 The tree is uncommitted - DONE

**Do this first.** Three unrelated strands are piled together: the Phase 1-3
shell work, the SEO subsystem, and everything from this session (cleanup,
Windows test fixes, search, user management, StatStrip). Split into commits
before adding more. Nothing else in this document is safe until this is done.

### 2.2 Sidebar: a group that is a section, not a dropdown - DONE

Requested and not built. Every group renders as a collapsible; there is no way
to say "this one is a plain section", which is how tenants would learn both
presentations exist.

Work: a `collapsible` flag travelling server -> `panelPages` -> `usePanelNav`
-> `AppSidebar`. Default true, so nothing changes unless asked.

### 2.3 Superadmin portal, and editable content - DONE

The larger of the two, and the one that unblocks the most.

**Confirmed today:** Help and FAQ come from `config('panel.help.categories')`
plus hardcoded `defaultQuestions()` arrays; What's new comes from
`config('panel.changelog')`. **None of it is editable at runtime** - fixing a
typo in an FAQ is a deploy.

Two halves:

1. **Content becomes DB-backed** - Help, FAQ, What's new, About, API reference.
   Per-tenant where it makes sense. This is also the worked example of a
   non-resource CRUD screen the starter is missing.
2. **A central `superadmin` panel** that can impersonate, see every tenant's
   tickets, and edit the above. The parts exist: `make:panel`, the impersonation
   banner, tenant-scoped tickets. Assemble rather than invent.

**Gate:** raise a ticket in a tenant portal, answer it from superadmin, and see
both sides - which is the two-portal test that is impossible today.

### 2.4 The socket is opt-in, and the session must be allowed to die - DONE

**The first half is FIXED.** `echo.ts` constructed Echo unconditionally, so an
installation without Reverb - or, as here, with keys left over from another
machine and nothing listening - retried `ws://localhost:8080` forever: a
console full of failed sockets and a page that never looked settled. Echo now
constructs only when `VITE_REVERB_APP_KEY` is set; without it `window.Echo`
stays undefined and `useLiveUpdates` uses the internal poll driver, so
**neither Reverb nor Redis is required for the panel to function**. The
playground `.env` now ships with the block commented out.

Related and fixed with it: the dashboard's ~20 deferred props each tripped a
Vue extraneous-attrs warning as they landed, once per prop per visit - which
read exactly like the page reloading on a timer. It was neither: an idle
dashboard makes zero requests (measured over 26s). The packaged page now
declares `inheritAttrs: false`.

**The second half is now DONE too.** Pages that opt into live updates
poll every `PANEL_LIVE_INTERVAL` (10s), and every poll is an authenticated
request that resets Laravel's session idle timer - so a tab left open on a
wall never expires, which defeats `SESSION_LIFETIME` entirely. The fix is an
ABSOLUTE session ceiling alongside the idle one: a login-timestamp check in
middleware that ends the session after N hours regardless of activity.
`EnforceSessionLifetime` does exactly that, measured from sign-in so a poll
cannot push it back, invalidating the session the way sign-out does and
answering a JSON poll with 401 rather than a redirect to HTML it would parse
as data. Off unless `panel.auth.session.max_hours` says otherwise; the demo
sets twelve hours so the path is exercised.

### 2.5 `panel:doctor` still cries wolf - FIXED

`checkSomebodyCanOpenThePanel()` counted `whereHas('roles')` under Spatie's
team scoping, which a console run pins to a null team - zero on any healthy
installation. It counts the pivot directly now, and the test that used to pass
*because* of the bug (the factory grants every user a role, so the false alarm
was what it matched) builds a genuinely roleless account.

---

## 3. Enterprise scale — the things that will actually break

Not borrowed from anywhere; observed here.

1. **Search does one `LIKE` per resource per keystroke, capped at 8.** The
   `% word%` half cannot use a btree index. On Postgres with millions of rows
   that is eight sequential scans per keystroke per admin. **The tool now
   exists**: `panel:search-index` reads every resource's searchable columns and
   writes the DDL for the current engine - `pg_trgm` GIN per column on
   Postgres, one covering `FULLTEXT` per table on MySQL, and an honest refusal
   on SQLite, whose FTS5 needs a shadow table rather than an index. No external
   service, and no search cluster to run, secure and pay for.

   IT PRINTS RATHER THAN APPLIES, deliberately. Which tables are actually big,
   when the quiet hour is, and whether to build concurrently belong to whoever
   runs the installation; `--apply` is for a laptop. And per this document's own
   rule, run it when row counts demand it - an index nobody needed is write cost
   and disk for nothing.
2. **Bulk actions have no queue threshold.** A bulk mutation over 500k rows runs
   inside a web request unless somebody declared it a job.
3. **Live updates default to polling**, and the broadcast transport is
   authorised but untested - `BroadcastChannelTest` proves who may subscribe and
   then nothing connects. Reverb is already `require-dev`; make it first-class.
4. **The dashboard is ~20 independent deferred queries.** The per-widget
   boundary is right for resilience and wrong for round trips.

---

## 4. Where we are ahead of Filament — do not "fix" these

Recorded so nobody borrows backwards.

- **Transport.** Filament's global search is a Livewire component in v3 *and*
  v5: every keystroke is a full server round trip re-rendering the component -
  the exact latency floor this project was built against. Ours is a lean JSON
  endpoint with client debounce, abort and cache.
- **LIKE escaping.** Filament interpolates `"%{$search}%"` unescaped in both
  versions, so a user typing `%` matches every row. We escape `%` and `_`.
- **Deny-by-default policies, deferred counts, keyset pagination, one query for
  N tabs.** All still ours.

---

## 5. Order, and why

```
2.1 commit the tree          <- nothing is safe until this is done
 |
1.3 search query root        <- before 1.1/1.2, or they create an N+1
 |
1.1 relationship search  +  1.2 result details
 |
2.2 sidebar group            <- small, visible, unblocks the tenant story
 |
2.3 superadmin + editable content   <- the big one
 |
1.4 1.5 1.6 1.7              <- escape hatches, sort, transactions, throttle
 |
3.1 search indexing          <- tool shipped; RUN it when row counts demand it
```

2.4 (doctor) can be done at any point by anybody; it is twenty minutes and
independent of everything else.

---

## 6. How each step is proved

The same four layers `STARTER_PLAN.md` established, unchanged:

1. **Tests.** 2,116 feature tests are green right now. Any step that cannot be
   asserted is a step that is not finished.
2. **Screenshot comparison.** `scripts/shots.sh` + `scripts/shots-diff.mjs`.
   Both work again - the diff script had never once run (`pixelmatch` v6 is
   ESM-only and `require` returned the namespace), and `shots.sh` now falls back
   to system Chrome.
3. **`panel:doctor` clean** - which requires 2.4 first, or its output is noise.
4. **Build gate.** `npm run build`, `vue-tsc --noEmit`, `eslint`, `pint`,
   `phpstan`.
