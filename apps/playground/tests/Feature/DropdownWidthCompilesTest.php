<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

/**
 * The dropdown's minimum width exists as CSS, not just as a class name.
 *
 * WHY THIS IS A TEST AT ALL. The first fix set `min-w-44`, which Tailwind
 * generated no rule for - so the only surviving declaration was `w-max` and
 * every menu hugged its text. A dropdown that had been too wide became too
 * tight, the component test still passed because the CLASS was on the element,
 * and nothing anywhere reported that the class meant nothing.
 *
 * A class name is not a style. This reads the built stylesheet.
 */
final class DropdownWidthCompilesTest extends TestCase
{
    public function test_the_dropdown_minimum_width_compiles_to_a_rule(): void
    {
        $files = glob(public_path('build/assets/*.css')) ?: [];

        if ($files === []) {
            $this->markTestSkipped('No production build present - run `npm run build`.');
        }

        $css = '';

        foreach ($files as $file) {
            $css .= (string) file_get_contents($file);
        }

        $this->assertStringContainsString(
            'min-width:10rem',
            $css,
            'The dropdown minimum width generated no CSS, so menus will hug their text.',
        );
    }
}
