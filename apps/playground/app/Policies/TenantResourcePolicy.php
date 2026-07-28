<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Support\TenantContext;

/**
 * Base policy for tenant-owned records.
 *
 * A policy has to EXIST for anything to be permitted - the panel denies by
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
        return $this->allows($user, 'viewAny');
    }

    /**
     * Record-level abilities take a NULLABLE record.
     *
     * The panel asks the same ability twice: once against the class, to decide
     * whether to render a button at all, and once against a specific record
     * before the write. Laravel passes no record for the class-level check, so a
     * required parameter throws ArgumentCountError on every page load - which is
     * how this was found.
     *
     * Null therefore means "could you ever do this", and a record means "may you
     * do it to this one".
     */
    public function view(User $user, ?Model $record = null): bool
    {
        return $this->allows($user, 'view', $record);
    }

    public function create(User $user): bool
    {
        return $this->allows($user, 'create');
    }

    public function update(User $user, ?Model $record = null): bool
    {
        return $this->allows($user, 'update', $record);
    }

    public function delete(User $user, ?Model $record = null): bool
    {
        return $this->allows($user, 'delete', $record);
    }

    /**
     * Restoring is not editing.
     *
     * Given its own ability rather than folded into `update` because they are
     * genuinely different permissions: plenty of roles should be able to correct
     * a record without being able to resurrect one somebody else deleted.
     */
    public function restore(User $user, ?Model $record = null): bool
    {
        return $this->allows($user, 'restore', $record);
    }

    /**
     * Permanent deletion is the one act with no undo, so it is separate from
     * `delete` - which is reversible - and can be withheld on its own.
     */
    public function forceDelete(User $user, ?Model $record = null): bool
    {
        return $this->allows($user, 'forceDelete', $record);
    }

    /**
     * The two gates, in the order that matters.
     *
     * TENANCY FIRST, PERMISSION SECOND, and both must pass. They answer
     * different questions and neither implies the other: tenancy asks "is this
     * yours", the role asks "may you do this to it". A user with every
     * permission still cannot touch another organisation's record, and a user
     * inside the right organisation still cannot delete without `delete_*`.
     *
     * A MODEL WITH NO REGISTERED RESOURCE IS DENIED. `Abilities::forModel()`
     * returns null when nothing registers the model, and the safe reading of
     * "no ability name exists for this" is refusal - the same posture the panel
     * takes when a policy is missing. Granting instead would mean any model that
     * is not yet a resource is unprotected, which is exactly backwards: the ones
     * that have not been thought about are the ones needing the default.
     */
    private function allows(User $user, string $action, ?Model $record = null): bool
    {
        if (! $this->hasTenant($user)) {
            return false;
        }

        if ($record !== null && ! $this->owns($user, $record)) {
            return false;
        }

        $ability = Abilities::forModel($action, $record ?? $this->modelFor());

        return $ability !== null && $user->hasPermission($ability);
    }

    /**
     * The model this policy guards, for the class-level checks that carry no
     * record.
     *
     * Derived from the policy's own name - `ClientPolicy` guards `Client` -
     * because Laravel gives a policy no reference to its model, and the
     * alternative is every subclass restating something the naming already
     * says. A subclass whose model does not follow the convention overrides it.
     */
    protected function modelFor(): string
    {
        return 'App\\Models\\'.str_replace('Policy', '', class_basename(static::class));
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
