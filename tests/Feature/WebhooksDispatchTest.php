<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Webhooks\WebhookDelivery;
use Alxtexh\Panel\Webhooks\WebhookDispatcher;
use Alxtexh\Panel\Webhooks\WebhookEndpoint;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;

final class WebhooksDispatchTest extends TestCase
{
    use RefreshDatabase;

    public function test_dispatch_records_delivery_and_posts_with_signature(): void
    {
        Http::fake(['*' => Http::response('ok', 200)]);

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        config(['panel.tenancy.resolver' => static fn (): int => $tenant->id]);

        User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs(User::first());

        WebhookEndpoint::query()->create([
            'tenant_id' => $tenant->id,
            'url' => 'https://example.test/hook',
            'secret' => WebhookEndpoint::storeSecret('test-secret'),
            'events' => ['invoice.paid'],
            'enabled' => true,
        ]);

        app(WebhookDispatcher::class)->dispatch('invoice.paid', ['id' => 1], $tenant->id);

        $this->assertSame(1, WebhookDelivery::query()->count());

        $delivery = WebhookDelivery::query()->first();
        $this->assertSame('invoice.paid', $delivery->event);
        $this->assertSame(200, $delivery->status_code);

        Http::assertSent(static function ($request): bool {
            return $request->hasHeader('X-Panel-Signature')
                && $request->hasHeader('X-Panel-Event', 'invoice.paid');
        });
    }

    public function test_retry_redispatches_failed_delivery(): void
    {
        Http::fake(['*' => Http::response('ok', 200)]);

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $endpoint = WebhookEndpoint::query()->create([
            'tenant_id' => $tenant->id,
            'url' => 'https://example.test/hook',
            'secret' => WebhookEndpoint::storeSecret('retry-secret'),
            'events' => ['user.created'],
            'enabled' => true,
        ]);

        $delivery = WebhookDelivery::query()->create([
            'tenant_id' => $tenant->id,
            'endpoint_id' => $endpoint->id,
            'event' => 'user.created',
            'payload' => ['id' => 2],
            'status_code' => 500,
            'error' => 'HTTP 500',
        ]);

        app(WebhookDispatcher::class)->retry($delivery->fresh());

        $delivery->refresh();
        $this->assertSame(200, $delivery->status_code);
    }
}
