<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\AuditEntry;
use App\Models\User;
use Alxtexh\Panel\Support\Abilities;

/**
 * An audit entry can be read and nothing else.
 *
 * THE WRITE METHODS RETURN FALSE UNCONDITIONALLY rather than checking an
 * ability, because there is no ability to check - `ActivityResource::actions()`
 * removes them from the registry entirely. They exist here as a second, blunt
 * refusal: the panel denies any ability whose model has no policy method, and a
 * method that silently allowed would be worse than one that is missing.
 *
 * THE RECORD IS NULLABLE ON EVERY METHOD, matching `TenantResourcePolicy`.
 * The panel asks these questions at CLASS level as well as per record - the
 * list page checks "may this person delete anything here" before it offers the
 * action - so a signature demanding an instance throws `ArgumentCountError` and
 * takes the whole list down with a 500.
 *
 * AN EDITABLE AUDIT TRAIL IS NOT EVIDENCE. That is the whole reason this file is
 * shaped like this rather than deferring to the usual `hasPermission` pattern -
 * no role, however privileged, should be able to acquire the right to rewrite
 * what happened.
 */
final class AuditEntryPolicy
{
    /**
     * THE RESOURCE KEY AS A LITERAL, not `ActivityResource::key()`.
     *
     * The audit ENGINE and this model are the starter's; the screen that lists
     * entries is the demo's `ActivityResource`, which is fenced in `app/Demo`.
     * Referring to that class from here would mean deleting the demo takes this
     * policy - and therefore the audit trail - with it. The key is a string on
     * both sides, so naming it is what keeps the dependency one-way.
     */
    private const RESOURCE_KEY = 'activities';

    public function viewAny(User $user): bool
    {
        /*
         * THE KEY COMES FROM THE RESOURCE, never a literal.
         *
         * It was hardcoded as `'activity'` here and the resource's actual key is
         * `activities` - so the ability checked was one that does not exist,
         * `hasPermission` returned false for everybody, and the screen was
         * simply invisible with no error to explain it.
         */
        return $user->hasPermission(Abilities::name('viewAny', self::RESOURCE_KEY));
    }

    public function view(User $user, ?AuditEntry $entry = null): bool
    {
        return $user->hasPermission(Abilities::name('view', self::RESOURCE_KEY));
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, ?AuditEntry $entry = null): bool
    {
        return false;
    }

    public function delete(User $user, ?AuditEntry $entry = null): bool
    {
        return false;
    }

    public function restore(User $user, ?AuditEntry $entry = null): bool
    {
        return false;
    }

    public function forceDelete(User $user, ?AuditEntry $entry = null): bool
    {
        return false;
    }
}
