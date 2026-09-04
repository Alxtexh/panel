<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Landing\LandingPresets;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Tests\TestCase;

/** The generic landing catalog was removed pending reference-verified work. */
final class LandingDesignTest extends TestCase
{
    public function test_no_generic_landing_presets_are_shipped(): void
    {
        $this->assertSame([], LandingPresets::names());
        $this->assertSame([], Panel::landings());
        $this->assertSame([], Panel::landingDesigns());
        $this->assertSame([], LandingPresets::get('anything'));
    }

    public function test_landing_requests_cannot_select_a_removed_template(): void
    {
        $panel = Panel::make('ops')->landing('editorial');

        $this->assertNull($panel->getLandingDesign());
        $this->assertSame('', LandingPresets::resolve('editorial'));
    }
}
