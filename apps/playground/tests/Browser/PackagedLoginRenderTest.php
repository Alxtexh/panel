<?php

declare(strict_types=1);

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * The packaged sign-in screen, in a real browser.
 *
 * WHY IT NEEDS ONE. Everything added to this screen for parity with the
 * reference app is behaviour a server test cannot see: the reveal toggle swaps
 * an input's type, the passkey divider appears only when a slot is filled, and
 * the provider buttons are anchors that must be real navigations rather than
 * Inertia visits. `PanelAuthTest` proves what the SERVER decides to send; this
 * proves what the screen does with it.
 *
 * IT VISITS `/login-preview`, NOT `/login`. This application has a sign-in
 * screen of its own at that name, and Inertia resolves by name - so the obvious
 * test would pass without the package being involved. See the fixture.
 */
final class PackagedLoginRenderTest extends DuskTestCase
{
    /**
     * THE REVEAL TOGGLE, which is the difference somebody actually feels.
     *
     * A panel that enforces a password policy hands people long generated
     * strings, and typing one blind on a phone fails often enough that "wrong
     * password" stops meaning anything.
     *
     * THE TYPE IS ASSERTED, NOT THE ICON. Swapping the icon while leaving the
     * input masked is exactly the bug this catches, and it looks correct in a
     * screenshot.
     */
    public function test_the_password_reveals_and_hides(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->visit('/login-preview')
                ->waitForText('Log in to your account', 15)
                ->assertAttribute('#password', 'type', 'password')

                ->type('#password', 'a-long-generated-password')
                ->click('[aria-label="Show password"]')
                ->waitFor('[aria-label="Hide password"]', 5)
                ->assertAttribute('#password', 'type', 'text')

                /*
                 * AND WHAT WAS TYPED SURVIVES. Re-rendering a different input
                 * rather than swapping the type would clear the field, and
                 * clearing a half-typed password when somebody asks to see it
                 * is worse than not offering the button at all.
                 */
                ->assertInputValue('#password', 'a-long-generated-password')

                ->click('[aria-label="Hide password"]')
                ->waitFor('[aria-label="Show password"]', 5)
                ->assertAttribute('#password', 'type', 'password');

            $browser->screenshot('packaged-login');
        });
    }

    /**
     * THE OPTIONAL HALVES RENDER WHEN SUPPLIED - and the passkey slot draws its
     * divider only because the fixture filled it.
     */
    public function test_it_draws_the_optional_halves_it_was_given(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->visit('/login-preview')
                ->waitForText('Log in to your account', 15)

                /*
                 * The slot, and the divider the package draws around it.
                 *
                 * ASSERTED IN CAPITALS because that is what the driver returns:
                 * the divider's class is `uppercase`, and Selenium reads
                 * RENDERED text. The same trap caught the palette's heading.
                 */
                ->assertPresent('[data-passkey-button]')
                ->assertSee('OR CONTINUE WITH EMAIL')

                // A provider, as a real anchor rather than an Inertia visit.
                ->assertSeeIn('a[href="/auth/google/redirect"]', 'Google')

                ->assertSee('Forgot password?')
                ->assertSee('Sign up');
        });
    }
}
