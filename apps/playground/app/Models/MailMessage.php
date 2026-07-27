<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;

/**
 * A message in the panel's mailbox.
 *
 * TENANT-SCOPED LIKE EVERYTHING ELSE, and additionally filtered by user in the
 * controller. Both are needed and neither is redundant: the tenant scope stops
 * another organisation's mail being reachable at all, and the user filter stops
 * a colleague's inbox being readable within one organisation. Dropping either
 * leaves a hole the other does not cover.
 */
#[ScopedBy(TenantScope::class)]
final class MailMessage extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'is_read' => 'boolean',
            'is_starred' => 'boolean',
            'has_attachment' => 'boolean',
            'received_at' => 'datetime',
        ];
    }
}
