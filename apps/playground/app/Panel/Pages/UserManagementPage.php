<?php

declare(strict_types=1);

namespace App\Panel\Pages;

use App\Http\Controllers\UserManagementController;
use Illuminate\Http\Request;
use PanelKit\Panel\Pages\Page;

/**
 * People and roles, one screen, two tabs - now DECLARED rather than wired.
 *
 * THE PURE-RENDER SHAPE, and the first of two conversions proving the mechanism.
 * What used to be a route in `routes/web.php`, a navigation entry typed into
 * `App\Panel\Pages`, and an `abort_unless` at the top of a controller is these
 * fifteen lines. The route, the sidebar entry, the ability and its place in the
 * permission matrix all follow from the class.
 *
 * THE CONTROLLER STAYS, and that is the migration path rather than a compromise.
 * A page owns its DECLARATION - where it lives, who may open it, what renders
 * it; it does not have to own the query. Moving 200 lines of tenant-scoped
 * role-counting into a new file to prove a routing mechanism would be changing
 * two things at once and calling the result a test.
 */
final class UserManagementPage extends Page
{
    protected static string $icon = 'users';

    protected static ?string $group = 'Settings';

    /**
     * THE TAB IS IN THE PATH, not a query string - `/user-management/roles` is
     * a place somebody links to. The slug stays `user-management`, so the
     * ability, the navigation href and the route name are unaffected by the
     * screen having structure.
     */
    public static function uri(): string
    {
        return 'user-management/{tab?}';
    }

    /**
     * BOTH TABS NEED `manage_roles` - the guard the controller used to make.
     *
     * Not the slug-derived default: this screen predates the mechanism and its
     * ability is already granted to real roles. Deriving `view_user_management`
     * instead would have silently revoked access for everybody holding the
     * grant they were actually given.
     */
    public static function ability(): ?string
    {
        return 'manage_roles';
    }

    public static function component(): string
    {
        return 'settings/UserManagement';
    }

    public static function data(Request $request): array
    {
        return app(UserManagementController::class)->props($request);
    }
}
