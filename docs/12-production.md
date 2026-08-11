# 12. Going to production

## Queues

Bulk actions past the threshold, exports, imports and scheduled reports all
dispatch jobs. Without a worker they queue and never run, and the screen reports
a job that stays pending.

```bash
php artisan queue:work --queue=default
```

## Live updates

Lists refresh themselves. Two drivers:

**`poll`** — the default. Zero infrastructure, works on plain PHP-FPM.

**`broadcast`** — a websocket, when you run one.

```php
// config/panel.php
'live' => [
    'driver' => 'broadcast',
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

## SSR

Off by default, deliberately. The starter kit ships it on with nothing serving
it, so every request pays a failed connection to port 13714 before falling back
— a page that works and is quietly slower.

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
correct table with no styling at all — which reads as "the design did not come
with it".

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
