<?php

declare(strict_types=1);

namespace App\Ai\Tools;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Ai\Contracts\Tool;
use Laravel\Ai\Tools\Request;
use PanelKit\Panel\Ai\PanelTool;
use PanelKit\Panel\Knowledge\KnowledgeBase;
use Stringable;

/**
 * Look something up in the panel's own documentation, so the answer can be
 * attributed.
 *
 * THIS IS THE TOOL THAT STOPS THE ASSISTANT INVENTING POLICY. Asked "how do
 * exports work here", a model with no retrieval writes a fluent, plausible,
 * entirely made-up paragraph - and it is indistinguishable from a real answer
 * because it is written in the same voice as one. This returns the actual
 * passages, with links, and instructs the model to quote them.
 *
 * IT RETURNS NOTHING RATHER THAN THE NEAREST THING. `KnowledgeBase` applies a
 * similarity floor, so a question about something the panel has never documented
 * comes back empty and the reply below says so in a sentence the model can
 * relay. The alternative - handing over the least-bad passage - produces a
 * confident answer about the wrong subject, which is the single worst failure
 * this whole feature could have.
 *
 * NO PERMISSION CHECK, AND THAT IS A DECISION RATHER THAN AN OMISSION. The
 * indexed content is the help centre, which every signed-in person can already
 * read at `/help` - gating it here would refuse somebody an answer they can get
 * by clicking a link. What DOES protect it is the scope: `KnowledgeBase` refuses
 * to search without a tenant, so this can only ever read this organisation's
 * chunks. If a source that indexes RECORDS is ever added, this tool needs the
 * same `authorise()` call every other one has, because then it would be
 * answering questions the screen would refuse.
 */
final class SearchKnowledge extends PanelTool implements Tool
{
    public function description(): Stringable|string
    {
        return 'Search this panel\'s help documentation for passages about a topic. '
            .'Use it before answering any question about how the panel works, and quote what it returns.';
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'question' => $schema->string()
                ->description('What to look up, in the words the person used.')
                ->required(),
        ];
    }

    public function handle(Request $request): Stringable|string
    {
        $question = trim((string) $request['question']);

        if ($question === '') {
            return 'I need a question to look up.';
        }

        /*
         * THREE, not ten. Every passage returned is pushed into the model's
         * context, so a generous limit crowds out the conversation it is meant
         * to be answering - and passages four through ten are, by construction,
         * the ones that matched least well.
         */
        $matches = app(KnowledgeBase::class)->search($question, limit: 3);

        if ($matches === []) {
            /*
             * PHRASED AS AN INSTRUCTION, because the model is about to decide
             * what to do with an empty result and its instinct is to answer from
             * memory. "Nothing found" invites it to fill the gap; this does not.
             */
            return 'The documentation has nothing about that. Tell the person you do not have it '
                .'documented rather than answering from general knowledge.';
        }

        $passages = [];

        foreach ($matches as $i => $match) {
            $passages[] = sprintf(
                "[%d] %s%s\n%s",
                $i + 1,
                $match['title'],
                $match['url'] === null ? '' : ' - '.$match['url'],
                $match['content'],
            );
        }

        return "Answer using only these passages, and cite the ones you use by their link:\n\n"
            .implode("\n\n", $passages);
    }
}
