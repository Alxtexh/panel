<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Landing\LandingPresets;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Tests\TestCase;

/** The landing catalog contains reference-verified reusable compositions. */
final class LandingDesignTest extends TestCase
{
    public function test_reference_verified_landing_preset_is_shipped(): void
    {
        $this->assertSame(['shadcn'], LandingPresets::names());
        $this->assertSame(['shadcn'], Panel::landings());
        $this->assertSame(['shadcn'], Panel::landingDesigns());
        $this->assertSame([], LandingPresets::get('anything'));
        $this->assertNotEmpty(LandingPresets::get('shadcn'));
    }

    public function test_landing_requests_cannot_select_a_removed_template(): void
    {
        $panel = Panel::make('ops')->landing('editorial');

        $this->assertNull($panel->getLandingDesign());
        $this->assertSame('', LandingPresets::resolve('editorial'));
    }
}
