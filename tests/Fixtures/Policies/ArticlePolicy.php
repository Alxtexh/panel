<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Policies;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\User;

/**
 * Allows everything, so isolation is proved by the SCOPE and not by a refusal.
 *
 * THE DISTINCTION MATTERS HERE MORE THAN ANYWHERE. A cross-tenant test that
 * passes because the policy said no has proved nothing about the query: swap
 * the policy for a permissive one and the leak appears. These tests assert
 * that the rows are NOT THERE TO BEGIN WITH.
 */
final class ArticlePolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, ?Article $article = null): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, ?Article $article = null): bool
    {
        return true;
    }

    public function delete(User $user, ?Article $article = null): bool
    {
        return true;
    }

    /**
     * RESTORE IS ITS OWN ABILITY, not part of `delete`.
     *
     * This fixture went without it at first and the trash refused to restore -
     * correctly. Plenty of roles should be able to remove a record without
     * being able to bring one back, and `forceDelete` is separated again for
     * the stronger version of the same reason: it is the one act in the panel
     * with no undo.
     */
    public function restore(User $user, ?Article $article = null): bool
    {
        return true;
    }

    public function forceDelete(User $user, ?Article $article = null): bool
    {
        return true;
    }
}
