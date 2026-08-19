<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Policies;

use Alxtexh\Panel\Tests\Fixtures\Models\Comment;
use Alxtexh\Panel\Tests\Fixtures\Models\User;

/**
 * Allows everything, so isolation is proved by the SCOPE and the nested parent
 * claim, not by a policy refusal.
 */
final class CommentPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, ?Comment $comment = null): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, ?Comment $comment = null): bool
    {
        return true;
    }

    public function delete(User $user, ?Comment $comment = null): bool
    {
        return true;
    }

    public function restore(User $user, ?Comment $comment = null): bool
    {
        return true;
    }

    public function forceDelete(User $user, ?Comment $comment = null): bool
    {
        return true;
    }
}
