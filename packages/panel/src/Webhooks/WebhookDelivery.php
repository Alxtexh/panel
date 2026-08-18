<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Webhooks;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $tenant_id
 * @property int $endpoint_id
 * @property string $event
 * @property array<string, mixed> $payload
 * @property int|null $status_code
 * @property string|null $response_body
 * @property string|null $error
 * @property \Carbon\CarbonImmutable|null $delivered_at
 */
final class WebhookDelivery extends Model
{
    protected $table = 'panel_webhook_deliveries';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'payload' => 'array',
            'delivered_at' => 'datetime',
        ];
    }

    /** @return BelongsTo<WebhookEndpoint, $this> */
    public function endpoint(): BelongsTo
    {
        return $this->belongsTo(WebhookEndpoint::class, 'endpoint_id');
    }
}
