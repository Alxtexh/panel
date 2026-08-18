<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Alxtexh\Panel\Billing\GenericInboundBillingMapper;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\BillingStateStore;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

final class BillingWebhookInboundController extends Controller
{
    public function __invoke(Request $request, ?string $adapter = null): JsonResponse
    {
        $panel = app(PanelManager::class)->currentPanel();

        abort_if($panel === null, 404);

        $rawBody = (string) $request->getContent();
        $payload = $request->json()->all();

        abort_if(! is_array($payload), 422, 'Invalid webhook payload.');

        $verifier = $panel->billingWebhookVerifierUsing();
        $verified = $verifier === null
            ? true
            : (bool) app()->call($verifier, [
                'request' => $request,
                'panel' => $panel,
                'adapter' => $adapter,
                'payload' => $payload,
                'rawBody' => $rawBody,
            ]);

        abort_if(! $verified, 401, 'Webhook verification failed.');

        $mapper = $panel->billingWebhookMapperUsing();
        $mapped = $mapper === null
            ? GenericInboundBillingMapper::map($payload, $request)
            : app()->call($mapper, [
                'request' => $request,
                'panel' => $panel,
                'adapter' => $adapter,
                'payload' => $payload,
                'rawBody' => $rawBody,
            ]);

        if (! is_array($mapped) || ! isset($mapped['billable_key'], $mapped['status'])) {
            return response()->json(['ok' => true, 'applied' => false], 202);
        }

        $transition = BillingStateStore::upsert(
            (string) ($mapped['billable_type'] ?? 'tenant'),
            (string) $mapped['billable_key'],
            (string) $mapped['status'],
            is_string($mapped['period_end_at'] ?? null) ? $mapped['period_end_at'] : null,
            is_string($mapped['grace_ends_at'] ?? null) ? $mapped['grace_ends_at'] : null,
            is_string($mapped['provider_ref'] ?? null) ? $mapped['provider_ref'] : null,
        );

        return response()->json(['ok' => true, 'applied' => true, 'transition' => $transition], 202);
    }
}

