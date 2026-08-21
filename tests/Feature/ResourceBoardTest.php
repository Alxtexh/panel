<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Resources\Board;
use Alxtexh\Panel\Tests\TestCase;

final class ResourceBoardTest extends TestCase
{
    public function test_board_schema_is_opt_in_structure_only(): void
    {
        $board = Board::make('status')
            ->columns([
                'open' => 'Open',
                'doing' => 'In progress',
                'done' => 'Done',
            ])
            ->title('name')
            ->description('notes');

        $schema = $board->toSchema();

        $this->assertSame('status', $schema['column']);
        $this->assertSame('name', $schema['title']);
        $this->assertSame('notes', $schema['description']);
        $this->assertSame(
            [
                ['value' => 'open', 'label' => 'Open'],
                ['value' => 'doing', 'label' => 'In progress'],
                ['value' => 'done', 'label' => 'Done'],
            ],
            $schema['columns'],
        );
        $this->assertSame(['open', 'doing', 'done'], $board->allowedValues());
    }

    public function test_board_rejects_invalid_column_attribute(): void
    {
        $this->expectException(\InvalidArgumentException::class);

        Board::make('status;drop');
    }
}
