<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\PanelRoutes;
use Alxtexh\Panel\Pages\WebhookEndpointsPage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\Abilities;
use Alxtexh\Panel\Support\PanelPages;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Webhooks\WebhookDelivery;
use Alxtexh\Panel\Webhooks\WebhookDispatcher;
use Alxtexh\Panel\Webhooks\WebhookEndpoint;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

final class WebhooksPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_webhooks_app_is_off_until_enabled(): void
    {
        $this->assertFalse(WebhookEndpointsPage::isEnabled());
        $this->assertFalse(Panel::make('alone')->offersApp('webhooks'));
    }

    public function test_webhooks_shorthand_opts_in(): void
    {
        $panel = Panel::make('ops')->webhooks();

        $this->assertTrue($panel->offersApp('webhooks'));
    }

    public function test_webhooks_is_an_optional_screen_stub(): void
    {
        $this->assertContains('Webhooks', PanelPages::OPTIONAL_SCREENS);
        $this->assertNotContains('Webhooks', PanelPages::SCREENS);
        $this->assertStringContainsString('Webhooks', PanelPages::stub('Webhooks'));
        $this->assertStringContainsString(
            '@alxtexh-enterprise/panel/pages/Webhooks.vue',
            PanelPages::stub('Webhooks'),
        );
    }

    public function test_manage_webhooks_is_a_panel_ability(): void
    {
        $this->assertContains('manage_webhooks', Abilities::PANEL);
        $this->assertArrayHasKey('manage_webhooks', Abilities::PANEL_LABELS);
    }

    public function test_route_registers_when_webhooks_is_enabled(): void
    {
        $panels = app(PanelManager::class);
        $admin = $panels->panel('admin');
        $this->assertNotNull($admin);
        $admin->webhooks();

        $this->resetPageDiscovery($panels);

        $this->assertTrue(WebhookEndpointsPage::isEnabled());
        $this->assertArrayHasKey('webhook-endpoints', $panels->pagesFor('admin'));

        PanelRoutes::register($admin);

        $pageRoute = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'apps/webhooks',
        );
        $pingRoute = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'apps/webhooks/ping',
        );

        $this->assertNotNull($pageRoute);
        $this->assertSame($admin->getRouteName().'pages.webhook-endpoints', $pageRoute->getName());
        $this->assertNotNull($pingRoute);
        $this->assertSame($admin->getRouteName().'pages.webhook-endpoints.ping', $pingRoute->getName());
    }

    public function test_page_data_includes_action_hrefs_and_empty_lists(): void
    {
        $admin = app(PanelManager::class)->panel('admin');
        $this->assertNotNull($admin);
        $admin->webhooks();

        $data = WebhookEndpointsPage::data(Request::create('/apps/webhooks'));

        $this->assertSame([], $data['endpoints']);
        $this->assertSame([], $data['deliveries']);
        $this->assertNull($data['selectedEndpointId']);
        $this->assertSame('/apps/webhooks/save', $data['saveHref']);
        $this->assertSame('/apps/webhooks/ping', $data['pingHref']);
        $this->assertSame('/apps/webhooks/retry', $data['retryHref']);
        $this->assertSame('/apps/webhooks/delete', $data['deleteHref']);
        $this->assertContains('webhook.ping', $data['eventsCatalog']);
    }

    public function test_save_ping_and_retry_round_trip(): void
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

        $saveRequest = Request::create('/apps/webhooks/save', 'POST', [
            'url' => 'https://example.test/hook',
            'events' => ['webhook.ping', 'billing.active'],
            'enabled' => true,
            'secret' => 'ping-secret',
        ]);

        WebhookEndpointsPage::save($saveRequest);

        $endpoint = WebhookEndpoint::query()->first();
        $this->assertNotNull($endpoint);
        $this->assertSame('https://example.test/hook', $endpoint->url);
        $this->assertContains('webhook.ping', $endpoint->events);

        $pingRequest = Request::create('/apps/webhooks/ping', 'POST', [
            'id' => $endpoint->id,
        ]);

        $redirect = WebhookEndpointsPage::ping($pingRequest);
        $this->assertStringContainsString('endpoint='.$endpoint->id, $redirect->getTargetUrl());

        $this->assertSame(1, WebhookDelivery::query()->count());
        $delivery = WebhookDelivery::query()->first();
        $this->assertSame('webhook.ping', $delivery->event);
        $this->assertSame(200, $delivery->status_code);

        Http::assertSent(static function ($request): bool {
            return $request->hasHeader('X-Panel-Event', 'webhook.ping')
                && $request->hasHeader('X-Panel-Signature');
        });

        $data = WebhookEndpointsPage::data(
            Request::create('/apps/webhooks', 'GET', ['endpoint' => $endpoint->id]),
        );

        $this->assertSame($endpoint->id, $data['selectedEndpointId']);
        $this->assertCount(1, $data['deliveries']);
        $this->assertSame('webhook.ping', $data['deliveries'][0]['event']);

        Http::fake(['*' => Http::response('retried', 200)]);

        WebhookEndpointsPage::retry(Request::create('/apps/webhooks/retry', 'POST', [
            'id' => $delivery->id,
        ]));

        $delivery->refresh();
        $this->assertSame(200, $delivery->status_code);
    }

    public function test_dispatcher_ping_targets_one_endpoint(): void
    {
        Http::fake(['*' => Http::response('pong', 200)]);

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $target = WebhookEndpoint::query()->create([
            'tenant_id' => $tenant->id,
            'url' => 'https://example.test/target',
            'secret' => WebhookEndpoint::storeSecret('a'),
            'events' => ['billing.active'],
            'enabled' => true,
        ]);

        WebhookEndpoint::query()->create([
            'tenant_id' => $tenant->id,
            'url' => 'https://example.test/other',
            'secret' => WebhookEndpoint::storeSecret('b'),
            'events' => ['webhook.ping'],
            'enabled' => true,
        ]);

        app(WebhookDispatcher::class)->ping($target, $tenant->id);

        $this->assertSame(1, WebhookDelivery::query()->count());
        $this->assertSame($target->id, WebhookDelivery::query()->first()->endpoint_id);

        Http::assertSentCount(1);
    }

    private function resetPageDiscovery(PanelManager $panels): void
    {
        $ref = new \ReflectionClass($panels);

        foreach (['pagesDiscovered' => false, 'pages' => [], 'panelPageMap' => []] as $property => $value) {
            $prop = $ref->getProperty($property);
            $prop->setAccessible(true);
            $prop->setValue($panels, $value);
        }
    }
}
