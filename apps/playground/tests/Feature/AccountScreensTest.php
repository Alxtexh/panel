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
 * Registering these routes unconditionally deleted an application's own
 * `profile.edit` NAME. Package tests cover yield via ClaimsProfileProvider; this
 * application no longer claims the URL so the kit Profile registers.
 */
final class AccountScreensTest extends TestCase
{
    use RefreshDatabase;

    /**
     * THE ADMIN PANEL OWNS THE KIT PROFILE ROUTE when nothing claimed it first.
     */
    public function test_the_packaged_profile_route_registers_on_the_operator_panel(): void
    {
        $this->assertTrue(
            Route::has('panel.settings.profile'),
            'The packaged profile route did not register on the operator panel.',
        );

        $this->assertSame(
            '/settings/profile',
            parse_url(route('panel.settings.profile'), PHP_URL_PATH),
        );

        $this->assertFalse(
            Route::has('profile.edit'),
            'A leftover application profile.edit name should not shadow the kit.',
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
     * THE MENU LINKS PROFILE AND SETTINGS as different doors.
     *
     * Profile is `/settings/profile`. Settings is the `/settings` hub.
     * Security is a tab on the settings layout, not a third dropdown row.
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
        $this->assertNull($props['panel']['security'] ?? null, 'Security must not be a third dropdown row when Profile is present.');
        $this->assertNotNull($props['panel']['settings'] ?? null, 'The account menu was given no settings hub URL.');
        $this->assertNotSame(
            $props['panel']['account'],
            $props['panel']['settings'],
            'Profile and Settings must not share an href.',
        );
        $accountPath = parse_url((string) $props['panel']['account'], PHP_URL_PATH);
        $settingsPath = parse_url((string) $props['panel']['settings'], PHP_URL_PATH);
        $this->assertStringEndsWith('/settings/profile', (string) $accountPath);
        $this->assertStringEndsWith('/settings', (string) $settingsPath);
        $this->assertStringNotContainsString('/settings/profile', (string) $settingsPath);
    }

    /**
     * WITHOUT THE DATABASE SESSION DRIVER the screen still shows this device.
     *
     * Other browsers cannot be listed or revoked on array/file/cookie/redis.
     * An empty list would read as "signed in nowhere" while the person is
     * looking at Security, which is the lie this path must not tell.
     */
    public function test_current_device_is_present_without_the_database_session_driver(): void
    {
        config(['session.driver' => 'array']);

        $this->assertFalse(Devices::available());

        $tenant = Tenant::create(['name' => 'Devices', 'slug' => 'devices']);
        $user = User::factory()->create(['tenant_id' => $tenant->id]);
        $this->actingAs($user);

        $request = request();
        if (! $request->hasSession()) {
            $request->setLaravelSession(app('session.store'));
        }
        $request->setUserResolver(static fn () => auth()->user());

        $devices = Devices::forUser($request);

        $this->assertCount(1, $devices);
        $this->assertTrue($devices[0]['current']);
    }
}
