<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

/**
 * Which language the panel is in, and which way it runs.
 *
 * DIRECTION IS A PROPERTY OF THE LOCALE, not a separate setting. Offering "RTL"
 * as its own toggle invites the two to disagree - Arabic rendered left to right,
 * or English mirrored - and both are states nobody ever wants and somebody will
 * eventually reach. One list, derived.
 *
 * THE LIST IS SHORT AND DELIBERATE. Every RTL script in use is here; adding a
 * locale the panel has no translations for would make the switcher offer
 * languages that render as untranslated English, which is worse than not
 * offering them.
 */
final class Locale
{
    /**
     * Languages written right to left.
     *
     * Matched on the SUBTAG, so `ar`, `ar-EG` and `ar_SA` all resolve together -
     * a region does not change which way a script runs, and listing every region
     * would be a list that is always missing one.
     */
    public const RTL = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'yi', 'dv', 'ckb'];

    /** @return 'rtl'|'ltr' */
    public static function direction(?string $locale = null): string
    {
        $locale = $locale ?? app()->getLocale();

        // `ar-EG` and `ar_EG` both reduce to `ar`.
        $subtag = strtolower(preg_split('/[-_]/', $locale)[0] ?? '');

        return in_array($subtag, self::RTL, true) ? 'rtl' : 'ltr';
    }

    public static function isRtl(?string $locale = null): bool
    {
        return self::direction($locale) === 'rtl';
    }

    /**
     * The locales this installation actually has translations for.
     *
     * READ FROM DISK rather than configured, so a language added by dropping in
     * a directory appears without a second edit somebody forgets - and, more
     * importantly, so a language REMOVED cannot linger in a config and be
     * offered as an option that renders nothing.
     *
     * @return list<string>
     */
    public static function available(): array
    {
        $path = lang_path();

        if (! is_dir($path)) {
            return [config('app.locale', 'en')];
        }

        $found = array_values(array_filter(
            array_map('basename', glob($path.'/*', GLOB_ONLYDIR) ?: []),
            static fn (string $dir): bool => (bool) preg_match('/^[a-z]{2,3}([-_][A-Za-z]{2,4})?$/', $dir),
        ));

        sort($found);

        return $found === [] ? [config('app.locale', 'en')] : $found;
    }

    /**
     * Every string the frontend needs, for the current locale.
     *
     * SENT WHOLE, ONCE, WITH THE PAGE. The panel's string set is a few kilobytes
     * - smaller than one icon - and fetching it separately would mean a frame
     * where every label on screen is a translation key. Shipping it inline costs
     * less than the flash costs.
     *
     * @return array<string, mixed>
     */
    public static function messages(?string $locale = null): array
    {
        $locale = $locale ?? app()->getLocale();
        $file = lang_path($locale.'/panel.php');

        if (! is_file($file)) {
            /*
             * FALL BACK RATHER THAN FAIL. A missing file means a locale was
             * selected that has no strings - the honest result is English, not
             * an exception on every page or a screen of raw keys.
             */
            $file = lang_path(config('app.fallback_locale', 'en').'/panel.php');
        }

        return is_file($file) ? (array) require $file : [];
    }
}
