<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\TenantContext;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use RuntimeException;

/**
 * How the panel decides which organisation a request belongs to.
 *
 * TESTED WITH `stancl/tenancy` ABSENT, which is the configuration almost every
 * consumer runs and the one the reference application cannot demonstrate: it
 * has stancl installed, so every assertion over there exercises the branch
 * where the package IS present. The fallback path - the one a plain
 * `composer require` produces - was reachable by nobody's tests.
 *
 * NULL IS A DENY SIGNAL, NEVER "ALL TENANTS", and that is the property the
 * whole isolation story rests on. A resolver that returned null meaning
 * "unscoped" would open every table to any context that failed to establish a
 * tenant - a console command, a queued job, a request that hit an unexpected
 * route. Failing closed makes those cases show nothing, which is noticed;
 * failing open makes them show everything, which is not.
 */
final class TenantContextTest extends TestCase
{
    use RefreshDatabase;

    private function context(): TenantContext
    {
        return app(TenantContext::class);
    }

    public function test_an_unknown_mode_is_refused_loudly(): void
    {
        config(['panel.tenancy.mode' => 'sideways']);

        $this->expectException(RuntimeException::class);

        $this->context()->mode();
    }

    /**
     * COLUMN MODE SCOPES BY COLUMN; DATABASE MODE MUST NOT.
     *
     * In database mode the connection is already the isolation, so a package
     * adding `where tenant_id` on top would be constraining on a column that
     * need not exist - a query error on every list, rather than a leak. The
     * direction is safe and the assertion still matters, because the two modes
     * share every other code path.
     */
    public function test_only_column_mode_adds_the_column_constraint(): void
    {
        config(['panel.tenancy.mode' => 'column']);
        $this->assertTrue($this->context()->shouldScopeByColumn());

        $this->refreshApplication();

        config(['panel.tenancy.mode' => 'database']);
        $this->assertFalse($this->context()->shouldScopeByColumn());

        $this->refreshApplication();

        config(['panel.tenancy.mode' => 'none']);
        $this->assertFalse($this->context()->shouldScopeByColumn());
    }

    /**
     * WITH STANCL ABSENT, RESOLUTION FALLS BACK TO THE SIGNED-IN USER.
     *
     * `currentKey()` tries stancl first and the authenticated user second. The
     * container binding stancl would register is simply not there, so the
     * fallback is what every plain installation runs - and it has to work
     * without the package being installed at all, not merely without it being
     * initialised.
     */
    public function test_the_tenant_resolves_from_the_signed_in_user_when_stancl_is_absent(): void
    {
        $this->assertFalse(
            app()->bound('Stancl\Tenancy\Contracts\Tenant'),
            'This assertion is only meaningful while stancl is not installed.',
        );

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        $this->assertSame($tenant->id, $this->context()->currentKey());
    }

    public function test_no_signed_in_user_resolves_to_null_rather_than_everything(): void
    {
        $this->assertNull($this->context()->currentKey());
    }

    /**
     * A USER WITHOUT THE COLUMN RESOLVES NULL, not a guess.
     *
     * An application whose User does not carry a tenant column is not
     * "single-tenant, show everything" - it is unconfigured, and the panel
     * says so by denying rather than by inventing a key.
     */
    public function test_a_user_without_the_tenant_column_resolves_to_null(): void
    {
        config(['panel.tenancy.column' => 'organisation_id']);

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        $this->assertNull(
            $this->context()->currentKey(),
            'A tenant key was invented for a user carrying no such column.',
        );
    }

    /**
     * A CONFIGURED RESOLVER WINS, which is the seam an application uses when
     * its tenancy is neither of the two shipped shapes - a subdomain, a header,
     * a claim in a token.
     */
    public function test_a_configured_resolver_closure_takes_precedence(): void
    {
        config(['panel.tenancy.resolver' => static fn (): int => 4242]);

        $this->assertSame(4242, $this->context()->currentKey());
    }
}
