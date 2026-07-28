<script setup lang="ts">
/**
 * The assistant, as a drawer over whatever you are already looking at.
 *
 * IT WAS A PAGE AND THAT WAS THE WRONG SHAPE. Asking "is Grace's line active?"
 * is something you do WHILE looking at a list, a form, an invoice - and a
 * dedicated page answers it by throwing that context away. You navigate off the
 * screen you were working on, get an answer, and navigate back to find your
 * filters, your scroll position and your half-typed form gone. The question is
 * an aside; the page made it an errand.
 *
 * SO IT OVERLAYS RATHER THAN REPLACES. The panel underneath keeps its state,
 * because nothing about it unmounted - the drawer is a sibling of the layout,
 * not a route. Close it and you are exactly where you were.
 *
 * THE TRANSCRIPT SURVIVES CLOSING, deliberately. Somebody asks a question,
 * closes the drawer to go and look at the record it named, and opens it again to
 * ask the follow-up - and a conversation that reset itself in between would make
 * the second question unanswerable ("that one" refers to nothing). The state
 * lives in the component, and the component stays mounted for the session.
 *
 * IT IS REACHABLE FROM EVERY SCREEN, which is the other half of the point: it is
 * in the topbar beside search, not in a menu somebody has to remember is there.
 *
 * The streaming below is unchanged from the page it replaces - `fetch` and a
 * reader rather than `EventSource`, because the browser's own SSE client can
 * only issue a GET and this posts a message body. Tool calls are shown as they
 * happen: seeing which record was fetched is what makes a wrong answer
 * catchable, and once the conclusion is on screen nobody re-checks the premise.
 */
import { Button } from '@/components/ui/button'
import { PkSkeleton } from '@panelkit/ui'
import { MessageSquarePlus, Send, Sparkles, Square, TriangleAlert, Wrench, X } from '@lucide/vue'
import { nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue'

interface Turn {
    role: 'you' | 'assistant'
    text: string
    /** Tool names, in the order they were called, for an assistant turn. */
    tools: string[]
    error?: string
}

const open = ref(false)
const turns = ref<Turn[]>([])
const draft = ref('')
const streaming = ref(false)

/**
 * Carried, not remembered server-side.
 *
 * A "current conversation" held on the server would be ambient state shared
 * between two tabs, and the second tab would silently append to the first one's
 * history.
 */
const conversation = ref<string | null>(null)

const transcript = useTemplateRef<HTMLElement>('transcript')
const input = useTemplateRef<HTMLTextAreaElement>('input')

/**
 * The in-flight request, so it can be stopped.
 *
 * An assistant answering at length from a wrong premise is exactly what somebody
 * wants to interrupt; without this the only way out is closing the drawer, which
 * leaves the request running and still being billed.
 */
let controller: AbortController | null = null

async function scrollDown() {
    await nextTick()
    transcript.value?.scrollTo({ top: transcript.value.scrollHeight })
}

function stop() {
    controller?.abort()
    controller = null
    streaming.value = false
}

/** A fresh conversation, not a fresh drawer - the panel behind it is untouched. */
function reset() {
    stop()
    turns.value = []
    conversation.value = null
    draft.value = ''
    input.value?.focus()
}

function close() {
    open.value = false
}

/*
 * CLOSING DOES NOT CANCEL. A long answer is still worth having when the drawer
 * is reopened, and aborting on close would waste tokens already paid for. The
 * only thing that stops a stream is Stop.
 */
watch(open, async (isOpen) => {
    if (!isOpen) return

    await nextTick()
    input.value?.focus()
    await scrollDown()
})

/** Escape closes it, as it does every other overlay in the panel. */
function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && open.value) {
        close()
    }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))

async function send() {
    const message = draft.value.trim()

    if (message === '' || streaming.value) {
        return
    }

    draft.value = ''
    turns.value.push({ role: 'you', text: message, tools: [] })

    const reply: Turn = { role: 'assistant', text: '', tools: [] }
    turns.value.push(reply)

    streaming.value = true
    controller = new AbortController()

    await scrollDown()

    try {
        const response = await fetch('/apps/assistant/stream', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'text/event-stream',
                'X-CSRF-TOKEN':
                    document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ??
                    '',
            },
            body: JSON.stringify({ message, conversation: conversation.value }),
            signal: controller.signal,
        })

        if (!response.ok || !response.body) {
            reply.error = 'The assistant could not be reached.'

            return
        }

        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ''

        for (;;) {
            const { done, value } = await reader.read()

            if (done) break

            buffer += decoder.decode(value, { stream: true })

            /*
             * FRAMES ARE SEPARATED BY A BLANK LINE and a chunk can end mid-frame,
             * so the tail stays in the buffer. Parsing whatever arrived as if it
             * were whole produces a JSON error on a perfectly good stream - and
             * only under load, when chunks get split.
             */
            const frames = buffer.split('\n\n')
            buffer = frames.pop() ?? ''

            for (const frame of frames) {
                const line = frame.replace(/^data: /, '').trim()

                if (line === '') continue

                const event = JSON.parse(line)

                if (event.type === 'delta') {
                    reply.text += event.text
                } else if (event.type === 'tool') {
                    reply.tools.push(event.name)
                } else if (event.type === 'error') {
                    reply.error = event.message
                } else if (event.type === 'done') {
                    conversation.value = event.conversation ?? conversation.value
                }

                await scrollDown()
            }
        }
    } catch (e) {
        // An abort is the operator stopping it, not a failure - saying "the
        // assistant failed" when somebody pressed Stop is the interface
        // misreporting its own state.
        if ((e as Error).name !== 'AbortError') {
            reply.error = 'The connection dropped part-way through that answer.'
        }
    } finally {
        streaming.value = false
        controller = null
    }
}

/** `find_subscriber` reads as a log line rather than as something happening. */
const toolLabel = (name: string) => name.replace(/[-_]/g, ' ')

const suggestions = [
    "Is Grace Wanjiku's line active?",
    'Who expires this week?',
    'How do exports work?',
]

function ask(question: string) {
    draft.value = question
    send()
}
</script>

<template>
    <button
        type="button"
        class="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors"
        :class="open ? 'bg-accent text-foreground' : ''"
        aria-label="Assistant"
        title="Assistant"
        :aria-expanded="open"
        @click="open = !open"
    >
        <Sparkles class="size-4" />
    </button>

    <!--
        TELEPORTED TO THE BODY. Rendered in place it would sit inside the
        topbar's stacking context, where a sticky table header or the sidebar can
        paint over it - an overlay that is sometimes behind things is worse than
        no overlay.
    -->
    <Teleport to="body">
        <Transition
            enter-active-class="transition-opacity duration-150"
            leave-active-class="transition-opacity duration-150"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
        >
            <!-- The scrim is dismissal, not decoration: clicking away is how
                 people close a thing that appeared over their work. -->
            <div
                v-if="open"
                class="fixed inset-0 z-50 bg-black/20 backdrop-blur-[1px]"
                @click="close"
            />
        </Transition>

        <Transition
            enter-active-class="transition-transform duration-200 ease-out"
            leave-active-class="transition-transform duration-150 ease-in"
            enter-from-class="translate-x-full"
            leave-to-class="translate-x-full"
        >
            <aside
                v-if="open"
                class="bg-background fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l shadow-xl"
                role="dialog"
                aria-label="Assistant"
            >
                <header class="flex items-start justify-between gap-3 border-b px-4 py-3">
                    <div class="min-w-0">
                        <h2 class="flex items-center gap-2 text-sm font-semibold">
                            <Sparkles class="text-primary size-4" />
                            Assistant
                        </h2>
                        <p class="text-muted-foreground mt-0.5 text-xs">
                            Subscribers, and how the panel works. Suspending pauses for your
                            approval.
                        </p>
                    </div>

                    <div class="flex shrink-0 items-center gap-1">
                        <button
                            type="button"
                            class="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-1.5 transition-colors"
                            aria-label="New conversation"
                            title="New conversation"
                            @click="reset"
                        >
                            <MessageSquarePlus class="size-4" />
                        </button>
                        <button
                            type="button"
                            class="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-1.5 transition-colors"
                            aria-label="Close"
                            @click="close"
                        >
                            <X class="size-4" />
                        </button>
                    </div>
                </header>

                <div ref="transcript" class="flex-1 overflow-y-auto">
                    <!--
                        THE EMPTY STATE OFFERS QUESTIONS RATHER THAN A PROMPT.
                        "Ask me anything" tells somebody nothing about what this
                        one can do, and the first question people try is usually
                        the one it cannot answer.
                    -->
                    <div v-if="!turns.length" class="flex flex-col gap-2 p-4">
                        <p class="text-muted-foreground text-xs">Try:</p>
                        <button
                            v-for="s in suggestions"
                            :key="s"
                            type="button"
                            class="hover:bg-accent rounded-md border px-3 py-2 text-left text-sm transition-colors"
                            @click="ask(s)"
                        >
                            {{ s }}
                        </button>
                    </div>

                    <div
                        v-for="(turn, i) in turns"
                        :key="i"
                        class="border-b px-4 py-3 last:border-b-0"
                        :class="turn.role === 'you' ? 'bg-muted/30' : ''"
                    >
                        <p class="text-muted-foreground mb-1 text-xs font-medium">
                            {{ turn.role === 'you' ? 'You' : 'Assistant' }}
                        </p>

                        <!--
                            THE TOOL CALLS COME FIRST, above the answer, because
                            that is the order they happened in and because seeing
                            which record was fetched is what makes a wrong answer
                            catchable.
                        -->
                        <p
                            v-for="(tool, t) in turn.tools"
                            :key="t"
                            class="text-muted-foreground mb-1 flex items-center gap-1.5 text-xs"
                        >
                            <Wrench class="size-3" />
                            {{ toolLabel(tool) }}
                        </p>

                        <p v-if="turn.text" class="text-sm whitespace-pre-wrap">{{ turn.text }}</p>

                        <!-- Only while nothing has arrived yet: once text is
                             streaming, the growing text is its own progress. -->
                        <PkSkeleton
                            v-else-if="streaming && i === turns.length - 1 && !turn.error"
                            variant="text"
                            :count="2"
                            label="The assistant is answering"
                            class="mt-1"
                        />

                        <p
                            v-if="turn.error"
                            class="text-destructive mt-1 flex items-start gap-1.5 text-sm"
                        >
                            <TriangleAlert class="mt-0.5 size-3.5 shrink-0" />
                            {{ turn.error }}
                        </p>
                    </div>
                </div>

                <form class="flex items-end gap-2 border-t p-3" @submit.prevent="send">
                    <textarea
                        ref="input"
                        v-model="draft"
                        rows="2"
                        placeholder="Ask about a subscriber…"
                        class="border-input bg-background flex-1 resize-none rounded-md border px-3 py-2 text-sm"
                        :disabled="streaming"
                        @keydown.enter.exact.prevent="send"
                    />

                    <!-- Stop replaces Send while streaming rather than sitting
                         beside it: two buttons where only one can do anything is
                         a choice nobody has to make. -->
                    <Button v-if="streaming" type="button" variant="outline" size="sm" @click="stop">
                        <Square class="size-4" />
                        Stop
                    </Button>

                    <Button v-else type="submit" size="sm" :disabled="!draft.trim()">
                        <Send class="size-4" />
                        Send
                    </Button>
                </form>
            </aside>
        </Transition>
    </Teleport>
</template>
