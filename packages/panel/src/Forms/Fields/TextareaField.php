<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

final class TextareaField extends Field
{
    private int $rows = 3;

    public function rows(int $rows): static
    {
        $this->rows = $rows;

        return $this;
    }

    public function type(): string
    {
        return 'textarea';
    }

    protected function typeRules(): array
    {
        return ['string'];
    }

    public function toSchema(): array
    {
        return [...parent::toSchema(), 'rows' => $this->rows];
    }
}
