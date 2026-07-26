<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

final class ToggleField extends Field
{
    public function type(): string
    {
        return 'toggle';
    }

    /**
     * `boolean`, and never `required`.
     *
     * An unchecked checkbox submits nothing, so `required` on a boolean rejects
     * exactly the value the user chose. `boolean` plus a false default is what
     * people actually mean by a required toggle.
     */
    public function rules(): array
    {
        return ['boolean', ...$this->rules];
    }
}
