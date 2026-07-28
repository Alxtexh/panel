<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Resources\ClientResource;
use App\Panel\Resources\EditablePlanResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use InvalidArgumentException;
use PanelKit\Panel\Tables\Columns\IconColumn;
use PanelKit\Panel\Tables\Columns\ImageColumn;
use PanelKit\Panel\Tables\Columns\SelectColumn;
use PanelKit\Panel\Tables\Columns\ToggleColumn;
use Tests\TestCase;

/**
 * Inline cell editing, and the display-only column types.
 *
 * An editable cell is a write endpoint with a small control in front of it, so
 * most of what matters here is what it REFUSES.
 */
final class EditableColumnTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $userA;

    private Client $client;

    private Plan $plan;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $this->userA = User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]);

        $this->client = $this->makeClient($this->tenantA);

        /*
         * The editable-column fixture is a PLAN, not a client.
         *
         * Clients originally carried an editable `status` select; it was
         * reverted to a badge because a form control in every row of the
         * busiest column made the list harder to scan than it made it to edit.
         * The endpoint and its guards are unchanged - only which resource
         * exercises them.
         */
        $this->plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenantA->id,
            'name' => 'Editable Plan',
            'speed_mbps' => 20,
            'price_cents' => 2000,
            'is_active' => true,
        ]);
    }

    /* ------------------------------------------------------------ the write */

    public function test_an_editable_cell_can_be_written(): void
    {
        $this->actingAs($this->userA)
            ->patchJson("/editable-plans/{$this->plan->id}/cell", ['column' => 'is_active', 'value' => false])
            ->assertOk()
            ->assertJson(['column' => 'is_active', 'value' => false]);

        $this->assertFalse((bool) $this->plan->fresh()->is_active);
    }

    /* ----------------------------------------------------------- the refusals */

    /**
     * THE CENTRAL GUARD. A column that exists on the model, is even selected and
     * searchable in the list, but was never declared editable, must not be
     * writable through this endpoint. Without this the route is "set any
     * attribute on any row you can see".
     */
    public function test_a_column_that_is_not_declared_editable_cannot_be_written(): void
    {
        $original = $this->client->access_code;

        $this->actingAs($this->userA)
            ->patchJson("/clients/{$this->client->id}/cell", ['column' => 'access_code', 'value' => 'PWNED'])
            ->assertNotFound();

        $this->assertSame($original, $this->client->fresh()->access_code);
    }

    /**
     * `status` is on the table and is NOT editable, so the endpoint refuses it
     * exactly as it refuses a column that is not there at all. Being visible in
     * the list confers nothing.
     */
    public function test_a_display_only_column_cannot_be_written(): void
    {
        $this->actingAs($this->userA)
            ->patchJson("/clients/{$this->client->id}/cell", ['column' => 'status', 'value' => 'suspended'])
            ->assertNotFound();

        $this->assertSame('active', $this->client->fresh()->status);
    }

    /** A column that is not on the table at all is equally refused. */
    public function test_an_unknown_column_is_refused(): void
    {
        $this->actingAs($this->userA)
            ->patchJson("/clients/{$this->client->id}/cell", ['column' => 'tenant_id', 'value' => $this->tenantB->id])
            ->assertNotFound();

        $this->assertSame($this->tenantA->id, $this->client->fresh()->tenant_id);
    }

    /**
     * The option list IS the validation rule. `status` is a plain string column
     * with no CHECK constraint, so this is the only thing preventing a row that
     * no filter or tab will ever match again.
     */
    public function test_a_value_the_column_cannot_cast_is_rejected(): void
    {
        $this->actingAs($this->userA)
            ->patchJson("/editable-plans/{$this->plan->id}/cell", ['column' => 'is_active', 'value' => 'god_mode'])
            ->assertStatus(422);

        $this->assertTrue((bool) $this->plan->fresh()->is_active);
    }

    public function test_another_tenants_record_cannot_be_edited(): void
    {
        $foreign = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenantB->id,
            'name' => 'Foreign Plan',
            'speed_mbps' => 5,
            'price_cents' => 500,
            'is_active' => true,
        ]);

        $this->actingAs($this->userA)
            ->patchJson("/editable-plans/{$foreign->id}/cell", ['column' => 'is_active', 'value' => false])
            ->assertNotFound();

        $this->assertTrue((bool) $foreign->fresh()->is_active);
    }

    public function test_guests_cannot_edit_a_cell(): void
    {
        $this->patchJson("/editable-plans/{$this->plan->id}/cell", ['column' => 'is_active', 'value' => false])
            ->assertUnauthorized();
    }

    /** A cell edit honours the same optimistic-concurrency guard a form does. */
    public function test_a_stale_cell_edit_is_rejected(): void
    {
        $this->actingAs($this->userA)
            ->patchJson("/editable-plans/{$this->plan->id}/cell", [
                'column' => 'is_active',
                'value' => false,
                '_updated_at' => '2020-01-01T00:00:00+00:00',
            ])
            ->assertStatus(422);

        $this->assertTrue((bool) $this->plan->fresh()->is_active);
    }

    /* ------------------------------------------------------------- casting */

    /**
     * `(bool) "false"` is TRUE in PHP, so a plain cast would turn every
     * "switch this off" from a JSON client into "switch this on".
     */
    public function test_a_toggle_reads_json_booleans_correctly(): void
    {
        $column = ToggleColumn::make('is_active');

        $this->assertTrue($column->castValue(true));
        $this->assertTrue($column->castValue('true'));
        $this->assertTrue($column->castValue(1));
        $this->assertFalse($column->castValue(false));
        $this->assertFalse($column->castValue('false'));
        $this->assertFalse($column->castValue('0'));
    }

    public function test_a_toggle_rejects_a_non_boolean(): void
    {
        $this->expectException(InvalidArgumentException::class);

        ToggleColumn::make('is_active')->castValue('perhaps');
    }

    /** A qualified declaration writes to the bare attribute on the model. */
    public function test_a_qualified_column_writes_to_the_model_attribute(): void
    {
        $this->assertSame(
            'status',
            SelectColumn::make('status')->from('clients.status')->options(['active'])->writableColumn(),
        );
    }

    /* ---------------------------------------------------------- the schema */

    public function test_an_editable_column_declares_itself_in_the_schema(): void
    {
        $active = collect(EditablePlanResource::schema()['table']['columns'])
            ->firstWhere('key', 'is_active');

        $this->assertSame('toggle', $active['type']);
        $this->assertTrue($active['editable']);
    }

    /** And a display-only column says nothing about being writable. */
    public function test_a_badge_column_is_not_marked_editable(): void
    {
        $status = collect(ClientResource::schema()['table']['columns'])
            ->firstWhere('key', 'status');

        $this->assertSame('badge', $status['type']);
        $this->assertArrayNotHasKey('editable', $status);
    }

    /**
     * REGRESSION GUARD. Plans declares no form, so `isWritable()` is false - and
     * gating `update` on that alone rendered every inline switch DISABLED while
     * the policy and the endpoint both allowed the write. A UI hint that
     * contradicts the server reads as a permissions bug and is very hard to
     * trace.
     */
    public function test_a_resource_with_editable_columns_but_no_form_still_reports_update(): void
    {
        $this->actingAs($this->userA);

        $permissions = EditablePlanResource::permissions();

        $this->assertFalse(EditablePlanResource::isWritable(), 'Plans has no form.');
        $this->assertTrue($permissions['update'], 'But it does have an editable column.');
        $this->assertFalse($permissions['create'], 'A row cannot be created by toggling a cell.');
    }

    public function test_a_toggle_column_round_trips_through_the_endpoint(): void
    {
        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenantA->id,
            'name' => 'Toggle Plan',
            'speed_mbps' => 10,
            'price_cents' => 1000,
            'is_active' => true,
        ]);

        $this->actingAs($this->userA)
            ->patchJson("/editable-plans/{$plan->id}/cell", ['column' => 'is_active', 'value' => false])
            ->assertOk();

        $this->assertFalse((bool) $plan->fresh()->is_active);
    }

    /* ------------------------------------------------- display-only columns */

    public function test_an_icon_column_maps_values_to_semantic_names_only(): void
    {
        $schema = IconColumn::make('status')
            ->icons(['online' => 'wifi'])
            ->colors(['online' => 'success'])
            ->toArray();

        $this->assertSame('icon', $schema['type']);
        $this->assertSame('wifi', $schema['icons']['online']);
        // Semantic, never a CSS class or an SVG path (antipatterns §6.1).
        $this->assertSame('success', $schema['colors']['online']);
        $this->assertStringNotContainsString('text-', json_encode($schema));
    }

    public function test_a_boolean_icon_column_maps_both_states(): void
    {
        $schema = IconColumn::make('flag')->boolean('On', 'Off')->toArray();

        $this->assertSame(['1' => 'check', '' => 'x'], $schema['icons']);
        $this->assertSame(['1' => 'On', '' => 'Off'], $schema['labels']);
    }

    public function test_an_image_column_ships_a_fixed_size_and_a_fallback(): void
    {
        $schema = ImageColumn::make('logo')->square()->size('lg')->fallbackFrom('name')->toArray();

        $this->assertSame('image', $schema['type']);
        $this->assertFalse($schema['rounded']);
        $this->assertSame('lg', $schema['size']);
        $this->assertSame('name', $schema['fallbackFrom']);
    }

    /** A size from outside the fixed set falls back rather than reaching CSS. */
    public function test_an_unknown_image_size_is_normalised(): void
    {
        $this->assertSame('md', ImageColumn::make('logo')->size('9999px')->toArray()['size']);
    }

    /* ---------------------------------------------------------------- setup */

    private function makeClient(Tenant $tenant): Client
    {
        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'name' => "Plan {$tenant->id}",
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'name' => "Router {$tenant->id}",
            'ip_address' => '10.0.0.1',
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
