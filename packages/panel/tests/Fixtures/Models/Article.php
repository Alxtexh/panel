<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Alxtexh\Panel\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * A tenant-scoped record, and the reason it is not `Post`.
 *
 * `Post` deliberately carries NO tenancy, so the list-surface tests prove
 * sorting and paging without a scope in the way. Isolation needs the opposite,
 * and one fixture cannot be both: a model that is sometimes scoped would make
 * every test depend on which mode the previous one left behind.
 *
 * SCOPED BY ATTRIBUTE, exactly as a consumer's model is - `#[ScopedBy]` is
 * what the generator writes and what the documentation shows. A fixture that
 * applied the scope some other way would be testing a path nobody uses.
 */
#[ScopedBy(TenantScope::class)]
class Article extends Model
{
    /*
     * SOFT DELETES, because that is what a panel resource usually is - the
     * trash screen, restore and pruning all exist for it, and a fixture that
     * hard-deleted would leave those paths testable only through the demo.
     */
    use SoftDeletes;

    protected $guarded = [];
}
