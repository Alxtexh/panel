<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Tests\TestCase;

final class PasswordlessTest extends TestCase
{
    public function test_passwordless_is_off_by_default(): void
    {
        $this->assertFalse(Panel::make('ops')->hasPasswordless());
    }

    public function test_passwordless_requires_config_and_panel_opt_in(): void
    {
        config(['panel.auth.magic_link' => false]);
        $this->assertTrue(Panel::make('ops')->passwordless()->hasPasswordless());
        $this->assertFalse(Panel::make('ops')->passwordless()->passwordlessActive());

        config(['panel.auth.magic_link' => true]);
        $this->assertTrue(Panel::make('ops')->passwordless()->passwordlessActive());
    }

    public function test_magic_link_is_an_alias(): void
    {
        config(['panel.auth.magic_link' => true]);

        $this->assertTrue(Panel::make('ops')->magicLink()->passwordlessActive());
    }
}
