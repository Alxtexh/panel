<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Models;

use Alxtexh\Panel\Audit\Auditable;
use Alxtexh\Panel\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;

/**
 * A model that audits itself, through the observer rather than by hand.
 *
 * WHY A SEPARATE FIXTURE. `AuditRecorder::record()` can be called directly,
 * but the `from` half of an update diff is only correct when it runs during
 * the `updated` EVENT - Laravel syncs a model's originals after the event
 * fires, so a call made once `save()` has returned reads the new value as the
 * old one. Testing the diff therefore has to go through `Auditable`, which is
 * also how every real caller reaches it.
 */
#[ScopedBy(TenantScope::class)]
class Ledger extends Model
{
    use Auditable;

    protected $guarded = [];
}
