<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use PanelKit\Panel\Support\TenantContext;

/**
 * Base policy for tenant-owned records.
 *
 * A policy has to EXIST for anything to be permitted — the panel denies by
 * default when none is registered, which inverts the usual failure so that
 * forgetting to write one locks the resource down rather than opening it up.
 *
 * The record-level checks re-assert tenant ownership even though the global
 * scope already prevents another tenant's record from being found. That is
 * deliberate belt-and-braces: the scope can be bypassed by an explicit
 * `withoutGlobalScope`, and a policy that assumed it never would is one refactor
 * away from being wrong.
 */
abstract class TenantResourcePolicy
{
    public function viewAny(User $user): bool
    {
        return $this->hasTenant($user);
    }

    /**
     * Record-level abilities take a NULLABLE record.
     *
     * The panel asks the same ability twice: once against the class, to decide
     * whether to render a button at all, and once against a specific record
     * before the write. Laravel passes no record for the class-level check, so a
     * required parameter throws ArgumentCountError on every page load — which is
     * how this was found.
     *
     * Null therefore means "could you ever do this", and a record means "may you
     * do it to this one".
     */
    public function view(User $user, ?Model $record = null): bool
    {
        return $record === null ? $this->hasTenant($user) : $this->owns($user, $record);
    }

    public function create(User $user): bool
    {
        return $this->hasTenant($user);
    }

    public function update(User $user, ?Model $record = null): bool
    {
        return $record === null ? $this->hasTenant($user) : $this->owns($user, $record);
    }

    public function delete(User $user, ?Model $record = null): bool
    {
        return $record === null ? $this->hasTenant($user) : $this->owns($user, $record);
    }

    private function hasTenant(User $user): bool
    {
        return app(TenantContext::class)->currentKey() !== null;
    }

    private function owns(User $user, Model $record): bool
    {
        $context = app(TenantContext::class);

        // Dedicated-database tenancy: the connection is the boundary and the
        // record carries no tenant column to compare.
        if (! $context->shouldScopeByColumn()) {
            return $context->isIsolated();
        }

        $key = $context->currentKey();

        return $key !== null && $record->getAttribute($context->column()) == $key;
    }
}
