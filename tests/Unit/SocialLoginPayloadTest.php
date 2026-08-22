<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Auth\SocialLoginPayload;
use Alxtexh\Panel\Auth\SocialProviders;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\TestCase;

final class SocialLoginPayloadTest extends TestCase
{
    public function test_empty_when_socialite_is_off(): void
    {
        config([
            'services.google.client_id' => 'id',
            'services.google.client_secret' => 'secret',
        ]);

        $panel = Panel::make('off')->path('off')->login()->socialite(false);

        $this->assertSame([], SocialLoginPayload::forPanel($panel));
    }

    public function test_redirect_url_respects_the_panel_prefix(): void
    {
        $panel = Panel::make('reseller')->path('reseller')->login();

        $this->assertSame(
            '/reseller/auth/google/redirect',
            SocialLoginPayload::redirectUrl($panel, 'google'),
        );
    }

    public function test_lists_unconfigured_providers_when_show_unconfigured_is_true(): void
    {
        if (! SocialProviders::installed()) {
            $this->markTestSkipped('laravel/socialite is not installed');
        }

        config([
            'panel.auth.social.show_unconfigured' => true,
            'services.google' => [],
            'services.github' => [],
        ]);

        $panel = app(PanelManager::class)->panel('second');

        $providers = SocialLoginPayload::forPanel($panel);

        $this->assertNotSame([], $providers);
        $this->assertSame('google', $providers[0]['key']);
        $this->assertFalse($providers[0]['configured']);
        $this->assertSame('/second/auth/google/redirect', $providers[0]['url']);
        $this->assertStringContainsString('.env', (string) $providers[0]['hint']);
    }

    public function test_hides_unconfigured_providers_when_show_unconfigured_is_false(): void
    {
        if (! SocialProviders::installed()) {
            $this->markTestSkipped('laravel/socialite is not installed');
        }

        config([
            'panel.auth.social.show_unconfigured' => false,
            'services.google' => [],
            'services.github.client_id' => 'id',
            'services.github.client_secret' => 'secret',
        ]);

        $panel = app(PanelManager::class)->panel('second');
        $providers = SocialLoginPayload::forPanel($panel);

        $this->assertCount(1, $providers);
        $this->assertSame('github', $providers[0]['key']);
        $this->assertTrue($providers[0]['configured']);
    }
}
