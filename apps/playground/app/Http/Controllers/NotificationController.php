<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
use App\Models\Router;
use DateTimeImmutable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use PanelKit\Panel\Alerts\Alert;
use PanelKit\Panel\Alerts\AlertRule;

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
 * MERGING THEM WOULD BREAK BOTH. An alert cannot be "marked read" without
 * lying - the routers are still offline - and a notification cannot be
 * recomputed, because the event it records is over. The unread COUNT on the
 * badge is notifications only, for the same reason: a badge that never clears
 * while a condition persists trains people to ignore the badge.
 *
 * LEAN JSON, never an Inertia render. The bell may be polled, and re-rendering
 * a page to answer "anything new?" is the cost §8 exists to avoid.
 */
final class NotificationController extends Controller
{
    /** Bounded: a panel bell is a summary, not an archive. */
    private const MAX_NOTIFICATIONS = 30;

    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $notifications = $user->notifications()
            ->latest()
            ->limit(self::MAX_NOTIFICATIONS)
            ->get()
            ->map(fn ($n): array => [
                'id' => $n->id,
                'title' => $n->data['title'] ?? 'Notification',
                'body' => $n->data['body'] ?? '',
                'href' => $n->data['href'] ?? null,
                'severity' => $n->data['severity'] ?? 'info',
                'read' => $n->read_at !== null,
                'at' => $n->created_at?->diffForHumans(),
            ])
            ->all();

        return response()->json([
            'alerts' => AlertRule::resolveAll($this->rules()),
            'notifications' => $notifications,
            // The badge counts UNREAD NOTIFICATIONS only - see the class note.
            'unread' => $user->unreadNotifications()->count(),
        ]);
    }

    public function markRead(Request $request, string $id): JsonResponse
    {
        // Scoped to the acting user's own notifications, so an id from someone
        // else's stream simply is not found.
        $notification = $request->user()->notifications()->whereKey($id)->firstOrFail();

        $notification->markAsRead();

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

    /**
     * How many matches a rule will count before it stops caring.
     *
     * A BELL IS NOT A REPORT. "84,846 subscribers are past their expiry date"
     * and "500+ subscribers are past their expiry date" prompt exactly the same
     * action, and only one of them costs a fifth of a second every time somebody
     * opens the dropdown.
     */
    private const CAP = 500;

    /**
     * The conditions this panel watches.
     *
     * THE COMMENT HERE USED TO CLAIM THESE WERE BOUNDED. They were not, and the
     * gap between the claim and the code is the whole story: every rule reads
     * `->count()`, which walks every matching row. On the reference estate the
     * expiry rule matched 84,846 of them and the bell took 303 ms - sixty times
     * the next slowest page in the panel - while issuing only eight queries, so
     * nothing about the query count looked wrong and the resource benchmark
     * never touched this path at all.
     *
     * Adding the right index took it to 185 ms and no further, because the cost
     * was never the lookup: SQLite counts by walking, so an exact count of
     * 84,846 rows costs 84,846 steps however good the index is. The fix is to
     * stop asking for an exact count.
     *
     * `countUpTo()` is what makes the original comment true. It is the same
     * lesson the list pages already learned when the total became deferred - a
     * number nobody acts on precisely should not be paid for precisely.
     *
     * @return list<AlertRule>
     */
    /**
     * Count matches, giving up at `CAP`.
     *
     * `limit()` inside a subquery rather than on the count itself, because
     * `count()` collapses the whole result to one row and a LIMIT applies to
     * THAT - so `->limit(500)->count()` returns the true total and reads every
     * row, which is the bug it looks like it is fixing.
     */
    private function countUpTo(Builder $query): int
    {
        return DB::query()
            ->fromSub($query->select(DB::raw('1'))->limit(self::CAP), 'capped')
            ->count();
    }

    /** "500+" once the cap is hit, so the label never claims more precision than was paid for. */
    private function describeCount(int $count): string
    {
        return $count >= self::CAP ? self::CAP.'+' : (string) $count;
    }

    private function rules(): array
    {
        $now = new DateTimeImmutable;

        return [
            AlertRule::make('routers_offline', function (): ?Alert {
                $count = Router::query()->where('status', 'offline')->count();

                if ($count === 0) {
                    return null;
                }

                return Alert::make(
                    'routers_offline',
                    Alert::DANGER,
                    $count === 1 ? '1 router is offline' : "{$count} routers are offline",
                    'Subscribers served by these routers cannot connect.',
                    '/routers?status=offline',
                    $count,
                );
            }),

            AlertRule::make('routers_degraded', function (): ?Alert {
                $count = Router::query()->where('status', 'degraded')->count();

                if ($count === 0) {
                    return null;
                }

                return Alert::make(
                    'routers_degraded',
                    Alert::WARNING,
                    "{$count} routers are degraded",
                    'Reachable, but not performing normally.',
                    '/routers?status=degraded',
                    $count,
                );
            }),

            AlertRule::make('expiring_soon', function () use ($now): ?Alert {
                $count = $this->countUpTo(Client::query()
                    ->whereBetween('expiry_date', [
                        $now->format('Y-m-d H:i:s'),
                        $now->modify('+7 days')->format('Y-m-d H:i:s'),
                    ])
                    ->toBase());

                if ($count === 0) {
                    return null;
                }

                return Alert::make(
                    'expiring_soon',
                    Alert::WARNING,
                    $this->describeCount($count).' subscriptions expire within 7 days',
                    'Renew or contact these subscribers before they lapse.',
                    '/clients',
                    $count,
                );
            }),

            AlertRule::make('lapsed', function () use ($now): ?Alert {
                $count = $this->countUpTo(Client::query()
                    ->where('status', 'active')
                    ->where('expiry_date', '<', $now->format('Y-m-d H:i:s'))
                    ->toBase());

                if ($count === 0) {
                    return null;
                }

                // Active but past expiry: someone is receiving service they are
                // no longer paying for, which is a billing problem rather than a
                // connectivity one.
                return Alert::make(
                    'lapsed',
                    Alert::DANGER,
                    $this->describeCount($count).' active subscribers are past their expiry date',
                    'These are still connected but their subscription has lapsed.',
                    '/clients?status=active',
                    $count,
                );
            }),
        ];
    }
}
