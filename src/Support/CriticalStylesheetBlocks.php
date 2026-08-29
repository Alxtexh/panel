<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Form gap utilities, landing typography, and the dark-mode variant blocks
 * hosts need in app.css.
 *
 * THE FAILURE IS SILENT AND LOOKS LIKE A NEAR MISS. RecordForm uses
 * `.pk-form-stack` with `gap: var(--pk-form-gap)`. Without those tokens the
 * stack collapses to browser defaults while the rest of the shell looks fine.
 * Landing pages apply `.pk-editorial` / `.pk-console` on the wrapper; without
 * the rules every design reads as the same sans stack.
 *
 * `@custom-variant dark` IS THE SAME KIND OF SILENT GAP, found the same way:
 * present in the playground's own app.css, absent from the other two
 * canonical files, so a component's literal `dark:bg-red-700` followed the
 * viewer's OS colour scheme instead of the panel's own `.dark` class -
 * unreadable text on whichever install disagreed with its own OS. See
 * `useAppearance.ts`'s `isDark()` docblock for why the panel deliberately
 * never reads `prefers-color-scheme` anywhere else.
 *
 * VALUES MATCH packages/ui/src/kit/app.css and apps/playground/resources/css/app.css.
 */
final class CriticalStylesheetBlocks
{
    /** Markers that mean the host already has the full set. */
    public const REQUIRED = [
        '--pk-form-gap:',
        '.pk-form-stack',
        '.pk-editorial {',
        '.pk-console',
        '.pk-studio',
        '@custom-variant dark',
    ];

    /**
     * Canonical paths checked by StylesheetParityTest and check-css-parity.
     *
     * @return list<string> absolute paths from monorepo root
     */
    public static function canonicalPaths(string $monorepoRoot): array
    {
        return [
            $monorepoRoot.'/apps/playground/resources/css/app.css',
            $monorepoRoot.'/packages/panel/resources/stubs/app.css.stub',
            $monorepoRoot.'/packages/ui/src/kit/app.css',
        ];
    }

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
     * Append form gap and landing typography when any marker is absent.
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
     * Block `panel:update` / `panel:install` append when critical CSS is missing.
     */
    public static function snippet(): string
    {
        return <<<'CSS'
/*
 * Added by panel:update / panel:install - form gap, landing typography, and
 * the dark-mode variant.
 *
 * RecordForm uses `.pk-form-stack` with `--pk-form-gap`. Landing wrappers use
 * `.pk-editorial`, `.pk-console` and `.pk-studio` for per-design typography.
 *
 * `@custom-variant dark` repoints Tailwind's `dark:` at this panel's own
 * `.dark` class instead of the OS's `prefers-color-scheme` - without it, any
 * component using a literal `dark:bg-*`/`dark:text-*` utility follows the
 * viewer's OS setting regardless of which theme the panel is actually
 * showing. `@custom-variant` is a top-level at-rule Tailwind accepts anywhere
 * in the file, so appending it here (rather than requiring it near the top)
 * still takes effect.
 */
@custom-variant dark (&:is(.dark *));

:root {
    --pk-form-gap: 1rem;
}

.pk-form-stack {
    display: flex;
    flex-direction: column;
    gap: var(--pk-form-gap);
}

/* Landing design typography (shipped with the kit, not playground-only). */

.pk-editorial {
    --pk-heading-family: ui-serif, Georgia, 'Times New Roman', serif;
}

.pk-editorial h1,
.pk-editorial h2,
.pk-editorial h3 {
    font-family: var(--pk-heading-family);
    letter-spacing: -0.01em;
}

.pk-editorial p {
    font-family: var(--pk-heading-family);
}

.pk-editorial main section:first-of-type p:first-of-type::first-letter {
    float: left;
    margin-right: 0.08em;
    font-size: 3.1em;
    line-height: 0.82;
    font-weight: 600;
}

.pk-console h1,
.pk-console h2,
.pk-console h3,
.pk-console dd {
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;
    letter-spacing: -0.02em;
}

.pk-console main section:first-of-type h1::after {
    content: '_';
    margin-left: 0.08em;
    animation: pk-caret 1.1s steps(2, start) infinite;
}

@keyframes pk-caret {
    to {
        opacity: 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .pk-console main section:first-of-type h1::after {
        animation: none;
    }
}

.pk-studio {
    --pk-heading-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    --pk-studio-weight: 650;
}

.pk-studio h1,
.pk-studio h2,
.pk-studio h3 {
    font-family: var(--pk-heading-family);
    font-weight: var(--pk-studio-weight);
    letter-spacing: -0.025em;
}

.pk-studio main section:first-of-type h1 {
    font-weight: 750;
    letter-spacing: -0.035em;
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
            'title' => 'resources/css/app.css is missing form gap or landing typography blocks',
            'detail' => 'RecordForm expects `.pk-form-stack` and `--pk-form-gap`. Public landings '
                .'expect `.pk-editorial`, `.pk-console` and `.pk-studio` typography rules. Without them forms '
                .'and landing pages look like a broken near-neighbour of the kit.',
            'suggested' => 'Run `php artisan panel:update` (patches app.css), then rebuild '
                .'(npm run build, or rely on public/vendor/panel after install republish).',
        ]];
    }
}
