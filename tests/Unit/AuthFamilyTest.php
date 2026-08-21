<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Tests\TestCase;

/**
 * Auth families couple login, signup, and OTP through one panel knob.
 */
final class AuthFamilyTest extends TestCase
{
    public function test_default_family_is_centered(): void
    {
        $panel = Panel::make('ops');

        $this->assertSame('centered', $panel->getAuthFamily());
        $this->assertSame('centered', $panel->getAuthLayout());
    }

    public function test_auth_family_accepts_panelkit_names(): void
    {
        foreach (['centered', 'muted', 'split', 'showcase', 'card'] as $family) {
            $panel = Panel::make('ops')->authFamily($family);

            $this->assertSame($family, $panel->getAuthFamily());
            $this->assertSame($family, $panel->getAuthLayout());
        }
    }

    public function test_shadcn_login_block_selects_the_coupled_family(): void
    {
        $this->assertSame('showcase', Panel::make('a')->authFamily('login-02')->getAuthFamily());
        $this->assertSame('card', Panel::make('b')->authFamily('login-04')->getAuthFamily());
        $this->assertSame('muted', Panel::make('c')->authFamily('login-03')->getAuthFamily());
    }

    public function test_signup_and_otp_block_aliases_match_login_family(): void
    {
        $this->assertSame(
            Panel::make('a')->authFamily('login-02')->getAuthFamily(),
            Panel::make('b')->authFamily('signup-02')->getAuthFamily(),
        );
        $this->assertSame(
            Panel::make('a')->authFamily('login-02')->getAuthFamily(),
            Panel::make('b')->authFamily('otp-02')->getAuthFamily(),
        );
        $this->assertSame(
            Panel::make('a')->authFamily('login-04')->getAuthFamily(),
            Panel::make('b')->authFamily('signup-04')->getAuthFamily(),
        );
        $this->assertSame(
            Panel::make('a')->authFamily('login-04')->getAuthFamily(),
            Panel::make('b')->authFamily('otp-04')->getAuthFamily(),
        );
    }

    public function test_auth_layout_alias_delegates_to_auth_family(): void
    {
        $panel = Panel::make('ops')->authLayout('card');

        $this->assertSame('card', $panel->getAuthLayout());
    }

    public function test_unknown_family_falls_back_to_centered(): void
    {
        $panel = Panel::make('ops')->authFamily('not-a-real-family');

        $this->assertSame('centered', $panel->getAuthFamily());
    }

    public function test_auth_families_lists_every_supported_name(): void
    {
        $this->assertSame(
            ['centered', 'muted', 'split', 'showcase', 'card'],
            Panel::authFamilies(),
        );
    }
}
