<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\Route;
use Alxtexh\Panel\Panel;

/**
 * Backups, Logs and Monitoring URLs for this panel.
 *
 * These screens live in the account menu (`Support\OnboardingSteps`,
 * `Http\Middleware\SharePanelProps`) and nowhere else - a SIDEBAR group for
 * them was tried and dropped: the account menu already lists Backups, Logs
 * and Monitoring, and a second copy in the sidebar was two places teaching
 * nobody where either one lives, the same reasoning `PanelNavigation`
 * already applies to Settings/Backups/Logs/Monitoring under the account
 * menu (see that class's own doc comment).
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
}
