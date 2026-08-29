<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelPages;
use Alxtexh\Panel\Tests\TestCase;
use ReflectionClass;

/**
 * Every packaged `Page` subclass's `component()` must be in
 * `PanelPages::SCREENS` or `OPTIONAL_SCREENS` - the exact invariant
 * `PanelPages`'s own docblock claims a test enforces ("the panel's own test
 * walks the render calls and this list together").
 *
 * IT DID NOT, for `Page`-based screens specifically. `PanelPagesMapTest` spot
 * -checks a handful of names against the compiled Vue index, and neither it
 * nor anything else scans `PanelManager::PACKAGE_PAGES`. A controller's own
 * `Inertia::render('literal/Name', ...)` is grep-able; a `Page` subclass's
 * `component()` is a method return, invisible to any check that only looks
 * for a literal string. `MailSettingsPage::component()` returning
 * `'settings/Smtp'` with no line in `PanelPages::SCREENS` shipped invisibly
 * for exactly that reason - `panel:install` never wrote the stub, so a fresh
 * install that called `->mailSettings()` got a white page, found only by
 * actually running a fresh install and reading the generated file tree
 * rather than trusting a component name existed because the route did.
 */
final class PanelPageComponentCoverageTest extends TestCase
{
    public function test_every_package_page_component_has_a_scaffolded_stub(): void
    {
        $ref = new ReflectionClass(PanelManager::class);
        /** @var list<class-string<\Alxtexh\Panel\Pages\Page>> $classes */
        $classes = $ref->getConstant('PACKAGE_PAGES');

        $this->assertNotEmpty($classes, 'PanelManager::PACKAGE_PAGES should not be empty.');

        $known = [...PanelPages::SCREENS, ...PanelPages::OPTIONAL_SCREENS];

        foreach ($classes as $class) {
            $component = $class::component();

            $this->assertContains(
                $component,
                $known,
                "{$class}::component() returns '{$component}', which is in neither ".
                'PanelPages::SCREENS nor OPTIONAL_SCREENS - panel:install would never '.
                'write its stub, and every fresh install that enables this screen gets '.
                'a white page.',
            );
        }
    }
}
