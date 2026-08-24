<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Whether the published PanelLayout still mounts PanelShell.
 *
 * THAT FILE IS MEANT TO BE EDITED, and the usual edit that looks finished is
 * replacing the import with a hand-rolled sidebar. The packaged chrome
 * (sidebar landmark, account menu, footer) then never mounts, while every
 * route still answers 200.
 */
final class PanelLayoutShell
{
    public static function usesPanelShell(string $source): bool
    {
        if (! self::importsPanelShell($source)) {
            return false;
        }

        return preg_match('#<PanelShell[\s>/]#', $source) === 1;
    }

    private static function importsPanelShell(string $source): bool
    {
        return preg_match(
            '/import\s*\{[^}]*\bPanelShell\b[^}]*\}\s*from\s*[\'"]@alxtexh-enterprise\/panel\/inertia[\'"]/',
            $source,
        ) === 1;
    }
}
