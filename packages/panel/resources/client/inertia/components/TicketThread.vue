<script setup lang="ts">
/**
 * A ticket's conversation, on the record page.
 *
 * PACKAGED, AND IT MOVED WITHOUT AN EDIT. Every import here was already
 * `@inertiajs/vue3`, `@alxtexh-enterprise/panel`, `vue` or `vue-sonner` - not one `@/` alias
 * into an application. That is what made ticketing the cheapest thing on the
 * promotable list: it was written against the package from the start.
 *
 * IT IS MOUNTED THROUGH A RENDER HOOK rather than routed. The thread belongs on
 * the ticket's own record page, beneath the fields, and a render hook is how a
 * package puts markup on a screen the application owns. The application still
 * decides the name resolves to this - `registerRenderHookComponent` - because a
 * component name arriving from the server would otherwise let a plugin mount
 * anything in the bundle.
 *
 * INSTALLED BY A PLUGIN, NOT BY THIS PAGE. It arrives through the
 * `view.after` render hook, so `ResourceView` knows nothing about tickets and
 * ticketing needs no change to a shared screen - see `TicketingPlugin`.
 *
 * FETCHED, NOT SHIPPED WITH THE RECORD, for the same reason relation panels
 * are: a ticket with two hundred messages must not put two hundred messages
 * in front of the record somebody opened the page to read.
 *
 * WHAT ARRIVES IS ALREADY FILTERED. The server sends only the messages this
 * reader may see - an internal note is never in the payload of a page an
 * opener receives, rather than being sent with a flag this component is
 * trusted to respect. `canNote` says whether the composer offers the choice;
 * it is a UI hint, and the write re-checks server-side.
 */
import { router } from '@inertiajs/vue3'
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { PkButton as Button } from '@alxtexh-enterprise/panel'

const props = defineProps<{
    /** Forwarded by the record page. */
    recordId?: number | string
    baseUrl?: string
}>()

type Reply = {
    id: number
    body: string
    internal: boolean
    author: string
    fromOpener: boolean
    at: string | null
}

const replies = ref<Reply[]>([])
const capped = ref(false)
const total = ref(0)
const canReply = ref(false)
const canNote = ref(false)
const loading = ref(true)
const failed = ref(false)

const body = ref('')
const internal = ref(false)
const sending = ref(false)

const url = computed(() => `${props.baseUrl ?? ''}/${props.recordId}/thread`)

async function load() {
    loading.value = true
    failed.value = false

    try {
        const response = await fetch(url.value, {
            headers: { Accept: 'application/json' },
            credentials: 'same-origin',
        })

        if (!response.ok) {
            throw new Error(String(response.status))
        }

        const data = await response.json()

        replies.value = data.replies
        capped.value = data.capped
        total.value = data.total
        canReply.value = data.canReply
        canNote.value = data.canNote
    } catch {
        // A thread that will not load must SAY SO. Rendering an empty
        // conversation would tell somebody their customer has not written
        // back, which is a different and much worse thing than an error.
        failed.value = true
    } finally {
        loading.value = false
    }
}

onMounted(load)

function send() {
    if (body.value.trim() === '' || sending.value) {
        return
    }

    sending.value = true

    router.post(
        url.value,
        {
            body: body.value,
            visibility: internal.value ? 'internal' : 'public',
        },
        {
            preserveScroll: true,
            onSuccess: () => {
                body.value = ''
                void load()
            },
            onError: () => toast.error('That message was not saved.'),
            onFinish: () => (sending.value = false),
        },
    )
}
</script>

<template>
    <section class="flex w-full flex-col gap-3 rounded-lg border bg-card p-4">
        <h2 class="text-sm font-semibold">Conversation</h2>

        <p v-if="loading" class="text-sm text-muted-foreground">Loading the conversation…</p>

        <p v-else-if="failed" class="text-sm text-destructive">
            The conversation could not be loaded.
            <button type="button" class="underline" @click="load">Try again</button>
        </p>

        <p v-else-if="replies.length === 0" class="text-sm text-muted-foreground">
            Nothing has been said yet.
        </p>

        <!--
            SAID, NOT HIDDEN. Showing the last three hundred of four hundred
            without a word is how somebody scrolls up, fails to find what they
            were promised, and concludes the ticket was edited.
        -->
        <p
            v-else-if="capped"
            class="rounded-md border bg-muted/40 px-3 py-2 text-xs text-muted-foreground"
        >
            Showing the most recent {{ replies.length }} of {{ total }} messages. The conversation
            is read from the bottom, so the older ones are above this point in the ticket's history.
        </p>

        <ol v-if="replies.length > 0" class="flex flex-col gap-3">
            <li
                v-for="reply in replies"
                :key="reply.id"
                class="flex flex-col gap-1 rounded-md border p-3 text-sm"
                :class="
                    reply.internal
                        ? // A NOTE LOOKS DIFFERENT FROM A REPLY, on purpose and
                          // strongly. The one thing an operator must never do is
                          // mistake the private margin for the letter.
                          'border-amber-300 bg-amber-50 dark:border-amber-900/60 dark:bg-amber-950/30'
                        : reply.fromOpener
                          ? 'bg-muted/40'
                          : 'bg-background'
                "
            >
                <div class="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span class="font-medium text-foreground">{{ reply.author }}</span>
                    <span
                        v-if="reply.internal"
                        class="font-medium text-amber-700 dark:text-amber-400"
                    >
                        Internal note — the customer cannot see this
                    </span>
                    <span class="ml-auto">{{ reply.at }}</span>
                </div>

                <p class="whitespace-pre-wrap">{{ reply.body }}</p>
            </li>
        </ol>

        <div v-if="canReply || canNote" class="flex flex-col gap-2 border-t pt-3">
            <textarea
                v-model="body"
                rows="3"
                :placeholder="internal ? 'A note for the desk only…' : 'Write a reply…'"
                class="w-full resize-y rounded-md border bg-background px-3 py-2 text-sm outline-none"
            />

            <div class="flex flex-wrap items-center gap-2">
                <!--
                    THE CHOICE IS AN EXPLICIT TOGGLE WITH ITS STATE ON SCREEN,
                    never a quiet default. Somebody typing "tell him no" needs
                    to be able to see, without checking, which of the two
                    things they are about to do.
                -->
                <label v-if="canNote" class="flex items-center gap-2 text-sm">
                    <input v-model="internal" type="checkbox" class="size-4" />
                    Internal note
                </label>

                <Button
                    class="ml-auto"
                    size="sm"
                    :disabled="sending || body.trim() === ''"
                    @click="send"
                >
                    {{ internal ? 'Add note' : 'Send reply' }}
                </Button>
            </div>
        </div>

        <p v-else-if="!loading && !failed" class="border-t pt-3 text-sm text-muted-foreground">
            This ticket is resolved, so it is not taking further replies.
        </p>
    </section>
</template>
