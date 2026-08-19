<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

/**
 * A simple mail line for `Notification::make()->channels(['mail'])`.
 */
final class PanelMailText extends Notification
{
    /**
     * @param  list<array<string, mixed>>  $actions
     */
    public function __construct(
        private readonly string $title,
        private readonly string $body = '',
        private readonly array $actions = [],
    ) {}

    /** @return list<string> */
    public function via(mixed $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(mixed $notifiable): MailMessage
    {
        $message = (new MailMessage)
            ->subject($this->title)
            ->line($this->body !== '' ? $this->body : $this->title);

        foreach ($this->actions as $action) {
            $label = is_string($action['label'] ?? null) ? $action['label'] : 'Open';
            $href = is_string($action['href'] ?? null) ? $action['href'] : null;

            if ($href !== null && $href !== '') {
                $message->action($label, url($href));
            }
        }

        return $message;
    }
}
