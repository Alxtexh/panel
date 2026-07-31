<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
 * THE THREAD IS `ticket_replies`, NOT THE CHAT TABLE, and that is a reversal
 * of what this note used to say. Pointing at the existing chat thread avoided
 * a second messaging system, which was the right instinct and the wrong call:
 * `chat_messages` records a DIRECTION, not an author, and has no notion of a
 * message the customer may not read. A rota needs both. See the replies
 * migration for the whole argument.
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
            'first_response_at' => 'datetime',
            'last_reply_at' => 'datetime',
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

    /** The thread, oldest first - which is how a conversation reads. */
    public function replies(): HasMany
    {
        return $this->hasMany(TicketReply::class)->oldest();
    }

    /**
     * Record a message on this ticket and move the ticket's own clocks.
     *
     * ONE PLACE, because three columns have to agree and they are the three a
     * support desk is measured on. Written as a method rather than a model
     * event on `TicketReply` so that the ordering is visible: the reply is
     * saved first, and the ticket only claims a first response once one
     * exists.
     *
     * `first_response_at` COUNTS ONLY PUBLIC REPLIES BY SOMEBODY OTHER THAN
     * THE OPENER. An internal note is not an answer - nobody outside the desk
     * can see it - and a customer replying to their own ticket is not the desk
     * responding. Counting either would make the response-time report flatter
     * than the truth, which is the direction nobody questions.
     *
     * @param  list<array<string, mixed>>  $attachments
     */
    public function addReply(string $body, string $visibility, ?int $authorId = null, array $attachments = []): TicketReply
    {
        $authorId ??= Auth::id();

        $reply = $this->replies()->create([
            'author_id' => $authorId,
            'visibility' => $visibility,
            'body' => $body,
            'attachments' => $attachments === [] ? null : $attachments,
        ]);

        $this->last_reply_at = $reply->created_at;

        if ($this->first_response_at === null
            && $visibility === TicketReply::PUBLIC
            && (string) $authorId !== (string) $this->opened_by) {
            $this->first_response_at = $reply->created_at;
        }

        $this->save();

        return $reply;
    }
}
