<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Forms\Fields\ToggleButtonsField;
use Alxtexh\Panel\Tests\TestCase;

final class ToggleButtonsFieldTest extends TestCase
{
    public function test_schema_carries_options_colors_icons_and_layout(): void
    {
        $field = ToggleButtonsField::make('status')
            ->options([
                'draft' => 'Draft',
                'published' => 'Published',
            ])
            ->colors([
                'draft' => 'warning',
                'published' => 'success',
            ])
            ->icons([
                'draft' => 'pencil',
                'published' => 'check',
            ])
            ->tooltips([
                'draft' => 'Not live yet',
            ])
            ->grouped()
            ->hiddenLabels();

        $schema = $field->toSchema();

        $this->assertSame('toggle-buttons', $schema['type']);
        $this->assertTrue($schema['grouped']);
        $this->assertTrue($schema['hiddenLabels']);
        $this->assertSame('warning', $schema['colors']['draft']);
        $this->assertSame('check', $schema['icons']['published']);
        $this->assertSame('Not live yet', $schema['tooltips']['draft']);
        $this->assertSame([
            ['value' => 'draft', 'label' => 'Draft'],
            ['value' => 'published', 'label' => 'Published'],
        ], $field->resolveOptions());
    }

    public function test_boolean_sets_yes_no_with_tones(): void
    {
        $field = ToggleButtonsField::make('accepted')->boolean('Agree', 'Decline');
        $schema = $field->toSchema();

        $this->assertSame([
            ['value' => 1, 'label' => 'Agree'],
            ['value' => 0, 'label' => 'Decline'],
        ], $field->resolveOptions());
        $this->assertSame('success', $schema['colors']['1']);
        $this->assertSame('danger', $schema['colors']['0']);
        $this->assertSame('check', $schema['icons']['1']);
        $this->assertSame('x', $schema['icons']['0']);
    }

    public function test_single_rejects_values_outside_options(): void
    {
        $field = ToggleButtonsField::make('status')->options(['a' => 'A', 'b' => 'B']);
        $rules = $field->rules();

        $this->assertNotEmpty($rules);
        $this->assertTrue(
            collect($rules)->contains(static fn (mixed $rule): bool => is_object($rule)),
            'Expected an In rule object over the resolved options.',
        );
    }

    public function test_multiple_adds_member_in_rule(): void
    {
        $field = ToggleButtonsField::make('channels')
            ->multiple()
            ->options(['email' => 'Email', 'sms' => 'SMS']);

        $this->assertContains('array', $field->rules());
        $this->assertArrayHasKey('channels.*', $field->additionalRules());
    }

    public function test_columns_and_inline_layout(): void
    {
        $field = ToggleButtonsField::make('status')
            ->options(['a' => 'A'])
            ->inline(false)
            ->columns(3);

        $schema = $field->toSchema();

        $this->assertFalse($schema['inline']);
        $this->assertSame(3, $schema['columns']);
    }
}
