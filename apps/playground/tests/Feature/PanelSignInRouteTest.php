<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Support\Facades\Route;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Tests\TestCase;

/**
 * Every panel has somewhere to send a guest.
 *
 * FOUND BY INSTALLING INTO A STOCK LARAVEL APPLICATION AND OPENING IT, which
 * nothing in this suite had ever done. `laravel/laravel` ships no auth
 * scaffolding, so it has no route named `login`; Laravel's `Authenticate`
 * middleware redirects an unauthenticated request to `route('login')`; and the
 * result was that EVERY PANEL URL RETURNED 500 with `Route [login] not
 * defined` - a message naming neither Alxtexhpanel nor the fix.
 *
 * `panel:doctor` passed that installation. It reported no problems on a panel
 * where nothing could be opened at all, which is exactly the failure the
 * command exists to catch.
 *
 * THIS TEST ASSERTS THE INVARIANT, NOT THE DOCTOR OUTPUT. "doctor prints a
 * warning" is satisfied by a check that fires for the wrong reason; "every
 * registered panel resolves a sign-in route" is the property that has to hold,
 * and it fails whether the cause is a missing route, a renamed one, or a panel
 * whose route-name prefix stopped matching.
 */
final class PanelSignInRouteTest extends TestCase
{
    /** @return list<string> */
    private function candidates(Panel $panel): array
    {
        /*
         * THE SAME ORDER `SocialLoginController::loginUrl()` RESOLVES IN. Two
         * places disagreeing about where sign-in lives is its own bug, and the
         * one that would show up as a redirect into a 404 after a refused
         * social sign-in.
         */
        return array_values(array_filter([
            $panel->getRouteName().'login',
            $panel->id.'.login',
            'login',
        ]));
    }

    public function test_every_panel_can_redirect_a_guest_somewhere_real(): void
    {
        $panels = app(PanelManager::class)->panels();

        $this->assertNotEmpty($panels, 'No panels are registered, so this test would pass vacuously.');

        foreach ($panels as $panel) {
            $found = null;

            foreach ($this->candidates($panel) as $name) {
                if (Route::has($name)) {
                    $found = $name;

                    break;
                }
            }

            $this->assertNotNull(
                $found,
                "The {$panel->id} panel has no sign-in route. An unauthenticated request to any of "
                .'its URLs is redirected to a route that does not exist, so Laravel throws '
                .'`Route [login] not defined` before any panel code runs and EVERY screen returns '
                .'500. Tried: '.implode(', ', $this->candidates($panel)),
            );
        }
    }

    /**
     * AND THE SIGN-IN SCREEN ITSELF ANSWERS.
     *
     * A named route satisfying the check above can still point at a controller
     * that throws, or a page file Inertia cannot resolve - in which case the
     * redirect works and the destination is a 500, which looks identical to a
     * guest.
     */
    public function test_the_sign_in_screen_renders_for_a_guest(): void
    {
        $this->get('/login')
            ->assertSuccessful();
    }
}
