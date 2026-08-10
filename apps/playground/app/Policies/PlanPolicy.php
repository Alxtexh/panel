<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\Customer;
use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Alxtexh\Panel\Policies\TenantResourcePolicy;

/**
 * ONE POLICY, TWO KINDS OF PRINCIPAL - AND THAT IS FORCED, NOT CHOSEN.
 *
 * LARAVEL RESOLVES A POLICY BY MODEL, NEVER BY PANEL. Two resources expose
 * `Plan`: the operators' catalogue at `/plans`, and the customers' read-only
 * one at `/client/client-plans`. Different panels, different guards, different
 * user models - and exactly one policy class between them, because they name
 * the same model.
 *
 * THIS IS THE FIRST THING TO KNOW WHEN PUTTING A MODEL IN MORE THAN ONE PANEL,
 * and it is not obvious until it bites. It bit here: the generated policy was
 * `extends TenantResourcePolicy {}` - which derives an ability name and asks
 * `hasPermission()` - and a `Customer` holds no permissions at all, so the
 * customer portal answered 403 on its own screen, to its own signed-in
 * customer, out of the box.
 *
 * `make:panel-resource --panel=client --generate` wrote that policy, and it
 * cannot reasonably know better: the resource is the thing that belongs to a
 * panel, and by then the policy has been asked about a model.
 *
 * THE SHAPE THAT WORKS is to answer the principal's own question rather than
 * one question with two meanings:
 *
 *   - an OPERATOR asks "do I hold this ability" - permissions, as before
 *   - a CUSTOMER asks "is this mine, and may I read it" - ownership, and here
 *     a plan catalogue is readable by anyone the tenant belongs to
 *
 * A customer may never write. That is stated once here rather than relied upon
 * from the client resource declaring no form: a resource is a screen, and a
 * policy is the boundary.
 */
final class PlanPolicy extends TenantResourcePolicy
{
    /** A customer may read the catalogue of plans on offer. */
    public function viewAny(Authenticatable&Authorizable $user): bool
    {
        return $user instanceof Customer || parent::viewAny($user);
    }

    public function view(Authenticatable&Authorizable $user, ?Model $record = null): bool
    {
        /*
         * THE TENANT CHECK IS NOT SKIPPED FOR CUSTOMERS. `parent::view()` does
         * two things - the tenant scope and the ability - and only the second
         * is inapplicable here. Returning true for any customer would let one
         * provider's customer read another provider's catalogue by id.
         */
        if ($user instanceof Customer) {
            return $record === null || (int) $record->getAttribute('tenant_id') === (int) $user->tenant_id;
        }

        return parent::view($user, $record);
    }

    /*
     * EVERYTHING BELOW IS INHERITED UNCHANGED, and that is the point.
     *
     * `create`, `update`, `delete`, `restore` and `forceDelete` all reach
     * `TenantResourcePolicy`, which asks for an ability. A `Customer` holds
     * none, so every write is denied for them by the same code that grants an
     * operator - rather than by a second rule that could be forgotten.
     */
}
