<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;
use PanelKit\Panel\CustomFields\CustomField;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Support\TenantContext;

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

        $ability = Abilities::forModel($action, CustomField::class);

        return $ability !== null && $user->hasPermission($ability);
    }
}
