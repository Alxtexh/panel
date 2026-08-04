<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\PanelManager;

/**
 * One screen listing the settings screens, so somebody can find them.
 *
 * IT USED TO BE `Route::redirect('settings', 'settings/profile')`, which is the
 * shape that looks harmless and answers the wrong question: somebody typing
 * "settings" is asking what there is, and a redirect tells them there is exactly
 * one thing and it is their own name.
 *
 * EVERY ENTRY IS DERIVED FROM A ROUTE THAT EXISTS. The list is not declared and
 * then hoped for - each candidate is included only if `Route::has` says the
 * current panel registered it. That is what makes it correct across panels that
 * dropped screens with `->without()`, across an application that kept its own
 * `/settings/profile` so the packaged one never registered, and across a
 * single-tenant installation with no organisation screens at all.
 *
 * OMITTED, NOT DISABLED, when somebody may not open it. A greyed-out row tells
 * an operator that a thing exists which they cannot have, which is information
 * they can do nothing with and a question for whoever they ask about it.
 *
 * APPLICATIONS ADD THEIR OWN with `add()`. The reference application's assistant
 * settings arrive that way; the package has no business knowing about them.
 */
final class SettingsIndex
{
    private const KEY = 'panelkit.settings-index';

    /**
     * Add entries of your own.
     *
     * Each is `['key', 'title', 'description', 'href']`, and optionally
     * `'ability'` - a permission name, checked the same way the packaged ones
     * are, so an entry nobody may open is simply absent.
     *
     * `href` MAY BE A CLOSURE, and usually should be. Applications register
     * these from a service provider's `boot`, which runs BEFORE routes are
     * registered - so calling `route()` eagerly throws `Route [...] not
     * defined` from a provider, which reads as the route being missing rather
     * than as it being asked for too early. A closure is resolved when the
     * screen is rendered, by which time everything is registered.
     *
     * `order` PLACES AN ENTRY AMONG THE PACKAGED ONES rather than after them.
     * An application that kept its own `/settings/profile` - so the packaged
     * route never registered - has to supply that row itself, and appending it
     * would list somebody's own name below the organisation's logo. Omit it and
     * the entry lands at the end, which is right for anything genuinely extra.
     *
     * @param  list<array<string, mixed>>  $entries
     */
    public static function add(array $entries): void
    {
        app()->instance(self::KEY, [...self::registered(), ...$entries]);
    }

    /**
     * Everything the index should list, in reading order.
     *
     * ORDERED FROM YOURS OUTWARD - your account, then your organisation, then
     * the people in it, then whatever the application added. Somebody opening
     * settings is far more often after their own password than after the
     * organisation's logo.
     *
     * @return list<array<string, mixed>>
     */
    public static function entries(Request $request): array
    {
        $user = $request->user();

        $candidates = [
            [
                'key' => 'profile',
                'route' => 'settings.profile',
                'title' => 'Profile',
                'description' => 'Your name and your email address.',
            ],
            [
                'key' => 'security',
                'route' => 'settings.security',
                'title' => 'Security',
                'description' => 'Password, two-factor authentication, passkeys and signed-in devices.',
            ],
            [
                'key' => 'organisation',
                'route' => 'pages.organisation',
                'title' => 'Organisation',
                'description' => 'The name and logo everyone in this organisation sees.',
            ],
            [
                'key' => 'workspaces',
                'route' => 'settings.workspaces',
                'title' => 'Workspaces',
                'description' => 'The organisations you belong to; switch between them or start a new one.',
            ],
            [
                'key' => 'user-management',
                'route' => 'pages.user-management',
                'title' => 'User management',
                'description' => 'Who is here, and what they may do.',
                'ability' => 'manage_roles',
            ],
            [
                'key' => 'roles',
                'route' => 'roles',
                'title' => 'Roles',
                'description' => 'The permission matrix, on its own.',
                'ability' => 'manage_roles',
            ],
        ];

        $entries = [];

        foreach ($candidates as $candidate) {
            $href = self::urlFor((string) $candidate['route']);

            /*
             * NO ROUTE, NO ENTRY. A panel that dropped the screen with
             * `->without()`, or an application whose own `/settings/profile`
             * meant the packaged route never registered, should not be offered
             * a link into a 404 - and this is the only check that catches both.
             */
            if ($href === null) {
                continue;
            }

            if (isset($candidate['ability']) && ! Ability::allows($user, (string) $candidate['ability'])) {
                continue;
            }

            unset($candidate['route'], $candidate['ability']);

            $entries[] = $candidate + ['href' => $href];
        }

        foreach (self::registered() as $entry) {
            if (isset($entry['ability']) && ! Ability::allows($user, (string) $entry['ability'])) {
                continue;
            }

            unset($entry['ability']);

            if (($entry['href'] ?? null) instanceof \Closure) {
                $entry['href'] = ($entry['href'])();
            }

            $entries[] = $entry;
        }

        /*
         * A STABLE SORT ON `order`, with the packaged rows keeping their
         * declared positions. `usort` is not stable across every PHP build for
         * equal keys, so the index is folded in as a tie-break - two entries
         * with no `order` must not swap between requests.
         */
        $ordered = [];

        foreach ($entries as $index => $entry) {
            $ordered[] = [$entry['order'] ?? ($index + 100), $index, $entry];
        }

        usort($ordered, static fn (array $a, array $b): int => [$a[0], $a[1]] <=> [$b[0], $b[1]]);

        return array_map(static function (array $row): array {
            unset($row[2]['order']);

            return $row[2];
        }, $ordered);
    }

    /**
     * A panel-qualified route's URL, or null when it is not registered.
     *
     * THE CURRENT PANEL, NOT A HARDCODED PREFIX. Route names carry the panel id,
     * and an application with several panels has several of each of these - so
     * the right one is whichever panel is serving this request. Reading a fixed
     * `panel.` prefix is how a settings index inside `/platform` ends up linking
     * into the admin panel.
     */
    private static function urlFor(string $suffix): ?string
    {
        $panel = app(PanelManager::class)->currentPanel();

        if ($panel === null) {
            return null;
        }

        /*
         * `getRouteName()`, NOT `$panel->id.'.'`. A panel may override its
         * route-name prefix - the reference application's `admin` panel is
         * named `panel.` so that URLs written before panels existed keep
         * working - and assuming the id silently produces null for every one of
         * these, which renders as a settings index missing half its rows.
         */
        $name = $panel->getRouteName().$suffix;

        return Route::has($name) ? route($name) : null;
    }

    /** @return list<array<string, mixed>> */
    private static function registered(): array
    {
        return app()->bound(self::KEY) ? (array) app(self::KEY) : [];
    }
}
