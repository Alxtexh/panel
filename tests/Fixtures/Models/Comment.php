<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Alxtexh\Panel\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;

/**
 * A child record, for the relation manager.
 *
 * TENANT-SCOPED IN ITS OWN RIGHT, not merely by virtue of its parent. A child
 * that relied on the parent's scope is isolated only along the path somebody
 * remembered to guard - and the relation endpoint takes a parent id from the
 * URL, so "reachable through a parent" has to be as scoped as the parent is.
 */
#[ScopedBy(TenantScope::class)]
class Comment extends Model
{
    protected $guarded = [];
}
