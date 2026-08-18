<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\Middleware\EnforceSubscriptionGate;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelIdleActivity;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Opt-in subscription expiry wall. Off until `subscriptionGate()` is set.
 */
final class SubscriptionGateTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    public function test_the_gate_is_off_until_a_callback_is_set(): void
    {
        $panel = app(PanelManager::class)->panel('admin');

        $this->assertFalse($panel->hasSubscriptionGate());
        $this->assertTrue($panel->subscriptionIsActive());
        $this->assertContains(
            EnforceSubscriptionGate::class,
            $panel->getMiddleware(),
        );

        $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk();
    }

    public function test_an_expired_tenant_is_sent_to_plan_setup(): void
    {
        app(PanelManager::class)->panel('admin')
            ->subscriptionGate(fn (): bool => false);

        $this->actingAs($this->user)
            ->get('/posts')
            ->assertRedirect('/account/suspended');
    }

    public function test_an_active_subscription_does_not_redirect(): void
    {
        app(PanelManager::class)->panel('admin')
            ->subscriptionGate(fn (): bool => true);

        $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk();
    }

    public function test_plan_setup_stays_reachable_when_expired(): void
    {
        app(PanelManager::class)->panel('admin')
            ->subscriptionGate(fn (): bool => false);

        $this->actingAs($this->user)
            ->get('/settings/plans')
            ->assertOk();
    }

    public function test_the_lock_screen_stays_reachable_when_expired(): void
    {
        app(PanelManager::class)->panel('second')
            ->subscriptionGate(fn (): bool => false);

        $this->actingAs($this->user)
            ->withSession([PanelIdleActivity::LOCKED_AT => time()])
            ->get('/second/screens/locked')
            ->assertOk();
    }

    public function test_an_expired_prefixed_panel_is_sent_to_its_plan_setup(): void
    {
        app(PanelManager::class)->panel('second')
            ->subscriptionGate(fn (): bool => false);

        $this->actingAs($this->user)
            ->get('/second/reports')
            ->assertRedirect('/second/account/suspended');
    }

    public function test_staff_on_a_central_panel_get_403(): void
    {
        app(PanelManager::class)->panel('admin')
            ->context(Panel::CONTEXT_CENTRAL)
            ->subscriptionGate(fn (): bool => false);

        $this->actingAs($this->user)
            ->get('/posts')
            ->assertForbidden();
    }

    public function test_a_json_request_gets_402_instead_of_a_redirect(): void
    {
        app(PanelManager::class)->panel('admin')
            ->subscriptionGate(fn (): bool => false);

        $this->actingAs($this->user)
            ->getJson('/posts')
            ->assertStatus(402);
    }

    public function test_a_suspended_billing_state_redirects_to_the_packaged_screen(): void
    {
        app(PanelManager::class)->panel('admin')
            ->billingState(fn (): array => ['status' => 'suspended', 'plan' => 'Growth']);

        $response = $this->actingAs($this->user)
            ->get('/posts')
            ->assertRedirect('/account/suspended');

        $response->assertSessionHas('toast');
    }

    public function test_the_suspended_screen_renders_sane_defaults_from_minimal_state(): void
    {
        app(PanelManager::class)->panel('admin')
            ->billingState(fn (): array => ['status' => 'suspended']);

        $props = $this->actingAs($this->user)
            ->get('/account/suspended')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertSame('suspended', $props['status']);
        $this->assertSame('Suspended', $props['statusLabel']);
        $this->assertSame('Subscription suspended', $props['title']);
        $this->assertSame('Manage subscription', $props['billingLabel']);
        $this->assertSame('/settings/plans', $props['billingHref']);
    }

    public function test_a_suspended_user_can_reach_the_billing_portal(): void
    {
        app(PanelManager::class)->panel('second')
            ->billingState(fn (): array => ['status' => 'suspended']);

        $props = $this->actingAs($this->user)
            ->get('/second/account/billing')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertTrue($props['fixture']);
    }

    public function test_a_suspended_user_is_still_blocked_from_panel_resources(): void
    {
        app(PanelManager::class)->panel('second')
            ->billingState(fn (): array => ['status' => 'suspended']);

        $this->actingAs($this->user)
            ->get('/second/reports')
            ->assertRedirect('/second/account/suspended');
    }

    public function test_logout_still_works_while_access_is_blocked(): void
    {
        app(PanelManager::class)->panel('second')
            ->billingState(fn (): array => ['status' => 'expired']);

        $this->actingAs($this->user)
            ->post('/second/logout')
            ->assertRedirect('/second/login');

        $remaining = array_filter(
            array_keys($this->app['session']->all()),
            static fn (string $key): bool => str_starts_with($key, 'login_'),
        );

        $this->assertSame([], $remaining);
    }
}
