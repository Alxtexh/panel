<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use PanelKit\Panel\Audit\Auditable;

#[ScopedBy(TenantScope::class)]
final class Client extends Model
{
    /*
     * AUDITED. A subscriber record is the thing this panel exists to change,
     * and "who suspended this account, and when" is the question asked most
     * often after the fact.
     */
    use Auditable;
    use SoftDeletes;

    /**
     * Explicit, not `$guarded = []`. Spec target 7: mass assignment is closed by
     * construction. `tenant_id` is deliberately absent - it is set from the
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
        'contacts',
        'metadata',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'reminder_days' => 'array',
            'expiry_date' => 'datetime',
            // Both are shaped and sanitised by their field's
            // `transformForStorage` before they ever reach here; the cast only
            // handles the JSON round-trip.
            'contacts' => 'array',
            'metadata' => 'array',
            // Deliberately absent from `$fillable` above - see the
            // `reserve_custom_field_storage` migration's own note. Only
            // `RecordController::foldCustomFields()` writes to it, via
            // `forceFill()`, never mass assignment.
            'custom' => 'array',
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
