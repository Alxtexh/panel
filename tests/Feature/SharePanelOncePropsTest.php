<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Support\Header;

/**
 * Stable shell props use Inertia once so a second visit skips resolve + wire.
 */
final class SharePanelOncePropsTest extends TestCase
{
    use RefreshDatabase;

    public function test_second_visit_omits_stable_chrome_when_once_keys_are_known(): void
    {
        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'correct-horse',
            'email_verified_at' => now(),
        ]);

        $first = $this->actingAs($user)->get('/posts')->assertOk();
        $page = $first->viewData('page');
        $props = $page['props'] ?? [];
        $onceProps = $page['onceProps'] ?? [];

        $this->assertNotEmpty($onceProps, 'First visit should publish onceProps metadata');

        foreach (['messages', 'panelNav', 'panel', 'settingsNav', 'quickCreate'] as $key) {
            $this->assertArrayHasKey($key, $props, "First visit missing {$key}");
        }

        $except = implode(',', array_keys($onceProps));

        $second = $this->actingAs($user)
            ->withHeaders([
                Header::INERTIA => 'true',
                Header::VERSION => (string) ($page['version'] ?? ''),
                Header::EXCEPT_ONCE_PROPS => $except,
            ])
            ->get('/posts')
            ->assertOk();

        $secondProps = $second->json('props') ?? [];

        foreach (['messages', 'panelNav', 'panel', 'settingsNav', 'quickCreate'] as $key) {
            $this->assertArrayNotHasKey(
                $key,
                $secondProps,
                "Second visit should omit once chrome prop {$key}",
            );
        }

        $this->assertArrayHasKey('auth', $secondProps);
        $this->assertArrayHasKey('notificationCount', $secondProps);
    }
}
