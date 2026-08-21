<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Optional required-enrol wall after login.
 *
 * DEFAULT FALSE. Existing apps must not trap operators who never turned a
 * factor on. When `requireTwoFactor()` is on, a user with no TOTP, email OTP,
 * or passkey cannot open the dashboard until they enrol on Security.
 */
final class RequireTwoFactorTest extends TestCase
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
            'password' => 'correct-horse',
            'email_verified_at' => now(),
        ]);
    }

    public function test_require_two_factor_defaults_to_off(): void
    {
        $this->assertFalse(app(PanelManager::class)->panel('second')->requiresTwoFactor());

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second');

        $this->assertAuthenticatedAs($this->user);
        $this->get('/second/reports')->assertOk();
    }

    public function test_a_user_without_mfa_cannot_reach_the_dashboard_until_they_enrol(): void
    {
        app(PanelManager::class)->panel('second')->requireTwoFactor();

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second');

        $this->assertAuthenticatedAs($this->user);

        $this->get('/second/reports')
            ->assertRedirect('/second/security');

        $this->post('/second/security/email-two-factor')
            ->assertRedirect();

        $this->user->refresh();
        $this->assertNotNull($this->user->email_two_factor_confirmed_at);

        $this->get('/second/reports')->assertOk();
    }

    public function test_two_factor_required_is_an_alias(): void
    {
        $panel = app(PanelManager::class)->panel('second')->twoFactorRequired();

        $this->assertTrue($panel->requiresTwoFactor());

        $panel->requireTwoFactor(false);

        $this->assertFalse($panel->requiresTwoFactor());
    }
}
