<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Mail;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $tenant_id
 * @property string $key
 * @property string $subject
 * @property string $body
 * @property list<string>|null $variables
 */
final class PanelEmailTemplate extends Model
{
    protected $table = 'panel_email_templates';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'variables' => 'array',
        ];
    }
}
