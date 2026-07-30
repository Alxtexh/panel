<?php

namespace Tests;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Laravel\Fortify\Features;
use PanelKit\Panel\PanelManager;

abstract class TestCase extends BaseTestCase
{
    /**
     * THE SUITE DOES NOT NEED A COMPILED BUNDLE.
     *
     * Without this, 271 tests failed on a fresh clone with "Vite manifest not
     * found at public/build/manifest.json" - because the Blade shell calls
     * `@vite`, and every test that renders a page therefore required
     * `npm run build` to have been run first. The failure is unhelpful in the
     * specific way that costs time: it names a missing file rather than saying
     * "build the front end", and it fires on tests that have nothing to do with
     * assets.
     *
     * IT ALSO COUPLED THE TWO HALVES FOR NO BENEFIT. A backend test asserting a
     * policy or a tenant scope has no opinion about a hashed asset filename, and
     * making it wait for Rollup makes the suite slower and the CI graph
     * needlessly sequential. Nothing here asserts on asset tags; the client half
     * is verified by building it.
     *
     * Found by cloning this repository and running the suite the way CI does.
     */
    protected function setUp(): void
    {
        parent::setUp();

        $this->withoutVite();

        /*
         * A NEW TEST IS A NEW INSTALLATION, as far as process-level memos are
         * concerned. `RefreshDatabase` drops and recreates the schema between
         * tests inside ONE php process, so a memo answering "does this table
         * exist" from a previous test is stale in exactly the way that
         * produces a confusing failure - a table the current test migrated
         * reported absent, or vice versa. This is the same call the Octane
         * flush listener makes, for the same reason.
         */
        PanelManager::flushMemoization();
    }

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
