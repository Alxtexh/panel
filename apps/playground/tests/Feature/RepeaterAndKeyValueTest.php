<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use InvalidArgumentException;
use PanelKit\Panel\Forms\Fields\KeyValueField;
use PanelKit\Panel\Forms\Fields\MultiSelectField;
use PanelKit\Panel\Forms\Fields\RepeaterField;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Form;
use Tests\TestCase;

/**
 * The two fields that store a SHAPE rather than a value.
 *
 * Everything interesting here is about what `array` does not prove. A JSON
 * column accepts any structure the encoder can serialise, so a rule that says
 * "is an array" has established nothing about what is inside - and this is the
 * one part of the form layer where arbitrary nested input arrives straight from
 * a browser and lands in storage more or less as sent.
 */
final class RepeaterAndKeyValueTest extends TestCase
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

    /* ================================================================ repeater */

    /**
     * THE HEADLINE CASE for a repeater. `[['phone' => []]]` is an array of
     * arrays and satisfies `array` completely; only a rule at `key.*.child`
     * looks inside a row.
     */
    public function test_every_child_is_validated_inside_every_row(): void
    {
        $rules = RepeaterField::make('contacts')
            ->schema([
                TextField::make('name')->required()->max(80),
                TextField::make('phone')->max(32),
            ])
            ->additionalRules();

        $this->assertArrayHasKey('contacts.*.name', $rules);
        $this->assertArrayHasKey('contacts.*.phone', $rules);
        $this->assertContains('required', $rules['contacts.*.name']);
        $this->assertContains('max:80', $rules['contacts.*.name']);
    }

    /**
     * A child's own extra rules are REBASED under the wildcard.
     *
     * A multi-select inside a repeater needs `contacts.*.tags.*`; the child only
     * knows to ask for `tags.*` because it has no idea it is nested. Getting
     * this wrong leaves the innermost values unvalidated while everything looks
     * covered.
     */
    public function test_a_childs_own_extra_rules_are_rebased_under_the_wildcard(): void
    {
        $rules = RepeaterField::make('contacts')
            ->schema([
                MultiSelectField::make('tags')->options(['a' => 'A', 'b' => 'B']),
            ])
            ->additionalRules();

        $this->assertArrayHasKey('contacts.*.tags.*', $rules);
        $this->assertSame(['in:a,b'], $rules['contacts.*.tags.*']);
    }

    /**
     * A repeater inside a repeater is a table with a foreign key wearing a
     * disguise. Refused at declaration rather than discovered when the
     * validation keys reach `a.*.b.*.c`.
     */
    public function test_a_repeater_cannot_be_nested(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/use a relation manager/');

        RepeaterField::make('outer')->schema([
            RepeaterField::make('inner')->schema([TextField::make('x')]),
        ]);
    }

    public function test_a_key_value_cannot_be_nested_in_a_repeater(): void
    {
        $this->expectException(InvalidArgumentException::class);

        RepeaterField::make('outer')->schema([KeyValueField::make('inner')]);
    }

    /**
     * THE SANITISER. Without the filter, a request can attach any key it likes
     * to a row and have it stored verbatim - this column is the one place a
     * caller could otherwise write a shape the resource never declared.
     */
    public function test_undeclared_keys_are_stripped_from_a_row(): void
    {
        $stored = RepeaterField::make('contacts')
            ->schema([TextField::make('name'), TextField::make('phone')])
            ->transformForStorage([
                ['name' => 'Asha', 'phone' => '0722', 'is_admin' => true, 'tenant_id' => 99],
            ]);

        $this->assertSame([['name' => 'Asha', 'phone' => '0722']], $stored);
    }

    /** "Add" creates a row before it is filled in; saving must not persist it. */
    public function test_entirely_empty_rows_are_dropped(): void
    {
        $stored = RepeaterField::make('contacts')
            ->schema([TextField::make('name'), TextField::make('phone')])
            ->transformForStorage([
                ['name' => 'Asha', 'phone' => '0722'],
                ['name' => '', 'phone' => ''],
                ['name' => null, 'phone' => null],
            ]);

        $this->assertCount(1, $stored);
    }

    /** A row with SOME content is kept whole, missing children included. */
    public function test_a_partially_filled_row_is_kept(): void
    {
        $stored = RepeaterField::make('contacts')
            ->schema([TextField::make('name'), TextField::make('phone')])
            ->transformForStorage([['name' => 'Asha']]);

        $this->assertSame([['name' => 'Asha', 'phone' => null]], $stored);
    }

    /** Nothing at all stores NULL, not an empty array - the column is nullable. */
    public function test_no_rows_stores_null(): void
    {
        $field = RepeaterField::make('contacts')->schema([TextField::make('name')]);

        $this->assertNull($field->transformForStorage([]));
        $this->assertNull($field->transformForStorage(null));
        $this->assertNull($field->transformForStorage('not an array'));
    }

    /**
     * Child option lists resolve into the DATA payload, never the schema.
     *
     * A select inside a repeater may be backed by a tenant's own rows, and the
     * schema cache key deliberately has no tenant in it.
     */
    public function test_child_options_resolve_into_the_data_payload(): void
    {
        $ran = false;

        $form = Form::make()->schema([
            RepeaterField::make('contacts')->schema([
                SelectField::make('relation')->options(function () use (&$ran): array {
                    $ran = true;

                    return ['family' => 'Family'];
                }),
            ]),
        ]);

        $schema = $form->toSchema();

        $this->assertFalse($ran, 'Building the schema must not run the option closure.');

        $options = $form->resolveOptions();

        $this->assertTrue($ran);
        $this->assertSame([['value' => 'family', 'label' => 'Family']], $options['relation']);
        $this->assertArrayNotHasKey('relation', json_decode(json_encode($schema), true)['fields'][0] ?? []);
    }

    /* =============================================================== keyvalue */

    /**
     * THE HEADLINE CASE for key-value. `{"a": {"b": ["c"]}}` is an array - the
     * array is an array - and a nested structure in a column everything treats
     * as flat renders as `[object Object]` in one place and throws in another.
     */
    public function test_values_must_be_scalars(): void
    {
        $rules = KeyValueField::make('metadata')->additionalRules();

        $this->assertSame(['nullable', 'string', 'max:1000'], $rules['metadata.*']);
    }

    /**
     * KEYS ARE CONSTRAINED TOO, and they are the half that matters most: a key
     * reaches JSON paths, input names and `data-*` attributes, so one containing
     * a dot or a bracket reads as a path expression somewhere downstream.
     */
    public function test_a_key_containing_path_syntax_is_refused(): void
    {
        $failures = $this->runKeyClosure(KeyValueField::make('metadata'), ['a.b' => 'x']);

        $this->assertCount(1, $failures);
        $this->assertStringContainsString('letters, numbers', $failures[0]);
    }

    public function test_a_reserved_key_is_refused(): void
    {
        $field = KeyValueField::make('metadata')->reserved(['tenant_id']);

        $this->assertCount(1, $this->runKeyClosure($field, ['tenant_id' => '99']));
        $this->assertCount(0, $this->runKeyClosure($field, ['region' => 'west']));
    }

    /** A key that is fine passes, including dashes and underscores. */
    public function test_an_ordinary_key_passes(): void
    {
        $this->assertCount(
            0,
            $this->runKeyClosure(KeyValueField::make('metadata'), ['ref-1' => 'a', 'sales_rep' => 'b']),
        );
    }

    /** Blank keys are rows somebody started and abandoned, not errors. */
    public function test_a_blank_key_is_dropped_rather_than_rejected(): void
    {
        $stored = KeyValueField::make('metadata')->transformForStorage(['' => 'orphan', 'ref' => '1']);

        $this->assertSame(['ref' => '1'], $stored);
    }

    public function test_nothing_at_all_stores_null(): void
    {
        $field = KeyValueField::make('metadata');

        $this->assertNull($field->transformForStorage([]));
        $this->assertNull($field->transformForStorage(null));
    }

    /* ================================================================= writes */

    public function test_contacts_and_metadata_round_trip_through_the_endpoint(): void
    {
        $client = $this->makeClient();

        $this->put("/clients/{$client->id}", [
            ...$this->validPayload($client),
            'contacts' => [
                ['name' => 'Asha', 'phone' => '0722334455', 'relation' => 'family'],
                ['name' => '', 'phone' => '', 'relation' => null],
            ],
            'metadata' => ['region' => 'west', 'installer' => 'Ken'],
        ])->assertSessionHasNoErrors();

        $fresh = $client->fresh();

        $this->assertSame(
            [['name' => 'Asha', 'phone' => '0722334455', 'relation' => 'family']],
            $fresh->contacts,
            'The blank row must not be persisted.',
        );
        $this->assertSame(['region' => 'west', 'installer' => 'Ken'], $fresh->metadata);
    }

    /** A child failure is reported at its own path, so the row can be found. */
    public function test_a_child_failure_names_the_row_and_the_child(): void
    {
        $client = $this->makeClient();

        $this->putJson("/clients/{$client->id}", [
            ...$this->validPayload($client),
            'contacts' => [
                ['name' => 'Asha', 'phone' => '0722', 'relation' => 'family'],
                ['name' => 'Bad', 'phone' => '0733', 'relation' => 'god_mode'],
            ],
        ])
            ->assertStatus(422)
            ->assertJsonValidationErrors('contacts.1.relation');
    }

    /** A nested value in the metadata blob is refused, not flattened. */
    public function test_a_nested_metadata_value_is_refused(): void
    {
        $client = $this->makeClient();

        $this->putJson("/clients/{$client->id}", [
            ...$this->validPayload($client),
            'metadata' => ['region' => ['nested' => 'structure']],
        ])
            ->assertStatus(422)
            ->assertJsonValidationErrors('metadata.region');
    }

    /** A reserved key cannot be smuggled in through the blob. */
    public function test_a_reserved_metadata_key_is_refused_by_the_endpoint(): void
    {
        $client = $this->makeClient();

        $this->putJson("/clients/{$client->id}", [
            ...$this->validPayload($client),
            'metadata' => ['tenant_id' => '99'],
        ])
            ->assertStatus(422)
            ->assertJsonValidationErrors('metadata');

        $this->assertNotSame(99, $client->fresh()->tenant_id);
    }

    /**
     * TWO GATES, AND THIS ONE EXERCISES THE FIRST - stated precisely because a
     * mutation test caught the original version of this claiming otherwise.
     *
     * Disabling `RepeaterField::transformForStorage`'s key filter did NOT make
     * this test fail, which at first looked like the test proving nothing. The
     * real explanation is that `$request->validate()` returns only paths that
     * had rules, and `contacts.*.is_admin` has none - so the undeclared key is
     * already gone before the field is asked to store anything.
     *
     * Both gates are worth having and they fail differently. Validation is the
     * gate on the HTTP path, which is the one an attacker uses. The field's own
     * filter is the gate for every other caller - a seeder, a console command,
     * an import - none of which go through `validate()` at all. The unit test
     * above covers that second gate; this one covers the first.
     */
    public function test_an_undeclared_contact_key_is_dropped_by_validation(): void
    {
        $client = $this->makeClient();

        $this->put("/clients/{$client->id}", [
            ...$this->validPayload($client),
            'contacts' => [['name' => 'Asha', 'phone' => '0722', 'is_admin' => true]],
        ])->assertSessionHasNoErrors();

        $this->assertArrayNotHasKey('is_admin', $client->fresh()->contacts[0]);
    }

    /* ---------------------------------------------------------------- setup */

    /**
     * Run the key-validating closure and collect its failures.
     *
     * Laravel has no wildcard for KEYS, so the field checks them with a closure
     * over the whole array - which means the closure has to be invoked directly
     * to test it.
     *
     * @param  array<string, mixed>  $value
     * @return list<string>
     */
    private function runKeyClosure(KeyValueField $field, array $value): array
    {
        $failures = [];
        $rules = $field->additionalRules()[$field->key];
        $closure = collect($rules)->first(static fn (mixed $r): bool => $r instanceof \Closure);

        $this->assertNotNull($closure, 'The field must check its keys.');

        $closure($field->key, $value, function (string $message) use (&$failures): void {
            $failures[] = $message;
        });

        return $failures;
    }

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
