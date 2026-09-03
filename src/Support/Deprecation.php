<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\Log;

/** Small, centrally configurable bridge for backwards-compatible API aliases. */
final class Deprecation
{
    public static function warn(string $identifier, string $replacement): void
    {
        $message = "Panel API [{$identifier}] is deprecated; use [{$replacement}] instead.";

        if ((bool) config('panel.deprecations.warn', true)) {
            trigger_error($message, E_USER_DEPRECATED);
        }

        if ((bool) config('panel.deprecations.log', false)) {
            Log::warning($message, ['api' => $identifier, 'replacement' => $replacement]);
        }
    }
}
