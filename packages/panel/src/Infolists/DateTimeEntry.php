<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Infolists;

/**
 * A formatted date or datetime on the dedicated view page.
 *
 * The client already knows how to format `type: date` and `type: datetime`
 * using Intl.DateTimeFormat. This entry defaults to datetime; call `->date()`
 * to show only the date portion.
 */
final class DateTimeEntry extends Entry
{
    private string $format = 'datetime';

    public function type(): string
    {
        return $this->format;
    }

    /**
     * Show only the date, not the time.
     */
    public function date(): static
    {
        $this->format = 'date';

        return $this;
    }

    /**
     * Show date and time (the default).
     */
    public function dateTime(): static
    {
        $this->format = 'datetime';

        return $this;
    }
}
