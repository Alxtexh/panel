<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Models\Concerns;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Alxtexh\Panel\Models\Scopes\TenantScope;
use Alxtexh\Panel\Support\TenantContext;

/**
 * Marks a model as tenant-owned and applies TenantScope automatically.
 *
 * Use this trait on any Eloquent model that carries a tenant_id column.
 * It boots the global scope, provides a tenant() relationship, and stamps
 * the tenant key on creation so controllers never have to.
 *
 *     class Invoice extends Model
 *     {
 *         use BelongsToTenant;
 *     }
 *
 * Equivalent to the manual `#[ScopedBy(TenantScope::class)]` attribute plus
 * a creating observer, packaged for convenience and Filament parity.
 */
trait BelongsToTenant
{
    public static function bootBelongsToTenant(): void
    {
        static::addGlobalScope(new TenantScope);

        static::creating(function (Model $model): void {
            $context = app(TenantContext::class);

            if (! $context->shouldScopeByColumn()) {
                return;
            }

            $column = $context->column();

            if ($model->getAttribute($column) === null) {
                $model->setAttribute($column, $context->currentKey());
            }
        });
    }

    /**
     * The owning tenant relationship.
     *
     * The model class is resolved from config so this trait works regardless
     * of what the application calls its tenant model.
     *
     * @return BelongsTo<Model, $this>
     */
    public function tenant(): BelongsTo
    {
        $context = app(TenantContext::class);
        $tenantModel = config('panel.tenancy.model', 'App\\Models\\Tenant');

        return $this->belongsTo($tenantModel, $context->column());
    }
}
