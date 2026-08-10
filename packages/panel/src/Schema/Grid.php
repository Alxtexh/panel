<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Schema;

/** An untitled column grid, for laying out fields without a heading. */
final class Grid extends Component
{
    private function __construct(private readonly int $columns) {}

    public static function make(int $columns = 2): self
    {
        return new self($columns);
    }

    public function component(): string
    {
        return 'grid';
    }

    public function toSchema(): array
    {
        return [...parent::toSchema(), 'columns' => $this->columns];
    }
}
