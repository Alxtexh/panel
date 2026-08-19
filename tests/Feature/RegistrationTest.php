<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Notifications\PanelVerifyEmail;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;

/**
 * `Panel::registration()` mounts register the way `login()` mounts sign-in.
 *
 * `emailVerification()` is a separate wall, off until called, so existing
 * portals do not trap operators whose mailbox was never proved.
 */
final class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_is_mounted_on_the_fixture_second_panel(): void
    {
        $this->get('/second/register')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('panel/auth/Register', false)
                ->where('action', '/second/register'));
    }

    public function test_register_creates_an_account_and_signs_them_in(): void
    {
        $this->post('/second/register', [
            'name' => 'New operator',
            'email' => 'new@example.test',
            'password' => 'correct-horse',
            'password_confirmation' => 'correct-horse',
        ])->assertRedirect('/second');

        $user = User::query()->where('email', 'new@example.test')->first();

        $this->assertNotNull($user);
        $this->assertNotNull($user->email_verified_at);
        $this->assertAuthenticatedAs($user);
    }

    public function test_email_verification_holds_the_dashboard_until_the_mailbox_is_proved(): void
    {
        Notification::fake();
        app(PanelManager::class)->panel('second')->emailVerification();

        $this->post('/second/register', [
            'name' => 'Unverified',
            'email' => 'unverified@example.test',
            'password' => 'correct-horse',
            'password_confirmation' => 'correct-horse',
        ])->assertRedirect('/second/email/verify');

        $user = User::query()->where('email', 'unverified@example.test')->first();

        $this->assertNotNull($user);
        $this->assertNull($user->email_verified_at);
        $this->assertAuthenticatedAs($user);

        Notification::assertSentOnDemand(PanelVerifyEmail::class);

        $this->get('/second/reports')->assertRedirect('/second/email/verify');
        $this->get('/second/email/verify')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->component('panel/auth/VerifyEmail', false));
    }
}
