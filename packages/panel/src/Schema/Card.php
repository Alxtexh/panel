<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Schema;

/**
 * A titled card group. Like Section, but the client renders it as a card shell
 * rather than a bordered section block.
 */
final class Card extends Component
{
    private ?string $description = null;

    private int $columns = 1;

    private function __construct(private readonly string $title) {}

    public static function make(string $title): self
    {
        return new self($title);
    }

    public function description(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function columns(int $columns): self
    {
        $this->columns = $columns;

        return $this;
    }

    public function component(): string
    {
        return 'card';
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'title' => $this->title,
            'description' => $this->description,
            'columns' => $this->columns,
        ];
    }
}
