<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Chrome tokens that historically produced transparent shell surfaces.
 *
 * THE FAILURE IS SILENT AND LOOKS LIKE A BROKEN THEME. Without `--sidebar` the
 * rail paints transparent. Without `--popover` the command palette and account
 * menu have no surface. Without `--radius` corners stay square until appearance
 * JS mounts. Without chart tokens widgets render uncoloured. Without the soft
 * shell rule, `html`/`body` scroll beside the inset.
 *
 * VALUES MATCH packages/panel/resources/stubs/app.css.stub. Separate from
 * SemanticStatusTokens (badges) and CriticalStylesheetBlocks (form gap /
 * landing type) so a host missing only chrome does not get a duplicate status
 * block appended.
 */
final class ThemeChromeTokens
{
    /** Markers that mean the host already has the full chrome set. */
    public const REQUIRED = [
        '--color-sidebar:',
        '--sidebar:',
        '--color-popover:',
        '--popover:',
        '--color-chart-1:',
        '--chart-1:',
        '--radius:',
        'html:has(.pk-shell)',
        'body:has(.pk-shell)',
    ];

    /**
     * @return list<string> missing substrings, empty when complete
     */
    public static function missingFrom(string $css): array
    {
        $missing = [];

        foreach (self::REQUIRED as $needle) {
            if (! str_contains($css, $needle)) {
                $missing[] = $needle;
            }
        }

        return $missing;
    }

    public static function isComplete(string $css): bool
    {
        return self::missingFrom($css) === [];
    }

    /**
     * Append chrome theme mappings and soft-shell lock when any marker is absent.
     *
     * IDEMPOTENT. Appends rather than rewriting so a host palette edit elsewhere
     * is preserved.
     *
     * @return bool true when the file was written
     */
    public static function ensureInFile(string $path): bool
    {
        if (! is_file($path)) {
            return false;
        }

        $current = (string) file_get_contents($path);

        if (self::isComplete($current)) {
            return false;
        }

        $updated = rtrim($current)."\n\n".self::snippet()."\n";

        file_put_contents($path, $updated);

        return true;
    }

    /**
     * Block `panel:update` / `panel:install` append when chrome tokens are missing.
     */
    public static function snippet(): string
    {
        return <<<'CSS'
/*
 * Added by panel:update / panel:install - sidebar, popover, chart, radius,
 * and soft shell. Without these the rail, overlays, and charts look transparent
 * or square while the rest of the kit appears fine.
 */
@theme {
    --color-popover: var(--popover);
    --color-popover-foreground: var(--popover-foreground);
    --color-sidebar: var(--sidebar-background);
    --color-sidebar-foreground: var(--sidebar-foreground);
    --color-sidebar-primary: var(--sidebar-primary);
    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
    --color-sidebar-accent: var(--sidebar-accent);
    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
    --color-sidebar-border: var(--sidebar-border);
    --color-sidebar-ring: var(--sidebar-ring);
    --color-chart-1: var(--chart-1);
    --color-chart-2: var(--chart-2);
    --color-chart-3: var(--chart-3);
    --color-chart-4: var(--chart-4);
    --color-chart-5: var(--chart-5);
    --radius-lg: var(--radius);
    --radius-md: calc(var(--radius) - 2px);
    --radius-sm: calc(var(--radius) - 4px);
}

:root {
    --popover: hsl(0 0% 100%);
    --popover-foreground: hsl(0 0% 3.9%);
    --chart-1: hsl(12 76% 61%);
    --chart-2: hsl(173 58% 39%);
    --chart-3: hsl(197 37% 24%);
    --chart-4: hsl(43 74% 66%);
    --chart-5: hsl(27 87% 67%);
    --radius: 0.5rem;
    --sidebar-background: hsl(0 0% 98%);
    --sidebar-foreground: hsl(240 5.3% 26.1%);
    --sidebar-primary: hsl(0 0% 10%);
    --sidebar-primary-foreground: hsl(0 0% 98%);
    --sidebar-accent: hsl(0 0% 94%);
    --sidebar-accent-foreground: hsl(0 0% 30%);
    --sidebar-border: hsl(0 0% 91%);
    --sidebar-ring: hsl(217.2 91.2% 59.8%);
    --sidebar: hsl(0 0% 98%);
}

.dark {
    --popover: hsl(0 0% 3.9%);
    --popover-foreground: hsl(0 0% 98%);
    --chart-1: hsl(220 70% 50%);
    --chart-2: hsl(160 60% 45%);
    --chart-3: hsl(30 80% 55%);
    --chart-4: hsl(280 65% 60%);
    --chart-5: hsl(340 75% 55%);
    --sidebar-background: hsl(0 0% 7%);
    --sidebar-foreground: hsl(0 0% 95.9%);
    --sidebar-primary: hsl(360, 100%, 100%);
    --sidebar-primary-foreground: hsl(0 0% 100%);
    --sidebar-accent: hsl(0 0% 15.9%);
    --sidebar-accent-foreground: hsl(240 4.8% 95.9%);
    --sidebar-border: hsl(0 0% 15.9%);
    --sidebar-ring: hsl(217.2 91.2% 59.8%);
    --sidebar: hsl(240 5.9% 10%);
}

html:has(.pk-shell),
body:has(.pk-shell) {
    height: 100%;
    overflow: hidden;
}
CSS;
    }

    /**
     * @return list<array{level: string, title: string, detail: string, suggested?: string}>
     */
    public static function inspect(string $css): array
    {
        if (self::isComplete($css)) {
            return [];
        }

        return [[
            'level' => 'problem',
            'title' => 'resources/css/app.css is missing sidebar / popover / chart / radius / soft-shell tokens',
            'detail' => 'The shell asks for --sidebar, --popover, --chart-*, and --radius. Without them '
                .'the rail and overlays paint transparent, charts stay uncoloured, and corners stay '
                .'square until appearance JS mounts. Soft shell (html/body:has(.pk-shell)) keeps the '
                .'document from scrolling beside the inset.',
            'suggested' => 'Run `php artisan panel:update` (patches app.css), then rebuild '
                .'(npm run build, or rely on public/vendor/panel after install republish).',
        ]];
    }
}
