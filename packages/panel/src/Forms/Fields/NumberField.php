<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

final class NumberField extends Field
{
    private ?int $min = null;

    private ?int $max = null;

    public function min(int $min): static
    {
        $this->min = $min;

        return $this;
    }

    public function max(int $max): static
    {
        $this->max = $max;

        return $this;
    }

    public function type(): string
    {
        return 'number';
    }

    protected function typeRules(): array
    {
        return array_filter([
            'integer',
            $this->min !== null ? "min:{$this->min}" : null,
            $this->max !== null ? "max:{$this->max}" : null,
        ]);
    }

    public function toSchema(): array
    {
        return array_filter(
            [...parent::toSchema(), 'min' => $this->min, 'max' => $this->max],
            static fn (mixed $v): bool => $v !== null && $v !== false,
        );
    }
}
