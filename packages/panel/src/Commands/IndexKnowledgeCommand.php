<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use PanelKit\Panel\Knowledge\Chunker;
use PanelKit\Panel\Knowledge\Document;
use PanelKit\Panel\Knowledge\KnowledgeBase;
use PanelKit\Panel\Knowledge\KnowledgeSource;
use PanelKit\Panel\Support\TenantContext;

/**
 * Fill the knowledge base, so the assistant has something to cite.
 *
 * IT IS A COMMAND RATHER THAN AN EVENT LISTENER, deliberately. Indexing on every
 * save sounds tidier and puts a paid API call inside the request that saves a
 * record - so a provider outage becomes a failure to save a subscriber, and a
 * bulk import becomes ten thousand embedding calls fired from a web worker. A
 * scheduled command re-reads everything, skips what has not changed by hash, and
 * fails without taking a screen down with it.
 *
 * THE TENANT MUST BE NAMED, and this is the part worth dwelling on. Indexing
 * writes rows that will later be read into a prompt and paraphrased back to
 * somebody - so a chunk filed under the wrong organisation is a leak that
 * arrives in the panel's own voice, with no quotation marks and no source to
 * check. Run from a shell there IS no signed-in user to infer it from, so the
 * option is required rather than defaulted; `KnowledgeBase` refuses to write
 * unscoped anyway, and this turns that refusal into a sentence about what to
 * pass.
 *
 * `--fresh` DELETES A SOURCE BEFORE RE-READING IT. The ordinary path replaces
 * documents by id and leaves anything it did not see, which is right when a
 * source is authoritative about its own ids and wrong when documents have been
 * REMOVED at the far end - a deleted help article would otherwise stay
 * retrievable and stay citable forever.
 */
final class IndexKnowledgeCommand extends Command
{
    protected $signature = 'panel:knowledge
                            {action=index : index, clear or status}
                            {--tenant= : Which organisation to index for}
                            {--source=* : Limit to these source keys}
                            {--fresh : Delete each source before re-reading it}';

    protected $description = 'Index panel content so the assistant can cite it instead of guessing';

    public function handle(KnowledgeBase $knowledge): int
    {
        if (! $this->resolveTenant()) {
            return self::FAILURE;
        }

        return match ((string) $this->argument('action')) {
            'index' => $this->index($knowledge),
            'clear' => $this->clear($knowledge),
            'status' => $this->status($knowledge),
            default => $this->unknownAction(),
        };
    }

    private function index(KnowledgeBase $knowledge): int
    {
        $sources = $this->sources();

        if ($sources === []) {
            $this->components->warn(
                'No knowledge sources are configured, so there is nothing to index. '
                .'Add classes implementing '.KnowledgeSource::class.' to panel.knowledge.sources.'
            );

            // NOT A FAILURE. An installation that has not configured retrieval
            // has not done anything wrong, and a scheduled run that reports
            // failure every night trains people to ignore the schedule.
            return self::SUCCESS;
        }

        $chunker = Chunker::fromConfig();
        $documents = 0;
        $chunks = 0;

        foreach ($sources as $source) {
            if ($this->option('fresh')) {
                $knowledge->forget($source->key());
            }

            foreach ($source->documents() as $document) {
                $pieces = $chunker->split($document->content);

                foreach ($pieces as $index => $piece) {
                    /*
                     * THE CHUNK INDEX IS PART OF THE ID. Without it every
                     * passage of a document would share one key and each would
                     * overwrite the last, leaving a single chunk where there
                     * should be six - a knowledge base that indexed everything
                     * and stored the ending.
                     */
                    $knowledge->put(
                        source: $source->key(),
                        sourceId: $this->chunkId($document, $index),
                        title: count($pieces) > 1
                            ? sprintf('%s (%d/%d)', $document->title, $index + 1, count($pieces))
                            : $document->title,
                        content: $piece,
                        url: $document->url,
                    );

                    $chunks++;
                }

                $documents++;
            }

            $this->components->task("  {$source->key()}", fn () => true);
        }

        $this->components->info("Indexed {$documents} document(s) as {$chunks} passage(s).");

        return self::SUCCESS;
    }

    private function clear(KnowledgeBase $knowledge): int
    {
        foreach ($this->sources() as $source) {
            $knowledge->forget($source->key());

            $this->components->task("  cleared {$source->key()}", fn () => true);
        }

        return self::SUCCESS;
    }

    private function status(KnowledgeBase $knowledge): int
    {
        $this->components->twoColumnDetail('Passages stored', (string) $knowledge->count());
        $this->components->twoColumnDetail(
            'Search',
            $knowledge->usesNativeVectors()
                ? 'pgvector, in the database'
                : 'in PHP, capped at '.config('panel.knowledge.scan_limit', 5000).' passages',
        );
        /*
         * THE DEFAULT IS REPEATED HERE ON PURPOSE. `mergeConfigFrom` merges only
         * the top level, so an application that sets `knowledge.sources` and
         * nothing else replaces the package's whole `knowledge` array - every
         * reader has to carry its own fallback or it reads null. Printing an
         * empty embedder on the status screen would be a small lie about which
         * one is running.
         */
        $this->components->twoColumnDetail(
            'Embedder',
            (string) config('panel.knowledge.embedder', \PanelKit\Panel\Knowledge\HashEmbedder::class),
        );

        return self::SUCCESS;
    }

    /**
     * A stable, bounded id for one passage.
     *
     * HASHED BECAUSE A SOURCE ID CAN BE ANYTHING - a path, a URL, a composite
     * key - and the column is 128 characters. Truncating a long id would make
     * two different documents collide and silently overwrite each other, which
     * is precisely the failure this whole scheme is meant to avoid.
     */
    private function chunkId(Document $document, int $index): string
    {
        $base = $document->id ?? $document->title;

        return mb_strlen($base) > 90
            ? hash('sha256', $base).'#'.$index
            : $base.'#'.$index;
    }

    /**
     * The sources to work on, in config order.
     *
     * @return list<KnowledgeSource>
     */
    private function sources(): array
    {
        $only = array_filter((array) $this->option('source'));

        $sources = [];

        foreach ((array) config('panel.knowledge.sources', []) as $class) {
            $source = app($class);

            if (! $source instanceof KnowledgeSource) {
                $this->components->warn(sprintf(
                    '%s is listed as a knowledge source but does not implement %s - skipping it.',
                    is_string($class) ? $class : get_debug_type($class),
                    KnowledgeSource::class,
                ));

                continue;
            }

            if ($only !== [] && ! in_array($source->key(), $only, true)) {
                continue;
            }

            $sources[] = $source;
        }

        return $sources;
    }

    /**
     * Make `--tenant` the acting organisation for this process.
     *
     * THROUGH THE SAME RESOLVER EVERYTHING ELSE READS, rather than by passing a
     * key down to the writer. A second path to "which tenant" is a second place
     * for the two to disagree, and the one that disagrees quietly is the one
     * that writes rows under the wrong organisation.
     */
    private function resolveTenant(): bool
    {
        $tenant = $this->option('tenant');

        if ($tenant !== null && $tenant !== '') {
            config(['panel.tenancy.resolver' => static fn (): string => (string) $tenant]);

            return true;
        }

        // Already resolvable - a dedicated-database installation where tenancy
        // was initialised, or an application that configured its own resolver.
        if (app(TenantContext::class)->currentKey() !== null) {
            return true;
        }

        $this->components->error(
            'No organisation is in context, and indexing writes rows that are later read back into an '
            .'answer - so filing them under the wrong one would leak as prose. Pass --tenant=<id>.'
        );

        return false;
    }

    private function unknownAction(): int
    {
        $this->components->error('Unknown action. Use index, clear or status.');

        return self::FAILURE;
    }
}
