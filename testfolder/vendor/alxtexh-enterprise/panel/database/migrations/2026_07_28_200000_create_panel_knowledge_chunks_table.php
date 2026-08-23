<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * The searchable knowledge the assistant can cite.
 *
 * IT EXISTS SO THE ASSISTANT CAN STOP GUESSING. A model asked "what is our
 * suspension policy" answers confidently from nothing, and the answer is
 * plausible, well written and invented. Retrieval turns that into "here is what
 * the help page says, and here is the link" - and where there is nothing to
 * retrieve, into "I do not have that", which is the whole point.
 *
 * CHUNKS, NOT DOCUMENTS. A whole page embedded as one vector matches everything
 * weakly and nothing well; passages of a few hundred words each carry one idea,
 * which is what makes a match mean something.
 *
 * THE EMBEDDING IS JSON EVERYWHERE AND A VECTOR WHERE POSSIBLE. Postgres with
 * pgvector does the search in the database with an index; every other engine
 * reads the candidates and scores them in PHP. Two paths, one schema - because
 * requiring pgvector would make this feature something most installations simply
 * do not get, and storing only the native type would make it unportable.
 *
 * `tenant_id` IS REQUIRED. Retrieved text goes into a prompt and comes back as
 * an answer, so a chunk from the wrong organisation is a leak that arrives
 * paraphrased and attributed to the panel itself - the hardest kind to notice.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_knowledge_chunks', function (Blueprint $table): void {
            $table->id();

            $table->unsignedBigInteger('tenant_id')->index();

            /*
             * WHERE IT CAME FROM, so an answer can cite it and so re-indexing
             * can replace one source without touching the rest. A chunk nobody
             * can attribute is a chunk nobody can check.
             */
            $table->string('source', 64);
            $table->string('source_id', 128)->nullable();

            $table->string('title');
            $table->string('url')->nullable();

            $table->text('content');

            /*
             * A HASH OF THE CONTENT, so re-indexing skips what has not changed.
             * Embedding is the expensive part - a paid API call per chunk - and
             * re-embedding an unchanged help page every night is a bill for
             * nothing.
             */
            $table->string('content_hash', 64)->index();

            $table->json('embedding');

            $table->timestamps();

            // The lookup is always "this organisation's chunks from this
            // source", whether the search is native or in PHP.
            $table->index(['tenant_id', 'source']);
        });

        $this->addNativeVectorColumn();
    }

    /**
     * A real `vector` column, only where the database can hold one.
     *
     * ATTEMPTED RATHER THAN REQUIRED. An installation on MySQL or SQLite gets
     * the JSON column and the portable search path; one on Postgres WITH the
     * extension gets an indexed nearest-neighbour search. Making the extension a
     * requirement would mean most installations do not get this feature at all,
     * and failing the migration when it is absent would mean they cannot even
     * run the panel.
     */
    private function addNativeVectorColumn(): void
    {
        if (DB::connection()->getDriverName() !== 'pgsql') {
            return;
        }

        try {
            DB::statement('CREATE EXTENSION IF NOT EXISTS vector');
        } catch (\Throwable) {
            // No extension and no permission to add one. The portable path
            // still works; this is an optimisation, not the feature.
            return;
        }

        /*
         * SIZED FROM THE EMBEDDER, NOT FROM THE CONFIG KEY DIRECTLY.
         *
         * They are usually the same number - `ProviderEmbedder` reads that key -
         * but the default embedder does not: `HashEmbedder` knows its own width,
         * and a column built from a config value it ignores would reject every
         * row it was asked to store. Asking the thing that will actually produce
         * the vectors removes the mismatch rather than documenting it.
         */
        $dimensions = app(Alxtexh\Panel\Knowledge\Embedder::class)->dimensions();

        DB::statement("ALTER TABLE panel_knowledge_chunks ADD COLUMN embedding_vector vector({$dimensions})");

        /*
         * IVFFLAT WITH COSINE DISTANCE, matching how the embeddings are
         * compared. An index built for one distance function does not serve
         * another - it is simply not used, silently, and the query falls back to
         * a sequential scan that still returns correct answers slowly. Nothing
         * fails; it is just no longer an index.
         */
        DB::statement(
            'CREATE INDEX panel_knowledge_chunks_embedding_idx ON panel_knowledge_chunks '
            .'USING ivfflat (embedding_vector vector_cosine_ops) WITH (lists = 100)'
        );
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_knowledge_chunks');
    }
};
