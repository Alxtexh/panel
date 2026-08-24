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
}
