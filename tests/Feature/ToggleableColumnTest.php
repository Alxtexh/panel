<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tests\TestCase;

final class ToggleableColumnTest extends TestCase
{
    public function test_column_is_not_toggleable_by_default(): void
    {
        $column = TextColumn::make('email');
        $schema = $column->toArray();

        $this->assertArrayNotHasKey('toggleable', $schema);
        $this->assertArrayNotHasKey('hiddenByDefault', $schema);
    }

    public function test_toggleable_emits_flag_in_schema(): void
    {
        $column = TextColumn::make('email')->toggleable();
        $schema = $column->toArray();

        $this->assertTrue($schema['toggleable']);
        $this->assertArrayNotHasKey('hiddenByDefault', $schema);
    }

    public function test_toggleable_hidden_by_default(): void
    {
        $column = TextColumn::make('phone')
            ->toggleable(isToggledHiddenByDefault: true);

        $schema = $column->toArray();

        $this->assertTrue($schema['toggleable']);
        $this->assertTrue($schema['hiddenByDefault']);
    }

    public function test_locked_column_excludes_toggleable(): void
    {
        $column = TextColumn::make('name')->locked()->toggleable();
        $schema = $column->toArray();

        $this->assertTrue($schema['locked']);
        $this->assertTrue($schema['toggleable']);
    }
}
