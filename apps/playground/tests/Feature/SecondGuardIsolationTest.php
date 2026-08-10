<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Customer;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Alxtexh\Panel\PanelManager;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\TestCase;

/**
 * TWO PANELS, TWO GUARDS, TWO USER MODELS - AND NEITHER SIDE CAN REACH THE
 * OTHER.
 *
 * WHY THIS EXISTS. `Panel::guard()` has been wired since multi-panel shipped:
 * the login attempt reads it, the logout reads it, social login reads it, the
 * props shared with Inertia read it, the blueprint prints it. And every panel
 * in this application ran on `web`, and so did every test in the suite. The
 * option was supported by design and unexercised by anything - which is the
 * precise shape of every defect this codebase has found this year. A seam with
 * nothing behind it has been looked at once, by the person who wrote it.
 *
 * It matters more here than elsewhere because of what it would mean if it were
 * wrong. A customer portal on a second guard is the ordinary way to let the
 * people who BUY the service log in. If the guards do not actually separate,
 * the failure is not a broken screen: it is a customer holding an operator's
 * session, on a panel that lists every other customer.
 *
 * WHAT IS ASSERTED, AND IN BOTH DIRECTIONS. It is not enough that a customer
 * cannot reach an operator screen - the reverse matters too, because a single
 * shared session would satisfy the first check and fail the second. So:
 *
 *   - a customer signs in and reaches the client panel
 *   - the SAME customer is a guest to the admin panel
 *   - an operator signed in on `web` is a guest to the client panel
 *   - signing out of one leaves the other signed in
 *
 * WHAT THIS DOES NOT COVER: whether a customer may see another customer's
 * records inside the client panel. That is ownership, answered by policies and
 * the tenant scope, and `TenantIsolationTest` and the generated
 * `ClientPanelIsolationTest` own it. This file is only about the guards.
 */
final class SecondGuardIsolationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Lakeside', 'slug' => 'lakeside-guards']);

        Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'name' => 'Home 20',
            'speed_mbps' => 20,
            'price_cents' => 250_000,
            'position' => 1,
            'is_active' => true,
        ]);
    }

    private function customer(): Customer
    {
        return Customer::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Grace Wanjiru',
            'email' => 'grace@example.test',
            'password' => 'password',
        ]);
    }

    private function operator(): User
    {
        $user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($this->tenant->id);

        try {
            $user->assignRole(Role::findOrCreate('Administrator', 'web'));
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }

        return $user;
    }

    /**
     * THE PANEL IS ACTUALLY MOUNTED ON THE SECOND GUARD.
     *
     * First, because everything below is meaningless if the panel silently fell
     * back to `web` - every isolation assertion would then be testing that an
     * unrelated URL 404s.
     */
    public function test_the_client_panel_runs_on_its_own_guard(): void
    {
        $panel = app(PanelManager::class)->panel('client');

        $this->assertNotNull($panel, 'The client panel is not registered at all.');
        $this->assertSame('customers', $panel->getGuard());
        $this->assertSame('client', $panel->getPath());
        $this->assertNotSame(
            $panel->getGuard(),
            app(PanelManager::class)->panel('admin')?->getGuard(),
            'Both panels resolved to the same guard, so nothing below proves separation.',
        );
    }

    /** A customer signs in with the panel's own endpoint and lands inside. */
    public function test_a_customer_can_sign_in_to_the_client_panel(): void
    {
        $customer = $this->customer();

        $this->post('/client/login', [
            'email' => 'grace@example.test',
            'password' => 'password',
        ])->assertRedirect();

        $this->assertTrue(
            Auth::guard('customers')->check(),
            'The customer guard holds nobody after a successful sign-in.',
        );

        $this->assertSame($customer->getKey(), Auth::guard('customers')->id());

        // AND THE WEB GUARD IS UNTOUCHED. If signing in here also populated
        // `web`, a customer would be an operator and every check below would
        // pass for the wrong reason.
        $this->assertFalse(Auth::guard('web')->check(), 'Signing in as a customer also signed in an operator.');
    }

    /**
     * THE CENTRAL ASSERTION. A signed-in customer is a GUEST to the operator
     * panel.
     *
     * Not "sees fewer rows" - a guest. The admin panel authenticates on `web`,
     * and a customers-guard session is nothing to it.
     */
    public function test_a_signed_in_customer_is_a_guest_to_the_admin_panel(): void
    {
        $this->actingAs($this->customer(), 'customers');

        $response = $this->get('/clients');

        $this->assertTrue(
            $response->isRedirect() || $response->status() === 403,
            "A customer reached an operator screen: HTTP {$response->status()}.",
        );

        $this->assertFalse(Auth::guard('web')->check());
    }

    /**
     * AND THE REVERSE, which is the half a single shared session would pass
     * while failing the other.
     */
    public function test_an_operator_is_a_guest_to_the_client_panel(): void
    {
        $this->actingAs($this->operator(), 'web');

        $response = $this->get('/client/client-plans');

        $this->assertTrue(
            $response->isRedirect() || $response->status() === 403,
            "An operator reached the customer portal on their web session: HTTP {$response->status()}.",
        );
    }

    /** A customer holding a session reaches their own panel. */
    public function test_a_customer_reaches_their_own_panel(): void
    {
        $this->actingAs($this->customer(), 'customers');

        $this->get('/client/client-plans')->assertOk();
    }

    /**
     * SIGNING OUT OF ONE DOES NOT SIGN OUT OF THE OTHER.
     *
     * Sessions are keyed per guard, and a logout that flushed the whole session
     * would sign an operator out of the admin panel every time a customer left
     * the portal in another tab - or, worse, leave the customer signed in after
     * they thought they had left.
     */
    public function test_signing_out_of_one_guard_leaves_the_other_signed_in(): void
    {
        $this->customer();

        /*
         * SIGNED IN THROUGH THE ENDPOINT, NOT `actingAs`, AND THE DIFFERENCE
         * MATTERS HERE.
         *
         * `actingAs` installs a user RESOLVER on the guard rather than putting
         * anything in the session. A real `logout()` clears the session and the
         * resolver survives it, so the guard keeps reporting the acting user
         * and this test failed while the code was correct. Written the first
         * way, it reported a logout bug that did not exist.
         *
         * Everywhere else in this file `actingAs` is right - those tests ask
         * what a signed-in principal can REACH, and never observe a state
         * change in the guard itself.
         */
        $this->post('/client/login', ['email' => 'grace@example.test', 'password' => 'password']);

        $this->actingAs($this->operator(), 'web');

        $this->assertTrue(Auth::guard('web')->check());
        $this->assertTrue(Auth::guard('customers')->check());

        $this->post('/client/logout');

        $this->assertFalse(Auth::guard('customers')->check(), 'The customer is still signed in after logging out.');
        $this->assertTrue(Auth::guard('web')->check(), 'Logging out of the portal also signed the operator out.');
    }

    /**
     * READ-ONLY MEANS READ-ONLY. A customer may list the catalogue and may not
     * write to it.
     *
     * `PlanPolicy` had to be widened so a customer could read at all - one
     * policy serves both panels, because Laravel resolves a policy by MODEL and
     * both panels expose `Plan`. Widening a policy is exactly where a hole gets
     * opened, so the refusal is pinned here beside the permission.
     */
    public function test_a_customer_cannot_write_to_the_catalogue_they_can_read(): void
    {
        $this->actingAs($this->customer(), 'customers');

        $response = $this->post('/client/client-plans', [
            'name' => 'Invented By A Customer',
            'speed_mbps' => 999,
            'price_cents' => 1,
            'position' => 99,
        ]);

        $this->assertTrue(
            $response->isRedirect() || $response->status() >= 400,
            "A customer created a plan: HTTP {$response->status()}.",
        );

        $this->assertDatabaseMissing('plans', ['name' => 'Invented By A Customer']);
    }

    /**
     * AND A CUSTOMER CANNOT READ ANOTHER TENANT'S CATALOGUE BY ID.
     *
     * The other half of widening the policy: `view()` skips the ability check
     * for a customer, so the tenant check is the only thing left standing
     * between them and somebody else's data.
     */
    public function test_a_customer_cannot_read_another_tenants_plan(): void
    {
        $other = Tenant::create(['name' => 'Rival', 'slug' => 'rival-guards']);

        $theirs = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $other->id,
            'name' => 'Rival Plan',
            'speed_mbps' => 50,
            'price_cents' => 500_000,
            'position' => 1,
            'is_active' => true,
        ]);

        $this->actingAs($this->customer(), 'customers');

        $response = $this->get('/client/client-plans/'.$theirs->getKey());

        $this->assertNotSame(200, $response->status(), 'A customer read a rival tenant\'s plan.');
        $response->assertDontSee('Rival Plan');
    }

    /**
     * A CUSTOMER HOLDS NO OPERATOR PERMISSIONS, and cannot be given any.
     *
     * The model has no role system at all - deliberately. This pins that, so
     * adding `HasRoles` to `Customer` later fails here and the person doing it
     * has to argue for the path they are creating.
     */
    public function test_the_customer_model_carries_no_permission_system(): void
    {
        $customer = $this->customer();

        $this->assertFalse(method_exists($customer, 'assignRole'));
        $this->assertFalse(method_exists($customer, 'hasPermission'));
    }
}
