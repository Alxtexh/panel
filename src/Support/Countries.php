<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Countries, their names and their dialling codes.
 *
 * WHY THE PACKAGE CARRIES THE LIST. Every application that needs one writes its
 * own array - usually the twenty countries it currently sells to - and then
 * meets the twenty-first customer. It is static reference data with a right
 * answer, so keeping it in one place means every installation has the same one
 * and it is correct on the day somebody expands.
 *
 * KEYED BY ISO 3166-1 ALPHA-2, which is what gets STORED. A name is a display
 * decision that changes with locale and with politics; `CI` does not. A column
 * holding "Ivory Coast" and another holding "Côte d'Ivoire" are the same country
 * and will not join.
 *
 * DIALLING CODES ARE NOT UNIQUE and that is not a bug: `+1` is the United
 * States, Canada, Jamaica and the Dominican Republic. Anything keying on the
 * dialling code alone has already lost information, which is the argument for
 * storing the ISO code wherever there is a choice.
 *
 * @see Forms\Fields\CountryField
 */
final class Countries
{
    /**
     * ISO code => [name, dialling code].
     *
     * @var array<string, array{0: string, 1: string}>
     */
    private const ALL = [
        'AF' => ['Afghanistan', '+93'],
        'AL' => ['Albania', '+355'],
        'DZ' => ['Algeria', '+213'],
        'AD' => ['Andorra', '+376'],
        'AO' => ['Angola', '+244'],
        'AR' => ['Argentina', '+54'],
        'AM' => ['Armenia', '+374'],
        'AU' => ['Australia', '+61'],
        'AT' => ['Austria', '+43'],
        'AZ' => ['Azerbaijan', '+994'],
        'BH' => ['Bahrain', '+973'],
        'BD' => ['Bangladesh', '+880'],
        'BY' => ['Belarus', '+375'],
        'BE' => ['Belgium', '+32'],
        'BZ' => ['Belize', '+501'],
        'BJ' => ['Benin', '+229'],
        'BT' => ['Bhutan', '+975'],
        'BO' => ['Bolivia', '+591'],
        'BA' => ['Bosnia and Herzegovina', '+387'],
        'BW' => ['Botswana', '+267'],
        'BR' => ['Brazil', '+55'],
        'BN' => ['Brunei', '+673'],
        'BG' => ['Bulgaria', '+359'],
        'BF' => ['Burkina Faso', '+226'],
        'BI' => ['Burundi', '+257'],
        'KH' => ['Cambodia', '+855'],
        'CM' => ['Cameroon', '+237'],
        'CA' => ['Canada', '+1'],
        'CV' => ['Cape Verde', '+238'],
        'CF' => ['Central African Republic', '+236'],
        'TD' => ['Chad', '+235'],
        'CL' => ['Chile', '+56'],
        'CN' => ['China', '+86'],
        'CO' => ['Colombia', '+57'],
        'KM' => ['Comoros', '+269'],
        'CG' => ['Congo', '+242'],
        'CD' => ['Congo (DRC)', '+243'],
        'CR' => ['Costa Rica', '+506'],
        'CI' => ['Côte d\'Ivoire', '+225'],
        'HR' => ['Croatia', '+385'],
        'CU' => ['Cuba', '+53'],
        'CY' => ['Cyprus', '+357'],
        'CZ' => ['Czechia', '+420'],
        'DK' => ['Denmark', '+45'],
        'DJ' => ['Djibouti', '+253'],
        'DO' => ['Dominican Republic', '+1'],
        'EC' => ['Ecuador', '+593'],
        'EG' => ['Egypt', '+20'],
        'SV' => ['El Salvador', '+503'],
        'GQ' => ['Equatorial Guinea', '+240'],
        'ER' => ['Eritrea', '+291'],
        'EE' => ['Estonia', '+372'],
        'SZ' => ['Eswatini', '+268'],
        'ET' => ['Ethiopia', '+251'],
        'FJ' => ['Fiji', '+679'],
        'FI' => ['Finland', '+358'],
        'FR' => ['France', '+33'],
        'GA' => ['Gabon', '+241'],
        'GM' => ['Gambia', '+220'],
        'GE' => ['Georgia', '+995'],
        'DE' => ['Germany', '+49'],
        'GH' => ['Ghana', '+233'],
        'GR' => ['Greece', '+30'],
        'GT' => ['Guatemala', '+502'],
        'GN' => ['Guinea', '+224'],
        'GW' => ['Guinea-Bissau', '+245'],
        'GY' => ['Guyana', '+592'],
        'HT' => ['Haiti', '+509'],
        'HN' => ['Honduras', '+504'],
        'HK' => ['Hong Kong', '+852'],
        'HU' => ['Hungary', '+36'],
        'IS' => ['Iceland', '+354'],
        'IN' => ['India', '+91'],
        'ID' => ['Indonesia', '+62'],
        'IR' => ['Iran', '+98'],
        'IQ' => ['Iraq', '+964'],
        'IE' => ['Ireland', '+353'],
        'IL' => ['Israel', '+972'],
        'IT' => ['Italy', '+39'],
        'JM' => ['Jamaica', '+1'],
        'JP' => ['Japan', '+81'],
        'JO' => ['Jordan', '+962'],
        'KZ' => ['Kazakhstan', '+7'],
        'KE' => ['Kenya', '+254'],
        'KW' => ['Kuwait', '+965'],
        'KG' => ['Kyrgyzstan', '+996'],
        'LA' => ['Laos', '+856'],
        'LV' => ['Latvia', '+371'],
        'LB' => ['Lebanon', '+961'],
        'LS' => ['Lesotho', '+266'],
        'LR' => ['Liberia', '+231'],
        'LY' => ['Libya', '+218'],
        'LI' => ['Liechtenstein', '+423'],
        'LT' => ['Lithuania', '+370'],
        'LU' => ['Luxembourg', '+352'],
        'MG' => ['Madagascar', '+261'],
        'MW' => ['Malawi', '+265'],
        'MY' => ['Malaysia', '+60'],
        'MV' => ['Maldives', '+960'],
        'ML' => ['Mali', '+223'],
        'MT' => ['Malta', '+356'],
        'MR' => ['Mauritania', '+222'],
        'MU' => ['Mauritius', '+230'],
        'MX' => ['Mexico', '+52'],
        'MD' => ['Moldova', '+373'],
        'MC' => ['Monaco', '+377'],
        'MN' => ['Mongolia', '+976'],
        'ME' => ['Montenegro', '+382'],
        'MA' => ['Morocco', '+212'],
        'MZ' => ['Mozambique', '+258'],
        'MM' => ['Myanmar', '+95'],
        'NA' => ['Namibia', '+264'],
        'NP' => ['Nepal', '+977'],
        'NL' => ['Netherlands', '+31'],
        'NZ' => ['New Zealand', '+64'],
        'NI' => ['Nicaragua', '+505'],
        'NE' => ['Niger', '+227'],
        'NG' => ['Nigeria', '+234'],
        'KP' => ['North Korea', '+850'],
        'MK' => ['North Macedonia', '+389'],
        'NO' => ['Norway', '+47'],
        'OM' => ['Oman', '+968'],
        'PK' => ['Pakistan', '+92'],
        'PS' => ['Palestine', '+970'],
        'PA' => ['Panama', '+507'],
        'PG' => ['Papua New Guinea', '+675'],
        'PY' => ['Paraguay', '+595'],
        'PE' => ['Peru', '+51'],
        'PH' => ['Philippines', '+63'],
        'PL' => ['Poland', '+48'],
        'PT' => ['Portugal', '+351'],
        'QA' => ['Qatar', '+974'],
        'RO' => ['Romania', '+40'],
        'RU' => ['Russia', '+7'],
        'RW' => ['Rwanda', '+250'],
        'SA' => ['Saudi Arabia', '+966'],
        'SN' => ['Senegal', '+221'],
        'RS' => ['Serbia', '+381'],
        'SC' => ['Seychelles', '+248'],
        'SL' => ['Sierra Leone', '+232'],
        'SG' => ['Singapore', '+65'],
        'SK' => ['Slovakia', '+421'],
        'SI' => ['Slovenia', '+386'],
        'SO' => ['Somalia', '+252'],
        'ZA' => ['South Africa', '+27'],
        'KR' => ['South Korea', '+82'],
        'SS' => ['South Sudan', '+211'],
        'ES' => ['Spain', '+34'],
        'LK' => ['Sri Lanka', '+94'],
        'SD' => ['Sudan', '+249'],
        'SE' => ['Sweden', '+46'],
        'CH' => ['Switzerland', '+41'],
        'SY' => ['Syria', '+963'],
        'TW' => ['Taiwan', '+886'],
        'TJ' => ['Tajikistan', '+992'],
        'TZ' => ['Tanzania', '+255'],
        'TH' => ['Thailand', '+66'],
        'TG' => ['Togo', '+228'],
        'TN' => ['Tunisia', '+216'],
        'TR' => ['Türkiye', '+90'],
        'TM' => ['Turkmenistan', '+993'],
        'UG' => ['Uganda', '+256'],
        'UA' => ['Ukraine', '+380'],
        'AE' => ['United Arab Emirates', '+971'],
        'GB' => ['United Kingdom', '+44'],
        'US' => ['United States', '+1'],
        'UY' => ['Uruguay', '+598'],
        'UZ' => ['Uzbekistan', '+998'],
        'VE' => ['Venezuela', '+58'],
        'VN' => ['Vietnam', '+84'],
        'YE' => ['Yemen', '+967'],
        'ZM' => ['Zambia', '+260'],
        'ZW' => ['Zimbabwe', '+263'],
    ];

    /**
     * `KE => Kenya`, in name order.
     *
     * SORTED BY NAME, NOT BY CODE, because the list is read by a person looking
     * for a word. Code order puts Andorra beside Angola and Afghanistan first,
     * which is alphabetical by something nobody is scanning for.
     *
     * @param  list<string>  $only  ISO codes, or empty for all of them.
     * @return array<string, string>
     */
    public static function nameMap(array $only = []): array
    {
        $out = [];

        foreach (self::filtered($only) as $code => [$name, $dialling]) {
            $out[$code] = $name;
        }

        asort($out);

        return $out;
    }

    /**
     * `+254 => Kenya (+254)`, in name order.
     *
     * THE LABEL CARRIES BOTH because the code alone is not recognisable and the
     * name alone does not say what will be stored. Somebody choosing here is
     * picking a country and needs to see the number they are agreeing to.
     *
     * KEYED BY DIALLING CODE, so shared codes collapse to one entry - `+1`
     * appears once. Which of the four countries it names is arbitrary and
     * visible, which is better than four identical-looking options.
     *
     * @param  list<string>  $only  ISO codes, or empty for all of them.
     * @return array<string, string>
     */
    public static function diallingMap(array $only = []): array
    {
        $out = [];

        foreach (self::filtered($only) as [$name, $dialling]) {
            $out[$dialling] ??= "{$name} ({$dialling})";
        }

        asort($out);

        return $out;
    }

    /** The dialling code for one ISO code, or null. */
    public static function dialling(string $code): ?string
    {
        return self::ALL[strtoupper($code)][1] ?? null;
    }

    /** The name for one ISO code, or null. */
    public static function name(string $code): ?string
    {
        return self::ALL[strtoupper($code)][0] ?? null;
    }

    /**
     * @param  list<string>  $only
     * @return array<string, array{0: string, 1: string}>
     */
    private static function filtered(array $only): array
    {
        if ($only === []) {
            return self::ALL;
        }

        /*
         * UNKNOWN CODES ARE DROPPED, not fatal. A typo in an installation's
         * country list should narrow the dropdown, not break the form it is on.
         */
        return array_intersect_key(self::ALL, array_flip(array_map(strtoupper(...), $only)));
    }
}
