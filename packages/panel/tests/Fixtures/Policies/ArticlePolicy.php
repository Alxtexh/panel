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
}
