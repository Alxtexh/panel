<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\Route;
use Alxtexh\Panel\Panel;

/**
 * Backups, Logs and Monitoring as a findable Operations nav group.
 *
 * These screens already exist, gated on `view_operations`. They used to live
 * only in the account menu, which is why a fresh install looked like it had
 * no operations cluster. Customer portals still drop them with
 * `->without(['operations'])`.
 */
final class OperationsNav
{
    /**
     * @return array{backups: ?string, logs: ?string, monitoring: ?string}
     */
    public static function urls(Panel $panel): array
    {
        $prefixed = $panel->getRouteName().'operations.';
        $isDefault = $panel->id === (string) config('panel.default', 'admin');

        $resolve = static fn (string $screen): ?string => match (true) {
            Route::has($prefixed.$screen) => route($prefixed.$screen),
            $isDefault && Route::has('operations.'.$screen) => route('operations.'.$screen),
            default => null,
        };

        return [
            'backups' => $resolve('backups'),
            'logs' => $resolve('logs'),
            'monitoring' => $resolve('monitoring'),
        ];
    }

    /**
     * Sidebar entries when this panel offers operations and the viewer may open them.
     *
     * @return list<array{title: string, href: string, icon: string, group: string, sort: int, key: string}>
     */
    public static function pages(Panel $panel, mixed $user): array
    {
        if (! $panel->offers('operations')) {
            return [];
        }

        if (! Ability::allows($user, 'view_operations')) {
            return [];
        }

        $urls = self::urls($panel);
        $entries = [];

        $screens = [
            ['key' => 'operations-backups', 'title' => 'Backups', 'href' => $urls['backups'], 'icon' => 'archive', 'sort' => 10],
            ['key' => 'operations-logs', 'title' => 'Logs', 'href' => $urls['logs'], 'icon' => 'file-text', 'sort' => 20],
            ['key' => 'operations-monitoring', 'title' => 'Monitoring', 'href' => $urls['monitoring'], 'icon' => 'gauge', 'sort' => 30],
        ];

        foreach ($screens as $screen) {
            if ($screen['href'] === null || $screen['href'] === '') {
                continue;
            }

            $entries[] = [
                'key' => $screen['key'],
                'title' => $screen['title'],
                'href' => $screen['href'],
                'icon' => $screen['icon'],
                'group' => 'Operations',
                'sort' => $screen['sort'],
            ];
        }

        return $entries;
    }
}
