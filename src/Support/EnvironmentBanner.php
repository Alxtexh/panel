<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;

/**
 * Compact badge naming the current APP_ENV.
 *
 * OPT-IN / ZERO COST WHEN OFF. Production installs see nothing unless
 * `PANEL_ENVIRONMENT_BANNER=true` (or `Panel::environmentBanner(true)`).
 * Non-production shows the badge by default so local and staging are obvious.
 * `PANEL_ENVIRONMENT_BANNER=false` / `->environmentBanner(false)` hides it.
 */
final class EnvironmentBanner
{
    /** @var array<string, string> env name => tone */
    private const TONES = [
        'local' => 'local',
        'development' => 'local',
        'dev' => 'local',
        'testing' => 'testing',
        'test' => 'testing',
        'staging' => 'staging',
        'stage' => 'staging',
        'production' => 'production',
        'prod' => 'production',
    ];

    /**
     * @return array{label: string, tone: string}|null
     */
    public static function for(?Panel $panel = null): ?array
    {
        $panel ??= app(PanelManager::class)->currentPanel();

        if ($panel !== null && ! $panel->showsEnvironmentBanner()) {
            return null;
        }

        if (! self::enabled($panel)) {
            return null;
        }

        $env = strtolower((string) app()->environment());
        $tone = self::TONES[$env] ?? 'unknown';

        return [
            'label' => $env === '' ? 'unknown' : $env,
            'tone' => $tone,
        ];
    }

    private static function enabled(?Panel $panel): bool
    {
        if ($panel !== null && $panel->environmentBannerOverride() === false) {
            return false;
        }

        if ($panel !== null && $panel->environmentBannerOverride() === true) {
            return true;
        }

        $flag = config('panel.environment_banner.enabled');

        if ($flag === false || $flag === 0 || $flag === '0' || $flag === 'false') {
            return false;
        }

        if ($flag === true || $flag === 1 || $flag === '1' || $flag === 'true') {
            return true;
        }

        // Default: show outside production only.
        return ! app()->environment('production');
    }
}
