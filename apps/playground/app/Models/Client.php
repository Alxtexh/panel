<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[ScopedBy(TenantScope::class)]
final class Client extends Model
{
    /**
     * Explicit, not `$guarded = []`. Spec target 7: mass assignment is closed by
     * construction. `tenant_id` is deliberately absent — it is set from the
     * acting user's tenant, never from request input, or a caller could write a
     * row into somebody else's tenant.
     */
    protected $fillable = [
        'reminder_days',
        'plan_id',
        'router_id',
        'name',
        'phone',
        'access_code',
        'status',
        'plan_type',
        'expiry_date',
    ];

    protected function casts(): array
    {
        return [
            'reminder_days' => 'array',
            'expiry_date' => 'datetime',
        ];
    }

    public function plan(): BelongsTo
    {
        return $this->belongsTo(Plan::class);
    }

    public function router(): BelongsTo
    {
        return $this->belongsTo(Router::class);
    }
}
