<?php

declare(strict_types=1);

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Support\Facades\Auth;
use RuntimeException;

/**
 * Constrains every query on a tenant-owned model to the acting user's tenant.
 *
 * This is a global scope rather than a `where` in the controller for one reason:
 * a forgotten `where` is a cross-tenant data leak, and a global scope cannot be
 * forgotten. Every new query, relation load, and count inherits it.
 *
 * It applies to the model's own table via `qualifyColumn`, so it stays correct
 * once the list query joins `plans` — an unqualified `tenant_id` would be
 * ambiguous the moment a second table with that column enters the query.
 *
 * Fails closed, with NO context exemption. There is deliberately no
 * `runningInConsole()` escape hatch: `php artisan test` runs in console, so such
 * an exemption disables the scope across the entire test suite and no test can
 * ever catch a leak again. That is not a hypothetical — the first version of
 * this class had it, and the cross-tenant test passed a full result set.
 *
 * Code that legitimately crosses tenants (seeders, back-office jobs) opts out
 * loudly and per query with `withoutGlobalScope(TenantScope::class)`, which is
 * greppable. An implicit ambient exemption is not.
 */
final class TenantScope implements Scope
{
    public function apply(Builder $builder, Model $model): void
    {
        $tenantId = self::currentTenantId();

        if ($tenantId === null) {
            // whereRaw('1 = 0') would be cheaper, but this is unambiguous in a
            // query log and does not depend on the driver's boolean handling.
            $builder->whereNull($model->qualifyColumn($model->getKeyName()));

            return;
        }

        $builder->where($model->qualifyColumn('tenant_id'), $tenantId);
    }

    /**
     * Resolved per call, never memoized in a static.
     *
     * Spec §9: a static holding tenant data survives the request under Octane
     * and serves tenant A's id to tenant B on the same worker. Auth's own
     * resolution is already request-scoped and cheap.
     */
    public static function currentTenantId(): ?int
    {
        $user = Auth::user();

        if ($user === null) {
            return null;
        }

        if (! array_key_exists('tenant_id', $user->getAttributes())) {
            throw new RuntimeException(
                'The authenticated user has no tenant_id attribute; tenant scoping cannot be resolved safely.'
            );
        }

        $tenantId = $user->getAttribute('tenant_id');

        return $tenantId === null ? null : (int) $tenantId;
    }
}
