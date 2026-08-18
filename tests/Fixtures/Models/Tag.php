<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Alxtexh\Panel\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * A tenant-scoped label, attached to articles through a pivot.
 *
 * BelongsToMany nested resources attach and detach existing rows. This model
 * has no article_id column: membership is the pivot, and another tenant's tag
 * is a 404 the same way a missing one is.
 */
#[ScopedBy(TenantScope::class)]
class Tag extends Model
{
    protected $guarded = [];

    public function articles(): BelongsToMany
    {
        return $this->belongsToMany(Article::class);
    }
}
