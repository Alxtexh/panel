<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns;

/**
 * A tenant that satisfies stancl v3 without stancl's `data` blob.
 *
 * REAL COLUMNS, NOT A JSON BAG. stancl's own model leans on VirtualColumn -
 * missing attributes return null so it can intercept them - and an application
 * that already has a `tenants` table with real columns should not have to adopt
 * that shape to use the package. Proving the panel works against a
 * conventionally-shaped model is the point: it is what a consumer will have.
 *
 * `$modelsShouldPreventAccessingMissingAttributes` IS OFF for the same reason.
 * The tenancy internals probe for optional keys, and strict missing-attribute
 * access turns those probes into exceptions.
 */
class StanclTenant extends Model implements TenantWithDatabase
{
    use Concerns\CentralConnection;
    use Concerns\HasDatabase;
    use Concerns\HasDomains;
    use Concerns\HasInternalKeys;
    use Concerns\TenantRun;

    protected $table = 'tenants';

    protected $guarded = [];

    protected static $modelsShouldPreventAccessingMissingAttributes = false;

    public function getTenantKeyName(): string
    {
        return 'id';
    }

    public function getTenantKey(): int|string
    {
        return $this->getAttribute('id');
    }
}
