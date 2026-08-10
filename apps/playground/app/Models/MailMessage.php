<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Alxtexh\Panel\Models\Scopes\TenantScope;

/**
 * A message in the panel's mailbox.
 *
 * TENANT-SCOPED LIKE EVERYTHING ELSE, and additionally filtered by user in the
 * controller. Both are needed and neither is redundant: the tenant scope stops
 * another organisation's mail being reachable at all, and the user filter stops
 * a colleague's inbox being readable within one organisation. Dropping either
 * leaves a hole the other does not cover.
 */
#[ScopedBy(TenantScope::class)]
final class MailMessage extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'is_read' => 'boolean',
            'is_starred' => 'boolean',
            'is_important' => 'boolean',
            'has_attachment' => 'boolean',
            'received_at' => 'datetime',
        ];
    }

    /**
     * A MESSAGE WITH NO THREAD IS ITS OWN THREAD.
     *
     * The list collapses by `thread_id`, so a null there is not a message
     * outside every thread - it is a message in the null thread, along with
     * every other one. Three unrelated messages became a single row, and the
     * more mail arrived the fewer rows the inbox showed.
     *
     * Backfilled on create rather than defaulted in the schema, because the
     * value is the row's own id and no column default can express that.
     */
    protected static function booted(): void
    {
        self::created(static function (self $message): void {
            if ($message->thread_id === null) {
                $message->thread_id = $message->id;
                $message->saveQuietly();
            }
        });
    }
}
