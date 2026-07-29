<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

/**
 * The PHP half names a screen; something has to render it.
 *
 * THE FAILURE THIS EXISTS TO CATCH ALREADY HAPPENED, and it was invisible from
 * inside this repository. `panelkit/panel` answers five requests with
 * `Inertia::render('ResourceIndex')` and friends - and shipped no Vue at all.
 * Every one of those screens rendered perfectly here, because THIS application
 * happened to have a file of that name in `resources/js/pages`. A fresh
 * `composer require panelkit/panel` got routes that resolved to components that
 * did not exist: a white page and a console error naming a file the developer
 * had never heard of, on the first screen they opened.
 *
 * Nothing caught it. The suite passed, `panel:doctor` was clean, the build was
 * clean, and the playground was green - because the playground was quietly
 * supplying the missing half.
 *
 * SO THE TEST READS THE PACKAGE, NOT THE APPLICATION. It walks the render calls
 * in `packages/panel/src`, and for each one demands a component in
 * `@panelkit/inertia`. An application may still override any screen - that is
 * what the one-line page file is for - but it can no longer be the only place
 * the screen exists.
 *
 * IT IS A SOURCE-LEVEL TEST because there is no runtime seam: PHP cannot see a
 * Vue file, Vue cannot see a controller, and the string between them is checked
 * by nothing. Reading both sides is the only place the two can be compared.
 */
final class PackagedScreensTest extends TestCase
{
    /** Where the two halves live, from this application. */
    private const PANEL_SRC = __DIR__.'/../../../../packages/panel/src';

    private const SCREENS = __DIR__.'/../../../../packages/inertia/src/pages';

    /**
     * @return list<string>
     */
    private function renderedPageNames(): array
    {
        $names = [];

        $files = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator(self::PANEL_SRC, \FilesystemIterator::SKIP_DOTS)
        );

        foreach ($files as $file) {
            if ($file->getExtension() !== 'php') {
                continue;
            }

            preg_match_all(
                "/Inertia::render\(\s*'([A-Za-z0-9\/]+)'/",
                (string) file_get_contents($file->getPathname()),
                $matches,
            );

            foreach ($matches[1] as $name) {
                $names[$name] = true;
            }
        }

        return array_keys($names);
    }

    /**
     * EVERY SCREEN THE PACKAGE RENDERS, THE PACKAGE SHIPS.
     *
     * The one assertion that would have caught the original gap, and the one
     * that keeps catching it: a sixth `Inertia::render` added to the PHP half
     * without a component beside it fails here rather than in a consumer's
     * browser.
     */
    public function test_every_screen_the_php_half_renders_is_shipped_as_a_component(): void
    {
        $names = $this->renderedPageNames();

        // A floor, so a broken pattern cannot pass by matching nothing.
        $this->assertGreaterThanOrEqual(5, count($names), 'No rendered page names were found to check.');

        foreach ($names as $name) {
            $this->assertFileExists(
                self::SCREENS.'/'.$name.'.vue',
                "The panel renders [{$name}], which @panelkit/inertia does not ship. A fresh install "
                .'of the package gets a route that resolves to nothing: a white page, in the browser, '
                .'with a console error naming a file the developer has never seen.',
            );
        }
    }

    /** And exports it, so an application can import it by name. */
    public function test_the_package_exports_every_screen_it_ships(): void
    {
        $index = (string) file_get_contents(self::SCREENS.'/../index.ts');

        foreach ($this->renderedPageNames() as $name) {
            $this->assertStringContainsString(
                "./pages/{$name}.vue",
                $index,
                "[{$name}] is shipped but not exported from the package entry point.",
            );
        }
    }

    /**
     * AND THE INSTALLER WRITES A FILE FOR EVERY ONE.
     *
     * `panel:install` holds its own list of screens, which is a second place the
     * set is written down and therefore a second place it can go stale. A screen
     * missing from that list installs no page file, so a consumer gets the
     * failure this whole arrangement exists to prevent - on one screen instead
     * of all five, which is harder to notice, not easier.
     */
    public function test_the_installer_writes_a_page_file_for_every_screen(): void
    {
        $command = new \ReflectionClass(\PanelKit\Panel\Commands\InstallCommand::class);

        /** @var list<string> $installed */
        $installed = $command->getConstant('SCREENS');

        foreach ($this->renderedPageNames() as $name) {
            $this->assertContains(
                $name,
                $installed,
                "panel:install writes no page file for [{$name}], so a fresh install cannot resolve it.",
            );
        }
    }

    /**
     * THIS APPLICATION STILL RESOLVES EACH ONE.
     *
     * The package half being present is necessary and not sufficient: Inertia's
     * Vite plugin globs `resources/js/pages`, so a screen with no file here is
     * one this application cannot resolve however complete the package is. That
     * file is also the override point, so its CONTENTS are deliberately not
     * asserted - only that something answers to the name.
     */
    public function test_this_application_has_a_page_file_for_every_screen(): void
    {
        foreach ($this->renderedPageNames() as $name) {
            $this->assertFileExists(
                resource_path("js/pages/{$name}.vue"),
                "Nothing in resources/js/pages answers to [{$name}], so the panel renders a page "
                .'Inertia cannot resolve.',
            );
        }
    }

    /**
     * AND EVERY ONE OF THOSE FILES HAS A TEMPLATE.
     *
     * THIS IS NOT A STYLE RULE. The obvious way to write a one-line page file is
     *
     *     export { default } from '@panelkit/inertia/pages/ResourceIndex.vue'
     *
     * which type-checks, builds, and emits a chunk containing the entire real
     * component - and renders NOTHING. An SFC with no `<template>` block
     * compiles to a component with no render function, so Vue mounts it and
     * draws an empty comment node.
     *
     * The only symptom is a blank page under a working header. `vue-tsc` is
     * silent, the build is silent, and a PRODUCTION build is silent in the
     * browser too - the warning that names the cause, "Component is missing
     * template or render function", exists only in a development build. It was
     * found by installing into a fresh application and looking at the screen.
     *
     * A text assertion is crude and it is the only place this is checkable
     * without a browser. It costs nothing and it catches the exact mistake.
     */
    public function test_every_page_file_renders_something(): void
    {
        foreach ($this->renderedPageNames() as $name) {
            $contents = (string) file_get_contents(resource_path("js/pages/{$name}.vue"));

            $this->assertStringContainsString(
                '<template>',
                $contents,
                "resources/js/pages/{$name}.vue has no template block, so it compiles to a component "
                .'with no render function and draws an empty page. A re-export of another component '
                .'is not enough - wrap it.',
            );
        }
    }
}
