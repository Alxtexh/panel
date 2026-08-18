<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Alxtexh\Panel\Live\LiveConfig;
use Alxtexh\Panel\PanelManager;

/**
 * An empty chat. Conversations and the open thread are props.
 *
 * OFF until this portal calls `Panel::apps(['chat'])`. Subclass and override
 * `conversations()` / `thread()`. Reuses kit `useLiveUpdates` when `live()`
 * is not off. `->without(['chat'])` drops the screen even after `apps()`.
 */
class ChatPage extends Page
{
    protected static string $icon = 'message-circle';

    public static function uri(): string
    {
        return 'apps/chat';
    }

    public static function label(): string
    {
        return 'Chat';
    }

    public static function component(): string
    {
        return 'Chat';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('chat');
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function conversations(Request $request): array
    {
        return [];
    }

    /**
     * @return array{name?: string, status?: string, messages: list<array<string, mixed>>}|null
     */
    public static function thread(Request $request): ?array
    {
        return null;
    }

    /**
     * Transport for `useLiveUpdates`. Off by default so an empty shell
     * does not poll.
     *
     * @return array<string, mixed>
     */
    public static function live(Request $request): array
    {
        return LiveConfig::off()->toArray();
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $selected = $request->query('id');

        return [
            'search' => trim((string) $request->query('q', '')),
            'selectedId' => is_numeric($selected) ? (int) $selected : null,
            'conversations' => static::conversations($request),
            'thread' => static::thread($request),
            'live' => static::live($request),
        ];
    }
}
