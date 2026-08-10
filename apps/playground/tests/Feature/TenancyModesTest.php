<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Support\TenantContext;
use Tests\TestCase;

/**
 * The panel must work under both stancl/tenancy isolation strategies, and they
 * need opposite behaviour. Getting either wrong is severe:
 *
 *   shared / single database    missing the column constraint leaks every tenant
 *   dedicated / multi database  adding a column constraint references a column
 *                               that does not exist, breaking every query
 */
final class TenancyModesTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $userA;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'Tenant A', 'slug' => 'tenant-a']);
        $this->tenantB = Tenant::create(['name' => 'Tenant B', 'slug' => 'tenant-b']);
        $this->userA = User::factory()->create(['tenant_id' => $this->tenantA->id]);

        foreach ([$this->tenantA, $this->tenantB] as $tenant) {
            $plan = Plan::withoutGlobalScopes()->create([
                'tenant_id' => $tenant->id,
                'name' => 'Plan',
                'speed_mbps' => 10,
                'price_cents' => 1000,
            ]);

            DB::table('clients')->insert([
                'tenant_id' => $tenant->id,
                'plan_id' => $plan->id,
                'name' => $tenant->name.' Client',
                'phone' => '+254700000000',
                'access_code' => strtoupper(substr($tenant->slug, -6)),
                'status' => 'active',
                'plan_type' => 'pppoe',
                'expiry_date' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    public function test_column_mode_constrains_queries_to_the_acting_tenant(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_COLUMN]);

        $this->actingAs($this->userA);

        $names = Client::query()->pluck('name')->all();

        $this->assertSame(['Tenant A Client'], $names);
    }

    public function test_column_mode_emits_a_tenant_constraint_in_the_sql(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_COLUMN]);

        $this->actingAs($this->userA);

        $sql = Client::query()->toSql();

        $this->assertStringContainsString('tenant_id', $sql);
    }

    /**
     * The important half. In dedicated-database mode stancl has already switched
     * the connection, and `clients` has no tenant_id column at all - so the panel
     * must add no constraint.
     */
    public function test_database_mode_adds_no_column_constraint(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_DATABASE]);

        // Stand in for stancl having bootstrapped tenancy.
        app()->instance('Stancl\Tenancy\Contracts\Tenant', new class
        {
            public function getTenantKey(): string
            {
                return 'tenant-a';
            }
        });

        $this->actingAs($this->userA);

        $sql = Client::query()->toSql();

        $this->assertStringNotContainsString(
            'tenant_id',
            $sql,
            'Dedicated-database mode must not add a tenant column constraint - the column does not exist there.'
        );
    }

    /**
     * If tenancy never bootstrapped, a dedicated-database query would run against
     * the central database and read every tenant at once. Deny instead.
     */
    public function test_database_mode_fails_closed_when_tenancy_is_not_initialised(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_DATABASE]);

        $this->actingAs($this->userA);

        $this->assertFalse(app(TenantContext::class)->isIsolated());
        $this->assertSame([], Client::query()->pluck('name')->all());
    }

    public function test_column_mode_fails_closed_for_a_user_with_no_tenant(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_COLUMN]);

        $orphan = User::factory()->create(['tenant_id' => null]);

        $this->actingAs($orphan);

        $this->assertSame([], Client::query()->pluck('name')->all());
    }

    public function test_a_null_tenant_key_never_means_all_tenants(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_COLUMN]);

        // No authenticated user at all.
        $this->assertNull(app(TenantContext::class)->currentKey());
        $this->assertSame([], Client::query()->pluck('name')->all());
    }

    public function test_a_closure_resolver_takes_precedence(): void
    {
        config([
            'panel.tenancy.mode' => TenantContext::MODE_COLUMN,
            'panel.tenancy.resolver' => fn () => $this->tenantB->id,
        ]);

        // Acting as tenant A's user, but the resolver says tenant B - the
        // resolver wins, which is what lets an app define its own strategy.
        $this->actingAs($this->userA);

        $this->assertSame(['Tenant B Client'], Client::query()->pluck('name')->all());
    }

    public function test_none_mode_disables_scoping_entirely(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_NONE]);

        $this->actingAs($this->userA);

        $this->assertCount(2, Client::query()->get());
    }
}
