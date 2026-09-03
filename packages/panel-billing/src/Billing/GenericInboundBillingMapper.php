<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Billing;

use Illuminate\Http\Request;

final class GenericInboundBillingMapper
{
    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>|null
     */
    public static function map(array $payload, Request $request): ?array
    {
        $billableType = self::stringOrNull($payload['billable_type'] ?? $payload['target_type'] ?? null);
        $billableKey = $payload['billable_key'] ?? $payload['target_key'] ?? null;
        $status = self::stringOrNull($payload['status'] ?? $payload['subscription_status'] ?? null);

        if ($billableKey === null || $status === null) {
            return null;
        }

        return [
            'billable_type' => $billableType ?? 'tenant',
            'billable_key' => (string) $billableKey,
            'status' => $status,
            'period_end_at' => $payload['period_end_at'] ?? null,
            'grace_ends_at' => $payload['grace_ends_at'] ?? null,
            'provider_ref' => self::stringOrNull($payload['provider_ref'] ?? $payload['reference'] ?? null)
                ?? self::stringOrNull($request->header('X-Provider-Reference')),
        ];
    }

    private static function stringOrNull(mixed $value): ?string
    {
        if (! is_string($value)) {
            return null;
        }

        $value = trim($value);

        return $value === '' ? null : $value;
    }
}

