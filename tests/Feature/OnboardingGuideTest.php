<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\OnboardingSteps;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * First-run dashboard guide: kit chrome with real hrefs, once per person.
 */
final class OnboardingGuideTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::create([
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    private function panel(): \Alxtexh\Panel\Panel
    {
        return app(PanelManager::class)->panel('admin');
    }

    /** @return list<string> */
    private function chromeKeys(): array
    {
        return array_column(OnboardingSteps::chrome($this->panel()), 'key');
    }

    public function test_default_steps_include_organisation_settings_and_security_when_those_routes_exist(): void
    {
        $keys = $this->chromeKeys();

        $this->assertContains('organisation', $keys);
        $this->assertContains('settings', $keys);
        $this->assertContains('security', $keys);
    }

    public function test_organisation_step_href_is_the_real_settings_page(): void
    {
        $step = collect(OnboardingSteps::chrome($this->panel()))->firstWhere('key', 'organisation');

        $this->assertIsArray($step);
        $this->assertStringContainsString('/settings/organisation', (string) $step['href']);
    }

    public function test_operations_backup_step_is_omitted_when_the_panel_drops_operations(): void
    {
        $this->assertContains('backups', $this->chromeKeys());

        $this->panel()->without(['operations']);

        $this->assertNotContains('backups', $this->chromeKeys());
    }

    public function test_api_keys_step_is_omitted_until_apps_enables_it(): void
    {
        $this->assertNotContains('api-keys', $this->chromeKeys());

        $this->panel()->apps(['api-keys']);

        $this->assertContains('api-keys', $this->chromeKeys());
    }

    public function test_default_steps_do_not_name_clients_or_routers(): void
    {
        $blob = json_encode(OnboardingSteps::chrome($this->panel()));

        $this->assertIsString($blob);
        $this->assertStringNotContainsString('Clients', $blob);
        $this->assertStringNotContainsString('Routers', $blob);
        $this->assertStringNotContainsString('Nairobi', $blob);
    }

    /** @return array<string, mixed> */
    private function dashboardProps(): array
    {
        return $this->actingAs($this->user)
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props'];
    }

    public function test_dashboard_includes_the_guide_on_a_first_visit(): void
    {
        $props = $this->dashboardProps();

        $this->assertArrayHasKey('onboarding', $props);
        $this->assertNotEmpty($props['onboarding']);
        $this->assertNotEmpty($props['onboardingDismiss'] ?? null);
        $this->assertStringContainsString(
            '/settings/organisation',
            (string) collect($props['onboarding'])->firstWhere('key', 'organisation')['href'],
        );
    }

    public function test_second_visit_after_dismiss_does_not_include_the_guide(): void
    {
        $this->assertArrayHasKey('onboarding', $this->dashboardProps());

        $this->actingAs($this->user)
            ->post('/onboarding/dismiss')
            ->assertRedirect();

        $saved = $this->user->fresh()->appearance;
        $this->assertTrue($saved[OnboardingSteps::APPEARANCE_KEY] ?? false);

        $again = $this->actingAs($this->user->fresh())
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertArrayNotHasKey('onboarding', $again);
        $this->assertArrayNotHasKey('onboardingDismiss', $again);
    }

    public function test_cookie_alone_hides_the_guide_on_the_next_request(): void
    {
        $props = $this->actingAs($this->user)
            ->withUnencryptedCookie(OnboardingSteps::COOKIE, '1')
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertArrayNotHasKey('onboarding', $props);
    }

    public function test_account_menu_does_not_share_security_when_profile_is_present(): void
    {
        $panel = $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk()
            ->viewData('page')['props']['panel'];

        $this->assertNotEmpty($panel['account'] ?? null);
        $this->assertNull($panel['security'] ?? null);
    }

    public function test_send_feedback_lives_on_whats_new_not_the_account_menu(): void
    {
        $root = dirname(__DIR__, 3).'/ui';
        $menu = (string) file_get_contents($root.'/inertia/components/shell/DefaultAccountMenuItems.vue');
        $shell = (string) file_get_contents($root.'/inertia/components/shell/PanelShell.vue');
        $whatsNew = (string) file_get_contents($root.'/inertia/pages/Changelog.vue');

        $this->assertStringNotContainsString('Send feedback', $menu);
        $this->assertStringNotContainsString('panel?.security', $menu);
        $this->assertStringContainsString('Profile', $menu);
        $this->assertStringContainsString('Settings', $menu);

        $this->assertStringNotContainsString('FeedbackDialog', $shell);

        $this->assertStringContainsString('Send feedback', $whatsNew);
        $this->assertStringContainsString('FeedbackDialog', $whatsNew);
    }

    public function test_whats_new_offers_feedback_and_a_replay_after_dismiss(): void
    {
        $first = $this->actingAs($this->user)
            ->get('/whats-new')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertNotEmpty($first['feedbackAction'] ?? null);
        $this->assertNull($first['onboardingReset'] ?? null);

        $this->actingAs($this->user)->post('/onboarding/dismiss')->assertRedirect();

        $after = $this->actingAs($this->user->fresh())
            ->get('/whats-new')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertNotEmpty($after['onboardingReset'] ?? null);
    }
}
