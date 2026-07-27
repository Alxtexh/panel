<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\MailMessage;
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
 * THE FOLDER COUNTS ARE ONE GROUPED QUERY, not one per folder. Seven folders
 * rendered with a badge each is the shape addendum C1 exists to prevent — it is
 * invisible at seven and the same mistake at seventy.
 *
 * KEYSET-FREE, DELIBERATELY. A mailbox is read from the top and rarely paged
 * far, so an explicit limit with a "load more" cursor buys nothing over a bounded
 * page here; what matters is that the query is bounded at all, and that the
 * index (user, folder, received_at, id) makes the sort free rather than a
 * filesort.
 */
final class MailController extends Controller
{
    /**
     * Real folders — the values the `folder` column may hold.
     *
     * `starred` is deliberately NOT here. It is a flag that crosses folders: a
     * message can be starred and still in the inbox, which a folder value
     * cannot express. It appears in the rail as a view, not as a destination.
     */
    private const FOLDERS = ['inbox', 'sent', 'archived', 'spam', 'trash'];

    /** What the rail shows, in order. */
    private const VIEWS = ['inbox', 'starred', 'sent', 'archived', 'spam', 'trash'];

    private const PER_PAGE = 25;

    public function index(Request $request): Response
    {
        $folder = $this->folder($request->query('folder'));
        $search = trim((string) $request->query('q', ''));

        return Inertia::render('apps/Mail', [
            'folder' => $folder,
            'search' => $search,
            'folders' => $this->folderCounts($request),
            'messages' => Inertia::defer(fn (): array => $this->messages($request, $folder, $search)),
            'selectedId' => $request->query('id') !== null ? (int) $request->query('id') : null,
            'message' => Inertia::defer(fn (): ?array => $this->message($request)),
        ]);
    }

    /** Mark read, star, move folder. One endpoint, a declared verb. */
    public function update(Request $request, int $id): JsonResponse
    {
        $validated = $request->validate([
            'action' => ['required', 'string', 'in:read,unread,star,unstar,move'],
            'folder' => ['required_if:action,move', 'string', 'in:' . implode(',', self::FOLDERS)],
        ]);

        $message = $this->scoped($request)->findOrFail($id);

        match ($validated['action']) {
            'read' => $message->is_read = true,
            'unread' => $message->is_read = false,
            'star' => $message->is_starred = true,
            'unstar' => $message->is_starred = false,
            'move' => $message->folder = $validated['folder'],
        };

        $message->save();

        return response()->json(['ok' => true, 'folders' => $this->folderCounts($request)]);
    }

    /**
     * Unread counts for every folder, as ONE grouped query.
     *
     * `starred` is not a folder in the data — it is a flag — so it is counted
     * separately rather than being given a folder value it would then have to be
     * moved out of. A message can be starred AND in the inbox; a folder column
     * cannot express that.
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

        $starred = $this->scoped($request)->toBase()
            ->selectRaw('COUNT(*) as total, SUM(CASE WHEN is_read = 0 THEN 1 ELSE 0 END) as unread')
            ->where('is_starred', true)
            ->where('folder', '!=', 'trash')
            ->first();

        $out = [];

        foreach (self::VIEWS as $key) {
            if ($key === 'starred') {
                $out[] = [
                    'key' => 'starred',
                    'label' => 'Starred',
                    'unread' => (int) ($starred->unread ?? 0),
                    'total' => (int) ($starred->total ?? 0),
                ];

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

    /** @return array{rows: list<array<string, mixed>>, total: int} */
    private function messages(Request $request, string $folder, string $search): array
    {
        $query = $this->scoped($request);

        // Starred is a flag across folders, not a folder of its own.
        if ($folder === 'starred') {
            $query->where('is_starred', true)->where('folder', '!=', 'trash');
        } else {
            $query->where('folder', $folder);
        }

        if ($search !== '') {
            // Word-prefix, the same shape the resource search uses: `%term%`
            // cannot use an index and a bare prefix misses "Achieng" in
            // "Amina Achieng".
            $query->where(function ($q) use ($search): void {
                $q->where('subject', 'like', $search . '%')
                    ->orWhere('subject', 'like', '% ' . $search . '%')
                    ->orWhere('from_name', 'like', $search . '%')
                    ->orWhere('from_name', 'like', '% ' . $search . '%');
            });
        }

        $rows = $query
            ->orderByDesc('received_at')
            ->orderByDesc('id')
            ->limit(self::PER_PAGE)
            ->get([
                'id', 'from_name', 'from_email', 'subject', 'preview',
                'is_read', 'is_starred', 'has_attachment', 'received_at',
            ])
            ->map(fn (MailMessage $m): array => [
                'id' => $m->id,
                'from' => $m->from_name,
                'email' => $m->from_email,
                'subject' => $m->subject,
                'preview' => $m->preview,
                'read' => $m->is_read,
                'starred' => $m->is_starred,
                'attachment' => $m->has_attachment,
                'at' => $m->received_at?->diffForHumans(),
            ])
            ->all();

        return ['rows' => $rows, 'total' => count($rows)];
    }

    /** @return array<string, mixed>|null */
    private function message(Request $request): ?array
    {
        $id = $request->query('id');

        if ($id === null) {
            return null;
        }

        $message = $this->scoped($request)->find((int) $id);

        if ($message === null) {
            return null;
        }

        // Opening a message reads it. Doing this in the GET is the one place a
        // read side effect is right: the alternative is a second request that
        // the user cannot tell has failed.
        if (! $message->is_read) {
            $message->is_read = true;
            $message->save();
        }

        return [
            'id' => $message->id,
            'from' => $message->from_name,
            'email' => $message->from_email,
            'subject' => $message->subject,
            'body' => $message->body,
            'starred' => $message->is_starred,
            'folder' => $message->folder,
            'at' => $message->received_at?->format('j M Y, H:i'),
        ];
    }

    private function folder(mixed $value): string
    {
        $folder = is_string($value) ? $value : 'inbox';

        // Falls back rather than 404s: a stale bookmark should show the inbox.
        return in_array($folder, self::VIEWS, true) ? $folder : 'inbox';
    }

    private function scoped(Request $request): \Illuminate\Database\Eloquent\Builder
    {
        return MailMessage::query()->where('user_id', $request->user()->id);
    }
}
