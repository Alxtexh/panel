<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use PanelKit\Panel\Knowledge\HashEmbedder;
use PanelKit\Panel\Knowledge\KnowledgeBase;
use Tests\TestCase;

/**
 * The native search path, against a real Postgres with a real pgvector.
 *
 * WHY A SEPARATE TEST. `KnowledgeBase` has two ways to find a passage: one that
 * asks the database for nearest neighbours, and one that reads the candidates
 * and scores them in PHP. The portable path runs in the ordinary suite on
 * SQLite. The native one is SQL - `<=>`, `::vector`, an ivfflat index - and no
 * amount of testing on SQLite says anything at all about whether it parses, let
 * alone whether it ranks correctly.
 *
 * IT IS THE PATH MOST LIKELY TO BE WRONG AND LEAST LIKELY TO BE NOTICED. An
 * installation on Postgres takes it silently and automatically; a mistake there
 * is not a stack trace on a rare screen, it is the assistant quietly retrieving
 * the wrong passages for every question, forever.
 *
 * IT SKIPS RATHER THAN FAILS when there is no server, and the skip message names
 * the script that starts one - see `tests/bin/pgvector-fixture.sh`, which
 * downloads Postgres and pgvector into a user prefix and needs no root. A test
 * that fails on a machine where the fixture is simply not running teaches people
 * to ignore a red suite, which costs more than the coverage is worth.
 *
 * THE ASSERTIONS ARE DELIBERATELY THE SAME ONES `KnowledgeRetrievalTest` MAKES.
 * Two paths that pass different tests are two features; the whole claim of this
 * design is that an installation gets the same answers either way, faster.
 */
final class PgvectorRetrievalTest extends TestCase
{
    private const CONNECTION = 'panelkit_pgvector';

    private const TENANT = 4242;

    protected function setUp(): void
    {
        parent::setUp();

        $this->skipUnlessPostgresIsAvailable();

        /*
         * THE DEFAULT CONNECTION IS SWITCHED, not passed around. `KnowledgeBase`
         * uses whatever connection the application is on - as it must, since a
         * dedicated-database tenant's chunks live in that tenant's database -
         * so pointing it at Postgres any other way would be testing a seam the
         * real code does not have.
         */
        config(['database.default' => self::CONNECTION]);

        config(['panel.tenancy.resolver' => static fn (): int => self::TENANT]);

        $this->migrateChunkTable();
    }

    protected function tearDown(): void
    {
        if (in_array(self::CONNECTION, array_keys((array) config('database.connections')), true)
            && extension_loaded('pdo_pgsql')) {
            try {
                Schema::dropIfExists('panel_knowledge_chunks');
            } catch (\Throwable) {
                // Nothing to clean up - the server went away, or was never there.
            }
        }

        parent::tearDown();
    }

    private function knowledge(): KnowledgeBase
    {
        return new KnowledgeBase(new HashEmbedder);
    }

    private function skipUnlessPostgresIsAvailable(): void
    {
        $hint = 'Start one with tests/bin/pgvector-fixture.sh start, then re-run with '
            .'php $PANELKIT_PHP_FLAGS vendor/bin/phpunit --filter=PgvectorRetrieval';

        if (! extension_loaded('pdo_pgsql')) {
            $this->markTestSkipped("pdo_pgsql is not loaded. {$hint}");
        }

        config([
            'database.connections.'.self::CONNECTION => [
                'driver' => 'pgsql',
                // 127.0.0.1, never a remote host. This fixture is local by
                // construction and the suite must not be able to reach anything
                // else.
                'host' => '127.0.0.1',
                'port' => env('PANELKIT_PG_PORT', 5499),
                'database' => env('PANELKIT_PG_DATABASE', 'panelkit_rag'),
                'username' => 'postgres',
                'password' => '',
                'charset' => 'utf8',
                'prefix' => '',
                'search_path' => 'public',
                'sslmode' => 'prefer',
            ],
        ]);

        try {
            DB::connection(self::CONNECTION)->select('select 1');
        } catch (\Throwable $e) {
            $this->markTestSkipped("No PostgreSQL on 127.0.0.1. {$hint}");
        }

        $extension = DB::connection(self::CONNECTION)
            ->selectOne("select 1 as ok from pg_extension where extname = 'vector'");

        if ($extension === null) {
            $this->markTestSkipped("pgvector is not installed in that database. {$hint}");
        }
    }

    /**
     * Run the package's own migration, so what is tested is what ships.
     *
     * A HAND-WRITTEN TABLE HERE WOULD PROVE NOTHING. The interesting half of the
     * migration is the part that adds the `vector` column and the cosine index
     * only where the extension exists - if the test built its own schema, that
     * code would be the one thing this whole file does not exercise.
     */
    private function migrateChunkTable(): void
    {
        Schema::dropIfExists('panel_knowledge_chunks');

        /*
         * LOCATED FROM THE CLASS, not from a path relative to this file. The
         * package is a path repository today and a `vendor/` directory in any
         * real installation, and a hardcoded `../../packages` breaks silently in
         * the second case - as a skipped-looking error rather than as a wrong
         * answer, but broken all the same.
         */
        $package = dirname((new \ReflectionClass(KnowledgeBase::class))->getFileName(), 3);

        $migration = require $package
            .'/database/migrations/2026_07_28_200000_create_panel_knowledge_chunks_table.php';

        // The column is sized from the BOUND EMBEDDER, which is `HashEmbedder`
        // here as it is by default - so this exercises the same sizing an
        // installation gets rather than a number the test chose.
        $migration->up();
    }

    /* --------------------------------------------------------- the native path */

    /**
     * THE POINT OF THE WHOLE FILE: the database, not PHP, did the search.
     *
     * If this reports false, every other assertion below silently passed through
     * the portable path and proved nothing about the SQL.
     */
    public function test_the_database_is_doing_the_search(): void
    {
        $this->assertTrue(
            $this->knowledge()->usesNativeVectors(),
            'The vector column is missing, so these tests fell back to scoring in PHP.',
        );
    }

    public function test_a_stored_passage_can_be_found_by_asking_about_it(): void
    {
        $this->knowledge()->put('help', 'exports', 'Exporting a list', 'Exports are generated in the background and offered as a download when ready.');

        $matches = $this->knowledge()->search('how do exports work');

        $this->assertNotEmpty($matches, 'The pgvector query returned nothing for a passage about the subject.');
        $this->assertSame('Exporting a list', $matches[0]['title']);
    }

    /**
     * THE RANKING IS THE FEATURE. A query that returns the right rows in the
     * wrong order hands the model the weakest passage first, and with a limit of
     * three the best one may not be there at all.
     */
    public function test_the_closest_passage_comes_first(): void
    {
        $this->knowledge()->put('help', 'exports', 'Exporting a filtered list', 'Select rows and choose export csv to download a spreadsheet of them.');
        $this->knowledge()->put('help', 'routers', 'Registering a router', 'A router describes where a subscriber connects to the network.');

        $matches = $this->knowledge()->search('export csv spreadsheet download');

        $this->assertNotEmpty($matches);
        $this->assertSame('Exporting a filtered list', $matches[0]['title']);
    }

    /**
     * The floor applies HERE TOO, and that is the assertion that matters most.
     *
     * `ORDER BY ... LIMIT` always returns something: ask Postgres for the nearest
     * neighbour to a question about nothing it has ever stored and it will hand
     * back a row. The floor is what turns that into an empty list rather than a
     * confident answer about the wrong subject.
     */
    public function test_an_unrelated_question_returns_nothing_rather_than_the_nearest_row(): void
    {
        $this->knowledge()->put('help', 'exports', 'Exporting a list', 'Exports are generated in the background and offered as a download.');

        $this->assertSame([], $this->knowledge()->search('kitendawili ngamia mchanga jangwani'));
    }

    /**
     * ANOTHER ORGANISATION'S TEXT IS NOT RETRIEVABLE THROUGH THIS PATH EITHER.
     *
     * The tenant predicate lives inside a hand-written SQL string here rather
     * than in a query builder - which is precisely the kind of place a scope goes
     * missing without anything failing.
     */
    public function test_another_organisations_passages_are_never_returned(): void
    {
        config(['panel.tenancy.resolver' => static fn (): int => 9999]);
        $this->knowledge()->put('notes', 'secret', 'Rival internal note', 'The Rival migration to fibre begins in March.');

        config(['panel.tenancy.resolver' => static fn (): int => self::TENANT]);
        $this->knowledge()->put('notes', 'ours', 'Our note', 'Our own fibre migration begins in June.');

        $matches = $this->knowledge()->search('when does the fibre migration begin');

        $this->assertNotEmpty($matches);

        foreach ($matches as $match) {
            $this->assertStringNotContainsString('Rival', $match['content']);
        }
    }

    public function test_re_indexing_replaces_a_passage_rather_than_duplicating_it(): void
    {
        $this->knowledge()->put('help', 'policy', 'Suspension', 'Accounts are suspended after 14 days.');
        $this->knowledge()->put('help', 'policy', 'Suspension', 'Accounts are suspended after 30 days.');

        $this->assertSame(1, $this->knowledge()->count());

        $matches = $this->knowledge()->search('when are accounts suspended');

        $this->assertStringContainsString('30 days', $matches[0]['content']);
    }

    /**
     * BOTH COLUMNS ARE WRITTEN, and they agree.
     *
     * The JSON column is what makes the schema portable; the vector column is
     * what makes the search fast. A row with only one of them is retrievable on
     * exactly one engine - and moving that database, or losing the extension,
     * would empty the knowledge base with nothing reporting a problem.
     */
    public function test_a_row_carries_both_the_portable_and_the_native_vector(): void
    {
        $this->knowledge()->put('help', 'exports', 'Exporting a list', 'Exports run in the background.');

        $row = DB::table('panel_knowledge_chunks')->first(['embedding', 'embedding_vector']);

        $this->assertNotNull($row->embedding);
        $this->assertNotNull($row->embedding_vector);

        $json = json_decode((string) $row->embedding, true);

        $this->assertCount((new HashEmbedder)->dimensions(), $json);

        // pgvector renders as `[a,b,c]`, so the two are comparable as numbers
        // even though one is text and the other a native type.
        $native = json_decode((string) $row->embedding_vector, true);

        $this->assertSame(
            array_map(static fn ($v): float => round((float) $v, 4), $json),
            array_map(static fn ($v): float => round((float) $v, 4), $native),
            'The JSON and native vectors disagree, so the two search paths would rank differently.',
        );
    }

    /**
     * THE INDEX EXISTS AND IS BUILT FOR COSINE.
     *
     * An index built for a different distance function is not an error - it is
     * simply never used. The query keeps returning correct answers by sequential
     * scan, so the only symptom is that retrieval gets slower as the knowledge
     * base grows, which nobody attributes to an index that looks present.
     */
    public function test_the_index_is_a_cosine_index(): void
    {
        $definition = DB::selectOne(
            "select indexdef from pg_indexes where indexname = 'panel_knowledge_chunks_embedding_idx'"
        );

        $this->assertNotNull($definition, 'The ivfflat index was not created.');
        $this->assertStringContainsString('vector_cosine_ops', $definition->indexdef);
    }
}
