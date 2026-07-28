<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\MailMessage;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;

/**
 * The mailbox.
 *
 * SCOPED TWICE, and both are load-bearing. The tenant global scope stops
 * another organisation's mail being reachable at all; the `user_id` filter
 * stops a colleague's inbox being readable inside one organisation. Neither
 * covers the other's case.
 *
 * THE LIST IS A LIST OF THREADS, NOT OF MESSAGES. The first cut showed every
 * row, so a message and its reply appeared as two entries with the same subject
 * - which is not what a mailbox is. Collapsing is done in SQL, and the row
 * carries how many messages the thread holds.
 *
 * THE COUNTS ARE ONE GROUPED QUERY EACH, not one per folder and one per label.
 * Seven folders and seven categories rendered with a badge each is the shape
 * addendum C1 exists to prevent - invisible at fourteen and the same mistake at
 * a hundred.
 *
 * FOLDERS AND CATEGORIES ARE DIFFERENT THINGS. A message lives in exactly one
 * folder and may carry one label; conflating them forces "in Inbox and in
 * Security" to become two rows. The rail shows them as two groups for the same
 * reason the data keeps them in two columns.
 */
final class MailController extends Controller
{
    /**
     * Real folders - the values the `folder` column may hold.
     *
     * `starred` and `important` are deliberately NOT here. They are flags that
     * cross folders: a message can be starred and still in the inbox, which a
     * folder value cannot express. They appear in the rail as views, not as
     * destinations.
     */
    private const FOLDERS = ['inbox', 'sent', 'archived', 'spam', 'trash'];

    /** What the rail's MENU group shows, in order. */
    private const VIEWS = ['inbox', 'starred', 'important', 'sent', 'archived', 'spam', 'trash'];

    /** The labels the rail's CATEGORIES group offers. */
    private const CATEGORIES = ['Security', 'Support', 'Finance', 'Sales', 'Update', 'System', 'HR'];

    private const PER_PAGE = 25;

    public function index(Request $request): Response
    {
        $view = $this->view($request->query('folder'));
        $category = $this->category($request->query('category'));
        $search = trim((string) $request->query('q', ''));

        return Inertia::render('apps/Mail', [
            'folder' => $view,
            'category' => $category,
            'search' => $search,
            'folders' => $this->folderCounts($request),
            'categories' => $this->categoryCounts($request),
            /*
             * RESOLVED INLINE, not deferred.
             *
             * Deferring is for expensive aggregates that must not block first
             * paint (§10). A 25-row list through (user, folder, received_at) is
             * not that, and deferring it actively broke this screen - folder
             * navigation preserves state, so the component is not remounted and
             * the deferred follow-up never fires.
             *
             * On this screen the list IS the shell; there is nothing to paint
             * before it.
             */
            'messages' => $this->messages($request, $view, $category, $search),
        ]);
    }

    /**
     * One thread, as its own page.
     *
     * NOT A READING PANE. A pane beside the list needs roughly 900px before
     * both halves are usable, and it costs the list every column that makes it
     * scannable - sender, time, subject, label - because there is no width left
     * for them. A thread is a destination, so it gets a URL.
     */
    public function show(Request $request, int $id): Response
    {
        $message = $this->scoped($request)->findOrFail($id);

        $thread = $this->scoped($request)
            ->where('thread_id', $message->thread_id)
            // Oldest first: a conversation reads downwards.
            ->orderBy('received_at')
            ->orderBy('id')
            ->get();

        /*
         * Opening a thread reads it, in ONE statement rather than a save per
         * message. Doing it during the GET is the one place a read side effect
         * is right: the alternative is a second request the user cannot tell
         * has failed.
         */
        $unread = $thread->where('is_read', false)->pluck('id');

        if ($unread->isNotEmpty()) {
            $this->scoped($request)->whereIn('id', $unread)->update(['is_read' => true]);
        }

        return Inertia::render('apps/MailThread', [
            'thread' => [
                'id' => $message->id,
                'subject' => $message->subject,
                'category' => $message->category,
                'folder' => $message->folder,
                'starred' => (bool) $message->is_starred,
                'important' => (bool) $message->is_important,
                'count' => $thread->count(),
            ],
            'messages' => $thread->map(fn (MailMessage $m): array => [
                'id' => $m->id,
                'from' => $m->from_name,
                'email' => $m->from_email,
                'to' => $m->to_name,
                'toEmail' => $m->to_email,
                'body' => $m->body,
                'attachment' => (bool) $m->has_attachment,
                'at' => $m->received_at?->format('j M Y H:i'),
            ])->all(),
        ]);
    }

    /** Mark read, star, flag important, move folder. One endpoint, a declared verb. */
    public function update(Request $request, int $id): JsonResponse
    {
        $validated = $request->validate([
            'action' => ['required', 'string', 'in:read,unread,star,unstar,important,unimportant,move'],
            'folder' => ['required_if:action,move', 'string', 'in:'.implode(',', self::FOLDERS)],
        ]);

        $message = $this->scoped($request)->findOrFail($id);

        match ($validated['action']) {
            'read' => $message->is_read = true,
            'unread' => $message->is_read = false,
            'star' => $message->is_starred = true,
            'unstar' => $message->is_starred = false,
            'important' => $message->is_important = true,
            'unimportant' => $message->is_important = false,
            'move' => $message->folder = $validated['folder'],
        };

        $message->save();

        return response()->json([
            'ok' => true,
            'folders' => $this->folderCounts($request),
            'categories' => $this->categoryCounts($request),
        ]);
    }

    /**
     * Unread counts for every folder, as ONE grouped query plus two flag rows.
     *
     * `starred` and `important` are not folders in the data - they are flags -
     * so they are counted separately rather than being given a folder value
     * they would then have to be moved out of.
     *
     * @return list<array{key: string, label: string, unread: int, total: int}>
     */
    private function folderCounts(Request $request): array
    {
        $rows = $this->scoped($request)
            ->toBase()
            ->selectRaw('folder, COUNT(*) as total, SUM(CASE WHEN is_read = 0 THEN 1 ELSE 0 END) as unread')
            ->groupBy('folder')
            ->get()
            ->keyBy('folder');

        $flags = $this->scoped($request)->toBase()
            ->selectRaw('SUM(CASE WHEN is_starred = 1 THEN 1 ELSE 0 END) as starred')
            ->selectRaw('SUM(CASE WHEN is_important = 1 THEN 1 ELSE 0 END) as important')
            ->where('folder', '!=', 'trash')
            ->first();

        $out = [];

        foreach (self::VIEWS as $key) {
            if ($key === 'starred' || $key === 'important') {
                $total = (int) ($flags->{$key} ?? 0);

                $out[] = ['key' => $key, 'label' => ucfirst($key), 'unread' => $total, 'total' => $total];

                continue;
            }

            $row = $rows[$key] ?? null;

            $out[] = [
                'key' => $key,
                'label' => ucfirst($key),
                'unread' => (int) ($row->unread ?? 0),
                'total' => (int) ($row->total ?? 0),
            ];
        }

        return $out;
    }

    /**
     * Label counts, as one grouped query.
     *
     * Only labels that exist are shown a count; a declared list keeps the rail
     * stable rather than reordering itself as mail arrives.
     *
     * @return list<array{key: string, label: string, total: int}>
     */
    private function categoryCounts(Request $request): array
    {
        $rows = $this->scoped($request)
            ->toBase()
            ->selectRaw('category, COUNT(*) as total')
            ->whereNotNull('category')
            ->where('folder', '!=', 'trash')
            ->groupBy('category')
            ->pluck('total', 'category');

        $out = [];

        foreach (self::CATEGORIES as $label) {
            $total = (int) ($rows[$label] ?? 0);

            if ($total > 0) {
                $out[] = ['key' => $label, 'label' => $label, 'total' => $total];
            }
        }

        return $out;
    }

    /** @return array{rows: list<array<string, mixed>>, total: int} */
    private function messages(Request $request, string $view, ?string $category, string $search): array
    {
        /*
         * THE COLLAPSE.
         *
         * The newest message of each thread, found by grouping the FILTERED set
         * and taking its maximum id, then joined back for the row itself. The
         * count comes from the same grouped pass rather than a second query per
         * row, which is the N+1 this shape exists to avoid.
         *
         * The bound is honest: this groups the whole matching folder, not just
         * the page. A mailbox is per-person and stays in the thousands, where
         * grouping through (user, folder, received_at) is cheap; a mailbox in
         * the millions would want a threads table carrying its own last-message
         * pointer. That is a different data model, not a tuning knob, so it is
         * left until something actually needs it.
         */
        $threads = $this->filtered($request, $view, $category, $search)
            ->toBase()
            ->selectRaw('MAX(id) as latest_id, COUNT(*) as thread_count')
            ->groupBy('thread_id');

        $rows = MailMessage::query()
            ->joinSub($threads, 'threads', 'threads.latest_id', '=', 'mail_messages.id')
            ->orderByDesc('mail_messages.received_at')
            ->orderByDesc('mail_messages.id')
            ->limit(self::PER_PAGE)
            ->get([
                'mail_messages.id', 'mail_messages.from_name', 'mail_messages.from_email',
                'mail_messages.to_name', 'mail_messages.to_email',
                'mail_messages.subject', 'mail_messages.preview', 'mail_messages.category',
                'mail_messages.is_read', 'mail_messages.is_starred', 'mail_messages.is_important',
                'mail_messages.has_attachment', 'mail_messages.received_at',
                'threads.thread_count',
            ])
            ->map(function (MailMessage $m) use ($request): array {
                $with = $this->correspondent($m, $request);

                return [
                    'id' => $m->id,
                    /*
                 * THE COLUMN NAMES THE CORRESPONDENT, NOT THE SENDER.
                 *
                 * A thread's newest message is often the user's own reply, so
                 * showing its sender filled the inbox with the reader's own
                 * name - which identifies nothing, since every row could say
                 * it. What the column is for is answering "who is this with",
                 * and that is the other party whichever way the last message
                 * happened to run. It is also what makes the Sent folder read
                 * correctly, where the sender is always the user.
                 */
                    'from' => $with['name'],
                    'email' => $with['email'],
                    'subject' => $m->subject,
                    'preview' => $m->preview,
                    'category' => $m->category,
                    'read' => (bool) $m->is_read,
                    'starred' => (bool) $m->is_starred,
                    'important' => (bool) $m->is_important,
                    'attachment' => (bool) $m->has_attachment,
                    'count' => (int) $m->thread_count,
                    'at' => $this->shortTime($m->received_at),
                ];
            })
            ->all();

        return ['rows' => $rows, 'total' => count($rows)];
    }

    /**
     * Whoever is on the other end of a message.
     *
     * Falls back to the sender when there is no recipient recorded, so a row
     * that predates the `to_name` column still names somebody rather than
     * rendering an empty cell.
     *
     * @return array{name: string, email: string}
     */
    private function correspondent(MailMessage $message, Request $request): array
    {
        $isOwn = $message->from_email === $request->user()->email;

        return $isOwn && $message->to_name !== null
            ? ['name' => $message->to_name, 'email' => (string) $message->to_email]
            : ['name' => $message->from_name, 'email' => $message->from_email];
    }

    /** The view, category and search predicates, shared by the list and its collapse. */
    private function filtered(Request $request, string $view, ?string $category, string $search): Builder
    {
        $query = $this->scoped($request);

        // Starred and important are flags across folders, not folders of their own.
        match (true) {
            $view === 'starred' => $query->where('is_starred', true)->where('folder', '!=', 'trash'),
            $view === 'important' => $query->where('is_important', true)->where('folder', '!=', 'trash'),
            default => $query->where('folder', $view),
        };

        if ($category !== null) {
            $query->where('category', $category);
        }

        if ($search !== '') {
            // Word-prefix, the same shape the resource search uses: `%term%`
            // cannot use an index and a bare prefix misses "Achieng" in
            // "Amina Achieng".
            $query->where(function (Builder $q) use ($search): void {
                $q->where('subject', 'like', $search.'%')
                    ->orWhere('subject', 'like', '% '.$search.'%')
                    ->orWhere('from_name', 'like', $search.'%')
                    ->orWhere('from_name', 'like', '% '.$search.'%');
            });
        }

        return $query;
    }

    /**
     * Time in a list column, the way mail clients write it: a clock for today,
     * a date once it is older. "3 hours ago" is friendly in a sentence and
     * unreadable in a column you are scanning down.
     */
    private function shortTime(?\DateTimeInterface $at): ?string
    {
        if ($at === null) {
            return null;
        }

        return $at->format('Y-m-d') === now()->format('Y-m-d')
            ? $at->format('g:i A')
            : $at->format('M j');
    }

    private function view(mixed $value): string
    {
        $view = is_string($value) ? $value : 'inbox';

        // Falls back rather than 404s: a stale bookmark should show the inbox.
        return in_array($view, self::VIEWS, true) ? $view : 'inbox';
    }

    private function category(mixed $value): ?string
    {
        return is_string($value) && in_array($value, self::CATEGORIES, true) ? $value : null;
    }

    private function scoped(Request $request): Builder
    {
        return MailMessage::query()->where('user_id', $request->user()->id);
    }
}
