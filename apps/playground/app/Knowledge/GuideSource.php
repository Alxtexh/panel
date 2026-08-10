<?php

declare(strict_types=1);

namespace App\Knowledge;

use App\Support\Guide;
use Alxtexh\Panel\Knowledge\Document;
use Alxtexh\Panel\Knowledge\KnowledgeSource;

/**
 * The build guide, made retrievable - roadmap 5.5.
 *
 * The help centre answers an OPERATOR's questions; the guide answers a
 * BUILDER's - "how do I add a resource", "what does the tenancy mode
 * change" - and until now the assistant could answer neither from it,
 * inventing plausible instructions instead. Same principle as HelpSource:
 * it indexes THE SAME ARRAY the pages render, so a cited answer cannot
 * drift from the page it links to.
 *
 * CODE BLOCKS ARE INDEXED TOO, deliberately. Builder questions arrive as
 * the tokens in the code - "panel:install", "visibleWhen" - and with the
 * bag-of-words default embedder those tokens are what match. They are
 * appended after the prose so a quoted passage still leads with sentences.
 *
 * STATIC TEXT, NOT RECORDS - the same access class as the help centre:
 * every signed-in person can already read `/about/building`, so retrieval
 * needs no per-asker gate. A source that indexes RECORDS is a different
 * animal entirely; see SearchKnowledge's own note and the blueprint's
 * assistant section.
 */
final class GuideSource implements KnowledgeSource
{
    public function key(): string
    {
        return 'guide';
    }

    public function documents(): iterable
    {
        foreach (Guide::pages() as $slug => $page) {
            $code = array_map(
                static fn (array $block): string => (string) ($block['code'] ?? ''),
                (array) ($page['blocks'] ?? []),
            );

            yield new Document(
                source: $this->key(),
                id: (string) $slug,
                title: $page['title'],
                content: implode("\n\n", array_filter([
                    $page['title'],
                    $page['summary'] ?? '',
                    ...$page['body'],
                    ...$code,
                ])),
                url: '/about/building/'.$slug,
            );
        }
    }
}
