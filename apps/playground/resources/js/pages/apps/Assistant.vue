<script setup lang="ts">
/**
 * The assistant, with its reply arriving as it is written.
 *
 * THE WAIT IS THE PROBLEM THIS SOLVES. A tool-using answer takes ten to thirty
 * seconds, and delivered whole that is half a minute of nothing followed by a
 * wall of text - during which the honest reading of the screen is that it is
 * broken. The same wait, streamed, is legible while it happens.
 *
 * THE TOOL CALLS ARE SHOWN, and that turns out to matter more than the typing
 * effect. "Looking up subscriber" appearing before the answer is what lets
 * somebody catch the assistant reaching for the wrong record - once the
 * conclusion is on screen it reads as fact, and nobody re-checks the premise.
 *
 * `fetch` AND A READER, NOT `EventSource`. The browser's own SSE client can only
 * issue a GET, and this needs to POST a message body; the wire format is the
 * same, so the frames are parsed here rather than given up on.
 *
 * IT IS CANCELLABLE. A model answering at length with the wrong end of the stick
 * is a thing you want to stop, and without an abort the only way out is leaving
 * the page.
 */
import AppLayout from '@/layouts/AppLayout.vue'
import { Button } from '@/components/ui/button'
import { Head } from '@inertiajs/vue3'
import { PkSkeleton } from '@panelkit/ui'
import { Send, Square, TriangleAlert, Wrench } from '@lucide/vue'
import { nextTick, ref, useTemplateRef } from 'vue'

defineOptions({ layout: AppLayout })

interface Turn {
    role: 'you' | 'assistant'
    text: string
    /** Tool names, in the order they were called, for an assistant turn. */
    tools: string[]
    error?: string
}

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

/**
 * The in-flight request, so it can be stopped.
 *
 * An assistant answering at length from a wrong premise is exactly what somebody
 * wants to interrupt; without this the only way out is leaving the page.
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
                    document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ?? '',
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
</script>

<template>
    <Head title="Assistant" />

    <div class="flex h-[calc(100dvh-8rem)] flex-col gap-4 p-4">
        <div>
            <h1 class="text-xl font-semibold">Assistant</h1>
            <p class="text-muted-foreground text-sm">
                It can look subscribers up and suspend them. Suspending pauses for your approval -
                nothing is done to an account without it.
            </p>
        </div>

        <div ref="transcript" class="flex-1 overflow-y-auto rounded-lg border">
            <p v-if="!turns.length" class="text-muted-foreground p-6 text-center text-sm">
                Ask about a subscriber. "Is Grace Wanjiku's line active?" or "who expires this
                week?"
            </p>

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
                    THE TOOL CALLS COME FIRST, above the answer, because that is
                    the order they happened in and because seeing which record
                    was fetched is what makes a wrong answer catchable.
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

                <!-- Only while nothing has arrived yet: once text is streaming,
                     the growing text is its own progress indicator. -->
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

        <form class="flex items-end gap-2" @submit.prevent="send">
            <textarea
                v-model="draft"
                rows="2"
                placeholder="Ask about a subscriber…"
                class="border-input bg-background flex-1 resize-none rounded-md border px-3 py-2 text-sm"
                :disabled="streaming"
                @keydown.enter.exact.prevent="send"
            />

            <!-- Stop replaces Send while streaming rather than sitting beside
                 it: two buttons where only one can do anything is a choice
                 nobody has to make. -->
            <Button v-if="streaming" type="button" variant="outline" @click="stop">
                <Square class="size-4" />
                Stop
            </Button>

            <Button v-else type="submit" :disabled="!draft.trim()">
                <Send class="size-4" />
                Send
            </Button>
        </form>
    </div>
</template>
