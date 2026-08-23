<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Notifications;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Notifications\Notification;
use Alxtexh\Panel\Alerts\Announcement;

/**
 * Where a dismissed announcement goes.
 *
 * IT EXISTS SO THAT CLOSING A BANNER IS NOT DESTRUCTIVE. Somebody closes one
 * because it is in the way of the work they came to do, not because they are
 * finished with it - and "maintenance on Sunday", dismissed on Tuesday, is
 * precisely the thing they will want on Saturday. Without this, a × next to a
 * notice is a trapdoor: the only copy they had, gone, with no undo.
 *
 * DATABASE ONLY, and emphatically not mail. Emailing somebody about a banner
 * they just closed is the panel arguing with them.
 *
 * IT KEEPS THE ACTION, so a notice that offered "Pay now" still offers it from
 * the bell. A record of a message minus the thing it was asking you to do is
 * half a message.
 */
final class AnnouncementDismissed extends Notification
{
    public function __construct(private readonly Announcement $announcement) {}

    /** @return list<string> */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /**
     * SUBSTITUTED FOR THIS SPECIFIC RECIPIENT, the same as the banner was
     * before it was dismissed - the copy in the bell is the second place this
     * text is shown, not a second declaration of it, and it would be a
     * regression for a name to resolve on the dashboard and then revert to
     * "@user" the moment the notice moves into the bell.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        $user = $notifiable instanceof Authenticatable ? $notifiable : null;

        return [
            'title' => $this->announcement->title,
            'body' => $this->announcement->body === null
                ? null
                : Announcement::substitute($this->announcement->body, $user),
            'href' => $this->announcement->action_url,
            /*
             * THE SEVERITY TRAVELS, so an outage notice does not become an
             * ordinary grey line in the inbox the moment somebody dismisses it.
             */
            'severity' => $this->announcement->severity,
        ];
    }
}
