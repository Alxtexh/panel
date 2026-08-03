<?php

declare(strict_types=1);

namespace PanelKit\Panel\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * A sign-in provider attached to somebody's account.
 *
 * MOVED FROM THE REFERENCE APP. IDENTITY ONLY - see the migration for why no
 * token is kept.
 *
 * THE TABLE IS NAMED IN CONFIG, for the same reason the ticket tables are:
 * `connected_accounts` is a name an application may already use, and a migration
 * that succeeds against somebody else's table is worse than one that collides.
 *
 * THE USER MODEL IS THE APPLICATION'S. A package cannot name it, and
 * `auth.providers.users.model` is where Laravel already keeps the answer.
 */
final class ConnectedAccount extends Model
{
    protected $guarded = [];

    public function getTable(): string
    {
        return (string) config('panel.auth.social.table', 'connected_accounts');
    }

    protected function casts(): array
    {
        return [
            'last_used_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(
            (string) config('auth.providers.users.model', 'App\\Models\\User'),
        );
    }
}
