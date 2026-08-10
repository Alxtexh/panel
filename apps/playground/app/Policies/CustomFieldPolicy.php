<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;
use Alxtexh\Panel\CustomFields\CustomField;
use Alxtexh\Panel\Support\TenantContext;

/**
 * Who may add or remove a custom field DEFINITION - roadmap 5.1.
 *
 * NOT A `TenantResourcePolicy`. A `CustomField` carries no tenant column at
 * all - see the migration's and the model's own notes: definitions are
 * installation-wide, not owned by whoever happens to save one - so the base
 * class's per-record ownership check would compare against an attribute that
 * does not exist. What this keeps is the same posture every other policy
 * takes: signed in to SOME tenant is still required, only "does this record
 * belong to you" is not a question a shared definition can be asked.
 */
final class CustomFieldPolicy
{
    public function viewAny(User $user): bool
    {
        return $this->allows($user, 'viewAny');
    }

    public function view(User $user, ?CustomField $record = null): bool
    {
        return $this->allows($user, 'view');
    }

    public function create(User $user): bool
    {
        return $this->allows($user, 'create');
    }

    public function update(User $user, ?CustomField $record = null): bool
    {
        return $this->allows($user, 'update');
    }

    public function delete(User $user, ?CustomField $record = null): bool
    {
        return $this->allows($user, 'delete');
    }

    private function allows(User $user, string $action): bool
    {
        if (app(TenantContext::class)->currentKey() === null) {
            return false;
        }

        /*
         * ONE PANEL-LEVEL ABILITY, not per-action resource abilities - Part
         * G.4. With the dedicated screen removed there is no resource in the
         * registry to derive `create_custom_fields` from, and the surface
         * that remains is a single dialog: you may define fields or you may
         * not. Declared in `config('panel.abilities')` so the permission
         * matrix still offers it by its label.
         */
        return $user->hasPermission('manage_custom_fields');
    }
}
