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

    /**
     * Copy for the first-run empty shell. The installer does not grant every
     * ability; this is what to run instead of staring at a blank dashboard.
     *
     * @return array{title: string, body: string, commands: list<string>}|null
     */
    public static function emptyGrantsHint(Panel $panel, ?Authenticatable $user): ?array
    {
        if (! self::emptyGrants($panel, $user)) {
            return null;
        }

        return [
            'title' => __('panel::grants.empty.title'),
            'body' => __('panel::grants.empty.body'),
            'commands' => [
                'php artisan panel:permissions sync',
                'php artisan panel:permissions grant --email=you@example.com',
            ],
        ];
    }
}
