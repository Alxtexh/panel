<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;

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
