<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * A feature request or a bug report, raised from inside the panel.
 *
 * `#[ScopedBy(TenantScope::class)]` for the same reason every other tenant-owned
 * model carries it: a bug report quotes the page it was filed from, so it is as
 * sensitive as that page. The scope is the first of the two gates - the policy
 * is the second - and a table that skips it has no gate at all when a query
 * forgets to mention the tenant.
 */
#[ScopedBy(TenantScope::class)]
final class Feedback extends Model
{
    /** Laravel would pluralise this to `feedbacks`, which is not a word. */
    protected $table = 'feedback';

    public const KINDS = ['feature', 'bug'];

    public const SEVERITIES = ['low', 'medium', 'high'];

    /**
     * DELIBERATELY NARROW. `tenant_id`, `user_id` and `status` are set by the
     * controller from the request's own identity, never from its body - a
     * fillable `tenant_id` is how a report gets filed against another
     * organisation, and a fillable `status` is how a reporter closes their own
     * bug.
     */
    protected $fillable = ['kind', 'severity', 'subject', 'body', 'page_url', 'user_agent', 'viewport'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function tenant(): BelongsTo
    {
        return $this->belongsTo(Tenant::class);
    }
}
