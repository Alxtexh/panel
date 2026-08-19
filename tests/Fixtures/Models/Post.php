<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * A model that belongs to nobody's business.
 *
 * DELIBERATELY GENERIC, which is the whole reason it exists. The framework's
 * tests used `Client` - a subscriber on an ISP network, with a tenant, a plan,
 * a router and an expiry - so a test about SORTING was written against a model
 * carrying five domain concerns, and "does the table sort" could not be told
 * apart from "does the ISP demo still work". Filament tests against Post,
 * Team and Product for the same reason.
 */
class Post extends Model
{
    protected $guarded = [];

    public $timestamps = true;
}
