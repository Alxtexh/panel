<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * A model with NO POLICY REGISTERED, on purpose.
 *
 * NOT TENANT-SCOPED EITHER, and that is deliberate rather than incidental: the
 * cross-tenant matrix enumerates scoped resources and expects each to LIST for
 * its owner, so a resource that denies everybody would fail it for the wrong
 * reason. This one is excluded from that matrix by having no tenant column,
 * and exists solely to assert what happens when authorisation is unanswered.
 */
class Note extends Model
{
    protected $guarded = [];
}
