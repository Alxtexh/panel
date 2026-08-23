<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\SocialProviders;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Shared `socialProviders` from `SharePanelProps`.
 */
final class SharePanelSocialPropsTest extends TestCase
{
    use RefreshDatabase;

    public function test_register_reads_shared_social_providers_without_a_page_prop(): void
    {
        if (! SocialProviders::installed()) {
            $this->markTestSkipped('laravel/socialite is not installed');
        }

        config([
            'services.google.client_id' => 'id',
            'services.google.client_secret' => 'secret',
            'services.github' => [],
        ]);

        $this->get('/second/register')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->has('socialProviders', 1)
                ->where('socialProviders.0.key', 'google')
                ->where('socialProviders.0.configured', true));
    }

    public function test_shared_social_providers_are_empty_when_none_are_configured(): void
    {
        config(['services.google' => [], 'services.github' => []]);

        $this->get('/second/register')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('socialProviders', []));
    }

    public function test_shared_social_providers_are_empty_when_socialite_is_off(): void
    {
        config([
            'services.google.client_id' => 'id',
            'services.google.client_secret' => 'secret',
        ]);

        app(PanelManager::class)->panel('second')->socialite(false);

        $this->get('/second/register')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('socialProviders', []));
    }
}
