<?php

declare(strict_types=1);

namespace App\Knowledge;

use PanelKit\Panel\Knowledge\Document;
use PanelKit\Panel\Knowledge\KnowledgeSource;
use PanelKit\Panel\Support\HelpCentre;

/**
 * The help centre, made retrievable.
 *
 * THIS IS THE SOURCE WORTH INDEXING FIRST, and the reason is that it is the only
 * text in the panel written to answer a question. Subscriber records answer
 * "who", not "how"; the help articles are the thing somebody is actually looking
 * for when they ask the assistant how exporting works.
 *
 * IT INDEXES THE SAME ARRAY THE PAGE RENDERS. Not a copy of it - see
 * `HelpArticles`. If it were a copy, the assistant would eventually cite an
 * answer the help page no longer gives, attribute it to that page, and there
 * would be nothing to make the disagreement visible.
 *
 * THE URL POINTS AT THE ARTICLE, not just the page. `#first-steps` is what turns
 * "the help centre explains this" into a link that opens on the paragraph in
 * question, which is the difference between a citation somebody can check and
 * one they have to go and find.
 *
 * THE KEYWORDS ARE INDEXED WITH THE BODY, deliberately. They exist because
 * people search for the word in their head - "csv", "stuck" - rather than the
 * one an author chose, and that is as true of a question asked in chat as of one
 * typed into the search box. With the default bag-of-words embedder they are
 * doing most of the work.
 */
final class HelpSource implements KnowledgeSource
{
    public function key(): string
    {
        return 'help';
    }

    public function documents(): iterable
    {
        foreach (HelpCentre::articles() as $article) {
            yield new Document(
                source: $this->key(),
                id: $article['id'],
                title: $article['title'],
                content: implode("\n\n", [
                    $article['title'],
                    ...$article['body'],
                    // Last, so a passage still reads as prose if it is quoted.
                    $article['keywords'],
                ]),
                url: '/help#'.$article['id'],
            );
        }
    }
}
