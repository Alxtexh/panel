<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

/**
 * Low-cardinality, tenant-aware counters for long-running panel operations.
 *
 * Counters are intentionally separate from JobStatus: status is owner-scoped
 * and ephemeral, while these aggregates answer operational questions across
 * many jobs. The date in every key bounds cardinality and gives operators a
 * simple daily retention boundary.
 */
final class OperationMetrics
{
    private const TTL = 604_800;

    /** @param array<string, mixed> $context */
    public static function record(string $operation, string $event, array $context = []): void
    {
        $tenant = self::tenant();
        $date = now()->format('Y-m-d');
        $key = "panel:metrics:operation:{$tenant}:{$operation}:{$event}:{$date}";

        Cache::add($key, 0, self::TTL);
        Cache::increment($key);

        Log::info('Panel operation metric recorded.', [
            'operation' => $operation,
            'event' => $event,
            'tenant' => $tenant,
            ...$context,
        ]);
    }

    /** @return array<string, int> */
    public static function snapshot(string $operation, ?string $date = null): array
    {
        $date ??= now()->format('Y-m-d');
        $events = ['started', 'completed', 'failed', 'canceled'];
        $snapshot = [];

        foreach ($events as $event) {
            $key = 'panel:metrics:operation:'.self::tenant().":{$operation}:{$event}:{$date}";
            $snapshot[$event] = (int) Cache::get($key, 0);
        }

        return $snapshot;
    }

    private static function tenant(): string
    {
        if (! app()->bound(TenantContext::class)) {
            return 'installation';
        }

        return (string) (app(TenantContext::class)->currentKey() ?? 'installation');
    }
}
