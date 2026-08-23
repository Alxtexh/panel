<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Alxtexh\Panel\Contracts\CanAccessPanel;
use Alxtexh\Panel\Panel;
use Illuminate\Contracts\Auth\Authenticatable;

/**
 * Who may enter a panel, and whether they have anything to do once inside.
 */
final class PanelAccess
{
    public static function allows(Panel $panel, ?Authenticatable $user): bool
    {
        if ($user === null) {
            return false;
        }

        if ($user instanceof CanAccessPanel && ! $user->canAccessPanel($panel)) {
            return false;
        }

        $callback = $panel->accessUsing();

        return $callback === null || (bool) $callback($user);
    }

    /**
     * Signed in, allowed into the panel, and holding no abilities.
     *
     * The dashboard still opens (it has no ability of its own). Everything else
     * hides. That used to look like a broken install; the dashboard now says so.
     */
    public static function emptyGrants(Panel $panel, ?Authenticatable $user): bool
    {
        if ($user === null || ! self::allows($panel, $user)) {
            return false;
        }

        if (method_exists($user, 'grantsEverything') && $user->grantsEverything()) {
            return false;
        }

        return PanelNavigation::build($panel->id) === [];
    }
}
