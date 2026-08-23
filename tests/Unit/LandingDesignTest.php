<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Landing\LandingPresets;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Tests\TestCase;

/**
 * Landing designs are pre-shipped kit offerings, picked like auth families.
 */
final class LandingDesignTest extends TestCase
{
    public function test_landings_lists_every_shipped_design(): void
    {
        $this->assertSame(
            ['aurora', 'editorial', 'console', 'marketing', 'shadcn'],
            Panel::landings(),
        );
        $this->assertSame(Panel::landings(), Panel::landingDesigns());
        $this->assertSame(Panel::landings(), LandingPresets::names());
    }

    public function test_landing_true_enables_the_route_without_changing_design(): void
    {
        config(['panel.landing.route' => false, 'panel.landing.design' => 'console']);

        $panel = Panel::make('ops')->landing(true);

        $this->assertTrue($panel->hasLandingRoute());
        $this->assertNull($panel->getLandingDesign());
        $this->assertTrue(config('panel.landing.route'));
        $this->assertSame('console', config('panel.landing.design'));
    }

    public function test_landing_string_enables_route_and_sets_design(): void
    {
        config(['panel.landing.route' => false, 'panel.landing.design' => 'aurora']);

        $panel = Panel::make('ops')->landing('shadcn');

        $this->assertTrue($panel->hasLandingRoute());
        $this->assertSame('shadcn', $panel->getLandingDesign());
        $this->assertTrue(config('panel.landing.route'));
        $this->assertSame('shadcn', config('panel.landing.design'));
    }

    public function test_landing_aliases_resolve_to_shipped_designs(): void
    {
        $this->assertSame('aurora', Panel::make('a')->landing('composed')->getLandingDesign());
        $this->assertSame('marketing', Panel::make('b')->landing('vue-marketing')->getLandingDesign());
        $this->assertSame('marketing', Panel::make('c')->landing('vue-js')->getLandingDesign());
        $this->assertSame('shadcn', Panel::make('d')->landing('shadcn-vue')->getLandingDesign());
    }

    public function test_landing_false_turns_the_route_off(): void
    {
        config(['panel.landing.route' => true]);

        $panel = Panel::make('ops')->landing(false);

        $this->assertFalse($panel->hasLandingRoute());
        $this->assertFalse(config('panel.landing.route'));
    }

    public function test_unknown_landing_falls_back_to_aurora(): void
    {
        $panel = Panel::make('ops')->landing('not-a-real-design');

        $this->assertSame('aurora', $panel->getLandingDesign());
        $this->assertSame('aurora', LandingPresets::resolve('not-a-real-design'));
    }

    public function test_marketing_and_shadcn_presets_are_non_empty_and_open_with_hero(): void
    {
        foreach (['marketing', 'shadcn'] as $design) {
            $sections = LandingPresets::get($design);

            $this->assertNotEmpty($sections, "{$design} must ship a real landing.");
            $this->assertSame('hero', $sections[0]['type']);
        }
    }
}
