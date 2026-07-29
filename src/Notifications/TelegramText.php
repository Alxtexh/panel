<?php

declare(strict_types=1);

namespace PanelKit\Panel\Notifications;

use Illuminate\Notifications\Notification;
use NotificationChannels\Telegram\TelegramMessage;

/**
 * A line of text, as a notification.
 *
 * THE ADAPTER BETWEEN "SAY THIS" AND LARAVEL'S NOTIFICATION SHAPE. The channel
 * package sends notifications, and most of what a panel needs to say - a backup
 * failed, disk is nearly full, somebody published an announcement - is a
 * sentence rather than an event with a class. Without this, every such sentence
 * would need its own Notification file, and the ones that never get written are
 * the alerts nobody receives.
 *
 * TELEGRAM ONLY, ON PURPOSE. It carries no `toMail` and never will: this exists
 * because a caller already decided the destination. Anything that should reach
 * somebody through whichever channels they configured is a real notification
 * with a real name, and should be written as one.
 *
 * NOT QUEUED. It is used inside failure paths - an exception handler, a backup
 * that just died - where the queue may be exactly what is broken. A synchronous
 * request with a short timeout is delivered or reported; a queued one may be
 * neither, silently.
 */
final class TelegramText extends Notification
{
    public function __construct(private readonly string $text) {}

    /**
     * @return list<string>
     */
    public function via(mixed $notifiable): array
    {
        return ['telegram'];
    }

    public function toTelegram(mixed $notifiable): TelegramMessage
    {
        return TelegramMessage::create($this->text)
            /*
             * PREVIEWS OFF. An alert that names a URL should not paste that
             * page's title and picture into the chat underneath it - on a
             * channel people read at 3am, the message is the point.
             */
            ->options(['disable_web_page_preview' => true]);
    }
}
