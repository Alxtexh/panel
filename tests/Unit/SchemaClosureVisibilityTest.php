<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Form;
use Alxtexh\Panel\Schema\Card;
use Alxtexh\Panel\Schema\Component;
use Alxtexh\Panel\Schema\Fieldset;
use Alxtexh\Panel\Schema\Section;
use Alxtexh\Panel\Schema\Tabs;
use Alxtexh\Panel\Tests\TestCase;

/**
 * `Component::visible(Closure)` - the layout-node twin of `Field::hidden()`.
 *
 * NO DEDICATED TEST FILE COVERED `visibleWhen()` AT ALL BEFORE THIS ONE,
 * tuple or closure, on any layout node - not `Section`, `Card`, `Fieldset`
 * or `Tabs`. `Section`, `Card` and `Fieldset` each carried their OWN copy of
 * the tuple method and its schema serialization independently, which is
 * also fixed here: they now inherit both from `Component`.
 */
final class SchemaClosureVisibilityTest extends TestCase
{
    public function test_the_tuple_form_serializes_the_same_way_on_every_layout_node(): void
    {
        foreach ([
            Section::make('Billing')->visibleWhen('type', 'invoice'),
            Card::make('Billing')->visibleWhen('type', 'invoice'),
            Fieldset::make('Billing')->visibleWhen('type', 'invoice'),
            Tabs::make()->visibleWhen('type', 'invoice'),
        ] as $node) {
            $schema = $node->toSchema();

            $this->assertSame(['field' => 'type', 'value' => 'invoice'], $schema['visibleWhen']);
            $this->assertNull($schema['hidden']);
            $this->assertNull($schema['conditionId']);
        }
    }

    public function test_with_no_condition_the_node_is_always_visible(): void
    {
        $section = Section::make('Billing');

        $this->assertTrue($section->isVisible([]));
        $this->assertTrue($section->isVisible(['anything' => 'x']));
    }

    public function test_the_tuple_form_is_enforced_server_side_too(): void
    {
        $section = Section::make('Billing')->visibleWhen('type', 'invoice');

        $this->assertTrue($section->isVisible(['type' => 'invoice']));
        $this->assertFalse($section->isVisible(['type' => 'receipt']));
        $this->assertFalse($section->isVisible([]));
    }

    /** LOOSE COMPARISON, matching the client's own `conditionMet()`. */
    public function test_the_tuple_form_compares_loosely(): void
    {
        $section = Section::make('Auto-renew')->visibleWhen('auto_renew', true);

        $this->assertTrue($section->isVisible(['auto_renew' => '1']));
    }

    public function test_a_closure_condition_is_pre_evaluated_against_no_values_for_the_cached_schema(): void
    {
        $alwaysOn = Section::make('Always')->visible(fn (array $v): bool => true);
        $alwaysOff = Section::make('Never')->visible(fn (array $v): bool => false);

        $this->assertNull($alwaysOn->toSchema()['hidden']);
        $this->assertTrue($alwaysOff->toSchema()['hidden']);
    }

    public function test_a_closure_condition_gets_a_conditionid_a_tuple_does_not(): void
    {
        $closureBased = Section::make('A')->visible(fn (array $v): bool => true);
        $tupleBased = Section::make('B')->visibleWhen('x', 'y');
        $unconditional = Section::make('C');

        $this->assertIsInt($closureBased->toSchema()['conditionId']);
        $this->assertNull($tupleBased->toSchema()['conditionId']);
        $this->assertNull($unconditional->toSchema()['conditionId']);
    }

    public function test_a_closure_condition_can_see_more_than_one_field(): void
    {
        $section = Section::make('Enterprise discount')
            ->visible(fn (array $v): bool => ($v['plan'] ?? null) === 'enterprise' && ($v['seats'] ?? 0) >= 50);

        $this->assertFalse($section->isVisible(['plan' => 'enterprise', 'seats' => 10]));
        $this->assertFalse($section->isVisible(['plan' => 'starter', 'seats' => 100]));
        $this->assertTrue($section->isVisible(['plan' => 'enterprise', 'seats' => 50]));
    }

    public function test_form_toschema_overlays_the_real_answer_after_a_live_round_trip(): void
    {
        $form = Form::make()->schema([
            TextField::make('plan'),
            Section::make('Enterprise fields')
                ->visible(fn (array $v): bool => ($v['plan'] ?? null) === 'enterprise')
                ->schema([TextField::make('account_manager')]),
        ]);

        // Cached build: no values, evaluated against [] - false, so hidden.
        $cached = $form->toSchema();
        $this->assertTrue($cached['nodes'][1]['hidden']);

        // After a live() round-trip with the real posted values.
        $live = $form->toSchema(['plan' => 'enterprise']);
        $this->assertNull($live['nodes'][1]['hidden'] ?? null);

        $stillHidden = $form->toSchema(['plan' => 'starter']);
        $this->assertTrue($stillHidden['nodes'][1]['hidden']);
    }

    public function test_form_toschema_finds_a_closure_conditioned_node_nested_inside_another(): void
    {
        $form = Form::make()->schema([
            TextField::make('plan'),
            Section::make('Outer')->schema([
                Fieldset::make('Inner')
                    ->visible(fn (array $v): bool => ($v['plan'] ?? null) === 'enterprise')
                    ->schema([TextField::make('account_manager')]),
            ]),
        ]);

        $live = $form->toSchema(['plan' => 'enterprise']);
        $inner = $live['nodes'][1]['children'][0];

        $this->assertSame('fieldset', $inner['component']);
        $this->assertNull($inner['hidden'] ?? null);
    }

    /**
     * THE WRITE PATH, not just the display. A closure-conditioned section
     * that resolves false must drop its fields from `sanitize()` exactly
     * like the tuple form already does - `Component::isVisible()` is what
     * both `Form::sanitize()` and the schema overlay call, so this is the
     * same guarantee at the point that actually matters.
     */
    public function test_a_field_inside_an_unmet_closure_conditioned_section_is_not_written(): void
    {
        $form = Form::make()->schema([
            TextField::make('plan'),
            Section::make('Enterprise fields')
                ->visible(fn (array $v): bool => ($v['plan'] ?? null) === 'enterprise')
                ->schema([TextField::make('account_manager')]),
        ]);

        $sanitized = $form->sanitize(['plan' => 'starter', 'account_manager' => 'Smuggled in']);

        $this->assertArrayNotHasKey('account_manager', $sanitized);
        $this->assertSame('starter', $sanitized['plan']);
    }

    public function test_a_field_inside_a_met_closure_conditioned_section_is_written(): void
    {
        $form = Form::make()->schema([
            TextField::make('plan'),
            Section::make('Enterprise fields')
                ->visible(fn (array $v): bool => ($v['plan'] ?? null) === 'enterprise')
                ->schema([TextField::make('account_manager')]),
        ]);

        $sanitized = $form->sanitize(['plan' => 'enterprise', 'account_manager' => 'Amina']);

        $this->assertSame('Amina', $sanitized['account_manager']);
    }

    public function test_collect_conditional_nodes_finds_every_depth_and_ignores_tuple_and_unconditional_nodes(): void
    {
        $closureA = Section::make('A')->visible(fn (): bool => true);
        $closureB = Fieldset::make('B')->visible(fn (): bool => false);
        $tuple = Card::make('C')->visibleWhen('x', 'y');
        $plain = Section::make('D');

        $found = Component::collectConditionalNodes([
            $closureA->schema([$closureB]),
            $tuple,
            $plain,
        ]);

        $this->assertCount(2, $found);
        $this->assertContains($closureA, $found);
        $this->assertContains($closureB, $found);
        $this->assertNotContains($tuple, $found);
        $this->assertNotContains($plain, $found);
    }
}
