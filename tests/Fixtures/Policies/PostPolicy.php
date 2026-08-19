<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Policies;

use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\Fixtures\Models\User;

/**
 * Permission, so the tests below are about something else.
 *
 * THE PANEL DENIES A MODEL WITH NO POLICY, deliberately - that is the posture
 * the whole authorisation design rests on, and the reason a fixture needs one
 * at all. Filament's test host registers `DepartmentPolicy` and `TicketPolicy`
 * for exactly this reason.
 *
 * THE MODEL ARGUMENT IS OPTIONAL, and that is not tidiness. The panel asks
 * some abilities WITHOUT a record - "may this person delete anything here",
 * to decide whether a bulk action is offered at all - and a signature
 * requiring the model fatals on that call rather than answering it.
 *
 * IT ALLOWS EVERYTHING ON PURPOSE. A test about keyset pagination should fail
 * when pagination breaks, not when an ability is missing; the refusals get
 * their own fixture and their own tests rather than being tangled into every
 * other assertion.
 */
final class PostPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, ?Post $post = null): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, ?Post $post = null): bool
    {
        return true;
    }

    public function delete(User $user, ?Post $post = null): bool
    {
        return true;
    }
}
