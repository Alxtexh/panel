<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Resources\ClientResource;
use App\Panel\Resources\CustomFieldResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\CustomFields\CustomField;
use Tests\TestCase;

/**
 * Roadmap 5.1 end to end: a definition saved through `CustomFieldResource`
 * changes `ClientResource`'s own schema, form and list without a migration.
 */
final class CustomFieldsTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Tenant A', 'slug' => 'tenant-a']);
        $this->user = User::factory()->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    private function makeClient(): Client
    {
        $id = DB::table('clients')->insertGetId([
            'tenant_id' => $this->tenant->id,
            'name' => 'Existing Client',
            'phone' => '+254700000999',
            'access_code' => 'EX'.rand(1000, 9999),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return Client::withoutGlobalScopes()->findOrFail($id);
    }

    public function test_a_definition_appends_a_form_field_and_a_table_column(): void
    {
        CustomField::create([
            'resource' => 'clients', 'key' => 'fibre_node', 'type' => 'text',
            'label' => 'Fibre node ID', 'required' => false, 'sort' => 0,
        ]);

        $schema = ClientResource::schema();

        $this->assertContains(
            'custom_fibre_node',
            array_column($schema['form']['fields'], 'key'),
        );
        $this->assertContains(
            'custom_fibre_node',
            array_column($schema['table']['columns'], 'key'),
        );
    }

    /**
     * The cache key changes with the definitions - see
     * `Resource::customFieldsFingerprint()` - so a resource with none stays on
     * the shared cache entry every tenant already warms.
     */
    public function test_a_resource_with_no_custom_fields_has_an_empty_fingerprint(): void
    {
        $method = new \ReflectionMethod(ClientResource::class, 'customFieldsFingerprint');
        $method->setAccessible(true);

        $this->assertSame('', $method->invoke(null));
    }

    public function test_submitting_a_custom_field_stores_it_under_the_custom_column(): void
    {
        CustomField::create([
            'resource' => 'clients', 'key' => 'fibre_node', 'type' => 'text',
            'label' => 'Fibre node ID', 'required' => false, 'sort' => 0,
        ]);

        $this->actingAs($this->user)->post('/clients', [
            'name' => 'Amina Achieng',
            'phone' => '+254700000001',
            'access_code' => 'AA0001',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'plan_id' => null,
            'expiry_date' => now()->addYear()->format('Y-m-d'),
            'custom_fibre_node' => 'FN-1234',
        ])->assertRedirect();

        $client = Client::query()->where('name', 'Amina Achieng')->firstOrFail();

        $this->assertSame(['fibre_node' => 'FN-1234'], $client->custom);
    }

    /**
     * A field a definition does NOT declare must not reach `custom` -
     * `Form::sanitize()`'s allow-list applies to custom fields exactly like
     * it does to declared ones.
     */
    public function test_an_undeclared_custom_key_is_dropped(): void
    {
        $this->actingAs($this->user)->post('/clients', [
            'name' => 'Amina Achieng',
            'phone' => '+254700000001',
            'access_code' => 'AA0001',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'plan_id' => null,
            'expiry_date' => now()->addYear()->format('Y-m-d'),
            'custom_not_declared' => 'should not be stored',
        ])->assertRedirect();

        $client = Client::query()->where('name', 'Amina Achieng')->firstOrFail();

        $this->assertNull($client->custom);
    }

    public function test_updating_preserves_a_custom_value_the_edit_form_did_not_change(): void
    {
        CustomField::create([
            'resource' => 'clients', 'key' => 'fibre_node', 'type' => 'text',
            'label' => 'Fibre node ID', 'required' => false, 'sort' => 0,
        ]);

        $client = $this->makeClient();
        $client->forceFill(['custom' => ['fibre_node' => 'FN-0001']])->save();

        $this->actingAs($this->user)->put("/clients/{$client->id}", [
            'name' => 'Renamed',
            'phone' => $client->phone,
            'access_code' => $client->access_code,
            'status' => $client->status,
            'plan_type' => $client->plan_type,
            'plan_id' => null,
            'expiry_date' => now()->addYear()->format('Y-m-d'),
            'custom_fibre_node' => 'FN-0001',
            '_updated_at' => $client->updated_at->toIso8601String(),
        ])->assertRedirect();

        $client->refresh();
        $this->assertSame('Renamed', $client->name);
        $this->assertSame(['fibre_node' => 'FN-0001'], $client->custom);
    }

    public function test_the_edit_form_is_prefilled_with_the_current_custom_value(): void
    {
        CustomField::create([
            'resource' => 'clients', 'key' => 'fibre_node', 'type' => 'text',
            'label' => 'Fibre node ID', 'required' => false, 'sort' => 0,
        ]);

        $client = $this->makeClient();
        $client->forceFill(['custom' => ['fibre_node' => 'FN-9999']])->save();

        $values = $this->actingAs($this->user)->get("/clients/{$client->id}/edit")
            ->assertOk()
            ->viewData('page')['props']['values'];

        $this->assertSame('FN-9999', $values['custom_fibre_node']);
    }

    public function test_the_list_shows_the_custom_column_value(): void
    {
        CustomField::create([
            'resource' => 'clients', 'key' => 'fibre_node', 'type' => 'text',
            'label' => 'Fibre node ID', 'required' => false, 'sort' => 0,
        ]);

        $client = $this->makeClient();
        $client->forceFill(['custom' => ['fibre_node' => 'FN-4242']])->save();

        $records = $this->actingAs($this->user)->get('/clients')->assertOk()
            ->viewData('page')['props']['records'];

        $row = collect($records)->firstWhere('id', $client->id);

        $this->assertSame('FN-4242', $row['custom_fibre_node']);
    }

    /**
     * `CustomFieldResource` dogfoods the generic Resource system - this is the
     * write path any other resource gets, exercised on the resource that
     * defines what the write paths of every OTHER resource can accept.
     */
    public function test_a_definition_can_be_created_through_its_own_resource(): void
    {
        $this->actingAs($this->user)->post('/custom-fields', [
            'resource' => 'clients',
            'type' => 'text',
            'key' => 'fibre_node',
            'label' => 'Fibre node ID',
            'required' => false,
        ])->assertRedirect();

        $this->assertDatabaseHas('panel_custom_fields', [
            'resource' => 'clients', 'key' => 'fibre_node', 'label' => 'Fibre node ID',
        ]);
    }

    public function test_a_select_definition_carries_its_choices(): void
    {
        $this->actingAs($this->user)->post('/custom-fields', [
            'resource' => 'clients',
            'type' => 'select',
            'key' => 'tier',
            'label' => 'Service tier',
            'required' => false,
            'options' => ['gold' => 'Gold', 'silver' => 'Silver'],
        ])->assertRedirect();

        $definition = CustomField::query()->where('key', 'tier')->firstOrFail();
        $this->assertSame(['gold' => 'Gold', 'silver' => 'Silver'], $definition->options);
    }

    /**
     * The migration's own `unique(['resource', 'key'])` guards the data; this
     * asserts the collision comes back as a field error rather than a 500 -
     * see `RecordController::save()`'s own note.
     */
    public function test_a_duplicate_definition_is_rejected_as_a_conflict(): void
    {
        CustomField::create([
            'resource' => 'clients', 'key' => 'fibre_node', 'type' => 'text',
            'label' => 'Fibre node ID', 'required' => false, 'sort' => 0,
        ]);

        $this->actingAs($this->user)->post('/custom-fields', [
            'resource' => 'clients',
            'type' => 'text',
            'key' => 'fibre_node',
            'label' => 'Another label',
            'required' => false,
        ])->assertSessionHasErrors('_conflict');

        $this->assertSame(1, CustomField::query()->where('key', 'fibre_node')->count());
    }

    /**
     * The database holds `gold`; the operator chose "Gold". A list cell
     * showing the key reads as leaked data - see
     * `CustomFieldFactory::column()`'s own note.
     */
    public function test_a_select_field_renders_its_label_in_the_list(): void
    {
        CustomField::create([
            'resource' => 'clients', 'key' => 'tier', 'type' => 'select',
            'label' => 'Service tier', 'required' => false, 'sort' => 0,
            'options' => ['gold' => 'Gold', 'silver' => 'Silver'],
        ]);

        $column = collect(ClientResource::schema()['table']['columns'])
            ->firstWhere('key', 'custom_tier');

        $this->assertSame('badge', $column['type']);
        $this->assertSame(['gold' => 'Gold', 'silver' => 'Silver'], $column['labels']);
    }

    public function test_only_the_reserved_resources_are_offered(): void
    {
        $options = CustomFieldResource::formDefinition()->resolveOptions();

        $this->assertSame(['clients', 'routers', 'plans'], array_column($options['resource'], 'value'));
    }

    /* --------------------------------------- the record-form entry point */

    /**
     * Part D: the door to a new field is on the record form, because that is
     * where the need arises. The prop carries what the dialog needs; null
     * means no affordance renders at all.
     */
    public function test_the_record_form_offers_the_define_field_door(): void
    {
        $client = $this->makeClient();

        $support = $this->actingAs($this->user)->get("/clients/{$client->id}/edit")
            ->assertOk()
            ->viewData('page')['props']['customFieldSupport'];

        $this->assertSame('clients', $support['resource']);
        $this->assertSame('Client', $support['label']);
        $this->assertSame(['text', 'textarea', 'number', 'select', 'toggle', 'date'], $support['types']);
        $this->assertSame('/custom-fields', $support['endpoint']);
    }

    /** A resource with no custom-field storage gets no door - Users, say. */
    public function test_a_resource_without_storage_offers_no_door(): void
    {
        $support = $this->actingAs($this->user)->get('/users/create')
            ->assertOk()
            ->viewData('page')['props']['customFieldSupport'];

        $this->assertNull($support);
    }

    /**
     * A user who may edit clients but not define fields sees no door either.
     * Hiding is not enforcement - the write path re-authorizes - but a
     * control that can only 403 teaches people the panel lies.
     */
    public function test_a_user_who_cannot_define_fields_sees_no_door(): void
    {
        $limited = User::factory()
            ->withAbilities(['view_any_clients', 'view_clients', 'update_clients'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $client = $this->makeClient();

        $support = $this->actingAs($limited)->get("/clients/{$client->id}/edit")
            ->assertOk()
            ->viewData('page')['props']['customFieldSupport'];

        $this->assertNull($support);
    }
}
