<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Alxtexh\Panel\Http\PanelRoutes;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
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

    /** @return list<string> Route URIs registered for a panel with these exclusions/inclusions. */
    private function urisFor(string $id, array $without, array $with = []): array
    {
        app(PanelManager::class)->registerPanel(
            Panel::make($id)
                ->path($id)
                ->guard('web')
                ->middleware(['web'])
                ->without($without)
                ->with($with),
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
     * A PANEL THAT EXCLUDES NOTHING KEEPS EVERY SCREEN `without()` DOES NOT
     * GATE. Without this the previous three would pass against a `register()`
     * that had quietly stopped mounting anything at all.
     *
     * `trash` AND `documents` ARE NOT IN THIS LIST ANY MORE - see
     * `Panel::OPT_IN_SCREENS`. They are two of the four installation screens
     * that mount only when `->with([...])` names them, so "excludes nothing"
     * says nothing about whether they appear; the next test does.
     */
    public function test_a_panel_that_excludes_nothing_keeps_every_opt_out_screen(): void
    {
        config(['panel.routes.roles' => true]);

        $uris = $this->urisFor('fullportal', []);

        $this->assertContains('fullportal/roles', $uris);
    }

    /**
     * AND THE FOUR INSTALLATION SCREENS STAY OFF UNTIL ASKED FOR - the actual
     * new default `PanelWithoutScreensTest` exists to prove is not silently
     * wrong. A panel excluding nothing and asking for nothing gets none of
     * them; the control half proves `with()` still reaches them when named.
     */
    public function test_the_four_installation_screens_are_off_until_asked_for(): void
    {
        $off = $this->urisFor('bareportal', []);

        $this->assertNotContains('bareportal/trash', $off);
        $this->assertNotContains('bareportal/documents', $off);

        $on = $this->urisFor('askedportal', [], ['trash', 'documents']);

        $this->assertContains('askedportal/trash', $on);
        $this->assertContains('askedportal/documents', $on);
    }
}
