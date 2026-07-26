<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

/**
 * Guards the CSS build against silently purging @panelkit/ui.
 *
 * antipatterns.md §6.1 is this exact incident: the CSS build did not scan a
 * source directory, its utilities were purged, and the failure was invisible
 * because it was PARTIAL — one class in a responsive pair survived (used
 * elsewhere) while its counterpart did not, so an element was hidden at every
 * width instead of only small ones. No error, no warning, a full build and
 * deploy cycle to find.
 *
 * It happened here too: `packages/ui` is symlinked into node_modules, which
 * Tailwind excludes by default, so `grow-0`, `accent-primary` and `max-w-full`
 * were absent from the built CSS while `w-72` survived because the topbar used
 * it. The table sized itself wrongly and the checkboxes lost their colour, and
 * nothing failed.
 *
 * So this asserts the presence of utilities that ONLY the UI package uses. If a
 * future change drops the `@source` line, or moves the package, this fails
 * loudly instead of shipping a subtly broken layout.
 */
final class StylePipelineTest extends TestCase
{
    /**
     * Utilities used exclusively inside packages/ui.
     *
     * Each must stay genuinely exclusive to be a canary — if one starts being
     * used in the app too, it will survive a purge and stop detecting anything.
     * Verify with: grep -rn "<class>" resources/js
     *
     * @var list<string>
     */
    private const CANARY_CLASSES = [
        'grow-0',         // DataTable wrapper sizing
        'accent-primary', // selection checkboxes
        'max-w-full',     // tab strip
    ];

    public function test_the_ui_package_utilities_survive_the_css_build(): void
    {
        $css = $this->builtCss();

        foreach (self::CANARY_CLASSES as $class) {
            $this->assertStringContainsString(
                $class,
                $css,
                "The utility [{$class}] is used only in packages/ui and is missing from the built CSS. "
                . 'Tailwind has stopped scanning the package — check the @source line in resources/css/app.css.'
            );
        }
    }

    private function builtCss(): string
    {
        $files = glob(public_path('build/assets/*.css')) ?: [];

        if ($files === []) {
            $this->markTestSkipped('No built CSS. Run: npm run build');
        }

        return implode("\n", array_map(static fn (string $f): string => (string) file_get_contents($f), $files));
    }
}
