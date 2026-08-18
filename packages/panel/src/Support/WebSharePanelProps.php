<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Put `SharePanelProps` on the `web` middleware group.
 *
 * PANEL ROUTES ALREADY SHARE THESE PROPS. App-owned routes (operations that the
 * host registered, a lock screen, `/about` the application wrote itself) do
 * not, unless the middleware is on the group every web request runs. Without
 * it the shell falls off: no account menu, no footer, no padlock, while
 * `/dashboard` still looks fine.
 *
 * A CLASS RATHER THAN A METHOD ON THE COMMAND, so it can be tested against a
 * stock `bootstrap/app.php` without running `panel:install`. See `UserRoles`.
 *
 * IT ONLY EVER ADDS. An unfamiliar file is left alone and the snippet is
 * printed, because rewriting somebody's HTTP kernel on a guess is worse than
 * telling them what to write.
 */
final class WebSharePanelProps
{
    public const IMPORT = 'use Alxtexh\\Panel\\Http\\Middleware\\SharePanelProps;';

    public const SNIPPET = <<<'PHP'
        $middleware->web(append: [
            SharePanelProps::class,
        ]);
PHP;

    public static function present(string $source): bool
    {
        return str_contains($source, 'SharePanelProps');
    }

    /**
     * The source with the middleware on the web group, or null when the shape
     * is unfamiliar.
     */
    public static function add(string $source): ?string
    {
        if (self::present($source)) {
            return $source;
        }

        $updated = self::addImport($source);

        if ($updated === null) {
            return null;
        }

        if (preg_match('/withMiddleware\(function \(Middleware \$middleware\): void \{\s*\/\/\s*\}/s', $updated) === 1) {
            $replaced = preg_replace(
                '/withMiddleware\(function \(Middleware \$middleware\): void \{\s*\/\/\s*\}/s',
                "withMiddleware(function (Middleware \$middleware): void {\n".self::SNIPPET."\n    }",
                $updated,
                1,
            );

            return is_string($replaced) ? $replaced : null;
        }

        if (preg_match('/\$middleware->web\(append:\s*\[/', $updated) === 1) {
            $replaced = preg_replace(
                '/(\$middleware->web\(append:\s*\[)/',
                "$1\n            SharePanelProps::class,",
                $updated,
                1,
            );

            return is_string($replaced) ? $replaced : null;
        }

        if (preg_match('/withMiddleware\(function \(Middleware \$middleware\): void \{/', $updated) === 1) {
            $replaced = preg_replace(
                '/(withMiddleware\(function \(Middleware \$middleware\): void \{)/',
                "$1\n".self::SNIPPET,
                $updated,
                1,
            );

            return is_string($replaced) ? $replaced : null;
        }

        return null;
    }

    private static function addImport(string $source): ?string
    {
        if (str_contains($source, self::IMPORT)) {
            return $source;
        }

        $count = 0;
        $updated = preg_replace(
            '/^(use [^;]+;\R)(?!use )/m',
            '$1'.self::IMPORT."\n",
            $source,
            1,
            $count,
        );

        if ($count !== 1 || $updated === null) {
            return null;
        }

        return $updated;
    }
}
