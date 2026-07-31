<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables\Columns;

/**
 * A stored colour, shown as the colour - roadmap 4.6.
 *
 * WHAT IT REPLACES: `#7C3AED` in a monospace cell. A hex string is a value a
 * person can read and cannot SEE, so a table of brand colours, plan badges or
 * calendar categories became a list of codes that all look alike - and the one
 * question anybody opens that screen to answer is which is which.
 *
 * THE SWATCH IS NOT THE WHOLE CELL. The code stays beside it, because a colour
 * is also something people copy into a design tool, quote in a ticket and
 * search for. A swatch alone would be prettier and would have removed the only
 * machine-readable thing in the row.
 *
 * AN EMPTY OR MALFORMED VALUE RENDERS AS NOTHING RATHER THAN AS BLACK. `#000`
 * and "no colour set" are different facts, and a column that shows them
 * identically is a column that lies about a record nobody has finished
 * configuring - the same reason a null badge is an em dash rather than an
 * empty pill.
 */
final class ColourColumn extends Column
{
    private bool $showValue = true;

    public function type(): string
    {
        return 'colour';
    }

    /**
     * Show only the swatch.
     *
     * For a table where the colour is decoration rather than data - a row
     * accent, say - and the code beside every one of forty rows is noise.
     */
    public function swatchOnly(): self
    {
        $this->showValue = false;

        return $this;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            ...parent::toArray(),
            'showValue' => $this->showValue,
        ];
    }
}
