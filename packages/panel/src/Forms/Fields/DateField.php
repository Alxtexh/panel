<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

final class DateField extends Field
{
    private bool $withTime = false;

    public function withTime(bool $withTime = true): static
    {
        $this->withTime = $withTime;

        return $this;
    }

    public function type(): string
    {
        return $this->withTime ? 'datetime' : 'date';
    }

    protected function typeRules(): array
    {
        return ['date'];
    }
}
