<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use PanelKit\Panel\Alerts\Announcement;
use PanelKit\Panel\Alerts\AnnouncementDismissal;
use PanelKit\Panel\Notifications\AnnouncementDismissed;

/**
 * Closing a banner, without losing it.
 *
 * THE DISMISSAL MOVES IT RATHER THAN DELETING IT. Somebody closes a banner
 * because it is in the way of the work they came to do, not because they have
 * finished with it - and "maintenance on Sunday" dismissed on Tuesday is exactly
 * the thing they will want on Saturday. So a dismissal writes a notification to
 * that person, and the notice is still in the bell.
 *
 * WITHOUT THAT, DISMISSAL IS DESTRUCTIVE AND SILENT. It removes the only copy
 * somebody had of something they were told once, with no undo, from a × placed
 * next to it - which is the interface equivalent of a trapdoor.
 *
 * IT IS PER PERSON. One announcement is shown to everybody in an organisation,
 * so this can never be a column on the announcement itself: the first person to
 * tidy their dashboard would hide the notice from all their colleagues.
 */
final class AnnouncementController extends Controller
{
    public function dismiss(Request $request, int $id): JsonResponse
    {
        $user = $request->user();

        abort_if($user === null, 401);

        // Through the scoped model, so another organisation's id is not found
        // rather than being dismissed by somebody who cannot see it.
        $announcement = Announcement::query()->findOrFail($id);

        $dismissal = AnnouncementDismissal::query()->firstOrCreate(
            ['announcement_id' => $announcement->getKey(), 'user_id' => (string) $user->getKey()],
            ['created_at' => now()],
        );

        /*
         * NOTIFIED ONCE, on the dismissal that actually happened. A double click
         * finds the existing row and writes nothing, so nobody gets the same
         * notice twice for closing a banner twice.
         */
        if ($dismissal->wasRecentlyCreated && method_exists($user, 'notify')) {
            $user->notify(new AnnouncementDismissed($announcement));
        }

        return response()->json(['ok' => true]);
    }
}
