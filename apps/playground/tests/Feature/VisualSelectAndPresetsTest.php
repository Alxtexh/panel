<?php

declare(strict_types=1);

namespace Tests\Feature;

use InvalidArgumentException;
use PanelKit\Panel\Forms\Fields\NumberField;
use PanelKit\Panel\Forms\Fields\VisualSelectField;
use Tests\TestCase;

/**
 * Two controls that exist because a label is not always the right way to offer a
 * choice.
 *
 * `VisualSelectField` draws each option as the thing it does; `NumberField
 * ->presets()` offers the handful of answers people actually give. Neither is
 * hard, and both have one failure mode worth pinning down: a renderer name that
 * carries no presentation into PHP, and a preset the field would reject.
 */
final class VisualSelectAndPresetsTest extends TestCase
{
    /* ---------------------------------------------------------- visual select */

    public function test_it_validates_against_its_own_option_list(): void
    {
        $field = VisualSelectField::make('code_style')
            ->options(['dashed' => 'Dashed', 'solid' => 'Solid']);

        $values = $this->inValues($field->rules());

        $this->assertContains('dashed', $values);
        $this->assertContains('solid', $values);
        $this->assertNotContains('ticket', $values);
    }

    /**
     * An option list that resolves to nothing must reject everything.
     *
     * The tempting bug is to treat an empty list as "no constraint" and accept
     * the submitted value - which turns a tenant-scoped option list into
     * decoration, because the one case it exists to police is the case it stops
     * policing.
     */
    public function test_an_empty_option_list_rejects_every_value(): void
    {
        $field = VisualSelectField::make('code_style')->options([]);

        $this->assertSame([], $this->inValues($field->rules()));
    }

    /**
     * THE POINT OF THE WHOLE DESIGN: no presentation crosses into PHP.
     *
     * The schema carries a renderer NAME. If a border style, a hex colour or a
     * utility class ever appears in this payload, a CSS purge can drop it
     * silently and the option renders as nothing - which is the failure this
     * indirection exists to prevent.
     */
    public function test_the_schema_carries_a_renderer_name_and_no_presentation(): void
    {
        $schema = VisualSelectField::make('code_style')
            ->options(['dashed' => 'Dashed'])
            ->preview('voucher-code-box')
            ->columns(3)
            ->toSchema();

        $this->assertSame('visual-select', $schema['type']);
        $this->assertSame('voucher-code-box', $schema['preview']);
        $this->assertSame(3, $schema['columns']);

        $encoded = json_encode($schema);
        $this->assertStringNotContainsString('border', $encoded);
        $this->assertStringNotContainsString('#', $encoded);
    }

    public function test_a_field_with_no_renderer_is_a_real_state(): void
    {
        $schema = VisualSelectField::make('shape')->options(['a' => 'A'])->toSchema();

        // Null rather than absent: the client distinguishes "declared nothing"
        // from "declared something nobody registered", and only the second is a
        // bug worth shouting about.
        $this->assertNull($schema['preview']);
    }

    /**
     * A LAYOUT IS A SHAPE, not a class list.
     *
     * Two options rendered as two large tiles read as a six-option picker missing
     * four options, and take a quarter of a form for what is essentially a
     * switch. `segmented()` says "this choice wants one pill"; what a pill looks
     * like stays on the client.
     */
    public function test_a_two_option_choice_can_ask_for_a_segmented_layout(): void
    {
        $tiles = VisualSelectField::make('mode')->options(['a' => 'A', 'b' => 'B'])->toSchema();
        $this->assertSame('tiles', $tiles['layout']);

        $segmented = VisualSelectField::make('mode')
            ->options(['a' => 'A', 'b' => 'B'])
            ->segmented()
            ->toSchema();

        $this->assertSame('segmented', $segmented['layout']);

        // Still no presentation crossing the boundary.
        $this->assertStringNotContainsString('rounded', (string) json_encode($segmented));
        $this->assertStringNotContainsString('bg-', (string) json_encode($segmented));
    }

    /**
     * Segmenting does not stop it being a visual select.
     *
     * The renderer survives, which is the reason this is a layout rather than a
     * separate toggle field: a colour choice still shows the colours, just small
     * and inline.
     */
    public function test_a_segmented_field_keeps_its_renderer(): void
    {
        $schema = VisualSelectField::make('colour_mode')
            ->options(['colour' => 'Colour', 'mono' => 'Black & white'])
            ->preview('document-colour-mode')
            ->segmented()
            ->toSchema();

        $this->assertSame('document-colour-mode', $schema['preview']);
        $this->assertSame('segmented', $schema['layout']);
    }

    public function test_columns_cannot_be_zero(): void
    {
        // A zero-column grid renders nothing at all, which looks like a field
        // the server forgot to send.
        $this->assertSame(1, VisualSelectField::make('s')->columns(0)->toSchema()['columns']);
    }

    /* ----------------------------------------------------------- number presets */

    public function test_presets_reach_the_schema(): void
    {
        $schema = NumberField::make('keep_days')->presets([7, 14, 30])->toSchema();

        $this->assertSame([7, 14, 30], $schema['presets']);
    }

    public function test_a_field_without_presets_does_not_declare_an_empty_list(): void
    {
        // An empty array would render an empty chip row - a strip of nothing
        // under the input, on every number field in the panel.
        $this->assertArrayNotHasKey('presets', NumberField::make('n')->toSchema());
    }

    public function test_duplicate_presets_collapse(): void
    {
        $this->assertSame([7, 30], NumberField::make('n')->presets([7, 30, 7])->toSchema()['presets']);
    }

    /**
     * A chip the field itself would reject is a button that fails validation
     * when pressed - and it fails as a form error under the field, which reads
     * as "you typed something wrong" about a value the panel supplied.
     *
     * It throws at schema build rather than at submit because both bounds and
     * presets are declared in code: the conflict is knowable before any request,
     * so it is a developer error that should stop the boot.
     */
    public function test_a_preset_outside_the_range_throws_rather_than_being_offered(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('keep_days');

        NumberField::make('keep_days')->min(1)->max(30)->presets([7, 90])->toSchema();
    }

    public function test_a_preset_below_the_minimum_throws_too(): void
    {
        $this->expectException(InvalidArgumentException::class);

        NumberField::make('keep_days')->min(7)->presets([1])->toSchema();
    }

    public function test_presets_inside_the_range_are_fine(): void
    {
        $schema = NumberField::make('keep_days')->min(1)->max(365)->presets([7, 30, 365])->toSchema();

        $this->assertSame([7, 30, 365], $schema['presets']);
    }

    /* ------------------------------------------------------------------ helper */

    /**
     * Pull the accepted values out of a `Rule::in` object.
     *
     * Stringifies to `in:"a","b"`, so the quotes come off - asserting against
     * the raw string would pass for a rule that happened to contain the
     * substring somewhere else.
     *
     * @param  list<mixed>  $rules
     * @return list<string>
     */
    private function inValues(array $rules): array
    {
        foreach ($rules as $rule) {
            if (is_object($rule) && str_starts_with((string) $rule, 'in:')) {
                $body = substr((string) $rule, 3);

                return $body === '' ? [] : array_map(
                    static fn (string $v): string => trim($v, '"'),
                    explode(',', $body),
                );
            }
        }

        return [];
    }
}
