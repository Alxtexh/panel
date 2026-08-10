<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\SuperadminUser;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

/**
 * THE SUPERADMIN PORTAL IS ITS OWN BUILDING, WITH ITS OWN DOOR.
 *
 * WHAT WENT WRONG, AND HOW IT LOOKED. The portal was created on the `web`
 * guard with no sign-in of its own, and nothing failed - which is why it took
 * opening the URL to notice. Laravel sends a guest to the route named `login`,
 * this panel registered none, so `/superadmin` redirected to the DEMO TENANT'S
 * sign-in form. Signing in there signed you in here. "Superadmin" was a URL
 * prefix over the same session, the same account and the same brand, and the
 * portal that can read every tenant's tickets was reachable by every tenant
 * operator's password.
 *
 * THE FIX IS THREE DECLARATIONS ON THE PANEL - `guard()`, `authMiddleware()`
 * and `login()` - which is the shape Filament settled on and, having now been
 * wrong once here, clearly the right one: a portal that cannot state its own
 * front door does not have one.
 *
 * BOTH DIRECTIONS, ALWAYS. It is not enough that an operator cannot reach the
 * superadmin portal, because a single shared session would satisfy that check
 * and fail the reverse. So this asserts the operator is a guest here AND the
 * superadmin is a guest there.
 */
final class SuperadminPanelIsolationTest extends TestCase
{
    use RefreshDatabase;

    private function superadmin(): SuperadminUser
    {
        return SuperadminUser::create([
            'name' => 'Root',
            'email' => 'root@panel.test',
            'password' => Hash::make('the-real-password'),
        ]);
    }

    private function operator(): User
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        return User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /**
     * THE ONE THAT WOULD HAVE CAUGHT IT. A guest lands on the superadmin
     * portal's own form, not the application's.
     */
    public function test_a_guest_is_sent_to_the_superadmin_sign_in_not_the_shared_one(): void
    {
        $this->get('/superadmin')->assertRedirect('/superadmin/login');
    }

    public function test_the_superadmin_sign_in_screen_renders_and_is_its_own_screen(): void
    {
        $this->get('/superadmin/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('panel/auth/Login')
                // Posting back to its own path is what keeps the attempt on
                // the `superadmins` guard - a form that posted to `/login`
                // would authenticate against `web` from a superadmin URL.
                ->where('action', '/superadmin/login')
                ->where('heading', 'Superadmin')
                /*
                 * NO RESET LINK. Superadmin accounts are provisioned, and the
                 * portal declares `passwordReset(false)` - a link here would
                 * be a mail path into the most privileged table there is.
                 */
                ->where('forgotUrl', null));
    }

    public function test_a_superadmin_can_sign_in_and_open_the_portal(): void
    {
        $this->post('/superadmin/login', [
            'email' => $this->superadmin()->email,
            'password' => 'the-real-password',
        ])->assertRedirect('/superadmin');

        $this->assertAuthenticatedAs(SuperadminUser::first(), 'superadmins');

        $this->get('/superadmin')->assertOk();
    }

    /**
     * SIGNING IN HERE LANDS HERE, EVEN AFTER BOUNCING OFF ANOTHER PORTAL.
     *
     * THE ASSERTION THAT WAS MISSING, AND THE BUG IT LET THROUGH. The test
     * above used to say only `assertRedirect()` - that A redirect happened,
     * not WHERE to - which is the same weak shape that let the shared login
     * page sit unnoticed. What it missed: `url.intended` is ONE session key
     * shared by every panel. Laravel writes it whenever a guest is turned away
     * from a guarded page, so opening `/platform`, getting bounced, then
     * signing in at `/superadmin/login` popped `/platform` and dropped a
     * superadmin into the OPERATOR portal - on a guard they hold no session
     * for, so it bounced them straight back out again.
     *
     * It reads as "the separation is a mess" and the separation was correct:
     * the guards, the tables and the sessions were all right, and one shared
     * session key sent you to the wrong building anyway.
     */
    public function test_an_intended_url_from_another_portal_is_not_honoured(): void
    {
        // Turned away from an operator screen first - this is what writes the
        // intended URL that used to hijack the next sign-in.
        $this->get('/platform')->assertRedirect();

        $this->post('/superadmin/login', [
            'email' => $this->superadmin()->email,
            'password' => 'the-real-password',
        ])->assertRedirect('/superadmin');
    }

    /** An intended URL that DOES belong here is still honoured. */
    public function test_an_intended_url_inside_this_portal_is_kept(): void
    {
        $this->get('/superadmin/content-entries')->assertRedirect('/superadmin/login');

        $this->post('/superadmin/login', [
            'email' => $this->superadmin()->email,
            'password' => 'the-real-password',
        ])->assertRedirect('/superadmin/content-entries');
    }

    /**
     * AN OPERATOR'S SESSION IS WORTH NOTHING HERE, which is the property the
     * separate guard exists for. Before the split this request was a 200.
     */
    public function test_an_operator_signed_in_on_web_is_a_guest_to_the_superadmin_portal(): void
    {
        $this->actingAs($this->operator())
            ->get('/superadmin')
            ->assertRedirect('/superadmin/login');
    }

    /**
     * And the reverse, which a single shared session would fail.
     *
     * `/platform` RATHER THAN `/`, because the demo's operator panel is
     * mounted at the root and the root itself is the public landing page - so
     * `/` proves nothing about a guard. `/platform` is guarded, runs on `web`,
     * and is exactly the kind of screen this account must not reach.
     */
    public function test_a_superadmin_is_a_guest_to_a_panel_on_the_web_guard(): void
    {
        $response = $this->actingAs($this->superadmin(), 'superadmins')->get('/platform');

        $this->assertTrue(
            $response->isRedirect(),
            'A superadmin holds no session on `web`, so an operator screen must not answer them.',
        );

        $this->assertStringNotContainsString(
            '/superadmin',
            (string) $response->headers->get('Location'),
            'That panel must send them to ITS sign-in, not bounce them back to the one they hold.',
        );
    }

    /**
     * THE OPERATORS' PASSWORD IS NOT THE SUPERADMIN PASSWORD, because the
     * lookup is against a different table entirely. A `users` row with a known
     * password must not open this door even at the right URL.
     */
    public function test_an_operator_account_cannot_sign_in_at_the_superadmin_door(): void
    {
        $operator = $this->operator();

        $this->post('/superadmin/login', [
            'email' => $operator->email,
            'password' => 'password',
        ])->assertSessionHasErrors();

        $this->assertGuest('superadmins');
    }
}
