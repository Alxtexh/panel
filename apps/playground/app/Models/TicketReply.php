<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;
use PanelKit\Panel\Support\TenantContext;

/**
 * One message on a ticket - a reply the customer sees, or a note only the
 * desk sees.
 *
 * THE VISIBILITY IS THE WHOLE MODEL. Everything else here is bookkeeping;
 * `visibility` decides whether a sentence written by a tired operator at the
 * end of a shift is read by the person complaining. So it appears three
 * times, deliberately, and that is not duplication:
 *
 *   The COLUMN defaults to internal, so a forgotten value hides a reply
 *   rather than publishing a note.
 *   `visibleTo()` is the QUERY, so a thread built for an opener cannot
 *   contain one.
 *   `TicketPolicy::note()` is the GATE, so writing one needs the ability.
 *
 * Any one of those alone is a single point of failure for the worst bug this
 * feature can have.
 */
#[ScopedBy(TenantScope::class)]
final class TicketReply extends Model
{
    public const PUBLIC = 'public';

    public const INTERNAL = 'internal';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'attachments' => 'array',
        ];
    }

    protected static function booted(): void
    {
        /*
         * TENANT AND AUTHOR FROM CONTEXT, the same way a ticket stamps its
         * own - a reply attributed by request body is a way to put words in
         * somebody else's mouth on a record that gets read back in disputes.
         */
        self::creating(static function (self $reply): void {
            $reply->tenant_id ??= app(TenantContext::class)->currentKey();
            $reply->author_id ??= Auth::id();
        });
    }

    /**
     * THE THREAD AS THIS PERSON MAY SEE IT.
     *
     * Takes the entitlement as a BOOLEAN rather than reading the acting user
     * itself, because the caller has already asked the policy and passing the
     * answer keeps one decision in one place. A scope that re-derived it
     * would be a second implementation of "may you see internal notes", and
     * the two would disagree eventually.
     */
    public function scopeVisibleTo(Builder $query, bool $seesInternal): Builder
    {
        return $seesInternal
            ? $query
            : $query->where('visibility', self::PUBLIC);
    }

    public function isInternal(): bool
    {
        return $this->visibility === self::INTERNAL;
    }

    public function ticket(): BelongsTo
    {
        return $this->belongsTo(Ticket::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
