<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns;

/**
 * The organisation, and stancl/tenancy's tenant.
 *
 * IT IMPLEMENTS THE CONTRACT RATHER THAN EXTENDING STANCL'S MODEL, and the
 * difference is the `data` column. `Stancl\Tenancy\Database\Models\Tenant` uses
 * VirtualColumn: anything not in a real column is folded into a JSON `data`
 * blob. That is a fine default for an app whose tenant record is a bag of
 * settings, and wrong here - `name`, `slug` and `logo_path` are real columns
 * with real indexes, and burying them in JSON would make every branding lookup
 * a JSON extraction and every one of them unindexable.
 *
 * So this keeps its own schema and adopts only the traits that carry behaviour
 * the tenancy layer needs:
 *
 *   CentralConnection - the tenants table lives on the CENTRAL connection and
 *   must be read from there even while a tenant connection is active. Without
 *   it, looking up a tenant from inside tenancy queries the tenant's own
 *   database, which does not have a tenants table.
 *
 *   HasDatabase - supplies the per-tenant database name and connection for
 *   multi-database mode. Harmless in single-database mode, where nothing asks.
 *
 *   HasInternalKeys / TenantRun - the `getInternal`/`setInternal` and `run()`
 *   halves of the contract.
 *
 * NOT `final` any more: stancl resolves the configured tenant model through the
 * container and some of its internals return `static`, which a final class
 * still satisfies - but the resolver cache and the collection type both expect
 * to be able to extend it in tests.
 */
class Tenant extends Model implements TenantWithDatabase
{
    use Concerns\CentralConnection;
    use Concerns\HasDatabase;

    /*
     * Hostname identification. Adds the `domains` relation the
     * DomainTenantResolver reads, and the `createDomain()` helper.
     *
     * Present even though this panel is reached by path today: identification
     * is a routing concern, and a tenant that cannot be named by hostname is a
     * tenant that cannot be given its own domain later without a migration.
     */
    use Concerns\HasDomains;
    use Concerns\HasInternalKeys;
    use Concerns\TenantRun;

    protected $table = 'tenants';

    protected $guarded = [];

    /**
     * Off, because this model does NOT use a `data` column.
     *
     * stancl's own model relies on missing-attribute access returning null so
     * VirtualColumn can intercept it. This one has real columns, so the normal
     * Laravel behaviour is the one we want everywhere except where the tenancy
     * internals probe for optional keys.
     */
    protected static $modelsShouldPreventAccessingMissingAttributes = false;

    /**
     * Is this organisation locked out of the panel?
     *
     * READ FROM THE COLUMN, never cached on the instance. A suspension takes
     * effect on the NEXT request, and an operator who is mid-session when
     * billing suspends them must be stopped at that next request rather than
     * when their session happens to expire.
     */
    public function isSuspended(): bool
    {
        return $this->suspended_at !== null;
    }

    public function suspend(?string $reason = null): void
    {
        $this->forceFill([
            'suspended_at' => now(),
            'suspended_reason' => $reason,
        ])->save();
    }

    /** The reason is cleared too - a stale one would be shown at the next suspension. */
    public function unsuspend(): void
    {
        $this->forceFill(['suspended_at' => null, 'suspended_reason' => null])->save();
    }

    protected function casts(): array
    {
        return [
            'suspended_at' => 'datetime',
            'theme_colors' => 'array',
            'features' => 'array',
            // Roadmap 4.3: the billing preferences singular's one record.
            'billing' => 'array',
        ];
    }

    public function getTenantKeyName(): string
    {
        return 'id';
    }

    public function getTenantKey()
    {
        return $this->getAttribute($this->getTenantKeyName());
    }

    /**
     * The internal keys stancl stores on the tenant.
     *
     * stancl's model keeps these inside the `data` blob under a `tenancy_`
     * prefix. With real columns there is nowhere to put them, and the ones that
     * matter (`db_name`, `db_connection`) are derived rather than stored - so
     * they live in memory for the lifetime of the instance, which is all the
     * bootstrappers need.
     *
     * @var array<string, mixed>
     */
    protected array $internal = [];

    public function getInternal(string $key)
    {
        // `db_name` IS PERSISTED, the rest are not.
        //
        // It is the one internal key that must answer correctly on a tenant
        // freshly loaded from the central connection, because hybrid mode asks
        // it to decide whether this tenant is database-isolated or column-
        // scoped. An in-memory-only answer is null on every fresh request, so
        // every tenant looked column-scoped and the dedicated ones silently
        // were not isolated by connection at all.
        //
        // The others (`db_connection` and friends) are written by a bootstrapper
        // during the request that uses them, so memory is the right lifetime.
        if ($key === 'db_name') {
            return $this->internal[$key] ?? $this->getAttribute('tenancy_db_name');
        }

        return $this->internal[$key] ?? null;
    }

    public function setInternal(string $key, $value)
    {
        if ($key === 'db_name') {
            $this->setAttribute('tenancy_db_name', $value);
        }

        $this->internal[$key] = $value;

        return $this;
    }

    /** Whether this tenant has a database to itself. */
    public function hasOwnDatabase(): bool
    {
        return $this->getInternal('db_name') !== null;
    }
}
