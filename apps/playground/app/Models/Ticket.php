<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;
use PanelKit\Panel\Audit\Auditable;
use PanelKit\Panel\Support\TenantContext;

/**
 * A conversation with two ends - roadmap 6.2.
 *
 * WHY A TICKET IS NOT JUST ANOTHER RESOURCE. Every other record in this panel
 * is read by one side: an operator reads clients, a reseller reads plans. A
 * ticket is read by BOTH, under different rules - the person who opened it
 * always reads their own, the operator reads the whole organisation's without
 * having opened any - which is why the policy came first and the screens
 * second.
 *
 * THE MESSAGES ARE NOT HERE. `conversation_id` points at the chat thread that
 * already stores messages, authorship and read state; a `ticket_messages`
 * table beside it would be a second messaging system to keep in step, and the
 * one that drifts is always the one somebody reads at 3am.
 *
 * AUDITED, because "who closed this and when" is the question every disputed
 * ticket ends in.
 */
#[ScopedBy(TenantScope::class)]
final class Ticket extends Model
{
    use Auditable;

    public const OPEN = 'open';

    public const PENDING = 'pending';

    public const RESOLVED = 'resolved';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'resolved_at' => 'datetime',
        ];
    }

    protected static function booted(): void
    {
        /*
         * STAMPED ON WRITE, so a ticket opened through any path - the portal
         * form, an import, a test - belongs to the organisation that was
         * resolved rather than to whichever one a caller remembered to pass.
         */
        self::creating(static function (self $ticket): void {
            if ($ticket->tenant_id === null) {
                $ticket->tenant_id = app(TenantContext::class)->currentKey();
            }

            /*
             * AND SO IS THE OPENER, for a sharper reason. `opened_by` is half
             * the policy - it is what "read your own" reads - so a form field
             * for it would be a way to file a complaint under somebody else's
             * name AND to hand that person read access to it. Neither of the
             * two ticket resources exposes one, and this is what makes that
             * true rather than a habit two authors have to keep.
             */
            if ($ticket->opened_by === null) {
                $ticket->opened_by = Auth::id();
            }
        });

        /*
         * `resolved_at` FOLLOWS THE STATUS, in one place. Two writers - a
         * status change here, a timestamp set there - is how a "resolved"
         * ticket ends up with no resolution time and a reopened one keeps its
         * old one, and both make the resolution report quietly wrong.
         */
        self::saving(static function (self $ticket): void {
            if (! $ticket->isDirty('status')) {
                return;
            }

            $ticket->resolved_at = $ticket->status === self::RESOLVED ? now() : null;
        });
    }

    public function opener(): BelongsTo
    {
        return $this->belongsTo(User::class, 'opened_by');
    }

    public function assignee(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function conversation(): BelongsTo
    {
        return $this->belongsTo(ChatConversation::class, 'conversation_id');
    }
}
