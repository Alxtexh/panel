<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;

/**
 * An empty mailbox. Folders and threads are props, never baked in.
 *
 * OFF until this portal calls `Panel::apps(['mail'])`. Subclass and override
 * `folders()`, `categories()`, `threads()` (and `messages()` for a thread
 * page) to load your store. Do not copy another product's correspondence
 * into the kit.
 *
 * `->without(['mail'])` drops the screen even after `apps()`.
 */
class MailPage extends Page
{
    protected static string $icon = 'mail';

    public static function uri(): string
    {
        return 'apps/mail';
    }

    public static function label(): string
    {
        return 'Mail';
    }

    public static function component(): string
    {
        return 'Mail';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('mail');
    }

    /**
     * @return list<array{key: string, label: string, unread?: int, total?: int}>
     */
    public static function folders(Request $request): array
    {
        return [];
    }

    /**
     * @return list<array{key: string, label: string, total?: int}>
     */
    public static function categories(Request $request): array
    {
        return [];
    }

    /**
     * Thread list for the current folder / search.
     *
     * @return array{rows: list<array<string, mixed>>, total: int}
     */
    public static function threads(Request $request): array
    {
        return ['rows' => [], 'total' => 0];
    }

    /**
     * One thread's messages, when `?thread=` is present. Empty means the
     * index is the only screen.
     *
     * @return list<array<string, mixed>>
     */
    public static function messages(Request $request): array
    {
        return [];
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $folder = (string) $request->query('folder', '');
        $category = $request->query('category');
        $search = trim((string) $request->query('q', ''));

        return [
            'folder' => $folder,
            'category' => is_string($category) ? $category : null,
            'search' => $search,
            'folders' => static::folders($request),
            'categories' => static::categories($request),
            'messages' => static::threads($request),
            'thread' => static::messages($request),
        ];
    }
}
