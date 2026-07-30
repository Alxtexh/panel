<script setup lang="ts">
/**
 * Chat: conversation list beside a thread.
 *
 * TWO PANES ON DESKTOP, ONE ON MOBILE - the same reasoning the mailbox uses. A
 * thread beside a list needs real width; below that, opening a conversation
 * replaces the list.
 *
 * NOTHING HERE IS DEFERRED, for the reason the mailbox documents: navigation
 * preserves state, so the component never remounts and a deferred follow-up
 * never fires - the thread would stay on whatever loaded first. Both queries are
 * bounded and indexed.
 *
 * A SENT MESSAGE IS APPENDED LOCALLY and confirmed by the response. Waiting for
 * a round trip before the message appears is the single thing that makes a chat
 * feel broken, and the failure mode - a message that never arrives - is visible
 * because the input keeps its text until the request succeeds.
 */
import { Head, router, usePage } from '@inertiajs/vue3';
import { Search, Send } from '@lucide/vue';
import { useLiveUpdates } from '@panelkit/ui';
import { computed, nextTick, ref, watch } from 'vue';

interface Conversation {
    id: number;
    name: string;
    status: string;
    preview: string | null;
    unread: number;
    at: string | null;
}

interface Message {
    id: number;
    direction: 'incoming' | 'outgoing';
    body: string;
    at: string | null;
}

const props = defineProps<{
    search: string;
    selectedId: number | null;
    /**
     * The transport, chosen server-side.
     *
     * The page never names Reverb or polling. It hands this to the composable
     * and gets patched rows; which driver produced them is not its business,
     * which is what makes switching one a config change.
     */
    live: {
        driver: 'none' | 'poll' | 'broadcast';
        intervalMs: number;
        batchMs: number;
        channel: string | null;
        events: string[];
        pauseWhenHidden: boolean;
    };
}>();

defineOptions({
    layout: { breadcrumbs: [{ title: 'Chat', href: '/apps/chat' }] },
});

const page = usePage();

const conversations = computed(
    () => (page.props.conversations as Conversation[] | undefined) ?? [],
);
const thread = computed(
    () =>
        page.props.thread as {
            name: string;
            status: string;
            messages: Message[];
        } | null,
);

const query = ref(props.search);
const draft = ref('');
const sending = ref(false);
const scroller = ref<HTMLElement | null>(null);

/** Locally appended messages, so a send appears before the page reloads. */
const appended = ref<Message[]>([]);

const visibleMessages = computed(() => [
    ...(thread.value?.messages ?? []),
    ...appended.value,
]);

/**
 * Live updates for the OPEN thread.
 *
 * `onInsert` rather than a patch, because in a chat the arrival IS the event -
 * a message that is not already on the page is exactly the one somebody is
 * waiting for. Every other surface in the panel wants the opposite (a row
 * created on page 40 must not appear on page 1), which is why the composable
 * drops unknown ids unless a caller asks for them.
 *
 * `onResync` refetches after a reconnect rather than trusting what was on
 * screen: a gap in delivery is invisible from the client, so the only safe
 * assumption after a disconnect is that something was missed.
 */
useLiveUpdates({
    config: props.live,
    rows: computed(
        () => visibleMessages.value as unknown as Record<string, any>[],
    ),
    onInsert: () => router.reload({ only: ['thread', 'conversations'] }),
    onResync: () => router.reload({ only: ['thread', 'conversations'] }),
});

// A new thread starts at the bottom, where the newest message is.
watch(
    () => thread.value?.name,
    () => {
        appended.value = [];
        nextTick(scrollToEnd);
    },
);

function scrollToEnd() {
    if (scroller.value) {
        scroller.value.scrollTop = scroller.value.scrollHeight;
    }
}

function go(params: Record<string, string | number | undefined>) {
    const current = Object.fromEntries(
        new URLSearchParams(window.location.search),
    );
    const next: Record<string, string> = {};

    for (const [key, value] of Object.entries({ ...current, ...params })) {
        if (value !== undefined && value !== '' && value !== null) {
            next[key] = String(value);
        }
    }

    router.get('/apps/chat', next, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
    });
}

function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);

    return match ? decodeURIComponent(match[1]) : '';
}

function open(conversation: Conversation) {
    conversation.unread = 0;
    go({ id: conversation.id });

    fetch(`/apps/chat/${conversation.id}/read`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': csrf(),
        },
        credentials: 'same-origin',
    }).catch(() => {
        // The badge is already cleared locally; a failed clear costs a stale
        // number until the next load, which is not worth an error toast.
    });
}

async function send() {
    const body = draft.value.trim();

    if (!body || !props.selectedId || sending.value) {
        return;
    }

    sending.value = true;

    try {
        const response = await fetch(`/apps/chat/${props.selectedId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-XSRF-TOKEN': csrf(),
            },
            credentials: 'same-origin',
            body: JSON.stringify({ body }),
        });

        if (!response.ok) {
            throw new Error(String(response.status));
        }

        const { message } = await response.json();

        appended.value = [...appended.value, message];
        // Cleared only on success: a failed send that empties the box loses
        // what the person typed, which is the worst outcome available here.
        draft.value = '';

        nextTick(scrollToEnd);
        router.reload({ only: ['conversations'] });
    } catch {
        // The text is still in the box; the person can retry.
    } finally {
        sending.value = false;
    }
}

const STATUS_TONE: Record<string, string> = {
    online: 'bg-emerald-500',
    away: 'bg-amber-500',
    offline: 'bg-muted-foreground/40',
};

function initials(name: string): string {
    return name
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase() ?? '')
        .join('');
}
</script>

<template>
    <Head title="Chat" />

    <div class="flex h-full min-h-0 w-full">
        <!-- Conversation list. -->
        <aside
            class="flex min-w-0 flex-col border-r md:w-80 md:shrink-0"
            :class="selectedId ? 'hidden md:flex' : 'flex flex-1'"
        >
            <div class="border-b p-3">
                <div class="relative">
                    <Search
                        class="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                        v-model="query"
                        type="search"
                        class="w-full rounded-md border bg-background py-1.5 pr-2 pl-8 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                        placeholder="Search people…"
                        @keydown.enter="
                            go({ q: query || undefined, id: undefined })
                        "
                    />
                </div>
            </div>
            <p
                v-if="conversations.length === 0"
                class="p-8 text-center text-sm text-muted-foreground"
            >
                No conversations.
            </p>

            <ul v-else class="min-h-0 flex-1 divide-y overflow-y-auto">
                <li v-for="c in conversations" :key="c.id">
                    <button
                        type="button"
                        class="flex w-full items-center gap-3 p-3 text-left transition-colors hover:bg-accent/40"
                        :class="selectedId === c.id ? 'bg-accent/60' : ''"
                        @click="open(c)"
                    >
                        <span class="relative shrink-0">
                            <span
                                class="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground"
                            >
                                {{ initials(c.name) }}
                            </span>
                            <span
                                class="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-background"
                                :class="
                                    STATUS_TONE[c.status] ?? STATUS_TONE.offline
                                "
                                :aria-label="c.status"
                            />
                        </span>

                        <span class="min-w-0 flex-1">
                            <span
                                class="flex items-center justify-between gap-2"
                            >
                                <span class="truncate text-sm font-medium">{{
                                    c.name
                                }}</span>
                                <span
                                    class="shrink-0 text-[11px] text-muted-foreground"
                                    >{{ c.at }}</span
                                >
                            </span>
                            <span
                                class="block truncate text-xs text-muted-foreground"
                                >{{ c.preview }}</span
                            >
                        </span>

                        <span
                            v-if="c.unread > 0"
                            class="shrink-0 rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground"
                        >
                            {{ c.unread }}
                        </span>
                    </button>
                </li>
            </ul>
        </aside>

        <!-- Thread. -->
        <section
            class="flex min-w-0 flex-1 flex-col"
            :class="selectedId ? 'flex' : 'hidden md:flex'"
        >
            <div
                v-if="!thread"
                class="flex flex-1 items-center justify-center p-8 text-sm text-muted-foreground"
            >
                Choose a conversation.
            </div>

            <template v-else>
                <header class="flex items-center gap-3 border-b p-3">
                    <span
                        class="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground"
                    >
                        {{ initials(thread.name) }}
                    </span>
                    <div class="min-w-0">
                        <p class="truncate text-sm font-semibold">
                            {{ thread.name }}
                        </p>
                        <p
                            class="flex items-center gap-1.5 text-xs text-muted-foreground"
                        >
                            <span class="capitalize">{{ thread.status }}</span>

                            <!-- No live chip - removed everywhere by the
                                 user's direct instruction (Part G.2). The
                                 transport still runs; messages still arrive. -->
                        </p>
                    </div>
                </header>

                <div
                    ref="scroller"
                    class="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-4"
                >
                    <div
                        v-for="m in visibleMessages"
                        :key="m.id"
                        class="flex"
                        :class="
                            m.direction === 'outgoing'
                                ? 'justify-end'
                                : 'justify-start'
                        "
                    >
                        <div
                            class="max-w-[75%] rounded-2xl px-3 py-2 text-sm"
                            :class="
                                m.direction === 'outgoing'
                                    ? 'rounded-br-sm bg-primary text-primary-foreground'
                                    : 'rounded-bl-sm bg-muted'
                            "
                        >
                            <p class="whitespace-pre-line">{{ m.body }}</p>
                            <p
                                class="mt-0.5 text-[10px]"
                                :class="
                                    m.direction === 'outgoing'
                                        ? 'text-primary-foreground/70'
                                        : 'text-muted-foreground'
                                "
                            >
                                {{ m.at }}
                            </p>
                        </div>
                    </div>
                </div>

                <form
                    class="flex items-center gap-2 border-t p-3"
                    @submit.prevent="send"
                >
                    <input
                        v-model="draft"
                        type="text"
                        maxlength="2000"
                        class="min-w-0 flex-1 rounded-full border bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                        placeholder="Write a message…"
                    />
                    <button
                        type="submit"
                        class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                        :disabled="sending || !draft.trim()"
                        aria-label="Send"
                    >
                        <Send class="size-4" />
                    </button>
                </form>
            </template>
        </section>
    </div>
</template>
