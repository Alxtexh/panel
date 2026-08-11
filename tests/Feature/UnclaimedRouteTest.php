<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Providers\ClaimsProfileProvider;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\Route;

/**
 * The package yielding a URL the application already declared.
 *
 * THIS MECHANISM HAD NO TEST AT ALL, in either suite, and it is the one that
 * decides whether installing this package breaks an existing application. The
 * comment above `unclaimed()` describes real damage - "it is what happened to
 * the reference application the moment these routes were added" - and the fix
 * for it was, until now, held in place by nothing.
 *
 * WHAT ACTUALLY GOES WRONG IS NOT A COLLISION ERROR. Laravel indexes routes by
 * method+URI, so registering a second `GET settings/profile` does not complain:
 * it REPLACES the first and rebuilds the name lookup from what survives. The
 * application's `route('profile.edit')` then throws, everywhere, from a package
 * they installed for its screens. Nothing reports it until a page 500s.
 *
 * SO THE ASSERTIONS ARE ABOUT NAMES, NOT STATUS CODES. Both outcomes serve a
 * profile screen at that URL; only the name says whose.
 */
final class UnclaimedRouteTest extends TestCase
{
    /**
     * The application's route is declared in a provider's `boot`, exactly as a
     * starter kit's `routes/settings.php` is - see the fixture on why the
     * ordering is the substance of the test rather than a setup detail.
     */
    protected function getPackageProviders($app): array
    {
        return [...parent::getPackageProviders($app), ClaimsProfileProvider::class];
    }

    public function test_the_application_keeps_the_url_it_declared_first(): void
    {
        $this->assertTrue(
            Route::has('app.profile.edit'),
            'The application declared GET settings/profile and the package evicted it. '
            .'Every route("app.profile.edit") in that codebase now throws.'
        );
    }

    public function test_the_package_does_not_mount_its_own_copy_over_it(): void
    {
        $this->assertFalse(
            Route::has('panel.settings.profile'),
            'The package mounted its profile screen at a URL the application had claimed.'
        );
    }

    /**
     * ALL THREE VERBS STAND DOWN TOGETHER, and this is worth pinning separately
     * because one `GET` check gates a block that also registers `PATCH` and
     * `DELETE`. Registering those two under an application's own `GET` would be
     * the worst available outcome: their screen, posting to this package's
     * controller, writing through validation and authorisation the application
     * never agreed to - and `DELETE settings/profile` deletes the account.
     */
    public function test_the_write_verbs_stand_down_with_the_screen(): void
    {
        $this->assertFalse(Route::has('panel.settings.profile.update'));
        $this->assertFalse(Route::has('panel.settings.profile.destroy'));
    }

    /**
     * YIELDING IS PER-URL, NOT PER-FEATURE. `settings/security` sits in the
     * same block behind its own check, so an application claiming the profile
     * URL must still receive the security screen it did not claim. Gating both
     * on one answer would mean adopting a starter kit's profile page silently
     * cost you passkeys, devices and two-factor.
     *
     * IT IS ALSO THE CONTROL FOR THE `assertFalse`S ABOVE, and that is not a
     * secondary role. A test asserting a route name is ABSENT passes just as
     * happily when the name was never spelled right - which is exactly what
     * happened while writing this file: the root-mounted panel names its routes
     * `panel.*`, not `admin.*` after its id, so three `assertFalse` calls were
     * green against a prefix that does not exist in this installation at all.
     *
     * This assertion is what failed and said so. Keep a positive check on the
     * same prefix next to any negative one, or the negative proves nothing.
     */
    public function test_an_unclaimed_sibling_still_mounts(): void
    {
        $this->assertTrue(
            Route::has('panel.settings.security'),
            'Claiming settings/profile also suppressed settings/security, which the application never declared.'
        );
    }

    /**
     * THE CHECK IS ON THE FULL PATH, WHICH IS WHY A SECOND PORTAL IS UNAFFECTED.
     *
     * The `second` panel mounts at `/second`, so its profile URL is
     * `second/settings/profile` - a different URI, still unclaimed, still
     * registered. Had `unclaimed()` compared only the trailing segment, one
     * application route at the root would have silently stripped the profile
     * screen out of every other portal in the installation.
     */
    public function test_another_portal_keeps_the_screen_at_its_own_prefix(): void
    {
        $this->assertTrue(
            Route::has('second.settings.profile'),
            'A route claimed at the root suppressed the same screen inside a portal mounted elsewhere.'
        );
    }

    /** The URL still answers - yielding is about ownership, not about a hole. */
    public function test_the_url_still_serves_the_applications_screen(): void
    {
        $this->assertSame(
            'the application\'s own profile screen',
            $this->get('/settings/profile')->getContent()
        );
    }
}
