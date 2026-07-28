<?php

declare(strict_types=1);

namespace App\Notifications\Channels;

use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Http;

/**
 * Sends a notification to a Telegram chat.
 *
 * A CHANNEL RATHER THAN A PACKAGE, because the whole of the Telegram Bot API
 * needed here is one POST with two fields. A dependency for that is a
 * dependency to keep updated, audit and explain.
 *
 * IT IS SILENT WHEN UNCONFIGURED, and that is the right direction for this one.
 * A channel is a way of TELLING somebody something has already gone wrong;
 * throwing because no token is set would turn "the backup failed" into "the
 * backup failed and then the notification crashed", burying the original event.
 * The mail channel still fires, and an unconfigured channel is reported once
 * rather than per notification.
 *
 * IT NEVER THROWS. Same reasoning: this runs inside the failure path of the
 * thing it is reporting on.
 */
final class TelegramChannel
{
    public function send(mixed $notifiable, Notification $notification): void
    {
        $token = config('services.telegram.token');
        $chat = config('services.telegram.chat_id');

        if (! is_string($token) || $token === '' || ! is_string($chat) || $chat === '') {
            return;
        }

        $message = method_exists($notification, 'toTelegram')
            ? (string) $notification->toTelegram($notifiable)
            : $this->fallbackText($notifiable, $notification);

        try {
            Http::timeout(5)->post("https://api.telegram.org/bot{$token}/sendMessage", [
                'chat_id' => $chat,
                'text' => $message,
                'disable_web_page_preview' => true,
            ]);
        } catch (\Throwable $e) {
            report($e);
        }
    }

    /**
     * A readable line built from the mail representation.
     *
     * SPATIE'S NOTIFICATIONS DEFINE `toMail` AND NOTHING ELSE, so rather than
     * subclass six of them this reuses the subject and intro they already write.
     * The alternative - a class name in a chat message - tells whoever is on
     * call nothing they can act on.
     */
    private function fallbackText(mixed $notifiable, Notification $notification): string
    {
        if (! method_exists($notification, 'toMail')) {
            return class_basename($notification);
        }

        $mail = $notification->toMail($notifiable);

        $lines = array_map(
            static fn (mixed $line): string => is_string($line) ? $line : '',
            array_merge($mail->introLines ?? [], $mail->outroLines ?? []),
        );

        return trim(($mail->subject ?? class_basename($notification))."\n\n".implode("\n", array_filter($lines)));
    }
}
