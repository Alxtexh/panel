<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

/**
 * Release notes, inside the product.
 *
 * WHY A PANEL SHOULD HAVE ONE. Operators live in this interface daily, and a
 * control that moved or a feature that appeared is otherwise discovered by
 * accident - or reported as a bug. A release note in the product is the cheapest
 * way to stop "where did the export button go?" reaching support.
 *
 * THE MECHANISM SHIPS, THE CONTENT DOES NOT, which is the same rule the landing
 * presets and the seeders follow. A framework that shipped its own release notes
 * would put PanelKit's version history on somebody else's operations screen -
 * true of the framework, meaningless to the person reading it, and impossible to
 * correct without a package release.
 *
 * ENTRIES ARE GROUPED BY KIND rather than written as prose. "Added / changed /
 * fixed" lets somebody scan for the one line that affects them; a paragraph per
 * release has to be read in full to discover it says nothing relevant.
 */
final class Changelog
{
    /** @var list<array<string, mixed>>|null */
    private static ?array $registered = null;

    /**
     * Declare the releases in code, for an application that would rather not
     * keep them in config.
     *
     * @param  list<array<string, mixed>>  $releases
     */
    public static function set(array $releases): void
    {
        self::$registered = $releases;
    }

    /**
     * Fall back to config again.
     *
     * SET-TO-EMPTY IS NOT THE SAME AS UNSET. `set([])` is a legitimate state - an
     * application declaring that it has no releases yet - so it must win over
     * config like any other registration. A test that used it to clean up
     * therefore silenced the config for every test after it, which is exactly
     * the kind of order-dependence that makes a suite fail only in CI.
     */
    public static function forget(): void
    {
        self::$registered = null;
    }

    /**
     * Every release, newest first, in the shape the screen renders.
     *
     * NORMALISED HERE, not in the component. A consumer writing this by hand
     * will omit `fixed` on a release that fixed nothing, and a template guarding
     * every key with `v-if` is a template where a typo in a key name renders
     * nothing and says nothing. Filling the gaps once means the screen can
     * assume the shape.
     *
     * SORTED BY NOTHING. The order given is the order shown: version strings do
     * not sort ("0.10" before "0.9" under every string comparison, and after it
     * under some numeric ones), and dates are free text because a release note
     * is written for people. Whoever writes the list decides the order.
     *
     * @return list<array{version: string, date: string, highlight: string|null, added: list<string>, changed: list<string>, fixed: list<string>}>
     */
    public static function releases(): array
    {
        $source = self::$registered ?? config('panel.changelog', []);

        if (! is_array($source)) {
            return [];
        }

        $out = [];

        foreach ($source as $release) {
            if (! is_array($release) || ! isset($release['version'])) {
                continue;
            }

            $out[] = [
                'version' => (string) $release['version'],
                'date' => (string) ($release['date'] ?? ''),
                'highlight' => isset($release['highlight']) ? (string) $release['highlight'] : null,
                'added' => array_values(array_map(strval(...), (array) ($release['added'] ?? []))),
                'changed' => array_values(array_map(strval(...), (array) ($release['changed'] ?? []))),
                'fixed' => array_values(array_map(strval(...), (array) ($release['fixed'] ?? []))),
            ];
        }

        return $out;
    }

    /** Whether there is anything to show - a panel with no notes hides the link. */
    public static function isEmpty(): bool
    {
        return self::releases() === [];
    }
}
