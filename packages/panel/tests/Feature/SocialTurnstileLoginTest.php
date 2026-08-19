<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\SocialProviders;
use Alxtexh\Panel\Auth\Turnstile;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;

/**
 * Social buttons and Turnstile on the packaged login door.
 *
 * CREDENTIALS AND KEYS ARE THE SWITCH. A fresh install shows neither; filling
 * `services.google` (and having Socialite) shows a button; filling both
 * Turnstile keys shows the widget and refuses a POST without a token.
 */
final class SocialTurnstileLoginTest extends TestCase
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

    public function test_no_providers_means_no_social_buttons(): void
    {
        config(['services.google' => [], 'services.github' => []]);

        $this->get('/second/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('socialProviders', []));
    }

    public function test_a_configured_provider_sends_a_button_href(): void
    {
        config([
            'services.google.client_id' => 'id',
            'services.google.client_secret' => 'secret',
        ]);

        if (! SocialProviders::installed()) {
            $this->get('/second/login')
                ->assertOk()
                ->assertInertia(fn ($page) => $page->where('socialProviders', []));

            return;
        }

        $this->get('/second/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->has('socialProviders', 1)
                ->where('socialProviders.0.key', 'google')
                ->where('socialProviders.0.url', '/second/auth/google/redirect'));
    }

    public function test_socialite_false_hides_buttons(): void
    {
        config([
            'services.google.client_id' => 'id',
            'services.google.client_secret' => 'secret',
        ]);

        app(PanelManager::class)->panel('second')->socialite(false);

        $this->get('/second/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('socialProviders', []));
    }

    public function test_missing_turnstile_keys_leave_login_working(): void
    {
        config([
            'panel.auth.turnstile.site_key' => null,
            'panel.auth.turnstile.secret_key' => null,
        ]);

        Http::fake();

        $this->assertFalse(Turnstile::enabled());

        $this->get('/second/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('turnstileSiteKey', null));

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second');

        $this->assertAuthenticatedAs($this->user);
        Http::assertNothingSent();
    }

    public function test_turnstile_keys_refuse_a_login_post_without_a_token(): void
    {
        config([
            'panel.auth.turnstile.site_key' => 'site-key',
            'panel.auth.turnstile.secret_key' => 'secret-key',
        ]);

        Http::fake();

        $this->get('/second/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('turnstileSiteKey', 'site-key'));

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertSessionHasErrors('cf-turnstile-response');

        $this->assertGuest();
        Http::assertNothingSent();
    }

    public function test_turnstile_false_skips_the_check_even_with_keys(): void
    {
        config([
            'panel.auth.turnstile.site_key' => 'site-key',
            'panel.auth.turnstile.secret_key' => 'secret-key',
        ]);

        app(PanelManager::class)->panel('second')->turnstile(false);

        $this->get('/second/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('turnstileSiteKey', null));

        $this->post('/second/login', [
            'email' => $this->user->email,
            'password' => 'correct-horse',
        ])->assertRedirect('/second');

        $this->assertAuthenticatedAs($this->user);
    }
}
