<?php

declare(strict_types=1);

namespace PanelKit\Panel\Knowledge;

/**
 * Turns a passage into a vector.
 *
 * AN INTERFACE BECAUSE THE CHOICE IS THE INSTALLATION'S. Which model, which
 * provider, which dimension count and whether an outbound call is acceptable at
 * all are decisions a panel should not make on somebody's behalf - and an
 * installation that cannot send its subscriber data to a third party needs a
 * local one without rewriting the retrieval layer.
 *
 * IT IS ALSO WHAT MAKES THIS TESTABLE. Retrieval can be exercised end to end
 * against a deterministic implementation, with no network, no key and no cost -
 * see `HashEmbedder`. A retrieval layer that could only be tested against a paid
 * API is one that would not be tested.
 */
interface Embedder
{
    /**
     * @return list<float> The vector for `$text`.
     */
    public function embed(string $text): array;

    /** How long the vectors are. The column and the index are sized from this. */
    public function dimensions(): int;

    /**
     * Cosine similarity below which a match is not a match.
     *
     * IT BELONGS TO THE EMBEDDER, not to the search, because the scale is a
     * property of the vector space and nothing else. A bag of words scores
     * related passages around 0.2 and unrelated ones at exactly zero; a dense
     * model scores related ones at 0.6 and unrelated ones at 0.3. One number
     * cannot serve both - set it for the bag of words and the dense model
     * returns everything it has ever seen; set it for the dense model and the
     * bag of words returns nothing at all and the feature looks broken.
     *
     * THE COST OF GETTING IT WRONG IS ASYMMETRIC. Too high loses answers, which
     * shows up immediately as "it never finds anything". Too low hands the model
     * the nearest unrelated passage, which shows up as a fluent, confident,
     * wrong answer that nobody reports because it looks right.
     */
    public function floor(): float;
}
