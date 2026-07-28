<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\AuditEntry;
use App\Models\User;
use App\Panel\Resources\ActivityResource;
use PanelKit\Panel\Support\Abilities;

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
        return $user->hasPermission(Abilities::name('viewAny', ActivityResource::key()));
    }

    public function view(User $user, ?AuditEntry $entry = null): bool
    {
        return $user->hasPermission(Abilities::name('view', ActivityResource::key()));
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
