<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Webhooks;

use Illuminate\Support\Facades\Http;
use Alxtexh\Panel\Support\TenantContext;

/**
 * Dispatch kit webhook deliveries. Sync by default; queue when configured.
 *
 * Host code may call `WebhookDispatcher::dispatch('invoice.paid', $payload)`.
 */
final class WebhookDispatcher
{
    public function __construct(
        private readonly TenantContext $tenants,
    ) {}

    /**
     * @param  array<string, mixed>  $payload
     */
    public function dispatch(string $event, array $payload, int|string|null $tenantId = null): void
    {
        $tenantId ??= $this->tenants->currentKey();

        if ($tenantId === null) {
            return;
        }

        $endpoints = WebhookEndpoint::query()
            ->where('tenant_id', $tenantId)
            ->where('enabled', true)
            ->get()
            ->filter(static fn (WebhookEndpoint $endpoint): bool => $endpoint->listensFor($event));

        foreach ($endpoints as $endpoint) {
            $this->deliver($endpoint, $event, $payload, $tenantId);
        }
    }

    public function retry(WebhookDelivery $delivery): void
    {
        $endpoint = $delivery->endpoint;

        if ($endpoint === null) {
            return;
        }

        $this->send($endpoint, $delivery->event, $delivery->payload, $delivery);
    }

    /**
     * Send a test delivery to one endpoint (bypasses event subscription filter).
     */
    public function ping(WebhookEndpoint $endpoint, int|string|null $tenantId = null): void
    {
        $tenantId ??= $endpoint->tenant_id;

        $this->deliver($endpoint, 'webhook.ping', [
            'message' => 'Panel webhook ping',
            'sent_at' => now()->toIso8601String(),
        ], $tenantId);
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    private function deliver(WebhookEndpoint $endpoint, string $event, array $payload, int|string $tenantId): void
    {
        $record = WebhookDelivery::query()->create([
            'tenant_id' => $tenantId,
            'endpoint_id' => $endpoint->id,
            'event' => $event,
            'payload' => $payload,
        ]);

        $this->send($endpoint, $event, $payload, $record);
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    private function send(WebhookEndpoint $endpoint, string $event, array $payload, WebhookDelivery $record): void
    {
        $body = json_encode([
            'event' => $event,
            'payload' => $payload,
            'delivery_id' => $record->id,
        ], JSON_THROW_ON_ERROR);

        $secret = $endpoint->plainSecret();
        $signature = hash_hmac('sha256', $body, $secret);

        try {
            $response = Http::timeout(10)
                ->withHeaders([
                    'Content-Type' => 'application/json',
                    'X-Panel-Signature' => $signature,
                    'X-Panel-Event' => $event,
                ])
                ->withBody($body, 'application/json')
                ->post($endpoint->url);

            $record->update([
                'status_code' => $response->status(),
                'response_body' => mb_substr((string) $response->body(), 0, 4000),
                'error' => $response->successful() ? null : 'HTTP '.$response->status(),
                'delivered_at' => now(),
            ]);
        } catch (\Throwable $e) {
            $record->update([
                'error' => $e->getMessage(),
                'delivered_at' => now(),
            ]);
        }
    }
}
