<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Resources\Resource;
use Tests\TestCase;

/**
 * Every resource looks like the same screen, because it is built from the
 * same template - see roadmap 3.9. Filter tabs with counts and an empty
 * state are the template's job and need no per-resource opt-in; a purpose
 * line cannot be, since nothing but the resource's author knows what one
 * sentence should say. This is what makes that sentence mandatory rather
 * than a convention somebody remembers for the first resource and forgets
 * for the fifth.
 *
 * WALKS EVERY DISCOVERED RESOURCE, across every panel - the same shape as
 * `NavigationCoverageTest`, which stops a SCREEN from shipping unreachable.
 * This stops a resource from shipping with a title and nothing to say about
 * it.
 */
final class ListPageConventionsTest extends TestCase
{
    /** @return list<class-string<\Alxtexh\Panel\Resources\Resource>> */
    private function everyResource(): array
    {
        $manager = app(PanelManager::class);
        $classes = [];

        foreach (array_keys($manager->panels()) as $panelId) {
            foreach ($manager->resourcesFor($panelId) as $class) {
                $classes[$class] = $class;
            }
        }

        return array_values($classes);
    }

    public function test_every_resource_declares_a_purpose(): void
    {
        $resources = $this->everyResource();

        $this->assertNotEmpty($resources, 'No resources were discovered - the sweep itself is broken.');

        $missing = array_filter(
            $resources,
            static fn (string $class): bool => trim((string) $class::purpose()) === '',
        );

        $this->assertSame(
            [],
            array_values($missing),
            'Every Resource must declare $purpose - one sentence shown under its title. Missing: '
                .implode(', ', array_values($missing)),
        );
    }

    /** The declared sentence travels to the client - it is not just a PHP-side note nobody reads. */
    public function test_the_purpose_reaches_the_schema(): void
    {
        foreach ($this->everyResource() as $class) {
            $this->assertSame(
                $class::purpose(),
                $class::schema()['purpose'],
                "{$class}::schema()['purpose'] does not match {$class}::purpose().",
            );
        }
    }

    /* ------------------------------------------------------------- import */

    /**
     * A SCREEN THAT CANNOT TAKE A TYPED RECORD CANNOT TAKE A THOUSAND.
     *
     * Import writes through the fields the form declares, so a resource with no
     * form has nothing to map a spreadsheet column onto. Four screens offered
     * the button anyway - among them the AUDIT TRAIL, a record of what happened
     * that was inviting somebody to upload things that did not, and the live
     * sessions list, which describes connections the panel itself observes.
     *
     * Import is opt-in (`importable()` defaults to false) and `permissions()`
     * still ands `isWritable()`, so a new read-only resource cannot grow a
     * button even if a subclass opts in by mistake.
     */
    public function test_no_read_only_resource_offers_import(): void
    {
        $wrong = [];

        foreach ($this->everyResource() as $class) {
            if (! $class::isWritable() && $class::importable()) {
                $wrong[] = $class;
            }
        }

        $this->assertSame(
            [],
            $wrong,
            "These resources have no form and still advertise Import:\n"
            .implode("\n", $wrong)."\n"
            .'Import writes through form fields; with none there is nothing to map onto.',
        );
    }
}
