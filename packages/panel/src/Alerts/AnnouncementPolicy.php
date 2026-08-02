<?php

declare(strict_types=1);

namespace PanelKit\Panel\Alerts;

use PanelKit\Panel\Policies\TenantResourcePolicy;

/**
 * Who may write a notice to the whole organisation.
 *
 * ORDINARY RESOURCE ABILITIES, because that is what this is: a table with a
 * form. `create_announcements` is the one that matters - it is the permission to
 * put a message in front of every colleague at once.
 */
final class AnnouncementPolicy extends TenantResourcePolicy
{
    protected function modelFor(): string
    {
        /*
         * NAMED, NOT DERIVED. The base class guesses `App\Models\Announcement`
         * from this class's own name - the right guess for an application's
         * policy and the wrong one here, where the model is the package's and
         * sits beside this file. Getting it wrong is not an error either:
         * `Abilities::forModel()` would find nothing registered for a class
         * that does not exist and return null, which the base reads as a
         * refusal. The screen would deny everybody, quietly.
         */
        return Announcement::class;
    }
}
