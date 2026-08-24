<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Whether `resources/views/app.blade.php` still embeds appearance before CSS.
 *
 * THE FAILURE IS A FLASH OF THE KIT DEFAULT, then the account theme. The
 * include must stay in `<head>` above every stylesheet and Vite/kit script.
 * Doctor reads the published root view because hosts often reorder `<head>`
 * and drop the include without noticing first paint.
 */
final class AppearancePrepaintWiring
{
    private const INCLUDE = 'panel::appearance-prepaint';

    /**
     * @return list<array{level: string, title: string, detail: string, suggested?: string}>
     */
    public static function inspect(string $source): array
    {
        if (! str_contains($source, self::INCLUDE)) {
            return [[
                'level' => 'problem',
                'title' => 'resources/views/app.blade.php is missing panel::appearance-prepaint',
                'detail' => 'Without that include in <head> before CSS, the account theme flashes '
                    .'the kit default on first paint. Keep @include(\'panel::appearance-prepaint\') '
                    .'above every stylesheet and Vite/kit script.',
                'suggested' => "Add @include('panel::appearance-prepaint') in <head> before CSS. See docs/01-install.md.",
            ]];
        }

        $includePos = strpos($source, self::INCLUDE);

        if ($includePos === false) {
            return [];
        }

        foreach (['@vite(', 'vendor/panel/app.css', 'rel="stylesheet"', "rel='stylesheet'"] as $marker) {
            $pos = strpos($source, $marker);

            if ($pos !== false && $pos < $includePos) {
                return [[
                    'level' => 'problem',
                    'title' => 'panel::appearance-prepaint runs after CSS in app.blade.php',
                    'detail' => 'The include must stay above @vite and every stylesheet. Below CSS, '
                        .'first paint still shows kit defaults before the account theme applies.',
                    'suggested' => "Move @include('panel::appearance-prepaint') above every stylesheet in <head>.",
                ]];
            }
        }

        return [];
    }
}
