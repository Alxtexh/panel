<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use PanelKit\Panel\Models\Scopes\TenantScope;

#[ScopedBy(TenantScope::class)]
final class Plan extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'custom' => 'array',
        ];
    }
}
