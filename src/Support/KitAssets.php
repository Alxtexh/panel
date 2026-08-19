<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Prebuilt panel CSS/JS, so a first visit after `composer require` plus
 * `panel:install` is not a white page.
 *
 * Vite is optional. Hosts who customise Vue run `npm run build` and the root
 * view switches to `@vite` when `public/build/manifest.json` exists. Everyone
 * else loads `public/vendor/panel/{app.css,app.js}` copied from the package
 * `resources/client/dist/kit` tree.
 */
final class KitAssets
{
    public const PUBLIC_DIR = 'vendor/panel';

    public static function packageKitPath(): string
    {
        return dirname(__DIR__, 2).'/resources/client/dist/kit';
    }

    public static function publicPath(?string $file = null): string
    {
        $dir = public_path(self::PUBLIC_DIR);

        return $file === null ? $dir : $dir.'/'.$file;
    }

    public static function hostViteManifestExists(): bool
    {
        return is_file(public_path('build/manifest.json'));
    }

    public static function kitBundleExists(): bool
    {
        return is_file(self::packageKitPath().'/app.js')
            && is_file(self::packageKitPath().'/app.css');
    }

    /**
     * Copy kit files into public/ so the web server can serve them.
     *
     * Idempotent. Re-running after composer update refreshes the copies.
     */
    public static function publish(): bool
    {
        if (! self::kitBundleExists()) {
            return false;
        }

        $target = self::publicPath();

        if (! is_dir($target) && ! mkdir($target, 0755, true) && ! is_dir($target)) {
            return false;
        }

        foreach (['app.js', 'app.css'] as $file) {
            $from = self::packageKitPath().'/'.$file;
            $to = $target.'/'.$file;

            if (! is_file($from) || ! copy($from, $to)) {
                return false;
            }
        }

        $chunksFrom = self::packageKitPath().'/chunks';
        $chunksTo = $target.'/chunks';

        if (is_dir($chunksFrom)) {
            if (! is_dir($chunksTo) && ! mkdir($chunksTo, 0755, true) && ! is_dir($chunksTo)) {
                return false;
            }

            foreach (glob($chunksFrom.'/*') ?: [] as $chunk) {
                copy($chunk, $chunksTo.'/'.basename($chunk));
            }
        }

        $assetsFrom = self::packageKitPath().'/assets';
        $assetsTo = $target.'/assets';

        if (is_dir($assetsFrom)) {
            if (! is_dir($assetsTo) && ! mkdir($assetsTo, 0755, true) && ! is_dir($assetsTo)) {
                return false;
            }

            foreach (glob($assetsFrom.'/*') ?: [] as $asset) {
                copy($asset, $assetsTo.'/'.basename($asset));
            }
        }

        return is_file($target.'/app.js') && is_file($target.'/app.css');
    }

    public static function publishIfMissing(): bool
    {
        if (is_file(self::publicPath('app.js')) && is_file(self::publicPath('app.css'))) {
            return true;
        }

        return self::publish();
    }

    /**
     * Whether the default root view will load kit files instead of Vite.
     */
    public static function usesPublishedKit(): bool
    {
        return ! self::hostViteManifestExists();
    }
}
