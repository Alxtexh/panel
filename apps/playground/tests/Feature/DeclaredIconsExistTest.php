<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

/**
 * Every icon a resource names has a path in the UI package.
 *
 * THE FAILURE THIS CATCHES IS SILENT, which is the only reason it is worth a
 * test. `iconPath()` falls back to a dot for an unknown name, so an action that
 * declares `->icon('undo')` when the map has no `undo` renders a 4px dot next to
 * its label. Nothing errors, nothing logs, and it reads as an unfinished icon
 * rather than a missing one - it survived in the Restore bulk action until
 * somebody happened to look at the menu.
 *
 * IT CROSSES THE PHP/TS BOUNDARY DELIBERATELY. The names are declared in PHP and
 * resolved in TypeScript, so nothing inside either language can see both halves;
 * a test that reads the map as text is the only place the two can be compared.
 * Parsing is crude on purpose - it needs to know which keys exist, not what the
 * paths mean, and a stricter parser would break on formatting rather than on
 * anything real.
 */
final class DeclaredIconsExistTest extends TestCase
{
    public function test_every_declared_icon_has_a_path(): void
    {
        $map = file_get_contents(base_path('../../packages/ui/src/components/primitives/icons.ts'));

        $this->assertNotFalse($map, 'The icon map moved; this test points at the wrong file.');

        $declared = [];

        foreach (glob(app_path('Panel/Resources/*.php')) as $file) {
            preg_match_all("/->icon\('([a-z0-9-]+)'\)/", (string) file_get_contents($file), $matches);

            foreach ($matches[1] as $name) {
                $declared[$name] = basename($file);
            }
        }

        // A sanity floor: if the pattern above ever stops matching, this test
        // would pass by finding nothing to check.
        $this->assertGreaterThan(5, count($declared), 'No icons were found to check.');

        $missing = [];

        foreach ($declared as $name => $file) {
            $quoted = preg_quote($name, '/');

            // Keys are written bare when they are valid identifiers and quoted
            // when they contain a hyphen; both forms are legal TypeScript.
            if (preg_match("/(^|\s)'?{$quoted}'?\s*:/m", $map) !== 1) {
                $missing[] = "{$name} (declared in {$file})";
            }
        }

        $this->assertSame([], $missing, 'These icons render as a fallback dot.');
    }
}
