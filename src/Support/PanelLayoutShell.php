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
        return str_contains($source, 'PanelShell');
    }
}
