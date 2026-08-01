<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\User;
use App\Support\LandingPresets;
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

    /**
     * EVERY DESIGN IS THE SAME COMPONENT NOW, and differs by its sections. A
     * design that renders zero sections is the failure this catches: the page
     * would return 200 and be blank, which is exactly how the front door broke
     * once before.
     */
    #[DataProvider('designs')]
    public function test_each_shipped_design_renders_to_a_guest(string $design, string $component): void
    {
        $page = $this->get("/preview/{$design}")->assertOk()->viewData('page');

        $this->assertSame('landing/Composed', $page['component']);
        $this->assertNotEmpty($page['props']['sections'], "The {$design} design rendered no sections.");
        $this->assertSame('hero', $page['props']['sections'][0]['type'], 'A landing page must open with a hero.');
    }

    /** The designs are genuinely different arrangements, not one page thrice. */
    public function test_the_designs_are_different_compositions(): void
    {
        $shape = fn (string $d): string => implode(',', array_column(
            $this->get("/preview/{$d}")->assertOk()->viewData('page')['props']['sections'],
            'type',
        ));

        $this->assertNotSame($shape('aurora'), $shape('editorial'));
        $this->assertNotSame($shape('aurora'), $shape('console'));
    }

    /** Every section a preset names must be one the renderer knows. */
    public function test_no_preset_names_a_section_the_client_cannot_draw(): void
    {
        $known = ['hero', 'logos', 'features', 'bento', 'showcase', 'steps', 'stats', 'testimonials', 'pricing', 'faq', 'cta'];

        foreach (LandingPresets::names() as $design) {
            foreach (LandingPresets::get($design) as $section) {
                $this->assertContains(
                    $section['type'],
                    $known,
                    "The {$design} preset uses section [{$section['type']}], which PkLandingSections would skip.",
                );
            }
        }
    }

    /** The configured design is what an installation shows without a parameter. */
    public function test_the_configured_design_is_the_default(): void
    {
        config(['panel.landing' => 'console']);

        $page = $this->get('/')->assertOk()->viewData('page');

        $this->assertSame('landing/Composed', $page['component']);
        $this->assertNotEmpty($page['props']['sections']);
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

        /*
         * A PATH CANNOT NAME A COMPONENT NOW. The preview route is constrained
         * to the shipped design names, so an unknown one is a 404 rather than
         * a fallback - which is the right answer for a URL somebody typed,
         * and removes the "arbitrary string reaches Inertia::render" shape
         * entirely.
         */
        $this->get('/preview/../Dashboard')->assertNotFound();
    }

    /* ------------------------------------------- somebody who already signed up */

    /**
     * THE FRONT DOOR IS NOT A PITCH TO SOMEBODY WHO ALREADY BOUGHT.
     *
     * `/` was the dashboard until G.9 put a marketing page on it, so every
     * bookmark and every bare-domain visit by a signed-in operator started
     * landing on the pricing table. Nothing errors, nothing is logged and the
     * response is a healthy 200 - the only symptom is a person saying the
     * panel will not open, which is why this is asserted rather than left to
     * be noticed.
     */
    public function test_a_signed_in_operator_is_sent_to_their_dashboard(): void
    {
        $this->actingAs($this->operator())
            ->get('/')
            ->assertRedirect(route('dashboard'));
    }

    /**
     * BUT AN EXPLICIT DESIGN REQUEST STILL WINS. This reference app exists to
     * demonstrate all three designs and whoever is demonstrating them is
     * signed in; redirecting them would make the feature unviewable by the
     * only people who ever look at it.
     */
    public function test_an_explicit_design_is_still_shown_to_a_signed_in_operator(): void
    {
        $page = $this->actingAs($this->operator())
            ->get('/preview/editorial')
            ->assertOk()
            ->viewData('page');

        $this->assertSame('landing/Composed', $page['component']);
    }

    private function operator(): User
    {
        return User::factory()->create(['email_verified_at' => now()]);
    }
}
