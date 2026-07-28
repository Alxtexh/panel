<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Forms\Fields\MultiSelectField;
use PanelKit\Panel\Forms\Form;
use Tests\TestCase;

/**
 * A field holding several values from a fixed list.
 *
 * The interesting case is the one that LOOKS validated and is not: an `array`
 * rule is satisfied by any array, including one full of values that were never
 * offered.
 */
final class MultiSelectFieldTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    /* ------------------------------------------------------------ the rules */

    /**
     * THE HEADLINE CASE. `['1', 'god_mode']` satisfies `array` perfectly well,
     * because it is an array. Only a rule on `key.*` looks inside it.
     */
    public function test_every_member_is_constrained_not_just_the_array(): void
    {
        $field = MultiSelectField::make('reminder_days')->options([1 => 'One', 2 => 'Two']);

        $rules = $field->additionalRules();

        $this->assertArrayHasKey('reminder_days.*', $rules);
        $this->assertSame(['in:1,2'], $rules['reminder_days.*']);
    }

    /** The form must carry the member rule through, or the field is unguarded. */
    public function test_the_form_exposes_the_member_rule(): void
    {
        $form = Form::make()->schema([
            MultiSelectField::make('tags')->options(['a' => 'A', 'b' => 'B']),
        ]);

        $rules = $form->rules();

        $this->assertArrayHasKey('tags', $rules);
        $this->assertArrayHasKey('tags.*', $rules, 'Without this key the array contents are unvalidated.');
        $this->assertContains('array', $rules['tags']);
    }

    public function test_a_maximum_is_expressed_as_a_rule(): void
    {
        $field = MultiSelectField::make('tags')->options(['a' => 'A'])->max(2);

        $this->assertContains('max:2', $field->rules());
    }

    public function test_the_schema_declares_it_as_multiple_and_resolves_no_options(): void
    {
        $ran = false;

        $field = MultiSelectField::make('tags')->options(function () use (&$ran): array {
            $ran = true;

            return ['a' => 'A'];
        });

        $schema = $field->toSchema();

        $this->assertSame('multiselect', $schema['type']);
        $this->assertTrue($schema['multiple']);
        // Options are tenant data; the cached schema must never contain them.
        $this->assertFalse($ran, 'Building the schema must not run the option closure.');
    }

    public function test_options_travel_in_the_same_shape_as_a_select(): void
    {
        $options = MultiSelectField::make('tags')->options([1 => 'One', 2 => 'Two'])->resolveOptions();

        $this->assertSame([
            ['value' => 1, 'label' => 'One'],
            ['value' => 2, 'label' => 'Two'],
        ], $options);
    }

    /* ------------------------------------------------------------- the write */

    public function test_a_value_outside_the_options_is_rejected_by_the_endpoint(): void
    {
        $client = $this->makeClient();

        $this->putJson("/clients/{$client->id}", [
            ...$this->validPayload($client),
            'reminder_days' => [1, 'god_mode'],
        ])
            ->assertStatus(422)
            // The error names the offending MEMBER by index - `.1`, the bad one
            // - rather than the field as a whole, which is what tells the user
            // which chip to remove.
            ->assertJsonValidationErrors('reminder_days.1');
    }

    public function test_a_valid_selection_is_stored(): void
    {
        $client = $this->makeClient();

        $this->put("/clients/{$client->id}", [
            ...$this->validPayload($client),
            'reminder_days' => [1, 3, 7],
        ])->assertSessionHasNoErrors();

        $this->assertSame([1, 3, 7], $client->fresh()->reminder_days);
    }

    /** An empty selection is a legitimate answer: remind nobody. */
    public function test_no_selection_is_allowed(): void
    {
        $client = $this->makeClient();

        $this->put("/clients/{$client->id}", [
            ...$this->validPayload($client),
            'reminder_days' => [],
        ])->assertSessionHasNoErrors();

        $this->assertSame([], $client->fresh()->reminder_days);
    }

    /* ---------------------------------------------------------------- setup */

    /** @return array<string, mixed> */
    private function validPayload(Client $client): array
    {
        return [
            'name' => $client->name,
            'phone' => $client->phone,
            'access_code' => $client->access_code,
            'status' => 'active',
            'plan_type' => 'pppoe',
            'plan_id' => $client->plan_id,
            'expiry_date' => '2026-12-31',
        ];
    }

    private function makeClient(): Client
    {
        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Plan',
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Router',
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $unique = uniqid('c', true);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->tenant->id,
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
