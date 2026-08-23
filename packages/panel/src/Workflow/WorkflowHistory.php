<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Workflow;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Alxtexh\Panel\Support\TenantContext;

/**
 * Recent `state_transition` audit rows for one record.
 *
 * Opt-in display only: callers already know the resource declared a workflow.
 * Returns an empty list when the host has not created `audit_entries` yet, so
 * a missing table never breaks the record page.
 */
final class WorkflowHistory
{
    /**
     * @return list<array{
     *     id: int|string,
     *     actor: string|null,
     *     at: string|null,
     *     column: string|null,
     *     from: string|null,
     *     to: string|null,
     *     changes: array<string, mixed>|null
     * }>
     */
    public static function for(Model $record, int $limit = 25): array
    {
        if ($limit < 1 || ! Schema::hasTable('audit_entries')) {
            return [];
        }

        $tenant = app(TenantContext::class)->currentKey();

        if ($tenant === null) {
            return [];
        }

        $rows = DB::table('audit_entries')
            ->where('tenant_id', $tenant)
            ->where('auditable_type', $record::class)
            ->where('auditable_id', (string) $record->getKey())
            ->where('event', 'state_transition')
            ->orderByDesc('created_at')
            ->orderByDesc('id')
            ->limit($limit)
            ->get([
                'id',
                'actor_name',
                'changes',
                'created_at',
            ]);

        $out = [];

        foreach ($rows as $row) {
            $changes = self::decodeChanges($row->changes ?? null);
            $parsed = self::parseTransition($changes);

            $out[] = [
                'id' => $row->id,
                'actor' => $row->actor_name,
                'at' => $row->created_at !== null ? (string) $row->created_at : null,
                'column' => $parsed['column'],
                'from' => $parsed['from'],
                'to' => $parsed['to'],
                'changes' => $changes,
            ];
        }

        return $out;
    }

    /**
     * @return array<string, mixed>|null
     */
    private static function decodeChanges(mixed $raw): ?array
    {
        if ($raw === null || $raw === '') {
            return null;
        }

        if (is_array($raw)) {
            return $raw;
        }

        if (! is_string($raw)) {
            return null;
        }

        $decoded = json_decode($raw, true);

        return is_array($decoded) ? $decoded : null;
    }

    /**
     * @param  array<string, mixed>|null  $changes
     * @return array{column: string|null, from: string|null, to: string|null}
     */
    private static function parseTransition(?array $changes): array
    {
        if ($changes === null || $changes === []) {
            return ['column' => null, 'from' => null, 'to' => null];
        }

        $column = isset($changes['column']['to']) ? (string) $changes['column']['to'] : null;
        $from = isset($changes['from']['to']) ? (string) $changes['from']['to'] : null;
        $to = isset($changes['to']['to']) ? (string) $changes['to']['to'] : null;

        if ($column !== null || $from !== null || $to !== null) {
            return compact('column', 'from', 'to');
        }

        // Legacy shape from transitionTo(): { status: { to: 'resolved' } }
        foreach ($changes as $field => $pair) {
            if (! is_array($pair)) {
                continue;
            }

            return [
                'column' => (string) $field,
                'from' => array_key_exists('from', $pair) ? self::stringify($pair['from']) : null,
                'to' => array_key_exists('to', $pair) ? self::stringify($pair['to']) : null,
            ];
        }

        return ['column' => null, 'from' => null, 'to' => null];
    }

    private static function stringify(mixed $value): ?string
    {
        if ($value === null) {
            return null;
        }

        if (is_bool($value)) {
            return $value ? 'true' : 'false';
        }

        if (is_scalar($value)) {
            return (string) $value;
        }

        return null;
    }
}
