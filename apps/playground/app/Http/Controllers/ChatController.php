<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\ChatConversation;
use App\Models\ChatMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;

/**
 * The chat screen.
 *
 * A THREAD IS BOUNDED. Loading a whole conversation is fine at forty messages
 * and ruinous at forty thousand, and the difference is invisible until someone
 * has been using the panel for a year. The last N are fetched newest-first
 * through the index and reversed in PHP — reversing forty rows costs nothing,
 * where `orderBy('sent_at')` with no bound reads the entire thread to find its
 * end.
 *
 * THE CONVERSATION LIST AND THE THREAD ARE SEPARATE DEFERRED PROPS, so opening
 * a conversation re-fetches the thread and NOT the list. Selecting a contact is
 * the most repeated action on this screen; making it reload the sidebar as well
 * would double its cost for no benefit.
 */
final class ChatController extends Controller
{
    private const THREAD_LIMIT = 60;

    public function index(Request $request): Response
    {
        $conversationId = $request->query('id') !== null ? (int) $request->query('id') : null;

        return Inertia::render('apps/Chat', [
            'search' => trim((string) $request->query('q', '')),
            'selectedId' => $conversationId,
            'conversations' => Inertia::defer(fn (): array => $this->conversations($request), 'list'),
            'thread' => Inertia::defer(fn (): ?array => $this->thread($request, $conversationId), 'thread'),
        ]);
    }

    public function send(Request $request, int $id): JsonResponse
    {
        $validated = $request->validate([
            // Bounded: a message box with no ceiling is a way to write megabytes
            // into a text column one paste at a time.
            'body' => ['required', 'string', 'max:2000'],
        ]);

        $conversation = $this->scoped($request)->findOrFail($id);

        $message = ChatMessage::create([
            'conversation_id' => $conversation->id,
            'tenant_id' => $conversation->tenant_id,
            'direction' => 'outgoing',
            'body' => $validated['body'],
            'sent_at' => now(),
        ]);

        // Denormalised onto the conversation so the list can be ordered and
        // previewed without a correlated subquery per row — the N+1 that a
        // "most recent message" column exists to avoid.
        $conversation->last_message = $validated['body'];
        $conversation->last_message_at = $message->sent_at;
        $conversation->save();

        return response()->json([
            'message' => [
                'id' => $message->id,
                'direction' => 'outgoing',
                'body' => $message->body,
                'at' => $message->sent_at->format('H:i'),
            ],
        ]);
    }

    /** Clear the unread badge for one conversation. */
    public function markRead(Request $request, int $id): JsonResponse
    {
        $conversation = $this->scoped($request)->findOrFail($id);

        $conversation->unread_count = 0;
        $conversation->save();

        return response()->json(['ok' => true]);
    }

    /** @return list<array<string, mixed>> */
    private function conversations(Request $request): array
    {
        $search = trim((string) $request->query('q', ''));

        return $this->scoped($request)
            ->when($search !== '', fn ($q) => $q
                ->where('contact_name', 'like', $search . '%')
                ->orWhere('contact_name', 'like', '% ' . $search . '%'))
            ->orderByDesc('last_message_at')
            ->orderByDesc('id')
            ->limit(50)
            ->get()
            ->map(fn (ChatConversation $c): array => [
                'id' => $c->id,
                'name' => $c->contact_name,
                'status' => $c->status,
                'preview' => $c->last_message,
                'unread' => $c->unread_count,
                'at' => $c->last_message_at?->diffForHumans(null, true),
            ])
            ->all();
    }

    /** @return array<string, mixed>|null */
    private function thread(Request $request, ?int $id): ?array
    {
        if ($id === null) {
            return null;
        }

        $conversation = $this->scoped($request)->find($id);

        if ($conversation === null) {
            return null;
        }

        /*
         * Newest first through the index, then reversed for display.
         *
         * The natural-looking `orderBy('sent_at')->get()` reads the whole thread
         * to reach its end. This reads sixty rows whatever the thread length,
         * and the reversal is sixty items in memory.
         */
        $messages = $conversation->messages()
            ->orderByDesc('sent_at')
            ->orderByDesc('id')
            ->limit(self::THREAD_LIMIT)
            ->get(['id', 'direction', 'body', 'sent_at'])
            ->reverse()
            ->values()
            ->map(fn (ChatMessage $m): array => [
                'id' => $m->id,
                'direction' => $m->direction,
                'body' => $m->body,
                'at' => $m->sent_at?->format('H:i'),
            ])
            ->all();

        return [
            'id' => $conversation->id,
            'name' => $conversation->contact_name,
            'email' => $conversation->contact_email,
            'status' => $conversation->status,
            'messages' => $messages,
        ];
    }

    private function scoped(Request $request): \Illuminate\Database\Eloquent\Builder
    {
        // Tenant scope is global; the user filter is what keeps one operator's
        // conversations out of another's list inside the same organisation.
        return ChatConversation::query()->where('user_id', $request->user()->id);
    }
}
