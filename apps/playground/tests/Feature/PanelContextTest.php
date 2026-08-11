<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Plan;
use App\Demo\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use App\Demo\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\SchemaCache;
use Alxtexh\Panel\Support\TenantContext;
use RuntimeException;
use Tests\TestCase;

/**
 * Whether tenancy applies, and how hard it is to switch off by accident.
 *
 * A super admin panel genuinely needs to query across every tenant - that is
 * the point of it - so tenant scoping has to become conditional. This file
 * exists because that change is the single most dangerous one in the project:
 * it converts "deny by default" into "deny unless a flag says otherwise", and
 * every bug in evaluating the flag is a cross-tenant leak that returns 200.
 *
 * So the tests are weighted accordingly. ONE case proves a central panel is
 * unscoped; SIX prove that everything else is scoped, including every way of
 * getting the question wrong.
 */
final class PanelContextTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    private User $me;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        $this->me = User::factory()->create([
            'tenant_id' => $this->mine->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->me);

        $this->makeClientFor($this->mine);
        $this->makeClientFor($this->theirs);
    }

    /* --------------------------------------------------- scoped by default */

    /**
     * NO PANELS REGISTERED AT ALL. The commonest state during a boot sequence
     * or a console command, and it must be the safe one.
     */
    public function test_with_no_panels_registered_the_scope_applies(): void
    {
        $this->assertFalse(app(TenantContext::class)->isCentralPanel());
        $this->assertSame(1, Client::query()->count(), 'Only my tenant\'s row.');
    }

    /** A tenant panel is scoped, which is the whole default. */
    public function test_a_tenant_panel_is_scoped(): void
    {
        $this->registerPanels();
        app(PanelManager::class)->usePanel('admin');

        $this->assertFalse(app(TenantContext::class)->isCentralPanel());
        $this->assertSame(1, Client::query()->count());
    }

    /**
     * A CENTRAL PANEL IS REGISTERED BUT NOT CURRENT. The dangerous near-miss:
     * the exemption exists in the process, and must not apply until a request
     * is actually being served by that panel.
     */
    public function test_registering_a_central_panel_does_not_by_itself_unscope_anything(): void
    {
        $this->registerPanels();

        $this->assertFalse(app(TenantContext::class)->isCentralPanel());
        $this->assertSame(1, Client::query()->count());
    }

    /** An unknown id throws rather than falling back to the default panel. */
    public function test_using_an_unknown_panel_throws(): void
    {
        $this->registerPanels();

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessageMatches('/Unknown panel/');

        app(PanelManager::class)->usePanel('typo');
    }

    /**
     * SWITCHING BACK RE-SCOPES. A long-running process - a queue worker, Octane
     * - may serve a central request and then a tenant one. The exemption must
     * not survive the switch.
     */
    public function test_moving_from_a_central_panel_back_to_a_tenant_panel_re_scopes(): void
    {
        $this->registerPanels();
        $manager = app(PanelManager::class);

        $manager->usePanel('platform');
        $this->assertSame(2, Client::query()->count(), 'Central sees both.');

        $manager->usePanel('admin');
        $this->assertSame(1, Client::query()->count(), 'And the exemption did not persist.');
    }

    /** The context defaults to tenant when a panel does not say otherwise. */
    public function test_a_panel_is_tenant_scoped_unless_it_declares_central(): void
    {
        $panel = Panel::make('quiet');

        $this->assertFalse($panel->isCentral());
        $this->assertSame(Panel::CONTEXT_TENANT, $panel->getContext());
    }

    /* ------------------------------------------------------- the exemption */

    /**
     * THE ONE CASE THAT IS ALLOWED THROUGH, and it takes two explicit steps to
     * reach: a panel declared central in application code, and that panel made
     * current by a route.
     */
    public function test_a_central_panel_sees_every_tenant(): void
    {
        $this->registerPanels();
        app(PanelManager::class)->usePanel('platform');

        $this->assertTrue(app(TenantContext::class)->isCentralPanel());
        $this->assertSame(2, Client::query()->count(), 'Both organisations.');
    }

    /* ------------------------------------------------ resources and panels */

    /** A resource belongs to the tenant admin unless it says otherwise. */
    public function test_a_resource_defaults_to_the_tenant_admin_panel(): void
    {
        $this->assertSame('admin', ClientResource::panel());
    }

    /**
     * Resources are partitioned by panel, so a central-panel resource is not
     * reachable from a tenant-panel route and vice versa.
     */
    public function test_resources_are_partitioned_by_panel(): void
    {
        $manager = app(PanelManager::class);

        $admin = $manager->resourcesFor('admin');
        $platform = $manager->resourcesFor('platform');

        $this->assertNotEmpty($admin);
        $this->assertSame([], array_intersect_key($admin, $platform));
    }

    /**
     * A schema cache key carries the panel, or two panels showing the same
     * resource would share one entry and whichever warmed it first would decide
     * what the other saw.
     */
    public function test_the_schema_cache_key_is_panel_scoped(): void
    {
        $cache = app(SchemaCache::class);

        $this->assertNotSame(
            $cache->key('admin', 'clients', 'hash'),
            $cache->key('platform', 'clients', 'hash'),
        );
    }

    /* ---------------------------------------------------------------- setup */

    private function registerPanels(): void
    {
        $manager = app(PanelManager::class);

        $manager->registerPanel(Panel::make('admin')->path('app'));
        $manager->registerPanel(
            Panel::make('platform')->path('super-admin')->context(Panel::CONTEXT_CENTRAL),
        );
    }

    private function makeClientFor(Tenant $tenant): Client
    {
        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'name' => 'Plan '.$tenant->id,
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'name' => 'Router '.$tenant->id,
            'ip_address' => '10.0.0.'.$tenant->id,
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $unique = uniqid((string) $tenant->id, true);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'plan_id' => $plan->id,
            'router_id' => $router->id,
            'name' => "Client {$unique}",
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);
    }
}
