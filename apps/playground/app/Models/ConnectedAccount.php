<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * A sign-in provider attached to somebody's account.
 *
 * IDENTITY ONLY - see the migration for why no token is kept.
 */
final class ConnectedAccount extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'last_used_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
