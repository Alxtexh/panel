<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Infolists;

/**
 * A monetary amount on the dedicated view page.
 *
 * Stores the amount in the smallest unit (e.g. cents). `divideBy()` tells the
 * client to divide before formatting (default 100). `currency()` sets the
 * ISO 4217 code for Intl.NumberFormat.
 */
final class MoneyEntry extends Entry
{
    private string $currency = 'USD';

    private int $divideBy = 100;

    public function type(): string
    {
        return 'money';
    }

    /** ISO 4217 currency code (e.g. USD, EUR, GBP). */
    public function currency(string $currency): static
    {
        $this->currency = $currency;

        return $this;
    }

    /**
     * Divisor for the stored integer amount. Default 100 (cents to dollars).
     * Set to 1 if the stored value is already in the major unit.
     */
    public function divideBy(int $divisor): static
    {
        $this->divideBy = $divisor;

        return $this;
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'currency' => $this->currency,
            'divideBy' => $this->divideBy,
        ];
    }
}
