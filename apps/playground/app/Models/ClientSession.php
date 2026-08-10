<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Alxtexh\Panel\Models\Scopes\TenantScope;

#[ScopedBy(TenantScope::class)]
final class ClientSession extends Model
{
    protected $table = 'client_sessions';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'started_at' => 'datetime',
            'ended_at' => 'datetime',
        ];
    }
}
