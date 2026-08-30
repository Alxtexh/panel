<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Status colour tokens badges and toggles ask for (`success`, `warning`, `info`).
 *
 * THE FAILURE IS SILENT AND LOOKS LIKE PLAIN TEXT. PkBadge variants
 * `bg-success` / `bg-warning` / `bg-info` only exist when Tailwind's `@theme`
 * registers `--color-success` (and friends). Hosts that installed before
 * those tokens shipped still have `--destructive` only, so every success /
 * warning / info badge renders uncoloured while PHP correctly sends
 * `colors: { active: "success" }` and the client correctly resolves the
 * variant name.
 *
 * VALUES MATCH apps/playground/resources/css/app.css. They are fixed status
 * meanings, never overwritten by tenant brand / appearanceVars().
 */
final class SemanticStatusTokens
{
    /** Markers that mean the host already has the full set. */
    private const REQUIRED = [
        '--color-success:',
        '--color-warning:',
        '--color-info:',
        '--success:',
        '--warning:',
        '--info:',
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
     * Append theme mappings and light/dark values when any status token is absent.
     *
     * IDEMPOTENT. A file that already defines the set is unchanged. Appends
     * rather than rewriting so a host palette edit elsewhere is preserved.
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
     * Block `panel:update` / `panel:install` append when status tokens are missing.
     */
    public static function snippet(): string
    {
        return <<<'CSS'
/*
 * Added by panel:update / panel:install - status badge tokens.
 *
 * PkBadge (and PkToggleButtons) use bg-success / bg-warning / bg-info.
 * Without --color-* in @theme those utilities never compile, so badges
 * that correctly resolve to "success" render as plain uncoloured text.
 * Fixed meanings: appearanceVars() and tenant brand must not overwrite them.
 */
@theme {
    --color-success: var(--success);
    --color-success-foreground: var(--success-foreground);
    --color-warning: var(--warning);
    --color-warning-foreground: var(--warning-foreground);
    --color-info: var(--info);
    --color-info-foreground: var(--info-foreground);
}

:root {
    --success: hsl(142 71% 28%);
    --success-foreground: hsl(0 0% 98%);
    --warning: hsl(38 92% 46%);
    --warning-foreground: hsl(0 0% 9%);
    --info: hsl(199 89% 33%);
    --info-foreground: hsl(0 0% 98%);
}

.dark {
    --success: hsl(142 65% 50%);
    --success-foreground: hsl(0 0% 9%);
    --warning: hsl(38 92% 58%);
    --warning-foreground: hsl(0 0% 9%);
    --info: hsl(199 89% 58%);
    --info-foreground: hsl(0 0% 9%);
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
            'title' => 'resources/css/app.css is missing success / warning / info colour tokens',
            'detail' => 'PkBadge variants bg-success, bg-warning and bg-info only exist when '
                .'Tailwind registers --color-success (and warning/info). Without them, status '
                .'badges render as plain uncoloured text even when the schema sends the right intent.',
            'suggested' => 'Run `php artisan panel:update` (patches app.css), then rebuild '
                .'(npm run build, or rely on public/vendor/panel after install republish).',
        ]];
    }
}
