<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Policies;

use Alxtexh\Panel\Tests\Fixtures\Models\Tag;
use Alxtexh\Panel\Tests\Fixtures\Models\User;

/**
 * Allows everything, so isolation is the scope and the nested parent claim.
 */
final class TagPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, ?Tag $tag = null): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, ?Tag $tag = null): bool
    {
        return true;
    }

    public function delete(User $user, ?Tag $tag = null): bool
    {
        return true;
    }

    public function restore(User $user, ?Tag $tag = null): bool
    {
        return true;
    }

    public function forceDelete(User $user, ?Tag $tag = null): bool
    {
        return true;
    }
}
