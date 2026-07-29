<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Forms\Fields\CheckboxListField;
use PanelKit\Panel\Forms\Fields\ColourField;
use PanelKit\Panel\Forms\Fields\Field;
use PanelKit\Panel\Forms\Fields\RadioField;
use PanelKit\Panel\Forms\Fields\SliderField;
use PanelKit\Panel\Forms\Fields\TagsField;
use PanelKit\Panel\Forms\Form;
use Tests\TestCase;

/**
 * Adding a field type without editing the framework.
 *
 * THE GAP THIS CLOSES. A field's type is a string the server chooses and the
 * client renders - but the client's half was a `v-else-if` chain inside
 * `FormFieldControl.vue`, so a new field meant editing a file inside the UI
 * package. Fine for us; impossible for anybody who installed it. A "custom
 * field" you can only add by patching the framework is not an extension point,
 * and its absence is what stops a plugin ecosystem existing at all.
 *
 * TWO HALVES, AND BOTH HAVE TO BE OPEN:
 *
 *   THE SERVER HALF ALREADY WAS. `Field` is abstract, `type()` is abstract, and
 *   `toSchema()` is overridable - so a class outside the package can describe
 *   itself completely. The tests below prove that end to end, because "it should
 *   work" is exactly what was believed about the client half.
 *
 *   THE CLIENT HALF IS NEW: a registry keyed by type, consulted BEFORE the
 *   built-ins so an application can also REPLACE a control rather than only add
 *   to them. It is asserted here as text, the same way `DeclaredIconsExistTest`
 *   crosses the PHP/TS boundary - nothing inside either language can see both.
 *
 * THE FIVE NEW FIELDS GO THROUGH THE SAME DOOR, deliberately. If the package's
 * own controls bypassed the registry it would be a code path nobody exercises,
 * and the first person to write a custom field would find it broken.
 */
final class CustomFieldTypeTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /* -------------------------------------------------- a field from outside */

    /**
     * A CLASS THIS PACKAGE HAS NEVER HEARD OF describes itself completely.
     *
     * Type, extra schema keys and validation rules all come from the subclass,
     * which is what "custom field" has to mean before any of it reaches a
     * browser.
     */
    public function test_a_field_defined_outside_the_package_describes_itself(): void
    {
        $schema = SignaturePadField::make('signature')
            ->label('Signature')
            ->penWidth(3)
            ->toSchema();

        $this->assertSame('signature-pad', $schema['type']);
        $this->assertSame(3, $schema['penWidth']);
        $this->assertSame('Signature', $schema['label']);
    }

    /** And its rules are enforced by the ordinary form validator. */
    public function test_a_custom_fields_rules_are_enforced(): void
    {
        $rules = Form::make()->schema([
            SignaturePadField::make('signature')->required(),
        ])->rules();

        $this->assertContains('required', $rules['signature']);
        $this->assertContains('string', $rules['signature']);
        // The subclass's own rule, which nothing in the package knows about.
        $this->assertContains('starts_with:data:image/png;base64,', $rules['signature']);
    }

    /**
     * THE CLIENT CAN CLAIM THE TYPE WITHOUT TOUCHING THE PACKAGE.
     *
     * Asserted against the source because this crosses the PHP/TS boundary:
     * nothing inside either language can see both halves, and the failure being
     * guarded - a field the server sends and the client draws as nothing - looks
     * identical to a field the server never sent.
     */
    public function test_the_client_has_a_registration_point(): void
    {
        $registry = file_get_contents(
            base_path('../../packages/ui/src/composables/useFieldControls.ts'),
        );

        $this->assertNotFalse($registry, 'The field registry moved; this test points at the wrong file.');
        $this->assertStringContainsString('export function registerFieldControl', $registry);

        $control = file_get_contents(
            base_path('../../packages/ui/src/components/Form/FormFieldControl.vue'),
        );

        // Consulted BEFORE the built-in switch: that ordering is what lets an
        // application replace a control as well as add one.
        $this->assertStringContainsString('fieldControl(props.field.type)', (string) $control);
        $this->assertStringContainsString(':is="registered"', (string) $control);

        $exported = file_get_contents(base_path('../../packages/ui/src/index.ts'));

        $this->assertStringContainsString('registerFieldControl', (string) $exported);
    }

    /**
     * THE PACKAGE'S OWN CONTROLS USE IT TOO.
     *
     * A registry the framework bypasses is a code path nobody exercises, and the
     * first person to rely on it would find it broken.
     */
    public function test_the_built_in_controls_are_registered_through_the_registry(): void
    {
        $builtIns = file_get_contents(
            base_path('../../packages/ui/src/components/Form/builtInFields.ts'),
        );

        foreach (['radio', 'checkboxlist', 'tags', 'colour', 'slider'] as $type) {
            $this->assertStringContainsString(
                "registerFieldControl('{$type}'",
                (string) $builtIns,
                "The [{$type}] control does not go through the registry.",
            );
        }
    }

    /* ---------------------------------------------------- the new field types */

    /** A radio group validates exactly like a select: `in:` over the options. */
    public function test_a_radio_refuses_a_value_outside_its_options(): void
    {
        $rules = Form::make()->schema([
            RadioField::make('plan_type')->options(['pppoe' => 'PPPoE', 'hotspot' => 'Hotspot']),
        ])->rules();

        $this->assertEquals(
            ['pppoe', 'hotspot'],
            $this->allowedValues($rules['plan_type']),
        );
    }

    /**
     * THE MEMBER RULE IS THE ONE THAT MATTERS on a multi-value field.
     *
     * `array` alone accepts `['email', 'anything']`, because the array is an
     * array - the hole `additionalRules()` exists to close.
     */
    public function test_a_checkbox_list_validates_each_member(): void
    {
        $rules = Form::make()->schema([
            CheckboxListField::make('channels')->options(['email' => 'Email', 'sms' => 'SMS']),
        ])->rules();

        $this->assertContains('array', $rules['channels']);
        $this->assertEquals(['email', 'sms'], $this->allowedValues($rules['channels.*']));
    }

    /**
     * A COLOUR IS PATTERN-CHECKED, and that is the whole reason it is not a text
     * field: the value ends up in a style attribute, where an unvalidated string
     * is a stylesheet somebody else wrote.
     */
    public function test_a_colour_only_accepts_hex(): void
    {
        $rules = Form::make()->schema([ColourField::make('brand')])->rules();

        $validator = validator(['brand' => 'red; background: url(evil)'], $rules);

        $this->assertTrue($validator->fails());

        $this->assertFalse(validator(['brand' => '#1e90ff'], $rules)->fails());
    }

    /** A preset that could not be saved is not offered. */
    public function test_an_invalid_preset_is_dropped(): void
    {
        $schema = ColourField::make('brand')
            ->presets(['#1e90ff', 'rebeccapurple', '#abc'])
            ->toSchema();

        $this->assertSame(['#1e90ff', '#abc'], $schema['presets']);
    }

    /**
     * THE SLIDER'S BOUNDS ARE ENFORCED, not merely drawn. A range input posts an
     * ordinary form value, so the control is a suggestion and the rule is the
     * guarantee.
     */
    public function test_a_slider_enforces_its_range_and_step(): void
    {
        $rules = Form::make()->schema([
            SliderField::make('quota')->range(0, 100)->step(10),
        ])->rules();

        $this->assertTrue(validator(['quota' => 140], $rules)->fails(), 'Above the range.');
        $this->assertTrue(validator(['quota' => 37], $rules)->fails(), 'Off the step.');
        $this->assertFalse(validator(['quota' => 40], $rules)->fails());
    }

    /**
     * TAGS ARE BOUNDED even though the values are free-form.
     *
     * There is no option list to validate against, so shape and size are the
     * only things that can be enforced - and an unbounded array of unbounded
     * strings is a JSON column somebody fills with a megabyte through a form.
     */
    public function test_tags_are_bounded_in_count_and_length(): void
    {
        $rules = Form::make()->schema([
            TagsField::make('labels')->max(3)->maxLength(10),
        ])->rules();

        $this->assertTrue(validator(['labels' => ['a', 'b', 'c', 'd']], $rules)->fails());
        $this->assertTrue(validator(['labels' => [str_repeat('x', 11)]], $rules)->fails());
        $this->assertFalse(validator(['labels' => ['vip', 'overdue']], $rules)->fails());
    }

    /* ------------------------------------------------- the form still renders */

    /**
     * THE NEW FIELD REACHES A REAL FORM, with its extra keys intact.
     *
     * The subscriber form now asks for the plan type as a radio group; a schema
     * that lost `inline`, or the type itself, would render as a control the
     * client cannot draw - which looks like a missing field rather than a
     * missing case.
     */
    public function test_the_radio_field_reaches_the_create_screen(): void
    {
        $props = $this->actingAs($this->user)->get('/clients/create')->assertOk()
            ->viewData('page')['props'];

        $field = $this->findField($props['schema']['form'], 'plan_type');

        $this->assertNotNull($field, 'The plan type field is not in the form schema.');
        $this->assertSame('radio', $field['type']);
        $this->assertTrue($field['inline']);

        /*
         * THE OPTIONS TRAVEL IN THE DATA, NOT THE SCHEMA, and this assertion is
         * the one that caught a real bug: `Field::resolveOptions()` returns null
         * by default, so a new option-bearing field that forgets to override it
         * renders as a radio group with nothing to choose - on a form that
         * otherwise looks complete, with nothing anywhere reporting a problem.
         */
        $this->assertSame(
            ['pppoe', 'hotspot', 'static'],
            array_column($props['formOptions']['plan_type'] ?? [], 'value'),
        );
    }

    /* ---------------------------------------------------------------- helpers */

    /**
     * The values an `in:` rule permits.
     *
     * `Rule::in` stringifies to `in:"a","b"`, so the quotes come off here rather
     * than in three separate assertions.
     *
     * @param  list<mixed>  $rules
     * @return list<string>
     */
    private function allowedValues(array $rules): array
    {
        foreach ($rules as $rule) {
            $text = (string) $rule;

            if (! str_starts_with($text, 'in:')) {
                continue;
            }

            return array_map(
                static fn (string $value): string => trim($value, '"'),
                explode(',', substr($text, 3)),
            );
        }

        return [];
    }

    /** @param array<string, mixed> $node */
    private function findField(array $node, string $key): ?array
    {
        if (($node['component'] ?? null) === 'field' && ($node['key'] ?? null) === $key) {
            return $node;
        }

        foreach (['schema', 'children', 'fields', 'tabs', 'steps', 'sections'] as $branch) {
            foreach ((array) ($node[$branch] ?? []) as $child) {
                if (is_array($child) && ($found = $this->findField($child, $key)) !== null) {
                    return $found;
                }
            }
        }

        foreach ($node as $value) {
            if (is_array($value) && array_is_list($value)) {
                foreach ($value as $child) {
                    if (is_array($child) && ($found = $this->findField($child, $key)) !== null) {
                        return $found;
                    }
                }
            }
        }

        return null;
    }
}

/**
 * A field type from OUTSIDE the package - the thing that used to be impossible.
 *
 * It declares its own type, adds its own schema key and brings its own
 * validation rule, and nothing in `PanelKit\Panel` knows it exists. In a real
 * application this would live in `app/Panel/Fields`, with a Vue control
 * registered under the same type string.
 */
final class SignaturePadField extends Field
{
    private int $penWidth = 2;

    public function penWidth(int $pixels): static
    {
        $this->penWidth = max(1, $pixels);

        return $this;
    }

    public function type(): string
    {
        return 'signature-pad';
    }

    protected function typeRules(): array
    {
        // A data URL, and specifically a PNG one - the only thing the pad emits.
        return ['string', 'starts_with:data:image/png;base64,'];
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'penWidth' => $this->penWidth,
        ];
    }
}
