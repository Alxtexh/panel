<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;

/**
 * The screens a panel cannot normally be made to show.
 *
 * An error page is by definition something you cannot summon on demand, which
 * is why it is the screen that ships broken and stays broken - nobody sees a
 * 500 until a customer does. These tests are the substitute for being able to
 * look at it.
 */
final class ErrorScreenTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /* ------------------------------------------------------------ previews */

    /**
     * Every status renders, from the SAME component the handler uses.
     *
     * A separate "demo" copy would be a copy that drifts, and the drift is
     * invisible until the day it matters.
     */
    public function test_every_error_status_has_a_screen(): void
    {
        /*
         * 419 IS NOT HERE, deliberately.
         *
         * A session expiry is handled as a dialog over the page you were on
         * rather than as a page of its own - navigating away from a stale
         * session throws away the form you were filling in. See
         * `lib/sessionExpired.ts`.
         */
        foreach ([403, 404, 429, 500, 503] as $status) {
            $page = $this->actingAs($this->user)
                ->get("/screens/error/{$status}")
                ->assertOk()
                ->viewData('page');

            $this->assertSame('errors/Error', $page['component']);
            $this->assertSame($status, $page['props']['status']);
        }
    }

    /** A status the panel does not have a screen for is not previewable. */
    public function test_an_unsupported_status_is_not_previewable(): void
    {
        $this->actingAs($this->user)->get('/screens/error/418')->assertNotFound();
    }

    /** Including 419, which is a dialog rather than a page. */
    public function test_session_expiry_has_no_page_of_its_own(): void
    {
        $this->actingAs($this->user)->get('/screens/error/419')->assertNotFound();
    }

    public function test_the_lock_and_verification_screens_render(): void
    {
        $this->actingAs($this->user)->get('/screens/locked')->assertOk();
        $this->actingAs($this->user)->get('/screens/verify')->assertOk();
    }

    /** They are behind auth like everything else in the panel. */
    public function test_a_guest_cannot_browse_the_screens(): void
    {
        $this->get('/screens/error/404')->assertRedirect('/login');
        $this->get('/screens/locked')->assertRedirect('/login');
    }

    /* ------------------------------------------------------- the real thing */

    /**
     * THE HANDLER ACTUALLY USES THEM.
     *
     * Previews that render while the exception handler still returns Laravel's
     * own page would be decoration. `?preview` opts this test's request into
     * the production behaviour, because locally the framework's stack trace is
     * the more useful answer and is deliberately left alone.
     */
    public function test_a_real_404_renders_the_panel_error_page(): void
    {
        $response = $this->actingAs($this->user)->get('/no-such-page');

        $response->assertNotFound();

        $this->assertSame('errors/Error', $response->viewData('page')['component']);
        $this->assertSame(404, $response->viewData('page')['props']['status']);
    }

    /** And the status code is preserved, not flattened to 200. */
    public function test_the_error_response_keeps_its_status_code(): void
    {
        $this->actingAs($this->user)->get('/no-such-page')->assertStatus(404);
    }

    /**
     * JSON callers still get JSON.
     *
     * An API client that receives an HTML page for a 404 cannot parse it, and
     * the panel's own fetch-based endpoints are exactly such callers.
     */
    public function test_a_json_request_is_left_alone(): void
    {
        $response = $this->actingAs($this->user)
            ->getJson('/no-such-page');

        $response->assertNotFound();
        $this->assertStringContainsString('application/json', (string) $response->headers->get('content-type'));
    }

    /**
     * A 404 IS AN ANSWER, so it renders the panel page in EVERY environment.
     *
     * This was gated to production once, on the reasoning that a developer
     * wants the stack trace - and the result was that the error pages were
     * never seen in the environment they were built in. A missing route has no
     * trace worth reading; there is nothing to debug, only something to say.
     */
    public function test_a_404_renders_the_panel_page_even_in_development(): void
    {
        $this->assertTrue(app()->environment('testing'), 'This test is about non-production behaviour.');

        $response = $this->actingAs($this->user)->get('/no-such-page');

        $this->assertSame('errors/Error', $response->viewData('page')['component']);
    }

    /**
     * A 500 renders the panel page too, once debug is off.
     *
     * The debug-ON path - where the framework's stack trace wins - is a
     * one-line guard and is NOT asserted here: the test environment does not
     * install the debug renderer, so a test would be checking its own harness
     * rather than the behaviour. It is verified by hand instead.
     */
    public function test_a_server_error_renders_the_panel_page_without_debug(): void
    {
        config(['app.debug' => false]);

        Route::middleware(['web', 'auth'])->get(
            '/deliberately-broken-2',
            fn () => throw new \RuntimeException('boom'),
        );

        $response = $this->actingAs($this->user)->get('/deliberately-broken-2');

        $response->assertStatus(500);
        $this->assertSame('errors/Error', $response->viewData('page')['component']);
    }
}
