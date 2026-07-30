<?php

declare(strict_types=1);

namespace Tests\Feature;

use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
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
    /** @return list<class-string<\PanelKit\Panel\Resources\Resource>> */
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
}
