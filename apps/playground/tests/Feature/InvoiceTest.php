<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Plan;
use App\Demo\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * A printable invoice for one subscriber.
 *
 * THE ARITHMETIC IS THE TEST. A layout can be looked at; a total cannot - a
 * rounding error is invisible until somebody adds the column up by hand, and by
 * then the document has been sent. Money is integer cents the whole way through
 * for exactly this reason: a float total is wrong by a fraction of a cent per
 * line and visibly wrong by the twentieth.
 */
final class InvoiceTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    private Plan $plan;

    private Router $router;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => '5Mbps Home',
            'speed_mbps' => 5,
            'price_cents' => 500000,
        ]);

        $this->router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Router',
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $this->actingAs($this->user);
    }

    public function test_the_invoice_totals_are_computed_in_integer_cents(): void
    {
        $client = $this->makeClient();

        $invoice = $this->get("/clients/{$client->id}/invoice")
            ->assertOk()
            ->viewData('page')['props']['invoice'];

        $this->assertSame(500000, $invoice['subtotalCents']);
        // 16% of 500000 = 80000, exactly. Asserted as an integer so a float
        // creeping in shows up as a type failure rather than as 79999.99.
        $this->assertSame(80000, $invoice['taxCents']);
        $this->assertSame(580000, $invoice['totalCents']);
        $this->assertIsInt($invoice['totalCents']);
    }

    /** The total is the sum of its parts, whatever the parts are. */
    public function test_the_total_is_the_subtotal_plus_the_tax(): void
    {
        $client = $this->makeClient();

        $invoice = $this->get("/clients/{$client->id}/invoice")->viewData('page')['props']['invoice'];

        $this->assertSame(
            $invoice['subtotalCents'] + $invoice['taxCents'],
            $invoice['totalCents'],
        );
    }

    /**
     * ROUNDING HAPPENS ONCE, on the tax, and it rounds rather than truncating.
     * A price that does not divide evenly is the normal case, not the edge one.
     */
    public function test_tax_on_an_awkward_price_rounds_rather_than_truncating(): void
    {
        $this->plan->forceFill(['price_cents' => 999])->save();

        $client = $this->makeClient();

        $invoice = $this->get("/clients/{$client->id}/invoice")->viewData('page')['props']['invoice'];

        // 16% of 999 = 159.84 → 160, not 159.
        $this->assertSame(160, $invoice['taxCents']);
    }

    /** A subscriber with no plan produces an empty invoice, not an error. */
    public function test_a_client_with_no_plan_has_no_lines(): void
    {
        $client = $this->makeClient(withPlan: false);

        $invoice = $this->get("/clients/{$client->id}/invoice")
            ->assertOk()
            ->viewData('page')['props']['invoice'];

        $this->assertSame([], $invoice['lines']);
        $this->assertSame(0, $invoice['totalCents']);
    }

    /** Another organisation's subscriber is not found rather than forbidden. */
    public function test_another_tenants_invoice_is_not_reachable(): void
    {
        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $foreignPlan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $other->id,
            'name' => 'Theirs',
            'speed_mbps' => 5,
            'price_cents' => 1000,
        ]);

        $unique = uniqid('f', true);

        $foreign = Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $other->id,
            'plan_id' => $foreignPlan->id,
            'router_id' => null,
            'name' => 'Theirs',
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);

        $this->get("/clients/{$foreign->id}/invoice")->assertNotFound();
    }

    public function test_a_guest_cannot_read_an_invoice(): void
    {
        $client = $this->makeClient();

        auth()->logout();

        $this->get("/clients/{$client->id}/invoice")->assertRedirect('/login');
    }

    private function makeClient(bool $withPlan = true): Client
    {
        $unique = uniqid('c', true);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'plan_id' => $withPlan ? $this->plan->id : null,
            'router_id' => $this->router->id,
            'name' => 'Amina Achieng',
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);
    }
}
