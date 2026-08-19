<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Notifications;

use Illuminate\Notifications\Notification;

/**
 * A line of text, for the topbar bell - the database sibling of
 * `TelegramText`, and shaped exactly as the bell dropdown reads it
 * (title, body, href, severity).
 *
 * DATABASE ONLY, on purpose: this exists because a caller already decided
 * the destination is the bell. Anything that should reach somebody through
 * whichever channels they prefer is a real notification with a real name.
 */
final class BellText extends Notification
{
    /**
     * @param  list<array<string, mixed>>  $actions
     */
    public function __construct(
        private readonly string $title,
        private readonly string $body = '',
        private readonly ?string $href = null,
        private readonly string $severity = 'info',
        private readonly array $actions = [],
        private readonly string $category = 'general',
    ) {}

    /** @return list<string> */
    public function via(mixed $notifiable): array
    {
        return ['database'];
    }

    /** @return array<string, mixed> */
    public function toArray(mixed $notifiable): array
    {
        return [
            'title' => $this->title,
            'body' => $this->body,
            'href' => $this->href,
            'severity' => $this->severity,
            'actions' => $this->actions,
            'category' => $this->category,
        ];
    }
}
