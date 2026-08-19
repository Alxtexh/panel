<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Schema;

/**
 * One column inside a `Columns` row.
 */
final class Column extends Component
{
    private int $span = 1;

    private function __construct() {}

    public static function make(): self
    {
        return new self;
    }

    /** Relative width within the row. Defaults to equal columns. */
    public function span(int $span): self
    {
        $this->span = max(1, $span);

        return $this;
    }

    public function component(): string
    {
        return 'column';
    }

    public function toSchema(): array
    {
        return [...parent::toSchema(), 'span' => $this->span];
    }
}
