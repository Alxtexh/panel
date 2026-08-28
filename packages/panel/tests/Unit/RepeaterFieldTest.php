<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Forms\Fields\KeyValueField;
use Alxtexh\Panel\Forms\Fields\MultiSelectField;
use Alxtexh\Panel\Forms\Fields\RepeaterField;
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Tests\TestCase;
use InvalidArgumentException;

/**
 * `RepeaterField` had no dedicated test file before this one - every other
 * editable/schema field does. Covers the schema it emits (including
 * `collapsible`), the min/max and per-child rules it derives, the
 * empty-row filter storage goes through, and the one-level-only guard.
 */
final class RepeaterFieldTest extends TestCase
{
    public function test_it_declares_the_repeater_type(): void
    {
        $this->assertSame('repeater', RepeaterField::make('contacts')->type());
    }

    public function test_collapsible_defaults_to_false(): void
    {
        $schema = RepeaterField::make('contacts')
            ->schema([TextField::make('name')])
            ->toSchema();

        $this->assertFalse($schema['collapsible']);
    }

    public function test_collapsible_can_be_opted_into(): void
    {
        $schema = RepeaterField::make('contacts')
            ->schema([TextField::make('name')])
            ->collapsible()
            ->toSchema();

        $this->assertTrue($schema['collapsible']);
    }

    public function test_collapsible_false_turns_it_back_off(): void
    {
        $schema = RepeaterField::make('contacts')
            ->schema([TextField::make('name')])
            ->collapsible()
            ->collapsible(false)
            ->toSchema();

        $this->assertFalse($schema['collapsible']);
    }

    public function test_schema_carries_item_label_and_children(): void
    {
        $schema = RepeaterField::make('contacts')
            ->itemLabel('Contact')
            ->schema([TextField::make('name'), TextField::make('phone')])
            ->toSchema();

        $this->assertSame('Contact', $schema['itemLabel']);
        $this->assertCount(2, $schema['children']);
        $this->assertSame('name', $schema['children'][0]['key']);
        $this->assertSame('phone', $schema['children'][1]['key']);
    }

    public function test_item_label_defaults_to_item(): void
    {
        $schema = RepeaterField::make('contacts')->schema([TextField::make('name')])->toSchema();

        $this->assertSame('Item', $schema['itemLabel']);
    }

    public function test_min_and_max_items_become_validation_rules(): void
    {
        $field = RepeaterField::make('contacts')
            ->schema([TextField::make('name')])
            ->minItems(1)
            ->maxItems(5);

        $rules = $field->rules();

        $this->assertContains('array', $rules);
        $this->assertContains('min:1', $rules);
        $this->assertContains('max:5', $rules);
    }

    public function test_a_childs_rules_are_rebased_under_the_wildcard(): void
    {
        $field = RepeaterField::make('contacts')->schema([
            TextField::make('name')->required(),
        ]);

        $rules = $field->additionalRules();

        $this->assertArrayHasKey('contacts.*.name', $rules);
        $this->assertContains('required', $rules['contacts.*.name']);
    }

    public function test_a_childs_own_additional_rules_are_rebased_too(): void
    {
        $field = RepeaterField::make('contacts')->schema([
            MultiSelectField::make('tags')->options(['a' => 'A', 'b' => 'B']),
        ]);

        $rules = $field->additionalRules();

        /*
         * The child only knows to ask for `tags.*` - it has no idea it is
         * nested inside a repeater. The repeater has to rebase that under
         * ITS OWN wildcard, or a tag outside ['a', 'b'] on row 2 would
         * validate against a rule Laravel never actually applied.
         */
        $this->assertArrayHasKey('contacts.*.tags.*', $rules);
        $this->assertSame(['in:a,b'], $rules['contacts.*.tags.*']);
    }

    public function test_a_repeater_cannot_nest_inside_a_repeater(): void
    {
        $this->expectException(InvalidArgumentException::class);

        RepeaterField::make('groups')->schema([
            RepeaterField::make('items')->schema([TextField::make('name')]),
        ]);
    }

    public function test_a_key_value_field_cannot_nest_inside_a_repeater(): void
    {
        $this->expectException(InvalidArgumentException::class);

        RepeaterField::make('groups')->schema([
            KeyValueField::make('meta'),
        ]);
    }

    public function test_transform_for_storage_drops_entirely_empty_rows(): void
    {
        $field = RepeaterField::make('contacts')->schema([
            TextField::make('name'),
            TextField::make('phone'),
        ]);

        $stored = $field->transformForStorage([
            ['name' => 'Amina', 'phone' => '0700'],
            ['name' => null, 'phone' => ''],
            ['name' => 'Baraka', 'phone' => null],
        ]);

        $this->assertSame([
            ['name' => 'Amina', 'phone' => '0700'],
            ['name' => 'Baraka', 'phone' => null],
        ], $stored);
    }

    public function test_transform_for_storage_drops_undeclared_keys(): void
    {
        $field = RepeaterField::make('contacts')->schema([TextField::make('name')]);

        $stored = $field->transformForStorage([
            ['name' => 'Amina', 'role' => 'admin'],
        ]);

        $this->assertSame([['name' => 'Amina']], $stored);
    }

    public function test_transform_for_storage_returns_null_for_an_all_empty_array(): void
    {
        $field = RepeaterField::make('contacts')->schema([TextField::make('name')]);

        $this->assertNull($field->transformForStorage([['name' => null]]));
        $this->assertNull($field->transformForStorage('not-an-array'));
    }
}
