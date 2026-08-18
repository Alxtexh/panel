<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
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
        return ['email_verified_at' => 'datetime', 'password' => 'hashed'];
    }
}
