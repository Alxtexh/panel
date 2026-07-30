# Deploying a PanelKit panel

PanelKit is a Laravel package, so a panel deploys like a Laravel app. What
follows is only the part that is *specific to the panel* — the processes it
needs running, and the failures that are quiet if they are missing.

## The deploy script

```bash
composer install --no-dev --optimize-autoloader
npm ci && npm run build

php artisan migrate --force
php artisan panel:cache-clear      # see below - not optional
php artisan config:cache
php artisan route:cache
php artisan view:cache

php artisan panel:doctor           # fails the deploy if something is wrong
```

`panel:doctor` returns a non-zero exit code when it finds a problem, so putting
it last in the script makes a bad deploy fail loudly instead of serving a panel
that is missing an index or a policy.

### Why `panel:cache-clear` is in there

The schema cache is keyed by a fingerprint of your resource classes. That
fingerprint does not change when the *package* changes under them, so a release
that alters the schema shape will otherwise be served from a cache built by the
previous version — a panel rendering last week's columns with this week's code.
Clearing it on every deploy costs one warm request.

## Two processes, not one

A panel with only a web server works until the first export.

**Queue worker.** Exports, bulk actions and scheduled report delivery are jobs.
Without a worker they queue silently — the user gets "your export is being
prepared" and nothing ever arrives.

```
php artisan queue:work --queue=default --tries=3 --max-time=3600
```

**Scheduler.** One cron entry, every minute:

```
* * * * * cd /path/to/app && php artisan schedule:run >> /dev/null 2>&1
```

It drives: the backup run and its cleanup, `backup:monitor` at 09:00, report
delivery (`panel:reports-due`, asked every minute), and the three nightly prunes
(`panel:prune-exports`, `panel:prune-trash`, `panel:prune-uploads`).

**The scheduler writes a heartbeat every minute**, which the panel reads to
answer "is the scheduler running?" on the monitoring screen. A stopped scheduler
is otherwise invisible: backups stop being taken, trash stops being pruned, and
nothing anywhere says so — the panel just quietly stops doing the things nobody
watches. That heartbeat exists so a dead cron shows up as a red line on a screen
rather than as a missing backup on the night you need one.

On more than one app server, `->onOneServer()` is already set on the jobs where
it matters, but it needs a **shared lock store** to mean anything — see cache
below.

## The support matrix

**SQLite, MySQL/MariaDB and Postgres are all first-class for panel data.** No
screen, field or column may require a specific driver; a driver-specific
feature ships with an arm for all three or it does not ship
(`DriverCoverageTest` enforces this). Two things remain optional
*optimisations* on Postgres, never requirements: pgvector for assistant
retrieval (every other driver scores in PHP against the same schema), and
`reltuples` row estimates (every other driver counts exactly).

**Redis, Reverb and Octane are accelerants, not dependencies.** A plain
`php artisan serve` with SQLite and the `database` cache store is a fully
supported, fully *healthy* installation — `panel:doctor` treats it as such,
live updates fall back to polling, and tenant cache isolation works on any
store (see below). Add Redis for cache speed, Reverb for push-based live
updates, Octane for request throughput — when the installation needs them,
not before.

## Cache and sessions

Any driver works for a single server. On more than one, the cache must be
**shared** — `redis`, `memcached` or `database` — because `->onOneServer()`
takes its lock from the cache store. With a per-server `file` cache every server
gets its own lock, every server thinks it is the only one, and the nightly
backup runs once per server.

There is no requirement for a *tagged* cache store; the schema cache is keyed
rather than tagged, deliberately, so that a file or database store works. The
same goes for **tenant cache isolation**: `PrefixCacheBootstrapper` isolates by
key prefix at the store contract, which works on every driver — do not use
stancl's tags-based `CacheTenancyBootstrapper`, which silently requires a
tagging store (`panel:doctor` flags that arrangement).

Redis in development is `scripts/redis-dev.sh` (binds 127.0.0.1:6381).

## Tailwind must be told about the packages

Tailwind scans your source for class names and **does not scan `node_modules`**.
If these two lines are missing from your CSS entry point, every utility used
only inside the packages is purged and you get a styled shell around an
unstyled table:

```css
@source '../../node_modules/@panelkit/ui/src/**/*.{vue,ts}';
@source '../../node_modules/@panelkit/inertia/src/**/*.{vue,ts}';
```

This is the single most common broken-looking install, and it produces no error
of any kind — the build succeeds and the page renders.

## Wayfinder

Route helpers are generated, not committed:

```bash
php artisan wayfinder:generate --with-form
```

It must run **before** `npm run build` and **after** any route change. Skipping
it on a fresh clone gives you a build failure with a missing import, which is
at least loud.

## Storage and file uploads

`php artisan storage:link` once. Uploads land on the `public` disk by default;
point `panel.uploads.disk` at S3 or equivalent if you have more than one app
server, or half your uploads will 404 depending on which server serves them.

## Environment

Nothing here is panel-specific except the last two, but the failure modes are:

| Variable | Why it matters |
| --- | --- |
| `APP_KEY` | Backup archives are encrypted with it. A rotated key makes existing backups unrestorable. |
| `APP_URL` | Signed URLs (export downloads) are generated against it. Wrong value = 403 on download. |
| `QUEUE_CONNECTION` | Leave it `sync` and every export blocks a web request until it finishes. |
| `PANEL_DEFAULT` | Which panel `/` resolves to when more than one is registered. |
| `PANEL_SUPPORT_EMAIL` | Shown on error screens. Unset means the error screen tells the user to contact nobody. |

## After the first deploy

Visit the panel and run through `panel:doctor`'s output. The checks that matter
most on a new deployment are the ones it cannot verify from code alone: that the
queue is actually being consumed, that the scheduler heartbeat is recent, and
that a backup destination has been written to.
