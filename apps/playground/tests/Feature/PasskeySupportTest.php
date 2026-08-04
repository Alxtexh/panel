<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Fortify\Features;
use PanelKit\Panel\Auth\Passkeys;
use Tests\TestCase;

/**
 * Passkeys, moved into the package rather than built there.
 *
 * NOTHING WAS BROKEN. The reference app has had working passkeys for a long
 * time - Fortify's WebAuthn, the `passkeys` relation, an enrolment component.
 * The fault was only ever WHERE it lived: a fresh `composer require
 * panelkit/panel` produced a panel with no passkey support and nothing to
 * suggest that adding it was a solved problem rather than a project.
 *
 * SO THE TESTS ARE ABOUT THE SEAM, not about WebAuthn. Fortify's own suite
 * covers challenges and attestation; what is asserted here is that the package
 * answers honestly with Fortify present, with it absent, and for a user model
 * that predates the contract - because that soft dependency is the whole reason
 * this can ship without forcing an auth stack on anybody.
 */
final class PasskeySupportTest extends TestCase
{
    use RefreshDatabase;

    /** With Fortify installed and the feature on, the panel offers it. */
    public function test_it_is_available_when_fortify_can_manage_passkeys(): void
    {
        $this->assertTrue(Features::canManagePasskeys(), 'Fixture assumption: the reference app enables passkeys.');

        $this->assertTrue(Passkeys::available());
        $this->assertTrue(Passkeys::available(User::factory()->create()));
    }

    /**
     * TURNED OFF IS NOT THE SAME AS ABSENT, and both must read as unavailable.
     *
     * Fortify can be installed with the feature disabled. A panel that checked
     * only `class_exists` would draw an enrolment button that registers nothing
     * - worse than no button, because the failure arrives after somebody has
     * committed to a browser dialog.
     */
    public function test_it_is_unavailable_when_the_feature_is_switched_off(): void
    {
        config(['fortify.features' => []]);

        $this->assertFalse(Passkeys::available());
        $this->assertSame([], Passkeys::forUser(User::factory()->create()));
    }

    /** A guest has none, and asking must not throw. */
    public function test_a_guest_has_no_passkeys(): void
    {
        $this->assertSame([], Passkeys::forUser(null));
    }

    /**
     * THE SERIALISED SHAPE IS THE PACKAGE'S, so every panel showing passkeys
     * shows the same fields under the same names.
     *
     * `lastUsed` is the operationally interesting one: a key nobody has used in
     * a year is the one to question, and a raw timestamp makes that a
     * calculation the reader has to perform.
     */
    public function test_the_serialised_shape_is_stable(): void
    {
        $user = User::factory()->create();

        // The columns are Fortify's, not the panel's - `credential` holds the
        // serialised public key and is not nullable.
        $user->passkeys()->create([
            'name' => 'MacBook',
            'credential_id' => 'cred-1',
            'credential' => 'stub',
        ]);

        $keys = Passkeys::forUser($user->fresh());

        $this->assertCount(1, $keys);
        $this->assertSame(['id', 'name', 'authenticator', 'created', 'lastUsed'], array_keys($keys[0]));
        $this->assertSame('MacBook', $keys[0]['name']);
        $this->assertNull($keys[0]['lastUsed'], 'A passkey that has never been used should say so.');
    }

    /**
     * THE WELL-KNOWN DOCUMENT IS SERVED BY THE PACKAGE, once per installation.
     *
     * Password managers read `/.well-known/passkey-endpoints` to offer "add a
     * passkey to this site" from their own interface, so an installation without
     * it has passkeys that work only for somebody who already knows where the
     * screen is. The path is fixed by the spec, which is why it sits outside
     * every panel prefix.
     */
    public function test_the_well_known_document_is_served(): void
    {
        $body = $this->get('/.well-known/passkey-endpoints')->assertOk()->json();

        $this->assertArrayHasKey('enroll', $body);
        $this->assertArrayHasKey('manage', $body);
    }

    /**
     * THE SIGN-IN SCREEN OFFERS A PASSKEY, and this is the test that was missing.
     *
     * The screen moved into `@panelkit/panel/inertia`, where the button is driven by a
     * `passkeys` prop - and this application's Fortify login view never sent
     * one. The button disappeared from a page that had it, and nothing failed:
     * `/login` still returns 200, still renders, still signs people in. A screen
     * that is missing a way in is exactly the kind of regression no status code
     * can catch.
     *
     * ASSERTED ON THE PROP RATHER THAN THE MARKUP, because the markup is the
     * package's and this is the seam between the two.
     */
    public function test_the_sign_in_screen_is_given_the_passkey_routes(): void
    {
        $this->get('/login')->assertInertia(
            fn ($page) => $page->component('auth/Login')
                ->where('passkeys.options', route('passkey.login-options'))
                ->where('passkeys.verify', route('passkey.login')),
        );
    }

    /** And it answers empty rather than 404 when there is nothing to enrol. */
    public function test_the_well_known_document_is_empty_without_the_feature(): void
    {
        config(['fortify.features' => []]);

        $this->assertSame([], $this->get('/.well-known/passkey-endpoints')->assertOk()->json());
    }
}
