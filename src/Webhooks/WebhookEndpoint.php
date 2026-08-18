<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Webhooks;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;

/**
 * @property int $id
 * @property int $tenant_id
 * @property string $url
 * @property string $secret
 * @property list<string> $events
 * @property bool $enabled
 */
final class WebhookEndpoint extends Model
{
    protected $table = 'panel_webhook_endpoints';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'events' => 'array',
            'enabled' => 'boolean',
        ];
    }

    public function plainSecret(): string
    {
        try {
            return Crypt::decryptString($this->secret);
        } catch (\Throwable) {
            return '';
        }
    }

    public static function storeSecret(string $plain): string
    {
        return Crypt::encryptString($plain);
    }

    public function listensFor(string $event): bool
    {
        return in_array($event, $this->events, true);
    }
}
