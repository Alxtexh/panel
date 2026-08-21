<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

/**
 * A numeric rating rendered as stars.
 *
 *     RatingColumn::make('score')->max(5);
 */
final class RatingColumn extends Column
{
    private int $max = 5;

    public function type(): string
    {
        return 'rating';
    }

    public function max(int $max): self
    {
        $this->max = max(1, min(10, $max));

        return $this;
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'max' => $this->max,
        ];
    }
}
