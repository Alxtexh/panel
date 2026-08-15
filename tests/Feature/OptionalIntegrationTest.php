<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\Passkeys;
use Alxtexh\Panel\Auth\SocialProviders;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * What the panel does when an OPTIONAL dependency is not installed.
 *
 * THIS IS THE CONFIGURATION A PLAIN `composer require` PRODUCES, and the one
 * the reference application cannot demonstrate: it has Fortify, so passkeys
 * and two-factor are always present over there, and every assertion exercises
 * the branch where the package IS installed. The absent branch - what almost
 * every consumer runs on day one - was reachable by nobody's tests.
 *
 * DEGRADING IS NOT THE SAME AS FAILING. A missing optional package must remove
 * a SECTION, not break the screen: `Passkeys::available()` answers false rather
 * than fataling on a class that is not there, and `signInRoutes()` returns null
 * rather than a URL to a route nothing registered - a button pointed at a
 * missing route is a 404 the person blames the panel for.
 *
 * IT ALSO EXPLAINS A "MISSING FEATURE" THAT IS NOT ONE. A fresh install shows
 * no passkey button and no social sign-in, and both are correct: the first
 * needs Fortify, the second needs credentials. Neither is a defect, and having
 * it asserted is what distinguishes "declined the dependency" from "broken".
 */
final class OptionalIntegrationTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    public function test_this_suite_runs_without_fortify(): void
    {
        $this->assertFalse(
            class_exists(\Laravel\Fortify\Features::class),
            'Fortify is installed, so the assertions below are testing the other branch.',
        );
    }

    /**
     * NO FORTIFY, NO PASSKEYS - answered rather than thrown.
     *
     * Referring to an absent class unconditionally turns a declined optional
     * dependency into a fatal error on every request.
     */
    public function test_passkeys_are_unavailable_without_fortify(): void
    {
        $this->assertFalse(Passkeys::available());
        $this->assertFalse(Passkeys::available($this->user));
    }

    /**
     * AND THE SIGN-IN SCREEN IS TOLD NOTHING RATHER THAN A DEAD URL.
     *
     * `null` is what removes the button. A URL to a route nothing registered
     * renders a control that 404s, which reads as the panel being broken.
     */
    public function test_the_sign_in_routes_are_null_without_the_package(): void
    {
        $this->assertNull(Passkeys::signInRoutes());
    }

    public function test_a_user_has_no_passkeys_when_the_package_is_absent(): void
    {
        $this->assertSame([], Passkeys::forUser($this->user));
        $this->assertSame([], Passkeys::forUser(null));
    }

    /**
     * NO TABLE IS THE SAME AS NO KEYS, and must not throw.
     *
     * `laravel/passkeys` can sit in vendor without its migration. Idle lock
     * still has to render; password unlock is enough.
     */
    public function test_a_missing_passkeys_table_is_an_empty_list(): void
    {
        $this->assertFalse(Passkeys::tableExists());
        $this->assertSame([], Passkeys::forUser($this->user));
    }

    public function test_a_present_passkeys_table_is_detected_without_querying_rows(): void
    {
        \Illuminate\Support\Facades\Schema::create('passkeys', function (\Illuminate\Database\Schema\Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('name');
            $table->timestamps();
        });

        $this->assertTrue(Passkeys::tableExists());
        $this->assertSame([], Passkeys::forUser($this->user));

        \Illuminate\Support\Facades\Schema::drop('passkeys');

        $this->assertFalse(Passkeys::tableExists());
    }

    /**
     * THE DISCOVERY DOCUMENT ANSWERS EMPTY RATHER THAN 404.
     *
     * A password manager looks for `/.well-known/passkey-endpoints`. A 404
     * tells it the site is broken; an empty document tells it there is nothing
     * here to enrol, which is the true answer.
     */
    public function test_the_well_known_document_is_served_and_empty(): void
    {
        $this->getJson('/.well-known/passkey-endpoints')
            ->assertOk()
            ->assertExactJson([]);
    }

    /**
     * NO CREDENTIALS, NO PROVIDER - which is why a fresh install shows no
     * social buttons. Configuration decides this, not code.
     */
    public function test_no_social_provider_is_enabled_without_credentials(): void
    {
        $this->assertSame([], SocialProviders::enabled());
        $this->assertFalse(SocialProviders::isEnabled('google'));
    }

    public function test_a_provider_appears_once_both_credentials_are_configured(): void
    {
        config([
            'services.google.client_id' => 'an-id',
            'services.google.client_secret' => 'a-secret',
        ]);

        $this->assertArrayHasKey('google', SocialProviders::enabled());
        $this->assertTrue(SocialProviders::isEnabled('google'));
    }

    /**
     * HALF-CONFIGURED IS NOT CONFIGURED.
     *
     * An id with no secret is a button that starts an OAuth flow and fails at
     * the callback - worse than no button, because it looks like the feature
     * works until somebody clicks it.
     */
    public function test_a_provider_with_only_one_credential_stays_disabled(): void
    {
        config([
            'services.google.client_id' => 'an-id',
            'services.google.client_secret' => null,
        ]);

        $this->assertFalse(
            SocialProviders::isEnabled('google'),
            'A half-configured provider was offered, so its button fails at the callback.',
        );
    }

    public function test_an_unknown_provider_is_never_enabled(): void
    {
        $this->assertFalse(SocialProviders::isEnabled('not-a-provider'));
    }
}
