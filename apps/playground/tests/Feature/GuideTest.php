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

    /* -------------------------------------------------------------- searching */

    /**
     * IT SEARCHES THE PROSE, NOT THE TITLES.
     *
     * A table of contents already answers "which page is called filters". The
     * question somebody arrives with is "where does it say anything about
     * `visibleWhen`" - a word in the body of one page and the title of none, so
     * a title-only search would make the box a slower version of the list beside
     * it.
     */
    public function test_it_finds_a_term_that_appears_only_in_the_prose(): void
    {
        $results = Guide::search('visibleWhen');

        $this->assertNotEmpty($results, 'A term in the body of a page was not found.');
        $this->assertSame('fields', $results[0]['slug']);
    }

    /** A title match outranks a passing mention. */
    public function test_a_title_match_comes_first(): void
    {
        $results = Guide::search('filter');

        $this->assertSame('filters', $results[0]['slug']);
        $this->assertGreaterThan(1, count($results), 'Only the title matched; the prose was not searched.');
    }

    public function test_searching_is_case_insensitive(): void
    {
        $this->assertSame(
            array_column(Guide::search('TENANCY'), 'slug'),
            array_column(Guide::search('tenancy'), 'slug'),
        );
    }

    /**
     * ONE LETTER RETURNS NOTHING, deliberately. It matches most of the guide, so
     * the honest result is a list of everything - which reads as a broken search
     * rather than as "type more".
     */
    public function test_a_single_character_returns_nothing(): void
    {
        $this->assertSame([], Guide::search('t'));
        $this->assertSame([], Guide::search(''));
    }

    /**
     * THE SNIPPET CONTAINS THE TERM, marked.
     *
     * A snippet that starts at the paragraph often leaves the match off the end
     * of the line - so the result shows a sentence without the word somebody
     * typed, which reads as a wrong result.
     */
    public function test_a_result_carries_a_snippet_with_the_term_marked(): void
    {
        $result = Guide::search('pgvector')[0];

        $marked = array_filter(
            $result['snippet'],
            static fn (array $segment): bool => $segment['type'] === 'match',
        );

        $this->assertNotEmpty($marked, 'The snippet does not mark the term.');
    }

    public function test_the_search_endpoint_answers(): void
    {
        $this->actingAs($this->user)
            ->getJson('/about/building/search?q=tenancy')
            ->assertOk()
            ->assertJsonPath('results.0.slug', 'tenancy');
    }

    /**
     * THE ENDPOINT IS DECLARED BEFORE `{page?}`, and this asserts it stayed
     * there. A fixed segment after a wildcard is captured by the wildcard, so
     * `search` would answer "no such page" - a failure that looks like the
     * endpoint was never written.
     */
    public function test_search_is_not_captured_by_the_page_route(): void
    {
        $response = $this->actingAs($this->user)->get('/about/building/search?q=trash');

        $response->assertOk();
        $this->assertJson($response->getContent());
    }

    /**
     * ARRIVING FROM A RESULT LANDS ON THE SENTENCE.
     *
     * Without the term travelling with the link, search finds a PAGE and leaves
     * the reader to find the word they typed - on a page whose whole job is to
     * contain a lot of words.
     */
    public function test_a_page_marks_the_term_it_was_opened_with(): void
    {
        $props = $this->actingAs($this->user)
            ->get('/about/building/fields?q=slider')
            ->assertOk()
            ->viewData('page')['props'];

        $marked = 0;

        foreach ($props['page']['body'] as $paragraph) {
            foreach ([...($paragraph['lead'] ?? []), ...$paragraph['text']] as $segment) {
                // Either kind of mark: a code span containing the term is
                // marked whole rather than split.
                if (str_contains($segment['type'], 'match')) {
                    $marked++;
                }
            }
        }

        $this->assertGreaterThan(0, $marked, 'The searched term is not marked on the page it opens.');
    }

    /** And a page opened without one is unmarked, so nothing is highlighted at random. */
    public function test_a_page_opened_without_a_term_marks_nothing(): void
    {
        $props = $this->actingAs($this->user)->get('/about/building/fields')->assertOk()
            ->viewData('page')['props'];

        foreach ($props['page']['body'] as $paragraph) {
            foreach ($paragraph['text'] as $segment) {
                $this->assertStringNotContainsString('match', $segment['type']);
            }
        }
    }
}
