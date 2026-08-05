<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

/**
 * A box you tick.
 *
 * DIFFERENT FROM `ToggleField`, AND THE DIFFERENCE IS THE POINT. Until this
 * shipped, `ToggleField` drew a bare `<input type="checkbox">` - one control
 * wearing two names. Both now draw what they are called:
 *
 *   - a SWITCH is a setting, and reads as state. "Notifications: on."
 *   - a CHECKBOX is an assertion or a selection, and reads as part of filling
 *     a form in. "I confirm this account may be suspended."
 *
 * Same column, same `boolean` rule, same submitted value. Choosing between
 * them is a question about what the sentence beside it says, not about data.
 */
final class CheckboxField extends Field
{
    public function type(): string
    {
        return 'checkbox';
    }

    /**
     * `boolean`, and never `required` - the same reasoning as `ToggleField`.
     *
     * An unticked box submits nothing, so `required` rejects exactly the answer
     * the person gave. A consent box that must be ticked wants `accepted`,
     * which is a different rule with a different message, and the caller adds
     * it deliberately.
     */
    public function rules(): array
    {
        return ['boolean', ...$this->rules];
    }

    /**
     * A create form has no record, so every field starts null. Rendered from
     * null a checkbox is indistinguishable from one rendered from false - both
     * are empty - and the form would then submit the null it was handed, which
     * `boolean` rejects with an error about a distinction the control cannot
     * display.
     */
    public function presentValue(mixed $value): mixed
    {
        return (bool) $value;
    }
}
