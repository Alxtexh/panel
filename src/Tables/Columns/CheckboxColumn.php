<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

/**
 * A boolean that is READ, not set - roadmap 4.6.
 *
 * THE DISTINCTION FROM `ToggleColumn` IS THE WHOLE REASON THIS EXISTS. A
 * toggle is a control: it invites a click, and one mis-click while scanning a
 * list changes a record with no confirmation and nothing to undo it with -
 * which is exactly why the plans table stopped using one for "Available" (see
 * `PlanResource`'s own note). A checkbox column is the other half of that
 * decision: the same fact, rendered as state you can scan down a column,
 * with nothing to press.
 *
 * DISABLED AND `aria-readonly`, not merely unstyled. A checkbox a keyboard
 * user can focus and toggle, whose change goes nowhere, is worse than a
 * label - it reports a change that did not happen.
 *
 * WHY NOT A BADGE. A badge is right when the states have NAMES worth reading
 * ("Available", "Retired"); a checkbox is right when the question is simply
 * yes or no and forty rows are being compared - a column of ticks and blanks
 * is read at a glance, a column of pills is read one at a time.
 */
final class CheckboxColumn extends Column
{
    private ?string $trueLabel = null;

    private ?string $falseLabel = null;

    public function type(): string
    {
        return 'checkbox';
    }

    /**
     * What a screen reader says for each state.
     *
     * A bare checkbox announces "checked" - true of the control, useless
     * about the record. "Verified" and "Not verified" are what the column
     * actually means.
     */
    public function labels(string $true, string $false): self
    {
        $this->trueLabel = $true;
        $this->falseLabel = $false;

        return $this;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            ...parent::toArray(),
            'trueLabel' => $this->trueLabel,
            'falseLabel' => $this->falseLabel,
        ];
    }
}
