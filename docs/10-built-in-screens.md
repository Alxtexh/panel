# 10. Built-in screens

The package ships complete screens that need no code from you. Every one is
mounted by default and can be dropped per panel.

## What ships

| Screen | Where it appears | Ability |
|---|---|---|
| **Backups** | Account menu | `view_operations`, `manage_backups` to restore or delete |
| **Logs** | Account menu | `view_operations` |
| **Monitoring** | Account menu | `view_operations` |
| **Activity** | Account menu | — |
| **Trash** | Account menu | Per-resource `restore` / `forceDelete` |
| **User management** | Account menu | Resource abilities |
| **Roles and permissions** | Settings | `manage_roles` |
| **Documents** | Navigation | `manage_documents` |
| **Assistant settings** | Settings | `manage_assistant` |
| **Workspaces** | Settings | — |
| **Organisation** | Settings | — |
| **Profile, Security** | Account menu | — (your own account) |
| **Help, FAQ, About, Changelog** | Navigation | — |
| **Sitemap, Environment** | Navigation | — |

## "Why can I not see Monitoring / Backups / Logs?"

**Almost always: the signed-in account holds no role.**

These entries live in the **account menu** — the dropdown under your avatar —
rather than the sidebar, because backups and logs belong to the *installation*
rather than to the organisation whose records fill the navigation. They are
gated on `view_operations`, and an account with no role holds nothing.

Check it:

```bash
php artisan panel:permissions list
php artisan tinker --execute='$u = App\Models\User::first(); echo $u->roles->pluck("name");'
```

If that prints nothing, grant a role:

```bash
php artisan panel:permissions sync
php artisan panel:permissions grant --email=you@example.com
```

This is authorisation working, not a missing feature. The entry never reaches
the browser at all when you may not open it — an `href` a person cannot use is
worse than no entry, and a hidden link is not a control on its own, so the
route refuses too.

**Second possibility: the panel dropped them.** A panel can decline any packaged
screen:

```php
Panel::make('client')
    ->path('client')
    ->without(['operations', 'trash', 'documents', 'roles']);
```

The route goes with the menu entry rather than only the link, so a customer
portal cannot be talked into reaching them by typing a URL.

The keys `without()` accepts: `operations`, `trash`, `documents`, `roles`,
`help`, `workspaces`, `assistant-settings`.

## The account menu

`DefaultAccountMenuItems` is rendered by `AppSidebar` and `AppTopNav`, so every
panel gets it without wiring. To add your own entries, declare them on the
panel rather than editing the component:

```php
Panel::make('admin')->userMenuItems([
    [
        'key' => 'device-preview',
        'label' => 'Device preview',
        'href' => static fn (): string => route('screens.devices'),
        'icon' => 'smartphone',
    ],
]);
```

`href` may be a closure, which is resolved per request — a route helper called
at boot would bake in the first request's URL.

## Operations, in detail

**Backups** lists snapshots, their size and age, and offers restore and delete
behind `manage_backups` — separate from `view_operations` deliberately, because
everybody on an operations rota should see whether last night's backup ran, and
restoring over the live database is a much smaller circle.

**Logs** reads the application's log files with the level and channel filtered
server-side, so a 256 MB file does not reach the browser.

**Monitoring** samples queue depth, failed jobs, cache hit rate and scheduler
health. It needs `panel:monitor-sample` running on a schedule to have anything
to show:

```php
// routes/console.php
Schedule::command('panel:monitor-sample')->everyFiveMinutes();
```

Without that the screen renders and reports no samples, which is honest rather
than broken.

## Trash

A resource whose model uses `SoftDeletes` contributes to the bin automatically.
The screen groups by resource and enforces the per-resource `restore` and
`forceDelete` abilities separately — a portal whose resources do not soft-delete
shares `null` and no menu entry renders.

`panel:prune-trash` deletes permanently on a schedule. It supports `--pretend`,
which is a security feature rather than a convenience: the only way to trust an
irreversible scheduled deletion is to be able to ask what it would do first.

## Documents

Invoice and receipt templates, edited in the browser and rendered to print. The
templates carry your title, footer, support phone and support email, so the
screens are gated on `manage_documents` — anyone able to edit them can change
what every document you send says.
