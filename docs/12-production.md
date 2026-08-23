# 12. Going to production

## Queues

Bulk actions past the threshold, exports, imports and scheduled reports all
dispatch jobs. Without a worker they queue and never run, and the screen reports
a job that stays pending.

```bash
php artisan queue:work --queue=default
```

## Live updates

Lists and dashboard widgets refresh themselves. Two paths, pick one per surface:

### 1. HTTP poll (default)

Zero infrastructure. Works on plain PHP-FPM. Widgets declare
`->poll('10s')` (or an integer number of seconds). The Vue host reloads only
that widget's deferred prop (Inertia partial JSON). Polling pauses while the
tab is hidden. Cost is N widgets times the interval in authenticated requests.

### 2. Reverb / Echo live (optional)

Push when the host has `window.Echo` (Laravel Reverb, typically with Redis as
Laravel's cache / queue / broadcast backend). Widgets declare
`->live('dashboard.stats')`. Prefer live over poll when Echo exists; set both
in PHP so a stock install without Reverb still refreshes:

```php
StatWidget::make('online', 'Online')
    ->live('dashboard.stats')
    ->poll('10s');
```

Never poll and subscribe for the same widget at once on the client: if Echo is
present and a live channel is set, the interval is skipped.

Lists also support a package-level live driver:

```php
// config/panel.php
'live' => [
    'driver' => 'broadcast', // or 'poll' / 'auto'
    'channel' => 'tenant.{tenant}.{resource}',
    'events' => ['RecordChanged'],
],
```

The channel **must be private and tenant-scoped**. A public or tenant-agnostic
channel is a cross-tenant leak that no server-side check can catch, so the
broadcast driver refuses to start without one.

The panel does not ship the events. Your application broadcasts what it already
has; the panel subscribes. The payload carries an id and the changed fields.

**Verify the socket after touching broadcasting:**

```bash
make verify-broadcast
```

Nothing else will tell you. `useLiveUpdates` degrades to polling when
`window.Echo` is absent, so a broken transport renders as a working panel.

Also: with `BROADCAST_CONNECTION=log`, channel authorisation never runs at all
and every channel authorises, including for guests. `panel:doctor` reports it.

Redis is not a UI transport. Use it for `CACHE_STORE` / `QUEUE_CONNECTION` /
`BROADCAST_CONNECTION` if the host already runs it. The kit does not require
Redis and does not start Reverb.

See also [Dashboards and widgets](06-dashboards-and-widgets.md#polling-and-live-updates).

## Search at scale

See [Commands](11-commands.md#search-indexes-at-scale) for `panel:search-index`
and the doctor nudge when catalogues grow past ~10k searchable rows.

## SSR

Off by default, deliberately. The starter kit ships it on with nothing serving
it, so every request pays a failed connection to port 13714 before falling back:
a page that works and is quietly slower.

It does render: `/login` with SSR on returns `data-server-rendered`, a `<form>`
and three `<input>`s; with it off, none of them.

**The flag goes first**, because `inertia:start-ssr` reads the config and
refuses to start while it is false:

```bash
make ssr    # does all three steps in the working order
```

## Backups

The Backups screen reads whatever `spatie/laravel-backup` is configured with.
Restore and delete are behind `manage_backups`, separate from `view_operations`.

## Assets

```bash
npm run build
```

The published `resources/css/app.css` points Tailwind at the package. **Without
that line every utility used only inside the package is purged** and you get a
correct table with no styling at all, which reads as "the design did not come
with it".

### Navigation feel (Inertia hops)

Page-to-page clicks feel slow when every hop rebuilds and re-sends the shell
(nav, i18n bag, settings index, panel chrome). The kit marks those as
`Inertia::once`, so later visits skip the work while the client keeps the first
payload. Hosts that still share `panelNav` / `messages` / `panelPages` in
`HandleInertiaRequests` should use `Inertia::once` too, or drop those keys and
let `SharePanelProps` own them.

For a fair demo or production check:

1. Prefer `npm run build` + `php artisan serve` over `composer run dev` (Vite
   HMR). Dev mode ships many unbundled modules and makes every hop look worse
   than production.
2. Set `APP_DEBUG=false` when measuring. Debug tooling adds work on every
   request that is not present in production.
3. Run a queue worker when `QUEUE_CONNECTION` is not `sync` (`database`,
   `redis`, …). Bulk actions, exports and digests otherwise sit pending and
   operators retry, which feels like a slow UI.
4. Hover prefetch is on shell nav links (`prefetch="hover"` + `cache-for="30s"`).
   Keep that pattern on custom chrome Links.

```bash
php artisan panel:journey --tenant=<slug> --runs=3
php artisan panel:benchmark --tenant=<slug> --runs=3
```

## Databases

Development here is SQLite, so every performance number in this documentation
demonstrates that the query *shape* is sound rather than transferring to
Postgres unchanged. Benchmark on your own engine before quoting figures.

## Before you ship

```bash
php artisan panel:doctor        # silent misconfiguration
php artisan panel:permissions sync
php artisan panel:benchmark --runs=3
```

And the negative journey: sign in as somebody from another organisation and walk
the same pages. Every hop must fail. A positive journey passes just as happily
with no isolation at all — a negative journey that passes is a finding.
