<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Permission\Traits\HasRoles;

/**
 * Somebody who can sign in, and nothing else.
 *
 * NO TENANT COLUMN ON PURPOSE. The reference app's User carries `tenant_id`
 * and `role_id`, and a framework test written against it cannot show whether
 * the behaviour under test needed either. Tenancy gets its own fixture when
 * the tenancy tests move; this one is for the surfaces that do not.
 */
class User extends Authenticatable
{
    use HasRoles;
    use Notifiable;

    protected $guarded = [];

    protected $hidden = ['password', 'remember_token'];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'appearance' => 'array',
        ];
    }

    /**
     * Tenant memberships for workspace switching.
     *
     * The panel package resolves the relation name at runtime, and accepts a
     * few conventional names. `memberships` is one of them.
     */
    public function memberships(): BelongsToMany
    {
        return $this->belongsToMany(
            Tenant::class,
            'memberships',
            'user_id',
            'tenant_id',
        );
    }
}
