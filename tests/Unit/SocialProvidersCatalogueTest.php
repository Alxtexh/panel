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
}
