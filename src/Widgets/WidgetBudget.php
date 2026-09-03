<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

use Closure;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

/** Measure deferred widget queries without changing the widget response. */
final class WidgetBudget
{
    public static function observe(string $component, string $key, Closure $resolve): mixed
    {
        $budget = (int) config('panel.widgets.query_budget', 50);

        if ($budget <= 0) {
            return $resolve();
        }

        $connection = DB::connection();
        $wasLogging = $connection->logging();
        $before = count($connection->getQueryLog());

        if (! $wasLogging) {
            $connection->enableQueryLog();
        }

        try {
            return $resolve();
        } finally {
            $queries = count($connection->getQueryLog()) - $before;

            if (! $wasLogging) {
                $connection->disableQueryLog();
                $connection->flushQueryLog();
            }

            if ($queries > $budget) {
                Log::warning('Panel widget exceeded its query budget.', [
                    'component' => $component,
                    'widget' => $key,
                    'queries' => $queries,
                    'budget' => $budget,
                    'tenant' => (string) (app(\Alxtexh\Panel\Support\TenantContext::class)->currentKey() ?? ''),
                ]);
            }
        }
    }
}
