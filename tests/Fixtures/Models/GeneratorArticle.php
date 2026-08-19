<?php

declare(strict_types=1);

namespace App\Models;

use Alxtexh\Panel\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

#[ScopedBy(TenantScope::class)]
class Article extends Model
{
    use SoftDeletes;

    protected $guarded = [];
}
