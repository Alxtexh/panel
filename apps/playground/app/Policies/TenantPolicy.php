<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

/**
 * Generated alongside TenantResource.
 *
 * REVIEW THIS. It currently permits any authenticated user, which is
 * almost certainly not what you want. The panel denies every ability whose
 * model has no policy, so this file is what makes the resource visible at
 * all - that is deliberate, and so is the fact that you have to edit it.
 */
final class TenantPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, ?Model $record = null): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, ?Model $record = null): bool
    {
        return true;
    }

    public function delete(User $user, ?Model $record = null): bool
    {
        return true;
    }
}
