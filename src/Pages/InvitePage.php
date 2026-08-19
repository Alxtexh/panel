<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Alxtexh\Panel\Notifications\Notification;
use Alxtexh\Panel\PanelManager;

/**
 * Pending invites. OFF until `apps(['invites'])`.
 *
 * Unlike UserManagementPage, this is for email invites that become accounts
 * later. The kit does not ship an invites table: override `pending()`, `send()`,
 * and `revoke()` to persist in your store. Accept URL pattern is documented for
 * the host: `{app}/invites/accept/{token}` (register your own route).
 */
class InvitePage extends Page
{
    protected static string $icon = 'user-plus';

    protected static ?string $group = 'People';

    public static function uri(): string
    {
        return 'apps/invites';
    }

    public static function label(): string
    {
        return 'Invites';
    }

    public static function component(): string
    {
        return 'Invites';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('invites');
    }

    /**
     * @return list<array{id: string, email: string, role_id: string, expires_at?: string|null}>
     */
    public static function pending(Request $request): array
    {
        return [];
    }

    /**
     * @return list<array{id: string, label: string}>
     */
    public static function roles(Request $request): array
    {
        return [];
    }

    public static function acceptUrlPattern(): string
    {
        return url('/invites/accept/{token}');
    }

    /**
     * @param  array{email: string, role_id: string}  $input
     */
    public static function send(array $input): void
    {
    }

    public static function revoke(string $id): void
    {
    }

    public static function actions(): array
    {
        return [
            'submit' => 'manage_invites',
            'cancel' => 'manage_invites',
        ];
    }

    public static function actionUris(): array
    {
        return [
            'submit' => 'send',
            'cancel' => 'revoke',
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $base = static::pageHref();

        return [
            'pending' => static::pending($request),
            'roles' => static::roles($request),
            'acceptUrlPattern' => static::acceptUrlPattern(),
            'sendHref' => $base.'/send',
            'revokeHref' => $base.'/revoke',
        ];
    }

    public static function submit(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'role_id' => ['required', 'string', 'max:120'],
        ]);

        /** @var array{email: string, role_id: string} $input */
        $input = [
            'email' => $validated['email'],
            'role_id' => $validated['role_id'],
        ];

        static::send($input);

        Notification::make()->title('Invite sent')->success()->send();

        return back();
    }

    public static function cancel(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'id' => ['required', 'string', 'max:120'],
        ]);

        static::revoke($validated['id']);

        Notification::make()->title('Invite revoked')->success()->send();

        return back();
    }

    protected static function pageHref(): string
    {
        $path = '/'.trim(static::navigationPath(), '/');
        $prefix = app(PanelManager::class)->currentPanel()?->getPath() ?? '';

        if ($prefix !== '' && $prefix !== '/') {
            $path = rtrim($prefix, '/').$path;
        }

        if (! str_starts_with($path, '/')) {
            $path = '/'.$path;
        }

        return $path;
    }
}
