<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Auth\SocialProviders;
use Alxtexh\Panel\Tests\TestCase;
use ReflectionClass;

/**
 * The packaged provider catalogue, independent of whether Socialite is loaded.
 */
final class SocialProvidersCatalogueTest extends TestCase
{
    public function test_the_packaged_list_covers_common_sign_in_providers(): void
    {
        $supported = (new ReflectionClass(SocialProviders::class))
            ->getConstant('SUPPORTED');

        $this->assertIsArray($supported);

        foreach ([
            'google', 'github', 'gitlab', 'bitbucket', 'facebook',
            'linkedin', 'linkedin-openid', 'microsoft', 'apple',
            'twitter', 'x', 'discord', 'slack', 'twitch',
        ] as $key) {
            $this->assertArrayHasKey($key, $supported, "missing packaged provider {$key}");
            $this->assertNotSame('', $supported[$key]);
        }
    }

    public function test_labels_prefer_the_packaged_name(): void
    {
        $this->assertSame('Discord', SocialProviders::label('discord'));
        $this->assertSame('X', SocialProviders::label('x'));
        $this->assertSame('GitLab', SocialProviders::label('gitlab'));
    }

    public function test_missing_credentials_never_enable_a_provider(): void
    {
        config([
            'services.discord' => ['client_id' => 'id'],
            'services.google' => [],
        ]);

        $this->assertFalse(SocialProviders::isEnabled('discord'));
        $this->assertFalse(SocialProviders::isEnabled('google'));
        $this->assertSame([], SocialProviders::enabled());
    }

    public function test_offered_lists_the_catalogue_without_credentials(): void
    {
        if (! SocialProviders::installed()) {
            $this->markTestSkipped('laravel/socialite is not installed');
        }

        config([
            'panel.auth.social.show_unconfigured' => true,
            'services.google' => [],
            'services.github' => [],
        ]);

        $offered = SocialProviders::offered();

        $this->assertArrayHasKey('google', $offered);
        $this->assertArrayHasKey('github', $offered);
        $this->assertArrayHasKey('discord', $offered);
        $this->assertArrayHasKey('twitch', $offered);
        $this->assertArrayNotHasKey('linkedin-openid', $offered);
        $this->assertArrayNotHasKey('twitter', $offered);
        $this->assertFalse(SocialProviders::hasCredentials('google'));
    }

    public function test_credentials_hint_names_the_env_keys(): void
    {
        $this->assertSame(
            'Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in .env',
            SocialProviders::credentialsHint('github'),
        );
        $this->assertSame(
            'Set LINKEDIN_OPENID_CLIENT_ID and LINKEDIN_OPENID_CLIENT_SECRET in .env',
            SocialProviders::credentialsHint('linkedin-openid'),
        );
    }
}
