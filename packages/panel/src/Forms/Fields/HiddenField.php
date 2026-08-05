<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

/**
 * A value the form carries and never shows.
 *
 * WHAT IT IS FOR, AND WHAT IT IS NOT. A source tag on a lead, a step number on
 * a multi-part form, a foreign key a nested route already determined - values
 * the form must submit and the operator has no business editing.
 *
 * IT IS NOT A SECURITY BOUNDARY, and calling it one is the mistake this field
 * invites. The client can see it, change it, and submit anything; the browser
 * offers no protection a determined person cannot remove in a second. Anything
 * that must be true when the record is written belongs in the endpoint - a
 * default, a policy, or a value the controller sets and never reads from the
 * request.
 *
 * SO ITS RULES STILL APPLY. A hidden field validates exactly like a visible
 * one, because the request is the request whatever drew it.
 */
final class HiddenField extends Field
{
    public function type(): string
    {
        return 'hidden';
    }

    /*
     * IT DOES NOT OVERRIDE `label()`, AND THE ATTEMPT WAS A FATAL.
     *
     * `Field::label(string $label): static` is a SETTER. Overriding it as a
     * no-argument getter is an incompatible declaration - PHP refuses to load
     * the class, so every screen declaring one dies at construction.
     *
     * NOTHING CAUGHT IT FOR A RELEASE, because no screen declared one: the
     * field had a unit-tested schema and no consumer anywhere, so the class was
     * never actually instantiated by anything that ran. It fataled within
     * seconds of the first resource using it.
     *
     * There is nothing to override anyway. `FormFieldControl` renders NOTHING
     * for `hidden` - no wrapper, no `sr-only` label, no control - so the
     * derived label reaches no markup and no screen reader.
     */
}
