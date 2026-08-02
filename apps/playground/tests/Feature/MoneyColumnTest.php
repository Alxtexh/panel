<?php

declare(strict_types=1);

namespace Tests\Feature;

use PanelKit\Panel\Tables\Columns\MoneyColumn;
use Tests\TestCase;

/**
 * An amount of money as ONE column.
 *
 * REPORTED FROM A REAL PORT: amount and currency had to be split across two
 * columns, so an invoice list read `1250.00 | KES` under two headings instead
 * of `KSh 1,250.00` under one.
 *
 * WHAT IS ASSERTED HERE IS THE SCHEMA, not the formatting, and that split is
 * deliberate rather than laziness. The number is formatted by
 * `Intl.NumberFormat` in the browser, because that is the only place that knows
 * whether this reader groups with a comma or a space - formatting on the server
 * would print the SERVER's locale to everybody. So what PHP can be held to is
 * that it declares the right intent, which is what these tests pin.
 */
final class MoneyColumnTest extends TestCase
{
    public function test_it_declares_a_money_column(): void
    {
        $schema = MoneyColumn::make('amount')->currency('kes')->toSchema();

        $this->assertSame('money', $schema['type']);

        // UPPERCASED, because `Intl.NumberFormat` takes ISO 4217 codes and
        // raises a RangeError on a lowercase one - a typo that would cost the
        // cell its symbol rather than being corrected here.
        $this->assertSame('KES', $schema['currency']);
    }

    /**
     * MINOR UNITS UNLESS TOLD OTHERWISE, and the flag emitted is the one that
     * DIFFERS from the default.
     *
     * `Column::toArray()` strips both nulls and `false`, so a `minorUnits`
     * flag would vanish from the payload exactly when it was turned off - and
     * the client would read its absence as the default, silently rendering
     * every amount a hundred times too small.
     */
    public function test_minor_units_are_the_default_and_major_is_the_flag(): void
    {
        $this->assertArrayNotHasKey(
            'major',
            MoneyColumn::make('amount')->toSchema(),
            'The default is emitted, so the flag that survives cannot mean what it says.',
        );

        $this->assertTrue(MoneyColumn::make('amount')->major()->toSchema()['major']);
    }

    /**
     * A FIXED CURRENCY AND A PER-ROW ONE ARE EXCLUSIVE.
     *
     * Sending both would leave the client choosing, and whichever it chose
     * would be wrong for somebody: a multi-currency table that also carries a
     * default would render every row in the default and look consistent.
     */
    public function test_naming_a_currency_column_clears_a_fixed_one(): void
    {
        $schema = MoneyColumn::make('amount')
            ->currency('EUR')
            ->currencyFrom('currency_code')
            ->toSchema();

        $this->assertSame('currency_code', $schema['currencyColumn']);
        $this->assertArrayNotHasKey('currency', $schema);
    }

    public function test_naming_a_fixed_currency_clears_a_column(): void
    {
        $schema = MoneyColumn::make('amount')
            ->currencyFrom('currency_code')
            ->currency('EUR')
            ->toSchema();

        $this->assertSame('EUR', $schema['currency']);
        $this->assertArrayNotHasKey('currencyColumn', $schema);
    }
}
