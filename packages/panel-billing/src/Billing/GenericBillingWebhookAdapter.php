<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Billing;

use Closure;
use Illuminate\Http\Request;

/**
 * Thin, generic inbound billing webhook adapter.
 *
 * Wires the packaged verifier + mapper so a host can plug ANY gateway:
 * pick a signature header, map the payload to `billable_key` + `status`.
 * Not a marketplace, not locked to one processor, not a country default.
 *
 *     Panel::make('admin')
 *         ->billingWebhookVerifier(GenericBillingWebhookAdapter::verifier(
 *             (string) config('services.billing.webhook_secret'),
 *         ))
 *         ->billingWebhookMapper(GenericBillingWebhookAdapter::mapper());
 */
final class GenericBillingWebhookAdapter
{
    /**
     * @return Closure(string, Request): bool
     */
    public static function verifier(
        string $secret,
        string $header = 'X-Webhook-Signature',
        string $algorithm = 'sha256',
    ): Closure {
        return SignedHeaderWebhookVerifier::using($secret, $header, $algorithm);
    }

    /**
     * @return Closure(array<string, mixed>, Request): ?array<string, mixed>
     */
    public static function mapper(): Closure
    {
        return static fn (array $payload, Request $request): ?array => GenericInboundBillingMapper::map($payload, $request);
    }
}
