<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Ai\PanelAssistant;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Ai\Models\Conversation;
use Laravel\Ai\Streaming\Events\Error;
use Laravel\Ai\Streaming\Events\TextDelta;
use Laravel\Ai\Streaming\Events\ToolCall;
use Alxtexh\Panel\Ai\AiCredentials;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * The assistant, as a screen and a stream.
 *
 * IT EXISTED AND HAD NO WAY IN. `PanelAssistant` was written, tenant-scoped,
 * metered and tested, and nothing in the panel could reach it - the same
 * disappearing-page problem as the backup screens, one layer down. A model with
 * no endpoint is a class with tests.
 *
 * THE REPLY IS STREAMED, and that is not decoration. A tool-using answer takes
 * ten to thirty seconds; delivered whole it is half a minute of nothing followed
 * by a wall of text, and the honest reading of a blank screen is that the thing
 * is broken. Streaming turns the same wait into something legible while it
 * happens - and, more usefully, shows WHICH SUBSCRIBER was looked up before the
 * conclusion appears, so a wrong answer is caught at the lookup rather than at
 * the end.
 *
 * SERVER-SENT EVENTS, NOT A WEBSOCKET. This is one direction, one request, and
 * ends by itself; a socket would mean a running process and a subscription for
 * something a plain HTTP response does. `text/event-stream` also reconnects on
 * its own and needs no client library.
 *
 * NOTHING HERE IS THE SECURITY. Every tool re-checks the policy the button
 * checks, and the destructive one pauses for a human - see `PanelAssistant`. The
 * stream is a transport.
 */
final class AssistantController extends Controller
{
    /**
     * The conversations this person has had, newest first.
     *
     * WITHOUT THIS THE ASSISTANT HAD NO MEMORY A PERSON COULD REACH. Every
     * conversation was already stored, tenant-scoped and linked to its
     * participant - and the only way back to one was to not close the drawer.
     * Somebody who asked a good question on Monday could not find the answer on
     * Tuesday, which makes the whole feature feel disposable.
     *
     * SCOPED TO THE PARTICIPANT AS WELL AS THE TENANT. A chat history is a
     * transcript of what one person asked about their own customers, in their
     * own words, including the questions they thought better of - being in the
     * same organisation is not a reason to read it.
     *
     * BOUNDED, because this is a sidebar list rather than an archive. Twenty is
     * more than anybody scrolls; anything older is found by asking again.
     */
    public function conversations(Request $request): JsonResponse
    {
        $user = $request->user();

        $conversations = Conversation::query()
            ->where('participant_type', $user->getMorphClass())
            ->where('participant_id', $user->getKey())
            ->latest('updated_at')
            ->limit(20)
            ->get(['id', 'title', 'updated_at']);

        return response()->json([
            'conversations' => $conversations->map(fn (Conversation $c): array => [
                'id' => (string) $c->id,
                /*
                 * A TITLE IS NOT GUARANTEED. The SDK fills one in when it can and
                 * leaves it null otherwise, and "Untitled" in a list of six is
                 * six rows nobody can tell apart - so the first thing asked is
                 * the fallback, which is what somebody actually remembers.
                 */
                'title' => $c->title ?: $this->openingLine($c),
                'at' => $c->updated_at?->diffForHumans(),
            ])->all(),
        ]);
    }

    /**
     * One conversation, replayed.
     *
     * THE TOOL CALLS COME BACK TOO, in the same shape the stream sent them, so a
     * reopened conversation shows which record was looked up rather than only
     * the conclusion. An answer without its lookups is one nobody can check.
     */
    public function conversation(Request $request, string $id): JsonResponse
    {
        $user = $request->user();

        $conversation = Conversation::query()
            ->where('participant_type', $user->getMorphClass())
            ->where('participant_id', $user->getKey())
            ->whereKey($id)
            ->firstOrFail();

        $turns = [];

        foreach ($conversation->messages()->oldest('created_at')->get() as $message) {
            // System and tool rows are transport, not conversation: replaying
            // them would show somebody the prompt rather than their own chat.
            if (! in_array($message->role, ['user', 'assistant'], true)) {
                continue;
            }

            $text = trim((string) $message->content);

            $tools = array_values(array_filter(array_map(
                static fn (mixed $call): ?string => is_array($call) ? ($call['name'] ?? null) : null,
                (array) ($message->tool_calls ?? []),
            )));

            if ($text === '' && $tools === []) {
                continue;
            }

            $turns[] = [
                'role' => $message->role === 'user' ? 'you' : 'assistant',
                'text' => $text,
                'tools' => $tools,
            ];
        }

        return response()->json([
            'id' => (string) $conversation->id,
            'title' => $conversation->title ?: $this->openingLine($conversation),
            'turns' => $turns,
        ]);
    }

    /**
     * The first thing somebody asked, as a title.
     *
     * TRUNCATED RATHER THAN WRAPPED: this goes in a narrow list, and a title
     * that takes three lines makes the list unreadable for the sake of a
     * sentence nobody needs in full.
     */
    private function openingLine(Conversation $conversation): string
    {
        $first = $conversation->messages()
            ->where('role', 'user')
            ->oldest('created_at')
            ->value('content');

        $first = trim((string) $first);

        if ($first === '') {
            return 'New conversation';
        }

        return mb_strlen($first) > 48 ? mb_substr($first, 0, 48).'…' : $first;
    }

    /**
     * Stream one reply.
     *
     * THROTTLED PER USER. A model call costs money per token and the endpoint is
     * a text box; without a limit one person holding a key down is an invoice.
     * The limit is in the route, where the other expensive endpoints keep theirs.
     */
    public function stream(Request $request): StreamedResponse
    {
        $validated = $request->validate([
            'message' => ['required', 'string', 'max:2000'],
            /*
             * CARRIED, NOT INVENTED. Continuing a conversation means sending its
             * id back; a server-side "current conversation" would be ambient
             * state shared between two tabs, and the second tab would silently
             * append to the first one's history.
             */
            'conversation' => ['nullable', 'string', 'max:64'],
        ]);

        $user = $request->user();

        /*
         * BYOK, APPLIED AT THE DOOR - roadmap E.1. An installation-brought
         * provider and key override the environment for this request; with
         * neither configured, the reply is a sentence rather than a stack
         * trace: an unconfigured assistant is a state the operator fixes in
         * settings, not an error the panel should 500 about.
         */
        $credentials = app(AiCredentials::class);
        $credentials->apply();

        if (! $credentials->available()) {
            return response()->stream(function (): void {
                $this->send([
                    'type' => 'error',
                    'message' => 'The assistant is not configured yet. An administrator can add an '
                        .'AI provider key under Settings.',
                ]);
            }, 200, [
                'Content-Type' => 'text/event-stream',
                'Cache-Control' => 'no-cache',
                'X-Accel-Buffering' => 'no',
            ]);
        }

        return response()->stream(function () use ($validated, $user): void {
            /*
             * THE STREAM RUNS OUTSIDE THE SESSION. Laravel closes the session
             * before the callback runs, so anything read from it here is gone -
             * which is why the user is captured above rather than fetched inside.
             */
            /*
             * SCOPED TO THE PERSON ASKING. A conversation is a transcript of what
             * somebody asked about their own customers - `forUser` is what ties
             * it to them, and `TenantScopedConversations` is what stops another
             * organisation reading it back.
             */
            $agent = (new PanelAssistant)->forUser($user);

            try {
                $response = $validated['conversation'] === null
                    ? $agent->stream($validated['message'])
                    : $agent->continue($validated['conversation'], $user)->stream($validated['message']);

                foreach ($response as $event) {
                    $frame = $this->frameFor($event);

                    if ($frame !== null) {
                        $this->send($frame);
                    }
                }

                /*
                 * THE CONVERSATION ID IS SENT LAST, because it is only known
                 * once the response exists. Without it the next message starts a
                 * new conversation and the assistant forgets what was just said -
                 * which reads as the model being useless rather than as the
                 * client dropping an identifier.
                 */
                $this->send(['type' => 'done', 'conversation' => $response->conversationId]);
            } catch (\Throwable $e) {
                report($e);

                /*
                 * A FAILURE IS A FRAME, not a dropped connection. An abandoned
                 * stream leaves the client showing a cursor that never resolves;
                 * there is nothing to distinguish it from a slow answer, so it
                 * waits forever.
                 *
                 * THE MESSAGE IS NOT THE EXCEPTION'S. Provider errors carry API
                 * keys, request bodies and prompt text, and this one goes to a
                 * browser.
                 */
                $this->send([
                    'type' => 'error',
                    'message' => 'The assistant could not answer that. The failure has been logged.',
                ]);
            }
        }, 200, [
            'Content-Type' => 'text/event-stream',
            'Cache-Control' => 'no-cache, no-transform',
            /*
             * nginx BUFFERS PROXIED RESPONSES BY DEFAULT, which turns a stream
             * into one delivery at the end - the exact behaviour this endpoint
             * exists to avoid, and invisible in development where nothing sits
             * in front of PHP.
             */
            'X-Accel-Buffering' => 'no',
            'Connection' => 'keep-alive',
        ]);
    }

    /**
     * What to send the browser for one event, or null to send nothing.
     *
     * MOST EVENTS ARE NOT FOR THE READER. The stream carries starts, ends,
     * reasoning and provider bookkeeping; forwarding all of it would make the
     * client responsible for knowing which ones matter. What a person needs is
     * the text as it arrives and the fact that a lookup happened.
     *
     * @return array<string, mixed>|null
     */
    private function frameFor(object $event): ?array
    {
        return match (true) {
            $event instanceof TextDelta => ['type' => 'delta', 'text' => $event->delta],

            /*
             * A TOOL CALL IS SHOWN, and it is the most useful thing on the
             * screen. "Looking up subscriber…" is what lets somebody catch the
             * assistant reaching for the wrong record before it reasons from it -
             * the answer arrives later and by then the mistake reads as fact.
             */
            $event instanceof ToolCall => ['type' => 'tool', 'name' => $event->toolCall->name],

            $event instanceof Error => [
                'type' => 'error',
                'message' => 'The assistant stopped part-way through that answer.',
            ],

            default => null,
        };
    }

    /** @param array<string, mixed> $frame */
    private function send(array $frame): void
    {
        echo 'data: '.json_encode($frame, JSON_THROW_ON_ERROR)."\n\n";

        /*
         * FLUSHED IMMEDIATELY. PHP's output buffer would otherwise hold the
         * frames until the request ends, which is streaming that arrives all at
         * once - working code with none of the benefit, and no symptom.
         */
        if (ob_get_level() > 0) {
            ob_flush();
        }

        flush();
    }
}
