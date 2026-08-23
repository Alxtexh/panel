<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Per-user dashboard widget layout stored under `users.appearance.dashboardLayout`.
 *
 * Opt-in via `Panel::userDashboards()`. Shape:
 *
 *     [
 *         'widgets' => [
 *             ['id' => 'stat:users_total', 'span' => 1, 'hidden' => false],
 *             ['id' => 'chart:sessions', 'span' => 2, 'hidden' => false],
 *             ['id' => 'table:recent', 'span' => 2, 'hidden' => true],
 *         ],
 *     ]
 *
 * Legacy `chartOrder: list<string>` (v1.0.97) still reads: each key becomes
 * `chart:{key}` with span 1. Writes always store the `widgets` list.
 */
final class DashboardLayout
{
    public const KINDS = ['stat', 'chart', 'table'];

    public const MAX_WIDGETS = 100;

    public const KEY_PATTERN = '/^[a-z0-9_-]+$/i';

    public const ID_PATTERN = '/^(stat|chart|table):[a-z0-9_-]+$/i';

    /**
     * @param  mixed  $raw
     * @return array{widgets: list<array{id: string, span: int, hidden: bool}>}
     */
    public static function normalize(mixed $raw): array
    {
        if (! is_array($raw)) {
            return ['widgets' => []];
        }

        $widgets = [];

        if (isset($raw['widgets']) && is_array($raw['widgets'])) {
            foreach ($raw['widgets'] as $entry) {
                $normalized = self::normalizeEntry($entry);

                if ($normalized !== null) {
                    $widgets[$normalized['id']] = $normalized;
                }

                if (count($widgets) >= self::MAX_WIDGETS) {
                    break;
                }
            }
        }

        /*
         * Legacy chart-order only. Append keys that are not already covered by
         * an explicit widgets entry so a mixed payload stays stable.
         */
        if (isset($raw['chartOrder']) && is_array($raw['chartOrder'])) {
            foreach ($raw['chartOrder'] as $key) {
                if (! is_string($key) || preg_match(self::KEY_PATTERN, $key) !== 1) {
                    continue;
                }

                $id = 'chart:'.$key;

                if (! isset($widgets[$id])) {
                    $widgets[$id] = ['id' => $id, 'span' => 1, 'hidden' => false];
                }

                if (count($widgets) >= self::MAX_WIDGETS) {
                    break;
                }
            }
        }

        return ['widgets' => array_values($widgets)];
    }

    /**
     * @return array{id: string, span: int, hidden: bool}|null
     */
    private static function normalizeEntry(mixed $entry): ?array
    {
        if (! is_array($entry)) {
            return null;
        }

        $id = $entry['id'] ?? null;

        if (! is_string($id) || preg_match(self::ID_PATTERN, $id) !== 1) {
            $kind = $entry['kind'] ?? $entry['type'] ?? null;
            $key = $entry['key'] ?? null;

            if (! is_string($kind) || ! is_string($key)) {
                return null;
            }

            $kind = strtolower($kind);

            if (! in_array($kind, self::KINDS, true) || preg_match(self::KEY_PATTERN, $key) !== 1) {
                return null;
            }

            $id = $kind.':'.$key;
        }

        $span = isset($entry['span']) && is_numeric($entry['span'])
            ? (int) $entry['span']
            : 1;

        if ($span < 1) {
            $span = 1;
        }

        if ($span > 2) {
            $span = 2;
        }

        $hidden = filter_var($entry['hidden'] ?? false, FILTER_VALIDATE_BOOLEAN);

        return [
            'id' => strtolower($id),
            'span' => $span,
            'hidden' => $hidden,
        ];
    }

    public static function widgetId(string $kind, string $key): string
    {
        return strtolower($kind).':'.$key;
    }
}
