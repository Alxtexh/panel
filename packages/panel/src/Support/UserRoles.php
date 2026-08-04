<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

/**
 * Adding Spatie's `HasRoles` to an application's user model.
 *
 * THE QUIETEST FAILURE THIS PACKAGE HAS. `spatie/laravel-permission` is a HARD
 * dependency: the tables migrate, `panel:permissions sync` creates every ability
 * and an Administrator role that holds them all, and every one of those steps
 * reports success. But a stock `laravel/laravel` `User` does not use `HasRoles`,
 * so it has no `assignRole()` and no `hasPermission()` - the role exists and
 * nobody can hold it, and every screen refuses the person who owns the
 * installation. Nothing throws. Nothing logs. There is a panel that says no.
 *
 * A CLASS RATHER THAN A METHOD ON THE COMMAND, so it can be tested against a
 * stock model without running `panel:install`. That is not tidiness: the first
 * version of the test DID run the installer, against a temporary base path - and
 * `Application::setBasePath()` does not move `configPath`, so `publishConfig()`
 * wrote the package's default config over the reference application's. A test
 * that damages the repository it is testing is worse than no test.
 *
 * IT ONLY EVER ADDS. A file that does not match the shape below is left alone
 * and reported, because rewriting somebody's user model on a guess is worse
 * than telling them what to write.
 */
final class UserRoles
{
    public const IMPORT = 'use Spatie\\Permission\\Traits\\HasRoles;';

    public const TRAIT = 'use HasRoles;';

    /** Does this model already hold roles? */
    public static function present(string $source): bool
    {
        return str_contains($source, 'HasRoles');
    }

    /**
     * The source with the trait added, or null when the shape is unfamiliar.
     *
     * ANCHORED ON THE CLASS DECLARATION, not on a line number or the closing
     * brace: a trait goes first in the body, and the body is the only place it
     * can go.
     */
    public static function add(string $source): ?string
    {
        if (self::present($source)) {
            return $source;
        }

        $count = 0;

        $updated = preg_replace(
            '/^(class\s+\w+\s+extends[^\{]*\{\R)/m',
            '$1    '.self::TRAIT."\n",
            $source,
            1,
            $count
        );

        if ($count !== 1 || $updated === null) {
            return null;
        }

        /*
         * THE IMPORT AFTER THE LAST ONE THE FILE ALREADY HAS. Matching the last
         * `use X;` that is not followed by another keeps the block together and
         * survives a file whose imports are not alphabetical - which Pint will
         * sort afterwards anyway.
         */
        $withImport = preg_replace(
            '/^(use [^;]+;\R)(?!use )/m',
            '$1'.self::IMPORT."\n",
            $updated,
            1,
            $count
        );

        return $count === 1 ? $withImport : null;
    }

    /**
     * Where the configured user model's file is, or null if it cannot be found.
     *
     * ONLY UNDER `app/`, because that is the only place this can resolve a
     * namespace to a path without asking composer - and a model somewhere else
     * is an arrangement this should report rather than guess at.
     */
    public static function pathFor(string $model, string $appPath): ?string
    {
        if (! str_starts_with($model, 'App\\')) {
            return null;
        }

        $path = rtrim($appPath, '/').'/'.str_replace('\\', '/', substr($model, 4)).'.php';

        return is_file($path) ? $path : null;
    }
}
