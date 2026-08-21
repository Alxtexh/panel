<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

/**
 * Several columns under one header label.
 *
 * Filament-shaped: `ColumnGroup::make('Contact', [TextColumn::make('email'), ...])`.
 * The group is layout only. Queries and cells still see the nested columns as a
 * flat list; the schema stamps each with `group` so the table can draw a
 * two-row header.
 */
final class ColumnGroup
{
    /** @var list<Column> */
    private array $columns;

    /**
     * @param  list<Column>  $columns
     */
    public function __construct(
        private string $label,
        array $columns = [],
    ) {
        $this->columns = $columns;
    }

    /**
     * @param  list<Column>  $columns
     */
    public static function make(string $label, array $columns = []): self
    {
        return new self($label, $columns);
    }

    /**
     * @param  list<Column>  $columns
     */
    public function columns(array $columns): self
    {
        $this->columns = $columns;

        return $this;
    }

    public function label(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    /**
     * @return list<Column>
     */
    public function getColumns(): array
    {
        return $this->columns;
    }
}
