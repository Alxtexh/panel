<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Actions\BulkAction;
use Alxtexh\Panel\Tests\TestCase;

final class BulkActionSlideOverTest extends TestCase
{
    public function test_slide_over_serializes_when_opted_in(): void
    {
        $payload = BulkAction::make('assign', 'Assign')
            ->slideOver()
            ->toArray();

        $this->assertTrue($payload['slideOver'] ?? false);
    }

    public function test_slide_over_is_omitted_by_default(): void
    {
        $payload = BulkAction::make('mark-paid', 'Mark paid')->toArray();

        $this->assertArrayNotHasKey('slideOver', $payload);
    }
}
