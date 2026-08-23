<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

final class TextField extends Field
{
    private ?int $max = 255;

    private ?string $inputType = null;

    public function max(?int $max): static
    {
        $this->max = $max;

        return $this;
    }

    /** `email`, `tel`, `url`. A semantic hint the client maps to an input type. */
    public function as(string $inputType): static
    {
        $this->inputType = $inputType;

        return $this;
    }

    public function type(): string
    {
        return 'text';
    }

    protected function typeRules(): array
    {
        return array_filter(['string', $this->max !== null ? "max:{$this->max}" : null]);
    }

    public function toSchema(): array
    {
        return array_filter(
            [...parent::toSchema(), 'inputType' => $this->inputType, 'max' => $this->max],
            static fn (mixed $v): bool => $v !== null && $v !== false,
        );
    }
}
