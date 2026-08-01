<?php

declare(strict_types=1);

namespace PanelKit\Panel\Notifications\Channels;

use Illuminate\Notifications\Notification;
use NotificationChannels\Telegram\Telegram;
use NotificationChannels\Telegram\TelegramChannel as BaseChannel;
use NotificationChannels\Telegram\TelegramMessage;
use Psr\Http\Message\ResponseInterface;

/**
 * The Telegram channel, with the two things a panel needs on top of it.
 *
 * WHY NOT JUST THE PACKAGE. `laravel-notification-channels/telegram` is the
 * transport, and it is the right one - it speaks the whole Bot API, it is
 * maintained, and this panel is not in the business of reimplementing
 * `sendMessage`. What it deliberately does NOT do is guess: a notification with
 * no `toTelegram()` returns null and nothing is sent.
 *
 * THAT SILENCE IS THE PROBLEM HERE, because the most important notifications
 * this panel delivers are not its own. `spatie/laravel-backup` defines
 * `toMail()`, `toSlack()` and `toDiscord()` on `BackupHasFailedNotification`
 * and nothing else - so wiring Telegram into the backup channel list produced a
 * configuration that looked complete, tested green, and delivered nothing on
 * the night a backup failed. The same is true of any package an installation
 * adds later.
 *
 * SO A MISSING `toTelegram()` FALLS BACK TO THE MAIL REPRESENTATION rather than
 * to nothing. The subject and the intro lines are what somebody on call needs;
 * a class name would tell them nothing they can act on. Anything that DOES
 * define `toTelegram()` goes to the package untouched, with the full Bot API
 * behind it - buttons, files, formatting.
 *
 * AND A DEFAULT CHAT, so a notifiable does not have to know about Telegram.
 * Spatie's backup notifiable has no `routeNotificationForTelegram`, and adding
 * one would mean forking a vendor class to carry a chat id that is already in
 * this panel's settings.
 */
final class TelegramChannel extends BaseChannel
{
    /**
     * @return array<string|int, mixed>|null
     */
    public function send(mixed $notifiable, Notification $notification): ?array
    {
        // Anything that speaks Telegram natively keeps every feature the
        // package offers; this class is not in that path at all.
        if (method_exists($notification, 'toTelegram')) {
            return parent::send($notifiable, $notification);
        }

        $chat = $this->chatFor($notifiable, $notification);

        if ($chat === null || trim((string) config('services.telegram.token', '')) === '') {
            /*
             * SILENT WHEN UNCONFIGURED, and that direction is deliberate. This
             * runs inside the failure path of whatever it is reporting on, so
             * throwing turns "the backup failed" into "the backup failed and
             * then the alert crashed" - which buries the original event and
             * usually takes the mail notification down with it.
             */
            return null;
        }

        $message = TelegramMessage::create($this->textFrom($notifiable, $notification))->to($chat);

        if (! $message->canSend()) {
            return null;
        }

        $response = $message->send();

        /*
         * DECODED, because the contract says array. `TelegramMessage::send()`
         * hands back the PSR response and the package's own channel decodes it
         * on the way out; a subclass that forgot to would satisfy no type but
         * its own.
         */
        return $response instanceof ResponseInterface
            ? Telegram::decodeResponse($response)
            : $response;
    }

    /**
     * The chat to deliver to: the notifiable's own, or the panel's.
     */
    private function chatFor(mixed $notifiable, Notification $notification): int|string|null
    {
        if (is_object($notifiable) && method_exists($notifiable, 'routeNotificationFor')) {
            $routed = $notifiable->routeNotificationFor('telegram', $notification);

            if ($routed !== null && $routed !== '') {
                return $routed;
            }
        }

        $chat = config('services.telegram.chat_id');

        return is_string($chat) && trim($chat) !== '' ? $chat : null;
    }

    /**
     * A readable message built from what the notification already writes.
     *
     * REUSING `toMail` RATHER THAN SUBCLASSING SIX NOTIFICATIONS. The subject
     * and the intro lines are written for a human being who has just been
     * woken up, which is exactly the audience here.
     */
    private function textFrom(mixed $notifiable, Notification $notification): string
    {
        if (! method_exists($notification, 'toMail')) {
            return class_basename($notification);
        }

        $mail = $notification->toMail($notifiable);

        $lines = array_map(
            static fn (mixed $line): string => is_string($line) ? $line : '',
            array_merge($mail->introLines ?? [], $mail->outroLines ?? []),
        );

        return trim(
            ($mail->subject ?? class_basename($notification))
            ."\n\n"
            .implode("\n", array_filter($lines))
        );
    }
}
