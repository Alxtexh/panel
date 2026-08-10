<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Alxtexh\Panel\Auth\Devices;
use Alxtexh\Panel\PanelManager;
use Tests\TestCase;

/**
 * The account's own screens, and the collision they very nearly caused.
 *
 * THE SCREENS EXISTED BEFORE THE PAGES DID. `ManagePasskeys`, `ManageTwoFactor`,
 * `TwoFactorSetupModal`, `TwoFactorRecoveryCodes` and `DeleteUser` shipped in the
 * npm package from 0.6 and were mounted by nothing outside this application - so
 * every installation downloaded a working passkey manager and had no page on
 * which to see it. 0.8.1 packages the two pages that mount them.
 *
 * AND THE ROUTES NEARLY TOOK SOMEBODY ELSE'S. Laravel's `RouteCollection` is
 * indexed by method+URI: a second `GET settings/profile` does not sit beside the
 * first, it REPLACES it, and the name lookup is then rebuilt from what survives.
 * Registering these routes unconditionally deleted this application's own
 * `profile.edit` NAME, and every `route('profile.edit')` in it began throwing -
 * from a package installed for its screens. A Laravel starter kit ships exactly
 * that URL, so this would have reached almost everyone.
 *
 * The tests below pin both halves: the routes yield where an application has
 * claimed the URL, and register where it has not.
 */
final class AccountScreensTest extends TestCase
{
    use RefreshDatabase;

    /**
     * THE COLLISION, ASSERTED FROM THE VICTIM'S SIDE.
     *
     * Checking that our own route is absent would pass just as well if the
     * package had never registered anything. What matters is that the
     * application's route still answers under its own name.
     */
    public function test_the_applications_own_settings_route_survives(): void
    {
        $this->assertTrue(
            Route::has('profile.edit'),
            'The packaged account routes displaced the application’s own profile.edit.',
        );

        $this->assertSame(
            '/settings/profile',
            parse_url(route('profile.edit'), PHP_URL_PATH),
        );

        // And ours yielded rather than registering alongside it.
        $this->assertFalse(
            Route::has('admin.settings.profile'),
            'The packaged route registered over a URL the application already owned.',
        );
    }

    /**
     * A PANEL THAT HAS NOT CLAIMED THE URL GETS THE PACKAGED SCREENS.
     *
     * The generated portals mount at their own prefixes, where nothing collides,
     * so this is the same registration a fresh installation gets - and the half
     * that proves "yield" is not simply "never register".
     */
    public function test_a_panel_with_no_conflict_gets_the_packaged_screens(): void
    {
        $free = collect(app(PanelManager::class)->panels())
            ->first(static fn ($panel): bool => Route::has($panel->getRouteName().'settings.profile'));

        $this->assertNotNull(
            $free,
            'No panel registered the packaged account screens, so the routes are dead code.',
        );

        foreach (['settings.profile', 'settings.security', 'settings.password', 'settings.devices.destroyOthers'] as $name) {
            $this->assertTrue(
                Route::has($free->getRouteName().$name),
                "The packaged account routes are incomplete: {$free->id}.{$name} is missing.",
            );
        }
    }

    /**
     * THE MENU LINKS THEM, which is the seam that was empty.
     *
     * `PanelAccountMenu` took an `accountUrl` prop for two releases and nothing
     * ever passed one, so no installation's account menu offered a profile link.
     * A screen reachable only by typing its URL is the failure this whole family
     * of tests exists to catch.
     */
    public function test_the_account_menu_is_given_the_urls(): void
    {
        $panel = collect(app(PanelManager::class)->panels())
            ->first(static fn ($p): bool => Route::has($p->getRouteName().'settings.profile'));

        $this->assertNotNull($panel);

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $user = User::factory()->create(['tenant_id' => $tenant->id]);

        $props = $this->actingAs($user)
            ->get(rtrim($panel->getPath(), '/').'/settings/profile')
            ->viewData('page')['props'];

        $this->assertNotNull($props['panel']['account'] ?? null, 'The account menu was given no profile URL.');
        $this->assertNotNull($props['panel']['security'] ?? null, 'The account menu was given no security URL.');
    }

    /**
     * DEVICES REPORT NOTHING RATHER THAN THROWING on a driver that keeps no
     * server-side record.
     *
     * The panel OFFERS this; it does not require the database session driver.
     * An installation on the default driver should get a security screen without
     * the section, not a 500 on the one page somebody opens when worried.
     */
    public function test_devices_are_empty_without_the_database_session_driver(): void
    {
        config(['session.driver' => 'array']);

        $this->assertFalse(Devices::available());
        $this->assertSame([], Devices::forUser(request()));
    }
}
