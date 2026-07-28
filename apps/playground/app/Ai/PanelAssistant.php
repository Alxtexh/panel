<?php

declare(strict_types=1);

namespace App\Ai;

use App\Ai\Middleware\MeterPerTenant;
use App\Ai\Tools\FindSubscriber;
use App\Ai\Tools\SearchKnowledge;
use App\Ai\Tools\SuspendSubscriber;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\Conversational;
use Laravel\Ai\Contracts\HasTools;
use Laravel\Ai\Concerns\RemembersConversations;
use Laravel\Ai\Promptable;
use Stringable;

/**
 * The panel's assistant.
 *
 * THE INSTRUCTIONS DO NOT CARRY THE SECURITY. It is worth being explicit about
 * that, because writing "never suspend an account unless the user is permitted"
 * into a prompt feels like a control and is not one - it is a request to a system
 * whose defining property is that its output is not guaranteed. Every tool
 * re-checks the same policy the button checks, and the destructive one pauses
 * for a human. The instructions below exist to make the assistant USEFUL, not to
 * make it safe.
 *
 * WHAT THEY DO CARRY is tone and scope: say when you are unsure, prefer looking
 * something up to guessing, and never claim to have done something you were
 * refused. That last one matters - a model told it lacks permission will
 * otherwise sometimes summarise the refusal as a success.
 *
 * CONVERSATIONS ARE REMEMBERED, and therefore tenant data. The SDK's tables
 * arrive with no tenant column; `TenantScopedConversations` adds one and scopes
 * every read. A chat history is a transcript of what somebody asked about their
 * own customers, including the questions they thought better of.
 */
final class PanelAssistant implements Agent, Conversational, HasTools
{
    use Promptable;
    use RemembersConversations;

    public function instructions(): Stringable|string
    {
        return <<<'TEXT'
        You help staff at an internet service provider look after their subscribers.

        Be brief and concrete. Prefer looking a subscriber up to guessing which one
        somebody means - if a name is ambiguous, say so and list the matches rather
        than picking one.

        You have tools. Use them rather than describing what you would do.

        If a tool tells you that you lack permission, say exactly that and stop.
        Do not describe the action as though it happened, and do not suggest a way
        around it. The refusal is the answer.

        Never invent a subscriber, an access code, a phone number or a status. If
        you do not have it, say you do not have it.

        For any question about how the panel itself works, search the documentation
        first and answer from what comes back, quoting the link. If the search
        returns nothing, say the panel does not document it - do not fill the gap
        from general knowledge, because a plausible answer about somebody else's
        software is worse than no answer about theirs.
        TEXT;
    }

    /** @return iterable<object> */
    public function tools(): iterable
    {
        return [
            new SearchKnowledge,
            new FindSubscriber,
            new SuspendSubscriber,
        ];
    }

    /**
     * Middleware around every prompt.
     *
     * METERING BELONGS HERE rather than at the call site, so a second entry point
     * - a scheduled summary, a webhook, a second screen - cannot bypass it by
     * forgetting. One tenant must not be able to spend another's budget, and the
     * only way to guarantee that is to count in a place every prompt passes
     * through.
     *
     * @return iterable<class-string>
     */
    public function middleware(): iterable
    {
        return [MeterPerTenant::class];
    }
}
