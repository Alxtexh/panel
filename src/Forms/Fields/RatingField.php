<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

/**
 * A star rating stored as an integer.
 *
 *     RatingField::make('score')->max(5);
 *
 * Bounds are validated on the server. Zero / null means unset when nullable.
 */
final class RatingField extends Field
{
    private int $max = 5;

    private bool $allowHalf = false;

    public function type(): string
    {
        return 'rating';
    }

    public function max(int $max): static
    {
        $this->max = max(1, min(10, $max));

        return $this;
    }

    /** Allow half-star steps (stored as tenths: 3.5). */
    public function allowHalf(bool $allow = true): static
    {
        $this->allowHalf = $allow;

        return $this;
    }

    protected function typeRules(): array
    {
        if ($this->allowHalf) {
            return ['numeric', 'between:0,'.$this->max, 'multiple_of:0.5'];
        }

        return ['integer', 'between:0,'.$this->max];
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'max' => $this->max,
            'allowHalf' => $this->allowHalf,
        ];
    }
}
