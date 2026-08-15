<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use App\Panel\KitDemo;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * The Kit demo screens render and place themselves in the sidebar.
 */
final class KitShowcasePagesTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->admin = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    public function test_catalog_page_renders_product_and_unit_grids(): void
    {
        $this->actingAs($this->admin)
            ->get('/kit-catalog')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('KitCatalog')
                ->has('products', count(KitDemo::products()))
                ->has('units', count(KitDemo::units()))
                ->where('products.0.status', 'in-stock')
                ->where('products.0.sku', 'SKU-1041')
                ->where('units.0.status', 'occupied')
                ->where('units.0.facts.0', '2 bed'));
    }

    public function test_catalog_item_page_renders_a_product(): void
    {
        $this->actingAs($this->admin)
            ->get('/kit-catalog/sku-blend')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('KitCatalogItem')
                ->where('item.key', 'sku-blend')
                ->where('item.label', 'House espresso')
                ->where('catalogHref', '/kit-catalog'));
    }

    public function test_catalog_item_page_renders_a_unit(): void
    {
        $this->actingAs($this->admin)
            ->get('/kit-catalog/unit-riverside')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('KitCatalogItem')
                ->where('item.key', 'unit-riverside')
                ->where('item.kind', 'unit'));
    }

    public function test_unknown_catalog_item_is_not_found(): void
    {
        $this->actingAs($this->admin)
            ->get('/kit-catalog/missing-item')
            ->assertNotFound();
    }

    public function test_till_page_renders_lines_statuses_and_chart_widgets(): void
    {
        $this->actingAs($this->admin)
            ->get('/kit-till')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('KitTill')
                ->has('products', count(KitDemo::products()))
                ->has('lines', 5)
                ->has('statuses')
                ->has('headerCharts', 2)
                ->where('headerCharts.0.type', 'catalog')
                ->where('headerCharts.1.type', 'items'));
    }

    public function test_kit_pages_appear_under_the_kit_group(): void
    {
        $pages = $this->actingAs($this->admin)->get('/dashboard')->assertOk()
            ->viewData('page')['props']['panelPages'];

        $byHref = collect($pages)->keyBy('href');

        $this->assertSame('Catalog', $byHref['/kit-catalog']['title'] ?? null);
        $this->assertSame('Kit', $byHref['/kit-catalog']['group'] ?? null);
        $this->assertSame('Till', $byHref['/kit-till']['title'] ?? null);
        $this->assertSame('Kit', $byHref['/kit-till']['group'] ?? null);
        $this->assertArrayNotHasKey('/kit-payments', $byHref);
        $this->assertSame('Leases', $byHref['/kit-leases']['title'] ?? null);
        $this->assertSame('Signatures', $byHref['/kit-documents']['title'] ?? null);
        $this->assertSame('Subscription plans', $byHref['/settings/plans']['title'] ?? null);
        $this->assertSame('Kit', $byHref['/settings/plans']['group'] ?? null);
        $this->assertArrayNotHasKey('/administration', $byHref);
    }

    public function test_administration_directory_lists_real_routes(): void
    {
        $this->actingAs($this->admin)
            ->get('/administration')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Administration')
                ->has('sections', 5)
                ->where('sections.0.key', 'people')
                ->where('sections.0.links.0.href', '/clients')
                ->where('sections.1.key', 'network')
                ->where('sections.4.key', 'reports')
                ->where('sections.4.links.0.href', '/dashboard'));
    }

    public function test_payments_settings_renders_gateway_cards(): void
    {
        $this->actingAs($this->admin)
            ->get('/settings/payments')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('settings/Payments')
                ->has('gateways', 8)
                ->where('gateways.0.key', 'mpesa')
                ->where('gateways.0.connected', true)
                ->where('gateways.3.connected', false));
    }

    public function test_kit_payments_url_still_routes(): void
    {
        $this->actingAs($this->admin)
            ->get('/kit-payments')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('KitPayments')
                ->where('redirectTo', '/settings/payments'));
    }

    public function test_leases_page_renders_rows_and_cards(): void
    {
        $this->actingAs($this->admin)
            ->get('/kit-leases')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('KitLeases')
                ->has('leases', 6)
                ->has('cards', 6)
                ->where('leases.0.tenant', 'Amina Otieno')
                ->where('leases.0.status', 'active')
                ->where('leases.1.status', 'ending')
                ->where('leases.3.status', 'overdue')
                ->where('cards.0.facts.1', 'Deposit KES 170,000'));
    }

    public function test_subscription_plans_page_renders_fake_catalogue(): void
    {
        $this->actingAs($this->admin)
            ->get('/settings/plans')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('KitPlans')
                ->has('plans', 3)
                ->where('plans.0.name', 'Starter')
                ->where('plans.1.name', 'Pro')
                ->where('plans.2.name', 'Enterprise')
                ->where('plans.1.perks.credits.value', -1)
                ->has('modules', 5)
                ->where('modules.0.key', 'devices')
                ->where('mode', 'index'));
    }

    public function test_subscription_plan_editor_opens_for_a_fake_plan(): void
    {
        $this->actingAs($this->admin)
            ->get('/settings/plans?plan=pro')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('KitPlans')
                ->where('mode', 'edit')
                ->where('editing.id', 'pro')
                ->where('editing.recommended', true));
    }
    public function test_documents_page_renders_invoice_and_contract_samples(): void
    {
        $this->actingAs($this->admin)
            ->get('/kit-documents')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('KitDocuments')
                ->where('invoice.kindLabel', 'Invoice')
                ->where('contract.kindLabel', 'Lease')
                ->where('invoice.blocks.0.reference', 'INV-1048'));
    }
}
