<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * The package's config, merged INTO a published one key by key.
 *
 * WHY THIS EXISTS. `mergeConfigFrom` is a shallow `array_merge`: a published
 * `config/panel.php` supplies `auth` WHOLE, so a key a later version added
 * inside it - `auth.password.max_age_days` - is simply not there. `config()`
 * reads it as unset, and how bad that is depends on the call site. One that
 * passes its own default degrades quietly to it: the value cannot be edited
 * from the file that appears to hold it. One that does not gets null, and that
 * is shaped like an ABSENT FEATURE - the screen the key enables does not
 * appear, nothing errors, and the reasonable conclusion ("this version did not
 * ship it") is wrong.
 *
 * This has now been reported from a real port and hit twice in this repository,
 * which is why the fix is the merge itself rather than another report.
 *
 * A LIST IS A VALUE, NOT A NAMESPACE, and that distinction is the whole design.
 * An application that cut `abilities` to the four it uses has CONFIGURED that
 * key; unioning the package's back in would overrule a deliberate edit and, for
 * `plugins`, silently reinstall something somebody removed. So:
 *
 *   associative array  a namespace  → merged key by key, package fills the gaps
 *   list               a value      → the published one wins whole
 *
 * WHAT THE MERGE THEREFORE CANNOT FIX is an entry a new version adds to a
 * packaged LIST - which is exactly how `TicketingPlugin` reached nobody for a
 * release. That case is reported by `ConfigDrift` and checked by `panel:doctor`
 * instead, because only the application can say whether an absent plugin is
 * missing or unwanted.
 *
 * TWO MAPS ARE VALUES TOO. `discover` and `discover_pages` are keyed by
 * absolute PATH, so the package's default names a directory in the package
 * author's own application; merging it into an installation that scans
 * somewhere else would add a path that means nothing there. They are lists that
 * happen to carry their namespace in the key.
 */
final class ConfigMerge
{
    /**
     * Keys whose array value is a value rather than a namespace, despite being
     * keyed by string. See the class note - both are keyed by filesystem path.
     */
    private const VALUE_MAPS = ['discover', 'discover_pages'];

    /**
     * @param  array<mixed>  $package  The package's own config file.
     * @param  array<mixed>  $published  The application's copy, which wins.
     * @return array<mixed>
     */
    public static function deep(array $package, array $published, string $prefix = ''): array
    {
        $merged = $package;

        foreach ($published as $key => $value) {
            $path = $prefix === '' ? (string) $key : $prefix.'.'.$key;

            $mergeable = is_string($key)
                && is_array($value)
                && isset($package[$key])
                && is_array($package[$key])
                && ! array_is_list($value)
                && ! array_is_list($package[$key])
                && ! in_array($path, self::VALUE_MAPS, true);

            $merged[$key] = $mergeable
                ? self::deep($package[$key], $value, $path)
                : $value;
        }

        return $merged;
    }
}
