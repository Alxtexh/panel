<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use PanelKit\Panel\Models\Scopes\TenantScope;

/**
 * One recorded change.
 *
 * SCOPED, because an audit trail describes an organisation's operations in
 * detail - who works there, what they touch, when they are at their desk. It is
 * more revealing than most of the data it describes.
 *
 * NO `updated_at`, AND NOTHING IS FILLABLE. An audit entry that can be edited is
 * not evidence. Entries are written by `AuditRecorder` through the query builder
 * and never through this model, which exists to READ them.
 */
#[ScopedBy(TenantScope::class)]
final class AuditEntry extends Model
{
    protected $table = 'audit_entries';

    public $timestamps = false;

    /** Deliberately empty - see the class note. */
    protected $fillable = [];

    protected function casts(): array
    {
        return [
            'changes' => 'array',
            'created_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The actor, as it should be shown.
     *
     * Prefers the SNAPSHOT taken at write time over the current user row, so a
     * rename does not rewrite history - and so a departed colleague is still
     * named rather than appearing as a blank.
     */
    public function actor(): string
    {
        return $this->actor_name ?? 'Someone who no longer has an account';
    }
}
