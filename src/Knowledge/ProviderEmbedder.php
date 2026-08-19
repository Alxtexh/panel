<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Knowledge;

use Laravel\Ai\Embeddings;

/**
 * The real thing: embeddings from a model, through the AI SDK the panel already
 * uses.
 *
 * WHAT IT BUYS OVER `HashEmbedder` IS MEANING. A bag of words matches "suspend"
 * to "suspension" and nothing else; this matches "turn off their line" to a page
 * that never uses the word suspend. That is the entire reason retrieval is worth
 * doing over a LIKE query, and it is why this exists despite costing money.
 *
 * IT IS NOT THE DEFAULT, and that is a deliberate choice rather than an
 * oversight - see `HashEmbedder`. Every indexed chunk is an outbound API call
 * carrying subscriber text to a third party, and a panel that started doing that
 * because a feature shipped would be making a data-protection decision on the
 * installation's behalf.
 *
 * THE DIMENSION COUNT IS CONFIGURED, NOT ASKED FOR. There is no round trip that
 * reports it, and guessing would be worse: the column and the index are sized
 * from this number at migration time, so a mismatch between what is configured
 * and what the model returns is a schema that cannot hold its own data. The
 * check below turns that from a confusing database error into a sentence naming
 * both numbers.
 *
 * CHANGING THE MODEL INVALIDATES EVERYTHING ALREADY STORED. Two models' vectors
 * are not comparable - the similarity between them is a real number that means
 * nothing - so a switch requires a re-index, not a redeploy. `KnowledgeBase`
 * refuses to compare vectors of different lengths, which catches the case where
 * the dimensions also changed; where they happen to match, nothing catches it,
 * and the answers simply get quietly worse. Re-index after a model change.
 */
final class ProviderEmbedder implements Embedder
{
    public function __construct(
        private readonly int $dimensions,
        private readonly ?string $provider = null,
        private readonly ?string $model = null,
    ) {}

    public function dimensions(): int
    {
        return $this->dimensions;
    }

    /**
     * CONFIGURABLE, BECAUSE EVERY MODEL PUTS ITS NOISE SOMEWHERE DIFFERENT.
     *
     * Unrelated text scores around 0.7 on some providers' older models and
     * around 0.1 on newer ones - the same number is a strict filter in one space
     * and a pass-everything in another. The default suits the current
     * generation; an installation that changes model should measure a few known
     * bad pairs and set this above them.
     */
    public function floor(): float
    {
        return (float) config('panel.knowledge.floor', 0.35);
    }

    public function embed(string $text): array
    {
        /*
         * A BLANK INPUT IS NOT SENT. The SDK rejects it, and a chunk that is
         * empty after trimming has nothing to embed anyway - a zero vector
         * scores zero against everything, which is the correct outcome and
         * costs nothing to produce.
         */
        if (trim($text) === '') {
            return array_fill(0, $this->dimensions, 0.0);
        }

        $response = Embeddings::for([$text])
            ->dimensions($this->dimensions)
            /*
             * CACHED, because indexing re-reads content that has not changed and
             * a person asking the same question twice is the normal case, not
             * the exception. `KnowledgeBase` already skips re-embedding
             * unchanged chunks by hash; this covers the query side, where there
             * is no hash to compare against.
             */
            ->cache()
            ->generate($this->provider, $this->model);

        $vector = array_map(static fn ($value): float => (float) $value, $response->first());

        /*
         * THE LENGTH IS CHECKED RATHER THAN ASSUMED. A provider that ignores the
         * requested dimensions - some do, for some models - would otherwise
         * write vectors the column cannot hold, or worse, that it can: a JSON
         * column accepts any length, so the failure would surface much later as
         * searches that quietly return nothing because every comparison found a
         * length mismatch and scored zero.
         */
        if (count($vector) !== $this->dimensions) {
            throw new \RuntimeException(sprintf(
                'The embedding provider returned %d dimensions but panel.knowledge.dimensions is %d. '
                .'Set that config value to what the model actually returns, then re-index.',
                count($vector),
                $this->dimensions,
            ));
        }

        return $vector;
    }
}
