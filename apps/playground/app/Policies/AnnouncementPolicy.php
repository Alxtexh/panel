<?php

declare(strict_types=1);

namespace App\Policies;

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
        // The model lives in the package, so the name-based convention in the
        // base class cannot find it.
        return \PanelKit\Panel\Alerts\Announcement::class;
    }
}
