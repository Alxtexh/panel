<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Alxtexh\Panel\Notifications\Notification;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\TenantContext;
use Alxtexh\Panel\Webhooks\WebhookDelivery;
use Alxtexh\Panel\Webhooks\WebhookDispatcher;
use Alxtexh\Panel\Webhooks\WebhookEndpoint;

/**
 * Webhook endpoints and delivery log. OFF until `Panel::apps(['webhooks'])`.
 *
 * Host implements `events()` for the allowed event catalog. Dispatch via
 * `WebhookDispatcher::dispatch('invoice.paid', $payload)` from kit events.
 */
class WebhookEndpointsPage extends Page
{
    protected static string $icon = 'webhook';

    protected static ?string $group = 'Developer';

    public static function uri(): string
    {
        return 'apps/webhooks';
    }

    public static function label(): string
    {
        return 'Webhooks';
    }

    public static function component(): string
    {
        return 'Webhooks';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('webhooks');
    }

    /**
     * @return list<string>
     */
    public static function events(Request $request): array
    {
        $catalog = config('panel.webhooks.events');

        return is_array($catalog) ? array_values(array_map('strval', $catalog)) : [];
    }

    public static function actions(): array
    {
        return [
            'save' => 'manage_webhooks',
            'delete' => 'manage_webhooks',
            'retry' => 'manage_webhooks',
        ];
    }

    public static function actionUris(): array
    {
        return [
            'save' => 'save',
            'delete' => 'delete',
            'retry' => 'retry',
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $tenantId = app(TenantContext::class)->currentKey();
        $selected = $request->query('endpoint');

        $endpoints = $tenantId === null ? [] : WebhookEndpoint::query()
            ->where('tenant_id', $tenantId)
            ->orderByDesc('id')
            ->get()
            ->map(static fn (WebhookEndpoint $row): array => [
                'id' => $row->id,
                'url' => $row->url,
                'events' => $row->events,
                'enabled' => $row->enabled,
            ])
            ->all();

        $deliveries = [];

        if ($tenantId !== null && is_numeric($selected)) {
            $deliveries = WebhookDelivery::query()
                ->where('tenant_id', $tenantId)
                ->where('endpoint_id', (int) $selected)
                ->orderByDesc('id')
                ->limit(50)
                ->get()
                ->map(static fn (WebhookDelivery $row): array => [
                    'id' => $row->id,
                    'event' => $row->event,
                    'status_code' => $row->status_code,
                    'error' => $row->error,
                    'delivered_at' => $row->delivered_at?->toIso8601String(),
                ])
                ->all();
        }

        return [
            'eventsCatalog' => static::events($request),
            'endpoints' => $endpoints,
            'selectedEndpointId' => is_numeric($selected) ? (int) $selected : null,
            'deliveries' => $deliveries,
        ];
    }

    public static function save(Request $request): RedirectResponse
    {
        $tenantId = app(TenantContext::class)->currentKey();

        abort_if($tenantId === null, 403);

        $validated = $request->validate([
            'id' => ['nullable', 'integer'],
            'url' => ['required', 'url', 'max:2048'],
            'events' => ['required', 'array', 'min:1'],
            'events.*' => ['string', 'max:120'],
            'enabled' => ['boolean'],
            'secret' => ['nullable', 'string', 'max:255'],
        ]);

        $allowed = static::events($request);
        $events = array_values(array_intersect(
            array_map('strval', $validated['events']),
            $allowed === [] ? array_map('strval', $validated['events']) : $allowed,
        ));

        abort_if($events === [], 422);

        $id = $validated['id'] ?? null;

        if ($id !== null) {
            $endpoint = WebhookEndpoint::query()
                ->where('tenant_id', $tenantId)
                ->whereKey($id)
                ->firstOrFail();

            $endpoint->url = $validated['url'];
            $endpoint->events = $events;
            $endpoint->enabled = (bool) ($validated['enabled'] ?? true);

            if (($validated['secret'] ?? '') !== '') {
                $endpoint->secret = WebhookEndpoint::storeSecret((string) $validated['secret']);
            }

            $endpoint->save();
        } else {
            $secret = ($validated['secret'] ?? '') !== ''
                ? (string) $validated['secret']
                : Str::random(32);

            WebhookEndpoint::query()->create([
                'tenant_id' => $tenantId,
                'url' => $validated['url'],
                'secret' => WebhookEndpoint::storeSecret($secret),
                'events' => $events,
                'enabled' => (bool) ($validated['enabled'] ?? true),
            ]);
        }

        Notification::make()->title('Webhook saved')->success()->send();

        return back();
    }

    public static function delete(Request $request): RedirectResponse
    {
        $tenantId = app(TenantContext::class)->currentKey();

        abort_if($tenantId === null, 403);

        $validated = $request->validate([
            'id' => ['required', 'integer'],
        ]);

        WebhookEndpoint::query()
            ->where('tenant_id', $tenantId)
            ->whereKey($validated['id'])
            ->delete();

        Notification::make()->title('Webhook deleted')->success()->send();

        return back();
    }

    public static function retry(Request $request): RedirectResponse
    {
        $tenantId = app(TenantContext::class)->currentKey();

        abort_if($tenantId === null, 403);

        $validated = $request->validate([
            'id' => ['required', 'integer'],
        ]);

        $delivery = WebhookDelivery::query()
            ->where('tenant_id', $tenantId)
            ->whereKey($validated['id'])
            ->firstOrFail();

        app(WebhookDispatcher::class)->retry($delivery);

        Notification::make()->title('Delivery retried')->success()->send();

        return back();
    }
}
