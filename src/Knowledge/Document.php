<?php

declare(strict_types=1);

namespace PanelKit\Panel\Knowledge;

/**
 * One thing worth indexing, before it is split into passages.
 *
 * A DOCUMENT IS WHAT A PERSON WOULD CALL A DOCUMENT - a help article, a policy,
 * a note on an account. It is not what gets stored: `Chunker` cuts it into
 * passages, because a whole page embedded as one vector matches everything
 * weakly and nothing well.
 *
 * THE URL IS NOT DECORATION. It is the difference between an assistant that
 * says "your policy is 14 days" and one that says "the billing page says 14
 * days, here it is" - and the second is the only one somebody can check. A
 * source that cannot produce a link should say so by passing null rather than
 * inventing a plausible path, because a citation that 404s is worse than none.
 */
final class Document
{
    /**
     * @param  string  $source  Which indexer produced this - `forget()` and re-indexing work by it.
     * @param  string|null  $id  Stable within the source, so re-indexing REPLACES rather than duplicates.
     */
    public function __construct(
        public readonly string $source,
        public readonly ?string $id,
        public readonly string $title,
        public readonly string $content,
        public readonly ?string $url = null,
    ) {}
}
