<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\Http\PanelRoutes;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * A portal that does not want everything the package mounts.
 *
 * REPORTED FROM A REAL PORT: `Changelog`, `Environment`, `Trash` and the
 * document designer appear on EVERY panel, so a customer-facing portal grew an
 * environment editor and a bin for records its readers never delete. There was
 * one global switch - `panel.routes.roles` - and no way to say "not on this
 * one".
 *
 * THE ROUTE GOES, NOT THE MENU ENTRY, and that distinction is the test. Hiding
 * an entry leaves the URL answering, so a bookmarked `/portal/documents` still
 * opens the letterhead designer for somebody the panel meant to keep out -
 * which looks fixed from the sidebar and is not fixed at all.
 */
final class PanelWithoutScreensTest extends TestCase
{
    use RefreshDatabase;

    /** @return list<string> Route URIs registered for a panel with these exclusions. */
    private function urisFor(string $id, array $without): array
    {
        app(PanelManager::class)->registerPanel(
            Panel::make($id)
                ->path($id)
                ->guard('web')
                ->middleware(['web'])
                ->without($without),
        );

        PanelRoutes::register(app(PanelManager::class)->panel($id));

        return collect(Route::getRoutes()->getRoutes())
            ->map(static fn ($route): string => $route->uri())
            ->filter(static fn (string $uri): bool => str_starts_with($uri, $id.'/'))
            ->values()
            ->all();
    }

    public function test_a_panel_can_drop_the_bin(): void
    {
        $uris = $this->urisFor('nobinportal', ['trash']);

        $this->assertNotContains('nobinportal/trash', $uris);

        $this->assertContains(
            'nobinportal/announcements/{id}/dismiss',
            $uris,
            'Excluding one screen removed unrelated routes, so the exclusion is too broad.',
        );
    }

    public function test_a_panel_can_drop_the_document_designer(): void
    {
        $uris = $this->urisFor('nodocsportal', ['documents']);

        $this->assertSame(
            [],
            array_values(array_filter(
                $uris,
                static fn (string $uri): bool => str_contains($uri, '/documents'),
            )),
            'The designer is still routed, so a bookmark reaches it however the sidebar looks.',
        );
    }

    /**
     * THE GLOBAL SWITCH IS TURNED ON FIRST, because the reference app turns it
     * OFF - it mounts its own matrix - so without this line the assertion would
     * pass against a panel where nothing was excluded at all. The control test
     * below caught exactly that.
     */
    public function test_a_panel_can_drop_the_permission_matrix(): void
    {
        config(['panel.routes.roles' => true]);

        $this->assertNotContains('norolesportal/roles', $this->urisFor('norolesportal', ['roles']));
    }

    /**
     * AND A PANEL THAT EXCLUDES NOTHING IS UNCHANGED. Without this the previous
     * three would pass against a `register()` that had quietly stopped mounting
     * anything at all.
     */
    public function test_a_panel_that_excludes_nothing_keeps_every_screen(): void
    {
        config(['panel.routes.roles' => true]);

        $uris = $this->urisFor('fullportal', []);

        $this->assertContains('fullportal/trash', $uris);
        $this->assertContains('fullportal/roles', $uris);
        $this->assertContains('fullportal/documents', $uris);
    }
}
