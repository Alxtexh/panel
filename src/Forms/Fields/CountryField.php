<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

use PanelKit\Panel\Support\Countries;

/**
 * A country, or a dialling code.
 *
 * A FACTORY, NOT A FIELD TYPE, and that is deliberate rather than a workaround.
 * `SelectField` is final - a country field is a select with a particular option
 * list, and subclassing it would add a second class the schema, the validator
 * and the client all have to know about in order to render exactly what a select
 * already renders. What is actually missing is the LIST, so this supplies the
 * list and hands back an ordinary select.
 *
 * (The first attempt did subclass it, and PHP said no. The error was the right
 * answer: nothing about a country needs new behaviour.)
 *
 * WHY THE PACKAGE CARRIES IT AT ALL. Every application that needs one writes its
 * own array - usually the twenty countries it currently sells to - and then
 * meets the twenty-first customer. It is static reference data with a right
 * answer.
 *
 * TWO MODES, ONE LIST. `dialling()` stores `+254` and shows "Kenya (+254)";
 * `make()` stores `KE` and shows "Kenya". Splitting the data would mean two
 * lists to keep in step, which is how a country comes to be in one and not the
 * other.
 */
final class CountryField
{
    /**
     * A country, stored as its ISO 3166-1 alpha-2 code.
     *
     * THE CODE IS STORED, NOT THE NAME. A name is a display decision that
     * changes with locale and with politics; `CI` does not. A column holding
     * "Ivory Coast" and another holding "Côte d'Ivoire" are the same country and
     * will not join.
     *
     * @param  list<string>  $only  ISO codes to offer, or empty for all of them.
     */
    public static function make(string $key, array $only = []): SelectField
    {
        return SelectField::make($key)
            ->options(Countries::nameMap($only))
            ->searchable();
    }

    /**
     * A dialling code, stored with its plus.
     *
     * `+254`, NOT `254`. A stored bare number is ambiguous the moment somebody
     * concatenates it with a local number that also begins with a zero; the plus
     * is what makes E.164 unambiguous.
     *
     * THE OPTIONS ARE STILL CHOSEN BY COUNTRY - the label carries both, because
     * the code alone is not recognisable and the name alone does not say what
     * will be stored.
     *
     * @param  list<string>  $only  ISO codes to offer, or empty for all of them.
     */
    public static function dialling(string $key, array $only = []): SelectField
    {
        return SelectField::make($key)
            ->options(Countries::diallingMap($only))
            ->searchable();
    }
}
