<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Illuminate\Support\Facades\Broadcast;

/**
 * Who else is viewing a record (Echo presence channel).
 *
 * OPT-IN. `Panel::presence()` or `PANEL_PRESENCE=true`. Without Echo / a real
 * broadcast driver the client never joins and the strip stays empty.
 */
final class Presence
{
    public static function enabled(?Panel $panel = null): bool
    {
        $panel ??= app(PanelManager::class)->currentPanel();

        if ($panel !== null && ! $panel->hasPresence()) {
            return false;
        }

        $flag = config('panel.presence.enabled');

        if ($flag === false || $flag === 0 || $flag === '0' || $flag === 'false') {
            return false;
        }

        if ($panel?->presenceOverride() === true) {
            return true;
        }

        if ($flag === true || $flag === 1 || $flag === '1' || $flag === 'true') {
            return true;
        }

        return false;
    }

    /**
     * Payload shared with every panel page. Null when presence is off.
     *
     * @return array{enabled: true}|null
     */
    public static function shared(?Panel $panel = null): ?array
    {
        return self::enabled($panel) ? ['enabled' => true] : null;
    }

    public static function channelName(string|int $tenantId, string $resource, string|int $recordId): string
    {
        return 'tenant.'.$tenantId.'.'.$resource.'.'.$recordId;
    }

    /**
     * Register the presence channel once. Hosts may call this from
     * `routes/channels.php` instead of hand-rolling the callback.
     *
     * @param  class-string  $userModel
     */
    public static function registerChannel(string $userModel, string $tenantColumn = 'tenant_id'): void
    {
        Broadcast::channel(
            'tenant.{tenant}.{resource}.{id}',
            function ($user, string $tenant, string $resource, string $id) use ($tenantColumn): array|false {
                if (! is_object($user) || (string) data_get($user, $tenantColumn) !== $tenant) {
                    return false;
                }

                $class = app(PanelManager::class)->resource($resource);

                if ($class === null || ! $class::can('viewAny')) {
                    return false;
                }

                if ($class::model()::query()->whereKey($id)->doesntExist()) {
                    return false;
                }

                return [
                    'id' => data_get($user, 'id'),
                    'name' => (string) data_get($user, 'name', 'Someone'),
                ];
            },
        );
    }
}
