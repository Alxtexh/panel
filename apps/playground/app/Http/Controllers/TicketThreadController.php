<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\TicketReply;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

/**
 * Reading and writing a ticket's thread.
 *
 * ITS OWN CONTROLLER RATHER THAN A RELATION MANAGER, because a thread is not
 * a related LIST. A relation manager renders rows with columns and actions,
 * which is right for a subscriber's sessions and wrong for a conversation:
 * what is needed here is who said what, in order, with the desk's private
 * notes marked as such.
 *
 * THE VISIBILITY RULE IS ENFORCED HERE AND ONLY REACHES THE CLIENT AS DATA
 * THE READER IS ENTITLED TO. No internal note is ever serialised into a page
 * an opener receives - not hidden with a flag for the front end to respect,
 * not sent and filtered in a computed property. A note the browser never
 * received cannot be revealed by a devtools tab.
 */
final class TicketThreadController extends Controller
{
    /**
     * The thread as this reader may see it.
     *
     * @return array{replies: list<array<string, mixed>>, canReply: bool, canNote: bool}
     */
    public static function thread(Ticket $ticket): array
    {
        $seesInternal = Gate::allows('note', $ticket);

        $replies = $ticket->replies()
            ->visibleTo($seesInternal)
            ->with('author:id,name')
            ->get();

        return [
            'replies' => $replies->map(static fn (TicketReply $reply): array => [
                'id' => $reply->id,
                'body' => $reply->body,
                'internal' => $reply->isInternal(),
                'author' => $reply->author?->name ?? 'Removed user',
                // Whose side of the conversation, for which way the bubble
                // faces - derived server-side so the client needs no rule.
                'fromOpener' => (string) $reply->author_id === (string) $ticket->opened_by,
                'at' => $reply->created_at?->toDayDateTimeString(),
            ])->all(),

            'canReply' => Gate::allows('reply', $ticket),
            'canNote' => $seesInternal,
        ];
    }

    /**
     * FETCHED SEPARATELY FROM THE RECORD, like a relation panel. A ticket with
     * two hundred messages must not put two hundred messages in front of the
     * record somebody opened the page to read.
     */
    public function show(Ticket $ticket): JsonResponse
    {
        Gate::authorize('view', $ticket);

        return response()->json(self::thread($ticket));
    }

    public function store(Request $request, Ticket $ticket): RedirectResponse
    {
        $data = $request->validate([
            'body' => ['required', 'string', 'max:5000'],
            'visibility' => ['required', Rule::in([TicketReply::PUBLIC, TicketReply::INTERNAL])],
        ]);

        /*
         * TWO GATES, PICKED BY WHAT IS BEING WRITTEN, and never one gate for
         * both. Adding to the conversation and writing in the desk's private
         * margin are different acts by different people; authorising a note
         * as though it were a reply would let the person who opened the
         * ticket write - and then read - the notes about themselves.
         */
        $ability = $data['visibility'] === TicketReply::INTERNAL ? 'note' : 'reply';

        Gate::authorize($ability, $ticket);

        $ticket->addReply($data['body'], $data['visibility']);

        return back();
    }
}
