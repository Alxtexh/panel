<script setup lang="ts">
/**
 * One conversation, as its own page.
 *
 * A THREAD IS A STACK OF MESSAGES, not a body. The list collapses a
 * conversation to its newest message; opening it has to expand it again, or the
 * reply the list counted is nowhere to be found.
 *
 * EACH MESSAGE CARRIES ITS OWN HEADER - who sent it, to whom, when - because
 * the direction alternates. A single header at the top is only correct for a
 * thread of one, which is precisely the case that does not need a thread view.
 */
import { Head, Link, router } from '@inertiajs/vue3';
import {
    ArrowLeft,
    Bookmark,
    ChevronDown,
    CornerUpLeft,
    EllipsisVertical,
    Forward,
    Paperclip,
    Star,
} from '@lucide/vue';
import { ref } from 'vue';

interface Message {
    id: number;
    from: string;
    email: string;
    to: string | null;
    toEmail: string | null;
    body: string;
    attachment: boolean;
    at: string | null;
}

const props = defineProps<{
    thread: {
        id: number;
        subject: string;
        category: string | null;
        folder: string;
        starred: boolean;
        important: boolean;
        count: number;
    };
    messages: Message[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Mail', href: '/apps/mail' },
            { title: 'Detail', href: '' },
        ],
    },
});

const starred = ref(props.thread.starred);
const important = ref(props.thread.important);

/** Which messages have their recipient line expanded. */
const expanded = ref<Set<number>>(new Set());

function initials(name: string): string {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]!.toUpperCase())
        .join('');
}

function toggleDetails(id: number) {
    const next = new Set(expanded.value);

    if (next.has(id)) {
        next.delete(id);
    } else {
        next.add(id);
    }

    expanded.value = next;
}

function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);

    return match ? decodeURIComponent(match[1]) : '';
}

/** Optimistic, with the server as the record - same reasoning as the list. */
async function act(action: string, folder?: string) {
    if (action === 'star') {
        starred.value = true;
    }

    if (action === 'unstar') {
        starred.value = false;
    }

    if (action === 'important') {
        important.value = true;
    }

    if (action === 'unimportant') {
        important.value = false;
    }

    await fetch(`/apps/mail/${props.thread.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': csrf(),
        },
        credentials: 'same-origin',
        body: JSON.stringify({ action, folder }),
    });

    // A move takes the thread out of the folder it was opened from, so there is
    // nothing left on this page to look at.
    if (action === 'move') {
        router.visit('/apps/mail');
    }
}
</script>

<template>
    <Head :title="thread.subject" />

    <div
        class="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border bg-card"
    >
        <header class="flex items-start gap-3 border-b p-4">
            <Link
                href="/apps/mail"
                class="mt-0.5 rounded-md p-1.5 hover:bg-accent"
                aria-label="Back to mail"
            >
                <ArrowLeft class="size-4" />
            </Link>

            <div class="min-w-0 flex-1">
                <h1 class="truncate text-base font-semibold">
                    {{ thread.subject }}
                </h1>
                <p class="text-xs text-muted-foreground">
                    {{ thread.count }}
                    {{ thread.count === 1 ? 'message' : 'messages' }}
                </p>
            </div>

            <div class="flex shrink-0 items-center gap-1">
                <button
                    type="button"
                    class="rounded-md p-1.5 hover:bg-accent"
                    :aria-label="starred ? 'Unstar' : 'Star'"
                    @click="act(starred ? 'unstar' : 'star')"
                >
                    <Star
                        class="size-4"
                        :class="starred ? 'fill-amber-400 text-amber-400' : ''"
                    />
                </button>

                <button
                    type="button"
                    class="rounded-md p-1.5 hover:bg-accent"
                    :aria-label="
                        important ? 'Remove from important' : 'Mark important'
                    "
                    @click="act(important ? 'unimportant' : 'important')"
                >
                    <Bookmark
                        class="size-4"
                        :class="important ? 'fill-primary text-primary' : ''"
                    />
                </button>

                <button
                    type="button"
                    class="rounded-md p-1.5 hover:bg-accent hover:text-destructive"
                    aria-label="Move to trash"
                    @click="act('move', 'trash')"
                >
                    <EllipsisVertical class="size-4" />
                </button>
            </div>
        </header>

        <div class="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
            <article
                v-for="(message, index) in messages"
                :key="message.id"
                class="overflow-hidden rounded-xl border"
            >
                <div class="flex items-start gap-3 p-4">
                    <span
                        class="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-muted-foreground"
                    >
                        {{ initials(message.from) }}
                    </span>

                    <div class="min-w-0 flex-1">
                        <div class="flex flex-wrap items-baseline gap-x-2">
                            <span class="text-sm font-semibold">{{
                                message.from
                            }}</span>
                            <span
                                class="truncate text-xs text-muted-foreground"
                            >
                                &lt;{{ message.email }}&gt;
                            </span>
                        </div>

                        <button
                            type="button"
                            class="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground"
                            :aria-expanded="expanded.has(message.id)"
                            @click="toggleDetails(message.id)"
                        >
                            to {{ message.to ?? 'me' }}
                            <ChevronDown
                                class="size-3 transition-transform"
                                :class="
                                    expanded.has(message.id) ? 'rotate-180' : ''
                                "
                            />
                        </button>

                        <dl
                            v-if="expanded.has(message.id)"
                            class="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-xs text-muted-foreground"
                        >
                            <dt class="text-right">from:</dt>
                            <dd>
                                {{ message.from }} &lt;{{ message.email }}&gt;
                            </dd>
                            <dt class="text-right">to:</dt>
                            <dd>
                                {{ message.to }} &lt;{{ message.toEmail }}&gt;
                            </dd>
                            <dt class="text-right">date:</dt>
                            <dd>{{ message.at }}</dd>
                        </dl>
                    </div>

                    <div class="flex shrink-0 items-center gap-2">
                        <span
                            class="text-xs whitespace-nowrap text-muted-foreground"
                            >{{ message.at }}</span
                        >
                        <button
                            type="button"
                            class="rounded-md p-1.5 hover:bg-accent"
                            aria-label="Reply"
                        >
                            <CornerUpLeft class="size-4" />
                        </button>
                    </div>
                </div>

                <div class="border-t p-4">
                    <p class="text-sm leading-relaxed whitespace-pre-line">
                        {{ message.body }}
                    </p>

                    <p
                        v-if="message.attachment"
                        class="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                        <Paperclip class="size-3.5" />
                        1 attachment
                    </p>

                    <!-- Only the last message gets the reply controls: repeating
                         them on every card asks the reader to work out which one
                         they are answering. -->
                    <div
                        v-if="index === messages.length - 1"
                        class="mt-4 flex gap-2"
                    >
                        <button
                            type="button"
                            class="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm hover:bg-accent"
                        >
                            <CornerUpLeft class="size-3.5" />
                            Reply
                        </button>
                        <button
                            type="button"
                            class="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm hover:bg-accent"
                        >
                            <Forward class="size-3.5" />
                            Forward
                        </button>
                    </div>
                </div>
            </article>
        </div>

        <footer class="border-t p-4">
            <button
                type="button"
                class="flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm hover:bg-accent"
            >
                <CornerUpLeft class="size-4" />
                Reply
            </button>
        </footer>
    </div>
</template>
