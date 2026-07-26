<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * Phase 5 write path.
 *
 * Most of these guard a failure that would otherwise return a 2xx and look
 * correct — a row written into the wrong tenant, a silent overwrite of another
 * admin's edit, a field the form never declared reaching the database.
 */
final class RecordWriteTest extends TestCase
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
        $this->userA = User::factory()->create(['tenant_id' => $this->tenantA->id, 'email_verified_at' => now()]);
    }

    /** @return array<string, mixed> */
    private function payload(array $overrides = []): array
    {
        return [
            'name' => 'Amina Achieng',
            'phone' => '+254700000001',
            'access_code' => 'AA0001',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'plan_id' => null,
            'expiry_date' => now()->addYear()->format('Y-m-d'),
            ...$overrides,
        ];
    }

    private function makeClient(Tenant $tenant, string $name = 'Existing'): Client
    {
        $id = DB::table('clients')->insertGetId([
            'tenant_id' => $tenant->id,
            'name' => $name,
            'phone' => '+254700000999',
            'access_code' => strtoupper(substr($tenant->slug, -4)) . rand(1000, 9999),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return Client::withoutGlobalScopes()->findOrFail($id);
    }

    public function test_it_creates_a_record(): void
    {
        $this->actingAs($this->userA)
            ->post('/clients', $this->payload())
            ->assertRedirect();

        $this->assertDatabaseHas('clients', ['name' => 'Amina Achieng', 'tenant_id' => $this->tenantA->id]);
    }

    /**
     * The tenant comes from context, never from input. Without this, a crafted
     * field is a way to write a row straight into someone else's tenant.
     */
    public function test_a_submitted_tenant_id_is_ignored(): void
    {
        $this->actingAs($this->userA)
            ->post('/clients', $this->payload(['tenant_id' => $this->tenantB->id]))
            ->assertRedirect();

        $this->assertDatabaseHas('clients', ['name' => 'Amina Achieng', 'tenant_id' => $this->tenantA->id]);
        $this->assertDatabaseMissing('clients', ['tenant_id' => $this->tenantB->id]);
    }

    /**
     * A select's allowlist is built from a TENANT-SCOPED query, so another
     * tenant's plan is not an option — and must be rejected rather than written.
     */
    public function test_another_tenants_plan_cannot_be_assigned(): void
    {
        $foreignPlan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenantB->id,
            'name' => 'Foreign Plan',
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $this->actingAs($this->userA)
            ->post('/clients', $this->payload(['plan_id' => $foreignPlan->id]))
            ->assertSessionHasErrors('plan_id');

        $this->assertDatabaseMissing('clients', ['name' => 'Amina Achieng']);
    }

    public function test_validation_errors_come_back_for_the_declared_rules(): void
    {
        $this->actingAs($this->userA)
            ->post('/clients', $this->payload(['name' => '', 'status' => 'not-a-status']))
            ->assertSessionHasErrors(['name', 'status']);
    }

    public function test_it_updates_a_record(): void
    {
        $client = $this->makeClient($this->tenantA);

        $this->actingAs($this->userA)
            ->put("/clients/{$client->id}", $this->payload(['name' => 'Renamed']))
            ->assertRedirect();

        $this->assertDatabaseHas('clients', ['id' => $client->id, 'name' => 'Renamed']);
    }

    /**
     * addendum C: two admins editing one client is normal in an ISP back office,
     * and silent last-write-wins loses real work with no trace.
     */
    public function test_a_stale_update_is_rejected_as_a_conflict(): void
    {
        $client = $this->makeClient($this->tenantA);
        $staleTimestamp = $client->updated_at->toIso8601String();

        // Someone else saves first.
        DB::table('clients')->where('id', $client->id)
            ->update(['name' => 'Changed by someone else', 'updated_at' => now()->addMinute()]);

        $this->actingAs($this->userA)
            ->put("/clients/{$client->id}", $this->payload([
                'name' => 'My overwrite',
                '_updated_at' => $staleTimestamp,
            ]))
            ->assertSessionHasErrors('_conflict');

        $this->assertDatabaseHas('clients', ['id' => $client->id, 'name' => 'Changed by someone else']);
    }

    public function test_a_current_update_is_accepted(): void
    {
        $client = $this->makeClient($this->tenantA);

        $this->actingAs($this->userA)
            ->put("/clients/{$client->id}", $this->payload([
                'name' => 'Fresh edit',
                '_updated_at' => $client->updated_at->toIso8601String(),
            ]))
            ->assertRedirect();

        $this->assertDatabaseHas('clients', ['id' => $client->id, 'name' => 'Fresh edit']);
    }

    public function test_it_deletes_a_record(): void
    {
        $client = $this->makeClient($this->tenantA);

        $this->actingAs($this->userA)->delete("/clients/{$client->id}")->assertRedirect();

        $this->assertDatabaseMissing('clients', ['id' => $client->id]);
    }

    /**
     * A 404, not a 403 — confirming that another tenant's record EXISTS is
     * itself a leak, however small.
     */
    public function test_another_tenants_record_cannot_be_updated_or_deleted(): void
    {
        $foreign = $this->makeClient($this->tenantB, 'Not yours');

        $this->actingAs($this->userA)
            ->put("/clients/{$foreign->id}", $this->payload())
            ->assertNotFound();

        $this->actingAs($this->userA)->delete("/clients/{$foreign->id}")->assertNotFound();

        $this->assertDatabaseHas('clients', ['id' => $foreign->id, 'name' => 'Not yours']);
    }

    public function test_guests_cannot_write(): void
    {
        $this->post('/clients', $this->payload())->assertRedirect('/login');
        $this->delete('/clients/1')->assertRedirect('/login');
    }

    /**
     * spec §9 item 3: schema permission booleans hide UI only. They must reflect
     * the same authorization the write path enforces, or the panel lies.
     */
    public function test_permission_booleans_reflect_the_policy(): void
    {
        $this->actingAs($this->userA);
        $this->assertTrue(ClientResource::permissions()['create']);

        // A user with no tenant can do nothing.
        $orphan = User::factory()->create(['tenant_id' => null, 'email_verified_at' => now()]);
        $this->actingAs($orphan);

        $permissions = ClientResource::permissions();
        $this->assertFalse($permissions['create']);
        $this->assertFalse($permissions['update']);
        $this->assertFalse($permissions['delete']);
    }

    /**
     * antipatterns meta-rule: a resource whose model has no policy must DENY.
     * The usual default grants everyone everything and renders correctly for the
     * person who forgot to write one.
     */
    public function test_a_resource_without_a_policy_denies(): void
    {
        $resource = new class extends \PanelKit\Panel\Resources\Resource
        {
            // User has no policy registered. Tenant deliberately is NOT used
            // here: the generator creates a policy alongside a resource, so any
            // model that has been generated for would silently start passing.
            protected static string $model = User::class;

            public static function table(\PanelKit\Panel\Tables\Table $table): \PanelKit\Panel\Tables\Table
            {
                return $table;
            }
        };

        $this->actingAs($this->userA);

        $this->assertFalse($resource::can('viewAny'));
        $this->assertFalse($resource::can('create'));
    }
}
