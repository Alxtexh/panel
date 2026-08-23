<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Alerts;

use Illuminate\Database\Eloquent\Model;

/**
 * That one person has closed one announcement.
 *
 * A ROW RATHER THAN A COLUMN, and this is the whole reason the table exists. An
 * announcement is shown to everybody in an organisation, so a `dismissed_at` on
 * the announcement itself would mean the first person to close it hid it from
 * all their colleagues - and the notice everybody needed to read would be gone
 * because one person was tidying their dashboard.
 *
 * NO TENANT COLUMN, deliberately. It is reached only through an announcement,
 * which is already scoped; adding one here would be a second copy of the same
 * fact and therefore a second thing that can disagree.
 */
final class AnnouncementDismissal extends Model
{
    protected $table = 'panel_announcement_dismissals';

    protected $guarded = [];

    /** `created_at` only: a dismissal is an event, and events are not edited. */
    public const UPDATED_AT = null;
}
