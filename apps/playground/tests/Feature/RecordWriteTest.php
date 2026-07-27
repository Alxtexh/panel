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

    /**
     * Deleting a client SOFT-deletes it: the row survives with `deleted_at` set
     * and disappears from every list. That is the point — a mis-click used to
     * be permanent.
     */
    public function test_it_deletes_a_record(): void
    {
        $client = $this->makeClient($this->tenantA);

        $this->actingAs($this->userA)->delete("/clients/{$client->id}")->assertRedirect();

        $this->assertSoftDeleted('clients', ['id' => $client->id]);

        // Gone from the default scope, which is what the operator sees.
        $this->assertNull(Client::query()->find($client->id));
    }

    public function test_a_deleted_record_can_be_restored(): void
    {
        $client = $this->makeClient($this->tenantA);

        $this->actingAs($this->userA)->delete("/clients/{$client->id}")->assertRedirect();
        $this->actingAs($this->userA)->post("/clients/{$client->id}/restore")->assertRedirect();

        $this->assertNotNull(Client::query()->find($client->id));
    }

    /** The one act with no undo, so it is its own route and its own ability. */
    public function test_a_record_can_be_permanently_deleted(): void
    {
        $client = $this->makeClient($this->tenantA);

        $this->actingAs($this->userA)->delete("/clients/{$client->id}")->assertRedirect();
        $this->actingAs($this->userA)->delete("/clients/{$client->id}/force")->assertRedirect();

        $this->assertDatabaseMissing('clients', ['id' => $client->id]);
    }

    /**
     * THE REGRESSION GUARD. With no trashed filter applied, deleted records must
     * not appear.
     *
     * When the soft-delete global scope was lifted so the filter could own the
     * predicate, the filter was skipped on a null value — because for every
     * other filter null means "not applied". The list then had no `deleted_at`
     * predicate at all, so it showed deleted rows AND lost the index that leads
     * with that column: 1.6 ms became 416 ms. Correctness and performance broke
     * together.
     */
    public function test_a_deleted_record_disappears_from_the_default_list(): void
    {
        $keep = $this->makeClient($this->tenantA);
        $gone = $this->makeClient($this->tenantA);

        $gone->delete();

        $records = $this->actingAs($this->userA)->get('/clients')->assertOk()
            ->viewData('page')['props']['records'];

        $ids = array_column($records, 'id');

        $this->assertContains($keep->id, $ids);
        $this->assertNotContains($gone->id, $ids, 'A deleted record must not appear by default.');
    }

    /** And is reachable when explicitly asked for. */
    public function test_the_trashed_view_shows_only_deleted_records(): void
    {
        $live = $this->makeClient($this->tenantA);
        $gone = $this->makeClient($this->tenantA);

        $gone->delete();

        $records = $this->actingAs($this->userA)->get('/clients?trashed=trashed')->assertOk()
            ->viewData('page')['props']['records'];

        $ids = array_column($records, 'id');

        $this->assertContains($gone->id, $ids);
        $this->assertNotContains($live->id, $ids);
    }

    public function test_the_all_view_shows_both(): void
    {
        $live = $this->makeClient($this->tenantA);
        $gone = $this->makeClient($this->tenantA);

        $gone->delete();

        $ids = array_column(
            $this->actingAs($this->userA)->get('/clients?trashed=all')->assertOk()
                ->viewData('page')['props']['records'],
            'id',
        );

        $this->assertContains($live->id, $ids);
        $this->assertContains($gone->id, $ids);
    }

    /** A hand-edited value falls back to the default rather than erroring. */
    public function test_an_unknown_trashed_value_shows_live_records(): void
    {
        $gone = $this->makeClient($this->tenantA);
        $gone->delete();

        $ids = array_column(
            $this->actingAs($this->userA)->get('/clients?trashed=nonsense')->assertOk()
                ->viewData('page')['props']['records'],
            'id',
        );

        $this->assertNotContains($gone->id, $ids);
    }

    /** Restoring is still tenant-scoped: `withTrashed` lifts only that scope. */
    public function test_another_tenants_record_cannot_be_restored(): void
    {
        $foreign = $this->makeClient($this->tenantB);
        $foreign->delete();

        $this->actingAs($this->userA)->post("/clients/{$foreign->id}/restore")->assertNotFound();

        $this->assertSoftDeleted('clients', ['id' => $foreign->id]);
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
