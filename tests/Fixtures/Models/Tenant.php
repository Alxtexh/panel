<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * An organisation, with nothing an ISP would recognise.
 *
 * The reference app's `Tenant` carries branding colours and a feature-flag
 * JSON column; neither is what the isolation tests are about, and both are
 * extra reasons a failure could be something other than the scope.
 */
class Tenant extends Model
{
    protected $guarded = [];
}
