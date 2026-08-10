<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Alxtexh\Panel\Models\Scopes\TenantScope;

/**
 * One person's saved table settings for one resource.
 *
 * TENANT-SCOPED AS WELL AS USER-SCOPED, and the redundancy is deliberate. A user
 * already belongs to exactly one tenant, so scoping by user would be sufficient
 * - right up until somebody writes a query that joins views to users and forgets
 * the second half. The global scope costs an indexed clause and removes the
 * possibility.
 */
#[ScopedBy(TenantScope::class)]
final class SavedView extends Model
{
    /**
     * `tenant_id` and `user_id` are deliberately absent.
     *
     * Both come from the acting context, never from request input. A form field
     * for either would be a way to save a view into somebody else's account.
     */
    protected $fillable = ['resource', 'name', 'state', 'is_default'];

    protected function casts(): array
    {
        return [
            'state' => 'array',
            'is_default' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
