<?php

declare(strict_types=1);

/**
 * Copy-paste recipe: plug ANY billing gateway into PanelKit.
 *
 * This file is not autoloaded. Copy the closures into a panel provider.
 * Change the header name and the secret source to match your processor.
 * Do not vendor-lock the panel to one gateway.
 */

use Alxtexh\Panel\Billing\GenericBillingWebhookAdapter;
use Alxtexh\Panel\Billing\GenericInboundBillingMapper;
use Alxtexh\Panel\Panel;
use Illuminate\Http\Request;

Panel::make('admin')
    ->apps(['billing-portal'])
    ->billingState()
    ->billingWebhookVerifier(GenericBillingWebhookAdapter::verifier(
        (string) config('services.billing.webhook_secret'),
        'X-Webhook-Signature',
    ))
    ->billingWebhookMapper(function (array $payload, Request $request): ?array {
        /*
         * Map YOUR gateway's payload onto the packaged contract.
         * Required: billable_key, status (active|past_due|suspended|canceled|expired).
         * Optional: billable_type, period_end_at, grace_ends_at, provider_ref.
         *
         * If your payload already uses those keys, the packaged mapper is enough:
         *   GenericInboundBillingMapper::map($payload, $request)
         */
        $event = (string) ($payload['event'] ?? $payload['type'] ?? '');

        $status = match ($event) {
            'payment.settled', 'subscription.active' => 'active',
            'payment.failed', 'invoice.past_due' => 'past_due',
            'subscription.paused', 'account.suspended' => 'suspended',
            'subscription.closed', 'subscription.canceled' => 'canceled',
            'subscription.ended' => 'expired',
            default => (string) ($payload['status'] ?? ''),
        };

        if ($status === '') {
            return GenericInboundBillingMapper::map($payload, $request);
        }

        return [
            'billable_type' => (string) ($payload['billable_type'] ?? 'tenant'),
            'billable_key' => (string) ($payload['account_id'] ?? $payload['billable_key'] ?? ''),
            'status' => $status,
            'period_end_at' => $payload['period_end_at'] ?? null,
            'grace_ends_at' => $payload['grace_ends_at'] ?? null,
            'provider_ref' => $payload['reference'] ?? $payload['provider_ref'] ?? null,
        ];
    });
