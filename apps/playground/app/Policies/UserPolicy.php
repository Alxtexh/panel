<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;
use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use PanelKit\Panel\Policies\TenantResourcePolicy;

/**
 * Managing colleagues.
 *
 * INHERITS THE TWO GATES - tenancy and ability - and adds the one rule that only
 * applies to people: you cannot delete yourself.
 *
 * That is not politeness. The last administrator deleting their own account
 * leaves an organisation with data nobody can reach, and there is no in-panel
 * recovery from it because the screen that would fix it needs somebody signed in
 * to open it. Refusing costs a click; the alternative costs a console session.
 *
 * THE FIRST ACCOUNT IS PROTECTED TOO, for a reason self-deletion does not cover:
 * an administrator can delete every OTHER account and then leave, which empties
 * the organisation just as thoroughly and looks deliberate at every step.
 */
final class UserPolicy extends TenantResourcePolicy
{
    public function delete(Authenticatable&Authorizable $user, ?Model $record = null): bool
    {
        if ($record instanceof User && ($this->isSelf($user, $record) || $record->isProtected())) {
            return false;
        }

        return parent::delete($user, $record);
    }

    public function forceDelete(Authenticatable&Authorizable $user, ?Model $record = null): bool
    {
        if ($record instanceof User && ($this->isSelf($user, $record) || $record->isProtected())) {
            return false;
        }

        return parent::forceDelete($user, $record);
    }

    /**
     * THE FIRST ACCOUNT CANNOT BE EDITED EITHER, not only undeleted.
     *
     * Protecting it from deletion while leaving it editable protects the row and
     * not the ACCESS: its email can be changed to one nobody controls, its roles
     * stripped, its name replaced. The organisation is then in exactly the state
     * the deletion guard exists to prevent, with the row still present.
     *
     * THE OWNER IS THE EXCEPTION. Somebody must be able to change their own
     * name, address and password, and the first user is usually the person who
     * set the organisation up. Refusing that would be locking them out of their
     * own account in a different way.
     */
    public function update(Authenticatable&Authorizable $user, ?Model $record = null): bool
    {
        if ($record instanceof User && $record->isProtected() && ! $this->isSelf($user, $record)) {
            return false;
        }

        return parent::update($user, $record);
    }

    /**
     * `Authenticatable`, not `User`, because the packaged base types the actor
     * as the two contracts a package can name and PHP forbids narrowing a
     * parameter in an override - so the value arriving here is only ever known
     * to be authenticatable. Identity is all this needs of it.
     */
    private function isSelf(Authenticatable $user, User $record): bool
    {
        return (string) $record->getKey() === (string) $user->getAuthIdentifier();
    }
}
