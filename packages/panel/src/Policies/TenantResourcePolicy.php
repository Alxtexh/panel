<?php

declare(strict_types=1);

namespace PanelKit\Panel\Policies;

use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Support\Ability;
use PanelKit\Panel\Support\TenantContext;

/**
 * Base policy for tenant-owned records.
 *
 * PROMOTED FROM THE REFERENCE APP, where it had been the base class of every
 * policy in the demo while the package - which DENIES a resource with no policy
 * - shipped none. So the first thing anybody installing PanelKit had to write
 * was this file, from scratch, to make their first resource visible at all;
 * and the failure mode of getting it slightly wrong is a screen that opens to
 * somebody it should not.
 *
 * A POLICY HAS TO EXIST FOR ANYTHING TO BE PERMITTED. The panel denies by
 * default when none is registered, which inverts the usual failure so that
 * forgetting to write one locks the resource down rather than opening it up.
 * Extending this is now how you satisfy that in one line.
 *
 * THE RECORD-LEVEL CHECKS RE-ASSERT TENANT OWNERSHIP even though the global
 * scope already prevents another tenant's record from being found. That is
 * deliberate belt-and-braces: the scope can be bypassed by an explicit
 * `withoutGlobalScope`, and a policy that assumed it never would is one
 * refactor away from being wrong.
 *
 * THE USER IS TWO CONTRACTS, NOT A CLASS - the same substitution `TicketPolicy`
 * carries. A package cannot name the application's user model, and this needs
 * exactly two things of it: an identity and an ability check.
 *
 * WHICH MEANS AN OVERRIDE MUST USE THAT TYPE TOO, and this is the one thing
 * worth knowing before extending this class:
 *
 *     public function update(Authenticatable&Authorizable $user, ?Model $record = null): bool
 *
 * NOT `update(User $user, ...)`. PHP forbids NARROWING a parameter in an
 * override - not just discourages it - so writing your own `User` there is a
 * COMPILE-TIME fatal, thrown while the class is being loaded. That failure is
 * unusually hard to read: it happens before any of your code runs, PHPUnit
 * reports it only as "Premature end of PHP process", and a web request dies
 * with a blank page. Widening is allowed and narrowing never is, so type the
 * actor as these two contracts and reach for your own model inside the method
 * with an `instanceof` if you need it - which is what the reference app's
 * `UserPolicy` does.
 */
abstract class TenantResourcePolicy
{
    public function viewAny(Authenticatable&Authorizable $user): bool
    {
        return $this->allows($user, 'viewAny');
    }

    /**
     * Record-level abilities take a NULLABLE record.
     *
     * The panel asks the same ability twice: once against the class, to decide
     * whether to render a button at all, and once against a specific record
     * before the write. Laravel passes no record for the class-level check, so
     * a required parameter throws ArgumentCountError on every page load - which
     * is how this was found.
     *
     * Null therefore means "could you ever do this", and a record means "may
     * you do it to this one".
     */
    public function view(Authenticatable&Authorizable $user, ?Model $record = null): bool
    {
        return $this->allows($user, 'view', $record);
    }

    public function create(Authenticatable&Authorizable $user): bool
    {
        return $this->allows($user, 'create');
    }

    public function update(Authenticatable&Authorizable $user, ?Model $record = null): bool
    {
        return $this->allows($user, 'update', $record);
    }

    public function delete(Authenticatable&Authorizable $user, ?Model $record = null): bool
    {
        return $this->allows($user, 'delete', $record);
    }

    /**
     * Restoring is not editing.
     *
     * Given its own ability rather than folded into `update` because they are
     * genuinely different permissions: plenty of roles should be able to
     * correct a record without being able to resurrect one somebody else
     * deleted.
     */
    public function restore(Authenticatable&Authorizable $user, ?Model $record = null): bool
    {
        return $this->allows($user, 'restore', $record);
    }

    /**
     * Permanent deletion is the one act with no undo, so it is separate from
     * `delete` - which is reversible - and can be withheld on its own.
     */
    public function forceDelete(Authenticatable&Authorizable $user, ?Model $record = null): bool
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
     * takes when a policy is missing. Granting instead would mean any model
     * that is not yet a resource is unprotected, which is exactly backwards:
     * the ones that have not been thought about are the ones needing the
     * default.
     */
    private function allows(Authenticatable&Authorizable $user, string $action, ?Model $record = null): bool
    {
        if (! $this->hasTenant()) {
            return false;
        }

        if ($record !== null && ! $this->owns($record)) {
            return false;
        }

        $ability = Abilities::forModel($action, $record ?? $this->modelFor());

        return $ability !== null && Ability::held($user, $ability);
    }

    /**
     * The model this policy guards, for the class-level checks that carry no
     * record.
     *
     * DERIVED FROM THE POLICY'S OWN NAME - `ClientPolicy` guards `Client` -
     * because Laravel gives a policy no reference to its model, and the
     * alternative is every subclass restating something the naming already
     * says. A subclass whose model does not follow the convention overrides it,
     * which is what the packaged `AnnouncementPolicy` does.
     *
     * THE NAMESPACE IS ASKED OF THE APPLICATION, not spelled `App\Models\`.
     * That literal was correct in the reference app and would be a guess about
     * everybody else's; `getNamespace()` is the framework's own answer, so a
     * project rooted anywhere still resolves.
     */
    protected function modelFor(): string
    {
        return app()->getNamespace().'Models\\'.str_replace('Policy', '', class_basename(static::class));
    }

    /**
     * Is there an organisation in force - and does the question even apply?
     *
     * `MODE_NONE` IS NOT A MISSING TENANT, and conflating the two locked every
     * single-tenant installation out of its own panel. A fresh
     * `composer require` generates a resource, generates this policy, tells you
     * to run `panel:permissions sync`, and then refuses every screen with
     * "Forbidden" - because `currentKey()` correctly returns null when there is
     * no tenancy, and this gate read that as "no tenant resolved, deny".
     *
     * Null still means deny in every mode that HAS tenants: an unresolved tenant
     * there is a request that would otherwise read across all of them, which is
     * exactly what this base class exists to prevent. What changed is that a
     * business with one organisation is no longer treated as one whose
     * organisation went missing.
     */
    private function hasTenant(): bool
    {
        $context = app(TenantContext::class);

        if ($context->mode() === TenantContext::MODE_NONE) {
            return true;
        }

        return $context->currentKey() !== null;
    }

    private function owns(Model $record): bool
    {
        $context = app(TenantContext::class);

        // Single-tenant: every record belongs to the only organisation there is,
        // and the column this would compare does not exist.
        if ($context->mode() === TenantContext::MODE_NONE) {
            return true;
        }

        // Dedicated-database tenancy: the connection is the boundary and the
        // record carries no tenant column to compare.
        if (! $context->shouldScopeByColumn()) {
            return $context->isIsolated();
        }

        $key = $context->currentKey();

        return $key !== null && $record->getAttribute($context->column()) == $key;
    }
}
