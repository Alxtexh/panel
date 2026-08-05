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

    /**
     * NO LABEL, because nothing renders to attach one to.
     *
     * `Field` derives a label from the key so that every field has one without
     * being told. Here that label would be read by a screen reader as a
     * control the user cannot reach, which is worse than silence.
     */
    public function label(): string
    {
        return '';
    }
}
