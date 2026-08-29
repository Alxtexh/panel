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

        if (self::grantsEverything($user)) {
            return false;
        }

        return PanelNavigation::build($panel->id) === [];
    }

    /**
     * Whether `$user` holds a role with `grants_all` - a superuser is never
     * shown the "you have no grants" hint, even on the fresh, resource-less
     * install where nothing is in the navigation yet for anyone to see.
     *
     * NEVER FIRED, until a fresh-install smoke test caught it: this used to
     * read `method_exists($user, 'grantsEverything') && $user->grantsEverything()`
     * - but `grantsEverything()` is `Role::grantsEverything()`, never a
     * method on a user model anywhere in this codebase or the reference
     * application, so that check's own `method_exists` was always false. An
     * Administrator with `grants_all` on their one and only role saw the
     * hint on every fresh install, right after being told the installer
     * grants exactly that role by default - the dashboard called its own
     * newly-created Administrator empty-handed.
     *
     * `Ability::withTeam()`, not a bare query, for the same reason
     * `Ability::allows()` needs it: Spatie's team scoping is set by a
     * request's own middleware and by nothing else, so a role held under
     * one organisation would read as unheld from a console command, a test,
     * or a queued job with no request to have set it.
     */
    private static function grantsEverything(Authenticatable $user): bool
    {
        if (! method_exists($user, 'roles')) {
            return false;
        }

        return Ability::withTeam(static fn (): bool => $user->roles()->where('grants_all', true)->exists());
    }

    /**
     * Copy for `--no-user` and for accounts that hold no role. The installer
     * grants Administrator (`grants_all`) to the first user by default, so a
     * normal first visit never sees this.
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
                'php artisan panel:make-user',
                'php artisan panel:permissions sync',
                'php artisan panel:permissions grant --email=you@example.com',
            ],
        ];
    }
}
