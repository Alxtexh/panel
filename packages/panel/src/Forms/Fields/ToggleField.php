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

    /**
     * A toggle has NO NULL STATE. A create form seeds every field with the
     * record's value, and there is no record - so every other field starts
     * null and renders empty, which is honest. A toggle rendered from null is
     * indistinguishable from one rendered from false: the switch is off. The
     * form then submits the null it was given, `boolean` above rejects it,
     * and the user is told a field they never touched "must be true or false"
     * - an error about a distinction the control cannot even display.
     *
     * Presenting null as the off it already looks like closes that gap for
     * every toggle on every create form at once.
     */
    public function presentValue(mixed $value): mixed
    {
        return (bool) $value;
    }

    /**
     * AN ABSENT KEY MEANS FALSE, for the same reason as `CheckboxField`.
     *
     * A switch is still an `<input type="checkbox">` underneath whatever it is
     * painted to look like, so an off switch submits nothing, and
     * `Form::sanitize()` reads a missing key as "leave the stored value alone".
     * Switching something off and being told it saved, while it stays on, is
     * the failure - and it is worse here than on a checkbox, because a switch
     * READS as a setting that has already taken effect.
     */
    public function absentMeans(): mixed
    {
        return false;
    }
}
