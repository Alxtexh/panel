<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Alerts;

use Illuminate\Support\Facades\Notification;
use NotificationChannels\Telegram\Telegram as Client;
use Alxtexh\Panel\Notifications\TelegramText;
use Alxtexh\Panel\Support\BackupSettings;
use Alxtexh\Panel\Support\PanelSettings;

/**
 * Telegram, as one call from anywhere in the panel.
 *
 * WHAT THIS IS FOR. `laravel-notification-channels/telegram` sends a
 * NOTIFICATION to a NOTIFIABLE, which is the right shape for "tell this user
 * their export is ready" and the wrong shape for most of what a panel wants to
 * say. A backup failed at 3am, disk is at 94%, an unhandled exception just hit
 * a subscriber screen - none of those are addressed to a person. They go to
 * whichever chat the operator watches, and inventing a Notification class per
 * sentence is why teams end up not sending the sentence.
 *
 *     Telegram::send('Disk at 94% on db-01.');
 *
 * IT IS NOT A SECOND TRANSPORT. Everything below goes through the same channel
 * and the same client as every notification does, so there is one place where
 * a token is read, one place where a failure is swallowed, and one place to
 * look when nothing arrives.
 *
 * CREDENTIALS COME FROM THE PANEL'S SETTINGS FIRST, then the environment - see
 * `configure()`. An operator who typed a token into the panel expects the panel
 * to use it, and an installation that has always set `TELEGRAM_BOT_TOKEN` in
 * `.env` expects that to keep working. Settings win because they are the more
 * specific, more recent statement of intent.
 */
final class Telegram
{
    /**
     * Whether a message could actually be delivered.
     *
     * BOTH HALVES, because either alone is silence. A token with no chat has
     * nowhere to send; a chat with no token has nothing to send with - and the
     * screens that report "Telegram is on" have to mean it.
     */
    public static function configured(): bool
    {
        self::configure();

        return self::token() !== '' && self::chat() !== '';
    }

    /**
     * Send a message to the panel's chat.
     *
     * RETURNS WHETHER IT WENT, and never throws. Every caller is either
     * reporting a failure or running inside a request that has already
     * succeeded; an alert that raises its own exception turns one incident into
     * two and hides the first.
     */
    public static function send(string $text, ?string $chat = null): bool
    {
        self::configure();

        $chat ??= self::chat();

        if ($text === '' || $chat === '' || self::token() === '') {
            return false;
        }

        try {
            Notification::route('telegram', $chat)->notify(new TelegramText($text));

            return true;
        } catch (\Throwable $e) {
            report($e);

            return false;
        }
    }

    /**
     * Send a real message, and report what happened.
     *
     * A SEND RATHER THAN A TOKEN CHECK, and the difference is what an
     * administrator actually needs to know. Validating the token proves the bot
     * exists; it proves nothing about whether the chat id is right, whether the
     * bot was ever added to that group, or whether an admin removed it last
     * week - and each of those fails exactly the same way at 3am: silence.
     *
     * It goes through the same channel and the same client as every alert, so a
     * green result here means the next real alert takes a path that has just
     * been walked end to end.
     *
     * @return array{ok: bool, message: string}
     */
    public static function test(?string $chat = null): array
    {
        self::configure();

        if (self::token() === '') {
            return ['ok' => false, 'message' => 'No bot token.'];
        }

        $chat = $chat !== null && trim($chat) !== '' ? trim($chat) : self::chat();

        if ($chat === '') {
            return ['ok' => false, 'message' => 'No chat id: the bot has nowhere to post.'];
        }

        try {
            app(Client::class)->sendMessage([
                'chat_id' => $chat,
                'text' => config('app.name').' — alerts are working. This is a test message.',
                'disable_web_page_preview' => true,
            ]);

            return ['ok' => true, 'message' => 'Sent. Check the chat.'];
        } catch (\Throwable $e) {
            /*
             * THE MESSAGE IS SHOWN TO AN ADMINISTRATOR, so it says what Telegram
             * said. "Unauthorized" means the token is wrong and "chat not found"
             * means the bot has never been added to that conversation - two
             * completely different fixes that one generic failure would hide.
             */
            return ['ok' => false, 'message' => self::reason($e)];
        }
    }

    /**
     * Settings over environment, applied to the config the channel reads.
     *
     * WHY WRITE INTO CONFIG AT ALL. The notification package resolves its
     * client from `services.telegram.*` once, through the container. Pushing
     * the stored values there means the channel, this class and anything an
     * application writes later all agree about which bot is speaking, without
     * any of them knowing that a settings table exists.
     */
    public static function configure(): void
    {
        $settings = self::stored();

        foreach (['token', 'chat_id'] as $key) {
            $value = $settings[$key] ?? null;

            if (is_string($value) && trim($value) !== '') {
                config()->set("services.telegram.{$key}", trim($value));
            }
        }
    }

    /**
     * @return array<string, string|null>
     */
    private static function stored(): array
    {
        /*
         * THE SETTINGS TABLE MAY NOT EXIST YET. This runs from a service
         * provider, so it also runs during `migrate` on a fresh database and
         * inside `package:discover` - and a provider that throws there breaks
         * the install rather than the feature.
         */
        try {
            $settings = app(PanelSettings::class);

            /*
             * THE BACKUP SCREEN IS WHERE THESE WERE FIRST TYPED, and they stay
             * readable from there. Telegram arrived in this panel as "tell me
             * when a backup fails", so every installation that configured it
             * has a token stored under the backup settings - and asking those
             * operators to type it again somewhere else, to keep an alert they
             * already had, is how a working alert gets turned off.
             *
             * The panel-wide keys win where both exist: they are the more
             * general statement, and the one an administrator sets when they
             * want Telegram for more than backups.
             */
            $backup = (array) ($settings->get(BackupSettings::KEY) ?? []);

            return [
                'token' => $settings->get('alerts.telegram.token')
                    ?? ($backup['alertTelegramToken'] ?? null),
                'chat_id' => $settings->get('alerts.telegram.chat_id')
                    ?? ($backup['alertTelegramChatId'] ?? null),
            ];
        } catch (\Throwable) {
            return [];
        }
    }

    private static function token(): string
    {
        return trim((string) config('services.telegram.token', ''));
    }

    private static function chat(): string
    {
        return trim((string) config('services.telegram.chat_id', ''));
    }

    private static function reason(\Throwable $e): string
    {
        $message = $e->getMessage();

        // The API's own description, when the client wrapped one.
        if (preg_match('/"description":"([^"]+)"/', $message, $matches) === 1) {
            return ucfirst($matches[1]);
        }

        return str_contains($message, 'Unauthorized')
            ? 'Telegram rejected the token.'
            : 'Could not reach Telegram.';
    }
}
