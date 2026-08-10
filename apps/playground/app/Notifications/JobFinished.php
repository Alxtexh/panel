<?php

declare(strict_types=1);

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

/**
 * "Your export is ready", "1,203 subscribers suspended".
 *
 * WHY THIS IS A NOTIFICATION AND NOT AN ALERT: it records something that
 * HAPPENED, to one person, at one moment. It stays true forever and stays
 * visible until they read it. An alert, by contrast, describes a condition that
 * is true right now and vanishes on its own - see Alxtexh\Panel\Alerts\Alert.
 *
 * DATABASE ONLY. A background job finishing is worth a badge in the panel and
 * is emphatically not worth an email; a queued export that emailed on
 * completion would produce a mailbox full of "done" the first time someone
 * exported a few filtered views in a row.
 */
final class JobFinished extends Notification
{
    use Queueable;

    public function __construct(
        private readonly string $title,
        private readonly string $body,
        private readonly ?string $href = null,
        private readonly string $severity = 'info',
    ) {}

    /** @return list<string> */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /** @return array<string, mixed> */
    public function toArray(object $notifiable): array
    {
        return [
            'title' => $this->title,
            'body' => $this->body,
            'href' => $this->href,
            'severity' => $this->severity,
        ];
    }
}
