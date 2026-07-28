<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Contracts\Auth\Authenticatable;
use Laravel\Fortify\Features;

abstract class TestCase extends BaseTestCase
{
    /**
     * Sign in, starting a fresh session when the ORGANISATION changes.
     *
     * WHY THIS OVERRIDE EXISTS. `ScopeSessionToTenant` refuses a session stamped
     * with one tenant when the request resolves to another - the defence that
     * survives somebody widening `SESSION_DOMAIN` to share a cookie across
     * subdomains. It is doing its job, and it broke five tests that sign in as
     * user A, then as user B, inside one test method.
     *
     * Those tests are not wrong; the test harness is unlike a browser. Two
     * tenants live on two hostnames, so a browser has two cookie jars and could
     * not present A's session to B's host if it tried. A single PHPUnit session
     * carried across both is a situation with no real-world counterpart.
     *
     * So the session is flushed when, and only when, the tenant changes. Doing
     * it on every `actingAs` would silently discard session state a test had
     * deliberately arranged beforehand.
     */
    public function actingAs(Authenticatable $user, $guard = null): static
    {
        $incoming = $user->getAttribute('tenant_id');

        if ($incoming !== null && $this->actingTenantId !== null && $incoming !== $this->actingTenantId) {
            $this->flushSession();
        }

        if ($incoming !== null) {
            $this->actingTenantId = $incoming;
        }

        return parent::actingAs($user, $guard);
    }

    /** The tenant of the last user signed in, for the comparison above. */
    private int|string|null $actingTenantId = null;

    protected function skipUnlessFortifyHas(string $feature, ?string $message = null): void
    {
        if (! Features::enabled($feature)) {
            $this->markTestSkipped($message ?? "Fortify feature [{$feature}] is not enabled.");
        }
    }
}
