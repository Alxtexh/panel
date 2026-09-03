<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Common status envelope for installation-wide operations.
 *
 * Queue jobs use the cache-backed JobStatus store; backups use installation
 * state because their scheduler and readers must cross tenant boundaries.
 * Both now expose the same status vocabulary and lifecycle timestamps.
 */
final class OperationStatus
{
    public function __construct(private readonly InstallationState $state) {}

    /** @param array<string, mixed> $extra */
    public function record(
        string $key,
        string $operation,
        string $state,
        string $message,
        array $extra = [],
    ): void {
        $previous = $this->get($key);
        $status = self::normalizeStatus($state);
        $now = now()->toIso8601String();

        $this->state->put($key, [
            ...$previous,
            ...$extra,
            'operation' => $operation,
            'state' => $state,
            'status' => $status,
            'message' => $message,
            'failure' => in_array($status, ['failed'], true) ? $message : null,
            'startedAt' => $previous['startedAt'] ?? $now,
            'finishedAt' => in_array($status, ['done', 'failed', 'canceled', 'skipped'], true)
                ? $now
                : ($previous['finishedAt'] ?? null),
            'progress' => in_array($status, ['done'], true)
                ? 100
                : ($extra['progress'] ?? ($previous['progress'] ?? null)),
        ], seconds: 86_400);
    }

    /** @return array<string, mixed> */
    public function get(string $key): array
    {
        $value = $this->state->get($key, []);

        return is_array($value) ? $value : [];
    }

    public static function normalizeStatus(string $state): string
    {
        return match ($state) {
            'pending', 'running' => 'running',
            'succeeded', 'done' => 'done',
            'canceled', 'cancelled' => 'canceled',
            'skipped' => 'skipped',
            'failed', 'refused' => 'failed',
            default => $state,
        };
    }
}
