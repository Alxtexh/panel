<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Whether `resources/js/app.ts` still applies PanelLayout.
 *
 * THE FAILURE IS A NAKED PAGE THAT RETURNS 200. Packaged screens set
 * `defineOptions({ layout: { breadcrumbs } })` as layout PROPS. Inertia only
 * wraps those in the shell when `createInertiaApp` has a layout callback.
 * `page.default.layout ??= PanelLayout` skips that wrap whenever a page already
 * set a layout value. Doctor reads this file because the symptom looks like a
 * missing sidebar, not a missing callback.
 */
final class InertiaLayoutWiring
{
    /**
     * @return list<array{level: string, title: string, detail: string, suggested?: string}>
     */
    public static function inspect(string $source): array
    {
        if (! str_contains($source, 'PanelLayout') && ! str_contains($source, 'AppLayout')) {
            return [[
                'level' => 'problem',
                'title' => 'resources/js/app.ts does not reference PanelLayout',
                'detail' => 'The panel shell is applied in this file. Restoring the install stub '
                    .'(createInertiaApp layout callback that returns PanelLayout) brings the '
                    .'sidebar back. Do not set layout: null on panel pages. A host that replaced '
                    .'PanelLayout with AppLayout is fine as long as that name is still returned.',
                'suggested' => 'Copy the layout callback from vendor/alxtexh-enterprise/panel/resources/stubs/app.ts.stub',
            ]];
        }

        $hasLayoutCallback = preg_match('/\blayout\s*:\s*(?:\(|function\b)/', $source) === 1;
        $hasResolveAssign = str_contains($source, 'page.default.layout');

        if (! $hasLayoutCallback && ! $hasResolveAssign) {
            return [[
                'level' => 'problem',
                'title' => 'resources/js/app.ts never applies PanelLayout',
                'detail' => 'Neither a createInertiaApp({ layout: (name) => … }) callback nor a '
                    .'resolve-time page.default.layout assignment is present, so screens '
                    .'render without the shell. Prefer the layout callback from the install stub.',
                'suggested' => 'Restore the layout callback from the panel app.ts.stub',
            ]];
        }

        if (! $hasLayoutCallback && str_contains($source, 'page.default.layout') && str_contains($source, '??=')) {
            return [[
                'level' => 'problem',
                'title' => 'resources/js/app.ts assigns layout with ??= in resolve',
                'detail' => 'Pages that set defineOptions({ layout: { breadcrumbs } }) already have a '
                    .'layout value, so ??= skips PanelLayout and the shell disappears while routes '
                    .'still return 200. Switch to createInertiaApp({ layout: (name) => … }) like '
                    .'the current install stub.',
                'suggested' => 'Copy the layout callback from vendor/alxtexh-enterprise/panel/resources/stubs/app.ts.stub',
            ]];
        }

        return [];
    }
}
