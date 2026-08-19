<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\TwoFactor;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelIdleActivity;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;

/**
 * MFA at the packaged login door, using the same TOTP / recovery secrets
 * Security already stores.
 *
 * THE GAP: `->login()` signed the person in after the password. Fortify's
 * `/login` already paused for 2FA. A generated portal did not. Passkeys stay
 * an alternative on the form; a typed password still has to clear 2FA.
 */
final class TwoFactorLoginTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'correct-horse',
            'email_verified_at' => now(),
        ]);
    }

    public function test_a_user_without_mfa_reaches_the_panel(): void
    {
        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second');

        $this->assertAuthenticatedAs($this->user);

        $this->get('/second/reports')->assertOk();
    }

    public function test_a_2fa_user_does_not_reach_the_panel_until_the_challenge_succeeds(): void
    {
        $secret = 'JBSWY3DPEHPK3PXP';
        $this->enableTwoFactor($this->user, $secret);

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])
            ->assertRedirect('/second/two-factor-challenge')
            ->assertSessionHas(TwoFactor::SESSION_ID, $this->user->id);

        $this->assertGuest();

        $this->get('/second/reports')->assertRedirect();

        $this->get('/second/two-factor-challenge')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('panel/auth/TwoFactorChallenge', false)
                ->where('action', '/second/two-factor-challenge'));

        $this->post('/second/two-factor-challenge', [
            'code' => '000000',
        ])->assertSessionHasErrors('code');

        $this->assertGuest();

        $this->post('/second/two-factor-challenge', [
            'code' => TwoFactor::totp($secret),
        ])->assertRedirect('/second/reports');

        $this->assertAuthenticatedAs($this->user);
        $this->get('/second/reports')->assertOk();
    }

    public function test_a_recovery_code_completes_the_challenge(): void
    {
        $this->enableTwoFactor($this->user, 'JBSWY3DPEHPK3PXP', ['recovery-code-1']);

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ]);

        $this->post('/second/two-factor-challenge', [
            'recovery_code' => 'recovery-code-1',
        ])->assertRedirect('/second');

        $this->assertAuthenticatedAs($this->user);
    }

    public function test_the_lock_screen_still_works_after_password_login(): void
    {
        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second');

        $this->post('/second/lock')->assertRedirect('/second/screens/locked');

        $this->get('/second/reports')->assertRedirect('/second/screens/locked');

        $this->assertTrue(session()->has(PanelIdleActivity::LOCKED_AT));
    }

    public function test_two_factor_challenge_false_skips_the_pause(): void
    {
        app(PanelManager::class)->panel('second')->twoFactorChallenge(false);
        $this->enableTwoFactor($this->user, 'JBSWY3DPEHPK3PXP');

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second');

        $this->assertAuthenticatedAs($this->user);
    }

    public function test_login_is_ok_when_the_passkeys_table_is_missing(): void
    {
        Schema::dropIfExists('passkeys');

        $this->get('/second/login')->assertOk();

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second');
    }

    public function test_a_missing_two_factor_column_is_treated_as_no_mfa(): void
    {
        Schema::table('users', function (\Illuminate\Database\Schema\Blueprint $table): void {
            $table->dropColumn([
                'two_factor_secret',
                'two_factor_recovery_codes',
                'two_factor_confirmed_at',
            ]);
        });

        $user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'No columns',
            'email' => 'nocolumns@example.test',
            'password' => 'correct-horse',
        ]);

        $this->assertFalse(TwoFactor::enabled($user));

        $this->post('/second/login', [
            'email' => $user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second');

        $this->assertAuthenticatedAs($user);
    }

    public function test_the_challenge_page_without_a_pending_login_returns_to_sign_in(): void
    {
        $this->get('/second/two-factor-challenge')->assertRedirect('/second/login');
    }

    /** @param list<string> $recovery */
    private function enableTwoFactor(User $user, string $secret, array $recovery = ['recovery-code-1']): void
    {
        $user->forceFill([
            'two_factor_secret' => encrypt($secret),
            'two_factor_recovery_codes' => encrypt(json_encode($recovery)),
            'two_factor_confirmed_at' => now(),
        ])->save();
    }
}
