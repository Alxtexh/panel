<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Resources;

/**
 * Opt-in Kanban board over one resource.
 *
 * DECLARE VIA `Resource::board()`. When null (default), the registered
 * `/board` and `/board-move` actions 404 and there is zero client cost.
 * When set, the package mounts `ResourceKanban` and accepts drag-to-move
 * writes against the column field.
 *
 * COLUMNS ARE AN ALLOWLIST. A card may only move into a declared column value,
 * so a crafted request cannot invent statuses the resource never offered.
 */
final class Board
{
    /** Attribute written when a card moves. */
    private string $column;

    /**
     * Ordered columns: value => label.
     *
     * @var array<string, string>
     */
    private array $columns = [];

    /** Row attribute shown as the card title. */
    private string $title = 'name';

    /** Optional subtitle attribute. */
    private ?string $description = null;

    public function __construct(string $column)
    {
        if (preg_match('/^[a-zA-Z_][a-zA-Z0-9_]*$/', $column) !== 1) {
            throw new \InvalidArgumentException("[{$column}] is not a valid board column attribute.");
        }

        $this->column = $column;
    }

    public static function make(string $column): self
    {
        return new self($column);
    }

    /**
     * @param  array<string|int, string>  $columns  value => label
     */
    public function columns(array $columns): self
    {
        $out = [];

        foreach ($columns as $value => $label) {
            $out[(string) $value] = (string) $label;
        }

        $this->columns = $out;

        return $this;
    }

    public function title(string $attribute): self
    {
        $this->title = $attribute;

        return $this;
    }

    public function description(?string $attribute): self
    {
        $this->description = $attribute;

        return $this;
    }

    public function column(): string
    {
        return $this->column;
    }

    /** @return list<string> */
    public function allowedValues(): array
    {
        return array_keys($this->columns);
    }

    /**
     * @return array{
     *     column: string,
     *     columns: list<array{value: string, label: string}>,
     *     title: string,
     *     description: string|null
     * }
     */
    public function toSchema(): array
    {
        $columns = [];

        foreach ($this->columns as $value => $label) {
            $columns[] = ['value' => $value, 'label' => $label];
        }

        return [
            'column' => $this->column,
            'columns' => $columns,
            'title' => $this->title,
            'description' => $this->description,
        ];
    }
}
