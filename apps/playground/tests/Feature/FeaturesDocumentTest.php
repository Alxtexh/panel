<?php

declare(strict_types=1);

namespace Tests\Feature;

use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * FEATURES.md states numbers, and numbers are the part that rots.
 *
 * WHY THIS EXISTS. That file is hand-written, and the first update to it after
 * the page mechanism landed carried counts I had simply invented - 228 files,
 * 37,600 lines, 99 components - none measured, all wrong, and all stated with
 * the confidence of a measurement. A reader has no way to tell an audited figure
 * from a guess, which makes a wrong one worse than none at all.
 *
 * PROSE IS LEFT ALONE. Checking every claim in a document against the code would
 * be a second implementation of the document; what is pinned here is the small
 * set of facts that are countable and therefore checkable, and that a reader
 * would reasonably trust because they look precise.
 */
final class FeaturesDocumentTest extends TestCase
{
    private function document(): string
    {
        return (string) file_get_contents(__DIR__.'/../../../../FEATURES.md');
    }

    /** @return array{files: int, lines: int} */
    private function measure(string $directory, string $extension): array
    {
        $files = [];
        $iterator = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator(__DIR__.'/../../../../'.$directory)
        );

        foreach ($iterator as $file) {
            if ($file->isFile() && $file->getExtension() === $extension) {
                $files[] = $file->getPathname();
            }
        }

        $lines = 0;

        foreach ($files as $file) {
            $lines += substr_count((string) file_get_contents($file), "\n");
        }

        return ['files' => count($files), 'lines' => $lines];
    }

    /**
     * THE HEADLINE COMPARISON, which is the reason the file exists: what you
     * install against what the demo shows. If those numbers drift the document
     * misleads about the one thing it was written to clarify.
     */
    public function test_the_package_php_count_is_accurate(): void
    {
        $package = $this->measure('packages/panel/src', 'php');
        $demo = $this->measure('apps/playground/app', 'php');

        $document = $this->document();

        $this->assertStringContainsString(
            "| PHP | {$package['files']} files",
            $document,
            'FEATURES.md states a package file count that no longer matches the tree.',
        );

        $this->assertStringContainsString(
            "| {$demo['files']} files",
            $document,
            'FEATURES.md states a reference-app file count that no longer matches the tree.',
        );
    }

    /** Vue components, the number that makes the demo/framework split obvious. */
    public function test_the_component_counts_are_accurate(): void
    {
        $package = $this->measure('packages/ui/src', 'vue')['files']
            + $this->measure('packages/ui/inertia', 'vue')['files'];

        $demo = $this->measure('apps/playground/resources/js', 'vue')['files'];

        $document = $this->document();

        $this->assertStringContainsString("| Vue | {$package} components", $document);
        $this->assertStringContainsString("**{$demo} components**", $document);
    }

    /**
     * AND THE COMMAND COUNT, which a reader uses to decide whether the list
     * below it is complete.
     */
    public function test_the_command_count_matches_what_is_registered(): void
    {
        preg_match_all(
            '/Commands\\\\([A-Za-z]+)Command/',
            (string) file_get_contents(__DIR__.'/../../../../packages/panel/src/PanelServiceProvider.php'),
            $matches,
        );

        $registered = count(array_unique($matches[1]));

        $this->assertStringContainsString(
            "### {$registered} commands",
            $this->document(),
            "FEATURES.md claims a different number of commands than the {$registered} registered.",
        );
    }

    /**
     * THE PAGE MECHANISM IS DESCRIBED AS EXISTING.
     *
     * The section this replaced said there was "no mechanism" for a screen that
     * is not a resource, and stayed that way for a while after there was one -
     * a document telling a reader not to attempt something the framework does.
     */
    public function test_it_does_not_still_claim_pages_are_impossible(): void
    {
        $document = $this->document();

        $this->assertStringNotContainsString('no mechanism for', $document);
        $this->assertStringContainsString('make:panel-page', $document);
        $this->assertNotEmpty(app(PanelManager::class)->pages());
    }
}
