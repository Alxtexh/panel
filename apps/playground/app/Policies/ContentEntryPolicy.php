<?php

declare(strict_types=1);

namespace App\Policies;

use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable;
use PanelKit\Panel\Models\ContentEntry;
use PanelKit\Panel\Support\Ability;

/**
 * Who may edit what every portal reads.
 *
 * PLAIN ABILITY CHECKS, NO TENANT CLAUSE - content is central by design (see
 * the model), so "is this mine" has no meaning here and a policy that asked
 * it would refuse everybody. `Ability::allows` is the guarded check that
 * works on any user model and answers false for a guest, and the ability
 * names are the ones `panel:permissions sync` derives from the resource key,
 * so granting them is the same one command as for every other resource.
 */
final class ContentEntryPolicy
{
    public function viewAny(Authenticatable&Authorizable $user): bool
    {
        return Ability::allows($user, 'view_any_content_entries');
    }

    /*
     * EVERY RECORD ARGUMENT IS NULLABLE, AND THAT IS NOT DEFENSIVENESS.
     *
     * A list screen asks "may this action be offered at all" before it holds
     * a row - the panel calls `update($user)` with the user alone to decide
     * whether to draw the button. A required `ContentEntry` turns that into
     * an ArgumentCountError: a 500 on a screen whose permissions are entirely
     * correct, and one that only appears once the list has rows in it, which
     * is why a test asserting the empty list would miss it.
     */
    public function view(Authenticatable&Authorizable $user, ?ContentEntry $entry = null): bool
    {
        return Ability::allows($user, 'view_content_entries');
    }

    public function create(Authenticatable&Authorizable $user): bool
    {
        return Ability::allows($user, 'create_content_entries');
    }

    public function update(Authenticatable&Authorizable $user, ?ContentEntry $entry = null): bool
    {
        return Ability::allows($user, 'update_content_entries');
    }

    public function delete(Authenticatable&Authorizable $user, ?ContentEntry $entry = null): bool
    {
        return Ability::allows($user, 'delete_content_entries');
    }
}
