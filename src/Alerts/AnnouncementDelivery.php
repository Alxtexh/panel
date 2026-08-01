<?php

declare(strict_types=1);

namespace PanelKit\Panel\Alerts;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Notification;
use PanelKit\Panel\Notifications\BellText;

/**
 * Compose once, deliver everywhere chosen - roadmap 5.4.
 *
 * The banner is PULL: it renders when somebody next loads the dashboard,
 * which is exactly right for ambient notices and exactly wrong for "the
 * panel goes down in an hour" - the person who needed that most is the one
 * who was not going to load the dashboard in time. The two PUSH transports
 * are chosen at compose time: everyone's bell (a database notification per
 * member of the organisation) and the operations Telegram chat.
 *
 * DELIVERY HAPPENS ONCE, ON CREATE, and the form says so. A future-dated
 * notice still announces itself when saved - "maintenance Sunday" is worth
 * pushing on Wednesday - and re-delivering on every edit would mean a typo
 * fix rings every phone twice. The banner keeps honouring the display
 * window; the push is the heads-up.
 *
 * BELL RECIPIENTS ARE THE ANNOUNCEMENT'S OWN TENANT'S USERS, read through
 * the auth provider's model so the package needs no knowledge of the
 * application's User class. Under database-per-tenant isolation there is
 * no tenant column to filter on and the connection already bounds the set.
 */
final class AnnouncementDelivery
{
    public static function attach(): void
    {
        Announcement::created(static function (Announcement $announcement): void {
            if ($announcement->notify_bell) {
                self::toBells($announcement);
            }

            if ($announcement->notify_telegram) {
                self::toTelegram($announcement);
            }
        });
    }

    private static function toBells(Announcement $announcement): void
    {
        /** @var class-string<Model>|null $model */
        $model = config('auth.providers.users.model');

        if ($model === null || ! class_exists($model)) {
            return;
        }

        $query = $model::query();

        if ($announcement->tenant_id !== null) {
            $query->where('tenant_id', $announcement->tenant_id);
        }

        /*
         * CHUNKED, because "everyone in the organisation" has no upper
         * bound, and one notification row per person is the point - the
         * bell is per-user state (read, unread) that a shared row cannot
         * carry.
         */
        $query->chunkById(200, static function ($users) use ($announcement): void {
            Notification::send($users, new BellText(
                title: (string) $announcement->title,
                body: (string) ($announcement->body ?? ''),
                href: $announcement->action_url,
                severity: (string) $announcement->severity,
            ));
        });
    }

    private static function toTelegram(Announcement $announcement): void
    {
        $lines = array_filter([
            '📣 '.$announcement->title,
            (string) ($announcement->body ?? ''),
        ]);

        // Telegram::send never throws and reports its own failures - an
        // announcement must save whether or not the bot is reachable.
        Telegram::send(implode("\n", $lines));
    }
}
