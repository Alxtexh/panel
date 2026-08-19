<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\EmailTwoFactor;
use Alxtexh\Panel\Auth\EmailTwoFactorCode;
use Alxtexh\Panel\Auth\TwoFactor;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;

/**
 * Email OTP as a second factor at the packaged login door.
 *
 * SAME PAUSE AS TOTP. After a correct password the session is not authenticated
 * until the mailed code succeeds. A wrong code leaves them a guest.
 */
final class EmailTwoFactorLoginTest extends TestCase
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

    public function test_an_email_otp_user_does_not_reach_the_panel_until_the_code_succeeds(): void
    {
        Notification::fake();
        $this->enableEmailOtp();

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])
            ->assertRedirect('/second/two-factor-challenge')
            ->assertSessionHas(TwoFactor::SESSION_ID, $this->user->id);

        $this->assertGuest();

        $code = $this->lastEmailOtp();

        $this->get('/second/two-factor-challenge')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('panel/auth/TwoFactorChallenge', false)
                ->where('method', EmailTwoFactor::METHOD_EMAIL)
                ->where('action', '/second/two-factor-challenge'));

        $this->post('/second/two-factor-challenge', [
            'code' => '000000',
        ])->assertSessionHasErrors('code');

        $this->assertGuest();

        $this->post('/second/two-factor-challenge', [
            'code' => $code,
        ])->assertRedirect('/second');

        $this->assertAuthenticatedAs($this->user);
        $this->get('/second/reports')->assertOk();
    }

    public function test_totp_wins_when_both_factors_are_on(): void
    {
        Notification::fake();
        $this->enableEmailOtp();

        $this->user->forceFill([
            'two_factor_secret' => encrypt('JBSWY3DPEHPK3PXP'),
            'two_factor_recovery_codes' => encrypt(json_encode(['recovery-code-1'])),
            'two_factor_confirmed_at' => now(),
        ])->save();

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second/two-factor-challenge');

        Notification::assertNothingSent();

        $this->get('/second/two-factor-challenge')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->where('method', EmailTwoFactor::METHOD_TOTP)
                ->where('resendUrl', null));
    }

    private function enableEmailOtp(): void
    {
        $this->user->forceFill([
            'email_two_factor_confirmed_at' => now(),
        ])->save();
    }

    private function lastEmailOtp(): string
    {
        $code = null;

        Notification::assertSentOnDemand(EmailTwoFactorCode::class, function (EmailTwoFactorCode $notification) use (&$code): bool {
            $code = $notification->code;

            return true;
        });

        $this->assertNotNull($code);
        $this->assertMatchesRegularExpression('/^\d{6}$/', (string) $code);

        return (string) $code;
    }
}
