<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Ai\Tools\SearchKnowledge;
use App\Knowledge\HelpSource;
use App\Models\Tenant;
use App\Models\User;
use App\Support\HelpArticles;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Ai\Tools\Request;
use PanelKit\Panel\Knowledge\Chunker;
use PanelKit\Panel\Knowledge\Embedder;
use PanelKit\Panel\Knowledge\HashEmbedder;
use PanelKit\Panel\Knowledge\KnowledgeBase;
use Tests\TestCase;

/**
 * Retrieval, so the assistant can cite rather than invent.
 *
 * THE FAILURE THIS EXISTS TO PREVENT IS A CONFIDENT WRONG ANSWER. A model asked
 * "what is your suspension policy" answers from nothing, fluently, and the reply
 * is indistinguishable from a real one because it is written in the same voice.
 * Retrieval turns that into a quotation with a link - and, where there is
 * nothing to quote, into "I do not have that", which is the half that actually
 * protects somebody.
 *
 * NO PROVIDER, NO KEY, NO BILL. Everything below runs against `HashEmbedder`,
 * which is deterministic and local. That is not a compromise made for the tests;
 * it is why the embedder is an interface at all. A retrieval layer testable only
 * against a paid endpoint is one that would not be tested, and this is the
 * layer where a mistake leaks one organisation's text into another's answer.
 *
 * THE PGVECTOR PATH IS COVERED SEPARATELY - see `PgvectorRetrievalTest`, which
 * runs the identical assertions against a real Postgres and skips when there
 * isn't one. Everything here exercises the portable path that every other engine
 * uses.
 */
final class KnowledgeRetrievalTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $this->asTenant($this->acme);
    }

    private function asTenant(Tenant $tenant): void
    {
        config(['panel.tenancy.resolver' => static fn (): int => $tenant->id]);
    }

    private function knowledge(): KnowledgeBase
    {
        return app(KnowledgeBase::class);
    }

    /* ---------------------------------------------------------- the basics */

    public function test_a_stored_passage_can_be_found_by_asking_about_it(): void
    {
        $this->knowledge()->put('help', 'exports', 'Exporting a list', 'Exports are generated in the background and offered as a download when ready.');

        $matches = $this->knowledge()->search('how do exports work');

        $this->assertNotEmpty($matches, 'A passage stored a moment ago was not retrievable.');
        $this->assertSame('Exporting a list', $matches[0]['title']);
    }

    /**
     * THE LINK IS THE POINT. An answer that says "the help centre explains this"
     * cannot be checked; one that carries `/help#exports` can. A citation that is
     * dropped between storage and retrieval turns a verifiable answer back into
     * an assertion.
     */
    public function test_a_match_carries_the_link_it_was_stored_with(): void
    {
        $this->knowledge()->put('help', 'exports', 'Exporting a list', 'Exports run in the background.', '/help#exports');

        $this->assertSame('/help#exports', $this->knowledge()->search('exports')[0]['url']);
    }

    /**
     * NOTHING RELEVANT MEANS NOTHING RETURNED.
     *
     * The single most valuable assertion in this file. Without a floor, a
     * question about a subject the panel has never documented still returns the
     * nearest row - and the model builds a confident paragraph about the wrong
     * topic from it, because that is what it was handed.
     */
    public function test_an_unrelated_question_returns_nothing_rather_than_the_nearest_row(): void
    {
        $this->knowledge()->put('help', 'exports', 'Exporting a list', 'Exports are generated in the background and offered as a download.');

        $this->assertSame([], $this->knowledge()->search('kitendawili ngamia mchanga jangwani'));
    }

    /* --------------------------------------------------------------- tenancy */

    /**
     * ANOTHER ORGANISATION'S TEXT IS NOT RETRIEVABLE.
     *
     * A leak here does not look like a leak. The chunk goes into a prompt and
     * comes back paraphrased, in the panel's own voice, with no quotation marks
     * and nothing to indicate it came from somebody else's account.
     */
    public function test_another_organisations_passages_are_never_returned(): void
    {
        $this->asTenant($this->rival);
        $this->knowledge()->put('notes', 'secret', 'Rival internal note', 'The Rival migration to fibre begins in March and must not be discussed.');

        $this->asTenant($this->acme);
        $this->knowledge()->put('notes', 'ours', 'Our note', 'Our own fibre migration begins in June.');

        $matches = $this->knowledge()->search('when does the fibre migration begin');

        $this->assertNotEmpty($matches);

        foreach ($matches as $match) {
            $this->assertStringNotContainsString('Rival', $match['content']);
        }
    }

    /**
     * NO TENANT IS A REFUSAL, never "search everything".
     *
     * The dangerous default: an unscoped search returns every organisation's
     * text at once, and the caller is a language model that will summarise it.
     */
    public function test_searching_without_a_tenant_throws_rather_than_searching_everything(): void
    {
        config(['panel.tenancy.resolver' => static fn () => null]);

        $this->expectException(\RuntimeException::class);

        $this->knowledge()->search('anything');
    }

    /* ------------------------------------------------------------ indexing */

    /**
     * RE-INDEXING REPLACES, IT DOES NOT ACCUMULATE.
     *
     * A help article that lost a paragraph must lose the paragraph. Appending
     * would leave the old text retrievable forever, so the assistant would go on
     * citing a policy that was withdrawn - with a link to the page that no longer
     * contains it.
     */
    public function test_re_indexing_replaces_a_passage_rather_than_duplicating_it(): void
    {
        $this->knowledge()->put('help', 'policy', 'Suspension', 'Accounts are suspended after 14 days.');
        $this->knowledge()->put('help', 'policy', 'Suspension', 'Accounts are suspended after 30 days.');

        $this->assertSame(1, $this->knowledge()->count());

        $matches = $this->knowledge()->search('when are accounts suspended');

        $this->assertStringContainsString('30 days', $matches[0]['content']);
        $this->assertStringNotContainsString('14 days', $matches[0]['content']);
    }

    /**
     * UNCHANGED CONTENT IS NOT RE-EMBEDDED.
     *
     * Embedding is a paid API call per passage, and the indexer re-reads
     * everything on every run. Without this, re-indexing an unchanged help
     * centre nightly is a recurring bill for a result that cannot differ.
     */
    public function test_unchanged_content_is_not_embedded_again(): void
    {
        $counting = new CountingEmbedder;

        $knowledge = new KnowledgeBase($counting);

        $knowledge->put('help', 'policy', 'Suspension', 'Accounts are suspended after 14 days.');
        $knowledge->put('help', 'policy', 'Suspension', 'Accounts are suspended after 14 days.');

        $this->assertSame(1, $counting->calls, 'The same text was embedded twice.');

        $knowledge->put('help', 'policy', 'Suspension', 'Accounts are suspended after 30 days.');

        $this->assertSame(2, $counting->calls, 'Changed text was not re-embedded.');
    }

    public function test_forgetting_a_source_leaves_the_others_alone(): void
    {
        $this->knowledge()->put('help', 'a', 'Help article', 'Exports run in the background.');
        $this->knowledge()->put('notes', 'b', 'A note', 'The router in Kisumu was replaced on Tuesday.');

        $this->knowledge()->forget('help');

        $this->assertSame(1, $this->knowledge()->count());
        $this->assertNotEmpty($this->knowledge()->search('which router was replaced'));
    }

    /* ------------------------------------------------------------ the command */

    public function test_the_command_indexes_the_configured_sources(): void
    {
        $this->artisan('panel:knowledge', ['action' => 'index', '--tenant' => (string) $this->acme->id])
            ->assertSuccessful();

        $this->assertGreaterThan(0, $this->knowledge()->count());

        $matches = $this->knowledge()->search('how do I export a filtered list to csv');

        $this->assertNotEmpty($matches);
        $this->assertStringContainsString('/help#', (string) $matches[0]['url']);
    }

    /**
     * IT REFUSES WITHOUT A TENANT rather than picking one.
     *
     * Run from a shell there is no signed-in user to infer an organisation from,
     * and a default would file one customer's documentation under another's -
     * which surfaces later as an answer, not as an error.
     */
    public function test_the_command_refuses_when_no_organisation_is_named(): void
    {
        config(['panel.tenancy.resolver' => static fn () => null]);

        $this->artisan('panel:knowledge', ['action' => 'index'])->assertFailed();
    }

    /** Indexing under one organisation does not make it findable under another. */
    public function test_the_command_files_everything_under_the_named_tenant(): void
    {
        $this->artisan('panel:knowledge', ['action' => 'index', '--tenant' => (string) $this->acme->id])
            ->assertSuccessful();

        $this->asTenant($this->rival);

        $this->assertSame(0, $this->knowledge()->count());
        $this->assertSame([], $this->knowledge()->search('how do I export a filtered list'));
    }

    public function test_fresh_drops_what_the_source_no_longer_yields(): void
    {
        $this->knowledge()->put('help', 'withdrawn#0', 'A withdrawn article', 'This policy was removed last year but is still quoted.');

        $this->artisan('panel:knowledge', [
            'action' => 'index',
            '--tenant' => (string) $this->acme->id,
            '--fresh' => true,
        ])->assertSuccessful();

        $matches = $this->knowledge()->search('policy removed last year still quoted');

        foreach ($matches as $match) {
            $this->assertStringNotContainsString('removed last year', $match['content']);
        }
    }

    public function test_clear_empties_the_source(): void
    {
        $this->artisan('panel:knowledge', ['action' => 'index', '--tenant' => (string) $this->acme->id]);

        $this->artisan('panel:knowledge', [
            'action' => 'clear',
            '--tenant' => (string) $this->acme->id,
            '--source' => ['help'],
        ])->assertSuccessful();

        $this->assertSame(0, $this->knowledge()->count());
    }

    /* -------------------------------------------------------------- the tool */

    public function test_the_tool_returns_passages_the_model_can_quote(): void
    {
        $this->actingAs(User::factory()->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]));

        $this->artisan('panel:knowledge', ['action' => 'index', '--tenant' => (string) $this->acme->id]);

        $result = (string) (new SearchKnowledge)->handle(new Request(['question' => 'how do I export a filtered list']));

        $this->assertStringContainsString('/help#exporting', $result);
        $this->assertStringContainsString('cite', $result);
    }

    /**
     * AN EMPTY RESULT INSTRUCTS THE MODEL TO SAY SO.
     *
     * "Nothing found" invites a model to fill the gap from memory, which is how a
     * panel ends up describing somebody else's software confidently. The reply
     * has to close that door in words.
     */
    public function test_the_tool_tells_the_model_not_to_answer_from_memory(): void
    {
        $this->actingAs(User::factory()->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]));

        $result = (string) (new SearchKnowledge)->handle(new Request(['question' => 'kitendawili ngamia jangwani']));

        $this->assertStringContainsString('do not have it documented', $result);
        $this->assertStringNotContainsString('/help#', $result);
    }

    /* ------------------------------------------------------- one copy only */

    /**
     * THE PAGE AND THE INDEX READ THE SAME ARRAY.
     *
     * The articles moved to the server so there would be one copy of them. If
     * the help page ever goes back to holding its own list, this fails - which
     * is the only warning there would be before the assistant starts citing a
     * page that says something else, with a link to prove it.
     */
    public function test_the_help_page_is_served_from_the_indexed_articles(): void
    {
        $user = User::factory()->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        $response = $this->actingAs($user)->get('/help');

        $response->assertSuccessful();

        $served = $response->viewData('page')['props']['articles'] ?? null;

        $this->assertNotNull($served, 'The help page no longer receives its articles from the server.');
        $this->assertSame(
            array_column(HelpArticles::all(), 'id'),
            array_column($served, 'id'),
        );
    }

    /**
     * EVERY CITATION POINTS AT AN ANCHOR THAT EXISTS.
     *
     * A link to `/help#exports` when the article is called `exporting` opens the
     * help centre at the top and leaves somebody to find the paragraph
     * themselves - which is most of the difference between a citation and a
     * gesture at one.
     */
    public function test_every_indexed_link_points_at_a_real_article(): void
    {
        $ids = array_column(HelpArticles::all(), 'id');

        foreach ((new HelpSource)->documents() as $document) {
            $this->assertContains(
                str_replace('/help#', '', (string) $document->url),
                $ids,
                "The citation {$document->url} names no article.",
            );
        }
    }

    /* -------------------------------------------------------------- chunking */

    /**
     * A LONG DOCUMENT BECOMES SEVERAL PASSAGES.
     *
     * One vector for a whole page is weakly similar to everything it mentions and
     * strongly similar to nothing, so it ranks below shorter chunks for the
     * questions it actually answers.
     */
    public function test_a_long_document_is_split_into_passages(): void
    {
        $chunker = new Chunker(size: 200);

        $paragraph = str_repeat('The panel refuses a stale write rather than overwriting it. ', 12);

        $chunks = $chunker->split($paragraph."\n\n".$paragraph);

        $this->assertGreaterThan(1, count($chunks));

        foreach ($chunks as $chunk) {
            $this->assertLessThanOrEqual(200, mb_strlen($chunk));
        }
    }

    /** A short one is left whole - splitting for its own sake loses context. */
    public function test_a_short_document_stays_one_passage(): void
    {
        $this->assertCount(1, (new Chunker(size: 1200))->split('Exports run in the background.'));
    }

    /**
     * EVERY PASSAGE OF A DOCUMENT IS STORED, not just the last.
     *
     * The bug this guards is a single shared id per document: each passage
     * overwrites the previous one and the knowledge base ends up holding the
     * ending of everything.
     */
    public function test_each_passage_of_a_long_document_is_stored_separately(): void
    {
        config(['panel.knowledge.chunk_size' => 200]);

        $this->artisan('panel:knowledge', ['action' => 'index', '--tenant' => (string) $this->acme->id])
            ->assertSuccessful();

        $this->assertGreaterThan(
            count(iterator_to_array((new HelpSource)->documents())),
            $this->knowledge()->count(),
            'Long articles were stored as one passage each - the chunk index is not part of the id.',
        );
    }

    /* ------------------------------------------------------------ the embedder */

    /**
     * THE SAME TEXT EMBEDS THE SAME WAY IN EVERY PROCESS.
     *
     * PHP randomises string hashing per process, so an embedder built on it
     * would write vectors that stop matching after a restart - and nothing would
     * fail, searches would simply return less and less until they returned
     * nothing.
     */
    public function test_the_default_embedder_is_stable_across_instances(): void
    {
        $this->assertSame(
            (new HashEmbedder)->embed('suspension policy'),
            (new HashEmbedder)->embed('suspension policy'),
        );
    }

    /**
     * VECTORS OF DIFFERENT LENGTHS SCORE ZERO RATHER THAN COMPARING.
     *
     * Two embedding models in one table produce numbers that look like
     * similarities and mean nothing. Refusing is the honest answer; the fix is a
     * re-index, which a silent plausible score would hide.
     */
    public function test_a_passage_from_a_different_model_is_not_matched(): void
    {
        $this->knowledge()->put('help', 'exports', 'Exporting a list', 'Exports run in the background.');

        // A second embedder of a different width, as a model change would be.
        $wider = new class implements Embedder
        {
            public function dimensions(): int
            {
                return 8;
            }

            public function floor(): float
            {
                return 0.1;
            }

            public function embed(string $text): array
            {
                return array_fill(0, 8, 1.0);
            }
        };

        $this->assertSame([], (new KnowledgeBase($wider))->search('how do exports work'));
    }
}

/**
 * A `HashEmbedder` that counts how often it was asked.
 *
 * A NAMED CLASS RATHER THAN AN ANONYMOUS ONE, and not for style. An anonymous
 * class declared inside a test method kills the PHP process outright here -
 * PHPUnit reports "Premature end of PHP process", which reads as a broken runner
 * rather than as anything to do with the test. A named class at file scope
 * behaves.
 *
 * IT WRAPS RATHER THAN EXTENDS, because `HashEmbedder` is final - subclassing an
 * embedder to observe it would also mean a test could pass against behaviour the
 * real one does not have.
 */
final class CountingEmbedder implements Embedder
{
    public int $calls = 0;

    private HashEmbedder $inner;

    public function __construct()
    {
        $this->inner = new HashEmbedder;
    }

    public function dimensions(): int
    {
        return $this->inner->dimensions();
    }

    public function floor(): float
    {
        return $this->inner->floor();
    }

    public function embed(string $text): array
    {
        $this->calls++;

        return $this->inner->embed($text);
    }
}
