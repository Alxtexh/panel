<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use PanelKit\Panel\Alerts\AlertRule;
use PanelKit\Panel\Alerts\Announcement;
use PanelKit\Panel\Alerts\AnnouncementResource;
use PanelKit\Panel\PanelManager;

/**
 * The bell: two streams that are deliberately not one list.
 *
 *   ALERTS are recomputed here on every request from the current data. They
 *   have no stored row, no read state and no per-user copy - they are simply
 *   what is true right now, and they vanish when the condition clears.
 *
 *   NOTIFICATIONS are rows addressed to the acting user. They persist, they
 *   carry read state, and they are deleted only when the user says so.
 *
 * MERGING THEM WOULD BREAK BOTH. An alert cannot be "marked read" without lying
 * - the condition still holds - and a notification cannot be recomputed, because
 * the event it records is over. The unread COUNT on the badge is notifications
 * only, for the same reason: a badge that never clears while a condition
 * persists trains people to ignore the badge.
 *
 * WHY THIS IS IN THE PACKAGE NOW. Both halves already were: the package writes
 * notifications when an export finishes, when a queued action completes and when
 * an announcement is dismissed, and it shipped `Alert` and `AlertRule` for the
 * other stream. What it never shipped was anywhere to READ them. So every
 * installation wrote this endpoint itself, and the one assertion that matters -
 * that an id from someone else's stream is not found - was rewritten each time.
 *
 * THE RULES COME FROM THE REGISTRY, not from this file. The reference app named
 * `Router` and `Client` in its own version, which is exactly why it could not
 * ship; an application declares what it watches with `PanelManager::alertRule()`
 * and this resolves whatever is there.
 *
 * LEAN JSON, never an Inertia render. The bell may be polled, and re-rendering a
 * page to answer "anything new?" is the cost this package exists to avoid.
 */
final class NotificationController extends Controller
{
    /** Bounded: a panel bell is a summary, not an archive. */
    private const MAX_NOTIFICATIONS = 30;

    public function index(Request $request, PanelManager $panels): JsonResponse
    {
        $user = $request->user();

        if ($user === null) {
            return response()->json(['alerts' => [], 'notifications' => [], 'unread' => 0]);
        }

        /*
         * THE TABLE MAY NOT EXIST, and that is not an error worth a 500.
         *
         * Laravel puts `Notifiable` on the default User model and leaves the
         * `notifications` migration opt-in, so a fresh installation has the
         * relation and not the table. The bell then answers "nothing yet",
         * which is true, instead of taking the page down.
         */
        try {
            $rows = $user->notifications()
                ->latest()
                ->limit(self::MAX_NOTIFICATIONS)
                ->get();

            $unread = $user->unreadNotifications()->count();
        } catch (QueryException) {
            $rows = collect();
            $unread = 0;
        }

        $notifications = $rows
            ->map(fn ($n): array => [
                'id' => (string) $n->id,
                'title' => $n->data['title'] ?? 'Notification',
                'body' => $n->data['body'] ?? '',
                'href' => $n->data['href'] ?? null,
                'severity' => $n->data['severity'] ?? 'info',
                'read' => $n->read_at !== null,
                'at' => $n->created_at?->diffForHumans(),
            ])
            ->values()
            ->all();

        return response()->json([
            'alerts' => [
                ...$this->announcements($user),
                ...AlertRule::resolveAll($panels->alertRules()),
            ],
            'notifications' => $notifications,
            // The badge counts UNREAD NOTIFICATIONS only - see the class note.
            'unread' => $unread,
            /*
             * WHERE AN ANNOUNCEMENT IS WRITTEN, offered beside the thing it
             * produces rather than as a permanent sidebar entry.
             *
             * TWO CONDITIONS, NOT ONE. The ability alone is not enough: a panel
             * that never registered the announcements resource has no such
             * route, so a link shown on permission would 404 for exactly the
             * people allowed to use it. Asking the registry first means the link
             * appears only where it leads somewhere.
             */
            'canAnnounce' => $this->canAnnounce($panels, $user),
        ]);
    }

    private function canAnnounce(PanelManager $panels, mixed $user): bool
    {
        $panel = $panels->currentPanel();

        $registered = in_array(
            AnnouncementResource::class,
            $panels->resourcesFor($panel?->id ?? ''),
            true,
        );

        return $registered && $user->can('create', Announcement::class);
    }

    /**
     * Announcements, as alerts.
     *
     * THEY BELONG IN THIS STREAM AND NOT THE OTHER ONE, and the reason is the
     * semantics rather than the subject. An alert is what is TRUE RIGHT NOW: it
     * is recomputed on every open, it has no read state, and it disappears when
     * the condition clears. That is exactly an announcement - it appears when it
     * starts, and when `ends_at` passes it is simply not returned any more.
     * Nobody has to remember to take it down, and nothing has to run to expire
     * it.
     *
     * Filed as a notification instead, it would need a read state it does not
     * have, would sit in the inbox after it stopped being true, and would have
     * to be written per user at the moment it was created - so a person who
     * joined afterwards would never see it.
     *
     * ABOVE THE COMPUTED RULES, because an announcement is somebody deliberately
     * telling this operator something, and the rules are the system noticing
     * things. `activeFor` already sorts by severity and drops the dismissed.
     *
     * @return list<array<string, mixed>>
     */
    private function announcements(mixed $user): array
    {
        return Announcement::activeFor($user->getKey())
            ->map(fn (Announcement $announcement): array => [
                /*
                 * PREFIXED, because an alert key is a client-side identity and
                 * the declared rules pick their own. An announcement numbered 3
                 * and a rule called `3` would collide silently.
                 */
                'key' => 'announcement:'.$announcement->getKey(),
                'severity' => $announcement->severity === 'success' ? 'info' : $announcement->severity,
                'title' => $announcement->title,
                'body' => (string) $announcement->body,
                'href' => $announcement->action_url,
                'count' => 1,
            ])
            ->values()
            ->all();
    }

    /**
     * ALWAYS SCOPED TO THE ACTING USER'S OWN RELATION, in all three writes
     * below. `DatabaseNotification::find($id)` would work, would read exactly
     * as well, and would let anybody clear or delete anybody else's bell by
     * guessing a uuid. Going through `$user->notifications()` means an id from
     * another stream is simply not found, and there is no second check to
     * forget.
     */
    public function markRead(Request $request, string $id): JsonResponse
    {
        $request->user()->notifications()->whereKey($id)->firstOrFail()->markAsRead();

        return response()->json(['ok' => true]);
    }

    public function markAllRead(Request $request): JsonResponse
    {
        $request->user()->unreadNotifications->markAsRead();

        return response()->json(['ok' => true]);
    }

    public function destroy(Request $request, string $id): JsonResponse
    {
        $request->user()->notifications()->whereKey($id)->firstOrFail()->delete();

        return response()->json(['ok' => true]);
    }
}
