<?php

declare(strict_types=1);

namespace PanelKit\Panel\Knowledge;

/**
 * Cuts a document into passages small enough for a match to mean something.
 *
 * THE SIZE IS THE WHOLE DESIGN. Embed a page as one vector and it lands
 * somewhere in the middle of everything it mentions - it is weakly similar to
 * every question the page touches and strongly similar to none, so it is
 * retrieved for the wrong ones and ranked below shorter chunks for the right
 * ones. Embed a sentence and there is not enough context to answer from. A few
 * hundred words is one idea, which is the unit a person would quote back.
 *
 * IT SPLITS ON PARAGRAPHS FIRST, because an author already marked where the
 * ideas end and a fixed character count does not. Cutting mid-sentence produces
 * chunks that begin halfway through a qualification - "unless the account is
 * already suspended" as an opening line reverses the meaning of what follows it.
 *
 * PARAGRAPHS ARE PACKED, NOT ISOLATED. Two short paragraphs about the same thing
 * are better as one chunk than as two thin ones, both of which score lower than
 * they should because neither contains the whole idea.
 *
 * OVERSIZED PARAGRAPHS ARE STILL SPLIT, on sentence boundaries where there are
 * any and on the character count where there are not. A single 40,000-character
 * paragraph is a badly written document, not a reason to send a chunk no
 * provider will accept.
 */
final class Chunker
{
    public function __construct(private readonly int $size = 1200) {}

    public static function fromConfig(): self
    {
        return new self((int) config('panel.knowledge.chunk_size', 1200));
    }

    /**
     * @return list<string> The passages, in the order they appeared.
     */
    public function split(string $text): array
    {
        $text = trim(preg_replace('/[ \t]+/', ' ', $text) ?? $text);

        if ($text === '') {
            return [];
        }

        $chunks = [];
        $current = '';

        foreach ($this->paragraphs($text) as $paragraph) {
            foreach ($this->fit($paragraph) as $piece) {
                /*
                 * PACK UNTIL IT WOULD OVERFLOW, then start a new chunk. `+ 2`
                 * accounts for the blank line that will join them - without it a
                 * chunk can end up marginally over the size it promised, which
                 * matters when the size was chosen to fit a provider's limit.
                 */
                if ($current !== '' && mb_strlen($current) + mb_strlen($piece) + 2 > $this->size) {
                    $chunks[] = $current;
                    $current = $piece;

                    continue;
                }

                $current = $current === '' ? $piece : $current."\n\n".$piece;
            }
        }

        if ($current !== '') {
            $chunks[] = $current;
        }

        return $chunks;
    }

    /** @return list<string> */
    private function paragraphs(string $text): array
    {
        $parts = preg_split('/\n\s*\n/u', $text) ?: [$text];

        return array_values(array_filter(array_map('trim', $parts), static fn (string $p): bool => $p !== ''));
    }

    /**
     * One paragraph, cut down to size if it is over.
     *
     * SENTENCES FIRST, because a cut between sentences loses nothing and a cut
     * inside one can invert the meaning. The character fallback exists for text
     * with no sentence punctuation at all - a pasted log, a table, a language
     * this naive regex does not read - where refusing to split would be worse
     * than splitting badly.
     *
     * @return list<string>
     */
    private function fit(string $paragraph): array
    {
        if (mb_strlen($paragraph) <= $this->size) {
            return [$paragraph];
        }

        $sentences = preg_split('/(?<=[.!?])\s+/u', $paragraph) ?: [];

        $pieces = [];
        $current = '';

        foreach ($sentences as $sentence) {
            // A single sentence longer than a whole chunk. Nothing clever left
            // to do; cut it on the count so the chunk is at least storable.
            if (mb_strlen($sentence) > $this->size) {
                if ($current !== '') {
                    $pieces[] = $current;
                    $current = '';
                }

                foreach (mb_str_split($sentence, $this->size) as $slice) {
                    $pieces[] = $slice;
                }

                continue;
            }

            if ($current !== '' && mb_strlen($current) + mb_strlen($sentence) + 1 > $this->size) {
                $pieces[] = $current;
                $current = $sentence;

                continue;
            }

            $current = $current === '' ? $sentence : $current.' '.$sentence;
        }

        if ($current !== '') {
            $pieces[] = $current;
        }

        return $pieces;
    }
}
