<?php

declare(strict_types=1);

namespace PanelKit\Panel\Alerts;

/**
 * A DERIVED condition that currently holds - "6 routers are offline".
 *
 * AN ALERT IS NOT A NOTIFICATION, and conflating them is the usual mistake.
 *
 *   An ALERT describes the state of the system RIGHT NOW. It is recomputed on
 *   every read, it is identical for everyone who can see the same data, and it
 *   disappears when the underlying condition clears. You do not dismiss an
 *   alert - you fix it, or it stops being true on its own. Storing one would
 *   mean keeping a row that claims six routers are offline long after they came
 *   back.
 *
 *   A NOTIFICATION records that something HAPPENED, to a particular person.
 *   "Your export is ready" stays true forever, belongs to one user, and remains
 *   until they read or delete it. It is a stored row precisely because the
 *   event does not persist anywhere else.
 *
 * The practical consequence: alerts have no id, no read state and no per-user
 * storage, and this class has no `markAsRead`. If a future requirement wants an
 * alert acknowledged, that is a notification ABOUT an alert - not a mutable
 * alert.
 */
final class Alert
{
    public const DANGER = 'danger';

    public const WARNING = 'warning';

    public const INFO = 'info';

    private function __construct(
        public readonly string $key,
        public readonly string $severity,
        public readonly string $title,
        public readonly string $body,
        public readonly ?string $href,
        public readonly int $count,
    ) {}

    public static function make(
        string $key,
        string $severity,
        string $title,
        string $body,
        ?string $href = null,
        int $count = 0,
    ): self {
        return new self($key, $severity, $title, $body, $href, $count);
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'severity' => $this->severity,
            'title' => $this->title,
            'body' => $this->body,
            'href' => $this->href,
            'count' => $this->count,
        ];
    }
}
