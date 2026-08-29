<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Actions\ModalFooterAction;
use Alxtexh\Panel\Actions\RecordAction;
use Alxtexh\Panel\Tests\TestCase;
use InvalidArgumentException;

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

    public function test_extra_modal_footer_actions_are_omitted_by_default(): void
    {
        $payload = RecordAction::make('publish', 'Publish')->toArray();

        $this->assertArrayNotHasKey('extraFooterActions', $payload);
    }

    public function test_extra_modal_footer_actions_serialize_when_declared(): void
    {
        $payload = RecordAction::make('change-plan', 'Change plan')
            ->extraModalFooterActions([
                ModalFooterAction::make('View pricing')
                    ->url('https://example.test/pricing')
                    ->color('info')
                    ->icon('external-link'),
            ])
            ->toArray();

        $this->assertSame([
            [
                'label' => 'View pricing',
                'url' => 'https://example.test/pricing',
                'color' => 'info',
                'icon' => 'external-link',
            ],
        ], $payload['extraFooterActions']);
    }

    public function test_extra_modal_footer_actions_accepts_more_than_one(): void
    {
        $payload = RecordAction::make('change-plan', 'Change plan')
            ->extraModalFooterActions([
                ModalFooterAction::make('View pricing')->url('https://example.test/pricing'),
                ModalFooterAction::make('Contact sales')->url('https://example.test/sales'),
            ])
            ->toArray();

        $this->assertCount(2, $payload['extraFooterActions']);
        $this->assertSame('View pricing', $payload['extraFooterActions'][0]['label']);
        $this->assertSame('Contact sales', $payload['extraFooterActions'][1]['label']);
    }

    /**
     * A LINK, NOT A SECOND SUBMIT - `url()`/`color()`/`icon()` are the whole
     * surface. Nothing on `ModalFooterAction` accepts a closure to run on
     * click, which is the point: see its own class docblock for why.
     */
    public function test_a_modal_footer_action_without_a_url_serializes_null(): void
    {
        $payload = RecordAction::make('archive', 'Archive')
            ->extraModalFooterActions([ModalFooterAction::make('Learn more')])
            ->toArray();

        $this->assertNull($payload['extraFooterActions'][0]['url']);
        $this->assertNull($payload['extraFooterActions'][0]['color']);
        $this->assertNull($payload['extraFooterActions'][0]['icon']);
    }

    public function test_a_modal_footer_action_refuses_an_unknown_colour(): void
    {
        $this->expectException(InvalidArgumentException::class);

        ModalFooterAction::make('View pricing')->color('chartreuse');
    }
}
