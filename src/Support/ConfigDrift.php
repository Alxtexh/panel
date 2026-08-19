<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * The one thing the config merge cannot fix: a plugin added to the package's
 * own `plugins` list after an installation published its config.
 *
 * THIS CLASS USED TO REPORT SOMETHING ELSE. It walked the two files for keys
 * inside a published array - `auth.password.max_age_days` and its kind - which
 * `mergeConfigFrom` could not supply because it merges one level deep.
 * `ConfigMerge` now supplies them, so that report could never fire again, and a
 * report that always says "nothing" is worse than no report: it is read as
 * evidence.
 *
 * WHAT SURVIVES THE MERGE IS THE LIST, deliberately. A list is a value, not a
 * namespace - an application that cut `abilities` to the four it uses
 * configured that key, and unioning the package's back in would silently
 * reinstall a plugin somebody removed on purpose. So `plugins` stays whatever
 * the application published, and the cost is that a plugin a NEW VERSION ships
 * reaches nobody who published a config before it existed.
 *
 * THAT IS NOT HYPOTHETICAL. `TicketingPlugin` shipped in the package for a
 * release and was registered nowhere: `composer require` installed the classes,
 * somebody set `panel.ticketing.operator`, and got no route, no navigation
 * entry and no error - because the plugin they were configuring had never been
 * handed to the manager. `AnnouncementsPlugin` has exactly the same exposure.
 *
 * ONLY `plugins`, and not every list. `pagination.per_page_options` and
 * `alerts.telegram.ignore` are lists an installation is EXPECTED to shorten;
 * reporting those differences would put lines needing no action in front of
 * every upgrader, and a report where most rows need nothing is one nobody reads
 * to the end - including on the release where a row mattered.
 */
final class ConfigDrift
{
    /**
     * @param  array<mixed>  $ours  The package's own config file, as an array.
     * @param  array<mixed>  $theirs  The application's published copy.
     * @return list<string> Plugin classes the package registers and they do not.
     */
    public static function pluginsNotSuppliedByMerge(array $ours, array $theirs): array
    {
        $packaged = array_filter((array) ($ours['plugins'] ?? []), 'is_string');

        /*
         * A CONFIG THAT NEVER NAMES `plugins` GETS THE DEFAULT WHOLE, because
         * the merge is only blocked by a key the application actually supplies.
         * Treating an absent key as an empty list would report every packaged
         * plugin to somebody who has all of them.
         */
        if (! array_key_exists('plugins', $theirs)) {
            return [];
        }

        $installed = array_filter((array) $theirs['plugins'], 'is_string');

        return array_values(array_diff($packaged, $installed));
    }
}
