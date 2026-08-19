<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * A second authenticatable population, for guard-routing tests.
 *
 * THE FIXTURE EXISTS TO GIVE `SharedLoginTest` TWO DISTINCT GUARDS. Testing
 * credential-based panel routing needs two user populations that authenticate
 * separately: a credential accepted by the `web` guard should not also pass
 * the `members` guard, so the routing decision is unambiguous.
 *
 * NOT THE PLAYGROUND'S `Customer`. That model carries ISP-domain columns
 * (`organisation_id`, `is_active`, etc.) and is tested alongside its own
 * business logic. This one carries only what an authenticatable needs.
 */
class Customer extends Authenticatable
{
    protected $table = 'customers';

    protected $guarded = [];

    protected $hidden = ['password', 'remember_token'];

    protected function casts(): array
    {
        return ['password' => 'hashed'];
    }
}
