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
 * Socialite on lists the packaged catalogue; credentials gate the OAuth start.
 * Filling both Turnstile keys shows the widget and refuses a POST without a token.
 */
final class SocialTurnstileLoginTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    /** @var list<string> */
    private const CATALOGUE = [
        'google', 'github', 'gitlab', 'bitbucket', 'facebook',
        'linkedin', 'microsoft', 'apple', 'x',
        'discord', 'slack', 'twitch',
    ];

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

    public function test_socialite_false_means_no_social_buttons(): void
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

    public function test_login_lists_the_catalogue_even_without_credentials(): void
    {
        config(['services.google' => [], 'services.github' => []]);

        if (! SocialProviders::installed()) {
            $this->get('/second/login')
                ->assertOk()
                ->assertInertia(fn ($page) => $page->where('socialProviders', []));

            return;
        }

        $this->get('/second/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->has('socialProviders', count(self::CATALOGUE))
                ->where('socialProviders.0.key', 'google')
                ->where('socialProviders.0.configured', false)
                ->where('socialProviders.'.(count(self::CATALOGUE) - 1).'.key', 'twitch'));
    }

    public function test_a_configured_provider_is_marked_on_the_button(): void
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
                ->has('socialProviders', count(self::CATALOGUE))
                ->where('socialProviders.0.key', 'google')
                ->where('socialProviders.0.configured', true)
                ->where('socialProviders.0.url', '/second/auth/google/redirect')
                ->where('socialProviders.1.key', 'github')
                ->where('socialProviders.1.configured', false));
    }

    public function test_every_common_provider_with_keys_appears_configured(): void
    {
        if (! SocialProviders::installed()) {
            $this->markTestSkipped('laravel/socialite is not installed');
        }

        $config = [];

        foreach (self::CATALOGUE as $key) {
            $config["services.{$key}.client_id"] = "{$key}-id";
            $config["services.{$key}.client_secret"] = "{$key}-secret";
        }

        config($config);

        $this->get('/second/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->has('socialProviders', count(self::CATALOGUE))
                ->where('socialProviders.0.key', 'google')
                ->where('socialProviders.0.configured', true)
                ->where('socialProviders.'.(count(self::CATALOGUE) - 1).'.key', 'twitch')
                ->where('socialProviders.'.(count(self::CATALOGUE) - 1).'.configured', true));
    }

    public function test_missing_secret_keeps_the_button_but_marks_it_unconfigured(): void
    {
        config([
            'services.google.client_id' => 'id',
            'services.google.client_secret' => null,
            'services.github.client_id' => 'gh-id',
            'services.github.client_secret' => 'gh-secret',
            'services.discord.client_id' => 'discord-id',
            'services.discord.client_secret' => '',
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
                ->has('socialProviders', count(self::CATALOGUE))
                ->where('socialProviders.0.key', 'google')
                ->where('socialProviders.0.configured', false)
                ->where('socialProviders.1.key', 'github')
                ->where('socialProviders.1.configured', true));
    }

    public function test_show_unconfigured_false_hides_providers_without_keys(): void
    {
        config([
            'panel.auth.social.show_unconfigured' => false,
            'services.google.client_id' => 'id',
            'services.google.client_secret' => 'secret',
            'services.github' => [],
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
                ->where('socialProviders.0.configured', true));
    }

    public function test_unconfigured_redirect_explains_the_missing_env_keys(): void
    {
        if (! SocialProviders::installed()) {
            $this->markTestSkipped('laravel/socialite is not installed');
        }

        config([
            'services.google.client_id' => 'id',
            'services.google.client_secret' => 'secret',
            'services.github' => [],
        ]);

        $this->get('/second/auth/github/redirect')
            ->assertRedirect('/second/login')
            ->assertSessionHas('status', 'Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in .env');
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
