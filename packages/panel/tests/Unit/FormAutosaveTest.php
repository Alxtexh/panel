<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Form;
use Alxtexh\Panel\Tests\TestCase;
use InvalidArgumentException;

final class FormAutosaveTest extends TestCase
{
    public function test_autosave_is_opt_in_and_serializes_its_debounce(): void
    {
        $default = Form::make()->schema([TextField::make('title')])->toSchema();
        $enabled = Form::make()->autosave(2000)->toSchema();

        $this->assertFalse($default['autosave']);
        $this->assertNull($default['autosaveMilliseconds']);
        $this->assertTrue($enabled['autosave']);
        $this->assertSame(2000, $enabled['autosaveMilliseconds']);
    }

    public function test_autosave_rejects_unreasonable_debounce_values(): void
    {
        $this->expectException(InvalidArgumentException::class);

        Form::make()->autosave(100);
    }
}
