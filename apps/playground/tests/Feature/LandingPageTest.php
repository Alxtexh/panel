<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

/**
 * Part G.9: PanelKit ships SEVERAL landing designs, and every one of them
 * has to actually render.
 *
 * THE FRONT DOOR IS THE ONE SCREEN NOBODY IS SIGNED IN FOR, so a landing
 * page that needs a session, a tenant or a seeded row is a landing page that
 * 500s for exactly the audience it was built for. Each case below hits `/`
 * with no authentication and nothing in the database.
 */
final class LandingPageTest extends TestCase
{
    use RefreshDatabase;

    /** @return list<array{string, string}> */
    public static function designs(): array
    {
        return [
            'aurora' => ['aurora', 'landing/AuroraLanding'],
            'editorial' => ['editorial', 'landing/EditorialLanding'],
            'console' => ['console', 'landing/ConsoleLanding'],
        ];
    }

    #[DataProvider('designs')]
    public function test_each_shipped_design_renders_to_a_guest(string $design, string $component): void
    {
        $response = $this->get("/?design={$design}")->assertOk();

        $this->assertSame($component, $response->viewData('page')['component']);
    }

    /** The configured design is what an installation shows without a parameter. */
    public function test_the_configured_design_is_the_default(): void
    {
        config(['panel.landing' => 'console']);

        $response = $this->get('/')->assertOk();

        $this->assertSame('landing/ConsoleLanding', $response->viewData('page')['component']);
    }

    /**
     * AN UNKNOWN NAME FALLS BACK RATHER THAN FAILING. This is the front door:
     * a typo in a shared link should show the product, not an error page -
     * and, more importantly, an arbitrary `?design=` must not be able to name
     * any component in the bundle for the server to mount.
     */
    public function test_an_unknown_design_falls_back_to_the_configured_one(): void
    {
        config(['panel.landing' => 'editorial']);

        $response = $this->get('/?design=../Dashboard')->assertOk();

        $this->assertSame('landing/EditorialLanding', $response->viewData('page')['component']);
    }
}
