<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\Middleware\SharePanelProps;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/**
 * App-owned routes must keep panel chrome. This is the shell-falls-off bug.
 */
final class HostRouteSharePanelPropsTest extends TestCase
{
    use RefreshDatabase;

    public function test_share_panel_props_is_on_the_web_group(): void
    {
        $web = app('router')->getMiddlewareGroups()['web'] ?? [];

        $this->assertContains(
            SharePanelProps::class,
            $web,
            'SharePanelProps must be on the web group so host routes keep the shell.',
        );
    }

    public function test_a_host_route_without_the_panel_prefix_still_receives_shell_props(): void
    {
        Route::middleware('web')->get('/host-owned', static fn () => Inertia::render('HostOwned'));

        $user = User::create([
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $props = $this->actingAs($user)
            ->get('/host-owned')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertIsArray($props['panel'] ?? null, 'Host route did not share `panel`.');
        $this->assertArrayHasKey('account', $props['panel']);
        $this->assertArrayHasKey('pageFooter', $props['panel']);
        $this->assertArrayHasKey('logout', $props['panel']);
        $this->assertArrayHasKey('help', $props['panel']);
        $this->assertArrayHasKey('auth', $props);
    }
}
