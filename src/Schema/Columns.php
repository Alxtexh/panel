<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Schema;

/**
 * A horizontal row of `Column` nodes.
 */
final class Columns extends Component
{
    private function __construct() {}

    /**
     * @param  list<Column>  $columns
     */
    public static function make(array $columns): self
    {
        $self = new self;
        $self->children = $columns;

        return $self;
    }

    public function component(): string
    {
        return 'columns';
    }
}
