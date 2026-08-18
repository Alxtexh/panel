# 8. Authorisation and tenancy

Two independent gates, and both must pass.

**Tenancy** asks *is this yours*. **Permission** asks *may you do this to it*.
Neither implies the other: full permissions still cannot reach another
organisation's record, and being in the right organisation still cannot delete
without `delete_*`.

## Abilities are derived, never stored

```bash
php artisan panel:permissions list          # every ability, from the registry
php artisan panel:permissions sync          # reconcile roles
php artisan panel:permissions sync --prune  # remove names nothing corresponds to
php artisan panel:permissions grant --email=you@example.com
```

Names are computed from the registry — `view_any_invoices`,
`force_delete_invoices` — because a `permissions` table would be a second copy
that can disagree with it, and it disagrees in the dangerous direction: a renamed
resource leaves stale names in a role that looks fully populated and grants
nothing.

Panel-wide abilities: `manage_roles`, `impersonate_users`, `view_operations`,
`manage_backups`, `manage_documents`. Declare your own in `config/panel.php`
under `abilities`.

`grants_all` marks a role that holds every ability **including ones invented
later**. Inferring that from "currently holds all of them" would make a role
become a superuser the moment somebody ticked the last box.

## Panel access

Signing in is not the same as using a portal. After the guard authenticates,
the kit asks whether this person may use **this** panel at all.

```php
use Alxtexh\Panel\Contracts\CanAccessPanel;
use Alxtexh\Panel\Panel;

final class User extends Authenticatable implements CanAccessPanel
{
    public function canAccessPanel(Panel $panel): bool
    {
        return $this->is_staff;
    }
}

// And/or on the panel:
Panel::make('admin')->canAccess(fn ($user) => $user->is_staff);
```

Either returning false is a 403, not an empty broken shell. When the person is
allowed in but the sidebar is empty (no grants), the dashboard and shell say so
instead of looking like a failed install. Shared props: `panelEmptyGrants` and
`panelEmptyGrantsHint` (create Administrator via `panel:permissions sync` then
`panel:permissions grant --email=...`). The installer does not grant every ability.

## A resource with no policy is denied entirely

Forgetting to write one locks the resource down rather than opening it up.
`panel:doctor` tells you which are missing. `make:panel-resource` generates a
policy stub — review it, because an unreviewed stub is a real grant.

```php
final class InvoicePolicy extends TenantResourcePolicy
{
    protected function modelFor(): string { return Invoice::class; }
}
```

`TenantResourcePolicy` combines the ability check with ownership. If your policy
lives outside the conventional namespace, name the model explicitly as above —
otherwise it derives `App\Models\X` from the class name and silently denies.

## Tenancy modes

| Mode | Isolation |
|---|---|
| `column` | One database, a `tenant_id` column, a global scope |
| `database` | A database per tenant, isolated by connection |
| `hybrid` | Per tenant — most share, the large ones do not |
| `none` | Single-tenant; no scoping applied |

```php
// config/panel.php
'tenancy' => [
    'mode' => 'column',
    'resolver' => fn () => auth()->user()?->tenant_id,
],
```

**A null tenant key is a deny, never "all tenants".** Every branch fails closed.
That is why an unconfigured multi-tenant panel shows nothing rather than
everything.

With Spatie teams enabled — required for per-tenant roles:

```php
// config/permission.php
'teams' => true,
'column_names' => ['team_foreign_key' => 'tenant_id'],
```

Spatie defaults `teams` to **false**, and that default fails open here: roles
carry a tenant, the panel sets a team id per request, and the permission package
ignores both — so one role grants across every organisation, with no error and
nothing in a log. `panel:doctor` reports it.

Hybrid mode needs Alxtexhpanel's `ConditionalDatabaseBootstrapper`, because
stancl's own switches the connection for *every* tenant and throws on the first
shared one.

> **Moving a tenant to a dedicated database makes them slower until you
> reindex.** Every index in a column-scoped schema leads with `tenant_id`, and
> the panel correctly drops that predicate in database mode — so no index can
> serve an `ORDER BY` and every page becomes a full scan. Measured at 20–60× on
> identical data. Run `php artisan panel:reindex-tenant` inside the tenant.

## The permission matrix

The Roles screen edits what everybody may do, including the editor — so
`manage_roles` is separate from being an administrator, and can be withheld from
a role that otherwise has full access to the data. That is the exact separation
an operations team needs: manage every record, change nobody's permissions.
