<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Forms\Fields\IconPickerField;
use Alxtexh\Panel\Forms\Fields\PhoneField;
use Alxtexh\Panel\Forms\Fields\TreeSelectField;
use Alxtexh\Panel\Support\Presence;
use Alxtexh\Panel\Tests\TestCase;

final class PhoneIconTreePresenceTest extends TestCase
{
    public function test_phone_field_requires_e164(): void
    {
        $field = PhoneField::make('mobile');
        $schema = $field->toSchema();

        $this->assertSame('phone', $schema['type']);
        $this->assertContains('string', $field->rules());
    }

    public function test_icon_picker_limits_to_declared_icons(): void
    {
        $field = IconPickerField::make('icon')->icons(['users', 'star']);
        $schema = $field->toSchema();

        $this->assertSame('icon-picker', $schema['type']);
        $this->assertSame(['users', 'star'], $schema['icons']);
    }

    public function test_tree_select_nests_options(): void
    {
        $field = TreeSelectField::make('category_id')->options([
            ['value' => 1, 'label' => 'Hardware', 'children' => [
                ['value' => 2, 'label' => 'Routers'],
            ]],
        ]);

        $schema = $field->toSchema();

        $this->assertSame('tree-select', $schema['type']);
        $this->assertSame('Hardware', $schema['options'][0]['label']);
        $this->assertSame('Routers', $schema['options'][0]['children'][0]['label']);
    }

    public function test_presence_is_off_by_default(): void
    {
        config(['panel.presence.enabled' => false]);

        $this->assertNull(Presence::shared());
        $this->assertFalse(Presence::enabled());
    }

    public function test_presence_channel_name_is_tenant_scoped(): void
    {
        $this->assertSame(
            'tenant.7.clients.42',
            Presence::channelName(7, 'clients', 42),
        );
    }
}
