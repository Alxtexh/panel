<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Actions\RecordAction;
use Alxtexh\Panel\Tests\TestCase;

final class RecordActionSlideOverTest extends TestCase
{
    public function test_slide_over_serializes_when_opted_in(): void
    {
        $payload = RecordAction::make('notify', 'Notify')
            ->slideOver()
            ->toArray();

        $this->assertTrue($payload['slideOver'] ?? false);
    }

    public function test_slide_over_is_omitted_by_default(): void
    {
        $payload = RecordAction::make('publish', 'Publish')->toArray();

        $this->assertArrayNotHasKey('slideOver', $payload);
    }

    public function test_modal_width_serializes_when_declared(): void
    {
        $payload = RecordAction::make('notify', 'Notify')->modalWidth('lg')->toArray();

        $this->assertSame('lg', $payload['modalWidth']);
    }

    public function test_modal_width_is_omitted_by_default(): void
    {
        $payload = RecordAction::make('publish', 'Publish')->toArray();

        $this->assertArrayNotHasKey('modalWidth', $payload);
    }

    public function test_submit_and_cancel_labels_serialize_when_declared(): void
    {
        $payload = RecordAction::make('archive', 'Archive')
            ->submitLabel('Yes, archive it')
            ->cancelLabel('Never mind')
            ->toArray();

        $this->assertSame('Yes, archive it', $payload['submitLabel']);
        $this->assertSame('Never mind', $payload['cancelLabel']);
    }

    public function test_submit_and_cancel_labels_are_omitted_by_default(): void
    {
        $payload = RecordAction::make('publish', 'Publish')->toArray();

        $this->assertArrayNotHasKey('submitLabel', $payload);
        $this->assertArrayNotHasKey('cancelLabel', $payload);
    }

    public function test_key_bindings_serialize_when_declared(): void
    {
        $payload = RecordAction::make('duplicate', 'Duplicate')
            ->keyBindings(['mod+d'])
            ->toArray();

        $this->assertSame(['mod+d'], $payload['keyBindings']);
    }

    public function test_key_bindings_are_omitted_by_default(): void
    {
        $payload = RecordAction::make('publish', 'Publish')->toArray();

        $this->assertArrayNotHasKey('keyBindings', $payload);
    }

    public function test_key_bindings_accepts_more_than_one_combo(): void
    {
        $payload = RecordAction::make('edit', 'Edit')
            ->keyBindings(['e', 'mod+e'])
            ->toArray();

        $this->assertSame(['e', 'mod+e'], $payload['keyBindings']);
    }
}
