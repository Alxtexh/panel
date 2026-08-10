<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tenancy;

use Stancl\Tenancy\Bootstrappers\DatabaseTenancyBootstrapper;
use Stancl\Tenancy\Contracts\Tenant;

/**
 * Switch the connection only for tenants that actually have a database.
 *
 * WHY STANCL'S OWN BOOTSTRAPPER CANNOT DO HYBRID. `DatabaseTenancyBootstrapper`
 * calls `connectToTenant()` for every tenant it is given, unconditionally -
 * correct for an installation where multi-database is the only mode, and fatal
 * for one where it is a per-tenant choice. Enabled, it throws
 * `TenantDatabaseDoesNotExistException` on the first column-scoped tenant;
 * disabled, the dedicated tenants quietly share the central database with
 * nothing but a `tenant_id` column between them.
 *
 * Neither failure is the interesting one. The interesting one is that BOTH look
 * like a configuration problem rather than an isolation problem, so the natural
 * fix - turn the bootstrapper off, since most tenants do not need it - is the
 * one that removes the isolation.
 *
 * So this subclass asks the tenant first. A tenant with `db_name` set gets the
 * full stancl behaviour, including its existence check. A tenant without one is
 * left on the central connection, where Alxtexhpanel's global scope constrains it by
 * column. That is what `panel.tenancy.mode = hybrid` means, and until now the
 * panel could describe that arrangement without being able to run it.
 *
 * REVERT IS UNCONDITIONAL, and deliberately so. Reconnecting to central when we
 * never left is a no-op; failing to reconnect when we did leave strands the next
 * tenant on the previous tenant's database. Tracking whether we switched would
 * be one piece of per-request state on a long-lived object, which is the exact
 * shape of the Octane leak this project has already been bitten by, to save a
 * call that costs nothing.
 */
final class ConditionalDatabaseBootstrapper extends DatabaseTenancyBootstrapper
{
    public function bootstrap(Tenant $tenant): void
    {
        // `getInternal` rather than `database()->getName()`: the latter FALLS
        // BACK to a generated name for any tenant, so it is never null and every
        // tenant would look database-isolated. That mistake has already been
        // made once in this codebase, in the hybrid check itself, and it is not
        // detectable by reading the call - only by knowing stancl's fallback.
        if ($tenant->getInternal('db_name') === null) {
            return;
        }

        parent::bootstrap($tenant);
    }
}
