<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use App\Support\Guide;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

/**
 * The build guide, walked.
 *
 * DOCUMENTATION THAT DRIFTS FROM THE CODE IS WORSE THAN NONE, because it is
 * believed. A guide is read by somebody who does not yet know the system well
 * enough to notice that a command was renamed, so the only defence is a test
 * that reads both.
 *
 * THREE KINDS OF ROT ARE CHECKED HERE, and each has happened to a docs page
 * somewhere:
 *
 *   A DEAD LINK IN THE CONTENTS. A group naming a page that no longer exists
 *   renders a link to a 404 - and it is the contents, so it is the first thing
 *   somebody clicks.
 *
 *   A COMMAND THAT NO LONGER EXISTS. The commands page lists them; the registry
 *   is the truth. A renamed command leaves a page telling people to run
 *   something that answers "command not found", which reads as a broken install.
 *
 *   AN EMPTY PAGE. A slug with a title and no body is a page somebody meant to
 *   write and a page a reader arrives at, and nothing else would catch it.
 */
final class GuideTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /* -------------------------------------------------------- the structure */

    /** Every page named in the contents exists. */
    public function test_the_contents_names_no_page_that_is_missing(): void
    {
        $pages = array_keys(Guide::pages());

        foreach (Guide::groups() as $group) {
            foreach ($group['pages'] as $slug) {
                $this->assertContains(
                    $slug,
                    $pages,
                    "The [{$group['title']}] group links to [{$slug}], which has no page.",
                );
            }
        }
    }

    /** And every page is reachable from the contents. */
    public function test_no_page_is_orphaned(): void
    {
        $linked = Guide::slugs();

        foreach (array_keys(Guide::pages()) as $slug) {
            $this->assertContains(
                $slug,
                $linked,
                "The page [{$slug}] is in no group, so nothing links to it.",
            );
        }
    }

    /** A page with a title and no body is one somebody meant to write. */
    public function test_every_page_has_content(): void
    {
        foreach (Guide::pages() as $slug => $page) {
            $this->assertNotEmpty($page['title'], "[{$slug}] has no title.");
            $this->assertNotEmpty($page['summary'], "[{$slug}] has no summary.");
            $this->assertNotEmpty($page['body'], "[{$slug}] has no body.");
        }
    }

    /* ------------------------------------------------------------- serving */

    /**
     * EVERY PAGE RENDERS. Thirty routes, walked - the cheapest possible guard
     * against a page that references a prop the component does not receive.
     */
    public function test_every_page_renders(): void
    {
        foreach (Guide::slugs() as $slug) {
            $response = $this->actingAs($this->user)->get("/about/building/{$slug}");

            $response->assertOk();

            $props = $response->viewData('page')['props'];

            $this->assertSame($slug, $props['page']['slug']);
            $this->assertNotEmpty($props['page']['body']);
        }
    }

    /** The bare path opens the first page rather than 404ing. */
    public function test_the_guide_opens_at_its_first_page(): void
    {
        $props = $this->actingAs($this->user)->get('/about/building')->assertOk()
            ->viewData('page')['props'];

        $this->assertSame(Guide::slugs()[0], $props['page']['slug']);
    }

    public function test_an_unknown_page_is_not_found(): void
    {
        $this->actingAs($this->user)->get('/about/building/nonexistent')->assertNotFound();
    }

    /**
     * THE ORDER IS WALKABLE, first to last, with no gap.
     *
     * Documentation is read forwards the first time; a broken chain means
     * somebody stops reading in the middle, and the pages after the break are
     * the ones nobody sees.
     */
    public function test_the_pages_chain_from_first_to_last(): void
    {
        $slugs = Guide::slugs();
        $visited = [];
        $slug = $slugs[0];

        $this->assertNull(Guide::neighbours($slug)['previous'], 'The first page has a previous.');

        while ($slug !== null) {
            $this->assertNotContains($slug, $visited, "The chain loops at [{$slug}].");

            $visited[] = $slug;

            $slug = Guide::neighbours($slug)['next']['slug'] ?? null;
        }

        $this->assertSame($slugs, $visited, 'The chain does not visit every page in order.');
    }

    /* ------------------------------------------------------- against the code */

    /**
     * EVERY COMMAND THE GUIDE LISTS IS REGISTERED.
     *
     * The commands page is the one most likely to rot, and the failure is
     * somebody running a command that answers "not found" - which reads as a
     * broken installation rather than as stale documentation.
     */
    public function test_every_documented_command_exists(): void
    {
        $registered = array_keys(Artisan::all());

        $documented = [];

        foreach (Guide::pages() as $page) {
            foreach ($page['blocks'] ?? [] as $block) {
                if ($block['kind'] !== 'shell') {
                    continue;
                }

                preg_match_all(
                    '/php artisan ((?:panel|make):[a-z-]+)/',
                    $block['code'],
                    $matches,
                );

                foreach ($matches[1] as $command) {
                    $documented[$command] = true;
                }
            }
        }

        // A floor, so a broken pattern cannot pass by matching nothing.
        $this->assertGreaterThan(10, count($documented), 'No commands were found to check.');

        foreach (array_keys($documented) as $command) {
            $this->assertContains(
                $command,
                $registered,
                "The guide documents [{$command}], which is not registered.",
            );
        }
    }

    /**
     * AND THE COMMANDS PAGE LISTS EVERY COMMAND THE PACKAGE REGISTERS.
     *
     * The other direction, and the one that rots quietly: a command added
     * without a line in the guide is a feature nobody outside this repository
     * knows exists.
     */
    public function test_every_panel_command_is_documented(): void
    {
        $listed = Guide::pages()['commands']['blocks'][0]['code'];

        foreach (array_keys(Artisan::all()) as $command) {
            if (! str_starts_with($command, 'panel:')) {
                continue;
            }

            $this->assertStringContainsString(
                $command,
                $listed,
                "[{$command}] is registered but missing from the commands page.",
            );
        }
    }
}
