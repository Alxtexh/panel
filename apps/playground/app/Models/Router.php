<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use PanelKit\Panel\Models\Scopes\TenantScope;

#[ScopedBy(TenantScope::class)]
final class Router extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'last_seen_at' => 'datetime',
            'custom' => 'array',
        ];
    }
}
