<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Router;
use DateTimeImmutable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use PanelKit\Panel\Alerts\Alert;
use PanelKit\Panel\Alerts\AlertRule;

/**
 * The bell: two streams that are deliberately not one list.
 *
 *   ALERTS are recomputed here on every request from the current data. They
 *   have no stored row, no read state and no per-user copy — they are simply
 *   what is true right now, and they vanish when the condition clears.
 *
 *   NOTIFICATIONS are rows addressed to the acting user. They persist, they
 *   carry read state, and they are deleted only when the user says so.
 *
 * MERGING THEM WOULD BREAK BOTH. An alert cannot be "marked read" without
 * lying — the routers are still offline — and a notification cannot be
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
            // The badge counts UNREAD NOTIFICATIONS only — see the class note.
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
     * The conditions this panel watches.
     *
     * Every rule is ONE bounded query. The bell can be opened often, so a rule
     * that scans a large table is a rule that makes the whole panel feel slow —
     * these all hit an index and count.
     *
     * @return list<AlertRule>
     */
    private function rules(): array
    {
        $now = new DateTimeImmutable();

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
                $count = Client::query()
                    ->whereBetween('expiry_date', [
                        $now->format('Y-m-d H:i:s'),
                        $now->modify('+7 days')->format('Y-m-d H:i:s'),
                    ])
                    ->count();

                if ($count === 0) {
                    return null;
                }

                return Alert::make(
                    'expiring_soon',
                    Alert::WARNING,
                    "{$count} subscriptions expire within 7 days",
                    'Renew or contact these subscribers before they lapse.',
                    '/clients',
                    $count,
                );
            }),

            AlertRule::make('lapsed', function () use ($now): ?Alert {
                $count = Client::query()
                    ->where('status', 'active')
                    ->where('expiry_date', '<', $now->format('Y-m-d H:i:s'))
                    ->count();

                if ($count === 0) {
                    return null;
                }

                // Active but past expiry: someone is receiving service they are
                // no longer paying for, which is a billing problem rather than a
                // connectivity one.
                return Alert::make(
                    'lapsed',
                    Alert::DANGER,
                    "{$count} active subscribers are past their expiry date",
                    'These are still connected but their subscription has lapsed.',
                    '/clients?status=active',
                    $count,
                );
            }),
        ];
    }
}
