<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Alxtexh\Panel\Support\Abilities;
use Alxtexh\Panel\Support\RoleTemplates;
use Alxtexh\Panel\Support\UserDirectory;

/**
 * Who is here, and what they may do - on one screen.
 *
 * THE ROLES HALF WAS PACKAGED AND THE PEOPLE HALF WAS NOT, which made the
 * packaged permission matrix a screen you could reach and not act on: it showed
 * which abilities a role holds and offered nowhere to see who holds the role.
 * `settings/Roles` still exists and still works; this is the same matrix with
 * the directory beside it, which is how the question actually arrives.
 *
 * IT IS NOT IN THE NAVIGATION, deliberately. Nobody browses to user management;
 * they arrive from the account menu, from a role, or by searching. A sidebar
 * entry for it pushes an everyday screen down the list.
 *
 * THE USERS TAB IS DEFERRED, because the roles tab is usually the one being read
 * first and the table costs a query it does not need. The layout is on screen
 * before the rows have been counted.
 */
class UserManagementPage extends Page
{
    protected static string $icon = 'users';

    public static function shouldShowInNavigation(): bool
    {
        return false;
    }

    /**
     * `{tab?}` IS OPTIONAL AND VALIDATED IN `data()`, not constrained here. A
     * route constraint on an unknown tab produces a 404 for a URL somebody
     * typed a typo into; falling back to the first tab shows them the screen
     * they were asking for.
     */
    public static function uri(): string
    {
        return 'user-management/{tab?}';
    }

    public static function ability(): ?string
    {
        return 'manage_roles';
    }

    /**
     * A TOP-LEVEL SCREEN, NOT A SETTINGS ONE - and the component name is what
     * decides that.
     *
     * IT USED TO BE `settings/UserManagement`, and the prefix alone put it
     * inside the settings shell: the layout resolver wraps every `settings/*`
     * page in `SettingsLayout`, so this screen rendered under a "Settings"
     * heading, behind an "All settings" back-link, beside a sidebar of Profile,
     * Security, Organisation and Workspaces. None of those are where somebody
     * managing people is going, and the screen has its own heading already - so
     * the page arrived twice-titled and filed under something it is not.
     *
     * The url was never `/settings/...`; only the component name said settings,
     * which is exactly the kind of disagreement that survives because nothing
     * errors.
     */
    public static function component(): string
    {
        return 'UserManagement';
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $tab = $request->route('tab');
        $tab = in_array($tab, ['users', 'roles'], true) ? $tab : 'users';

        $resource = UserDirectory::resource();

        return [
            'tab' => $tab,
            'roles' => UserDirectory::roles($request),

            'groups' => Abilities::grouped(),
            // Name AND label, from the server - the Roles tab renders the same
            // component as the standalone matrix, so the two must agree.
            'panelAbilities' => Abilities::panelLabelled(),
            'templates' => RoleTemplates::all(),

            /*
             * NULL RATHER THAN AN EMPTY TABLE when the application has
             * registered no resource for its user model. The screen says so and
             * still shows the roles; a table with no schema renders as a
             * headless box that looks like a loading state which never ends.
             */
            'users' => $resource === null
                ? null
                : Inertia::defer(static fn (): array => [
                    'schema' => $resource::schema(),
                    'data' => $resource::data($request),
                ]),
        ];
    }
}
